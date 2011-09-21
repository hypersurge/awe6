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
import flash.swf.Tags;
import flash.swf.Character;
import flash.swf.Shape;
import flash.swf.MorphShape;
import flash.swf.Frame;
import flash.swf.StaticText;
import flash.swf.Font;
import flash.display.BitmapDataRenderer;

import flash.utils.IDataInput;
import flash.display.MovieClip;
import flash.display.BitmapData;

import flash.geom.Rectangle;



class SWF
{
   var mStream:SWFStream;
   var mRect : Rectangle;
   var mFrameRate : Float;
   var mBackground : Int;
   var mDictionary:Array<Character>;
   var mMain:Sprite;
   var mVersion:Int;


   public function new(inStream:IDataInput)
   {
      mStream = new SWFStream(inStream);

      mRect= mStream.ReadRect();
      mFrameRate = mStream.FrameRate();
      var count = mStream.Frames();
      mDictionary = [];

      mMain = new Sprite(this,count);


      var count:Array<Int> = [];
      for(i in 0...Tags.LAST)
        count.push(0);

 

      var tag = 0;
      while( (tag=mStream.BeginTag())!=0 )
      {
         count[tag]++;
         switch(tag)
         {
            case Tags.SetBackgroundColor:
               mBackground = mStream.ReadRGB();

            case Tags.DefineShape:
               DefineShape(1);
            case Tags.DefineShape2:
               DefineShape(2);
            case Tags.DefineShape3:
               DefineShape(3);
            case Tags.DefineShape4:
               DefineShape(4);

            case Tags.DefineMorphShape:
               DefineMorphShape(1);
            case Tags.DefineMorphShape2:
               DefineMorphShape(2);

            case Tags.DefineSprite:
               DefineSprite();

            case Tags.PlaceObject:
               mMain.PlaceObject(mStream,1);
            case Tags.PlaceObject2:
               mMain.PlaceObject(mStream,2);
            case Tags.PlaceObject3:
               mMain.PlaceObject(mStream,3);

            case Tags.RemoveObject:
               mMain.RemoveObject(mStream,1);
            case Tags.RemoveObject2:
               mMain.RemoveObject(mStream,2);

            case Tags.DefineBits:
               throw("DefineBits not implemented");
            case Tags.JPEGTables:
               throw("JPEGTables not implemented");

            case Tags.DefineBitsJPEG2:
               DefineBitmap(false,2);
            case Tags.DefineBitsJPEG3:
               DefineBitmap(false,3);

            case Tags.DefineBitsLossless:
               DefineBitmap(true,1);
            case Tags.DefineBitsLossless2:
               DefineBitmap(true,2);


            case Tags.DefineFont:
               DefineFont(1);
            case Tags.DefineFont2:
               DefineFont(2);
            case Tags.DefineFont3:
               DefineFont(3);

            case Tags.DefineText:
               DefineText(1);

            case Tags.ShowFrame:
               mMain.ShowFrame();

            case Tags.DefineFontName:
               // safely ignore

            case Tags.DefineFontAlignZones:
               // todo:

            case Tags.CSMTextSettings:
               // todo:

            case Tags.FileAttributes:
               // Do nothing
			   
			case Tags.DefineEditText:
               DefineEditText(1);


            default:
               trace("Unknown tag:" + Tags.string(tag));
         }
         mStream.EndTag();
      }

       //This is quite good for debug
       /*
       for(i in 0...Tags.LAST)
         if (count[i]!=0)
            trace( Tags.string(i) + " = " + count[i] );
      */

      mStream.close();
      mStream = null;
      //trace(this);
   }

   public function CreateInstance() : flash.swf.MovieClip
   {
      var result = new flash.swf.MovieClip();
      result.CreateFromSWF(mMain);
      return result;
   }

   public function GetBackground() { return mBackground; }
   public function GetFrameRate() { return mFrameRate; }
   public function Width() { return Std.int(mRect.width); }
   public function Height() { return Std.int(mRect.height); }

   public function GetCharacter(inID:Int)
   {
      var result = mDictionary[inID];
      if (result==null)
         throw "Invalid character ID (" + inID + ")";
      return result;
   }

   function CreatePlaceholderBitmap(inID:Int)
   {
      var bmp = new flash.display.BitmapData(32,32);
      var render = new BitmapDataRenderer(bmp);
      var gfx = render.graphics;
      gfx.lineStyle(1,0xff0000);
      gfx.moveTo(0,0);
      gfx.lineTo(32,32);
      gfx.moveTo(32,0);
      gfx.lineTo(0,32);
      render.close();
      return bmp;
   }

   public function GetBitmap(inID:Int) : flash.display.BitmapData
   {
      //if (mDictionary[inID]==null)
         //return CreatePlaceholderBitmap(inID);

      switch( GetCharacter(inID) )
      {
         case charBitmap(bits) : return bits.GetBitmap();
         default: throw "Non-bitmap character";
      }
      return null;
   }

   function DefineShape(inVersion:Int)
   {
      var shape_id = mStream.ReadID();
      mDictionary[shape_id] = charShape(
          new Shape(this,mStream,inVersion) );
   }

   function DefineText(inVersion:Int)
   {
      var text_id = mStream.ReadID();
      mDictionary[text_id] = charStaticText(
          new StaticText(this,mStream,inVersion) );
   }
   
   function DefineEditText(inVersion:Int)
   {
      var text_id = mStream.ReadID();
      mDictionary[text_id] = charEditText(
          new EditText(this,mStream,inVersion) );
   }



   function DefineMorphShape(inVersion:Int)
   {
      var shape_id = mStream.ReadID();
      mDictionary[shape_id] = charMorphShape(
          new MorphShape(this,mStream,inVersion) );
   }


   function DefineBitmap(inLossless:Bool,inVersion:Int)
   {
      var shape_id = mStream.ReadID();
      mDictionary[shape_id] = charBitmap(
         new Bitmap(mStream,inLossless,inVersion) );
   }

   function DefineFont(inVersion:Int)
   {
      var shape_id = mStream.ReadID();
      mDictionary[shape_id] = charFont( new Font(mStream,inVersion) );
   }



   public function DefineSprite()
   {
      var id = mStream.ReadID();
      var frames = mStream.Frames();
      mStream.PushTag();

      var sprite = new Sprite(this,frames);

      var tag=0;
      while( (tag=mStream.BeginTag())!=0 )
      {
         switch(tag)
         {
            case Tags.FrameLabel:
               sprite.LabelFrame(mStream.ReadString());
            case Tags.ShowFrame:
               sprite.ShowFrame();

            case Tags.PlaceObject:
               sprite.PlaceObject(mStream,1);
            case Tags.PlaceObject2:
               sprite.PlaceObject(mStream,2);
            case Tags.PlaceObject3:
               sprite.PlaceObject(mStream,3);

            case Tags.RemoveObject:
               sprite.RemoveObject(mStream,1);
            case Tags.RemoveObject2:
               sprite.RemoveObject(mStream,2);
         }
         mStream.EndTag();
      }

      mDictionary[id] = charSprite(sprite);


      mStream.PopTag();
   }


}

