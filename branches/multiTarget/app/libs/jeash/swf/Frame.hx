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

import flash.swf.Character;
import flash.swf.DepthSlot;
import flash.swf.DisplayAttributes;
import flash.geom.Matrix;
import flash.geom.ColorTransform;


typedef DepthObjects = IntHash<DepthSlot>;


class Frame
{
   var mObjects : DepthObjects;
   var mFrame : Int;

   public function new(?inPrev:Frame)
   {
      mObjects = new DepthObjects();
      if (inPrev!=null)
      {
         var objs = inPrev.mObjects;
         for(depth in objs.keys())
            mObjects.set( depth, objs.get(depth) );
         mFrame = inPrev.mFrame + 1;
      }
      else
         mFrame = 1;
   }

   public function CopyObjectSet()
   {
      var c = new DepthObjects();
      for(d in mObjects.keys())
         c.set(d,mObjects.get(d));
      return c;
   }

   public function Remove(inDepth:Int)
   {
      mObjects.remove(inDepth);
   }

   public function Place(inCharID:Int, inChar:Character, inDepth:Int,
                  inMatrix:Matrix, inColTx:ColorTransform,
                  inRatio:Null<Int>)
   {
      var old = mObjects.get(inDepth);
      if (old!=null)
         throw("Overwriting non-empty depth");
      var attrib = new DisplayAttributes( );
      attrib.mFrame = mFrame;
      attrib.mMatrix = inMatrix;
      attrib.mColorTransform = inColTx;
      attrib.mRatio = inRatio;
      attrib.mName = "";
      attrib.mCharacterID = inCharID;
      var obj = new DepthSlot(inChar,inCharID,attrib);
      mObjects.set(inDepth,obj);
   }

   public function Move(inDepth:Int,
                  inMatrix:Matrix, inColTx:ColorTransform,
                  inRatio:Null<Int>)
   {
      var obj = mObjects.get(inDepth);
      if (obj==null)
         throw("depth has no object");

      obj.Move(mFrame, inMatrix, inColTx, inRatio);
   }

   public function GetFrame() { return mFrame; }

}

typedef Frames = Array<Frame>;
