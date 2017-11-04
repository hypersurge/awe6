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
import sys.FileSystem;
import sys.io.File;
import sys.io.FileInput;
import sys.io.FileOutput;
import haxe.zip.Reader;
import neko.Lib;
import StringTools;

/**
 * Neko file tools to run after haxelib install.
 * <p>Copies HaxeDevelop / FlashDevelop templates.</p> 
 * @author	Robert Fell
 * @author	Enzo Ferrari
 */

class Run 
{
	// Commands
	private static inline var _COMMAND_INSTALL = "install";
	private static inline var _COMMAND_CREATE = "create";
	// Project types
	private static inline var _PROJECT_SWF = "swf";
	private static inline var _PROJECT_OPENFL = "openfl";
	private static inline var _PROJECT_CREATEJS = "createjs";
	// Creation targets	
	private static inline var _TARGET_PROJECT = "project";
	private static inline var _TARGET_SCENE = "scene";
	private static inline var _TARGET_ENTITY = "entity";
	
	private static inline var _TEMPLATE_EXT = ".template";
	private static var _OS = Sys.systemName();

	private var _callingDir:String;

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
			default :
				_printSyntax();
		}
	}
	
	private function _install():Void
	{
		if ( _OS == "Windows" )
		{
			_copyTemplates();
		}
		else
		{
			Lib.println( "Error: install option is only available on Windows (requires HaxeDevelop / FlashDevelop)" );
		}
	}

	private function _create():Void
	{
		if ( _OS == "Windows" )
		{
			Lib.println( "Warning: install option is recommended for Windows (use with HaxeDevelop / FlashDevelop)" );
		}
		if ( ( Sys.args().length >= 6 ) && ( Sys.args().length <= 7 ) )
		{
			var l_param = 1;
			var l_target:String = Sys.args()[ l_param ];
			var l_projectType:String = "";
			if ( l_target == _TARGET_PROJECT )
			{
				l_param++;
				l_projectType = Sys.args()[ l_param ];
			}
			var l_projectPath:String = Sys.args()[ l_param+1 ];
			var l_packageName:String = Sys.args()[ l_param+2 ];
			var l_authorName:String = Sys.args()[ l_param+3 ];
			// When called from haxelib, the last argument is the calling directory
			_callingDir = Sys.args()[ l_param + 4 ];
			if ( _callingDir == null ) _callingDir = "./";
			if ( l_target == _TARGET_PROJECT )
			{
				if ( ( l_projectType == _PROJECT_SWF ) || ( l_projectType == _PROJECT_OPENFL ) || ( l_projectType == _PROJECT_CREATEJS ) )
				{
					_createProjectFromTemplate( l_projectType, l_projectPath, l_packageName, l_authorName );
				}
				else
				{
					_printSyntax();
				}
			}
			else if ( Sys.args().length == 6 )
			{
				if ( l_target == _TARGET_SCENE )
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
		else
		{
			_printSyntax();
		}
	}

	private function _printSyntax():Void
	{
		if ( _OS == "Windows" )
		{
			Lib.println( "Syntax: haxelib run awe6 install" );
		}
		else
		{
			Lib.println( "Syntax:");
			Lib.println("   to create a new project" );
			Lib.println("     haxelib run awe6 create project " + _PROJECT_SWF + "|" + _PROJECT_OPENFL + "|" + _PROJECT_CREATEJS + " <name> <package> <author>" );
			Lib.println("   to create scenes or entities" );
			Lib.println("     haxelib run awe6 create " + _TARGET_SCENE + "|" + _TARGET_ENTITY + " <name> <package> <author>" );
		}
	}
	
	private function _testDirectory( p_directory:String ):Void
	{
		while ( !FileSystem.exists( p_directory ) )
		{
			var l_path:Path = new Path( p_directory );
			while ( !FileSystem.exists( l_path.dir ) )
			{
				l_path = new Path( l_path.dir );
			}
			FileSystem.createDirectory( l_path.toString() );
		}
	}
			
	private function _unzipTemplates( p_destination:String, p_filter:String = "" ):Void
	{
		var l_source:String = "__resources/templates.zip";
		if ( !FileSystem.exists( l_source ) )
		{
			Lib.println( "Error: HaxeDevelop / FlashDevelop awe6 templates not found: " + l_source + " does not exist." );
			return;			
		}
		var l_zipData = Reader.readZip( File.read( l_source, true ) );
		for ( i in l_zipData )
		{
			if ( ( p_filter == "" ) || ( i.fileName.substr( -p_filter.length ) == p_filter ) )
			{
				var l_content = i.compressed ? Reader.unzip( i ) : i.data;			
				var l_finalDestination:String;
				if ( p_filter == "" )
				{
					l_finalDestination = p_destination + "/" + i.fileName;
				}
				else
				{
					var l_destPath = new Path( i.fileName );
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

	private function _copyTemplates():Void
	{
		var l_destinations:Array<String> = [Sys.getEnv( "LocalAppData" ) + "/FlashDevelop", Sys.getEnv( "LocalAppData" ) + "/HaxeDevelop"];
		for ( l_destination in l_destinations )
		{
			l_destination = StringTools.replace( l_destination, "\\", "/" );
			if ( !FileSystem.exists( l_destination ) || !FileSystem.isDirectory( l_destination ) )
			{
				Lib.println( "Error: Unable to copy awe6 templates: " + l_destination + " does not exist.  Try unzipping them manually." );
			}
			else
			{
				_unzipTemplates( l_destination );
				Lib.println( "Complete: awe6 templates copied successfully to: " + l_destination );
			}
		}
	}
	
	private function _deleteTree( p_path:String ):Void
	{
		if ( FileSystem.exists( p_path ) )
		{
			if ( FileSystem.isDirectory( p_path ) )
			{
				var l_files = FileSystem.readDirectory( p_path );
				for ( l_file in l_files )
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
	}

	private function _moveAllFilesToDir( p_sourcePath:String, p_targetPath:String ):Void
	{
		if ( ( FileSystem.isDirectory( p_sourcePath ) ) && ( FileSystem.isDirectory( p_targetPath ) ) )
		{
			var l_files = FileSystem.readDirectory( p_sourcePath );
			for ( l_file in l_files )
			{
				FileSystem.rename( p_sourcePath + "/" + l_file, p_targetPath + "/" + l_file );
			}
		}
	}

	private function _handleTemplate( p_path:String, p_fromStrings:Array<String>, p_toStrings:Array<String> )
	{
		var l_sourcePath:String = p_path;
		var l_targetPath:String = p_path.substr( 0, p_path.length - _TEMPLATE_EXT.length );
		var l_source:FileInput = File.read( l_sourcePath, false );
		var l_target:FileOutput = File.write( l_targetPath, false );
		try
		{
			while ( true )
			{
				var l_line:String = l_source.readLine();
				for ( i in 0...p_fromStrings.length )
				{
					l_line = StringTools.replace( l_line, p_fromStrings[i], p_toStrings[i] );
				}
				l_target.writeString( l_line + "\n" );
			}
		}
		catch ( ex:Eof )
		{
			// End of file
		}
		l_source.close();
		l_target.close();
		// Delete template file
		FileSystem.deleteFile( l_sourcePath );
	}
	
	private function _modifyTemplates( p_path:String, p_fromStrings:Array<String>, p_toStrings:Array<String> )
	{
		if ( FileSystem.isDirectory( p_path ) )
		{
			var l_files = FileSystem.readDirectory( p_path );
			for ( l_file in l_files )
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

	private function _createProjectFromTemplate( p_projectType:String, p_projectPath:String, p_packageName:String, p_authorName:String ):Void
	{
		if ( p_projectPath.substr(0,1) != "/" )
		{
			// Path was relative, make it absolute
			p_projectPath = _callingDir + p_projectPath;
		}
		if ( ( FileSystem.exists ( p_projectPath ) ) && ( FileSystem.isDirectory ( p_projectPath ) ) )
		{
			Lib.println( "Error: " + p_projectPath + " already exists" );
		}
		else
		{
			_unzipTemplates( p_projectPath );
			_deleteTree( p_projectPath + "/Templates" );
			switch( p_projectType )
			{
				case _PROJECT_CREATEJS :
					_moveAllFilesToDir( p_projectPath + "/Projects/374 Haxe - awe6 CreateJS Project", p_projectPath );
				case _PROJECT_OPENFL :
					_moveAllFilesToDir( p_projectPath + "/Projects/373 Haxe - awe6 OpenFL Project", p_projectPath );
				case _PROJECT_SWF, _ :
					_moveAllFilesToDir( p_projectPath + "/Projects/313 Haxe - awe6 Swf Project", p_projectPath );
			}
			// Remove Windows only directories
			_deleteTree( p_projectPath + "/Projects" );
			_deleteTree( p_projectPath + "/scripts" );
			// Remove useless HaxeDevelop / FlashDevelop project files
			FileSystem.deleteFile( p_projectPath + "/Project.hxproj" );
			FileSystem.deleteFile( p_projectPath + "/Project.png" );
			FileSystem.deleteFile( p_projectPath + "/Project.txt" );
			//
			var l_packageNameParts:Array<String> = p_packageName.split( "." );
			var l_currentPackageNamePath:String = p_projectPath + "/src/";
			for ( i in l_packageNameParts )
			{
				FileSystem.createDirectory( l_currentPackageNamePath );
				l_currentPackageNamePath += i + "/";
			}
			FileSystem.rename( p_projectPath + "/src/$(PackagePath)", l_currentPackageNamePath );
			var l_projectName:String = new Path( p_projectPath ).file;
			var l_projectHxml:String = p_projectPath + "/" + l_projectName + ".hxml" + _TEMPLATE_EXT;
			_createHxml( l_projectHxml, p_projectType );
			_handleTemplate( l_projectHxml, [ "$(ProjectName)" ], [ l_projectName ] );
			_modifyTemplates( p_projectPath,
				[ "$(ProjectID)", "$(DefaultUser)", "$(ProjectName)", "$(PackageName)", "$(PackageDot)", "$(CBI)", "$(CSLB)" ],
				[ l_projectName, p_authorName, l_projectName, p_packageName, p_packageName + ".", " ", "\n" ] );
			if ( p_projectType == _PROJECT_OPENFL )
			{
				var l_projectXml:String = p_projectPath + "/" + l_projectName + ".xml" + _TEMPLATE_EXT;
				FileSystem.rename( p_projectPath + "/$(ProjectName).xml", l_projectXml );
				_handleTemplate( l_projectXml, [], [] );
			}
			Lib.println( "Complete: Project " + l_projectName + " successfully created." );
		}
	}
	
	private function _createHxml( p_fileName:String, p_projectType:String = _PROJECT_SWF ):Void
	{
		var l_content:String = "";
		l_content = switch( p_projectType )
		{
			case _PROJECT_OPENFL : "
-cmd \"lime test flash\"
";
			case _PROJECT_CREATEJS : "
-cp src
-js bin/game.js
-lib awe6
-lib createjs
-resource bin/assets/__config.xml@config
-dce full
-main Main
";
			case _PROJECT_SWF, _ : "
-cp src
-swf assets/game.swf
-swf-header 600:400:25:FFFFFF
-swf-lib assets/preloader.swf
-lib awe6
-main Main
";
		}
		File.saveContent( p_fileName, l_content );
	}

	private function _createSceneFromTemplate( p_sceneName:String, p_packageName:String, p_authorName:String ):Void
	{
		if ( p_sceneName.substr(0,1) != "/" )
		{
			// Path was relative, make it absolute
			p_sceneName = _callingDir + p_sceneName;
		}
		if ( FileSystem.exists( p_sceneName + ".hx" ) )
		{
			Lib.println( "Error: " + p_sceneName + ".hx already exists" );
		}
		else
		{
			var l_scenePath:Path = new Path( p_sceneName );
			_unzipTemplates( l_scenePath.dir, "Scene.hx.fdt" );
			var l_templatePath:String = p_sceneName + ".hx" + _TEMPLATE_EXT;
			FileSystem.rename( l_scenePath.dir + "/Scene.hx.fdt", l_templatePath );
			_handleTemplate( l_templatePath,
					[ "$(DefaultUser)", "$(FileName)", "$(Package)", "$(CBI)", "$(CSLB)" ],
					[ p_authorName, l_scenePath.file, p_packageName, " ", "" ] );
			Lib.println( "Complete: Scene " + l_scenePath.file + " successfully created." );
		}
	}

	private function _createEntityFromTemplate( p_entityName:String, p_packageName:String, p_authorName:String ):Void
	{
		if ( p_entityName.substr(0,1) != "/" )
		{
			// Path was relative, make it absolute
			p_entityName = _callingDir + p_entityName;
		}
		if ( FileSystem.exists( p_entityName + ".hx" ) )
		{
			Lib.println( "Error: " + p_entityName + ".hx already exists" );
		}
		else
		{
			var l_entityPath:Path = new Path( p_entityName );
			_unzipTemplates( l_entityPath.dir, "Entity.hx.fdt" );
			var l_templatePath:String = p_entityName + ".hx" + _TEMPLATE_EXT;
			FileSystem.rename( l_entityPath.dir + "/Entity.hx.fdt", l_templatePath );
			_handleTemplate( l_templatePath, 
					[ "$(DefaultUser)", "$(FileName)", "$(Package)", "$(CBI)", "$(CSLB)" ],
					[ p_authorName, l_entityPath.file, p_packageName, " ", "" ] );
			Lib.println( "Complete: Entity " + l_entityPath.file + " successfully created." );
		}
	}

}
#end
