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

package awe6.core.drivers.js;
import awe6.core.drivers.AInputMouse;
import js.Dom;
import js.Lib;

/**
 * This InputMouse class provides js target overrides.
 * @author	Robert Fell
 */
class InputMouse extends AInputMouse
{
	private var _document:Document;
	private var _isWithinBounds:Bool;
	
	override private function _nativeInit():Void 
	{
		_document = Lib.document;
		untyped _document.addEventListener( "mousedown", _onMouseDown );
		untyped _document.addEventListener( "mouseup", _onMouseUp );
		untyped _document.addEventListener( "mousemove", _onMouseMove );
		untyped _document.addEventListener( "blur", _reset );
		_isWithinBounds = false;
	}
	
	override private function _disposer():Void 
	{
		untyped _document.removeEventListener( "mousedown", _onMouseDown );
		untyped _document.removeEventListener( "mouseup", _onMouseUp );
		untyped _document.removeEventListener( "mousemove", _onMouseMove );
		untyped _document.removeEventListener( "blur", _reset );
		super._disposer();		
	}	
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		_document.focus();
		super._updater( deltaTime );
	}
	
	override private function _isWithinBounds():Bool
	{
		return _isWithinBounds;
	}
	
	override private function _getPosition():Void
	{
		var l_x:Int = Std.int( _tools.limit( x, 0, _kernel.factory.width ) );
		var l_y:Int = Std.int( _tools.limit( y, 0, _kernel.factory.height ) );
		x = ( l_x == _kernel.factory.width ) ? _xPrev : l_x;
		y = ( l_y == _kernel.factory.height ) ? _yPrev : l_y;		
	}
	
	private function _onMouseDown( ?event:Dynamic ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_buffer.push( true );
	}
	
	private function _onMouseUp( ?event:Dynamic ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_buffer.push( false );
	}
	
	private function _onMouseMove( ?event:Dynamic ):Void
	{
		if ( !isActive )
		{
			return;
		}
		x = event.clientX;
		y = event.clientY;
		_isWithinBounds = ( x >= 0 ) && ( x <= _kernel.factory.width ) && ( y >= 0 ) && ( y <= _kernel.factory.height );
		_getPosition();
	}
}
