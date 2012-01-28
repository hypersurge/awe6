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

package awe6.core.drivers;
import awe6.core.AAssetManager;
import awe6.core.AudioManager;
import awe6.core.Context;
import awe6.core.InputManager;
import awe6.core.MessageManager;
import awe6.core.Process;
import awe6.core.SceneManager;
import awe6.interfaces.EFullScreen;
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
import haxe.Timer;

/**
 * The AKernel class provides a minimalist implementation of the IKernel interface.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 * @author	Mihail Ivanchev
 */
class AKernel extends Process, implements IKernel
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
	public var isEyeCandy( default, _set_isEyeCandy ):Bool;
	public var isFullScreen( default, _set_isFullScreen ):Bool;
	public var tools( default, null ):ITools;
	public var assets( default, null ):IAssetManager;
	public var audio( default, null ):IAudioManager;
	public var inputs( default, null ):IInputManager;
	public var scenes( default, null ):ISceneManager;
	public var messenger( default, null ):IMessageManager;
	public var session( _get_session, _set_session ):ISession;
	
	private var _context:Context;
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

	public function new( p_factory:IFactory, p_context:Context )
	{
		factory = p_factory;
		_context = p_context;
		tools = _tools = new Tools( this ); // created before super constructor because super.tools binds to it
		super( this );
	}

	override private function _init():Void
	{
		super._init();
		_view = new View( this, _context, 0, this );
		_processes = new List<IProcess>();
		_helperFramerate = new _HelperFramerate( factory.targetFramerate );
		_isPreloaded = false;

		// Perform driver specific initializations.
		isDebug = factory.isDebug;
		isLocal = _driverGetIsLocal();
		_driverInit();

		// Initialize managers.
		assets = _assetManagerProcess = new AAssetManager( _kernel );
		audio =	_audioManager = new AudioManager( _kernel );
		inputs = _inputManager = new InputManager( _kernel );
		scenes = _sceneManager = new SceneManager( _kernel );
		messenger = _messageManager = new MessageManager( _kernel );
		_view.addChild( _sceneManager.view, 1 );
		_addProcess( _assetManagerProcess );
		_addProcess( _audioManager );
		_addProcess( _inputManager );
		_addProcess( _sceneManager );
		_addProcess( _messageManager );
		
		// Set defaults for visual switches.
		isEyeCandy = true;
		isFullScreen = false;

		// Signal completion to the factory and initialize factory-dependent components.
		factory.onInitComplete( this );

		session = factory.createSession();
		session.reset();
		_preloader = factory.createPreloader();
		_addProcess( _preloader );
		_view.addChild( _preloader.view, 2 );
		_addProcess( _view );
	}

	private function _driverGetIsLocal():Bool
	{
		//override me
		return false;
	}

	private function _driverInit():Void
	{
		//override me
	}
	
	private function _driverDisposer():Void
	{
		//override me
	}
	
	public function onPreloaderComplete( p_preloader:IPreloader ):Void
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
		_view.addChild( _overlayProcess.view, 3 );
		if ( isDebug )
		{
			_addProcess( _profiler = new Profiler( this ) );
			_view.addChild( _profiler.view, _tools.BIG_NUMBER );
		}
		scenes.setScene( factory.startingSceneType );
		overlay.flash();
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void
	{
		_helperFramerate.update();
		var l_deltaTime:Int = factory.isFixedUpdates ? Std.int( 1000 / factory.targetFramerate ) : _helperFramerate.timeInterval;
		super._updater( l_deltaTime );
		for ( i in _processes )
		{
			i.update( l_deltaTime );
		}
	}
	
	override private function _disposer():Void
	{
		for ( i in _processes )
		{
			_removeProcess( i );
		}
		if ( Std.is( factory, IDisposable ) )
		{
			cast( factory, IDisposable ).dispose();
		}
		factory = null;
		_view.dispose();
		_view = null;
		_driverDisposer();
		assets = _assetManagerProcess = null;
		audio =	_audioManager = null;
		inputs = _inputManager = null;
		scenes = _sceneManager = null;
		messenger = _messageManager = null;
		overlay = _overlayProcess = null;
		tools = _tools = null;
		_logger = null;
		_preloader = null;
		session = null;
		super._disposer();
	}
	
	public function getConfig( p_id:String ):Dynamic
	{
		return factory.config.exists( p_id ) ? factory.config.get( p_id ) : null;
	}
	
	public function log( p_value:Dynamic ):Void
	{
		if ( _logger != null )
		{
			_logger.log( p_value );
		}
		else if ( isDebug )
		{
			trace( "LOG: " + p_value );
		}
	}
	
	public function getFramerate( ?p_asActual:Bool = true ):Float
	{
		return p_asActual ? _helperFramerate.framerate : factory.targetFramerate;
	}
	
	private function _addProcess( p_process:IProcess, ?p_isLast:Bool = true ):Void
	{
		if ( p_process == null )
		{
			return;
		}
		if ( p_isLast )
		{
			_processes.add( p_process );
		}
		else
		{
			_processes.push( p_process );
		}
	}
	
	private function _removeProcess( p_process:IProcess ):Bool
	{
		if ( p_process == null )
		{
			return false;
		}
		p_process.dispose();
		return _processes.remove( p_process );
	}
	
	private function _totalReset():Void
	{
		if ( !_isPreloaded )
		{
			return;
		}
		session.deleteAllSessions();
		session = factory.createSession();
		scenes.setScene( factory.startingSceneType );
	}
	
	private function _set_isEyeCandy( p_value:Bool ):Bool
	{
		if ( !factory.isEyeCandyOptionEnabled )
		{
			isEyeCandy = true;
			return isEyeCandy;
		}
		isEyeCandy = p_value;
		_driverSetIsEyeCandy( p_value );
		return isEyeCandy;
	}
	
	private function _driverSetIsEyeCandy( p_value:Bool ):Void
	{
		//override me
	}
	
	private function _set_isFullScreen( p_value:Bool ):Bool
	{
		if ( !factory.isFullScreenOptionEnabled || Type.enumEq( factory.fullScreenType, EFullScreen.DISABLED ) )
		{
			isFullScreen = false;
			return isFullScreen;
		}
		isFullScreen = p_value;
		_driverSetIsFullScreen( p_value );
		return isFullScreen;
	}
	
	private function _driverSetIsFullScreen( p_value:Bool ):Void
	{
		//override me
	}
	
	override private function _pauser():Void
	{
		super._pauser();
		if ( scenes.scene != null )
		{
			scenes.scene.pause();
		}
	}
	
	override private function _resumer():Void
	{
		super._resumer();
		if ( scenes.scene != null )
		{
			scenes.scene.resume();
		}
	}
	
	private function _get_session():ISession
	{
		return session;
	}
	
	private function _set_session( p_value:ISession ):ISession
	{
		session = p_value;
		return session;
	}
}

private class _HelperFramerate
{
	public var framerate( default, null ):Float;
	public var timeInterval( default, null ):Int;
	private var _timeAtLastUpdate:Int;
	
	public function new( p_framerate:Float )
	{
		framerate = p_framerate;
		_timeAtLastUpdate = _timer();
	}
	
	public function update()
	{
		timeInterval = _timer() - _timeAtLastUpdate;
		framerate = 1000 / timeInterval;
		_timeAtLastUpdate = _timer();
	}
	
	private inline function _timer():Int
	{
		return Std.int( Timer.stamp() * 1000 );
	}
}
