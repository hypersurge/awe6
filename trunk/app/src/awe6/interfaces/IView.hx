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
 * The IView interface should be implemented by all objects in the view broad phase traversal stack.
 * @author	Robert Fell
 */
interface IView extends IPriority extends IPositionable extends IDisposable extends IUpdateable
{
	/**
	 * Optional: the object who this view represents.
	 */
	public var owner( default, null ):Dynamic;
	/**
	 * The parent view of this view.
	 * <p>The reference is null if this view has no parent (for exemple a view not in the view traversal stack).</p>
	 */
	var parent( get, null ):IView;
	/**
	 * Specify the visibility of this view.
	 * <p>If true the view will be displayed, if false the view is hidden.</p>
	 */
	var isVisible( default, set ):Bool;
	/**
	 * Determined by whether this view is visible and included in a visible branch of the view stack (i.e. actually has the potential to be drawn within the overlay).
	 * <p>If true the view is potentially visible, if false the view is impossible to be seen.</p>
	 */
	var isInViewStack( get, null ):Bool;
	/**
	 * The horizontal position considering all parent's positions / scene graph.
	 */
	var globalX( default, null ):Float;
	/**
	 * The vertical position considering all parent's positions / scene graph.
	 */
	var globalY( default, null ):Float;
	/**
	 * Adds a new view child to this view. 
	 * <p>A view can have multiple children, and when you add a child to a view, it is automatically connected to the parent node through its parent property.</p>
	 * @param	child	The child view to add.
	 * @param	?priority	The sorting priority of the child view to add.  Higher numbers will appear towards the top of the view stack.  Default value is 0.
	 * @return	Added view (to allow decoration).  Or null if addition was unsuccessful.
	 */
	function addChild( child:IView, priority:Int = 0 ):IView;
	/**
	 * Remove the specified view.
	 * <p>The removed view will no longer be included in the view traversal stack so will no longer be visible.</p>
	 * <p>The view itself is still in memory, if you want to free them completely call child.dispose().</p>
	 * @param	child	The view to remove.
	 */
	function removeChild( child:IView ):Void;
	/**
	 * Removes all child views.
	 * <p>The children are still in memory, if you want to free them completely call view.dispose() from their owner object.</p>
	 */
	function clear():Void;
	/**
	 * Removes this view from the view traversal stack and subsequently all of its child views.
	 * <p>The view itself is still in memory, if you want to free it completely call dispose().</p>
	 */
	function remove():Void;
}