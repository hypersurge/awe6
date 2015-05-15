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
import haxe.ds.GenericStack;

/**
 * The MessageManager class provides a minimalist implementation of the IMessageManager interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 * @author	Valerie Elimak
 */
class MessageManager extends Process implements IMessageManager
{
	private var _subscriptions:GenericStack<_HelperSubscription<Dynamic>> ;
	private var _messageQueue:List<_HelperMessage<Dynamic>>;
	private var _isVerbose:Bool;
	
	override private function _init():Void 
	{
		super._init();
		_isVerbose = false; // used for debugging / testing of this manager (work in progress)
		_subscriptions = new GenericStack<_HelperSubscription<Dynamic>>();
		_messageQueue = new List<_HelperMessage<Dynamic>>();
	}
	
	public function addSubscriber<M>( p_subscriber:IEntity, p_message:M, p_handler:M->IEntity->Bool, ?p_sender:IEntity, ?p_senderClassType:Class<IEntity>, p_isRemovedAfterFirstSend:Bool = false ):Void
	{
		var l_subscription:_HelperSubscription<M> = new _HelperSubscription( p_subscriber, p_message, p_handler, p_sender, p_senderClassType, p_isRemovedAfterFirstSend );
		_subscriptions.add( l_subscription );
	}
	
	public function getSubscribers<M>( ?p_subscriber:IEntity, ?p_message:M, ?p_handler:M->IEntity->Bool, ?p_sender:IEntity, ?p_senderClassType:Class<IEntity> ):Array<IEntity>
	{
		var l_result:Array<IEntity> = [];
		var l_subscriptions = _getSubscriptions( p_subscriber, p_message, p_handler, p_sender, p_senderClassType );
		for ( i in l_subscriptions )
		{
			l_result.push( i.subscriber );
		}
		return l_result;
	}
	
	public function removeSubscribers<M>( ?p_subscriber:IEntity, ?p_message:M, ?p_handler:M->IEntity->Bool, ?p_sender:IEntity, ?p_senderClassType:Class<IEntity> ):Void
	{
		var l_subscriptions = _getSubscriptions( p_subscriber, p_message, p_handler, p_sender, p_senderClassType, true );
		for ( i in l_subscriptions )
		{
			_subscriptions.remove( i );
			if ( _isVerbose )
			{
				trace( "Removing " + i.sender + ":" + i.message );
			}
		}		
	}
	
	public function sendMessage<M>( p_message:M, p_sender:IEntity, p_isBubbleDown:Bool = false, p_isBubbleUp:Bool = false, p_isBubbleEverywhere:Bool = false ):Void
	{
		_sendMessage( p_message, p_sender, p_sender, p_isBubbleDown, p_isBubbleUp, p_isBubbleEverywhere );
	}
	
