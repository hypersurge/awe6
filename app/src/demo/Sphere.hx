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

package demo;
import awe6.core.Entity;
import awe6.interfaces.IKernel;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;
import flash.geom.Matrix;

class Sphere extends Entity
{
	private var _sprite:Sprite;
	private var _width:Float;
	private var _height:Float;
	private var _width2:Float;
	private var _height2:Float;
	private var _vx:Float;
	private var _vy:Float;
	private var _x:Float;
	private var _y:Float;
	
	public function new( kernel:IKernel ) 
	{
		_sprite = new Sprite();
		super( kernel, _sprite );
	}
	
	override private function _init():Void 
	{
		super._init();
		var l_scale:Float = _tools.range( Math.random(), .5, 1 );
		_width = 100 * l_scale;
		_height = 100 * l_scale;
		_width2 = _width / 2;
		_height2 = _height / 2;
		_vx = ( Math.random() - .5 ) * 20;
		_vy = ( Math.random() - .5 ) * 20;
		_x = _kernel.factory.width * Math.random();
		_y = _kernel.factory.height * Math.random();
		var l_source:BitmapData = _kernel.assets.getAsset( "Sphere" );
		var l_bitmapData:BitmapData = new BitmapData( Std.int( _width ), Std.int( _height ), true, 0x00 );
		var l_matrix:Matrix = new Matrix();
		l_matrix.scale( l_scale, l_scale );
		l_bitmapData.draw( l_source, l_matrix, true );
		l_source.dispose();
		var l_sphere:Bitmap = new Bitmap( l_bitmapData );
		l_sphere.smoothing = true;
		l_sphere.x = -_width2;
		l_sphere.y = -_height2;
		_sprite.addChild( l_sphere );
	}	
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		_x += _vx;
		_y += _vy;
		if ( _x > ( _kernel.factory.width - _width2 ) ) _vx *= -1;
		if ( _y > ( _kernel.factory.height - _height2 ) ) _vy *= -1;
		if ( _x < _width2 ) _vx *= -1;
		if ( _y < _height2 ) _vy *= -1;
		_x = _tools.limit( _x, _width2, _kernel.factory.width - _width2 );
		_y = _tools.limit( _y, _height2, _kernel.factory.height - _height2 );
		_sprite.x = _x;
		_sprite.y = _y;
		if ( _isHit() ) dispose();
	}
	
	private function _isHit():Bool
	{
		if ( !_kernel.inputs.mouse.getIsButtonDown() ) return false;
		var l_dx:Float = _kernel.inputs.mouse.x - _x;
		var l_dy:Float = _kernel.inputs.mouse.y - _y;
		var l_dist:Float = ( ( l_dx * l_dx ) + ( l_dy * l_dy ) );
		return ( l_dist < ( _width2 * _width2 ) );
	}
	
}