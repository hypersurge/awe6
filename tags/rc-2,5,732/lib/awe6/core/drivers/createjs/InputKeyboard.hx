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
import awe6.core.drivers.AInputKeyboard;
import awe6.interfaces.EKey;
import js.Browser;
import js.html.Document;
import js.html.KeyboardEvent;

/**
 * This InputKeyboard class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class InputKeyboard extends AInputKeyboard
{
	private var _document:Document;
	private var _preventDefaultKeyCodes:Array<Int>; // storing as KeyCoes rather than EKey to save additional lookups
	
	override private function _driverInit():Void 
	{
		_document = Browser.document; // must be linked to Browser
		_preventDefaultKeyCodes = [];
		_document.addEventListener( "keydown", _onKeyDown );
		_document.addEventListener( "keyup", _onKeyUp );
	}
	
	override private function _disposer():Void 
	{
		_document.removeEventListener( "keydown", _onKeyDown );
		_document.removeEventListener( "keyup", _onKeyUp );
		super._disposer();
	}
	
	private function _onKeyDown( p_event:KeyboardEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		if ( Lambda.has( _preventDefaultKeyCodes, p_event.keyCode ) )
		{
			p_event.preventDefault();
		}
		_addEvent( p_event.keyCode, true );
	}
	
	private function _onKeyUp( p_event:KeyboardEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		if ( Lambda.has( _preventDefaultKeyCodes, p_event.keyCode ) )
		{
			p_event.preventDefault();
		}
		_addEvent( p_event.keyCode, false );
	}
	
	@:keep public function preventDefaultForKeys( p_keyTypes:Array<EKey> ):Void
	{
		if ( p_keyTypes == null )
		{
			return;
		}
		for ( i in p_keyTypes )
		{
			var l_keyCode:Int = getKeyCode( i );
			if ( !Lambda.has( _preventDefaultKeyCodes, l_keyCode ) )
			{
				_preventDefaultKeyCodes.push( l_keyCode );
			}
		}
	}
	
	@:keep public function allowDefaultForKeys( p_keyTypes:Array<EKey> ):Void
	{
		if ( p_keyTypes == null )
		{
			return;
		}
		var i:Int = 0;      
		while ( i < _preventDefaultKeyCodes.length )
		{
			var l_keyType:EKey = getKey( _preventDefaultKeyCodes[i] );
			if ( Lambda.has( p_keyTypes, l_keyType ) )
			{
				_preventDefaultKeyCodes.splice( i, 1 );
			}
			else
			{
				i++;
			}
		}
	}
}
