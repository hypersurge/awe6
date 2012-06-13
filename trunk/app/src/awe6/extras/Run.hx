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

package awe6.extras;
#if neko
import haxe.Resource;
import haxe.io.Path;
import haxe.io.Eof;
import neko.FileSystem;
import neko.Lib;
import neko.io.File;
import neko.io.FileInput;
import neko.io.FileOutput;
import neko.zip.Reader;
import StringTools;

/**
 * Neko file tools to run after haxelib install.
 * <p>Copies FlashDevelop templates.</p> 
 * @author	Robert Fell
 */

class Run 
{
	// Commands
	private static inline var _COMMAND_INSTALL = "install";
	private static inline var _COMMAND_CREATE = "create";
	// Creation targets	
	private static inline var _TARGET_PROJECT = "project";
	private static inline var _TARGET_SCENE = "scene";
	private static inline var _TARGET_ENTITY = "entity";
	
	private static inline var _TEMPLATE_EXT = ".template";

	private static inline var _OS = Sys.systemName();

	private var callingDir: String;

	static function main() 
	{
		new Run();
	}
	
	public function new()
	{
		var l_command:String = Sys.args()[0];
		switch ( l_command )
		{
			case _COMMAND_INSTALL :
				_install();
			case _COMMAND_CREATE :
				_create();
			default:
				_printSyntax();
		}
	}
	
	private function _install(): Void
	{
		if ( _OS == "Windows" )
		{
			if (Sys.args().length == 1)
			{
				_copyFlashDevelopTemplates();
			}
			else
			{
				_printSyntax();
			}	
		}
		else
		{
			Lib.println( "install option is not available on Linux" );
		}
	}

	private function _create(): Void
	{
		if ( _OS == "Windows" )
		{
			Lib.println( "create option is not available on Windows" );
		}
		else
		{
			if ( Sys.args().length == 6 )
			{
				var l_target: String = Sys.args()[1];
				var l_projectPath: String = Sys.args()[2];
				var l_packageName: String = Sys.args()[3];
				var l_authorName: String = Sys.args()[4];
				// When called from haxelib, the last argument is the calling directory
				callingDir = Sys.args()[5];
				if ( l_target == _TARGET_PROJECT )
				{
					_createProjectFromTemplate( l_projectPath, l_packageName, l_authorName );
				}
				else if ( l_target == _TARGET_SCENE )
				{
					_createSceneFromTemplate( l_projectPath, l_packageName, l_authorName );
				}
				else if ( l_target == _TARGET_ENTITY )
				{
					_createEntityFromTemplate( l_projectPath, l_packageName, l_authorName );
				}
				else
				{
					_printSyntax();
				}
			}
			else
			{
				_printSyntax();
			}
		}
	}

	private function _printSyntax(): Void
	{
		if ( _OS == "Windows" )
		{
			Lib.println( "Syntax: haxelib run awe6 install" );
		}
		else
		{
			Lib.println( "Syntax: haxelib run awe6 create project|scene|entity <name> <package> <author>" );
		}
	}
	
	private function _testDirectory( p_directory: String ): Void
	{
		while ( !FileSystem.exists( p_directory ) )
		{
			var l_path: Path = new Path( p_directory );
			while ( !FileSystem.exists( l_path.dir ) )
			{
				l_path = new Path( l_path.dir );
			}
			FileSystem.createDirectory( l_path.toString() );
		}
	}
			
