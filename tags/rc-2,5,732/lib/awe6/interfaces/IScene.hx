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
 * The IScene interface should be implemented by objects intending to represent scene states in the ISceneManager.
 * <p>Scenes represent the larger building blocks of the awe6 concept, and contain Entities which do the work.</p> 
 * @author	Robert Fell
 */
interface IScene extends IProcess extends IEntityCollection extends IViewable
{
	/**
	 * The type of this scene.
	 */
	var type( default, null ):EScene;
	/**
	 * Sets whether the scene is disposed when no longer the active scene.  In most cases this should be true.
	 */
	var isDisposable( default, null ):Bool;
	/**
	 * Sets whether the pause button is displayed / active in the overlay.
	 */
	var isPauseable( default, null ):Bool;
	/**
	 * Sets whether the mute button is displayed / active in the overlay.
	 */
	var isMuteable( default, null ):Bool;
	/**
	 * Sets whether the session is automatically saved when this scene is advanced.  In most cases this should be true.
	 */
	var isSessionSavedOnNext( default, null ):Bool;
}