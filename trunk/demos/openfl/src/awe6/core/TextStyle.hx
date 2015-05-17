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
import awe6.interfaces.ETextAlign;
import awe6.interfaces.ITextStyle;

/**
 * The TextStyle class provides a minimalist implementation of the ITextStyle interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class TextStyle implements ITextStyle
{
	public var font:String;
	public var size:Float;
	public var color:Int;
	public var align:ETextAlign;
	public var spacingHorizontal:Float;
	public var spacingVertical:Float;
	public var isBold:Bool;
	public var isItalic:Bool;
	public var thickness:Float;
	public var filters:Array<Dynamic>;

	public function new( ?p_font:String, ?p_size:Float, ?p_color:Int, p_isBold:Bool = false, p_isItalic:Bool = false, ?p_align:ETextAlign, ?p_spacingHorizontal:Float, ?p_spacingVertical:Float, p_thickness:Float = 0, ?p_filters:Array<Dynamic> ) 
	{
		font = ( p_font != null ) ? p_font : "_sans";
		size = ( p_size != null ) ? p_size : 12;
		color = ( p_color != null ) ? p_color : 0x000000;
		isBold = p_isBold;
		isItalic = p_isItalic;
		align = ( p_align != null ) ? p_align : ETextAlign.LEFT;
		spacingHorizontal = ( p_spacingHorizontal != null ) ? p_spacingHorizontal : 0;
		spacingVertical = ( p_spacingVertical != null ) ? p_spacingVertical : 0;
		thickness = p_thickness;
		filters = p_filters;
	}
	
	public function toString():String
	{
		return Std.string( font + "," + size + "," + color + "," + isBold + "," + isItalic + "," + align + "," + spacingHorizontal + "," + spacingVertical + "," + thickness + "," + filters );
	}
	
	public function clone():ITextStyle
	{
		return new TextStyle( font, size, color, isBold, isItalic, align, spacingHorizontal, spacingVertical, thickness, filters );
	}
	
}