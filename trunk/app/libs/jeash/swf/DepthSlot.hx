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
import flash.swf.DisplayAttributes;
import flash.geom.ColorTransform;
import flash.geom.Matrix;



class DepthSlot
{
   //static var sInstanceID = 1;

   public var mID:Int;
   public var mAttribs : DisplayAttributesList;
   public var mCharacter : Character;

   // This is used when building
   var mCurrentAttrib : DisplayAttributes;


   public function new(inCharacter:Character,inCharacterID:Int,
           inAttribs:DisplayAttributes)
   {
      mID = inCharacterID;
      mAttribs = [];
      mAttribs.push(inAttribs);
      mCurrentAttrib = inAttribs;
      mCharacter = inCharacter;
   }

   public function Move(inFrame:Int,
                  inMatrix:Matrix, inColTx:ColorTransform,
                  inRatio:Null<Int>)
   {
      mCurrentAttrib = mCurrentAttrib.clone();
      mCurrentAttrib.mFrame = inFrame;
      if (inMatrix!=null) mCurrentAttrib.mMatrix = inMatrix;
      if (inColTx!=null) mCurrentAttrib.mColorTransform = inColTx;
      if (inRatio!=null) mCurrentAttrib.mRatio = inRatio;
      mAttribs.push(mCurrentAttrib);
   }



   public function FindClosestFrame(inHintFrame:Int,inFrame:Int)
   {
      var n = mAttribs.length;
      if (inHintFrame>=0)
         inHintFrame = 0;
      if (inHintFrame>0)
      {
         if ( mAttribs[inHintFrame-1].mFrame > inFrame)
            inHintFrame = 0;
      }

      for(i in inHintFrame...n)
      {
         if (mAttribs[i].mFrame > inFrame)
            return inHintFrame;
         inHintFrame = i;
      }
      
      return 0;
   }


}



