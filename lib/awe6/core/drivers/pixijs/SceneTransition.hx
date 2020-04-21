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

package awe6.core.drivers.pixijs;
import awe6.core.drivers.ASceneTransition;
import pixi.core.Pixi.RendererType;
import pixi.core.Pixi.ScaleModes;
import pixi.core.display.DisplayObject;
import pixi.core.math.shapes.Rectangle;
import pixi.core.renderers.webgl.Renderer;
import pixi.core.sprites.Sprite;

/**
 * This SceneTransition class provides PixiJS target overrides.
 * @author	Robert Fell
 */
class SceneTransition extends ASceneTransition
{
	override private function _init():Void 
	{
		super._init();
		var l_renderer:Renderer = untyped _kernel._renderer;
		var l_displayObject:DisplayObject = untyped _kernel.scenes.scene.view.context;
		var l_bounds = l_displayObject.getBounds();
		if ( ( l_renderer != null ) && ( l_displayObject != null ) )
		{
			var l_rectangle = new Rectangle( 0, 0, _kernel.factory.width, _kernel.factory.height );
			var l_texture = l_renderer.generateTexture( l_displayObject, ScaleModes.DEFAULT, 1, l_rectangle );
			var l_sprite:Sprite = new Sprite( l_texture );
			_context.interactive = false;
			_context.addChild( l_sprite );
		}
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( !isDisposed )
		{
			_context.alpha = 1 - progress;
		}
	}
}

