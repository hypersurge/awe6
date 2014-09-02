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
import js.Browser;
	
/**
 * Detects device operating system. Thanks to System.js by MrDoob, Modernizr, Richard Davey
 * <p>Use sparingly, e.g. in Factory configuration or Kernel methods.</p>
 * <p>We are avoiding browser detection or feature detection; this should be handled per entity to allow substitution.</p>
 * @author	Mr.doob
 * @author	Modernizr
 * @author	Richard Davey
 * @author	Robert Fell
 */
class System
{
	public var userAgent( default, null ):String;
	public var isAndroid( default, null ):Bool;
	public var isChromeOs( default, null ):Bool;
	public var isIos( default, null ):Bool;
	public var isLinux( default, null ):Bool;
	public var isMacOs( default, null ):Bool;
	public var isSilk( default, null ):Bool;
	public var isWindows( default, null ):Bool;
	public var isWindowsPhone( default, null ):Bool;
	public var isDesktop( default, null ):Bool;
	public var isRotated:Bool;
	
	public function new()
	{
		isRotated = false;
		isAndroid = isChromeOs = isIos = isLinux = isMacOs = isSilk = isWindows = isWindowsPhone = isDesktop = false;
		
        userAgent = Browser.navigator.userAgent;
		isSilk = ~/Silk/.match( userAgent ); // standalone test because Silk coexists
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
}
