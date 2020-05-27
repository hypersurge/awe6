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
import awe6.interfaces.IKernel;
import js.Browser;
#if (pixijs >= "5.0.0")
typedef WebGLRenderer = pixi.core.renderers.webgl.Renderer;
#else
typedef WebGLRenderer = pixi.core.renderers.webgl.WebGLRenderer;
#end
	
/**
 * Detects device operating system. Thanks to System.js by MrDoob, Modernizr, Richard Davey
 * <p>Use sparingly, e.g. in Factory configuration or Kernel methods.</p>
 * <p>We are avoiding browser detection or feature detection; this should be handled per entity to allow substitution.</p>
 * @author	Mr.doob
 * @author	Modernizr
 * @author	Richard Davey
 * @author	Robert Fell
 */
@:keep class System
{
	public var userAgent( default, null ):String;
	public var isAndroid( default, null ):Bool;
	public var isChromeOs( default, null ):Bool;
	public var isIos( default, null ):Bool;
	public var isLinux( default, null ):Bool;
	public var isMacOs( default, null ):Bool;
	public var isSilk( default, null ):Bool;
	public var isKaiOs( default, null ):Bool;
	public var isCrosswalk( default, null ):Bool;
	public var isCordova( default, null ):Bool;
	public var isWindows( default, null ):Bool;
	public var isWindowsPhone( default, null ):Bool;
	public var isDesktop( default, null ):Bool;
	public var isWebGL( get, null ):Bool;
	public var isFullScreenSupported( get, null ):Bool;
	public var isRotated:Bool;
	
	private var _kernel:IKernel;
	
	public function new( p_kernel:IKernel )
	{
		_kernel = p_kernel;
		isRotated = false;
		isAndroid = isChromeOs = isIos = isLinux = isMacOs = isSilk = isWindows = isWindowsPhone = isDesktop = false;
        userAgent = Browser.navigator.userAgent;
		isSilk = ~/Silk/.match( userAgent ); // standalone test because Silk coexists
		isKaiOs = ~/KAIOS/.match( userAgent ); // standalone test because KaiOS coexists
		isCrosswalk = ~/Crosswalk/.match( userAgent );
		isCordova = untyped Browser.window.cordova != null;
        if ( ~/Android/.match( userAgent ) )
        {
            isAndroid = true;
        }
        else if ( ~/CrOS/.match( userAgent ) )
        {
            isChromeOs = true;
        }
        else if ( ~/iP[ao]d|iPhone/i.match( userAgent ) )
        {
            isIos = true;
        }
        else if ( ~/Linux/.match( userAgent ) )
        {
            isLinux = true;
        }
        else if ( ~/Mac OS/.match( userAgent ) )
        {
            isMacOs = true;
        }
        else if ( ~/Windows/.match( userAgent ) )
        {
            isWindows = true;
            if ( ~/Windows Phone/i.match( userAgent ) )
            {
                isWindowsPhone = true;
            }
        }
        if ( isWindows || isMacOs || ( isLinux && !isSilk ) )
        {
            isDesktop = true;
        }
        if ( isWindowsPhone )
        {
            isDesktop = false;
        }
	}
	
	private function get_isWebGL():Bool
	{
		var l_renderer = untyped _kernel._renderer;
		if ( l_renderer == null ) return false;
		return Std.is( l_renderer, WebGLRenderer ); 
	}
	
	private function get_isFullScreenSupported():Bool
	{
		try
		{
			var l_element = Browser.document.documentElement;
			if ( l_element.requestFullscreen != null ) return true;
			if ( untyped l_element.msRequestFullscreen != null ) return true;
			if ( untyped l_element.mozRequestFullScreen != null ) return true;
			if ( untyped l_element.webkitRequestFullscreen != null ) return true;
		}
		catch ( p_error:Dynamic ) {}
		return false;
	}
	
	public function requestFullScreen():Void
	{
		// we can't guarantee the result, hence it is a request
		try
		{
			var l_element = Browser.document.documentElement;
			if ( l_element.requestFullscreen != null )
			{
				l_element.requestFullscreen();
			}
			else if ( untyped l_element.msRequestFullscreen != null )
			{
				untyped l_element.msRequestFullscreen();
			}
			else if ( untyped l_element.mozRequestFullScreen != null )
			{
				untyped l_element.mozRequestFullScreen();
			}
			else if ( untyped l_element.webkitRequestFullscreen != null )
			{
				untyped l_element.webkitRequestFullscreen();
			}
		}
		catch ( p_error:Dynamic )
		{
		}
	}
	
	public function requestExitFullScreen():Void
	{
		// we can't guarantee the result, hence it is a request
		try
		{
			var l_document = Browser.document;
			if ( l_document.exitFullscreen != null )
			{
				l_document.exitFullscreen();
			}
			else if ( untyped l_document.msExitFullscreen != null )
			{
				untyped l_document.msExitFullscreen();
			}
			else if ( untyped l_document.mozCancelFullScreen != null )
			{
				untyped l_document.mozCancelFullScreen();
			}
			else if ( untyped l_document.webkitExitFullscreen != null )
			{
				untyped l_document.webkitExitFullscreen();
			}
		}
		catch ( p_error:Dynamic )
		{
		}
	}
	
	public function requestLockScreen():Void
	{
		if ( isDesktop )
		{
			return;
		}
		// we can't guarantee the result, hence it is a request
		try
		{
			var l_orientation:String = _kernel.factory.width < _kernel.factory.height ? "portrait-primary" : "landscape-primary";
			var l_screen = Browser.window.screen;
			if ( untyped l_screen.orientation != null )
			{
				if ( untyped l_screen.orientation.lock != null )
				{
					untyped l_screen.orientation.lock( untyped l_orientation );
				}
				else if ( untyped l_screen.orientation.lockOrientation != null )
				{
					untyped l_screen.orientation.lockOrientation( l_orientation );
				}
			}
			else if ( untyped l_screen.mozOrientation != null )
			{
				untyped l_screen.mozLockOrientation( l_orientation );
			}
			else if ( untyped l_screen.msOrientation != null )
			{
				untyped l_screen.msLockOrientation( l_orientation );
			}
		}
		catch ( p_error:Dynamic )
		{
		}
	}
	
	public function requestDeviceOrientation():Void
	{
		if ( isDesktop )
		{
			return;
		}
		// we can't guarantee the result, hence it is a request
		try
		{
			if ( ( untyped Browser.window.DeviceMotionEvent != null ) && ( untyped Browser.window.DeviceMotionEvent.requestPermission != null ) )
			{
				untyped Browser.window.DeviceMotionEvent.requestPermission();
			}
		}
		catch ( p_error:Dynamic )
		{
		}
	}
}
