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

package awe6.core.drivers;
import awe6.core.Context;
import awe6.core.Entity;
import awe6.interfaces.IKernel;
import awe6.interfaces.ISceneTransition;

/**
 * The ASceneTransition class provides a minimalist implementation of the ISceneTransition interface.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class ASceneTransition extends Entity, implements ISceneTransition
{
	public var progress( _get_progress, null ):Float;
	
	private var _duration:Int;
	private var _context:Context;

	public function new( p_kernel:IKernel, ?p_duration:Int = 500 ) 
	{
		_duration = p_duration;
		_context = new Context();
		super( p_kernel, "SCENE_TRANSITION", _context );
	}
	
	override private function _init():Void 
	{
		super._init();
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _age > _duration )
		{
			dispose();
		}
	}
	
	public function getDuration( ?p_asTime:Bool = true ):Float
	{
		return p_asTime ? _duration : _duration / ( 1000 / _kernel.getFramerate() );
	}
	
	private function _get_progress():Float
	{
		return _tools.limit( _age / _duration, 0, 1 );
	}
}

