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

package democreatejs;
import awe6.core.AAssetManager;
import awe6.core.Context;
import awe6.core.View;
import awe6.interfaces.IView;
import createjs.easeljs.Bitmap;

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
	}

	private function _createView( p_type:EAsset ):IView
	{
		var l_context:Context = new Context();
		var l_url:String = switch( p_type )
		{
			case OVERLAY_BACKGROUND : "assets/overlay/OverlayBackground.png";
			case OVERLAY_BACK_UP : "assets/overlay/buttons/BackUp.png";
			case OVERLAY_BACK_OVER : "assets/overlay/buttons/BackOver.png";
			case OVERLAY_MUTE_UP : "assets/overlay/buttons/MuteUp.png";
			case OVERLAY_MUTE_OVER : "assets/overlay/buttons/MuteOver.png";
			case OVERLAY_UNMUTE_UP : "assets/overlay/buttons/UnmuteUp.png";
			case OVERLAY_UNMUTE_OVER : "assets/overlay/buttons/UnmuteOver.png";
			case OVERLAY_PAUSE_UP : "assets/overlay/buttons/PauseUp.png";
			case OVERLAY_PAUSE_OVER : "assets/overlay/buttons/PauseOver.png";
			case OVERLAY_UNPAUSE_UP : "assets/overlay/buttons/UnpauseUp.png";
			case OVERLAY_UNPAUSE_OVER : "assets/overlay/buttons/UnpauseOver.png";
			case BACKGROUND : "assets/scenes/Background.png";
		}
		var l_bitmap:Bitmap = new Bitmap( l_url );
		l_context.addChild( l_bitmap );
		return new View( _kernel, l_context );
	}
	
	public function createSphere():Bitmap
	{
		return new Bitmap( "assets/Sphere.png" );
	}

	public function createButtonUp():Bitmap
	{
		return new Bitmap( "assets/ButtonUp.png" );
	}
	
	public function createButtonOver():Bitmap
	{
		return new Bitmap( "assets/ButtonOver.png" );
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

