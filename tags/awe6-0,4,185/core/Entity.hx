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
import awe6.interfaces.EAgenda;
import awe6.interfaces.IEntity;
import awe6.interfaces.IEntityCollection;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import flash.display.Sprite;
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
	
	private var _entityAgendaPairs:FastList<_HelperEntityAgendaPair>;
	private var _isAgendaDirty:Bool;
	private var _cachedEntities:Array<IEntity>;

	public function new( kernel:IKernel, ?id:String, ?sprite:Sprite ) 
	{
		view = new View( kernel, sprite, 0, this );
		this.id = ( id == null ) ? kernel.tools.createGuid() : id;
		super( kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		agenda = EAgenda.ALWAYS;
		_entityAgendaPairs = new FastList<_HelperEntityAgendaPair>();
		_isAgendaDirty = true;
		_cachedEntities = [];
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( _isAgendaDirty )
		{
			_cachedEntities = _getEntities( agenda );
			if ( !Type.enumEq( agenda, EAgenda.ALWAYS ) )
			{
				_cachedEntities = _cachedEntities.concat( _getEntities( EAgenda.ALWAYS ) );
			}
			_isAgendaDirty = false;
		}
		for ( i in _cachedEntities ) i.update( deltaTime );
	}
	
	override private function _disposer():Void 
	{
		remove();
		_kernel.messenger.removeSubscribers( this );
		_kernel.messenger.removeSubscribers( null, null, null, this );
		var l_entities:Array<IEntity> = _getEntities();
		l_entities.reverse();
		for ( i in l_entities ) i.dispose();
		for ( i in _entityAgendaPairs ) _entityAgendaPairs.remove( i );
		view.dispose();
		super._disposer();
	}

	public function addEntity( entity:IEntity, ?agenda:EAgenda, ?isAddedToView:Bool = false, ?viewPriority:Int ):Void
	{
		if ( isDisposed ) return;
		if ( agenda == null ) agenda = EAgenda.ALWAYS;
		for ( i in _entityAgendaPairs )
		{
			if ( ( i.entity == entity ) && ( Type.enumEq( i.agenda, agenda ) ) ) return; // already exists
		}
		_isAgendaDirty = true;
		var l_child:Entity = cast entity;
		var l_helperEntityAgendaPair:_HelperEntityAgendaPair = new _HelperEntityAgendaPair( entity, agenda );
		if ( l_child.parent != this )
		{
			l_child.remove( isAddedToView );
			l_child._setParent( this );
		}
		_entityAgendaPairs.add( l_helperEntityAgendaPair );
		if ( isAddedToView )
		{
			if ( Type.enumEq( agenda, this.agenda ) ) view.addChild( entity.view, viewPriority );
			else l_helperEntityAgendaPair.isAddedToView = true;
		}
	}
	
	public function removeEntity( entity:IEntity, ?agenda:EAgenda, ?isRemovedFromView:Bool = false ):Void
	{
		if ( isDisposed ) return;
		var l_child:Entity = cast entity;
		var l_isRemoved:Bool = false;
		for ( i in _entityAgendaPairs )
		{
			if ( ( i.entity == entity ) && ( ( agenda == null ) || ( Type.enumEq( i.agenda, agenda ) ) ) )
			{
				_entityAgendaPairs.remove( i );
				l_isRemoved = true;
			}
		}
		if ( l_isRemoved )
		{
			_isAgendaDirty = true;
			l_child._setParent( null );
			if ( isRemovedFromView ) entity.view.remove();
		}
	}
	
	public function remove( ?isRemovedFromView:Bool = false ):Void
	{
		if ( parent != null ) parent.removeEntity( this, isRemovedFromView );
	}	
	
	public function getEntities( ?agenda:EAgenda ):Array<IEntity>
	{
		return _getEntities( agenda );
	}
	
	private function _getEntities( ?agenda:EAgenda ):Array<IEntity>
	{
		var l_result:Array<IEntity> = new Array<IEntity>();
		for ( i in _entityAgendaPairs )
		{
			if ( ( agenda == null ) || Type.enumEq( agenda, i.agenda ) ) l_result.push( i.entity );
		}
		l_result.reverse();
		return l_result;
	}
	
	public function getEntitiesByClass<T>( classType:Class<T>, ?agenda:EAgenda, ?isBubbleDown:Bool = false, ?isBubbleUp:Bool = false, ?isBubbleEverywhere:Bool = false ):Array<T>
	{
		if ( isBubbleEverywhere && ( _kernel.scenes.scene != null ) ) return _kernel.scenes.scene.getEntitiesByClass( classType, agenda, true );
		var l_result:Array<T> = new Array<T>();
		var l_entities:Array<IEntity> = _getEntities( agenda );
		for ( i in l_entities )
		{
			if ( Std.is( i, classType ) ) l_result.push( cast i );
			if ( isBubbleDown ) l_result.concat( i.getEntitiesByClass( classType, agenda, true ) );
		}
		if ( isBubbleUp && ( parent != null ) ) l_result.concat( parent.getEntitiesByClass( classType, agenda, false, true ) );
		return l_result;
	}
	
	public function getEntityById( id:String, ?agenda:EAgenda, ?isBubbleDown:Bool = false, ?isBubbleUp:Bool = false, ?isBubbleEverywhere:Bool = false ):IEntity
	{
		if ( this.id == id ) return this;
		if ( isBubbleEverywhere && ( _kernel.scenes.scene != null ) ) return _kernel.scenes.scene.getEntityById( id, agenda, true );
		var l_result:IEntity = null;
		var l_entities:Array<IEntity> = _getEntities( agenda );
		for ( i in l_entities )
		{
			if ( i.id == id ) return i;
			if ( isBubbleDown ) l_result = i.getEntityById( id, agenda, true );
			if ( l_result != null ) return l_result;
		}
		if ( isBubbleUp && ( parent != null ) ) l_result = parent.getEntityById( id, agenda, false, true );
		return l_result;
	}
	
	public function setAgenda( type:EAgenda ):Bool
	{
		if ( type == null ) type = EAgenda.ALWAYS;
		if ( Type.enumEq( agenda, type ) ) return false;
		_isAgendaDirty = true;
		for ( i in _entityAgendaPairs )
		{
			var l_isAddedToView:Bool = ( Type.enumEq( agenda, i.agenda ) && ( i.entity.view.parent == view ) );
			if ( l_isAddedToView ) i.entity.view.remove();
			i.isAddedToView = i.isAddedToView || l_isAddedToView;			
		}
		agenda = type;
		for ( i in _entityAgendaPairs )
		{
			if ( i.isAddedToView && ( Type.enumEq( EAgenda.ALWAYS, i.agenda ) || Type.enumEq( agenda, i.agenda ) ) ) view.addChild( i.entity.view ); 
		}
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

private class _HelperEntityAgendaPair
{
	public var entity( default, null ):IEntity;
	public var agenda( default, null ):EAgenda;
	public var isAddedToView:Bool;
	
	public function new( entity:IEntity, ?agenda:EAgenda )
	{
		this.entity = entity;
		this.agenda = agenda;
		this.isAddedToView = false;
	}
}