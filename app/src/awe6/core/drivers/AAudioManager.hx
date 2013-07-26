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
#if haxe3
class AAudioManager extends Process implements IAudioManager
#else
class AAudioManager extends Process, implements IAudioManager
#end
{
	private static inline var _PACKAGE_ID = "assets.audio";
	#if haxe3
	public var isMute( default, set ):Bool;
	#else
	public var isMute( default, set_isMute ):Bool;
	#end
	
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
		isMute = false;
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void
	{
		super._updater( p_deltaTime );
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
	
	public function start( p_id:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, p_isIgnoredIfPlaying:Bool = false, ?p_onCompleteCallback:Void->Void ):Void
	{
		if ( p_audioChannelType == null )
		{
			p_audioChannelType = EAudioChannel.DEFAULT;
		}
		if ( p_isIgnoredIfPlaying )
		{
			var l_existingSound:Array<_AHelperSound> = _getSounds( p_id, p_audioChannelType );
			if ( l_existingSound.length != 0 )
			{
				return;
			}
		}
		_sounds.push( _driverSoundFactory( p_id, p_audioChannelType, p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback ) );
	}
	
	private function _driverSoundFactory( p_id:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void ):_AHelperSound
	{
		//override me
		return new _AHelperSound( _kernel, p_id, _packageId, p_audioChannelType, p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback );
	}
	
	public function stop( ?p_id:String, ?p_audioChannelType:EAudioChannel ):Void
	{
		var l_sounds:Array<_AHelperSound> = _getSounds( p_id, p_audioChannelType );
		for ( i in l_sounds )
		{
			i.stop();
		}
	}
	
	public function transform( ?p_id:String, ?p_audioChannelType:EAudioChannel, p_volume:Float = 1, p_pan:Float = 0, p_asRelative:Bool = false ):Void
	{
		var l_sounds:Array<_AHelperSound> = _getSounds( p_id, p_audioChannelType );
		for ( i in l_sounds )
		{
			i.transform( p_volume, p_pan, p_asRelative );
		}
	}
	
	private function set_isMute( ?p_value:Bool ):Bool
	{
		if ( p_value == null )
		{
			p_value = !isMute;
		}
		isMute = p_value;
		_driverSetIsMute( p_value );
		return isMute;
	}
	
	private function _driverSetIsMute( p_value:Bool ):Void
	{
		//override me
	}
	
	private function _getSounds( ?p_id:String, ?p_audioChannelType:EAudioChannel ):Array<_AHelperSound>
	{
		var l_result:Array<_AHelperSound> = [];
		if ( ( p_id == null ) && ( p_audioChannelType == null ) )
		{
			l_result = _sounds.copy();
		}
		else if ( p_audioChannelType == null )
		{
			for ( i in _sounds )
			{
				if ( i.id == p_id )
				{
					l_result.push( i );			
				}
			}
		}
		else if ( p_id == null )
		{
			for ( i in _sounds )
			{
				if ( Type.enumEq( i.audioChannelType, p_audioChannelType ) )
				{
					l_result.push( i );
				}
			}
		}
		else
		{
			for ( i in _sounds )
			{
				if ( ( i.id == p_id ) && Type.enumEq( i.audioChannelType, p_audioChannelType ) )
				{
					l_result.push( i );						
				}
			}
		}		
		return l_result;
	}
	
	public function isPlaying( ?p_id:String, ?p_audioChannelType:EAudioChannel ):Bool
	{
		var l_result:Array<_AHelperSound> = _getSounds( p_id, p_audioChannelType );
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
	
	public function new( p_kernel:IKernel, p_id:String, p_packageId:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void )
	{
		_kernel = p_kernel;
		isDisposed = false;
		id = p_id;
		_packageId = p_packageId;
		audioChannelType = ( p_audioChannelType != null ) ? p_audioChannelType : EAudioChannel.DEFAULT;
		if ( p_loops == -1 )
		{
			p_loops = _kernel.tools.BIG_NUMBER;
		}
		_loops = p_loops;
		_startTime = p_startTime;
		_volume = p_volume;
		_pan = p_pan;
		_onCompleteCallback = p_onCompleteCallback;
		_init();
	}
	
	private function _init():Void
	{
		_driverInit();
	}
	
	private function _driverInit():Void
	{
		//override me
	}
	
	public function transform( p_volume:Float = 1, p_pan:Float = 0, p_asRelative:Bool = false ):Void
	{
		if ( isDisposed )
		{
			return;
		}
		_volume = _kernel.tools.limit( p_volume, 0, 1 );
		_pan = _kernel.tools.limit( p_pan, -1, 1 );
		_driverTransform( p_asRelative );
	}
	
	private function _driverTransform( p_asRelative:Bool = false ):Void
	{
		//override me
	}
	
	public function stop():Void
	{
		_driverStop();
		dispose();
	}
	
	private function _driverStop():Void
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
		_driverStop();
	}
	
	private function _driverDisposer():Void
	{
		//override me
	}
}