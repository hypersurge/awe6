/*
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

package awe6.interfaces;

/**
 * Representing the keys on a Keyboard for use in the IInputKeyboard virtual controller.
 * <p>Can be extended with SubType by using concrete project values.</p> 
 * @author	Robert Fell
 */
enum EKey 
{
	NUM_LOCK; 
	CLEAR;
	HELP;
	ALT;
	BACKSPACE;
	CAPS_LOCK;
	CONTROL;
	DELETE;
	DOWN;
	END;
	ENTER;
	ESCAPE;
	F1;
	F10;
	F11;
	F12;
	F13;
	F14;
	F15;
	F2;
	F3;
	F4;
	F5;
	F6;
	F7;
	F8;
	F9;
	HOME;
	INSERT;
	LEFT;
	NUMPAD_0;
	NUMPAD_1;
	NUMPAD_2;
	NUMPAD_3;
	NUMPAD_4;
	NUMPAD_5;
	NUMPAD_6;
	NUMPAD_7;
	NUMPAD_8;
	NUMPAD_9;
	NUMPAD_ADD;
	NUMPAD_DECIMAL;
	NUMPAD_DIVIDE;
	NUMPAD_ENTER;
	NUMPAD_MULTIPLY;
	NUMPAD_SUBTRACT;
	PAGE_DOWN;
	PAGE_UP;
	RIGHT;
	SHIFT;
	SPACE;
	TAB;
	UP;
	A;
	B;
	C;
	D;
	E;
	F;
	G;
	H;
	I;
	J;
	K;
	L;
	M;
	N;
	O;
	P;
	Q;
	R;
	S;
	T;
	U;
	V;
	W;
	X;
	Y;
	Z;
	NUMBER_0;
	NUMBER_1;
	NUMBER_2;
	NUMBER_3;
	NUMBER_4;
	NUMBER_5;
	NUMBER_6;
	NUMBER_7;
	NUMBER_8;
	NUMBER_9;
	COLON;
	EQUALS;
	HYPHEN;
	SLASH;
	TILDE;
	SQUARELEFT;
	SQUARERIGHT;
	BACKSLASH;
	APOSTROPHE;
	TOPLEFT;
	SUB_TYPE( value:Dynamic );
}