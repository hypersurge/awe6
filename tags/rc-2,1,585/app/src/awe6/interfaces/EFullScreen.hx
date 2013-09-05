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

package awe6.interfaces;

/**
 * Representing possible full screen modes.
 * <p>Can be extended with SubType by using concrete project values.</p> 
 * @author	Robert Fell
 */
enum EFullScreen
{
	/**
	 * FullScreen mode is not available.
	 */
	DISABLED;
	/**
	 * Preserves original pixel size.
	 */
	NO_SCALE;
	/**
	 * Scale without preserving aspect ratio - some distortion may occur, including non linear pixel sizes.
	 */
	SCALE_ASPECT_RATIO_IGNORE;
	/**
	 * Scale without aspect ratio distortion.  Non linear pixel sizes may occur.
	 */
	SCALE_ASPECT_RATIO_PRESERVE;
	/**
	 * Scale without distortion, and doubling pixels (2x2, 4x4 etc) to nearest multiple to preserve pixel sizes.
	 */
	SCALE_NEAREST_MULTIPLE;
	/**
	 * Allows EScale to be extended (e.g. for using project specific scale modes).
	 */
	SUB_TYPE( value:Dynamic );
}