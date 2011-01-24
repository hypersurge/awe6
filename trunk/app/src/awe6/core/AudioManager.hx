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
import awe6.interfaces.IAudioManager;
import awe6.interfaces.IKernel;
import flash.events.Event;
import flash.media.Sound;
import flash.media.SoundChannel;
import flash.media.SoundMixer;
import flash.media.SoundTransform;

class AudioManager extends Process, implements IAudioManager
{
	static inline var PACKAGE_ID = "assets.audio";
	public var isMute( default, __set_isMute ):Bool;
	
	private var _sounds:Array<HelperSound>;
	private var _packageId:String;

	override private function _init():Void 
	{
		super._init();
		_sounds = [];
		_packageId = _kernel.getConfig( "settings.assets.packages.audio" );
	}
	
	override private function _disposer():Void 
	{
		for ( i in _sounds ) i.dispose();
		super._disposer();		
	}
	
	public function start( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?isIgnoredIfPlaying:Bool = false ):Void
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		if ( isIgnoredIfPlaying && ( _getSound( id, audioChannelType ).length != 0 ) )
		{
			return;
		}
		var l_sound:HelperSound = new HelperSound( _kernel, this, id, _packageId, audioChannelType, loops, startTime, volume, pan );
		_sounds.push( l_sound );
	}
	
	public function stop( ?id:String = "", ?audioChannelType:EAudioChannel ):Void
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		if ( ( id == "" ) && ( audioChannelType == EAudioChannel.DEFAULT ) )
		{
			id = "*";
			audioChannelType = EAudioChannel.ALL;
		}
		var l_sounds:Array<HelperSound> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.stop();
		}
	}
	
	public function transform( ?id:String = "", ?audioChannelType:EAudioChannel, ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_sounds:Array<HelperSound> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.transform( volume, pan, asRelative );
		}
	}
	
	private function __set_isMute( ?isMute:Bool ):Bool
	{
		if ( isMute == null ) isMute = !this.isMute;
		this.isMute = isMute;
		SoundMixer.soundTransform = new SoundTransform( isMute ? 0 : 1 );
		return this.isMute;
	}	
	
	private function _getSound( ?id:String = "", ?audioChannelType:EAudioChannel ):Array<HelperSound>
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_result:Array<HelperSound> = [];
		for ( i in _sounds )
		{
			if ( ( i.id == id ) && ( i.audioChannelType == audioChannelType ) ) l_result.push( i );
		}
		return l_result;
	}

	private function _getAudioChannel( audioChannelType:EAudioChannel ):Array<HelperSound>
	{
		var l_result:Array<HelperSound> = [];
		for ( i in _sounds )
		{
			if ( i.audioChannelType == audioChannelType ) l_result.push( i );
		}
		return l_result;
	}

	private function _getSounds( ?id:String = "", ?audioChannelType:EAudioChannel ):Array<HelperSound>
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_result:Array<HelperSound> = [];
		if ( ( id == "*" ) && ( audioChannelType == EAudioChannel.ALL ) )
		{
			l_result = _sounds;
		}
		else if ( id == "*" )
		{
			l_result = _getAudioChannel( audioChannelType );
		}
		else if ( id != "" )
		{
			l_result = _getSound( id, audioChannelType );
		}
		return l_result;
	}
	
	public function isPlaying( ?id:String = "", ?audioChannelType:EAudioChannel ):Bool
	{
		var l_result:Array<HelperSound> = _getSounds( id, audioChannelType );
		return ( l_result.length != 0 );
	}
}

private class HelperSound
{
	private var _isDisposed:Bool;
	private var _kernel:IKernel;
	private var _audioManager:AudioManager;
	public var id:String;
	public var packageId:String;
	public var audioChannelType:EAudioChannel;
	public var loops:Int;
	public var startTime:Int;
	public var volume:Float;
	public var pan:Float;
	private var _sound:Sound;
	private var _soundChannel:SoundChannel;
	
	public function new( kernel:IKernel, audioManager:AudioManager, id:String, packageId:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0 )
	{
		_isDisposed = false;
		_kernel = kernel;
		_audioManager = audioManager;
		this.id = id;
		this.packageId = packageId;
		this.audioChannelType = ( audioChannelType != null ) ? audioChannelType : EAudioChannel.DEFAULT;
		this.loops = loops;
		if ( loops == -1 ) this.loops = _kernel.tools.BIG_NUMBER;
		this.startTime = startTime;
		_sound = cast( _kernel.assets.getAsset( this.id, this.packageId ), Sound );
		if ( _sound == null ) return dispose();
		_soundChannel = _sound.play( this.startTime, this.loops );
		if ( _soundChannel == null ) return dispose(); // perhaps sounds are flooded?
		transform( volume, pan );
		_soundChannel.addEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		return;
	}
	
	public function transform( ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		if ( _isDisposed ) return;
		if ( asRelative )
		{
			volume *= _soundChannel.soundTransform.volume;
			pan *= _soundChannel.soundTransform.pan;
		}
		this.volume = volume;
		this.pan = _kernel.tools.limit( pan, -1, 1 );
		var soundTransform:SoundTransform = new SoundTransform( volume, pan );
		_soundChannel.soundTransform = soundTransform;		
	}
	
	public function stop():Void
	{
		if ( _isDisposed ) return;
		_soundChannel.stop();
		dispose();
	}
	
	private function _onSoundComplete( event:Event ):Void
	{
		dispose();
	}
	
	public function dispose():Void
	{
		if ( _isDisposed ) return;
		_isDisposed = true;
		if ( _soundChannel != null )
		{
			stop();
			_soundChannel.removeEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		}
		untyped _audioManager._sounds.remove( this );
	}
}