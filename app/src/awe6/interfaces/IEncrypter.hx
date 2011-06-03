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

package awe6.interfaces;
import haxe.io.Bytes;

/**
 * The IEncrypter interface should be implemented by objects intending to encrypt or decrypt bytes.
 * <p>Due to decompiling client side applications, encryption should not to be considered secure, merely obfuscated / hidden from plainsite.</p>
 * @author	Robert Fell
 */
interface IEncrypter
{
	/**
	 * Encrypts bytes
	 * @param	value	The unencrypted data. 
	 * @param	?secret	The secret key to encrypt the data with.  Leave blank to use default secret key.
	 * @return	Encrypted (or obfuscated) version of the original.
	 */
	function encrypt( value:Bytes, ?secret:String = "" ):Bytes;
	/**
	 * Decrypts bytes.
	 * @param	value	The encrypted data.
	 * @param	?secret	The secret key to encrypt the data with.  Leave blank to use default secret key.
	 * @return	Decrypted (or unobfuscated) version of the encrypted data.
	 */
	function decrypt( value:Bytes, ?secret:String = "" ):Bytes;
}
