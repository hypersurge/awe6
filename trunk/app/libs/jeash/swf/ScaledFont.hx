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

import flash.display.GraphicsLike;
import flash.geom.Matrix;

class ScaledFont  implements flash.text.Font
{
   var mFont : flash.swf.Font;
   var mMatrix : Matrix;
   var mHeight: Int;
   var mScale : Float;
   var mAscent : Float;

   public function new(inFont:flash.swf.Font,inHeight : Int)
   {
      mFont = inFont;
      mHeight = inHeight;
      mScale = inHeight / 1024.0;
      mMatrix = new Matrix();
      mMatrix.scale(mScale,mScale);
      mAscent = GetAscent();
   }

   public function GetName():String { return mFont.GetName(); }
   public function GetHeight():Int { return mHeight; }
   public function CanRenderSolid():Bool { return false; }
   public function CanRenderOutline():Bool { return true; }

   public function Render(inGfx:GraphicsLike,inChar:Int,inX:Int,inY:Int,inOutline:Bool):Int
   {
      mMatrix.tx = inX;
      mMatrix.ty = inY + mAscent;
      return Std.int( mFont.RenderChar(inGfx,inChar,mMatrix) * mScale);
   }

   public function GetAdvance(inChar:Int):Int { return Std.int(mFont.GetAdvance(inChar) * mScale); }
   public function GetAscent() : Int  { return Std.int(mFont.GetAscent() * mScale); }
   public function GetDescent() : Int { return Std.int(mFont.GetDescent() * mScale); }
   public function GetLeading() : Int { return Std.int(mFont.GetLeading() * mScale); }


}
