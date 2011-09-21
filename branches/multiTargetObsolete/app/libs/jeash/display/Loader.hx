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

package jeash.display;

import flash.net.URLRequest;
import flash.display.DisplayObject;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.LoaderInfo;
import flash.display.Shape;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.system.LoaderContext;
import flash.geom.Rectangle;

/**
* @author	Hugh Sanderson
* @author	Niel Drummond
* @author	Russell Weir
* @todo init, open, progress, unload (?) events
* @todo Complete LoaderInfo initialization
**/
class Loader extends flash.display.DisplayObjectContainer
{
	public var content(default,null) : DisplayObject;
	public var contentLoaderInfo(default,null) : LoaderInfo;
	var mImage:BitmapData;
	var mShape:Shape;

	public function new()
	{
		super();
		contentLoaderInfo = LoaderInfo.create(this);
	}

	public function load(request:URLRequest, ?context:LoaderContext)
	{
		// get the file extension for the content type
		var parts = request.url.split(".");
		var extension : String = if(parts.length == 0) "" else parts[parts.length-1].toLowerCase();

		var transparent = true;
		// set properties on the LoaderInfo object
		untyped {
			contentLoaderInfo.url = request.url;
			contentLoaderInfo.contentType = switch(extension) {
			case "swf": "application/x-shockwave-flash";
			case "jpg","jpeg": transparent = false; "image/jpeg";
			case "png": "image/png";
			case "gif": "image/gif";
			default:
				throw "Unrecognized file " + request.url;
			}
		}

		mImage = new BitmapData(0,0,transparent);

		try {
			contentLoaderInfo.addEventListener(Event.COMPLETE, handleLoad, false, 2147483647);
			mImage.LoadFromFile(request.url, contentLoaderInfo);
			content = new Bitmap(mImage);
			Reflect.setField(contentLoaderInfo, "content", this.content);
			addChild(content);
		} catch(e:Dynamic) {
			trace("Error " + e);
			contentLoaderInfo.DispatchIOErrorEvent();
			return;
		}

		if (mShape==null)
		{
			mShape = new Shape();
			addChild(mShape);
		}
	}
	
	private function handleLoad(e:Event):Void
	{
		contentLoaderInfo.removeEventListener(Event.COMPLETE, handleLoad);
		jeashInvalidateBounds();
	}
	
	override function BuildBounds()
	{
		super.BuildBounds();
				
		if(mImage!=null)
		{
			var r:Rectangle = new Rectangle(0, 0, mImage.width, mImage.height);		
			
			if (r.width!=0 || r.height!=0)
			{
				if (mBoundsRect.width==0 && mBoundsRect.height==0)
					mBoundsRect = r.clone();
				else
					mBoundsRect.extendBounds(r);
			}
		}
	}
	
}

