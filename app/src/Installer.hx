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

package ;
#if neko
import haxe.Resource;
import neko.FileSystem;
import neko.Lib;
import neko.Sys;
import neko.io.File;
import neko.zip.Reader;

/**
 * Neko file tools to run after haxelib install.
 * <p>Copies FlashDevelop templates.</p> 
 * @author	Robert Fell
 */

class Installer 
{
	private static inline var _COMMAND_INSTALL = "install";
	private static inline var _OS = Sys.systemName();

	static function main() 
	{
		new Installer();
	}
	
	public function new()
	{
		var l_command:String = Sys.args()[0];
		if ( l_command == null )
		{
			l_command = _COMMAND_INSTALL;
		}
		switch ( l_command )
		{
			case _COMMAND_INSTALL : _install();
		}
	}
	
	private function _install():Void
	{
		if ( _OS == "Windows" )
		{
			_copyFlashDevelopTemplates();
		}
	}
	
	private function _copyFlashDevelopTemplates():Void
	{
		var l_source:String = "__resources/flashDevelop.zip";
		// var l_source:String = "scripts/haxelib/__resources/flashDevelop.zip";
		if ( !FileSystem.exists( l_source ) )
		{
			Lib.println( "FlashDevelop awe6 templates not found: " + l_source + " does not exist." );
			return;			
		}		
		var l_destination:String = Sys.getEnv( "LocalAppData" ) + "/FlashDevelop";
		l_destination = StringTools.replace( l_destination, "\\", "/" );
		if ( !FileSystem.exists( l_destination ) || !FileSystem.isDirectory( l_destination ) )
		{
			Lib.println( "Unable to copy FlashDevelop awe6 templates: " + l_destination + " does not exist.  Try unzipping them manually." );
			return;
		}
		var l_zipData = Reader.readZip( File.read( l_source, true ) );
		for ( i in l_zipData )
		{
			var l_content = ( i.compressed ) ? Reader.unzip( i ) : i.data;			
			var l_finalDestination:String = l_destination + "/" + i.fileName;
			if ( i.fileSize == 0 )
			{
				l_finalDestination = l_finalDestination.substr( 0, -1 );
				if ( !FileSystem.exists( l_finalDestination ) )
				{
					FileSystem.createDirectory( l_finalDestination );
				}
				continue;
			}
			var l_fileOut = File.write( l_finalDestination, true );
			l_fileOut.write( l_content );
			l_fileOut.close();
		}
		Lib.println( "FlashDevelop awe6 templates copied successfully." );
	}	
}
#end