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

package awe6.extras;
import awe6.core.Entity;
import awe6.interfaces.IEntity;
import awe6.interfaces.IKernel;
import haxe.Serializer;

class Trigger extends Entity
{
	private var _entity:IEntity;
	private var _field:String;
	private var _callbackFunction:Void->Void;
	private var _previousValue:String;
	
	public function new( kernel:IKernel, entity:IEntity, field:String, callbackFunction:Void->Dynamic ) 
	{
		_entity = entity;
		_field = field;
		_callbackFunction = callbackFunction;
		super( kernel );
	}
	
	override private function _init():Void
	{
		super._init();
		_previousValue = _getValue();
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		var l_value:String = _getValue();
		if ( l_value != _previousValue ) activate( true );
		if ( _entity.isDisposed ) dispose();
	}
	
	private function _getValue():String
	{
		return Serializer.run( Reflect.field( _entity, _field ) );
	}
	
	public function activate( ?isActivated:Bool = true ):Void
	{
		Reflect.callMethod( this, _callbackFunction, [] );
		dispose();
	}
	
}