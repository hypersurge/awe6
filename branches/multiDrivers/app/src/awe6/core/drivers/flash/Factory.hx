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
import awe6.core.Context;
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
	
	private var _context:Context;
	private var _countConfigsLoaded:Int;
	private var _countConfigsToLoad:Int;	
	
	public function new( context:Context, isDebug:Bool = true, ?configUrl:String )
	{
		_context = new Context();
		context.addChild( _context );
		_countConfigsLoaded = 0;
		_countConfigsToLoad = 0;		
		super( isDebug, configUrl );
	}
	
	override private function _nativeInit():Void
	{
		if ( _context.stage != null )
		{
			_hasStage();
		}
		else
		{
			_context.addEventListener( Event.ADDED_TO_STAGE, _hasStage );
		}		
	}
	
	private function _hasStage( ?event:Event ):Void
	{
		_context.removeEventListener( Event.ADDED_TO_STAGE, _hasStage );
		_init();
		if ( _isConfigRequired )
		{
			var l_url:String = ( _configUrl != null ) ? _configUrl : _CONFIG_URL;
			if ( ( _context.loaderInfo != null ) && untyped _context.loaderInfo.parameters.configUrl != null )
			{
				l_url = untyped _context.loaderInfo.parameters.configUrl;
			}
			_loadConfig( l_url );
		}
		else
		{
			_launchKernel();		
		}
	}	
	
	private function _loadConfig( url:String ):Void
	{
		if ( url.substr( 0, 5 ) == "<?xml" )
		{
			_parseXml( url );
		}
		else
		{
			if ( isDecached )
			{
				url += "?dc=" + Std.random( 99999 );
			}
			// trace( "Loading Config: \"" + url + "\"" );		
			var l_loader:URLLoader = new URLLoader( new URLRequest( url ) );
			l_loader.addEventListener( IOErrorEvent.IO_ERROR, _onIOError );
			l_loader.addEventListener( Event.COMPLETE, _onComplete );
			_countConfigsToLoad++;
		}
	}
	
	private function _parseXml( data:String ):Void
	{
		_traverseElements( Xml.parse( data ).firstElement().elements(), "" );
		if ( config.exists( _CONFIG_JOIN_NODE ) && ( _countConfigsLoaded < 100 ) )
		{
			var l_url:String = config.get( _CONFIG_JOIN_NODE );
			config.remove( _CONFIG_JOIN_NODE );
			var l_urls:Array<String> = l_url.split( "," );
			for ( i in l_urls )
			{
				_loadConfig( i );
			}
			return;
		}
		if ( _countConfigsLoaded == _countConfigsToLoad )
		{
			_launchKernel();
		}
	}	
	
	private function _onIOError( event:IOErrorEvent ):Void
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
		l_textField.text += event.text + "\n\n";
		_context.addChild( l_textField );
	}	
	
	private function _onComplete( event:Event ):Void
	{
		_countConfigsLoaded++;
		var l_string:String = event.target.data;
		if ( l_string.substr( 0, 5 ) != "<?xml" )
		{
			l_string = createEncrypter().decrypt( Bytes.ofString( l_string ) ).toString();
		}
		_parseXml( l_string );
	}
	
	override private function _nativeLaunchKernel():Kernel
	{
		return new Kernel( this, _context );
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