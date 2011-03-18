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
import awe6.interfaces.IKernel;
import awe6.interfaces.IPriority;
import awe6.interfaces.ITools;
import haxe.io.BytesData;

/**
 * The Tools class provides a minimalist implementation of the ITools interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Tools implements ITools
{
	private var _kernel:IKernel;
	public var BIG_NUMBER( default, null ):Int;
	
	public function new( kernel:IKernel )
	{
		_kernel = kernel;
		BIG_NUMBER = 9999998;
	}	

	public function createGuid( ?isSmall:Bool = false, ?prefix:String = "" ):String
	{
		var l_S4 = function() { return StringTools.hex( Std.int( ( 1 + Math.random() ) * 0x10000 ) | 0, 1 ).substr( 1 ); }
		return isSmall ? prefix + ( l_S4() + l_S4() + l_S4() ).substr( 0, 10 ) : prefix + ( l_S4() + l_S4() + "-" + l_S4() + "-" + l_S4() + "-" + l_S4() + "-" + l_S4() + l_S4() + l_S4() );
	}	
	
	public inline function ease( originalValue:Float, newValue:Float, ease:Float ):Float
	{
		return ( originalValue * ( 1 - ease ) ) + ( newValue * ease );
	}
	
	public inline function sortByString( a:String, b:String ):Int
	{
		return Reflect.compare( a.toLowerCase(), b.toLowerCase() );
	}	
	
	public inline function sortByInt( a:Int, b:Int ):Int
	{
		return Reflect.compare( a, b );
	}	
	
	public inline function sortByPriority( a:IPriority, b:IPriority ):Int
	{
		var l_ap:Int = a.priority;
		var l_bp:Int = b.priority;
		if ( l_ap < l_bp ) return -1;
        if ( l_ap > l_bp ) return 1;
        return 0;
	}	
	
	public inline function toUpperCaseFirst( value:String ):String
	{
		return value.charAt( 0 ).toUpperCase() + value.substr( 1 ).toLowerCase();
	}
	
	private function _isCamelCase( value:String ):Bool
	{
		if ( value.toUpperCase() == value ) return false;
		if ( value.indexOf( " " ) > -1 ) return false;
		if ( value.indexOf( "_" ) > -1 ) return false;
		return true;
	}
	
	private function _isConstCase( value:String ):Bool
	{
		if ( value.toUpperCase() != value ) return false;
		if ( value.indexOf( " " ) > -1 ) return false;
		return true;
	}
	
	public function toCamelCase( value:String, ?isLower:Bool = false  ):String
	{
		if ( ( value == null ) || ( value == "" ) ) return "";
		if ( _isCamelCase( value ) ) return value;
		if ( _isConstCase( value ) ) value = fromConstCase( value );		
		var l_result:String = "";
		value = StringTools.replace( value, "     ", " " );
		value = StringTools.replace( value, "    ", " " );
		value = StringTools.replace( value, "   ", " " );
		value = StringTools.replace( value, "  ", " " );
		value = StringTools.replace( value, " ", "_" );
		var l_del:String = "_";
		var l_words:Array<String> = value.split( l_del );
		for ( i in l_words )
		{
			if ( isLower ) l_result += i.toLowerCase();
			else l_result += toUpperCaseFirst( i );
			isLower = false;
		}
		return l_result;
	}
	
	public function fromCamelCase( value:String ):String
	{
		if ( ( value == null ) || ( value == "" ) ) return "";
		var l_result:String = "";
		var l_chars:Array<String> = value.split( "" );
		var l_space:String = "";
		for ( i in l_chars )
		{
			if ( i.toLowerCase() != i ) l_result += l_space;
			l_result += i;
			l_space = " ";
		}
		return l_result;
	}
	
	public function toConstCase( value:String ):String
	{
		if ( ( value == null ) || ( value == "" ) ) return "";
		if ( _isConstCase( value ) ) return value;
		if ( _isCamelCase( value ) ) value = fromCamelCase( value );		
		var l_result:String = "";
		value = StringTools.replace( value, "     ", " " );
		value = StringTools.replace( value, "    ", " " );
		value = StringTools.replace( value, "   ", " " );
		value = StringTools.replace( value, "  ", " " );
		value = StringTools.replace( value, " ", "_" );
		l_result = value.toUpperCase();
		return l_result;
	}
	
	public function fromConstCase( value:String ):String
	{
		if ( ( value == null ) || ( value == "" ) ) return "";
		var l_result:String = "";
		var l_words:Array<String> = value.split( "_" );
		var l_space:String = "";
		for ( i in l_words )
		{
			l_result += l_space + toUpperCaseFirst( i );
			l_space = " ";
		}
		return l_result;
	}
	
	public function toWords( value:String ):String
	{
		if ( _isCamelCase( value ) ) return fromCamelCase( value );
		if ( _isConstCase( value ) ) return fromConstCase( value );
		return value;
	}
	
	public inline function limit( value:Float, min:Float, max:Float ):Float
	{
		return ( value > max ) ? max : ( value < min ) ? min : value;
	}
	
	public inline function range( value:Float, min:Float, max:Float ):Float
	{
		var l_d:Float = max - min;
		if ( l_d == 0 ) return value;
		var l_o:Float = value - min;
		return ( l_o - ( Math.floor( l_o / l_d ) * l_d ) ) + min;
	}
	
	public inline function swap<T>( a:T, b:T ):Void
	{
		var l_temp:T = a;
		a = b;
		b = l_temp;
	}
	
	public function getRandomType<T>( e:Enum<T> ):T
	{
		return Type.createEnumIndex( e, Std.random( Type.getEnumConstructs( e ).length ) );		
	}	
	
	public inline function isOdd( value:Int ):Bool
	{
		return ( value%2 != 0 );
	}

	public inline function isEven( value:Int ):Bool
	{
		return ( value%2 == 0 );
	}

	public inline function sgn( value:Float ):Int
	{
		if ( value > 0 ) return 1;
		else if ( value == 0 ) return 0;
		else return -1;
	}
	
	public inline function isBool( value:Dynamic ):Bool
	{
		return ( value != 0 && value != null && value != false );		
	}
	
	public inline function nearestSquare( value:Float ):Int
	{
		if ( value == 0 ) return 0;
		else
		{
			var l_sqrt:Int = Math.round( Math.sqrt( Math.abs( value ) ) );
			return l_sqrt * l_sqrt * sgn( value );
		}
	}
	
	public function shuffle<T>( array:Array<T> ):Array<T>
	{
		var l_result:Array<T> = array.copy();
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
	
	public function convertUpdatesToTime( frames:Int, ?delimiter:String ):String
	{
		if ( delimiter == null ) delimiter = "'";
		if ( frames < 0 ) return "99" + delimiter + "99" + delimiter + "99";
		var l_seconds:Int = Math.floor( frames / _kernel.factory.targetFramerate );
		var l_remainder:String = Std.string( Math.round( ( ( frames / _kernel.factory.targetFramerate ) - l_seconds ) * 100 ) );
		var l_minutes:Int = 0;
		while ( l_seconds > 59 )
		{
			l_minutes++;
			l_seconds -= 60;
		}
		if ( l_minutes > 99 ) l_minutes = 99;
		while ( l_remainder.length < 2 ) l_remainder = "0" + l_remainder;
		var l_secs:String = Std.string( l_seconds );
		if ( l_seconds < 10 ) l_secs = "0" + l_secs;
		var l_mins:String = Std.string( l_minutes );
		if ( l_minutes < 10 ) l_mins = "0" + l_mins;
		if ( l_seconds == 0 ) l_secs = "00";
		if ( l_minutes == 0 ) l_mins = "00";
		return Std.string( l_mins + delimiter + l_secs + delimiter + l_remainder );
	}
	
	public function intToHex( value:Int ):String
	{
		value &= 0xFF;
		var l_hex:String = "0123456789abcdef";
		return l_hex.charAt( value >> 4 ) + l_hex.charAt( value & 0xF );
	}
	
	public function bytesToHex( bytesData:BytesData ):String
	{
		var l_string:String = "";
		bytesData.position = 0;
		for ( i in 0...bytesData.length ) l_string += intToHex( bytesData.readUnsignedByte() );
		return l_string;
	}
	
	public function hexToBytes( value:String ):BytesData
	{
		var isValid:Bool = true;
		var l_hex:String = "0123456789abcdefABCDEF";
		var l_bytesData:BytesData = new BytesData();
		
		value = StringTools.replace( value, " ", "" );
		for ( i in 0...( value.length - 1 ) )
		{
			if ( i % 2 == 0 )
			{
				var l_c1:String = value.charAt( i );
				var l_p1:Int = l_hex.indexOf( l_c1 );
				if ( l_p1 >= 16 ) l_p1 -= 6;
				if ( l_p1 >= 16 || l_p1 < 0 ) isValid = false;
				var l_c2:String = value.charAt( i + 1 );
				var l_p2:Int = l_hex.indexOf( l_c2 );
				if ( l_p2 >= 16 ) l_p2 -= 6;
				if ( l_p2 >= 16 || l_p2 < 0 ) isValid = false;
				l_bytesData.writeByte( ( l_p1 << 4 ) + l_p2 );
			}
		}
		return isValid ? l_bytesData: null;
	}	
	
}