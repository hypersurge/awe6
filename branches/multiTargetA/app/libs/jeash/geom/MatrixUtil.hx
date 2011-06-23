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

class MatrixUtil
{
	
	public static inline var INVERT:String = "invert";
	
	
	
	/**
	 * 
	 * @deprecated use MatrixX that has convenience methods for concat and inverse concat
	 * 
	 * @param args
	 * @return 
	 * 
	 */		
	public static function concat( args : Array<Dynamic> ):Matrix
	{
		
		var thisMatrix:Matrix;
		var resultMatrix:Matrix = new Matrix( );
		
		var invertNext:Bool = false;
		
		for ( arg in args )
		{
			
			if ( arg == INVERT )
			{
				invertNext = true;
				continue;	
			}
			else
			{
var b : Matrix = arg;
				thisMatrix = b.clone( );
			}
			
			if ( invertNext )
			{
				thisMatrix.invert( );					
				invertNext = false;
			}
		
			resultMatrix.concat( thisMatrix );	
		
		}
		
		return resultMatrix;

	}
	
	
	


	public static function compare( m1:Matrix, m2:Matrix ):Bool
	{
		// is there a faster way to do this?
		// concat inverted perhaps?
		if ( m1.a != m2.a )		return false;
		if ( m1.b != m2.b )		return false;
		if ( m1.c != m2.c )		return false;
		if ( m1.d != m2.d )		return false;
		if ( m1.tx != m2.tx )	return false;
		if ( m1.ty != m2.ty )	return false;
		return true;		
	}


	
	
	
	
	
	
	
	public static function getScaleSign( matrix:Matrix ):Float
	{
		return ( matrix.a * matrix.d < 0 || matrix.b * matrix.c > 0 ) ? -1 : 1;
	}
	
	
	
	
	public static function transpose( matrix:Matrix ):Matrix
	{
		return new Matrix( matrix.a, matrix.c, matrix.b, matrix.d, 0, 0 );
	}
	
	
}


