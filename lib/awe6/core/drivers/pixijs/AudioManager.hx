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
import awe6.core.drivers.AAudioManager;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.IKernel;
import js.Browser;
import js.html.Event;
typedef SoundOptions = {
	?complete:Void->Void,
	?start:Int,
	?end:Int,
	?speed:Float,
	?loop:Bool,
};
typedef Sound = {
	play:String->?SoundOptions->SoundInstance,
	find:String->SoundInstance,
	volumeAll: Float,
	muteAll: Void->Void,
	unmuteAll: Void->Void,
};
typedef SoundInstance = {
	play:?SoundOptions->Void,
	stop:Void->Void,
	volume:Float,
	loop:Bool,
	filters:Array<Dynamic>,
};
typedef SoundFilterPan = {
	pan:Float,
}

/**
 * This AudioManager class provides PixiJS target overrides.
 * @author	Robert Fell
 */
class AudioManager extends AAudioManager
{
	public static var sound:Sound = untyped PIXI.sound;
	private var _visibilityWasMute:Bool;
	
	override private function _init():Void 
	{
		super._init();
		_visibilityWasMute = isMute;
		Browser.document.addEventListener( "visibilitychange", _onVisibilityChange );
	}
	
	override private function _disposer():Void 
	{
		Browser.document.removeEventListener( "visibilitychange", _onVisibilityChange );
		super._disposer();
	}

	override private function _driverSoundFactory( p_id:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void ):_AHelperSound
	{
		return new _HelperSound( _kernel, p_id, _packageId, p_audioChannelType, p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback );
	}

	override private function _driverSetIsMute( p_value:Bool ):Void
	{
		try
		{
			if ( p_value )
			{
				sound.muteAll();
			}
			else
			{
				sound.unmuteAll();
			}
		}
		catch ( p_error:Dynamic )
		{
			trace( p_error );
		}
	}
	
	private function _onVisibilityChange( p_event:Event ):Void
	{
		var l_isHidden:Bool = _getVisibilityPropery();
		if ( l_isHidden )
		{
			_visibilityWasMute = isMute;
			isMute = true;
		}
		else
		{
			isMute = _visibilityWasMute;
		}
	}
	
	private function _getVisibilityPropery():Bool
	{
		var l_vendorPrefixes:Array<String> = [ "hidden", "mozHidden", "msHidden", "oHidden", "webkitHidden" ];
		for ( i in l_vendorPrefixes )
		{
			if ( Reflect.hasField( Browser.document, i ) )
			{
				return Reflect.field( Browser.document, i );
			}
		}
		return Browser.document.hidden;
	}
	
}

class _HelperSound extends _AHelperSound
{
	private var _sound:SoundInstance;
	private var _panFilter:SoundFilterPan;
	
	public function new( p_kernel:IKernel, p_id:String, p_packageId:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void )
	{
		super( p_kernel, p_id, p_packageId, p_audioChannelType, p_loops == 1 ? 0 : p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback );	
	}
	
	override private function _driverInit():Void
	{
		try
		{
			_sound = AudioManager.sound.find( "assets.audio." + id );
			var l_options:SoundOptions = {
				complete:_onSoundComplete,
				start: _startTime,
				loop: _loops != 0,
			};
			_sound.volume = _volume;
			_sound.play( l_options );
		}
		catch ( p_error:Dynamic ) { _sound = null; }
		if ( _sound == null )
		{
			return dispose();
		}
		_driverTransform();
		return;
	}
	
	override private function _driverTransform( p_asRelative:Bool = false ):Void
	{
		if ( _sound == null )
		{
			return;
		}
		if ( p_asRelative )
		{
			_volume *= _sound.volume;
			if ( _panFilter != null )
			{
				_pan *= _panFilter.pan;
			}
		}
		_sound.volume = _volume;
		if ( _pan != 0 )
		{
			if ( _panFilter == null )
			{
				try
				{
					_panFilter = untyped __js__( "new PIXI.sound.filters.StereoFilter( this._pan )" );
					_sound.filters = [_panFilter];
				}
				catch ( p_error:Dynamic ) { _pan = 0; }
			}
		}
	}

	override private function _driverStop():Void
	{
		if ( _sound == null )
		{
			return;
		}
		try
		{
			_sound.stop();
		}
		catch ( p_error:Dynamic ) {}
	}
	
	private function _onSoundComplete():Void
	{
		if ( _onCompleteCallback != null )
		{
			_onCompleteCallback();
		}
		dispose();
	}
	
	override private function _driverDisposer():Void
	{
		if ( _sound != null )
		{
			stop();
		}
	}
	
}