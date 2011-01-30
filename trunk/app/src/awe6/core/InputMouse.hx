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
import awe6.interfaces.EMouseButton;
import awe6.interfaces.IInputMouse;
import awe6.interfaces.IKernel;
import flash.display.Stage;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.Lib;

/**
 * The InputMouse class provides a minimalist implementation of the IInputMouse interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class InputMouse extends Process, implements IInputMouse
{
	public var x( default, null ):Int;
	public var y( default, null ):Int;
	public var vx( default, null ):Int;
	public var vy( default, null ):Int;
	public var relativeX( default, null ):Float;
	public var relativeY( default, null ):Float;
	public var relativeCentralisedX( default, null ):Float;
	public var relativeCentralisedY( default, null ):Float;
	public var isWithinScreenBounds( default, null ):Bool;
	public var isMoving( default, null ):Bool;	
	public var scroll( default, null ):Int;
	public var vScroll( default, null ):Int;
	
	private var _stage:Stage;
	private var _buffer:Array<Bool>;
	private var _xPrev:Int;
	private var _yPrev:Int;
	private var _scrollPrev:Int;
	private var _stillUpdates:Int;
	private var _stillDuration:Int;
	private var _buttonLeft:_HelperButton;
	
	override private function _init():Void 
	{
		super._init();
		_stage = Lib.current.stage;
		x = y = vx = vy = scroll = vScroll = 0;
		relativeX = relativeY = relativeCentralisedX = relativeCentralisedY = 0;
		isMoving = false;		
		_buffer = [];
		x = Math.round( _stage.mouseX );
		y = Math.round( _stage.mouseY );
		isMoving = false;
		scroll = 0;
		vScroll = 0;
		_scrollPrev = 0;
		_stillUpdates = 0;
		_stillDuration = 0;
		_stage.addEventListener( MouseEvent.MOUSE_DOWN, _onMouseDown );
		_stage.addEventListener( MouseEvent.MOUSE_UP, _onMouseUp );
		_stage.addEventListener( MouseEvent.MOUSE_WHEEL, _onMouseWheel );
		_stage.addEventListener( Event.DEACTIVATE, _reset );
		_reset();
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		
		if ( _buffer.length > 0 )
		{
			var l_event:Bool = _buffer.shift();
			if ( l_event ) _buttonLeft.timeDown = _buttonLeft.updatesDown = 0;
			else _buttonLeft.timeUp = _buttonLeft.updatesUp = 0;
			_buttonLeft.isDown = l_event;
		}
		_buttonLeft.isDown ? _buttonLeft.updatesDown++ : _buttonLeft.updatesUp++;
		_buttonLeft.isDown ? _buttonLeft.timeDown += deltaTime: _buttonLeft.timeUp += deltaTime;
		
		vScroll = scroll - _scrollPrev;
		_scrollPrev = scroll;

		_xPrev = x;
		_yPrev = y;
		x = Std.int( _tools.limit( _stage.mouseX, 0, _kernel.factory.width ) );
		y = Std.int( _tools.limit( _stage.mouseY, 0, _kernel.factory.height ) );
		vx = x - _xPrev;
		vy = y - _yPrev;
		isMoving = ( ( x != _xPrev ) || ( y != _yPrev ) );
		if ( isMoving )
		{
			_stillUpdates = _stillDuration = 0;
		}
		else
		{
			_stillUpdates++;
			_stillDuration += deltaTime;
		}
		relativeX = x / _kernel.factory.width;
		relativeY = y / _kernel.factory.height;
		relativeCentralisedX = ( relativeX - .5 ) * 2;
		relativeCentralisedY = ( relativeY - .5 ) * 2;
		isWithinScreenBounds = ( _stage.mouseX >= 0 ) && ( _stage.mouseX <= _kernel.factory.width ) && ( _stage.mouseY >= 0 ) && ( _stage.mouseY <= _kernel.factory.height );
	}
	
	override private function _disposer():Void 
	{
		_stage.removeEventListener( MouseEvent.MOUSE_DOWN, _onMouseDown );
		_stage.removeEventListener( MouseEvent.MOUSE_UP, _onMouseUp );
		_stage.removeEventListener( MouseEvent.MOUSE_WHEEL, _onMouseWheel );
		_stage.removeEventListener( Event.DEACTIVATE, _reset );
		super._disposer();		
	}
	
	private function _onMouseDown( event:MouseEvent ):Void
	{
		if ( !isActive ) return;
		_buffer.push( true );
		_buttonLeft.clickX = Std.int( event.stageX );
		_buttonLeft.clickY = Std.int( event.stageY );
	}
	
	private function _onMouseUp( event:MouseEvent ):Void
	{
		if ( !isActive ) return;
		_buffer.push( false );
	}
	
	private function _onMouseWheel( event:MouseEvent ):Void
	{
		if ( !isActive ) return;
		scroll += event.delta;
	}
	
	private function _reset( ?event:Event = null ):Void
	{
		_buffer = [];
		_buttonLeft = new _HelperButton( _kernel );
	}
	
	public function getIsDoubleClick( ?type:EMouseButton, ?delay:Int = 100 ):Bool
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.isDown ? ( _buttonLeft.timeUp <= delay ) && ( _buttonLeft.updatesUp < 2 ) : false;
			default: false;
		}		
	}
	
	public function getIsDragging( ?type:EMouseButton, ?delay:Int = 100 ):Bool
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.isDown ? _buttonLeft.timeDown > delay : false;
			default: false;
		}		
	}	
	
	public function getStillCount( ?asTime:Bool = true ):Int
	{
		return asTime ? _stillDuration : _stillUpdates;
	}
	
	public function getIsButtonDown( ?type:EMouseButton ):Bool
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.isDown;
			default: false;
		}
	}
	
	public function getButtonDownDuration( ?type:EMouseButton, ?asTime:Bool = true ):Float
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: asTime ? _buttonLeft.timeDown : _buttonLeft.updatesDown;
			default: 0;
		}
	}
	
	public function getButtonUpDuration( ?type:EMouseButton, ?asTime:Bool = true ):Float
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: asTime ? _buttonLeft.timeUp : _buttonLeft.updatesUp;
			default: _tools.BIG_NUMBER;
		}
	}
	
	public function getButtonDragWidth( ?type:EMouseButton ):Int
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.isDown ? x - _buttonLeft.clickX : 0;
			default: 0;
		}
	}
	
	public function getButtonDragHeight( ?type:EMouseButton ):Int
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.isDown ? y - _buttonLeft.clickY : 0;
			default: 0;
		}
	}
	
	public function getButtonLastClickedX( ?type:EMouseButton ):Int
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.clickX;
			default: 0;
		}
	}
	
	public function getButtonLastClickedY( ?type:EMouseButton ):Int
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT: _buttonLeft.clickY;
			default: 0;
		}
	}
	
}

private class _HelperButton
{
	public var isDown:Bool;
	public var updatesDown:Int;
	public var updatesUp:Int;
	public var timeDown:Int;
	public var timeUp:Int;
	public var clickX:Int;
	public var clickY:Int;
	
	public function new( kernel:IKernel )
	{
		isDown = false;
		updatesDown = 0;
		updatesUp = kernel.tools.BIG_NUMBER;
		timeDown = 0;
		timeUp = kernel.tools.BIG_NUMBER;
	}
}
