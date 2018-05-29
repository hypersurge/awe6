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
import js.Browser;
import js.html.Event;

/**
 * This AudioManager class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class AudioManager extends AAudioManager
{
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
			untyped Sound.muted = p_value;
		}
		catch ( p_error:Dynamic )
		{
		}
		try
		{
			untyped Sound.setMute( p_value );
		}
		catch ( p_error:Dynamic )
		{
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
	
	public function new( p_kernel:IKernel, p_id:String, p_packageId:String, ?p_audioChannelType:EAudioChannel, p_loops:Int = 1, p_startTime:Int = 0, p_volume:Float = 1, p_pan:Float = 0, ?p_onCompleteCallback:Void->Void )
	{
		super( p_kernel, p_id, p_packageId, p_audioChannelType, p_loops == 1 ? 0 : p_loops, p_startTime, p_volume, p_pan, p_onCompleteCallback );	
	}
	
	override private function _driverInit():Void
	{
		try
		{
			_sound = Sound.play( "assets.audio." + id, 0, _startTime, _loops, _volume, _pan );
			// temporary fix to Chrome sound issue
			// https://github.com/CreateJS/SoundJS/issues/297
			if ( untyped createjs.WebAudioPlugin.context && ( untyped createjs.WebAudioPlugin.context.state == "suspended" ) )
			{
				untyped createjs.WebAudioPlugin.context.resume();
			}
		}
		catch ( p_error:Dynamic ) {}
		if ( _sound == null )
		{
			return dispose();
		}
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
		try
		{
			_sound.stop();
		}
		catch ( p_error:Dynamic ) {}
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