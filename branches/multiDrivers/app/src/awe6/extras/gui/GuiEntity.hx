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
import awe6.core.Entity;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPosition;
import flash.display.Sprite;

class GuiEntity extends Entity, implements IPosition
{
	public var x( default, __set_x ):Float;
	public var y( default, __set_y ):Float;
	public var width( default, null ):Float;
	public var height( default, null ):Float;
	public var isFlippedX( default, __set_isFlippedX ):Bool;
	public var isFlippedY( default, __set_isFlippedY ):Bool;
	
	private var _sprite:Sprite;
	
	public function new( p_kernel:IKernel, ?p_width:Float = 100, ?p_height:Float = 100, ?p_isMasked:Bool = true )
	{
		Reflect.setField( this, "isFlippedX", false );
		Reflect.setField( this, "isFlippedY", false );
		width = p_width;
		height = p_height;
		_sprite = new Sprite();
		if ( p_isMasked )
		{
			var l_mask:Sprite = new Sprite();
			l_mask.graphics.beginFill( 0xFF0000 );
			l_mask.graphics.drawRect( 0, 0, p_width, p_height );
			_sprite.addChild( l_mask );
			_sprite.mask = l_mask;
		}
		super( p_kernel, _sprite );
	}
	
	public function setPosition( p_x:Float, p_y:Float ):Void
	{
		x = p_x;
		y = p_y;
	}
	
	private function __set_x( p_value:Float ):Float
	{
		x = p_value;
		_sprite.x = x;
		return x;
	}
	
	private function __set_y( p_value:Float ):Float
	{
		y = p_value;
		_sprite.y = y;
		return y;
	}
	
	private function __set_isFlippedX( p_value:Bool ):Bool
	{
		if ( p_value == isFlippedX )
		{
			return isFlippedX;
		}
		isFlippedX = p_value;
		_sprite.scaleX *= -1;
		if ( isFlippedX )
		{
			x += width;
		}
		else
		{
			x -= width;
		}
		return isFlippedX;
	}

	private function __set_isFlippedY( p_value:Bool ):Bool
	{
		if ( p_value == isFlippedY )
		{
			return isFlippedY;
		}
		isFlippedY = p_value;
		_sprite.scaleY *= -1;
		if ( isFlippedY )
		{
			y += height;
		}
		else
		{
			y -= height;
		}
		return isFlippedY;
	}
}