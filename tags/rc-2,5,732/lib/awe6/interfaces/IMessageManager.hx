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
 * The IMessageManager should be implemented by objects intending to fulfill Entity to Entity synchronous messaging (also known as events or signals).
 * <p>The interface provides an observer pattern oriented manager allowing any Entity to listen to anything on any other Entity.</p>
 * <p>Note, the author is not a fan of observer pattern and provides this manager with a note of caution - there is <i>always</i> a better way to communicate than to fire shots into the dark!</p>
 * <p>This manager is intentionally abstract / generic.  It allows expressive synchronous events - i.e. use anything as a message (string, enumerator, class, state based object etc).</p>
 * <p>It may make more sense to handle events using an alternative, event or signal specific library.  Adapt one as an IEntity and inject into any scene as needed.</p>
 */
interface IMessageManager extends IResettable
{
	/**
	 * Register an entity's interest in a subject.
	 * @param	subscriber	Entity listening / observing for messages.
	 * @param	message	Specific message to listen for.
	 * @param	handler	Function to pass observed messages to: receives Message & Sender and returns true if send propogation is to continue (true should be default behavior).
	 * @param	?sender	Only listen to messages from this entity.
	 * @param	?senderClassType	Only listen to messages from this type of entity.
	 * @param	?isRemovedAfterFirstSend	Once a message has been received, no longer listen for further messages under the same criteria.
	 * @type	<M>	Messages can be any type: String, Class, Enum.  For recursive types use Enums.
	 */
	function addSubscriber<M>( subscriber:IEntity, message:M, handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<IEntity>, isRemovedAfterFirstSend:Bool = false ):Void;
	/**
	 * Retrieve all entity's interested in a subject.
	 * <p>All parameters are optional to allow wildcard filtering.</p>
	 * @param	?subscriber	Entity listening / observing for messages.
	 * @param	?message	Specific message to listen for.
	 * @param	?handler	Function to pass observed messages to.
	 * @param	?sender	Only listen to messages from this entity.
	 * @param	?senderClassType	Only listen to messages from this type of entity.
	 * @return	An array of entities corresponding to the specified filters.
	 * @type	<M>	Messages can be any type: String, Class, Enum.  For recursive types use Enums.
	 */
	function getSubscribers<M>( ?subscriber:IEntity, ?message:M, ?handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<IEntity> ):Array<IEntity>;
	/**
	 * Unsubscribes entities matching the specified criteria.
	 * @param	?subscriber	Entity listening / observing for messages.
	 * @param	?message	Specific message to listen for.
	 * @param	?handler	Function to pass observed messages to.
	 * @param	?sender	Only listen to messages from this entity.
	 * @param	?senderClassType	Only listen to messages from this type of entity.
	 * @type	<M>	Messages can be any type: String, Class, Enum.  For recursive types use Enums.
	 */
	function removeSubscribers<M>( ?subscriber:IEntity, ?message:M, ?handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<IEntity> ):Void;
	/**
	 * Dispatch a message from a specific entity.
	 * @param	message	Message to dispatch.
	 * @param	sender	The originator of the message (can be spoofed).
	 * @param	?isBubbleDown	Set to true if you want to dispatch this message to the sender's children.
	 * @param	?isBubbleUp	Set to true if you want to dispatch this message to the sender's parent.
	 * @param	?isBubbleEverywhere	Set to true if you want to dispatch this message to the entity traversal stack.
	 * @type	<M>	Messages can be any type: String, Class, Enum.  For recursive types use Enums.
	 */
	function sendMessage<M>( message:M, sender:IEntity, isBubbleDown:Bool = false, isBubbleUp:Bool = false, isBubbleEverywhere:Bool = false ):Void;
}