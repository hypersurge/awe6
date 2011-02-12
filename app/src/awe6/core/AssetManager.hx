/*
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
import awe6.interfaces.IAssetManager;
import awe6.interfaces.IKernel;
import flash.display.BitmapData;

/**
 * The AssetManager class provides a minimalist implementation of the IAssetManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AssetManager extends Process, implements IAssetManager
{
	private static inline var _PACKAGE_ID = "assets";	

	public function getAsset( id:String, ?packageId:String, ?args:Array<Dynamic> ):Dynamic
	{
		if ( packageId == null ) packageId = _kernel.getConfig( "settings.assets.packages.default" );
		if ( packageId == null ) packageId = _PACKAGE_ID;
		
		var l_assetName:String = id;
		if ( packageId.length > 0 ) l_assetName = packageId + "." + id;
		var l_assetClass:Class<Dynamic> = Type.resolveClass( l_assetName );
		// trace( l_assetName + ":" + l_assetClass );
		if ( l_assetClass == null )
		{
			trace( "ERROR: no such asset [" + l_assetName + "]" );
			return null;			
		}
		if ( args == null )
		{
			if ( Type.getSuperClass( l_assetClass ) == BitmapData )
				args = [0, 0];
			else
				args = [];
		}
		return Type.createInstance( l_assetClass, args );
	}
}