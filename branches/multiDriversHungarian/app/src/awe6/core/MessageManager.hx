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
import awe6.interfaces.IEntity;
import awe6.interfaces.IMessageManager;
import awe6.interfaces.IPriority;
import haxe.FastList;

/**
 * The MessageManager class provides a minimalist implementation of the IMessageManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class MessageManager extends Process, implements IMessageManager
{
	private var _subscriptions:FastList<_HelperSubscription<Dynamic,Dynamic>>;
	private var _isVerbose:Bool;

	override private function _init():Void 
	{
		super._init();
		_isVerbose = false; // used for debugging / testing of this manager (work in progress)
		_subscriptions = new FastList<_HelperSubscription<Dynamic,Dynamic>>();
	}
	
	public function addSubscriber<M,T>( subscriber:IEntity, message:M, handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<T>, ?isRemovedAfterFirstSend:Bool = false ):Void
	{
		var l_subscription:_HelperSubscription<M,T> = new _HelperSubscription( subscriber, message, handler, sender, senderClassType, isRemovedAfterFirstSend );
		_subscriptions.add( l_subscription );
	}
	
	public function getSubscribers<M,T>( ?subscriber:IEntity, ?message:M, ?handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<T> ):Array<IEntity>
	{
		var l_result:Array<IEntity> = [];
		var l_subscriptions = _getSubscriptions( subscriber, message, handler, sender, senderClassType );
		for ( i in l_subscriptions )
		{
			l_result.push( i.subscriber );
		}
		return l_result;
	}
	
	public function removeSubscribers<M,T>( ?subscriber:IEntity, ?message:M, ?handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<T> ):Void
	{
		var l_subscriptions = _getSubscriptions( subscriber, message, handler, sender, senderClassType );
		for ( i in l_subscriptions )
		{
			_subscriptions.remove( i );
			if ( _isVerbose )
			{
				trace( "Removing " + i.sender + ":" + i.message );
			}
		}		
	}
	
	public function sendMessage<M>( message:M, sender:IEntity, ?isBubbleDown:Bool = false, ?isBubbleUp:Bool = false, ?isBubbleEverywhere:Bool = false ):Void
	{
		_sendMessage( message, sender, sender, isBubbleDown, isBubbleUp, isBubbleEverywhere );
	}
	
	private function _sendMessage<M>( message:M, sender:IEntity, target:IEntity, ?isBubbleDown:Bool = false, ?isBubbleUp:Bool = false, ?isBubbleEverywhere:Bool = false ):Void
	{
		if ( _isVerbose )
		{
			trace( "Sending message: " + Std.string( message ) + " from " + sender.id );
		}
		if ( isBubbleEverywhere )
		{
			return _sendMessage( message, sender, _kernel.scenes.scene.getEntities()[0], true );		
		}
		var l_subscriptions:FastList<_HelperSubscription<Dynamic, Dynamic>> = _getSubscriptions( null, message, null, target );
		var l_isContinue:Bool = true;
		for ( i in l_subscriptions )
		{
			l_isContinue = _send( i, message, sender );
			if ( !l_isContinue )
			{
				return;
			}
		}
		if ( isBubbleDown )
		{
			var l_children:Array<IEntity> = target.getEntities();
			for ( j in l_children )
			{
				_sendMessage( message, sender, j, true );
			}
		}
		if ( isBubbleUp && ( target.parent != null ) && ( Std.is( target.parent, IEntity ) ) )
		{
			_sendMessage( message, sender, cast target.parent, false, true );
		}
		return;
	}
	
	private function _send<M>( subscription:_HelperSubscription<Dynamic,Dynamic>, message:M, sender:IEntity ):Bool
	{
		var l_isContinue:Bool = Reflect.callMethod( subscription.subscriber, subscription.handler, [message, sender] );		
		if ( subscription.isRemovedAfterFirstSend )
		{
			_subscriptions.remove( subscription );
		}
		return l_isContinue;
	}
	
	private function _getSubscriptions<M,T>( ?subscriber:IEntity, ?message:M, ?handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<T> ):FastList<_HelperSubscription<Dynamic,Dynamic>>
	{
		var l_result:FastList<_HelperSubscription<Dynamic,Dynamic>> = new FastList<_HelperSubscription<Dynamic,Dynamic>>();
		for ( i in _subscriptions )
		{
			if ( ( subscriber != null ) && ( i.subscriber != subscriber ) )
			{
				continue;
			}
//			if ( _isVerbose ) trace( 1 );
			if ( ( message != null ) && !Std.is( message, i.messageClass ) )
			{
				switch ( Type.typeof( message ) )
				{
					case ValueType.TEnum( e ) : if ( !Type.enumEq( message, i.message ) ) continue;
					default : if ( message != i.message ) continue;
				}
			}
//			if ( _isVerbose ) trace( 2 );
			if ( ( handler != null ) && ( !Reflect.compareMethods( i.handler, handler ) ) )
			{
				continue;
			}
//			if ( _isVerbose ) trace( 3 );
			if ( ( sender != null ) && ( i.sender != null ) && ( i.sender != sender ) )
			{
				continue;
			}
//			if ( _isVerbose ) trace( 4 );
			if ( ( i.senderClassType != null ) && ( !Std.is( sender, i.senderClassType ) ) )
			{
				continue;
			}
//			if ( _isVerbose ) trace( 5 );
			l_result.add( i );
		}
		return l_result;
	}	
}

private class _HelperSubscription<M,T>
{
	public var subscriber( default, null ):IEntity;
	public var message( default, null ):M;
	public var messageClass( default, null ):Class<M>;
	public var handler( default, null ):M->IEntity->Bool;
	public var sender( default, null ):IEntity;
	public var senderClassType( default, null ):Class<T>;
	public var isRemovedAfterFirstSend( default, null ):Bool;
	
	public function new( subscriber:IEntity, message:M, handler:M->IEntity->Bool, ?sender:IEntity, ?senderClassType:Class<T>, ?isRemovedAfterFirstSend:Bool = false )
	{
		this.subscriber = subscriber;
		this.message = message;
		this.handler = handler;
		this.sender = sender;
		this.senderClassType = senderClassType;
		this.isRemovedAfterFirstSend = isRemovedAfterFirstSend;
//		trace( message + ":" + messageClass + ":" + Type.typeof( message ) );
		this.messageClass = Type.getClass( message );
	}
}