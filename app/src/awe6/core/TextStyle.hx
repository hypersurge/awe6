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
import awe6.interfaces.ETextAlign;
import awe6.interfaces.ITextStyle;

class TextStyle implements ITextStyle
{
	public var font:String;
	public var size:Float;
	public var color:UInt;
	public var align:ETextAlign;
	public var spacing:Float;
	public var isBold:Bool;
	public var isItalic:Bool;
	public var thickness:Float;
	public var filters:Array<Dynamic>;

	public function new( ?font:String, ?size:Float, ?color:UInt, ?align:ETextAlign, ?spacing:Float, ?isBold:Bool = false, ?isItalic = false, ?thickness:Float = 0, ?filters:Array<Dynamic> ) 
	{
		this.font = ( font != null ) ? font : "_sans";
		this.size = ( size != null ) ? size : 12;
		this.color = ( color != null ) ? color : 0x000000;
		this.align = ( align != null ) ? align : ETextAlign.LEFT;
		this.spacing = ( spacing != null ) ? spacing : 0;
		this.isBold = isBold;
		this.isItalic = isItalic;
		this.thickness = thickness;
		this.filters = filters;
	}
	
	public function toString():String
	{
		return Std.string( font + "," + size + "," + color + "," + align + "," + spacing + "," + isBold + "," + isItalic + "," + thickness + "," + filters );
	}
	
}