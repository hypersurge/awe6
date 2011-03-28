/*
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
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.display.Sprite;
import flash.display.Stage;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.ProgressEvent;
import flash.Lib;
import flash.net.URLRequest;
import flash.system.ApplicationDomain;
import flash.system.LoaderContext;
import flash.system.SecurityDomain;
import flash.text.TextField;

/**
 * The PrePreloader class provides a simple loader to show progress as the Main application loads (prior to preloader displaying).
 * <p>This class is intended to be compiled directly rather than included in any project.</p>
 * @author	Robert Fell
 */
class PrePreloader extends Sprite
{
	private static inline var _IS_DECACHED = false;
	private static inline var _GAME_URL = "game.swf";
	private static inline var _BG_COLOR = 0xFFFFFF;
	
	private var _isDecached:Bool;
	private var _url:String;
	private var _bgColor:UInt;
	private var _isLocal:Bool;
	private var _stage:Stage;
	private var _loader:Loader;
	private var _context:LoaderContext;
	private var _textField:TextField;
	private var _progressBar:Sprite;
	private var _progressBarLine:Sprite;
	private var _progressBarBg:Sprite;

	public function new() 
	{
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
		_stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		_context = new LoaderContext();
		_context.applicationDomain = ApplicationDomain.currentDomain;
		if ( !_isLocal ) _context.securityDomain = SecurityDomain.currentDomain;
		var l_url:String = _url;
		if ( _isDecached ) l_url += "?dc=" + Std.random( 99999 );
		_loader = new Loader();
		_loader.load( new URLRequest( l_url ), _context );
		_loader.contentLoaderInfo.addEventListener( IOErrorEvent.IO_ERROR, _onError );
		_loader.contentLoaderInfo.addEventListener( ProgressEvent.PROGRESS, _onProgress );		
		_loader.contentLoaderInfo.addEventListener( Event.COMPLETE, _onComplete );
		addChild( _loader );
		
		graphics.beginFill( _bgColor );
		graphics.drawRect( 0, 0, _stage.stageWidth, _stage.stageHeight );
		var l_color:UInt = _bgColor < 0x808080 ? 0xFFFFFF : 0x000000;
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
	
	private function _onError( event:IOErrorEvent ):Void
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
		_textField.text += event.text + "\n\n";
	}
	
	private function _onComplete( event:Event ):Void
	{
		cast( event.target, LoaderInfo ).removeEventListener( IOErrorEvent.IO_ERROR, _onError );
		cast( event.target, LoaderInfo ).removeEventListener( ProgressEvent.PROGRESS, _onProgress );
		cast( event.target, LoaderInfo ).removeEventListener( Event.COMPLETE, _onComplete );
		removeChild( _progressBar );
	}
	
	private function _onProgress( ?event:ProgressEvent ):Void
	{
		var l_loaderInfo:LoaderInfo = cast( event.target, LoaderInfo );
		var l_perc:Float = l_loaderInfo.bytesLoaded / l_loaderInfo.bytesTotal;
		_progressBarLine.scaleX = l_perc;
	}
	
	static function main()
	{
		Lib.current.addChild( new PrePreloader() );
	}
	
}