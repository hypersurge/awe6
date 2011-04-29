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
import awe6.interfaces.EAgenda;
import awe6.interfaces.EKey;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;

class BasicButton extends Entity
{
	private var _stateUp:_HelperState;
	private var _stateOver:_HelperState;
	private var _x:Int;
	private var _y:Int;
	private var _width:Int;
	private var _height:Int;
	private var _key:EKey;
	private var _onClickCallback:Void->Void;
	private var _onRollOverCallback:Void->Void;
	private var _onRollOutCallback:Void->Void;
	private var _sprite:Sprite;
	private var _isOver:Bool;
	
	public function new( kernel:IKernel, up:BitmapData, over:BitmapData, x:Int, y:Int, ?key:EKey, ?onClick:Void->Void, ?onRollOver:Void->Void, ?onRollOut:Void->Void )
	{
		_stateUp = new _HelperState( kernel, up );
		_stateOver = new _HelperState( kernel, over );
		_x = x;
		_y = y;
		_width = up.width;
		_height = up.height;
		_key = key;
		_onClickCallback = onClick;
		_onRollOverCallback = onRollOver;
		_onRollOutCallback = onRollOut;
		_sprite = new Sprite();
		_sprite.x = _x;
		_sprite.y = _y;
		super( kernel, _sprite );
	}
	
	override private function _init():Void
	{
		super._init();
		_isOver = false;
		addEntity( _stateUp, EAgenda.SUB_TYPE( _HelperEState.UP ), true );
		addEntity( _stateOver, EAgenda.SUB_TYPE( _HelperEState.OVER ), true );
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.UP ) );
	}
		
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		var l_isOver:Bool = _isPointInsideRectangle( _kernel.inputs.mouse.x, _kernel.inputs.mouse.y, _x, _y, _width, _height );
		if ( l_isOver && !_isOver ) onRollOver();
		if ( !l_isOver && _isOver ) onRollOut();
		_isOver = l_isOver;
		if ( _isOver && _kernel.inputs.mouse.getIsButtonRelease() ) onClick();
		if ( ( _key != null ) && ( _kernel.inputs.keyboard.getIsKeyRelease( _key ) ) ) onClick();
	}
	
	private function _isPointInsideRectangle( pointX:Int, pointY:Int, rectX:Int, rectY:Int, rectWidth:Int, rectHeight:Int ):Bool
	{
		if ( pointX < rectX ) return false;
		if ( pointY < rectY ) return false;
		if ( pointX > ( rectX + rectWidth ) ) return false;
		if ( pointY > ( rectY + rectHeight ) ) return false;
		return true;
	}
	
	override private function _disposer():Void 
	{
		super._disposer();		
	}
	
	public function onClick():Void
	{
		trace( "click" );
		if ( _onClickCallback == null ) return;
		Reflect.callMethod( this, _onClickCallback, [] );
	}
	
	public function onRollOver():Void
	{
		trace( "rollOver" );
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.OVER ) );
		if ( _onRollOverCallback == null ) return;
		Reflect.callMethod( this, _onRollOverCallback, [] );		
	}
	
	public function onRollOut():Void
	{
		trace( "rollOut" );
		setAgenda( EAgenda.SUB_TYPE( _HelperEState.UP ) );
		if ( _onRollOutCallback == null ) return;
		Reflect.callMethod( this, _onRollOutCallback, [] );		
	}
	
}

private class _HelperState extends Entity
{
	public function new( kernel:IKernel, bitmapData:BitmapData )
	{
		var l_sprite:Sprite = new Sprite();
		var l_bitmap:Bitmap = new Bitmap( bitmapData );
		l_sprite.addChild( l_bitmap );
		super( kernel, l_sprite );
	}
}

private enum _HelperEState
{
	UP;
	OVER;
}