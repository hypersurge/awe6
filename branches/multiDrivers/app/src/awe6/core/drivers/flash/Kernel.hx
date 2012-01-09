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

package awe6.core.drivers.flash;
import awe6.core.Context;
import awe6.core.drivers.AKernel;
import awe6.interfaces.IFactory;
import flash.display.Stage;
import flash.display.StageDisplayState;
import flash.display.StageQuality;
import flash.display.StageScaleMode;
import flash.events.ContextMenuEvent;
import flash.events.Event;
import flash.events.FullScreenEvent;
import flash.geom.Rectangle;
import flash.Lib;
import flash.net.URLRequest;
import flash.system.Security;
import flash.ui.ContextMenu;
import flash.ui.ContextMenuItem;

/**
 * This Kernel class provides flash target overrides.
 * @author	Robert Fell
 */
class Kernel extends AKernel
{
	private var _stage:Stage;
	private var _contextMenu:ContextMenu;
	private var _eyeCandyEnableContextMenuItem:ContextMenuItem;
	private var _eyeCandyDisableContextMenuItem:ContextMenuItem;
	private var _fullScreenEnableContextMenuItem:ContextMenuItem;
	private var _fullScreenDisableContextMenuItem:ContextMenuItem;

	override private function _driverGetIsLocal():Bool
	{
		return Security.sandboxType != Security.REMOTE;		
	}
	
	override private function _driverInit():Void
	{
		_stage = _context.stage;		
		var l_instance:Kernel = this;
		Lib.current.focusRect = false;
		_stage.frameRate = factory.targetFramerate;
		_stage.scaleMode = StageScaleMode.NO_SCALE;
		_stage.quality = StageQuality.LOW;

		var l_mask:Context = new Context();
		l_mask.graphics.beginFill( 0xFFFFFF );
		l_mask.graphics.drawRect( 0, 0, factory.width, factory.height );
		l_mask.graphics.endFill();
		_context.addChild( l_mask );
		_context.mask = l_mask;
		
		_contextMenu = new ContextMenu();
		#if !air
		var l_isAuthorUrl:Bool = factory.config.exists( "settings.contextMenu.authorUrl" );
		var l_author:ContextMenuItem = new ContextMenuItem( factory.id + " v" + factory.version + " By " + factory.author, false, l_isAuthorUrl );
		if ( l_isAuthorUrl )
		{
			l_author.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { Lib.getURL( new URLRequest( l_instance.getConfig( "settings.contextMenu.authorUrl" ) ) ); } );
		}
		_contextMenu.customItems.push( l_author );
		
		var l_isPoweredByUrl:Bool = getConfig( "settings.contextMenu.isPoweredByUrlEnabled" ) != "false";
		var l_poweredBy:ContextMenuItem = new ContextMenuItem( AKernel._POWERED_BY, false, l_isPoweredByUrl );
		if ( l_isPoweredByUrl )
		{
			l_poweredBy.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { Lib.getURL( new URLRequest( AKernel._POWERED_BY_URL ) ); } );
		}
		_contextMenu.customItems.push( l_poweredBy );
		
		if ( factory.isDecached || factory.isDebug )
		{
			_contextMenu.customItems.push( new ContextMenuItem( AKernel._RELEASE_CAUTION, false, false ) );
		}
		
		var l_reset:ContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.resetSessions" ) ? getConfig( "settings.contextMenu.resetSessions" ) : AKernel._RESET_SESSIONS );
		if ( factory.isResetSessionsOptionEnabled )
		{
			_contextMenu.customItems.push( l_reset );
		}
		l_reset.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance._totalReset(); } );
		
		_eyeCandyEnableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.eyeCandyEnable" ) ? getConfig( "settings.contextMenu.eyeCandyEnable" ) : AKernel._EYE_CANDY_ENABLE );
		_eyeCandyEnableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isEyeCandy = true; } );
		_eyeCandyDisableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.eyeCandyDisable" ) ? getConfig( "settings.contextMenu.eyeCandyDisable" ) : AKernel._EYE_CANDY_DISABLE );
		_eyeCandyDisableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isEyeCandy = false; } );
		
		_fullScreenEnableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.fullScreenEnable" ) ? getConfig( "settings.contextMenu.fullScreenEnable" ) : AKernel._FULL_SCREEN_ENABLE );
		_fullScreenEnableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isFullScreen = true; } );
		_fullScreenDisableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.fullScreenDisable" ) ? getConfig( "settings.contextMenu.fullScreenDisable" ) : AKernel._FULL_SCREEN_DISABLE );
		_fullScreenDisableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isFullScreen = false; } );
		
		_stage.addEventListener( FullScreenEvent.FULL_SCREEN, _onFullScreen );
		
		_contextMenu.hideBuiltInItems();
		Lib.current.contextMenu = _contextMenu;
		#end
		_stage.addEventListener( Event.ENTER_FRAME, _onEnterFrame );
	}

	override private function _driverDisposer():Void
	{
		_stage.removeEventListener( FullScreenEvent.FULL_SCREEN, _onFullScreen );
		_stage.removeEventListener( Event.ENTER_FRAME, _onEnterFrame );
	}
	
	private function _onFullScreen( ?p_event:FullScreenEvent ):Void
	{
		isFullScreen = p_event.fullScreen;
	}
	
	private function _onEnterFrame( p_event:Event ):Void
	{
		_updater( 0 ); // avoid isActive
	}
	
	override private function _driverSetIsEyeCandy( p_value:Bool ):Void
	{
		_contextMenu.customItems.remove( _eyeCandyEnableContextMenuItem );
		_contextMenu.customItems.remove( _eyeCandyDisableContextMenuItem );
		_contextMenu.customItems.push( isEyeCandy ? _eyeCandyDisableContextMenuItem : _eyeCandyEnableContextMenuItem );
	}
	
	override private function _driverSetIsFullScreen( p_value:Bool ):Void
	{
		if ( _getFlashVersion() < 10.1 ) // FullScreen proved unreliable for all Flash Players in all browsers < 10.1
		{
			isFullScreen = false;
			return;
		}
		_contextMenu.customItems.remove( _fullScreenEnableContextMenuItem );
		_contextMenu.customItems.remove( _fullScreenDisableContextMenuItem );
		_contextMenu.customItems.push( isFullScreen ? _fullScreenDisableContextMenuItem : _fullScreenEnableContextMenuItem );		
		_stage.fullScreenSourceRect = new Rectangle( 0, 0, _kernel.factory.width, _kernel.factory.height );
		if ( isFullScreen )
		{
			_stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;
		}
		else
		{
			_stage.displayState = StageDisplayState.NORMAL; // intentionally longwinded to avoid string to enum conflicts in older VMs
		}
	}
	
	private function _getFlashVersion():Float
	{
		var l_version:String = flash.system.Capabilities.version;
		var l_parts:Array<String> = l_version.split( "," );
		var l_result:Float = Std.parseFloat( l_parts[0].split( " " )[1] ) + ( ( ( Std.parseFloat( l_parts[1] ) * 10000000 ) + ( Std.parseFloat( l_parts[2] ) * 1000 ) ) / 100000000 );
		return l_result;
	}
	
}

