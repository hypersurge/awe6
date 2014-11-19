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
import awe6.interfaces.EOverlayButton;
import createjs.easeljs.Shape;
import createjs.easeljs.Stage;
import createjs.easeljs.Ticker;
import haxe.Timer;
import js.Browser;
import js.html.Event;

/**
 * This Kernel class provides CreateJS target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	public var system( default, null ):System;
	
	private var _stage:Stage;
	private var _stageDynamic:Dynamic;
	private var _scaleX:Float;
	private var _scaleY:Float;
	private var _prevWindowSize:String;

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
		system = new System( this );
		_scaleX = _scaleY = 1;
		_stage = _stageDynamic = _context.getStage();
		_stage.canvas.style.setProperty( "-webkit-tap-highlight-color", "rgba( 255, 255, 255, 0 )", "" ); // removes flashing on tap from Android Browser
		_stage.tickOnUpdate = false;
		_stage.mouseEnabled = false;
		_stage.canvas.width = factory.width;
		_stage.canvas.height = factory.height;
		var l_shape:Shape = new Shape();
		l_shape.graphics.beginFill( "#" + StringTools.hex( factory.bgColor, 8 ).substr( 2, 6 ) );
		l_shape.graphics.drawRect( 0, 0, factory.width, factory.height );
		l_shape.graphics.endFill();
		l_shape.cache( 0, 0, factory.width, factory.height );
		_stage.addChildAt( l_shape, 0 );
		Ticker.setFPS( factory.targetFramerate );
		Ticker.timingMode = Ticker.RAF_SYNCHED;
		Ticker.addEventListener( "tick", _onEnterFrame );
		_stage.canvas.addEventListener( "contextmenu", _onContextMenu, false );
	}
	
	private function _onContextMenu( p_event:Event ):Void
	{
		p_event.preventDefault();
		p_event.stopImmediatePropagation();
		Timer.delay( overlay.activateButton.bind( EOverlayButton.PAUSE ), 100 );
	}

	override private function _driverDisposer():Void
	{
		_stage.canvas.removeEventListener( "contextmenu", _onContextMenu );
	}
	
	private function _onEnterFrame( p_event:Event ):Void
	{
		_updates++;
		_updater( 0 ); // avoid isActive
		_stage.tickOnUpdate = isActive;
		_stageDynamic.update( p_event ); // using dynamic hack until CreateJS externs are patched to properly allow event into update
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
		_stage.canvas.style.setProperty( "width", Math.round( l_factoryWidth * _scaleX ) + "px", "" );
		_stage.canvas.style.setProperty( "height", Math.round( l_factoryHeight * _scaleY ) + "px", "" );
		_stage.canvas.style.setProperty( "margin-left", l_marginX + "px", "" );
		_stage.canvas.style.setProperty( "margin-top", l_marginY + "px", "" );
		// scrollTo hack would go here, it doesn't work on modern browsers and can cause unexpected results!?
		// if ( p_value ) Browser.window.scrollTo( 0, 1 );
	}
	
}
