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

package awe6.core.drivers;
import awe6.core.Process;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.IAudioManager;
import awe6.interfaces.IDisposable;
import awe6.interfaces.IKernel;

/**
 * The AudioManager class provides a minimalist implementation of the IAudioManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AAudioManager extends Process, implements IAudioManager
{
	private static inline var _PACKAGE_ID = "assets.audio";
	public var isMute( default, __set_isMute ):Bool;
	
	private var _sounds:Array<_AHelperSound>;
	private var _packageId:String;

	override private function _init():Void 
	{
		super._init();
		_sounds = [];
		_packageId = _kernel.getConfig( "settings.assets.packages.audio" );
		if ( _packageId == null )
		{
			_packageId = _kernel.getConfig( "settings.assets.packages.default" );
		}
		if ( _packageId == null )
		{
			_packageId = _PACKAGE_ID;	
		}
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void
	{
		super._updater( deltaTime );
		for ( i in _sounds )
		{
			if ( i.isDisposed )
			{
				_sounds.remove( i );
			}
		}
	}
	
	override private function _disposer():Void 
	{
		for ( i in _sounds )
		{
			i.dispose();
		}
		isMute = false;
		super._disposer();
	}
	
	public function start( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?isIgnoredIfPlaying:Bool = false, ?onCompleteCallback:Void->Void ):Void
	{
		if ( audioChannelType == null )
		{
			audioChannelType = EAudioChannel.DEFAULT;
		}
		if ( isIgnoredIfPlaying )
		{
			var l_existingSound:Array<_AHelperSound> = _getSounds( id, audioChannelType );
			if ( l_existingSound.length != 0 )
			{
				return;
			}
		}
		_sounds.push( _nativeSoundFactory( id, audioChannelType, loops, startTime, volume, pan, onCompleteCallback ) );
	}
	
	private function _nativeSoundFactory( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?onCompleteCallback:Void->Void ):_AHelperSound
	{
		//override me
		return new _AHelperSound( _kernel, id, _packageId, audioChannelType, loops, startTime, volume, pan, onCompleteCallback );		
	}
	
	public function stop( ?id:String, ?audioChannelType:EAudioChannel ):Void
	{
		var l_sounds:Array<_AHelperSound> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.stop();
		}
	}
	
	public function transform( ?id:String, ?audioChannelType:EAudioChannel, ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		var l_sounds:Array<_AHelperSound> = _getSounds( id, audioChannelType );
		for ( i in l_sounds )
		{
			i.transform( volume, pan, asRelative );
		}
	}
	
	private function __set_isMute( ?isMute:Bool ):Bool
	{
		if ( isMute == null )
		{
			isMute = !this.isMute;
		}
		this.isMute = isMute;
		_nativeSetIsMute( isMute );
		return this.isMute;
	}
	
	private function _nativeSetIsMute( ?isMute:Bool ):Void
	{
		//override me
	}
	
	private function _getSounds( ?id:String, ?audioChannelType:EAudioChannel ):Array<_AHelperSound>
	{
		var l_result:Array<_AHelperSound> = [];
		if ( ( id == null ) && ( audioChannelType == null ) )
		{
			l_result = _sounds.copy();
		}
		else if ( audioChannelType == null )
		{
			for ( i in _sounds )
			{
				if ( i.id == id )
				{
					l_result.push( i );			
				}
			}
		}
		else if ( id == null )
		{
			for ( i in _sounds )
			{
				if ( Type.enumEq( i.audioChannelType, audioChannelType ) )
				{
					l_result.push( i );
				}
			}
		}
		else
		{
			for ( i in _sounds )
			{
				if ( ( i.id == id ) && Type.enumEq( i.audioChannelType, audioChannelType ) )
				{
					l_result.push( i );						
				}
			}
		}		
		return l_result;
	}
	
	public function isPlaying( ?id:String, ?audioChannelType:EAudioChannel ):Bool
	{
		var l_result:Array<_AHelperSound> = _getSounds( id, audioChannelType );
		return ( l_result.length != 0 );
	}
}


class _AHelperSound implements IDisposable
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
	
	public function new( kernel:IKernel, id:String, packageId:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?onCompleteCallback:Void->Void )
	{
		_kernel = kernel;
		isDisposed = false;
		this.id = id;
		_packageId = packageId;
		this.audioChannelType = ( audioChannelType != null ) ? audioChannelType : EAudioChannel.DEFAULT;
		if ( loops == -1 )
		{
			loops = _kernel.tools.BIG_NUMBER;
		}
		_loops = loops;
		_startTime = startTime;
		_volume = volume;
		_pan = pan;
		_onCompleteCallback = onCompleteCallback;
		_init();
	}
	
	private function _init():Void
	{
		_nativeInit();
	}
	
	private function _nativeInit():Void
	{
		//override me
	}
	
	public function transform( ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void
	{
		if ( isDisposed )
		{
			return;
		}
		_volume = _kernel.tools.limit( volume, 0, 1 );
		_pan = _kernel.tools.limit( pan, -1, 1 );
		_nativeTransform( asRelative );
	}
	
	private function _nativeTransform( ?asRelative:Bool = false ):Void
	{
		//override me
	}
	
	public function stop():Void
	{
		_nativeStop();
		dispose();
	}
	
	private function _nativeStop():Void
	{
		//override me
	}
	
	public function dispose():Void
	{
		if ( isDisposed )
		{
			return;
		}
		isDisposed = true;
		_nativeStop();
	}
	
	private function _nativeDisposer():Void
	{
		//override me
	}
}