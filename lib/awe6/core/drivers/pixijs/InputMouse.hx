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

package awe6.core.drivers.pixijs;
import awe6.core.drivers.AInputMouse;
import awe6.interfaces.EMouseCursor;
import js.Browser;
import js.html.CanvasElement;
import js.html.WheelEvent;
import pixi.interaction.InteractionEvent;
import pixi.interaction.InteractionManager;

/**
 * This InputMouse class provides PixiJS target overrides.
 * @author	Robert Fell
 */
class InputMouse extends AInputMouse
{
	static private var _isSoundTriggered:Bool; // a hack for Mobile Browsers that mute audio until a user touch event initiates the "first" sound, only needed once per application, hence static

	private var _interactionManager:InteractionManager;
	private var _canvas:CanvasElement;
	private var _system:System;

	override private function _driverInit():Void
	{
		_canvas = untyped _kernel.factory.canvas;
		_system = untyped _kernel.system;
		_interactionManager = untyped _kernel._renderer.plugins.interaction;
		_interactionManager.interactionFrequency = 100;
		_interactionManager.addListener( "pointerdown", _onPointerDown );
		_interactionManager.addListener( "pointerup", _onPointerUp );
		_interactionManager.addListener( "pointerupoutside", _onPointerUp );
		if ( _system.isDesktop ) Browser.document.addEventListener( "wheel", _onWheel );
		Browser.window.focus();
	}

	override private function _disposer():Void
	{
		_interactionManager.removeListener( "pointerdown", _onPointerDown );
		_interactionManager.removeListener( "pointerup", _onPointerUp );
		_interactionManager.removeListener( "pointerupoutside", _onPointerUp );
		if ( _system.isDesktop ) Browser.document.removeEventListener( "wheel", _onWheel );
		super._disposer();
	}

	override private function _isWithinBounds():Bool
	{
		return ( ( x > 0 ) && ( x < _kernel.factory.width ) && ( y > 0 ) && ( y < _kernel.factory.height ) );
	}

	override private function _getPosition():Void
	{
		if ( ( _interactionManager.eventData != null ) && ( _interactionManager.eventData.data != null ) && ( _interactionManager.eventData.data.global != null ) )
		{
			x = Std.int( _interactionManager.eventData.data.global.x );
			y = Std.int( _interactionManager.eventData.data.global.y );
		}
	}

	private function _onPointerDown( p_event:InteractionEvent ):Void
	{
		Browser.window.focus();
		if ( !isActive )
		{
			return;
		}
		_getPosition();
		var l_button:Int = untyped p_event.data.button;
		if ( l_button == 2 ) // disable right click
		{
			return;
		}
		_buffer.push( true );
	}

	private function _onPointerUp( p_event:InteractionEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_getPosition();
		var l_button:Int = untyped p_event.data.button ;
		if ( l_button == 2 ) // disable right click
		{
			return;
		}
		_buffer.push( false );
		if ( _isSoundTriggered )
		{
			return;
		}
		_kernel.audio.start( "Silence" );
		_isSoundTriggered = true; // one touch is enough
		if ( !_system.isDesktop && _kernel.isFullScreen && untyped _kernel.factory.isNativeExperience ) // take advantage of the touch event and request fullscreen and lock if possible (isNativeExperience can be overridden in config or html)
		{
			_system.requestFullScreen();
			_system.requestLockScreen();
		}
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
		_canvas.style.cursor = p_value ? "none" : "auto";
		return super.set_isVisible( p_value );
	}

	override private function set_cursorType( p_value:EMouseCursor ):EMouseCursor
	{
		_canvas.style.cursor = switch( p_value )
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
}