	private function _unzipFlashDevelopTemplates( p_destination: String, ?p_filter: String="" ):Void
	{
		var l_source:String = "__resources/flashDevelop.zip";
		// var l_source:String = "scripts/haxelib/__resources/flashDevelop.zip";
		if ( !FileSystem.exists( l_source ) )
		{
			Lib.println( "FlashDevelop awe6 templates not found: " + l_source + " does not exist." );
			return;			
		}
		var l_zipData = Reader.readZip( File.read( l_source, true ) );
		for ( i in l_zipData )
		{
			if ( ( p_filter == "") || ( i.fileName.substr(-p_filter.length) == p_filter ) )
			{
				var l_content = ( i.compressed ) ? Reader.unzip( i ) : i.data;			
				var l_finalDestination:String;
				if ( p_filter == "" )
				{
					l_finalDestination = p_destination + "/" + i.fileName;
				}
				else
				{
					var l_destPath = new Path(i.fileName);
					l_finalDestination = p_destination + "/" + l_destPath.file + "." + l_destPath.ext;
				}
				if ( i.fileSize == 0 )
				{
					l_finalDestination = l_finalDestination.substr( 0, -1 );
					_testDirectory( l_finalDestination );
					continue;
				}
				var l_fileOut = File.write( l_finalDestination, true );
				l_fileOut.write( l_content );			
				l_fileOut.close();
			}
		}
	}

	private function _copyFlashDevelopTemplates():Void
	{
		var l_destination:String = Sys.getEnv( "LocalAppData" ) + "/FlashDevelop";
		l_destination = StringTools.replace( l_destination, "\\", "/" );
		if ( !FileSystem.exists( l_destination ) || !FileSystem.isDirectory( l_destination ) )
		{
			Lib.println( "Unable to copy FlashDevelop awe6 templates: " + l_destination + " does not exist.  Try unzipping them manually." );
			return;
		}
		_unzipFlashDevelopTemplates( l_destination );
		Lib.println( "FlashDevelop awe6 templates copied successfully." );
	}
	
	private function _deleteTree( p_path: String ): Void
	{
		if ( FileSystem.isDirectory( p_path ) )
		{
			var l_files = FileSystem.readDirectory( p_path );
			for (l_file in l_files)
			{
				_deleteTree( p_path + "/" + l_file );
			}
			FileSystem.deleteDirectory( p_path );
		}
		else
		{
			FileSystem.deleteFile( p_path );
		}
	}

	private function _moveAllFilesToDir( p_sourcePath: String, p_targetPath: String ): Void
	{
		if ( ( FileSystem.isDirectory( p_sourcePath ) ) && ( FileSystem.isDirectory( p_targetPath ) ) )
		{
			var l_files = FileSystem.readDirectory( p_sourcePath );
			for (l_file in l_files)
			{
				FileSystem.rename( p_sourcePath + "/" + l_file, p_targetPath + "/" + l_file );
			}
		}
	}

	private function _handleTemplate( p_path: String, p_fromStrings: Array<String>, p_toStrings: Array<String> ) {
		var l_sourcePath: String = p_path;
		var l_targetPath: String = p_path.substr( 0, p_path.length - _TEMPLATE_EXT.length );
		var l_source: FileInput = File.read( l_sourcePath, false );
		var l_target: FileOutput = File.write( l_targetPath, false );
		try
		{
			while ( true )
			{
				var line: String = l_source.readLine();
				for (i in 0...p_fromStrings.length) {
					line = StringTools.replace( line, p_fromStrings[i], p_toStrings[i] );
				}
				l_target.writeString( line + "\n" );
			}
		}
		catch ( ex: Eof )
		{
			// End of file
		}
		l_source.close();
		l_target.close();
		// Delete template file
		FileSystem.deleteFile( l_sourcePath );
	}
	
	private function _modifyTemplates( p_path: String, p_fromStrings: Array<String>, p_toStrings: Array<String> ) {
		if ( FileSystem.isDirectory( p_path ) )
		{
			var l_files = FileSystem.readDirectory( p_path );
			for (l_file in l_files)
			{
				_modifyTemplates( p_path + "/" + l_file, p_fromStrings, p_toStrings );
			}
		}
		else
		{
			if ( p_path.substr( - ( _TEMPLATE_EXT.length ) ) == _TEMPLATE_EXT )
			{
				_handleTemplate( p_path, p_fromStrings, p_toStrings );
			}
		}
	}

