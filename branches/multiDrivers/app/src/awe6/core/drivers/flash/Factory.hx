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


package awe6.core.drivers.flash;
import awe6.core.drivers.AFactory;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.text.TextField;
import haxe.io.Bytes;

/**
 * This Factory class provides flash target overrides.
 * @author	Robert Fell
 */
class Factory extends AFactory
{
	private static inline var _CONFIG_URL = "config.xml";
	private static inline var _CONFIG_JOIN_NODE = "settings.joinXml";
	
	private var _countConfigsLoaded:Int;
	private var _countConfigsToLoad:Int;
	
	override private function _nativeInit():Void
	{
		var l_context = new Context();
		_context.addChild( l_context );
		_context = l_context;
		_countConfigsLoaded = 0;
		_countConfigsToLoad = 0;
		if ( _context.stage != null )
		{
			_hasStage();
		}
		else
		{
			_context.addEventListener( Event.ADDED_TO_STAGE, _hasStage );
		}
	}
	
	private function _hasStage( ?p_event:Event ):Void
	{
		_context.removeEventListener( Event.ADDED_TO_STAGE, _hasStage );
		if ( _config != "" )
		{
			var l_config:String = ( _config != null ) ? _config : _CONFIG_URL;
			if ( ( _context.loaderInfo != null ) && untyped _context.loaderInfo.parameters.configUrl != null )
			{
				l_config = untyped _context.loaderInfo.parameters.configUrl;
			}
			_loadConfig( l_config );
		}
		else
		{
			_configure();
			_launchKernel();
		}
	}
	
	private function _loadConfig( p_config:String ):Void
	{
		if ( p_config.substr( 0, 5 ) == "<?xml" )
		{
			_parseXml( p_config );
		}
		else
		{
			if ( isDecached )
			{
				p_config += "?dc=" + Std.random( 99999 );
			}
			// trace( "Loading Config: \"" + url + "\"" );
			var l_loader:URLLoader = new URLLoader( new URLRequest( p_config ) );
			l_loader.addEventListener( IOErrorEvent.IO_ERROR, _onIOError );
			l_loader.addEventListener( Event.COMPLETE, _onComplete );
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
			_configure();
			_launchKernel();
		}
	}
	
	private function _onIOError( p_event:IOErrorEvent ):Void
	{
		var l_textField:TextField = new TextField();
		l_textField.text = "IO Errors Occurred During Config Loading:\n\n".toUpperCase();
		l_textField.multiline = true;
		l_textField.wordWrap = true;
		l_textField.textColor = 0xFF0000;
		l_textField.width = width - 100;
		l_textField.height = height - 100;
		l_textField.x = ( width - l_textField.width ) / 2;
		l_textField.y = ( height - l_textField.height ) / 2;
		l_textField.text += p_event.text + "\n\n";
		_context.addChild( l_textField );
	}
	
	private function _onComplete( p_event:Event ):Void
	{
		_countConfigsLoaded++;
		var l_string:String = p_event.target.data;
		if ( l_string.substr( 0, 5 ) != "<?xml" )
		{
			l_string = createEncrypter().decrypt( Bytes.ofString( l_string ) ).toString();
		}
		_parseXml( l_string );
	}
	
	override private function _nativeDisposer():Void
	{
		_context.removeEventListener( Event.ADDED_TO_STAGE, _hasStage );
		if ( _context.parent != null )
		{
			_context.parent.removeChild( _context );
		}
	}
	
}
