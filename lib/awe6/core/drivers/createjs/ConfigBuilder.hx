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

package awe6.core.drivers.createjs;
import haxe.macro.Context;
import haxe.macro.Expr;
import sys.io.File;

/**
 * This is a helper to provide easy code completion for a Config XML stored in the project's folder.
 * <p>Create a "Config" class in your project root as a reference point:</p>
 * <pre>@:build( awe6.core.drivers.createjs.ConfigBuilder.build( "bin/assets/__Config.xml" ) )
 * class Config {}</pre>
 * @author Robert Fell
 * @author Mark Knol [blog.stroep.nl]
 */
class ConfigBuilder
{
	#if macro
	
    public static function build( p_config:String, ?p_decache:Dynamic ):Array<Field>
    {
		var l_data:String = File.read( p_config ).readAll().toString();
		return traverseElements( Xml.parse( l_data ).firstElement().elements(), "" );
    }
	
	public static function traverseElements( p_elements:Iterator<Xml>, p_prefix:String ):Array<Field>
	{
        var l_fields:Array<Field> = Context.getBuildFields();
		if ( p_prefix.length != 0 )
		{
			p_prefix += ".";
		}
		for ( i in p_elements )
		{
			var l_name:String = p_prefix + i.nodeName;
			if ( i.elements().hasNext() )
			{
				l_fields = l_fields.concat( traverseElements( i.elements(), l_name ) );
			}
			
			if ( ( i.firstChild() != null ) && ( i.firstChild().toString().substr( 0, 9 ) == "<![CDATA[" ) )
			{
				i.firstChild().nodeValue = i.firstChild().toString().split( "<![CDATA[" ).join( "" ).split( "]]>" ).join( "" );
			}
			if ( i.firstChild() == null )
			{
				push( l_fields, l_name, "" );
			}
			else
			{
				var l_nodeType = i.firstChild().nodeType;
				if ( ( l_nodeType != Xml.Element ) && ( l_nodeType != Xml.Document ) )
				{
					push( l_fields, l_name, i.firstChild() == null ? "" : i.firstChild().nodeValue );
				}
				else
				{
					push( l_fields, l_name, "" );
				}
			}
			for ( j in i.attributes() )
			{
				var l_aName:String = l_name + "." + j;
				push( l_fields, l_aName, i.get( j ) );
			}
		}
		return l_fields;
	}
	
	public static function push( p_fields:Array<Field>, p_name = "", p_value = "" ):Void
	{
		if ( StringTools.trim( p_value ) == "" ) return;
		p_value = p_name; // remove this if you want to inline the contents of the XML file!
        p_name = p_name.split( "/" ).join( "__" ).split( "-" ).join( "___" ).split( "." ).join( "_" );
		p_fields.push( {
				name: p_name,
				doc: "TBC",
				access: [Access.APublic, Access.AStatic, Access.AInline],
				kind: FieldType.FVar( macro:String, macro $v{p_value} ),
				pos: Context.currentPos()
			} );
	}
	
	#end
}
