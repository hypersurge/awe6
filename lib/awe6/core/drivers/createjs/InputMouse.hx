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
import js.html.TouchEvent;
import js.html.WheelEvent;


/**
 * This InputMouse class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class InputMouse extends AInputMouse
{
	static private var _isSoundTriggered:Bool; // a hack for Mobile Browsers that mute audio until a user touch event initiates the "first" sound, only needed once per application, hence static

	private var _stage:Stage;
	private var _system:System;
	private var _isTouch:Bool;
	private var _touchX:Int;
	private var _touchY:Int;

	override private function _driverInit():Void
	{
		_stage = untyped _kernel._stage;
		_system = untyped _kernel.system;
		_isTouch = Touch.isSupported() && untyped !_kernel.system.isDesktop; // too much to consider with mice and touch, so disabling touch
		if ( _isTouch )
		{
			Touch.enable( _stage, true );
			_touchX = _touchY = 0;
			_stage.canvas.addEventListener( "touchstart", _onTouchStart );
			_stage.canvas.addEventListener( "touchmove", _onTouch );
			_stage.canvas.addEventListener( "touchend", _onTouchEnd );
		}
		else
		{
			_stage.addEventListener( "stagemousedown", _onMouseDown );
			_stage.addEventListener( "stagemouseup", _onMouseUp );
		}
		if ( _system.isDesktop ) Browser.document.addEventListener( "wheel", _onWheel );
		Browser.window.focus();
	}

	override private function _disposer():Void
	{
		if ( _isTouch )
		{
			Touch.disable( _stage );
			_stage.canvas.removeEventListener( "touchstart", _onTouchStart );
			_stage.canvas.removeEventListener( "touchmove", _onTouch );
			_stage.canvas.removeEventListener( "touchend", _onTouchEnd );
		}
		else
		{
			_stage.removeEventListener( "stagemousedown", _onMouseDown );
			_stage.removeEventListener( "stagemouseup", _onMouseUp );
		}
		if ( _system.isDesktop ) Browser.document.removeEventListener( "wheel", _onWheel );
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
		else
		{
			x = _touchX;
			y = _touchY;
		}
		x = ( x == _kernel.factory.width ) ? _xPrev : x;
		y = ( y == _kernel.factory.height ) ? _yPrev : y;
	}

	private function _onTouchStart( p_event:TouchEvent ):Void
	{
		_onMouseDown( cast p_event );
		_onTouch( p_event );
		x = _touchX;
		y = _touchY;
	}

	private function _onTouchEnd( p_event:TouchEvent ):Void
	{
		_onMouseUp( cast p_event );
		_onTouch( p_event );
		if ( _isSoundTriggered )
		{
			return;
		}
		_kernel.audio.start( "Silence" );
		_isSoundTriggered = true; // one touch is enough
		if ( _kernel.isFullScreen && untyped _kernel.factory.isNativeExperience ) // take advantage of the touch event and request fullscreen and lock if possible (isNativeExperience can be overridden in config or html)
		{
			untyped _kernel.system.requestFullScreen();
			untyped _kernel.system.requestLockScreen();
		}
	}

	private function _onTouch( p_event:TouchEvent ):Void
	{
		try
		{
			_touchX = Std.int( _tools.limit( ( p_event.targetTouches[0].pageX - Std.int( _stage.canvas.offsetLeft ) ) / untyped _kernel._scaleX, 0, _kernel.factory.width  ) );
			_touchY = Std.int( _tools.limit( ( p_event.targetTouches[0].pageY - Std.int( _stage.canvas.offsetTop  ) ) / untyped _kernel._scaleY, 0, _kernel.factory.height ) );
		}
		catch( p_error:Dynamic ) {}
		if ( _stage.mouseInBounds )
		{
			p_event.preventDefault();
		}
	}

	private function _onMouseDown( p_event:MouseEvent ):Void
	{
		Browser.window.focus();
		if ( !isActive )
		{
			return;
		}
		if ( !_isTouch && p_event.nativeEvent.button == 2 ) // disable right click
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
		if ( !_isTouch && p_event.nativeEvent.button == 2 ) // disable right click
		{
			return;
		}
		_buffer.push( false );
	}

	private function _onWheel( p_event:WheelEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		scroll += Math.round( p_event.deltaY );
	}

	override private function set_isVisible( p_value:Bool ):Bool
	{
		_stage.cursor = p_value ? "none" : "auto";
		return super.set_isVisible( p_value );
	}

	override private function set_cursorType( p_value:EMouseCursor ):EMouseCursor
	{
		_stage.canvas.style.cursor = switch( p_value )
		{
			case ARROW : "crosshair";
			case AUTO : "auto";
			case BUTTON : "pointer";
			case HAND : "pointer";
			case IBEAM : "text";
			case SUB_TYPE( p_value ) : p_value; // http://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=alias
		}
		return super.set_cursorType( p_value );
	}

	// enable this if you want cursors, otherwise it's a performance hit for no other benefit so is disabled by default (as per CreateJS)
	public function enableMouseOver( p_updatesPerSecond:Float = 20 ):Void
	{
		_stage.enableMouseOver( p_updatesPerSecond );
	}
}
