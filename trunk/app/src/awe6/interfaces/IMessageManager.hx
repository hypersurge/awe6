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
 * @todo	Test functionality
 */
interface IMessageManager
{
	function addSubscriber<M,T>( subscriber:IEntityCollection, message:Dynamic<M>, handler:M->IEntityCollection->Void, ?sender:IEntityCollection, ?senderClassType:Class<T>, ?isRemovedAfterFirstSend:Bool = false ):Void;
	function getSubscribers<M,T>( ?subscriber:IEntityCollection, ?message:Dynamic<M>, ?handler:M->IEntityCollection->Void, ?sender:IEntityCollection, ?senderClassType:Class<T> ):Array<IEntityCollection>;
	function removeSubscribers<M,T>( ?subscriber:IEntityCollection, ?message:Dynamic<M>, ?handler:M->IEntityCollection->Void, ?sender:IEntityCollection, ?senderClassType:Class<T> ):Void;
	function sendMessage<M>( message:Dynamic<M>, sender:IEntityCollection, ?bubbleDown:Bool = false, ?bubbleUp:Bool = false, ?bubbleEverywhere:Bool = false ):Void;
}