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

package democreatejs;
import awe6.core.APreloader;
import createjs.easeljs.Shape;

class Preloader extends APreloader
{
	private var _bg:Shape;
	private var _fg:Shape;
	
	override private function _init():Void
	{
		super._init();
		_bg = new Shape();
		_bg.graphics.beginFill( "#202020" );
		_bg.graphics.drawRect( 0, 0, 100, 10 );
		_bg.graphics.endFill();
		_fg = new Shape();
		_fg.graphics.beginFill( "#cccccc" );
		_fg.graphics.drawRect( 1, 1, 98, 8 );
		_fg.graphics.endFill();
		_bg.x = _fg.x = ( _kernel.factory.width - 100 ) * .5;
		_bg.y = _fg.y = ( _kernel.factory.height - 10 ) * .5;
		_context.addChild( _bg );
		_context.addChild( _fg );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_fg.scaleX = progress;
	}
}

