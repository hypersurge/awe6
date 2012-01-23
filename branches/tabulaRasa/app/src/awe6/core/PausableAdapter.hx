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

package awe6.core;

/**
 * Provides a default implementation of the IPausable interface with the
 * non-extended pauser key compatibility rules of EPauserKey.
 */
class PausableAdapter implements IPausable
{
	public var paused( _get_paused, null ):Bool;
	public var pauserKey( _get_pauserKey, null ):EPauserKey;

	/** Serves as a backing field for the paused property. */
	private var _paused:Bool;
	/** Serves as a backing field for the pauserKey property. */
	private var _pauserKey:EPauserKey;

	public function new()
	{
	}

	public function pause( p_pauserKey:EPauserKey )
	{
		if ( paused )
		{
			return false;
		}

		_paused = true;
		_pauserKey = p_pauserKey;

		return true;
	}

	public function resume( p_pauserKey:EPauserKey )
	{
		if ( !paused )
		{
			return false;
		}

		var l_result =
			switch ( pauserKey )
			{
			case NONE: false;
			case ANY: true;
			case KEY( value ):
					switch ( p_pauserKey )
					{
					case KEY( otherValue ): value == otherValue;
					default: false;
					}
			default: false;
			}

		if ( !l_result )
		{
			return false;
		}
			
		_paused = false;
		_pauserKey = null;
		
		return true;
	}
	
	private function _get_paused():Bool
	{
		return _paused;
	}

	private function _get_pauserKey():EPauserKey
	{
		return _pauserKey;
	}
}
