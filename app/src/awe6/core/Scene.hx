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
import awe6.interfaces.EAgenda;
import awe6.interfaces.EScene;
import awe6.interfaces.IEntity;
import awe6.interfaces.IEntityCollection;
import awe6.interfaces.IKernel;
import awe6.interfaces.IScene;
import awe6.interfaces.IView;

class Scene extends Process, implements IScene
{
	public var type( default, null ):EScene;
	public var view( default, null ):IView;
	public var isPauseable( default, null ):Bool;
	public var isMuteable( default, null ):Bool;	
	public var isSessionSavedOnNext( default, null ):Bool;
	public var parent( default, null ):IEntityCollection;

	private var _entity( default, null ):IEntity;

	public function new( kernel:IKernel, type:EScene, ?isPauseable:Bool = false, ?isMutable:Bool = true, ?isSessionSavedOnNext:Bool = false ) 
	{
		this.type = type;
		this.isPauseable = isPauseable;
		this.isMuteable = isMutable;
		this.isSessionSavedOnNext = isSessionSavedOnNext;
		super( kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		_entity = new Entity( _kernel );
		this.parent = _entity; // jury's out on this?
		view = _entity.view;
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		_entity.update( deltaTime );
	}
	
	override private function _disposer():Void 
	{
		_entity.dispose();
		view.dispose();
		super._disposer();		
	}
	
	public function addEntity( entity:IEntity, ?agenda:EAgenda, ?isAddedToView:Bool = false, ?viewPriority:Int ):Void { return _entity.addEntity( entity, agenda, isAddedToView, viewPriority ); }
	public function removeEntity( entity:IEntity, ?agenda:EAgenda, ?isRemovedFromView:Bool = false ):Void { _entity.removeEntity( entity, agenda, isRemovedFromView ); }
	public function getEntities( ?agenda:EAgenda ):Array<IEntity> { return _entity.getEntities( agenda ); }
	public function getEntitiesByClass<T>( classType:Class<T>, ?agenda:EAgenda, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):Array<T> { return _entity.getEntitiesByClass( classType, agenda, bubbleDown, bubbleUp, false ); }
	public function getEntityById( id:String, ?agenda:EAgenda, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):IEntity { return _entity.getEntityById( id, agenda, bubbleDown, bubbleUp, false ); }
}

