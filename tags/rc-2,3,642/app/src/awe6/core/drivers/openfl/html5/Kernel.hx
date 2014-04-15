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

package awe6.core.drivers.openfl.html5;
import awe6.core.drivers.AKernel;
import flash.display.Stage;
import flash.display.StageDisplayState;
import flash.display.StageQuality;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.Lib;
import flash.system.Security;

/**
 * This Kernel class provides openfl-html5 target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	private var _stage:Stage;

	override private function _driverGetIsLocal():Bool
	{
		return false;
	}
	
	override private function _driverInit():Void
	{
		_stage = _context.stage;		
		Lib.current.focusRect = false;
		_stage.frameRate = factory.targetFramerate;
		_stage.scaleMode = StageScaleMode.NO_SCALE;
		_stage.addEventListener( Event.ENTER_FRAME, _onEnterFrame );
	}

	override private function _driverDisposer():Void
	{
	}
	
	private function _onEnterFrame( p_event:Event ):Void
	{
		_updater( 0 ); // avoid isActive
	}
	
	override private function _driverSetIsEyeCandy( p_value:Bool ):Void
	{
	}
	
	override private function _driverSetIsFullScreen( p_value:Bool ):Void
	{
		if ( p_value )
		{
			var l_scale:Float = Math.min( _stage.stageWidth / factory.width, _stage.stageHeight / factory.height );
			switch( factory.fullScreenType )
			{
				case DISABLED, NO_SCALE, SUB_TYPE( _ ) :
					null;
				case SCALE_ASPECT_RATIO_IGNORE :
					_stage.displayState = StageDisplayState.FULL_SCREEN;
					_stage.scaleX = _stage.stageWidth / factory.width;
					_stage.scaleY = _stage.stageHeight / factory.height;
				case SCALE_ASPECT_RATIO_PRESERVE :
					_stage.displayState = StageDisplayState.FULL_SCREEN;
					_stage.scaleX = _stage.scaleY = l_scale;
				case SCALE_NEAREST_MULTIPLE :
					_stage.displayState = StageDisplayState.FULL_SCREEN;
					if ( l_scale < .5 )
					{
						l_scale = .25;
					}
					else if ( l_scale < 1 )
					{
						l_scale = .5;
					}
					else
					{
						l_scale = Math.floor( l_scale );
					}
					_stage.scaleX = _stage.scaleY = l_scale;
			}
		}
		else
		{
			_stage.displayState = StageDisplayState.NORMAL;
			_stage.scaleX = _stage.scaleY = 1;
		}
	}
	
}

