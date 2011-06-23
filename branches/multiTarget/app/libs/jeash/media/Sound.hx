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
import flash.events.IOErrorEvent;
import flash.net.URLRequest;
import flash.net.URLLoader;

import Html5Dom;

/**
* @author	Russell Weir
* @todo Possibly implement streaming
* @todo Review events match flash
**/
class Sound extends flash.events.EventDispatcher {
	public var bytesLoaded(default,null) : Int;
	public var bytesTotal(default,null) : Int;
	public var id3(default,null) : ID3Info;
	public var isBuffering(default,null) : Bool;
	public var length(default,null) : Float;
	public var url(default,null) : String;


	private static var s_channels : IntHash<SoundChannel>;
	private static var s_channelsToStart : List<SoundChannel>;

	private var m_sound : HTMLAudioElement;
	private var m_loaded : Bool;

	public function new(?stream : URLRequest, ?context : SoundLoaderContext) : Void {
		super( this );
		bytesLoaded = 0;
		bytesTotal = 0;
		id3 = null;
		isBuffering = false;
		length = 0;
		url = null;
		m_sound = cast js.Lib.document.createElement("audio");
		m_loaded = false;
		if(stream != null)
			load(stream, context);
	}

	/////////////////// Neash API /////////////////////////////
	/**
	* Internal notification from SoundChannel that stop()
	* has been called
	**/
	public function OnChannelStopped(v:Int) : Void
	{
		if(v >= 0)
			CleanupSoundChannel(v);
	}

	/////////////////// Flash API /////////////////////////////

	public function close() : Void	{	}

	/**
	* @todo JS target just dispatches COMPLETE.
	**/
	public function load(stream : URLRequest, ?context : SoundLoaderContext) : Void
	{

		//m_sound.addEventListener("audiowritten", TODO, false);
		//m_sound.addEventListener("loadstart", TODO, false);
		//m_sound.addEventListener("progress", TODO, false);
		//m_sound.addEventListener("stalled", TODO, false);
		//m_sound.addEventListener("suspend", TODO, false);
		//m_sound.addEventListener("durationchange", TODO, false);
		//m_sound.addEventListener("loadedmetadata", TODO, false);
		//m_sound.addEventListener("emptied", TODO, false);
		//m_sound.addEventListener("timeupdate", TODO, false);
		//m_sound.addEventListener("loadeddata", TODO, false);
		//m_sound.addEventListener("waiting", TODO, false);
		//m_sound.addEventListener("playing", TODO, false);
		//m_sound.addEventListener("play", TODO, false);
		//m_sound.addEventListener("canplaythrough", TODO, false);
		//m_sound.addEventListener("ratechange", TODO, false);
		//m_sound.addEventListener("pause", TODO, false);
		//m_sound.addEventListener("seeking", TODO, false);
		//m_sound.addEventListener("seeked", TODO, false);

		m_sound.addEventListener("canplay", cast __onSoundLoaded, false);
		m_sound.addEventListener("ended", cast __onSoundChannelFinished, false);
		m_sound.addEventListener("error", cast __onSoundLoadError, false);
		m_sound.addEventListener("abort", cast __onSoundLoadError, false);
		//m_sound.src = stream.url;

		if (stream.url.lastIndexOf(".mp3")==stream.url.length-4){
			if(m_sound.canPlayType('audio/mpeg')==false){
				//since MP3 cannot be played, attempt .ogg
				m_sound.setAttribute('src',stream.url.substr(stream.url.length-4)+'.ogg');
			}else{
				m_sound.setAttribute('src',stream.url);
			}
		}else if(stream.url.lastIndexOf(".ogg")==stream.url.length-4 && m_sound.canPlayType('audio/ogg; codecs="vorbis"')==false){
			//since OGG cannot be played attempt .mp3
			m_sound.setAttribute('src',stream.url.substr(stream.url.length-4)+'.mp3');
		}else{
			m_sound.setAttribute('src',stream.url);
		}

	}

	public function play(startTime : Float=0.0, loops : Int=0, sndTransform : SoundTransform=null) : SoundChannel {
		var sc = SoundChannel.Create(this, m_sound, startTime, loops, sndTransform);

		if(m_loaded)
		{
			StartSoundChannel(sc);
		}
		else
		{
			s_channelsToStart.add(sc);
		}

		return sc;
	}


	////////////////////// Privates //////////////////////////

	private static function StartSoundChannel(sc : SoundChannel) : Void
	{
		var idx = sc.Start();
		if( idx >= 0 )
		{
			s_channels.set(idx, sc);
		}
	}

	private static function CleanupSoundChannel(v : Int) : SoundChannel
	{
		var chan = s_channels.get(v);
		if(chan != null)
			s_channelsToStart.remove(chan);
		s_channels.remove(v);
		return chan;
	}

	private function __onSoundLoaded(evt : Event)
	{
		m_sound.removeEventListener("canplay", cast __onSoundLoaded, false);
		m_sound.removeEventListener("ended", cast __onSoundLoaded, false);
		m_sound.removeEventListener("error", cast __onSoundLoadError, false);
		m_sound.removeEventListener("abort", cast __onSoundLoadError, false);
		m_loaded = true;

		// start up any channels which were queued to play
		for(sc in s_channelsToStart)
			StartSoundChannel( sc );

		s_channelsToStart = new List();
		DispatchCompleteEvent();
	}

	private function __onSoundLoadError(evt : IOErrorEvent)
	{
		m_sound.removeEventListener("canplay", cast __onSoundLoaded, false);
		m_sound.removeEventListener("ended", cast __onSoundLoaded, false);
		m_sound.removeEventListener("ended", cast __onSoundLoaded, false);
		m_sound.removeEventListener("error", cast __onSoundLoadError, false);
		m_sound.removeEventListener("abort", cast __onSoundLoadError, false);
		DispatchIOErrorEvent();
	}

	private static function __onSoundChannelFinished( channel : Int ) : Void
	{
		var sc = CleanupSoundChannel( channel );
		if(sc != null) {
			var evt = new Event(Event.SOUND_COMPLETE);
			evt.target = sc;
			sc.dispatchEvent(evt);
		}
	}

	private static function __init__()
	{
		//nme.Sound.maxChannels = 32;
		s_channels = new IntHash();
		s_channelsToStart = new List();
	}

}
