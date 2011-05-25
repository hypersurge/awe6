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

/*


   Lines, fill styles and closing polygons.
   Flash allows the line stype to be changed withing one filled polygon.
   A single NME "DrawObject" has a point list, an optional solid fill style
   and a list of lines.  Each of these lines has a line style and a
   list of "point indices", which are indices into the DrawObject's point array.
   The solid does not need a point-index list because it uses all the
   points in order.

   When building up a filled polygon, eveytime the line style changes, the
   current "line fragment" is stored in the "mLineJobs" list and a new line
   is started, without affecting the solid fill bit.
 */


package jeash.display;

import Html5Dom;
import flash.geom.Matrix;
import flash.geom.Decompose;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.geom.ColorTransform;
import flash.display.LineScaleMode;
import flash.display.CapsStyle;
import flash.display.JointStyle;
import flash.display.GradientType;
import flash.display.SpreadMethod;
import flash.display.InterpolationMethod;
import flash.display.BitmapData;

typedef DrawList = Array<Drawable>;

class GfxPoint
{
	public function new(inX:Float,inY:Float,inCX:Float,inCY:Float,inType:Int)
	{ x = inX; y=inY; cx=inCX; cy=inCY; type=inType; }

	public var x:Float;
	public var y:Float;
	public var cx:Float;
	public var cy:Float;
	public var type:Int;
}

typedef GfxPoints = Array<GfxPoint>;

typedef GradPoint = 
{
	var col:Int;
	var alpha:Float;
	var ratio:Int;
}

typedef GradPoints = Array<GradPoint>;

typedef Grad =
{
	var points:GradPoints;
	var matrix:Matrix;
	var flags:Int;
	var focal:Float;
}

class LineJob
{
	public function new( inGrad:Grad, inPoint_idx0:Int, inPoint_idx1:Int, inThickness:Float,
			inAlpha:Float, inColour:Int, inPixel_hinting:Int, inJoints:Int, inCaps:Int,
			inScale_mode:Int, inMiter_limit:Float)
	{
		grad = inGrad;
		point_idx0 = inPoint_idx0;
		point_idx1 = inPoint_idx1;
		thickness = inThickness;
		alpha = inAlpha;
		colour = inColour;
		pixel_hinting = inPixel_hinting;
		joints = inJoints;
		caps = inCaps;
		scale_mode = inScale_mode;
		miter_limit = inMiter_limit;
	}

	public var grad:Grad;
	public var point_idx0:Int;
	public var point_idx1:Int;
	public var thickness:Float;
	public var alpha:Float;
	public var colour:Int;
	public var pixel_hinting:Int;
	public var joints:Int;
	public var caps:Int;
	public var scale_mode:Int;
	public var miter_limit:Float;
}

typedef Drawable =
{
	var points:GfxPoints;
	var fillColour:Int;
	var fillAlpha:Float;
	var solidGradient:Grad;
	var bitmap:Texture;
	var lineJobs:LineJobs;
}

typedef Texture =
{
	var texture_buffer:Dynamic;
	var matrix:Matrix;
	var flags:Int;
}

typedef LineJobs = Array<LineJob>;

class GLTextureShader 
{

	public static inline var mFragmentProgram = '
#ifdef GL_ES
		precision highp float;
#endif

		varying vec2 vTexCoord;

		uniform sampler2D uSurface;

		void main(void) {
			gl_FragColor = texture2D(uSurface, vec2(vTexCoord.s, vTexCoord.t));
		}
	';

	public static inline var mVertexProgram = '
		attribute vec3 aVertPos;
		attribute vec2 aTexCoord;

		uniform mat4 uViewMatrix;
		uniform mat4 uProjMatrix;

		varying vec2 vTexCoord;

		void main(void) {
			gl_Position = uProjMatrix * uViewMatrix  * vec4(aVertPos, 1.0);
			vTexCoord = aTexCoord;
		}
	';

}

enum PointInPathMode
{
	USER_SPACE;
	DEVICE_SPACE;
}

