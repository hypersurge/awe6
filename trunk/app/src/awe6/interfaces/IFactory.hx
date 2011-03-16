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
 * The IFactory interface should be implemented by objects designed to populate an awe6 implementation.
 * <p>The IFactory represents the blueprint and builder for all project specific classes.</p>
 * @author Robert Fell
 * @todo	Many of these descriptions need better thought.  Documentation on IFactory needs to be excellent, currently basic.
 */
interface IFactory
{
	/**
	 * The unique identifier for this specific project.  <=16 chars, no spaces.
	 */
	var id( default, null ):String;
	/**
	 * The current version of this specific project.  Suggestion: major.minor.revision - e.g. 1.2.345
	 */
	var version( default, null ):String;
	/**
	 * The author or this specific project.
	 */
	var author( default, null ):String;
	/**
	 * A convenient switch to allow debug modes or verbose output in your code.  Adjust as needed.
	 */
	var isDebug( default, null ):Bool;
	/**
	 * A convenient switch to force all loaded content to be freshly loaded each request (rather than caching).
	 */
	var isDecached( default, null ):Bool;
	/**
	 * Disable to hide any eye candy options.
	 */
	var isEyeCandyOptionEnabled( default, null ):Bool;
	/**
	 * Disable to hide any full screen options.
	 */
	var isFullScreenOptionEnabled( default, null ):Bool;
	/**
	 * Disable to hide any session resetting options.
	 */
	var isResetSessionsOptionEnabled( default, null ):Bool;
	/**
	 * The horizontal width of this application's bounding rectangle.
	 */
	var width( default, null ):Int;
	/**
	 * The vertical height of this application's bounding rectangle.
	 */
	var height( default, null ):Int;
	/**
	 * The default background color of the application's bounding rectangle.
	 */
	var bgColor( default, null ):Int;
	/**
	 * The intended frequency of the update broad phase traversal stack.  Technical limitations may prevent desired framerate from occurring.
	 */
	var targetFramerate( default, null ):Int;
	/**
	 * If true will send the time between each update as if the targetFramerate was hit perfectly.  If false will send the actual time between each update (which will vary from update to update).
	 */
	var isFixedUpdates( default, null ):Bool;
	/**
	 * Dictionary of values.  Can be used to load initial configuration settings or store global variables.
	 */
	var config( default, null ):Hash<Dynamic>;
	/**
	 * The scene which is displayed first.  The application starts here.
	 */
	var startingSceneType( default, null ):EScene;
	/**
	 * The default key used in this application to pause updates.
	 */
	var keyPause( default, null ):EKey;
	/**
	 * The default key used in this application to mute the audio.
	 */
	var keyMute( default, null ):EKey;
	/**
	 * The default key used in this application to back out of the current scene.
	 */
	var keyBack( default, null ):EKey;
	/**
	 * The default key used in this application to advance to the next scene. 
	 */
	var keyNext( default, null ):EKey;
	/**
	 * The default key used in this application to do a special action (determined by the specific application).
	 */
	var keySpecial( default, null ):EKey;
	
	/**
	 * Called by the kernel to initiate the factory.
	 * @param	kernel	An intialized kernel offering services to the factory.
	 */
	function create( kernel:IKernel ):Void;
	/**
	 * Builds the application's preloader to load initial media assets.
	 * @return	Preloader to load initial media assets.
	 */
	function createPreloader():IPreloader;
	/**
	 * Builds the application's session to store user progress.
	 * @param	id	The unique identifier of the session.  If session already exists will load existing.
	 * @return	Session to store user progress.
	 */	
	function createSession( ?id:String ):ISession;
	/**
	 * Builds the application's logger to log events / analytics.
	 * @return	Logger to log events / analytics.
	 */
	function createLogger():ILogger;
	/**
	 * Builds the application's overlay to decorate and provide top level functionality.
	 * @todo	Return Overlay specific to each EScene.
	 * @return	Overlay to decorate and provide top level functionality.
	 */
	function createOverlay():IOverlay;
	/**
	 * Builds an empty Entity for injection.
	 * @param	?id	The unique identifier of this entity.
	 * @return	An empty Entity.
	 */
	function createEntity( ?id:String ):IEntity;
	/**
	 * Builds the application's scenes which contain specific functionality.
	 * @param	type	The type of scene.
	 * @return	Scene which contain specific functionality.
	 */
	function createScene( type:EScene ):IScene;
	/**
	 * Builds the application's textStyle to configure font formatting.
	 * @param	?type	The type of textStyle.
	 * @return	TextStyle to configure font formatting.
	 */
	function createTextStyle( ?type:ETextStyle ):ITextStyle;
	/**
	 * Builds the application's transition between scenes.  Can be individually tailored for any combination of incoming and outgoing scene.
	 * @param	?typeIncoming	The type of the incoming scene.
	 * @param	?typeOutgoing	The type of the outgoing scene.
	 * @return	Transition between scenes.
	 */
	function createSceneTransition( ?typeIncoming:EScene, ?typeOutgoing:EScene ):ISceneTransition;
	/**
	 * When a scene is backed out of it will be replaced by the scene returned here.
	 * @param	type	Type of scene to back out from.
	 * @return	Scene type to back out to.
	 */
	function getBackSceneType( type:EScene ):EScene;
	/**
	 * When a scene requests the next scene it will be replaced by the scene returned here.
	 * @param	type	Type of scene to advance from.
	 * @return	Scene type to advance to next.
	 */
	function getNextSceneType( type:EScene ):EScene;
}