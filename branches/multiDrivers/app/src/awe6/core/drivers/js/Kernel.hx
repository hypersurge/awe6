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
import awe6.core.drivers.AKernel;
import awe6.interfaces.IFactory;
import flash.display.Sprite;
import flash.display.Stage;
import flash.display.StageQuality;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.geom.Rectangle;
import flash.Lib;
import flash.net.URLRequest;
import flash.system.Security;

/**
 * This Kernel class provides js target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	private var _stage:Stage;

	override private function _nativeGetIsLocal():Bool
	{
		return Security.sandboxType != Security.REMOTE;		
	}
	
	override private function _nativeInit():Void
	{
		_stage = _context.stage;		
		var l_instance:Kernel = this;
		Lib.current.focusRect = false;
		_stage.frameRate = factory.targetFramerate;
		_stage.scaleMode = StageScaleMode.NO_SCALE;
		_stage.quality = StageQuality.LOW;

		var l_mask:Sprite = new Sprite();
		l_mask.graphics.beginFill( 0xFFFFFF );
		l_mask.graphics.drawRect( 0, 0, factory.width, factory.height );
		l_mask.graphics.endFill();
		_context.addChild( l_mask );
		_context.mask = l_mask;
		
		_stage.addEventListener( Event.ENTER_FRAME, _onEnterFrame );
		
		isEyeCandy = true;
		isFullScreen = false;
	}

	override private function _nativeDisposer():Void
	{
	}
	
	private function _onEnterFrame( event:Event ):Void
	{
		_updater( 0 ); // avoid isActive
	}
	
	override private function _nativeSetIsEyeCandy( value:Bool ):Void
	{
	}
	
	override private function _nativeSetIsFullScreen( value:Bool ):Void
	{
	}
	
}

