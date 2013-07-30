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
import awe6.interfaces.IEncrypter;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPriority;
import awe6.interfaces.ITools;
import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.Serializer;
import haxe.Unserializer;

/**
 * The Tools class provides a minimalist implementation of the ITools interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Tools implements ITools
{
	public var BIG_NUMBER( default, null ):Int;
	
	private var _kernel:IKernel;
	private var _encrypter:IEncrypter;
	
	public function new( p_kernel:IKernel )
	{
		_kernel = p_kernel;
		BIG_NUMBER = 9999998;
		_encrypter = _kernel.factory.createEncrypter();
	}

	public function createGuid( p_isSmall:Bool = false, p_prefix:String = "" ):String
	{
		return p_isSmall ? p_prefix + ( _randomCharacter() + _randomCharacter() + _randomCharacter() ).substr( 0, 10 ) : p_prefix + ( _randomCharacter() + _randomCharacter() + "-" + _randomCharacter() + "-" + _randomCharacter() + "-" + _randomCharacter() + "-" + _randomCharacter() + _randomCharacter() + _randomCharacter() );
	}
	
	private function _randomCharacter():String
	{
		return StringTools.hex( Std.int( ( 1 + Math.random() ) * 0x10000 ) | 0, 1 ).substr( 1 );
	}
	
	public inline function ease( p_originalValue:Float, p_newValue:Float, p_ease:Float ):Float
	{
		return ( p_originalValue * ( 1 - p_ease ) ) + ( p_newValue * p_ease );
	}
	
	public inline function sortByString( p_a:String, p_b:String ):Int
	{
		return Reflect.compare( p_a.toLowerCase(), p_b.toLowerCase() );
	}	
	
	public inline function sortByInt( p_a:Int, p_b:Int ):Int
	{
		return Reflect.compare( p_a, p_b );
	}	
	
	public inline function sortByPriority( p_a:IPriority, p_b:IPriority ):Int
	{
		var l_ap:Int = p_a.priority;
		var l_bp:Int = p_b.priority;
		if ( l_ap < l_bp )
		{
			return -1;
		}
        if ( l_ap > l_bp )
		{
			return 1;
		}
        return 0;
	}	
	
	public inline function toUpperCaseFirst( p_value:String ):String
	{
		return p_value.charAt( 0 ).toUpperCase() + p_value.substr( 1 ).toLowerCase();
	}
	
	private function _isCamelCase( p_value:String ):Bool
	{
		if ( p_value.toUpperCase() == p_value )
		{
			return false;
		}
		if ( p_value.indexOf( " " ) > -1 )
		{
			return false;
		}
		if ( p_value.indexOf( "_" ) > -1 )
		{
			return false;
		}
		return true;
	}
	
	private function _isConstCase( p_value:String ):Bool
	{
		if ( p_value.toUpperCase() != p_value )
		{
			return false;
		}
		if ( p_value.indexOf( " " ) > -1 )
		{
			return false;
		}
		return true;
	}
	
	public function toCamelCase( p_value:String, p_isUpper:Bool = false ):String
	{
		if ( ( p_value == null ) || ( p_value == "" ) )
		{
			return "";
		}
		if ( _isCamelCase( p_value ) )
		{
			return p_value;
		}
		if ( _isConstCase( p_value ) )
		{
			p_value = fromConstCase( p_value );		
		}
		var l_result:String = "";
		p_value = StringTools.replace( p_value, "     ", " " );
		p_value = StringTools.replace( p_value, "    ", " " );
		p_value = StringTools.replace( p_value, "   ", " " );
		p_value = StringTools.replace( p_value, "  ", " " );
		p_value = StringTools.replace( p_value, " ", "_" );
		var l_del:String = "_";
		var l_words:Array<String> = p_value.split( l_del );
		for ( i in l_words )
		{
			l_result += p_isUpper ? toUpperCaseFirst( i ) : i.toLowerCase();
			p_isUpper = true;
		}
		return l_result;
	}
	
	public function fromCamelCase( p_value:String ):String
	{
		if ( ( p_value == null ) || ( p_value == "" ) )
		{
			return "";
		}
		var l_result:String = "";
		var l_chars:Array<String> = p_value.split( "" );
		var l_space:String = "";
		for ( i in l_chars )
		{
			if ( i.toLowerCase() != i )
			{
				l_result += l_space;
			}
			l_result += i;
			l_space = " ";
		}
		return l_result;
	}
	
	public function toConstCase( p_value:String ):String
	{
		if ( ( p_value == null ) || ( p_value == "" ) )
		{
			return "";
		}
		if ( _isConstCase( p_value ) )
		{
			return p_value;
		}
		if ( _isCamelCase( p_value ) )
		{
			p_value = fromCamelCase( p_value );		
		}
		var l_result:String = "";
		p_value = StringTools.replace( p_value, "     ", " " );
		p_value = StringTools.replace( p_value, "    ", " " );
		p_value = StringTools.replace( p_value, "   ", " " );
		p_value = StringTools.replace( p_value, "  ", " " );
		p_value = StringTools.replace( p_value, " ", "_" );
		l_result = p_value.toUpperCase();
		return l_result;
	}
	
	public function fromConstCase( p_value:String ):String
	{
		if ( ( p_value == null ) || ( p_value == "" ) )
		{
			return "";
		}
		var l_result:String = "";
		var l_words:Array<String> = p_value.split( "_" );
		var l_space:String = "";
		for ( i in l_words )
		{
			l_result += l_space + toUpperCaseFirst( i );
			l_space = " ";
		}
		return l_result;
	}
	
	public function toWords( p_value:String ):String
	{
		if ( _isCamelCase( p_value ) )
		{
			return fromCamelCase( p_value );
		}
		if ( _isConstCase( p_value ) )
		{
			return fromConstCase( p_value );
		}
		return p_value;
	}
	
	public inline function limit( p_value:Float, p_min:Float, p_max:Float ):Float
	{
		return ( p_value > p_max ) ? p_max : ( p_value < p_min ) ? p_min : p_value;
	}
	
	public inline function range( p_value:Float, p_min:Float, p_max:Float ):Float
	{
		var l_d:Float = p_max - p_min;
		if ( l_d == 0 )
		{
			return p_value;
		}
		else
		{
			var l_o:Float = p_value - p_min;
			return ( l_o - ( Math.floor( l_o / l_d ) * l_d ) ) + p_min;
		}
	}
	
	public inline function swap<T>( p_a:T, p_b:T ):Void
	{
		var l_temp:T = p_a;
		p_a = p_b;
		p_b = l_temp;
	}
	
	public function getRandomType<T>( p_enum:Enum<T> ):T
	{
		return Type.createEnumIndex( p_enum, Std.random( Type.getEnumConstructs( p_enum ).length ) );		
	}	
	
	public inline function isOdd( p_value:Int ):Bool
	{
		return ( p_value % 2 != 0 );
	}

	public inline function isEven( p_value:Int ):Bool
	{
		return ( p_value % 2 == 0 );
	}

	public inline function sgn( p_value:Float ):Int
	{
		if ( p_value > 0 )
		{
			return 1;
		}
		else if ( p_value == 0 )
		{
			return 0;
		}
		else
		{
			return -1;
		}
	}
		
	public inline function isBool( p_value:Dynamic ):Bool
	{
		return ( p_value != 0 && p_value != null && p_value != false );
	}
	
	public inline function nearestSquare( p_value:Float ):Int
	{
		if ( p_value == 0 )
		{
			return 0;
		}
		else
		{
			var l_sqrt:Int = Math.round( Math.sqrt( Math.abs( p_value ) ) );
			return l_sqrt * l_sqrt * sgn( p_value );
		}
	}
	
	public function shuffle<T>( p_array:Array<T> ):Array<T>
	{
		var l_result:Array<T> = p_array.copy();
		var l_n:Int = l_result.length;
		while ( l_n > 1 )
		{
			var l_k:Int = Std.random( l_n );
			l_n--;
			var l_temp:T = l_result[l_n];
			l_result[l_n] = l_result[l_k];
			l_result[l_k] = l_temp;
		}
		return l_result;
	}
	
	public function convertUpdatesToFormattedTime( p_updates:Int, ?p_delimiter:String ):String
	{
		var l_age:Int = Math.round( 1000 * p_updates / _kernel.factory.targetFramerate );
		return convertAgeToFormattedTime( l_age, p_delimiter );
	}	
	
	public function convertAgeToFormattedTime( p_age:Int, ?p_delimiter:String ):String
	{
		if ( p_delimiter == null )
		{
			p_delimiter = "'";
		}
		if ( p_age < 0 )
		{
			return "99" + p_delimiter + "99" + p_delimiter + "99";
		}
		var l_age:Float = p_age / 1000;
		var l_seconds:Int = Math.floor( l_age );
		var l_remainder:String = Std.string( Math.round( ( l_age - l_seconds ) * 100 ) );
		var l_minutes:Int = 0;
		while ( l_seconds > 59 )
		{
			l_minutes++;
			l_seconds -= 60;
		}
		if ( l_minutes > 99 )
		{
			l_minutes = 99;
		}
		while ( l_remainder.length < 2 )
		{
			l_remainder = "0" + l_remainder;
		}
		var l_secs:String = Std.string( l_seconds );
		if ( l_seconds < 10 )
		{
			l_secs = "0" + l_secs;
		}
		var l_mins:String = Std.string( l_minutes );
		if ( l_minutes < 10 )
		{
			l_mins = "0" + l_mins;
		}
		if ( l_seconds == 0 )
		{
			l_secs = "00";
		}
		if ( l_minutes == 0 )
		{
			l_mins = "00";
		}
		return Std.string( l_mins + p_delimiter + l_secs + p_delimiter + l_remainder );
	}
	
	public inline function intToHex( p_value:Int ):String
	{
		p_value &= 0xFF;
		var l_hex:String = "0123456789abcdef";
		return l_hex.charAt( p_value >> 4 ) + l_hex.charAt( p_value & 0xF );
	}
	
	public inline function serialize( p_value:Dynamic ):String
	{
		return Serializer.run( p_value );
	}
	
	public inline function unserialize( p_value:String ):Dynamic
	{
		return Unserializer.run( p_value );
	}
	
	public function encrypt( p_value:Bytes, p_secret:String = "" ):Bytes
	{
		return _encrypter.encrypt( p_value, p_secret );
	}
	
	public function decrypt( p_value:Bytes, p_secret:String = "" ):Bytes
	{
		return _encrypter.decrypt( p_value, p_secret );
	}
}