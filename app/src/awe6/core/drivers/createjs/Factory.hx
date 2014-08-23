/*
 *                        _____ 
 *     _____      _____  / ___/
 *    /__   | /| /   _ \/ __ \ 
 *   / _  / |/ |/ /  __  /_/ / 
 *   \___/|__/|__/\___/\____/  
 *    awe6 is game, inverted
 * 
 * Copyright (c) 2010, Robert Fell, awe6.org
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

package awe6.core.drivers.createjs;
import awe6.core.Context;
import awe6.core.drivers.AFactory;
import awe6.core.Macros;
import haxe.Http;
import haxe.io.Bytes;

/**
 * This Factory class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Factory extends AFactory
{
	private static inline var _CONFIG_ASCII_ART = "settings.asciiArt";
	private static inline var _CONFIG_URL = "assets/__config.xml";
	private static inline var _CONFIG_JOIN_NODE = "settings.joinXml";
	private static inline var _CONFIG_FULL_SCREEN = "settings.fullScreen"; // none, desktop, mobile, all, default [desktop true, mobile false]
	private static inline var _ATTRIBUTE_CONFIG = "config";
	private static inline var _ATTRIBUTE_FULL_SCREEN = "fullScreen";
	
	private var _countConfigsLoaded:Int;
	private var _countConfigsToLoad:Int;

	override private function _driverInit():Void
	{
		var l_context = new Context();
		_context.addChild( l_context );
		_context = l_context;
		_countConfigsLoaded = 0;
		_countConfigsToLoad = 0;
		if ( _config != "" )
		{
			var l_config:String = ( _config != null ) ? _config : _CONFIG_URL;
			var l_configAttribute:String = _context.getStage().canvas.getAttribute( _ATTRIBUTE_CONFIG );
			if ( l_configAttribute != null )
			{
				l_config = l_configAttribute;
			}
			_loadConfig( l_config );
		}
		else
		{
			_launchKernel();
		}
	}
	
	override private function _launchKernel():Void 
	{
		_displayCredits();
		super._launchKernel();
		var l_isDesktop:Bool = _concreteKernel.system.isDesktop;
		var l_fullScreenValue:String = "mobile";
		if ( config.exists( _CONFIG_FULL_SCREEN ) )
		{
			l_fullScreenValue = config.get( _CONFIG_FULL_SCREEN );
		}
		var l_fullScreenAttribute:String = _context.getStage().canvas.getAttribute( _ATTRIBUTE_FULL_SCREEN );
		if ( l_fullScreenAttribute != null )
		{
			l_fullScreenValue = l_fullScreenAttribute;
		}
		_kernel.isFullScreen = ( l_isDesktop && ( ( l_fullScreenValue == "desktop" ) || ( l_fullScreenValue == "all" ) ) ) || ( !l_isDesktop && ( ( l_fullScreenValue == "mobile" ) || ( l_fullScreenValue == "all" ) || ( l_fullScreenValue == "default" ) ) );
	}
	
	private function _displayCredits():Void
	{
		trace( config.exists( _CONFIG_ASCII_ART ) ? config.get( _CONFIG_ASCII_ART ) : "" );
		trace( id + " v" + version + " by " + author );
		trace( "Powered by awe6 (http://awe6.org)" );
		trace( "" );
	}

	private function _loadConfig( p_config:String ):Void
	{
		if ( p_config.substr( 0, 5 ) == "<?xml" )
		{
			// trace( "passed as xml" );
			_parseXml( p_config );
		}
		else
		{
			if ( isDecached )
			{
				p_config += "?dc=" + Std.random( 99999 );
			}
			// trace( "Loading Config: \"" + p_config + "\"" );
			var l_loader:Http = new Http( p_config );
			try
			{
				l_loader.onError = _onIOError;
				l_loader.onData = _onComplete;
				l_loader.request();
			}
			catch ( p_error:Dynamic )
			{
				trace( "Local file loading of config is a security risk.  Try a local webserver, or embedding the config using haxe.Resource" );
			}
			_countConfigsToLoad++;
		}
	}
	
	private function _parseXml( p_data:String ):Void
	{
		_traverseElements( Xml.parse( p_data ).firstElement().elements(), "" );
		if ( config.exists( _CONFIG_JOIN_NODE ) && ( _countConfigsLoaded < 100 ) )
		{
			var l_url:String = config.get( _CONFIG_JOIN_NODE );
			config.remove( _CONFIG_JOIN_NODE );
			var l_urls:Array<String> = l_url.split( "," );
			for ( i in l_urls )
			{
				_loadConfig( i );
			}
		}
		if ( _countConfigsLoaded == _countConfigsToLoad )
		{
			_launchKernel();
		}
	}
	
	private function _onIOError( p_event:String ):Void
	{
		trace( "IO Errors Occurred During Config Loading:" + p_event );
	}
	
	private function _onComplete( p_event:String ):Void
	{
		_countConfigsLoaded++;
		var l_string:String = p_event;
		if ( l_string.substr( 0, 5 ) != "<?xml" )
		{
			l_string = createEncrypter().decrypt( Bytes.ofString( l_string ) ).toString();
		}
		_parseXml( l_string );
	}
	
	override private function _getAssetUrls():Array<String>
	{
		var l_result = Macros.getFolderContents( "bin/assets/", true, "bin/", "createjs.min.js\ngame.js\n" ); // has to be hardwired for macro - consider appcache isn't always favorable because of needing to cache all the files, rather than a subset (e.g. audio formats).  It can slow things down, and doesn't work for audio on iOS anyway.
		var l_toRemove:Array<String> = [];
		for ( i in 0...l_result.length )
		{
			l_result[i] = l_result[i].substr( 4 ); // remove the "bin/" from hardwire
			if ( ( l_result[i].substr( 0, 2 ) == "__" ) || ( l_result[i].indexOf( "/__" ) > -1 ) )
			{
				l_toRemove.push( l_result[i] );
			}
		}
		for ( i in l_toRemove )
		{
			l_result.remove( i );
		}
		return l_result;
	}

	override private function _driverDisposer():Void
	{
		if ( _context.parent != null )
		{
			_context.parent.removeChild( _context );
		}
	}
	
}
