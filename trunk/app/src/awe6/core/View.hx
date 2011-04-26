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

package awe6.core;
import awe6.interfaces.IDisposable;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import flash.display.Sprite;

/**
 * The View class provides a minimalist implementation of the IView interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class View extends Process, implements IView
{
	public var parent( __get_parent, null ):IView;
	public var priority( __get_priority, __set_priority ):Int;
	public var isVisible( default, __set_isVisible ):Bool;	
	public var sprite( default, null ):Sprite;
	
	private var _isDirty:Bool;
	private var _container:Sprite;
	private var _children:Array<View>;
	
	public function new( kernel:IKernel, ?sprite:Sprite, ?priority:Int = 0 ) 
	{
		this.sprite = ( sprite != null ) ? sprite : new Sprite();
		this.priority = priority;
		super( kernel );		
	}
	
	override private function _init():Void 
	{
		super._init();
		isVisible = true;
		_isDirty = true;
		_children = new Array<View>();
	}
	
	public function addChild( child:IView, ?priority:Int ):Void
	{
		if ( isDisposed ) return;
		var l_child:View = cast child;
		if ( l_child.parent != this )
		{
			child.remove();
			_children.push( l_child );
			l_child._setParent( this );
		}
		if ( priority != null ) child.priority = priority;
		_isDirty = true;
	}
	
	public function removeChild( child:IView ):Void
	{
		if ( isDisposed ) return;
		var l_child:View = cast child;
		if ( l_child.parent != this ) return;
		_children.remove( l_child );
		l_child._setParent( null );
		_isDirty = true;
	}
	
	public function remove():Void
	{
		if ( parent != null ) parent.removeChild( this );
	}
	
	public function clear():Void
	{
		for ( i in _children ) removeChild( i );
	}
		
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		for ( i in _children ) i.update( deltaTime );
		if ( _isDirty ) _draw();
	}
	
	override private function _disposer():Void 
	{
		remove();
		if ( sprite.parent != null ) sprite.parent.removeChild( sprite );
		clear();
		super._disposer();	
	}
	
	private function _draw():Void
	{
		_children.sort( _tools.sortByPriority );
		if ( _container != null && _container.parent != null ) _container.parent.removeChild( _container );
		_container = new Sprite();
		_container.mouseEnabled = false;
		sprite.addChild( _container );
		for ( i in _children )
		{
			if ( i.isVisible ) _container.addChild( i.sprite );
		}
		_isDirty = false;
	}
	
	private function _setParent( parent:IView ):Void
	{
		this.parent = parent;
	}
	
	private function __get_priority():Int { return priority; }
	private function __set_priority( value:Int ):Int
	{
		if ( value == priority ) return priority;
		priority = value;
		var l_parent:View = cast parent;
		if ( l_parent != null ) l_parent._isDirty = true;
		return priority;
	}
	
	private function __set_isVisible( value:Bool ):Bool
	{
		if ( value == isVisible ) return isVisible;
		isVisible = value;
		var l_parent:View = cast parent;
		if ( l_parent != null )
		{
			l_parent._draw();
		}
		return isVisible;
	}
	
	private function __get_parent():IView { return parent; }
}

