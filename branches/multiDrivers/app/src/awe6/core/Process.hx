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

package awe6.core;
import awe6.interfaces.EMessage;
import awe6.interfaces.IEntity;
import awe6.interfaces.IKernel;
import awe6.interfaces.IProcess;
import awe6.interfaces.ITools;

/**
 * The Process class provides a minimalist implementation of the IProcess interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Process implements IProcess
{
	public var isActive( default, __set_isActive ):Bool;
	public var isDisposed( default, null ):Bool;
	
	private var _kernel:IKernel;
	private var _tools:Tools; // direct reference for inline performance gains (approx 100% faster for methods like range and limit)
	private var _age:Int;
	private var _updates:Int;
	private var _isEntity:Bool;
	private var _isSetterBypassed:Bool;
	private var _isBeingDisposed:Bool;

	public function new( p_kernel:IKernel )
	{
		_kernel = p_kernel;
		_tools = cast _kernel.tools;
		_isEntity = Std.is( this, IEntity );
		_init();
	}
	
	private function _init():Void
	{
//		Reflect.setField( this, "isActive", true ); // avoids the setter
		_isSetterBypassed = true;
		_isBeingDisposed = false;
		isActive = true;
		isDisposed = false;
		_age = 0;
		_updates = 0;
	}
	
	public inline function dispose():Void
	{
		if ( isDisposed || _isBeingDisposed )
		{
			return;
		}
		else
		{
			_isBeingDisposed = true;
			isActive = false;
			_disposer();
			isDisposed = true;
			if ( _isEntity )
			{
				_kernel.messenger.sendMessage( EMessage.DISPOSE, cast this );
			}
			return;
		}
	}
	
	private function _disposer():Void
	{
		// override me
	}
	
	public inline function update( ?p_deltaTime:Int = 0 ):Void
	{
		if ( !isActive )
		{
			return;
		}
		else
		{
			_age += p_deltaTime;
			_updates++;
			_updater( p_deltaTime );
			return;
		}
	}
	
	private function _updater( ?p_deltaTime:Int = 0 ):Void
	{
		// override me
	}
	
	private function __set_isActive( p_value:Bool ):Bool
	{
		if ( isDisposed )
		{
			return false;
		}
		if ( p_value != isActive )
		{
			if ( _isSetterBypassed )
			{
				isActive = p_value;
			}
			else
			{
				p_value ? resume() : pause();
			}
		}
		_isSetterBypassed = false;
		return isActive;
	}
	
	public inline function pause():Void
	{
		if ( !isActive )
		{
			return;
		}
		else
		{
			_pauser();
	//		Reflect.setField( this, "isActive", false ); // avoids the setter
			_isSetterBypassed = true;
			isActive = false;
			if ( _isEntity )
			{
				_kernel.messenger.sendMessage( EMessage.PAUSE, cast this, true );
			}
		}
	}
	
	private function _pauser():Void
	{
		// override me
	}
	
	public inline function resume():Void
	{
		if ( isActive )
		{
			return;
		}
		else
		{
			_resumer();
	//		Reflect.setField( this, "isActive", true ); // avoids the setter
			_isSetterBypassed = true;
			isActive = true;
			if ( _isEntity && !isDisposed )
			{
				_kernel.messenger.sendMessage( EMessage.RESUME, cast this, true );
			}
			return;
		}
	}
	
	private function _resumer():Void
	{
		// override me
	}
	
}
