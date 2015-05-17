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
 * Representing the touch input modes for a Touchscreen Joypad for use in the IJoypad virtual controller.
 * @author	Robert Fell
 */
enum EJoypadTouch
{
	/**
	 * Touch input is disabled for joypad.  The default.
	 * <p>It is advised that EJoypadTouch be set in Factory based on device interrogation.</p>
	 */
	DISABLED;
	/**
	 * The screen is split into five fixed position regions corresponding to directions, only one can be down at a time.
	 * <p>A single fire button (primary) is located in the center.</p>
	 */
	DPAD;
	/**
	 * A self centering joystick represented by a constant drag / touch.  A drag can begin anywhere.
	 * <p>Distance sets the minimum vector length that determines movement.  20 pixels is the default.</p>
	 * <p>If the horizontal drag vector is > distance then left or right is down.</p>
	 * <p>If the vertical drag vector is > distance then up or down is down.</p>
	 * <p>Any tap of less than 200ms triggers primary down.</p>
	 */
	JOYSTICK( ?distance:Int );
	/**
	 * A swipe can begin anywhere.  Speed sets the minimum vector length (pixels per second) that determines movement.  100 pixels is the default.
	 * <p>If the horizontal swipe vector is > speed then left or right is down.</p>
	 * <p>If the vertical swipe vector is > speed then up or down is down.</p>
	 * <p>Any tap of less than 200ms triggers primary down.</p>
	 */
	SWIPE( ?speed:Int );
}