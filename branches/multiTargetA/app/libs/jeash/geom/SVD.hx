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

package jeash.geom;

import flash.geom.Matrix;

/**
 * 
 * originally based on the structure proposed at:
 * http://trac.dojotoolkit.org/browser/dojox/trunk/gfx/decompose.js
 * And many other parts.
 *
 * @author aldo.bucchi@gmail.com
	* @author Niel Drummond
 * 
 */	

typedef EigenValueDecomposition = 
{
	public var value1:Float;
	public var value2:Float;
	public var vector1:Point;
	public var vector2:Point;
}

typedef SingularValueDecomposition =
{
	public var dx:Float;
	public var dy:Float;
	public var sx:Float;
	public var sy:Float;
	public var angle1:Float;
	public var angle2:Float;
}

class Decompose 
{
	static	var math = Math;
	
	/**
	 * 
	 * uses two close FP ration and their original magnitudes to approximate the result
	 * 
	 * @param r1
	 * @param m1
	 * @param r2
	 * @param m2
	 * @return 
	 * 
	 */		
	private static inline function calcFromValues( r1:Float,  m1:Float, r2:Float,  m2:Float ):Float
	{
		if( ! math.isFinite( r1 ) )
		{
			return r2;	// Number
		}
		else if( ! math.isFinite( r2 ) )
		{
			return r1;	// Number
		}
		
		m1 = math.abs(m1); 
		m2 = math.abs(m2);
		
		return ( m1 * r1 + m2 * r2 ) / ( m1 + m2 );	
	}

	private static inline function decomposeSR( M:Matrix , result:SingularValueDecomposition ):SingularValueDecomposition
	{
	
		var sign:Float 	= MatrixUtil.getScaleSign( M ),
			a:Float 	 	= result.angle1 = (math.atan2(M.c, M.d) + math.atan2(-sign * M.b, sign * M.a)) / 2,
			cos:Float 	 	= math.cos(a), sin:Float = math.sin(a);
			
			
		result.sx = calcFromValues(M.a / cos, cos, -M.b / sin, sin);
		result.sy = calcFromValues(M.d / cos, cos,  M.c / sin, sin);
		
		return result;
	
	}
	
	/**
	 * decomposes a matrix into [rotate, scale]; no checks are done
	 */		
	private static inline function decomposeRS( M:Matrix , result:SingularValueDecomposition ):SingularValueDecomposition
	{
		var sign	:Float = MatrixUtil.getScaleSign( M ),
			a		:Float = result.angle2 = (math.atan2(sign * M.c, sign * M.a) + math.atan2(-M.b, M.d)) / 2,
			cos		:Float = math.cos(a), sin:Float = math.sin(a);
			
		result.sx = calcFromValues(M.a / cos, cos,  M.c / sin, sin);
		result.sy = calcFromValues(M.d / cos, cos, -M.b / sin, sin);
	
		return result;
	
	}
	
	/**
	 * Decompose a 2D matrix into translation, scaling, and rotation components
	 * description: this function decompose a matrix into four logical components: 
	 * translation, rotation, scaling, and one more rotation using SVD.
	 */		
	public static function decompose( matrix:Matrix ):SingularValueDecomposition
	{

		var M:Matrix = matrix;
		
		var result:SingularValueDecomposition = { 
				dx:M.tx, 
				dy:M.ty, 
				sx:1, 
				sy:1, 
				angle1:0, 
				angle2:0 
		};
			
		// detect case: [scale]
		if( eqFP( M.b, 0 ) && eqFP( M.c, 0) )
		{
			result.sx = M.a;
			result.sy = M.d;
			return result;
		}
		
		// detect case: [scale, rotate]
		if(  eqFP( M.a * M.c, -M.b * M.d )  )
		{
			return decomposeSR(M, result);
		}
		
		// detect case: [rotate, scale]
		if( eqFP( M.a * M.b, -M.c * M.d ) )
		{
			return decomposeRS( M, result );
		}

		// do SVD
		var	MT	:Matrix = MatrixUtil.transpose( M );
		
		var M_MT:Matrix = MatrixUtil.concat( [M, MT] );
		var	u:EigenValueDecomposition  = eigenValueDecomposition( M_MT );

		var MT_M:Matrix = MatrixUtil.concat( [MT, M] );
		var	v:EigenValueDecomposition  = eigenValueDecomposition( MT_M );
		

		var U:Matrix = new Matrix( u.vector1.x, u.vector2.x, u.vector1.y, u.vector2.y );
		var VT:Matrix = new Matrix( v.vector1.x, v.vector1.y, v.vector2.x, v.vector2.y );


		var S:Matrix = MatrixUtil.concat(
								[MatrixUtil.INVERT, U,
								M,
								MatrixUtil.INVERT, VT ]
							);
								
			
		decomposeSR( VT, result );
		S.a *= result.sx;
		S.d *= result.sy;
		
		decomposeRS(U, result);
		S.a *= result.sx;
		S.d *= result.sy;
		
		result.sx = S.a;
		result.sy = S.d;
		
		return result;
		
	}
	
	public static function eigenValueDecomposition( matrix:Matrix ):EigenValueDecomposition
	{
		

		var m:Matrix 	= matrix,
			b:Float 	= -m.a - m.d,
			c:Float 	= m.a * m.d - m.b * m.c,
			d:Float 	= math.sqrt(b * b - 4 * c),
			l1:Float 	= -(b + (b < 0 ? -d : d)) / 2,
			l2:Float 	= c / l1,
			vx1:Float 	= m.b / (l1 - m.a), vy1:Float = 1,
			vx2:Float 	= m.b / (l2 - m.a), vy2:Float = 1;
			

		if( eqFP(l1, l2) )
		{
			vx1 = 1.0; vy1 = 0.0; vx2 = 0.0; vy2 = 1.0;
		}
		
		if(!math.isFinite(vx1))
		{
			vx1 = 1.0; vy1 = (l1 - m.a) / m.b;
			if(!math.isFinite(vy1))
			{
				vx1 = (l1 - m.d) / m.c; vy1 = 1.0;
				if(!math.isFinite(vx1)){
					vx1 = 1.0; vy1 = m.c / (l1 - m.d);
				}
			}
		}
		
		if(!math.isFinite(vx2))
		{
			vx2 = 1.0; vy2 = (l2 - m.a) / m.b;
			if(!math.isFinite(vy2))
			{
				vx2 = (l2 - m.d) / m.c; vy2 = 1.0;
				if(!math.isFinite(vx2))
				{
					vx2 = 1.0; vy2 = m.c / (l2 - m.d);
				}
			}
		}
		
		var d1:Float 	 = math.sqrt(vx1 * vx1 + vy1 * vy1),
			d2:Float 	 = math.sqrt(vx2 * vx2 + vy2 * vy2);
			
			
		if(!math.isFinite(vx1 /= d1)){ vx1 = 0; }
		if(!math.isFinite(vy1 /= d1)){ vy1 = 0; }
		if(!math.isFinite(vx2 /= d2)){ vx2 = 0; }
		if(!math.isFinite(vy2 /= d2)){ vy2 = 0; }
		
		
		
		var eV:EigenValueDecomposition = {
				value1: l1,
				value2: l2,
				vector1: new Point( vx1, vy1 ),
				vector2: new Point( vx2, vy2 )
			};
		return eV;
		
	}		
	
	public static inline function eqFP( a:Float , b:Float ):Bool
	{
		return math.abs( a - b ) <= 1e-6 * ( math.abs( a ) + math.abs( b ) );
	}		

		
	
}


