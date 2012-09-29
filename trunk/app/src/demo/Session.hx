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

package demo;
import awe6.core.ASession;

class Session extends ASession {
	// example:
	public var name:String;
	public var highScore:Int;
	public var isWin:Bool; // temporary
	
	override private function _init() {
		_version = 1; // incremement this every time you make a structural change to the session (it will force a reset on all users' systems)
		super._init();
	}
	
	override private function _getter():Void {
		super._getter();
		// example:
		name = _data.name;
		highScore = _data.highScore;
	}
	
	override private function _setter():Void {
		super._setter();
		// example:
		_data.name = name;
		_data.highScore = highScore;
	}
	
	override private function _resetter():Void {
		super._resetter();
		// example:
		name = "???";
		highScore = 0;
	}
	
	override public function getPercentageComplete():Float {
		// example:
		return _tools.limit( Std.int( 100 * highScore / 1000 ), 0, 100 );
	}	
	
}
