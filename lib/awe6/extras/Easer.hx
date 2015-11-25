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

package awe6.extras;
import awe6.core.Entity;
import awe6.interfaces.IKernel;

class Easer extends Entity 
{	
	private var _delay:Int;
	private var _duration:Int;
	private var _object:Dynamic;
	private var _field:String;
	private var _originalValue:Float;
	private var _newValue:Float;
	private var _isRelative:Bool;
	private var _isEaseIn:Bool;
	private var _isEaseOut:Bool;
	private var _callback:Void->Void;
	private var _prevProgress:Float;
	
	public function new( p_kernel:IKernel, p_delay:Int = 0, p_duration:Int = 1000, p_object:Dynamic, p_field:String, p_originalValue:Float, p_newValue:Float, p_isRelative:Bool = false, p_isEaseIn:Bool = false, p_isEaseOut:Bool = false, ?p_callback:Void->Void ) 
	{
		_delay = p_delay;
		_duration = p_duration;
		_object = p_object;
		_field = p_field;
		_originalValue = p_originalValue;
		_newValue = p_newValue;
		_isRelative = p_isRelative;
		_isEaseIn = p_isEaseIn;
		_isEaseOut = p_isEaseOut;
		_callback = p_callback;
		_prevProgress = 0;
		super( p_kernel );
		_updater();
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		var l_progress:Float = _tools.limit( ( _age - _delay ) / _duration, 0, 1 );
		if ( _isEaseIn )
		{
			l_progress = 1 - Math.cos( l_progress * .5 * Math.PI );
		}
		if ( _isEaseOut )
		{
			l_progress = Math.sin( l_progress * .5 * Math.PI );
		}
		if ( l_progress >= .99999 )
		{
			l_progress = 1;
		}
		if ( !_isRelative )
		{
			Reflect.setProperty( _object, _field, _tools.ease( _originalValue, _newValue, l_progress ) );
		}
		else
		{
			var l_prev:Float = _tools.ease( _originalValue, _newValue, _prevProgress ); 
			var l_prog:Float = _tools.ease( _originalValue, _newValue, l_progress );
			var l_diff:Float = l_prog - l_prev;
			Reflect.setProperty( _object, _field, Reflect.getProperty( _object, _field ) + l_diff );
		}
		_prevProgress = l_progress;
		if ( l_progress == 1 )
		{
			if ( _callback != null )
			{
				_callback();
			}
			dispose();
		}
	}
	
}