class Graphics
{
	public static var defaultFontName = "ARIAL.TTF";
	public static var defaultFontSize = 12;
	public static var immediateMatrix = null;
	public static var immediateMask:Dynamic = null;

	public static var TOP = 0;
	public static var CENTER = 1;
	public static var BOTTOM = 2;

	public static var LEFT = 0;
	public static var RIGHT = 2;

	public static var RADIAL  = 0x0001;

	public static var REPEAT  = 0x0002;
	public static var REFLECT = 0x0004;


	private static var  EDGE_MASK        = 0x00f0;
	private static var  EDGE_CLAMP       = 0x0000;
	private static var  EDGE_REPEAT      = 0x0010;
	private static var  EDGE_UNCHECKED   = 0x0020;
	private static var  EDGE_REPEAT_POW2 = 0x0030;

	private static var  END_NONE         = 0x0000;
	private static var  END_ROUND        = 0x0100;
	private static var  END_SQUARE       = 0x0200;
	private static var  END_MASK         = 0x0300;
	private static var  END_SHIFT        = 8;

	private static var  CORNER_ROUND     = 0x0000;
	private static var  CORNER_MITER     = 0x1000;
	private static var  CORNER_BEVEL     = 0x2000;
	private static var  CORNER_MASK      = 0x3000;
	private static var  CORNER_SHIFT     = 12;

	private static var  PIXEL_HINTING    = 0x4000;

	public static var BMP_REPEAT  = 0x0010;
	public static var BMP_SMOOTH  = 0x10000;


	private static var  SCALE_NONE       = 0;
	private static var  SCALE_VERTICAL   = 1;
	private static var  SCALE_HORIZONTAL = 2;
	private static var  SCALE_NORMAL     = 3;

	static var MOVE = 0;
	static var LINE = 1;
	static var CURVE = 2;

	public static var BLEND_ADD = 0;
	public static var BLEND_ALPHA = 1;
	public static var BLEND_DARKEN = 2;
	public static var BLEND_DIFFERENCE = 3;
	public static var BLEND_ERASE = 4;
	public static var BLEND_HARDLIGHT = 5;
	public static var BLEND_INVERT = 6;
	public static var BLEND_LAYER = 7;
	public static var BLEND_LIGHTEN = 8;
	public static var BLEND_MULTIPLY = 9;
	public static var BLEND_NORMAL = 10;
	public static var BLEND_OVERLAY = 11;
	public static var BLEND_SCREEN = 12;
	public static var BLEND_SUBTRACT = 13;
	public static var BLEND_SHADER = 14;

	public var jeashSurface(default,null):HTMLCanvasElement;
	public var jeashChanged:Bool;

	// Current set of points
	private var mPoints:GfxPoints;

	// Solids ...
	private var mSolid:Bool;
	private var mFilling:Bool;
	private var mFillColour:Int;
	private var mFillAlpha:Float;
	private var mSolidGradient:Grad;
	public var mBitmap(default,null):Texture;

	// Lines ...
	private var mCurrentLine:LineJob;
	private var mLineJobs:LineJobs;
	private var mNoClip:Bool;

	// List of drawing commands ...
	public var mDrawList(default,null):DrawList;
	private var mLineDraws:DrawList;

	// Current position ...
	private var mPenX:Float;
	private var mPenY:Float;
	private var mLastMoveID:Int;

	public var mMatrix(default,null):Matrix;
	//public var mSurfaceAlpha(null,default):Float;

	// GL shader
	public var mShaderGL:WebGLProgram;
	public var mTextureGL:WebGLTexture;
	public var mTextureUniformGL:WebGLUniformLocation;

	private static var gl:WebGLRenderingContext;
	public var jeashShift(default,null):Bool;
	public var owner:DisplayObject;
	private var mBoundsDirty:Bool;
	private var standardExtent:Rectangle;
	private var originX:Float;
	private var originY:Float;
	private var nextDrawIndex:Int;
	

