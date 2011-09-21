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

package demo;
import awe6.Types;
import demo.scenes.Game;
import demo.scenes.Intro;
import demo.scenes.Results;
import flash.display.BitmapData;
import flash.display.Sprite;
import flash.filters.GlowFilter;
import haxe.Resource;

class Factory extends AFactory
{
	private var _assetManager:AssetManager;
	
	override private function _init():Void
	{		
		super._init();
		id = "awe6Demo";
		version = "0.4.200"; // major.minor.revision ... I recommend you use your SVN revision # for revision version, and automatically insert it into this file :-)
		author = "Robert Fell";
		isDecached = true;
		width = 600;
		height = 400;
		bgColor = 0xFFFFFF;
		secret = "ThereAreWaysToConcealThis";
		startingSceneType = EScene.INTRO;
		targetFramerate = 20;
		isFixedUpdates = false;
		#if air
		width = 480;
		height = 320;
		var l_config:String = haxe.Resource.getString( "config" );
		_configUrl = l_config.split( "<assets>" )[0] + l_config.split( "</assets>" )[1];
		isDebug = true;
		#end
	}
	
	override public function createAssetManager():IAssetManagerProcess
	{
		if ( _assetManager == null )
		{
			_assetManager = new AssetManager( _kernel );
		}
		return _assetManager;
	}
	
	override public function createOverlay():IOverlayProcess
	{
		var l_overlayBackground:BitmapData = new awe6.extras.gui.BitmapDataScale9( _assetManager.overlayBackground, 110, 20, 550, 350, width, height, true );
		var l_overlay:Overlay = new Overlay( _kernel, l_overlayBackground, _assetManager.backUp, _assetManager.backOver, _assetManager.muteUp, _assetManager.muteOver, _assetManager.unmuteUp, _assetManager.unmuteOver, _assetManager.pauseUp, _assetManager.pauseOver, _assetManager.unpauseUp, _assetManager.unpauseOver );
		var l_width:Int = 30;
		var l_x:Int = width - 10 - ( 3 * l_width );
		var l_y:Int = height - 30;
		l_overlay.positionButton( EOverlayButton.BACK, l_x, l_y );
		l_overlay.positionButton( EOverlayButton.PAUSE, l_x += l_width, l_y );
		l_overlay.positionButton( EOverlayButton.UNPAUSE, l_x, l_y );
		l_overlay.positionButton( EOverlayButton.MUTE, l_x += l_width, l_y );
		l_overlay.positionButton( EOverlayButton.UNMUTE, l_x, l_y );
		return l_overlay;
	}	
	
	override public function createPreloader():IPreloader
	{
		return new Preloader( _kernel, _getAssetUrls(), isDecached );
	}
	
	override public function createSession( ?id:String ):ISession
	{		
		return new Session( _kernel );
	}
	
	override public function createScene( type:EScene ):IScene
	{
		switch ( type )
		{
			case INTRO : return new Intro( _kernel, type );
			case GAME : return new Game( _kernel, type );
			case RESULTS : return new Results( _kernel, type );
			default :
		}
		return super.createScene( type );
	}	
	
	override public function createTextStyle( ?type:ETextStyle ):ITextStyle
	{
		if ( type == null )
		{
			type = ETextStyle.BODY;
		}
		var l_fontName:String = _kernel.getConfig( "settings.font.name" );
		var l_result:TextStyle = new TextStyle( l_fontName, 12, 0xFFFFFF, false, false, ETextAlign.CENTER, 0, 0, 0, [ new GlowFilter( 0x020382, 1, 4, 4, 5, 2 ) ] );
		l_result.size = switch ( type )
		{
			case ETextStyle.HEADLINE : 24;
			case ETextStyle.OVERSIZED : 72;
			case ETextStyle.SUBHEAD : 18;
			case ETextStyle.BUTTON : 10;
			case ETextStyle.SMALLPRINT : 6;
			default : 12;
		}
		return l_result;
	}
	
	override public function getBackSceneType( type:EScene ):EScene
	{
		switch ( type )
		{
			case INTRO : return null;
			case GAME : return EScene.INTRO;
			case RESULTS : return EScene.INTRO;
			default :
		}
		return super.getBackSceneType( type );
	}	
	
	override public function getNextSceneType( type:EScene ):EScene
	{
		switch ( type )
		{
			case INTRO : return EScene.GAME;
			case GAME : return EScene.RESULTS;
			case RESULTS : return EScene.INTRO;
			default :
		}
		return super.getNextSceneType( type );
	}	
	
}


