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
import awe6.core.drivers.AInputKeyboard;
import js.Dom;
import js.Lib;

/**
 * This InputKeyboard class provides JS target overrides.
 * @author	Robert Fell
 */
class InputKeyboard extends AInputKeyboard
{
	private var _document:Document;
	
	override private function _nativeInit():Void 
	{
		_document = Lib.document;
		untyped _document.addEventListener( "keydown", _onKeyDown );
		untyped _document.addEventListener( "keyup", _onKeyUp );
		untyped _document.addEventListener( "blur", _reset );
	}
	
	override private function _updater( timeInterval = 0 ):Void 
	{
		_stage.focus();
		super._updater( timeInterval );
	}
	
	override private function _disposer():Void 
	{
		untyped _document.removeEventListener( "keydown", _onKeyDown );
		untyped _document.removeEventListener( "keyup", _onKeyUp );
		untyped _document.removeEventListener( "blur", _reset );
		super._disposer();
	}
	
	private function _onKeyDown( event:Dynamic ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_addEvent( event.keyCode, true ); // "keyCode" is JS syntax
		return;
	}
	
	private function _onKeyUp( event:Dynamic ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_addEvent( event.keyCode, false ); // "keyCode" is JS syntax
		return;
	}	
}

