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
	private var _manifest:Array<Dynamic> ;
	
	override private function _init():Void
	{
		super._init();
		_context = new Context();
		view = new View( _kernel, _context );
		// we push valid sounds to manifest
		var l_soundAssets:Array<String> = [];
		_manifest = [];
		if ( Sound.initializeDefaultPlugins() )
		{
			var l_isSoundDisabled:Bool = untyped Sound.BrowserDetect.isAndroid && untyped !Sound.BrowserDetect.isChrome; // Android (Stock / not Chrome) has slow loading audio that doesn't play, hence disabled.  Chrome is default from Android 4.3+
			_validSoundFormat = Sound.getCapability( "ogg" ) ? "ogg" : "mp3";
			_activePlugin = Sound.activePlugin;
			for ( i in _assets )
			{
				var l_extension:String = i.substr( -3 );
				if ( ( l_extension == "mp3" ) || ( l_extension == "ogg" ) )
				{
					l_soundAssets.push( i );
					if ( !l_isSoundDisabled && ( l_extension == _validSoundFormat ) )
					{
						var l_id:String = "assets.audio." + i.split( "/" ).pop().substr( 0, -4 );
						_manifest.push( { src:i, id:l_id } );
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
		_loadQueue = new LoadQueue( !_kernel.isLocal, "" );
		_loadQueue.installPlugin( Sound );
		_loadQueue.loadManifest( _manifest.concat( _assets ) );
		_loadQueue.addEventListener( "complete", _onComplete );
	}
	
	override private function _next():Void
	{
		// intentionally resets contents of super._next (not appropriate for this driver)
	}
	
	override private function get_progress():Float
	{
		return _loadQueue.progress;
	}
	
	private function _onComplete( p_event:Event ):Void
	{
		if ( _isComplete ) return;
		_loadQueue.removeEventListener( "complete", _onComplete );
		_continue();
	}
	
	private function _continue():Void
	{
		_isComplete = true;
		_assets = []; // this effectively calls onPreloaderComplete (via _updater), a little hacky but keeps it consistent with other drivers
	}
	
}