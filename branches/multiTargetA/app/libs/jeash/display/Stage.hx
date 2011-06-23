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

import Html5Dom;

import flash.Lib;
import flash.ui.Keyboard;
import flash.geom.Matrix;
import flash.events.FocusEvent;
import flash.events.Event;
import flash.display.StageScaleMode;
import flash.display.StageDisplayState;
import flash.display.Graphics;
import flash.geom.Point;
import flash.geom.Rectangle;

class Stage extends flash.display.DisplayObjectContainer
{
	var jeashWindowWidth : Int;
	var jeashWindowHeight : Int;
	var jeashTimer : Dynamic;
	var jeashInterval : Int;
	var jeashFastMode : Bool;
	var jeashDragObject:DisplayObject;
	var jeashDragBounds:Rectangle;
	var jeashDragOffsetX:Float;
	var jeashDragOffsetY:Float;
	var jeashMouseOverObjects:Array<InteractiveObject>;
	var jeashStageMatrix:Matrix;
	var jeashMouseDown:Bool;
	var jeashStageActive:Bool;

	public var jeashPointInPathMode(default,null):PointInPathMode;

	public var stageWidth(jeashGetStageWidth,null):Int;
	public var stageHeight(jeashGetStageHeight,null):Int;
	public var frameRate(default,jeashSetFrameRate):Float;
	public var quality(jeashGetQuality,jeashSetQuality):String;
	public var scaleMode:StageScaleMode;
	public var align:flash.display.StageAlign;
	public var stageFocusRect:Bool;
	public var focus(GetFocus,SetFocus):InteractiveObject;
	public var backgroundColor(default,SetBackgroundColour):Int;
	public var showDefaultContextMenu(jeashGetShowDefaultContextMenu,jeashSetShowDefaultContextMenu):Bool;
	public var displayState(jeashGetDisplayState,jeashSetDisplayState):StageDisplayState;
	public var fullScreenWidth(jeashGetFullScreenWidth,null):UInt;
	public var fullScreenHeight(jeashGetFullScreenHeight,null):UInt;

	public function jeashGetStageWidth() { return jeashWindowWidth; }
	public function jeashGetStageHeight() { return jeashWindowHeight; }

	private var mFocusObject : InteractiveObject;
	static var jeashMouseChanges : Array<String> = [ jeash.events.MouseEvent.MOUSE_OUT, jeash.events.MouseEvent.MOUSE_OVER, jeash.events.MouseEvent.ROLL_OUT, jeash.events.MouseEvent.ROLL_OVER ];
	static inline var DEFAULT_FRAMERATE = 60.0;

	// for openGL renderers
	public var mProjMatrix : Array<Float>;
	static inline var DEFAULT_PROJ_MATRIX = [1., 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0];

	public function new(width:Int, height:Int)
	{
		super();
		mFocusObject = null;
		jeashWindowWidth = stageWidth = width;
		jeashWindowHeight = stageHeight = height;
		stageFocusRect = false;
		scaleMode = StageScaleMode.SHOW_ALL;
		jeashStageMatrix = new Matrix();
		tabEnabled = true;
		frameRate=DEFAULT_FRAMERATE;
		SetBackgroundColour(0xffffff);
		name = "Stage";
		loaderInfo = LoaderInfo.create(null);
		loaderInfo.parameters.width = Std.string(jeashWindowWidth);
		loaderInfo.parameters.height = Std.string(jeashWindowHeight);
		mProjMatrix = DEFAULT_PROJ_MATRIX;
		jeashPointInPathMode = Graphics.jeashDetectIsPointInPathMode();
		jeashMouseOverObjects = [];
		jeashMouseDown = false;
		showDefaultContextMenu = true;
		// bug in 2.07 release
		// displayState = StageDisplayState.NORMAL;
	}

	// @r551
	public function jeashStartDrag(sprite:Sprite, lockCenter:Bool = false, ?bounds:Rectangle)
	{
		jeashDragBounds = (bounds==null) ? null : bounds.clone();
		jeashDragObject = sprite;

		if (jeashDragObject!=null)
		{
			if (lockCenter)
			{
				var bounds = sprite.getBounds(this);
				jeashDragOffsetX = -bounds.width/2-bounds.x;
				jeashDragOffsetY = -bounds.height/2-bounds.y;
			}
			else
			{
				var mouse = new Point(mouseX,mouseY);
				var p = jeashDragObject.parent;

				if (p!=null)
					mouse = p.globalToLocal(mouse);

				jeashDragOffsetX = jeashDragObject.x - mouse.x;
				jeashDragOffsetY = jeashDragObject.y - mouse.y;
			}
		}
	}

