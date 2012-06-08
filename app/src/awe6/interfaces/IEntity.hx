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
 * The IEntity interface should be implemented by all objects in the entity broad phase traversal stack.
 * <p>The IEntity represents the fundamental awe6 building block and provides sufficient functionality to build most game elements.</p>
 * <p>Project specific entities can be created as custom classes, or by injecting functionality through the IEntity interface.</p>
 * @author Robert Fell
 */
interface IEntity implements IProcess, implements IViewable, implements IEntityCollection, implements IAgendaManager
{
	/**
	 * The unique identifier of this entity.
	 * <p>This value is very useful for retrieving a specific entity.</p> 
	 */
	var id( default, _set_id ):String;
	/**
	 * The parent of this entity
	 * <p>The reference is null if this entity has no parent (for example an entity not in the entity traversal stack).</p>
	 * <p>Consider this a runtime only property, rather than calling it during constructor or initialization phases.</p>
	 */
	var parent( _get_parent, null ):IEntity;
	/**
	 * Used to easily remove this entity from its parent.
	 * @param	?isRemovedFromView	Determines whether this object's view is removed from the view stack at the same time.
	 */
	function remove( ?isRemovedFromView:Bool = false ):Void;
}