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

package awe6.core.drivers.flash;
import awe6.core.drivers.AView;
import awe6.interfaces.IKernel;
import flash.display.Sprite;

/**
 * This View class provides flash target overrides.
 * @author	Robert Fell
 */
class View extends AView
{
	public var sprite( default, null ):Sprite;

	private var _container:Sprite;
	
	public function new( kernel:IKernel, ?sprite:Sprite, ?priority:Int = 0, ?owner:Dynamic ) 
	{
		this.sprite = ( sprite != null ) ? sprite : new Sprite();
		super( kernel, priority, owner );		
	}
	
	override private function _nativeDisposer():Void 
	{
		if ( sprite.parent != null )
		{
			sprite.parent.removeChild( sprite );
		}
	}
	
	override private function _nativeDraw():Void
	{
		if ( _container != null && _container.parent != null )
		{
			_container.parent.removeChild( _container );
		}
		_container = new Sprite();
		_container.mouseEnabled = false;
		sprite.addChild( _container );
		var l_children:Array<View> = cast _children;
		for ( i in l_children )
		{
			if ( i.isVisible )
			{
				_container.addChild( i.sprite );
			}
		}
	}
	
}

