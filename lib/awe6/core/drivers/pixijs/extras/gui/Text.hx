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

package awe6.core.drivers.pixijs.extras.gui;
import awe6.interfaces.IKernel;
import awe6.interfaces.ITextStyle;
typedef PixiTextStyle = pixi.core.text.TextStyle;
typedef TextField = pixi.core.text.Text;


class Text extends GuiEntity
{
	public var text( default, set ):String;
	public var textStyle:ITextStyle;
	
	private var _textField:TextField;
	private var _textFieldOutline:TextField;
	private var _isMultiline:Bool;
	private var _isDirty:Bool;
	private var _prevTextStyle:String;
	
	public function new( p_kernel:IKernel, p_width:Float, p_height:Float, p_text:String = "", ?p_textStyle:ITextStyle, p_isMultiline:Bool = false, p_isCached:Bool = false )
	{
		textStyle = p_textStyle;
		_isMultiline = p_isMultiline;
		text = p_text;
		super( p_kernel, p_width, p_height, false );
	}
	
	
	override private function _init():Void 
	{
		super._init();
		_textField = new TextField( text );
		_draw();
		_context.addChild( _textField );
		_prevTextStyle = textStyle.toString();
	}
	
	private function _createPixiTextStyle( p_textStyle:ITextStyle ):PixiTextStyle
	{
		var l_result:PixiTextStyle = new PixiTextStyle();
		l_result.align = switch ( p_textStyle.align )
		{
			case CENTER :
				"center";
			case RIGHT :
				"right";
			case LEFT, JUSTIFY :
				"left";
		}
		l_result.fill = textStyle.color;
		l_result.fontFamily = p_textStyle.font;
		l_result.fontSize = p_textStyle.size;
		l_result.fontStyle = ( textStyle.isItalic ? "italic " : "normal" );
		l_result.fontWeight =  ( textStyle.isBold ? "bold " : "normal" );
		l_result.letterSpacing = p_textStyle.spacingHorizontal;
		l_result.lineHeight = p_textStyle.spacingVertical;
		l_result.strokeThickness = p_textStyle.thickness;
		l_result.stroke = "";
		l_result.strokeThickness = 0;
		l_result.dropShadow = false;
		if ( textStyle.filters != null )
			{
				var l_filters = textStyle.filters.copy();
				if ( ( l_filters.length == 2 ) || ( l_filters.length == 6 ) )
				{
					l_result.stroke = l_filters.shift();
					l_result.strokeThickness = l_filters.shift() * 2;
				}
				if ( l_filters.length == 4 )
				{
					l_result.dropShadow = true;
					l_result.dropShadowColor = l_filters[0];
					l_result.dropShadowAlpha = .65;
					l_result.dropShadowBlur = l_filters[3];
					l_result.dropShadowAngle = l_filters[1];
					l_result.dropShadowDistance = l_filters[2];
				}
			}
		return l_result;
	}
	
	private function _alignTextField( p_textField:TextField, p_textStyle:ITextStyle ):Void
	{
		p_textField.anchor.x = switch( p_textStyle.align )
		{
			case CENTER :
				.5;
			case RIGHT :
				1;
			case LEFT, JUSTIFY :
				0;
		}
		p_textField.x = switch( p_textStyle.align )
		{
			case CENTER :
				width * .5;
			case RIGHT :
				width;
			case LEFT, JUSTIFY :
				0;
		}
		p_textField.y = -( p_textField.style.strokeThickness / 2 );
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
		if ( _prevTextStyle != textStyle.toString() )
		{
			_textField.style = _createPixiTextStyle( textStyle );
			_alignTextField( _textField, textStyle );
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
		if ( _textField != null )
		{
			_textField.text = text;
		}
		if ( _textFieldOutline != null )
		{
			_textFieldOutline.text = text;
		}
		_isDirty = true;
		return text;
	}	
}