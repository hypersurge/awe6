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
import haxe.io.Bytes;
import haxe.io.BytesData;

/**
 * The Encrypter class provides a minimalist implementation of the IEncrypter interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Encrypter implements IEncrypter
{
	private var _defaultSecret:String;
	
	public function new( p_defaultSecret:String )
	{
		_defaultSecret = p_defaultSecret;
	}
	
	public function encrypt( p_value:Bytes, ?p_secret:String = "" ):Bytes
	{
		var l_secret:String = p_secret != "" ? p_secret : _defaultSecret;
		return Bytes.ofData( _xor( p_value.getData(), l_secret ) );
	}
	
	public function decrypt( p_value:Bytes, ?p_secret:String = "" ):Bytes
	{
		var l_secret:String = p_secret != "" ? p_secret : _defaultSecret;
		return Bytes.ofData( _xor( p_value.getData(), l_secret ) );
	}
	
	/**
	 * XOR favours size over strength.  It is also two-directional for easy testing.
	 * <p>XOR is the default encryption routine used in awe6 because (due to the ease of client side application decompiling) the obfuscation routine is secondary to the secret key concealment.</p>
	 * <p>Tip: haXe offers some interesting approaches towards concealing the key from plainsite.</p>
	 */
	private function _xor( p_value:BytesData, p_secret:String ):BytesData
	{
		var l_result:BytesData = new BytesData();
		var l_secretIndex:Int = 0;
		for ( i in 0...value.length )
		{
			l_result[i] = untyped p_value[i] ^ p_secret.charCodeAt( l_secretIndex );
			l_secretIndex++;
			if ( l_secretIndex >= p_secret.length )
			{
				l_secretIndex = 0;
			}
		}
		return l_result;
	}	
	
}