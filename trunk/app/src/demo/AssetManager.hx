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

package demo;
import assets.BackOver;
import assets.BackUp;
import assets.MuteOver;
import assets.MuteUp;
import assets.OverlayBackground;
import assets.PauseOver;
import assets.PauseUp;
import assets.Sphere;
import assets.UnmuteOver;
import assets.UnmuteUp;
import assets.UnpauseOver;
import assets.UnpauseUp;
import awe6.Types;
import flash.display.BitmapData;

class AssetManager extends AAssetManager
{
	public var overlayBackground( default, null ):BitmapData;
	public var backUp( default, null ):BitmapData;
	public var backOver( default, null ):BitmapData;
	public var muteUp( default, null ):BitmapData;
	public var muteOver( default, null ):BitmapData;
	public var unmuteUp( default, null ):BitmapData;
	public var unmuteOver( default, null ):BitmapData;
	public var pauseUp( default, null ):BitmapData;
	public var pauseOver( default, null ):BitmapData;
	public var unpauseUp( default, null ):BitmapData;
	public var unpauseOver( default, null ):BitmapData;
	public var sphere( default, null ):BitmapData;
	
	override private function _init():Void
	{
		super._init();
		overlayBackground = new OverlayBackground();
		backUp = new BackUp();
		backOver = new BackOver();
		muteUp = new MuteUp();
		muteOver = new MuteOver();
		unmuteUp = new UnmuteUp();
		unmuteOver = new UnmuteOver();
		pauseUp = new PauseUp();
		pauseOver = new PauseOver();
		unpauseUp = new UnpauseUp();
		unpauseOver = new UnpauseOver();
		sphere = new Sphere();
	}
	
}

