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

import flash.swf.SWFStream;
import flash.swf.SWF;
import flash.text.FontInstance;
import flash.display.GraphicsLike;

import flash.geom.Rectangle;
import flash.geom.Matrix;

typedef TextRecord =
{
   var mSWFFont:Font;

   var mOffsetX:Int;
   var mOffsetY:Int;
   var mHeight:Float;

   var mColour:Int;
   var mAlpha:Float;

   var mGlyphs:Array<Int>;
   var mAdvances:Array<Int>;
}

typedef TextRecords = Array<TextRecord>;

class StaticText
{
   var mBounds:Rectangle;
   var mTextMatrix:Matrix;
   var mRecords:TextRecords;


   public function new(inSWF:SWF, inStream:SWFStream, inVersion:Int)
   {
      inStream.AlignBits();

      mRecords = new TextRecords();
      mBounds = inStream.ReadRect();
      //trace("StaticText " + mBounds);

      mTextMatrix = inStream.ReadMatrix();

      var glyph_bits = inStream.ReadByte();
      var advance_bits = inStream.ReadByte();
      var font:Font = null;
      var height = 32.0;
      var colour = 0;
      var alpha = 1.0;

      inStream.AlignBits();
      while(inStream.ReadBool())
      {
         inStream.Bits(3);
         var has_font = inStream.ReadBool();
         var has_colour = inStream.ReadBool();
         var has_y = inStream.ReadBool();
         var has_x = inStream.ReadBool();
         if (has_font)
         {
            var font_id = inStream.ReadID();
            var ch = inSWF.GetCharacter(font_id);
            switch(ch)
            {
               case charFont(f):
                  font = f;
               default:
                  throw "Not font character";
            }
         }
         else if (font==null)
            throw "No font - not implemented";

         if (has_colour)
         {
            colour = inStream.ReadRGB();
            if (inVersion>=2)
               alpha = inStream.ReadByte()/255.0;
         }

         var x_off = has_x ? inStream.ReadSI16() : 0;
         var y_off = has_y ? inStream.ReadSI16() : 0;
         if (has_font)
            height = inStream.ReadUI16() * 0.05;
         var count = inStream.ReadByte();

         //trace("Glyphs : " + count);

         var glyphs = new Array<Int>();
         var advances = new Array<Int>();

         for(i in 0...count)
         {
            glyphs.push( inStream.Bits(glyph_bits) );
            advances.push( inStream.Bits(advance_bits,true) );
         }

         mRecords.push( {  mSWFFont:font,
                           mOffsetX : x_off,
                           mOffsetY : y_off,
                           mGlyphs : glyphs,
                           mColour : colour,
                           mAlpha : alpha,
                           mHeight : height,
                           mAdvances : advances } );


         inStream.AlignBits();
      }
   }

   public function Render(inGfx:GraphicsLike)
   {
      for(rec in mRecords)
      {
         var scale = rec.mHeight/1024;
         var m = mTextMatrix.clone();
         m.scale(scale,scale);
         m.tx += rec.mOffsetX * 0.05;
         m.ty +=  rec.mOffsetY * 0.05;
         inGfx.lineStyle();
         for(i in 0...rec.mGlyphs.length)
         {
            var tx = m.tx;
            inGfx.beginFill(rec.mColour,rec.mAlpha);
            rec.mSWFFont.RenderGlyph(inGfx,rec.mGlyphs[i], m );
            inGfx.endFill();
            m.tx += rec.mAdvances[i] * 0.05;
         }
      }
   }

}
