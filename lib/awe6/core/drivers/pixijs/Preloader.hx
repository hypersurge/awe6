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

package awe6.core.drivers.pixijs;
import awe6.core.drivers.APreloader;
import haxe.Timer;
import js.html.Event;
import pixi.loaders.Loader;

/**
 * This Preloader class provides PixiJS target overrides.
 * @author	Robert Fell
 */
class Preloader extends APreloader
{
	private static inline var _CONFIG_AUDIO_HOLD_DELAY = "settings.audioHoldDelay";
	private static inline var _ATTRIBUTE_AUDIO_HOLD_DELAY = "audioHoldDelay";
	
	private var _context:Context;
	private var _system:System;
	private var _isDesktop:Bool;
	private var _loader:Loader;
	private var _validSoundFormat:String;
	private var _manifest:Array<Dynamic>;
	private var _isFastTestMode:Bool; // if true then audio asset loading is disabled, XHR loading is disabled
	private var _isSoundDisabled:Bool; // if true then audio asset loading is disabled
	private var _proprietaryAudioFormat:String; // this format is used if ogg is not supported - defaults to mp3, but can be overridden to mpeg, wav, m4a, mp3, mp4, aiff, wma, mid (if things don't work, double check your serer mime-types - e.g. audio/mp4 m4a)
	private var _audioHoldDelay:Int; // the time to wait for a touch event to enable audio (override to -1 for indefinite, or set in config)
	private var _completedDelay:Int; // to measure time waiting for audio touch event
	
	override private function _init():Void
	{
		_context = new Context();
		view = new View( _kernel, _context );
		super._init();
		_system = untyped _kernel.system;
		_isDesktop = _system.isDesktop;
		_audioHoldDelay = _getAudioHoldDelay();
		_completedDelay = 0;
		var l_dc:String = ( _isDecached ? "?dc=" + Std.random( 999999 ) : "" );
		var l_audioFormats:Array<String> = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
		if ( ( _proprietaryAudioFormat == null ) || ( _proprietaryAudioFormat == "" ) || ( !Lambda.has( l_audioFormats, _proprietaryAudioFormat ) ) )
		{
			_proprietaryAudioFormat = "mp3"; // we default to mp3 to reduce the need for server mime-type configuration, however m4a is our suggested proprietary format (less restrictive licensing, better looping, smaller filesize)
		}
		//https://github.com/kittykatattack/learningPixi
		_loader = new Loader( "", 10 );
		for ( i in _assets )
		{
			_loader.add( i, "as" + i + l_dc );
		}
		Timer.delay( _loader.load.bind( _onComplete ), 200 ); // allows time to display preloader
	}
	
	override private function _next():Void
	{
		// intentionally resets contents of super._next (not appropriate for this driver)
	}
	
	override private function get_progress():Float
	{
		return _loader.progress;
	}
	
	private function _onComplete( ?p_event:Event ):Void
	{
		if ( _isComplete ) return;
		_isComplete = true;
		AssetManager.loader = _loader; // static handshake to exchange the loadQueue
		_completedDelay = _audioHoldDelay; // we'll subtract p_deltaTime from this until it's time to call _continue
		if ( _audioHoldDelay != 0 )
		{
			_showAudioHoldMessage();
		}
	}
	
	// everything is loaded, override this with a display message or similar
	private function _showAudioHoldMessage():Void
	{
	}
	
	override function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( !_isComplete ) return;
		_completedDelay -= p_deltaTime;
		if ( ( ( _audioHoldDelay >= 0 ) && ( _completedDelay <= 0 ) ) || _kernel.inputs.keyboard.getIsKeyRelease( _kernel.factory.keyNext ) || _kernel.inputs.mouse.getIsButtonRelease() )
		{
			_assets = []; // a trick to call onPreloaderComplete next update
		}
	}
	
	private function _getIsStockAndroidBrowser():Bool
	{
		// reference: http://stackoverflow.com/questions/14403766/how-to-detect-the-stock-android-browser
		var l_isAndroidMobile = ( _system.userAgent.indexOf( "Android" ) > -1 ) && ( _system.userAgent.indexOf( "Mozilla/5.0" ) > -1 ) && ( _system.userAgent.indexOf( "AppleWebKit" ) > -1 );
		var l_regExpAppleWebKit = ~/AppleWebKit\/([\d.]+)/;
		var l_isAppleWebKit = l_regExpAppleWebKit.match( _system.userAgent );
		var l_appleWebKitVersion = !l_isAppleWebKit ? 0 : Std.parseFloat( l_regExpAppleWebKit.matched( 1 ) );
		var l_regExpChrome = ~/Chrome\/([\d.]+)/;
		var l_isChrome = l_regExpChrome.match( _system.userAgent );
		var l_chromeVersion = !l_isChrome ? 0 : Std.parseFloat( l_regExpChrome.matched( 1 ) );
		return l_isAndroidMobile && ( ( l_isAppleWebKit && ( l_appleWebKitVersion < 537 ) ) || ( l_isChrome && ( l_chromeVersion < 37 ) ) );
	}
	
	private function _getAudioHoldDelay():Int
	{
		if ( _isSoundDisabled ) // no sound, no need for delay
		{
			return 0;
		}
		if ( !_system.isIos ) // only iOS needs the touch action
		{
			return 0;
		}
		var l_result:Int = -1; // by default wait forever
		if ( _kernel.factory.config.exists( _CONFIG_AUDIO_HOLD_DELAY ) )
		{
			l_result = Std.parseInt( _kernel.factory.config.get( _CONFIG_AUDIO_HOLD_DELAY ) );
		}
		try
		{
			var l_attribute:String = untyped _kernel.factory._context.getStage().canvas.getAttribute( _ATTRIBUTE_AUDIO_HOLD_DELAY );
			if ( ( l_attribute != null ) && ( l_attribute != "" ) )
			{
				l_result = Std.parseInt( l_attribute );
			}
		}
		catch ( p_error:Dynamic ) { }
		return l_result;
	}
}