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

import flash.geom.Matrix;
import flash.geom.ColorTransform;

import flash.swf.SWFStream;
import flash.utils.IDataInput;
import flash.swf.Tags;
import flash.swf.Character;
import flash.swf.Frame;
import flash.swf.SWF;

typedef FrameLabels = Hash<Int>;


class Sprite
{
   public var mSWF(default,null) : SWF;
   public var mFrames(default,null):Frames;
   var mFrameCount : Int;
   var mFrame:Frame;
   var mFrameLabels:FrameLabels;

   public function new(inSWF:SWF,inFrameCount:Int)
   {
      mSWF = inSWF;
      mFrameCount = inFrameCount;
      mFrames = [ null ]; // frame 0 is empty

      mFrame = new Frame();
      mFrameLabels = new FrameLabels();
   }

   public function GetFrameCount() { return mFrameCount; }

   public function LabelFrame(inName:String)
   {
      mFrameLabels.set(inName,mFrame.GetFrame());
   }

   public function ShowFrame()
   {
      mFrames.push(mFrame);
      mFrame = new Frame(mFrame);
   }

   public function RemoveObject(inStream:SWFStream,inVersion:Int)
   {
      if (inVersion==1)
        inStream.ReadID();
      var depth = inStream.ReadDepth();
      mFrame.Remove(depth);
   }

   public function PlaceObject(inStream:SWFStream,inVersion : Int)
   {
      if (inVersion==1)
      {
         var id = inStream.ReadID();
         var chr = mSWF.GetCharacter(id);
         var depth = inStream.ReadDepth();
         var matrix = inStream.ReadMatrix();
         var col_tx:ColorTransform = inStream.BytesLeft()>0 ?
                 inStream.ReadColorTransform() : null;
         mFrame.Place(id,chr,depth,matrix,col_tx,null);
      }
      else if (inVersion==2)
      {
         inStream.AlignBits();
         var has_clip_action = inStream.ReadBool();
         var has_clip_depth = inStream.ReadBool();
         var has_name = inStream.ReadBool();
         var has_ratio = inStream.ReadBool();
         var has_color_tx = inStream.ReadBool();
         var has_matrix = inStream.ReadBool();
         var has_character = inStream.ReadBool();
         var move = inStream.ReadBool();


         var depth = inStream.ReadDepth();
         var cid = has_character ? inStream.ReadID() : 0;

         var matrix = has_matrix ? inStream.ReadMatrix() : null;
         var col_tx = has_color_tx ? inStream.ReadColorTransform() : null;
         var name = has_name ? inStream.ReadString() : "";
         var ratio:Null<Int> = has_ratio ? inStream.ReadUI16() : null;
         var clip_depth = has_clip_depth ? inStream.ReadDepth() : 0;


         if (has_clip_action)
         {
            var reserved = inStream.ReadID();
            var action_flags = inStream.ReadID();
            throw("not implemented");
         }

         if (move)
         {
            if (has_character)
            {
               mFrame.Remove(depth);
               mFrame.Place(cid,mSWF.GetCharacter(cid),depth,matrix,col_tx,ratio);
            }
            else
            {
               mFrame.Move(depth,matrix,col_tx,ratio);
            }
         }
         else
         {
            mFrame.Place(cid,mSWF.GetCharacter(cid),depth,matrix,col_tx,ratio);
         }
      }
      else
      {
         throw("not implemented");
      }
   }

}
