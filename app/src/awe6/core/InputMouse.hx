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
import awe6.interfaces.EMouseButton;
import awe6.interfaces.IInputMouse;
import awe6.interfaces.IKernel;
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.display.Stage;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.Lib;
import flash.net.URLRequest;
import flash.system.System;
import haxe.io.Bytes;

/**
 * The InputMouse class provides a minimalist implementation of the IInputMouse interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class InputMouse extends Process, implements IInputMouse
{
	public var x( default, null ):Int;
	public var y( default, null ):Int;
	public var relativeX( default, null ):Float;
	public var relativeY( default, null ):Float;
	public var relativeCentralisedX( default, null ):Float;
	public var relativeCentralisedY( default, null ):Float;
	public var isWithinScreenBounds( default, null ):Bool;
	public var isMoving( default, null ):Bool;	
	public var scroll( default, null ):Int;
	
	private var _stage:Stage;
	private var _buffer:Array<Bool>;
	private var _xPrev:Int;
	private var _yPrev:Int;
	private var _deltaX:Int;
	private var _deltaY:Int;
	private var _deltaTimePrev:Int;
	private var _deltaScroll:Int;
	private var _scrollPrev:Int;
	private var _stillUpdates:Int;
	private var _stillDuration:Int;
	private var _buttonLeft:_HelperButton;
	private var _buttonMiddle:_HelperButton;
	private var _buttonRight:_HelperButton;
	private var _mouseClicks:Loader;
	
	override private function _init():Void 
	{
		super._init();
		_stage = Lib.current.stage;
		x = y = _deltaX = _deltaY = scroll = _deltaScroll = 0;
		relativeX = relativeY = relativeCentralisedX = relativeCentralisedY = 0;
		isMoving = false;		
		_buffer = [];
		x = Math.round( _stage.mouseX );
		y = Math.round( _stage.mouseY );
		isMoving = false;
		scroll = 0;
		_scrollPrev = 0;
		_stillUpdates = 0;
		_stillDuration = 0;
		_stage.addEventListener( MouseEvent.MOUSE_DOWN, _onMouseDown );
		_stage.addEventListener( MouseEvent.MOUSE_UP, _onMouseUp );
		_stage.addEventListener( MouseEvent.MOUSE_WHEEL, _onMouseWheel );
		_stage.addEventListener( Event.DEACTIVATE, _reset );
		
		_mouseClicks = new Loader();
//		_mouseClicks.load( new URLRequest( "mouseClicks.swf" ) );
//		_mouseClicks.contentLoaderInfo.addEventListener( Event.COMPLETE, _onComplete );

		var l_data:String = "s503:RldTCnkBAABgAD6AAD6AABgBAEQRAAAAAEMC::::PwMeAQAAiF8ACQAqAFNlY3VyaXR5AGFsbG93SW5zZWN1cmVEb21haW4AYWxsb3dEb21haW4AbW91c2VCdXR0b25zAEFTbmF0aXZlAG9uRW50ZXJGcmFtZQBfd2lkdGgAX2hlaWdodACWCQAIAAcBAAAACAEclgIACAJSF5YJAAgABwEAAAAIARyWAgAIA1IXlhMACAQHAgAAAAcgAwAABwIAAAAIBT08lgIACAaOCAAAAAACagBqAJYMAAcCAAAABwEAAAAIBD0SnQIAEgCWCQAEAQgHBzIAAABPmQIADQCWCQAEAQgHB2QAAABPlgwABwQAAAAHAQAAAAgEPRKdAgASAJYJAAQBCAgHMgAAAE%ZAgANAJYJAAQBCAgHZAAAAE8dAL8AJQAAAAEAYAA%gAA%gAEAAAAAARQAAAAAERWPoPoeiDDpgw6H0Ol9AACGBgYBAAEAAEAAAAA";
		_mouseClicks.loadBytes( cast( _tools.unserialize( l_data ), Bytes ).getData() );

		_reset();
	}
	
/*	private function _onComplete( event:Event ):Void
	{
		cast( event.target, LoaderInfo ).removeEventListener( Event.COMPLETE, _onComplete );
		var l_clip:String = _tools.serialize( Bytes.ofData( cast( event.target, LoaderInfo ).bytes ) );
		System.setClipboard( l_clip );
		trace( l_clip );
	}*/
	
	inline private function _isMiddleDown():Bool { return _mouseClicks.height == 50; }
	inline private function _isRightDown():Bool { return _mouseClicks.width == 50; }
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		_deltaTimePrev = deltaTime;
		super._updater( deltaTime );
		
		_handleButton( EMouseButton.LEFT, _buffer.length > 0 ? _buffer.shift() : _buttonLeft.isDown, deltaTime );
		_handleButton( EMouseButton.MIDDLE, _isMiddleDown(), deltaTime );
		_handleButton( EMouseButton.RIGHT, _isRightDown(), deltaTime );
		
		_deltaScroll = scroll - _scrollPrev;
		_scrollPrev = scroll;
		
		if (_isMiddleDown() ) trace( "B" );

		_xPrev = x;
		_yPrev = y;
		x = Std.int( _tools.limit( _stage.mouseX, 0, _kernel.factory.width ) );
		y = Std.int( _tools.limit( _stage.mouseY, 0, _kernel.factory.height ) );
		_deltaX = x - _xPrev;
		_deltaY = y - _yPrev;
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
		
