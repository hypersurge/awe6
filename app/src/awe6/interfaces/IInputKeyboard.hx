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
 * The IInputKeyboard interface should be implemented by an object wishing to be used as a virtual keyboard input device.
 * @author	Robert Fell
 */
interface IInputKeyboard 
{
	/**
	 * Determine if a specific key is currently down.
	 * @param	type	They key.
	 * @return	Returns true is the key is currently down, false otherwise.
	 */
	function getIsKeyDown( type:EKey ):Bool;
	/**
	 * Determine if a specific key was pressed in the current update frame.
	 * <p>A press is defined as a new down - i.e. was up previous frame, and is down this frame.</p>
	 * @param	type	The key.
	 * @return	Returns true is the key was pressed in the current update, false otherwise.
	 */
	function getIsKeyPress( type:EKey ):Bool;
	/**
	 * Determine if a specific key was released in the current update.
	 * <p>A release is defined as a new up - i.e. was down previous frame, and is up this frame.</p>
	 * @param	type	The key.
	 * @return	Returns true is the key was released in the current update, false otherwise.
	 */
	function getIsKeyRelease( type:EKey ):Bool;
	/**
	 * Determine how long a specific key has been down.
	 * @param	type	The key.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @param	?isPrevious	If true then returns the previous duration down (the time held prior to the most recent release).
	 * @return	Returns the duration the key has been down.
	 */
	function getKeyDownDuration( type:EKey, asTime:Bool = true, isPrevious:Bool = false ):Float;
	/**
	 * Determine how long a specific key has been up.
	 * @param	type	The key.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @param	?isPrevious	If true then returns the previous duration up (the time unused prior to the most recent press).
	 * @return	Returns the duration the key has been up.
	 */
	function getKeyUpDuration( type:EKey, asTime:Bool = true, isPrevious:Bool = false  ):Float;
	/**
	 * Translate a specific key to a keyboard keyCode.
	 * @param	type	The key.
	 * @return	Returns the keyboard keyCode of the corresponding key.
	 */
	function getKeyCode( type:EKey ):Int;
	/**
	 * Translate a keyCode to a specific key.
	 * @param	type	The keyCode.
	 * @return	Returns the key of the corresponding keyboard keyCode.
	 */
	function getKey( keyCode:Int ):EKey;
}

