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

interface IInputMouse 
{
	var x( default, null ):Int;
	var y( default, null ):Int;
	var vx( default, null ):Int;
	var vy( default, null ):Int;
	var relativeX( default, null ):Float;
	var relativeY( default, null ):Float;
	var relativeCentralisedX( default, null ):Float;
	var relativeCentralisedY( default, null ):Float;
	var isWithinScreenBounds( default, null ):Bool;
	var isMoving( default, null ):Bool;
	var scroll( default, null ):Int;
	var vScroll( default, null ):Int;
	function getStillCount( ?asTime:Bool = true ):Int;
	function getIsButtonDown( ?type:EMouseButton ):Bool;
	function getIsDoubleClick( ?type:EMouseButton, ?delay:Int = 100 ):Bool;
	function getIsDragging( ?type:EMouseButton, ?delay:Int = 100 ):Bool;
	function getButtonDownDuration( ?type:EMouseButton, ?asTime:Bool = true ):Float;
	function getButtonUpDuration( ?type:EMouseButton, ?asTime:Bool = true ):Float;
	function getButtonDragWidth( ?type:EMouseButton ):Int;
	function getButtonDragHeight( ?type:EMouseButton ):Int;
	function getButtonLastClickedX( ?type:EMouseButton ):Int;
	function getButtonLastClickedY( ?type:EMouseButton ):Int;
}