	// @r551
	function jeashDrag(point:Point)
	{
		var p = jeashDragObject.parent;
		if (p!=null)
			point = p.globalToLocal(point);

		var x = point.x + jeashDragOffsetX;
		var y = point.y + jeashDragOffsetY;

		if (jeashDragBounds!=null)
		{
			if (x < jeashDragBounds.x) x = jeashDragBounds.x;
			else if (x > jeashDragBounds.right) x = jeashDragBounds.right;

			if (y < jeashDragBounds.y) y = jeashDragBounds.y;
			else if (y > jeashDragBounds.bottom) y = jeashDragBounds.bottom;
		}

		jeashDragObject.x = x;
		jeashDragObject.y = y;
	}

	public function jeashStopDrag(sprite:Sprite) : Void
	{
		jeashDragBounds = null;
		jeashDragObject = null;
	}

	// @r551 without touch events
	inline function jeashCheckInOuts(event:jeash.events.MouseEvent, stack:Array<InteractiveObject>)
	{
		var prev = jeashMouseOverObjects;
		var events = jeashMouseChanges;

		var new_n = stack.length;
		var new_obj:InteractiveObject = new_n>0 ? stack[new_n-1] : null;
		var old_n = prev.length;
		var old_obj:InteractiveObject = old_n>0 ? prev[old_n-1] : null;
		if (new_obj!=old_obj)
		{
			// mouseOut/MouseOver goes up the object tree...
			if (old_obj!=null)
				old_obj.jeashFireEvent( event.jeashCreateSimilar(events[0], new_obj, old_obj) );

			if (new_obj!=null)
				new_obj.jeashFireEvent( event.jeashCreateSimilar(events[1], old_obj, new_obj) );

			// rollOver/rollOut goes only over the non-common objects in the tree...
			var common = 0;
			while(common<new_n && common<old_n && stack[common] == prev[common] )
				common++;

			var rollOut = event.jeashCreateSimilar(events[2], new_obj, old_obj);
			var i = old_n-1;
			while(i>=common)
			{
				prev[i].dispatchEvent(rollOut);
				i--;
			}

			var rollOver = event.jeashCreateSimilar(events[3],old_obj);
			var i = new_n-1;
			while(i>=common)
			{
				stack[i].dispatchEvent(rollOver);
				i--;
			}

			jeashMouseOverObjects = stack;
		}
	}

	public function jeashProcessStageEvent(evt:Html5Dom.Event)
	{
		//evt.preventDefault();
		evt.stopPropagation();
		switch(evt.type)
		{
			case (flash.events.MouseEvent.MOUSE_MOVE.toLowerCase()):
				jeashOnMouse(cast evt, flash.events.MouseEvent.MOUSE_MOVE);

			case (flash.events.MouseEvent.MOUSE_DOWN.toLowerCase()):
				jeashOnMouse(cast evt, flash.events.MouseEvent.MOUSE_DOWN);

			case (flash.events.MouseEvent.MOUSE_UP.toLowerCase()):
				jeashOnMouse(cast evt, flash.events.MouseEvent.MOUSE_UP);

			case (flash.events.MouseEvent.CLICK.toLowerCase()):
				jeashOnMouse(cast evt, flash.events.MouseEvent.CLICK);

			case (flash.events.MouseEvent.MOUSE_WHEEL.toLowerCase()):
				jeashOnMouse(cast evt, flash.events.MouseEvent.MOUSE_WHEEL);

			case "keydown":
				var evt:KeyboardEvent = cast evt; 
				var keyCode = if (evt.keyIdentifier != null)
					try {
						Keyboard.jeashConvertWebkitCode(evt.keyIdentifier);
					} catch (e:Dynamic) {
						flash.Lib.trace("keydown error: " + e);
						evt.keyCode;
					}
				else
					Keyboard.jeashConvertMozillaCode(evt.keyCode);

				jeashOnKey( keyCode, true,
						evt.keyLocation,
						evt.ctrlKey, evt.altKey,
						evt.shiftKey );

			case "keyup":
				var evt:KeyboardEvent = cast evt; 
				var keyCode = if (evt.keyIdentifier != null)
					try {
						Keyboard.jeashConvertWebkitCode(evt.keyIdentifier);
					} catch (e:Dynamic) {
						flash.Lib.trace("keyup error: " + e);
						evt.keyCode;
					}
				else
					Keyboard.jeashConvertMozillaCode(evt.keyCode);

				jeashOnKey( keyCode, false,
						evt.keyLocation,
						evt.ctrlKey, evt.altKey,
						evt.shiftKey );

			default:
				
		}
	}

