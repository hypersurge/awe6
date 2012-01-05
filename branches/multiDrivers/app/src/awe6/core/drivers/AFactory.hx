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
import awe6.core.APreloader;
import awe6.core.Context;
import awe6.core.Encrypter;
import awe6.core.Entity;
import awe6.core.Kernel;
import awe6.core.Overlay;
import awe6.core.Scene;
import awe6.core.SceneTransition;
import awe6.core.TextStyle;
import awe6.interfaces.EKey;
import awe6.interfaces.EScene;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IAssetManagerProcess;
import awe6.interfaces.IDisposable;
import awe6.interfaces.IEncrypter;
import awe6.interfaces.IEntity;
import awe6.interfaces.IFactory;
import awe6.interfaces.IKernel;
import awe6.interfaces.ILogger;
import awe6.interfaces.IOverlayProcess;
import awe6.interfaces.IPreloader;
import awe6.interfaces.IScene;
import awe6.interfaces.ISceneTransition;
import awe6.interfaces.ISession;
import awe6.interfaces.ITextStyle;
import awe6.interfaces.ITools;

/**
 * The AFactory class provides a minimalist abstract implementation of the IFactory interface.
 * <p>It is intended as an abstract class to be extended by target specific drivers.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AFactory implements IFactory, implements IDisposable
{
	private static inline var _CONFIG_ASSETS_NODE = "settings.assets.url";
	
	private var _context:Context;
	private var _config:String;
	private var _kernel:IKernel;
	private var _concreteKernel:Kernel;
	private var _tools:ITools;
		
	public var isDisposed( default, null ):Bool;
	public var id( default, null ):String;
	public var version( default, null ):String;
	public var author( default, null ):String;
	public var isDebug( default, null ):Bool;
	public var isDecached( default, null ):Bool;
	public var isEyeCandyOptionEnabled( default, null ):Bool;
	public var isFullScreenOptionEnabled( default, null ):Bool;
	public var isResetSessionsOptionEnabled( default, null ):Bool;
	public var width( default, null ):Int;
	public var height( default, null ):Int;
	public var bgColor( default, null ):Int;
	public var secret( default, null ):String;
	public var targetFramerate( default, null ):Int;
	public var isFixedUpdates( default, null ):Bool;
	public var config( default, null ):Hash<Dynamic>;
	public var startingSceneType( default, null ):EScene;
	public var keyPause( default, null ):EKey;
	public var keyMute( default, null ):EKey;
	public var keyBack( default, null ):EKey;
	public var keyNext( default, null ):EKey;
	public var keySpecial( default, null ):EKey;
	
	public function new( p_context:Context, ?p_isDebug:Bool = false, ?p_config:String )
	{
		_context = p_context;
		isDebug = p_isDebug;
		_config = p_config;
		_init();
	}

	inline private function _init():Void
	{
		// R.Fell -- "don't" override me, use configurer and onInitComplete (for actions that require Kernel)
		config = new Hash<Dynamic>();
		// Proceed with platform-specific initializations.
		//
		_nativeInit();
	}

	private function _nativeInit():Void
	{
		// override me
		if ( ( _config != null ) && ( _config.substr( 0, 5 ) == "<?xml" ) )
		{
			_traverseElements( Xml.parse( _config ).firstElement().elements(), "" );
		}
		_configure();
		_launchKernel();
	}

	private function _traverseElements( p_elements:Iterator<Xml>, p_prefix:String ):Void
	{
		if ( p_prefix.length != 0 )
		{
			p_prefix += ".";
		}
		for ( i in p_elements )
		{
			var l_name:String = p_prefix + i.nodeName;
			if ( i.elements().hasNext() )
			{
				_traverseElements( i.elements(), l_name );
			}
			if ( ( i.firstChild() != null ) && ( i.firstChild().toString().substr( 0, 9 ) == "<![CDATA[" ) )
			{
				i.firstChild().nodeValue = i.firstChild().toString().split( "<![CDATA[" ).join( "" ).split( "]]>" ).join( "" );
			}
			config.set( l_name, i.firstChild() == null ? "" : i.firstChild().nodeValue );
//#if debug
//			trace( l_name + " = " + config.get( l_name ) );
//#end
			for ( j in i.attributes() )
			{
				var l_aName:String = l_name + "." + j;
				config.set( l_aName, i.get( j ) );
//#if debug
//				trace( l_aName + " = " + config.get( l_aName ) );
//#end
			}
		}
	}

	inline private function _configure():Void
	{
		id = "awe6";
		version = "0.0.1";
		author = "unknown";
		isDecached = false;
		isEyeCandyOptionEnabled = true;
		isFullScreenOptionEnabled = true;
		isResetSessionsOptionEnabled = true;
		width = 600;
		height = 400;
		bgColor = 0xFF0000;
		secret = "YouMustOverrideThis";
		targetFramerate = 25;
		isFixedUpdates = true;
		startingSceneType = EScene.GAME;
		keyPause = EKey.P;
		keyMute = EKey.M;
		keyNext = EKey.SPACE;
		keyBack = EKey.ESCAPE;
		keySpecial = EKey.CONTROL;
		_configurer();
	}
	
	private function _configurer():Void
	{
		// override me
	}
	
	private function _launchKernel():Void
	{
		if ( _concreteKernel != null )
		{
			return;
		}
		_concreteKernel = new Kernel( this, _context );
	}
	
	private function _getAssetUrls():Array<String>
	{
		var l_result:Array<String> = [];
		for ( i in 0...1000 )
		{
			var l_nodeName:String = _CONFIG_ASSETS_NODE + i;
			if ( config.exists( l_nodeName ) )
			{
				l_result.push( Std.string( config.get( l_nodeName ) ) );
			}
		}
		return l_result;
	}
	
	public function onInitComplete( p_kernel:IKernel ):Void
	{
		if ( ( _kernel != null ) || ( p_kernel == null ) )
		{
			return;
		}
		_kernel = p_kernel;
		_tools = _kernel.tools;
		id = ( _tools.toConstCase( StringTools.trim( id ) ) ).substr( 0, 16 );
		version = StringTools.trim( version ).substr( 0, 10 );
		author = StringTools.trim( author ).substr( 0, 16 );
	}
	
	public function createAssetManager():IAssetManagerProcess
	{
		if ( Std.is( _kernel.assets, IAssetManagerProcess ) )
		{
			return cast( _kernel.assets, IAssetManagerProcess );
		}
		else
		{
			return new AAssetManager( _kernel ); // safe downcast
		}
	}
	
	public function createEncrypter():IEncrypter
	{
		return new Encrypter( secret );
	}
	
	public function createEntity( ?p_id:String ):IEntity
	{
		return new Entity( _kernel, p_id );
	}
	
	public function createLogger():ILogger
	{
		return null;
	}
	
	public function createOverlay():IOverlayProcess
	{
		return new Overlay( _kernel );
	}
	
	public function createPreloader():IPreloader
	{
		return new APreloader( _kernel, _getAssetUrls(), isDecached );
	}
	
	public function createScene( p_type:EScene ):IScene
	{
		if ( p_type == null )
		{
			p_type = startingSceneType;
		}
		return new Scene( _kernel, p_type );
	}
	
	public function createSceneTransition( ?p_typeIncoming:EScene, ?p_typeOutgoing:EScene ):ISceneTransition
	{
		return new SceneTransition( _kernel );
	}

	public function createSession( ?p_id:String ):ISession
	{
		return new ASession( _kernel, p_id );
	}
	
	public function createTextStyle( ?p_type:ETextStyle ):ITextStyle
	{
		return new TextStyle();
	}
	
	public function getBackSceneType( p_type:EScene ):EScene
	{
		return null;
	}
	
	public function getNextSceneType( p_type:EScene ):EScene
	{
		return null;
	}
	
	public function dispose():Void
	{
		if ( isDisposed || ( _concreteKernel == null ) )
		{
			return;
		}
		_nativeDisposer();
		_concreteKernel.dispose();
		_concreteKernel = null;
		_kernel = null;
		config = null;
		// M.Ivanchev -- this is now set after the object is fully disposed of.
		// R.Fell -- if so then we need a _isBeingDisposed as per Process to prevent potential recursive call
		isDisposed = true;
	}
	
	private function _nativeDisposer():Void
	{
		// override me
	}
}
