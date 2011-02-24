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
import awe6.interfaces.IAudioManager;
import awe6.interfaces.IKernel;
import flash.events.Event;
import flash.media.Sound;
import flash.media.SoundChannel;
import flash.media.SoundMixer;
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
	
	private var _sounds:Array<IAudio>;
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
		super._disposer();
	}
	
	public function start( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?isIgnoredIfPlaying:Bool = false ):IAudio
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_existingSound:Array<IAudio> = _getSound( id, audioChannelType );
		if ( isIgnoredIfPlaying && ( l_existingSound.length != 0 ) )
		{
			return l_existingSound[0];
		}
		var l_sound:Audio = new Audio( _kernel, this, id, _packageId, audioChannelType, loops, startTime, volume, pan );
		_sounds.push( l_sound );
		return l_sound;
	}
	
	public function stop( ?id:String = "", ?audioChannelType:EAudioChannel ):Void
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		if ( ( id == "" ) && Type.enumEq( audioChannelType, EAudioChannel.DEFAULT ) )
		{
			id = "*";
			audioChannelType = EAudioChannel.ALL;
		}
		var l_sounds:Array<IAudio> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.stop();
		}
	}
	
	public function transform( ?id:String = "", ?audioChannelType:EAudioChannel, ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_sounds:Array<IAudio> = _getSounds( id, audioChannelType );
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
	
	private function _getSound( ?id:String = "", ?audioChannelType:EAudioChannel ):Array<IAudio>
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_result:Array<IAudio> = [];
		for ( i in _sounds )
		{
			if ( ( i.id == id ) && Type.enumEq( i.audioChannelType, audioChannelType ) ) l_result.push( i );
		}
		return l_result;
	}

	private function _getAudioChannel( audioChannelType:EAudioChannel ):Array<IAudio>
	{
		var l_result:Array<IAudio> = [];
		for ( i in _sounds )
		{
			if ( Type.enumEq( i.audioChannelType, audioChannelType ) ) l_result.push( i );
		}
		return l_result;
	}

	private function _getSounds( ?id:String = "", ?audioChannelType:EAudioChannel ):Array<IAudio>
	{
		if ( audioChannelType == null ) audioChannelType = EAudioChannel.DEFAULT;
		var l_result:Array<IAudio> = [];
		if ( ( id == "*" ) && Type.enumEq( audioChannelType, EAudioChannel.ALL ) )
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
		var l_result:Array<IAudio> = _getSounds( id, audioChannelType );
		return ( l_result.length != 0 );
	}
}
