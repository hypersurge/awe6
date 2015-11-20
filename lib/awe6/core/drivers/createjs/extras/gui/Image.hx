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

package awe6.core.drivers.createjs.extras.gui;
import awe6.interfaces.IKernel;
import createjs.easeljs.Bitmap;

class Image extends GuiEntity 
{	
	public var alpha( get, set ):Float;
	
	private var _imageData:Dynamic; // String, CanvasElement, ImageElement
	private var _bitmap:Bitmap;
	private var _isAdd:Bool;
	
	public function new( p_kernel:IKernel, p_imageData:Dynamic, p_isAdd:Bool = false, p_alpha:Float = 1 )
	{
		_imageData = p_imageData;
		_isAdd = p_isAdd;
		super( p_kernel, false );
		alpha = p_alpha;
	}
	
	override private function _init():Void 
	{
		super._init();
		_context.mouseEnabled = false;
		configure( _imageData, _isAdd );
	}
	
	public function configure( p_imageData:Dynamic, p_isAdd:Bool = false ):Void
	{
		_imageData = p_imageData;
		_isAdd = p_isAdd;
		if ( ( _bitmap != null ) && ( _bitmap.parent != null ) )
		{
			_bitmap.parent.removeChild( _bitmap );
		}
		_bitmap = new Bitmap( _imageData );
		_bitmap.compositeOperation = _isAdd ? "lighter" : "source-over";
		if ( _bitmap.image != null )
		{
			width = _bitmap.image.width;
			height = _bitmap.image.height;
		}
		_context.addChild( _bitmap );
	}
	
	private function get_alpha():Float
	{
		return _bitmap.alpha;
	}
	
	private function set_alpha( p_value:Float ):Float
	{
		return _bitmap.alpha = p_value;
	}
}