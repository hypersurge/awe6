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

/**
 * The ITextStyle interface should be implemented by objects created by the createTextStyle method of IFactory.
 * @author	Robert Fell
 * @todo	Add ranges to documentation.
 */
interface ITextStyle
{
	/**
	 * Font name.
	 */
	var font:String;
	/**
	 * Font size.
	 */
	var size:Float;
	/**
	 * Font color.
	 */
	var color:Int;
	/**
	 * Font horizontal alignment.
	 */
	var align:ETextAlign;
	/**
	 * Font spacing.
	 */
	var spacing:Float;
	/**
	 * Font weight.
	 */
	var isBold:Bool;
	/**
	 * Font emphasis.
	 */
	var isItalic:Bool;
	/**
	 * Font thickness.  Range: 0...1.
	 */
	var thickness:Float;
	/**
	 * Collection of visual filters appled to font.
	 */
	var filters:Array<Dynamic>;
	/**
	 * String representation of this object.
	 * @return	Representation of this object.
	 */
	function toString():String;	
	/**
	 * Duplicates this TextStyle.
	 * @return	A duplicate.
	 */
	function clone():ITextStyle;
}