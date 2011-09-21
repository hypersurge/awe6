/**
 * Copyright (c) 2010, Jeash contributors.
 * 
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package jeash.media;

import flash.events.Event;

import Html5Dom;

/**
* @author	Russell Weir
* @author	Niel Drummond
* @todo Implement soundTransform
**/
class SoundChannel extends flash.events.EventDispatcher {
	public var ChannelId(default,null) : Int;
	public var leftPeak(default,null) : Float;
	public var position(default,null) : Float;
	public var rightPeak(default,null) : Float;
	public var soundTransform(default,__setSoundTransform) : SoundTransform;

	private var m_started : Bool;
	private var m_sound : HTMLAudioElement;
	private var m_parentSound : Sound;
	private var m_startTime : Int;
	private var m_loops : Int;

	private function new() : Void {
		super( this );
		ChannelId = -1;
		leftPeak = 0.;
		position = 0.;
		rightPeak = 0.;

		m_started = false;
		m_startTime = 0;
		m_loops = 0;
	}

	/////////////////// Neash API /////////////////////////////
	/**
	* Internal call from Sound class to start a clip. This is
	* used since the call to Sound.play() could potentially
	* occur before the sound has loaded from a network resource
	*
	* @return Channel index that sound started playing on, -1 on error
	*/
	public function Start() : Int {
		if(m_started)
			throw "Can not restart a SoundChannel";
		m_started = true;
		m_sound.play();
		ChannelId++;
		//if( m_startTime != 0 )
		//	Sound.setChannelPosition(ChannelId, m_startTime);
		return ChannelId;
	}

	public static function Create(parent:Sound, soundObj:HTMLAudioElement, startTime : Float=0.0, loops : Int=0, sndTransform : SoundTransform=null) : SoundChannel
	{
		var snd = new SoundChannel();
		snd.m_parentSound = parent;
		snd.m_sound = soundObj;
		snd.m_startTime = Std.int(startTime);
		snd.m_loops = loops;
		snd.soundTransform = sndTransform;
		return snd;
	}


	/////////////////// Flash API /////////////////////////////
	public function stop() : Void {
		if(m_parentSound != null) {
			m_parentSound.OnChannelStopped(this.ChannelId);
			// this effectively destroys this channel
			// reduce GC load
			m_parentSound = null;
		}
	}


	////////////////////// Privates //////////////////////////
	private function __setSoundTransform( v : SoundTransform ) : SoundTransform
	{
		return this.soundTransform = v;
	}
}

