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

import flash.display.DisplayObject;
import flash.display.Shape;
import flash.events.Event;
import flash.text.TextField;

import flash.swf.SWF;
import flash.swf.Sprite;
import flash.swf.Frame;

#if flash

typedef MovieClipBase = flash.display.Sprite;

#else

typedef MovieClipBase = flash.display.MovieClip;

#end


typedef ActiveObject =
{
   var mObj: flash.display.DisplayObject;
   var mDepth : Int;
   var mID: Int;
   var mIndex : Int;
   var mWaitingLoader : Bool;
}

typedef ActiveObjects = Array<ActiveObject>;

typedef ObjectList = List<DisplayObject>;
typedef ObjectPool = IntHash<ObjectList>;


// Available for both flash and neko.
// For neko, this is the actual movie clip, for flash this is an
//  extension that allows a "data driven" swf, since there does not seem
//  to be any other easy way to setup a timeline.

class MovieClip extends MovieClipBase
{
   var mSWF    : SWF;
   var mFrames : flash.swf.Frames;
   var mActive : ActiveObjects;
   var mPlaying: Bool;
   var mObjectPool:ObjectPool;

   
   static var mMovieID = 0;
   static var mIDBase = 1;

#if flash
   var mCurrentFrame:Int;
   var mTotalFrames:Int;
#end

   public function new()
   {
      super();

#if flash
      mCurrentFrame = 1;
      mTotalFrames = 1;
#end

      mObjectPool = new ObjectPool();
      mMovieID = mIDBase++;
      mPlaying = false;
      addEventListener(Event.ENTER_FRAME, MyOnEnterFrame);
   }

   public function MyOnEnterFrame(inEvent:Event)
   {
      if (mPlaying)
      {
         mCurrentFrame++;
         if (mCurrentFrame > mTotalFrames)
           mCurrentFrame = 1;
         // trace(mMovieID + "  OnEnterFrame " + mCurrentFrame);
         UpdateActive();
      }
   }

   #if !flash override #end
   public function gotoAndPlay(frame:Dynamic, ?scene:String):Void
   {
      mCurrentFrame = frame;
      UpdateActive();
      mPlaying = true;
   }

   #if !flash override #end
   public function gotoAndStop(frame:Dynamic, ?scene:String):Void
   {
      mCurrentFrame = frame;
      UpdateActive();
      mPlaying = false;
   }

   #if !flash override #end
   public function play( ) : Void { mPlaying = true; }

   #if !flash override #end
   public function stop( ) : Void { mPlaying = true; }


   static var count = 0;
   function UpdateActive()
   {
      if (mFrames!=null)
      {
         var frame = mFrames[mCurrentFrame];
         var depth_changed = false;
         var waiting_loader = false;


         if (frame!=null)
         {
            var frame_objs = frame.CopyObjectSet();

            // Remove or update child frames in the existing list ...
            var new_active = new ActiveObjects();
            for(a in mActive)
            {
               var depth_slot = frame_objs.get( a.mDepth );

               if (depth_slot==null || depth_slot.mID != a.mID || a.mWaitingLoader)
               {
                  // Add object to pool - if it's complete.
                  if (!a.mWaitingLoader)
                  {
                     var pool = mObjectPool.get(a.mID);
                     if (pool == null)
                     {
                        pool = new ObjectList();
                        mObjectPool.set(a.mID, pool );
                     }
                     pool.push( a.mObj );
                  }
                  // todo - disconnect event handlers ?
                  removeChild(a.mObj);
               }
               else
               {
                  // remove from our "todo" list
                  frame_objs.remove(a.mDepth);

                  a.mIndex = depth_slot.FindClosestFrame(a.mIndex,mCurrentFrame);
                  var attrib = depth_slot.mAttribs[a.mIndex];
                  attrib.Apply(a.mObj);
                  new_active.push(a);
               }
            }


            // Now add missing characters in unfilled depth slots
            for(depth in frame_objs.keys())
            {
               var slot = frame_objs.get(depth);
               var disp_object:flash.display.DisplayObject = null;
               var pool = mObjectPool.get(slot.mID);
               if (pool != null && pool.length > 0)
               {
                   disp_object = pool.pop();
                   switch(slot.mCharacter)
                   {
                      case charSprite(sprite):
                         var clip:flash.swf.MovieClip = untyped disp_object;
                         clip.gotoAndPlay(1);

                      default:
                   }
               }
               else
               {               
                   //trace(count++);
                   switch(slot.mCharacter)
                   {
                      case charSprite(sprite):
                         var movie = new flash.swf.MovieClip();
                         movie.CreateFromSWF(sprite);
                         disp_object = movie;

                      case charShape(shape):
                         var s = new flash.display.Shape();
                          //trace( s );
                         //shape.Render(new flash.display.DebugGfx());
                         waiting_loader = shape.Render(s.graphics);
                         disp_object = s;

                      case charMorphShape(morph_data):
                         var morph = new flash.swf.MorphObject(morph_data);
                         //morph_data.Render(new flash.display.DebugGfx(),0.5);
                         disp_object = morph;

                      case charStaticText(text):
                         var s = new flash.display.Shape();
                         text.Render(s.graphics);
                         disp_object = s;
 
                      case charEditText(text):
                         var t = new TextField();
                         text.Apply(t);
                         disp_object = t;
                         
                      case charBitmap(shape):
                         throw("Adding bitmap?");

                      case charFont(font):
                         throw("Adding font?");

                   }
               }



               #if neko
               // On neko, we can z-sort by using our special field ...
               disp_object.__swf_depth = depth;
               #end

               var added = false;
               // todo : binary converge ?
               for(cid in 0...numChildren)
               {
                  #if neko

                  var child_depth = getChildAt(cid).__swf_depth;

                  #else

                  var child_depth = -1;
                  var sought = getChildAt(cid);
                  for(child in new_active)
                     if (child.mObj==sought)
                     {
                        child_depth = child.mDepth;
                        break;
                     }
                  #end

                  if (child_depth > depth)
                  {
                     addChildAt(disp_object,cid);
                     added = true;
                     break;
                  }
               }
               if (!added)
                  addChild(disp_object);

               var idx = slot.FindClosestFrame(0,mCurrentFrame);
               slot.mAttribs[idx].Apply(disp_object);

               var act =
                  { mObj:disp_object, mDepth:depth, mIndex:idx, mID:slot.mID, 
                          mWaitingLoader:waiting_loader };

               new_active.push(act);
               depth_changed = true;
            }

            mActive = new_active;
         }
      }
   }

   public function CreateFromSWF(inSprite:flash.swf.Sprite)
   {
      mTotalFrames = mCurrentFrame = inSprite.GetFrameCount();

      mSWF = inSprite.mSWF;
      mFrames= inSprite.mFrames;
      mActive = new ActiveObjects();

      gotoAndPlay(1);
   }
}


