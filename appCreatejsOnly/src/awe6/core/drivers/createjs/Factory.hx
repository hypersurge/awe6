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

package awe6.core.drivers.createjs;
import awe6.core.Context;
import awe6.core.drivers.AFactory;

/**
 * This Factory class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Factory extends AFactory
{
	override private function _driverInit():Void
	{
		var l_context = new Context();
		_context.addChild( l_context );
		_context = l_context;
		if ( _config != "" )
		{
			_parseXml( _config );
		}
		_launchKernel();
		trace( id + " v" + version + " by " + author );
		trace( "Powered by awe6 (http://awe6.org)" );
		trace( "" );
	}

	private function _parseXml( p_data:String ):Void
	{
		_traverseElements( Xml.parse( p_data ).firstElement().elements(), "" );
	}

	override private function _driverDisposer():Void
	{
		if ( _context.parent != null )
		{
			_context.parent.removeChild( _context );
		}
	}
	
}
