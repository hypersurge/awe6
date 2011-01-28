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

package awe6.interfaces;

/**
 * The IMessageManager should be implemented by objects intending to fulfill Entity to Entity synchronous messaging (signals).
 * <p>The interface provides an observer pattern allowing any Entity to listen to anything on any other Entity.</p>
 * @todo	Very early stages - need basic tests.  Will document when tested (if it works at all?).
 */
interface IMessageManager
{
	function addSubscriber<M,T>( subscriber:IEntity, message:Dynamic<M>, handler:M->IEntity->Void, ?sender:IEntity, ?senderClassType:Class<T>, ?isRemovedAfterFirstSend:Bool = false ):Void;
	function getSubscribers<M,T>( ?subscriber:IEntity, ?message:Dynamic<M>, ?handler:M->IEntity->Void, ?sender:IEntity, ?senderClassType:Class<T> ):Array<IEntity>;
	function removeSubscribers<M,T>( ?subscriber:IEntity, ?message:Dynamic<M>, ?handler:M->IEntity->Void, ?sender:IEntity, ?senderClassType:Class<T> ):Void;
	function sendMessage<M>( message:Dynamic<M>, sender:IEntity, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):Void;
}