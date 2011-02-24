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

package awe6.core;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.IAudio;
import awe6.interfaces.IKernel;
import flash.events.Event;
import flash.media.Sound;
import flash.media.SoundChannel;
import flash.media.SoundTransform;

/**
 * The Audio class provides a minimalist implementation of the IAudio interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Audio extends Process, implements IAudio
{
	public var id( default, null ):String;
	public var audioChannelType( default, null ):EAudioChannel;
	
	private var _audioManager:AudioManager;
	private var _loops:Int;
	private var _startTime:Int;
	private var _volume:Float;
	private var _pan:Float;
	private var _packageId:String;
	private var _sound:Sound;
	private var _soundChannel:SoundChannel;
	
	public function new( kernel:IKernel, audioManager:AudioManager, id:String, packageId:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0 )
	{
		_audioManager = audioManager;
		this.id = id;
		_packageId = packageId;
		this.audioChannelType = ( audioChannelType != null ) ? audioChannelType : EAudioChannel.DEFAULT;
		if ( loops == -1 ) loops = kernel.tools.BIG_NUMBER;
		_loops = loops;
		_startTime = startTime;
		_volume = volume;
		_pan = pan;
		super( kernel );
	}
	
	override private function _init():Void
	{
		super._init();
		_sound = cast( _kernel.assets.getAsset( id, _packageId ), Sound );
		if ( _sound == null ) return dispose();
		_soundChannel = _sound.play( this._startTime, this._loops );
		if ( _soundChannel == null ) return dispose(); // perhaps sounds are flooded?
		transform( _volume, _pan );
		_soundChannel.addEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		return;		
	}
	
	public function transform( ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		if ( isDisposed ) return;
		if ( asRelative )
		{
			volume *= _soundChannel.soundTransform.volume;
			pan *= _soundChannel.soundTransform.pan;
		}
		_volume = volume;
		_pan = _kernel.tools.limit( pan, -1, 1 );
		var soundTransform:SoundTransform = new SoundTransform( _volume, _pan );
		_soundChannel.soundTransform = soundTransform;		
	}
	
	public function stop():Void
	{
		if ( isDisposed ) return;
		_soundChannel.stop();
		dispose();
	}
	
	private function _onSoundComplete( event:Event ):Void
	{
		dispose();
	}
	
	override private function _disposer():Void
	{
		if ( _soundChannel != null )
		{
			stop();
			_soundChannel.removeEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		}
		super._disposer();
	}
}