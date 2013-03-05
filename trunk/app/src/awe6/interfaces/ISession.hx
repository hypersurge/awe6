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
 * The ISession interface should be implemented by objects wishing to preserve interactive information interchange.
 * <p>The session can be used as both memento and arbitrator between subsystems - including entities and scenes.</p>
 * <p>Sessions can be permanently stored and retrieved on future application ezecution.</p>
 * @author	Robert Fell
 */
interface ISession
{
	/**
	 * The unique identifier of this session.
	 */
	var id( default, null ):String;
	/**
	 * Useful for testing and debug.
	 */
	#if haxe3
	var isTester( get, null ):Bool;
	#else
	var isTester( get_isTester, null ):Bool;
	#end
	/**
	 * Creates a copy of the current session.
	 * @param	newId	The unique identifier of the copy.
	 * @return	A copy of the current session.
	 */
	function clone( newId:String ):ISession;
	/**
	 * Reverts the session back to factory settings (as if created afresh).
	 * @param	?isSaved	If true immediately writes the reset session to disk.
	 */
	function reset( ?isSaved:Bool = false ):Void;
	/**
	 * Writes the session to disk.
	 */
	function save():Void;
	/**
	 * Removes the session from disk.
	 */
	function delete():Void;
	/**
	 * Helper function to calculate overall progress of a game / rewards acquired etc. 
	 * @return	Range 0...1: with 1 representing complete.
	 */
	function getPercentageComplete():Float;
	/**
	 * Retrieve the collection of sessions identifiers currently saved to disk.
	 * @param	?suggestions	Prepopulates results with the suggestions.
	 * @return	A collection of sessions identifiers currently save to disk.
	 */
	function getSessionIds( ?suggestions:Array<String> = null ):Array<String>;
	/**
	 * Retrieve the collection of sessions currently saved to disk.
	 * @param	?suggestions	Prepopulates results with the suggestions.
	 * @return	A collection of sessions currently save to disk.
	 */
	function getSessions( ?suggestions:Array<String> = null ):Array<ISession>;
	/**
	 * Removes all session data from disk.
	 */
	function deleteAllSessions():Void;
}