/**
 * Copyright (c) 2010, Jeash contributors.
 * 
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package jeash.events;

import flash.events.IEventDispatcher;
import flash.events.EventPhase;

class Listener
{
	public var mListner : Dynamic->Void;
	public var mUseCapture : Bool;
	public var mPriority : Int;
	static var sIDs = 1;
	public var mID:Int;

	public function new(inListener,inUseCapture,inPriority)
	{
		mListner = inListener;
		mUseCapture = inUseCapture;
		mPriority = inPriority;
		mID = sIDs++;
	}

	public function Is(inListener,inCapture)
	{
		return Reflect.compareMethods(mListner,inListener) && mUseCapture == inCapture;
	}

	public function dispatchEvent(event : Event)
	{
		mListner(event);
	}
}

typedef ListenerList = Array<Listener>;

typedef EventMap = Hash<ListenerList>;

/**
* @author	Hugh Sanderson
* @author	Russell Weir
**/
class EventDispatcher implements IEventDispatcher
{
	var mTarget:IEventDispatcher;
	var mEventMap : EventMap;
	static var mIDBase = 0;

	static private function compareListeners(l1:Listener,l2:Listener):Int{
		return l1.mPriority==l2.mPriority?0:(l1.mPriority>l2.mPriority?-1:1);
	}

	public function new(?target : IEventDispatcher) : Void
	{
		if(mTarget != null)
			mTarget = target;
		else
			mTarget = this;
		mEventMap = new EventMap();
	}

	public function addEventListener(type:String, inListener:Dynamic->Void,
			?useCapture:Bool /*= false*/, ?inPriority:Int /*= 0*/,
			?useWeakReference:Bool /*= false*/):Void
	{
		var capture:Bool = useCapture==null ? false : useCapture;
		var priority:Int = inPriority==null ? 0 : inPriority;

		var list = mEventMap.get(type);
		if (list==null)
		{
			list = new ListenerList();
			mEventMap.set(type,list);
		}

		var l =  new Listener(inListener,capture,priority);
		list.push(l);
		// trace("Add listener " + type +" now:" + list);
		//return l.mID;
	}

	public function dispatchEvent(event : Event) : Bool
	{
		if(event.target == null)
			event.target = mTarget;
		var list = mEventMap.get(event.type);
		var capture = event.eventPhase==EventPhase.CAPTURING_PHASE;
		if (list!=null)
		{
			list.sort(compareListeners);
			
			var idx = 0;
			while(idx<list.length)
			{
				var listener = list[idx];
				if (listener.mUseCapture==capture)
				{
					listener.dispatchEvent(event);
					if (event.jeashGetIsCancelledNow())
						return true;
				}
				// Detect if the just used event listener was removed...
				if (idx<list.length && listener!=list[idx])
				{
					// do not advance to next item because it looks like one was just removed
				}
				else
					idx++;
			}
			return true;
		}

		return false;
	}

	public function hasEventListener(type : String)
	{
		return mEventMap.exists(type);
	}
	public function removeEventListener(type : String, listener : Dynamic->Void,
			?inCapture : Bool) : Void
	{
		if (!mEventMap.exists(type)) return;

		var list = mEventMap.get(type);
		var capture:Bool = inCapture==null ? false : inCapture;
		for(i in 0...list.length)
		{
			if (list[i].Is(listener,capture))
			{
				list.splice(i,1);
				return;
			}
		}
	}

	public function toString() 
	{
		return "[ " + Type.getClassName(Type.getClass(this)) + " ]";
	}

	public function willTrigger(type : String) : Bool
	{
		return hasEventListener(type);
	}

	public function RemoveByID(inType:String,inID:Int) : Void
	{
		if (!mEventMap.exists(inType)) return;

		var list = mEventMap.get(inType);
		for(i in 0...list.length)
		{
			if (list[i].mID == inID)
			{
				list.splice(i,1);
				//trace("remove " + i);
				return;
			}
		}
		//trace("could not remove?");
	}


	public function DumpListeners()
	{
		trace(mEventMap);
	}

	/**
	 * Creates and dispatches a typical Event.COMPLETE
	 */
	public function DispatchCompleteEvent() {
		var evt = new Event(Event.COMPLETE);
		dispatchEvent(evt);
	}

	/**
	 * Creates and dispatches a typical IOErrorEvent.IO_ERROR
	 */
	public function DispatchIOErrorEvent() {
		var evt = new IOErrorEvent(IOErrorEvent.IO_ERROR);
		dispatchEvent(evt);
	}
}



