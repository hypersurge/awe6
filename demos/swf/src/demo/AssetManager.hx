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
import assets.Background;
import assets.BackOver;
import assets.BackUp;
import assets.ButtonOver;
import assets.ButtonUp;
import assets.MuteOver;
import assets.MuteUp;
import assets.OverlayBackground;
import assets.PauseOver;
import assets.PauseUp;
import assets.Sphere;
import assets.UnmuteOver;
import assets.UnmuteUp;
import assets.UnpauseOver;
import assets.UnpauseUp;
import awe6.core.AAssetManager;
import awe6.core.Context;
import awe6.core.View;
import awe6.extras.gui.BitmapDataScale9;
import awe6.interfaces.IView;
import flash.display.Bitmap;
import flash.display.BitmapData;

class AssetManager extends AAssetManager
{
	public var overlayBackground( default, null ):IView;
	public var overlayBackOver( default, null ):IView;
	public var overlayBackUp( default, null ):IView;
	public var overlayMuteOver( default, null ):IView;
	public var overlayMuteUp( default, null ):IView;
	public var overlayPauseOver( default, null ):IView;
	public var overlayPauseUp( default, null ):IView;
	public var overlayUnmuteOver( default, null ):IView;
	public var overlayUnmuteUp( default, null ):IView;
	public var overlayUnpauseOver( default, null ):IView;
	public var overlayUnpauseUp( default, null ):IView;
	public var background( default, null ):IView;
	public var buttonUp( default, null ):BitmapData;
	public var buttonOver( default, null ):BitmapData;
	public var sphere( default, null ):BitmapData;

	override private function _init():Void
	{
		super._init();
		overlayBackground = _createView( OVERLAY_BACKGROUND );
		overlayBackUp = _createView( OVERLAY_BACK_UP );
		overlayBackOver = _createView( OVERLAY_BACK_OVER );
		overlayMuteUp = _createView( OVERLAY_MUTE_UP );
		overlayMuteOver = _createView( OVERLAY_MUTE_OVER );
		overlayUnmuteUp = _createView( OVERLAY_UNMUTE_UP );
		overlayUnmuteOver = _createView( OVERLAY_UNMUTE_OVER );
		overlayPauseUp = _createView( OVERLAY_PAUSE_UP );
		overlayPauseOver = _createView( OVERLAY_PAUSE_OVER );
		overlayUnpauseUp = _createView( OVERLAY_UNPAUSE_UP );
		overlayUnpauseOver = _createView( OVERLAY_UNPAUSE_OVER );
		background = _createView( BACKGROUND );
		buttonUp = new ButtonUp();
		buttonOver = new ButtonOver();
		sphere = new Sphere();
	}

	private function _createView( p_type:EAsset ):IView
	{
		var l_context:Context = new Context();
		var l_bitmap:Bitmap = new Bitmap();
		l_context.addChild( l_bitmap );
		switch( p_type )
		{
			case OVERLAY_BACKGROUND :
				l_bitmap.bitmapData = new BitmapDataScale9( new OverlayBackground(), 110, 20, 550, 350, _kernel.factory.width, _kernel.factory.height, true );
			case OVERLAY_BACK_UP :
				l_bitmap.bitmapData = new BackUp();
			case OVERLAY_BACK_OVER :
				l_bitmap.bitmapData = new BackOver();
			case OVERLAY_MUTE_UP :
				l_bitmap.bitmapData = new MuteUp();
			case OVERLAY_MUTE_OVER :
				l_bitmap.bitmapData = new MuteOver();
			case OVERLAY_UNMUTE_UP :
				l_bitmap.bitmapData = new UnmuteUp();
			case OVERLAY_UNMUTE_OVER :
				l_bitmap.bitmapData = new UnmuteOver();
			case OVERLAY_PAUSE_UP :
				l_bitmap.bitmapData = new PauseUp();
			case OVERLAY_PAUSE_OVER :
				l_bitmap.bitmapData = new PauseOver();
			case OVERLAY_UNPAUSE_UP :
				l_bitmap.bitmapData = new UnpauseUp();
			case OVERLAY_UNPAUSE_OVER :
				l_bitmap.bitmapData = new UnpauseOver();
			case BACKGROUND :
				l_bitmap.bitmapData = new Background();
		}
		return new View( _kernel, l_context );
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

