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
import awe6.core.AAssetManager;
import awe6.core.View;
import awe6.extras.gui.BitmapDataScale9;
import awe6.interfaces.IView;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;
import nme.Assets;

class AssetManager extends AAssetManager
{
	public var overlayBackground( default, null ):IView;
	public var backUp( default, null ):IView;
	public var backOver( default, null ):IView;
	public var muteUp( default, null ):IView;
	public var muteOver( default, null ):IView;
	public var unmuteUp( default, null ):IView;
	public var unmuteOver( default, null ):IView;
	public var pauseUp( default, null ):IView;
	public var pauseOver( default, null ):IView;
	public var unpauseUp( default, null ):IView;
	public var unpauseOver( default, null ):IView;
	public var background( default, null ):IView;
	public var sphere( default, null ):BitmapData;
	
	override private function _init():Void
	{
		super._init();
		overlayBackground = _createView( OVERLAY_BACKGROUND );
		backUp = _createView( OVERLAY_BACK_UP );
		backOver = _createView( OVERLAY_BACK_OVER );
		muteUp = _createView( OVERLAY_MUTE_UP );
		muteOver = _createView( OVERLAY_MUTE_OVER );
		unmuteUp = _createView( OVERLAY_UNMUTE_UP );
		unmuteOver = _createView( OVERLAY_UNMUTE_OVER );
		pauseUp = _createView( OVERLAY_PAUSE_UP );
		pauseOver = _createView( OVERLAY_PAUSE_OVER );
		unpauseUp = _createView( OVERLAY_UNPAUSE_UP );
		unpauseOver = _createView( OVERLAY_UNPAUSE_OVER );
		background = _createView( BACKGROUND );
		sphere = Assets.getBitmapData( "assets/Sphere.png" );
	}
	
	private function _createView( type:EAsset ):IView
	{
		var l_sprite:Sprite = new Sprite();
		var l_bitmap:Bitmap = new Bitmap();
		l_sprite.addChild( l_bitmap );
		switch( type )
		{
//			case OVERLAY_BACKGROUND : l_bitmap.bitmapData = new BitmapDataScale9( Assets.getBitmapData( "assets/overlay/OverlayBackground.png" ), 110, 20, 550, 350, _kernel.factory.width, _kernel.factory.height, true );
			case OVERLAY_BACKGROUND : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/OverlayBackground.png" );
			case OVERLAY_BACK_UP : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/BackUp.png" );
			case OVERLAY_BACK_OVER : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/BackOver.png" );
			case OVERLAY_MUTE_UP : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/MuteUp.png" );
			case OVERLAY_MUTE_OVER : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/MuteOver.png" );
			case OVERLAY_UNMUTE_UP : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnmuteUp.png" );
			case OVERLAY_UNMUTE_OVER : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnmuteOver.png" );
			case OVERLAY_PAUSE_UP : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/PauseUp.png" );
			case OVERLAY_PAUSE_OVER : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/PauseOver.png" );
			case OVERLAY_UNPAUSE_UP : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnpauseUp.png" );
			case OVERLAY_UNPAUSE_OVER : l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnpauseOver.png" );
			case BACKGROUND : l_bitmap.bitmapData = Assets.getBitmapData( "assets/scenes/Background.png" );
		}
		return new View( _kernel, l_sprite );
	}
	
}

enum EAsset
{
	OVERLAY_BACKGROUND;
	OVERLAY_BACK_UP;
	OVERLAY_BACK_OVER;
	OVERLAY_MUTE_UP;
	OVERLAY_MUTE_OVER;
	OVERLAY_UNMUTE_UP;
	OVERLAY_UNMUTE_OVER;
	OVERLAY_PAUSE_UP;
	OVERLAY_PAUSE_OVER;
	OVERLAY_UNPAUSE_UP;
	OVERLAY_UNPAUSE_OVER;
	BACKGROUND;	
}

