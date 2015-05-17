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

package awe6.core.drivers.openfl.native;
import awe6.core.drivers.AProfiler;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.geom.Rectangle;
import flash.system.System;
import flash.text.TextField;
import flash.text.TextFormat;
	
/**
 * This Profiler class provides openfl-native target overrides.
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
		
		_bitmapData = new BitmapData( _width, _height, true, _backgroundColor );
		var l_bitmap:Bitmap = new Bitmap( _bitmapData );
		l_bitmap.y = _marginHeight;
		_context.addChild( l_bitmap );

		_textFormat = new TextFormat( "_sans", 9 );

		_context.graphics.beginFill( _marginColor );
		_context.graphics.drawRect(0, 0, _width, _marginHeight );
		_context.graphics.endFill();

		_fpsTextField = new TextField();
		_memoryTextField = new TextField();

		_fpsTextField.defaultTextFormat = _memoryTextField.defaultTextFormat = _textFormat;
		_fpsTextField.width = _memoryTextField.width = _width;
		_fpsTextField.selectable = _memoryTextField.selectable = false;

		_fpsTextField.textColor = _fpsColor;
		_fpsTextField.text = _fpsLabel + ": ";
		_context.addChild( _fpsTextField );

		_memoryTextField.y = 10;
		_memoryTextField.textColor = _memoryColor;
		_memoryTextField.text = _memoryLabel + ": ";
		_context.addChild( _memoryTextField );
	}
		
	override private function _driverUpdate():Void
	{
		var l_fps:Int = Std.int( _kernel.getFramerate( true ) );
		var l_memory:Int = Std.int( System.totalMemory / 1024 / 10 );

		var l_fpsValue:Int = Std.int( Math.min( _height, _height / _kernel.factory.targetFramerate * l_fps ) );
		var l_memoryNode:Int = Std.int( Math.min( _height, Math.sqrt( Math.sqrt( l_memory * 10 * _height ) ) ) ) - 2;

		_bitmapData.scroll( 1, 0 );
		_bitmapData.fillRect( new Rectangle( 0, 0, 1, _bitmapData.height ), _backgroundColor );
		_bitmapData.setPixel( 0, _bitmapData.height - l_fpsValue, _fpsColor );
		_bitmapData.setPixel( 0, _bitmapData.height - l_memoryNode, _memoryColor );

		_fpsTextField.text = _fpsLabel + ": " + l_fps + " / " + _kernel.factory.targetFramerate;
		_memoryTextField.text = _memoryLabel + ": " + l_memory;
	}
}
