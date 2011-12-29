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
import awe6.core.drivers.AAudioManager;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.IKernel;
import flash.events.Event;
import flash.media.Sound;
import flash.media.SoundChannel;
import flash.media.SoundMixer;
import flash.media.SoundTransform;

/**
 * This AudioManager class provides js target overrides.
 * @author	Robert Fell
 */
class AudioManager extends AAudioManager
{
	private var _extension:String;

	override private function _init():Void
	{
		super._init();
		_extension = ".mp3";
		_packageId = StringTools.replace( _packageId + ".", ".", "/" );
	}
	
	override private function _nativeSoundFactory( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?onCompleteCallback:Void->Void ):_AHelperSound
	{
		return new _HelperSound( _kernel, id, _packageId, _extension, audioChannelType, loops, startTime, volume, pan, onCompleteCallback );
	}

	override private function _nativeSetIsMute( ?isMute:Bool ):Void
	{
		SoundMixer.soundTransform = new SoundTransform( isMute ? 0 : 1 );
	}	
	
}

class _HelperSound extends _AHelperSound
{
	private var _extension:String;
	private var _sound:Sound;
	private var _soundChannel:SoundChannel;
	
	public function new( kernel:IKernel, id:String, packageId:String, extension:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?onCompleteCallback:Void->Void )
	{
		// needed else some float signatures misinterpreted as ints ... should replicate and report to mailing list
		_extension = extension;
		super( kernel, id, packageId, audioChannelType, loops, startTime, volume, pan, onCompleteCallback );	
	}
	
	override private function _nativeInit():Void
	{
		_sound = _kernel.assets.getAsset( id + _extension, _packageId );
		if ( _sound == null )
		{
			return dispose();
		}
		_soundChannel = _sound.play( _startTime, _loops );
		if ( _soundChannel == null )
		{
			return dispose(); // perhaps sounds are flooded?
		}
		_soundChannel.addEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		_nativeTransform();
		return;
	}
	
	override private function _nativeTransform( ?asRelative:Bool = false ):Void
	{
		if ( _soundChannel == null )
		{
			return;
		}
		if ( asRelative )
		{
			_volume *= _soundChannel.soundTransform.volume;
			_pan *= _soundChannel.soundTransform.pan;
		}
		var soundTransform:SoundTransform = new SoundTransform( _volume, _pan );
		_soundChannel.soundTransform = soundTransform;		
	}

	override private function _nativeStop():Void
	{
		if ( _soundChannel == null )
		{
			return;
		}
		_soundChannel.stop();
	}
	
	private function _onSoundComplete( event:Event ):Void
	{
		if ( _onCompleteCallback != null )
		{
			Reflect.callMethod( this, _onCompleteCallback, [] );
		}
		dispose();
	}
	
	override private function _nativeDisposer():Void
	{
		if ( _soundChannel != null )
		{
			stop();
			_soundChannel.removeEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		}
	}
}