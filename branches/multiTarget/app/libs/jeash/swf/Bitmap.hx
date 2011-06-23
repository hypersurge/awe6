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

import flash.display.BitmapData;

#if flash
import flash.utils.ByteArray;
#end

class Bitmap
{
#if flash
   var mLoader:flash.display.Loader;
   var mAlpha:ByteArray;
#end

   var mBitmap:BitmapData;

   /*
             1 = RGBA index
             2 = 32-bit RGB
      fmt :  3 = RGB index
             4 = 15-bit RGB
             5 = 24-bit RGB
   */


   public function new(inStream:SWFStream,inLossless:Bool,inVersion:Int)
   {
      mBitmap = null;

      #if flash9
      mLoader = null;
      #end

      if (inLossless)
      {
         var fmt = inStream.ReadByte();
         var w = inStream.ReadUI16();
         var h = inStream.ReadUI16();
         var table_size = fmt==3 ? (inStream.ReadByte()+1) : 0;
         var buffer = inStream.ReadBytes( inStream.BytesLeft() );
         buffer = flash.utils.Uncompress.Run(buffer);

         if (inVersion==2)
         {
            if (fmt==4)
               throw("No 15-bit format in DefineBitsLossless2");
            else
               fmt = fmt==3 ? 1 : 2;
         }

         mBitmap = new BitmapData(w,h,fmt<3);

         #if flash
            SetPixelData(buffer.getData(),fmt,table_size);
         #else
            // TODO: make nme take haxe.io.Bytes
            mBitmap.SetPixelData(buffer.toString(),fmt,table_size);
         #end
      }
      else
      {
         var buffer:haxe.io.Bytes = null;
         var alpha:haxe.io.Bytes = null;
   
         if (inVersion==2)
         {
            var size = inStream.BytesLeft();
            buffer = inStream.ReadBytes(size);
         }
         else if (inVersion==3)
         {
            var size = inStream.ReadInt();
            buffer = inStream.ReadBytes(size);
            alpha = inStream.ReadBytes( inStream.BytesLeft() );
            alpha = flash.utils.Uncompress.Run(alpha);
         }
   
   
   
         #if flash
            mLoader = new flash.display.Loader();
            mAlpha = alpha==null ? null : alpha.getData();
            if (mAlpha!=null)
               mLoader.addEventListener(flash.events.Event.COMPLETE, AddAlpha );
            mLoader.loadBytes(buffer.getData());
         #else
            mBitmap = new BitmapData(0,0);
            // TODO: make nme take haxe.io.Bytes
            var alpha_string:String = alpha==null ? null : alpha.toString();
            mBitmap.LoadFromBytes(buffer.getData(),"JPG",alpha_string);
         #end
      }

   }

   public function GetBitmap()
   {
      #if flash
         if (mBitmap==null && mLoader!=null)
         {
            if (mLoader.content==null)
               return null;
            //trace(mLoader.content);
            var bitmap:flash.display.Bitmap = untyped mLoader.content;
            mBitmap = bitmap.bitmapData;
         }
      #end

      return mBitmap;
   }

   function AddAlpha(inEvt:flash.events.Event)
   {
#if flash
      var bitmap = GetBitmap();
      var w = bitmap.width;
      var h = bitmap.height;
      if (mAlpha.length !=w*h)
          throw("Alpha size mismatch");
      var idx = 0;
      var a = mAlpha;
      for(y in 0...h)
         for(x in 0...w)
            bitmap.setPixel32(x,y, bitmap.getPixel(x,y) | (a[idx++]<<24) );
#end
   }


#if flash

   function SetPixelData(inData:ByteArray, inFormat:Int, inTableSize:Int )
   {
      mBitmap.lock();
      var w = mBitmap.width;
      var h = mBitmap.height;

      if (inFormat==2)
      {
         for(y in 0...h)
            for(x in 0...w)
            {
                mBitmap.setPixel32(x,y, inData.readUnsignedInt() );
            }
      }
      mBitmap.lock();
   }

#end


}