//		trace( _buttonLeft.timeUpPrevious + ":" + _buttonMiddle.timeUpPrevious + ":" + _buttonRight.timeUpPrevious );
	}
	
	private function _handleButton( ?type:EMouseButton, isDown:Bool, ?deltaTime:Int = 0 ):Void
	{
		var l_button:_HelperButton = _getButton( type );
		if ( isDown )
		{
			if ( !l_button.isDown )
			{
				l_button.timeUpPrevious = l_button.timeUp;
				l_button.updatesUpPrevious = l_button.updatesUp;
				l_button.timeUp = l_button.updatesUp = 0;
				l_button.clickX = Std.int( _stage.mouseX );
				l_button.clickY = Std.int( _stage.mouseY );
			}
			l_button.timeDown += deltaTime; 
			l_button.updatesDown++;
			l_button.isDown = true;
		}
		else
		{
			if ( l_button.isDown )
			{
				l_button.timeDownPrevious = l_button.timeDown;
				l_button.updatesDownPrevious = l_button.updatesDown;
				l_button.timeDown = l_button.updatesDown = 0;
			}
			l_button.timeUp += deltaTime; 
			l_button.updatesUp++;
			l_button.isDown = false;	
		}
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
		_buttonMiddle = new _HelperButton( _kernel );
		_buttonRight = new _HelperButton( _kernel );
	}
	
	private function _getButton( ?type:EMouseButton ):_HelperButton
	{
		if ( type == null ) type = LEFT;
		return switch ( type )
		{
			case LEFT : _buttonLeft;
			case MIDDLE : _buttonMiddle;
			case RIGHT : _buttonRight;
		}
	}
	
	public function getDeltaX( ?asTime:Bool = true ):Int
	{
		var l_result:Float = _deltaX;
		if ( asTime ) l_result *= 1000 / _deltaTimePrev;
		return Math.round( l_result );
	}
	
	public function getDeltaY( ?asTime:Bool = true ):Int
	{
		var l_result:Float = _deltaY;
		if ( asTime ) l_result *= 1000 / _deltaTimePrev;
		return Math.round( l_result );
	}
	
	public function getSpeed( ?asTime:Bool = true ):Int
	{
		var l_dx:Int = getDeltaX( asTime );
		var l_dy:Int = getDeltaY( asTime );
		var l_result:Float = Math.sqrt( ( l_dx * l_dx ) + ( l_dy * l_dy ) );
		return Math.round( l_result );
	}

	public function getDeltaScroll( ?asTime:Bool = true ):Int
	{
		var l_result:Float = _deltaScroll;
		if ( asTime ) l_result *= 1000 / _deltaTimePrev;
		return Math.round( l_result );
	}	
	
	public function getIsButtonDoubleClick( ?type:EMouseButton, ?delay:Int = 100 ):Bool
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.isDown ? ( l_button.timeUpPrevious <= delay ) : false;
	}
	
	public function getIsButtonDrag( ?type:EMouseButton, ?delay:Int = 100 ):Bool
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.isDown ? l_button.timeDown > delay : false;
	}	
	
	public function getStillCount( ?asTime:Bool = true ):Int
	{
		return asTime ? _stillDuration : _stillUpdates;
	}
	
	public function getIsButtonDown( ?type:EMouseButton ):Bool
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.isDown;
	}
	
	public function getIsButtonPress( ?type:EMouseButton ):Bool
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.updatesDown == 1;		
	}
	
	public function getIsButtonRelease( ?type:EMouseButton ):Bool
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.updatesUp == 1;		
	}
	
	public function getButtonDownDuration( ?type:EMouseButton, ?asTime:Bool = true, ?isPrevious:Bool = false ):Float
	{
		var l_button:_HelperButton = _getButton( type );
		if ( isPrevious ) return asTime ? l_button.timeDownPrevious : l_button.updatesDownPrevious;
		return asTime ? l_button.timeDown : l_button.updatesDown;
	}
	
	public function getButtonUpDuration( ?type:EMouseButton, ?asTime:Bool = true, ?isPrevious:Bool = false  ):Float
	{
		var l_button:_HelperButton = _getButton( type );
		if ( isPrevious ) return asTime ? l_button.timeUpPrevious : l_button.updatesUpPrevious;
		return asTime ? l_button.timeUp : l_button.updatesUp;
	}
	
	public function getButtonDragWidth( ?type:EMouseButton ):Int
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.isDown ? x - l_button.clickX : 0;
	}
	
	public function getButtonDragHeight( ?type:EMouseButton ):Int
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.isDown ? y - l_button.clickY : 0;
	}
	
	public function getButtonLastClickedX( ?type:EMouseButton ):Int
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.clickX;
	}
	
	public function getButtonLastClickedY( ?type:EMouseButton ):Int
	{
		var l_button:_HelperButton = _getButton( type );
		return l_button.clickY;
	}
	
}

private class _HelperButton
{
	public var isDown:Bool;
	public var updatesDown:Int;
	public var updatesUp:Int;
	public var timeDown:Int;
	public var timeUp:Int;
	public var updatesDownPrevious:Int;
	public var updatesUpPrevious:Int;
	public var timeDownPrevious:Int;
	public var timeUpPrevious:Int;
	public var clickX:Int;
	public var clickY:Int;
	
	public function new( kernel:IKernel )
	{
		isDown = false;
		updatesDown = 0;
		updatesUp = kernel.tools.BIG_NUMBER;
		timeDown = 0;
		timeUp = kernel.tools.BIG_NUMBER;
		updatesDownPrevious = 0;
		updatesUpPrevious = kernel.tools.BIG_NUMBER;
		timeDownPrevious = 0;
		timeUpPrevious = kernel.tools.BIG_NUMBER;
	}
}
