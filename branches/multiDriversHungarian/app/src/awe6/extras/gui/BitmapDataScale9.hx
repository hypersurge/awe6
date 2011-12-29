/*
 *                        _____ 
 *     _____      _____  / ___/
 *    /__   | /| /   _ \/ __ \ 
 *   / _  / |/ |/ /  __  /_/ / 
 *   \___/|__/|__/\___/\____/  
 *    awe6 is game, inverted
 * 
 * Copyright (c) 2010, Robert Fell, awe6.org
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

package awe6.extras.gui;
import flash.display.BitmapData;
import flash.geom.Matrix;
import flash.geom.Rectangle;

class BitmapDataScale9 extends BitmapData
{
	private var _source:BitmapData;
	private var _topLeftX:Int;
	private var _topLeftY:Int;
	private var _bottomRightX:Int;
	private var _bottomRightY:Int;
	
	public function new( source:BitmapData, topLeftX:Int, topLeftY:Int, bottomRightX:Int, bottomRightY:Int, width:Int, height:Int, ?isTransparent:Bool = true, ?fillColor:Int = 0xFFFFFFFF )
	{
		_source = source.clone();
		_topLeftX = topLeftX;
		_topLeftY = topLeftY;
		_bottomRightX = bottomRightX;
		_bottomRightY = bottomRightY;
		if ( isTransparent && ( fillColor == 0xFFFFFFFF ) )
		{
			fillColor = 0x00;
		}
		super( width, height, isTransparent, fillColor );
		_init();
	}
	
	private function _init():Void 
	{
		if ( ( width == _source.width ) && ( height == _source.height ) )
		{
			copyPixels( _source, _source.rect, _source.rect.topLeft );
		}
		else
		{
			var l_isSmoothing:Bool = true;
			var l_leftMargin:Int = _topLeftX;
			var l_rightMargin:Int = _source.width - _bottomRightX;
			var l_topMargin:Int = _topLeftY;
			var l_bottomMargin:Int = _source.height - _bottomRightY;
			var l_centerWidth:Int = _source.width - l_leftMargin - l_rightMargin;
			var l_centerHeight:Int = _source.height - l_topMargin - l_bottomMargin;
			var l_matrix:Matrix = new Matrix();
			var l_clipRect:Rectangle;
			//152
			//879
			//463			
			//1
			l_clipRect = new Rectangle( 0, 0, l_leftMargin, l_topMargin );
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//2
			l_matrix.tx = width - _source.width;
			l_clipRect = new Rectangle( width - l_rightMargin, 0, l_rightMargin, l_topMargin );
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//3
			l_matrix.ty = height - _source.height;
			l_clipRect = new Rectangle( width - l_rightMargin, height - l_bottomMargin, l_rightMargin, l_bottomMargin );
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//4
			l_matrix.tx = 0;				
			l_clipRect = new Rectangle( 0, height - l_bottomMargin, l_leftMargin, l_bottomMargin );
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//5
			l_matrix.identity();
			l_matrix.a = ( width - l_leftMargin - l_rightMargin ) / l_centerWidth;
			l_matrix.tx = l_leftMargin - ( l_leftMargin * l_matrix.a );
			l_clipRect = new Rectangle( l_leftMargin, 0, l_centerWidth * l_matrix.a, l_topMargin ); 
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//6
			l_matrix.ty = height - _source.height;
			l_clipRect = new Rectangle( l_leftMargin, height - l_bottomMargin, l_centerWidth * l_matrix.a, l_bottomMargin ); 
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//7
			l_matrix.d = ( height - l_topMargin - l_bottomMargin ) / l_centerHeight;
			l_matrix.ty = l_topMargin - ( l_topMargin * l_matrix.d );
			l_clipRect = new Rectangle( l_leftMargin, l_topMargin, l_centerWidth * l_matrix.a, l_centerHeight * l_matrix.d );
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//8
			l_matrix.identity();
			l_matrix.d = ( height - l_topMargin - l_bottomMargin ) / l_centerHeight;
			l_matrix.ty = l_topMargin - ( l_topMargin * l_matrix.d );
			l_clipRect = new Rectangle( 0, l_topMargin, l_leftMargin, l_centerHeight * l_matrix.d );
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
			//9
			l_matrix.tx = width - _source.width;
			l_clipRect = new Rectangle( width - l_rightMargin, l_topMargin, l_rightMargin, l_centerHeight * l_matrix.d ); 
			draw( _source, l_matrix, null, null, l_clipRect, l_isSmoothing );
		}
		_source.dispose();
	}
	
}