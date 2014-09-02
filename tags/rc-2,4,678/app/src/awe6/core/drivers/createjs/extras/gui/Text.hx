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

package awe6.core.drivers.createjs.extras.gui;
import awe6.interfaces.IKernel;
import awe6.interfaces.ITextStyle;
import createjs.easeljs.Shadow;
typedef TextField = createjs.easeljs.Text;

class Text extends GuiEntity
{
	#if haxe3
	public var text( default, set ):String;
	#else
	public var text( default, set_text ):String;
	#end
	public var textStyle:ITextStyle;
	
	private var _textField:TextField;
	private var _isMultiline:Bool;
	private var _isCached:Bool;
	private var _isDirty:Bool;
	private var _prevTextStyle:String;
	
	public function new( p_kernel:IKernel, p_width:Float, p_height:Float, p_text:String = "", ?p_textStyle:ITextStyle, p_isMultiline:Bool = false, p_isCached:Bool = false )
	{
		textStyle = p_textStyle;
		_isMultiline = p_isMultiline;
		_isCached = p_isCached;
		super( p_kernel, p_width, p_height, false );
		text = p_text;
	}
	
	override private function _init():Void 
	{
		super._init();
		_textField = new TextField();
		_textField.text = text;
		var l_isDesktop:Bool = true;
		try
		{
			l_isDesktop = untyped _kernel.system.isDesktop;
		}
		catch ( p_error:Dynamic ) { }
		_draw();
		_context.addChild( _textField );
		_isDirty = false;
		_prevTextStyle = textStyle.toString();
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
		_textField.lineWidth = width;
		if ( _prevTextStyle != textStyle.toString() )
		{
			switch ( textStyle.align )
			{
				case LEFT :
					_textField.textAlign = "left";
				case CENTER :
					_textField.textAlign = "center";
					_textField.x = width * .5;
				case RIGHT :
					_textField.textAlign = "right";
					_textField.x = width;
				case JUSTIFY :
					_textField.textAlign = "left";
			}
			_textField.color = "#" + StringTools.hex( textStyle.color, 6 );
			_textField.font = ( textStyle.isBold ? "bold " : "" ) + ( textStyle.isItalic ? "italic " : "" ) + textStyle.size + "px '" + textStyle.font + "'";
			if ( textStyle.filters != null )
			{
				_textField.shadow = new Shadow( "#" + StringTools.hex( textStyle.filters[0], 6 ), textStyle.filters[1], textStyle.filters[2], textStyle.filters[3] );
			}
		}
		if ( _isCached )
		{
			_context.cache( 0, 0, width, height );
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
		_textField.text = text;
		_isDirty = true;
		return text;
	}	
	
}