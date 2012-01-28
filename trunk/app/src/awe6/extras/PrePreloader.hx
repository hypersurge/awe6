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

package awe6.extras;
import awe6.core.Encrypter;
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.display.Sprite;
import flash.display.Stage;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.ProgressEvent;
import flash.Lib;
import flash.net.URLLoader;
import flash.net.URLLoaderDataFormat;
import flash.net.URLRequest;
import flash.system.ApplicationDomain;
import flash.system.LoaderContext;
import flash.system.SecurityDomain;
import flash.text.TextField;
import haxe.io.Bytes;
import haxe.io.BytesData;

/**
 * The PrePreloader class provides a simple loader to show progress as the Main application loads (prior to preloader displaying).
 * <p>This class is intended to be compiled directly rather than included in any project.</p>
 * <p>By default this class provides basic obfuscation, but even basic common sense can reveal the secret key.  To avoid exposing the key see notes below ...</p>
 * @author	Robert Fell
 */
class PrePreloader extends Sprite
{
	public static var _isExisting:Bool;
	private static var _SECRET:String;
	private static inline var _IS_DECACHED = false;
	private static inline var _GAME_URL = "game.swf";
	private static inline var _BG_COLOR = 0xFFFFFF;
	
	private var _isDecached:Bool;
	private var _url:String;
	private var _bgColor:Int;
	private var _isLocal:Bool;
	private var _stage:Stage;
	private var _encrypter:Encrypter;
	private var _loader:Loader;
	private var _urlLoader:URLLoader;
	private var _loaderContext:LoaderContext;
	private var _textField:TextField;
	private var _progressBar:Sprite;
	private var _progressBarLine:Sprite;
	private var _progressBarBg:Sprite;

	public function new() 
	{
		_isExisting = true;
		// security tip #1: the secret must not be inlined, it must be referenced from data outside of the actionscript code.  I can't tell you how exactly else it wouldn't be as "secure".  Security through vagueness ;-)
		_SECRET = "ThereAreWaysToConcealThis";
		super();
		_stage = Lib.current.stage;
		var l_loaderInfo:LoaderInfo = Lib.current.loaderInfo;
		_isDecached = ( ( l_loaderInfo != null ) && untyped l_loaderInfo.parameters.isDecached != null ) ? Std.string( untyped l_loaderInfo.parameters.isDecached ) == "true" : _IS_DECACHED;
		_url = ( ( l_loaderInfo != null ) && untyped l_loaderInfo.parameters.gameUrl != null ) ? untyped l_loaderInfo.parameters.gameUrl : _GAME_URL;
		_bgColor = ( ( l_loaderInfo != null ) && untyped l_loaderInfo.parameters.bgColor != null ) ? cast "0x" + untyped l_loaderInfo.parameters.bgColor : _BG_COLOR;
		_isLocal = flash.system.Security.sandboxType != flash.system.Security.REMOTE;
		_init();
	}
	
	private function _init():Void
	{
		_encrypter = new Encrypter( _SECRET );
		_stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		_loaderContext = new LoaderContext();
		_loaderContext.applicationDomain = ApplicationDomain.currentDomain;
		var l_url:String = _url;
		if ( _isDecached )
		{
			l_url += "?dc=" + Std.random( 99999 );
		}
		_loader = new Loader();
		addChild( _loader );
		_urlLoader = new URLLoader();
		_urlLoader.dataFormat = URLLoaderDataFormat.BINARY;
		_urlLoader.load( new URLRequest( l_url ) );
		_urlLoader.addEventListener( IOErrorEvent.IO_ERROR, _onError );
		_urlLoader.addEventListener( ProgressEvent.PROGRESS, _onProgress );		
		_urlLoader.addEventListener( Event.COMPLETE, _onComplete );
		graphics.beginFill( _bgColor );
		graphics.drawRect( 0, 0, _stage.stageWidth, _stage.stageHeight );
		var l_color:Int = _bgColor < 0x808080 ? 0xFFFFFF : 0x000000;
		_progressBar = new Sprite();
		_progressBarLine = new Sprite();
		_progressBarLine.graphics.beginFill( l_color, .75 );
		_progressBarLine.graphics.drawRect( 0, 0, 20, 2 );
		_progressBar.addChild( _progressBarLine );
		_progressBarBg = new Sprite();
		_progressBarBg.graphics.beginFill( l_color, .5 );
		_progressBarBg.graphics.drawRect( 0, 0, _progressBarLine.width + 1, _progressBarLine.height + 1 );
		_progressBar.addChild( _progressBarBg );
		_progressBar.x = ( _stage.stageWidth - _progressBar.width ) / 2;
		_progressBar.y = ( _stage.stageHeight - _progressBar.height ) / 2;
		_progressBarLine.scaleX = 0;
		addChild( _progressBar );
	}
	
	private function _onError( p_event:IOErrorEvent ):Void
	{
		if ( _textField == null )
		{
			_textField = new TextField();
			_textField.text = "IO Errors Occurred During Asset Preloading:\n\n";
			_textField.multiline = true;
			_textField.wordWrap = true;
			_textField.textColor = 0xFF0000;
			_textField.width = _stage.stageWidth - 100;
			_textField.height = _stage.stageHeight - 100;
			_textField.x = ( _stage.stageWidth - _textField.width ) / 2;
			_textField.y = ( _stage.stageHeight - _textField.height ) / 2;
			addChild( _textField );
		}
		_textField.text += p_event.text + "\n\n";
	}
	
	private function _onComplete( p_event:Event ):Void
	{
		_urlLoader.removeEventListener( IOErrorEvent.IO_ERROR, _onError );
		_urlLoader.removeEventListener( ProgressEvent.PROGRESS, _onProgress );
		_urlLoader.removeEventListener( Event.COMPLETE, _onComplete );
		var l_data:BytesData = _urlLoader.data;
		// security tip #2: this next line is to make things user friendly - this prepreloader can load in an encrypted or unaltered swf.  That's risky, because a spoofed, unaltered swf could be loaded (who's purpose is only to reveal the secret).  So the next line must become: var l_isOriginal:Bool = false; and, correspondingly, the loaded game must be encrypted.
		var l_isOriginal:Bool = ( ( l_data.readByte() == 67 ) && ( l_data.readByte() == 87 ) && ( l_data.readByte() == 83 ) );
		_loader.loadBytes( l_isOriginal ? _urlLoader.data : _encrypter.decrypt( Bytes.ofData( cast _urlLoader.data ) ).getData(), _loaderContext );		
		removeChild( _progressBar );
	}
	
	private function _onProgress( ?p_event:ProgressEvent ):Void
	{
		var l_perc:Float = p_event.bytesLoaded / p_event.bytesTotal;
		_progressBarLine.scaleX = l_perc;
	}
	
	static function main()
	{
		if ( !_isExisting )
		{
			Lib.current.addChild( new PrePreloader() );
		}
	}
	
}