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
import awe6.interfaces.EKey;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IKernel;
import flash.display.SimpleButton;
import flash.display.Sprite;
import flash.events.MouseEvent;

class Button extends GuiEntity
{
	public static inline var DEFAULT_LABEL = "Button";
	public var label( default, __set_label ):String;
	
	private var _key:EKey;
	private var _onClickCallback:Void->Void;
	private var _onRollOverCallback:Void->Void;
	private var _onRollOutCallback:Void->Void;
	private var _simpleButton:SimpleButton;
	
	private var _marginWidth:Float;
	private var _marginHeight:Float;
	private var _isBlank:Bool;

	public function new( kernel:IKernel, ?key:EKey, ?onClickCallback:Void->Void, ?onRollOverCallback:Void->Void, ?onRollOutCallback:Void->Void, ?label:String = DEFAULT_LABEL, ?width:Float = 100, ?height:Float = 25, ?marginWidth:Float = 10, ?marginHeight:Float = 10, ?isBlank:Bool = false )
	{
		_key = key;
		_onClickCallback = onClickCallback;
		_onRollOverCallback = onRollOverCallback;
		_onRollOutCallback = onRollOutCallback;
		_marginWidth = marginWidth;
		_marginHeight = marginHeight;
		_isBlank = isBlank;
		super( kernel, width, height );
		this.label = label;
	}
	
	override private function _init():Void
	{
		super._init();
		var l_instance:Button = this;

		_simpleButton = new SimpleButton();
		
		_simpleButton.addEventListener( MouseEvent.CLICK, _onClick );
		_simpleButton.addEventListener( MouseEvent.ROLL_OVER, _onRollOver );
		_simpleButton.addEventListener( MouseEvent.ROLL_OUT, _onRollOut );
		
		_sprite.addChild( _simpleButton );
	}
	
	private function _onClick( event:MouseEvent ):Void
	{
		onClick();
		event.stopImmediatePropagation();
	}
	
	private function _onRollOver( event:MouseEvent ):Void
	{
		onRollOver();
		event.stopImmediatePropagation();
	}
	
	private function _onRollOut( event:MouseEvent ):Void
	{
		onRollOut();
		event.stopImmediatePropagation();
	}
	
	private function _draw():Void
	{
		_simpleButton.upState = _simpleButton.downState = _createButtonState( false );
		_simpleButton.overState = _simpleButton.hitTestState = _createButtonState( true );
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
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( ( _key != null ) && ( _kernel.inputs.keyboard.getIsKeyRelease( _key ) ) )
		{
			onClick();
		}
	}
	
	override private function _disposer():Void 
	{
		_simpleButton.removeEventListener( MouseEvent.CLICK, _onClick );
		_simpleButton.removeEventListener( MouseEvent.ROLL_OVER, _onRollOver );
		_simpleButton.removeEventListener( MouseEvent.ROLL_OUT, _onRollOut );
		super._disposer();		
	}
	
	public function onClick():Void
	{
		if ( _onClickCallback == null )
		{
			return;
		}
		Reflect.callMethod( this, _onClickCallback, [] );
	}
	
	public function onRollOver():Void
	{
		if ( _onRollOverCallback == null )
		{
			return;
		}
		Reflect.callMethod( this, _onRollOverCallback, [] );		
	}
	
	public function onRollOut():Void
	{
		if ( _onRollOutCallback == null )
		{
			return;
		}
		Reflect.callMethod( this, _onRollOutCallback, [] );		
	}
	
	private function __set_label( value:String ):String
	{
		if ( value == label )
		{
			return label;
		}
		label = value;
		_draw();
		return label;
	}
}