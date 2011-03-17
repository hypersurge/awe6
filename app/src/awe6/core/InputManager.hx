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
import awe6.interfaces.EMouseButton;
import awe6.interfaces.IInputKeyboard;
import awe6.interfaces.IInputManager;
import awe6.interfaces.IInputMouse;
import awe6.interfaces.IInputJoypad;
import awe6.interfaces.IKernel;

/**
 * The InputManager class provides a minimalist implementation of the IInputManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class InputManager extends Process, implements IInputManager
{
	public var joypad( __get_joypad, null ):IInputJoypad;
	public var keyboard( __get_keyboard, null ):IInputKeyboard;
	public var mouse( __get_mouse, null ):IInputMouse;
	
	private var _inputKeyboard:InputKeyboard;
	private var _inputMouse:InputMouse;	

	override private function _init():Void 
	{
		super._init();
		joypad = createJoypad();
		keyboard = _inputKeyboard = new InputKeyboard( _kernel );
		mouse = _inputMouse = new InputMouse( _kernel );
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		_inputKeyboard.update( deltaTime );
		_inputMouse.update( deltaTime );
	}
	
	override private function _disposer():Void 
	{
		_inputKeyboard.dispose();
		_inputMouse.dispose();
		super._disposer();		
	}
	
	public function createJoypad( ?up:EKey, ?right:EKey, ?down:EKey, ?left:EKey, ?primary:EKey, ?secondary:EKey, ?upAlt:EKey, ?rightAlt:EKey, ?downAlt:EKey, ?leftAlt:EKey, ?primaryAlt:EKey, ?secondaryAlt:EKey ):IInputJoypad
	{
		return new InputJoypad( _kernel, up, right, down, left, primary, secondary, upAlt, rightAlt, downAlt, leftAlt, primaryAlt, secondaryAlt );
	}
	
	private function __get_joypad():IInputJoypad { return joypad; }
	private function __get_keyboard():IInputKeyboard { return keyboard; }
	private function __get_mouse():IInputMouse { return mouse; }
	
}