	// @r551
	function jeashOnMouse(event:Html5Dom.MouseEvent, type:String)
	{
		var point : Point = untyped
		{
			new Point(event.clientX - Lib.mMe.__scr.offsetLeft, event.clientY - Lib.mMe.__scr.offsetTop);
		}

		if (jeashDragObject!=null)
			jeashDrag(point);

		var obj = jeashGetObjectUnderPoint(point); 

		// used in drag implementation
		mouseX = point.x;
		mouseY = point.y;

		var stack = new Array<InteractiveObject>();
		if (obj!=null)
			obj.jeashGetInteractiveObjectStack(stack);

		if (stack.length > 0)
		{
			//var global = obj.localToGlobal(point);
			//var obj = stack[0];
			stack.reverse();
			var local = obj.globalToLocal(point);

			var evt = jeashCreateMouseEvent(type, event, local, cast obj);

			jeashCheckInOuts(evt, stack);

			obj.jeashFireEvent(evt);
		} else {
			var evt = jeashCreateMouseEvent(type, event, point, null);

			jeashCheckInOuts(evt, stack);
		}
	}

	// @r551 should be in MouseEvent.hx, haxe issue 300
	public inline function jeashCreateMouseEvent(type:String, event:Html5Dom.MouseEvent, local:Point, target:InteractiveObject): flash.events.MouseEvent
	{
		// cross-browser delta sniff
		var delta = if ( type == flash.events.MouseEvent.MOUSE_WHEEL )
		{
			var mouseEvent : Dynamic = event;
			if (mouseEvent.wheelDelta) { /* IE/Opera. */
				if ( js.Lib.isOpera )
					Std.int(mouseEvent.wheelDelta/40);
				else
					Std.int(mouseEvent.wheelDelta/120);
			} else if (mouseEvent.detail) { /** Mozilla case. */
				Std.int(-mouseEvent.detail);
			}

		} else { 2; }

		// source: http://unixpapa.com/js/mouse.html
		if (type == flash.events.MouseEvent.MOUSE_DOWN)
			jeashMouseDown = if ( event.which != null ) 
				event.which == 1
			else if (event.button != null) 
				(js.Lib.isIE && event.button == 1 || event.button == 0) 
			else false;
		else if (type == flash.events.MouseEvent.MOUSE_UP)
			if ( event.which != null ) 
				if (event.which == 1)
					jeashMouseDown = false;
			else if (event.button != null) 
				if (js.Lib.isIE && event.button == 1 || event.button == 0)
					jeashMouseDown = false;
			else 
				jeashMouseDown = false;

		var pseudoEvent =  new flash.events.MouseEvent(type,
				true, false,
				local.x,local.y,
				null,
				event.ctrlKey,
				event.altKey,
				event.shiftKey,
				jeashMouseDown,
				delta);

		pseudoEvent.stageX = mouseX;
		pseudoEvent.stageY = mouseY;
		pseudoEvent.target = target;
		return pseudoEvent;
	}

	function jeashOnKey( code:Int , pressed : Bool, inChar:Int,
			ctrl:Bool, alt:Bool, shift:Bool )
	{
		var event = new flash.events.KeyboardEvent(
				pressed ? flash.events.KeyboardEvent.KEY_DOWN:
				flash.events.KeyboardEvent.KEY_UP,
				true,false,
				inChar,
				code,
				(shift || ctrl) ? 1 : 0, // TODO
				ctrl,alt,shift);

		dispatchEvent(event);
	}

