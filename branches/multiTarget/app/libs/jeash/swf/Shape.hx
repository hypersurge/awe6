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

import flash.geom.Rectangle;
import flash.geom.Matrix;
import flash.display.JointStyle;

import flash.display.GraphicsLike;
import flash.swf.SWFStream;
import flash.swf.SWF;

typedef RenderFunc = GraphicsLike -> Void;
typedef RenderFuncList = Array<RenderFunc>;


class Shape
{
   var mBounds:Rectangle;
   var mEdgeBounds:Rectangle;
   var mHasNonScaled:Bool;
   var mHasScaled:Bool;
   var mCommands:RenderFuncList;
   var mSWF:SWF;
   var mWaitingLoader:Bool;

   static var ftSolid  = 0x00;
   static var ftLinear = 0x10;
   static var ftRadial = 0x12;
   static var ftRadialF= 0x13;
   static var ftBitmapRepeatSmooth  = 0x40;
   static var ftBitmapClippedSmooth = 0x41;
   static var ftBitmapRepeat = 0x42;
   static var ftBitmapClipped= 0x43;


   public function new(inSWF:SWF, inStream:SWFStream, inVersion:Int)
   {
      mSWF = inSWF;

      inStream.AlignBits();
      mCommands = [];
      mBounds = inStream.ReadRect();
      mWaitingLoader = false;
      // trace(mBounds);


      if (inVersion==4)
      {
         inStream.AlignBits();
         mEdgeBounds = inStream.ReadRect();
         inStream.AlignBits();
         inStream.Bits(6);
         mHasNonScaled = inStream.ReadBool();
         mHasScaled = inStream.ReadBool();
      }
      else
      {
         mEdgeBounds = mBounds.clone();
         mHasScaled = mHasNonScaled = true;
      }

      var fill_styles = ReadFillStyles(inStream,inVersion);
      var line_styles = ReadLineStyles(inStream,inVersion);

      inStream.AlignBits();
      var fill_bits = inStream.Bits(4);
      var line_bits = inStream.Bits(4);


      //trace("fill_bits " + fill_bits);
      //trace("line_bits " + line_bits);

      var pen_x = 0.0;
      var pen_y = 0.0;

      var current_fill = -1;
      var current_line = -1;

      while(true)
      {
         var edge = inStream.ReadBool();
         // trace("Edge :" + edge);
         if (!edge)
         {
            var new_styles = inStream.ReadBool();
            var new_line_style = inStream.ReadBool();
            var new_fill_style1 = inStream.ReadBool();
            var new_fill_style0 = inStream.ReadBool();
            var move_to = inStream.ReadBool();

            //trace("new_styles : " + new_styles);
            //trace("new_line_style : " + new_line_style);
            //trace("new_fill_style0 : " + new_fill_style0);
            //trace("new_fill_style1 : " + new_fill_style1);
            //trace("move_to : " + move_to);
   
            // End-of-shape - Done !
            if (!move_to && !new_styles && !new_line_style && 
                    !new_fill_style1 && !new_fill_style0 )
               break;
 
            if (inVersion!=2 && inVersion!=3)
            {
               // The case where new_styles==true seems to have some
               //  additional data (bitmap?) for embeded line styles.
               new_styles = false;
            }


            // Style changed record ...
            if (move_to)
            {
               var bits = inStream.Bits(5);
               pen_x = inStream.Twips(bits);
               pen_y = inStream.Twips(bits);
               var px = pen_x;
               var py = pen_y;
               //trace("Move : " + pen_x + "," + pen_y);
               mCommands.push( function(g:GraphicsLike) { g.moveTo(px,py);} );
            }
   
            if (new_fill_style0)
            {
               var fill_style = inStream.Bits(fill_bits);
               var styles = fill_styles;
               if (fill_style>=styles.length)
                   throw("Invalid fill style");
               if (fill_style!=current_fill)
               {
                  mCommands.push( styles[fill_style] );
                  current_fill = fill_style;
               }
            }
   
            if (new_fill_style1)
            {
               var fill_style = inStream.Bits(fill_bits);
               if (fill_style>=fill_styles.length)
                   throw("Invalid fill style");
           
               if (fill_style!=current_fill)
               {
                  var func = fill_styles[fill_style];
                  mCommands.push( func );
                  current_fill = fill_style;
               }
            }
   
            if (new_line_style)
            {
               var line_style = inStream.Bits(line_bits);
               if (line_style>=line_styles.length)
                   throw("Invalid line style: " + line_style + "/" +
                       line_styles.length + " (" + line_bits + ")");
               if (line_style != current_line)
               {
                  var func =  line_styles[line_style];
                  mCommands.push(func);
                  current_line = line_style;
               }
            }
   
            if (new_styles)
            {
               //trace("New fill styles !");
               fill_styles = ReadFillStyles(inStream,inVersion);
               line_styles = ReadLineStyles(inStream,inVersion);
               fill_bits = inStream.Bits(4);
               line_bits = inStream.Bits(4);
               current_line = -1;
               current_fill = -1;
               //trace("fill_bits : " + fill_bits);
               //trace("line_bits : " + line_bits);
            }
         }
         // edge ..
         else
         {
            // straight
            if (inStream.ReadBool())
            {
               var delta_bits = inStream.Bits(4) + 2;
               if (inStream.ReadBool())
               {
                  pen_x += inStream.Twips(delta_bits);
                  pen_y += inStream.Twips(delta_bits);
               }
               else if (inStream.ReadBool())
                  pen_y += inStream.Twips(delta_bits);
               else
                  pen_x += inStream.Twips(delta_bits);
   
               var px = pen_x;
               var py = pen_y;
               //trace("Line to : " + px + "," + py );
               mCommands.push( function(g:GraphicsLike) { g.lineTo(px,py);} );
            }
            // Curved ...
            else
            {
               var delta_bits = inStream.Bits(4) + 2;
               var cx = pen_x + inStream.Twips(delta_bits);
               var cy = pen_y + inStream.Twips(delta_bits);
               var px = cx + inStream.Twips(delta_bits);
               var py = cy + inStream.Twips(delta_bits);
               // Can't push "pen_x/y" in closure because it uses a reference
               //  to the member variable, not a copy of the current value.
               pen_x = px;
               pen_y = py;
               //trace("Curve to : " + px + "," + py );
               mCommands.push( function(g:GraphicsLike)
                  { g.curveTo(cx,cy,px,py);} );
            }
         }
      }

      mSWF = null;

      // Render( new flash.display.DebugGfx());
   }

