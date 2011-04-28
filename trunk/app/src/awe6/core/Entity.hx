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
import haxe.FastList;
import haxe.FastList;

/**
 * The Entity class provides a minimalist implementation of the IEntity interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Entity extends Process, implements IEntity
{
	public var id( default, __set_id ):String;
	public var agenda( __get_agenda, null ):EAgenda;
	public var parent( __get_parent, null ):IEntityCollection;
	public var view( __get_view, null ):IView;
	
//	private var _entities:Array<Entity>;
	private var _agendas:FastList<_HelperAgenda>;

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
//		_entities = new Array<Entity>();
		_agendas = new FastList<_HelperAgenda>();
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		var l_entities:Array<IEntity> = _getEntities( agenda );
		for ( i in l_entities ) i.update( deltaTime );
	}
	
	override private function _disposer():Void 
	{
		remove();
		_kernel.messenger.removeSubscribers( this );
		_kernel.messenger.removeSubscribers( null, null, null, this );
//		_entities.reverse();
		var l_entities:Array<IEntity> = _getEntities();
		for ( i in l_entities ) i.dispose();
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
//			_entities.push( l_child );
			_agendas.add( new _HelperAgenda( entity, agenda ) );
			l_child._setParent( this );
		}
		if ( isAddedToView ) view.addChild( entity.view, viewPriority );		
	}
	
	public function removeEntity( entity:IEntity, ?agenda:EAgenda, ?isRemovedFromView:Bool = false ):Void
	{
		if ( isDisposed ) return;
		var l_child:Entity = cast entity;
		for ( i in _agendas )
		{
			if ( ( i.entity == entity ) && ( i.agenda == agenda ) ) _agendas.remove( i );
		}
//		_entities.remove( l_child );
		l_child._setParent( null );
		if ( isRemovedFromView ) entity.view.remove();
	}
	
	public function remove( ?isRemovedFromView:Bool = false ):Void
	{
		if ( parent != null ) parent.removeEntity( this, isRemovedFromView );
	}	
	
	public function getEntities( ?agenda:EAgenda ):Array<IEntity>
	{
		return _getEntities( agenda );
//		return cast _entities;
	}
	
	private function _getEntities( ?agenda:EAgenda ):Array<IEntity>
	{
		var l_result:Array<IEntity> = new Array<IEntity>();
		for ( i in _agendas )
		{
			l_result.push( i.entity );
		}
		return l_result;
	}
	
	public function getEntitiesByClass<T>( classType:Class<T>, ?agenda:EAgenda, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):Array<T>
	{
		if ( bubbleEverywhere && ( _kernel.scenes.scene != null ) ) return _kernel.scenes.scene.getEntitiesByClass( classType, true );
		var l_result:Array<T> = new Array<T>();
		var l_entities:Array<IEntity> = _getEntities( agenda );
		for ( i in l_entities )
		{
			if ( Std.is( i, classType ) ) l_result.push( cast i );
			if ( bubbleDown ) l_result.concat( i.getEntitiesByClass( classType, true ) );
		}
		if ( bubbleUp && ( parent != null ) ) l_result.concat( parent.getEntitiesByClass( classType, false, true ) );
		return l_result;
	}
	
	public function getEntityById( id:String, ?agenda:EAgenda, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):IEntity
	{
		if ( this.id == id ) return this;
		if ( bubbleEverywhere && ( _kernel.scenes.scene != null ) ) return _kernel.scenes.scene.getEntityById( id, true );
		var l_result:IEntity = null;
		var l_entities:Array<IEntity> = _getEntities( agenda );
		for ( i in l_entities )
		{
			if ( i.id == id ) return i;
			if ( bubbleDown ) l_result = i.getEntityById( id, true );
			if ( l_result != null ) return l_result;
		}
		if ( bubbleUp && ( parent != null ) ) l_result = parent.getEntityById( id, false, true );
		return l_result;
	}
	
	public function setAgenda( type:EAgenda ):Bool
	{
		if ( agenda == type ) return false;
		agenda = type;
		// remove all current entity views?
		// should cache current entities at this point
		return true;
	}
	
	private function _setParent( parent:IEntityCollection ):Void
	{
		this.parent = parent;
	}
	
	private function __set_id( value:String ):String { id = value; return id; }
	private function __get_agenda():EAgenda { return agenda; }
	private function __get_parent():IEntityCollection { return parent; }
	private function __get_view():IView { return view; }
	
}

private class _HelperAgenda
{
	public var entity( default, null ):IEntity;
	public var agenda( default, null ):EAgenda;
	
	public function new( entity:IEntity, ?agenda:EAgenda )
	{
		this.entity = entity;
		this.agenda = agenda;
	}
}