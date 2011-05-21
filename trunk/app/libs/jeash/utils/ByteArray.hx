/**
 * Copyright (c) 2010, Jeash contributors.
 * 
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package jeash.utils;

import haxe.io.Input;
import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.io.BytesBuffer;
import haxe.io.Eof;
import haxe.io.Error;

import Html5Dom;

class ByteArray {

	var data : Array<Int>;
	var bigEndian : Bool;

	public var bytesAvailable(GetBytesAvailable,null) : Int;
	public var endian(__GetEndian,__SetEndian) : Endian;
	public var objectEncoding : Int;

	public var position : Int;
	public var length(GetLength,null) : Int;

	var TWOeN23 : Float;
	var pow : Float->Float->Float;
	var LN2 : Float;
	var abs : Float->Float;
	var log : Float->Float;
	//var fromCharCode : Int -> String;
	var floor : Float->Int;
	//var parseInt : String->Int->Int;

	inline function GetBytesAvailable():Int
	{
		return length - position;
	}

	function readString( len : Int ) : String {
		var bytes = Bytes.alloc(len);
		readFullBytes(bytes,0,len);
		return bytes.toString();
	}

	function readFullBytes( bytes : Bytes, pos : Int, len : Int ) {
		for ( i in pos...pos+len )
			data[this.position++] = bytes.get(i);
	}

	function read( nbytes : Int ) : Bytes 
	{
		var s = new ByteArray();
		readBytes(s,0,nbytes);
		return Bytes.ofData(s.data);
	}

	function GetLength()
	{
		return data.length;
	}

	public function new() {
		this.position = 0;
		this.data = [];

		this.TWOeN23 = Math.pow(2, -23);
		this.pow = Math.pow;
		this.LN2 = Math.log(2);
		this.abs = Math.abs;
		this.log = Math.log;
		//this.fromCharCode = String.fromCharCode;
		this.floor = Math.floor;
		//this.parseInt = untyped window.parseInt;

		this.bigEndian = false;
	}

	public function readByte() : Int 
	{
		if( this.position >= this.length )
			throw new Eof();
		return data[this.position++];
	}

	public function readBytes(bytes : ByteArray, ?offset : UInt, ?length : UInt)
	{
		if( offset < 0 || length < 0 || offset + length > data.length )
			throw Error.OutsideBounds;

		if( data.length == 0 && length > 0 )
			throw new Eof();

		if( data.length < length )
			length = data.length;

		var b1 = data;
		var b2 = bytes;
		b2.position = offset;
		for( i in 0...length )
			b2.writeByte( b1[this.position+i] );
		b2.position = offset;

		this.position += length;
	}
	
	public function writeByte(value : Int)
	{
		data[this.position++] = value;
	}

	public function writeBytes(bytes : ByteArray, ?offset : UInt, ?length : UInt) 
	{
		if( offset < 0 || length < 0 || offset + length > bytes.length ) throw Error.OutsideBounds;
		var b2 = bytes;
		b2.position = offset;
		for( i in 0...length )
			data[this.position++] = b2.readByte();

	}

	public function readBoolean() 
	{
		return this.readByte() == 1 ? true : false;
	}

	public function writeBoolean(value : Bool) 
	{
		this.writeByte(value?1:0);
	}

	public function readDouble() : Float 
	{
		var data = this.data, pos, b1, b2, b3, b4, b5, b6, b7, b8;
		if (bigEndian) {
			pos = (this.position += 8) - 8;
			b1 = data[pos] & 0xFF;
			b2 = data[++pos] & 0xFF;
			b3 = data[++pos] & 0xFF;
			b4 = data[++pos] & 0xFF;
			b5 = data[++pos] & 0xFF;
			b6 = data[++pos] & 0xFF;
			b7 = data[++pos] & 0xFF;
			b8 = data[++pos] & 0xFF;
		} else {
			pos = (this.position += 8);
			b1 = data[--pos] & 0xFF;
			b2 = data[--pos] & 0xFF;
			b3 = data[--pos] & 0xFF;
			b4 = data[--pos] & 0xFF;
			b5 = data[--pos] & 0xFF;
			b6 = data[--pos] & 0xFF;
			b7 = data[--pos] & 0xFF;
			b8 = data[--pos] & 0xFF;
		}
		var sign = 1 - ((b1 >> 7) << 1);									// sign = bit 0
		var exp = (((b1 << 4) & 0x7FF) | (b2 >> 4)) - 1023;					// exponent = bits 1..11

		// This crazy toString() stuff works around the fact that js ints are
		// only 32 bits and signed, giving us 31 bits to work with
		var sig =untyped {
		 	parseInt(((((b2&0xF) << 16) | (b3 << 8) | b4 ) * pow(2, 32)).toString(2), 2) +
			parseInt(((b5 >> 7) * pow(2,31)).toString(2), 2) +
			parseInt((((b5&0x7F) << 24) | (b6 << 16) | (b7 << 8) | b8).toString(2), 2);	// significand = bits 12..63
		}

		if (sig == 0 && exp == -1023)
			return 0.0;

		return sign*(1.0 + pow(2, -52)*sig)*pow(2, exp);
	}

	public function writeDouble(x : Float) 
	{
		if (x==0.0) {
			for (_ in 0...8) 
				data[this.position++] = 0;
		}

		var exp = floor(log(abs(x)) / LN2);
		var sig : Int = floor(abs(x) / pow(2, exp) * pow(2, 52));
		var sig_h = (sig & cast 34359738367);
		var sig_l = floor((sig / pow(2,32)) );
		var b1 = (exp + 0x3FF) >> 4 | (exp>0 ? ((x<0) ? 1<<7 : 1<<6) : ((x<0) ? 1<<7 : 0)),
		    b2 = (exp + 0x3FF) << 4 & 0xFF | (sig_l >> 16 & 0xF),
		    b3 = (sig_l >> 8) & 0xFF,
		    b4 = sig_l & 0xFF,
		    b5 = (sig_h >> 24) & 0xFF,
		    b6 = (sig_h >> 16) & 0xFF,
		    b7 = (sig_h >> 8) & 0xFF,
		    b8 = sig_h & 0xFF;

		if (bigEndian) {
			data[this.position++] = b1;
			data[this.position++] = b2;
			data[this.position++] = b3;
			data[this.position++] = b4;
			data[this.position++] = b5;
			data[this.position++] = b6;
			data[this.position++] = b7;
			data[this.position++] = b8;
		} else {
			data[this.position++] = b8;
			data[this.position++] = b7;
			data[this.position++] = b6;
			data[this.position++] = b5;
			data[this.position++] = b4;
			data[this.position++] = b3;
			data[this.position++] = b2;
			data[this.position++] = b1;
		}
	}

	public function readFloat() : Float 
	{
		var data = this.data, pos, b1, b2, b3, b4;

		if (bigEndian) {
			pos = (this.position += 4) - 4;
			b1 = data[pos] & 0xFF;
			b2 = data[++pos] & 0xFF;
			b3 = data[++pos] & 0xFF;
			b4 = data[++pos] & 0xFF;
		} else {
			pos = (this.position += 4);
			b1 = data[--pos] & 0xFF;
			b2 = data[--pos] & 0xFF;
			b3 = data[--pos] & 0xFF;
			b4 = data[--pos] & 0xFF;
		}

		var sign = 1 - ((b1 >> 7) << 1);
		var exp = (((b1 << 1) & 0xFF) | (b2 >> 7)) - 127;
		var sig = ((b2 & 0x7F) << 16) | (b3 << 8) | b4;
		if (sig == 0 && exp == -127)
			return 0.0;

		return sign*(1 + TWOeN23*sig)*pow(2, exp);
	}

	public function writeFloat( x : Float ) 
	{
		if (x==0.0) {
			for (_ in 0...4)
				data[this.position++] = 0;
		}

		var exp = floor(log(abs(x)) / LN2);
		var sig = (floor(abs(x) / pow(2, exp) * pow(2, 23)) & 0x7FFFFF);
		var b1 = (exp + 0x7F) >> 1 | (exp>0 ? ((x<0) ? 1<<7 : 1<<6) : ((x<0) ? 1<<7 : 0)),
		    b2 = (exp + 0x7F) << 7 & 0xFF | (sig >> 16 & 0x7F),
		    b3 = (sig >> 8) & 0xFF,
		    b4 = sig & 0xFF;

		if (bigEndian) {
			data[this.position++] = b1;
			data[this.position++] = b2;
			data[this.position++] = b3;
			data[this.position++] = b4;
		} else {
			data[this.position++] = b4;
			data[this.position++] = b3;
			data[this.position++] = b2;
			data[this.position++] = b1;
		}
	}

	public function readInt()
	{
		var ch1,ch2,ch3,ch4;
		if( bigEndian ) {
			ch4 = readByte();
			ch3 = readByte();
			ch2 = readByte();
			ch1 = readByte();
		} else {
			ch1 = readByte();
			ch2 = readByte();
			ch3 = readByte();
			ch4 = readByte();
		}
		return ch1 | (ch2 << 8) | (ch3 << 16) | (ch4 << 24);
	}

	public function writeInt(value : Int)
	{
		if( bigEndian ) 
		{
			writeByte(value >>> 24);
			writeByte((value >> 16) & 0xFF);
			writeByte((value >> 8) & 0xFF);
			writeByte(value & 0xFF);
		} else {
			writeByte(value & 0xFF);
			writeByte((value >> 8) & 0xFF);
			writeByte((value >> 16) & 0xFF);
			writeByte(value >>> 24);
		}
	}

	public function readShort()
	{
		var ch1 = readByte();
		var ch2 = readByte();
		var n = bigEndian ? ch2 | (ch1 << 8) : ch1 | (ch2 << 8);
		if( n & 0x8000 != 0 )
			return n - 0x10000;
		return n;
	}

	public function writeShort(value : Int)
	{
		if( value < -0x8000 || value >= 0x8000 ) throw Error.Overflow;
		writeUnsignedShort(value & 0xFFFF);
	}

	public function writeUnsignedShort( value : Int ) 
	{
		if( value < 0 || value >= 0x10000 ) throw Error.Overflow;
		if( endian == Endian.BIG_ENDIAN ) {
			writeByte(value >> 8);
			writeByte(value & 0xFF);
		} else {
			writeByte(value & 0xFF);
			writeByte(value >> 8);
		}
	}

	public function readUTF()
	{
		var len = readShort();

		var bytes = Bytes.ofData( data );
		return bytes.readString( 2, len );
	}

	public function writeUTF(value : String)
	{
		var bytes = Bytes.ofString( value );
		writeShort( bytes.length );
		for ( i in 0...bytes.length )
			data[this.position++] = bytes.get(i);
	}

	public function writeUTFBytes(value : String)
	{
		var bytes = Bytes.ofString( value );
		for ( i in 0...bytes.length )
			data[this.position++] = bytes.get(i);
	}

	public function readUTFBytes(len:Int)
	{
		var bytes = Bytes.ofData( data );
		return bytes.readString( 0, len );
	}

	public function readUnsignedByte():Int
	{
		return readByte();
	}

	public function readUnsignedShort():Int
	{
		return readShort();
	}

	public function readUnsignedInt():Int
	{
		return readInt();
	}

	public function writeUnsignedInt( value : Int )
	{
		writeInt( value );
	}

	public function __GetEndian() : Endian
	{
		if ( bigEndian == true )
		{
			return Endian.BIG_ENDIAN;
		} else {
			return Endian.LITTLE_ENDIAN;
		}
	}
	public function __SetEndian( endian : Endian ) : Endian
	{
		if ( endian == Endian.BIG_ENDIAN )
		{
			bigEndian = true;
		} else {
			bigEndian = false;
		}

		return endian;
	}
}