	public function new(?inSurface:HTMLCanvasElement)
	{
		if ( inSurface == null ) {
			jeashSurface = cast js.Lib.document.createElement("canvas");
			//var stage = flash.Lib.jeashGetStage();
			//jeashSurface.width = stage.stageWidth;
			//jeashSurface.height = stage.stageHeight;
			jeashSurface.width = 0;
			jeashSurface.height = 0;

		} else {
			jeashSurface = inSurface;
		}

		mMatrix = new Matrix();

		mLastMoveID = 0;
		mPenX = 0.0;
		mPenY = 0.0;
		originX = 0;
		originY = 0;

		mDrawList = new DrawList();

		mPoints = [];

		mSolidGradient = null;
		mBitmap = null;
		mFilling = false;
		mFillColour = 0x000000;
		mFillAlpha = 0.0;
		mLastMoveID = 0;
		mNoClip = false;
		//mSurfaceAlpha = 1.0;

		jeashClearLine();
		mLineJobs = [];
		jeashChanged = true;
		jeashShift = false;
		nextDrawIndex = 0;

	}

	public function SetSurface(inSurface:Dynamic)
	{
		jeashSurface = inSurface;
	}

	private function createCanvasColor(color : Int, alpha : Float) {
		var r:Float;
		var g:Float;
		var b:Float;
		r = (0xFF0000 & color) >> 16;
		g = (0x00FF00 & color) >> 8;
		b = (0x0000FF & color);
		return 'rgba' + '(' + r + ',' + g + ',' + b + ',' + alpha + ')';

	}
	private function createCanvasGradient(ctx : CanvasRenderingContext2D, g : Grad) : CanvasGradient{
		var gradient : CanvasGradient;
		//TODO handle spreadMethod flags REPEAT and REFLECT (defaults to PAD behavior)

		var matrix = g.matrix;
		if ((g.flags & RADIAL) == 0) {
			var p1 = matrix.transformPoint(new Point( -819.2, 0));
			var p2 = matrix.transformPoint(new Point(819.2, 0));
			gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
		} else {
			//TODO not quite right (no ellipses when width != height)
			var p1 = matrix.transformPoint(new Point(g.focal*819.2, 0));
			var p2 = matrix.transformPoint(new Point(0, 819.2));
			gradient = ctx.createRadialGradient(p1.x, p1.y, 0, p2.x, p1.y, p2.y);
		}

		for (point in g.points) {
			var color = createCanvasColor(point.col, point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos, color);
		}
		return gradient;
	}

