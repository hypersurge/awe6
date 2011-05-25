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

package awe6.extras.gui;
import awe6.core.TextStyle;
import awe6.interfaces.IKernel;
import awe6.interfaces.ITextStyle;
#if ( flash || js )
import flash.text.AntiAliasType;
import flash.text.Font;
#end
import flash.text.TextField;
import flash.text.TextFieldType;
import flash.text.TextFormat;
import flash.text.TextFormatAlign;

class Text extends GuiEntity
{
	public var text( default, __set_text ):String;
	public var textStyle:ITextStyle;
	
	private var _textField:TextField;
	private var _textFormat:TextFormat;
	private var _isMultiline:Bool;
	private var _isInput:Bool;
	private var _isDirty:Bool;
	private var _prevTextStyle:String;
	
	public function new( kernel:IKernel, width:Float, height:Float, ?text:String = "", ?textStyle:ITextStyle, ?isMultiline:Bool = false, ?isInput:Bool = false )
	{
		this.textStyle = ( textStyle != null ) ? textStyle : new TextStyle();
		_isMultiline = isMultiline;
		_isInput = isInput;
		super( kernel, width, height, false );
		this.text = text;
	}
	
	override private function _init():Void 
	{
		super._init();
		_textField = new TextField();
		_textFormat = new TextFormat();
		_sprite.addChild( _textField );
		_sprite.cacheAsBitmap = true;
		_sprite.mouseEnabled = _isInput;
		_sprite.mouseChildren = _isInput;
		_draw();
		_isDirty = false;
		_prevTextStyle = textStyle.toString();
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( _prevTextStyle != textStyle.toString() ) _isDirty = true;
		if ( _isDirty ) _draw();
		_prevTextStyle = textStyle.toString();
	}
		
	private function _draw():Void
	{
		if ( _prevTextStyle != textStyle.toString() )
		{
			_textFormat.align = switch ( textStyle.align )
			{
				case LEFT : TextFormatAlign.LEFT;
				case CENTER : TextFormatAlign.CENTER;
				case RIGHT : TextFormatAlign.RIGHT;
				case JUSTIFY : TextFormatAlign.JUSTIFY;
			}		
			_textFormat.color = textStyle.color;
			_textFormat.font = textStyle.font;
			_textFormat.size = textStyle.size;
			_textFormat.letterSpacing = textStyle.spacingHorizontal;
			_textFormat.leading = textStyle.spacingVertical;
			_textFormat.italic = textStyle.isItalic;
			_textFormat.bold = textStyle.isBold;
			
			_textField.defaultTextFormat = _textFormat;
			_textField.width = width;
			_textField.height = height;
			_textField.selectable = _isInput;
			#if ( flash || js )
			_textField.thickness = textStyle.thickness * 200;
			_textField.antiAliasType = AntiAliasType.ADVANCED;
			_textField.embedFonts = false;
			for ( i in Font.enumerateFonts() )
			{
				if ( i.fontName == _textFormat.font )
				{
					_textField.embedFonts = true;					
					break;
				}				
			}			
			#end
			_textField.filters = #if ( js || cpp ) cast #end textStyle.filters;
			_textField.type = _isInput ? TextFieldType.INPUT : TextFieldType.DYNAMIC;
			_textField.multiline = _isMultiline;
			_textField.wordWrap = _isMultiline;		
			_textField.setTextFormat( _textFormat );
		}
		_isDirty = false;
	}
	
	private function __set_text( value:String ):String
	{
		if ( text == value ) return text;
		text = value;
		_textField.htmlText = text;
		_isDirty = true;
		return text;
	}	
	
}