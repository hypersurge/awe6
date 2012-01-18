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
 * Encapsulates the different types of pauser keys which could be used to
 * pause an object.
 *
 * The documentation also defines the compatibility between the key types. The
 * compatibility relation is not symmetric: X compatible to Y does not imply
 * that Y is compatible to X.
 */
enum EPauserKey
{
	/**
	 * No pauser key type is compatible to a pauser key of type NONE; thus, it's also not
	 * compatible to itself.
	 */
	NONE,
	/**
	 * Any pauser key type is compatible to a pauser key of this ANY; it's also
	 * compatible to itself.
	 */
	ANY,
	/**
	 * For some specific integer value 'value' only KEY( value ) is compatible to
	 * KEY ( value ).
	 */
	KEY( value: Int ),
	/**
	 * Allows EPauserType to be extended, e.g. for using custom pauser keys with different
	 * compatibility semantics.
	 */
	SUB_TYPE( value: Dynamic )
}