	public function jeashRender(?maskHandle:HTMLCanvasElement, ?matrix:Matrix)
	{
		if (!jeashChanged) {
			return false;
		}

		ClosePolygon(true);

		// clear the canvas
		/*if (mDrawList.length > 0)
			jeashClearCanvas();*/

		var extent = getStandardExtent();
		if (standardExtent.width - standardExtent.x != jeashSurface.width && standardExtent.height - standardExtent.y != jeashSurface.height) jeashAdjustSurface();

		var ctx = getContext();
		if (ctx==null) return false;

		var len : Int = mDrawList.length;
		/*if (maskHandle != null)
			ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, 0, 0);*/

		jeashShift = if (Math.abs(extent.x) < jeashSurface.width && Math.abs(extent.y) < jeashSurface.height)
			true; else false;


		ctx.save();
		
		if (jeashShift) ctx.translate(-extent.x, -extent.y);

		for ( i in nextDrawIndex...len ) {
			var d = mDrawList[(len-1)-i];
	
			if (d.lineJobs.length > 0) {
				//TODO lj.pixel_hinting and lj.scale_mode
				for (lj in d.lineJobs) {
					ctx.lineWidth = lj.thickness;

					switch(lj.joints)
					{
						case CORNER_ROUND:
							ctx.lineJoin = "round";
						case CORNER_MITER:
							ctx.lineJoin = "miter";
						case CORNER_BEVEL:
							ctx.lineJoin = "bevel";
					}

					switch(lj.caps) {
						case END_ROUND:
							ctx.lineCap = "round";
						case END_SQUARE:
							ctx.lineCap = "square";
						case END_NONE:
							ctx.lineCap = "butt";
					}

					ctx.miterLimit = lj.miter_limit;

					if (lj.grad != null) {
						ctx.strokeStyle = createCanvasGradient(ctx, lj.grad);
					} else {
						ctx.strokeStyle = createCanvasColor(lj.colour, lj.alpha);
					}

					ctx.beginPath();
					for (i in lj.point_idx0...lj.point_idx1 + 1) {
						var p = d.points[i];

						switch (p.type) {
							case MOVE:
								ctx.moveTo(p.x , p.y);
							case CURVE:
								ctx.quadraticCurveTo(p.cx, p.cy, p.x, p.y);
							default:
								ctx.lineTo(p.x, p.y);
						}

					}
					ctx.closePath();
					ctx.stroke();
				}
			} else {
				ctx.beginPath();

				for ( p in d.points ) {

					switch (p.type) {
						case MOVE:
							ctx.moveTo(p.x , p.y);
						case CURVE:
							ctx.quadraticCurveTo(p.cx, p.cy, p.x, p.y);
						default:
							ctx.lineTo(p.x, p.y);
					}
				}
				ctx.closePath();
			}

			var fillColour = d.fillColour;
			var fillAlpha = d.fillAlpha;
			if (  fillAlpha >= 0. && fillAlpha <= 1.) {
				var g = d.solidGradient;
				if (g != null)
					ctx.fillStyle = createCanvasGradient(ctx, g);
				else 
					ctx.fillStyle = createCanvasColor(fillColour, fillAlpha);
			}
			ctx.fill();

			var bitmap = d.bitmap;
			if ( bitmap != null) {
					// Hack to workaround premature width calculations during async image load
					if (!mNoClip)
						ctx.clip();


					var img = bitmap.texture_buffer;
					var matrix = bitmap.matrix;

					if(matrix != null) {
						ctx.transform( matrix.a,  matrix.b,  matrix.c,  matrix.d,  matrix.tx,  matrix.ty );
					}

					ctx.drawImage( img, 0, 0 );

			}
		}
		
		ctx.restore();
		

		jeashChanged = false;
		nextDrawIndex = len;


		return true;

	}


	public function jeashHitTest(inX:Float, inY:Float) : Bool
	{
		var ctx : CanvasRenderingContext2D = getContext();
		if (ctx==null) return false;

		ctx.save();
		for(d in mDrawList)
		{
			ctx.beginPath();
			for ( p in d.points ) {
				switch (p.type) {
					case MOVE:
						ctx.moveTo(p.x , p.y);
					case CURVE:
						ctx.quadraticCurveTo(p.cx, p.cy, p.x, p.y);
					default:
						ctx.lineTo(p.x, p.y);
				}
			}
			ctx.closePath();
			if ( ctx.isPointInPath(inX, inY) ) return true;
		}
		ctx.restore();
		return false;
	}


	public function blit(inTexture:BitmapData)
	{
		ClosePolygon(true);

		var ctx = getContext();
		if (ctx != null) 
			ctx.drawImage(inTexture.handle(),mPenX,mPenY);
	}



