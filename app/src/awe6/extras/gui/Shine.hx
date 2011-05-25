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

package awe6.extras.gui;
import awe6.interfaces.IKernel;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.BlendMode;
import flash.display.GradientType;
import flash.display.SpreadMethod;
import flash.display.Sprite;
import flash.geom.Matrix;

class Shine extends GuiEntity
{
	private var _bitmap:Bitmap;
	private var _animated:Sprite;
	private var _canvas:BitmapData;
	private var _mask:BitmapData;
	private var _matrix:Matrix;
	
	public function new( kernel:IKernel, width:Float, height:Float, mask:BitmapData )
	{
		_mask = mask;
		super( kernel, width, height, false );
	}
	
	override private function _init():Void 
	{
		super._init();
		_matrix = new Matrix();
		_matrix.createGradientBox( width, height, Math.PI * .125 );
		_matrix.createGradientBox( width, height );
		_matrix.createGradientBox( width, height, Math.PI * .125 );
		_animated = new Sprite();
		_canvas = new BitmapData( _mask.width, _mask.height, true, 0x00 );
		_bitmap = new Bitmap( _canvas );
		_bitmap.blendMode = BlendMode.ADD;
		_sprite.addChild( _bitmap );
		_sprite.mouseEnabled = false;
		_sprite.mouseChildren = false;
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		_canvas.lock();
		_matrix.tx += 5;
		_matrix.rotate( Math.sin( _updates / 25 ) * .01 );
		_animated.graphics.clear();
		_animated.graphics.beginGradientFill( GradientType.LINEAR, [ 0x000000, 0xFFFFFF, 0x333333, 0xa6a6a6, 0xbfbfbf, 0xa6a6a6, 0xFFFFFF, 0x000000 ], [ 1, 1, 1, 1, 1, 1, 1, 1 ], [ 35, 75, 125, 200, 210, 220, 225, 250 ], _matrix, SpreadMethod.REFLECT );
		_animated.graphics.drawRect( 0, 0, width, height );
		_canvas.draw( _animated );
		_canvas.copyChannel( _mask, _mask.rect, _mask.rect.topLeft, 8, 8 );
		_canvas.unlock();
	}
	
}