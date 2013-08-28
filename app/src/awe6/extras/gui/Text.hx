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

package awe6.extras.gui;
import awe6.core.TextStyle;
import awe6.interfaces.IKernel;
import awe6.interfaces.ITextStyle;
import flash.events.KeyboardEvent;
import flash.filters.BitmapFilter;
#if flash
import flash.text.AntiAliasType;
#end
import flash.text.Font;
import flash.text.TextField;
import flash.text.TextFieldType;
import flash.text.TextFormat;
import flash.text.TextFormatAlign;

class Text extends GuiEntity
{
	#if haxe3
	public var text( default, set ):String;
	#else
	public var text( default, set_text ):String;
	#end
	public var textStyle:ITextStyle;
	
	private var _textField:TextField;
	private var _textFormat:TextFormat;
	private var _isMultiline:Bool;
	private var _isInput:Bool;
	private var _isDirty:Bool;
	private var _prevTextStyle:String;
	
	public function new( p_kernel:IKernel, p_width:Float, p_height:Float, p_text:String = "", ?p_textStyle:ITextStyle, p_isMultiline:Bool = false, p_isInput:Bool = false )
	{
		textStyle = ( p_textStyle != null ) ? p_textStyle : new TextStyle();
		_isMultiline = p_isMultiline;
		_isInput = p_isInput;
		#if !flash
		_isInput = false;
		#end
		super( p_kernel, p_width, p_height, false );
		text = p_text;
	}
	
	override private function _init():Void 
	{
		super._init();
		_textField = new TextField();
		_textField.addEventListener( KeyboardEvent.KEY_DOWN, _stopEventPropogation );
		_textField.addEventListener( KeyboardEvent.KEY_UP, _stopEventPropogation );
		_textField.multiline = _isMultiline;
		_textField.wordWrap = _isMultiline;
		_textField.type = _isInput ? TextFieldType.INPUT : TextFieldType.DYNAMIC;
		#if js
		_textField.wordWrap = true;
		#end
		_textFormat = new TextFormat();
		_draw();
		_context.addChild( _textField );
		#if ( flash || js )
		try
		{
			untyped _context.cacheAsBitmap = true;
		}
		catch ( p_error:Dynamic ) {}
		#end
		_context.mouseEnabled = _isInput;
		_context.mouseChildren = _isInput;
		_isDirty = false;
		_prevTextStyle = textStyle.toString();
	}
	
	override private function _disposer():Void
	{
		_textField.removeEventListener( KeyboardEvent.KEY_DOWN, _stopEventPropogation );
		_textField.removeEventListener( KeyboardEvent.KEY_UP, _stopEventPropogation );
		super._disposer();
	}
	
	private function _stopEventPropogation( p_event:KeyboardEvent ):Void
	{
		try
		{
			untyped p_event.stopImmediatePropagation();
		}
		catch ( p_error:Dynamic ) {}
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_isDirty = _isDirty || ( _prevTextStyle != textStyle.toString() );
		if ( _isDirty )
		{
			_draw();
		}
		_prevTextStyle = textStyle.toString();
	}
		
	private function _draw():Void
	{
		_textField.width = width;
		_textField.height = height;
		if ( _prevTextStyle != textStyle.toString() )
		{
			_textFormat.align = switch ( textStyle.align )
			{
				case LEFT :
					TextFormatAlign.LEFT;
				case CENTER :
					TextFormatAlign.CENTER;
				case RIGHT :
					TextFormatAlign.RIGHT;
				case JUSTIFY :
					TextFormatAlign.JUSTIFY;
			}
			_textFormat.color = textStyle.color;
			_textFormat.font = textStyle.font;
			_textFormat.size = textStyle.size;
			_textFormat.letterSpacing = Std.int( textStyle.spacingHorizontal );
			_textFormat.leading = Std.int( textStyle.spacingVertical );
			_textFormat.italic = textStyle.isItalic;
			_textFormat.bold = textStyle.isBold;
			
			_textField.selectable = _isInput;
			_textField.embedFonts = false;
			#if flash
			_textField.thickness = textStyle.thickness * 200;
			_textField.antiAliasType = AntiAliasType.ADVANCED;
			for ( i in Font.enumerateFonts() )
			{
				if ( i.fontName == _textFormat.font )
				{
					_textField.embedFonts = true;					
					break;
				}				
			}
			#end
			if ( textStyle.filters != null )
			{
				var l_filters:Array<BitmapFilter> = [];
				for ( i in textStyle.filters )
				{
					if ( Std.is( i, BitmapFilter ) )
					{
						l_filters.push( i );
					}
				}
				_textField.filters = l_filters;
			}
			_textField.defaultTextFormat = _textFormat;
			_textField.setTextFormat( _textFormat );
		}
		_isDirty = false;
	}
	
	private function set_text( p_value:String ):String
	{
		if ( p_value == null )
		{
			p_value = "";
		}
		if ( text == p_value )
		{
			return text;
		}
		text = p_value;
		#if js
		_textField.text = text;
		#else
		_textField.htmlText = text;
		#end
		_isDirty = true;
		return text;
	}	
	
}