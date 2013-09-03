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

package awe6.core.drivers;
import awe6.core.Context;
import awe6.core.Process;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;

/**
 * The View class provides a minimalist implementation of the IView interface.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
#if haxe3
class AView extends Process implements IView
#else
class AView extends Process, implements IView
#end
{
	public var context( default, null ):Context;
	public var owner( default, null ):Dynamic;
	public var globalX( default, null ):Float;
	public var globalY( default, null ):Float;
	#if haxe3
	@:isVar public var priority( get, set ):Int;
	public var x( default, set ):Float;
	public var y( default, set ):Float;
	public var isVisible( default, set ):Bool;	
	public var isInViewStack( get, null ):Bool;
	public var parent( get, null ):IView;
	#else
	public var priority( get_priority, set_priority ):Int;
	public var x( default, set_x ):Float;
	public var y( default, set_y ):Float;
	public var isVisible( default, set_isVisible ):Bool;	
	public var isInViewStack( get_isInViewStack, null ):Bool;
	public var parent( get_parent, null ):IView;
	#end
	
	private var _isDirty:Bool;
	private var _children:Array<AView>;
	
	public function new( p_kernel:IKernel, ?p_context:Context, p_priority:Int = 0, ?p_owner:Dynamic ) 
	{
		context = p_context;
		priority = p_priority;
		owner = p_owner;
		super( p_kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		globalX = 0;
		globalY = 0;
		x = 0;
		y = 0;
		isVisible = true;
		_isDirty = true;
		_children = new Array<AView>();
	}
	
	public function addChild( p_child:IView, p_priority:Int = 0 ):IView
	{
		if ( isDisposed || ( p_child == null ) )
		{
			return null;
		}
		if ( p_child.parent != this )
		{
			p_child.remove();
			if ( Std.is( p_child, AView ) )
			{
				var l_child:AView = cast p_child;
				_children.push( l_child );
				l_child._setParent( this );
			}
		}
		if ( p_priority != 0 )
		{
			p_child.priority = p_priority;
		}
		_isDirty = true;
		return p_child;
	}
	
	public function removeChild( p_child:IView ):Void
	{
		if ( isDisposed || ( p_child == null ) )
		{
			return;
		}
		if ( Std.is( p_child, AView ) )
		{
			var l_child:AView = cast p_child;
			if ( l_child.parent != this )
			{
				return;
			}
			_children.remove( l_child );
			l_child._setParent( null );
		}
		_isDirty = true;
	}
	
	public function remove():Void
	{
		if ( parent != null )
		{
			parent.removeChild( this );
		}
	}
	
	public function clear():Void
	{
		for ( i in _children )
		{
			removeChild( i );
		}
	}
		
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		for ( i in _children )
		{
			i.update( p_deltaTime );
		}
		if ( _isDirty )
		{
			_draw();
		}
		//TODO: inefficient recalculation of global position - necessary, but needs rethink
		globalX = ( parent == null ) ? x : x + parent.globalX;
		globalY = ( parent == null ) ? y : y + parent.globalY;
	}
	
	override private function _disposer():Void 
	{
		remove();
		_driverDisposer();
		clear();
		super._disposer();	
	}
	
	private function _driverDisposer():Void
	{
		//override me
	}
	
	private function _draw():Void
	{
		if ( isDisposed )
		{
			return;
		}
		_children.sort( _tools.sortByPriority );
		_driverDraw();
		_isDirty = false;
	}
	
	private function _driverDraw():Void
	{
		//override me
	}
	
	private function _setParent( p_parent:IView ):Void
	{
		parent = p_parent;
	}
	
	private function get_priority():Int
	{
		return priority;
	}
	
	private function set_priority( p_value:Int ):Int
	{
		if ( p_value == priority )
		{
			return priority;
		}
		priority = p_value;
		if ( Std.is( parent, AView ) )
		{
			var l_parent:AView = cast parent;
			if ( l_parent != null )
			{
				l_parent._isDirty = true;
			}
		}
		return priority;
	}
	
	private function set_isVisible( p_value:Bool ):Bool
	{
		if ( p_value == isVisible )
		{
			return isVisible;
		}
		isVisible = p_value;
		if ( Std.is( parent, AView ) )
		{
			var l_parent:AView = cast parent;
			if ( l_parent != null )
			{
				l_parent._draw();
			}
		}
		return isVisible;
	}
	
	private function get_parent():IView
	{
		return parent;
	}
	
	private function get_isInViewStack():Bool
	{
		if ( !isVisible )
		{
			return false;
		}
		if ( owner == _kernel )
		{
			return true;
		}
		if ( parent == null )
		{
			return false;
		}
		return parent.isInViewStack;
	}
	
	private function set_x( p_value:Float ):Float
	{
		x = p_value;
		globalX = ( parent == null ) ? x : x + parent.globalX;
		return x;
	}
	
	private function set_y( p_value:Float ):Float
	{
		y = p_value;
		globalY = ( parent == null ) ? y : y + parent.globalY;
		return y;
	}
	
	public function setPosition( p_x:Float, p_y:Float ):Void
	{
		x = p_x;
		y = p_y;
	}
	
}

