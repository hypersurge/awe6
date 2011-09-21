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

package jeash.swf;

import flash.geom.ColorTransform;
import flash.geom.Matrix;


class DisplayAttributes
{
   public var mFrame:Int;
   public var mCharacterID:Int;
   public var mMatrix:Matrix;
   public var mColorTransform:ColorTransform;
   public var mRatio:Null<Int>;
   public var mName:String;

   public function new() { }

   public function clone()
   {
      var n = new DisplayAttributes();
      n.mFrame = mFrame;
      n.mMatrix = mMatrix;
      n.mColorTransform = mColorTransform;
      n.mRatio = mRatio;
      n.mName = mName;
      n.mCharacterID = mCharacterID;
      return n;
   }

   public function Apply(inObj:flash.display.DisplayObject)
   {
      if (mMatrix!=null)
         inObj.transform.matrix = mMatrix.clone();

      if (mRatio!=null && Std.is(inObj,MorphObject))
      {
         var morph:MorphObject = untyped inObj;
         return morph.SetRatio(mRatio);
      }
      return false;
   }
}


typedef DisplayAttributesList = Array<DisplayAttributes>;