   public function Render(inGraphics:GraphicsLike)
   {
      mWaitingLoader = false;
      for(c in mCommands)
         c(inGraphics);
      return mWaitingLoader;
   }


   function ReadFillStyles(inStream:SWFStream,inVersion:Int) : RenderFuncList
   {
      var result:RenderFuncList = [];


      // Special null fill-style
      result.push( function(g:GraphicsLike) { g.endFill(); } );


      var n = inStream.ReadArraySize(true);
      for(i in 0...n)
      {
         var fill = inStream.ReadByte();
         if (fill==ftSolid)
         {
            var RGB = inStream.ReadRGB();
            var A = inVersion >= 3 ? (inStream.ReadByte()/255.0) : 1.0;
            result.push( function(g:GraphicsLike) { g.beginFill(RGB,A); } );
         }
         // Gradient
         else if ( (fill & 0x10) !=0 )
         {
            var matrix = inStream.ReadMatrix();
            inStream.AlignBits();
            var spread = inStream.ReadSpreadMethod();
            var interp = inStream.ReadInterpolationMethod();
            var n = inStream.Bits(4);
            var colors = [];
            var alphas = [];
            var ratios = [];
            for(i in 0...n)
            {
               ratios.push( inStream.ReadByte() );
               colors.push( inStream.ReadRGB() );
               alphas.push( inVersion>=3 ? inStream.ReadByte()/255.0 : 1.0 );
            }
            var focus = fill==ftRadialF ?  inStream.ReadByte()/255.0 : 0.0;
            var type = fill==ftLinear ? flash.display.GradientType.LINEAR :
                                         flash.display.GradientType.RADIAL;

            result.push( function(g:GraphicsLike) {
               g.beginGradientFill(type,colors,alphas,ratios,matrix,
                                   spread, interp, focus ); } );
                                   
         }
         // Bitmap
         else if ( (fill & 0x40)!=0)
         {
            var id = inStream.ReadID();
            var bitmap = mSWF.GetBitmap(id);


            inStream.AlignBits();
            var matrix = inStream.ReadMatrix();
            // Not too sure about these.
            // A scale of (20,20) is 1 pixel-per-unit.
            matrix.a *= 0.05;
            matrix.b *= 0.05;
            matrix.c *= 0.05;
            matrix.d *= 0.05;

            inStream.AlignBits();
            var repeat = fill == ftBitmapRepeat || fill==ftBitmapRepeatSmooth;
            var smooth = fill == ftBitmapRepeatSmooth||
                         fill ==ftBitmapClippedSmooth;

            if (bitmap!=null)
            {
               result.push( function(g:GraphicsLike) {
                  g.beginBitmapFill(bitmap,matrix,repeat,smooth); } );
            }
            // May take some time for bitmap to load ...
            else
            {
               var s = mSWF;
               var me = this;
               result.push( function(g:GraphicsLike) {
                  if (bitmap==null)
                  {
                     bitmap = s.GetBitmap(id);
                     if (bitmap==null)
                     {
                        me.mWaitingLoader = true;
                        g.endFill();
                        return;
                     }
                     else
                        me = null;
                  }

               g.beginBitmapFill(bitmap,matrix,repeat,smooth); } );
            }

         }
      }
      return result;
   }

