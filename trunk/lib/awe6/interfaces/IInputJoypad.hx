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
 * The IInputJoypad interface should be implemented by an object wishing to be used as a directional pad plus two fire button joypad.
 * <p>A joypad is useful for a simple game input device.  The device is limited to 6 EJoypadButtons to prevent keyboard lock and overly complex game controls.</p>
 * <p>A joypad can be configured to accept bespoke key configurations, or alternative user interface control devices (e.g. mouse or touchpad).</p>
 * @author	Robert Fell
 */
interface IInputJoypad 
{
	/**
	 * Determine if a specific joypad button is currently down.
	 * @param	type	The joypad button.
	 * @return	Returns true is the joypad button is currently down, false otherwise.
	 */
	function getIsButtonDown( type:EJoypadButton ):Bool;
	/**
	 * Determine if a specific joypad button was pressed in the current update frame.
	 * <p>A press is defined as a new down - i.e. was up previous frame, and is down this frame.</p>
	 * @param	type	The joypad button.
	 * @return	Returns true is the joypad button was pressed in the current update, false otherwise.
	 */
	function getIsButtonPress( type:EJoypadButton ):Bool;
	/**
	 * Determine if a specific joypad button was released in the current update.
	 * <p>A release is defined as a new up - i.e. was down previous frame, and is up this frame.</p>
	 * @param	type	The joypad button.
	 * @return	Returns true is the joypad button was released in the current update, false otherwise.
	 */	
	function getIsButtonRelease( type:EJoypadButton ):Bool;
	/**
	 * Determine how long a specific joypad button has been down.
	 * @param	type	The joypad button.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @param	?isPrevious	If true then returns the previous duration down (the time held prior to the most recent release).
	 * @return	Returns the duration the joypad button has been down.
	 */
	function getButtonDownDuration( type:EJoypadButton, asTime:Bool = true, isPrevious:Bool = false ):Int;
	/**
	 * Determine how long a specific joypad button has been up.
	 * @param	type	The joypad button.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @param	?isPrevious	If true then returns the previous duration up (the time unused prior to the most recent press).
	 * @return	Returns the duration the joypad button has been up.
	 */
	function getButtonUpDuration( type:EJoypadButton, asTime:Bool = true, isPrevious:Bool = false  ):Int;
}