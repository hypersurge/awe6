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
import awe6.interfaces.IEncrypter;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPreloader;
import awe6.interfaces.IView;
import flash.display.Loader;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.ProgressEvent;
import flash.net.URLLoader;
import flash.net.URLLoaderDataFormat;
import flash.net.URLRequest;
import flash.system.ApplicationDomain;
import flash.system.LoaderContext;
import flash.system.SecurityDomain;
import flash.text.Font;
import flash.text.TextField;
import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.io.BytesInput;
import haxe.Timer;

/**
 * The APreloader class provides a minimalist abstract implementation of the IPreloader interface.
 * <p>It is intended as an abstract class to be extended.</p>
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class APreloader extends Process, implements IPreloader
{
	public var view( __get_view, null ):IView;
	public var progress( __get_progress, null ):Float;
	
	private var _sprite:Sprite;
	private var _assets:Array<String>;
	private var _isDecached:Bool;
	private var _encrypter:IEncrypter;
	private var _loader:Loader;
	private var _urlLoader:URLLoader;
	private var _loaderContext:LoaderContext;
	private var _currentProgress:Float;
	private var _currentAsset:Int;
	private var _isComplete:Bool;
	private var _textField:TextField;
	private var _swfData:BytesData;
	
	public function new( kernel:IKernel, assets:Array<String>, ?isDecached:Bool = false ) 
	{
		_assets = assets;
		_isDecached = isDecached;
		super( kernel );
	}
	
	override private function _init():Void
	{
		super._init();
		_encrypter = _tools;
		_sprite = new Sprite();
		view = new View( _kernel, _sprite );
		view.isVisible = false;
		_loaderContext = new LoaderContext();
		_loaderContext.applicationDomain = ApplicationDomain.currentDomain;
		if ( !_kernel.isLocal ) _loaderContext.securityDomain = SecurityDomain.currentDomain;
		_currentAsset = 0;
		progress = 0;
		_isComplete = false;
		if ( _assets.length > 0 ) _next();
	}
	
	private function _next():Void
	{
		_currentAsset++;
		if ( _currentAsset > _assets.length )
		{
			if ( !_isComplete )
			{
				Timer.delay( dispose, 100 ); // delayed because some assets aren't available instantly (?)
				_isComplete = true;
			}
			return;
		}
		else _load( _assets[_currentAsset - 1] );
		_currentProgress = 0;
	}
	
	private function _load( url:String ):Void
	{
		var l_url:String = url;
		if ( _isDecached ) l_url += "?dc=" + Std.random( 99999 );
		// trace( "Loading Asset: " + l_url );
		_urlLoader = new URLLoader();
		_urlLoader.dataFormat = URLLoaderDataFormat.BINARY;
		_urlLoader.load( new URLRequest( l_url ) );
		_urlLoader.addEventListener( IOErrorEvent.IO_ERROR, _onError );
		_urlLoader.addEventListener( ProgressEvent.PROGRESS, _onProgress );
		_urlLoader.addEventListener( Event.COMPLETE, _onComplete );
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( _assets.length == 0 ) dispose(); // needed to be done this way because preloader must be added and removed from kernel
		view.isVisible = _age > 500;
	}
	
	override private function _disposer():Void 
	{
		view.dispose();
		if ( _loader != null )
		{
			#if flash10
			_loader.unloadAndStop();
			#else
			_loader.unload();
			#end
		}
		if ( _urlLoader != null ) _urlLoader.close();
		super._disposer();
		_kernel.onPreloaderComplete( this );
		_kernel.overlay.flash();
	}
	
	private function _onError( event:IOErrorEvent ):Void
	{
		if ( _textField == null )
		{
			_textField = new TextField();
			_textField.text = "IO Errors Occurred During Asset Preloading:\n\n";
			_textField.multiline = true;
			_textField.wordWrap = true;
			_textField.textColor = 0xFF0000;
			_textField.width = _kernel.factory.width - 100;
			_textField.height = _kernel.factory.height - 100;
			_textField.x = ( _kernel.factory.width - _textField.width ) / 2;
			_textField.y = ( _kernel.factory.height - _textField.height ) / 2;
			_sprite.addChild( _textField );
		}
		_textField.text += event.text + "\n\n";
		view.clear();
	}
	
	private function _onComplete( ?event:Event ):Void
	{
		_urlLoader.removeEventListener( IOErrorEvent.IO_ERROR, _onError );
		_urlLoader.removeEventListener( ProgressEvent.PROGRESS, _onProgress );
		_urlLoader.removeEventListener( Event.COMPLETE, _onComplete );
		_swfData = _urlLoader.data;
		_swfData.endian = flash.utils.Endian.LITTLE_ENDIAN;
		var l_headerFormat:String = _swfData.readUTFBytes( 3 );
		var l_isOriginal:Bool = ( ( l_headerFormat == "FWS" ) || ( l_headerFormat == "CWS" ) );
		_swfData = l_isOriginal ? _swfData : _encrypter.decrypt( Bytes.ofData( cast _swfData ) ).getData();
		_loader = new Loader();
		_loader.loadBytes( _swfData, _loaderContext );
		_loader.contentLoaderInfo.addEventListener( Event.COMPLETE, _onLoaderComplete );
		_next();
	}
	
	private function _onLoaderComplete( event:Event ):Void
	{
		_loader.contentLoaderInfo.removeEventListener( Event.COMPLETE, _onLoaderComplete );
		new _HelperSwfParser( _swfData );
	}
	
	private function _onProgress( ?event:ProgressEvent ):Void
	{
		_currentProgress = event.bytesLoaded / event.bytesTotal;
		progress = _tools.limit( ( _currentAsset - 1 + _currentProgress ) / _assets.length , 0, 1 );
	}
	
	private function __get_view():IView { return view; }	
	private function __get_progress():Float { return progress; }	
}

private class _HelperSwfParser
{
	public var isCompressed:Bool;
	public var version:Int;
	public var width:Int;
	public var height:Int;
	public var framerate:Int;
	public var frames:Int;
	public var size:Int;
	public var classes:Array<Class<Dynamic>>;
	
	private var _data:BytesData;
	
	//swf parsing routines by Denis V. Chumakov: http://flashpanoramas.com/blog/
	public function new( data:BytesData )
	{
		_data = data;
		_data.endian = flash.utils.Endian.LITTLE_ENDIAN;
		_data.position = 0;
		var l_headerFormat:String = _data.readUTFBytes( 3 );
		isCompressed = l_headerFormat == "CWS";
		if ( ( l_headerFormat == "FWS" ) || ( l_headerFormat == "CWS" ) )
		{
			version =  _data.readByte();
			size = _data.readUnsignedInt();
		}
		else throw( "Invalid SWF file." );
		_data.readBytes( _data );
		_data.length -= 8;
		if ( isCompressed ) _data.uncompress();
		_data.position = 0;
		_readBox();
		var l_fpsF:UInt = _data.readUnsignedByte();
		var l_fpsI:UInt = _data.readUnsignedByte();
		framerate = Std.int( l_fpsI + l_fpsF / 256 );
		frames = _data.readUnsignedShort();
		classes = [];
		while ( _data.bytesAvailable > 0 )
		{
			_readSwfTag();
		}
		for ( i in classes )
		{
			if ( Std.is( Type.createEmptyInstance( i ), Font ) )
			{
				try { Font.registerFont( i ); }
				catch ( error:Dynamic ) {}
			}
		}
	}
	
	// read compressed box format
	private function _readBox():Void
	{
		var l_frame:Array<Int> = [];
		var l_current:UInt = _data.readUnsignedByte();
		var l_size:UInt = l_current >> 3;
		var l_off:Int = 3;
		for ( i in 0...4 )
		{
			l_frame[i] = l_current << ( 32 - l_off ) >> ( 32 - l_size );
			l_off -= l_size;
			while ( l_off < 0 )
			{
				l_current = _data.readUnsignedByte();
				l_frame[i] |= l_off < -8 ? l_current << ( -l_off - 8) : l_current >> ( -l_off - 8 );
				l_off += 8;
			}
		}
		width = Math.ceil( ( l_frame[1] - l_frame[0] ) / 20 );
		height = Math.ceil( ( l_frame[3] - l_frame[2] ) / 20 );
	}

	// read SWF tag and call handler if present
	private function _readSwfTag():Void
	{
		var l_result:String = "";
		var l_tag:UInt = _data.readUnsignedShort();
		var l_id:Int = l_tag >> 6;
		var l_size:Int = l_tag & 0x3F;
		if ( l_size == 0x3F ) l_size = _data.readUnsignedInt();
		var l_dump:BytesData = new BytesData();
		if ( l_size != 0 ) _data.readBytes( l_dump, 0, l_size );
		_handleTag( l_tag, l_id, l_size, l_dump );
	}
	
	private function _handleTag( p_tag:UInt, p_id:Int, p_size:Int, p_dump:BytesData ):Void
	{
		p_dump.position = 0;
		p_dump.endian = flash.utils.Endian.LITTLE_ENDIAN;
		var l_bytes:BytesInput = new BytesInput( Bytes.ofData( p_dump ) );
		switch ( p_id )
		{
			case 76 : // SymbolClass, for more see format.swf.TagId
				for ( n in 0...l_bytes.readUInt16() )
				{
					l_bytes.readUInt16();
					var l_className:String = l_bytes.readUntil(0);
					var l_resolvedClass:Class<Dynamic> = Type.resolveClass( l_className );
					if ( l_resolvedClass != null ) classes.push( l_resolvedClass );
				}
		}
	}
	
	public function toString():String
	{
		var l_result:String = "";
		l_result += "SWF version: " + version;
		l_result += ", MBs: " + ( Math.round( 100 * size / ( 1024 * 1024 ) ) / 100 );
		l_result += ", width: " + width + ", height: " + height;
		l_result += ", framerate: " + framerate;
		l_result += ", frames: " + frames + "\n";
		l_result += "Classes: " + classes + "\n";
		return l_result;
	}
}