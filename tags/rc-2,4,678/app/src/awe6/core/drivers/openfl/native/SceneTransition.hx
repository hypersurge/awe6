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

package awe6.core.drivers.openfl.native;
import awe6.core.drivers.ASceneTransition;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.filters.BlurFilter;

/**
 * This SceneTransition class provides openfl-native target overrides.
 * @author	Robert Fell
 */
class SceneTransition extends ASceneTransition
{
	private var _blurFilter:BlurFilter;

	override private function _init():Void 
	{
		super._init();
		var l_bitmapData:BitmapData = new BitmapData( _kernel.factory.width, _kernel.factory.height, true, _kernel.factory.bgColor );
		try
		{
			var l_view:View = cast _kernel.scenes.scene.view;
			l_bitmapData.draw( l_view.context );
		}
		catch ( l_error:Dynamic ) {}
		_blurFilter = new BlurFilter( 0, 0, 1 );
		_context.filters = [ _blurFilter ];
		_context.mouseEnabled = false;
		_context.addChild( new Bitmap( l_bitmapData ) );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( !isDisposed )
		{
			_context.alpha = 1 - progress;
			_blurFilter = new BlurFilter( progress * 32, progress * 32, 1 );
			_context.filters = [ _blurFilter ];
		}
	}
	
}

