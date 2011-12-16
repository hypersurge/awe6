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
import awe6.core.drivers.AOverlay;
import awe6.core.View;
import flash.display.Sprite;

/**
 * This Overlay class provides js target overrides.
 * @author	Robert Fell
 */

class Overlay extends AOverlay
{
	
	override private function _nativeInit():Void
	{
		_context.mouseEnabled = false;
		
		_pauseContext = new Sprite();
		_pauseContext.mouseEnabled = false;
		_pauseContext.graphics.beginFill( _pauseColor, _pauseAlpha );
		_pauseContext.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );		
		
		_flashContext = new Sprite();
		_flashContext.mouseEnabled = false;
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		_flashContext.alpha = _flashAlpha;
	}
	
	override public function flash( ?duration:Float, ?asTime:Bool = true, ?startingAlpha:Float = 1, ?color:Int = 0xFFFFFF ):Void
	{
		_flashContext.graphics.clear();
		_flashContext.graphics.beginFill( color );
		_flashContext.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );
		duration = ( duration != null ) ? duration : asTime ? 500 : _kernel.factory.targetFramerate * .5;
		_flashDuration = _flashStartingDuration = duration;
		_flashAsTime = asTime;
		_flashAlpha = _flashStartingAlpha = _tools.limit( startingAlpha, 0, 1 );
	}
	
}