	public function reset():Bool
	{
		removeSubscribers();
		_messageQueue = new List<_HelperMessage<Dynamic>>();
		return true;
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _isOkToSendMessage() )
		{
			for ( i in _messageQueue )
			{
				_sendMessage( i.message, i.sender, i.target, i.isBubbleDown, i.isBubbleUp, i.isBubbleEverywhere );
				_messageQueue.remove( i );
			}
		}
	}
	
	private function _isOkToSendMessage():Bool
	{
		return _kernel.scenes.scene != null;
	}
	
	private function _sendMessage<M>( p_message:M, p_sender:IEntity, p_target:IEntity, p_isBubbleDown:Bool = false, p_isBubbleUp:Bool = false, p_isBubbleEverywhere:Bool = false ):Void
	{
		if ( _isVerbose )
		{
			trace( "Sending message: " + Std.string( p_message ) + " from " + p_sender.id + "(" + Type.getClass( p_sender ) + ") via " + p_target.id + " (" + Type.getClass( p_target ) + ")" );
		}
		if ( !_isOkToSendMessage() )
		{
			_messageQueue.push( new _HelperMessage( p_message, p_sender, p_target, p_isBubbleDown, p_isBubbleUp, p_isBubbleEverywhere ) );
			return;
		}
		if ( p_isBubbleEverywhere )
		{
			var l_entityFromScene:IEntity = _kernel.scenes.scene.getEntities()[0];
			if ( ( l_entityFromScene != null ) && ( l_entityFromScene.parent != null ) )
			{
				return _sendMessage( p_message, p_sender, _kernel.scenes.scene.getEntities()[0].parent, true );
			}
		}
		var l_subscriptions:GenericStack<_HelperSubscription<Dynamic>> = _getSubscriptions( p_target, p_message, null, p_sender );
		var l_isContinue:Bool = true;
		for ( i in l_subscriptions )
		{
			l_isContinue = _send( i, p_message, p_sender );
			if ( !l_isContinue )
			{
				return;
			}
		}
		if ( p_isBubbleDown )
		{
			var l_children:Array<IEntity> = p_target.getEntities();
			for ( j in l_children )
			{
				_sendMessage( p_message, p_sender, j, true );
			}
		}
		if ( p_isBubbleUp && ( p_target.parent != null ) && ( Std.is( p_target.parent, IEntity ) ) )
		{
			_sendMessage( p_message, p_sender, p_target.parent, false, true );
		}
		return;
	}
	
	private function _send<M>( p_subscription:_HelperSubscription<Dynamic>, p_message:M, p_sender:IEntity ):Bool
	{
		var l_isContinue:Bool = Reflect.callMethod( p_subscription.subscriber, p_subscription.handler, [p_message, p_sender] );
		if ( p_subscription.isRemovedAfterFirstSend )
		{
			_subscriptions.remove( p_subscription );
		}
		return l_isContinue;
	}
	
	private function _getSubscriptions<M>( ?p_subscriber:IEntity, ?p_message:M, ?p_handler:M->IEntity->Bool, ?p_sender:IEntity, ?p_senderClassType:Class<IEntity>, p_isRemove:Bool = false ):GenericStack<_HelperSubscription<Dynamic>>
	{
		var l_result:GenericStack<_HelperSubscription<Dynamic>> = new GenericStack<_HelperSubscription<Dynamic>>();
		for ( i in _subscriptions )
		{
			// if dispatched.subscriber is defined (it always is as target for none removals)
			// and it's neither
			// 	an exact match with subscriber.subscriber
			// 	nor an exact match with subscriber.sender
			// , bomb
			if ( ( p_subscriber != null ) && ( p_subscriber != i.subscriber ) && ( p_subscriber != i.sender ) )
			{
				continue;
			}
			// if dispatched.message is defined and the subscriber.message is not a typed match, bomb
			if ( ( p_message != null ) && !Std.is( p_message, i.messageClass ) )
			{
				switch ( Type.typeof( p_message ) )
				{
					case TEnum( e ) :
						if ( ( Type.getEnum( untyped p_message ) != Type.getEnum( i.message ) ) || ( Type.enumConstructor( untyped p_message ) != Type.enumConstructor( i.message ) ) )
						{
							e; // do something with e to avoid warning?
							continue;
						}
					default :
						if ( p_message != i.message )
						{
							continue;
						}
				}
			}
			// if dispatched.handler is defined and the subscriber.handler is not an exact match, bomb // only used for unsubscribe?
			if ( ( p_handler != null ) && ( !Reflect.compareMethods( i.handler, p_handler ) ) )
			{
				continue;
			}
			if ( p_sender != null )
			{
				// if doing an unsubscribe
				if ( p_isRemove )
				{
					// if subscriber sender is class typed (i.e. vague), bomb
					if ( i.senderClassType != null )
					{
						continue;
					}
					// if subscriber sender is not specified (i.e. vague), bomb
					if ( i.sender == null )
					{
						continue;
					}
				}
				// if suscriber sender is class typed and dispatched.sender is not of that type, bomb
				if ( ( i.senderClassType != null ) && !Std.is( p_sender, i.senderClassType ) )
				{
					continue;
				}
				// if subscriber.sender is specific and dispatched.sender is not exact match, bomb
				if ( ( i.sender != null ) && ( i.sender != p_sender ) )
				{
					continue;
				}
			}
			l_result.add( i );
		}
		return l_result;
	}	
}

private class _HelperSubscription<M>
{
	public var subscriber( default, null ):IEntity;
	public var message( default, null ):M;
	public var messageClass( default, null ):Class<M>;
	public var handler( default, null ):M->IEntity->Bool;
	public var sender( default, null ):IEntity;
	public var senderClassType( default, null ):Class<IEntity>;
	public var isRemovedAfterFirstSend( default, null ):Bool;
	
	public function new( p_subscriber:IEntity, p_message:M, p_handler:M->IEntity->Bool, ?p_sender:IEntity, ?p_senderClassType:Class<IEntity>, p_isRemovedAfterFirstSend:Bool = false )
	{
		subscriber = p_subscriber;
		message = p_message;
		handler = p_handler;
		sender = p_sender;
		senderClassType = p_senderClassType;
		isRemovedAfterFirstSend = p_isRemovedAfterFirstSend;
		messageClass = Type.getClass( p_message );
	}
	
	public function toString():String
	{
		var l_result:String = "_HelperSubscription { \n"
			+ "subscriber : " + subscriber + "\n"
			+ "message : " + message+ "\n"
			+ "handler : " + handler+ "\n"
			+ "sender : " + sender+ "\n"
			+ "senderClassType : " + senderClassType+ "\n"
			+ "isRemovedAfterFirstSend : " + isRemovedAfterFirstSend+ "\n"
			+ "messageClass : " + messageClass + "\n }";
		return l_result;
	}
}

private class _HelperMessage<M>
{
	public var message( default, null ):M;
	public var sender( default, null ):IEntity;
	public var target( default, null ):IEntity;
	public var isBubbleDown( default, null ):Bool;
	public var isBubbleUp( default, null ):Bool;
	public var isBubbleEverywhere( default, null ):Bool;
	
	public function new( p_message:M, p_sender:IEntity, p_target:IEntity, p_isBubbleDown:Bool = false, p_isBubbleUp:Bool = false, p_isBubbleEverywhere:Bool = false )
	{
		message = p_message;
		sender = p_sender;
		target = p_target;
		isBubbleDown = p_isBubbleDown;
		isBubbleUp = p_isBubbleUp;
		isBubbleEverywhere = p_isBubbleEverywhere;
	}
}