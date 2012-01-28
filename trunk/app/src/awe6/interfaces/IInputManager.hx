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

package awe6.interfaces;

/**
 * The IInputManager interface should be implemented by an object wishing to provide user input states to the kernel.
 * <p>The state machine represents the configuration of the input devices at any specific update frame.</p>
 * <p>State based input is useful for many types of game mechanics, including: momentum, instant replays and special move combos.</p>
 * @author	Robert Fell
 */
interface IInputManager implements IResettable
{
	/**
	 * The default virtual joypad user input: simple 4 directional controller with 2 fire buttons.  Listens to cursor keys and WASD keys.
	 */
	var joypad( default, null ):IInputJoypad;
	/**
	 * The virtual keyboard user input: every key on the keyboard.
	 */
	var keyboard( default, null ):IInputKeyboard;
	/**
	 * The virtual mouse user input: 3 button mouse and scroll wheel.
	 */
	var mouse( default, null ):IInputMouse;
	/**
	 * Factory method to create a virtual joypad with custom key controls.
	 * @param	?up	The key for up directional movement.  Defaults to up cursor.
	 * @param	?right	The key for right directional movement.  Defaults to right cursor.
	 * @param	?down	The key for down directional movement.  Defaults to down cursor.
	 * @param	?left	The key for left directional movement.  Defaults to left cursor.
	 * @param	?primary	The key for primary fire.  Defaults to space.
	 * @param	?secondary	The key for secondary fire.  Defaults to Z key.
	 * @param	?upAlt	Optional alternative key for up directional movement.
	 * @param	?rightAlt	Optional alternative key for right directional movement.
	 * @param	?downAlt	Optional alternative key for down directional movement.
	 * @param	?leftAlt	Optional alternative key for left directional movement.
	 * @param	?primaryAlt	Optional alternative key for primary fire.
	 * @param	?secondaryAlt	Optional alternative key for secondary fire.
	 * @return	A virtual joypad with custom key controls.
	 */
	function createJoypad( ?up:EKey, ?right:EKey, ?down:EKey, ?left:EKey, ?primary:EKey, ?secondary:EKey, ?upAlt:EKey, ?rightAlt:EKey, ?downAlt:EKey, ?leftAlt:EKey, ?primaryAlt:EKey, ?secondaryAlt:EKey ):IInputJoypad;
}