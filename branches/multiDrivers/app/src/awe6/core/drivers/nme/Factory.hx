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

package awe6.core.drivers.nme;
import awe6.core.Context;
import awe6.core.drivers.AFactory;

/**
 * This Factory class provides nme target overrides.
 * @author	Robert Fell
 */
class Factory extends AFactory
{
	private var _context:Context;
	
	public function new( context:Context, isDebug:Bool = true, ?config:String )
	{
		_context = new Context();
		context.addChild( _context );
		super( isDebug, config );
	}
	
	override private function _nativeInit():Void
	{
		_init();
		if ( _isConfigRequired )
		{
			_parseXml( _configUrl );
		}
		else
		{
			_launchKernel();		
		}
	}	
	
	private function _parseXml( data:String ):Void
	{
		_traverseElements( Xml.parse( data ).firstElement().elements(), "" );
		_launchKernel();
	}	
	
	override private function _nativeLaunchKernel():Kernel
	{
		return new Kernel( this, _context );
	}
	
	override private function _nativeDisposer():Void
	{
		if ( _context.parent != null )
		{
			_context.parent.removeChild( _context );
		}
	}
	
}