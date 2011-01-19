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
import awe6.interfaces.IEntity;
import awe6.interfaces.IEntityCollection;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import flash.display.Sprite;

class Entity extends Process, implements IEntity
{
	public var id( default, null ):String;
	public var parent( default, null ):IEntityCollection;
	public var view( default, null ):IView;
	public var agenda( default, null ):EAgenda;
	
	private var _entities:Array<Entity>;

	public function new( kernel:IKernel, ?id:String, ?sprite:Sprite ) 
	{
		view = new View( kernel, sprite );
		this.id = ( id == null ) ? kernel.tools.createGuid() : id;
		super( kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		agenda = EAgenda.ALL;
		_entities = new Array<Entity>();
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		for ( i in _entities ) i.update( deltaTime );
	}
	
	override private function _disposer():Void 
	{
		remove();
		_entities.reverse();
		for ( i in _entities ) i.dispose();
		view.dispose();
		super._disposer();
	}

	/**
	 * @todo	Enable agenda state machine
	 */
	public function addEntity( entity:IEntity, ?agenda:EAgenda, ?isAddedToView:Bool = false, ?viewPriority:Int ):Void
	{
		if ( isDisposed ) return;
		var l_child:Entity = cast entity;
		var l_parent:Entity = cast l_child.parent;
		if ( l_parent != this )
		{
			entity.remove( isAddedToView );
			_entities.push( l_child );
			l_child._setParent( this );
		}
		if ( isAddedToView ) view.addChild( entity.view, viewPriority );		
	}
	
	public function removeEntity( entity:IEntity, ?agenda:EAgenda, ?isRemovedFromView:Bool = false ):Void
	{
		if ( isDisposed ) return;
		var l_child:Entity = cast entity;
		_entities.remove( l_child );
		l_child._setParent( null );
		if ( isRemovedFromView ) entity.view.remove();
	}
	
	public function remove( ?isRemovedFromView:Bool = false ):Void
	{
		if ( parent != null ) parent.removeEntity( this, isRemovedFromView );
	}	
	
	public function getEntities( ?agenda:EAgenda ):Array<IEntity>
	{
		return cast _entities;
	}
	
	public function getEntitiesByClass<T>( classType:Class<T>, ?agenda:EAgenda, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):Array<T>
	{
		if ( bubbleEverywhere ) return _kernel.scenes.scene.getEntitiesByClass( classType, true );
		var l_result:Array<T> = new Array<T>();
		for ( i in _entities )
		{
			if ( Std.is( i, classType ) ) l_result.push( cast i );
			if ( bubbleDown ) l_result.concat( i.getEntitiesByClass( classType, true ) );
		}
		if ( bubbleUp ) l_result.concat( this.parent.getEntitiesByClass( classType, false, true ) );
		return l_result;
	}
	
	public function getEntityById( id:String, ?agenda:EAgenda, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):IEntity
	{
		if ( this.id == id ) return this;
		if ( bubbleEverywhere ) return _kernel.scenes.scene.getEntityById( id, true );
		var l_result:IEntity = null;
		for ( i in _entities )
		{
			if ( i.id == id ) return i;
			if ( bubbleDown ) l_result = i.getEntityById( id, true );
			if ( l_result != null ) return l_result;
		}
		if ( bubbleUp ) l_result = this.parent.getEntityById( id, false, true );
		return l_result;
	}
	
	public function setAgenda( type:EAgenda ):Bool
	{
		if ( agenda == type ) return false;
		agenda = type;
		return true;
	}
	
	private function _setParent( parent:IEntityCollection ):Void
	{
		this.parent = parent;
	}
	
	
	
}

