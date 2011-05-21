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

class Callback
{
   var mDispatcher:IEventDispatcher;
   var mType:String;

#if flash
   var mFunc:Function;
   var mCapture:Null<Bool>;
#else true
   var mID:Int;
#end

   public function new(inDispatcher:IEventDispatcher,
       type:String, listener:Function,
       ?useCapture:Bool /*= false*/, ?priority:Int /*= 0*/)
   {
      mDispatcher = inDispatcher;
      mType = type;

      #if flash
      mFunc = listener;
      mCapture = useCapture;
      #else true
      mID =
      #end
      inDispatcher.addEventListener(type,listener,useCapture,priority);
   }

   public function Remove()
   {
      #if flash
      mDispatcher.removeEventListener(mType,mFunc,mCapture);
      #else true
      mDispatcher.RemoveByID(mType,mID);
      #end
      mDispatcher = null;
   }

}

