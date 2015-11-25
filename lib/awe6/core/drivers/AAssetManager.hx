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

package awe6.core.drivers;
import awe6.core.Process;
import awe6.interfaces.IAssetManagerProcess;

/**
 * The AAssetManager class provides a minimalist implementation of the IAssetManager interface.
 * <p>It is intended as an abstract class to be extended.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AAssetManager extends Process implements IAssetManagerProcess
{
	private static inline var _PACKAGE_ID = "assets";
	private var _packageId:String;
	
	override private function _init():Void
	{
		_packageId = _kernel.getConfig( "settings.assets.packages.default" );
		if ( _packageId == null )
		{
			_packageId = _PACKAGE_ID;
		}
		super._init();
	}

	public function getAsset( p_id:String, ?p_packageId:String, ?p_args:Array<Dynamic> ):Dynamic
	{
		if ( p_packageId == null )
		{
			p_packageId = _packageId;
		}		
		return _driverGetAsset( p_id, p_packageId, p_args );
	}
	
	private function _driverGetAsset( p_id:String, ?p_packageId:String, ?p_args:Array<Dynamic> ):Dynamic
	{
		// override me
		return null;
	}
}