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
import awe6.core.MessageManager;

/**
 * Handles main updates and provides global locators for all managers
 * @author	Robert Fell
 */
#if haxe3
interface IKernel extends IPauseable extends ILogger
#else
interface IKernel implements IPauseable, implements ILogger
#end
{
	/**
	 * Defined by the IFactory, can be used for conditional logic relating to build modes and debug.
	 */
	var isDebug( default, null ):Bool;
	/**
	 * Identifies a non network location, can be used for conditional logic relating to build modes and debug.
	 */
	var isLocal( default, null ):Bool;
	/**
	 * Toggleable by the user, intended to be used as a switch to disable intensive, but non essential, content (performance vs wow).
	 */
	#if haxe3
	var isEyeCandy( default, set ):Bool;
	#else
	var isEyeCandy( default, set_isEyeCandy ):Bool;
	#end
	/**
	 * Toggleable by the user, enables or disables full screen mode.
	 */
	#if haxe3
	var isFullScreen( default, set ):Bool;
	#else
	var isFullScreen( default, set_isFullScreen ):Bool;
	#end
	/**
	 * The topmost visual element, used for chrome & global controls.
	 */
	var overlay( default, null ):IOverlay;
	/**
	 * Assets manager.
	 */
	var assets( default, null ):IAssetManager;
	/**
	 * Audio manager.
	 */
	var audio( default, null ):IAudioManager;
	/**
	 * Inputs manager.
	 */
	var inputs( default, null ):IInputManager;
	/**
	 * Scene manager.  State machine containing IEntities.
	 */
	var scenes( default, null ):ISceneManager;
	/**
	 * Messenger manager.  Arbitrator for observer pattern across IEntityCollections.
	 */
	var messenger( default, null ):IMessageManager;
	/**
	 * Helper methods.
	 */
	var tools( default, null ):ITools;
	/**
	 * Build properties and factory methods to create the application.
	 */
	var factory( default, null ):IFactory;
	/**
	 * Read and write globally accessible variables.
	 */
	#if haxe3
	var session( get, set ):ISession;
	#else
	var session( get_session, set_session ):ISession;
	#end
	/**
	 * Used for read only application settings and localisation text.
	 * @param	id	The unique identifier for the config setting (e.g. XML node name).
	 * @return	Value of the corresponding config setting.
	 */
	function getConfig( id:String ):Dynamic;
	/**
	 * Request the framerate of the application.
	 * @param	?asActual	Use actual framerate (potentially laggy), or the desired framerate (from IFactory).
	 * @return	Frames per second.
	 */
	function getFramerate( ?asActual:Bool = true ):Float;
	/**
	 * Internal method called when preloader completes; launches the starting scene as defined by IFactory.startingSceneType.
	 * @param	preloader	Corresponding IPreloader.
	 */
	function onPreloaderComplete( preloader:IPreloader ):Void;
}
