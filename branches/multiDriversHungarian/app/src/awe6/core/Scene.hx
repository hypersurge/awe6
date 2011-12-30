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
import awe6.interfaces.EScene;
import awe6.interfaces.IEntity;
import awe6.interfaces.IEntityCollection;
import awe6.interfaces.IKernel;
import awe6.interfaces.IScene;
import awe6.interfaces.IView;

/**
 * The Scene class provides a minimalist implementation of the IScene interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Scene extends Process, implements IScene
{
	public var type( default, null ):EScene;
	public var view( __get_view, null ):IView;
	public var isDisposable( default, null ):Bool;
	public var isPauseable( default, null ):Bool;
	public var isMuteable( default, null ):Bool;	
	public var isSessionSavedOnNext( default, null ):Bool;

	private var _entity( default, null ):IEntity;

	public function new( p_kernel:IKernel, p_type:EScene, ?p_isPauseable:Bool = false, ?p_isMutable:Bool = true, ?p_isSessionSavedOnNext:Bool = false ) 
	{
		type = p_type;
		isPauseable = p_isPauseable;
		isMuteable = p_isMutable;
		isSessionSavedOnNext = p_isSessionSavedOnNext;
		super( p_kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		isDisposable = true;
		_entity = new Entity( _kernel );
		view = _entity.view;
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_entity.update( p_deltaTime );
	}
	
	override private function _disposer():Void 
	{
		_entity.dispose();
		view.dispose();
		super._disposer();		
	}
	
	public function addEntity( p_entity:IEntity, ?p_agenda:EAgenda, ?p_isAddedToView:Bool = false, ?p_viewPriority:Int = 0 ):Void
	{
		_entity.addEntity( p_entity, p_agenda, p_isAddedToView, p_viewPriority );
	}
	
	public function removeEntity( p_entity:IEntity, ?p_agenda:EAgenda, ?p_isRemovedFromView:Bool = false ):Void
	{
		_entity.removeEntity( p_entity, p_agenda, p_isRemovedFromView );
	}
	
	public function getEntities( ?p_agenda:EAgenda ):Array<IEntity>
	{
		return _entity.getEntities( p_agenda );
	}
	
	public function getEntitiesByClass<T>( p_classType:Class<T>, ?p_agenda:EAgenda, ?p_isBubbleDown:Bool = false, ?p_isBubbleUp:Bool = false, ?p_isBubbleEverywhere:Bool = false ):Array<T>
	{
		return _entity.getEntitiesByClass( p_classType, p_agenda, p_isBubbleDown, p_isBubbleUp, false );
	}
	
	public function getEntityById( p_id:String, ?p_agenda:EAgenda, ?p_isBubbleDown:Bool = false, ?p_isBubbleUp:Bool = false, ?p_isBubbleEverywhere:Bool = false ):IEntity
	{
		return _entity.getEntityById( p_id, p_agenda, p_isBubbleDown, p_isBubbleUp, false );
	}
	
	private function __get_view():IView
	{
		return view;
	}
}

