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
 * The IOverlay interface should be implemented by objects representing the top most visual element of the application.
 * <p>The overlay is intended to provide application wide border / chrome with controls such as back, mute, pause etc.</p>
 * <p>The overlay also provides flashing which is a useful cheap effect across many game scenarios.</p>
 * @author	Robert Fell
 */
interface IOverlay
{
	/**
	 * An optional IEntity which is displayed and updated when the game is paused.
	 */
	#if haxe3
	var pauseEntity( get, set ):IEntity;
	#else
	var pauseEntity( get_pauseEntity, set_pauseEntity ):IEntity;
	#end
	/**
	 * Sets the visibility of a specific overlay button.
	 * @param	type	The overlay button.
	 * @param	?isVisible	If true shows the button, if false hides it.
	 */
	function showButton( type:EOverlayButton, ?isVisible:Bool = true ):Void;
	/**
	 * Set the position of a specific overlay button.
	 * @param	type	The overlay button.
	 * @param	x	The horizontal position.
	 * @param	y	The vertical position.
	 * @param	width	The width of the button hitArea, if null will not redefine.
	 * @param	height	The height of the button hitArea, if null will not redefine.
	 */
	function positionButton( type:EOverlayButton, x:Float, y:Float, ?width:Float, ?height:Float ):Void;
	/**
	 * Triggers an overlay button (as if it was clicked on).
	 * @param	type	The overlay button.
	 */
	function activateButton( type:EOverlayButton ):Void;
	/**
	 * Simple representation of progress.
	 * @param	progress	Range: 0...1.
	 * @param	?message	An optional string to display.
	 */
	function showProgress( progress:Float, ?message:String ):Void;
	/**
	 * Hides all overlay buttons.
	 */
	function hideButtons():Void;
	/**
	 * Creates a flash over the top of everything under the overlay.  Fades to invisible over a period of time.
	 * @param	?duration	The period of time over which the flash should fade to 0.
	 * @param	?asTime	If true treats the time as milliseconds, otherwise as frame updates.
	 * @param	?startingAlpha	The alpha at which the flash starts.  Range: 0...1.
	 * @param	?color	The color of the flash.  Defaults to white.
	 */
	function flash( ?duration:Float, ?asTime:Bool = true, ?startingAlpha:Float = 1, ?color:Int = 0xFFFFFF ):Void;
}