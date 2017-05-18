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

package awe6.core.drivers.openfl;
import awe6.core.drivers.AAssetManager;
import openfl.Assets;
#if (openfl >= "5.0.0")
import openfl.utils.AssetType;
#end

/**
 * This AssetManager class provides openfl target overrides.
 * @author	Robert Fell
 */
class AssetManager extends AAssetManager
{
	
	override private function _driverGetAsset( p_id:String, ?p_packageId:String, ?p_args:Array<Dynamic> ):Dynamic
	{
		var l_packageId:String = p_packageId;
		if ( ( l_packageId == _kernel.getConfig( "settings.assets.packages.audio" ) ) || ( l_packageId == "assets.audio" ) )
		{
			var l_extension:String = ".mp3"; // js extension now stripped, and handled automatically by Howler (assumes .ogg, .mp3, .wav)
			#if ( cpp || neko )
			l_extension = ".ogg"; // doesn't work on Macs?
			#end
			p_id += l_extension;
		}
		if ( ( l_packageId.length > 0 ) && ( l_packageId.substr( -1, 1 ) != "." ) )
		{
			l_packageId += ".";
		}
		var l_assetName:String = StringTools.replace( l_packageId, ".", "/" ) + p_id;
		if ( Assets.exists( l_assetName, AssetType.SOUND ) )
		{
			return Assets.getSound( l_assetName );
		}
		if ( Assets.exists( l_assetName, AssetType.IMAGE ) )
		{
			return Assets.getBitmapData( l_assetName );
		}
		if ( Assets.exists( l_assetName, AssetType.FONT ) )
		{
			return Assets.getFont( l_assetName );
		}
		if ( Assets.exists( l_assetName, AssetType.TEXT ) )
		{
			return Assets.getText( l_assetName );
		}
		// end of OpenFL specific Assets
		var l_assetName:String = p_id;
		if ( p_packageId.length > 0 )
		{
			l_assetName = p_packageId + "." + p_id;
		}
		var l_assetClass:Class<Dynamic> = Type.resolveClass( l_assetName );
		if ( l_assetClass == null )
		{
			return null;			
		}
		if ( p_args == null )
		{
			p_args = [];
		}
		return Type.createInstance( l_assetClass, p_args );
	}
	
}