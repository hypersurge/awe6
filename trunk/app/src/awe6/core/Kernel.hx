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

package awe6.core;
import awe6.interfaces.IAssetManager;
import awe6.interfaces.IAssetManagerProcess;
import awe6.interfaces.IAudioManager;
import awe6.interfaces.IDisposable;
import awe6.interfaces.IFactory;
import awe6.interfaces.IInputManager;
import awe6.interfaces.IKernel;
import awe6.interfaces.ILogger;
import awe6.interfaces.IMessageManager;
import awe6.interfaces.IOverlay;
import awe6.interfaces.IOverlayProcess;
import awe6.interfaces.IPreloader;
import awe6.interfaces.IProcess;
import awe6.interfaces.ISceneManager;
import awe6.interfaces.ISession;
import awe6.interfaces.ITools;
import flash.display.Sprite;
import flash.display.Stage;
import flash.display.StageDisplayState;
import flash.display.StageQuality;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.geom.Rectangle;
import flash.Lib;
import flash.events.ContextMenuEvent;
import flash.events.FullScreenEvent;
import flash.net.URLRequest;
import flash.ui.ContextMenu;
import flash.ui.ContextMenuItem;

/**
 * The Kernel class provides a minimalist implementation of the IKernel interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Kernel extends Process, implements IKernel
{
	private static inline var _POWERED_BY = "Powered by awe6";
	private static inline var _POWERED_BY_URL = "http://awe6.org";
	private static inline var _RELEASE_CAUTION = "PUBLIC RELEASE NOT ADVISED";
	private static inline var _RESET_SESSIONS = "Reset All Saved Information";
	private static inline var _EYE_CANDY_ENABLE = "Enable Eye Candy";
	private static inline var _EYE_CANDY_DISABLE = "Disable Eye Candy";
	private static inline var _FULL_SCREEN_ENABLE = "Enter Full Screen Mode";
	private static inline var _FULL_SCREEN_DISABLE = "Exit Full Screen Mode";
	
	public var overlay( default, null ):IOverlay;
	public var factory( default, null ):IFactory;
	public var isDebug( default, null ):Bool;
	public var isLocal( default, null ):Bool;
	public var isEyeCandy( default, __set_isEyeCandy ):Bool;
	public var isFullScreen( default, __set_isFullScreen ):Bool;
	public var tools( default, null ):ITools;
	public var assets( default, null ):IAssetManager;
	public var audio( default, null ):IAudioManager;
	public var inputs( default, null ):IInputManager;
	public var scenes( default, null ):ISceneManager;
	public var messenger( default, null ):IMessageManager;
	public var session( __get_session, __set_session ):ISession;	
	
	private var _stage:Stage;
	private var _view:View;
	private var _assetManagerProcess:IAssetManagerProcess;
	private var _audioManager:AudioManager;
	private var _inputManager:InputManager;
	private var _sceneManager:SceneManager;
	private var _messageManager:MessageManager;
	private var _overlayProcess:IOverlayProcess;
	private var _logger:ILogger;
	private var _isPreloaded:Bool;
	private var _preloader:IPreloader;
	private var _profiler:Profiler;
	private var _processes:List<IProcess>;
	private var _helperFramerate:_HelperFramerate;
	private var _contextMenu:ContextMenu;
	private var _eyeCandyEnableContextMenuItem:ContextMenuItem;
	private var _eyeCandyDisableContextMenuItem:ContextMenuItem;
	private var _fullScreenEnableContextMenuItem:ContextMenuItem;
	private var _fullScreenDisableContextMenuItem:ContextMenuItem;

	public function new( factory:IFactory, sprite:Sprite )
	{
		this.factory = factory;
		tools = _tools = new Tools( this );
		_view = new View( this, sprite, 0, this );
		_stage = sprite.stage;
		super( this );
	}
	
	override private function _init():Void
	{
		super._init();
		isDebug = factory.isDebug;
		isLocal = flash.system.Security.sandboxType != flash.system.Security.REMOTE;
		_isPreloaded = false;
		_processes = new List<IProcess>();
		_helperFramerate = new _HelperFramerate( factory.targetFramerate );
		assets = _assetManagerProcess = new AAssetManager( _kernel );
		audio =	_audioManager = new AudioManager( _kernel );
		inputs = _inputManager = new InputManager( _kernel );
		scenes = _sceneManager = new SceneManager( _kernel );
		messenger = _messageManager = new MessageManager( _kernel );
		_view.addChild( _sceneManager.view );
		_addProcess( _assetManagerProcess );
		_addProcess( _audioManager );
		_addProcess( _inputManager );
		_addProcess( _sceneManager );
		_addProcess( _messageManager );
		factory.onInitComplete( this );
		_nativeInit();
		session = factory.createSession( ASession.DEBUG_ID );
		session.reset();
		_preloader = factory.createPreloader();
		_addProcess( _preloader );
		_view.addChild( _preloader.view );
		_addProcess( _view );
	}	
	
	public function onPreloaderComplete( preloader:IPreloader ):Void
	{
		_isPreloaded = true;
		_removeProcess( _preloader );
		_preloader = null;
		_logger = factory.createLogger();
		var l_assetManagerProcess = factory.createAssetManager();
		if ( l_assetManagerProcess != _assetManagerProcess )
		{
			_removeProcess( _assetManagerProcess );
			assets = _assetManagerProcess = l_assetManagerProcess;
			_addProcess( _assetManagerProcess );
		}
		overlay = _overlayProcess = factory.createOverlay();
		_addProcess( _overlayProcess, false );
		_view.addChild( _overlayProcess.view );
		if ( isDebug )
		{
			_addProcess( _profiler = new Profiler( this ) );
			_view.addChild( _profiler.view, _tools.BIG_NUMBER );
		}
		scenes.setScene( factory.startingSceneType );
	}
	
	private function _nativeInit():Void
	{
		var l_instance:Kernel = this;
		Lib.current.focusRect = false;
		_stage.frameRate = factory.targetFramerate;
		_stage.scaleMode = StageScaleMode.NO_SCALE;
		_stage.quality = StageQuality.LOW;

		var l_mask:Sprite = new Sprite();
		l_mask.graphics.beginFill( 0xFFFFFF );
		l_mask.graphics.drawRect( 0, 0, factory.width, factory.height );
		l_mask.graphics.endFill();
		_view.sprite.addChild( l_mask );
		_view.sprite.mask = l_mask;
		
		_contextMenu = new ContextMenu();
		#if ( flash && !air )
		var l_isAuthorUrl:Bool = factory.config.exists( "settings.contextMenu.authorUrl" );
		var l_author:ContextMenuItem = new ContextMenuItem( factory.id + " v" + factory.version + " By " + factory.author, false, l_isAuthorUrl );
		if ( l_isAuthorUrl ) l_author.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { Lib.getURL( new URLRequest( l_instance.getConfig( "settings.contextMenu.authorUrl" ) ) ); } );
		_contextMenu.customItems.push( l_author );
		
		var l_isPoweredByUrl:Bool = getConfig( "settings.contextMenu.isPoweredByUrlEnabled" ) != "false";
		var l_poweredBy:ContextMenuItem = new ContextMenuItem( _POWERED_BY, false, l_isPoweredByUrl );
		if ( l_isPoweredByUrl ) l_poweredBy.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { Lib.getURL( new URLRequest( _POWERED_BY_URL ) ); } );
		_contextMenu.customItems.push( l_poweredBy );
		
		if ( factory.isDecached || factory.isDebug ) _contextMenu.customItems.push( new ContextMenuItem( _RELEASE_CAUTION, false, false ) );
		
		var l_reset:ContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.resetSessions" ) ? getConfig( "settings.contextMenu.resetSessions" ) : _RESET_SESSIONS );
		if ( factory.isResetSessionsOptionEnabled ) _contextMenu.customItems.push( l_reset );
		l_reset.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance._totalReset(); } );
		
		_eyeCandyEnableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.eyeCandyEnable" ) ? getConfig( "settings.contextMenu.eyeCandyEnable" ) : _EYE_CANDY_ENABLE );
		_eyeCandyEnableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isEyeCandy = true; } );
		_eyeCandyDisableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.eyeCandyDisable" ) ? getConfig( "settings.contextMenu.eyeCandyDisable" ) : _EYE_CANDY_DISABLE );
		_eyeCandyDisableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isEyeCandy = false; } );
		
		_fullScreenEnableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.fullScreenEnable" ) ? getConfig( "settings.contextMenu.fullScreenEnable" ) : _FULL_SCREEN_ENABLE );
		_fullScreenEnableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isFullScreen = true; } );
		_fullScreenDisableContextMenuItem = new ContextMenuItem( factory.config.exists( "settings.contextMenu.fullScreenDisable" ) ? getConfig( "settings.contextMenu.fullScreenDisable" ) : _FULL_SCREEN_DISABLE );
		_fullScreenDisableContextMenuItem.addEventListener( ContextMenuEvent.MENU_ITEM_SELECT, function( ?event:Event ) { l_instance.isFullScreen = false; } );
		
		_stage.addEventListener( FullScreenEvent.FULL_SCREEN, _onFullScreen );
		
		_contextMenu.hideBuiltInItems();
		Lib.current.contextMenu = _contextMenu;
		#end
		_stage.addEventListener( Event.ENTER_FRAME, _onEnterFrame );
		
		isEyeCandy = true;
		isFullScreen = false;
	}
	
	private function _onFullScreen( ?event:FullScreenEvent ):Void
	{
		isFullScreen = event.fullScreen;
	}
	
	private function _onEnterFrame( event:Event ):Void
	{
		_helperFramerate.update();
		var l_deltaTime:Int = factory.isFixedUpdates ? Std.int( 1000 / factory.targetFramerate ) : _helperFramerate.timeInterval;
		_updater( l_deltaTime ); // avoid isActive
	}	
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		for ( i in _processes ) i.update( deltaTime );
	}
	
	override private function _disposer():Void
	{
		for ( i in _processes ) _removeProcess( i );
		if ( Std.is( factory, IDisposable ) ) cast( factory, IDisposable ).dispose();
		_view.dispose();
		_view = null;
		_stage.removeEventListener( FullScreenEvent.FULL_SCREEN, _onFullScreen );
		_stage.removeEventListener( Event.ENTER_FRAME, _onEnterFrame );
		assets = _assetManagerProcess = null;
		audio =	_audioManager = null;
		inputs = _inputManager = null;
		scenes = _sceneManager = null;
		messenger = _messageManager = null;
		overlay = _overlayProcess = null;
		factory = null;
		tools = _tools = null;
		_logger = null;
		_preloader = null;
		session = null;
		super._disposer();
	}
	
	public function getConfig( id:String ):Dynamic
	{
		return factory.config.exists( id ) ? factory.config.get( id ) : null;
	}
	
	public function log( value:Dynamic ):Void
	{
		if ( _logger != null ) _logger.log( value );
		else if ( isDebug ) trace( "LOG: " + value );
	}	
	
	public function getFramerate( ?asActual:Bool = true ):Float
	{
		return asActual ? _helperFramerate.framerate : factory.targetFramerate;
	}
	
	private function _addProcess( process:IProcess, ?isLast:Bool = true ):Void
	{
		if ( process == null ) return;
		if ( isLast ) _processes.add( process );
		else _processes.push( process );
	}
	
	private function _removeProcess( process:IProcess ):Bool
	{
		if ( process == null ) return false;
		process.dispose();
		return _processes.remove( process );
	}
	
	private function _totalReset():Void
	{
		if ( !_isPreloaded ) return;
		session.deleteAllSessions();
		scenes.setScene( factory.startingSceneType );
	}
	
	private function __set_isEyeCandy( value:Bool ):Bool
	{
		if ( !factory.isEyeCandyOptionEnabled )
		{
			isEyeCandy = true;
			return isEyeCandy;
		}
		isEyeCandy = value;
		#if ( flash && !air )
		_contextMenu.customItems.remove( _eyeCandyEnableContextMenuItem );
		_contextMenu.customItems.remove( _eyeCandyDisableContextMenuItem );
		_contextMenu.customItems.push( isEyeCandy ? _eyeCandyDisableContextMenuItem : _eyeCandyEnableContextMenuItem );
		#end
		return isEyeCandy;
	}
	
	private function __set_isFullScreen( value:Bool ):Bool
	{
		#if ( !flash || air )
		isFullScreen = false;
		return isFullScreen;
		#else
		if ( !factory.isFullScreenOptionEnabled || ( _getFlashVersion() < 10.1 ) ) // FullScreen proved unreliable for all Flash Players in all browsers < 10.1
		{
			isFullScreen = false;
			return isFullScreen;
		}
		isFullScreen = value;
		_contextMenu.customItems.remove( _fullScreenEnableContextMenuItem );
		_contextMenu.customItems.remove( _fullScreenDisableContextMenuItem );
		_contextMenu.customItems.push( isFullScreen ? _fullScreenDisableContextMenuItem : _fullScreenEnableContextMenuItem );		
		_stage.fullScreenSourceRect = new Rectangle( 0, 0, _kernel.factory.width, _kernel.factory.height );
		if ( isFullScreen ) _stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;
		else _stage.displayState = StageDisplayState.NORMAL; // intentionally longwinded to avoid string to enum conflicts in older VMs
		return isEyeCandy;
		#end
	}
	
	private function _getFlashVersion():Float
	{
		var l_version:String = flash.system.Capabilities.version;
		var l_parts:Array<String> = l_version.split( "," );
		var l_result:Float = Std.parseFloat( l_parts[0].split( " " )[1] ) + ( ( ( Std.parseFloat( l_parts[1] ) * 10000000 ) + ( Std.parseFloat( l_parts[2] ) * 1000 ) ) / 100000000 );
		return l_result;
	}
	
	override private function _pauser():Void
	{
		super._pauser();
		if ( scenes.scene != null ) scenes.scene.pause();
	}
	
	override private function _resumer():Void
	{
		super._resumer();
		if ( scenes.scene != null ) scenes.scene.resume();
	}
	
	private function __get_session():ISession { return session; }
	private function __set_session( value:ISession ):ISession { session = value; return session; }
}

private class _HelperFramerate
{
	public var framerate( default, null ):Float;
	public var timeInterval( default, null ):Int;
	private var _timeAtLastUpdate:Int;
	private var _timer:Void->Int;
	
	public function new( framerate:Float )
	{
		this.framerate = framerate;
		_timer = flash.Lib.getTimer;
		_timeAtLastUpdate = _timer();
	}
	
	public function update()
	{
		timeInterval = _timer() - _timeAtLastUpdate;
		framerate = 1000 / timeInterval;
		_timeAtLastUpdate = _timer();
	}	
}