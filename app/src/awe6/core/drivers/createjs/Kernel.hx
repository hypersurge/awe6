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
import awe6.core.drivers.AKernel;
import createjs.easeljs.Shape;
import createjs.easeljs.Stage;
import createjs.easeljs.Ticker;
import js.Browser;
import js.html.Event;

/**
 * This Kernel class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	public var system( default, null ):_HelperSystem;
	
	private var _stage:Stage;
	private var _scaleX:Float;
	private var _scaleY:Float;
	private var _prevWindowSize:String;
	private var _isRotated:Bool;

	override private function _driverGetIsLocal():Bool
	{
		var l_result:Bool = switch( Browser.window.location.protocol )
		{
			case "http:", "https:" : false;
			default : true;
		}
		return l_result;
	}
	
	override private function _driverInit():Void
	{
		system = new _HelperSystem();
		_scaleX = _scaleY = 1;
		_stage = _context.getStage();
		_stage.canvas.style.setProperty( "-webkit-tap-highlight-color", "rgba( 255, 255, 255, 0 )", "" ); // removes flashing on tap from Android Browser
		_stage.tickOnUpdate = false;
		_stage.mouseEnabled = false;
		_stage.canvas.width = factory.width;
		_stage.canvas.height = factory.height;
		var l_shape:Shape = new Shape();
		l_shape.graphics.beginFill( "#" + StringTools.hex( factory.bgColor, 8 ).substr( 2, 6 ) );
		l_shape.graphics.drawRect( 0, 0, factory.width, factory.height );
		l_shape.graphics.endFill();
		_stage.addChildAt( l_shape, 0 );
		Ticker.setFPS( factory.targetFramerate );
		Ticker.timingMode = Ticker.RAF_SYNCHED;
		Ticker.addEventListener( "tick", _onEnterFrame );
	}

	override private function _driverDisposer():Void
	{
	}
	
	private function _onEnterFrame( p_event:Event ):Void
	{
		_updates++;
		_updater( 0 ); // avoid isActive
		_stage.update();
		var l_windowSize:String = Browser.window.innerWidth + ":" + Browser.window.innerHeight;
		if ( _prevWindowSize != l_windowSize )
		{
			_driverSetIsFullScreen( isFullScreen );
		}
	}
	
	override private function _driverSetIsEyeCandy( p_value:Bool ):Void
	{
	}
	
	override private function _driverSetIsFullScreen( p_value:Bool ):Void
	{
		_prevWindowSize = Browser.window.innerWidth + ":" + Browser.window.innerHeight;
		_scaleX = _scaleY = 1;
		var l_factoryWidth:Int = factory.width;
		var l_factoryHeight:Int = factory.height;
		var l_windowWidth:Int = Browser.window.innerWidth;
		var l_windowHeight:Int = Browser.window.innerHeight;
		var l_isFactoryPortait:Bool = l_factoryWidth < l_factoryHeight;
		var l_isDevicePortrait:Bool = l_windowWidth < l_windowHeight;
		system.isRotated = !system.isDesktop && ( l_isFactoryPortait != l_isDevicePortrait );
		var l_marginX:Float = 0;
		var l_marginY:Float = 0;
		if ( p_value )
		{
			var l_scale:Float = Math.min( l_windowWidth / l_factoryWidth, l_windowHeight / l_factoryHeight );
			switch( factory.fullScreenType )
			{
				case DISABLED, NO_SCALE, SUB_TYPE( _ ) :
					null;
				case SCALE_ASPECT_RATIO_IGNORE :
					_scaleX = l_windowWidth / l_factoryWidth;
					_scaleY = l_windowHeight / l_factoryHeight;
				case SCALE_ASPECT_RATIO_PRESERVE :
					_scaleX = _scaleY = l_scale;
				case SCALE_NEAREST_MULTIPLE :
					if ( l_scale < .5 )
					{
						l_scale = .25;
					}
					else if ( l_scale < 1 )
					{
						l_scale = .5;
					}
					else
					{
						l_scale = Math.floor( l_scale );
					}
					_scaleX = _scaleY = l_scale;
			}
			l_marginX = Math.round( ( l_windowWidth - ( l_factoryWidth * _scaleX ) ) / 2 );
			l_marginY = Math.round( ( l_windowHeight - ( l_factoryHeight * _scaleY ) ) / 2 );
		}
		_stage.canvas.style.setProperty( "width", l_factoryWidth * _scaleX + "px", "" );
		_stage.canvas.style.setProperty( "height", l_factoryHeight * _scaleY + "px", "" );
		_stage.canvas.style.setProperty( "margin-left", l_marginX + "px", "" );
		_stage.canvas.style.setProperty( "margin-top", l_marginY + "px", "" );
		// scrollTo would go here, but it doesn't work anymore!
	}
	
}

/**
 * Detects device operating system. Thanks to System.js by MrDoob, Modernizr, Richard Davey
 * <p>Use sparingly, e.g. in Factory configuration or Kernel methods.</p>
 * <p>We are avoiding browser detection or feature detection; this should be handled per entity to allow substitution.</p>
 * @author	Mr.doob
 * @author	Modernizr
 * @author	Richard Davey
 * @author	Robert Fell
 */
private class _HelperSystem
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