	public function lineStyle(?thickness:Null<Float>,
			?color:Null<Int>,
			?alpha:Null<Float> ,
			?pixelHinting:Null<Bool> ,
			?scaleMode:Null<LineScaleMode> ,
			?caps:Null<CapsStyle>,
			?joints:Null<JointStyle>,
			?miterLimit:Null<Float> )
	{
		// Finish off old line before starting a new one
		AddLineSegment();

		//with no parameters it clears the current line (to draw nothing)
		if( thickness == null )
		{
			jeashClearLine();
			return;
		}
		else
		{
			mCurrentLine.grad = null;
			mCurrentLine.thickness = thickness;
			mCurrentLine.colour = color==null ? 0 : color;
			mCurrentLine.alpha = alpha==null ? 1.0 : alpha;
			mCurrentLine.miter_limit = miterLimit==null ? 3.0 : miterLimit;
			mCurrentLine.pixel_hinting = (pixelHinting==null || !pixelHinting)?
				0 : PIXEL_HINTING;
		}

		//mCurrentLine.caps = END_ROUND;
		if (caps!=null)
		{
			switch(caps)
			{
				case CapsStyle.ROUND:
					mCurrentLine.caps = END_ROUND;
				case CapsStyle.SQUARE:
					mCurrentLine.caps = END_SQUARE;
				case CapsStyle.NONE:
					mCurrentLine.caps = END_NONE;
			}
		}

		mCurrentLine.scale_mode = SCALE_NORMAL;
		if (scaleMode!=null)
		{
			switch(scaleMode)
			{
				case LineScaleMode.NORMAL:
					mCurrentLine.scale_mode = SCALE_NORMAL;
				case LineScaleMode.VERTICAL:
					mCurrentLine.scale_mode = SCALE_VERTICAL;
				case LineScaleMode.HORIZONTAL:
					mCurrentLine.scale_mode = SCALE_HORIZONTAL;
				case LineScaleMode.NONE:
					mCurrentLine.scale_mode = SCALE_NONE;
			}
		}


		mCurrentLine.joints = CORNER_ROUND;
		if (joints!=null)
		{
			switch(joints)
			{
				case JointStyle.ROUND:
					mCurrentLine.joints = CORNER_ROUND;
				case JointStyle.MITER:
					mCurrentLine.joints = CORNER_MITER;
				case JointStyle.BEVEL:
					mCurrentLine.joints = CORNER_BEVEL;
			}
		}
	}

	public function lineGradientStyle(type : GradientType,
			colors : Array<Dynamic>,
			alphas : Array<Dynamic>,
			ratios : Array<Dynamic>,
			?matrix : Matrix,
			?spreadMethod : SpreadMethod,
			?interpolationMethod : InterpolationMethod,
			?focalPointRatio : Null<Float>) : Void
	{
		mCurrentLine.grad = CreateGradient(type,colors,alphas,ratios,
				matrix,spreadMethod,
				interpolationMethod,
				focalPointRatio);
	}



	public function beginFill(color:Int, ?alpha:Null<Float>)
	{
		ClosePolygon(true);

		mFillColour =  color;
		mFillAlpha = alpha==null ? 1.0 : alpha;
		mFilling=true;
		mSolidGradient = null;
		mBitmap = null;
	}

	public function endFill()
	{
		ClosePolygon(true);
	}

	function DrawEllipse(x:Float,y:Float,rx:Float,ry:Float)
	{
		moveTo(x+rx, y);
		curveTo(rx+x        ,-0.4142*ry+y,0.7071*rx+x ,-0.7071*ry+y);
		curveTo(0.4142*rx+x ,-ry+y       ,x           ,-ry+y);
		curveTo(-0.4142*rx+x,-ry+y       ,-0.7071*rx+x,-0.7071*ry+y);
		curveTo(-rx+x       ,-0.4142*ry+y,-rx+x       , y);
		curveTo(-rx+x       ,0.4142*ry+y ,-0.7071*rx+x,0.7071*ry+y);
		curveTo(-0.4142*rx+x,ry+y        ,x           ,ry+y);
		curveTo(0.4142*rx+x ,ry+y        ,0.7071*rx+x ,0.7071*ry+y) ;
		curveTo(rx+x        ,0.4142*ry+y ,rx+x        ,y);
	}
	public function drawEllipse(x:Float,y:Float,rx:Float,ry:Float)
	{
		ClosePolygon(false);

		rx /= 2; ry /= 2;
		DrawEllipse(x+rx,y+ry,rx,ry);

		ClosePolygon(false);
	}

	public function drawCircle(x:Float,y:Float,rad:Float)
	{
		ClosePolygon(false);

		DrawEllipse(x,y,rad,rad);

		ClosePolygon(false);
	}

