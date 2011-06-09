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
import awe6.interfaces.EAgenda;
import awe6.interfaces.EKey;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.DisplayObject;
import flash.display.IBitmapDrawable;
import flash.display.Sprite;

class BasicButton extends Entity
{
	public var x( default, __set_x ):Float;
	public var y( default, __set_y ):Float;
	public var width( default, __set_width ):Float;
	public var height( default, __set_height ):Float;
	public var alpha( default, __set_alpha ):Float;
	public var isOver( default, null ):Bool;
	public var onClickCallback:Void->Void;
	public var onRollOverCallback:Void->Void;
	public var onRollOutCallback:Void->Void;
	public var displaceX:Float;
	public var displaceY:Float;
	
	private var _stateUp:_HelperState;
	private var _stateOver:_HelperState;
	private var _keyType:EKey;
	private var _sprite:Sprite;
	
	public function new( kernel:IKernel, up:IBitmapDrawable, over:IBitmapDrawable, ?x:Float = 0, ?y:Float = 0, ?key:EKey, ?onClickCallback:Void->Void, ?onRollOverCallback:Void->Void, ?onRollOutCallback:Void->Void )
	{
		_stateUp = new _HelperState( kernel, up );
		_stateOver = new _HelperState( kernel, over );
		Reflect.setField( this, "x", x );
		Reflect.setField( this, "y", y );
		width = _stateUp.width;
		height = _stateUp.height;
		_keyType = key;
		this.onClickCallback = onClickCallback;
		this.onRollOverCallback = onRollOverCallback;
		this.onRollOutCallback = onRollOutCallback;
		_sprite = new Sprite();
		_sprite.x = this.x;
		_sprite.y = this.y;
		super( kernel, _sprite );
	}
	
	override private function _init():Void
	{
		super._init();
		alpha = 1;
		isOver = false;
		displaceX = displaceY = 0;
		addEntity( _stateUp, EAgenda.SUB_TYPE( _HelperEState.UP ), true );
		addEntity( _stateOver, EAgenda.SUB_TYPE( _HelperEState.OVER ), true );
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.UP ) );
	}
		
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		var l_isOver:Bool = _isPointInsideRectangle( _kernel.inputs.mouse.x, _kernel.inputs.mouse.y, x, y, width, height );
		if ( l_isOver && !isOver ) onRollOver();
		if ( !l_isOver && isOver ) onRollOut();
		isOver = l_isOver;
		if ( isOver && _kernel.inputs.mouse.getIsButtonRelease() ) onClick();
		if ( ( _keyType != null ) && ( _kernel.inputs.keyboard.getIsKeyRelease( _keyType ) ) ) onClick();
	}
	
	private function _isPointInsideRectangle( pointX:Float, pointY:Float, rectX:Float, rectY:Float, rectWidth:Float, rectHeight:Float ):Bool
	{
		pointX -= displaceX;
		pointY -= displaceY;
		if ( pointX < rectX ) return false;
		if ( pointY < rectY ) return false;
		if ( pointX > ( rectX + rectWidth ) ) return false;
		if ( pointY > ( rectY + rectHeight ) ) return false;
		return true;
	}
	
	public function onClick():Void
	{
		if ( onClickCallback == null ) return;
		Reflect.callMethod( this, onClickCallback, [] );
	}
	
	public function onRollOver():Void
	{
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.OVER ) );
		if ( onRollOverCallback == null ) return;
		Reflect.callMethod( this, onRollOverCallback, [] );		
	}
	
	public function onRollOut():Void
	{
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.UP ) );
		if ( onRollOutCallback == null ) return;
		Reflect.callMethod( this, onRollOutCallback, [] );		
	}
	
	public function setPosition( x:Float, y:Float ):Void { this.x = x; this.y = y; }
	private function __set_x( value:Float ):Float { x = value; _sprite.x = x; return x; }
	private function __set_y( value:Float ):Float { y = value; _sprite.y = y; return y; }
	private function __set_width( value:Float ):Float { width = value;  return width; }
	private function __set_height( value:Float ):Float { height = value;  return height; }	
	private function __set_alpha( value:Float ):Float { alpha = value; _sprite.alpha = alpha; return alpha; }
}

private class _HelperState extends Entity
{
	public var width:Float;
	public var height:Float;
	
	public function new( kernel:IKernel, bitmapDrawable:IBitmapDrawable )
	{
		var l_sprite:Sprite = new Sprite();
		var l_displayObject:DisplayObject = cast Std.is( bitmapDrawable, BitmapData ) ? new Bitmap( cast bitmapDrawable ) : bitmapDrawable;
		if ( bitmapDrawable == null ) l_displayObject = new Sprite();
		l_sprite.addChild( l_displayObject );
		l_sprite.useHandCursor = true;
		l_sprite.buttonMode = true;
		width = l_sprite.width;
		height = l_sprite.height;
		super( kernel, l_sprite );
	}
}

private enum _HelperEState
{
	UP;
	OVER;
}