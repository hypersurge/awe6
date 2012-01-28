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

package awe6.interfaces;

/**
 * The IEntityCollection interface should be implemented by objects which compose multiple entities.
 * @author Robert Fell
 */
interface IEntityCollection
{
	/**
	 * Adds an entity to this object's children.
	 * @param	entity	The entity to add.
	 * @param	?agenda	Assigns the entity to a specific agenda.  If none is specified will assign to EAgenda.ALWAYS.
	 * @param	?isAddedToView	If true will add the child entity's view to this object's view.
	 * @param	?viewPriority	Sets the child entity's view stack priority order (higher numbers appear closer to the top of the stack).
	 */
	function addEntity( entity:IEntity, ?agenda:EAgenda, ?isAddedToView:Bool = false, ?viewPriority:Int = 0 ):Void;
	/**
	 * Removes an entity from this object's children.
	 * @param	entity	The entity to remove.
	 * @param	?agenda	If set then will only remove the specified entity from this agenda, else will remove from all agendas.
	 * @param	?isRemovedFromView	If true the child entity's view will be removed from this object's view.
	 */
	function removeEntity( entity:IEntity, ?agenda:EAgenda, ?isRemovedFromView:Bool = false ):Void;
	/**
	 * Retrieves all child entities.
	 * <p>Consider this a runtime only method, rather than calling it during constructor or initialization phases.</p>
	 * @param	?agenda	Used to filter results to the specified agenda.
	 * @return	Array of matching entities.
	 */
	function getEntities( ?agenda:EAgenda ):Array<IEntity>;
	/**
	 * Retrieves all child entities that match type.
	 * <p>Consider this a runtime only method, rather than calling it during constructor or initialization phases.</p>
	 * @param	classType	The type of class to match (can be any class, type or interface).
	 * @param	agenda	Used to filter results to the specified agenda.
	 * @param	?isBubbleDown	Set to true if you want to search this object's children for the requested entity.
	 * @param	?isBubbleUp	Set to true if you want to search this object's parent for the requested entity.
	 * @param	?isBubbleEverywhere	Set to true if you want to search the entire entity traversal stack for the requested entity.
	 * @return	Array of matching entities.
	 */
	function getEntitiesByClass<T>( classType:Class<T>, ?agenda:EAgenda, ?isBubbleDown:Bool = false, ?isBubbleUp:Bool = false, ?isBubbleEverywhere:Bool = false ):Array<T>;
	/**
	 * Retrieves the child entity with the specified id. 
	 * <p>Consider this a runtime only method, rather than calling it during constructor or initialization phases.</p>
	 * @param	id	The unique identifier of the entity you want to retrieve.
	 * @param	?agenda	Used to filter results to the specified agenda.
	 * @param	?isBubbleDown	Set to true if you want to search this object's children for the requested entity.
	 * @param	?isBubbleUp	Set to true if you want to search this object's parent for the requested entity.
	 * @param	?isBubbleEverywhere	Set to true if you want to search the entire entity traversal stack for the requested entity.
	 * @return	The requested entity or null if no entity with this id was found.
	 */
	function getEntityById( id:String, ?agenda:EAgenda, ?isBubbleDown:Bool = false, ?isBubbleUp:Bool = false, ?isBubbleEverywhere:Bool = false ):IEntity;
}