	public function drawRect(x:Float,y:Float,width:Float,height:Float)
	{
		// Hack to workaround premature width calculations during async image load
		if (width == 0 && height == 0) 
			mNoClip = true;
		else
			mNoClip = false;

		ClosePolygon(false);

		moveTo(x,y);
		lineTo(x+width,y);
		lineTo(x+width,y+height);
		lineTo(x,y+height);
		lineTo(x,y);

		ClosePolygon(false);
	}



	public function drawRoundRect(x:Float,y:Float,width:Float,height:Float,
			ellipseWidth:Float, ellipseHeight:Float = null)
	{
		if (ellipseHeight == null) ellipseHeight = ellipseWidth;

		if (ellipseHeight<1 || ellipseHeight<1)
		{
			drawRect(x,y,width,height);
			return;
		}

		ClosePolygon(false);

		moveTo(x,y+ellipseHeight);
		// top-left
		curveTo(x,y,x+ellipseWidth,y);

		lineTo(x+width-ellipseWidth,y);
		// top-right
		curveTo(x+width,y,x+width,y+ellipseWidth);

		lineTo(x+width,y+height-ellipseHeight);

		// bottom-right
		curveTo(x+width,y+height,x+width-ellipseWidth,y+height);

		lineTo(x+ellipseWidth,y+height);

		// bottom-left
		curveTo(x,y+height,x,y+height-ellipseHeight);

		lineTo(x,y+ellipseHeight);

		ClosePolygon(false);
	}

	function CreateGradient(type : GradientType,
			colors : Array<Dynamic>,
			alphas : Array<Dynamic>,
			ratios : Array<Dynamic>,
			matrix : Null<Matrix>,
			spreadMethod : Null<SpreadMethod>,
			interpolationMethod : Null<InterpolationMethod>,
			focalPointRatio : Null<Float>)
	{

		var points = new GradPoints();
		for(i in 0...colors.length)
			points.push({col:colors[i], alpha:alphas[i], ratio:ratios[i]});


		var flags = 0;

		if (type==GradientType.RADIAL)
			flags |= RADIAL;

		if (spreadMethod==SpreadMethod.REPEAT)
			flags |= REPEAT;
		else if (spreadMethod==SpreadMethod.REFLECT)
			flags |= REFLECT;


		if (matrix==null)
		{
			matrix = new Matrix();
			matrix.createGradientBox(25,25);
		}
		else
			matrix = matrix.clone();

		var focal : Float = focalPointRatio ==null ? 0 : focalPointRatio;
		return  { points : points, matrix : matrix, flags : flags, focal:focal };
	}


	public function beginGradientFill(type : GradientType,
			colors : Array<Dynamic>,
			alphas : Array<Dynamic>,
			ratios : Array<Dynamic>,
			?matrix : Matrix,
			?spreadMethod : Null<SpreadMethod>,
			?interpolationMethod : Null<InterpolationMethod>,
			?focalPointRatio : Null<Float>) : Void
	{
		ClosePolygon(true);

		mFilling = true;
		mBitmap = null;
		mSolidGradient = CreateGradient(type,colors,alphas,ratios,
				matrix,spreadMethod,
				interpolationMethod,
				focalPointRatio);
	}




	public function beginBitmapFill(bitmap:BitmapData, ?matrix:Matrix,
			?in_repeat:Bool, ?in_smooth:Bool)
	{
		ClosePolygon(true);

		var repeat:Bool = in_repeat==null ? true : in_repeat;
		var smooth:Bool = in_smooth==null ? false : in_smooth;

		mFilling = true;

		mSolidGradient = null;

		mBitmap  = { texture_buffer: bitmap.handle(),
			matrix: matrix==null ? matrix : matrix.clone(),
			flags : (repeat ? BMP_REPEAT : 0) |
				(smooth ? BMP_SMOOTH : 0) };

	}


