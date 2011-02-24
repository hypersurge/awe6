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
 * The IAudio interface should be implemented by objects intended to be handled by the AudioManager.
 * <p>This approach allows interaction by reference, rather than by id and channel.</p>
 * @author	Robert Fell
 */
interface IAudio implements IDisposable
{
	/**
	 * This uniqie identifier of this sound's asset.
	 */
	public var id( default, null ):String;
	/**
	 * The AudioChannel this sound is attached to.
	 */
	public var audioChannelType( default, null ):EAudioChannel;
	/**
	 * Adjusts the playback of this sound.
	 * @param	?volume	Adjusts this sound's amplitude relative to the audioChannel.  0...1: 0 is silent, 1 is full.
	 * @param	?pan	Adjusts this sound's stereo effect relative to the audioChannel.  -1...1: -1 is left channel only, 0 is central, 1 is right channel only.
	 * @param	?asRelative	If true will adjust sounds relative to their original transformation.  If false will set them as absolute values.
	 */
	public function transform( ?volume:Float = 1, ?pan:Float = 0, ?asRelative:Bool = false ):Void;
	/**
	 * End playback of this sound.
	 */
	public function stop():Void;
}