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

interface ITools 
{
	var BIG_NUMBER( default, null ):Int;
	function createGuid( ?isSmall:Bool = false, ?prefix:String = "" ):String;
	function ease( originalValue:Float, newValue:Float, ease:Float ):Float;	
	function sortByText( a:String, b:String ):Int;	
	function sortByInt( a:Int, b:Int ):Int;	
	function sortByPriority( a:IPriority, b:IPriority ):Int;	
	function toUpperCaseFirst( value:String ):String;	
	function toCamelCase( value:String, ?isLower:Bool = false ):String;
	function toConstCase( value:String ):String;
	function fromCamelCase( value:String ):String;
	function fromConstCase( value:String ):String;
	function toWords( value:String ):String;
	function limit( value:Float, min:Float, max:Float ):Float;	
	function range( value:Float, min:Float, max:Float ):Float;	
	function swap<T>( a:T, b:T ):Void;
	function isOdd( value:Int ):Bool;
	function isEven( value:Int ):Bool;
	function sgn( value:Float ):Int;	
	function isBool( value:Dynamic ):Bool;
	function nearestSquare( value:Float ):Int;
	function convertFramesToTime( frames:Int, ?delimiter:String ):String;
	function shuffle<T>( array:Array<T> ):Array<T>;	
	function getRandomType<T>( e:Enum<T> ):T;
}