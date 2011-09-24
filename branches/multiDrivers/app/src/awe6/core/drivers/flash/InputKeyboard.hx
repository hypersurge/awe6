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
import awe6.core.drivers.AInputKeyboard;
import flash.display.Stage;
import flash.events.Event;
import flash.events.KeyboardEvent;
import flash.Lib;

/**
 * This InputKeyboard class provides Flash target overrides.
 * @author	Robert Fell
 */
class InputKeyboard extends AInputKeyboard
{
	private var _stage:Stage;
	
	override private function _nativeInit():Void 
	{
		_stage = Lib.current.stage;
		_stage.addEventListener( KeyboardEvent.KEY_DOWN, _onKeyDown );
		_stage.addEventListener( KeyboardEvent.KEY_UP, _onKeyUp );
		_stage.addEventListener( Event.DEACTIVATE, _reset );
	}
	
	override private function _updater( timeInterval = 0 ):Void 
	{
		_stage.focus = _stage;
		super._updater( timeInterval );
	}
	
	override private function _disposer():Void 
	{
		_stage.removeEventListener( KeyboardEvent.KEY_DOWN, _onKeyDown );
		_stage.removeEventListener( KeyboardEvent.KEY_UP, _onKeyUp );
		_stage.removeEventListener( Event.DEACTIVATE, _reset );
		super._disposer();
	}
	
	private function _onKeyDown( event:KeyboardEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_addEvent( event.keyCode, true ); // "keyCode" is Flash syntax
		return;
	}
	
	private function _onKeyUp( event:KeyboardEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_addEvent( event.keyCode, false ); // "keyCode" is Flash syntax
		return;
	}
	
	
}
