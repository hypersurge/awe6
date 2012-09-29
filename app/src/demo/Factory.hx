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
import awe6.core.AFactory;
import awe6.core.Overlay;
import awe6.core.TextStyle;
import awe6.interfaces.EOverlayButton;
import awe6.interfaces.EScene;
import awe6.interfaces.ETextAlign;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IAssetManagerProcess;
import awe6.interfaces.IOverlayProcess;
import awe6.interfaces.IPreloader;
import awe6.interfaces.IScene;
import awe6.interfaces.ISession;
import awe6.interfaces.ITextStyle;
import demo.scenes.Game;
import demo.scenes.Intro;
import demo.scenes.Results;

class Factory extends AFactory {
	private var _assetManager:AssetManager;
	
	override private function _configurer( ?p_isPreconfig:Bool = false ):Void {
		id = "awe6Demo";
		version = "0.6.380"; // major.minor.revision ... I recommend you use your SVN revision # for revision version, and automatically insert it into this file :-)
		author = "Robert Fell";
		isDecached = true;
		width = 600;
		height = 400;
		bgColor = 0xFFFFFF;
		startingSceneType = EScene.INTRO;
		targetFramerate = 60;
		isFixedUpdates = false;
	}
	
	override public function createAssetManager():IAssetManagerProcess {
		if ( _assetManager == null ) {
			_assetManager = new AssetManager( _kernel );
		}
		return _assetManager;
	}
	
	override public function createOverlay():IOverlayProcess {
		var l_width:Int = 30;
		var l_overlay:Overlay = new Overlay( _kernel, l_width, l_width, _assetManager.overlayBackground, _assetManager.backUp, _assetManager.backOver, _assetManager.muteUp, _assetManager.muteOver, _assetManager.unmuteUp, _assetManager.unmuteOver, _assetManager.pauseUp, _assetManager.pauseOver, _assetManager.unpauseUp, _assetManager.unpauseOver );
		var l_x:Int = width - 10 - ( 3 * l_width );
		var l_y:Int = height - l_width;
		l_overlay.positionButton( EOverlayButton.BACK, l_x, l_y );
		l_overlay.positionButton( EOverlayButton.PAUSE, l_x += l_width, l_y );
		l_overlay.positionButton( EOverlayButton.UNPAUSE, l_x, l_y );
		l_overlay.positionButton( EOverlayButton.MUTE, l_x += l_width, l_y );
		l_overlay.positionButton( EOverlayButton.UNMUTE, l_x, l_y );
		return l_overlay;
	}	
	
	override public function createPreloader():IPreloader {
		return new Preloader( _kernel, _getAssetUrls(), isDecached );
	}
	
	override public function createSession( ?p_id:String ):ISession {
		return new Session( _kernel, p_id );
	}
	
	override public function createScene( p_type:EScene ):IScene {
		switch ( p_type ) {
			case INTRO :
				return new Intro( _kernel, p_type );
			case GAME :
				return new Game( _kernel, p_type );
			case RESULTS :
				return new Results( _kernel, p_type );
			default :
				null;
		}
		return super.createScene( p_type );
	}
	
	override public function createTextStyle( ?p_type:ETextStyle ):ITextStyle {
		if ( p_type == null ) {
			p_type = ETextStyle.BODY;
		}
		var l_fontName:String = _assetManager.font.fontName;
		var l_result:TextStyle = new TextStyle( l_fontName, 12, 0xFFFFFF, false, false, ETextAlign.CENTER, 0, 0, 0, [ new flash.filters.GlowFilter( 0x020382, 1, 4, 4, 5, 2 ) ] );
		l_result.size = switch ( p_type ) {
			case ETextStyle.HEADLINE :
				24;
			case ETextStyle.OVERSIZED :
				72;
			case ETextStyle.SUBHEAD :
				18;
			case ETextStyle.BUTTON :
				12;
			case ETextStyle.SMALLPRINT :
				6;
			default :
				12;
		}
		return l_result;
	}
	
	override public function getBackSceneType( p_type:EScene ):EScene {
		switch ( p_type ) {
			case INTRO :
				return null;
			case GAME :
				return EScene.INTRO;
			case RESULTS :
				return EScene.INTRO;
			default :
				null;
		}
		return super.getBackSceneType( p_type );
	}	
	
	override public function getNextSceneType( p_type:EScene ):EScene {
		switch ( p_type ) {
			case INTRO :
				return EScene.GAME;
			case GAME :
				return EScene.RESULTS;
			case RESULTS :
				return EScene.INTRO;
			default :
				null;
		}
		return super.getNextSceneType( p_type );
	}	
	
}
