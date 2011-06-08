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

package demo.entities;
import awe6.core.Entity;
import awe6.interfaces.IKernel;

class Bouncer extends Entity
{
	public var x( default, null ):Float;
	public var y( default, null ):Float;
	
	private var _width:Float;
	private var _height:Float;
	private var _width2:Float;
	private var _height2:Float;
	private var _vx:Float;
	private var _vy:Float;
	
	public function new( kernel:IKernel, width:Float, height:Float ) 
	{
		_width = width;
		_height = height;
		super( kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		_width2 = _width / 2;
		_height2 = _height / 2;
		_vx = ( Math.random() - .5 ) * 20;
		_vy = ( Math.random() - .5 ) * 20;
		x = _kernel.factory.width * Math.random();
		y = _kernel.factory.height * Math.random();
	}	
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		x += _vx;
		y += _vy;
		if ( x > ( _kernel.factory.width - _width2 ) ) _vx *= -1;
		if ( y > ( _kernel.factory.height - _height2 ) ) _vy *= -1;
		if ( x < _width2 ) _vx *= -1;
		if ( y < _height2 ) _vy *= -1;
		x = _tools.limit( x, _width2, _kernel.factory.width - _width2 );
		y = _tools.limit( y, _height2, _kernel.factory.height - _height2 );
	}
	
}