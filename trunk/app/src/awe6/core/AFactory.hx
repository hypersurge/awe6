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
import flash.display.Sprite;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.text.TextField;
import haxe.io.Bytes;

/**
 * The AFactory class provides a minimalist abstract implementation of the IFactory interface.
 * <p>It is intended as an abstract class to be extended.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AFactory implements IFactory, implements IDisposable
{
	private static inline var _CONFIG_URL = "config.xml";
	private static inline var _CONFIG_JOIN_NODE = "settings.joinXml";
	private static inline var _CONFIG_ASSETS_NODE = "settings.assets.url";
	
	private var _configUrl:String;
	private var _sprite:Sprite;
	private var _kernel:IKernel;
	private var _tools:ITools;
	private var _isConfigRequired:Bool;
	private var _countConfigsLoaded:Int;
	private var _countConfigsToLoad:Int;
	private var __kernel:Kernel;
	
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

	public function new( sprite:Sprite, isDebug:Bool = true, ?configUrl:String )
	{
		this.isDebug = isDebug;
		_configUrl = configUrl;
		_countConfigsLoaded = 0;
		_countConfigsToLoad = 0;
		_sprite = new Sprite();
		sprite.addChild( _sprite );
		if ( _sprite.stage != null )
		{
			_hasStage();
		}
		else
		{
			_sprite.addEventListener( Event.ADDED_TO_STAGE, _hasStage );
		}
	}
	
	private function _hasStage( ?event:Event ):Void
	{
		_sprite.removeEventListener( Event.ADDED_TO_STAGE, _hasStage );
		_init();
		if ( _isConfigRequired )
		{
			var l_url:String = ( _configUrl != null ) ? _configUrl : _CONFIG_URL;
			if ( ( _sprite.loaderInfo != null ) && untyped _sprite.loaderInfo.parameters.configUrl != null )
			{
				l_url = untyped _sprite.loaderInfo.parameters.configUrl;
			}
			_loadConfig( l_url );
		}
		else
		{
			_launchKernel();		
		}
	}	
	
	private function _init():Void
	{
		// override me
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
		config = new Hash<Dynamic>();
		startingSceneType = EScene.GAME;
		keyPause = EKey.P;
		keyMute = EKey.M;
		keyNext = EKey.SPACE;
		keyBack = EKey.ESCAPE;
		keySpecial = EKey.CONTROL;
		_isConfigRequired = true;
	}
	
	private function _loadConfig( url:String ):Void
	{
		if ( url.substr( 0, 5 ) == "<?xml" )
		{
			_parseXml( url );
		}
		else
		{
			if ( isDecached )
			{
				url += "?dc=" + Std.random( 99999 );
			}
			// trace( "Loading Config: \"" + url + "\"" );		
			var l_loader:URLLoader = new URLLoader( new URLRequest( url ) );
			l_loader.addEventListener( IOErrorEvent.IO_ERROR, _onIOError );
			l_loader.addEventListener( Event.COMPLETE, _onComplete );
			_countConfigsToLoad++;
		}
	}
	
	private function _onIOError( event:IOErrorEvent ):Void
	{
		var l_textField:TextField = new TextField();
		l_textField.text = "IO Errors Occurred During Config Loading:\n\n".toUpperCase();
		l_textField.multiline = true;
		l_textField.wordWrap = true;
		l_textField.textColor = 0xFF0000;
		l_textField.width = width - 100;
		l_textField.height = height - 100;
		l_textField.x = ( width - l_textField.width ) / 2;
		l_textField.y = ( height - l_textField.height ) / 2;
		l_textField.text += event.text + "\n\n";
		_sprite.addChild( l_textField );
	}	
	
	private function _onComplete( event:Event ):Void
	{
		_countConfigsLoaded++;
		var l_string:String = event.target.data;
		if ( l_string.substr( 0, 5 ) != "<?xml" )
		{
			l_string = createEncrypter().decrypt( Bytes.ofString( l_string ) ).toString();
		}
		_parseXml( l_string );
	}
		
	private function _parseXml( data:String ):Void
	{
		_traverseElements( Xml.parse( data ).firstElement().elements(), "" );
		if ( config.exists( _CONFIG_JOIN_NODE ) && ( _countConfigsLoaded < 100 ) )
		{
			var l_url:String = config.get( _CONFIG_JOIN_NODE );
			config.remove( _CONFIG_JOIN_NODE );
			var l_urls:Array<String> = l_url.split( "," );
			for ( i in l_urls )
			{
				_loadConfig( i );
			}
			return;
		}
		if ( _countConfigsLoaded == _countConfigsToLoad ) _launchKernel();
	}
	
	private function _launchKernel():Void
	{
		if ( __kernel != null ) return;
		__kernel = new Kernel( this, _sprite );
	}
	
	private function _traverseElements( elements:Iterator<Xml>, prefix:String ):Void
	{
		if ( prefix.length != 0 )
		{
			prefix += ".";
		}
		for ( i in elements )
		{
			var l_name:String = prefix + i.nodeName;
			if ( i.elements().hasNext() )
			{
				_traverseElements( i.elements(), l_name );
			}
			if ( ( i.firstChild() != null ) && ( i.firstChild().toString().substr( 0, 9 ) == "<![CDATA[" ) )
			{
				i.firstChild().nodeValue = i.firstChild().toString().split( "<![CDATA[" ).join( "" ).split( "]]>" ).join( "" );
			}
			config.set( l_name, i.firstChild() == null ? "" : i.firstChild().nodeValue );
//			trace( l_name + " = " + config.get( l_name ) );
			for ( j in i.attributes() )
			{
				var l_aName:String = l_name + "." + j;
				config.set( l_aName, i.get( j ) );
//				trace( l_aName + " = " + config.get( l_aName ) );
			}
		}
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
	
	public inline function onInitComplete( kernel:IKernel ):Void
	{
		if ( _kernel != null )
		{
			return;
		}
		_kernel = kernel;
		_tools = _kernel.tools;
		id = ( _tools.toConstCase( StringTools.trim( id ) ) ).substr( 0, 16 );
		version = StringTools.trim( version ).substr( 0, 10 );
		author = StringTools.trim( author ).substr( 0, 16 );
	}
	
	public function createAssetManager():IAssetManagerProcess
	{
		return ( Std.is( _kernel.assets, IAssetManagerProcess ) ) ? cast( _kernel.assets, IAssetManagerProcess ) : new AAssetManager( _kernel ); // safe downcast
	}	
	
	public function createEncrypter():IEncrypter
	{
		return new Encrypter( secret );
	}
	
	public function createEntity( ?id:String ):IEntity
	{
		var l_entity:Entity = new Entity( _kernel, id );
		return l_entity;
	}
	
	public function createLogger():ILogger
	{
		return null;
	}	
	
	public function createOverlay():IOverlayProcess
	{
		var l_overlay:Overlay = new Overlay( _kernel );
		return l_overlay;
	}
	
	public function createPreloader():IPreloader
	{
		return new APreloader( _kernel, _getAssetUrls(), isDecached );
	}	
	
	public function createScene( type:EScene ):IScene
	{
		if ( type == null )
		{
			type = startingSceneType;
		}
		var l_scene:Scene = new Scene( _kernel, type );
		return l_scene;
	}
	
	public function createSceneTransition( ?typeIncoming:EScene, ?typeOutgoing:EScene ):ISceneTransition
	{
		var l_sceneTransition:SceneTransition = new SceneTransition( _kernel );
		return l_sceneTransition;
	}

	public function createSession( ?id:String ):ISession
	{
		return new ASession( _kernel, id );
	}	
	
	public function createTextStyle( ?type:ETextStyle ):ITextStyle
	{
		var l_textStyle:TextStyle = new TextStyle();
		return l_textStyle;
	}	
	
	public function getBackSceneType( type:EScene ):EScene
	{
		return null;
	}	
	
	public function getNextSceneType( type:EScene ):EScene
	{
		return null;
	}
	
	public function dispose():Void
	{
		if ( isDisposed || ( __kernel == null ) )
		{
			return;
		}
		isDisposed = true;
		_sprite.removeEventListener( Event.ADDED_TO_STAGE, _hasStage );
		if ( _sprite.parent != null )
		{
			_sprite.parent.removeChild( _sprite );
		}
		__kernel.dispose();
		__kernel = null;
		_kernel = null;
		config = null;
	}
	
}