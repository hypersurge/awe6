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
import awe6.core.Context;
import awe6.core.View;
import awe6.interfaces.IView;
import pixi.core.sprites.Sprite;
import pixi.core.Pixi.BlendModes;

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
			case OVERLAY_BACKGROUND : Assets.overlay_OverlayBackground__png;
			case OVERLAY_BACK_UP : Assets.overlay_buttons_BackUp__png;
			case OVERLAY_BACK_OVER : Assets.overlay_buttons_BackOver__png;
			case OVERLAY_MUTE_UP : Assets.overlay_buttons_MuteUp__png;
			case OVERLAY_MUTE_OVER : Assets.overlay_buttons_MuteOver__png;
			case OVERLAY_UNMUTE_UP : Assets.overlay_buttons_UnmuteUp__png;
			case OVERLAY_UNMUTE_OVER : Assets.overlay_buttons_UnmuteOver__png;
			case OVERLAY_PAUSE_UP : Assets.overlay_buttons_PauseUp__png;
			case OVERLAY_PAUSE_OVER : Assets.overlay_buttons_PauseOver__png;
			case OVERLAY_UNPAUSE_UP : Assets.overlay_buttons_UnpauseUp__png;
			case OVERLAY_UNPAUSE_OVER : Assets.overlay_buttons_UnpauseOver__png;
			case BACKGROUND : Assets.scenes_Background__png;
		}
		var l_sprite = new Sprite(_kernel.assets.getAsset(l_url).texture);
		l_context.addChild( l_sprite );
		return new View( _kernel, l_context );
	}
	
	public function createSphere():Sprite
	{
		var l_result = new Sprite(_kernel.assets.getAsset(Assets.Sphere__png).texture);
		l_result.blendMode = Math.random() < .5 ? BlendModes.ADD : BlendModes.NORMAL;
		return l_result;
	}

	public function createButtonUp():Sprite
	{
		return new Sprite(_kernel.assets.getAsset(Assets.ButtonUp__png).texture);
	}
	
	public function createButtonOver():Sprite
	{
		return new Sprite(_kernel.assets.getAsset(Assets.ButtonOver__png).texture);
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
