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

package awe6.core.drivers.nme;
import awe6.core.drivers.AInputKeyboard;
import awe6.interfaces.EKey;
import flash.display.Stage;
import flash.events.Event;
import flash.events.KeyboardEvent;
import flash.Lib;

/**
 * This InputKeyboard class provides nme native target overrides.
 * @author	Robert Fell
 */
class InputKeyboard extends AInputKeyboard
{
	private var _stage:Stage;
	
	override private function _driverInit():Void 
	{
		_stage = Lib.current.stage;
		_stage.addEventListener( KeyboardEvent.KEY_DOWN, _onKeyDown );
		_stage.addEventListener( KeyboardEvent.KEY_UP, _onKeyUp );
		_stage.addEventListener( Event.DEACTIVATE, _reset );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		// cpp doesn't have "focus", but put here in case one day it does
		if ( ( _stage.focus == null ) || ( _stage.focus.stage == null ) )
		{
			_stage.focus = _stage;
		}
		super._updater( p_deltaTime );
	}
	
	override private function _disposer():Void 
	{
		_stage.removeEventListener( KeyboardEvent.KEY_DOWN, _onKeyDown );
		_stage.removeEventListener( KeyboardEvent.KEY_UP, _onKeyUp );
		_stage.removeEventListener( Event.DEACTIVATE, _reset );
		super._disposer();
	}
	
	private function _onKeyDown( p_event:KeyboardEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_addEvent( p_event.keyCode, true ); // "keyCode" is Flash syntax
		return;
	}
	
	private function _onKeyUp( p_event:KeyboardEvent ):Void
	{
		if ( !isActive )
		{
			return;
		}
		_addEvent( p_event.keyCode, false ); // "keyCode" is Flash syntax
		return;
	}
	
	override public function getKeyCode( p_type:EKey ):Int
	{
		return switch ( p_type )
		{
			case NUM_LOCK :
				300; 
			case CLEAR :
				12; // ?
			case HELP :
				47; //?
			case ALT :
				18; 
			case BACKSPACE :
				8; 
			case CAPS_LOCK :
				20; 
			case CONTROL :
				17; 
			case DELETE :
				46; 
			case DOWN :
				40; 
			case END :
				35; 
			case ENTER :
				13; 
			case ESCAPE :
				27; 
			case F1 :
				112; 
			case F10 :
				121; 
			case F11 :
				122; 
			case F12 :
				123; 
			case F13 :
				124; 
			case F14 :
				125; 
			case F15 :
				126; 
			case F2 :
				113; 
			case F3 :
				114; 
			case F4 :
				115; 
			case F5 :
				116; 
			case F6 :
				117; 
			case F7 :
				118; 
			case F8 :
				119; 
			case F9 :
				120; 
			case HOME :
				36; 
			case INSERT :
				45; 
			case LEFT :
				37; 
			case NUMPAD_0 :
				96; 
			case NUMPAD_1 :
				97; 
			case NUMPAD_2 :
				98; 
			case NUMPAD_3 :
				99; 
			case NUMPAD_4 :
				100; 
			case NUMPAD_5 :
				101; 
			case NUMPAD_6 :
				102; 
			case NUMPAD_7 :
				103; 
			case NUMPAD_8 :
				104; 
			case NUMPAD_9 :
				105; 
			case NUMPAD_ADD :
				270; 
			case NUMPAD_DECIMAL :
				266; 
			case NUMPAD_DIVIDE :
				267; 
			case NUMPAD_ENTER :
				13; 
			case NUMPAD_MULTIPLY :
				268; 
			case NUMPAD_SUBTRACT :
				269; 
			case PAGE_DOWN :
				34; 
			case PAGE_UP :
				33; 
			case RIGHT :
				39; 
			case SHIFT :
				16; 
			case SPACE :
				32; 
			case TAB :
				9; 
			case UP :
				38; 
			case A :
				97; 
			case B :
				98; 
			case C :
				99; 
			case D :
				100; 
			case E :
				101; 
			case F :
				102; 
			case G :
				103; 
			case H :
				104; 
			case I :
				105; 
			case J :
				106; 
			case K :
				107; 
			case L :
				108; 
			case M :
				109; 
			case N :
				110; 
			case O :
				111; 
			case P :
				112; 
			case Q :
				113; 
			case R :
				114; 
			case S :
				115; 
			case T :
				116; 
			case U :
				117; 
			case V :
				118; 
			case W :
				119; 
			case X :
				120; 
			case Y :
				121; 
			case Z :
				122; 
			case NUMBER_0 :
				48; 
			case NUMBER_1 :
				49; 
			case NUMBER_2 :
				50; 
			case NUMBER_3 :
				51; 
			case NUMBER_4 :
				52; 
			case NUMBER_5 :
				53; 
			case NUMBER_6 :
				54; 
			case NUMBER_7 :
				55; 
			case NUMBER_8 :
				56; 
			case NUMBER_9 :
				57; 
			case COLON :
				186; 
			case EQUALS :
				187; 
			case HYPHEN :
				189; 
			case SLASH :
				191; 
			case TILDE :
				220; 
			case SQUARELEFT :
				219; 
			case SQUARERIGHT :
				221; 
			case BACKSLASH :
				60; 
			case APOSTROPHE :
				222; 
			case TOPLEFT :
				192;
			case SUB_TYPE( p_value ) :
				Std.int( p_value );
		}
	}
	
}
