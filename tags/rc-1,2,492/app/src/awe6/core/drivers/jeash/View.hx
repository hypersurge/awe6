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

package awe6.core.drivers.jeash;
import awe6.core.Context;
import awe6.core.drivers.AView;

/**
 * This View class provides jeash target overrides.
 * @author	Robert Fell
 */
class View extends AView
{
	private var _container:Context;
	
	override private function _init():Void 
	{
		if ( context == null )
		{
			context = new Context(); 
		}
		super._init();
	}
	
	override private function _driverDisposer():Void 
	{
		if ( ( context != null ) && ( context.parent != null ) )
		{
			try
			{
				context.parent.removeChild( context );
			}
			catch ( l_error:Dynamic ) {}
		}
	}
	
	override private function _driverDraw():Void
	{
		if ( parent != null )
		{
			parent.x = parent.x;
		}
		if ( _container != null && _container.parent != null )
		{
			_container.parent.removeChild( _container );
		}
		_container = new Context();
		_container.mouseEnabled = false;
		context.addChild( _container );
		var l_children:Array<View> = cast _children;
		for ( i in l_children )
		{
			if ( i.isVisible )
			{
				_container.addChild( i.context );
			}
		}
	}
	
	override private function _set_x( p_value:Float ):Float
	{
		context.x = p_value;
		_isDirty = true;
		return super._set_x( p_value );
	}
	
	override private function _set_y( p_value:Float ):Float
	{
		context.y = p_value;
		_isDirty = true;
		return super._set_y( p_value );
	}
	
}

