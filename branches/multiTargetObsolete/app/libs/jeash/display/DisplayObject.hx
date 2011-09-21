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

import Html5Dom;

import flash.accessibility.AccessibilityProperties;
import flash.display.Stage;
import flash.display.Graphics;
import flash.events.EventDispatcher;
import flash.events.Event;
import flash.events.EventPhase;
import flash.display.DisplayObjectContainer;
import flash.display.IBitmapDrawable;
import flash.display.InteractiveObject;
import flash.geom.Rectangle;
import flash.geom.Matrix;
import flash.geom.Point;
import flash.geom.Transform;
import flash.filters.BitmapFilter;
import flash.display.BitmapData;
import flash.Lib;

typedef BufferData =
{
	var buffer:WebGLBuffer;
	var size:Int;
	var location:GLint;
}

/**
 * @author	Niel Drummond
 * @author	Hugh Sanderson
 * @author	Russell Weir
 */
class DisplayObject extends EventDispatcher, implements IBitmapDrawable
{
	
	public var x(jeashGetX,jeashSetX):Float;
	public var y(jeashGetY,jeashSetY):Float;
	public var scaleX(jeashGetScaleX,jeashSetScaleX):Float;
	public var scaleY(jeashGetScaleY,jeashSetScaleY):Float;
	public var rotation(jeashGetRotation,jeashSetRotation):Float;
	
	public var accessibilityProperties:AccessibilityProperties;
	public var alpha:Float;
	public var name(default,default):String;
	public var cacheAsBitmap:Bool;
	public var width(jeashGetWidth,jeashSetWidth):Float;
	public var height(jeashGetHeight,jeashSetHeight):Float;

	public var visible(default,jeashSetVisible):Bool;
	public var opaqueBackground(GetOpaqueBackground,SetOpaqueBackground):Null<Int>;
	public var mouseX(jeashGetMouseX, jeashSetMouseX):Float;
	public var mouseY(jeashGetMouseY, jeashSetMouseY):Float;
	public var parent:DisplayObjectContainer;
	public var stage(GetStage,null):Stage;
	
	public var scrollRect(GetScrollRect,SetScrollRect):Rectangle;
	public var mask(GetMask,SetMask):DisplayObject;
	public var filters(jeashGetFilters,jeashSetFilters):Array<Dynamic>;
	public var blendMode : flash.display.BlendMode;
	public var loaderInfo:LoaderInfo;


	// This is used by the swf-code for z-sorting
	public var __swf_depth:Int;

	public var transform(GetTransform,SetTransform):Transform;

	// Variables for manipulating OpenGL co-ordinate system
	public var mVertices:Array<Float>;
	public var mNormals:Array<Float>;
	public var mTextureCoords:Array<Float>;
	public var mIndices:Array<Int>;
	
	public var mVertexItemSize:Int;
	public var mNormItemSize:Int;
	public var mTexCoordItemSize:Int;

	public var mVertexBuffer(default,null):WebGLBuffer;
	public var mNormBuffer(default,null):WebGLBuffer;
	public var mTextureCoordBuffer(default,null):WebGLBuffer;
	public var mIndexBuffer(default,null):WebGLBuffer;
	public var mIndicesCount(default,null):Int;
	public var mBuffers : Hash<BufferData>;

	var mBoundsDirty:Bool;
	var mMtxChainDirty:Bool;
	var mMtxDirty:Bool;
	
	var mBoundsRect : Rectangle;
	var mGraphicsBounds : Rectangle;
	var mScale9Grid : Rectangle;
	var mMatrix:Matrix;
	var mFullMatrix:Matrix;
	
	var jeashX : Float;
	var jeashY : Float;
	var jeashScaleX : Float;
	var jeashScaleY : Float;
	var jeashRotation : Float;

	static var mNameID = 0;

	var mScrollRect:Rectangle;
	var mOpaqueBackground:Null<Int>;