	public function jeashOnResize(inW:Int, inH:Int)
	{
		jeashWindowWidth = inW;
		jeashWindowHeight = inH;
		//RecalcScale();
		var event = new flash.events.Event( flash.events.Event.RESIZE );
		event.target = this;
		jeashBroadcast(event);
	}


	public function SetBackgroundColour(col:Int) : Int
	{
		backgroundColor = col;
		return col;
	}

	public function DoSetFocus(inObj:InteractiveObject,inKeyCode:Int)
	{
		// TODO
		return inObj;
	}

	public function SetFocus(inObj:InteractiveObject) { return DoSetFocus(inObj,-1); }

	public function GetFocus() { return mFocusObject; }

	public function jeashRenderAll()
	{
		jeashRender(jeashStageMatrix);
	}

	public function jeashRenderToCanvas(canvas:HTMLCanvasElement)
	{
		canvas.width = canvas.width;

		jeashRenderContentsToCache(jeashStageMatrix, canvas);
	}

	public function jeashSetQuality(inQuality:String):String
	{
		this.quality = inQuality;
		return inQuality;
	}

	public function jeashGetQuality():String
	{
		return if (this.quality != null)
			this.quality;
		else
			StageQuality.BEST;
	}

	function jeashSetFrameRate(speed:Float):Float
	{
		if ( StringTools.startsWith(Lib.context, "swf") ) return speed;

		var window : Window = cast js.Lib.window;
		if (speed == 0 && window.postMessage != null)
			jeashFastMode = true;
		else
		{
			jeashFastMode = false;
			jeashInterval = Std.int( 1000.0/speed );
		}

		jeashUpdateNextWake();

		this.frameRate = speed;
		return speed;
	}

	public function jeashUpdateNextWake () 
	{
		var window : Window = cast js.Lib.window;
		window.clearInterval( jeashTimer );
		if ( jeashFastMode )
		{
			window.addEventListener( 'message', jeashStageRender, false );
			window.postMessage('a', cast window.location);
		} else {
			jeashTimer = window.setInterval( jeashStageRender, jeashInterval, [] );
		}
	}

	function jeashStageRender (?_) 
	{
		if (!jeashStageActive)
		{
			jeashOnResize(jeashWindowWidth, jeashWindowHeight);
			var event = new flash.events.Event( flash.events.Event.ACTIVATE );
			event.target = this;
			jeashBroadcast(event);
			jeashStageActive = true;
		}

		var event = new flash.events.Event( flash.events.Event.ENTER_FRAME );
		this.jeashBroadcast(event);

		this.jeashRenderAll();
		
		var event = new flash.events.Event( flash.events.Event.RENDER );
		this.jeashBroadcast(event);

		if ( jeashFastMode )
			untyped window.postMessage('a', window.location);
	}

	override function jeashIsOnStage() { return true; }
	override function jeashGetMouseX() { return this.mouseX; }
	override function jeashSetMouseX(x:Float) { this.mouseX = x; return x; }
	override function jeashGetMouseY() { return this.mouseY; }
	override function jeashSetMouseY(y:Float) { this.mouseY = y; return y; }

	inline function jeashGetShowDefaultContextMenu() { return this.showDefaultContextMenu; }
	function jeashSetShowDefaultContextMenu(showDefaultContextMenu:Bool)
	{
		if (showDefaultContextMenu != this.showDefaultContextMenu && this.showDefaultContextMenu != null)
			if (!showDefaultContextMenu) Lib.jeashDisableRightClick(); else Lib.jeashEnableRightClick();
		this.showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}

	inline function jeashGetDisplayState() { return this.displayState; }
	function jeashSetDisplayState(displayState:StageDisplayState)
	{
		if (displayState != this.displayState && this.displayState != null)
			switch (displayState) {
				case NORMAL: Lib.jeashDisableFullScreen();
				case FULL_SCREEN: Lib.jeashEnableFullScreen();
			}
		this.displayState = displayState;
		return displayState;
	}

	inline function jeashGetFullScreenWidth() { return Lib.jeashFullScreenWidth(); }
	inline function jeashGetFullScreenHeight() { return Lib.jeashFullScreenHeight(); }
}

