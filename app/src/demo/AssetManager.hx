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
import awe6.extras.gui.BitmapDataScale9;
import awe6.interfaces.IView;
import flash.display.Bitmap;
import flash.display.BitmapData;
import openfl.Assets;
import flash.text.Font;

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
	public var font( default, null ):Font;
	
	private var _html5AudioExtension:String;

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
		buttonUp = Assets.getBitmapData( "assets/ButtonUp.png" );
		buttonOver = Assets.getBitmapData( "assets/ButtonOver.png" );
		sphere = Assets.getBitmapData( "assets/Sphere.png" );
		font = Assets.getFont( "assets/fonts/orbitron.ttf" );
		_html5AudioExtension = untyped flash.media.Sound.nmeCanPlayType( "ogg" ) ? ".ogg" : ".mp3";
	}

	override public function getAsset( p_id:String, ?p_packageId:String, ?p_args:Array<Dynamic> ):Dynamic
	{
		if ( p_packageId == null )
		{
			p_packageId = _kernel.getConfig( "settings.assets.packages.default" );
		}
		if ( p_packageId == null )
		{
			p_packageId = _PACKAGE_ID;
		}
		if ( ( p_packageId == _kernel.getConfig( "settings.assets.packages.audio" ) ) || ( p_packageId == "assets.audio" ) )
		{
			var l_extension:String = ".mp3";
			#if cpp
			l_extension = ".ogg"; // doesn't work on Macs?
			#elseif js
//			return null; // js not playing nice yet
			l_extension = _html5AudioExtension;
			#end
			p_id += l_extension;
		}
		if ( ( p_packageId.length > 0 ) && ( p_packageId.substr( -1, 1 ) != "." ) )
		{
			p_packageId += ".";
		}
		var l_assetName:String = StringTools.replace( p_packageId, ".", "/" ) + p_id;
		var l_result:Dynamic = Assets.getSound( l_assetName );
		if ( l_result != null )
		{
			return l_result;
		}
		var l_result:Dynamic = Assets.getBitmapData( l_assetName );
		if ( l_result != null )
		{
			return l_result;
		}
		var l_result:Dynamic = Assets.getFont( l_assetName );
		if ( l_result != null )
		{
			return l_result;
		}
		var l_result:Dynamic = Assets.getText( l_assetName );
		if ( l_result != null )
		{
			return l_result;
		}
		var l_result:Dynamic = Assets.getBytes( l_assetName );
		if ( l_result != null )
		{
			return l_result;
		}
		return super.getAsset( p_id, p_packageId, p_args );
	}

	private function _createView( p_type:EAsset ):IView
	{
		var l_context:Context = new Context();
		var l_bitmap:Bitmap = new Bitmap();
		l_context.addChild( l_bitmap );
		switch( p_type )
		{
			case OVERLAY_BACKGROUND :
			#if !js
				l_bitmap.bitmapData = new BitmapDataScale9( Assets.getBitmapData( "assets/overlay/OverlayBackground.png" ), 110, 20, 550, 350, _kernel.factory.width, _kernel.factory.height, true );
			#else
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/OverlayBackground.png" );
			#end
			case OVERLAY_BACK_UP :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/BackUp.png" );
			case OVERLAY_BACK_OVER :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/BackOver.png" );
			case OVERLAY_MUTE_UP :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/MuteUp.png" );
			case OVERLAY_MUTE_OVER :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/MuteOver.png" );
			case OVERLAY_UNMUTE_UP :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnmuteUp.png" );
			case OVERLAY_UNMUTE_OVER :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnmuteOver.png" );
			case OVERLAY_PAUSE_UP :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/PauseUp.png" );
			case OVERLAY_PAUSE_OVER :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/PauseOver.png" );
			case OVERLAY_UNPAUSE_UP :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnpauseUp.png" );
			case OVERLAY_UNPAUSE_OVER :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/overlay/buttons/UnpauseOver.png" );
			case BACKGROUND :
				l_bitmap.bitmapData = Assets.getBitmapData( "assets/scenes/Background.png" );
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

