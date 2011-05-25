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
	private var _tools:ITools;
	private var _age:Int;	
	private var _updates:Int;

	public function new( kernel:IKernel ) 
	{
		_kernel = kernel;
		_tools = _kernel.tools;
//		trace( "new " + this );
		_init();
	}
	
	private function _init():Void
	{
		Reflect.setField( this, "isActive", true ); // avoids the setter
		isDisposed = false;
		_age = 0;
		_updates = 0;
	}
	
	public inline function dispose():Void
	{
		if ( isDisposed ) return;
		else
		{
			isActive = false;
			isDisposed = true;
			_disposer();
			return;
		}
	}
	
	private function _disposer():Void
	{
		// override me
	}
	
	public inline function update( ?deltaTime:Int = 0 ):Void
	{
		if ( !isActive ) return;
		else
		{
			_age += deltaTime;
			_updates++;
			_updater( deltaTime );
			return;
		}
	}
	
	private function _updater( ?deltaTime:Int = 0 ):Void
	{
		// override me
	}
	
	public inline function reset():Void
	{
		dispose();
		_init();
	}
	
	private function __set_isActive( value:Bool ):Bool
	{
		if ( value == isActive ) return isActive;
		value ? resume() : pause();
		return isActive;
	}
	
	public inline function pause():Void
	{
		if ( !isActive ) return;
		else
		{
			Reflect.setField( this, "isActive", false ); // avoids the setter
			_pauser();
			return;
		}
	}
	
	private function _pauser():Void
	{
		// override me		
	}
	
	public inline function resume():Void
	{
		if ( isActive ) return;
		else
		{
			Reflect.setField( this, "isActive", true ); // avoids the setter
			_resumer();
			return;
		}
	}
	
	private function _resumer():Void
	{
		// override me		
	}
	
	
}