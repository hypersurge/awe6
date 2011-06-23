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

package jeash.display;

import flash.display.DisplayObject;
import flash.display.BitmapData;
import flash.display.PixelSnapping;
import flash.geom.Rectangle;
import flash.geom.Matrix;

import Html5Dom;

class Bitmap extends jeash.display.DisplayObject {
	public var bitmapData(default,jeashSetBitmapData) : BitmapData;
	public var pixelSnapping : PixelSnapping;
	public var smoothing : Bool;

	var jeashGraphics:Graphics;
	var jeashCurrentTimestamp:Timestamp;

	public function new(?inBitmapData : BitmapData, ?inPixelSnapping : PixelSnapping, ?inSmoothing : Bool) : Void {
		super();
		pixelSnapping = inPixelSnapping;
		smoothing = inSmoothing;
		name = "Bitmap " + DisplayObject.mNameID++;

		jeashGraphics = new Graphics();
		if (inBitmapData != null)
			jeashSetBitmapData(inBitmapData);

		Lib.jeashSetSurfaceId(jeashGraphics.jeashSurface, name);
	}

	public function jeashSetBitmapData(inBitmapData:BitmapData) : BitmapData
	{
		jeashInvalidateBounds();
		bitmapData = inBitmapData;
		return inBitmapData;
	}


	override function jeashGetGraphics() { return jeashGraphics; }
	
	override function BuildBounds()
	{
		super.BuildBounds();
				
		if(bitmapData!=null)
		{
			var r:Rectangle = new Rectangle(0, 0, bitmapData.width, bitmapData.height);		
			
			if (r.width!=0 || r.height!=0)
			{
				if (mBoundsRect.width==0 && mBoundsRect.height==0)
					mBoundsRect = r.clone();
				else
					mBoundsRect.extendBounds(r);
			}
		}
	}

	override public function jeashRender(parentMatrix:Matrix, ?inMask:HTMLCanvasElement)
	{
		if (bitmapData == null) return;
		if(mMtxDirty || mMtxChainDirty){
			jeashValidateMatrix();
		}

		var m = mFullMatrix.clone();
		var timestamp = bitmapData.jeashGetLease();
		if (timestamp != null)
			if (jeashCurrentTimestamp == null || timestamp.seed != jeashCurrentTimestamp.seed || timestamp.time != jeashCurrentTimestamp.time) {
				var srcCanvas = bitmapData.handle();
				jeashGraphics.jeashSurface.width = srcCanvas.width;
				jeashGraphics.jeashSurface.height = srcCanvas.height;
				jeashGraphics.clear();
				Lib.jeashDrawToSurface(srcCanvas, jeashGraphics.jeashSurface);
				jeashCurrentTimestamp = timestamp;
			}

		Lib.jeashSetSurfaceTransform(jeashGraphics.jeashSurface, m);
		Lib.jeashSetSurfaceOpacity(jeashGraphics.jeashSurface, (parent != null ? parent.alpha : 1) * alpha);

	}

	override function jeashRenderContentsToCache(parentMatrix:Matrix, canvas:HTMLCanvasElement)
	{
		jeashRender(parentMatrix, canvas);
		Lib.jeashDrawToSurface(jeashGraphics.jeashSurface, canvas, parentMatrix, (parent != null ? parent.alpha : 1) * alpha);
	}
}

