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

package awe6.core.drivers.createjs;
import awe6.core.drivers.AInputMouse;
import awe6.interfaces.EMouseCursor;
import createjs.easeljs.MouseEvent;
import createjs.easeljs.Stage;
import createjs.easeljs.Touch;
import js.Browser;
import js.html.Document;
import js.html.TouchEvent;

/**
 * This InputMouse class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class InputMouse extends AInputMouse
{
	private var _stage:Stage;
	private var _document:Document;
	private var _isTouch:Bool;
	
	override private function _driverInit():Void 
	{
		_stage = untyped _kernel._stage;
		// _stage.enableMouseOver( 20 ); // enable this if you want cursors, otherwise it's a performance hit for no other benefit
		_document = Browser.document;
		_isTouch = Touch.isSupported();
		if ( _isTouch )
		{
			Touch.enable( _stage, true );
			_document.addEventListener( "touchstart", _onTouchStart );
			_document.addEventListener( "touchmove", _onTouchMove );
			_document.addEventListener( "touchend", _onTouchEnd );
		}
		_stage.addEventListener( "stagemousedown", _onMouseDown );
		_stage.addEventListener( "stagemouseup", _onMouseUp );
	}
	
	override private function _disposer():Void 
	{
		if ( _isTouch )
		{
			Touch.disable( _stage );
			_document.removeEventListener( "touchstart", _onTouchStart );
			_document.removeEventListener( "touchmove", _onTouchMove );
			_document.removeEventListener( "touchend", _onTouchEnd );
		}
		_stage.removeEventListener( "stagemousedown", _onMouseDown );
		_stage.removeEventListener( "stagemouseup", _onMouseUp );
		super._disposer();		
	}	
	
	override private function _isWithinBounds():Bool
	{
		return _stage.mouseInBounds;
	}
	
	override private function _getPosition():Void
	{
		if ( !_isTouch )
		{
			x = Std.int( _tools.limit( _stage.mouseX / _stage.scaleX, 0, _kernel.factory.width ) );
			y = Std.int( _tools.limit( _stage.mouseY / _stage.scaleY, 0, _kernel.factory.height ) );
		}
		x = ( x == _kernel.factory.width ) ? _xPrev : x;
		y = ( y == _kernel.factory.height ) ? _yPrev : y;
	}
	
	private function _onTouchStart( p_event:TouchEvent ):Void
	{
		p_event.preventDefault();
		x = p_event.targetTouches[0].pageX;
		y = p_event.targetTouches[0].pageY;
	}
	
	private function _onTouchMove( p_event:TouchEvent ):Void
	{
		p_event.preventDefault();
		x = p_event.targetTouches[0].pageX;
		y = p_event.targetTouches[0].pageY;
	}

	private function _onTouchEnd( p_event:TouchEvent ):Void
	{
		p_event.preventDefault();
		x = p_event.targetTouches[0].pageX;
		y = p_event.targetTouches[0].pageY;
	}
	
	private function _onMouseDown( p_event:MouseEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_buffer.push( true );
	}
	
	private function _onMouseUp( p_event:MouseEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_buffer.push( false );
	}
	
	override private function set_isVisible( p_value:Bool ):Bool
	{
		_stage.cursor = p_value ? "none" : "auto";
		return super.set_isVisible( p_value );
	}
	
	override private function set_cursorType( p_value:EMouseCursor ):EMouseCursor
	{
		switch( p_value )
		{
			case ARROW :
				_stage.cursor = "crosshair";
			case AUTO :
				_stage.cursor = "auto";
			case BUTTON :
				_stage.cursor = "pointer";
			case HAND :
				_stage.cursor = "pointer";
			case IBEAM :
				_stage.cursor = "text";
			case SUB_TYPE( p_value ) :
				_stage.cursor = p_value; // http://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=alias
		}
		return super.set_cursorType( p_value );
	}


}