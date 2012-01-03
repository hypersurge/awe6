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
import awe6.core.Process;
import awe6.core.View;
import awe6.interfaces.IEncrypter;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPreloader;
import awe6.interfaces.IView;
import haxe.Timer;

/**
 * The APreloader class provides a minimalist abstract implementation of the IPreloader interface.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class APreloader extends Process, implements IPreloader
{
	public var view( __get_view, null ):IView;
	public var progress( __get_progress, null ):Float;
	
	private var _assets:Array<String>;
	private var _isDecached:Bool;
	private var _encrypter:IEncrypter;
	private var _currentProgress:Float;
	private var _currentAsset:Int;
	private var _isComplete:Bool;
	
	public function new( p_kernel:IKernel, p_assets:Array<String>, ?p_isDecached:Bool = false ) 
	{
		_assets = p_assets;
		_isDecached = p_isDecached;
		super( p_kernel );
	}
	
	override private function _init():Void
	{
		super._init();
		progress = 0;
		if ( view == null )
		{
			view = new View( _kernel );
		}
		_encrypter = _tools;
		_currentProgress = 0;
		_currentAsset = 0;
		_isComplete = false;
		if ( _assets.length > 0 )
		{
			_next();
		}
	}
	
	private function _next():Void
	{
		_currentAsset++;
		if ( _currentAsset > _assets.length )
		{
			if ( !_isComplete )
			{
				Timer.delay( dispose, 100 ); // delayed because some assets aren't available instantly (?)
				_isComplete = true;
			}
			return;
		}
		else
		{
			_nativeLoad( _assets[_currentAsset - 1] );
		}
		_currentProgress = 0;
	}
	
	private function _nativeLoad( p_url:String ):Void
	{
		//override me
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _assets.length == 0 )
		{
			_kernel.onPreloaderComplete( this );
		}
		view.isVisible = _age > 500;
	}
	
	override private function _disposer():Void 
	{
		view.dispose();
		_nativeDisposer();
		super._disposer();
	}
	
	private function _nativeDisposer():Void
	{
		//overrride me
	}
	
	private function __get_view():IView
	{
		return view;
	}
	
	private function __get_progress():Float
	{
		return progress;
	}
}
