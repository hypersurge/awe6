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
import awe6.core.drivers.AKernel;
import awe6.interfaces.EOverlayButton;
import haxe.Timer;
import js.Browser;
import js.html.CanvasElement;
import js.html.Event;
import pixi.core.ticker.Ticker;
#if (pixijs >= "5.0.0")
private typedef Detector = pixi.core.Pixi;
private typedef AbstractRenderer = pixi.core.renderers.AbstractRenderer;
#else
private typedef Detector = pixi.core.renderers.Detector;
private typedef AbstractRenderer = pixi.core.renderers.SystemRenderer;
#end

/**
 * This Kernel class provides PixiJS target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	public var system( default, null ):System;
	
	private var _canvas:CanvasElement;
	private var _ticker:Ticker;
	private var _timeOfLastRender:Int;
	private var _renderer:AbstractRenderer;
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
		_canvas = cast( factory, Factory ).canvas;
		_renderer = untyped Detector.autoDetectRenderer( { view: _canvas, backgroundColor: factory.bgColor, width: factory.width, height: factory.height, forceCanvas: isLocal || ( _canvas.getAttribute( "forceCanvas" ) == "true" ) } ); //  it's ok for 4, 5
		_canvas.addEventListener( "contextmenu", _onContextMenu, false );
		Browser.window.addEventListener( "unload", _onUnload );
		_ticker = Ticker.shared;
		_ticker.add( _onEnterFrame );
		_timeOfLastRender = Std.int( Date.now().getTime() );
	}
	
	private function _onUnload( p_event:Event ):Void
	{
		Browser.window.removeEventListener( "unload", _onUnload );
		session.save();
	}
	
	private function _onContextMenu( p_event:Event ):Void
	{
		p_event.preventDefault();
		p_event.stopImmediatePropagation();
		if ( overlay != null )
		{
			Timer.delay( overlay.activateButton.bind( EOverlayButton.PAUSE ), 100 );
		}
	}

	override private function _driverDisposer():Void
	{
		_canvas.removeEventListener( "contextmenu", _onContextMenu );
	}
	
	private function _onEnterFrame():Void
	{
		var l_now:Int = Std.int( Date.now().getTime() );
		var l_delta:Int = l_now - _timeOfLastRender;
		var l_interval = Std.int( 1000 / factory.targetFramerate );
		if ( l_delta < l_interval ) return;
		_timeOfLastRender = l_now - ( l_delta % l_interval );
		_updates++;
		_updater( 0 ); // avoid isActive
		untyped _renderer.render( _context ); // it's ok for 4, 5, WebGL, Canvas
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
				case DISABLED, NO_SCALE :
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
				case SUB_TYPE( p_type ) :
					if ( ( p_type.bleedWidth != null ) && ( p_type.bleedHeight != null ) )
					{
						var l_preserveWidth:Int = l_factoryWidth - ( Std.parseInt( p_type.bleedWidth + '' ) * 2 );
						var l_preserveHeight:Int = l_factoryHeight - ( Std.parseInt( p_type.bleedHeight + '' ) * 2 );
						var l_innerScale:Float = Math.min( l_windowWidth / l_preserveWidth, l_windowHeight / l_preserveHeight );
						_scaleX = _scaleY = l_innerScale;
					}
			}
			l_marginX = Math.round( ( l_windowWidth - ( l_factoryWidth * _scaleX ) ) / 2 );
			l_marginY = Math.round( ( l_windowHeight - ( l_factoryHeight * _scaleY ) ) / 2 );
		}
		_canvas.style.setProperty( "width", Math.round( l_factoryWidth * _scaleX ) + "px", "" );
		_canvas.style.setProperty( "height", Math.round( l_factoryHeight * _scaleY ) + "px", "" );
		_canvas.style.setProperty( "margin-left", l_marginX + "px", "" );
		_canvas.style.setProperty( "margin-top", l_marginY + "px", "" );
	}
	
}
