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
import awe6.core.BasicButton;
import awe6.interfaces.EKey;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IKernel;
import flash.display.Sprite;

class Button extends GuiEntity
{
	public static inline var DEFAULT_LABEL = "Button";
	public var label( default, __set_label ):String;
	
	private var _basicButton:BasicButton;
	private var _spriteUp:Sprite;
	private var _spriteOver:Sprite;
	private var _key:EKey;
	private var _marginWidth:Float;
	private var _marginHeight:Float;
	private var _isBlank:Bool;

	public function new( kernel:IKernel, ?key:EKey, ?onClickCallback:Void->Void, ?onRollOverCallback:Void->Void, ?onRollOutCallback:Void->Void, ?label:String = DEFAULT_LABEL, ?width:Float = 100, ?height:Float = 25, ?marginWidth:Float = 10, ?marginHeight:Float = 10, ?isBlank:Bool = false )
	{
		_key = key;
		_spriteUp = new Sprite();
		_spriteOver = new Sprite();
		_basicButton = new BasicButton( kernel, _spriteUp, _spriteOver, 0, 0, key, onClickCallback, onRollOverCallback, onRollOutCallback );
		_basicButton.width = width;
		_basicButton.height = height;
		_marginWidth = marginWidth;
		_marginHeight = marginHeight;
		_isBlank = isBlank;
		super( kernel, width, height );
		this.label = label;
	}
	
	override private function _init():Void
	{
		super._init();
		addEntity( _basicButton, true );
	}
	
	private function _draw():Void
	{
		while( _spriteUp.numChildren > 0 ) _spriteUp.removeChildAt( 0 );
		_spriteUp.addChild( _createButtonState( false ) );
		while( _spriteOver.numChildren > 0 ) _spriteOver.removeChildAt( 0 );
		_spriteOver.addChild( _createButtonState( true ) );
	}
	
	private function _createButtonState( ?isOver:Bool = false ):Sprite
	{
		// override me
		var l_result:Sprite = new Sprite();
		l_result.graphics.beginFill( isOver ? 0xFF0000 : 0x0000FF, _isBlank ? 0 : 1 );
		l_result.graphics.drawRect( 0, 0, width, height );
		l_result.graphics.endFill;
		if ( !_isBlank ) 
		{
			var l_text:Text = new Text( _kernel, width - ( 2 * _marginWidth ), height - ( 2 * _marginHeight ), label, _kernel.factory.createTextStyle( ETextStyle.BUTTON ) );
			l_text.setPosition( _marginWidth, _marginHeight );
			l_result.addChild( cast( l_text, GuiEntity)._sprite ); // safe ancestry cast
		}		
		return l_result;
	}
	
	public function onClick():Void
	{
		_basicButton.onClick();
	}
	
	public function onRollOver():Void
	{
		_basicButton.onRollOver();
	}
	
	public function onRollOut():Void
	{
		_basicButton.onRollOut();
	}
	
	private function __set_label( value:String ):String
	{
		if ( value == label ) return label;
		label = value;
		_draw();
		return label;
	}
	
	override private function __set_x( value:Float ):Float
	{
		_basicButton.displaceX = value;
		return super.__set_x( value );
	}
	
	override private function __set_y( value:Float ):Float
	{
		_basicButton.displaceY = value;
		return super.__set_y( value );
	}
	
}