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

package awe6.core.drivers.pixijs;
import awe6.core.drivers.AProfiler;
import awe6.core.drivers.pixijs.extras.gui.Text.PixiTextStyle;
import pixi.core.graphics.Graphics;
import pixi.core.text.Text;
import js.Browser;
	
/**
 * This Profiler class provides PixiJS target overrides.
 * <p>Based on net.hires.utils.Stats by Mr.doob & Theo v1.3</p>
 * @author	Werner Avenant
 * @author	Mr.doob
 * @author	Theo
 * @author	Robert Fell
 */
class Profiler extends AProfiler
{
	private var _fpsTextField:Text;
	private var _memoryTextField:Text;
	private var _isMemoryEnabled:Bool;
		
	override private function _init():Void
	{
		super._init();
		
		// Works on Chrome with flag --enable-precise-memory-info
		_isMemoryEnabled = ( Browser.window.performance != null ) && ( untyped Browser.window.performance.memory != null );
		_width = 75;
		_height = 24;
		_marginHeight = 12;
		
		var l_graphics:Graphics = new Graphics();
		_context.addChild( l_graphics );
		
		if ( _isMemoryEnabled )
		{
			l_graphics.beginFill( _backgroundColor, .25 );
			l_graphics.drawRect( 0, 0, _width, _height );
			l_graphics.endFill();
		}
		
		l_graphics.beginFill( _marginColor );
		l_graphics.drawRect( 0, 0, _width, _marginHeight );
		l_graphics.endFill();
		
		l_graphics.cacheAsBitmap = true;

		var l_textStyleFps:PixiTextStyle = new PixiTextStyle();
		l_textStyleFps.fontSize = 10;
		l_textStyleFps.fill = _fpsColor;
		_fpsTextField = new Text( "", l_textStyleFps );
		_context.addChild( _fpsTextField );
		
		if ( _isMemoryEnabled )
		{
			var l_textStyleMemory:PixiTextStyle = new PixiTextStyle();
			l_textStyleMemory.fontSize = 10;
			l_textStyleMemory.fill = _memoryColor;
			_memoryTextField = new Text( "", l_textStyleMemory );
			_memoryTextField.y = 12;
			_context.addChild( _memoryTextField );
		}
	}
		
	override private function _driverUpdate():Void
	{
		var l_fps:Int = Std.int( _kernel.getFramerate( true ) );
		var l_fpsValue:Int = Std.int( Math.min( _height, _height / _kernel.factory.targetFramerate * l_fps ) );
		_fpsTextField.text = _fpsLabel + ": " + l_fps + " / " + _kernel.factory.targetFramerate;
		if ( _isMemoryEnabled && ( _updates % _kernel.factory.targetFramerate == 0 ) )
		{
			var l_memoryUsed:Float = Math.round( untyped Browser.window.performance.memory.usedJSHeapSize / 1024 / 1024 );
			var l_memoryLimit = Math.round( untyped Browser.window.performance.memory.jsHeapSizeLimit / 1024 / 1024 );
			_memoryTextField.text = _memoryLabel + ": " + l_memoryUsed + " / " + l_memoryLimit;
		}
	}
}
