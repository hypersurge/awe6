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

package awe6.core;
import awe6.interfaces.EAgenda;
import awe6.interfaces.EKey;
import awe6.interfaces.EMouseCursor;
import awe6.interfaces.IInputMouse;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPosition;
import awe6.interfaces.IView;

class BasicButton extends Entity, implements IPosition
{
	public var x( default, __set_x ):Float;
	public var y( default, __set_y ):Float;
	public var width( default, __set_width ):Float;
	public var height( default, __set_height ):Float;
	public var isOver( default, null ):Bool;
	public var onClickCallback:Void->Void;
	public var onRollOverCallback:Void->Void;
	public var onRollOutCallback:Void->Void;
	
	private var _stateUp:_HelperState;
	private var _stateOver:_HelperState;
	private var _keyType:EKey;
	
	public function new( kernel:IKernel, up:IView, over:IView, ?width:Int = 100, ?height:Int = 20, ?x:Float = 0, ?y:Float = 0, ?key:EKey, ?onClickCallback:Void->Void, ?onRollOverCallback:Void->Void, ?onRollOutCallback:Void->Void )
	{
		_stateUp = new _HelperState( kernel, up );
		_stateOver = new _HelperState( kernel, over );
		Reflect.setField( this, "x", x );
		Reflect.setField( this, "y", y );
		this.width = width;
		this.height = height;
		_keyType = key;
		this.onClickCallback = onClickCallback;
		this.onRollOverCallback = onRollOverCallback;
		this.onRollOutCallback = onRollOutCallback;
		super( kernel );
	}
	
	override private function _init():Void
	{
		super._init();
		view.x = x;
		view.y = y;
		isOver = false;
		addEntity( _stateUp, EAgenda.SUB_TYPE( _HelperEState.UP ), true );
		addEntity( _stateOver, EAgenda.SUB_TYPE( _HelperEState.OVER ), true );
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.UP ) );
	}
		
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		var l_inputMouse:IInputMouse = _kernel.inputs.mouse;
		var l_isOver:Bool = _isPointInsideRectangle( l_inputMouse.x + view.x - view.globalX, l_inputMouse.y + view.y - view.globalY, x, y, width, height );
		if ( l_isOver ) l_inputMouse.cursorType = EMouseCursor.BUTTON;
		if ( l_isOver && !isOver )
		{
			onRollOver();
		}
		if ( !l_isOver && isOver )
		{
			l_inputMouse.cursorType = EMouseCursor.ARROW;
			onRollOut();
		}
		isOver = l_isOver;
		if ( isOver && l_inputMouse.getIsButtonRelease() )
		{
			onClick();
		}
		if ( ( _keyType != null ) && ( _kernel.inputs.keyboard.getIsKeyRelease( _keyType ) ) )
		{
			onClick();
		}
	}
	
	private function _isPointInsideRectangle( pointX:Float, pointY:Float, rectX:Float, rectY:Float, rectWidth:Float, rectHeight:Float ):Bool
	{
		if ( pointX < rectX )
		{
			return false;
		}
		if ( pointY < rectY )
		{
			return false;
		}
		if ( pointX > ( rectX + rectWidth ) )
		{
			return false;
		}
		if ( pointY > ( rectY + rectHeight ) )
		{
			return false;
		}
		return true;
	}
	
	public function onClick():Void
	{
		if ( onClickCallback == null )
		{
			return;
		}
		Reflect.callMethod( this, onClickCallback, [] );
	}
	
	public function onRollOver():Void
	{
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.OVER ) );
		if ( onRollOverCallback == null )
		{
			return;
		}
		Reflect.callMethod( this, onRollOverCallback, [] );		
	}
	
	public function onRollOut():Void
	{
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.UP ) );
		if ( onRollOutCallback == null )
		{
			return;
		}
		Reflect.callMethod( this, onRollOutCallback, [] );		
	}
	
	public function setPosition( x:Float, y:Float ):Void
	{
		this.x = x;
		this.y = y;
	}
	
	private function __set_x( value:Float ):Float
	{
		x = value;
		view.x = x;
		return x;
	}
	
	private function __set_y( value:Float ):Float
	{
		y = value;
		view.y = y;
		return y;
	}
	
	private function __set_width( value:Float ):Float
	{
		width = value;
		return width;
	}
	
	private function __set_height( value:Float ):Float
	{
		height = value;
		return height;
	}
}

private class _HelperState extends Entity
{
	public function new( kernel:IKernel, view:IView )
	{
		super( kernel );
		this.view = view;
	}
}

private enum _HelperEState
{
	UP;
	OVER;
}