	var mMask:DisplayObject;
	var mMaskingObj:DisplayObject;
	var mMaskHandle:Dynamic;
	var jeashFilters:Array<BitmapFilter>;
	
	
	public function new()
	{
		parent = null;
		super(null);
		x = y = 0;
		jeashScaleX = jeashScaleY = 1.0;
		alpha = 1.0;
		rotation = 0.0;
		__swf_depth = 0;
		mMatrix = new Matrix();
		mFullMatrix = new Matrix();
		mMask = null;
		mMaskingObj = null;
		mBoundsRect = new Rectangle();
		mGraphicsBounds = null;
		mMaskHandle = null;
		name = "DisplayObject " + mNameID++;
		mBuffers = new Hash();

		visible = true;

	}

	public function SetBuffers<T>( inputData:Hash<{ size:Int, data:Array<Float>}>, ?indices:Array<Int> )
	{
		var gl : WebGLRenderingContext = jeash.Lib.glContext;
		var gfx = jeashGetGraphics();
		if (gfx == null) return;

		gl.useProgram(gfx.mShaderGL);

		for (key in inputData.keys())
		{
			var bufferArray = inputData.get(key);
			if (bufferArray.data != null && bufferArray.size != null)
			{
				var data = mBuffers.get(key);
				if (data != null) 
				{ 
					if (data.buffer != null)
						gl.deleteBuffer(data.buffer);
					mBuffers.remove(key);
				}
				var buffer = gl.createBuffer();

				gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
				gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferArray.data), gl.STATIC_DRAW);

				var location = gl.getAttribLocation( gfx.mShaderGL, key );
				if ( location < 0 ) 
					trace("Invalid attribute for shader: " + key);
				var bufferData : BufferData = { buffer:buffer, location:location, size:bufferArray.size };
				mBuffers.set(key, bufferData );

			}
		}


		if (indices != null)
		{
			if (mIndexBuffer != null) gl.deleteBuffer(mIndexBuffer);
			mIndexBuffer = gl.createBuffer();

			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mIndexBuffer);
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

			mIndicesCount = indices.length;
		} else if (inputData.exists("aVertPos")) {
			// still a bit ugly...
			var vertData = inputData.get("aVertPos");

			mIndicesCount = Std.int(vertData.data.length/vertData.size);
		}

	}

	override public function toString() { return name; }

	function jeashDoAdded(inObj:DisplayObject)
	{
		if (inObj==this)
		{
			var evt = new flash.events.Event(flash.events.Event.ADDED, true, false);
			evt.target = inObj;
			dispatchEvent(evt);
		}

		var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE, false, false);
		evt.target = inObj;
		dispatchEvent(evt);
	}

	function jeashDoRemoved(inObj:DisplayObject)
	{
		if (inObj==this)
		{
			var evt = new flash.events.Event(flash.events.Event.REMOVED, true, false);
			evt.target = inObj;
			dispatchEvent(evt);
		}
		var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE, false, false);
		evt.target = inObj;
		dispatchEvent(evt);

		var gfx = jeashGetGraphics();
		if (gfx != null)
			Lib.jeashRemoveSurface(gfx.jeashSurface);
	}
	public function DoMouseEnter() {}
	public function DoMouseLeave() {}

	public function jeashSetParent(parent:DisplayObjectContainer)
	{
		if (parent == this.parent)
			return;

		mMtxChainDirty=true;

		if (this.parent != null)
		{
			this.parent.__removeChild(this);
			this.parent.jeashInvalidateBounds();	
		}
		
		if(parent != null)
		{
			parent.jeashInvalidateBounds();
		}

		if (this.parent==null && parent!=null)
		{
			this.parent = parent;
			jeashDoAdded(this);
		}
		else if (this.parent != null && parent==null)
		{
			this.parent = parent;
			jeashDoRemoved(this);
		}
		else{
			this.parent = parent;
		}

	}

	public function GetStage() { return flash.Lib.jeashGetStage(); }
	public function AsContainer() : DisplayObjectContainer { return null; }

	public function GetScrollRect() : Rectangle
	{
		if (mScrollRect==null) return null;
		return mScrollRect.clone();
	}

	public function jeashAsInteractiveObject() : flash.display.InteractiveObject
	{ return null; }

	public function SetScrollRect(inRect:Rectangle)
	{
		mScrollRect = inRect;
		return GetScrollRect();
	}

	public function hitTestObject(obj:DisplayObject)
	{
		return false;
	}

	public function hitTestPoint(x:Float, y:Float, ?shapeFlag:Bool)
	{
		var bounding_box:Bool = shapeFlag==null ? true : !shapeFlag;

		// TODO:
		return true;
	}

	public function localToGlobal( point:Point )
	{
		if ( this.parent == null )
		{
			return new Point( this.x + point.x, this.y + point.y );
		} else {
			point.x = point.x + this.x;
			point.y = point.y + this.y;
			return this.parent.localToGlobal( point );
		}
	}

	function jeashGetMouseX() { return stage.mouseX; }
	function jeashSetMouseX(x:Float) { return null; }
	function jeashGetMouseY() { return stage.mouseY; }
	function jeashSetMouseY(y:Float) { return null; }

	public function GetTransform() { return  new Transform(this); }

	public function SetTransform(trans:Transform)
	{
		mMatrix = trans.matrix.clone();
		return trans;
	}
	
	public function getFullMatrix(?childMatrix:Matrix=null) {
		if(childMatrix==null)
		{
			return mFullMatrix.clone();
		}
		else
		{
			return childMatrix.mult(mFullMatrix);
		}
	}

	public function getBounds(targetCoordinateSpace : DisplayObject) : Rectangle 
	{		
		if(mMtxDirty || mMtxChainDirty)
			jeashValidateMatrix();
		
		if(mBoundsDirty)
		{
			BuildBounds();
		}
		
		var mtx : Matrix = mFullMatrix.clone();
		//perhaps inverse should be stored and updated lazily?
		mtx.concat(targetCoordinateSpace.mFullMatrix.clone().invert());
		var rect : Rectangle = mBoundsRect.transform(mtx);	//transform does cloning
		return rect;
	}
	public function getRect(targetCoordinateSpace : DisplayObject) : Rectangle 
	{
		// TODO
		return null;
	}

	public function globalToLocal(inPos:Point) : Point
	{
		return mFullMatrix.clone().invert().transformPoint(inPos);
	}
	
	// This tells us we are an empty container, or not a container at all
	public function GetNumChildren() { return 0; }


	public function GetMatrix()
	{
		return mMatrix.clone();
	}
	public function SetMatrix(inMatrix:Matrix)
	{
		mMatrix = inMatrix.clone();
		return inMatrix;
	}

	function jeashGetGraphics() : flash.display.Graphics
	{ return null; }

	public function GetOpaqueBackground() { return mOpaqueBackground; }
	public function SetOpaqueBackground(inBG:Null<Int>)
	{
		mOpaqueBackground = inBG;
		return mOpaqueBackground;
	}

	public function GetBackgroundRect()
	{
		if (mGraphicsBounds==null)
		{
			var gfx = jeashGetGraphics();
			if (gfx!=null)
				mGraphicsBounds = gfx.getStandardExtent();//gfx.GetExtent(new Matrix());
		}
		return mGraphicsBounds;
	}
	
	/**
	 * Bounds are invalidated when:
	 * - a child is added or removed from a container
	 * - a child is scaled, rotated, translated, or skewed
	 * - the display of an object changes (graphics changed,
	 * bitmap loaded, textbox resized)
	 * - a child has its bounds invalidated
	 * ---> Invalidates down to stage
	 */
	//** internal **//
	//** FINAL **//	
	public function jeashInvalidateBounds():Void{
		//TODO :: adjust so that parent is only invalidated if it's bounds are changed by this change
		mBoundsDirty=true;
		if(parent!=null)
			parent.jeashInvalidateBounds();
	}
	
	/**
	 * Matrices are invalidated when:
	 * - the object is scaled, rotated, translated, or skewed
	 * - an object's parent has its matrices invalidated
	 * ---> 	Invalidates up through children
	 */
	//** protected **//
	function jeashInvalidateMatrix( ? local : Bool = false):Void{
		mMtxChainDirty= mMtxChainDirty || !local;	//note that a parent has an invalid matrix 
		mMtxDirty = mMtxDirty || local; //invalidate the local matrix
	}
	
	public function jeashValidateMatrix(){
		
		if(mMtxDirty || (mMtxChainDirty && parent!=null))
		{
			//validate parent matrix
			if(mMtxChainDirty && parent!=null)
			{
				parent.jeashValidateMatrix();
			}
			
			//validate local matrix
			if(mMtxDirty)
			{
				//update matrix if necessary
				//set non scale elements to identity
				mMatrix.b = mMatrix.c = mMatrix.tx = mMatrix.ty = 0;
			
				//set scale
				mMatrix.a=jeashScaleX;
				mMatrix.d=jeashScaleY;
			
				//set rotation if necessary
				var rad = jeashRotation * Math.PI / 180.0;
		
				if(rad!=0.0)
					mMatrix.rotate(rad);
			
				//set translation
				mMatrix.tx=jeashX;
				mMatrix.ty=jeashY;	
			}
			
			
			if(parent!=null)
				mFullMatrix = parent.getFullMatrix(mMatrix);
			else
				mFullMatrix = mMatrix;
			
			mMtxDirty = mMtxChainDirty = false;
		}
	}
	

	public function jeashRender(parentMatrix:Matrix, ?inMask:HTMLCanvasElement)
	{
		
		if(mMtxDirty || mMtxChainDirty){
			jeashValidateMatrix();
		}
			
		var gfx = jeashGetGraphics();

		if (gfx!=null)
		{
			var m = mFullMatrix.clone();
			gfx.jeashRender(inMask, m);

			var extent = gfx.getStandardExtent();
			// detect draw beyond boundary, do not adjust matrix
			if (gfx.jeashShift)
			{
				m.tx = m.tx + extent.x*m.a + extent.y*m.c;
				m.ty = m.ty + extent.x*m.b + extent.y*m.d;
			}

			if (inMask != null)
			{
				Lib.jeashDrawToSurface(gfx.jeashSurface, inMask, m, (parent != null ? parent.alpha : 1) * alpha);
			} else {
				Lib.jeashSetSurfaceTransform(gfx.jeashSurface, m);
				Lib.jeashSetSurfaceOpacity(gfx.jeashSurface, (parent != null ? parent.alpha : 1) * alpha);
			}

		}
	}

	function jeashRenderContentsToCache(parentMatrix:Matrix, canvas:HTMLCanvasElement)
	{
		jeashRender(parentMatrix, canvas);
	}

	dynamic public function MatrixUniforms()
	{
		return false;
	}

	static inline function GetFlatGLMatrix( m:Matrix )
	{
		return [
			m.a, m.b, 0, m.tx,
			m.c, m.d, 0, m.ty,
			0, 0, 1, 0,
			0, 0, -1, 1
		];
	}


	public function drawToSurface(inSurface : Dynamic,
			matrix:flash.geom.Matrix,
			colorTransform:flash.geom.ColorTransform,
			blendMode:BlendMode,
			clipRect:flash.geom.Rectangle,
			smoothing:Bool):Void
	{
		if (matrix==null) matrix = new Matrix();
		jeashRenderContentsToCache(matrix, inSurface);
	}

	public function jeashGetObjectUnderPoint(point:Point):DisplayObject
	{
		if (!visible) return null;
		var gfx = jeashGetGraphics();
		if (gfx != null)
		{
			var local = globalToLocal(point);
			switch (stage.jeashPointInPathMode)
			{
				case USER_SPACE:
					if (gfx.jeashHitTest(local.x, local.y))
						return cast this;
				case DEVICE_SPACE:

					if (gfx.jeashHitTest((local.x)*scaleX, (local.y)*scaleY))
						return cast this;
			}
		}

		return null;
	}


	// Masking
	public function GetMask() : DisplayObject { return mMask; }

	public function SetMask(inMask:DisplayObject) : DisplayObject
	{
		if (mMask!=null)
			mMask.mMaskingObj = null;
		mMask = inMask;
		if (mMask!=null)
			mMask.mMaskingObj = this;
		return mMask;
	}

	// @r533
	public function jeashSetFilters(filters:Array<Dynamic>)
	{
		if (filters==null)
			jeashFilters = null;
		else
		{
			jeashFilters = new Array<BitmapFilter>();
			for(filter in filters)
				jeashFilters.push(filter.clone());
		}

		return filters;
	}

	// @r533
	public function jeashGetFilters()
	{
		if (jeashFilters==null) return [];
		var result = new Array<BitmapFilter>();
		for(filter in jeashFilters)
			result.push(filter.clone());
		return result;
	}

	function BuildBounds()
	{
		var gfx = jeashGetGraphics();
		if (gfx==null)
			mBoundsRect = new Rectangle(x,y,0,0);
		else
		{
			mBoundsRect = gfx.getStandardExtent();//gfx.GetExtent(new Matrix());
			gfx.markBoundsClean();
			if (mScale9Grid!=null)
			{
				mBoundsRect.width *= scaleX;
				mBoundsRect.height *= scaleY;
			}
		}
		mBoundsDirty=false;
	}

	function GetScreenBounds()
	{
		if(mBoundsDirty)
			BuildBounds();
		return mBoundsRect.clone();
	}

	public function GetFocusObjects(outObjs:Array<InteractiveObject>) { }
	inline function __BlendIndex():Int
	{
		return blendMode == null ? Graphics.BLEND_NORMAL : Type.enumIndex(blendMode);
	}

	public function jeashGetInteractiveObjectStack(outStack:Array<InteractiveObject>)
	{
		var io = jeashAsInteractiveObject();
		if (io != null)
			outStack.push(io);
		if (this.parent != null)
			this.parent.jeashGetInteractiveObjectStack(outStack);
	}

	// @r551
	public function jeashFireEvent(event:flash.events.Event)
	{
		var stack:Array<InteractiveObject> = [];
		if (this.parent != null)
			this.parent.jeashGetInteractiveObjectStack(stack);
		var l = stack.length;

		if (l>0)
		{
			// First, the "capture" phase ...
			event.jeashSetPhase(EventPhase.CAPTURING_PHASE);
			stack.reverse();
			for(obj in stack)
			{
				event.currentTarget = obj;
				obj.dispatchEvent(event);
				if (event.jeashGetIsCancelled())
					return;
			}
		}

		// Next, the "target"
		event.jeashSetPhase(EventPhase.AT_TARGET);
		event.currentTarget = this;
		dispatchEvent(event);
		if (event.jeashGetIsCancelled())
			return;

		// Last, the "bubbles" phase
		if (event.bubbles)
		{
			event.jeashSetPhase(EventPhase.BUBBLING_PHASE);
			stack.reverse();
			for(obj in stack)
			{
				event.currentTarget = obj;
				obj.dispatchEvent(event);
				if (event.jeashGetIsCancelled())
					return;
			}
		}
	}

	// @533
	public function jeashBroadcast(event:flash.events.Event)
	{
		dispatchEvent(event);
	}

	function jeashAddToStage()
	{
		var gfx = jeashGetGraphics();
		if (gfx != null)
			Lib.jeashAppendSurface(gfx.jeashSurface);
	}

	function jeashInsertBefore(obj:DisplayObject)
	{
		var gfx1 = jeashGetGraphics();
		var gfx2 = obj.jeashIsOnStage() ? obj.jeashGetGraphics() : null;
		if (gfx1 != null)
		{
			if (gfx2 != null )
				Lib.jeashAppendSurface(gfx1.jeashSurface, gfx2.jeashSurface);
			 else 
				Lib.jeashAppendSurface(gfx1.jeashSurface);
		}
	}

	function jeashIsOnStage()
	{
		var gfx = jeashGetGraphics();
		if (gfx != null)
			return Lib.jeashIsOnStage(gfx.jeashSurface);
		return false;
	}

	function jeashSetVisible(visible:Bool)
	{
		var gfx = jeashGetGraphics();
		if (gfx != null)
			if (visible)
				Lib.jeashSetSurfaceVisible(gfx.jeashSurface, true);
			else
				Lib.jeashSetSurfaceVisible(gfx.jeashSurface, false);
		this.visible = visible;
		return visible;
	}

	public function jeashGetHeight() : Float
	{
		BuildBounds();
		return jeashScaleY * mBoundsRect.height;
	}
	public function jeashSetHeight(inHeight:Float) : Float
	{
		if(parent!=null)
			parent.jeashInvalidateBounds();
		if(mBoundsDirty)
			BuildBounds();
		var h = mBoundsRect.height;
		if (jeashScaleY*h != inHeight)
		{
			if (h<=0) return 0;
			jeashScaleY = inHeight/h;
			jeashInvalidateMatrix(true);
		}
		return inHeight;
	}

	public function jeashGetWidth() : Float
	{
		if(mBoundsDirty){
			BuildBounds();
		}
		return jeashScaleX * mBoundsRect.width;
	}

	public function jeashSetWidth(inWidth:Float) : Float
	{
		if(parent!=null)
			parent.jeashInvalidateBounds();
		if(mBoundsDirty)
			BuildBounds();
		var w = mBoundsRect.width;
		if (jeashScaleX*w != inWidth)
		{
			if (w<=0) return 0;
			jeashScaleX = inWidth/w;
			jeashInvalidateMatrix(true);
		}
		return inWidth;
	}

	public function jeashGetX():Float{
		return jeashX;
	}
	
	public function jeashGetY():Float{
		return jeashY;
	}
	
	public function jeashSetX(n:Float):Float{
		jeashInvalidateMatrix(true);
		jeashX=n;
		if(parent!=null)
			parent.jeashInvalidateBounds();
		return n;
	}
	
	public function jeashSetY(n:Float):Float{
		jeashInvalidateMatrix(true);
		jeashY=n;
		if(parent!=null)
			parent.jeashInvalidateBounds();
		return n;
	}


	public function jeashGetScaleX() { return jeashScaleX; }
	public function jeashGetScaleY() { return jeashScaleY; }
	public function jeashSetScaleX(inS:Float)
	{ 
		if(jeashScaleX==inS)
			return inS;		
		if(parent!=null)
			parent.jeashInvalidateBounds();
		if(mBoundsDirty)
			BuildBounds();
		if(!mMtxDirty)
			jeashInvalidateMatrix(true);	
		jeashScaleX=inS;
		return inS;
	}

	public function jeashSetScaleY(inS:Float)
	{ 
		if(jeashScaleY==inS)
			return inS;		
		if(parent!=null)
			parent.jeashInvalidateBounds();
		if(mBoundsDirty)
			BuildBounds();
		if(!mMtxDirty)
			jeashInvalidateMatrix(true);	
		jeashScaleY=inS;
		return inS;
	}

	private function jeashSetRotation(n:Float):Float{
		if(!mMtxDirty)
			jeashInvalidateMatrix(true);
		if(parent!=null)
			parent.jeashInvalidateBounds();

		jeashRotation = n;
		return n;
	}
	
	private function jeashGetRotation():Float{
		return jeashRotation;
	}


}