	private function _createProjectFromTemplate( p_projectPath: String, p_packageName: String, p_authorName: String ): Void
	{
		if ( p_projectPath.substr(0,1) != "/" )
		{
			// Path was relative, make it absolute
			p_projectPath = callingDir + p_projectPath;
		}
		if ( ( FileSystem.exists ( p_projectPath ) ) && ( FileSystem.isDirectory ( p_projectPath ) ) )
		{
			Lib.println( p_projectPath + " already exists" );
		} else {
			_unzipFlashDevelopTemplates( p_projectPath );
			_deleteTree( p_projectPath + "/Templates" );
			_moveAllFilesToDir( p_projectPath + "/Projects/313 HaXe - awe6 Project", p_projectPath );
			// Remove Windows only directories
			_deleteTree( p_projectPath + "/Projects" );
			_deleteTree( p_projectPath + "/src/org" );
			_deleteTree( p_projectPath + "/scripts" );
			//
			FileSystem.rename( p_projectPath + "/src/$(PackagePath)", p_projectPath + "/src/" + p_packageName );
			var l_projectName: String = new Path( p_projectPath ).file;
			_modifyTemplates( p_projectPath,
				[ "$(DefaultUser)", "$(ProjectName)", "$(PackageName)", "$(PackageDot)", "$(CBI)", "$(CSLB)" ],
				[ p_authorName, l_projectName, p_packageName, p_packageName + ".", " ", "" ] );
			Lib.println( "Project " + l_projectName + " successfully created." );
		}
	}

	private function _createSceneFromTemplate( p_sceneName: String, p_packageName: String, p_authorName: String ): Void
	{
		if ( p_sceneName.substr(0,1) != "/" )
		{
			// Path was relative, make it absolute
			p_sceneName = callingDir + p_sceneName;
		}
		if ( FileSystem.exists( p_sceneName + ".hx" ) )
		{
			Lib.println( p_sceneName + ".hx already exists" );
		}
		else
		{
			var l_scenePath: Path = new Path( p_sceneName );
			_unzipFlashDevelopTemplates( l_scenePath.dir, "Scene.hx.fdt" );
			var l_templatePath: String = p_sceneName + ".hx" + _TEMPLATE_EXT;
			FileSystem.rename( l_scenePath.dir + "/Scene.hx.fdt", l_templatePath );
			_handleTemplate( l_templatePath,
					[ "$(DefaultUser)", "$(FileName)", "$(Package)", "$(CBI)", "$(CSLB)" ],
					[ p_authorName, l_scenePath.file, p_packageName, " ", "" ] );
			Lib.println( "Scene " + l_scenePath.file + " successfully created." );
		}
	}

	private function _createEntityFromTemplate( p_entityName: String, p_packageName: String, p_authorName: String ): Void
	{
		if ( p_entityName.substr(0,1) != "/" )
		{
			// Path was relative, make it absolute
			p_entityName = callingDir + p_entityName;
		}
		if ( FileSystem.exists( p_entityName + ".hx" ) )
		{
			Lib.println( p_entityName + ".hx already exists" );
		}
		else
		{
			var l_entityPath: Path = new Path( p_entityName );
			_unzipFlashDevelopTemplates( l_entityPath.dir, "Entity.hx.fdt" );
			var l_templatePath: String = p_entityName + ".hx" + _TEMPLATE_EXT;
			FileSystem.rename( l_entityPath.dir + "/Entity.hx.fdt", l_templatePath );
			_handleTemplate( l_templatePath, 
					[ "$(DefaultUser)", "$(FileName)", "$(Package)", "$(CBI)", "$(CSLB)" ],
					[ p_authorName, l_entityPath.file, p_packageName, " ", "" ] );
			Lib.println( "Entity " + l_entityPath.file + " successfully created." );
		}
	}

}
#end
