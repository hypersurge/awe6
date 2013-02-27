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
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import haxe.FastList;

/**
 * The Entity class provides a minimalist implementation of the IEntity interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Entity extends Process, implements IEntity
{
	public var id( default, _set_id ):String;
	public var agenda( _get_agenda, null ):EAgenda;
	public var parent( _get_parent, null ):IEntity;
	public var view( _get_view, null ):IView;
	
	private var _entityAgendaPairs:FastList<_HelperEntityAgendaPair>;
	private var _isAgendaDirty:Bool;
	private var _cachedEntities:Array<IEntity>;

	public function new( p_kernel:IKernel, ?p_id:String, ?p_context:Context ) 
	{
		if ( view == null )
		{
			view = new View( p_kernel, p_context, 0, this );
		}
		id = ( p_id == null ) ? p_kernel.tools.createGuid() : p_id;
		super( p_kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		agenda = EAgenda.ALWAYS;
		_entityAgendaPairs = new FastList<_HelperEntityAgendaPair>();
		_isAgendaDirty = true;
		_cachedEntities = [];
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _isAgendaDirty )
		{
			_cachedEntities = _getEntities( agenda );
			if ( !Type.enumEq( agenda, EAgenda.ALWAYS ) )
			{
				_cachedEntities = _cachedEntities.concat( _getEntities( EAgenda.ALWAYS ) );
			}
			_isAgendaDirty = false;
		}
		for ( i in _cachedEntities )
		{
			i.update( p_deltaTime );
		}
	}
	
	override private function _disposer():Void 
	{
		remove();
		_kernel.messenger.removeSubscribers( this );
		_kernel.messenger.removeSubscribers( null, null, null, this, null );
		var l_entities:Array<IEntity> = _getEntities();
		l_entities.reverse();
		for ( i in l_entities )
		{
			i.dispose();
		}
		for ( i in _entityAgendaPairs )
		{
			_entityAgendaPairs.remove( i );
		}
		view.dispose();
		super._disposer();
	}

	public function addEntity( p_entity:IEntity, ?p_agenda:EAgenda = null, ?p_isAddedToView:Bool = false, ?p_viewPriority:Int = 0 ):Void
	{
		if ( isDisposed )
		{
			return;
		}
		if ( p_entity == null )
		{
			return;
		}
		if ( p_agenda == null )
		{
			p_agenda = EAgenda.ALWAYS;
		}
		for ( i in _entityAgendaPairs )
		{
			if ( ( i.entity == p_entity ) && ( Type.enumEq( i.agenda, p_agenda ) ) )
			{
				return; // already exists
			}
		}
		_isAgendaDirty = true;
		if ( p_entity.parent != this )
		{
			p_entity.remove( p_isAddedToView );
			if ( Std.is( p_entity, Entity ) )
			{
				var l_child:Entity = cast p_entity;
				l_child._setParent( this );
			}
		}
		var l_helperEntityAgendaPair:_HelperEntityAgendaPair = new _HelperEntityAgendaPair( p_entity, p_agenda );
		_entityAgendaPairs.add( l_helperEntityAgendaPair );
		if ( p_isAddedToView )
		{
			if ( Type.enumEq( p_agenda, agenda ) || ( p_agenda == EAgenda.ALWAYS ) )
			{
				view.addChild( p_entity.view, p_viewPriority );
			}
			else
			{
				p_entity.view.priority = p_viewPriority;
				l_helperEntityAgendaPair.isAddedToView = true;
			}
		}
	}
	
	public function removeEntity( p_entity:IEntity, ?p_agenda:EAgenda, ?p_isRemovedFromView:Bool = false ):Void
	{
		if ( isDisposed )
		{
			return;
		}
		var l_isRemoved:Bool = false;
		for ( i in _entityAgendaPairs )
		{
			if ( ( i.entity == p_entity ) && ( ( p_agenda == null ) || ( Type.enumEq( i.agenda, p_agenda ) ) ) )
			{
				_entityAgendaPairs.remove( i );
				l_isRemoved = true;
			}
		}
		if ( l_isRemoved )
		{
			_isAgendaDirty = true;
			if ( Std.is( p_entity, Entity ) )
			{
				var l_child:Entity = cast p_entity;
				l_child._setParent( null );
			}
			if ( p_isRemovedFromView )
			{
				p_entity.view.remove();
			}
		}
	}
	
	public function remove( ?p_isRemovedFromView:Bool = false ):Void
	{
		if ( parent != null )
		{
			parent.removeEntity( this, p_isRemovedFromView );
		}
	}	
	
	public function getEntities( ?p_agenda:EAgenda ):Array<IEntity>
	{
		return _getEntities( p_agenda );
	}
	
	private function _getEntities( ?p_agenda:EAgenda ):Array<IEntity>
	{
		var l_result:Array<IEntity> = new Array<IEntity>();
		for ( i in _entityAgendaPairs )
		{
			if ( ( p_agenda == null ) || Type.enumEq( p_agenda, i.agenda ) )
			{
				l_result.push( i.entity );
			}
		}
		l_result.reverse();
		return l_result;
	}
	
	public function getEntitiesByClass<T>( p_classType:Class<T>, ?p_agenda:EAgenda, ?p_isBubbleDown:Bool = false, ?p_isBubbleUp:Bool = false, ?p_isBubbleEverywhere:Bool = false ):Array<T>
	{
		if ( p_isBubbleEverywhere && ( _kernel.scenes.scene != null ) )
		{
			return _kernel.scenes.scene.getEntitiesByClass( p_classType, p_agenda, true );
		}
		var l_result:Array<T> = new Array<T>();
		var l_entities:Array<IEntity> = _getEntities( p_agenda );
		for ( i in l_entities )
		{
			if ( Std.is( i, p_classType ) )
			{
				l_result.push( cast i );
			}
			if ( p_isBubbleDown )
			{
				l_result.concat( i.getEntitiesByClass( p_classType, p_agenda, true ) );
			}
		}
		if ( p_isBubbleUp && ( parent != null ) )
		{
			l_result.concat( parent.getEntitiesByClass( p_classType, p_agenda, false, true ) );
		}
		return l_result;
	}
	
	public function getEntityById( p_id:String, ?p_agenda:EAgenda, ?p_isBubbleDown:Bool = false, ?p_isBubbleUp:Bool = false, ?p_isBubbleEverywhere:Bool = false ):IEntity
	{
		if ( id == p_id )
		{
			return this;
		}
		if ( p_isBubbleEverywhere && ( _kernel.scenes.scene != null ) )
		{
			return _kernel.scenes.scene.getEntityById( p_id, p_agenda, true );
		}
		var l_result:IEntity = null;
		var l_entities:Array<IEntity> = _getEntities( p_agenda );
		for ( i in l_entities )
		{
			if ( i.id == p_id )
			{
				return i;
			}
			if ( p_isBubbleDown )
			{
				l_result = i.getEntityById( p_id, p_agenda, true );
			}
			if ( l_result != null )
			{
				return l_result;
			}
		}
		if ( p_isBubbleUp && ( parent != null ) )
		{
			l_result = parent.getEntityById( p_id, p_agenda, false, true );
		}
		return l_result;
	}
	
	public function setAgenda( p_type:EAgenda ):Bool
	{
		if ( p_type == null )
		{
			p_type = EAgenda.ALWAYS;
		}
		if ( Type.enumEq( agenda, p_type ) )
		{
			return false;
		}
		_isAgendaDirty = true;
		for ( i in _entityAgendaPairs )
		{
			var l_isAddedToView:Bool = ( Type.enumEq( agenda, i.agenda ) && ( i.entity.view.parent == view ) );
			if ( l_isAddedToView )
			{
				i.entity.view.remove();
			}
			i.isAddedToView = i.isAddedToView || l_isAddedToView;			
		}
		agenda = p_type;
		for ( i in _entityAgendaPairs )
		{
			if ( i.isAddedToView && ( Type.enumEq( EAgenda.ALWAYS, i.agenda ) || Type.enumEq( agenda, i.agenda ) ) )
			{
				view.addChild( i.entity.view ); 
			}
		}
		return true;
	}
	
	private function _setParent( p_parent:IEntity ):Void
	{
		parent = p_parent;
	}
	
	private function _set_id( p_value:String ):String
	{
		id = p_value;
		return id;
	}
	
	private function _get_agenda():EAgenda
	{
		return agenda;
	}
	
	private function _get_parent():IEntity
	{
		return parent;
	}
	
	private function _get_view():IView
	{
		return view;
	}	
}

private class _HelperEntityAgendaPair
{
	public var entity( default, null ):IEntity;
	public var agenda( default, null ):EAgenda;
	public var isAddedToView:Bool;
	
	public function new( p_entity:IEntity, ?p_agenda:EAgenda )
	{
		entity = p_entity;
		agenda = p_agenda;
		isAddedToView = false;
	}
}