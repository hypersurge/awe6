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
import awe6.core.Context;
import awe6.core.Entity;
import awe6.interfaces.IKernel;
	
/**
 * The AProfiler class provides debug information.  Based on net.hires.utils.Stats by Mr.doob & Theo v1.3.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * @author	Robert Fell
 */
class AProfiler extends Entity
{
	private var _marginHeight:Int;
	private var _marginColor:Int;
	private var _backgroundColor:Int;
	private var _fpsColor:Int;
	private var _memoryColor:Int;
	private var _fpsLabel:String;
	private var _memoryLabel:String;

	private var _context:Context;
	private var _agePrev:Int;
	private var _width:Int;
	private var _height:Int;
		
	public function new( kernel:IKernel )
	{
		_context = new Context();
		super( kernel, _context );
	}
	
	override private function _init():Void
	{
		super._init();
		_marginHeight = 25;
		_marginColor = 0x000080;
		_backgroundColor = 0x80000080;
		_fpsColor = 0xFFFFFF;
		_memoryColor = 0xFF8000;
		_fpsLabel = "FPS";
		_memoryLabel = "MBs";
		_width = 60;
		_height = 50;		
		_agePrev = 0;
		_context.x = _context.y = 2;
	}
		
	override private function _updater( ?deltaTime:Int = 0 ):Void
	{
		super._updater( deltaTime );
		if ( _age < _agePrev + 250 )
		{
			return;
		}
		_agePrev = _age;
		_nativeUpdate();
	}
	
	private function _nativeUpdate():Void
	{
		// override me
	}
}
