/*
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
import awe6.interfaces.IKernel;
import awe6.interfaces.ISession;
import awe6.interfaces.ITools;
import flash.net.SharedObject;

/**
 * The ASession class provides a minimalist abstract implementation of the ISession interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class ASession implements ISession
{
	public static inline var VERSION_ID = "_____VERSION";
	public static inline var DEBUG_ID = "DEBUG_AWE6";

	private var _kernel:IKernel;
	private var _so:SharedObject;
	private var _tools:ITools;
	private var _data:Dynamic;
	private var _version:Int;
	
	public var id( default, null ):String;
	public var isTester( __get_isTester, null ):Bool;
	public var loadCount:Int;
	public var saveCount:Int;
	//extend me
	
	public function new( kernel:IKernel, ?id:String = "" )
	{
		_kernel = kernel;
		if ( id == "" ) id = DEBUG_ID;
		this.id = id;
		_tools = _kernel.tools;
		_so = SharedObject.getLocal( _kernel.factory.id );
		_version = 1;
		_init();
	}
	
	private function _init()
	{
		var l_version:Int = Reflect.field( _so.data, VERSION_ID );
		if ( l_version != _version ) _so.clear();
		var l_isExistingSession:Bool = Reflect.field( _so.data, id ) != null;
		reset();
		if ( l_isExistingSession )
		{
			_data = Reflect.field( _so.data, id );
			_getter();
			loadCount++;
		}
	}
	
	private function _getter():Void
	{
		// data we wanted to preserve (probably a mirror of _setter)
		loadCount = _data.loadCount;
		saveCount = _data.saveCount;
		//extend me
	}
	
	private function _setter():Void
	{
		// data we want to preserve (probably a mirror of _getter)
		_data.loadCount = loadCount;
		_data.saveCount = saveCount;
		//extend me
	}
	
	private function _resetter():Void
	{
		// default values - not everything in the session need be preserved!
		loadCount = 0;
		saveCount = 0;
		// extend me
	}
	
	public inline function clone( newId:String ):ISession
	{
		_setter();
		Reflect.setField( _so.data, newId, _data );
		return Type.createInstance( Type.getClass( this ), [ _kernel, newId ] );
	}
	
	public inline function reset( ?isSaved:Bool = false ):Void
	{
		_data = { };
		_resetter();
		_setter();
		if ( isSaved ) save();
	}
	
	public inline function delete():Void
	{
		Reflect.deleteField( _so.data, id );
	}	
	
	public inline function save():Void
	{
		saveCount++;
		_setter();
		Reflect.setField( _so.data, VERSION_ID, _version );
		Reflect.setField( _so.data, id, _data );
	}
		
	public function getPercentageComplete():Float
	{
		// override me
		return 0;
	}
	
	public function getSessionIds( ?suggestions:Array<String> = null ):Array<String>
	{
		var l_result:Array<String> = Reflect.fields( _so.data );
		l_result.remove( VERSION_ID );
		l_result.remove( DEBUG_ID );
		if ( suggestions != null )
		{
			var l_desiredLength:Int = suggestions.length;
			for ( i in l_result ) suggestions.remove( i );
			while ( l_result.length < l_desiredLength )
			{
				l_result.push( suggestions.shift() );
			}
		}
		l_result.sort( _tools.sortByString );
		return l_result;
	}
	
	public function getSessions( ?suggestions:Array<String> = null ):Array<ISession>
	{
		var l_ids:Array<String> = getSessionIds( suggestions );
		var l_result:Array<ISession> = new Array<ISession>();
		for ( i in l_ids )
		{
			l_result.push( Type.createInstance( Type.getClass( this ), [ _kernel, i ] ) );
		}
		return l_result;
	}
	
	public function deleteAllSessions():Void
	{
		_so.clear();		
	}
	
	private function __get_isTester():Bool
	{
		return ( _kernel.isDebug || ( id == DEBUG_ID ) );
	}
	
}