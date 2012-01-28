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

package awe6.core.drivers;
import awe6.core.Process;
import awe6.interfaces.EKey;
import awe6.interfaces.IInputKeyboard;
import awe6.interfaces.IKernel;

/**
 * The InputKeyboard class provides a minimalist implementation of the IInputKeyboard interface.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AInputKeyboard extends Process, implements IInputKeyboard
{
	private var _keys:Array<_HelperKey>;
	private var _buffer:Array<_HelperKeyEvent>;

	override private function _init():Void 
	{
		super._init();
		_driverInit();
		_reset();
	}
	
	private function _driverInit():Void
	{
		//override me
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		var l_encounteredKeyCodes:Hash<Bool> = new Hash<Bool>();
		var l_nextBuffer:Array<_HelperKeyEvent> = [];
		for ( i in _buffer )
		{
			var l_key:String = Std.string( i.keyCode );
			if ( l_encounteredKeyCodes.exists( l_key ) )
			{
				l_nextBuffer.push( i );
				continue;
			}
			if ( i.isDown )
			{
				if ( !_keys[i.keyCode].isDown )
				{
					_onDown( i.keyCode );
					l_encounteredKeyCodes.set( l_key, true );
				}
			}
			else
			{
				if ( _keys[i.keyCode].isDown )
				{
					_onUp( i.keyCode );
					l_encounteredKeyCodes.set( l_key, true );
				}
			}
		}
		_buffer = l_nextBuffer.copy();
		for ( i in _keys )
		{
			i.isDown ? i.updatesDown++ : i.updatesUp++;
			i.isDown ? i.timeDown += p_deltaTime : i.timeUp += p_deltaTime;
		}
	}
	
	override private function _disposer():Void 
	{
		_keys = null;
		super._disposer();
	}
	
	private function _addEvent( p_keyCodeValue:Int, p_isDown:Bool ):Void
	{
		_buffer.push( new _HelperKeyEvent( p_keyCodeValue, p_isDown ) );
	}
	
	private function _onDown( p_keyCode ):Void
	{
		var l_current:_HelperKey = _keys[p_keyCode];
		l_current.isUsed = true;
		l_current.isDown = true;
		l_current.timeUpPrevious = l_current.timeUp;
		l_current.updatesUpPrevious = l_current.updatesUp;
		l_current.updatesUp = 0;
		l_current.timeUp = 0;
	}
	
	private function _onUp( p_keyCode:Int ):Void
	{
		var l_current:_HelperKey = _keys[p_keyCode];
		l_current.isDown = false;
		l_current.timeDownPrevious = l_current.timeDown;
		l_current.updatesDownPrevious = l_current.updatesDown;
		l_current.updatesDown = 0;
		l_current.timeDown = 0;
	}
		
	private function _reset( ?p_event:Dynamic = null ):Void
	{
		_buffer = [];
		_keys = [];
		for ( i in 0...512 )
		{
			_keys[i] = new _HelperKey( _kernel );
		}
	}	

	public function getIsKeyDown( p_type:EKey ):Bool
	{
		if ( p_type == null )
		{
			return false;
		}
		var l_keyCode:Int = getKeyCode( p_type );
		return _keys[l_keyCode].isDown;
	}
	
	public function getIsKeyPress( p_type:EKey ):Bool
	{
		if ( p_type == null )
		{
			return false;
		}
		var l_keyCode:Int = getKeyCode( p_type );
		return ( _keys[l_keyCode].updatesDown == 1 );
	}
	
	public function getIsKeyRelease( p_type:EKey ):Bool
	{
		if ( p_type == null )
		{
			return false;
		}
		var l_keyCode:Int = getKeyCode( p_type );
		return ( _keys[l_keyCode].isUsed && ( _keys[l_keyCode].updatesUp == 1 ) );
	}	
	
	public function getKeyDownDuration( p_type:EKey, ?p_asTime:Bool = true, ?p_isPrevious:Bool = false ):Float
	{
		if ( p_type == null )
		{
			return 0;
		}
		var l_keyCode:Int = getKeyCode( p_type );
		if ( p_isPrevious )
		{
			return p_asTime ? _keys[l_keyCode].timeDownPrevious : _keys[l_keyCode].updatesDownPrevious;
		}
		return p_asTime ? _keys[l_keyCode].timeDown : _keys[l_keyCode].updatesDown;
	}
	
	public function getKeyUpDuration( p_type:EKey, ?p_asTime:Bool = true, ?p_isPrevious:Bool = false  ):Float
	{
		if ( p_type == null )
		{
			return _tools.BIG_NUMBER;
		}
		var l_keyCode:Int = getKeyCode( p_type );
		if ( p_isPrevious )
		{
			return p_asTime ? _keys[l_keyCode].timeUpPrevious : _keys[l_keyCode].updatesUpPrevious;
		}
		return p_asTime ? _keys[l_keyCode].timeUp : _keys[l_keyCode].updatesUp;
	}
	
	public function getKeyCode( p_type:EKey ):Int
	{
		return switch ( p_type )
		{
			case NUM_LOCK: 144; 
			case CLEAR: 12; 
			case HELP: 47; 
			case ALT: 18; 
			case BACKSPACE: 8; 
			case CAPS_LOCK: 20; 
			case CONTROL: 17; 
			case DELETE: 46; 
			case DOWN: 40; 
			case END: 35; 
			case ENTER: 13; 
			case ESCAPE: 27; 
			case F1: 112; 
			case F10: 121; 
			case F11: 122; 
			case F12: 123; 
			case F13: 124; 
			case F14: 125; 
			case F15: 126; 
			case F2: 113; 
			case F3: 114; 
			case F4: 115; 
			case F5: 116; 
			case F6: 117; 
			case F7: 118; 
			case F8: 119; 
			case F9: 120; 
			case HOME: 36; 
			case INSERT: 45; 
			case LEFT: 37; 
			case NUMPAD_0: 96; 
			case NUMPAD_1: 97; 
			case NUMPAD_2: 98; 
			case NUMPAD_3: 99; 
			case NUMPAD_4: 100; 
			case NUMPAD_5: 101; 
			case NUMPAD_6: 102; 
			case NUMPAD_7: 103; 
			case NUMPAD_8: 104; 
			case NUMPAD_9: 105; 
			case NUMPAD_ADD: 107; 
			case NUMPAD_DECIMAL: 110; 
			case NUMPAD_DIVIDE: 111; 
			case NUMPAD_ENTER: 108; 
			case NUMPAD_MULTIPLY: 106; 
			case NUMPAD_SUBTRACT: 109; 
			case PAGE_DOWN: 34; 
			case PAGE_UP: 33; 
			case RIGHT: 39; 
			case SHIFT: 16; 
			case SPACE: 32; 
			case TAB: 9; 
			case UP: 38; 
			case A: 65; 
			case B: 66; 
			case C: 67; 
			case D: 68; 
			case E: 69; 
			case F: 70; 
			case G: 71; 
			case H: 72; 
			case I: 73; 
			case J: 74; 
			case K: 75; 
			case L: 76; 
			case M: 77; 
			case N: 78; 
			case O: 79; 
			case P: 80; 
			case Q: 81; 
			case R: 82; 
			case S: 83; 
			case T: 84; 
			case U: 85; 
			case V: 86; 
			case W: 87; 
			case X: 88; 
			case Y: 89; 
			case Z: 90; 
			case NUMBER_0: 48; 
			case NUMBER_1: 49; 
			case NUMBER_2: 50; 
			case NUMBER_3: 51; 
			case NUMBER_4: 52; 
			case NUMBER_5: 53; 
			case NUMBER_6: 54; 
			case NUMBER_7: 55; 
			case NUMBER_8: 56; 
			case NUMBER_9: 57; 
			case COLON: 186; 
			case EQUALS: 187; 
			case HYPHEN: 189; 
			case SLASH: 191; 
			case TILDE: 222; 
			case SQUARELEFT: 219; 
			case SQUARERIGHT: 221; 
			case BACKSLASH: 220; 
			case APOSTROPHE: 192; 
			case TOPLEFT: 223;
			case SUB_TYPE( l_value ): Std.int( l_value );
		}
	}
	
	public function getKey( p_keyCode:Int ):EKey
	{
		var l_constructors:Array<String> = Type.getEnumConstructs( EKey );
		l_constructors.pop();
		for ( i in l_constructors )
		{
			var l_key:EKey = Type.createEnum( EKey, i );
			if ( getKeyCode( l_key ) == p_keyCode )
			{
				return l_key;
			}
		}
		return EKey.SUB_TYPE( p_keyCode );
	}	
}

private class _HelperKey
{
	public var isUsed:Bool;
	public var isDown:Bool;
	public var updatesDown:Int;
	public var updatesUp:Int;
	public var timeDown:Int;
	public var timeUp:Int;
	public var updatesDownPrevious:Int;
	public var updatesUpPrevious:Int;
	public var timeDownPrevious:Int;
	public var timeUpPrevious:Int;
	
	public function new( p_kernel:IKernel )
	{
		isDown = false;
		updatesDown = 0;
		updatesUp = p_kernel.tools.BIG_NUMBER;
		timeDown = 0;
		timeUp = p_kernel.tools.BIG_NUMBER;
		updatesDownPrevious = 0;
		updatesUpPrevious = p_kernel.tools.BIG_NUMBER;
		timeDownPrevious = 0;
		timeUpPrevious = p_kernel.tools.BIG_NUMBER;
	}
}

private class _HelperKeyEvent
{
	public var keyCode:Int;
	public var isDown:Bool;
	
	public function new( p_keyCode:Int, p_isDown:Bool )
	{
		keyCode = p_keyCode;
		isDown = p_isDown;
	}
}
