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
import haxe.io.BytesData;

/**
 * The ITools interface should be implemented by objects intended to provide tool box functionality.
 * <p>Many of these tools are need in the minimalist implementation of the interfaces.</p>
 * <p>The other functions are often regularly used in entity creation.</p>
 * @author	Robert Fell
 */
interface ITools implements IEncrypter
{
	/**
	 * Used as an arbitrarily high number to avoid infinity and division by zero issues.
	 */
	var BIG_NUMBER( default, null ):Int;
	/**
	 * Creates a Globally Unique Identifier.
	 * @param	?isSmall	If true returns an 8 bit identifier, 16 bit otherwise.
	 * @param	?prefix	Adds characters to the front of the GUID.
	 * @return	A Globally Unique Identifier.
	 */
	function createGuid( ?isSmall:Bool = false, ?prefix:String = "" ):String;
	/**
	 * Find the tween of two values.
	 * @param	originalValue	Value A.
	 * @param	newValue	Value B.
	 * @param	ease	The proportion of A:B.
	 * @return	The proportional value of A:B.
	 */
	function ease( originalValue:Float, newValue:Float, ease:Float ):Float;
	/**
	 * Sorting function for String collections.
	 * @param	a	Value A.
	 * @param	b	Value B.
	 * @return	-1 if A<B, 1 if A>B or 0 if A==B.
	 */
	function sortByString( a:String, b:String ):Int;
	/**
	 * Sorting function for Int collections.
	 * @param	a	Value A.
	 * @param	b	Value B.
	 * @return	-1 if A<B, 1 if A>B or 0 if A==B.
	 */
	function sortByInt( a:Int, b:Int ):Int;
	/**
	 * Sorting function for IPriority collections.
	 * @param	a	Value A.
	 * @param	b	Value B.
	 * @return	-1 if A<B, 1 if A>B or 0 if A==B.
	 */
	function sortByPriority( a:IPriority, b:IPriority ):Int;
	/**
	 * Creates a copy of a string with the first character uppercased. 
	 * @param	value	The string to transform.
	 * @return	Copy of a string with the first character uppercased.
	 */
	function toUpperCaseFirst( value:String ):String;
	/**
	 * Turns a word or sentence into camelCase.
	 * <p>E.g. "this example string" becomes "thisExampleString".</p>
	 * @param	value	The string to transform.
	 * @param	?isLower	If false returns PascalCase (first character uppercased).
	 * @return	camelCase or PascalCase representation of a string.
	 */
	function toCamelCase( value:String, ?isLower:Bool = false ):String;
	/**
	 * Turns a word of sentence into CONST_CASE.
	 * <p>E.g. "this example string" becomes "THIS_EXAMPLE_STRING".</p>
	 * @param	value	The string to transform.
	 * @return	CONST_CASE representation of a string.
	 */
	function toConstCase( value:String ):String;
	/**
	 * Reverts a camelCase string to a word or phrase.
	 * <p>E.g. "thisExampleString" becomes "this example string".</p>
	 * @param	value	The camelCase string to revert.
	 * @return	Word or phrase.
	 */
	function fromCamelCase( value:String ):String;
	/**
	 * Reverts a CONST_CASE string to a word or phrase.
	 * <p>E.g. "THIS_EXAMPLE_STRING" becomes "this example string"</p>
	 * @param	value	The CONST_CASE string to revert.
	 * @return	Word or phrase.
	 */
	function fromConstCase( value:String ):String;
	/**
	 * Reverts either a camelCase or CONST_CASE string to a word or phrase.
	 * @param	value	ThecamelCase or CONST_CASE string.
	 * @return	Word or phrase.
	 */
	function toWords( value:String ):String;
	/**
	 * Clamps a value between a floor and ceiling boundary.
	 * @param	value	The value to clamp.
	 * @param	min	The floor.
	 * @param	max	The ceiling.
	 * @return	Value >= floor and <= ceiling.
	 */
	function limit( value:Float, min:Float, max:Float ):Float;
	/**
	 * Wraps a value between a floor and ceiling boundary.
	 * @param	value	The value to wrap.
	 * @param	min	The floor.
	 * @param	max	The ceiling.
	 * @return	A value between floor and ceiling proportional to over or under shoot.
	 */
	function range( value:Float, min:Float, max:Float ):Float;
	/**
	 * Replaces two objects with the content of the other.
	 */
	function swap<T>( a:T, b:T ):Void;
	/**
	 * Not divisible by two.
	 * @param	value	The value to check.
	 * @return	True if value not divisible by two.
	 */
	function isOdd( value:Int ):Bool;
	/**
	 * Divisible by two.
	 * @param	value	The value to check.
	 * @return	True if value divisible by two.
	 */
	function isEven( value:Int ):Bool;
	/**
	 * Determine whether a value is less than zero, equal to zero or greater than zero.
	 * @param	value	The value to check.
	 * @return	-1 if <0, 1 if >0, 0 otherwise.
	 */
	function sgn( value:Float ):Int;
	/**
	 * Determine whether a value is true.
	 * <p>Results vary based on the context of checked value.  Usually safer to do your own Bool checks.</p>
	 * @param	value	The value to check.
	 * @return	True if the value is true.
	 */
	function isBool( value:Dynamic ):Bool;
	/**
	 * Calculate the nearest square number to a given value.
	 * <p>Useful for performance routines.</p>
	 * @param	value	The value to check.
	 * @return	A square number nearest to the value.
	 */
	function nearestSquare( value:Float ):Int;
	/**
	 * Creates a string representing a clock in the format "hh'mm'ss".
	 * <p>Uses IFactory.targetFramerate to determine the duration from updates.</p>
	 * @param	updates	The update cycles elapsed in the duration.
	 * @param	?delimiter	The character used to separate the components (default: "'").
	 * @return	String representing a clock in the format "hh:mm:ss".
	 */
	function convertUpdatesToTime( updates:Int, ?delimiter:String ):String;
	/**
	 * Randomly sorts an array.
	 */
	function shuffle<T>( array:Array<T> ):Array<T>;
	/**
	 * Creates any enumerator from the supplied class. 
	 */
	function getRandomType<T>( e:Enum<T> ):T;
	/**
	 * Converts an Int to a Hex string.
	 * @param	value	The Int to convert.
	 * @return	Hex value.
	 */
	function intToHex( value:Int ):String;
	/**
	 * Converts bytes to a Hex string.
	 * @param	bytesData	The bytes to convert.
	 * @return	Hex value.
	 */
	function bytesToHex( bytesData:BytesData ):String;
	/**
	 * Converts Hex string to bytes.
	 * @param	value	The Hex string to convert.
	 * @return	Bytes (same as ByteArray in Flash).
	 */
	function hexToBytes( value:String ):BytesData;
	
}