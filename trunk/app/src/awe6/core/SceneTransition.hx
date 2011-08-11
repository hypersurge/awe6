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

package awe6.core;
import awe6.interfaces.IKernel;
import awe6.interfaces.ISceneTransition;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;
import flash.filters.BlurFilter;

/**
 * The SceneTransition class provides a minimalist implementation of the ISceneTransition interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class SceneTransition extends Entity, implements ISceneTransition
{
	public var progress( __get_progress, null ):Float;
	
	private var _duration:Int;
	private var _sprite:Sprite;
	private var _blurFilter:BlurFilter;

	public function new( kernel:IKernel, ?duration:Int = 500 ) 
	{
		_duration = duration;
		_sprite = new Sprite();
		super( kernel, "SCENE_TRANSITION", _sprite );
	}
	
	override private function _init():Void 
	{
		super._init();
		var l_bitmapData:BitmapData = new BitmapData( _kernel.factory.width, _kernel.factory.height, true, _kernel.factory.bgColor );
		try
		{
			var l_view:View = cast _kernel.scenes.scene.view;
			l_bitmapData.draw( l_view.sprite );
		}
		catch ( error:Dynamic )
		{
			trace( error );
		}
		_blurFilter = new BlurFilter( 0, 0, 1 );
		_sprite.filters = [ _blurFilter ];
		_sprite.mouseEnabled = false;
		_sprite.addChild( new Bitmap( l_bitmapData ) );
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( _age > _duration )
		{
			return dispose();
		}
		_sprite.alpha = 1 - progress;
		_blurFilter.blurX = _blurFilter.blurY = progress * 32;
		_sprite.filters = [ _blurFilter ];
		return;
	}
	
	public function getDuration( ?asTime:Bool = true ):Float
	{
		return asTime ? _duration : _duration / ( 1000 / _kernel.getFramerate() );
	}
	
	private function __get_progress():Float
	{
		return _tools.limit( _age / _duration, 0, 1 );
	}
}