	public function jeashClearLine()
	{
		mCurrentLine = new LineJob( null,-1,-1,  0.0,
				0.0, 0x000, 1, CORNER_ROUND, END_ROUND,
				SCALE_NORMAL, 3.0);
	}

	inline function jeashClearCanvas()
	{
		if (jeashSurface != null)
			jeashSurface.width = jeashSurface.width;
	}

	public function clear()
	{
		jeashClearLine();

		mPenX = 0.0;
		mPenY = 0.0;

		mDrawList = new DrawList();
		nextDrawIndex = 0;

		mPoints = [];

		mSolidGradient = null;
		//mBitmap = null;
		mFilling = false;
		mFillColour = 0x000000;
		mFillAlpha = 0.0;
		mLastMoveID = 0;

		// clear the canvas
		jeashClearCanvas();


		mLineJobs = [];
		
		markBoundsDirty();
	}

	public function getStandardExtent() : Rectangle
	{
		if(standardExtent!=null)
			return standardExtent;

		if (mDrawList.length == 0)
			return standardExtent = new Rectangle();

		var maxX, minX, maxY, minY;
		maxX = minX = 0.;//mDrawList[0].points[0].x;
		maxY = minY = 0.;//mDrawList[0].points[0].y;
		
		for (dl in mDrawList) {
			for (p in dl.points) {
				maxX=p.x>maxX?p.x:maxX;
				minX=p.x<minX?p.x:minX;
				maxY=p.y>maxY?p.y:maxY;
				minY=p.y<minY?p.y:minY;
			}
			if (dl.bitmap != null)
			{	
				var width = dl.bitmap.texture_buffer.width;
				var height = dl.bitmap.texture_buffer.height;
				maxX=width>maxX?width:maxX;
				minX=0<minX?0:minX;
				maxY=height>maxY?height:maxY;
				minY=0<minY?0:minY;
			} 
		}
		
		if((minX<0 && minX<originX) || (minY<0 && minY<originY)){
			nextDrawIndex = 0;
			jeashClearCanvas();		
		}
		originX=minX;
		originY=minY;
		
		return standardExtent = new Rectangle(minX, minY, maxX-minX, maxY-minY);
	}

	public function moveTo(inX:Float,inY:Float)
	{
		mPenX = inX;
		mPenY = inY;

		if (!mFilling)
		{
			ClosePolygon(false);
		}
		else
		{
			AddLineSegment();
			mLastMoveID = mPoints.length;
			mPoints.push( new GfxPoint( mPenX, mPenY, 0.0, 0.0, MOVE ) );
		}
	}

	public function lineTo(inX:Float,inY:Float)
	{
		var pid = mPoints.length;
		if (pid==0)
		{
			mPoints.push( new GfxPoint( mPenX, mPenY, 0.0, 0.0, MOVE ) );
			pid++;
		}

		mPenX = inX;
		mPenY = inY;
		mPoints.push( new GfxPoint( mPenX, mPenY, 0.0, 0.0, LINE ) );

		if (mCurrentLine.grad!=null || mCurrentLine.alpha>0)
		{
			if (mCurrentLine.point_idx0<0)
				mCurrentLine.point_idx0 = pid-1;
			mCurrentLine.point_idx1 = pid;
		}

		if ( !mFilling ) ClosePolygon(false);

	}

	public function curveTo(inCX:Float,inCY:Float,inX:Float,inY:Float)
	{
		var pid = mPoints.length;
		if (pid==0)
		{
			mPoints.push( new GfxPoint( mPenX, mPenY, 0.0, 0.0, MOVE ) );
			pid++;
		}

		mPenX = inX;
		mPenY = inY;
		mPoints.push( new GfxPoint( inX, inY, inCX, inCY, CURVE ) );

		if (mCurrentLine.grad!=null || mCurrentLine.alpha>0)
		{
			if (mCurrentLine.point_idx0<0)
				mCurrentLine.point_idx0 = pid-1;
			mCurrentLine.point_idx1 = pid;
		}

	}


	public function flush() { ClosePolygon(true); }

