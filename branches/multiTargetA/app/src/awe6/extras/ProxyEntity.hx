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

package awe6.extras;
import awe6.core.Entity;
import awe6.interfaces.IKernel;

class ProxyEntity extends Entity
{
	private var _proxyUpdate:Int->Void;
	private var _proxyDispose:Void->Void;

	public function new( kernel:IKernel, updateFunction:Int->Void, disposeFunction:Void->Void ) 
	{
		super( kernel );
		_proxyUpdate = updateFunction;
		_proxyDispose = disposeFunction;		
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( _proxyUpdate != null ) Reflect.callMethod( this, _proxyUpdate, [] );
	}
	
	override private function _disposer():Void 
	{
		if ( _proxyDispose != null ) Reflect.callMethod( this, _proxyDispose, [] );
		super._disposer();		
	}
	
}