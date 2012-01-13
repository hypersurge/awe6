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
import awe6.core.drivers.AKernel;
import nme.display.Stage;
import nme.display.StageDisplayState;
import nme.display.StageQuality;
import nme.display.StageScaleMode;
import nme.events.Event;

/**
 * This Kernel class provides nme target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	private var _stage:Stage;
	private var _prevStageScaleMode:StageScaleMode;

	override private function _driverGetIsLocal():Bool
	{
		return true;
	}
	
	override private function _driverInit():Void
	{
		_stage = _context.stage;
		_stage.frameRate = factory.targetFramerate;
		_stage.scaleMode = _prevStageScaleMode = StageScaleMode.NO_SCALE;
		_stage.quality = StageQuality.LOW;
		_stage.addEventListener( Event.ENTER_FRAME, _onEnterFrame );
		_stage.addEventListener( Event.RESIZE, _onResize );
		_onResize();
	}

	override private function _driverDisposer():Void
	{
	}
	
	private function _onResize( ?p_event:Event ):Void
	{
		if ( !isFullScreen )
		{
			//_context.scaleX = _stage.stageWidth / factory.width;
			//_context.scaleY = _stage.stageHeight / factory.height;
			_view.x = _stage.stageWidth / 2 - _context.width / 2;
			_view.y = _stage.stageHeight / 2 - _context.height / 2;
		}

		var l_center:Bool = true;

		switch ( factory.fullScreenType )
		{
		case SCALE_ASPECT_RATIO_IGNORE:
			_context.scaleX = _stage.stageWidth / factory.width;
			_context.scaleY = _stage.stageHeight / factory.height;
		case SCALE_ASPECT_RATIO_PRESERVE:
			var l_ratio:Float = factory.width / factory.height;

			// Resize to the longer side; if neccessary correct.
			//

			if ( factory.width > factory.height )
			{
				_context.scaleX = _stage.stageWidth / factory.width;
				_context.scaleY = _context.scaleX;
				if ( _context.height > factory.height )
				{
					_context.scaleY = _stage.stageHeight / factory.height;
					_context.scaleX = _context.scaleX;
				}
			}
			else
			{
				_context.scaleY = _stage.stageHeight / factory.height;
				_context.scaleX = _context.scaleY;
				if ( _context.width > factory.width )
				{
					_context.scaleX = _stage.stageWidth / factory.width;
					_context.scaleY = _context.scaleX;
				}
			}
//		case SCALE_NEAREST_MULTIPLE:
		default: { };
		}

		if ( l_center )
		{
			_view.x = _stage.stageWidth / 2 - _context.width / 2;
			_view.y = _stage.stageHeight / 2 - _context.height / 2;
		}
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
			_stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;
		}
		else
		{
			_stage.displayState = StageDisplayState.NORMAL;
		}
		_onResize();
	}
}

