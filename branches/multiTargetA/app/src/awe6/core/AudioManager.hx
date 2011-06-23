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
import awe6.interfaces.IDisposable;
import awe6.interfaces.IKernel;
import flash.events.Event;
import flash.media.Sound;
import flash.media.SoundChannel;
#if flash
import flash.media.SoundMixer;
#end
import flash.media.SoundTransform;

/**
 * The AudioManager class provides a minimalist implementation of the IAudioManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AudioManager extends Process, implements IAudioManager
{
	private static inline var _PACKAGE_ID = "assets.audio";
	public var isMute( default, __set_isMute ):Bool;
	
	private var _sounds:Array<_HelperSound>;
	private var _packageId:String;

	override private function _init():Void 
	{
		super._init();
		_sounds = [];
		_packageId = _kernel.getConfig( "settings.assets.packages.audio" );
		if ( _packageId == null ) _packageId = _kernel.getConfig( "settings.assets.packages.default" );
		if ( _packageId == null ) _packageId = _PACKAGE_ID;	
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void
	{
		super._updater( deltaTime );
		for ( i in _sounds ) if ( i.isDisposed ) _sounds.remove( i );
	}
	
	override private function _disposer():Void 
	{
		for ( i in _sounds ) i.dispose();
		isMute = false;
		super._disposer();
	}
	
	public function start( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?isIgnoredIfPlaying:Bool = false, ?onCompleteCallback:Void->Void ):Void
	{
		#if !flash
		return;
		#end
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		if ( isIgnoredIfPlaying )
		{
			var l_existingSound:Array<_HelperSound> = _getSounds( id, audioChannelType );
			if ( l_existingSound.length != 0 ) return;
		}
		var l_sound:_HelperSound = new _HelperSound( _kernel, id, _packageId, audioChannelType, loops, startTime, volume, pan, onCompleteCallback );
		_sounds.push( l_sound );
	}
	
	public function stop( ?id:String, ?audioChannelType:EAudioChannel ):Void
	{
		var l_sounds:Array<_HelperSound> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.stop();
		}
	}
	
	public function transform( ?id:String, ?audioChannelType:EAudioChannel, ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		var l_sounds:Array<_HelperSound> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.transform( volume, pan, asRelative );
		}
	}
	
	private function __set_isMute( ?isMute:Bool ):Bool
	{
		if ( isMute == null ) isMute = !this.isMute;
		this.isMute = isMute;
		#if flash
		SoundMixer.soundTransform = new SoundTransform( isMute ? 0 : 1 );
		#end
		return this.isMute;
	}	
	
	private function _getSounds( ?id:String, ?audioChannelType:EAudioChannel ):Array<_HelperSound>
	{
		var l_result:Array<_HelperSound> = [];
		if ( ( id == null ) && ( audioChannelType == null ) )
		{
			l_result = _sounds.copy();
		}
		else if ( audioChannelType == null )
		{
			for ( i in _sounds ) if ( i.id == id ) l_result.push( i );			
		}
		else if ( id == null )
		{
			for ( i in _sounds ) if ( Type.enumEq( i.audioChannelType, audioChannelType ) ) l_result.push( i );
		}
		else
		{
			for ( i in _sounds ) if ( ( i.id == id ) && Type.enumEq( i.audioChannelType, audioChannelType ) ) l_result.push( i );						
		}		
		return l_result;
	}
	
	public function isPlaying( ?id:String, ?audioChannelType:EAudioChannel ):Bool
	{
		var l_result:Array<_HelperSound> = _getSounds( id, audioChannelType );
		return ( l_result.length != 0 );
	}
}


private class _HelperSound implements IDisposable
{
	public var isDisposed( default, null ):Bool;
	public var id:String;
	public var audioChannelType:EAudioChannel;
	
	private var _packageId:String;
	private var _loops:Int;
	private var _startTime:Int;
	private var _volume:Float;
	private var _pan:Float;
	private var _onCompleteCallback:Void->Void;
	
	private var _kernel:IKernel;
	private var _sound:Sound;
	private var _soundChannel:SoundChannel;
	
	public function new( kernel:IKernel, id:String, packageId:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?onCompleteCallback:Void->Void )
	{
		_kernel = kernel;
		isDisposed = false;
		this.id = id;
		_packageId = packageId;
		this.audioChannelType = ( audioChannelType != null ) ? audioChannelType : EAudioChannel.DEFAULT;
		if ( loops == -1 ) loops = _kernel.tools.BIG_NUMBER;
		_loops = loops;
		_startTime = startTime;
		_volume = volume;
		_pan = pan;
		_onCompleteCallback = onCompleteCallback;
		_init();
	}
	
	private function _init():Void
	{
		_sound = cast( _kernel.assets.getAsset( this.id, _packageId ), Sound );
		if ( _sound == null ) return dispose();
		_soundChannel = _sound.play( _startTime, _loops );
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
		_volume = _kernel.tools.limit( volume, 0, 1 );
		_pan = _kernel.tools.limit( pan, -1, 1 );
		if ( _soundChannel == null ) return;
		var soundTransform:SoundTransform = new SoundTransform( volume, pan );
		_soundChannel.soundTransform = soundTransform;		
	}
	
	public function stop():Void
	{
		if ( _soundChannel == null ) return;
		_soundChannel.stop();
		dispose();
	}
	
	private function _onSoundComplete( event:Event ):Void
	{
		if ( _onCompleteCallback != null ) Reflect.callMethod( this, _onCompleteCallback, [] );
		dispose();
	}
	
	public function dispose():Void
	{
		if ( isDisposed ) return;
		isDisposed = true;
		if ( _soundChannel != null )
		{
			stop();
			_soundChannel.removeEventListener( Event.SOUND_COMPLETE, _onSoundComplete );
		}
	}
}