	private function AddDrawable(inDrawable:Drawable)
	{
		if (inDrawable==null)
			return; // throw ?

		mDrawList.unshift( inDrawable );

	}

	private function AddLineSegment()
	{
		if (mCurrentLine.point_idx1>0)
		{
			mLineJobs.push(
					new LineJob(
						mCurrentLine.grad,
						mCurrentLine.point_idx0,
						mCurrentLine.point_idx1,
						mCurrentLine.thickness,
						mCurrentLine.alpha,
						mCurrentLine.colour,
						mCurrentLine.pixel_hinting,
						mCurrentLine.joints,
						mCurrentLine.caps,
						mCurrentLine.scale_mode,
						mCurrentLine.miter_limit
						) );
		}
		mCurrentLine.point_idx0 = mCurrentLine.point_idx1 = -1;
	}

	private function ClosePolygon(inCancelFill)
	{
		var l =  mPoints.length;
		if (l>0)
		{
			if (l>1)
			{
				if (mFilling && l>2)
				{
					// Make implicit closing line
					if (mPoints[mLastMoveID].x!=mPoints[l-1].x || mPoints[mLastMoveID].y!=mPoints[l-1].y)
					{
						lineTo(mPoints[mLastMoveID].x, mPoints[mLastMoveID].y);

					}
				}

				AddLineSegment();

				var drawable : Drawable = { 
					points: mPoints, 
					fillColour: mFillColour, 
					fillAlpha: mFillAlpha,
					solidGradient: mSolidGradient, 
					bitmap: mBitmap,
					lineJobs: mLineJobs 
				};

				AddDrawable( drawable );

			}

			mLineJobs = [];
			mPoints = [];
		}

		if (inCancelFill)
		{
			mFillAlpha = 0;
			mSolidGradient = null;
			mBitmap = null;
			mFilling = false;
		}

		jeashChanged = true;
		standardExtent=null;
		markBoundsDirty();
	}

	public static function jeashDetectIsPointInPathMode()
	{
		var canvas : HTMLCanvasElement = cast js.Lib.document.createElement("canvas");
		var ctx = canvas.getContext('2d');
		if (ctx.isPointInPath == null)
			return USER_SPACE;
		ctx.save();
		ctx.translate(1,0);
		ctx.beginPath();
		ctx.rect(0,0,1,1);
		var rv = if (ctx.isPointInPath(0.3,0.3)) {
			USER_SPACE;
		} else {
			DEVICE_SPACE;
		}
		ctx.restore();
		return rv;
	}

	public inline function markBoundsClean(){
		mBoundsDirty=false;
	}

	inline function markBoundsDirty() {
		if(!mBoundsDirty){
			mBoundsDirty=true;
			if(owner!=null)
				owner.jeashInvalidateBounds();
		}
	}

	inline function getContext() : CanvasRenderingContext2D
	{
	       	try {
			return jeashSurface.getContext("2d");
		} catch (e:Dynamic) {
			flash.Lib.trace("2d canvas API not implemented for: " + jeashSurface);
			return null;
		}
	}

	function jeashAdjustSurface() 
	{

		// re-allocate canvas, copy into larger canvas.
		var dstCanvas : HTMLCanvasElement = cast js.Lib.document.createElement("canvas");
		var ctx = dstCanvas.getContext("2d");

		dstCanvas.width = Math.ceil(standardExtent.width - standardExtent.x);
		dstCanvas.height = Math.ceil(standardExtent.height - standardExtent.y);

		Lib.jeashDrawToSurface(jeashSurface, dstCanvas);
		if (Lib.jeashIsOnStage(jeashSurface)) {
			Lib.jeashAppendSurface(dstCanvas);
			Lib.jeashCopyStyle(jeashSurface, dstCanvas);
			Lib.jeashSwapSurface(jeashSurface,dstCanvas);
			Lib.jeashRemoveSurface(jeashSurface);
		}

		jeashSurface = dstCanvas;
	}
}

