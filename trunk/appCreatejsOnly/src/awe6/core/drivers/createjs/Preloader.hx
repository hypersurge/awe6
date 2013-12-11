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
import awe6.core.drivers.APreloader;
import createjs.easeljs.Event;
import createjs.preloadjs.LoadQueue;

/**
 * This Preloader class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Preloader extends APreloader
{
	private var _loadQueue:LoadQueue;
	private var _context:Context;
	
	override private function _init():Void
	{
		super._init();
		_context = new Context();
		view = new View( _kernel, _context );
		_loadQueue = new LoadQueue( true, "" );
		for ( i in _assets )
		{
			_loadQueue.loadFile( i );
		}
		_loadQueue.addEventListener( "complete", _onComplete );
		_loadQueue.load();
	}
	
	override private function _next():Void
	{
		// intentionally resets contents of super._next
	}
	
	override private function get_progress():Float
	{
		return _loadQueue.progress;
	}
	
	private function _onComplete( p_event:Event ):Void
	{
		if ( _isComplete ) return;
		_kernel.onPreloaderComplete( this );
		_isComplete = true;
	}
	
}
