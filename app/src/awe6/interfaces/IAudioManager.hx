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
 * Provides functions to control playback of audio: sounds, music etc. 
 * @author	Robert Fell
 */
interface IAudioManager
{
	/**
	 * If true all audio playback is silenced.
	 */
	var isMute( default, _set_isMute ):Bool;
	/**
	 * Begin playback of any specified sound.  Optional parameters allow further control.
	 * @param	id	The unique id of the audio media asset.  Can be the className of a loaded asset library.
	 * @param	?audioChannelType	Sounds can be assigned specific channels to allow transformation of groups of related sounds.
	 * @param	?loops	How many times the specified sound should repeat.  Set to -1 for continual loop.
	 * @param	?startTime	Time displacement (ms) from the start of the sound file.
	 * @param	?volume	Adjusts this sound's amplitude relative to the audioChannel.  0...1: 0 is silent, 1 is full.
	 * @param	?pan	Adjusts this sound's stereo effect relative to the audioChannel.  -1...1: -1 is left channel only, 0 is central, 1 is right channel only.
	 * @param	?isIgnoredIfPlaying	If true and this sound is already playing in the specified channel the start request will be skipped.  If false there is a potential for the same sound to play over the top of itself.
	 * @param	?onCompleteCallback	Callback method to execute on sound complete.
	 */
	 function start( id:String, ?audioChannelType:EAudioChannel, ?loops:Int = 1, ?startTime:Int = 0, ?volume:Float = 1, ?pan:Float = 0, ?isIgnoredIfPlaying:Bool = false, ?onCompleteCallback:Void->Void ):Void;
	/**
	 * End playback of any specified sound.  To stop all sounds on all channels, leave all parameters blank.
	 * @param	?id	The unique id of the audio media asset intended to be stopped.  If null will stop all sounds on the specific audioChannel.
	 * @param	?audioChannelType	If specified will only stop sounds assigned to this channel.
	 */
	function stop( ?id:String, ?audioChannelType:EAudioChannel ):Void;
	/**
	 * Adjusts the playback of any specified sound.  To adjust all sounds, ommit id and audioChannelType.
	 * @param	?id	The unique id of the audio media asset intended to be transformed.  If null will transform all sounds on the specific audioChannel.
	 * @param	?audioChannelType	If specified will only transform sounds assigned to this channel.
	 * @param	?volume	Adjusts this sound's amplitude relative to the audioChannel.  0...1: 0 is silent, 1 is full.
	 * @param	?pan	Adjusts this sound's stereo effect relative to the audioChannel.  -1...1: -1 is left channel only, 0 is central, 1 is right channel only.
	 * @param	?asRelative	If true will adjust sounds relative to their original transformation.  If false will set them as absolute values.
	 */
	function transform( ?id:String, ?audioChannelType:EAudioChannel, ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false  ):Void;
	/**
	 * Discover if a specified sound is playing.
	 * @param	?id	The unique id of the audio media asset under investigation.  If null will search entire audioChannel for activity.
	 * @param	?audioChannelType	If specified will only investigate the specified channel.  If ommitted will investigate all channels.
	 * @return	Returns true if a match is found, otherwise false.
	 */
	function isPlaying( ?id:String, ?audioChannelType:EAudioChannel ):Bool;
}