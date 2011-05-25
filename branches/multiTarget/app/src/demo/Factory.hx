/*
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
import awe6.interfaces.ILogger;
import awe6.interfaces.IOverlayProcess;
import awe6.interfaces.IPreloader;
import awe6.interfaces.IScene;
import awe6.interfaces.ISceneTransition;
import awe6.interfaces.ISession;
import awe6.interfaces.ITextStyle;
#if flash
import assets.BackOver;
import assets.BackUp;
import assets.MuteOver;
import assets.MuteUp;
import assets.OverlayBackground;
import assets.PauseOver;
import assets.PauseUp;
import assets.UnmuteOver;
import assets.UnmuteUp;
import assets.UnpauseOver;
import assets.UnpauseUp;
#end
import demo.scenes.Game;
import demo.scenes.Intro;
import demo.scenes.Results;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;
import flash.filters.GlowFilter;
import haxe.Resource;

class Factory extends AFactory
{
	#if compileSwc
	public function new( sprite:Sprite, isDebug:Bool = true )
	{
		super( sprite, isDebug, Resource.getString( "config.xml" ) );
	}
	#end

	override private function _init():Void
	{		
		super._init();
		id = "awe6Demo";
		version = "0.0.1"; // major.minor.revision ... I recommend you use your SVN revision # for revision version, and automatically insert it into this file :-)
		author = "Robert Fell";
		isDecached = true;
		#if js
		isDecached = false;
		#end
		width = 600;
		height = 400;
		bgColor = 0x000000;
		startingSceneType = EScene.INTRO;
		targetFramerate = 20;
	}
	
/*	override public function createPreloader():IPreloader
	{
		return new Preloader( _kernel, _getAssetUrls(), isDecached );
	}*/
	
	override public function createSession( ?ID:String ):ISession
	{		
		return new Session( _kernel );
	}
	
	override public function createOverlay():IOverlayProcess
	{
		// rather than use getAsset, better form is to use extern classes, or create an empty BitmapData and copypixel data from the getAsset over the top (guarantees a match)
		#if flash
		var l_background:BitmapData = new OverlayBackground();
		var l_backUp:BitmapData = new BackUp();
		var l_backOver:BitmapData = new BackOver();
		var l_muteUp:BitmapData = new MuteUp();
		var l_muteOver:BitmapData = new MuteOver();
		var l_unmuteUp:BitmapData = new UnmuteUp();
		var l_unmuteOver:BitmapData = new UnmuteOver();
		var l_pauseUp:BitmapData = new PauseUp();
		var l_pauseOver:BitmapData = new PauseOver();
		var l_unpauseUp:BitmapData = new UnpauseUp();
		var l_unpauseOver:BitmapData = new UnpauseOver();
		#elseif ( js || cpp )
		var l_folder:String = "../../assetsDeployed/demo/gui/LIBRARY/overlay/";
		var l_backUp:BitmapData = _getBitmapData( l_folder + "buttons/BackUp.png" );
		var l_backOver:BitmapData = _getBitmapData( l_folder + "buttons/BackOver.png" );
		var l_muteUp:BitmapData = _getBitmapData( l_folder + "buttons/MuteUp.png" );
		var l_muteOver:BitmapData = _getBitmapData( l_folder + "buttons/MuteOver.png" );
		var l_unmuteUp:BitmapData = _getBitmapData( l_folder + "buttons/UnmuteUp.png" );
		var l_unmuteOver:BitmapData = _getBitmapData( l_folder + "buttons/UnmuteOver.png" );
		var l_pauseUp:BitmapData = _getBitmapData( l_folder + "buttons/PauseUp.png" );
		var l_pauseOver:BitmapData = _getBitmapData( l_folder + "buttons/PauseOver.png" );
		var l_unpauseUp:BitmapData = _getBitmapData( l_folder + "buttons/UnpauseUp.png" );
		var l_unpauseOver:BitmapData = _getBitmapData( l_folder + "buttons/UnpauseOver.png" );
		var l_background:BitmapData = _getBitmapData( l_folder + "OverlayBackground.png", 600, 400 );
		#end
		
		var l_overlay:Overlay = new Overlay( _kernel, l_background, l_backUp, l_backOver, l_muteUp, l_muteOver, l_unmuteUp, l_unmuteOver, l_pauseUp, l_pauseOver, l_unpauseUp, l_unpauseOver );
		var l_width:Int = 40;
		var l_x:Int = 599 - ( 3 * l_width );
		var l_y:Int = 400 - 28;
		l_overlay.positionButton( EOverlayButton.BACK, l_x, l_y );
		l_overlay.positionButton( EOverlayButton.PAUSE, l_x += l_width, l_y );
		l_overlay.positionButton( EOverlayButton.UNPAUSE, l_x, l_y );
		l_overlay.positionButton( EOverlayButton.MUTE, l_x += l_width, l_y );
		l_overlay.positionButton( EOverlayButton.UNMUTE, l_x, l_y );
		return l_overlay;
	}
	
	#if ( js || cpp )
	private function _getBitmapData( id:String, ?width:Int = 40, ?height:Int = 28 ):BitmapData
	{
		#if js
		var l_result:BitmapData = new BitmapData( width, height, true );
		l_result.LoadFromFile( id, flash.display.LoaderInfo.create( null ) );
		return l_result;
		#end
		#if cpp
		return BitmapData.load( id );
		#end
	}
	#end
	
	override public function createTextStyle( ?type:ETextStyle ):ITextStyle
	{
		if ( type == null ) type = ETextStyle.BODY;
		var l_fontName:String = _kernel.getConfig( "settings.font.name" );
		var l_result:TextStyle = new TextStyle( l_fontName, 12, 0xFFFFFF, false, false, ETextAlign.CENTER, 0, 0, 0, [ new GlowFilter( 0x000000, 1, 4, 4, 3, 2 ) ] );
		l_result.size = switch ( type )
		{
			case ETextStyle.HEADLINE : 36;
			case ETextStyle.OVERSIZED : 72;
			case ETextStyle.SUBHEAD : 18;
			case ETextStyle.BUTTON : 10;
			case ETextStyle.SMALLPRINT : 6;
			default : 12;
		}
		return l_result;
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


