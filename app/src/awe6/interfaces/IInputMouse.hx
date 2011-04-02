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

package awe6.interfaces;

/**
 * The IInputMouse interface should be implemented by objects wishing to act as virtual mouse controllers.
 * <p>Screen bounds are based on IFactory.width & IFactory.height.</p>
 * @author	Robert Fell
 * @todo	Add previousDurations to public interface
 */
interface IInputMouse 
{
	/**
	 * The horizontal component of the mouse position.
	 */
	var x( default, null ):Int;
	/**
	 * The vertical component of the mouse position.
	 */
	var y( default, null ):Int;
	/**
	 * The horizontal velocity of the mouse position (difference in pixels between current position and previous update's position).
	 */
	var deltaX( default, null ):Int;
	/**
	 * The vertical velocity of the mouse position (difference in pixels between current position and previous update's position).
	 */
	var deltaY( default, null ):Int;
	/**
	 * The horizontal position of the mouse relative to screen width.  Range 0...1.
	 */
	var relativeX( default, null ):Float;
	/**
	 * The vertical position of the mouse relative to screen height.  Range 0...1.
	 */
	var relativeY( default, null ):Float;
	/**
	 * The horizontal position of the mouse relative to screen width and offset to screen centre.  Range -1...1.
	 */
	var relativeCentralisedX( default, null ):Float;
	/**
	 * The vertical position of the mouse relative to screen height and offset to screen centre.  Range -1...1.
	 */
	var relativeCentralisedY( default, null ):Float;
	/**
	 * Returns true if the mouse position is within the screen's bounding rectangle (width x height).
	 */
	var isWithinScreenBounds( default, null ):Bool;
	/**
	 * Returns true if the mouse position is different to the previous update's position.
	 */
	var isMoving( default, null ):Bool;
	/**
	 * The current scroll position.  Starts at 0.  Range -infinity...infinity.
	 */
	var scroll( default, null ):Int;
	/**
	 * The change in scroll position between the current frame and the previous update.
	 */
	var deltaScroll( default, null ):Int;
	/**
	 * Determine how long the mouse has been still.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @return	Returns the duration the mouse has been still.
	 */
	function getStillCount( ?asTime:Bool = true ):Int;
	/**
	 * Determine if a specific mouse button was clicked twice (within the defined time).
	 * @param	?type	The mouse button.
	 * @param	?delay	The time within which the mouse button must be clicked twice.
	 * @return	Returns true if the mouse button was clicked twice (within the defined time).
	 */
	function getIsButtonDoubleClick( ?type:EMouseButton, ?delay:Int = 100 ):Bool;
	/**
	 * Determine if the mouse is being dragged with a specific mouse button down (for at least the defined delay).
	 * @param	?type	The mouse button.
	 * @param	?delay	The time which, if exceeded, assumes the mouse is being dragged. 
	 * @return	Returns true if the mouse button was down for a duration exceeding delay.
	 */
	function getIsButtonDrag( ?type:EMouseButton, ?delay:Int = 100 ):Bool;
	/**
	 * Determine if a specific mouse button is currently down.
	 * @param	?type	The mouse button.
	 * @return	Returns true is the mouse button is currently down, false otherwise.
	 */
	function getIsButtonDown( ?type:EMouseButton ):Bool;
	/**
	 * Determine if a specific mouse button was pressed in the current update frame.
	 * <p>A press is defined as a new down - i.e. was up previous frame, and is down this frame.</p>
	 * @param	type	The mouse button.
	 * @return	Returns true is the mouse button was pressed in the current update, false otherwise.
	 */
	function getIsButtonPress( ?type:EMouseButton ):Bool;
	/**
	 * Determine if a specific mouse button was released in the current update.
	 * <p>A release is defined as a new up - i.e. was down previous frame, and is up this frame.</p>
	 * @param	type	The mouse button.
	 * @return	Returns true is the mouse button was released in the current update, false otherwise.
	 */
	function getIsButtonRelease( ?type:EMouseButton ):Bool;
	/**
	 * Determine the duration a specific mouse button is down.
	 * @param	?type	The mouse button.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @return	The duration a specific mouse button is down.
	 */
	function getButtonDownDuration( ?type:EMouseButton, ?asTime:Bool = true ):Float;
	/**
	 * Determine the duration a specific mouse button is up.
	 * @param	?type	The mouse button.
	 * @param	?asTime	If true then returns duration as milliseconds, else returns duration as frame updates.
	 * @return	The duration a specific mouse button is up.
	 */
	function getButtonUpDuration( ?type:EMouseButton, ?asTime:Bool = true ):Float;
	/**
	 * Determine the horizontal movement of the mouse since a specific mouse button was pressed.
	 * @param	?type	The mouse button.
	 * @return	The horizontal movement of the mouse.
	 */
	function getButtonDragWidth( ?type:EMouseButton ):Int;
	/**
	 * Determine the vertical movement of the mouse since a specific mouse button was pressed.
	 * @param	?type	The mouse button.
	 * @return	The vertical movement of the mouse.
	 */
	function getButtonDragHeight( ?type:EMouseButton ):Int;
	/**
	 * Determine the horizontal position of the mouse when a specific mouse button was last clicked.
	 * @param	?type	The mouse button.
	 * @return	The horizontal position of the mouse.
	 */
	function getButtonLastClickedX( ?type:EMouseButton ):Int;
	/**
	 * Determine the vertical position of the mouse when a specific mouse button was last clicked.
	 * @param	?type	The mouse button.
	 * @return	The vertical position of the mouse.
	 */
	function getButtonLastClickedY( ?type:EMouseButton ):Int;
}