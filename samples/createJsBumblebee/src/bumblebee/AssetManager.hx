package bumblebee;
import awe6.core.AAssetManager;
import awe6.core.Context;
import awe6.core.View;
import awe6.interfaces.IView;
import createjs.easeljs.Bitmap;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

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
	public var beeFast( default, null ):IView;
	public var beeBrake( default, null ):IView;
	public var beeNormal( default, null ):IView;
	public var clouds( get, null ):IView;
	public var flowers( get, null ):IView;
	public var grass( get, null ):IView;
	public var sceneIntro( default, null ):IView;
	public var trees( get, null ):IView;
	
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
		beeFast = _createView( BEE_FAST );
		beeBrake = _createView( BEE_BRAKE );
		beeNormal = _createView( BEE_NORMAL );
		sceneIntro = _createView( SCENE_INTRO );
	}
	
	private function get_clouds():IView
	{
		return _createView( CLOUDS );
	}
	
	private function get_flowers():IView
	{
		return _createView( FLOWERS );
	}
	
	private function get_grass():IView
	{
		return _createView( GRASS );
	}
	
	private function get_trees():IView
	{
		return _createView( TREES );
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
			case BEE_FAST : Assets.game_BeeFast__png;
			case BEE_BRAKE : Assets.game_BeeBrake__png;
			case BEE_NORMAL : Assets.game_BeeNormal__png;
			case CLOUDS : Assets.game_Clouds__png;
			case FLOWERS : Assets.game_Flowers__png;
			case GRASS : Assets.game_Grass__png;
			case SCENE_INTRO : Assets.game_SceneIntro__png;
			case TREES : Assets.game_Trees__png;
		}
		var l_bitmap:Bitmap = new Bitmap( l_url );
		l_context.addChild( l_bitmap );
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
	BEE_FAST;
	BEE_BRAKE;
	BEE_NORMAL;
	CLOUDS;
	FLOWERS;
	GRASS;
	SCENE_INTRO;
	TREES;
}

