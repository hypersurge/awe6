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

package awe6.core.drivers.openfl-html5;
import awe6.core.drivers.AProfiler;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.geom.Matrix;
import flash.geom.Point;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.geom.Rectangle;
import flash.system.System;
import flash.text.TextField;
import flash.text.TextFormat;
	
/**
 * This Profiler class provides openfl-html5 target overrides.
 * <p>Based on net.hires.utils.Stats by Mr.doob & Theo v1.3</p>
 * @author	Werner Avenant
 * @author	Mr.doob
 * @author	Theo
 * @author	Robert Fell
 */
class Profiler extends AProfiler
{
	private var _bitmapData:BitmapData;
	private var _textFormat:TextFormat;
	private var _fpsTextField:TextField;
	private var _memoryTextField:TextField;
		
	override private function _init():Void
	{
		super._init();
		
		_width = 70;
		_height = 0;
		_marginHeight = 12;
		
		_bitmapData = new BitmapData( _width, _height, true, _backgroundColor );
		var l_bitmap:Bitmap = new Bitmap( _bitmapData );
		l_bitmap.y = _marginHeight;
		_context.addChild( l_bitmap );

		_textFormat = new TextFormat( "_sans", 10 );

		_context.graphics.beginFill( _marginColor );
		_context.graphics.drawRect( 0, 0, _width, _marginHeight );
		_context.graphics.endFill();

		_fpsTextField = new TextField();

		_fpsTextField.defaultTextFormat = _textFormat;
		_fpsTextField.width = _width;
		_fpsTextField.selectable = false;

		_fpsTextField.textColor = _fpsColor;
		_fpsTextField.text = _fpsLabel + ": 99 / 99";
		_context.addChild( _fpsTextField );
	}
		
	override private function _driverUpdate():Void
	{
		var l_fps:Int = Std.int( _kernel.getFramerate( true ) );
		var l_fpsValue:Int = Std.int( Math.min( _height, _height / _kernel.factory.targetFramerate * l_fps ) );
		_fpsTextField.text = _fpsLabel + ": " + l_fps + " / " + _kernel.factory.targetFramerate;
	}
}
