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
import awe6.core.Context;
import awe6.core.Entity;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPositionable;
import createjs.easeljs.Shape;

class GuiEntity extends Entity implements IPositionable
{
	public var width( default, null ):Float;
	public var height( default, null ):Float;
	public var x( default, set ):Float;
	public var y( default, set ):Float;
	public var isFlippedX( default, set ):Bool;
	public var isFlippedY( default, set ):Bool;
	
	private var _context:Context;
	
	public function new( p_kernel:IKernel, p_width:Float = 100, p_height:Float = 100, p_isMasked:Bool = true )
	{
		Reflect.setField( this, "isFlippedX", false );
		Reflect.setField( this, "isFlippedY", false );
		width = p_width;
		height = p_height;
		_context = new Context();
		setPosition( 0, 0 );
		if ( p_isMasked )
		{
			var l_mask:Shape = new Shape();
			l_mask.graphics.beginFill( "#FF0000" );
			l_mask.graphics.drawRect( 0, 0, width, height );
			l_mask.graphics.endFill();
			_context.addChild( l_mask );
			_context.mask = l_mask;
		}
		super( p_kernel, _context );
	}
	
	public function setPosition( p_x:Float, p_y:Float ):Void
	{
		x = p_x;
		y = p_y;
	}
	
	private function set_x( p_value:Float ):Float
	{
		x = p_value;
		_context.x = x;
		return x;
	}
	
	private function set_y( p_value:Float ):Float
	{
		y = p_value;
		_context.y = y;
		return y;
	}
	
	private function set_isFlippedX( p_value:Bool ):Bool
	{
		if ( p_value == isFlippedX )
		{
			return isFlippedX;
		}
		isFlippedX = p_value;
		_context.scaleX *= -1;
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

	private function set_isFlippedY( p_value:Bool ):Bool
	{
		if ( p_value == isFlippedY )
		{
			return isFlippedY;
		}
		isFlippedY = p_value;
		_context.scaleY *= -1;
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