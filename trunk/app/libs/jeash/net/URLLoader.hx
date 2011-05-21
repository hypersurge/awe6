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

package jeash.net;

import flash.events.Event;
import flash.events.EventDispatcher;
import flash.events.IOErrorEvent;
import flash.utils.ByteArray;

import Html5Dom;
import js.Dom;
import js.Lib;
import js.XMLHttpRequest;

/**
* @author	Hugh Sanderson
* @author	Niel Drummond
* @author	Russell Weir
* @todo open and progress events
* @todo Complete Variables type
**/
class URLLoader extends flash.events.EventDispatcher
{
	var http:Http;
	public var bytesLoaded:Int;
	public var bytesTotal:Int;
	public var data:Dynamic;
	public var dataFormat:URLLoaderDataFormat;

	public function new(?request:URLRequest)
	{
		super();
		bytesLoaded = 0;
		bytesTotal = 0;
		dataFormat = URLLoaderDataFormat.TEXT;
		if(request != null)
			load(request);
	}

	public function close() { }

	public function load(request:URLRequest)
	{
		http = new Http( request.url );
		http.onData = onData;
		http.onError = onError;
		// TODO: make dataFormat uniform with the flash API
		http.requestUrl( STREAM( (dataFormat == URLLoaderDataFormat.TEXT) ? TEXT : BINARY ) );

	}

	function onData (_) {
		var content = http.getData();
		switch(dataFormat) {
		case BINARY:
			this.data = new ByteArray();
			for( i in 0...content.length ) {
				var c : Int = untyped content["cca"](i) & 0xFF;
				this.data.writeByte(c);
			}
			this.data.position = 0;
		case TEXT:
			this.data = content;
		case VARIABLES:
			throw "Not complete";
		}

		DispatchCompleteEvent();
	}

	function onError (msg) {
		flash.Lib.trace(msg);
		DispatchIOErrorEvent();
	}

}

private enum HttpType
{
	IMAGE;
	VIDEO;
	AUDIO;
	STREAM( format:DataFormat );
}

private enum DataFormat
{
	BINARY;
	TEXT;
}

private class Http extends haxe.Http
{

	public function new( url:String )
	{
		super(url);
	}

	function registerEvents( subject:EventTarget )
	{
		untyped subject.onload = onData;
		untyped subject.onerror = onError;
		//subject.addEventListener( "load", cast onData, false );
		//subject.addEventListener( "error", cast onError, false );
	}

	// Always GET, always async
	public function requestUrl( type:HttpType ) : Void
	{
		var self = this;

		switch (type) 
		{
			case STREAM( dataFormat ):
				var xmlHttpRequest : XMLHttpRequest = untyped __new__("XMLHttpRequest");

				switch (dataFormat) {
					case BINARY: untyped xmlHttpRequest.overrideMimeType('text/plain; charset=x-user-defined');
					default:
				}
				
				registerEvents(cast xmlHttpRequest);

				var uri = null;
				for( p in params.keys() )
					uri = StringTools.urlDecode(p)+"="+StringTools.urlEncode(params.get(p));

				try {
					if( uri != null ) {
						var question = url.split("?").length <= 1;
						xmlHttpRequest.open("GET",url+(if( question ) "?" else
									"&")+uri,true);
						uri = null;
					} else
						xmlHttpRequest.open("GET",url,true);
				} catch( e : Dynamic ) {
					throw e.toString();
				}

				xmlHttpRequest.send(uri);
				getData = function () { return xmlHttpRequest.responseText; };
			case IMAGE:
				var image : Image = cast Lib.document.createElement("img");
				registerEvents(cast image);

				image.src = url;
				#if debug
				image.style.display = "none";
				Lib.document.body.appendChild(image);
				#end

				getData = function () { return image; };
				
			case AUDIO:
				var audio : {src:String, style:Style} = cast Lib.document.createElement("audio");
				registerEvents(cast audio);

				audio.src = url;
				#if debug
				Lib.document.body.appendChild(cast audio);
				#end

				getData = function () { return audio; }
				
			case VIDEO:
				var video : {src:String, style:Style} = cast Lib.document.createElement("video");
				registerEvents(cast video);

				video.src = url;
				#if debug
				video.style.display = "none";
				Lib.document.body.appendChild(cast video);
				#end
				
				getData = function () { return video; }
		}

	}
	public dynamic function getData () : Dynamic { }
}
