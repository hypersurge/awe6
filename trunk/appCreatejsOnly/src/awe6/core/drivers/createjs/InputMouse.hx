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
import js.Browser;
import js.html.Document;
import js.html.Event;
import js.html.MouseEvent;

/**
 * This InputMouse class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class InputMouse extends AInputMouse
{
	private var _stage:Document;
	
	override private function _driverInit():Void 
	{
		_stage = Browser.document;
		_stage.addEventListener( "mousedown", _onMouseDown );
		_stage.addEventListener( "mouseup", _onMouseUp );
		_stage.addEventListener( "mousemove", _onMouseMove );
	}
	
	override private function _disposer():Void 
	{
		_stage.removeEventListener( "mousedown", _onMouseDown );
		_stage.removeEventListener( "mouseup", _onMouseUp );
		_stage.removeEventListener( "mousemove", _onMouseMove );
		super._disposer();		
	}	
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
	}
	
	override private function _isWithinBounds():Bool
	{
		return true;
	}
	
	override private function _getPosition():Void
	{
		var l_x:Int = Std.int( _tools.limit( x, 0, _kernel.factory.width ) );
		var l_y:Int = Std.int( _tools.limit( y, 0, _kernel.factory.height ) );
		x = ( l_x == _kernel.factory.width ) ? _xPrev : l_x;
		y = ( l_y == _kernel.factory.height ) ? _yPrev : l_y;		
	}
	
	private function _onMouseMove( p_event:MouseEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		x = p_event.x;
		y = p_event.y;
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
		return super.set_isVisible( p_value );
	}
	
	override private function set_cursorType( p_value:EMouseCursor ):EMouseCursor
	{
		return super.set_cursorType( p_value );
	}

}
