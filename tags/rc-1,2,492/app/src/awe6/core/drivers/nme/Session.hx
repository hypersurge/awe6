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
import awe6.core.drivers.ASession;
import nme.net.SharedObject;

/**
 * This Session class provides nme target overrides.
 * @author	Robert Fell
 */
class Session extends ASession
{
	private var _so:SharedObject;
	
	override private function _driverLoad():Void
	{
		_so = SharedObject.getLocal( _kernel.factory.id, "/" );
		// for Linux tartet the path info may need translating - e.g.:
		// _so = SharedObject.getLocal( _kernel.factory.id, FileSystem.fullPath( Path.directory( Sys.executablePath() ) ) );
		// for full details see sevencoloredbox's issue submission: http://code.google.com/p/awe6/issues/detail?id=13
		_savedData = _so.data;		
	}
	
	override private function _driverReset():Void
	{
		_so.clear();		
		_savedData = _so.data;
	}
	
	override private function _driverSave():Void
	{
		_so.flush();
	}
}