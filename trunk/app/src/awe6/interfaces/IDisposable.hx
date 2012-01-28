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
 * The IDisposable interface should be implemented by objects that require
 * specialised garbage collection or memory deallocation.
 * <p>Once an object is disposed it should be automatically removed from parent heirachies.</p>
 * @author Robert Fell
 */
interface IDisposable
{
	/**
	 * Returns true if the object has been disposed (or is being disposed).
	 */
	var isDisposed( default, null ):Bool;
	/**
	 * Disposes this object by deallocating all used resources and breaking all
	 * (non-weak) references to other objects. This method must be the final
	 * call in the object's life cycle. No methods except this method should be
	 * called on the object and no properties of the object should be read or
	 * written after a call to this object; otherwise the behaviour is
	 * unreliable. The object may call the method on itself, directly or
	 * indirectly.
	 */
	function dispose():Void;
}
