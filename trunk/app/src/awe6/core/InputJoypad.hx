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
import awe6.interfaces.EJoypadButton;
import awe6.interfaces.EJoypadTouch;
import awe6.interfaces.EKey;
import awe6.interfaces.EMouseButton;
import awe6.interfaces.IInputJoypad;
import awe6.interfaces.IKernel;

/**
 * The InputJoypad class provides a minimalist implementation of the IInputJoypad interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class InputJoypad implements IInputJoypad
{
	private var _kernel:IKernel;
	private var _mouse:InputMouse;
	private var _isTouchEnabled:Bool;
	private var _keyUp:EKey;
	private var _keyRight:EKey;
	private var _keyDown:EKey;
	private var _keyLeft:EKey;
	private var _keyPrimary:EKey;
	private var _keySecondary:EKey;
	private var _keyUpAlt:EKey;
	private var _keyRightAlt:EKey;
	private var _keyDownAlt:EKey;
	private var _keyLeftAlt:EKey;
	private var _keyPrimaryAlt:EKey;
	private var _keySecondaryAlt:EKey;
	private var _joypadTouchType:EJoypadTouch;
	private var _joypadStateCache:_JoypadState;
	
	public function new( p_kernel:IKernel, ?p_up:EKey, ?p_right:EKey, ?p_down:EKey, ?p_left:EKey, ?p_primary:EKey, ?p_secondary:EKey, ?p_upAlt:EKey, ?p_rightAlt:EKey, ?p_downAlt:EKey, ?p_leftAlt:EKey, ?p_primaryAlt:EKey, ?p_secondaryAlt:EKey, ?p_joypadTouchType:EJoypadTouch )
	{
		_kernel = p_kernel;
		_keyUp = ( p_up != null ) ? p_up : EKey.UP;
		_keyRight = ( p_right != null ) ? p_right : EKey.RIGHT;
		_keyDown = ( p_down != null ) ? p_down : EKey.DOWN;
		_keyLeft = ( p_left != null ) ? p_left : EKey.LEFT;
		_keyPrimary = ( p_primary != null ) ? p_primary : EKey.SPACE;
		_keySecondary = ( p_secondary != null ) ? p_secondary : EKey.Z;
		_keyUpAlt = ( p_upAlt != null ) ? p_upAlt : EKey.W;
		_keyRightAlt = ( p_rightAlt != null ) ? p_rightAlt : EKey.D;
		_keyDownAlt = ( p_downAlt != null ) ? p_downAlt : EKey.S;
		_keyLeftAlt = ( p_leftAlt != null ) ? p_leftAlt : EKey.A;
		_keyPrimaryAlt = ( p_primaryAlt != null ) ? p_primaryAlt : EKey.Q;
		_keySecondaryAlt = ( p_secondaryAlt != null ) ? p_secondaryAlt : EKey.E;
		_joypadTouchType = ( p_joypadTouchType != null ) ? p_joypadTouchType : _kernel.factory.joypadTouchType;
		_isTouchEnabled = _kernel.factory.joypadTouchType != EJoypadTouch.DISABLED;
		_joypadStateCache = { age:0, isFire:false, isUp:false, isRight:false, isDown:false, isLeft:false, isPrevFire:false, isPrevUp:false, isPrevRight:false, isPrevDown:false, isPrevLeft:false };
	}
	
	public function toString():String
	{
		return Std.string( { up:getIsButtonDown( EJoypadButton.UP ), right:getIsButtonDown( EJoypadButton.RIGHT ), down:getIsButtonDown( EJoypadButton.DOWN ), left:getIsButtonDown( EJoypadButton.LEFT ), fire:getIsButtonDown( EJoypadButton.FIRE ), primary:getIsButtonDown( EJoypadButton.PRIMARY ), secondary:getIsButtonDown( EJoypadButton.SECONDARY ) } );
	}
	
	private function _checkKeyboard( p_type:EJoypadButton, p_function:EKey->Bool ):Bool
	{
		switch ( p_type )
		{
			case FIRE :
				return ( _checkKeyboard( EJoypadButton.PRIMARY, p_function ) || _checkKeyboard( EJoypadButton.SECONDARY, p_function ) );
			case UP :
				return p_function( _keyUp ) || p_function( _keyUpAlt );
			case RIGHT :
				return p_function( _keyRight ) || p_function( _keyRightAlt );
			case DOWN :
				return p_function( _keyDown ) || p_function( _keyDownAlt );
			case LEFT :
				return p_function( _keyLeft ) || p_function( _keyLeftAlt );
			case PRIMARY :
				return p_function( _keyPrimary ) || p_function( _keyPrimaryAlt );
			case SECONDARY :
				return p_function( _keySecondary ) || p_function( _keySecondaryAlt );
		}
	}
	
	public function getIsButtonDown( p_type:EJoypadButton ):Bool
	{
		return _checkKeyboard( p_type, _kernel.inputs.keyboard.getIsKeyDown ) || ( _isTouchEnabled && _checkTouchIsDown( p_type ) );
	}
	
	public function getIsButtonPress( p_type:EJoypadButton ):Bool
	{
		return _checkKeyboard( p_type, _kernel.inputs.keyboard.getIsKeyPress ) || ( _isTouchEnabled && _checkTouchIsPress( p_type ) );
	}
	
	public function getIsButtonRelease( p_type:EJoypadButton ):Bool
	{
		return _checkKeyboard( p_type, _kernel.inputs.keyboard.getIsKeyRelease ) || ( _isTouchEnabled && _checkTouchIsRelease( p_type ) );
	}
	
	public function getButtonDownDuration( p_type:EJoypadButton, p_asTime:Bool = true, p_isPrevious:Bool = false ):Int
	{
		var l_function:EKey->Bool->Bool->Float = _kernel.inputs.keyboard.getKeyDownDuration;
		switch ( p_type )
		{
			case FIRE :
				return Std.int( Math.max( Math.max( l_function( _keyPrimary, p_asTime, p_isPrevious ), l_function( _keyPrimaryAlt, p_asTime, p_isPrevious ) ), Math.max( l_function( _keySecondary, p_asTime, p_isPrevious ), l_function( _keySecondaryAlt, p_asTime, p_isPrevious ) ) ) );
			case UP :
				return Std.int( Math.max( l_function( _keyUp, p_asTime, p_isPrevious ), l_function( _keyUpAlt, p_asTime, p_isPrevious ) ) );
			case RIGHT :
				return Std.int( Math.max( l_function( _keyRight, p_asTime, p_isPrevious ), l_function( _keyRightAlt, p_asTime, p_isPrevious ) ) );
			case DOWN :
				return Std.int( Math.max( l_function( _keyDown, p_asTime, p_isPrevious ), l_function( _keyDownAlt, p_asTime, p_isPrevious ) ) );
			case LEFT :
				return Std.int( Math.max( l_function( _keyLeft, p_asTime, p_isPrevious ), l_function( _keyLeftAlt, p_asTime, p_isPrevious ) ) );
			case PRIMARY :
				return Std.int( Math.max( l_function( _keyPrimary, p_asTime, p_isPrevious ), l_function( _keyPrimaryAlt, p_asTime, p_isPrevious ) ) );
			case SECONDARY :
				return Std.int( Math.max( l_function( _keySecondary, p_asTime, p_isPrevious ), l_function( _keySecondaryAlt, p_asTime, p_isPrevious ) ) );
		}
	}
	
	public function getButtonUpDuration( p_type:EJoypadButton, p_asTime:Bool = true, p_isPrevious:Bool = false ):Int
	{
		var l_function:EKey->Bool->Bool->Float = _kernel.inputs.keyboard.getKeyUpDuration;
		switch ( p_type )
		{
			case FIRE :
				return Std.int( Math.min( Math.min( l_function( _keyPrimary, p_asTime, p_isPrevious ), l_function( _keyPrimaryAlt, p_asTime, p_isPrevious ) ), Math.min( l_function( _keySecondary, p_asTime, p_isPrevious ), l_function( _keySecondaryAlt, p_asTime, p_isPrevious ) ) ) );
			case UP :
				return Std.int( Math.min( l_function( _keyUp, p_asTime, p_isPrevious ), l_function( _keyUpAlt, p_asTime, p_isPrevious ) ) );
			case RIGHT :
				return Std.int( Math.min( l_function( _keyRight, p_asTime, p_isPrevious ), l_function( _keyRightAlt, p_asTime, p_isPrevious ) ) );
			case DOWN :
				return Std.int( Math.min( l_function( _keyDown, p_asTime, p_isPrevious ), l_function( _keyDownAlt, p_asTime, p_isPrevious ) ) );
			case LEFT :
				return Std.int( Math.min( l_function( _keyLeft, p_asTime, p_isPrevious ), l_function( _keyLeftAlt, p_asTime, p_isPrevious ) ) );
			case PRIMARY :
				return Std.int( Math.min( l_function( _keyPrimary, p_asTime, p_isPrevious ), l_function( _keyPrimaryAlt, p_asTime, p_isPrevious ) ) );
			case SECONDARY :
				return Std.int( Math.min( l_function( _keySecondary, p_asTime, p_isPrevious ), l_function( _keySecondaryAlt, p_asTime, p_isPrevious ) ) );
		}
	}
	
	private function _getTouchButtonPosition( p_type:EJoypadButton ):{ x:Float, y:Float }
	{
		return switch( p_type )
		{
			case UP : { x: _kernel.factory.width * .5, y: _kernel.factory.height * .25 };
			case RIGHT : { x: _kernel.factory.width * .75, y: _kernel.factory.height * .5 };
			case DOWN : { x: _kernel.factory.width * .5, y: _kernel.factory.height * .75 };
			case LEFT : { x: _kernel.factory.width * .25, y: _kernel.factory.height * .5 };
			case FIRE, PRIMARY, SECONDARY : { x: _kernel.factory.width * .5, y: _kernel.factory.height * .5 };
		}
	}
	
	private function _getClosestTouchButton( ?p_x:Float, ?p_y:Float ):EJoypadButton
	{
		if ( p_x == null )
		{
			p_x = _mouse.x;
		}
		if ( p_y == null )
		{
			p_y = _mouse.y;
		}
		var l_closest:Float = 99999999;
		var l_result:EJoypadButton = EJoypadButton.FIRE;
		for ( i in [ EJoypadButton.FIRE, EJoypadButton.UP, EJoypadButton.RIGHT, EJoypadButton.DOWN, EJoypadButton.LEFT, EJoypadButton.PRIMARY ] )
		{
			var l_position = _getTouchButtonPosition( i );
			var l_distance:Float = _kernel.tools.distance( p_x, p_y, l_position.x, l_position.y, true );
			if ( l_distance < l_closest )
			{
				l_closest = l_distance;
				l_result = i;
			}
		}
		return l_result;
	}
	
	private function _getTouchState():_JoypadState
	{
		if ( !_assignMouse() || ( _mouse.getAge() == _joypadStateCache.age ) )
		{
			return _joypadStateCache;
		}
		var l_result:_JoypadState = { age:_mouse.getAge(), isFire:false, isUp:false, isRight:false, isDown:false, isLeft:false, isPrevFire:_joypadStateCache.isFire, isPrevUp:_joypadStateCache.isUp, isPrevRight:_joypadStateCache.isRight, isPrevDown:_joypadStateCache.isDown, isPrevLeft:_joypadStateCache.isLeft };
		switch( _joypadTouchType )
		{
			case DPAD :
			{
				var l_closestTouchButton:EJoypadButton = _getClosestTouchButton();
				l_result.isFire = ( l_closestTouchButton == EJoypadButton.FIRE ) && _mouse.getIsButtonRelease() && ( _mouse.getButtonDownDuration( true, true ) < 200 );
				if ( _mouse.getIsButtonDown() )
				{
					l_result.isUp = l_closestTouchButton == EJoypadButton.UP;
					l_result.isRight = l_closestTouchButton == EJoypadButton.RIGHT;
					l_result.isDown = l_closestTouchButton == EJoypadButton.DOWN;
					l_result.isLeft = l_closestTouchButton == EJoypadButton.LEFT;
				}
			}
			case JOYSTICK( p_distance ) :
			{
				if ( p_distance == null )
				{
					p_distance = 20;
				}
				l_result.isFire = _mouse.getIsButtonRelease() && ( _mouse.getButtonDownDuration( true, true ) < 200 );
				l_result.isUp = _mouse.getButtonDragHeight() < -p_distance;
				l_result.isRight = _mouse.getButtonDragWidth() > p_distance;
				l_result.isDown = _mouse.getButtonDragHeight() > p_distance;
				l_result.isLeft = _mouse.getButtonDragWidth() < -p_distance;
			}
			case SWIPE( p_speed ) :
			{
				l_result.isFire = _mouse.getIsButtonRelease() && ( _mouse.getButtonDownDuration( true, true ) < 200 );
				if ( _kernel.inputs.mouse.getIsButtonDown() )
				{
					if ( p_speed == null )
					{
						p_speed = 100;
					}
					var l_dx:Int = _mouse.getDeltaX();
					var l_dy:Int = _mouse.getDeltaY();
					l_result.isUp = l_dy < -p_speed;
					l_result.isRight = l_dx > p_speed;
					l_result.isDown = l_dy > p_speed;
					l_result.isLeft = l_dx < -p_speed;
				}
			}
			default : null;
		}
		_joypadStateCache = l_result;
		return _joypadStateCache;
	}
	
	private function _checkTouchIsDown( p_type:EJoypadButton ):Bool
	{
		var l_state:_JoypadState = _getTouchState();
		return switch( p_type )
		{
			case UP : l_state.isUp;
			case RIGHT : l_state.isRight;
			case DOWN : l_state.isDown;
			case LEFT : l_state.isLeft;
			case FIRE, PRIMARY, SECONDARY : l_state.isFire;
		}
	}
	
	private function _checkTouchIsPress( p_type:EJoypadButton ):Bool
	{
		var l_state:_JoypadState = _getTouchState();
		return switch( p_type )
		{
			case UP : l_state.isUp && !l_state.isPrevUp;
			case RIGHT : l_state.isRight && !l_state.isPrevRight;
			case DOWN : l_state.isDown && !l_state.isPrevDown;
			case LEFT : l_state.isLeft && !l_state.isPrevLeft;
			case FIRE, PRIMARY, SECONDARY : l_state.isFire && !l_state.isPrevFire;
		}
	}
	
	private function _checkTouchIsRelease( p_type:EJoypadButton ):Bool
	{
		var l_state:_JoypadState = _getTouchState();
		return switch( p_type )
		{
			case UP : !l_state.isUp && l_state.isPrevUp;
			case RIGHT : !l_state.isRight && l_state.isPrevRight;
			case DOWN : !l_state.isDown && l_state.isPrevDown;
			case LEFT : !l_state.isLeft && l_state.isPrevLeft;
			case FIRE, PRIMARY, SECONDARY : !l_state.isFire && l_state.isPrevFire;
		}
	}
	
	private inline function _assignMouse():Bool
	{
		if ( _mouse != null )
		{
			return true;
		}
		else if ( Std.is( _kernel.inputs.mouse, InputMouse ) )
		{
			_mouse = cast( _kernel.inputs.mouse, InputMouse );
			return true;
		}
		else
		{
			return false;
		}
	}
	
}

private typedef _JoypadState = { age:Int, isFire:Bool, isUp:Bool, isRight:Bool, isDown:Bool, isLeft:Bool, isPrevFire:Bool, isPrevUp:Bool, isPrevRight:Bool, isPrevDown:Bool, isPrevLeft:Bool }
