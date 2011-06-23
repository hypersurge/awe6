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

import flash.display.Graphics;
import flash.display.InteractiveObject;
import flash.geom.Matrix;
import flash.geom.Rectangle;
import flash.geom.Point;
import flash.Lib;
import flash.events.MouseEvent;

class Sprite extends DisplayObjectContainer
{
	var jeashGraphics:Graphics;
	public var graphics(jeashGetGraphics,null):Graphics;
	public var useHandCursor(default,jeashSetUseHandCursor):Bool;
	public var buttonMode:Bool;

	var jeashCursorCallbackOver:Dynamic->Void;
	var jeashCursorCallbackOut:Dynamic->Void;

	public function new()
	{
		Lib.canvas;
		jeashGraphics = new Graphics();
		if(jeashGraphics!=null)
			jeashGraphics.owner = this;
		super();
		buttonMode = false;
		name = "Sprite " + DisplayObject.mNameID++;
		Lib.jeashSetSurfaceId(jeashGraphics.jeashSurface, name);
	}

	public function startDrag(?lockCenter:Bool, ?bounds:Rectangle):Void
	{
		if (stage != null)
			stage.jeashStartDrag(this, lockCenter, bounds);
	}

	public function stopDrag():Void
	{
		if (stage != null)
			stage.jeashStopDrag(this);
	}

	override function jeashGetGraphics() 
	{ 
		return jeashGraphics; 
	}

	function jeashSetUseHandCursor(cursor:Bool)
	{
		if (cursor == this.useHandCursor) return cursor;

		if (jeashCursorCallbackOver != null)
			removeEventListener(MouseEvent.ROLL_OVER, jeashCursorCallbackOver);
		if (jeashCursorCallbackOut != null)
			removeEventListener(MouseEvent.ROLL_OUT, jeashCursorCallbackOut);

		if (!cursor)
		{
			Lib.jeashSetCursor(false);
		} else {
			jeashCursorCallbackOver = function (_) { Lib.jeashSetCursor(true); }
			jeashCursorCallbackOut = function (_) { Lib.jeashSetCursor(false); }
			addEventListener(MouseEvent.ROLL_OVER, jeashCursorCallbackOver);
			addEventListener(MouseEvent.ROLL_OUT, jeashCursorCallbackOut);
		}
		this.useHandCursor = cursor;

		return cursor;
	}
}

