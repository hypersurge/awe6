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

package awe6.core.drivers.jeash;
import awe6.core.Context;
import awe6.core.drivers.AOverlay;
import awe6.core.View;

/**
 * This Overlay class provides js target overrides.
 * @author	Robert Fell
 */

class Overlay extends AOverlay
{
	
	override private function _driverInit():Void
	{
		_context.mouseEnabled = false;
		
		_pauseContext = new Context();
		_pauseContext.mouseEnabled = false;
		_pauseContext.graphics.beginFill( _pauseColor, _pauseAlpha );
		_pauseContext.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );		
		
		_flashContext = new Context();
		_flashContext.mouseEnabled = false;
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_flashContext.alpha = _flashAlpha;
	}
	
	override public function flash( ?p_duration:Float, ?p_asTime:Bool = true, ?p_startingAlpha:Float = 1, ?p_color:Int = 0xFFFFFF ):Void
	{
		_flashContext.graphics.clear();
		_flashContext.graphics.beginFill( p_color );
		_flashContext.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );
		p_duration = ( p_duration != null ) ? p_duration : p_asTime ? 500 : _kernel.factory.targetFramerate * .5;
		_flashDuration = _flashStartingDuration = p_duration;
		_flashAsTime = p_asTime;
		_flashAlpha = _flashStartingAlpha = _tools.limit( p_startingAlpha, 0, 1 );
	}
	
}