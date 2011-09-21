/**
 * Copyright (c) 2010, Jeash contributors.
 * 
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package jeash.display;

/**
* @author	Hugh Sanderson
* @author	Russell Weir
**/
class InteractiveObject extends DisplayObject
{
	public var doubleClickEnabled(__getDoubleClickEnabled,__setDoubleClickEnabled) : Bool;
	public var focusRect:Dynamic;
	public var mouseEnabled:Bool;
	public var tabEnabled:Bool;
	public var tabIndex(default,SetTabIndex):Int;

	public function new()
	{
		super();
		tabEnabled = false;
		mouseEnabled = true;
		tabIndex = 0;
		name = "InteractiveObject";
	}

	override public function toString() { return name; }

	public function OnKey(inKey:flash.events.KeyboardEvent):Void { }

	override public function jeashAsInteractiveObject() : flash.display.InteractiveObject
	{
		return this;
	}


	public function SetTabIndex(inIndex:Int)
	{
		tabIndex = inIndex;
		return inIndex;
	}

	/**
	* @todo Implement
	* @todo Check default right now, is it true or false?
	*/
	private function __getDoubleClickEnabled() : Bool {
		return true;
	}
	/**
	* @todo Implement
	*/
	private function __setDoubleClickEnabled(v:Bool) : Bool {
		return v;
	}

	public function OnFocusIn(inMouse:Bool) : Void { }
	public function OnFocusOut() : Void { }
	public function OnMouseDown(inX:Int, inY:Int) : Void { }
	public function OnMouseUp(inX:Int, inY:Int) : Void { }
	public function OnMouseDrag(inX:Int, inY:Int) : Void { }

}

