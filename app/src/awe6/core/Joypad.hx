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
import awe6.interfaces.EKey;
import awe6.interfaces.EJoypadButton;
import awe6.interfaces.IJoypad;
import awe6.interfaces.IKernel;

class Joypad implements IJoypad
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
	
	public function new( kernel:IKernel, up:EKey, right:EKey, down:EKey, left:EKey, primary:EKey, secondary:EKey, upAlt:EKey, rightAlt:EKey, downAlt:EKey, leftAlt:EKey, primaryAlt:EKey, secondaryAlt:EKey )
	{
		_kernel = kernel;
		_keyUp = ( up != null ) ? up : EKey.UP;
		_keyRight = ( right != null ) ? right : EKey.RIGHT;
		_keyDown = ( down != null ) ? down : EKey.DOWN;
		_keyLeft = ( left != null ) ? left : EKey.LEFT;
		_keyPrimary = ( primary != null ) ? primary : EKey.SPACE;
		_keySecondary = ( secondary != null ) ? secondary : EKey.Z;
		_keyUpAlt = ( upAlt != null ) ? upAlt : EKey.W;
		_keyRightAlt = ( rightAlt != null ) ? rightAlt : EKey.D;
		_keyDownAlt = ( downAlt != null ) ? downAlt : EKey.S;
		_keyLeftAlt = ( leftAlt != null ) ? leftAlt : EKey.A;
		_keyPrimaryAlt = ( primaryAlt != null ) ? primaryAlt : EKey.Q;
		_keySecondaryAlt = ( secondaryAlt != null ) ? secondaryAlt : EKey.E;
	}
	
	private function _check( type:EJoypadButton, f:EKey->Bool ):Bool
	{
		switch ( type )
		{
			case FIRE : return ( _check( EJoypadButton.PRIMARY, f ) || _check( EJoypadButton.SECONDARY, f ) );
			case UP : return f( _keyUp ) || f( _keyUpAlt );
			case RIGHT : return f( _keyRight ) || f( _keyRightAlt );
			case DOWN : return f( _keyDown ) || f( _keyDownAlt );
			case LEFT : return f( _keyLeft ) || f( _keyLeftAlt );
			case PRIMARY : return f( _keyPrimary ) || f( _keyPrimaryAlt );
			case SECONDARY : return f( _keySecondary ) || f( _keySecondaryAlt );
		}
	}
	
	public function getIsButtonDown( type:EJoypadButton ):Bool
	{
		return _check( type, _kernel.inputs.keyboard.getIsKeyDown );
	}
	
	public function getIsButtonPress( type:EJoypadButton ):Bool
	{
		return _check( type, _kernel.inputs.keyboard.getIsKeyPress );
	}
	
	public function getIsButtonRelease( type:EJoypadButton ):Bool
	{
		return _check( type, _kernel.inputs.keyboard.getIsKeyRelease );
	}
	
	public function getButtonDownDuration( type:EJoypadButton, ?asTime:Bool = true ):Float
	{
		var l_f:EKey-> Bool->Float = _kernel.inputs.keyboard.getKeyDownDuration;
		switch ( type )
		{
			case FIRE : return Std.int( Math.max( Math.max( l_f( _keyPrimary, asTime ), l_f( _keyPrimaryAlt, asTime ) ), Math.max( l_f( _keySecondary, asTime ), l_f( _keySecondaryAlt, asTime ) ) ) );
			case UP : return Std.int( Math.max( l_f( _keyUp, asTime ), l_f( _keyUpAlt, asTime ) ) );
			case RIGHT : return Std.int( Math.max( l_f( _keyRight, asTime ), l_f( _keyRightAlt, asTime ) ) );
			case DOWN : return Std.int( Math.max( l_f( _keyDown, asTime ), l_f( _keyDownAlt, asTime ) ) );
			case LEFT : return Std.int( Math.max( l_f( _keyLeft, asTime ), l_f( _keyLeftAlt, asTime ) ) );
			case PRIMARY : return Std.int( Math.max( l_f( _keyPrimary, asTime ), l_f( _keyPrimaryAlt, asTime ) ) );
			case SECONDARY : return Std.int( Math.max( l_f( _keySecondary, asTime ), l_f( _keySecondaryAlt, asTime ) ) );
		}
	}
	
	public function getButtonUpDuration( type:EJoypadButton, ?asTime:Bool = true ):Float
	{
		var l_f:EKey->Bool->Float = _kernel.inputs.keyboard.getKeyUpDuration;
		switch ( type )
		{
			case FIRE : return Std.int( Math.min( Math.min( l_f( _keyPrimary, asTime ), l_f( _keyPrimaryAlt, asTime ) ), Math.min( l_f( _keySecondary, asTime ), l_f( _keySecondaryAlt, asTime ) ) ) );
			case UP : return Std.int( Math.min( l_f( _keyUp, asTime ), l_f( _keyUpAlt, asTime ) ) );
			case RIGHT : return Std.int( Math.min( l_f( _keyRight, asTime ), l_f( _keyRightAlt, asTime ) ) );
			case DOWN : return Std.int( Math.min( l_f( _keyDown, asTime ), l_f( _keyDownAlt, asTime ) ) );
			case LEFT : return Std.int( Math.min( l_f( _keyLeft, asTime ), l_f( _keyLeftAlt, asTime ) ) );
			case PRIMARY : return Std.int( Math.min( l_f( _keyPrimary, asTime ), l_f( _keyPrimaryAlt, asTime ) ) );
			case SECONDARY : return Std.int( Math.min( l_f( _keySecondary, asTime ), l_f( _keySecondaryAlt, asTime ) ) );
		}
	}
	
}