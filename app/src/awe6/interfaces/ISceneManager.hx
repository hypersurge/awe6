/*
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
 * The ISceneManager should be implemented by objects intended to manage the IScene state machine.
 * <p>Only a single scene is active at any given update.  Which scene is configured by this manager.</p>
 * @author	Robert Fell
 */
interface ISceneManager
{
	/**
	 * The currently active scene.
	 * <p>Use as a runtime property and not as an initialization property.</p>
	 */
	var scene( default, null ):IScene;
	/**
	 * Sets the current scene to a new scene.
	 * @param	type	The new scene.
	 */
	function setScene( type:EScene ):Void;
	/**
	 * Sets the current scene to the scene returned by IFactory.getBackSceneType().
	 * <p>The new scene should be representative of retreat.</p> 
	 * @see awe6.interfaces.IFactory.getBackSceneType
	 */
	function back():Void;
	/**
	 * Sets the current scene to the scene returned by IFactory.getNextSceneType().
	 * <p>The new scene should be representative of progress.</p> 
	 * @see awe6.interfaces.IFactory.getNextSceneType
	 */
	function next():Void;
}