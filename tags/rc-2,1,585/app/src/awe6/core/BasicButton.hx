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
import awe6.interfaces.IPositionable;
import awe6.interfaces.IView;

#if haxe3
class BasicButton extends Entity implements IPositionable
#else
class BasicButton extends Entity, implements IPositionable
#end
{
	#if haxe3
	public var x( default, set ):Float;
	public var y( default, set ):Float;
	public var width( default, set ):Float;
	public var height( default, set ):Float;
	#else
	public var x( default, set_x ):Float;
	public var y( default, set_y ):Float;
	public var width( default, set_width ):Float;
	public var height( default, set_height ):Float;
	#end
	public var isOver( default, null ):Bool;
	public var onClickCallback:Void->Void;
	public var onRollOverCallback:Void->Void;
	public var onRollOutCallback:Void->Void;
	
	private var _stateUp:_HelperState;
	private var _stateOver:_HelperState;
	private var _keyType:EKey;
	
	public function new( p_kernel:IKernel, p_up:IView, p_over:IView, p_width:Float = 100, p_height:Float = 20, p_x:Float = 0, p_y:Float = 0, ?p_keyType:EKey, ?p_onClickCallback:Void->Void, ?p_onRollOverCallback:Void->Void, ?p_onRollOutCallback:Void->Void )
	{
		_stateUp = new _HelperState( p_kernel, p_up );
		_stateOver = new _HelperState( p_kernel, p_over );
		Reflect.setField( this, "x", p_x );
		Reflect.setField( this, "y", p_y );
		width = p_width;
		height = p_height;
		_keyType = p_keyType;
		onClickCallback = p_onClickCallback;
		onRollOverCallback = p_onRollOverCallback;
		onRollOutCallback = p_onRollOutCallback;
		super( p_kernel );
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
		
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		var l_inputMouse:IInputMouse = _kernel.inputs.mouse;
		var l_isOver:Bool = _isPointInsideRectangle( l_inputMouse.x + view.x - view.globalX, l_inputMouse.y + view.y - view.globalY, x, y, width, height );
		if ( l_isOver ) l_inputMouse.cursorType = EMouseCursor.BUTTON;
		if ( l_isOver && !isOver )
		{
			onRollOver();
		}
		if ( !l_isOver && isOver )
		{
			l_inputMouse.cursorType = EMouseCursor.AUTO;
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
	
	private function _isPointInsideRectangle( p_pointX:Float, p_pointY:Float, p_rectX:Float, p_rectY:Float, p_rectWidth:Float, p_rectHeight:Float ):Bool
	{
		if ( p_pointX < p_rectX )
		{
			return false;
		}
		if ( p_pointY < p_rectY )
		{
			return false;
		}
		if ( p_pointX > ( p_rectX + p_rectWidth ) )
		{
			return false;
		}
		if ( p_pointY > ( p_rectY + p_rectHeight ) )
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
	
	public function setPosition( p_x:Float, p_y:Float ):Void
	{
		x = p_x;
		y = p_y;
	}
	
	private function set_x( p_value:Float ):Float
	{
		x = p_value;
		if ( view != null )
		{
			view.x = x;
		}
		return x;
	}
	
	private function set_y( p_value:Float ):Float
	{
		y = p_value;
		if ( view != null )
		{
			view.y = y;
		}
		return y;
	}
	
	private function set_width( p_value:Float ):Float
	{
		width = p_value;
		return width;
	}
	
	private function set_height( p_value:Float ):Float
	{
		height = p_value;
		return height;
	}
}

private class _HelperState extends Entity
{
	public function new( p_kernel:IKernel, p_view:IView )
	{
		super( p_kernel );
		view = p_view;
	}
}

private enum _HelperEState
{
	UP;
	OVER;
}