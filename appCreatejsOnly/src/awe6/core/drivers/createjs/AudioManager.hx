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
import awe6.core.drivers.AAudioManager;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.IKernel;
import createjs.soundjs.Sound;
import createjs.soundjs.SoundInstance;

/**
 * This AudioManager class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class AudioManager extends AAudioManager
{

	override private function _driverSoundFactory( p_id:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void ):_AHelperSound
	{
		return new _HelperSound( _kernel, p_id, _packageId, p_audioChannelType, p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback );
	}

	override private function _driverSetIsMute( p_value:Bool ):Void
	{
		Sound.setMute( p_value );
	}	
	
}

class _HelperSound extends _AHelperSound
{
	private var _sound:SoundInstance;
	
	public function new( p_kernel:IKernel, p_id:String, p_packageId:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void )
	{
		super( p_kernel, p_id, p_packageId, p_audioChannelType, p_loops == 1 ? 0 : p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback );	
	}
	
	override private function _driverInit():Void
	{
		_sound = Sound.play( id, 0, _startTime, _loops, _volume, _pan );
		if ( _sound == null )
		{
			return dispose();
		}
		_sound.setMute( _kernel.audio.isMute );
		_sound.addEventListener( "complete", _onSoundComplete );
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
			_pan *= _sound.pan;
		}
		_sound.volume = _volume;
		_sound.pan = _pan;
	}

	override private function _driverStop():Void
	{
		if ( _sound == null )
		{
			return;
		}
		_sound.stop();
	}
	
	private function _onSoundComplete( p_event:Dynamic ):Void
	{
		if ( _onCompleteCallback != null )
		{
			Reflect.callMethod( this, _onCompleteCallback, [] );
		}
		dispose();
	}
	
	override private function _driverDisposer():Void
	{
		if ( _sound != null )
		{
			stop();
			_sound.removeEventListener( "complete", _onSoundComplete );
		}
	}
	
}