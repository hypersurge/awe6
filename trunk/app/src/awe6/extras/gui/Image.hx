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

package awe6.extras.gui;
import awe6.interfaces.IKernel;
import flash.display.Bitmap;
import flash.display.BitmapData;

class Image extends GuiEntity
{
	private var _bitmapData:BitmapData;
	private var _bitmap:Bitmap;
	
	public function new( p_kernel:IKernel, p_bitmapData:BitmapData )
	{
		_bitmapData = p_bitmapData;
		super( p_kernel, p_bitmapData.width, p_bitmapData.height );
	}
	
	override private function _init():Void 
	{
		super._init();
		_bitmap = new Bitmap( _bitmapData );
		_context.mouseEnabled = false;
		_context.addChild( _bitmap );
	}
	
	public function configure( p_bitmapData:BitmapData ):Void
	{
		_bitmapData = p_bitmapData;
		_bitmap.bitmapData = _bitmapData;
	}
	
	override private function _disposer():Void
	{
		_bitmapData.dispose();
		super._disposer();
	}
	
	
}