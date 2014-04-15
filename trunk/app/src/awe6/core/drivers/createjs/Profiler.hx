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
import awe6.core.drivers.AProfiler;
import createjs.easeljs.Shape;
import createjs.easeljs.Text;
	
/**
 * This Profiler class provides CreateJS target overrides.
 * <p>Based on net.hires.utils.Stats by Mr.doob & Theo v1.3</p>
 * @author	Werner Avenant
 * @author	Mr.doob
 * @author	Theo
 * @author	Robert Fell
 */
class Profiler extends AProfiler
{
	private var _fpsTextField:Text;
		
	override private function _init():Void
	{
		super._init();
		
		_width = 70;
		_height = 0;
		_marginHeight = 12;
		
		var l_shape:Shape = new Shape();
		_context.addChild( l_shape );
		l_shape.alpha = .5;
		
		l_shape.graphics.beginFill( "#" + StringTools.hex( _backgroundColor, 6 ) );
		l_shape.graphics.drawRect( 0, 0, _width, _height );
		l_shape.graphics.endFill();
		
		l_shape.graphics.beginFill( "#" + StringTools.hex( _marginColor, 6 ) );
		l_shape.graphics.drawRect( 0, 0, _width, _marginHeight );
		l_shape.graphics.endFill();

		_fpsTextField = new Text( "", "", "#" + StringTools.hex( _fpsColor, 6 ) );
		_context.addChild( _fpsTextField );
	}
		
	override private function _driverUpdate():Void
	{
		var l_fps:Int = Std.int( _kernel.getFramerate( true ) );
		var l_fpsValue:Int = Std.int( Math.min( _height, _height / _kernel.factory.targetFramerate * l_fps ) );
		_fpsTextField.text = _fpsLabel + ": " + l_fps + " / " + _kernel.factory.targetFramerate;
	}
}
