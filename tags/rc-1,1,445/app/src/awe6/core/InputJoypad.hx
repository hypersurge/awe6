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
import awe6.interfaces.EKey;
import awe6.interfaces.EJoypadButton;
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
	
	public function new( p_kernel:IKernel, p_up:EKey, p_right:EKey, p_down:EKey, p_left:EKey, p_primary:EKey, p_secondary:EKey, p_upAlt:EKey, p_rightAlt:EKey, p_downAlt:EKey, p_leftAlt:EKey, p_primaryAlt:EKey, p_secondaryAlt:EKey )
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
	}
	
	private function _check( p_type:EJoypadButton, p_function:EKey->Bool ):Bool
	{
		switch ( p_type )
		{
			case FIRE :
				return ( _check( EJoypadButton.PRIMARY, p_function ) || _check( EJoypadButton.SECONDARY, p_function ) );
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
		return _check( p_type, _kernel.inputs.keyboard.getIsKeyDown );
	}
	
	public function getIsButtonPress( p_type:EJoypadButton ):Bool
	{
		return _check( p_type, _kernel.inputs.keyboard.getIsKeyPress );
	}
	
	public function getIsButtonRelease( p_type:EJoypadButton ):Bool
	{
		return _check( p_type, _kernel.inputs.keyboard.getIsKeyRelease );
	}
	
	public function getButtonDownDuration( p_type:EJoypadButton, ?p_asTime:Bool = true, ?p_isPrevious:Bool = false ):Float
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
	
	public function getButtonUpDuration( p_type:EJoypadButton, ?p_asTime:Bool = true, ?p_isPrevious:Bool = false ):Float
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
	
}