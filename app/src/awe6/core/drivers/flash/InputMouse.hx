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

package awe6.core.drivers.flash;
import awe6.core.drivers.AInputMouse;
import awe6.interfaces.EMouseCursor;
import flash.display.Loader;
import flash.display.Stage;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.Lib;
import flash.ui.Mouse;
import flash.ui.MouseCursor;
import flash.ui.Multitouch;
import flash.ui.MultitouchInputMode;
import haxe.io.Bytes;

/**
 * This InputMouse class provides flash target overrides.
 * @author	Robert Fell
 */
class InputMouse extends AInputMouse
{
	private var _stage:Stage;
	private var _mouseClicks:Loader;
	
	override private function _driverInit():Void 
	{
		_stage = Lib.current.stage;
		_stage.addEventListener( MouseEvent.MOUSE_DOWN, _onMouseDown );
		_stage.addEventListener( MouseEvent.MOUSE_UP, _onMouseUp );
		_stage.addEventListener( MouseEvent.MOUSE_WHEEL, _onMouseWheel );
		_stage.addEventListener( Event.DEACTIVATE, _reset );
		#if awe6Air
		Multitouch.inputMode = MultitouchInputMode.NONE;	
		#else
		var l_data:String = "s503:RldTCnkBAABgAD6AAD6AABgBAEQRAAAAAEMC::::PwMeAQAAiF8ACQAqAFNlY3VyaXR5AGFsbG93SW5zZWN1cmVEb21haW4AYWxsb3dEb21haW4AbW91c2VCdXR0b25zAEFTbmF0aXZlAG9uRW50ZXJGcmFtZQBfd2lkdGgAX2hlaWdodACWCQAIAAcBAAAACAEclgIACAJSF5YJAAgABwEAAAAIARyWAgAIA1IXlhMACAQHAgAAAAcgAwAABwIAAAAIBT08lgIACAaOCAAAAAACagBqAJYMAAcCAAAABwEAAAAIBD0SnQIAEgCWCQAEAQgHBzIAAABPmQIADQCWCQAEAQgHB2QAAABPlgwABwQAAAAHAQAAAAgEPRKdAgASAJYJAAQBCAgHMgAAAE%ZAgANAJYJAAQBCAgHZAAAAE8dAL8AJQAAAAEAYAA%gAA%gAEAAAAAARQAAAAAERWPoPoeiDDpgw6H0Ol9AACGBgYBAAEAAEAAAAA";
		_mouseClicks = new Loader();
		_mouseClicks.loadBytes( cast( _tools.unserialize( l_data ), Bytes ).getData() );
		#end
	}
	
	override private function _disposer():Void 
	{
		_stage.removeEventListener( MouseEvent.MOUSE_DOWN, _onMouseDown );
		_stage.removeEventListener( MouseEvent.MOUSE_UP, _onMouseUp );
		_stage.removeEventListener( MouseEvent.MOUSE_WHEEL, _onMouseWheel );
		_stage.removeEventListener( Event.DEACTIVATE, _reset );
		super._disposer();		
	}	
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		if ( ( _stage.focus == null ) || ( _stage.focus.stage == null ) )
		{
			_stage.focus = _stage;
		}
		super._updater( p_deltaTime );
	}
	
	override private function _isMiddleDown():Bool
	{
		if ( _mouseClicks == null ) return false;
		return _mouseClicks.height == 50;
	}
	
	override private function _isRightDown():Bool
	{
		if ( _mouseClicks == null ) return false;
		return _mouseClicks.width == 50;
	}
	
	override private function _isWithinBounds():Bool
	{
		return ( _stage.mouseX >= 0 ) && ( _stage.mouseX <= _kernel.factory.width ) && ( _stage.mouseY >= 0 ) && ( _stage.mouseY <= _kernel.factory.height );
	}
	
	override private function _getPosition():Void
	{
		var l_x:Int = Std.int( _tools.limit( _stage.mouseX, 0, _kernel.factory.width ) );
		var l_y:Int = Std.int( _tools.limit( _stage.mouseY, 0, _kernel.factory.height ) );
		x = ( l_x == _kernel.factory.width ) ? _xPrev : l_x;
		y = ( l_y == _kernel.factory.height ) ? _yPrev : l_y;		
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
	
	private function _onMouseWheel( p_event:MouseEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		scroll += p_event.delta;
	}
	
	override private function _set_isVisible( p_value:Bool ):Bool
	{
		p_value ? Mouse.show() : Mouse.hide();
		return super._set_isVisible( p_value );
	}
	
	override private function _set_cursorType( p_value:EMouseCursor ):EMouseCursor
	{
		#if flash10
		switch( p_value )
		{
			case ARROW :
				Mouse.cursor = MouseCursor.ARROW;
			case BUTTON :
				Mouse.cursor = MouseCursor.BUTTON;
			case HAND :
				Mouse.cursor = MouseCursor.HAND;
			case IBEAM :
				Mouse.cursor = MouseCursor.IBEAM;
			case SUB_TYPE( l_value ) :
				null; // Have a register cursor approach here;
		}
		#end
		return super._set_cursorType( p_value );
	}

}
