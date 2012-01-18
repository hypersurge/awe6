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

#if tabula_rasa
/**
 * This interfaces should be implemented by objects that support pausing and
 * unpausing behaviour. Typically, this will include kernel processes that,
 * when paused, ignore all updates by the kernel.
 *
 * The pausing / unpausing is performed using pauser keys for extra flexibility.
 * This means that an object is paused using a specific key and can be resumed
 * by a compatible key only.
 * <p>This kind of behaviour is useful in many game scenarios.</b>
 * <p>For information on the compatibility of pauser keys see at the documentation
 * of EPauserKey.</p>
 */
interface IPausable
{
	/**
	 * Indicates whether this object is currently paused.
	 *
	 * The property is <b>read-only</b>.
	 * <p>The value is true when the object is paused and false otherwise.</p>
	 * <p>If this object is paused, then the value of pauserKey will be unequal
	 * null and will hold the pauser key the object was paused with.</p>
	 */
	var paused( _get_paused, _set_paused ):Bool;

	/**
	 * The pauser key used to pause this object.
	 *
	 * The property is <b>read-only</b>.
	 * <p>If this object is paused, indicated by the paused property, the value
	 * is the pauser key used to pause the object. Otherwise the value is null.</p>
	 */
	var pauserKey( _get_pauesrKey, _set_pauserKey ):EPauserKey;

	/**
	 * Pauses this object.
	 *
	 * If this object currently paused, this method returns false without doing
	 * anything. Otherwise it is paused using the specified pauser key and true
	 * is returned.
	 *
	 * @param pauserKey the pauser key that will be used to pause the object.
	 * @return false if the object is already paused, true otherwise.
	 */
	function pause( pauserKey:EPauserKey ):Bool;

	/**
	 * Resumes this object.
	 *
	 * If this object is not paused or was paused by a key not compatible to the
	 * specified pauser key, this method returns false without doing anything.
	 * Otherwise the object is resumed and true is returned.
	 *
	 * @param pauserKey the pauser key that will be used to unpause the object.
	 * @return false if the object is not paused or it was paused using an
	 * 					incompatible key.
	 */
	function resume( pauserKey:EPauserKey ):Bool;
}
#else
/**
 * The IPauseable interface should be implemented by objects intended to be temporarily disabled from the broad phase update traversal.
 * @author	Robert Fell
 */
interface IPauseable
{
	/**
	 * Determines if the object is updating or not.
	 */
	var isActive( default, __set_isActive ):Bool;
	/**
	 * Sets isActive to false.
	 */
	function pause():Void;
	/**
	 * Sets isActive to true.
	 */
	function resume():Void;
}
#end
