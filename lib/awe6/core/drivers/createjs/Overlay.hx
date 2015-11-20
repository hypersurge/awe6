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

package awe6.core.drivers.createjs;
import awe6.core.Context;
import awe6.core.drivers.AOverlay;
import awe6.core.View;
import createjs.easeljs.Bitmap;
import createjs.easeljs.Shape;
import js.html.CanvasRenderingContext2D;

/**
 * This Overlay class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Overlay extends AOverlay
{
	private var _pauseSnapshot:Bitmap;
	
	override private function _driverInit():Void
	{
		cast( _borderView, View ).context.mouseEnabled = false;
		_context.mouseEnabled = false;
		
		_pauseContext = new Context();
		_pauseContext.mouseEnabled = false;
		var l_shape:Shape = new Shape();
		l_shape.graphics.beginFill( "#" + StringTools.hex( _pauseColor, 6 ) );
		l_shape.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );
		l_shape.alpha = _pauseAlpha;
		_pauseContext.addChild( l_shape );
		
		_flashContext = new Context();
		_flashContext.mouseEnabled = false;
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_flashContext.alpha = _flashAlpha;
		_flashContext.visible = _flashAlpha != 0;
	}
	
	override public function flash( ?p_duration:Float, p_asTime:Bool = true, p_startingAlpha:Float = 1, p_color:Int = 0xFFFFFF ):Void
	{
		_flashContext.removeAllChildren();
		var l_shape:Shape = new Shape();
		l_shape.graphics.beginFill( "#" + StringTools.hex( p_color, 6 ) );
		l_shape.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );
		_flashContext.addChild( l_shape );
		p_duration = ( p_duration != null ) ? p_duration : p_asTime ? 500 : _kernel.factory.targetFramerate * .5;
		_flashDuration = _flashStartingDuration = p_duration;
		_flashAsTime = p_asTime;
		_flashAlpha = _flashStartingAlpha = _tools.limit( p_startingAlpha, 0, 1 );
	}
	
	// blurred modal works, but is disabled because performance is poor for many mobile devices
/*	override private function _drawPause( p_isVisible:Bool = true ):Void
	{
		super._drawPause( p_isVisible );
		if ( !p_isVisible || ( _pauseBlur < 1 ) )
		{
			return;
		}
		if ( ( _pauseSnapshot != null ) && ( _pauseSnapshot.parent != null ) )
		{
			_pauseSnapshot.parent.removeChild( _pauseSnapshot );
		}
		_pauseSnapshot = null;
		try
		{
			untyped _kernel.scenes.scene.view.context.cache( 0, 0, _kernel.factory.width, _kernel.factory.height );
			var l_original = untyped _kernel.scenes.scene.view.context.cacheCanvas;
			_pauseSnapshot = new Bitmap( l_original );
			_pauseSnapshot.cache( 0, 0, _kernel.factory.width, _kernel.factory.height );
			var l_context2d:CanvasRenderingContext2D = _pauseSnapshot.cacheCanvas.getContext("2d");
			if ( l_context2d != null )
			{
				var i:Int = 1;
				var l_steps:Array<Float> = [ _pauseBlur, _pauseBlur * .55, _pauseBlur * .35];
				l_context2d.globalAlpha = .25;
				for ( i in l_steps )
				{
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, -i, -i );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, i, -i );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, -i, i );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, i, i );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, 0, -i );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, -i, 0 );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, i, 0 );
					l_context2d.drawImage( _pauseSnapshot.cacheCanvas, 0, i );
				}
			}
			untyped _kernel.scenes.scene.view.context.uncache();
			_pauseContext.addChildAt( _pauseSnapshot, 0 );
		}
		catch ( l_error:Dynamic ) {}
	}*/
}