   function ReadLineStyles(inStream:SWFStream,inVersion:Int) : RenderFuncList
   {
      var result:RenderFuncList = [];

      // Special null line-style
      result.push( function(g:GraphicsLike) { g.lineStyle(); } );

      var n = inStream.ReadArraySize(true);
       
      for(i in 0...n)
      {
         // Linestyle 2
         if (inVersion>=4)
         {
            inStream.AlignBits();
            var w = inStream.ReadDepth()*0.05;
            var start_caps = inStream.ReadCapsStyle();
            var joints = inStream.ReadJoinStyle();
            var has_fill = inStream.ReadBool();
            var scale = inStream.ReadScaleMode();
            var pixel_hint = inStream.ReadBool();
            var reserved = inStream.Bits(5);
            var no_close = inStream.ReadBool();
            var end_caps = inStream.ReadCapsStyle();
            var miter = joints==JointStyle.MITER ? inStream.ReadDepth()/256.0:1;
            var color = has_fill ? 0 : inStream.ReadRGB();
            var A = has_fill  ? 1.0 : (inStream.ReadByte()/255.0);

            /*
             trace("Width  :" + w);
             trace("Startcaps  :" + start_caps);
             trace("Joints  :" + joints);
             trace("HasFill  :" + has_fill);
             trace("scale  :" + scale);
             trace("pixel_hint  :" + pixel_hint);
             trace("reserved  :" + reserved);
             trace("no_close  :" + no_close);
             trace("end_caps  :" + end_caps);
             trace("miter  :" + miter);
             trace("Colour :" + color);
             trace("Alpha  :" + A);
            */
            if (has_fill)
            {
               var fill = inStream.ReadByte();

               // Gradient
               if ( (fill & 0x10) !=0 )
               {
                  var matrix = inStream.ReadMatrix();
                  inStream.AlignBits();
                  var spread = inStream.ReadSpreadMethod();
                  var interp = inStream.ReadInterpolationMethod();
                  var n = inStream.Bits(4);
                  var colors = [];
                  var alphas = [];
                  var ratios = [];
                  for(i in 0...n)
                  {
                     ratios.push( inStream.ReadByte() );
                     colors.push( inStream.ReadRGB() );
                     alphas.push( inStream.ReadByte()/255.0 );
                  }
                  var focus = fill==ftRadialF ?  inStream.ReadByte()/255.0 : 0.0;
                  var type = fill==ftLinear ? flash.display.GradientType.LINEAR :
                                               flash.display.GradientType.RADIAL;
      
                  result.push( function(g:GraphicsLike) {
                     g.lineStyle(w,0,1,pixel_hint,scale,start_caps,joints,miter);
                     g.lineGradientStyle(type,colors,alphas,ratios,matrix,
                                         spread, interp, focus ); } );
                                         
               }
               else
                  throw("Unknown fillstyle");

            }
            else
            {
               result.push( function(g:GraphicsLike)
                 { g.lineStyle(w,color,A,pixel_hint,scale,start_caps,joints,miter); } );
            }
         }
         else
         {
            inStream.AlignBits();
            var w = inStream.ReadDepth()*0.05;
            var RGB = inStream.ReadRGB();
            var A = inVersion >= 3 ? (inStream.ReadByte()/255.0) : 1.0;
            result.push( function(g:GraphicsLike) { g.lineStyle(w,RGB,A); } );
         }
      }

      return result;
   }

}
