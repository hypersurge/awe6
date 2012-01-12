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

package awe6.core.drivers.flash;
import awe6.core.Context;
import awe6.core.drivers.AOverlay;
import awe6.core.View;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.BlendMode;
import flash.filters.BlurFilter;

/**
 * This Overlay class provides flash target overrides.
 * @author	Robert Fell
 */

class Overlay extends AOverlay
{
	private var _pauseSnapshot:BitmapData;
	
	override private function _driverInit():Void
	{
		_context.mouseEnabled = false;
		
		_pauseContext = new Context();
		_pauseContext.mouseEnabled = false;
		_pauseSnapshot = new BitmapData( _kernel.factory.width, _kernel.factory.height, true, 0x00 );
		var l_bitmap:Bitmap = new Bitmap( _pauseSnapshot );
		l_bitmap.filters = [ new BlurFilter( _pauseBlur, _pauseBlur, 3 ) ];
		_pauseContext.addChild( l_bitmap );
		var l_color:Context = new Context();
		l_color.graphics.beginFill( _pauseColor, _pauseAlpha );
		l_color.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );		
		_pauseContext.addChild( l_color );
		
		_flashContext = new Context();
		_flashContext.mouseEnabled = false;
		_flashContext.blendMode = BlendMode.ADD;
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
	
	override private function _drawPause( ?p_isVisible:Bool = true ):Void
	{
		super._drawPause( p_isVisible );
		if ( !p_isVisible )
		{
			return;
		}
		_pauseSnapshot.fillRect( _pauseSnapshot.rect, 0x00 );
		try
		{
			_pauseSnapshot.draw( cast( _kernel.scenes.scene.view, View ).context );
		}
		catch ( l_error:Dynamic ) {}
	}
	
}

