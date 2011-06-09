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
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EMouseButton;
import awe6.interfaces.IKernel;
import demo.AssetManager;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;
import flash.geom.Matrix;

class Sphere extends Entity
{
	private var _assetManager:AssetManager;
	private var _sprite:Sprite;
	private var _width:Float;
	private var _height:Float;
	private var _width2:Float;
	private var _height2:Float;
	private var _bouncer:Bouncer;
	
	public function new( kernel:IKernel ) 
	{
		_sprite = new Sprite();
		_assetManager = cast kernel.assets;
		super( kernel, _sprite );
	}
	
	override private function _init():Void 
	{
		super._init();
		var l_scale:Float = _tools.range( Math.random(), .5, 1 );
//		l_scale = 1;
		_width = 100 * l_scale;
		_height = 100 * l_scale;
		_width2 = _width / 2;
		_height2 = _height / 2;
		addEntity( _bouncer = new Bouncer( _kernel, _width, _height ) );
		var l_source:BitmapData = _assetManager.sphere.clone();
		var l_bitmapData:BitmapData = new BitmapData( Std.int( _width ), Std.int( _height * 1.5 ), true, 0x00 );
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
		_sprite.x = _bouncer.x;
		_sprite.y = _bouncer.y;
		_sprite.scaleX = _bouncer.vx > 1 ? 1 : -1;
		view.priority = Std.int( _bouncer.y );
		if ( _isHit() )
		{
			_kernel.audio.start( "Sfx" + ( Std.random( 4 ) + 1 ), EAudioChannel.EFFECTS, 0, 0, 1, _bouncer.x / _kernel.factory.width );
			_kernel.overlay.flash( 100, true, 1, Std.random( 0xFFFFFF ) );
			dispose();
		}
	}
	
	private function _isHit():Bool
	{
		if ( !_kernel.inputs.mouse.getIsButtonPress( EMouseButton.LEFT ) ) return false;
		var l_dx:Float = _kernel.inputs.mouse.x - _bouncer.x;
		var l_dy:Float = _kernel.inputs.mouse.y - _bouncer.y;
		var l_dist:Float = ( ( l_dx * l_dx ) + ( l_dy * l_dy ) );
		return ( l_dist < ( _width2 * _width2 ) );
	}
	
}