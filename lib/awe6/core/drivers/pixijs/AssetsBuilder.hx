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

package awe6.core.drivers.pixijs;
import haxe.macro.Context;
import haxe.macro.Expr;
import sys.FileSystem;

/**
 * This is a helper to provide easy code completion for assets in the project's folder.
 * <p>Create an "Assets" class in your project root as a reference point:</p>
 * <pre>@:build( awe6.core.drivers.pixijs.AssetsBuilder.build( "bin/", "assets/" ) )
 * class Assets {}</pre>
 * @author Mark Knol [blog.stroep.nl]
 * @author Robert Fell
 */
class AssetsBuilder
{
	#if macro
	private static var _audioFormats:Array<String> = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
	
	public static function build( p_base:String, p_directory:String, ?p_decache:Dynamic ):Array<Field>
	{
		return buildDirectory( p_base, p_directory, p_directory );
	}
	
	public static function buildDirectory( p_base:String, p_directory:String, p_rootDirectory:String ):Array<Field>
	{
		var l_fields:Array<Field> = Context.getBuildFields();
		var l_fileReferences:Array<_HelperFileRef> = [];
		var l_fileNames = FileSystem.readDirectory( p_base + p_directory );
		
		for ( l_fileName in l_fileNames )
		{
			if ( !FileSystem.isDirectory( p_base + p_directory + l_fileName ) )
			{
				var l_extension = l_fileName.substr( -3, 3 );
				if ( _audioFormats.indexOf( l_extension ) == -1 )
				{
					if ( l_fileName.substr( 0, 2 ) != "__" ) l_fileReferences.push( new _HelperFileRef( p_directory + l_fileName, p_rootDirectory ) );
				}
				else
				{
					var l_audioRef = new _HelperAudioRef( l_fileName.substr( 0, -4 ) );
					var l_isUnique = true;
					for ( l_fileRef in l_fileReferences )
					{
						if ( l_fileRef.name == l_audioRef.name )
						{
							l_isUnique = false;
						}
					}
					if ( l_isUnique )
					{
						l_fileReferences.push( l_audioRef );
					}
				}
			}
			else
			{
				l_fields = l_fields.concat( buildDirectory( p_base, p_directory + l_fileName + "/", p_rootDirectory ) );
			}
		}
		for ( l_fileRef in l_fileReferences )
		{
			// create new fields based on file references!
			l_fields.push( {
					name: l_fileRef.name,
					doc: l_fileRef.documentation,
					access: [Access.APublic, Access.AStatic, Access.AInline],
					kind: FieldType.FVar( macro:String, macro $v{l_fileRef.value} ),
					pos: Context.currentPos()
				} );
		}
		return l_fields;
	}
	
	#end
}

class _HelperFileRef
{
	public var name:String;
	public var value:String;
	public var documentation:String;

	public function new( p_value:String, p_rootDirectory:String )
	{
		value = p_value;
		name = p_value.split( p_rootDirectory ).join( "" ).split( "/" ).join( "_" ).split( "-" ).join( "___" ).split( "." ).join( "__" ); // A-Za-z0-9_
		documentation = "Reference to file on disk \"" + p_value + "\". (auto generated)";
	}
}

class _HelperAudioRef extends _HelperFileRef
{
	public function new( p_value:String )
	{
		super( "", "" );
		value = p_value;
		name = "audio_" + p_value;
		documentation = "Reference to audio id \"" + p_value + "\". (auto generated)";
	}
}