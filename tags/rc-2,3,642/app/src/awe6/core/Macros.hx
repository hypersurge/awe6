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
 * This class contains static Macros.  They provide some preprocessing tasks.
 * <p>They are not intended to be called as part of regular awe6 usage.</p>
 */
class Macros
{
	#if macro
	
	private static var _packageName:String;
	
	/**
	 * If a custom driver is needed then call the following compiler flags:
	 * <p>-D awe6DriverRemap</p>
	 * <p>--macro awe6.core.Macros.setDriverRemap('your.customdriver.package')</p>
	 * @param	p_packageName	The package name of your custom driver suite.
	 */
	public static function setDriverRemap( p_packageName:String ):Void
	{
		_packageName = p_packageName;
	}
	
	/**
	 * This macro is called from the driver typedefs, and will remap them to your specified driver suite.
	 * <p>This should only be called from the core typedefs.</p>
	 * @param	p_className	The class of the typedef.
	 * @return	The remapped type.
	 */
	public static function driverRemap( p_className:String ):haxe.macro.Type
	{
		if ( _packageName == null )
		{
			_packageName = "awe6.core.drivers.remap"; // safe default
		}
		return haxe.macro.Context.getType( _packageName + "." + p_className );
    }
	
	#end
	
	
	/**
	 * This macro returns a recursive list of files from a folder.
	 * @param	p_folderPath	The parent path.
	 * @return
	 */
	
	 /**
	  * This macro returns a recursive list of files from a folder.
	  * @param	p_folderPath	The parent path.
	  * @param	p_isAppcache	Whether to create a manifest file
	  * @param	p_appcacheFolderPath	Where to create the manifest file
	  * @param	p_appcacheExtra	Additional data to add to the manifest file
	  */
	macro public static function getFolderContents( p_folderPath:String, p_isAppcache:Bool = false, p_appcacheFolderPath:String, p_appcacheExtra:String )
	{
		haxe.macro.Context.registerModuleDependency( "awe6.core.Macros", p_folderPath + "/__config.xml" ); // Compilation server will cache these paths unless config changes
		function recursive( p_folderPath:String ):Array<String>
		{
			if ( p_folderPath.substr( -1 ) == "/" )
			{
				p_folderPath = p_folderPath.substr( 0, -1 );
			}
			var l_result:Array<String> = [];
			if ( sys.FileSystem.isDirectory( p_folderPath ) )
			{
				var l_contents = sys.FileSystem.readDirectory( p_folderPath );
				for ( i in l_contents )
				{
					if ( ( i.substr( 0, 1 ) == "." ) ) // remove hidden files
					{
						continue;
					}
					var l_fileName:String = p_folderPath + "/" + i;
					if ( sys.FileSystem.isDirectory( l_fileName ) )
					{
						l_result = l_result.concat( recursive( l_fileName ) );
					}
					else
					{
						l_result.push( l_fileName );
					}
				}
			}
			return l_result;
		}
		var l_result = recursive( p_folderPath );
		if ( p_isAppcache )
		{
			var l_contents:String = "CACHE MANIFEST\n# timestamp " + Date.now() + "\nCACHE:\n";
			for ( i in l_result )
			{
				var l_file:String = i;
				if ( i.substr( 0, p_appcacheFolderPath.length ) == p_appcacheFolderPath )
				{
					i = i.substr( p_appcacheFolderPath.length );
				}
				l_contents += i + "\n";
			}
			l_contents += p_appcacheExtra;
			var l_file = sys.io.File.write( p_appcacheFolderPath + "cache.manifest", false );
			l_file.writeString( l_contents );
			l_file.close();
		}
		return haxe.macro.Context.makeExpr( l_result, haxe.macro.Context.currentPos() );
	}
	
}
