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
import awe6.core.drivers.APreloader;
import createjs.easeljs.Event;
import createjs.preloadjs.LoadQueue;
import createjs.soundjs.Sound;
import haxe.Timer;

/**
 * This Preloader class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Preloader extends APreloader
{
	private var _loadQueue:LoadQueue;
	private var _context:Context;
	private var _activePlugin:Dynamic;
	private var _validSoundFormat:String;
	private var _manifest:Array<Dynamic>;
	private var _isFastTestMode:Bool; // if true then audio asset loading is disabled, XHR loading is disabled
	private var _isSoundDisabled:Bool; // if true then audio asset loading is disabled
	private var _isDesktop:Bool;
	private var _proprietaryAudioFormat:String; // this format is used if ogg is not supported - defaults to mp3, but can be overridden to mpeg, wav, m4a, mp3, mp4, aiff, wma, mid (if things don't work, double check your serer mime-types - e.g. audio/mp4 m4a)
	private var _system:System;
	
	override private function _init():Void
	{
		super._init();
		_system = untyped _kernel.system;
		var l_audioFormats:Array<String> = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
		if ( ( _proprietaryAudioFormat == null ) || ( _proprietaryAudioFormat == "" ) || ( !Lambda.has( l_audioFormats, _proprietaryAudioFormat ) ) )
		{
			_proprietaryAudioFormat = "mp3"; // we default to mp3 to reduce the need for server mime-type configuration, however m4a is our suggested proprietary format (less restrictive licensing, better looping, smaller filesize)
		}
		_context = new Context();
		_isDesktop = true;
		try
		{
			_isDesktop = _system.isDesktop;
		}
		catch ( p_error:Dynamic ) {}
		view = new View( _kernel, _context );
		// we push valid sounds to manifest
		var l_soundAssets:Array<String> = [];
		_manifest = [];
		if ( Sound.initializeDefaultPlugins() )
		{
			var l_isSoundDisabled:Bool = _isSoundDisabled || ( _system.isAndroid && !( ~/Chrome/.match( _system.userAgent ) || ~/Firefox/.match( _system.userAgent ) || _system.isCocoonjs ) ); // Android (non Chrome) has slow loading audio that doesn't play without user initiated event, hence disabled.  Chrome is default from Android 4.3+
			_validSoundFormat = Sound.getCapability( "ogg" ) ? "ogg" : Sound.getCapability( _proprietaryAudioFormat ) ? _proprietaryAudioFormat : "noValidFormat"; // favor .ogg with fallback to _proprietaryAudioFormat (IE & Safari don't do ogg, boo!)
			_activePlugin = Sound.activePlugin;
			for ( i in _assets )
			{
				var l_extension:String = i.substr( -3 );
				if ( Lambda.has( l_audioFormats, l_extension ) )
				{
					l_soundAssets.push( i );
					if ( !l_isSoundDisabled && ( l_extension == _validSoundFormat ) )
					{
						var l_id:String = "assets.audio." + i.split( "/" ).pop().substr( 0, -4 );
						if ( !_isFastTestMode )
						{
							_manifest.push( { src:i, id:l_id } ); // comment this one for silence
						}
					}
				}
			}
		}
		// we drop all sounds from _assets (valid ones are already preloading via registerSound)
		for ( i in l_soundAssets )
		{
			_assets.remove( i );
		}
		// we load _assets, and add the manifest
		_loadQueue = new LoadQueue( !_kernel.isLocal && !_isFastTestMode, "" );
		_loadQueue.setMaxConnections( 10 );
		_loadQueue.installPlugin( Sound );
		var l_assets = _manifest.concat( _assets );
		l_assets = _tools.shuffle( l_assets ); // shuffle to allow better sound load concurrency
		_loadQueue.addEventListener( "complete", _onComplete );
		_loadQueue.addEventListener( "fileerror", _onError );
		_loadQueue.addEventListener( "error", _onError );
		Timer.delay( _loadQueue.loadManifest.bind( l_assets ), 200 );
	}
	
	override private function _next():Void
	{
		// intentionally resets contents of super._next (not appropriate for this driver)
	}
	
	override private function get_progress():Float
	{
		return _loadQueue.progress;
	}
	
	private function _onComplete( ?p_event:Event ):Void
	{
		if ( _isComplete ) return;
		_loadQueue.removeEventListener( "complete", _onComplete );
		_loadQueue.removeEventListener( "fileerror", _onError );
		_loadQueue.removeEventListener( "error", _onError );
		_continue();
	}
	
	private function _onError( p_event:Event ):Void
	{
		trace( untyped [ p_event, p_event.title, p_event.message, p_event.data ] );
	}
	
	private function _continue():Void
	{
		_isComplete = true;
		_assets = []; // this effectively calls onPreloaderComplete (via _updater), a little hacky but keeps it consistent with other drivers
	}
	
}