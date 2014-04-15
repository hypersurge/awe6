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
import awe6.interfaces.EJoypadTouch;
import awe6.interfaces.EKey;
import awe6.interfaces.EMouseButton;
import awe6.interfaces.IInputKeyboard;
import awe6.interfaces.IInputManager;
import awe6.interfaces.IInputMouse;
import awe6.interfaces.IInputJoypad;

/**
 * The InputManager class provides a minimalist implementation of the IInputManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
#if haxe3
class InputManager extends Process implements IInputManager
#else
class InputManager extends Process, implements IInputManager
#end
{
	public var joypad( default, null ):IInputJoypad;
	public var keyboard( default, null ):IInputKeyboard;
	public var mouse( default, null ):IInputMouse;
	
	private var _inputKeyboard:InputKeyboard;
	private var _inputMouse:InputMouse;	
	
	override private function _init():Void 
	{
		super._init();
		joypad = createJoypad();
		keyboard = _inputKeyboard = new InputKeyboard( _kernel );
		mouse = _inputMouse = new InputMouse( _kernel );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_inputKeyboard.update( p_deltaTime );
		_inputMouse.update( p_deltaTime );
	}
	
	override private function _disposer():Void 
	{
		_inputKeyboard.dispose();
		_inputMouse.dispose();
		super._disposer();		
	}
	
	public function createJoypad( ?p_up:EKey, ?p_right:EKey, ?p_down:EKey, ?p_left:EKey, ?p_primary:EKey, ?p_secondary:EKey, ?p_upAlt:EKey, ?p_rightAlt:EKey, ?p_downAlt:EKey, ?p_leftAlt:EKey, ?p_primaryAlt:EKey, ?p_secondaryAlt:EKey, ?p_joypadTouchType:EJoypadTouch ):IInputJoypad
	{
		return new InputJoypad( _kernel, p_up, p_right, p_down, p_left, p_primary, p_secondary, p_upAlt, p_rightAlt, p_downAlt, p_leftAlt, p_primaryAlt, p_secondaryAlt, p_joypadTouchType );
	}
	
	public function reset():Bool
	{
		_inputKeyboard.dispose();
		_inputMouse.dispose();
		_init();
		return true;
	}
}