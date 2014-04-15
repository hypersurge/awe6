(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/ButtonOver.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/ButtonUp.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/BackOver.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/BackUp.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/MuteOver.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/MuteUp.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/PauseOver.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/PauseUp.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnmuteOver.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnmuteUp.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnpauseOver.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnpauseUp.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/OverlayBackground.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/scenes/Background.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/Sphere.png",loader14);
	ApplicationMain.total++;
	var resourcePrefix = "NME_:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader15 = ApplicationMain.loaders.get(path);
			loader15.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader15.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var Main = function() {
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	var l_isDebug = false;
	var l_factory = new demo.Factory(flash.Lib.get_current(),l_isDebug,haxe.Resource.getString("config"));
}
Main.prototype = {
	__class__: Main
}
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var DateTools = function() { }
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.delta = function(d,t) {
	return (function($this) {
		var $r;
		var d1 = new Date();
		d1.setTime(d.getTime() + t);
		$r = d1;
		return $r;
	}(this));
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
}
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.nmeTarget = target; else this.nmeTarget = this;
	this.nmeEventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.nmeEventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.nmeEventMap[type];
	}
	,existList: function(type) {
		return this.nmeEventMap != null && this.nmeEventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.nmeTarget;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.nmeGetIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this._nmeId = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.nmeX = 0.0;
	this.nmeY = 0.0;
	this.nmeScaleX = 1.0;
	this.nmeScaleY = 1.0;
	this.nmeRotation = 0.0;
	this.nmeWidth = 0.0;
	this.nmeHeight = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.nmeFilters = new Array();
	this.nmeBoundsRect = new flash.geom.Rectangle();
	this.nmeScrollRect = null;
	this.nmeMask = null;
	this.nmeMaskingObj = null;
	this.set_nmeCombinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	nmeSrUpdateDivs: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.nmeScrollRect == null) {
			if(this._srAxes != null && gfx.nmeSurface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.nmeSurface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.nmeScrollRect.width + "px";
		this._srWindow.style.height = this.nmeScrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.nmeScrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.nmeScrollRect.y + "px";
		if(gfx.nmeSurface.parentNode != this._srAxes && gfx.nmeSurface.parentNode != null) {
			gfx.nmeSurface.parentNode.insertBefore(this._srWindow,gfx.nmeSurface);
			flash.Lib.nmeRemoveSurface(gfx.nmeSurface);
			this._srAxes.appendChild(gfx.nmeSurface);
		}
	}
	,nmeGetSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.nmeBoundsRect.width;
		if(this.nmeScaleX * w != inValue) {
			if(w == 0) {
				this.nmeScaleX = 1;
				this.nmeInvalidateMatrix(true);
				this._nmeRenderFlags |= 64;
				if(this.parent != null) this.parent._nmeRenderFlags |= 64;
				w = this.nmeBoundsRect.width;
			}
			if(w <= 0) return 0;
			this.nmeScaleX = inValue / w;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeWidth;
	}
	,set_y: function(inValue) {
		if(this.nmeY != inValue) {
			this.nmeY = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.nmeY;
	}
	,set_x: function(inValue) {
		if(this.nmeX != inValue) {
			this.nmeX = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.nmeX;
	}
	,set_visible: function(inValue) {
		if(this.nmeVisible != inValue) {
			this.nmeVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeVisible;
	}
	,get_visible: function() {
		return this.nmeVisible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.nmeX = this.transform.get_matrix().tx;
		this.nmeY = this.transform.get_matrix().ty;
		this.nmeInvalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return flash.Lib.nmeGetStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.nmeScrollRect = inValue;
		this.nmeSrUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.nmeScrollRect == null) return null;
		return this.nmeScrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.nmeScaleY != inValue) {
			this.nmeScaleY = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.nmeScaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.nmeScaleX != inValue) {
			this.nmeScaleX = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.nmeScaleX;
	}
	,set_rotation: function(inValue) {
		if(this.nmeRotation != inValue) {
			this.nmeRotation = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.nmeRotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.nmeInvalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.nmeChildren,this);
			this.parent.nmeInvalidateBounds();
		}
		if(inValue != null) {
			inValue._nmeRenderFlags |= 64;
			if(inValue.parent != null) inValue.parent._nmeRenderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set_nmeCombinedVisible: function(inValue) {
		if(this.nmeCombinedVisible != inValue) {
			this.nmeCombinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeCombinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this._nmeRenderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this._nmeRenderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = null;
		this.nmeMask = inValue;
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = this;
		return this.nmeMask;
	}
	,get_mask: function() {
		return this.nmeMask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.nmeBoundsRect.height;
		if(this.nmeScaleY * h != inValue) {
			if(h == 0) {
				this.nmeScaleY = 1;
				this.nmeInvalidateMatrix(true);
				this._nmeRenderFlags |= 64;
				if(this.parent != null) this.parent._nmeRenderFlags |= 64;
				h = this.nmeBoundsRect.height;
			}
			if(h <= 0) return 0;
			this.nmeScaleY = inValue / h;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeHeight;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.nmeFilters == null?0:this.nmeFilters.length;
		if(filters == null) {
			this.nmeFilters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.nmeFilters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.nmeFilters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return (this._nmeRenderFlags & 64) != 0; else return (this._nmeRenderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.nmeFilters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.nmeFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,__contains: function(child) {
		return false;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.nmeGetGraphics();
			if(gfx == null) {
				this.nmeBoundsRect.x = this.get_x();
				this.nmeBoundsRect.y = this.get_y();
				this.nmeBoundsRect.width = 0;
				this.nmeBoundsRect.height = 0;
			} else {
				this.nmeBoundsRect = gfx.nmeExtent.clone();
				if(this.scale9Grid != null) {
					this.nmeBoundsRect.width *= this.nmeScaleX;
					this.nmeBoundsRect.height *= this.nmeScaleY;
					this.nmeWidth = this.nmeBoundsRect.width;
					this.nmeHeight = this.nmeBoundsRect.height;
				} else {
					this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
					this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
				}
				gfx.boundsDirty = false;
			}
			this._nmeRenderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && gfx.nmeSurface != null) flash.Lib.nmeSetSurfaceVisible(gfx.nmeSurface,inValue);
	}
	,nmeValidateMatrix: function() {
		var parentMatrixInvalid = (this._nmeRenderFlags & 8) != 0 && this.parent != null;
		if((this._nmeRenderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.nmeValidateMatrix();
			var m = this.transform.get_matrix();
			if((this._nmeRenderFlags & 16) != 0) this._nmeRenderFlags &= -5;
			if((this._nmeRenderFlags & 4) != 0) {
				m.identity();
				m.scale(this.nmeScaleX,this.nmeScaleY);
				var rad = this.nmeRotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.nmeX,this.nmeY);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.nmeGetFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.nmeGetFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.nmeSetFullMatrix(fm);
				this._nmeRenderFlags |= 32;
			}
			this._nmeRenderFlags &= -29;
		}
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.nmeGetGraphics();
			if(ogfx != null) flash.Lib.nmeSetSurfaceZIndexAfter(this.nmeScrollRect == null?gfx.nmeSurface:this._srWindow,lastMoveObj.nmeScrollRect == null?ogfx.nmeSurface:lastMoveObj == this.parent?ogfx.nmeSurface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,nmeTestFlag: function(mask) {
		return (this._nmeRenderFlags & mask) != 0;
	}
	,nmeSetMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,nmeSetFullMatrix: function(inValue) {
		return this.transform.nmeSetFullMatrix(inValue);
	}
	,nmeSetFlagToValue: function(mask,value) {
		if(value) this._nmeRenderFlags |= mask; else this._nmeRenderFlags &= ~mask;
	}
	,nmeSetFlag: function(mask) {
		this._nmeRenderFlags |= mask;
	}
	,nmeSetDimensions: function() {
		if(this.scale9Grid != null) {
			this.nmeBoundsRect.width *= this.nmeScaleX;
			this.nmeBoundsRect.height *= this.nmeScaleY;
			this.nmeWidth = this.nmeBoundsRect.width;
			this.nmeHeight = this.nmeBoundsRect.height;
		} else {
			this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
			this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(gfx.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(gfx.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.nmeDrawToSurface(gfx.nmeSurface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,m);
				this._nmeRenderFlags &= -33;
				this.nmeSrUpdateDivs();
			}
			flash.Lib.nmeSetSurfaceOpacity(gfx.nmeSurface,fullAlpha);
		}
	}
	,nmeRemoveFromStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && flash.Lib.nmeIsOnStage(gfx.nmeSurface)) {
			flash.Lib.nmeRemoveSurface(gfx.nmeSurface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,nmeMatrixOverridden: function() {
		this.nmeX = this.transform.get_matrix().tx;
		this.nmeY = this.transform.get_matrix().ty;
		this._nmeRenderFlags |= 16;
		this._nmeRenderFlags |= 4;
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeIsOnStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && flash.Lib.nmeIsOnStage(gfx.nmeSurface)) return true;
		return false;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this._nmeRenderFlags |= 4; else this._nmeRenderFlags |= 8;
	}
	,nmeInvalidateBounds: function() {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeGetSurface: function() {
		var gfx = this.nmeGetGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.nmeSurface;
		return surface;
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			gfx.nmeRender();
			var extX = gfx.nmeExtent.x;
			var extY = gfx.nmeExtent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.nmeHitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,nmeGetMatrix: function() {
		return this.transform.get_matrix();
	}
	,nmeGetInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(outStack);
	}
	,nmeGetGraphics: function() {
		return null;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		return this.transform.nmeGetFullMatrix(localMatrix);
	}
	,nmeFireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.nmeSetPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
		event.nmeSetPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return;
		if(event.bubbles) {
			event.nmeSetPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
	}
	,nmeDispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,nmeClearFlag: function(mask) {
		this._nmeRenderFlags &= ~mask;
	}
	,nmeBroadcast: function(event) {
		this.nmeDispatchEvent(event);
	}
	,nmeApplyFilters: function(surface) {
		if(this.nmeFilters != null) {
			var _g = 0, _g1 = this.nmeFilters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.nmeApplyFilter(surface);
			}
		}
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if(newParent.nmeGetGraphics() != null) {
			flash.Lib.nmeSetSurfaceId(gfx.nmeSurface,this._nmeId);
			if(beforeSibling != null && beforeSibling.nmeGetGraphics() != null) flash.Lib.nmeAppendSurface(gfx.nmeSurface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.nmeChildren;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.nmeAppendSurface(gfx.nmeSurface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.nmeChildren.length > 0) nextSibling = container.nmeChildren[container.nmeChildren.length - 1]; else break;
					}
					if(nextSibling.nmeGetGraphics() != gfx) flash.Lib.nmeAppendSurface(gfx.nmeSurface,null,nextSibling.get__topmostSurface()); else flash.Lib.nmeAppendSurface(gfx.nmeSurface);
				}
			}
			flash.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.nmeAppendSurface(gfx.nmeSurface);
		if(this.nmeIsOnStage()) {
			this.nmeSrUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,localToGlobal: function(point) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			gfx.nmeChanged = true;
			gfx.nmeClearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.nmeGetObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.nmeGetGraphics();
			if(gfx != null) {
				var extX = gfx.nmeExtent.x;
				var extY = gfx.nmeExtent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.nmeApplyFilters(gfx.nmeSurface);
		this._nmeRenderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeBoundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.nmeGetFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.nmeGetFullMatrix(null).invert());
		var rect = this.nmeBoundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.nmeRender(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_nmeCombinedVisible:"set_nmeCombinedVisible",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.nmeTabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.nmeTabIndex;
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.nmeChildren = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.nmeCombinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.nmeUnifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set_nmeCombinedVisible(this.parent != null?this.parent.nmeCombinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.nmeChildren.length;
	}
	,set_nmeCombinedVisible: function(inVal) {
		if(inVal != this.nmeCombinedVisible) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set_nmeCombinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set_nmeCombinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this._nmeId + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.nmeChildren[child1];
		this.nmeChildren[child1] = this.nmeChildren[child2];
		this.nmeChildren[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == child1) c1 = i; else if(this.nmeChildren[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.nmeChildren[c1];
			this.nmeChildren[c1] = this.nmeChildren[c2];
			this.nmeChildren[c2] = swap;
			swap = null;
			this.nmeSwapSurface(c1,c2);
			child1.nmeUnifyChildrenWithDOM();
			child2.nmeUnifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.nmeChildren.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.nmeChildren.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.nmeChildren[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in nmeChildren array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeRemoveChild(this.nmeChildren[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				child.nmeRemoveFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.nmeUnifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.nmeUnifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,nmeSwapSurface: function(c1,c2) {
		if(this.nmeChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.nmeChildren.length;
		if(this.nmeChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.nmeChildren.length;
		var gfx1 = this.nmeChildren[c1].nmeGetGraphics();
		var gfx2 = this.nmeChildren[c2].nmeGetGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.nmeChildren[c1].nmeScrollRect == null?gfx1.nmeSurface:this.nmeChildren[c1].nmeGetSrWindow();
			var surface2 = this.nmeChildren[c2].nmeScrollRect == null?gfx2.nmeSurface:this.nmeChildren[c2].nmeGetSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.nmeSwapSurface(surface1,surface2);
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeVisible) return;
		if(clipRect == null && this.nmeScrollRect != null) clipRect = this.nmeScrollRect;
		flash.display.InteractiveObject.prototype.nmeRender.call(this,inMask,clipRect);
		this.nmeCombinedAlpha = this.parent != null?this.parent.nmeCombinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeVisible) {
				if(clipRect != null) {
					if((child._nmeRenderFlags & 4) != 0 || (child._nmeRenderFlags & 8) != 0) child.nmeValidateMatrix();
				}
				child.nmeRender(inMask,clipRect);
			}
		}
		if(this.nmeAddedChildren) {
			this.nmeUnifyChildrenWithDOM();
			this.nmeAddedChildren = false;
		}
	}
	,nmeRemoveFromStage: function() {
		flash.display.InteractiveObject.prototype.nmeRemoveFromStage.call(this);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeRemoveFromStage();
		}
	}
	,nmeRemoveChild: function(child) {
		child.nmeRemoveFromStage();
		child.set_parent(null);
		return child;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this._nmeRenderFlags & 8) != 0) && !((this._nmeRenderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.nmeInvalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.nmeInvalidateMatrix.call(this,local);
	}
	,nmeGetObjectsUnderPoint: function(point,stack) {
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeBroadcast: function(event) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeBroadcast(event);
		}
		this.dispatchEvent(event);
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.nmeAddToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeGetGraphics() == null || !child.nmeIsOnStage()) child.nmeAddToStage(this);
		}
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.nmeGetObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeChildren[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.nmeChildren.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.nmeChildren.length || index < 0) throw "Invalid index position " + index;
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.nmeChildren.length) return this.addChild(object); else {
			if(this.nmeIsOnStage()) object.nmeAddToStage(this,this.nmeChildren[index]);
			this.nmeChildren.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.nmeChildren.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.nmeIsOnStage()) object.nmeAddToStage(this);
		if(this.nmeChildren == null) this.nmeChildren = new Array();
		this.nmeChildren.push(object);
		return object;
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.nmeChildren,child);
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.nmeGraphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.nmeCursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
		if(this.nmeCursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		if(!cursor) flash.Lib.nmeSetCursor(flash._Lib.CursorType.Default); else {
			this.nmeCursorCallbackOver = function(_) {
				flash.Lib.nmeSetCursor(flash._Lib.CursorType.Pointer);
			};
			this.nmeCursorCallbackOut = function(_) {
				flash.Lib.nmeSetCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.nmeGraphics;
	}
	,get_dropTarget: function() {
		return this.nmeDropTarget;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stopDrag: function() {
		if(this.nmeIsOnStage()) {
			this.get_stage().nmeStopDrag(this);
			var l = this.parent.nmeChildren.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.nmeChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.nmeChildren[l - i].nmeGetObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.nmeDropTarget = obj; else this.nmeDropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.nmeIsOnStage()) this.get_stage().nmeStartDrag(this,lockCenter,bounds);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 600;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 400;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 16777215;
	}
	,__class__: NMEPreloader
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return x <= 0?0:Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	addSub: function(s,pos,len) {
		this.b += len == null?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	return quotes?s.split("\"").join("&quot;").split("'").join("&#039;"):s;
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] }
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
}
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype = {
	toString: function() {
		if(this.nodeType == Xml.PCData) return StringTools.htmlEscape(this._nodeValue);
		if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if(this.nodeType == Xml.ProcessingInstruction) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if(this.nodeType == Xml.Element) {
			s.b += "<";
			s.b += Std.string(this._nodeName);
			var $it0 = this._attributes.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				s.b += " ";
				s.b += Std.string(k);
				s.b += "=\"";
				s.b += Std.string(this._attributes.get(k));
				s.b += "\"";
			}
			if(this._children.length == 0) {
				s.b += "/>";
				return s.b;
			}
			s.b += ">";
		}
		var $it1 = this.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			s.b += Std.string(x.toString());
		}
		if(this.nodeType == Xml.Element) {
			s.b += "</";
			s.b += Std.string(this._nodeName);
			s.b += ">";
		}
		return s.b;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,firstChild: function() {
		if(this._children == null) throw "bad nodetype";
		return this._children[0];
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,iterator: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			return this.cur < this.x.length;
		}, next : function() {
			return this.x[this.cur++];
		}};
	}
	,attributes: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.keys();
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,get_nodeValue: function() {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,__class__: Xml
}
var awe6 = {}
awe6.interfaces = {}
awe6.interfaces.IPauseable = function() { }
$hxClasses["awe6.interfaces.IPauseable"] = awe6.interfaces.IPauseable;
awe6.interfaces.IPauseable.__name__ = ["awe6","interfaces","IPauseable"];
awe6.interfaces.IPauseable.prototype = {
	__class__: awe6.interfaces.IPauseable
}
awe6.interfaces.IDisposable = function() { }
$hxClasses["awe6.interfaces.IDisposable"] = awe6.interfaces.IDisposable;
awe6.interfaces.IDisposable.__name__ = ["awe6","interfaces","IDisposable"];
awe6.interfaces.IDisposable.prototype = {
	__class__: awe6.interfaces.IDisposable
}
awe6.interfaces.IUpdateable = function() { }
$hxClasses["awe6.interfaces.IUpdateable"] = awe6.interfaces.IUpdateable;
awe6.interfaces.IUpdateable.__name__ = ["awe6","interfaces","IUpdateable"];
awe6.interfaces.IUpdateable.prototype = {
	__class__: awe6.interfaces.IUpdateable
}
awe6.interfaces.IProcess = function() { }
$hxClasses["awe6.interfaces.IProcess"] = awe6.interfaces.IProcess;
awe6.interfaces.IProcess.__name__ = ["awe6","interfaces","IProcess"];
awe6.interfaces.IProcess.__interfaces__ = [awe6.interfaces.IPauseable,awe6.interfaces.IDisposable,awe6.interfaces.IUpdateable];
awe6.core = {}
awe6.core.Process = function(p_kernel) {
	this._kernel = p_kernel;
	this._tools = this._kernel.tools;
	this._isEntity = js.Boot.__instanceof(this,awe6.interfaces.IEntity);
	this._init();
};
$hxClasses["awe6.core.Process"] = awe6.core.Process;
awe6.core.Process.__name__ = ["awe6","core","Process"];
awe6.core.Process.__interfaces__ = [awe6.interfaces.IProcess];
awe6.core.Process.prototype = {
	_resumer: function() {
	}
	,resume: function() {
		if(this.isActive || this.isDisposed) return; else {
			this._resumer();
			this._isIsActiveSetterBypassed = true;
			this.set_isActive(true);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.RESUME,this,true,true,true);
			return;
		}
	}
	,_pauser: function() {
	}
	,pause: function() {
		if(!this.isActive || this.isDisposed) return; else {
			this._pauser();
			this._isIsActiveSetterBypassed = true;
			this.set_isActive(false);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.PAUSE,this,true,true,true);
		}
	}
	,set_isActive: function(p_value) {
		if(this.isDisposed) {
			this.isActive = false;
			return false;
		}
		if(p_value != this.isActive) {
			if(this._isIsActiveSetterBypassed) this.isActive = p_value; else if(p_value) {
				if(this.isActive || this.isDisposed) null; else {
					this._resumer();
					this._isIsActiveSetterBypassed = true;
					this.set_isActive(true);
					if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.RESUME,this,true,true,true);
					null;
				}
			} else if(!this.isActive || this.isDisposed) null; else {
				this._pauser();
				this._isIsActiveSetterBypassed = true;
				this.set_isActive(false);
				if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.PAUSE,this,true,true,true);
			}
		}
		this._isIsActiveSetterBypassed = false;
		return this.isActive;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
	}
	,update: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		if(!this.isActive || this.isDisposed) return; else {
			this._age += p_deltaTime;
			this._updates++;
			this._updater(p_deltaTime);
			return;
		}
	}
	,getAge: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		return p_asTime?this._age:this._updates;
	}
	,_disposer: function() {
	}
	,dispose: function() {
		if(this.isDisposed) return; else {
			this.isDisposed = true;
			this.set_isActive(false);
			this._disposer();
			return;
		}
	}
	,_init: function() {
		this._isIsActiveSetterBypassed = true;
		this.set_isActive(true);
		this.isDisposed = false;
		this._age = 0;
		this._updates = 0;
	}
	,__class__: awe6.core.Process
	,__properties__: {set_isActive:"set_isActive"}
}
awe6.interfaces.IAssetManager = function() { }
$hxClasses["awe6.interfaces.IAssetManager"] = awe6.interfaces.IAssetManager;
awe6.interfaces.IAssetManager.__name__ = ["awe6","interfaces","IAssetManager"];
awe6.interfaces.IAssetManager.prototype = {
	__class__: awe6.interfaces.IAssetManager
}
awe6.interfaces.IAssetManagerProcess = function() { }
$hxClasses["awe6.interfaces.IAssetManagerProcess"] = awe6.interfaces.IAssetManagerProcess;
awe6.interfaces.IAssetManagerProcess.__name__ = ["awe6","interfaces","IAssetManagerProcess"];
awe6.interfaces.IAssetManagerProcess.__interfaces__ = [awe6.interfaces.IProcess,awe6.interfaces.IAssetManager];
awe6.core.AAssetManager = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.AAssetManager"] = awe6.core.AAssetManager;
awe6.core.AAssetManager.__name__ = ["awe6","core","AAssetManager"];
awe6.core.AAssetManager.__interfaces__ = [awe6.interfaces.IAssetManagerProcess];
awe6.core.AAssetManager.__super__ = awe6.core.Process;
awe6.core.AAssetManager.prototype = $extend(awe6.core.Process.prototype,{
	getAsset: function(p_id,p_packageId,p_args) {
		if(p_packageId == null) p_packageId = this._kernel.getConfig("settings.assets.packages.default");
		if(p_packageId == null) p_packageId = this._PACKAGE_ID;
		var l_assetName = p_id;
		if(p_packageId.length > 0) l_assetName = p_packageId + "." + p_id;
		var l_assetClass = Type.resolveClass(l_assetName);
		if(l_assetClass == null) return null;
		if(p_args == null) p_args = [];
		return Type.createInstance(l_assetClass,p_args);
	}
	,_init: function() {
		this._PACKAGE_ID = "assets";
		awe6.core.Process.prototype._init.call(this);
	}
	,__class__: awe6.core.AAssetManager
});
awe6.interfaces.IAgendaManager = function() { }
$hxClasses["awe6.interfaces.IAgendaManager"] = awe6.interfaces.IAgendaManager;
awe6.interfaces.IAgendaManager.__name__ = ["awe6","interfaces","IAgendaManager"];
awe6.interfaces.IAgendaManager.prototype = {
	__class__: awe6.interfaces.IAgendaManager
}
awe6.interfaces.IEntityCollection = function() { }
$hxClasses["awe6.interfaces.IEntityCollection"] = awe6.interfaces.IEntityCollection;
awe6.interfaces.IEntityCollection.__name__ = ["awe6","interfaces","IEntityCollection"];
awe6.interfaces.IEntityCollection.__interfaces__ = [awe6.interfaces.IAgendaManager];
awe6.interfaces.IEntityCollection.prototype = {
	__class__: awe6.interfaces.IEntityCollection
}
awe6.interfaces.IViewable = function() { }
$hxClasses["awe6.interfaces.IViewable"] = awe6.interfaces.IViewable;
awe6.interfaces.IViewable.__name__ = ["awe6","interfaces","IViewable"];
awe6.interfaces.IViewable.prototype = {
	__class__: awe6.interfaces.IViewable
}
awe6.interfaces.IEntity = function() { }
$hxClasses["awe6.interfaces.IEntity"] = awe6.interfaces.IEntity;
awe6.interfaces.IEntity.__name__ = ["awe6","interfaces","IEntity"];
awe6.interfaces.IEntity.__interfaces__ = [awe6.interfaces.IEntityCollection,awe6.interfaces.IViewable,awe6.interfaces.IProcess];
awe6.interfaces.IEntity.prototype = {
	__class__: awe6.interfaces.IEntity
}
awe6.core.Entity = function(p_kernel,p_id,p_context) {
	if(this.get_view() == null) this.view = new awe6.core.drivers.openfl.html5.View(p_kernel,p_context,0,this);
	this.set_id(p_id == null?p_kernel.tools.createGuid():p_id);
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.Entity"] = awe6.core.Entity;
awe6.core.Entity.__name__ = ["awe6","core","Entity"];
awe6.core.Entity.__interfaces__ = [awe6.interfaces.IEntity];
awe6.core.Entity.__super__ = awe6.core.Process;
awe6.core.Entity.prototype = $extend(awe6.core.Process.prototype,{
	get_view: function() {
		return this.view;
	}
	,get_parent: function() {
		return this.parent;
	}
	,get_agenda: function() {
		return this.agenda;
	}
	,set_id: function(p_value) {
		this.id = p_value;
		return this.id;
	}
	,_setParent: function(p_parent) {
		this.parent = p_parent;
	}
	,setAgenda: function(p_type) {
		if(p_type == null) p_type = awe6.interfaces.EAgenda.ALWAYS;
		if(Type.enumEq(this.get_agenda(),p_type)) return false;
		this._isAgendaDirty = true;
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			var l_isAddedToView = Type.enumEq(this.get_agenda(),i.agenda) && i.entity.get_view().get_parent() == this.get_view();
			if(l_isAddedToView) i.entity.get_view().remove();
			i.isAddedToView = i.isAddedToView || l_isAddedToView;
		}
		this.agenda = p_type;
		var $it1 = this._entityAgendaPairs.iterator();
		while( $it1.hasNext() ) {
			var i = $it1.next();
			if(i.isAddedToView && (Type.enumEq(awe6.interfaces.EAgenda.ALWAYS,i.agenda) || Type.enumEq(this.get_agenda(),i.agenda))) this.get_view().addChild(i.entity.get_view());
		}
		return true;
	}
	,getEntityById: function(p_id,p_agenda,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		if(this.id == p_id) return this;
		if(p_isBubbleEverywhere && this._kernel.scenes.get_scene() != null) return this._kernel.scenes.get_scene().getEntityById(p_id,p_agenda,true);
		var l_result = null;
		var l_entities = this._getEntities(p_agenda);
		var _g = 0;
		while(_g < l_entities.length) {
			var i = l_entities[_g];
			++_g;
			if(i.id == p_id) return i;
			if(p_isBubbleDown) l_result = i.getEntityById(p_id,p_agenda,true);
			if(l_result != null) return l_result;
		}
		if(p_isBubbleUp && this.get_parent() != null) l_result = this.get_parent().getEntityById(p_id,p_agenda,false,true);
		return l_result;
	}
	,getEntitiesByClass: function(p_classType,p_agenda,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		if(p_isBubbleEverywhere && this._kernel.scenes.get_scene() != null) return this._kernel.scenes.get_scene().getEntitiesByClass(p_classType,p_agenda,true);
		var l_result = new Array();
		var l_entities = this._getEntities(p_agenda);
		var _g = 0;
		while(_g < l_entities.length) {
			var i = l_entities[_g];
			++_g;
			if(js.Boot.__instanceof(i,p_classType)) l_result.push(i);
			if(p_isBubbleDown) l_result.concat(i.getEntitiesByClass(p_classType,p_agenda,true));
		}
		if(p_isBubbleUp && this.get_parent() != null) l_result.concat(this.get_parent().getEntitiesByClass(p_classType,p_agenda,false,true));
		return l_result;
	}
	,_getEntities: function(p_agenda) {
		if(!this._isAgendaDirty && (p_agenda == null || Type.enumEq(p_agenda,this.get_agenda()))) return this._cachedEntities;
		var l_result = new Array();
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(p_agenda == null || Type.enumEq(p_agenda,i.agenda)) l_result.push(i.entity);
		}
		l_result.reverse();
		return l_result;
	}
	,getEntities: function(p_agenda) {
		return this._getEntities(p_agenda);
	}
	,remove: function(p_isRemovedFromView) {
		if(p_isRemovedFromView == null) p_isRemovedFromView = false;
		if(this.get_parent() != null) this.get_parent().removeEntity(this,null,p_isRemovedFromView);
	}
	,removeEntity: function(p_entity,p_agenda,p_isRemovedFromView) {
		if(p_isRemovedFromView == null) p_isRemovedFromView = false;
		if(this.isDisposed || p_entity == null) return;
		var l_isRemoved = false;
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(i.entity == p_entity && (p_agenda == null || Type.enumEq(i.agenda,p_agenda))) {
				this._entityAgendaPairs.remove(i);
				l_isRemoved = true;
			}
		}
		if(l_isRemoved) {
			this._isAgendaDirty = true;
			if(js.Boot.__instanceof(p_entity,awe6.core.Entity)) {
				var l_child = p_entity;
				l_child._setParent(null);
			}
			if(p_isRemovedFromView) p_entity.get_view().remove();
		}
	}
	,addEntity: function(p_entity,p_agenda,p_isAddedToView,p_viewPriority) {
		if(p_viewPriority == null) p_viewPriority = 0;
		if(p_isAddedToView == null) p_isAddedToView = false;
		if(this.isDisposed || p_entity == null) return null;
		if(p_agenda == null) p_agenda = awe6.interfaces.EAgenda.ALWAYS;
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(i.entity == p_entity && Type.enumEq(i.agenda,p_agenda)) return p_entity;
		}
		this._isAgendaDirty = true;
		if(p_entity.get_parent() != this) {
			p_entity.remove(p_isAddedToView);
			if(js.Boot.__instanceof(p_entity,awe6.core.Entity)) {
				var l_child = p_entity;
				l_child._setParent(this);
			}
		}
		var l_helperEntityAgendaPair = new awe6.core._Entity._HelperEntityAgendaPair(p_entity,p_agenda);
		this._entityAgendaPairs.add(l_helperEntityAgendaPair);
		if(p_isAddedToView) {
			if(Type.enumEq(p_agenda,this.get_agenda()) || p_agenda == awe6.interfaces.EAgenda.ALWAYS) this.get_view().addChild(p_entity.get_view(),p_viewPriority); else {
				p_entity.get_view().set_priority(p_viewPriority);
				l_helperEntityAgendaPair.isAddedToView = true;
			}
		}
		return p_entity;
	}
	,_disposer: function() {
		this.remove();
		this._kernel.messenger.removeSubscribers(this);
		this._kernel.messenger.removeSubscribers(null,null,null,this,null);
		var l_entities = this._getEntities();
		l_entities.reverse();
		var _g = 0;
		while(_g < l_entities.length) {
			var i = l_entities[_g];
			++_g;
			i.dispose();
		}
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			this._entityAgendaPairs.remove(i);
		}
		this.get_view().dispose();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this._isAgendaDirty) {
			this._cachedEntities = this._getEntities(this.get_agenda());
			if(!Type.enumEq(this.get_agenda(),awe6.interfaces.EAgenda.ALWAYS)) this._cachedEntities = this._cachedEntities.concat(this._getEntities(awe6.interfaces.EAgenda.ALWAYS));
			this._isAgendaDirty = false;
		}
		var _g = 0, _g1 = this._cachedEntities;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			i.update(p_deltaTime);
		}
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.agenda = awe6.interfaces.EAgenda.ALWAYS;
		this._entityAgendaPairs = new haxe.ds.GenericStack();
		this._isAgendaDirty = true;
		this._cachedEntities = [];
	}
	,__class__: awe6.core.Entity
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_id:"set_id",get_agenda:"get_agenda",get_parent:"get_parent",get_view:"get_view"})
});
awe6.interfaces.IPositionable = function() { }
$hxClasses["awe6.interfaces.IPositionable"] = awe6.interfaces.IPositionable;
awe6.interfaces.IPositionable.__name__ = ["awe6","interfaces","IPositionable"];
awe6.interfaces.IPositionable.prototype = {
	__class__: awe6.interfaces.IPositionable
}
awe6.core.BasicButton = function(p_kernel,p_up,p_over,p_width,p_height,p_x,p_y,p_keyType,p_onClickCallback,p_onRollOverCallback,p_onRollOutCallback) {
	if(p_y == null) p_y = 0;
	if(p_x == null) p_x = 0;
	if(p_height == null) p_height = 20;
	if(p_width == null) p_width = 100;
	this._stateUp = new awe6.core._BasicButton._HelperState(p_kernel,p_up);
	this._stateOver = new awe6.core._BasicButton._HelperState(p_kernel,p_over);
	this.x = p_x;
	this.y = p_y;
	this.set_width(p_width);
	this.set_height(p_height);
	this._keyType = p_keyType;
	this.onClickCallback = p_onClickCallback;
	this.onRollOverCallback = p_onRollOverCallback;
	this.onRollOutCallback = p_onRollOutCallback;
	awe6.core.Entity.call(this,p_kernel);
};
$hxClasses["awe6.core.BasicButton"] = awe6.core.BasicButton;
awe6.core.BasicButton.__name__ = ["awe6","core","BasicButton"];
awe6.core.BasicButton.__interfaces__ = [awe6.interfaces.IPositionable];
awe6.core.BasicButton.__super__ = awe6.core.Entity;
awe6.core.BasicButton.prototype = $extend(awe6.core.Entity.prototype,{
	set_height: function(p_value) {
		this.height = p_value;
		return this.height;
	}
	,set_width: function(p_value) {
		this.width = p_value;
		return this.width;
	}
	,set_y: function(p_value) {
		this.y = p_value;
		if(this.get_view() != null) this.get_view().set_y(this.y);
		return this.y;
	}
	,set_x: function(p_value) {
		this.x = p_value;
		if(this.get_view() != null) this.get_view().set_x(this.x);
		return this.x;
	}
	,setPosition: function(p_x,p_y) {
		this.set_x(p_x);
		this.set_y(p_y);
	}
	,onRollOut: function() {
		this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP));
		if(this.onRollOutCallback == null) return;
		this.onRollOutCallback.apply(this,[]);
	}
	,onRollOver: function() {
		this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.OVER));
		if(this.onRollOverCallback == null) return;
		this.onRollOverCallback.apply(this,[]);
	}
	,onClick: function() {
		if(this.onClickCallback == null) return;
		this.onClickCallback.apply(this,[]);
	}
	,_isPointInsideRectangle: function(p_pointX,p_pointY,p_rectX,p_rectY,p_rectWidth,p_rectHeight) {
		if(p_pointX < p_rectX) return false;
		if(p_pointY < p_rectY) return false;
		if(p_pointX > p_rectX + p_rectWidth) return false;
		if(p_pointY > p_rectY + p_rectHeight) return false;
		return true;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		var l_inputMouse = this._kernel.inputs.mouse;
		var l_isOver = this._isPointInsideRectangle(l_inputMouse.x + this.get_view().x - this.get_view().globalX,l_inputMouse.y + this.get_view().y - this.get_view().globalY,this.x,this.y,this.width,this.height);
		if(l_isOver) l_inputMouse.set_cursorType(awe6.interfaces.EMouseCursor.BUTTON);
		if(l_isOver && !this.isOver) this.onRollOver();
		if(!l_isOver && this.isOver) {
			l_inputMouse.set_cursorType(awe6.interfaces.EMouseCursor.AUTO);
			this.onRollOut();
		}
		this.isOver = l_isOver;
		if(this.isOver && l_inputMouse.getIsButtonRelease()) this.onClick();
		if(this._keyType != null && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType)) this.onClick();
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		this.get_view().set_x(this.x);
		this.get_view().set_y(this.y);
		this.isOver = false;
		this.addEntity(this._stateUp,awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP),true);
		this.addEntity(this._stateOver,awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.OVER),true);
		this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP));
	}
	,__class__: awe6.core.BasicButton
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{set_x:"set_x",set_y:"set_y",set_width:"set_width",set_height:"set_height"})
});
awe6.core._BasicButton = {}
awe6.core._BasicButton._HelperState = function(p_kernel,p_view) {
	awe6.core.Entity.call(this,p_kernel);
	this.view = p_view;
};
$hxClasses["awe6.core._BasicButton._HelperState"] = awe6.core._BasicButton._HelperState;
awe6.core._BasicButton._HelperState.__name__ = ["awe6","core","_BasicButton","_HelperState"];
awe6.core._BasicButton._HelperState.__super__ = awe6.core.Entity;
awe6.core._BasicButton._HelperState.prototype = $extend(awe6.core.Entity.prototype,{
	__class__: awe6.core._BasicButton._HelperState
});
awe6.core._BasicButton._HelperEState = $hxClasses["awe6.core._BasicButton._HelperEState"] = { __ename__ : ["awe6","core","_BasicButton","_HelperEState"], __constructs__ : ["UP","OVER"] }
awe6.core._BasicButton._HelperEState.UP = ["UP",0];
awe6.core._BasicButton._HelperEState.UP.toString = $estr;
awe6.core._BasicButton._HelperEState.UP.__enum__ = awe6.core._BasicButton._HelperEState;
awe6.core._BasicButton._HelperEState.OVER = ["OVER",1];
awe6.core._BasicButton._HelperEState.OVER.toString = $estr;
awe6.core._BasicButton._HelperEState.OVER.__enum__ = awe6.core._BasicButton._HelperEState;
awe6.interfaces.IEncrypter = function() { }
$hxClasses["awe6.interfaces.IEncrypter"] = awe6.interfaces.IEncrypter;
awe6.interfaces.IEncrypter.__name__ = ["awe6","interfaces","IEncrypter"];
awe6.interfaces.IEncrypter.prototype = {
	__class__: awe6.interfaces.IEncrypter
}
awe6.core.Encrypter = function(p_defaultSecret) {
	this._defaultSecret = p_defaultSecret;
};
$hxClasses["awe6.core.Encrypter"] = awe6.core.Encrypter;
awe6.core.Encrypter.__name__ = ["awe6","core","Encrypter"];
awe6.core.Encrypter.__interfaces__ = [awe6.interfaces.IEncrypter];
awe6.core.Encrypter.prototype = {
	_xor: function(p_value,p_secret) {
		var l_result = new Array();
		var l_secretIndex = 0;
		var _g1 = 0, _g = p_value.length;
		while(_g1 < _g) {
			var i = _g1++;
			l_result[i] = p_value[i] ^ HxOverrides.cca(p_secret,l_secretIndex);
			l_secretIndex++;
			if(l_secretIndex >= p_secret.length) l_secretIndex = 0;
		}
		return l_result;
	}
	,decrypt: function(p_value,p_secret) {
		if(p_secret == null) p_secret = "";
		var l_secret = p_secret != ""?p_secret:this._defaultSecret;
		return haxe.io.Bytes.ofData(this._xor(p_value.b,l_secret));
	}
	,encrypt: function(p_value,p_secret) {
		if(p_secret == null) p_secret = "";
		var l_secret = p_secret != ""?p_secret:this._defaultSecret;
		return haxe.io.Bytes.ofData(this._xor(p_value.b,l_secret));
	}
	,__class__: awe6.core.Encrypter
}
awe6.core._Entity = {}
awe6.core._Entity._HelperEntityAgendaPair = function(p_entity,p_agenda) {
	this.entity = p_entity;
	this.agenda = p_agenda;
	this.isAddedToView = false;
};
$hxClasses["awe6.core._Entity._HelperEntityAgendaPair"] = awe6.core._Entity._HelperEntityAgendaPair;
awe6.core._Entity._HelperEntityAgendaPair.__name__ = ["awe6","core","_Entity","_HelperEntityAgendaPair"];
awe6.core._Entity._HelperEntityAgendaPair.prototype = {
	__class__: awe6.core._Entity._HelperEntityAgendaPair
}
awe6.interfaces.IInputJoypad = function() { }
$hxClasses["awe6.interfaces.IInputJoypad"] = awe6.interfaces.IInputJoypad;
awe6.interfaces.IInputJoypad.__name__ = ["awe6","interfaces","IInputJoypad"];
awe6.interfaces.IInputJoypad.prototype = {
	__class__: awe6.interfaces.IInputJoypad
}
awe6.core.InputJoypad = function(p_kernel,p_up,p_right,p_down,p_left,p_primary,p_secondary,p_upAlt,p_rightAlt,p_downAlt,p_leftAlt,p_primaryAlt,p_secondaryAlt) {
	this._kernel = p_kernel;
	this._keyUp = p_up != null?p_up:awe6.interfaces.EKey.UP;
	this._keyRight = p_right != null?p_right:awe6.interfaces.EKey.RIGHT;
	this._keyDown = p_down != null?p_down:awe6.interfaces.EKey.DOWN;
	this._keyLeft = p_left != null?p_left:awe6.interfaces.EKey.LEFT;
	this._keyPrimary = p_primary != null?p_primary:awe6.interfaces.EKey.SPACE;
	this._keySecondary = p_secondary != null?p_secondary:awe6.interfaces.EKey.Z;
	this._keyUpAlt = p_upAlt != null?p_upAlt:awe6.interfaces.EKey.W;
	this._keyRightAlt = p_rightAlt != null?p_rightAlt:awe6.interfaces.EKey.D;
	this._keyDownAlt = p_downAlt != null?p_downAlt:awe6.interfaces.EKey.S;
	this._keyLeftAlt = p_leftAlt != null?p_leftAlt:awe6.interfaces.EKey.A;
	this._keyPrimaryAlt = p_primaryAlt != null?p_primaryAlt:awe6.interfaces.EKey.Q;
	this._keySecondaryAlt = p_secondaryAlt != null?p_secondaryAlt:awe6.interfaces.EKey.E;
};
$hxClasses["awe6.core.InputJoypad"] = awe6.core.InputJoypad;
awe6.core.InputJoypad.__name__ = ["awe6","core","InputJoypad"];
awe6.core.InputJoypad.__interfaces__ = [awe6.interfaces.IInputJoypad];
awe6.core.InputJoypad.prototype = {
	getButtonUpDuration: function(p_type,p_asTime,p_isPrevious) {
		if(p_isPrevious == null) p_isPrevious = false;
		if(p_asTime == null) p_asTime = true;
		var l_function = ($_=this._kernel.inputs.keyboard,$bind($_,$_.getKeyUpDuration));
		switch( (p_type)[1] ) {
		case 0:
			return Math.min(Math.min(l_function(this._keyPrimary,p_asTime,p_isPrevious),l_function(this._keyPrimaryAlt,p_asTime,p_isPrevious)),Math.min(l_function(this._keySecondary,p_asTime,p_isPrevious),l_function(this._keySecondaryAlt,p_asTime,p_isPrevious))) | 0;
		case 1:
			return Math.min(l_function(this._keyUp,p_asTime,p_isPrevious),l_function(this._keyUpAlt,p_asTime,p_isPrevious)) | 0;
		case 2:
			return Math.min(l_function(this._keyRight,p_asTime,p_isPrevious),l_function(this._keyRightAlt,p_asTime,p_isPrevious)) | 0;
		case 3:
			return Math.min(l_function(this._keyDown,p_asTime,p_isPrevious),l_function(this._keyDownAlt,p_asTime,p_isPrevious)) | 0;
		case 4:
			return Math.min(l_function(this._keyLeft,p_asTime,p_isPrevious),l_function(this._keyLeftAlt,p_asTime,p_isPrevious)) | 0;
		case 5:
			return Math.min(l_function(this._keyPrimary,p_asTime,p_isPrevious),l_function(this._keyPrimaryAlt,p_asTime,p_isPrevious)) | 0;
		case 6:
			return Math.min(l_function(this._keySecondary,p_asTime,p_isPrevious),l_function(this._keySecondaryAlt,p_asTime,p_isPrevious)) | 0;
		}
	}
	,getButtonDownDuration: function(p_type,p_asTime,p_isPrevious) {
		if(p_isPrevious == null) p_isPrevious = false;
		if(p_asTime == null) p_asTime = true;
		var l_function = ($_=this._kernel.inputs.keyboard,$bind($_,$_.getKeyDownDuration));
		switch( (p_type)[1] ) {
		case 0:
			return Math.max(Math.max(l_function(this._keyPrimary,p_asTime,p_isPrevious),l_function(this._keyPrimaryAlt,p_asTime,p_isPrevious)),Math.max(l_function(this._keySecondary,p_asTime,p_isPrevious),l_function(this._keySecondaryAlt,p_asTime,p_isPrevious))) | 0;
		case 1:
			return Math.max(l_function(this._keyUp,p_asTime,p_isPrevious),l_function(this._keyUpAlt,p_asTime,p_isPrevious)) | 0;
		case 2:
			return Math.max(l_function(this._keyRight,p_asTime,p_isPrevious),l_function(this._keyRightAlt,p_asTime,p_isPrevious)) | 0;
		case 3:
			return Math.max(l_function(this._keyDown,p_asTime,p_isPrevious),l_function(this._keyDownAlt,p_asTime,p_isPrevious)) | 0;
		case 4:
			return Math.max(l_function(this._keyLeft,p_asTime,p_isPrevious),l_function(this._keyLeftAlt,p_asTime,p_isPrevious)) | 0;
		case 5:
			return Math.max(l_function(this._keyPrimary,p_asTime,p_isPrevious),l_function(this._keyPrimaryAlt,p_asTime,p_isPrevious)) | 0;
		case 6:
			return Math.max(l_function(this._keySecondary,p_asTime,p_isPrevious),l_function(this._keySecondaryAlt,p_asTime,p_isPrevious)) | 0;
		}
	}
	,getIsButtonRelease: function(p_type) {
		return this._check(p_type,($_=this._kernel.inputs.keyboard,$bind($_,$_.getIsKeyRelease)));
	}
	,getIsButtonPress: function(p_type) {
		return this._check(p_type,($_=this._kernel.inputs.keyboard,$bind($_,$_.getIsKeyPress)));
	}
	,getIsButtonDown: function(p_type) {
		return this._check(p_type,($_=this._kernel.inputs.keyboard,$bind($_,$_.getIsKeyDown)));
	}
	,_check: function(p_type,p_function) {
		switch( (p_type)[1] ) {
		case 0:
			return this._check(awe6.interfaces.EJoypadButton.PRIMARY,p_function) || this._check(awe6.interfaces.EJoypadButton.SECONDARY,p_function);
		case 1:
			return p_function(this._keyUp) || p_function(this._keyUpAlt);
		case 2:
			return p_function(this._keyRight) || p_function(this._keyRightAlt);
		case 3:
			return p_function(this._keyDown) || p_function(this._keyDownAlt);
		case 4:
			return p_function(this._keyLeft) || p_function(this._keyLeftAlt);
		case 5:
			return p_function(this._keyPrimary) || p_function(this._keyPrimaryAlt);
		case 6:
			return p_function(this._keySecondary) || p_function(this._keySecondaryAlt);
		}
	}
	,__class__: awe6.core.InputJoypad
}
awe6.interfaces.IResettable = function() { }
$hxClasses["awe6.interfaces.IResettable"] = awe6.interfaces.IResettable;
awe6.interfaces.IResettable.__name__ = ["awe6","interfaces","IResettable"];
awe6.interfaces.IResettable.prototype = {
	__class__: awe6.interfaces.IResettable
}
awe6.interfaces.IInputManager = function() { }
$hxClasses["awe6.interfaces.IInputManager"] = awe6.interfaces.IInputManager;
awe6.interfaces.IInputManager.__name__ = ["awe6","interfaces","IInputManager"];
awe6.interfaces.IInputManager.__interfaces__ = [awe6.interfaces.IResettable];
awe6.interfaces.IInputManager.prototype = {
	__class__: awe6.interfaces.IInputManager
}
awe6.core.InputManager = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.InputManager"] = awe6.core.InputManager;
awe6.core.InputManager.__name__ = ["awe6","core","InputManager"];
awe6.core.InputManager.__interfaces__ = [awe6.interfaces.IInputManager];
awe6.core.InputManager.__super__ = awe6.core.Process;
awe6.core.InputManager.prototype = $extend(awe6.core.Process.prototype,{
	reset: function() {
		this._inputKeyboard.dispose();
		this._inputMouse.dispose();
		this._init();
		return true;
	}
	,createJoypad: function(p_up,p_right,p_down,p_left,p_primary,p_secondary,p_upAlt,p_rightAlt,p_downAlt,p_leftAlt,p_primaryAlt,p_secondaryAlt) {
		return new awe6.core.InputJoypad(this._kernel,p_up,p_right,p_down,p_left,p_primary,p_secondary,p_upAlt,p_rightAlt,p_downAlt,p_leftAlt,p_primaryAlt,p_secondaryAlt);
	}
	,_disposer: function() {
		this._inputKeyboard.dispose();
		this._inputMouse.dispose();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		this._inputKeyboard.update(p_deltaTime);
		this._inputMouse.update(p_deltaTime);
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.joypad = this.createJoypad();
		this.keyboard = this._inputKeyboard = new awe6.core.drivers.openfl.html5.InputKeyboard(this._kernel);
		this.mouse = this._inputMouse = new awe6.core.drivers.openfl.html5.InputMouse(this._kernel);
	}
	,__class__: awe6.core.InputManager
});
awe6.interfaces.IMessageManager = function() { }
$hxClasses["awe6.interfaces.IMessageManager"] = awe6.interfaces.IMessageManager;
awe6.interfaces.IMessageManager.__name__ = ["awe6","interfaces","IMessageManager"];
awe6.interfaces.IMessageManager.__interfaces__ = [awe6.interfaces.IResettable];
awe6.interfaces.IMessageManager.prototype = {
	__class__: awe6.interfaces.IMessageManager
}
awe6.core.MessageManager = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.MessageManager"] = awe6.core.MessageManager;
awe6.core.MessageManager.__name__ = ["awe6","core","MessageManager"];
awe6.core.MessageManager.__interfaces__ = [awe6.interfaces.IMessageManager];
awe6.core.MessageManager.__super__ = awe6.core.Process;
awe6.core.MessageManager.prototype = $extend(awe6.core.Process.prototype,{
	_getSubscriptions: function(p_subscriber,p_message,p_handler,p_sender,p_senderClassType,p_isRemove) {
		if(p_isRemove == null) p_isRemove = false;
		var l_result = new haxe.ds.GenericStack();
		var $it0 = this._subscriptions.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(p_subscriber != null && i.subscriber != p_subscriber) continue;
			if(p_message != null && !js.Boot.__instanceof(p_message,i.messageClass)) {
				var _g = Type["typeof"](p_message);
				var $e = (_g);
				switch( $e[1] ) {
				case 7:
					var e = $e[2];
					if(Type.getEnum(p_message) != Type.getEnum(i.message) || p_message[0] != Type.enumConstructor(i.message)) {
						e;
						continue;
					}
					break;
				default:
					if(p_message != i.message) continue;
				}
			}
			if(p_handler != null && !Reflect.compareMethods(i.handler,p_handler)) continue;
			if(p_sender != null && i.sender != null && i.sender != p_sender) continue;
			if(p_sender != null && i.senderClassType != null && (p_isRemove || !js.Boot.__instanceof(p_sender,i.senderClassType))) continue;
			l_result.head = new haxe.ds.GenericCell(i,l_result.head);
		}
		return l_result;
	}
	,_send: function(p_subscription,p_message,p_sender) {
		var l_isContinue = p_subscription.handler.apply(p_subscription.subscriber,[p_message,p_sender]);
		if(p_subscription.isRemovedAfterFirstSend) this._subscriptions.remove(p_subscription);
		return l_isContinue;
	}
	,_sendMessage: function(p_message,p_sender,p_target,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		if(this._isVerbose) console.log("Sending message: " + Std.string(p_message) + " from " + p_sender.id);
		if(!this._isOkToSendMessage()) {
			this._messageQueue.push(new awe6.core._MessageManager._HelperMessage(p_message,p_sender,p_target,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere));
			return;
		}
		if(p_isBubbleEverywhere) {
			var l_entityFromScene = this._kernel.scenes.get_scene().getEntities()[0];
			if(l_entityFromScene != null && l_entityFromScene.get_parent() != null) return this._sendMessage(p_message,p_sender,this._kernel.scenes.get_scene().getEntities()[0].get_parent(),true);
		}
		var l_subscriptions = this._getSubscriptions(p_target,p_message,null,p_sender);
		var l_isContinue = true;
		var $it0 = l_subscriptions.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			l_isContinue = this._send(i,p_message,p_sender);
			if(!l_isContinue) return;
		}
		if(p_isBubbleDown) {
			var l_children = p_target.getEntities();
			var _g = 0;
			while(_g < l_children.length) {
				var j = l_children[_g];
				++_g;
				this._sendMessage(p_message,p_sender,j,true);
			}
		}
		if(p_isBubbleUp && p_target.get_parent() != null && js.Boot.__instanceof(p_target.get_parent(),awe6.interfaces.IEntity)) this._sendMessage(p_message,p_sender,p_target.get_parent(),false,true);
		return;
	}
	,_isOkToSendMessage: function() {
		return this._kernel.scenes.get_scene() != null;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this._isOkToSendMessage()) {
			var $it0 = this._messageQueue.iterator();
			while( $it0.hasNext() ) {
				var i = $it0.next();
				this._sendMessage(i.message,i.sender,i.target,i.isBubbleDown,i.isBubbleUp,i.isBubbleEverywhere);
				this._messageQueue.remove(i);
			}
		}
	}
	,reset: function() {
		this.removeSubscribers();
		this._messageQueue = new List();
		return true;
	}
	,sendMessage: function(p_message,p_sender,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		this._sendMessage(p_message,p_sender,p_sender,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere);
	}
	,removeSubscribers: function(p_subscriber,p_message,p_handler,p_sender,p_senderClassType) {
		var l_subscriptions = this._getSubscriptions(p_subscriber,p_message,p_handler,p_sender,p_senderClassType,true);
		var $it0 = l_subscriptions.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			this._subscriptions.remove(i);
			if(this._isVerbose) console.log("Removing " + Std.string(i.sender) + ":" + Std.string(i.message));
		}
	}
	,getSubscribers: function(p_subscriber,p_message,p_handler,p_sender,p_senderClassType) {
		var l_result = [];
		var l_subscriptions = this._getSubscriptions(p_subscriber,p_message,p_handler,p_sender,p_senderClassType);
		var $it0 = l_subscriptions.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			l_result.push(i.subscriber);
		}
		return l_result;
	}
	,addSubscriber: function(p_subscriber,p_message,p_handler,p_sender,p_senderClassType,p_isRemovedAfterFirstSend) {
		if(p_isRemovedAfterFirstSend == null) p_isRemovedAfterFirstSend = false;
		var l_subscription = new awe6.core._MessageManager._HelperSubscription(p_subscriber,p_message,p_handler,p_sender,p_senderClassType,p_isRemovedAfterFirstSend);
		this._subscriptions.add(l_subscription);
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this._isVerbose = false;
		this._subscriptions = new haxe.ds.GenericStack();
		this._messageQueue = new List();
	}
	,__class__: awe6.core.MessageManager
});
awe6.core._MessageManager = {}
awe6.core._MessageManager._HelperSubscription = function(p_subscriber,p_message,p_handler,p_sender,p_senderClassType,p_isRemovedAfterFirstSend) {
	if(p_isRemovedAfterFirstSend == null) p_isRemovedAfterFirstSend = false;
	this.subscriber = p_subscriber;
	this.message = p_message;
	this.handler = p_handler;
	this.sender = p_sender;
	this.senderClassType = p_senderClassType;
	this.isRemovedAfterFirstSend = p_isRemovedAfterFirstSend;
	this.messageClass = Type.getClass(p_message);
};
$hxClasses["awe6.core._MessageManager._HelperSubscription"] = awe6.core._MessageManager._HelperSubscription;
awe6.core._MessageManager._HelperSubscription.__name__ = ["awe6","core","_MessageManager","_HelperSubscription"];
awe6.core._MessageManager._HelperSubscription.prototype = {
	toString: function() {
		var l_result = "_HelperSubscription { \n" + "subscriber : " + Std.string(this.subscriber) + "\n" + "message : " + Std.string(this.message) + "\n" + "handler : " + Std.string(this.handler) + "\n" + "sender : " + Std.string(this.sender) + "\n" + "senderClassType : " + Std.string(this.senderClassType) + "\n" + "isRemovedAfterFirstSend : " + Std.string(this.isRemovedAfterFirstSend) + "\n" + "messageClass : " + Std.string(this.messageClass) + "\n }";
		return l_result;
	}
	,__class__: awe6.core._MessageManager._HelperSubscription
}
awe6.core._MessageManager._HelperMessage = function(p_message,p_sender,p_target,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
	if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
	if(p_isBubbleUp == null) p_isBubbleUp = false;
	if(p_isBubbleDown == null) p_isBubbleDown = false;
	this.message = p_message;
	this.sender = p_sender;
	this.target = p_target;
	this.isBubbleDown = p_isBubbleDown;
	this.isBubbleUp = p_isBubbleUp;
	this.isBubbleEverywhere = p_isBubbleEverywhere;
};
$hxClasses["awe6.core._MessageManager._HelperMessage"] = awe6.core._MessageManager._HelperMessage;
awe6.core._MessageManager._HelperMessage.__name__ = ["awe6","core","_MessageManager","_HelperMessage"];
awe6.core._MessageManager._HelperMessage.prototype = {
	__class__: awe6.core._MessageManager._HelperMessage
}
awe6.interfaces.IScene = function() { }
$hxClasses["awe6.interfaces.IScene"] = awe6.interfaces.IScene;
awe6.interfaces.IScene.__name__ = ["awe6","interfaces","IScene"];
awe6.interfaces.IScene.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IEntityCollection,awe6.interfaces.IProcess];
awe6.interfaces.IScene.prototype = {
	__class__: awe6.interfaces.IScene
}
awe6.core.Scene = function(p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext) {
	if(p_isSessionSavedOnNext == null) p_isSessionSavedOnNext = false;
	if(p_isMuteable == null) p_isMuteable = true;
	if(p_isPauseable == null) p_isPauseable = false;
	this.type = p_type;
	this.isPauseable = p_isPauseable;
	this.isMuteable = p_isMuteable;
	this.isSessionSavedOnNext = p_isSessionSavedOnNext;
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.Scene"] = awe6.core.Scene;
awe6.core.Scene.__name__ = ["awe6","core","Scene"];
awe6.core.Scene.__interfaces__ = [awe6.interfaces.IScene];
awe6.core.Scene.__super__ = awe6.core.Process;
awe6.core.Scene.prototype = $extend(awe6.core.Process.prototype,{
	setAgenda: function(p_type) {
		return this._entity.setAgenda(p_type);
	}
	,get_agenda: function() {
		return this._entity.get_agenda();
	}
	,get_view: function() {
		return this.view;
	}
	,getEntityById: function(p_id,p_agenda,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		return this._entity.getEntityById(p_id,p_agenda,p_isBubbleDown,p_isBubbleUp,false);
	}
	,getEntitiesByClass: function(p_classType,p_agenda,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		return this._entity.getEntitiesByClass(p_classType,p_agenda,p_isBubbleDown,p_isBubbleUp,false);
	}
	,getEntities: function(p_agenda) {
		return this._entity.getEntities(p_agenda);
	}
	,removeEntity: function(p_entity,p_agenda,p_isRemovedFromView) {
		if(p_isRemovedFromView == null) p_isRemovedFromView = false;
		this._entity.removeEntity(p_entity,p_agenda,p_isRemovedFromView);
	}
	,addEntity: function(p_entity,p_agenda,p_isAddedToView,p_viewPriority) {
		if(p_viewPriority == null) p_viewPriority = 0;
		if(p_isAddedToView == null) p_isAddedToView = false;
		return this._entity.addEntity(p_entity,p_agenda,p_isAddedToView,p_viewPriority);
	}
	,_disposer: function() {
		this._entity.dispose();
		this.get_view().dispose();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		this._entity.update(p_deltaTime);
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.isDisposable = true;
		this._entity = new awe6.core.Entity(this._kernel);
		this.view = this._entity.get_view();
	}
	,__class__: awe6.core.Scene
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{get_view:"get_view",get_agenda:"get_agenda"})
});
awe6.interfaces.ISceneManager = function() { }
$hxClasses["awe6.interfaces.ISceneManager"] = awe6.interfaces.ISceneManager;
awe6.interfaces.ISceneManager.__name__ = ["awe6","interfaces","ISceneManager"];
awe6.interfaces.ISceneManager.prototype = {
	__class__: awe6.interfaces.ISceneManager
}
awe6.core.SceneManager = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.SceneManager"] = awe6.core.SceneManager;
awe6.core.SceneManager.__name__ = ["awe6","core","SceneManager"];
awe6.core.SceneManager.__interfaces__ = [awe6.interfaces.ISceneManager];
awe6.core.SceneManager.__super__ = awe6.core.Process;
awe6.core.SceneManager.prototype = $extend(awe6.core.Process.prototype,{
	get_scene: function() {
		return this.scene;
	}
	,restart: function() {
		if(this.get_scene() == null) this.setScene(this._kernel.factory.startingSceneType); else this.setScene(this.get_scene().type);
	}
	,next: function() {
		if(this.get_scene().isSessionSavedOnNext && this._kernel.get_session() != null) this._kernel.get_session().save();
		this.setScene(this._kernel.factory.getNextSceneType(this.get_scene().type));
	}
	,back: function() {
		this.setScene(this._kernel.factory.getBackSceneType(this.get_scene().type));
	}
	,setScene: function(p_type) {
		var l_previousType = null;
		if(this.get_scene() != null) {
			l_previousType = this.get_scene().type;
			var l_newSceneTransition = this._kernel.factory.createSceneTransition(p_type,l_previousType);
			if(this._sceneTransition != null) this._sceneTransition.dispose();
			this._sceneTransition = l_newSceneTransition;
			this._kernel.inputs.reset();
			if(this.get_scene().isDisposable) {
				this.get_scene().dispose();
				this._kernel.messenger.reset();
			}
			this.scene = null;
		}
		this._kernel.overlay.hideButtons();
		this.scene = this._kernel.factory.createScene(p_type);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.BACK,this._kernel.factory.getBackSceneType(this.get_scene().type) != null);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.MUTE,this.get_scene().isMuteable && !this._kernel.audio.isMute);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.UNMUTE,this.get_scene().isMuteable && this._kernel.audio.isMute);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.PAUSE,this.get_scene().isPauseable && this._kernel.isActive);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,this.get_scene().isPauseable && !this._kernel.isActive);
		this.view.addChild(this.get_scene().get_view());
		if(this._sceneTransition != null) this.get_scene().get_view().addChild(this._sceneTransition.get_view(),this._tools.BIG_NUMBER + 1);
	}
	,_disposer: function() {
		if(this.get_scene() != null) this.get_scene().dispose();
		if(this._sceneTransition != null) this._sceneTransition.dispose();
		this.view.dispose();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this.get_scene() != null) this.get_scene().update(p_deltaTime);
		if(this._sceneTransition != null) this._sceneTransition.update(p_deltaTime);
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.view = new awe6.core.drivers.openfl.html5.View(this._kernel);
	}
	,__class__: awe6.core.SceneManager
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{get_scene:"get_scene"})
});
awe6.interfaces.ITextStyle = function() { }
$hxClasses["awe6.interfaces.ITextStyle"] = awe6.interfaces.ITextStyle;
awe6.interfaces.ITextStyle.__name__ = ["awe6","interfaces","ITextStyle"];
awe6.interfaces.ITextStyle.prototype = {
	__class__: awe6.interfaces.ITextStyle
}
awe6.core.TextStyle = function(p_font,p_size,p_color,p_isBold,p_isItalic,p_align,p_spacingHorizontal,p_spacingVertical,p_thickness,p_filters) {
	if(p_thickness == null) p_thickness = 0;
	if(p_isItalic == null) p_isItalic = false;
	if(p_isBold == null) p_isBold = false;
	this.font = p_font != null?p_font:"_sans";
	this.size = p_size != null?p_size:12;
	this.color = p_color != null?p_color:0;
	this.isBold = p_isBold;
	this.isItalic = p_isItalic;
	this.align = p_align != null?p_align:awe6.interfaces.ETextAlign.LEFT;
	this.spacingHorizontal = p_spacingHorizontal != null?p_spacingHorizontal:0;
	this.spacingVertical = p_spacingVertical != null?p_spacingVertical:0;
	this.thickness = p_thickness;
	this.filters = p_filters;
};
$hxClasses["awe6.core.TextStyle"] = awe6.core.TextStyle;
awe6.core.TextStyle.__name__ = ["awe6","core","TextStyle"];
awe6.core.TextStyle.__interfaces__ = [awe6.interfaces.ITextStyle];
awe6.core.TextStyle.prototype = {
	clone: function() {
		return new awe6.core.TextStyle(this.font,this.size,this.color,this.isBold,this.isItalic,this.align,this.spacingHorizontal,this.spacingVertical,this.thickness,this.filters);
	}
	,toString: function() {
		return Std.string(this.font + "," + this.size + "," + this.color + "," + Std.string(this.isBold) + "," + Std.string(this.isItalic) + "," + Std.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + Std.string(this.filters));
	}
	,__class__: awe6.core.TextStyle
}
awe6.interfaces.ITools = function() { }
$hxClasses["awe6.interfaces.ITools"] = awe6.interfaces.ITools;
awe6.interfaces.ITools.__name__ = ["awe6","interfaces","ITools"];
awe6.interfaces.ITools.__interfaces__ = [awe6.interfaces.IEncrypter];
awe6.interfaces.ITools.prototype = {
	__class__: awe6.interfaces.ITools
}
awe6.core.Tools = function(p_kernel) {
	this._kernel = p_kernel;
	this.BIG_NUMBER = 9999998;
	this._encrypter = this._kernel.factory.createEncrypter();
};
$hxClasses["awe6.core.Tools"] = awe6.core.Tools;
awe6.core.Tools.__name__ = ["awe6","core","Tools"];
awe6.core.Tools.__interfaces__ = [awe6.interfaces.ITools];
awe6.core.Tools.prototype = {
	decrypt: function(p_value,p_secret) {
		if(p_secret == null) p_secret = "";
		return this._encrypter.decrypt(p_value,p_secret);
	}
	,encrypt: function(p_value,p_secret) {
		if(p_secret == null) p_secret = "";
		return this._encrypter.encrypt(p_value,p_secret);
	}
	,unserialize: function(p_value) {
		return haxe.Unserializer.run(p_value);
	}
	,serialize: function(p_value) {
		return haxe.Serializer.run(p_value);
	}
	,intToHex: function(p_value) {
		p_value &= 255;
		var l_hex = "0123456789abcdef";
		return l_hex.charAt(p_value >> 4) + l_hex.charAt(p_value & 15);
	}
	,convertAgeToFormattedTime: function(p_age,p_delimiter) {
		if(p_delimiter == null) p_delimiter = "'";
		if(p_age < 0) return "99" + p_delimiter + "99" + p_delimiter + "99";
		var l_age = p_age / 1000;
		var l_seconds = Math.floor(l_age);
		var l_remainder = Std.string(Math.round((l_age - l_seconds) * 100));
		var l_minutes = 0;
		while(l_seconds > 59) {
			l_minutes++;
			l_seconds -= 60;
		}
		if(l_minutes > 99) l_minutes = 99;
		while(l_remainder.length < 2) l_remainder = "0" + l_remainder;
		var l_secs = Std.string(l_seconds);
		if(l_seconds < 10) l_secs = "0" + l_secs;
		var l_mins = Std.string(l_minutes);
		if(l_minutes < 10) l_mins = "0" + l_mins;
		if(l_seconds == 0) l_secs = "00";
		if(l_minutes == 0) l_mins = "00";
		return Std.string(l_mins + p_delimiter + l_secs + p_delimiter + l_remainder);
	}
	,convertUpdatesToFormattedTime: function(p_updates,p_delimiter) {
		var l_age = Math.round(1000 * p_updates / this._kernel.factory.targetFramerate);
		return this.convertAgeToFormattedTime(l_age,p_delimiter);
	}
	,shuffle: function(p_array) {
		var l_result = p_array.slice();
		var l_n = l_result.length;
		while(l_n > 1) {
			var l_k = Std.random(l_n);
			l_n--;
			var l_temp = l_result[l_n];
			l_result[l_n] = l_result[l_k];
			l_result[l_k] = l_temp;
		}
		return l_result;
	}
	,nearestSquare: function(p_value) {
		if(p_value == 0) return 0; else {
			var l_sqrt = Math.round(Math.sqrt(Math.abs(p_value)));
			return l_sqrt * l_sqrt * (p_value > 0?1:p_value == 0?0:-1);
		}
	}
	,distance: function(p_startX,p_startY,p_endX,p_endY,p_isSquared) {
		if(p_isSquared == null) p_isSquared = false;
		var l_dx = p_endX - p_startX;
		var l_dy = p_endY - p_startY;
		var l_distance = l_dx * l_dx + l_dy * l_dy;
		return p_isSquared?l_distance:Math.sqrt(l_distance);
	}
	,isBool: function(p_value) {
		return p_value != 0 && p_value != null && p_value != false;
	}
	,sgn: function(p_value) {
		if(p_value > 0) return 1; else if(p_value == 0) return 0; else return -1;
	}
	,isEven: function(p_value) {
		return p_value % 2 == 0;
	}
	,isOdd: function(p_value) {
		return p_value % 2 != 0;
	}
	,getRandomType: function(p_enum) {
		return Type.createEnumIndex(p_enum,Std.random(Type.getEnumConstructs(p_enum).length));
	}
	,swap: function(p_a,p_b) {
		var l_temp = p_a;
		p_a = p_b;
		p_b = l_temp;
	}
	,range: function(p_value,p_min,p_max) {
		var l_d = p_max - p_min;
		if(l_d == 0) return p_value; else {
			var l_o = p_value - p_min;
			return l_o - Math.floor(l_o / l_d) * l_d + p_min;
		}
	}
	,limit: function(p_value,p_min,p_max) {
		return p_value > p_max?p_max:p_value < p_min?p_min:p_value;
	}
	,toWords: function(p_value) {
		if(this._isCamelCase(p_value)) return this.fromCamelCase(p_value);
		if(this._isConstCase(p_value)) return this.fromConstCase(p_value);
		return p_value;
	}
	,fromConstCase: function(p_value) {
		if(p_value == null || p_value == "") return "";
		var l_result = "";
		var l_words = p_value.split("_");
		var l_space = "";
		var _g = 0;
		while(_g < l_words.length) {
			var i = l_words[_g];
			++_g;
			l_result += l_space + (i.charAt(0).toUpperCase() + HxOverrides.substr(i,1,null).toLowerCase());
			l_space = " ";
		}
		return l_result;
	}
	,toConstCase: function(p_value) {
		if(p_value == null || p_value == "") return "";
		if(this._isConstCase(p_value)) return p_value;
		if(this._isCamelCase(p_value)) p_value = this.fromCamelCase(p_value);
		var l_result = "";
		p_value = StringTools.replace(p_value,"     "," ");
		p_value = StringTools.replace(p_value,"    "," ");
		p_value = StringTools.replace(p_value,"   "," ");
		p_value = StringTools.replace(p_value,"  "," ");
		p_value = StringTools.replace(p_value," ","_");
		l_result = p_value.toUpperCase();
		return l_result;
	}
	,fromCamelCase: function(p_value) {
		if(p_value == null || p_value == "") return "";
		var l_result = "";
		var l_chars = p_value.split("");
		var l_space = "";
		var _g = 0;
		while(_g < l_chars.length) {
			var i = l_chars[_g];
			++_g;
			if(i.toLowerCase() != i) l_result += l_space;
			l_result += i;
			l_space = " ";
		}
		return l_result;
	}
	,toCamelCase: function(p_value,p_isUpper) {
		if(p_isUpper == null) p_isUpper = false;
		if(p_value == null || p_value == "") return "";
		if(this._isCamelCase(p_value)) return p_value;
		if(this._isConstCase(p_value)) p_value = this.fromConstCase(p_value);
		var l_result = "";
		p_value = StringTools.replace(p_value,"     "," ");
		p_value = StringTools.replace(p_value,"    "," ");
		p_value = StringTools.replace(p_value,"   "," ");
		p_value = StringTools.replace(p_value,"  "," ");
		p_value = StringTools.replace(p_value," ","_");
		var l_del = "_";
		var l_words = p_value.split(l_del);
		var _g = 0;
		while(_g < l_words.length) {
			var i = l_words[_g];
			++_g;
			l_result += p_isUpper?i.charAt(0).toUpperCase() + HxOverrides.substr(i,1,null).toLowerCase():i.toLowerCase();
			p_isUpper = true;
		}
		return l_result;
	}
	,_isConstCase: function(p_value) {
		if(p_value.toUpperCase() != p_value) return false;
		if(p_value.indexOf(" ") > -1) return false;
		return true;
	}
	,_isCamelCase: function(p_value) {
		if(p_value.toUpperCase() == p_value) return false;
		if(p_value.indexOf(" ") > -1) return false;
		if(p_value.indexOf("_") > -1) return false;
		return true;
	}
	,toUpperCaseFirst: function(p_value) {
		return p_value.charAt(0).toUpperCase() + HxOverrides.substr(p_value,1,null).toLowerCase();
	}
	,sortByPriority: function(p_a,p_b) {
		var l_ap = p_a.get_priority();
		var l_bp = p_b.get_priority();
		if(l_ap < l_bp) return -1;
		if(l_ap > l_bp) return 1;
		return 0;
	}
	,sortByInt: function(p_a,p_b) {
		return Reflect.compare(p_a,p_b);
	}
	,sortByString: function(p_a,p_b) {
		return Reflect.compare(p_a.toLowerCase(),p_b.toLowerCase());
	}
	,ease: function(p_originalValue,p_newValue,p_ease) {
		return p_originalValue * (1 - p_ease) + p_newValue * p_ease;
	}
	,_randomCharacter: function() {
		return HxOverrides.substr(StringTools.hex((1 + Math.random()) * 65536 | 0 | 0,1),1,null);
	}
	,createGuid: function(p_isSmall,p_prefix) {
		if(p_prefix == null) p_prefix = "";
		if(p_isSmall == null) p_isSmall = false;
		return p_isSmall?p_prefix + HxOverrides.substr(this._randomCharacter() + this._randomCharacter() + this._randomCharacter(),0,10):p_prefix + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter());
	}
	,__class__: awe6.core.Tools
}
awe6.interfaces.IAudioManager = function() { }
$hxClasses["awe6.interfaces.IAudioManager"] = awe6.interfaces.IAudioManager;
awe6.interfaces.IAudioManager.__name__ = ["awe6","interfaces","IAudioManager"];
awe6.interfaces.IAudioManager.prototype = {
	__class__: awe6.interfaces.IAudioManager
}
awe6.core.drivers = {}
awe6.core.drivers.AAudioManager = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.AAudioManager"] = awe6.core.drivers.AAudioManager;
awe6.core.drivers.AAudioManager.__name__ = ["awe6","core","drivers","AAudioManager"];
awe6.core.drivers.AAudioManager.__interfaces__ = [awe6.interfaces.IAudioManager];
awe6.core.drivers.AAudioManager.__super__ = awe6.core.Process;
awe6.core.drivers.AAudioManager.prototype = $extend(awe6.core.Process.prototype,{
	isPlaying: function(p_id,p_audioChannelType) {
		var l_result = this._getSounds(p_id,p_audioChannelType);
		return l_result.length != 0;
	}
	,_getSounds: function(p_id,p_audioChannelType) {
		var l_result = [];
		if(p_id == null && p_audioChannelType == null) l_result = this._sounds.slice(); else if(p_audioChannelType == null) {
			var _g = 0, _g1 = this._sounds;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(i.id == p_id) l_result.push(i);
			}
		} else if(p_id == null) {
			var _g = 0, _g1 = this._sounds;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Type.enumEq(i.audioChannelType,p_audioChannelType)) l_result.push(i);
			}
		} else {
			var _g = 0, _g1 = this._sounds;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(i.id == p_id && Type.enumEq(i.audioChannelType,p_audioChannelType)) l_result.push(i);
			}
		}
		return l_result;
	}
	,_driverSetIsMute: function(p_value) {
	}
	,set_isMute: function(p_value) {
		if(p_value == null) p_value = !this.isMute;
		this.isMute = p_value;
		this._driverSetIsMute(p_value);
		return this.isMute;
	}
	,transform: function(p_id,p_audioChannelType,p_volume,p_pan,p_asRelative) {
		if(p_asRelative == null) p_asRelative = false;
		if(p_pan == null) p_pan = 0;
		if(p_volume == null) p_volume = 1;
		var l_sounds = this._getSounds(p_id,p_audioChannelType);
		var _g = 0;
		while(_g < l_sounds.length) {
			var i = l_sounds[_g];
			++_g;
			i.transform(p_volume,p_pan,p_asRelative);
		}
	}
	,stop: function(p_id,p_audioChannelType) {
		var l_sounds = this._getSounds(p_id,p_audioChannelType);
		var _g = 0;
		while(_g < l_sounds.length) {
			var i = l_sounds[_g];
			++_g;
			i.stop();
		}
	}
	,_driverSoundFactory: function(p_id,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback) {
		if(p_pan == null) p_pan = 0;
		if(p_volume == null) p_volume = 1;
		if(p_startTime == null) p_startTime = 0;
		if(p_loops == null) p_loops = 1;
		return new awe6.core.drivers._AHelperSound(this._kernel,p_id,this._packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback);
	}
	,start: function(p_id,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_isIgnoredIfPlaying,p_onCompleteCallback) {
		if(p_isIgnoredIfPlaying == null) p_isIgnoredIfPlaying = false;
		if(p_pan == null) p_pan = 0;
		if(p_volume == null) p_volume = 1;
		if(p_startTime == null) p_startTime = 0;
		if(p_loops == null) p_loops = 1;
		if(p_audioChannelType == null) p_audioChannelType = awe6.interfaces.EAudioChannel.DEFAULT;
		if(p_isIgnoredIfPlaying) {
			var l_existingSound = this._getSounds(p_id,p_audioChannelType);
			if(l_existingSound.length != 0) return;
		}
		this._sounds.push(this._driverSoundFactory(p_id,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback));
	}
	,_disposer: function() {
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			i.dispose();
		}
		this.set_isMute(false);
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.isDisposed) HxOverrides.remove(this._sounds,i);
		}
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this._sounds = [];
		this._packageId = this._kernel.getConfig("settings.assets.packages.audio");
		if(this._packageId == null) this._packageId = this._kernel.getConfig("settings.assets.packages.default");
		if(this._packageId == null) this._packageId = "assets.audio";
		this.set_isMute(false);
	}
	,__class__: awe6.core.drivers.AAudioManager
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_isMute:"set_isMute"})
});
awe6.core.drivers._AHelperSound = function(p_kernel,p_id,p_packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback) {
	if(p_pan == null) p_pan = 0;
	if(p_volume == null) p_volume = 1;
	if(p_startTime == null) p_startTime = 0;
	if(p_loops == null) p_loops = 1;
	this._kernel = p_kernel;
	this.isDisposed = false;
	this.id = p_id;
	this._packageId = p_packageId;
	this.audioChannelType = p_audioChannelType != null?p_audioChannelType:awe6.interfaces.EAudioChannel.DEFAULT;
	if(p_loops == -1) p_loops = this._kernel.tools.BIG_NUMBER;
	this._loops = p_loops;
	this._startTime = p_startTime;
	this._volume = p_volume;
	this._pan = p_pan;
	this._onCompleteCallback = p_onCompleteCallback;
	this._init();
};
$hxClasses["awe6.core.drivers._AHelperSound"] = awe6.core.drivers._AHelperSound;
awe6.core.drivers._AHelperSound.__name__ = ["awe6","core","drivers","_AHelperSound"];
awe6.core.drivers._AHelperSound.__interfaces__ = [awe6.interfaces.IDisposable];
awe6.core.drivers._AHelperSound.prototype = {
	_driverDisposer: function() {
	}
	,dispose: function() {
		if(this.isDisposed) return;
		this.isDisposed = true;
		this._driverStop();
	}
	,_driverStop: function() {
	}
	,stop: function() {
		this._driverStop();
		this.dispose();
	}
	,_driverTransform: function(p_asRelative) {
		if(p_asRelative == null) p_asRelative = false;
	}
	,transform: function(p_volume,p_pan,p_asRelative) {
		if(p_asRelative == null) p_asRelative = false;
		if(p_pan == null) p_pan = 0;
		if(p_volume == null) p_volume = 1;
		if(this.isDisposed) return;
		this._volume = this._kernel.tools.limit(p_volume,0,1);
		this._pan = this._kernel.tools.limit(p_pan,-1,1);
		this._driverTransform(p_asRelative);
	}
	,_driverInit: function() {
	}
	,_init: function() {
		this._driverInit();
	}
	,__class__: awe6.core.drivers._AHelperSound
}
awe6.interfaces.IFactory = function() { }
$hxClasses["awe6.interfaces.IFactory"] = awe6.interfaces.IFactory;
awe6.interfaces.IFactory.__name__ = ["awe6","interfaces","IFactory"];
awe6.interfaces.IFactory.prototype = {
	__class__: awe6.interfaces.IFactory
}
awe6.core.drivers.AFactory = function(p_context,p_isDebug,p_config) {
	if(p_isDebug == null) p_isDebug = false;
	this._context = p_context;
	this.isDebug = p_isDebug;
	this._config = p_config;
	this.config = new haxe.ds.StringMap();
	this.id = "awe6";
	this.version = "0.0.1";
	this.author = "unknown";
	this.isDecached = false;
	this.isEyeCandyOptionEnabled = true;
	this.isFullScreenOptionEnabled = true;
	this.isResetSessionsOptionEnabled = true;
	this.width = 600;
	this.height = 400;
	this.bgColor = 16711680;
	this.fullScreenType = awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_PRESERVE;
	this.secret = "YouMustOverrideThis";
	this.targetFramerate = 25;
	this.isFixedUpdates = true;
	this.startingSceneType = awe6.interfaces.EScene.GAME;
	this.keyPause = awe6.interfaces.EKey.P;
	this.keyMute = awe6.interfaces.EKey.M;
	this.keyNext = awe6.interfaces.EKey.SPACE;
	this.keyBack = awe6.interfaces.EKey.ESCAPE;
	this.keySpecial = awe6.interfaces.EKey.CONTROL;
	this._configurer(true);
	this._driverInit();
};
$hxClasses["awe6.core.drivers.AFactory"] = awe6.core.drivers.AFactory;
awe6.core.drivers.AFactory.__name__ = ["awe6","core","drivers","AFactory"];
awe6.core.drivers.AFactory.__interfaces__ = [awe6.interfaces.IDisposable,awe6.interfaces.IFactory];
awe6.core.drivers.AFactory.prototype = {
	_driverDisposer: function() {
	}
	,dispose: function() {
		if(this.isDisposed || this._concreteKernel == null) return;
		this.isDisposed = true;
		this._driverDisposer();
		this._concreteKernel.dispose();
		this._concreteKernel = null;
		this._kernel = null;
		this.config = null;
	}
	,getNextSceneType: function(p_type) {
		return null;
	}
	,getBackSceneType: function(p_type) {
		return null;
	}
	,createTextStyle: function(p_type) {
		return new awe6.core.TextStyle();
	}
	,createSession: function(p_id) {
		return new awe6.core.drivers.ASession(this._kernel,p_id);
	}
	,createSceneTransition: function(p_typeIncoming,p_typeOutgoing) {
		return new awe6.core.drivers.openfl.html5.SceneTransition(this._kernel);
	}
	,createScene: function(p_type) {
		if(p_type == null) p_type = this.startingSceneType;
		return new awe6.core.Scene(this._kernel,p_type);
	}
	,createPreloader: function() {
		return new awe6.core.drivers.openfl.html5.Preloader(this._kernel,this._getAssetUrls(),this.isDecached);
	}
	,createOverlay: function() {
		return new awe6.core.drivers.openfl.html5.Overlay(this._kernel);
	}
	,createLogger: function() {
		return null;
	}
	,createEntity: function(p_id) {
		return new awe6.core.Entity(this._kernel,p_id == null?null:Std.string(p_id));
	}
	,createEncrypter: function() {
		return new awe6.core.Encrypter(this.secret);
	}
	,createAssetManager: function() {
		if(js.Boot.__instanceof(this._kernel.assets,awe6.interfaces.IAssetManagerProcess)) return js.Boot.__cast(this._kernel.assets , awe6.interfaces.IAssetManagerProcess); else return new awe6.core.AAssetManager(this._kernel);
	}
	,onInitComplete: function(p_kernel) {
		if(this._kernel != null || p_kernel == null) return;
		this._kernel = p_kernel;
		this._tools = this._kernel.tools;
		this.id = HxOverrides.substr(this._tools.toConstCase(StringTools.trim(this.id)),0,16);
		this.version = HxOverrides.substr(StringTools.trim(this.version),0,10);
		this.author = HxOverrides.substr(StringTools.trim(this.author),0,16);
	}
	,_getAssetUrls: function() {
		var l_result = [];
		var _g = 0;
		while(_g < 1000) {
			var i = _g++;
			var l_nodeName = "settings.assets.url" + i;
			if(this.config.exists(l_nodeName)) l_result.push(Std.string(this.config.get(l_nodeName)));
		}
		return l_result;
	}
	,_launchKernel: function() {
		if(this._concreteKernel != null) return;
		this._configurer(false);
		this._concreteKernel = new awe6.core.drivers.openfl.html5.Kernel(this,this._context);
	}
	,_configurer: function(p_isPreconfig) {
		if(p_isPreconfig == null) p_isPreconfig = false;
	}
	,_configure: function(p_isPreconfig) {
		if(p_isPreconfig == null) p_isPreconfig = false;
		if(p_isPreconfig) {
			this.id = "awe6";
			this.version = "0.0.1";
			this.author = "unknown";
			this.isDecached = false;
			this.isEyeCandyOptionEnabled = true;
			this.isFullScreenOptionEnabled = true;
			this.isResetSessionsOptionEnabled = true;
			this.width = 600;
			this.height = 400;
			this.bgColor = 16711680;
			this.fullScreenType = awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_PRESERVE;
			this.secret = "YouMustOverrideThis";
			this.targetFramerate = 25;
			this.isFixedUpdates = true;
			this.startingSceneType = awe6.interfaces.EScene.GAME;
			this.keyPause = awe6.interfaces.EKey.P;
			this.keyMute = awe6.interfaces.EKey.M;
			this.keyNext = awe6.interfaces.EKey.SPACE;
			this.keyBack = awe6.interfaces.EKey.ESCAPE;
			this.keySpecial = awe6.interfaces.EKey.CONTROL;
		}
		this._configurer(p_isPreconfig);
	}
	,_traverseElements: function(p_elements,p_prefix) {
		if(p_prefix.length != 0) p_prefix += ".";
		while( p_elements.hasNext() ) {
			var i = p_elements.next();
			var l_name = p_prefix + i.get_nodeName();
			if(i.elements().hasNext()) this._traverseElements(i.elements(),l_name);
			if(i.firstChild() != null && HxOverrides.substr(i.firstChild().toString(),0,9) == "<![CDATA[") i.firstChild().set_nodeValue(i.firstChild().toString().split("<![CDATA[").join("").split("]]>").join(""));
			var value = i.firstChild() == null?"":i.firstChild().get_nodeValue();
			this.config.set(l_name,value);
			var $it0 = i.attributes();
			while( $it0.hasNext() ) {
				var j = $it0.next();
				var l_aName = l_name + "." + j;
				this.config.set(l_aName,i.get(j));
			}
		}
	}
	,_driverInit: function() {
		if(this._config != null && HxOverrides.substr(this._config,0,5) == "<?xml") this._traverseElements(Xml.parse(this._config).firstElement().elements(),"");
		this._launchKernel();
	}
	,_init: function() {
		this.config = new haxe.ds.StringMap();
		this.id = "awe6";
		this.version = "0.0.1";
		this.author = "unknown";
		this.isDecached = false;
		this.isEyeCandyOptionEnabled = true;
		this.isFullScreenOptionEnabled = true;
		this.isResetSessionsOptionEnabled = true;
		this.width = 600;
		this.height = 400;
		this.bgColor = 16711680;
		this.fullScreenType = awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_PRESERVE;
		this.secret = "YouMustOverrideThis";
		this.targetFramerate = 25;
		this.isFixedUpdates = true;
		this.startingSceneType = awe6.interfaces.EScene.GAME;
		this.keyPause = awe6.interfaces.EKey.P;
		this.keyMute = awe6.interfaces.EKey.M;
		this.keyNext = awe6.interfaces.EKey.SPACE;
		this.keyBack = awe6.interfaces.EKey.ESCAPE;
		this.keySpecial = awe6.interfaces.EKey.CONTROL;
		this._configurer(true);
		this._driverInit();
	}
	,__class__: awe6.core.drivers.AFactory
}
awe6.interfaces.IInputKeyboard = function() { }
$hxClasses["awe6.interfaces.IInputKeyboard"] = awe6.interfaces.IInputKeyboard;
awe6.interfaces.IInputKeyboard.__name__ = ["awe6","interfaces","IInputKeyboard"];
awe6.interfaces.IInputKeyboard.prototype = {
	__class__: awe6.interfaces.IInputKeyboard
}
awe6.core.drivers.AInputKeyboard = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.AInputKeyboard"] = awe6.core.drivers.AInputKeyboard;
awe6.core.drivers.AInputKeyboard.__name__ = ["awe6","core","drivers","AInputKeyboard"];
awe6.core.drivers.AInputKeyboard.__interfaces__ = [awe6.interfaces.IInputKeyboard];
awe6.core.drivers.AInputKeyboard.__super__ = awe6.core.Process;
awe6.core.drivers.AInputKeyboard.prototype = $extend(awe6.core.Process.prototype,{
	getKey: function(p_keyCode) {
		var l_constructors = Type.getEnumConstructs(awe6.interfaces.EKey);
		l_constructors.pop();
		var _g = 0;
		while(_g < l_constructors.length) {
			var i = l_constructors[_g];
			++_g;
			var l_key = Type.createEnum(awe6.interfaces.EKey,i);
			if(this.getKeyCode(l_key) == p_keyCode) return l_key;
		}
		return awe6.interfaces.EKey.SUB_TYPE(p_keyCode);
	}
	,getKeyCode: function(p_type) {
		return (function($this) {
			var $r;
			var $e = (p_type);
			switch( $e[1] ) {
			case 0:
				$r = 144;
				break;
			case 1:
				$r = 12;
				break;
			case 2:
				$r = 47;
				break;
			case 3:
				$r = 18;
				break;
			case 4:
				$r = 8;
				break;
			case 5:
				$r = 20;
				break;
			case 6:
				$r = 17;
				break;
			case 7:
				$r = 46;
				break;
			case 8:
				$r = 40;
				break;
			case 9:
				$r = 35;
				break;
			case 10:
				$r = 13;
				break;
			case 11:
				$r = 27;
				break;
			case 12:
				$r = 112;
				break;
			case 13:
				$r = 121;
				break;
			case 14:
				$r = 122;
				break;
			case 15:
				$r = 123;
				break;
			case 16:
				$r = 124;
				break;
			case 17:
				$r = 125;
				break;
			case 18:
				$r = 126;
				break;
			case 19:
				$r = 113;
				break;
			case 20:
				$r = 114;
				break;
			case 21:
				$r = 115;
				break;
			case 22:
				$r = 116;
				break;
			case 23:
				$r = 117;
				break;
			case 24:
				$r = 118;
				break;
			case 25:
				$r = 119;
				break;
			case 26:
				$r = 120;
				break;
			case 27:
				$r = 36;
				break;
			case 28:
				$r = 45;
				break;
			case 29:
				$r = 37;
				break;
			case 30:
				$r = 96;
				break;
			case 31:
				$r = 97;
				break;
			case 32:
				$r = 98;
				break;
			case 33:
				$r = 99;
				break;
			case 34:
				$r = 100;
				break;
			case 35:
				$r = 101;
				break;
			case 36:
				$r = 102;
				break;
			case 37:
				$r = 103;
				break;
			case 38:
				$r = 104;
				break;
			case 39:
				$r = 105;
				break;
			case 40:
				$r = 107;
				break;
			case 41:
				$r = 110;
				break;
			case 42:
				$r = 111;
				break;
			case 43:
				$r = 108;
				break;
			case 44:
				$r = 106;
				break;
			case 45:
				$r = 109;
				break;
			case 46:
				$r = 34;
				break;
			case 47:
				$r = 33;
				break;
			case 48:
				$r = 39;
				break;
			case 49:
				$r = 16;
				break;
			case 50:
				$r = 32;
				break;
			case 51:
				$r = 9;
				break;
			case 52:
				$r = 38;
				break;
			case 53:
				$r = 65;
				break;
			case 54:
				$r = 66;
				break;
			case 55:
				$r = 67;
				break;
			case 56:
				$r = 68;
				break;
			case 57:
				$r = 69;
				break;
			case 58:
				$r = 70;
				break;
			case 59:
				$r = 71;
				break;
			case 60:
				$r = 72;
				break;
			case 61:
				$r = 73;
				break;
			case 62:
				$r = 74;
				break;
			case 63:
				$r = 75;
				break;
			case 64:
				$r = 76;
				break;
			case 65:
				$r = 77;
				break;
			case 66:
				$r = 78;
				break;
			case 67:
				$r = 79;
				break;
			case 68:
				$r = 80;
				break;
			case 69:
				$r = 81;
				break;
			case 70:
				$r = 82;
				break;
			case 71:
				$r = 83;
				break;
			case 72:
				$r = 84;
				break;
			case 73:
				$r = 85;
				break;
			case 74:
				$r = 86;
				break;
			case 75:
				$r = 87;
				break;
			case 76:
				$r = 88;
				break;
			case 77:
				$r = 89;
				break;
			case 78:
				$r = 90;
				break;
			case 79:
				$r = 48;
				break;
			case 80:
				$r = 49;
				break;
			case 81:
				$r = 50;
				break;
			case 82:
				$r = 51;
				break;
			case 83:
				$r = 52;
				break;
			case 84:
				$r = 53;
				break;
			case 85:
				$r = 54;
				break;
			case 86:
				$r = 55;
				break;
			case 87:
				$r = 56;
				break;
			case 88:
				$r = 57;
				break;
			case 89:
				$r = 186;
				break;
			case 90:
				$r = 187;
				break;
			case 91:
				$r = 189;
				break;
			case 92:
				$r = 191;
				break;
			case 93:
				$r = 222;
				break;
			case 94:
				$r = 219;
				break;
			case 95:
				$r = 221;
				break;
			case 96:
				$r = 220;
				break;
			case 97:
				$r = 192;
				break;
			case 98:
				$r = 223;
				break;
			case 99:
				var p_value = $e[2];
				$r = Std["int"](p_value);
				break;
			}
			return $r;
		}(this));
	}
	,getKeyUpDuration: function(p_type,p_asTime,p_isPrevious) {
		if(p_isPrevious == null) p_isPrevious = false;
		if(p_asTime == null) p_asTime = true;
		if(p_type == null) return this._tools.BIG_NUMBER;
		var l_keyCode = this.getKeyCode(p_type);
		if(p_isPrevious) return p_asTime?this._keys[l_keyCode].timeUpPrevious:this._keys[l_keyCode].updatesUpPrevious;
		return p_asTime?this._keys[l_keyCode].timeUp:this._keys[l_keyCode].updatesUp;
	}
	,getKeyDownDuration: function(p_type,p_asTime,p_isPrevious) {
		if(p_isPrevious == null) p_isPrevious = false;
		if(p_asTime == null) p_asTime = true;
		if(p_type == null) return 0;
		var l_keyCode = this.getKeyCode(p_type);
		if(p_isPrevious) return p_asTime?this._keys[l_keyCode].timeDownPrevious:this._keys[l_keyCode].updatesDownPrevious;
		return p_asTime?this._keys[l_keyCode].timeDown:this._keys[l_keyCode].updatesDown;
	}
	,getIsKeyRelease: function(p_type) {
		if(p_type == null) return false;
		var l_keyCode = this.getKeyCode(p_type);
		return this._keys[l_keyCode].isUsed && this._keys[l_keyCode].updatesUp == 1;
	}
	,getIsKeyPress: function(p_type) {
		if(p_type == null) return false;
		var l_keyCode = this.getKeyCode(p_type);
		return this._keys[l_keyCode].updatesDown == 1;
	}
	,getIsKeyDown: function(p_type) {
		if(p_type == null) return false;
		var l_keyCode = this.getKeyCode(p_type);
		return this._keys[l_keyCode].isDown;
	}
	,_reset: function(p_event) {
		this._buffer = [];
		this._keys = [];
		var _g = 0;
		while(_g < 512) {
			var i = _g++;
			this._keys[i] = new awe6.core.drivers._AInputKeyboard._HelperKey(this._kernel);
		}
	}
	,_onUp: function(p_keyCode) {
		var l_current = this._keys[p_keyCode];
		l_current.isDown = false;
		l_current.timeDownPrevious = l_current.timeDown;
		l_current.updatesDownPrevious = l_current.updatesDown;
		l_current.updatesDown = 0;
		l_current.timeDown = 0;
	}
	,_onDown: function(p_keyCode) {
		var l_current = this._keys[p_keyCode];
		l_current.isUsed = true;
		l_current.isDown = true;
		l_current.timeUpPrevious = l_current.timeUp;
		l_current.updatesUpPrevious = l_current.updatesUp;
		l_current.updatesUp = 0;
		l_current.timeUp = 0;
	}
	,_addEvent: function(p_keyCodeValue,p_isDown) {
		this._buffer.push(new awe6.core.drivers._AInputKeyboard._HelperKeyEvent(p_keyCodeValue,p_isDown));
	}
	,_disposer: function() {
		this._keys = null;
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		var l_encounteredKeyCodes = new haxe.ds.StringMap();
		var l_nextBuffer = [];
		var _g = 0, _g1 = this._buffer;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var l_key = Std.string(i.keyCode);
			if(l_encounteredKeyCodes.exists(l_key)) {
				l_nextBuffer.push(i);
				continue;
			}
			if(i.isDown) {
				if(!this._keys[i.keyCode].isDown) {
					this._onDown(i.keyCode);
					l_encounteredKeyCodes.set(l_key,true);
				}
			} else if(this._keys[i.keyCode].isDown) {
				this._onUp(i.keyCode);
				l_encounteredKeyCodes.set(l_key,true);
			}
		}
		this._buffer = l_nextBuffer.slice();
		var _g = 0, _g1 = this._keys;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.isDown) i.updatesDown++; else i.updatesUp++;
			if(i.isDown) i.timeDown += p_deltaTime; else i.timeUp += p_deltaTime;
		}
	}
	,_driverInit: function() {
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this._driverInit();
		this._reset();
	}
	,__class__: awe6.core.drivers.AInputKeyboard
});
awe6.core.drivers._AInputKeyboard = {}
awe6.core.drivers._AInputKeyboard._HelperKey = function(p_kernel) {
	this.isDown = false;
	this.updatesDown = 0;
	this.updatesUp = p_kernel.tools.BIG_NUMBER;
	this.timeDown = 0;
	this.timeUp = p_kernel.tools.BIG_NUMBER;
	this.updatesDownPrevious = 0;
	this.updatesUpPrevious = p_kernel.tools.BIG_NUMBER;
	this.timeDownPrevious = 0;
	this.timeUpPrevious = p_kernel.tools.BIG_NUMBER;
};
$hxClasses["awe6.core.drivers._AInputKeyboard._HelperKey"] = awe6.core.drivers._AInputKeyboard._HelperKey;
awe6.core.drivers._AInputKeyboard._HelperKey.__name__ = ["awe6","core","drivers","_AInputKeyboard","_HelperKey"];
awe6.core.drivers._AInputKeyboard._HelperKey.prototype = {
	__class__: awe6.core.drivers._AInputKeyboard._HelperKey
}
awe6.core.drivers._AInputKeyboard._HelperKeyEvent = function(p_keyCode,p_isDown) {
	this.keyCode = p_keyCode;
	this.isDown = p_isDown;
};
$hxClasses["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = awe6.core.drivers._AInputKeyboard._HelperKeyEvent;
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.__name__ = ["awe6","core","drivers","_AInputKeyboard","_HelperKeyEvent"];
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.prototype = {
	__class__: awe6.core.drivers._AInputKeyboard._HelperKeyEvent
}
awe6.interfaces.IInputMouse = function() { }
$hxClasses["awe6.interfaces.IInputMouse"] = awe6.interfaces.IInputMouse;
awe6.interfaces.IInputMouse.__name__ = ["awe6","interfaces","IInputMouse"];
awe6.interfaces.IInputMouse.prototype = {
	__class__: awe6.interfaces.IInputMouse
}
awe6.core.drivers.AInputMouse = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.AInputMouse"] = awe6.core.drivers.AInputMouse;
awe6.core.drivers.AInputMouse.__name__ = ["awe6","core","drivers","AInputMouse"];
awe6.core.drivers.AInputMouse.__interfaces__ = [awe6.interfaces.IInputMouse];
awe6.core.drivers.AInputMouse.__super__ = awe6.core.Process;
awe6.core.drivers.AInputMouse.prototype = $extend(awe6.core.Process.prototype,{
	set_cursorType: function(p_value) {
		this.cursorType = p_value;
		return this.cursorType;
	}
	,set_isVisible: function(p_value) {
		this.isVisible = p_value;
		return this.isVisible;
	}
	,getButtonLastClickedY: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.clickY;
	}
	,getButtonLastClickedX: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.clickX;
	}
	,getButtonDragHeight: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.isDown?this.y - l_button.clickY:0;
	}
	,getButtonDragWidth: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.isDown?this.x - l_button.clickX:0;
	}
	,getButtonUpDuration: function(p_type,p_asTime,p_isPrevious) {
		if(p_isPrevious == null) p_isPrevious = false;
		if(p_asTime == null) p_asTime = true;
		var l_button = this._getButton(p_type);
		if(p_isPrevious) return p_asTime?l_button.timeUpPrevious:l_button.updatesUpPrevious;
		return p_asTime?l_button.timeUp:l_button.updatesUp;
	}
	,getButtonDownDuration: function(p_type,p_asTime,p_isPrevious) {
		if(p_isPrevious == null) p_isPrevious = false;
		if(p_asTime == null) p_asTime = true;
		var l_button = this._getButton(p_type);
		if(p_isPrevious) return p_asTime?l_button.timeDownPrevious:l_button.updatesDownPrevious;
		return p_asTime?l_button.timeDown:l_button.updatesDown;
	}
	,getIsButtonRelease: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.updatesUp == 1;
	}
	,getIsButtonPress: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.updatesDown == 1;
	}
	,getIsButtonDown: function(p_type) {
		var l_button = this._getButton(p_type);
		return l_button.isDown;
	}
	,getStillDuration: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		return p_asTime?this._stillDuration:this._stillUpdates;
	}
	,getIsButtonDrag: function(p_type,p_delay) {
		if(p_delay == null) p_delay = 100;
		var l_button = this._getButton(p_type);
		return l_button.isDown?l_button.timeDown > p_delay:false;
	}
	,getIsButtonDoubleClick: function(p_type,p_delay) {
		if(p_delay == null) p_delay = 100;
		var l_button = this._getButton(p_type);
		return l_button.isDown?l_button.timeUpPrevious <= p_delay:false;
	}
	,getDeltaScroll: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		var l_result = this._deltaScroll;
		if(p_asTime) l_result *= 1000 / this._deltaTimePrev;
		return Math.round(l_result);
	}
	,getSpeed: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		var l_dx = this.getDeltaX(p_asTime);
		var l_dy = this.getDeltaY(p_asTime);
		var l_result = Math.sqrt(l_dx * l_dx + l_dy * l_dy);
		return Math.round(l_result);
	}
	,getDeltaY: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		var l_result = this._deltaY;
		if(p_asTime) l_result *= 1000 / this._deltaTimePrev;
		return Math.round(l_result);
	}
	,getDeltaX: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		var l_result = this._deltaX;
		if(p_asTime) l_result *= 1000 / this._deltaTimePrev;
		return Math.round(l_result);
	}
	,_getButton: function(p_type) {
		if(p_type == null) p_type = awe6.interfaces.EMouseButton.LEFT;
		return (function($this) {
			var $r;
			switch( (p_type)[1] ) {
			case 0:
				$r = $this._buttonLeft;
				break;
			case 1:
				$r = $this._buttonMiddle;
				break;
			case 2:
				$r = $this._buttonRight;
				break;
			}
			return $r;
		}(this));
	}
	,_reset: function(p_event) {
		this._buffer = [];
		this._buttonLeft = new awe6.core.drivers._AInputMouse._HelperButton(this._kernel);
		this._buttonMiddle = new awe6.core.drivers._AInputMouse._HelperButton(this._kernel);
		this._buttonRight = new awe6.core.drivers._AInputMouse._HelperButton(this._kernel);
	}
	,_disposer: function() {
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_handleButton: function(p_type,p_isDown,p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		var l_button = this._getButton(p_type);
		if(p_isDown) {
			if(!l_button.isDown) {
				l_button.timeUpPrevious = l_button.timeUp;
				l_button.updatesUpPrevious = l_button.updatesUp;
				l_button.timeUp = l_button.updatesUp = 0;
				l_button.clickX = this.x;
				l_button.clickY = this.y;
			}
			l_button.timeDown += p_deltaTime;
			l_button.updatesDown++;
			l_button.isDown = true;
		} else {
			if(l_button.isDown) {
				l_button.timeDownPrevious = l_button.timeDown;
				l_button.updatesDownPrevious = l_button.updatesDown;
				l_button.timeDown = l_button.updatesDown = 0;
			}
			l_button.timeUp += p_deltaTime;
			l_button.updatesUp++;
			l_button.isDown = false;
		}
	}
	,_getPosition: function() {
		this.x = 0;
		this.y = 0;
	}
	,_isWithinBounds: function() {
		return true;
	}
	,_isRightDown: function() {
		return false;
	}
	,_isMiddleDown: function() {
		return false;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		this._deltaTimePrev = p_deltaTime;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		this._handleButton(awe6.interfaces.EMouseButton.LEFT,this._buffer.length > 0?this._buffer.shift():this._buttonLeft.isDown,p_deltaTime);
		this._handleButton(awe6.interfaces.EMouseButton.MIDDLE,this._isMiddleDown(),p_deltaTime);
		this._handleButton(awe6.interfaces.EMouseButton.RIGHT,this._isRightDown(),p_deltaTime);
		this._deltaScroll = this.scroll - this._scrollPrev;
		this._scrollPrev = this.scroll;
		this._xPrev = this.x;
		this._yPrev = this.y;
		this._getPosition();
		this._deltaX = this.x - this._xPrev;
		this._deltaY = this.y - this._yPrev;
		this.isMoving = this.x != this._xPrev || this.y != this._yPrev;
		if(this.isMoving) this._stillUpdates = this._stillDuration = 0; else {
			this._stillUpdates++;
			this._stillDuration += p_deltaTime;
		}
		this.relativeX = this.x / this._kernel.factory.width;
		this.relativeY = this.y / this._kernel.factory.height;
		this.relativeCentralisedX = (this.relativeX - .5) * 2;
		this.relativeCentralisedY = (this.relativeY - .5) * 2;
		this.isWithinBounds = this._isWithinBounds();
	}
	,_driverInit: function() {
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this._driverInit();
		this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0;
		this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0;
		this.isMoving = false;
		this._buffer = [];
		this._getPosition();
		this.isMoving = false;
		this.set_isVisible(true);
		this.scroll = 0;
		this.set_cursorType(awe6.interfaces.EMouseCursor.AUTO);
		this._scrollPrev = 0;
		this._stillUpdates = 0;
		this._stillDuration = 0;
		this._reset();
	}
	,__class__: awe6.core.drivers.AInputMouse
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_isVisible:"set_isVisible",set_cursorType:"set_cursorType"})
});
awe6.core.drivers._AInputMouse = {}
awe6.core.drivers._AInputMouse._HelperButton = function(p_kernel) {
	this.isDown = false;
	this.updatesDown = 0;
	this.updatesUp = p_kernel.tools.BIG_NUMBER;
	this.timeDown = 0;
	this.timeUp = p_kernel.tools.BIG_NUMBER;
	this.updatesDownPrevious = 0;
	this.updatesUpPrevious = p_kernel.tools.BIG_NUMBER;
	this.timeDownPrevious = 0;
	this.timeUpPrevious = p_kernel.tools.BIG_NUMBER;
};
$hxClasses["awe6.core.drivers._AInputMouse._HelperButton"] = awe6.core.drivers._AInputMouse._HelperButton;
awe6.core.drivers._AInputMouse._HelperButton.__name__ = ["awe6","core","drivers","_AInputMouse","_HelperButton"];
awe6.core.drivers._AInputMouse._HelperButton.prototype = {
	__class__: awe6.core.drivers._AInputMouse._HelperButton
}
awe6.interfaces.ILogger = function() { }
$hxClasses["awe6.interfaces.ILogger"] = awe6.interfaces.ILogger;
awe6.interfaces.ILogger.__name__ = ["awe6","interfaces","ILogger"];
awe6.interfaces.ILogger.prototype = {
	__class__: awe6.interfaces.ILogger
}
awe6.interfaces.IKernel = function() { }
$hxClasses["awe6.interfaces.IKernel"] = awe6.interfaces.IKernel;
awe6.interfaces.IKernel.__name__ = ["awe6","interfaces","IKernel"];
awe6.interfaces.IKernel.__interfaces__ = [awe6.interfaces.ILogger,awe6.interfaces.IPauseable];
awe6.interfaces.IKernel.prototype = {
	__class__: awe6.interfaces.IKernel
}
awe6.core.drivers.AKernel = function(p_factory,p_context) {
	this.factory = p_factory;
	this._context = p_context;
	this.tools = this._tools = new awe6.core.Tools(this);
	awe6.core.Process.call(this,this);
};
$hxClasses["awe6.core.drivers.AKernel"] = awe6.core.drivers.AKernel;
awe6.core.drivers.AKernel.__name__ = ["awe6","core","drivers","AKernel"];
awe6.core.drivers.AKernel.__interfaces__ = [awe6.interfaces.IKernel];
awe6.core.drivers.AKernel.__super__ = awe6.core.Process;
awe6.core.drivers.AKernel.prototype = $extend(awe6.core.Process.prototype,{
	set_session: function(p_value) {
		this.session = p_value;
		return this.get_session();
	}
	,get_session: function() {
		return this.session;
	}
	,_resumer: function() {
		awe6.core.Process.prototype._resumer.call(this);
		if(this.scenes.get_scene() != null) this.scenes.get_scene().resume();
	}
	,_pauser: function() {
		awe6.core.Process.prototype._pauser.call(this);
		if(this.scenes.get_scene() != null) this.scenes.get_scene().pause();
	}
	,_driverSetIsFullScreen: function(p_value) {
	}
	,set_isFullScreen: function(p_value) {
		if(!this.factory.isFullScreenOptionEnabled || Type.enumEq(this.factory.fullScreenType,awe6.interfaces.EFullScreen.DISABLED)) {
			this.isFullScreen = false;
			return this.isFullScreen;
		}
		this.isFullScreen = p_value;
		this._driverSetIsFullScreen(p_value);
		return this.isFullScreen;
	}
	,_driverSetIsEyeCandy: function(p_value) {
	}
	,set_isEyeCandy: function(p_value) {
		if(!this.factory.isEyeCandyOptionEnabled) {
			this.isEyeCandy = true;
			return this.isEyeCandy;
		}
		this.isEyeCandy = p_value;
		this._driverSetIsEyeCandy(p_value);
		return this.isEyeCandy;
	}
	,_totalReset: function() {
		if(!this._isPreloaded) return;
		this.get_session().deleteAllSessions();
		this.set_session(this.factory.createSession());
		this.scenes.setScene(this.factory.startingSceneType);
	}
	,_removeProcess: function(p_process) {
		if(p_process == null) return false;
		p_process.dispose();
		return this._processes.remove(p_process);
	}
	,_addProcess: function(p_process,p_isLast) {
		if(p_isLast == null) p_isLast = true;
		if(p_process == null) return;
		if(p_isLast) this._processes.add(p_process); else this._processes.push(p_process);
	}
	,getFramerate: function(p_asActual) {
		if(p_asActual == null) p_asActual = true;
		return p_asActual?this._helperFramerate.framerate:this.factory.targetFramerate;
	}
	,log: function(p_value) {
		if(this._logger != null) this._logger.log(p_value); else if(this.isDebug) console.log("LOG: " + Std.string(p_value));
	}
	,getConfig: function(p_id) {
		return this.factory.config.exists(p_id)?this.factory.config.get(p_id):null;
	}
	,_disposer: function() {
		var $it0 = this._processes.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			this._removeProcess(i);
		}
		if(js.Boot.__instanceof(this.factory,awe6.interfaces.IDisposable)) (js.Boot.__cast(this.factory , awe6.interfaces.IDisposable)).dispose();
		this.factory = null;
		this._view.dispose();
		this._view = null;
		this._driverDisposer();
		this.assets = this._assetManagerProcess = null;
		this.audio = this._audioManager = null;
		this.inputs = this._inputManager = null;
		this.scenes = this._sceneManager = null;
		this.messenger = this._messageManager = null;
		this.overlay = this._overlayProcess = null;
		this.tools = this._tools = null;
		this._logger = null;
		this._preloader = null;
		this.set_session(null);
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		this._helperFramerate.update();
		var l_deltaTime = this.factory.isFixedUpdates?1000 / this.factory.targetFramerate | 0:this._helperFramerate.timeInterval;
		awe6.core.Process.prototype._updater.call(this,l_deltaTime);
		var $it0 = this._processes.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			i.update(l_deltaTime);
		}
		this._view.update(l_deltaTime);
	}
	,onPreloaderComplete: function(p_preloader) {
		this._isPreloaded = true;
		this._removeProcess(this._preloader);
		this._preloader = null;
		this._logger = this.factory.createLogger();
		var l_assetManagerProcess = this.factory.createAssetManager();
		if(l_assetManagerProcess != this._assetManagerProcess) {
			this._removeProcess(this._assetManagerProcess);
			this.assets = this._assetManagerProcess = l_assetManagerProcess;
			this._addProcess(this._assetManagerProcess,false);
		}
		this.overlay = this._overlayProcess = this.factory.createOverlay();
		this._addProcess(this._overlayProcess,true);
		this._view.addChild(this._overlayProcess.get_view(),3);
		if(this.isDebug) {
			this._addProcess(this._profiler = new awe6.core.drivers.openfl.html5.Profiler(this));
			this._view.addChild(this._profiler.get_view(),this._tools.BIG_NUMBER);
		}
		this.scenes.setScene(this.factory.startingSceneType);
		this.overlay.flash();
	}
	,_driverDisposer: function() {
	}
	,_driverInit: function() {
	}
	,_driverGetIsLocal: function() {
		return false;
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this._view = new awe6.core.drivers.openfl.html5.View(this,this._context,0,this);
		this._processes = new List();
		this._helperFramerate = new awe6.core.drivers._AKernel._HelperFramerate(this.factory.targetFramerate);
		this._isPreloaded = false;
		this.isDebug = this.factory.isDebug;
		this.isLocal = this._driverGetIsLocal();
		this._driverInit();
		this.assets = this._assetManagerProcess = new awe6.core.AAssetManager(this._kernel);
		this.audio = this._audioManager = new awe6.core.drivers.openfl.html5.AudioManager(this._kernel);
		this.inputs = this._inputManager = new awe6.core.InputManager(this._kernel);
		this.scenes = this._sceneManager = new awe6.core.SceneManager(this._kernel);
		this.messenger = this._messageManager = new awe6.core.MessageManager(this._kernel);
		this._view.addChild(this._sceneManager.view,1);
		this._addProcess(this._assetManagerProcess);
		this._addProcess(this._inputManager);
		this._addProcess(this._sceneManager);
		this._addProcess(this._messageManager);
		this._addProcess(this._audioManager);
		this.set_isEyeCandy(true);
		this.set_isFullScreen(false);
		this.factory.onInitComplete(this);
		this.set_session(this.factory.createSession());
		this.get_session().reset();
		this._preloader = this.factory.createPreloader();
		this._addProcess(this._preloader);
		this._view.addChild(this._preloader.get_view(),2);
	}
	,__class__: awe6.core.drivers.AKernel
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_isEyeCandy:"set_isEyeCandy",set_isFullScreen:"set_isFullScreen",set_session:"set_session",get_session:"get_session"})
});
awe6.core.drivers._AKernel = {}
awe6.core.drivers._AKernel._HelperFramerate = function(p_framerate) {
	this.framerate = p_framerate;
	this._timeAtLastUpdate = haxe.Timer.stamp() * 1000 | 0;
};
$hxClasses["awe6.core.drivers._AKernel._HelperFramerate"] = awe6.core.drivers._AKernel._HelperFramerate;
awe6.core.drivers._AKernel._HelperFramerate.__name__ = ["awe6","core","drivers","_AKernel","_HelperFramerate"];
awe6.core.drivers._AKernel._HelperFramerate.prototype = {
	_timer: function() {
		return haxe.Timer.stamp() * 1000 | 0;
	}
	,update: function() {
		this.timeInterval = (haxe.Timer.stamp() * 1000 | 0) - this._timeAtLastUpdate;
		this.framerate = 1000 / this.timeInterval;
		this._timeAtLastUpdate = haxe.Timer.stamp() * 1000 | 0;
	}
	,__class__: awe6.core.drivers._AKernel._HelperFramerate
}
awe6.interfaces.IOverlay = function() { }
$hxClasses["awe6.interfaces.IOverlay"] = awe6.interfaces.IOverlay;
awe6.interfaces.IOverlay.__name__ = ["awe6","interfaces","IOverlay"];
awe6.interfaces.IOverlay.prototype = {
	__class__: awe6.interfaces.IOverlay
}
awe6.interfaces.IOverlayProcess = function() { }
$hxClasses["awe6.interfaces.IOverlayProcess"] = awe6.interfaces.IOverlayProcess;
awe6.interfaces.IOverlayProcess.__name__ = ["awe6","interfaces","IOverlayProcess"];
awe6.interfaces.IOverlayProcess.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IProcess,awe6.interfaces.IOverlay];
awe6.core.drivers.AOverlay = function(p_kernel,p_buttonWidth,p_buttonHeight,p_border,p_backUp,p_backOver,p_muteUp,p_muteOver,p_unmuteUp,p_unmuteOver,p_pauseUp,p_pauseOver,p_unpauseUp,p_unpauseOver,p_pauseBlur,p_pauseColor,p_pauseAlpha) {
	if(p_pauseAlpha == null) p_pauseAlpha = .35;
	if(p_pauseColor == null) p_pauseColor = 0;
	if(p_pauseBlur == null) p_pauseBlur = 8;
	if(p_buttonHeight == null) p_buttonHeight = 30.0;
	if(p_buttonWidth == null) p_buttonWidth = 30.0;
	if(p_border == null) p_border = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_backUp == null) p_backUp = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_backOver == null) p_backOver = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_muteUp == null) p_muteUp = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_muteOver == null) p_muteOver = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_unmuteUp == null) p_unmuteUp = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_unmuteOver == null) p_unmuteOver = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_pauseUp == null) p_pauseUp = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_pauseOver == null) p_pauseOver = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_unpauseUp == null) p_unpauseUp = new awe6.core.drivers.openfl.html5.View(p_kernel);
	if(p_unpauseOver == null) p_unpauseOver = new awe6.core.drivers.openfl.html5.View(p_kernel);
	this._borderView = p_border;
	this._buttonBack = new awe6.core.BasicButton(p_kernel,p_backUp,p_backOver,p_buttonWidth,p_buttonHeight);
	this._buttonMute = new awe6.core.BasicButton(p_kernel,p_muteUp,p_muteOver,p_buttonWidth,p_buttonHeight);
	this._buttonUnmute = new awe6.core.BasicButton(p_kernel,p_unmuteUp,p_unmuteOver,p_buttonWidth,p_buttonHeight);
	this._buttonPause = new awe6.core.BasicButton(p_kernel,p_pauseUp,p_pauseOver,p_buttonWidth,p_buttonHeight);
	this._buttonUnpause = new awe6.core.BasicButton(p_kernel,p_unpauseUp,p_unpauseOver,p_buttonWidth,p_buttonHeight);
	this._pauseBlur = p_pauseBlur;
	this._pauseColor = p_pauseColor;
	this._pauseAlpha = p_pauseAlpha;
	this._context = new flash.display.Sprite();
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["awe6.core.drivers.AOverlay"] = awe6.core.drivers.AOverlay;
awe6.core.drivers.AOverlay.__name__ = ["awe6","core","drivers","AOverlay"];
awe6.core.drivers.AOverlay.__interfaces__ = [awe6.interfaces.IOverlayProcess];
awe6.core.drivers.AOverlay.__super__ = awe6.core.Entity;
awe6.core.drivers.AOverlay.prototype = $extend(awe6.core.Entity.prototype,{
	set_pauseEntity: function(p_value) {
		if(this.get_pauseEntity() != null) this.get_pauseEntity().get_view().remove();
		this.pauseEntity = p_value;
		this._pauseView.addChild(this.get_pauseEntity().get_view());
		return this.get_pauseEntity();
	}
	,get_pauseEntity: function() {
		return this.pauseEntity;
	}
	,_drawPause: function(p_isVisible) {
		if(p_isVisible == null) p_isVisible = true;
		this._pauseView.set_isVisible(p_isVisible);
	}
	,activateButton: function(p_type) {
		var $e = (p_type);
		switch( $e[1] ) {
		case 0:
			if(this._buttonBack.get_view().get_isInViewStack()) {
				if(!this._kernel.isActive) this.activateButton(awe6.interfaces.EOverlayButton.UNPAUSE);
				this._drawPause(false);
				this._kernel.resume();
				this._kernel.scenes.back();
			}
			break;
		case 1:
			if(this._buttonMute.get_view().get_isInViewStack()) {
				this.showButton(awe6.interfaces.EOverlayButton.MUTE,false);
				this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,true);
				this._kernel.audio.set_isMute(true);
			}
			break;
		case 2:
			if(this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack()) {
				this.showButton(awe6.interfaces.EOverlayButton.MUTE,true);
				this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,false);
				this._kernel.audio.set_isMute(false);
			}
			break;
		case 3:
			if(this._buttonPause.get_view().get_isInViewStack()) {
				this._kernel.pause();
				this._drawPause(true);
				this._wasMute = this._kernel.audio.isMute;
				this.showButton(awe6.interfaces.EOverlayButton.PAUSE,false);
				this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,true);
				this.activateButton(awe6.interfaces.EOverlayButton.MUTE);
			}
			break;
		case 4:
			if(this._buttonUnpause.get_view().get_isInViewStack()) {
				this.showButton(awe6.interfaces.EOverlayButton.PAUSE,true);
				this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,false);
				this.activateButton(this._wasMute?awe6.interfaces.EOverlayButton.MUTE:awe6.interfaces.EOverlayButton.UNMUTE);
				this._kernel.resume();
				this._drawPause(false);
			}
			break;
		case 5:
			var p_value = $e[2];
			p_value;
			null;
			break;
		}
	}
	,flash: function(p_duration,p_asTime,p_startingAlpha,p_color) {
		if(p_color == null) p_color = 16777215;
		if(p_startingAlpha == null) p_startingAlpha = 1;
		if(p_asTime == null) p_asTime = true;
		p_duration = p_duration != null?p_duration:p_asTime?500:this._kernel.factory.targetFramerate * .5;
		this._flashDuration = this._flashStartingDuration = p_duration;
		this._flashAsTime = p_asTime;
		this._flashAlpha = this._flashStartingAlpha = p_startingAlpha > 1?1:p_startingAlpha < 0?0:p_startingAlpha;
	}
	,hideButtons: function() {
		this.showButton(awe6.interfaces.EOverlayButton.BACK,false);
		this.showButton(awe6.interfaces.EOverlayButton.MUTE,false);
		this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,false);
		this.showButton(awe6.interfaces.EOverlayButton.PAUSE,false);
		this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,false);
	}
	,showProgress: function(p_progress,p_message) {
		this._progressView.set_isVisible(p_progress < 1);
	}
	,positionButton: function(p_type,p_x,p_y,p_width,p_height) {
		var l_button = this._getButton(p_type);
		if(l_button == null) return;
		l_button.set_x(p_x);
		l_button.set_y(p_y);
		if(p_width != null) l_button.set_width(p_width);
		if(p_height != null) l_button.set_height(p_height);
	}
	,showButton: function(p_type,p_isVisible) {
		if(p_isVisible == null) p_isVisible = true;
		var l_button = this._getButton(p_type);
		if(l_button == null) return;
		if(p_isVisible) this.addEntity(l_button,null,true); else this.removeEntity(l_button,null,true);
	}
	,_getButton: function(p_type) {
		return (function($this) {
			var $r;
			var $e = (p_type);
			switch( $e[1] ) {
			case 0:
				$r = $this._buttonBack;
				break;
			case 1:
				$r = $this._buttonMute;
				break;
			case 2:
				$r = $this._buttonUnmute;
				break;
			case 3:
				$r = $this._buttonPause;
				break;
			case 4:
				$r = $this._buttonUnpause;
				break;
			case 5:
				var p_value = $e[2];
				$r = (function($this) {
					var $r;
					p_value;
					$r = null;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,_disposer: function() {
		if(this.get_pauseEntity() != null) this.get_pauseEntity().dispose();
		this.get_view().dispose();
		awe6.core.Entity.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		if(this._flashDuration > 0) {
			this._flashDuration -= this._flashAsTime?p_deltaTime:1;
			this._flashAlpha = this._tools.limit(this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration),0,1);
		}
		this._flashView.set_isVisible(this._flashAlpha > 0);
		if(this._kernel.factory.keyBack != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack)) this.activateButton(this._kernel.isActive?awe6.interfaces.EOverlayButton.BACK:awe6.interfaces.EOverlayButton.UNPAUSE);
		if(this._kernel.factory.keyPause != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause)) this.activateButton(this._kernel.isActive?awe6.interfaces.EOverlayButton.PAUSE:awe6.interfaces.EOverlayButton.UNPAUSE);
		if(this._kernel.factory.keyMute != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute)) this.activateButton(this._kernel.audio.isMute?awe6.interfaces.EOverlayButton.UNMUTE:awe6.interfaces.EOverlayButton.MUTE);
		if(this.get_pauseEntity() != null && !this._kernel.isActive) {
			this.get_pauseEntity().update(p_deltaTime);
			this._pauseView.update(p_deltaTime);
		}
	}
	,_driverInit: function() {
		this._progressContext = new flash.display.Sprite();
		this._pauseContext = new flash.display.Sprite();
		this._flashContext = new flash.display.Sprite();
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		this.get_view().addChild(this._borderView,4);
		this._wasMute = this._kernel.audio.isMute;
		this._driverInit();
		this._progressView = new awe6.core.drivers.openfl.html5.View(this._kernel,this._progressContext);
		this._progressView.set_isVisible(false);
		this._pauseView = new awe6.core.drivers.openfl.html5.View(this._kernel,this._pauseContext);
		this._pauseView.set_isVisible(false);
		this._flashView = new awe6.core.drivers.openfl.html5.View(this._kernel,this._flashContext);
		this._flashView.set_isVisible(false);
		this._flashStartingAlpha = 1;
		this._flashAsTime = true;
		this._flashDuration = this._flashStartingDuration = 100;
		this._buttonBack.onClickCallback = (function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.BACK);
		this._buttonMute.onClickCallback = (function(f1,a11) {
			return function() {
				return f1(a11);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.MUTE);
		this._buttonPause.onClickCallback = (function(f2,a12) {
			return function() {
				return f2(a12);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.PAUSE);
		this._buttonUnmute.onClickCallback = (function(f3,a13) {
			return function() {
				return f3(a13);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.UNMUTE);
		this._buttonUnpause.onClickCallback = (function(f4,a14) {
			return function() {
				return f4(a14);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.UNPAUSE);
		this.get_view().addChild(this._flashView,1);
		this.get_view().addChild(this._pauseView,2);
		this.get_view().addChild(this._progressView,3);
		this.addEntity(this._buttonBack,null,true,21);
		this.addEntity(this._buttonUnmute,null,true,22);
		this.addEntity(this._buttonMute,null,true,23);
		this.addEntity(this._buttonUnpause,null,true,24);
		this.addEntity(this._buttonPause,null,true,25);
		var l_height = this._buttonBack.height;
		var l_width = this._buttonBack.width;
		var l_x = this._kernel.factory.width - l_width * 4;
		var l_y = l_height;
		this.positionButton(awe6.interfaces.EOverlayButton.BACK,l_x,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.MUTE,l_x += l_width,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.UNMUTE,l_x,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.PAUSE,l_x += l_width,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.UNPAUSE,l_x,l_y);
	}
	,__class__: awe6.core.drivers.AOverlay
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{set_pauseEntity:"set_pauseEntity",get_pauseEntity:"get_pauseEntity"})
});
awe6.interfaces.IProgress = function() { }
$hxClasses["awe6.interfaces.IProgress"] = awe6.interfaces.IProgress;
awe6.interfaces.IProgress.__name__ = ["awe6","interfaces","IProgress"];
awe6.interfaces.IProgress.prototype = {
	__class__: awe6.interfaces.IProgress
}
awe6.interfaces.IPreloader = function() { }
$hxClasses["awe6.interfaces.IPreloader"] = awe6.interfaces.IPreloader;
awe6.interfaces.IPreloader.__name__ = ["awe6","interfaces","IPreloader"];
awe6.interfaces.IPreloader.__interfaces__ = [awe6.interfaces.IProgress,awe6.interfaces.IViewable,awe6.interfaces.IProcess];
awe6.core.drivers.APreloader = function(p_kernel,p_assets,p_isDecached) {
	if(p_isDecached == null) p_isDecached = false;
	this._assets = p_assets;
	this._isDecached = p_isDecached;
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.APreloader"] = awe6.core.drivers.APreloader;
awe6.core.drivers.APreloader.__name__ = ["awe6","core","drivers","APreloader"];
awe6.core.drivers.APreloader.__interfaces__ = [awe6.interfaces.IPreloader];
awe6.core.drivers.APreloader.__super__ = awe6.core.Process;
awe6.core.drivers.APreloader.prototype = $extend(awe6.core.Process.prototype,{
	get_progress: function() {
		return this.progress;
	}
	,get_view: function() {
		return this.view;
	}
	,_driverDisposer: function() {
	}
	,_disposer: function() {
		this.get_view().dispose();
		this._driverDisposer();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this._assets.length == 0) this._kernel.onPreloaderComplete(this);
		this.get_view().set_isVisible(this._age > 100);
	}
	,_driverLoad: function(p_url) {
	}
	,_next: function() {
		this._currentAsset++;
		if(this._currentAsset > this._assets.length) {
			if(!this._isComplete) {
				haxe.Timer.delay((function(f,a1) {
					return function() {
						return f(a1);
					};
				})(($_=this._kernel,$bind($_,$_.onPreloaderComplete)),this),100);
				this._isComplete = true;
			}
			return;
		} else this._driverLoad(this._assets[this._currentAsset - 1]);
		this._currentProgress = 0;
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.progress = 0;
		if(this.get_view() == null) this.view = new awe6.core.drivers.openfl.html5.View(this._kernel);
		this._encrypter = this._tools;
		this._currentProgress = 0;
		this._currentAsset = 0;
		this._isComplete = false;
		if(this._assets.length > 0) this._next();
	}
	,__class__: awe6.core.drivers.APreloader
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{get_view:"get_view",get_progress:"get_progress"})
});
awe6.core.drivers.AProfiler = function(p_kernel) {
	this._context = new flash.display.Sprite();
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["awe6.core.drivers.AProfiler"] = awe6.core.drivers.AProfiler;
awe6.core.drivers.AProfiler.__name__ = ["awe6","core","drivers","AProfiler"];
awe6.core.drivers.AProfiler.__super__ = awe6.core.Entity;
awe6.core.drivers.AProfiler.prototype = $extend(awe6.core.Entity.prototype,{
	_driverUpdate: function() {
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		if(this._age < this._agePrev + 250) return;
		this._agePrev = this._age;
		this._driverUpdate();
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		this._marginHeight = 25;
		this._marginColor = 128;
		this._backgroundColor = -2147483520;
		this._fpsColor = 16777215;
		this._memoryColor = 16744448;
		this._fpsLabel = "FPS";
		this._memoryLabel = "MBs";
		this._width = 60;
		this._height = 50;
		this._agePrev = 0;
	}
	,__class__: awe6.core.drivers.AProfiler
});
awe6.interfaces.ISceneTransition = function() { }
$hxClasses["awe6.interfaces.ISceneTransition"] = awe6.interfaces.ISceneTransition;
awe6.interfaces.ISceneTransition.__name__ = ["awe6","interfaces","ISceneTransition"];
awe6.interfaces.ISceneTransition.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IProgress,awe6.interfaces.IProcess];
awe6.interfaces.ISceneTransition.prototype = {
	__class__: awe6.interfaces.ISceneTransition
}
awe6.core.drivers.ASceneTransition = function(p_kernel,p_duration) {
	if(p_duration == null) p_duration = 500;
	this._duration = p_duration;
	this._context = new flash.display.Sprite();
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["awe6.core.drivers.ASceneTransition"] = awe6.core.drivers.ASceneTransition;
awe6.core.drivers.ASceneTransition.__name__ = ["awe6","core","drivers","ASceneTransition"];
awe6.core.drivers.ASceneTransition.__interfaces__ = [awe6.interfaces.ISceneTransition];
awe6.core.drivers.ASceneTransition.__super__ = awe6.core.Entity;
awe6.core.drivers.ASceneTransition.prototype = $extend(awe6.core.Entity.prototype,{
	get_progress: function() {
		return this._tools.limit(this._age / this._duration,0,1);
	}
	,getDuration: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		return p_asTime?this._duration:this._duration / (1000 / this._kernel.getFramerate()) | 0;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		if(this._age > this._duration) {
			if(this.isDisposed) null; else {
				this.isDisposed = true;
				this.set_isActive(false);
				this._disposer();
				null;
			}
		}
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
	}
	,__class__: awe6.core.drivers.ASceneTransition
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{get_progress:"get_progress"})
});
awe6.interfaces.ISession = function() { }
$hxClasses["awe6.interfaces.ISession"] = awe6.interfaces.ISession;
awe6.interfaces.ISession.__name__ = ["awe6","interfaces","ISession"];
awe6.interfaces.ISession.prototype = {
	__class__: awe6.interfaces.ISession
}
awe6.core.drivers.ASession = function(p_kernel,p_id) {
	if(p_id == null) p_id = "";
	this._kernel = p_kernel;
	if(p_id == "") p_id = "DEBUG_AWE6";
	this.id = p_id;
	this._tools = this._kernel.tools;
	this._version = 1;
	this._init();
};
$hxClasses["awe6.core.drivers.ASession"] = awe6.core.drivers.ASession;
awe6.core.drivers.ASession.__name__ = ["awe6","core","drivers","ASession"];
awe6.core.drivers.ASession.__interfaces__ = [awe6.interfaces.ISession];
awe6.core.drivers.ASession.prototype = {
	get_isTester: function() {
		return this._kernel.isDebug || this.id == "DEBUG_AWE6";
	}
	,toString: function() {
		return this.id + ": " + Std.string(this._data);
	}
	,deleteAllSessions: function() {
		this._driverReset();
	}
	,getSessions: function(p_suggestions) {
		var l_ids = this.getSessionIds(p_suggestions);
		var l_result = new Array();
		var _g = 0;
		while(_g < l_ids.length) {
			var i = l_ids[_g];
			++_g;
			l_result.push(Type.createInstance(Type.getClass(this),[this._kernel,i]));
		}
		return l_result;
	}
	,getSessionIds: function(p_suggestions) {
		var l_result = Reflect.fields(this._savedData);
		HxOverrides.remove(l_result,"_____VERSION");
		HxOverrides.remove(l_result,"DEBUG_AWE6");
		if(p_suggestions != null) {
			var l_desiredLength = p_suggestions.length;
			var _g = 0;
			while(_g < l_result.length) {
				var i = l_result[_g];
				++_g;
				HxOverrides.remove(p_suggestions,i);
			}
			while(l_result.length < l_desiredLength) l_result.push(p_suggestions.shift());
		}
		l_result.sort(($_=this._tools,$bind($_,$_.sortByString)));
		return l_result;
	}
	,getPercentageComplete: function() {
		return 0;
	}
	,save: function() {
		this.saveCount++;
		this._setter();
		this._savedData._____VERSION = this._version;
		this._savedData[this.id] = this._data;
		this._driverSave();
	}
	,'delete': function() {
		Reflect.deleteField(this._savedData,this.id);
	}
	,reset: function(p_isSaved) {
		if(p_isSaved == null) p_isSaved = false;
		this._data = { };
		this._resetter();
		this._setter();
		if(p_isSaved) {
			this.saveCount++;
			this._setter();
			this._savedData._____VERSION = this._version;
			this._savedData[this.id] = this._data;
			this._driverSave();
		}
	}
	,clone: function(p_newId) {
		this._setter();
		this._savedData[p_newId] = this._data;
		return Type.createInstance(Type.getClass(this),[this._kernel,p_newId]);
	}
	,_resetter: function() {
		this.loadCount = 0;
		this.saveCount = 0;
	}
	,_setter: function() {
		this._data.loadCount = this.loadCount;
		this._data.saveCount = this.saveCount;
	}
	,_getter: function() {
		this.loadCount = this._data.loadCount;
		this.saveCount = this._data.saveCount;
	}
	,_driverReset: function() {
		this._savedData = { };
	}
	,_driverSave: function() {
	}
	,_driverLoad: function() {
		this._savedData = { };
	}
	,_init: function() {
		this._driverLoad();
		var l_version = Reflect.field(this._savedData,"_____VERSION");
		if(l_version != this._version) this._driverReset();
		var l_isExistingSession = Reflect.field(this._savedData,this.id) != null;
		this._data = { };
		this._resetter();
		this._setter();
		if(l_isExistingSession) {
			this._data = Reflect.field(this._savedData,this.id);
			this._getter();
			this.loadCount++;
		}
	}
	,__class__: awe6.core.drivers.ASession
	,__properties__: {get_isTester:"get_isTester"}
}
awe6.interfaces.IPriority = function() { }
$hxClasses["awe6.interfaces.IPriority"] = awe6.interfaces.IPriority;
awe6.interfaces.IPriority.__name__ = ["awe6","interfaces","IPriority"];
awe6.interfaces.IPriority.prototype = {
	__class__: awe6.interfaces.IPriority
}
awe6.interfaces.IView = function() { }
$hxClasses["awe6.interfaces.IView"] = awe6.interfaces.IView;
awe6.interfaces.IView.__name__ = ["awe6","interfaces","IView"];
awe6.interfaces.IView.__interfaces__ = [awe6.interfaces.IUpdateable,awe6.interfaces.IDisposable,awe6.interfaces.IPositionable,awe6.interfaces.IPriority];
awe6.interfaces.IView.prototype = {
	__class__: awe6.interfaces.IView
}
awe6.core.drivers.AView = function(p_kernel,p_context,p_priority,p_owner) {
	if(p_priority == null) p_priority = 0;
	this.context = p_context;
	this.set_priority(p_priority);
	this.owner = p_owner;
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.AView"] = awe6.core.drivers.AView;
awe6.core.drivers.AView.__name__ = ["awe6","core","drivers","AView"];
awe6.core.drivers.AView.__interfaces__ = [awe6.interfaces.IView];
awe6.core.drivers.AView.__super__ = awe6.core.Process;
awe6.core.drivers.AView.prototype = $extend(awe6.core.Process.prototype,{
	setPosition: function(p_x,p_y) {
		this.set_x(p_x);
		this.set_y(p_y);
	}
	,set_y: function(p_value) {
		this.y = p_value;
		this.globalY = this.get_parent() == null?this.y:this.y + this.get_parent().globalY;
		return this.y;
	}
	,set_x: function(p_value) {
		this.x = p_value;
		this.globalX = this.get_parent() == null?this.x:this.x + this.get_parent().globalX;
		return this.x;
	}
	,get_isInViewStack: function() {
		if(!this.isVisible) return false;
		if(this.owner == this._kernel) return true;
		if(this.get_parent() == null) return false;
		return this.get_parent().get_isInViewStack();
	}
	,get_parent: function() {
		return this.parent;
	}
	,set_isVisible: function(p_value) {
		if(p_value == this.isVisible) return this.isVisible;
		this.isVisible = p_value;
		if(js.Boot.__instanceof(this.get_parent(),awe6.core.drivers.AView)) {
			var l_parent = this.get_parent();
			if(l_parent != null) l_parent._draw();
		}
		return this.isVisible;
	}
	,set_priority: function(p_value) {
		if(p_value == this.get_priority()) return this.get_priority();
		this.priority = p_value;
		if(js.Boot.__instanceof(this.get_parent(),awe6.core.drivers.AView)) {
			var l_parent = this.get_parent();
			if(l_parent != null) l_parent._isDirty = true;
		}
		return this.get_priority();
	}
	,get_priority: function() {
		return this.priority;
	}
	,_setParent: function(p_parent) {
		this.parent = p_parent;
	}
	,_driverDraw: function() {
	}
	,_draw: function() {
		if(this.isDisposed) return;
		this._children.sort(($_=this._tools,$bind($_,$_.sortByPriority)));
		this._driverDraw();
		this._isDirty = false;
	}
	,_driverDisposer: function() {
	}
	,_disposer: function() {
		this.remove();
		this._driverDisposer();
		this.clear();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(!i.isActive || i.isDisposed) null; else {
				i._age += p_deltaTime;
				i._updates++;
				i._updater(p_deltaTime);
				null;
			}
		}
		if(this._isDirty) this._draw();
		this.globalX = this.get_parent() == null?this.x:this.x + this.get_parent().globalX;
		this.globalY = this.get_parent() == null?this.y:this.y + this.get_parent().globalY;
	}
	,clear: function() {
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			this.removeChild(i);
		}
	}
	,remove: function() {
		if(this.get_parent() != null) this.get_parent().removeChild(this);
	}
	,removeChild: function(p_child) {
		if(this.isDisposed || p_child == null) return;
		if(js.Boot.__instanceof(p_child,awe6.core.drivers.AView)) {
			var l_child = p_child;
			if(l_child.get_parent() != this) return;
			HxOverrides.remove(this._children,l_child);
			l_child._setParent(null);
		}
		this._isDirty = true;
	}
	,addChild: function(p_child,p_priority) {
		if(p_priority == null) p_priority = 0;
		if(this.isDisposed || p_child == null) return null;
		if(p_child.get_parent() != this) {
			p_child.remove();
			if(js.Boot.__instanceof(p_child,awe6.core.drivers.AView)) {
				var l_child = p_child;
				this._children.push(l_child);
				l_child._setParent(this);
			}
		}
		if(p_priority != 0) p_child.set_priority(p_priority);
		this._isDirty = true;
		return p_child;
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.globalX = 0;
		this.globalY = 0;
		this.set_x(0);
		this.set_y(0);
		this.set_isVisible(true);
		this._isDirty = true;
		this._children = new Array();
	}
	,__class__: awe6.core.drivers.AView
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_priority:"set_priority",get_priority:"get_priority",set_x:"set_x",set_y:"set_y",set_isVisible:"set_isVisible",get_isInViewStack:"get_isInViewStack",get_parent:"get_parent"})
});
awe6.core.drivers.openfl = {}
awe6.core.drivers.openfl.html5 = {}
awe6.core.drivers.openfl.html5.AudioManager = function(p_kernel) {
	awe6.core.drivers.AAudioManager.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.openfl.html5.AudioManager"] = awe6.core.drivers.openfl.html5.AudioManager;
awe6.core.drivers.openfl.html5.AudioManager.__name__ = ["awe6","core","drivers","openfl","html5","AudioManager"];
awe6.core.drivers.openfl.html5.AudioManager.__super__ = awe6.core.drivers.AAudioManager;
awe6.core.drivers.openfl.html5.AudioManager.prototype = $extend(awe6.core.drivers.AAudioManager.prototype,{
	_driverSetIsMute: function(p_value) {
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var l_sound = i;
			if(l_sound.getSoundChannel() == null) continue;
			try {
				l_sound.getSoundChannel().nmeAudio.muted = p_value;
			} catch( p_error ) {
				try {
					l_sound.getSoundChannel().component.muted = p_value;
				} catch( p_error1 ) {
				}
			}
		}
	}
	,_driverSoundFactory: function(p_id,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback) {
		if(p_pan == null) p_pan = 0;
		if(p_volume == null) p_volume = 1;
		if(p_startTime == null) p_startTime = 0;
		if(p_loops == null) p_loops = 1;
		return new awe6.core.drivers.openfl.html5._HelperSound(this._kernel,p_id,this._packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback);
	}
	,__class__: awe6.core.drivers.openfl.html5.AudioManager
});
awe6.core.drivers.openfl.html5._HelperSound = function(p_kernel,p_id,p_packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback) {
	if(p_pan == null) p_pan = 0;
	if(p_volume == null) p_volume = 1;
	if(p_startTime == null) p_startTime = 0;
	if(p_loops == null) p_loops = 1;
	awe6.core.drivers._AHelperSound.call(this,p_kernel,p_id,p_packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback);
};
$hxClasses["awe6.core.drivers.openfl.html5._HelperSound"] = awe6.core.drivers.openfl.html5._HelperSound;
awe6.core.drivers.openfl.html5._HelperSound.__name__ = ["awe6","core","drivers","openfl","html5","_HelperSound"];
awe6.core.drivers.openfl.html5._HelperSound.__super__ = awe6.core.drivers._AHelperSound;
awe6.core.drivers.openfl.html5._HelperSound.prototype = $extend(awe6.core.drivers._AHelperSound.prototype,{
	getSoundChannel: function() {
		return this._soundChannel;
	}
	,_driverDisposer: function() {
		if(this._soundChannel != null) {
			this.stop();
			this._soundChannel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this._onSoundComplete));
		}
	}
	,_onSoundComplete: function(p_event) {
		if(this._onCompleteCallback != null) this._onCompleteCallback.apply(this,[]);
		this.dispose();
	}
	,_driverStop: function() {
		if(this._soundChannel == null) return;
		this._soundChannel.stop();
	}
	,_driverTransform: function(p_asRelative) {
		if(p_asRelative == null) p_asRelative = false;
		if(this._soundChannel == null) return;
		if(p_asRelative) {
			this._volume *= this._soundChannel.soundTransform.volume;
			this._pan *= this._soundChannel.soundTransform.pan;
		}
		var l_soundTransform = new flash.media.SoundTransform(this._volume,this._pan);
		l_soundTransform.volume = this._volume;
		l_soundTransform.pan = this._pan;
		this._soundChannel.set_soundTransform(l_soundTransform);
	}
	,_driverInit: function() {
		this._sound = this._kernel.assets.getAsset(this.id,this._packageId);
		if(this._sound == null) return this.dispose();
		this._soundChannel = this._sound.play(this._startTime,this._loops);
		if(this._soundChannel == null) return this.dispose();
		try {
			this._soundChannel.nmeAudio.muted = this._kernel.audio.isMute;
		} catch( p_error ) {
			try {
				this._soundChannel.component.muted = this._kernel.audio.isMute;
			} catch( p_error1 ) {
			}
		}
		this._soundChannel.addEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this._onSoundComplete));
		this._driverTransform();
		return;
	}
	,__class__: awe6.core.drivers.openfl.html5._HelperSound
});
awe6.core.drivers.openfl.html5.Factory = function(p_context,p_isDebug,p_config) {
	awe6.core.drivers.AFactory.call(this,p_context,p_isDebug,p_config);
};
$hxClasses["awe6.core.drivers.openfl.html5.Factory"] = awe6.core.drivers.openfl.html5.Factory;
awe6.core.drivers.openfl.html5.Factory.__name__ = ["awe6","core","drivers","openfl","html5","Factory"];
awe6.core.drivers.openfl.html5.Factory.__super__ = awe6.core.drivers.AFactory;
awe6.core.drivers.openfl.html5.Factory.prototype = $extend(awe6.core.drivers.AFactory.prototype,{
	_driverDisposer: function() {
		if(this._context.parent != null) this._context.parent.removeChild(this._context);
	}
	,_parseXml: function(p_data) {
		this._traverseElements(Xml.parse(p_data).firstElement().elements(),"");
	}
	,_driverInit: function() {
		var l_context = new flash.display.Sprite();
		this._context.addChild(l_context);
		this._context = l_context;
		if(this._config != "") this._parseXml(this._config);
		this._launchKernel();
	}
	,__class__: awe6.core.drivers.openfl.html5.Factory
});
awe6.core.drivers.openfl.html5.InputKeyboard = function(p_kernel) {
	awe6.core.drivers.AInputKeyboard.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.openfl.html5.InputKeyboard"] = awe6.core.drivers.openfl.html5.InputKeyboard;
awe6.core.drivers.openfl.html5.InputKeyboard.__name__ = ["awe6","core","drivers","openfl","html5","InputKeyboard"];
awe6.core.drivers.openfl.html5.InputKeyboard.__super__ = awe6.core.drivers.AInputKeyboard;
awe6.core.drivers.openfl.html5.InputKeyboard.prototype = $extend(awe6.core.drivers.AInputKeyboard.prototype,{
	_onKeyUp: function(p_event) {
		if(!this.isActive) return;
		this._addEvent(p_event.keyCode,false);
		return;
	}
	,_onKeyDown: function(p_event) {
		if(!this.isActive) return;
		this._addEvent(p_event.keyCode,true);
		return;
	}
	,_disposer: function() {
		this._stage.removeEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this._onKeyDown));
		this._stage.removeEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this._onKeyUp));
		this._stage.removeEventListener(flash.events.Event.DEACTIVATE,$bind(this,this._reset));
		awe6.core.drivers.AInputKeyboard.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		if(this._stage.get_focus() == null || this._stage.get_focus().get_stage() == null) this._stage.set_focus(this._stage);
		awe6.core.drivers.AInputKeyboard.prototype._updater.call(this,p_deltaTime);
	}
	,_driverInit: function() {
		this._stage = flash.Lib.get_current().get_stage();
		this._stage.addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this._onKeyDown));
		this._stage.addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this._onKeyUp));
		this._stage.addEventListener(flash.events.Event.DEACTIVATE,$bind(this,this._reset));
	}
	,__class__: awe6.core.drivers.openfl.html5.InputKeyboard
});
awe6.core.drivers.openfl.html5.InputMouse = function(p_kernel) {
	awe6.core.drivers.AInputMouse.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.openfl.html5.InputMouse"] = awe6.core.drivers.openfl.html5.InputMouse;
awe6.core.drivers.openfl.html5.InputMouse.__name__ = ["awe6","core","drivers","openfl","html5","InputMouse"];
awe6.core.drivers.openfl.html5.InputMouse.__super__ = awe6.core.drivers.AInputMouse;
awe6.core.drivers.openfl.html5.InputMouse.prototype = $extend(awe6.core.drivers.AInputMouse.prototype,{
	set_cursorType: function(p_value) {
		return awe6.core.drivers.AInputMouse.prototype.set_cursorType.call(this,p_value);
	}
	,set_isVisible: function(p_value) {
		if(p_value) flash.ui.Mouse.show(); else flash.ui.Mouse.hide();
		return awe6.core.drivers.AInputMouse.prototype.set_isVisible.call(this,p_value);
	}
	,_onMouseWheel: function(p_event) {
		if(!this.isActive) return;
		this.scroll += p_event.delta;
		console.log(this.scroll);
	}
	,_onMouseUp: function(p_event) {
		if(!this.isActive) return;
		this._buffer.push(false);
	}
	,_onMouseDown: function(p_event) {
		if(!this.isActive) return;
		this._buffer.push(true);
	}
	,_getPosition: function() {
		var l_x = this._tools.limit(this._stage.get_mouseX(),0,this._kernel.factory.width) | 0;
		var l_y = this._tools.limit(this._stage.get_mouseY(),0,this._kernel.factory.height) | 0;
		this.x = l_x == this._kernel.factory.width?this._xPrev:l_x;
		this.y = l_y == this._kernel.factory.height?this._yPrev:l_y;
	}
	,_isWithinBounds: function() {
		return this._stage.get_mouseX() >= 0 && this._stage.get_mouseX() <= this._kernel.factory.width && this._stage.get_mouseY() >= 0 && this._stage.get_mouseY() <= this._kernel.factory.height;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		if(this._stage.get_focus() == null || this._stage.get_focus().get_stage() == null) this._stage.set_focus(this._stage);
		awe6.core.drivers.AInputMouse.prototype._updater.call(this,p_deltaTime);
	}
	,_disposer: function() {
		this._stage.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this._stage.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		this._stage.removeEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onMouseWheel));
		this._stage.removeEventListener(flash.events.Event.DEACTIVATE,$bind(this,this._reset));
		awe6.core.drivers.AInputMouse.prototype._disposer.call(this);
	}
	,_driverInit: function() {
		this._stage = flash.Lib.get_current().get_stage();
		this._stage.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this._stage.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		this._stage.addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onMouseWheel));
		this._stage.addEventListener(flash.events.Event.DEACTIVATE,$bind(this,this._reset));
	}
	,__class__: awe6.core.drivers.openfl.html5.InputMouse
});
awe6.core.drivers.openfl.html5.Kernel = function(p_factory,p_context) {
	awe6.core.drivers.AKernel.call(this,p_factory,p_context);
};
$hxClasses["awe6.core.drivers.openfl.html5.Kernel"] = awe6.core.drivers.openfl.html5.Kernel;
awe6.core.drivers.openfl.html5.Kernel.__name__ = ["awe6","core","drivers","openfl","html5","Kernel"];
awe6.core.drivers.openfl.html5.Kernel.__super__ = awe6.core.drivers.AKernel;
awe6.core.drivers.openfl.html5.Kernel.prototype = $extend(awe6.core.drivers.AKernel.prototype,{
	_driverSetIsFullScreen: function(p_value) {
	}
	,_driverSetIsEyeCandy: function(p_value) {
	}
	,_onEnterFrame: function(p_event) {
		this._updater(0);
	}
	,_driverDisposer: function() {
	}
	,_driverInit: function() {
		this._stage = this._context.get_stage();
		flash.Lib.get_current().focusRect = false;
		this._stage.set_frameRate(this.factory.targetFramerate);
		this._stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		this._stage.set_quality(flash.display.StageQuality.LOW);
		this._stage.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this._onEnterFrame));
	}
	,_driverGetIsLocal: function() {
		return flash.system.Security.sandboxType != flash.system.Security.REMOTE;
	}
	,__class__: awe6.core.drivers.openfl.html5.Kernel
});
awe6.core.drivers.openfl.html5.Overlay = function(p_kernel,p_buttonWidth,p_buttonHeight,p_border,p_backUp,p_backOver,p_muteUp,p_muteOver,p_unmuteUp,p_unmuteOver,p_pauseUp,p_pauseOver,p_unpauseUp,p_unpauseOver,p_pauseBlur,p_pauseColor,p_pauseAlpha) {
	awe6.core.drivers.AOverlay.call(this,p_kernel,p_buttonWidth,p_buttonHeight,p_border,p_backUp,p_backOver,p_muteUp,p_muteOver,p_unmuteUp,p_unmuteOver,p_pauseUp,p_pauseOver,p_unpauseUp,p_unpauseOver,p_pauseBlur,p_pauseColor,p_pauseAlpha);
};
$hxClasses["awe6.core.drivers.openfl.html5.Overlay"] = awe6.core.drivers.openfl.html5.Overlay;
awe6.core.drivers.openfl.html5.Overlay.__name__ = ["awe6","core","drivers","openfl","html5","Overlay"];
awe6.core.drivers.openfl.html5.Overlay.__super__ = awe6.core.drivers.AOverlay;
awe6.core.drivers.openfl.html5.Overlay.prototype = $extend(awe6.core.drivers.AOverlay.prototype,{
	flash: function(p_duration,p_asTime,p_startingAlpha,p_color) {
		if(p_color == null) p_color = 16777215;
		if(p_startingAlpha == null) p_startingAlpha = 1;
		if(p_asTime == null) p_asTime = true;
		this._flashContext.get_graphics().clear();
		this._flashContext.get_graphics().beginFill(p_color);
		this._flashContext.get_graphics().drawRect(0,0,this._kernel.factory.width,this._kernel.factory.height);
		p_duration = p_duration != null?p_duration:p_asTime?500:this._kernel.factory.targetFramerate * .5;
		this._flashDuration = this._flashStartingDuration = p_duration;
		this._flashAsTime = p_asTime;
		this._flashAlpha = this._flashStartingAlpha = p_startingAlpha > 1?1:p_startingAlpha < 0?0:p_startingAlpha;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.drivers.AOverlay.prototype._updater.call(this,p_deltaTime);
		this._flashContext.alpha = this._flashAlpha;
	}
	,_driverInit: function() {
		(js.Boot.__cast(this._borderView , awe6.core.drivers.openfl.html5.View)).context.mouseEnabled = false;
		this._context.mouseEnabled = false;
		this._pauseContext = new flash.display.Sprite();
		this._pauseContext.mouseEnabled = false;
		this._pauseContext.get_graphics().beginFill(this._pauseColor,this._pauseAlpha);
		this._pauseContext.get_graphics().drawRect(0,0,this._kernel.factory.width,this._kernel.factory.height);
		this._flashContext = new flash.display.Sprite();
		this._flashContext.mouseEnabled = false;
	}
	,__class__: awe6.core.drivers.openfl.html5.Overlay
});
awe6.core.drivers.openfl.html5.Preloader = function(p_kernel,p_assets,p_isDecached) {
	awe6.core.drivers.APreloader.call(this,p_kernel,p_assets,p_isDecached);
};
$hxClasses["awe6.core.drivers.openfl.html5.Preloader"] = awe6.core.drivers.openfl.html5.Preloader;
awe6.core.drivers.openfl.html5.Preloader.__name__ = ["awe6","core","drivers","openfl","html5","Preloader"];
awe6.core.drivers.openfl.html5.Preloader.__super__ = awe6.core.drivers.APreloader;
awe6.core.drivers.openfl.html5.Preloader.prototype = $extend(awe6.core.drivers.APreloader.prototype,{
	__class__: awe6.core.drivers.openfl.html5.Preloader
});
awe6.core.drivers.openfl.html5.Profiler = function(p_kernel) {
	awe6.core.drivers.AProfiler.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.openfl.html5.Profiler"] = awe6.core.drivers.openfl.html5.Profiler;
awe6.core.drivers.openfl.html5.Profiler.__name__ = ["awe6","core","drivers","openfl","html5","Profiler"];
awe6.core.drivers.openfl.html5.Profiler.__super__ = awe6.core.drivers.AProfiler;
awe6.core.drivers.openfl.html5.Profiler.prototype = $extend(awe6.core.drivers.AProfiler.prototype,{
	_driverUpdate: function() {
		var l_fps = this._kernel.getFramerate(true) | 0;
		var l_fpsValue = Math.min(this._height,this._height / this._kernel.factory.targetFramerate * l_fps) | 0;
		this._fpsTextField.set_text(this._fpsLabel + ": " + l_fps + " / " + this._kernel.factory.targetFramerate);
	}
	,_init: function() {
		awe6.core.drivers.AProfiler.prototype._init.call(this);
		this._width = 70;
		this._height = 0;
		this._marginHeight = 12;
		this._bitmapData = new flash.display.BitmapData(this._width,this._height,true,this._backgroundColor);
		var l_bitmap = new flash.display.Bitmap(this._bitmapData);
		l_bitmap.set_y(this._marginHeight);
		this._context.addChild(l_bitmap);
		this._textFormat = new flash.text.TextFormat("_sans",10);
		this._context.get_graphics().beginFill(this._marginColor);
		this._context.get_graphics().drawRect(0,0,this._width,this._marginHeight);
		this._context.get_graphics().endFill();
		this._fpsTextField = new flash.text.TextField();
		this._fpsTextField.set_defaultTextFormat(this._textFormat);
		this._fpsTextField.set_width(this._width);
		this._fpsTextField.selectable = false;
		this._fpsTextField.set_textColor(this._fpsColor);
		this._fpsTextField.set_text(this._fpsLabel + ": 99 / 99");
		this._context.addChild(this._fpsTextField);
	}
	,__class__: awe6.core.drivers.openfl.html5.Profiler
});
awe6.core.drivers.openfl.html5.SceneTransition = function(p_kernel,p_duration) {
	awe6.core.drivers.ASceneTransition.call(this,p_kernel,p_duration);
};
$hxClasses["awe6.core.drivers.openfl.html5.SceneTransition"] = awe6.core.drivers.openfl.html5.SceneTransition;
awe6.core.drivers.openfl.html5.SceneTransition.__name__ = ["awe6","core","drivers","openfl","html5","SceneTransition"];
awe6.core.drivers.openfl.html5.SceneTransition.__super__ = awe6.core.drivers.ASceneTransition;
awe6.core.drivers.openfl.html5.SceneTransition.prototype = $extend(awe6.core.drivers.ASceneTransition.prototype,{
	_init: function() {
		awe6.core.drivers.ASceneTransition.prototype._init.call(this);
		this._kernel.overlay.flash(this._duration,true);
	}
	,__class__: awe6.core.drivers.openfl.html5.SceneTransition
});
awe6.core.drivers.openfl.html5.Session = function(p_kernel,p_id) {
	awe6.core.drivers.ASession.call(this,p_kernel,p_id);
};
$hxClasses["awe6.core.drivers.openfl.html5.Session"] = awe6.core.drivers.openfl.html5.Session;
awe6.core.drivers.openfl.html5.Session.__name__ = ["awe6","core","drivers","openfl","html5","Session"];
awe6.core.drivers.openfl.html5.Session.__super__ = awe6.core.drivers.ASession;
awe6.core.drivers.openfl.html5.Session.prototype = $extend(awe6.core.drivers.ASession.prototype,{
	_driverSave: function() {
		js.Cookie.set(this._kernel.factory.id,this._tools.serialize(this._savedData));
	}
	,_driverReset: function() {
		js.Cookie.remove(this._kernel.factory.id);
		this._savedData = { };
	}
	,_driverLoad: function() {
		this._savedData = { };
		if(js.Cookie.exists(this._kernel.factory.id)) this._savedData = this._tools.unserialize(js.Cookie.get(this._kernel.factory.id));
	}
	,__class__: awe6.core.drivers.openfl.html5.Session
});
awe6.core.drivers.openfl.html5.View = function(p_kernel,p_context,p_priority,p_owner) {
	awe6.core.drivers.AView.call(this,p_kernel,p_context,p_priority,p_owner);
};
$hxClasses["awe6.core.drivers.openfl.html5.View"] = awe6.core.drivers.openfl.html5.View;
awe6.core.drivers.openfl.html5.View.__name__ = ["awe6","core","drivers","openfl","html5","View"];
awe6.core.drivers.openfl.html5.View.__super__ = awe6.core.drivers.AView;
awe6.core.drivers.openfl.html5.View.prototype = $extend(awe6.core.drivers.AView.prototype,{
	set_y: function(p_value) {
		this.context.set_y(p_value);
		return awe6.core.drivers.AView.prototype.set_y.call(this,p_value);
	}
	,set_x: function(p_value) {
		this.context.set_x(p_value);
		return awe6.core.drivers.AView.prototype.set_x.call(this,p_value);
	}
	,_driverDraw: function() {
		if(this._container != null && this._container.parent != null) this._container.parent.removeChild(this._container);
		this._container = new flash.display.Sprite();
		this._container.mouseEnabled = false;
		this.context.addChild(this._container);
		var l_children = this._children;
		var _g = 0;
		while(_g < l_children.length) {
			var i = l_children[_g];
			++_g;
			if(i.isVisible) this._container.addChild(i.context);
		}
	}
	,_driverDisposer: function() {
		if(this.context != null && this.context.parent != null) try {
			this.context.parent.removeChild(this.context);
		} catch( l_error ) {
		}
	}
	,_init: function() {
		if(this.context == null) this.context = new flash.display.Sprite();
		awe6.core.drivers.AView.prototype._init.call(this);
	}
	,__class__: awe6.core.drivers.openfl.html5.View
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.nmeLocked = false;
	this.nmeReferenceCount = 0;
	this.nmeLeaseNum = 0;
	this.nmeLease = new flash.display.ImageDataLease();
	this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	this._nmeTextureBuffer = js.Browser.document.createElement("canvas");
	this._nmeTextureBuffer.width = width;
	this._nmeTextureBuffer.height = height;
	this._nmeId = flash.utils.Uuid.uuid();
	flash.Lib.nmeSetSurfaceId(this._nmeTextureBuffer,this._nmeId);
	this.nmeTransparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.nmeTransparent) {
		this.nmeTransparentFiller = js.Browser.document.createElement("canvas");
		this.nmeTransparentFiller.width = width;
		this.nmeTransparentFiller.height = height;
		var ctx = this.nmeTransparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.nmeTransparent) inFillColor |= -16777216;
		this.nmeInitColor = inFillColor;
		this.nmeFillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0));
	var num = (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.nmeLoadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.nmeBase64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.nmeCreateFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result._nmeTextureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.nmeIsJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.nmeIsPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.nmeTransparent;
	}
	,get_height: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.height; else return 0;
	}
	,nmeOnLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.nmeBuildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,unlock: function(changeRect) {
		this.nmeLocked = false;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		if(this.nmeImageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.nmeImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.nmeImageData,0,0);
		}
		var _g = 0, _g1 = this.nmeCopyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.nmeTransparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		console.log("BitmapData.threshold not implemented");
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				this.nmeImageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var imageData = null;
		if(this.nmeLocked) imageData = this.nmeImageData; else imageData = ctx.createImageData(this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
		var _g1 = 0, _g = this._nmeTextureBuffer.width * this._nmeTextureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.nmeLocked) this.nmeImageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,nmeLoadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this._nmeTextureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.nmeOnLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.nmeOnLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,nmeIncrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps++;
	}
	,nmeGetNumRefBitmaps: function() {
		return this.nmeAssignedBitmaps;
	}
	,nmeLoadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.nmeIsPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.nmeIsJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		var img = js.Browser.document.createElement("img");
		var canvas = this._nmeTextureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			if(inRawAlpha != null) {
				var pixels = ctx.getImageData(0,0,img.width,img.height);
				var _g1 = 0, _g2 = inRawAlpha.length;
				while(_g1 < _g2) {
					var i = _g1++;
					pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
				}
				ctx.putImageData(pixels,0,0);
			}
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + flash.display.BitmapData.nmeBase64Encode(bytes);
	}
	,nmeGetLease: function() {
		return this.nmeLease;
	}
	,nmeFillRect: function(rect,color) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.nmeTransparent?color >>> 24:255;
		if(!this.nmeLocked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = r;
					this.nmeImageData.data[s + offsetX + 1] = g;
					this.nmeImageData.data[s + offsetX + 2] = b;
					this.nmeImageData.data[s + offsetX + 3] = a;
				}
			}
			this.nmeImageDataChanged = true;
		}
	}
	,nmeDecrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps--;
	}
	,nmeClearCanvas: function() {
		var ctx = this._nmeTextureBuffer.getContext("2d");
		ctx.clearRect(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
	}
	,nmeBuildLease: function() {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,lock: function() {
		this.nmeLocked = true;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		this.nmeImageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		this.nmeImageDataChanged = false;
		this.nmeCopyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) || y >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.nmeImageData);
	}
	,handle: function() {
		return this._nmeTextureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray._nmeResizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray._nmeResizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				byteArray.writeByte(this.nmeImageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this._nmeTextureBuffer.width + x * 4,this.nmeImageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) + x * 4;
			return this.nmeImageData.data[offset] << 16 | this.nmeImageData.data[offset + 1] << 8 | this.nmeImageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.nmeTransparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0, maxX = 0, minY = me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
		};
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.nmeImageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.nmeLocked;
		if(!this.nmeLocked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this._nmeTextureBuffer.width && rect.height == this._nmeTextureBuffer.height) {
			if(this.nmeTransparent) {
				if(color >>> 24 == 0 || color == this.nmeInitColor) return this.nmeClearCanvas();
			} else if((color | -16777216) == (this.nmeInitColor | -16777216)) return this.nmeClearCanvas();
		}
		return this.nmeFillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.nmeSetImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this._nmeTextureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this._nmeTextureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		source.drawToSurface(this._nmeTextureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this._nmeTextureBuffer.width;
				rect.height = this._nmeTextureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.nmeClearCanvas();
		this._nmeTextureBuffer = null;
		this.nmeLeaseNum = 0;
		this.nmeLease = null;
		this.nmeImageData = null;
	}
	,destroy: function() {
		this._nmeTextureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceBitmapData._nmeTextureBuffer.width == 0 || sourceBitmapData._nmeTextureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.nmeTransparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData._nmeTextureBuffer != null?sourceBitmapData._nmeTextureBuffer.width:0,sourceBitmapData._nmeTextureBuffer != null?sourceBitmapData._nmeTextureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.nmeTransparent && sourceBitmapData.nmeTransparent) {
					var trpCtx = sourceBitmapData.nmeTransparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData._nmeTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.nmeCopyPixelList[this.nmeCopyPixelList.length] = { handle : sourceBitmapData._nmeTextureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.nmeTransparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.nmeTransparent) return;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData._nmeTextureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.nmeImageData);
			this.nmeImageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = this.nmeImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.nmeImageData.data[s + offsetX + 1] = this.nmeImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.nmeImageData.data[s + offsetX + 2] = this.nmeImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.nmeImageData.data[s + offsetX + 3] = this.nmeImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.nmeImageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0,this.nmeTransparent);
		var rect = new flash.geom.Rectangle(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.nmeLease.set(bitmapData.nmeLeaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0)) {
			r.width -= r.x + r.width - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) {
			r.height -= r.y + r.height - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.nmeApplyFilter(this._nmeTextureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.nmeApplyFilter(bitmapData._nmeTextureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
awe6.extras = {}
awe6.extras.gui = {}
awe6.extras.gui.BitmapDataScale9 = function(p_source,p_topLeftX,p_topLeftY,p_bottomRightX,p_bottomRightY,p_width,p_height,p_isTransparent,p_fillColor) {
	if(p_fillColor == null) p_fillColor = -1;
	if(p_isTransparent == null) p_isTransparent = true;
	this._source = p_source.clone();
	this._topLeftX = p_topLeftX;
	this._topLeftY = p_topLeftY;
	this._bottomRightX = p_bottomRightX;
	this._bottomRightY = p_bottomRightY;
	if(p_isTransparent && p_fillColor == -1) p_fillColor = 0;
	flash.display.BitmapData.call(this,p_width,p_height,p_isTransparent,p_fillColor);
	this._init();
};
$hxClasses["awe6.extras.gui.BitmapDataScale9"] = awe6.extras.gui.BitmapDataScale9;
awe6.extras.gui.BitmapDataScale9.__name__ = ["awe6","extras","gui","BitmapDataScale9"];
awe6.extras.gui.BitmapDataScale9.__super__ = flash.display.BitmapData;
awe6.extras.gui.BitmapDataScale9.prototype = $extend(flash.display.BitmapData.prototype,{
	_init: function() {
		if((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) == this._source.get_width() && (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) == this._source.get_height()) this.copyPixels(this._source,this._source.rect,new flash.geom.Point(this._source.rect.x,this._source.rect.y)); else {
			var l_isSmoothing = true;
			var l_leftMargin = this._topLeftX;
			var l_rightMargin = this._source.get_width() - this._bottomRightX;
			var l_topMargin = this._topLeftY;
			var l_bottomMargin = this._source.get_height() - this._bottomRightY;
			var l_centerWidth = this._source.get_width() - l_leftMargin - l_rightMargin;
			var l_centerHeight = this._source.get_height() - l_topMargin - l_bottomMargin;
			var l_matrix = new flash.geom.Matrix();
			var l_clipRect;
			l_clipRect = new flash.geom.Rectangle(0,0,l_leftMargin,l_topMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_tx((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - this._source.get_width());
			l_clipRect = new flash.geom.Rectangle((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_rightMargin,0,l_rightMargin,l_topMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_ty((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - this._source.get_height());
			l_clipRect = new flash.geom.Rectangle((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_rightMargin,(this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_bottomMargin,l_rightMargin,l_bottomMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_tx(0);
			l_clipRect = new flash.geom.Rectangle(0,(this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_bottomMargin,l_leftMargin,l_bottomMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.identity();
			l_matrix.a = ((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_leftMargin - l_rightMargin) / l_centerWidth;
			l_matrix.set_tx(l_leftMargin - l_leftMargin * l_matrix.a);
			l_clipRect = new flash.geom.Rectangle(l_leftMargin,0,l_centerWidth * l_matrix.a,l_topMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_ty((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - this._source.get_height());
			l_clipRect = new flash.geom.Rectangle(l_leftMargin,(this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_bottomMargin,l_centerWidth * l_matrix.a,l_bottomMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.d = ((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_topMargin - l_bottomMargin) / l_centerHeight;
			l_matrix.set_ty(l_topMargin - l_topMargin * l_matrix.d);
			l_clipRect = new flash.geom.Rectangle(l_leftMargin,l_topMargin,l_centerWidth * l_matrix.a,l_centerHeight * l_matrix.d);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.identity();
			l_matrix.d = ((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_topMargin - l_bottomMargin) / l_centerHeight;
			l_matrix.set_ty(l_topMargin - l_topMargin * l_matrix.d);
			l_clipRect = new flash.geom.Rectangle(0,l_topMargin,l_leftMargin,l_centerHeight * l_matrix.d);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_tx((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - this._source.get_width());
			l_clipRect = new flash.geom.Rectangle((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_rightMargin,l_topMargin,l_rightMargin,l_centerHeight * l_matrix.d);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		}
		this._source.dispose();
	}
	,__class__: awe6.extras.gui.BitmapDataScale9
});
awe6.extras.gui.GuiEntity = function(p_kernel,p_width,p_height,p_isMasked) {
	if(p_isMasked == null) p_isMasked = true;
	if(p_height == null) p_height = 100;
	if(p_width == null) p_width = 100;
	this.isFlippedX = false;
	this.isFlippedY = false;
	this.width = p_width;
	this.height = p_height;
	this._context = new flash.display.Sprite();
	if(p_isMasked) {
		var l_mask = new flash.display.Sprite();
		try {
			l_mask.get_graphics().beginFill(16711680);
			l_mask.get_graphics().drawRect(0,0,p_width,p_height);
			this._context.addChild(l_mask);
			this._context.set_mask(l_mask);
		} catch( p_error ) {
		}
	}
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["awe6.extras.gui.GuiEntity"] = awe6.extras.gui.GuiEntity;
awe6.extras.gui.GuiEntity.__name__ = ["awe6","extras","gui","GuiEntity"];
awe6.extras.gui.GuiEntity.__interfaces__ = [awe6.interfaces.IPositionable];
awe6.extras.gui.GuiEntity.__super__ = awe6.core.Entity;
awe6.extras.gui.GuiEntity.prototype = $extend(awe6.core.Entity.prototype,{
	set_isFlippedY: function(p_value) {
		if(p_value == this.isFlippedY) return this.isFlippedY;
		this.isFlippedY = p_value;
		var _g = this._context;
		_g.set_scaleY(_g.get_scaleY() * -1);
		if(this.isFlippedY) {
			var _g = this;
			_g.set_y(_g.y + this.height);
		} else {
			var _g = this;
			_g.set_y(_g.y - this.height);
		}
		return this.isFlippedY;
	}
	,set_isFlippedX: function(p_value) {
		if(p_value == this.isFlippedX) return this.isFlippedX;
		this.isFlippedX = p_value;
		var _g = this._context;
		_g.set_scaleX(_g.get_scaleX() * -1);
		if(this.isFlippedX) {
			var _g = this;
			_g.set_x(_g.x + this.width);
		} else {
			var _g = this;
			_g.set_x(_g.x - this.width);
		}
		return this.isFlippedX;
	}
	,set_y: function(p_value) {
		this.y = p_value;
		this._context.set_y(this.y);
		return this.y;
	}
	,set_x: function(p_value) {
		this.x = p_value;
		this._context.set_x(this.x);
		return this.x;
	}
	,setPosition: function(p_x,p_y) {
		this.set_x(p_x);
		this.set_y(p_y);
	}
	,__class__: awe6.extras.gui.GuiEntity
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{set_x:"set_x",set_y:"set_y",set_isFlippedX:"set_isFlippedX",set_isFlippedY:"set_isFlippedY"})
});
awe6.extras.gui.Text = function(p_kernel,p_width,p_height,p_text,p_textStyle,p_isMultiline,p_isInput) {
	if(p_isInput == null) p_isInput = false;
	if(p_isMultiline == null) p_isMultiline = false;
	if(p_text == null) p_text = "";
	this.textStyle = p_textStyle != null?p_textStyle:new awe6.core.TextStyle();
	this._isMultiline = p_isMultiline;
	this._isInput = p_isInput;
	this._isInput = false;
	awe6.extras.gui.GuiEntity.call(this,p_kernel,p_width,p_height,false);
	this.set_text(p_text);
};
$hxClasses["awe6.extras.gui.Text"] = awe6.extras.gui.Text;
awe6.extras.gui.Text.__name__ = ["awe6","extras","gui","Text"];
awe6.extras.gui.Text.__super__ = awe6.extras.gui.GuiEntity;
awe6.extras.gui.Text.prototype = $extend(awe6.extras.gui.GuiEntity.prototype,{
	set_text: function(p_value) {
		if(p_value == null) p_value = "";
		if(this.text == p_value) return this.text;
		this.text = p_value;
		this._textField.set_text(this.text);
		this._isDirty = true;
		return this.text;
	}
	,_draw: function() {
		this._textField.set_width(this.width);
		this._textField.set_height(this.height);
		if(this._prevTextStyle != this.textStyle.toString()) {
			this._textFormat.align = (function($this) {
				var $r;
				var _g = $this;
				$r = (function($this) {
					var $r;
					switch( (_g.textStyle.align)[1] ) {
					case 1:
						$r = flash.text.TextFormatAlign.LEFT;
						break;
					case 2:
						$r = flash.text.TextFormatAlign.CENTER;
						break;
					case 3:
						$r = flash.text.TextFormatAlign.RIGHT;
						break;
					case 0:
						$r = flash.text.TextFormatAlign.JUSTIFY;
						break;
					}
					return $r;
				}($this));
				return $r;
			}(this));
			this._textFormat.color = this.textStyle.color;
			this._textFormat.font = this.textStyle.font;
			this._textFormat.size = this.textStyle.size;
			this._textFormat.letterSpacing = this.textStyle.spacingHorizontal | 0;
			this._textFormat.leading = this.textStyle.spacingVertical | 0;
			this._textFormat.italic = this.textStyle.isItalic;
			this._textFormat.bold = this.textStyle.isBold;
			this._textField.selectable = this._isInput;
			this._textField.embedFonts = false;
			if(this.textStyle.filters != null) {
				var l_filters = [];
				var _g1 = 0, _g2 = this.textStyle.filters;
				while(_g1 < _g2.length) {
					var i = _g2[_g1];
					++_g1;
					if(js.Boot.__instanceof(i,flash.filters.BitmapFilter)) l_filters.push(i);
				}
				this._textField.set_filters(l_filters);
			}
			this._textField.set_defaultTextFormat(this._textFormat);
			this._textField.setTextFormat(this._textFormat);
		}
		this._isDirty = false;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.extras.gui.GuiEntity.prototype._updater.call(this,p_deltaTime);
		this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString();
		if(this._isDirty) this._draw();
		this._prevTextStyle = this.textStyle.toString();
	}
	,_stopEventPropogation: function(p_event) {
		try {
			p_event.stopImmediatePropagation();
		} catch( p_error ) {
		}
	}
	,_disposer: function() {
		this._textField.removeEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this._stopEventPropogation));
		this._textField.removeEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this._stopEventPropogation));
		awe6.extras.gui.GuiEntity.prototype._disposer.call(this);
	}
	,_init: function() {
		awe6.extras.gui.GuiEntity.prototype._init.call(this);
		this._textField = new flash.text.TextField();
		this._textField.addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this._stopEventPropogation));
		this._textField.addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this._stopEventPropogation));
		this._textField.multiline = this._isMultiline;
		this._textField.set_wordWrap(this._isMultiline);
		this._textField.set_type(this._isInput?flash.text.TextFieldType.INPUT:flash.text.TextFieldType.DYNAMIC);
		this._textField.set_wordWrap(true);
		this._textFormat = new flash.text.TextFormat();
		this._draw();
		this._context.addChild(this._textField);
		try {
			this._context.cacheAsBitmap = true;
		} catch( p_error ) {
		}
		this._context.mouseEnabled = this._isInput;
		this._context.mouseChildren = this._isInput;
		this._isDirty = false;
		this._prevTextStyle = this.textStyle.toString();
	}
	,__class__: awe6.extras.gui.Text
	,__properties__: $extend(awe6.extras.gui.GuiEntity.prototype.__properties__,{set_text:"set_text"})
});
awe6.interfaces.EAgenda = $hxClasses["awe6.interfaces.EAgenda"] = { __ename__ : ["awe6","interfaces","EAgenda"], __constructs__ : ["ALWAYS","BIRTH","DEATH","STANDARD","ATTACK","DEFEND","SUB_TYPE"] }
awe6.interfaces.EAgenda.ALWAYS = ["ALWAYS",0];
awe6.interfaces.EAgenda.ALWAYS.toString = $estr;
awe6.interfaces.EAgenda.ALWAYS.__enum__ = awe6.interfaces.EAgenda;
awe6.interfaces.EAgenda.BIRTH = ["BIRTH",1];
awe6.interfaces.EAgenda.BIRTH.toString = $estr;
awe6.interfaces.EAgenda.BIRTH.__enum__ = awe6.interfaces.EAgenda;
awe6.interfaces.EAgenda.DEATH = ["DEATH",2];
awe6.interfaces.EAgenda.DEATH.toString = $estr;
awe6.interfaces.EAgenda.DEATH.__enum__ = awe6.interfaces.EAgenda;
awe6.interfaces.EAgenda.STANDARD = ["STANDARD",3];
awe6.interfaces.EAgenda.STANDARD.toString = $estr;
awe6.interfaces.EAgenda.STANDARD.__enum__ = awe6.interfaces.EAgenda;
awe6.interfaces.EAgenda.ATTACK = ["ATTACK",4];
awe6.interfaces.EAgenda.ATTACK.toString = $estr;
awe6.interfaces.EAgenda.ATTACK.__enum__ = awe6.interfaces.EAgenda;
awe6.interfaces.EAgenda.DEFEND = ["DEFEND",5];
awe6.interfaces.EAgenda.DEFEND.toString = $estr;
awe6.interfaces.EAgenda.DEFEND.__enum__ = awe6.interfaces.EAgenda;
awe6.interfaces.EAgenda.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",6,value]; $x.__enum__ = awe6.interfaces.EAgenda; $x.toString = $estr; return $x; }
awe6.interfaces.EAudioChannel = $hxClasses["awe6.interfaces.EAudioChannel"] = { __ename__ : ["awe6","interfaces","EAudioChannel"], __constructs__ : ["DEFAULT","EFFECTS","INTERFACE","MUSIC","SUB_TYPE"] }
awe6.interfaces.EAudioChannel.DEFAULT = ["DEFAULT",0];
awe6.interfaces.EAudioChannel.DEFAULT.toString = $estr;
awe6.interfaces.EAudioChannel.DEFAULT.__enum__ = awe6.interfaces.EAudioChannel;
awe6.interfaces.EAudioChannel.EFFECTS = ["EFFECTS",1];
awe6.interfaces.EAudioChannel.EFFECTS.toString = $estr;
awe6.interfaces.EAudioChannel.EFFECTS.__enum__ = awe6.interfaces.EAudioChannel;
awe6.interfaces.EAudioChannel.INTERFACE = ["INTERFACE",2];
awe6.interfaces.EAudioChannel.INTERFACE.toString = $estr;
awe6.interfaces.EAudioChannel.INTERFACE.__enum__ = awe6.interfaces.EAudioChannel;
awe6.interfaces.EAudioChannel.MUSIC = ["MUSIC",3];
awe6.interfaces.EAudioChannel.MUSIC.toString = $estr;
awe6.interfaces.EAudioChannel.MUSIC.__enum__ = awe6.interfaces.EAudioChannel;
awe6.interfaces.EAudioChannel.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",4,value]; $x.__enum__ = awe6.interfaces.EAudioChannel; $x.toString = $estr; return $x; }
awe6.interfaces.EFullScreen = $hxClasses["awe6.interfaces.EFullScreen"] = { __ename__ : ["awe6","interfaces","EFullScreen"], __constructs__ : ["DISABLED","NO_SCALE","SCALE_ASPECT_RATIO_IGNORE","SCALE_ASPECT_RATIO_PRESERVE","SCALE_NEAREST_MULTIPLE","SUB_TYPE"] }
awe6.interfaces.EFullScreen.DISABLED = ["DISABLED",0];
awe6.interfaces.EFullScreen.DISABLED.toString = $estr;
awe6.interfaces.EFullScreen.DISABLED.__enum__ = awe6.interfaces.EFullScreen;
awe6.interfaces.EFullScreen.NO_SCALE = ["NO_SCALE",1];
awe6.interfaces.EFullScreen.NO_SCALE.toString = $estr;
awe6.interfaces.EFullScreen.NO_SCALE.__enum__ = awe6.interfaces.EFullScreen;
awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_IGNORE = ["SCALE_ASPECT_RATIO_IGNORE",2];
awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_IGNORE.toString = $estr;
awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_IGNORE.__enum__ = awe6.interfaces.EFullScreen;
awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_PRESERVE = ["SCALE_ASPECT_RATIO_PRESERVE",3];
awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_PRESERVE.toString = $estr;
awe6.interfaces.EFullScreen.SCALE_ASPECT_RATIO_PRESERVE.__enum__ = awe6.interfaces.EFullScreen;
awe6.interfaces.EFullScreen.SCALE_NEAREST_MULTIPLE = ["SCALE_NEAREST_MULTIPLE",4];
awe6.interfaces.EFullScreen.SCALE_NEAREST_MULTIPLE.toString = $estr;
awe6.interfaces.EFullScreen.SCALE_NEAREST_MULTIPLE.__enum__ = awe6.interfaces.EFullScreen;
awe6.interfaces.EFullScreen.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",5,value]; $x.__enum__ = awe6.interfaces.EFullScreen; $x.toString = $estr; return $x; }
awe6.interfaces.EJoypadButton = $hxClasses["awe6.interfaces.EJoypadButton"] = { __ename__ : ["awe6","interfaces","EJoypadButton"], __constructs__ : ["FIRE","UP","RIGHT","DOWN","LEFT","PRIMARY","SECONDARY"] }
awe6.interfaces.EJoypadButton.FIRE = ["FIRE",0];
awe6.interfaces.EJoypadButton.FIRE.toString = $estr;
awe6.interfaces.EJoypadButton.FIRE.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EJoypadButton.UP = ["UP",1];
awe6.interfaces.EJoypadButton.UP.toString = $estr;
awe6.interfaces.EJoypadButton.UP.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EJoypadButton.RIGHT = ["RIGHT",2];
awe6.interfaces.EJoypadButton.RIGHT.toString = $estr;
awe6.interfaces.EJoypadButton.RIGHT.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EJoypadButton.DOWN = ["DOWN",3];
awe6.interfaces.EJoypadButton.DOWN.toString = $estr;
awe6.interfaces.EJoypadButton.DOWN.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EJoypadButton.LEFT = ["LEFT",4];
awe6.interfaces.EJoypadButton.LEFT.toString = $estr;
awe6.interfaces.EJoypadButton.LEFT.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EJoypadButton.PRIMARY = ["PRIMARY",5];
awe6.interfaces.EJoypadButton.PRIMARY.toString = $estr;
awe6.interfaces.EJoypadButton.PRIMARY.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EJoypadButton.SECONDARY = ["SECONDARY",6];
awe6.interfaces.EJoypadButton.SECONDARY.toString = $estr;
awe6.interfaces.EJoypadButton.SECONDARY.__enum__ = awe6.interfaces.EJoypadButton;
awe6.interfaces.EKey = $hxClasses["awe6.interfaces.EKey"] = { __ename__ : ["awe6","interfaces","EKey"], __constructs__ : ["NUM_LOCK","CLEAR","HELP","ALT","BACKSPACE","CAPS_LOCK","CONTROL","DELETE","DOWN","END","ENTER","ESCAPE","F1","F10","F11","F12","F13","F14","F15","F2","F3","F4","F5","F6","F7","F8","F9","HOME","INSERT","LEFT","NUMPAD_0","NUMPAD_1","NUMPAD_2","NUMPAD_3","NUMPAD_4","NUMPAD_5","NUMPAD_6","NUMPAD_7","NUMPAD_8","NUMPAD_9","NUMPAD_ADD","NUMPAD_DECIMAL","NUMPAD_DIVIDE","NUMPAD_ENTER","NUMPAD_MULTIPLY","NUMPAD_SUBTRACT","PAGE_DOWN","PAGE_UP","RIGHT","SHIFT","SPACE","TAB","UP","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","NUMBER_0","NUMBER_1","NUMBER_2","NUMBER_3","NUMBER_4","NUMBER_5","NUMBER_6","NUMBER_7","NUMBER_8","NUMBER_9","COLON","EQUALS","HYPHEN","SLASH","TILDE","SQUARELEFT","SQUARERIGHT","BACKSLASH","APOSTROPHE","TOPLEFT","SUB_TYPE"] }
awe6.interfaces.EKey.NUM_LOCK = ["NUM_LOCK",0];
awe6.interfaces.EKey.NUM_LOCK.toString = $estr;
awe6.interfaces.EKey.NUM_LOCK.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.CLEAR = ["CLEAR",1];
awe6.interfaces.EKey.CLEAR.toString = $estr;
awe6.interfaces.EKey.CLEAR.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.HELP = ["HELP",2];
awe6.interfaces.EKey.HELP.toString = $estr;
awe6.interfaces.EKey.HELP.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.ALT = ["ALT",3];
awe6.interfaces.EKey.ALT.toString = $estr;
awe6.interfaces.EKey.ALT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.BACKSPACE = ["BACKSPACE",4];
awe6.interfaces.EKey.BACKSPACE.toString = $estr;
awe6.interfaces.EKey.BACKSPACE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.CAPS_LOCK = ["CAPS_LOCK",5];
awe6.interfaces.EKey.CAPS_LOCK.toString = $estr;
awe6.interfaces.EKey.CAPS_LOCK.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.CONTROL = ["CONTROL",6];
awe6.interfaces.EKey.CONTROL.toString = $estr;
awe6.interfaces.EKey.CONTROL.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.DELETE = ["DELETE",7];
awe6.interfaces.EKey.DELETE.toString = $estr;
awe6.interfaces.EKey.DELETE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.DOWN = ["DOWN",8];
awe6.interfaces.EKey.DOWN.toString = $estr;
awe6.interfaces.EKey.DOWN.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.END = ["END",9];
awe6.interfaces.EKey.END.toString = $estr;
awe6.interfaces.EKey.END.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.ENTER = ["ENTER",10];
awe6.interfaces.EKey.ENTER.toString = $estr;
awe6.interfaces.EKey.ENTER.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.ESCAPE = ["ESCAPE",11];
awe6.interfaces.EKey.ESCAPE.toString = $estr;
awe6.interfaces.EKey.ESCAPE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F1 = ["F1",12];
awe6.interfaces.EKey.F1.toString = $estr;
awe6.interfaces.EKey.F1.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F10 = ["F10",13];
awe6.interfaces.EKey.F10.toString = $estr;
awe6.interfaces.EKey.F10.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F11 = ["F11",14];
awe6.interfaces.EKey.F11.toString = $estr;
awe6.interfaces.EKey.F11.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F12 = ["F12",15];
awe6.interfaces.EKey.F12.toString = $estr;
awe6.interfaces.EKey.F12.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F13 = ["F13",16];
awe6.interfaces.EKey.F13.toString = $estr;
awe6.interfaces.EKey.F13.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F14 = ["F14",17];
awe6.interfaces.EKey.F14.toString = $estr;
awe6.interfaces.EKey.F14.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F15 = ["F15",18];
awe6.interfaces.EKey.F15.toString = $estr;
awe6.interfaces.EKey.F15.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F2 = ["F2",19];
awe6.interfaces.EKey.F2.toString = $estr;
awe6.interfaces.EKey.F2.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F3 = ["F3",20];
awe6.interfaces.EKey.F3.toString = $estr;
awe6.interfaces.EKey.F3.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F4 = ["F4",21];
awe6.interfaces.EKey.F4.toString = $estr;
awe6.interfaces.EKey.F4.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F5 = ["F5",22];
awe6.interfaces.EKey.F5.toString = $estr;
awe6.interfaces.EKey.F5.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F6 = ["F6",23];
awe6.interfaces.EKey.F6.toString = $estr;
awe6.interfaces.EKey.F6.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F7 = ["F7",24];
awe6.interfaces.EKey.F7.toString = $estr;
awe6.interfaces.EKey.F7.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F8 = ["F8",25];
awe6.interfaces.EKey.F8.toString = $estr;
awe6.interfaces.EKey.F8.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F9 = ["F9",26];
awe6.interfaces.EKey.F9.toString = $estr;
awe6.interfaces.EKey.F9.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.HOME = ["HOME",27];
awe6.interfaces.EKey.HOME.toString = $estr;
awe6.interfaces.EKey.HOME.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.INSERT = ["INSERT",28];
awe6.interfaces.EKey.INSERT.toString = $estr;
awe6.interfaces.EKey.INSERT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.LEFT = ["LEFT",29];
awe6.interfaces.EKey.LEFT.toString = $estr;
awe6.interfaces.EKey.LEFT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_0 = ["NUMPAD_0",30];
awe6.interfaces.EKey.NUMPAD_0.toString = $estr;
awe6.interfaces.EKey.NUMPAD_0.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_1 = ["NUMPAD_1",31];
awe6.interfaces.EKey.NUMPAD_1.toString = $estr;
awe6.interfaces.EKey.NUMPAD_1.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_2 = ["NUMPAD_2",32];
awe6.interfaces.EKey.NUMPAD_2.toString = $estr;
awe6.interfaces.EKey.NUMPAD_2.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_3 = ["NUMPAD_3",33];
awe6.interfaces.EKey.NUMPAD_3.toString = $estr;
awe6.interfaces.EKey.NUMPAD_3.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_4 = ["NUMPAD_4",34];
awe6.interfaces.EKey.NUMPAD_4.toString = $estr;
awe6.interfaces.EKey.NUMPAD_4.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_5 = ["NUMPAD_5",35];
awe6.interfaces.EKey.NUMPAD_5.toString = $estr;
awe6.interfaces.EKey.NUMPAD_5.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_6 = ["NUMPAD_6",36];
awe6.interfaces.EKey.NUMPAD_6.toString = $estr;
awe6.interfaces.EKey.NUMPAD_6.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_7 = ["NUMPAD_7",37];
awe6.interfaces.EKey.NUMPAD_7.toString = $estr;
awe6.interfaces.EKey.NUMPAD_7.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_8 = ["NUMPAD_8",38];
awe6.interfaces.EKey.NUMPAD_8.toString = $estr;
awe6.interfaces.EKey.NUMPAD_8.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_9 = ["NUMPAD_9",39];
awe6.interfaces.EKey.NUMPAD_9.toString = $estr;
awe6.interfaces.EKey.NUMPAD_9.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_ADD = ["NUMPAD_ADD",40];
awe6.interfaces.EKey.NUMPAD_ADD.toString = $estr;
awe6.interfaces.EKey.NUMPAD_ADD.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_DECIMAL = ["NUMPAD_DECIMAL",41];
awe6.interfaces.EKey.NUMPAD_DECIMAL.toString = $estr;
awe6.interfaces.EKey.NUMPAD_DECIMAL.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_DIVIDE = ["NUMPAD_DIVIDE",42];
awe6.interfaces.EKey.NUMPAD_DIVIDE.toString = $estr;
awe6.interfaces.EKey.NUMPAD_DIVIDE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_ENTER = ["NUMPAD_ENTER",43];
awe6.interfaces.EKey.NUMPAD_ENTER.toString = $estr;
awe6.interfaces.EKey.NUMPAD_ENTER.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_MULTIPLY = ["NUMPAD_MULTIPLY",44];
awe6.interfaces.EKey.NUMPAD_MULTIPLY.toString = $estr;
awe6.interfaces.EKey.NUMPAD_MULTIPLY.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMPAD_SUBTRACT = ["NUMPAD_SUBTRACT",45];
awe6.interfaces.EKey.NUMPAD_SUBTRACT.toString = $estr;
awe6.interfaces.EKey.NUMPAD_SUBTRACT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.PAGE_DOWN = ["PAGE_DOWN",46];
awe6.interfaces.EKey.PAGE_DOWN.toString = $estr;
awe6.interfaces.EKey.PAGE_DOWN.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.PAGE_UP = ["PAGE_UP",47];
awe6.interfaces.EKey.PAGE_UP.toString = $estr;
awe6.interfaces.EKey.PAGE_UP.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.RIGHT = ["RIGHT",48];
awe6.interfaces.EKey.RIGHT.toString = $estr;
awe6.interfaces.EKey.RIGHT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.SHIFT = ["SHIFT",49];
awe6.interfaces.EKey.SHIFT.toString = $estr;
awe6.interfaces.EKey.SHIFT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.SPACE = ["SPACE",50];
awe6.interfaces.EKey.SPACE.toString = $estr;
awe6.interfaces.EKey.SPACE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.TAB = ["TAB",51];
awe6.interfaces.EKey.TAB.toString = $estr;
awe6.interfaces.EKey.TAB.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.UP = ["UP",52];
awe6.interfaces.EKey.UP.toString = $estr;
awe6.interfaces.EKey.UP.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.A = ["A",53];
awe6.interfaces.EKey.A.toString = $estr;
awe6.interfaces.EKey.A.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.B = ["B",54];
awe6.interfaces.EKey.B.toString = $estr;
awe6.interfaces.EKey.B.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.C = ["C",55];
awe6.interfaces.EKey.C.toString = $estr;
awe6.interfaces.EKey.C.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.D = ["D",56];
awe6.interfaces.EKey.D.toString = $estr;
awe6.interfaces.EKey.D.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.E = ["E",57];
awe6.interfaces.EKey.E.toString = $estr;
awe6.interfaces.EKey.E.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.F = ["F",58];
awe6.interfaces.EKey.F.toString = $estr;
awe6.interfaces.EKey.F.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.G = ["G",59];
awe6.interfaces.EKey.G.toString = $estr;
awe6.interfaces.EKey.G.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.H = ["H",60];
awe6.interfaces.EKey.H.toString = $estr;
awe6.interfaces.EKey.H.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.I = ["I",61];
awe6.interfaces.EKey.I.toString = $estr;
awe6.interfaces.EKey.I.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.J = ["J",62];
awe6.interfaces.EKey.J.toString = $estr;
awe6.interfaces.EKey.J.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.K = ["K",63];
awe6.interfaces.EKey.K.toString = $estr;
awe6.interfaces.EKey.K.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.L = ["L",64];
awe6.interfaces.EKey.L.toString = $estr;
awe6.interfaces.EKey.L.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.M = ["M",65];
awe6.interfaces.EKey.M.toString = $estr;
awe6.interfaces.EKey.M.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.N = ["N",66];
awe6.interfaces.EKey.N.toString = $estr;
awe6.interfaces.EKey.N.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.O = ["O",67];
awe6.interfaces.EKey.O.toString = $estr;
awe6.interfaces.EKey.O.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.P = ["P",68];
awe6.interfaces.EKey.P.toString = $estr;
awe6.interfaces.EKey.P.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.Q = ["Q",69];
awe6.interfaces.EKey.Q.toString = $estr;
awe6.interfaces.EKey.Q.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.R = ["R",70];
awe6.interfaces.EKey.R.toString = $estr;
awe6.interfaces.EKey.R.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.S = ["S",71];
awe6.interfaces.EKey.S.toString = $estr;
awe6.interfaces.EKey.S.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.T = ["T",72];
awe6.interfaces.EKey.T.toString = $estr;
awe6.interfaces.EKey.T.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.U = ["U",73];
awe6.interfaces.EKey.U.toString = $estr;
awe6.interfaces.EKey.U.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.V = ["V",74];
awe6.interfaces.EKey.V.toString = $estr;
awe6.interfaces.EKey.V.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.W = ["W",75];
awe6.interfaces.EKey.W.toString = $estr;
awe6.interfaces.EKey.W.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.X = ["X",76];
awe6.interfaces.EKey.X.toString = $estr;
awe6.interfaces.EKey.X.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.Y = ["Y",77];
awe6.interfaces.EKey.Y.toString = $estr;
awe6.interfaces.EKey.Y.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.Z = ["Z",78];
awe6.interfaces.EKey.Z.toString = $estr;
awe6.interfaces.EKey.Z.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_0 = ["NUMBER_0",79];
awe6.interfaces.EKey.NUMBER_0.toString = $estr;
awe6.interfaces.EKey.NUMBER_0.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_1 = ["NUMBER_1",80];
awe6.interfaces.EKey.NUMBER_1.toString = $estr;
awe6.interfaces.EKey.NUMBER_1.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_2 = ["NUMBER_2",81];
awe6.interfaces.EKey.NUMBER_2.toString = $estr;
awe6.interfaces.EKey.NUMBER_2.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_3 = ["NUMBER_3",82];
awe6.interfaces.EKey.NUMBER_3.toString = $estr;
awe6.interfaces.EKey.NUMBER_3.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_4 = ["NUMBER_4",83];
awe6.interfaces.EKey.NUMBER_4.toString = $estr;
awe6.interfaces.EKey.NUMBER_4.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_5 = ["NUMBER_5",84];
awe6.interfaces.EKey.NUMBER_5.toString = $estr;
awe6.interfaces.EKey.NUMBER_5.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_6 = ["NUMBER_6",85];
awe6.interfaces.EKey.NUMBER_6.toString = $estr;
awe6.interfaces.EKey.NUMBER_6.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_7 = ["NUMBER_7",86];
awe6.interfaces.EKey.NUMBER_7.toString = $estr;
awe6.interfaces.EKey.NUMBER_7.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_8 = ["NUMBER_8",87];
awe6.interfaces.EKey.NUMBER_8.toString = $estr;
awe6.interfaces.EKey.NUMBER_8.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.NUMBER_9 = ["NUMBER_9",88];
awe6.interfaces.EKey.NUMBER_9.toString = $estr;
awe6.interfaces.EKey.NUMBER_9.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.COLON = ["COLON",89];
awe6.interfaces.EKey.COLON.toString = $estr;
awe6.interfaces.EKey.COLON.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.EQUALS = ["EQUALS",90];
awe6.interfaces.EKey.EQUALS.toString = $estr;
awe6.interfaces.EKey.EQUALS.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.HYPHEN = ["HYPHEN",91];
awe6.interfaces.EKey.HYPHEN.toString = $estr;
awe6.interfaces.EKey.HYPHEN.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.SLASH = ["SLASH",92];
awe6.interfaces.EKey.SLASH.toString = $estr;
awe6.interfaces.EKey.SLASH.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.TILDE = ["TILDE",93];
awe6.interfaces.EKey.TILDE.toString = $estr;
awe6.interfaces.EKey.TILDE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.SQUARELEFT = ["SQUARELEFT",94];
awe6.interfaces.EKey.SQUARELEFT.toString = $estr;
awe6.interfaces.EKey.SQUARELEFT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.SQUARERIGHT = ["SQUARERIGHT",95];
awe6.interfaces.EKey.SQUARERIGHT.toString = $estr;
awe6.interfaces.EKey.SQUARERIGHT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.BACKSLASH = ["BACKSLASH",96];
awe6.interfaces.EKey.BACKSLASH.toString = $estr;
awe6.interfaces.EKey.BACKSLASH.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.APOSTROPHE = ["APOSTROPHE",97];
awe6.interfaces.EKey.APOSTROPHE.toString = $estr;
awe6.interfaces.EKey.APOSTROPHE.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.TOPLEFT = ["TOPLEFT",98];
awe6.interfaces.EKey.TOPLEFT.toString = $estr;
awe6.interfaces.EKey.TOPLEFT.__enum__ = awe6.interfaces.EKey;
awe6.interfaces.EKey.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",99,value]; $x.__enum__ = awe6.interfaces.EKey; $x.toString = $estr; return $x; }
awe6.interfaces.EMessage = $hxClasses["awe6.interfaces.EMessage"] = { __ename__ : ["awe6","interfaces","EMessage"], __constructs__ : ["DISPOSE","INIT","PAUSE","RESUME","SUB_TYPE"] }
awe6.interfaces.EMessage.DISPOSE = ["DISPOSE",0];
awe6.interfaces.EMessage.DISPOSE.toString = $estr;
awe6.interfaces.EMessage.DISPOSE.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.INIT = ["INIT",1];
awe6.interfaces.EMessage.INIT.toString = $estr;
awe6.interfaces.EMessage.INIT.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.PAUSE = ["PAUSE",2];
awe6.interfaces.EMessage.PAUSE.toString = $estr;
awe6.interfaces.EMessage.PAUSE.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.RESUME = ["RESUME",3];
awe6.interfaces.EMessage.RESUME.toString = $estr;
awe6.interfaces.EMessage.RESUME.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",4,value]; $x.__enum__ = awe6.interfaces.EMessage; $x.toString = $estr; return $x; }
awe6.interfaces.EMouseButton = $hxClasses["awe6.interfaces.EMouseButton"] = { __ename__ : ["awe6","interfaces","EMouseButton"], __constructs__ : ["LEFT","MIDDLE","RIGHT"] }
awe6.interfaces.EMouseButton.LEFT = ["LEFT",0];
awe6.interfaces.EMouseButton.LEFT.toString = $estr;
awe6.interfaces.EMouseButton.LEFT.__enum__ = awe6.interfaces.EMouseButton;
awe6.interfaces.EMouseButton.MIDDLE = ["MIDDLE",1];
awe6.interfaces.EMouseButton.MIDDLE.toString = $estr;
awe6.interfaces.EMouseButton.MIDDLE.__enum__ = awe6.interfaces.EMouseButton;
awe6.interfaces.EMouseButton.RIGHT = ["RIGHT",2];
awe6.interfaces.EMouseButton.RIGHT.toString = $estr;
awe6.interfaces.EMouseButton.RIGHT.__enum__ = awe6.interfaces.EMouseButton;
awe6.interfaces.EMouseCursor = $hxClasses["awe6.interfaces.EMouseCursor"] = { __ename__ : ["awe6","interfaces","EMouseCursor"], __constructs__ : ["ARROW","AUTO","BUTTON","HAND","IBEAM","SUB_TYPE"] }
awe6.interfaces.EMouseCursor.ARROW = ["ARROW",0];
awe6.interfaces.EMouseCursor.ARROW.toString = $estr;
awe6.interfaces.EMouseCursor.ARROW.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.AUTO = ["AUTO",1];
awe6.interfaces.EMouseCursor.AUTO.toString = $estr;
awe6.interfaces.EMouseCursor.AUTO.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.BUTTON = ["BUTTON",2];
awe6.interfaces.EMouseCursor.BUTTON.toString = $estr;
awe6.interfaces.EMouseCursor.BUTTON.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.HAND = ["HAND",3];
awe6.interfaces.EMouseCursor.HAND.toString = $estr;
awe6.interfaces.EMouseCursor.HAND.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.IBEAM = ["IBEAM",4];
awe6.interfaces.EMouseCursor.IBEAM.toString = $estr;
awe6.interfaces.EMouseCursor.IBEAM.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",5,value]; $x.__enum__ = awe6.interfaces.EMouseCursor; $x.toString = $estr; return $x; }
awe6.interfaces.EOverlayButton = $hxClasses["awe6.interfaces.EOverlayButton"] = { __ename__ : ["awe6","interfaces","EOverlayButton"], __constructs__ : ["BACK","MUTE","UNMUTE","PAUSE","UNPAUSE","SUB_TYPE"] }
awe6.interfaces.EOverlayButton.BACK = ["BACK",0];
awe6.interfaces.EOverlayButton.BACK.toString = $estr;
awe6.interfaces.EOverlayButton.BACK.__enum__ = awe6.interfaces.EOverlayButton;
awe6.interfaces.EOverlayButton.MUTE = ["MUTE",1];
awe6.interfaces.EOverlayButton.MUTE.toString = $estr;
awe6.interfaces.EOverlayButton.MUTE.__enum__ = awe6.interfaces.EOverlayButton;
awe6.interfaces.EOverlayButton.UNMUTE = ["UNMUTE",2];
awe6.interfaces.EOverlayButton.UNMUTE.toString = $estr;
awe6.interfaces.EOverlayButton.UNMUTE.__enum__ = awe6.interfaces.EOverlayButton;
awe6.interfaces.EOverlayButton.PAUSE = ["PAUSE",3];
awe6.interfaces.EOverlayButton.PAUSE.toString = $estr;
awe6.interfaces.EOverlayButton.PAUSE.__enum__ = awe6.interfaces.EOverlayButton;
awe6.interfaces.EOverlayButton.UNPAUSE = ["UNPAUSE",4];
awe6.interfaces.EOverlayButton.UNPAUSE.toString = $estr;
awe6.interfaces.EOverlayButton.UNPAUSE.__enum__ = awe6.interfaces.EOverlayButton;
awe6.interfaces.EOverlayButton.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",5,value]; $x.__enum__ = awe6.interfaces.EOverlayButton; $x.toString = $estr; return $x; }
awe6.interfaces.EScene = $hxClasses["awe6.interfaces.EScene"] = { __ename__ : ["awe6","interfaces","EScene"], __constructs__ : ["INTRO","EXIT","SELECT_SESSION","MENU","AVATAR","SHOP","INSTRUCTIONS","SETTINGS","GAME","RESULTS","REWARDS","TEST","SUB_TYPE"] }
awe6.interfaces.EScene.INTRO = ["INTRO",0];
awe6.interfaces.EScene.INTRO.toString = $estr;
awe6.interfaces.EScene.INTRO.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.EXIT = ["EXIT",1];
awe6.interfaces.EScene.EXIT.toString = $estr;
awe6.interfaces.EScene.EXIT.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SELECT_SESSION = ["SELECT_SESSION",2];
awe6.interfaces.EScene.SELECT_SESSION.toString = $estr;
awe6.interfaces.EScene.SELECT_SESSION.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.MENU = ["MENU",3];
awe6.interfaces.EScene.MENU.toString = $estr;
awe6.interfaces.EScene.MENU.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.AVATAR = ["AVATAR",4];
awe6.interfaces.EScene.AVATAR.toString = $estr;
awe6.interfaces.EScene.AVATAR.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SHOP = ["SHOP",5];
awe6.interfaces.EScene.SHOP.toString = $estr;
awe6.interfaces.EScene.SHOP.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.INSTRUCTIONS = ["INSTRUCTIONS",6];
awe6.interfaces.EScene.INSTRUCTIONS.toString = $estr;
awe6.interfaces.EScene.INSTRUCTIONS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SETTINGS = ["SETTINGS",7];
awe6.interfaces.EScene.SETTINGS.toString = $estr;
awe6.interfaces.EScene.SETTINGS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.GAME = ["GAME",8];
awe6.interfaces.EScene.GAME.toString = $estr;
awe6.interfaces.EScene.GAME.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.RESULTS = ["RESULTS",9];
awe6.interfaces.EScene.RESULTS.toString = $estr;
awe6.interfaces.EScene.RESULTS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.REWARDS = ["REWARDS",10];
awe6.interfaces.EScene.REWARDS.toString = $estr;
awe6.interfaces.EScene.REWARDS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.TEST = ["TEST",11];
awe6.interfaces.EScene.TEST.toString = $estr;
awe6.interfaces.EScene.TEST.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",12,value]; $x.__enum__ = awe6.interfaces.EScene; $x.toString = $estr; return $x; }
awe6.interfaces.ETextAlign = $hxClasses["awe6.interfaces.ETextAlign"] = { __ename__ : ["awe6","interfaces","ETextAlign"], __constructs__ : ["JUSTIFY","LEFT","CENTER","RIGHT"] }
awe6.interfaces.ETextAlign.JUSTIFY = ["JUSTIFY",0];
awe6.interfaces.ETextAlign.JUSTIFY.toString = $estr;
awe6.interfaces.ETextAlign.JUSTIFY.__enum__ = awe6.interfaces.ETextAlign;
awe6.interfaces.ETextAlign.LEFT = ["LEFT",1];
awe6.interfaces.ETextAlign.LEFT.toString = $estr;
awe6.interfaces.ETextAlign.LEFT.__enum__ = awe6.interfaces.ETextAlign;
awe6.interfaces.ETextAlign.CENTER = ["CENTER",2];
awe6.interfaces.ETextAlign.CENTER.toString = $estr;
awe6.interfaces.ETextAlign.CENTER.__enum__ = awe6.interfaces.ETextAlign;
awe6.interfaces.ETextAlign.RIGHT = ["RIGHT",3];
awe6.interfaces.ETextAlign.RIGHT.toString = $estr;
awe6.interfaces.ETextAlign.RIGHT.__enum__ = awe6.interfaces.ETextAlign;
awe6.interfaces.ETextStyle = $hxClasses["awe6.interfaces.ETextStyle"] = { __ename__ : ["awe6","interfaces","ETextStyle"], __constructs__ : ["BUTTON","BODY","HEADLINE","SUBHEAD","SMALLPRINT","OVERSIZED","SUB_TYPE"] }
awe6.interfaces.ETextStyle.BUTTON = ["BUTTON",0];
awe6.interfaces.ETextStyle.BUTTON.toString = $estr;
awe6.interfaces.ETextStyle.BUTTON.__enum__ = awe6.interfaces.ETextStyle;
awe6.interfaces.ETextStyle.BODY = ["BODY",1];
awe6.interfaces.ETextStyle.BODY.toString = $estr;
awe6.interfaces.ETextStyle.BODY.__enum__ = awe6.interfaces.ETextStyle;
awe6.interfaces.ETextStyle.HEADLINE = ["HEADLINE",2];
awe6.interfaces.ETextStyle.HEADLINE.toString = $estr;
awe6.interfaces.ETextStyle.HEADLINE.__enum__ = awe6.interfaces.ETextStyle;
awe6.interfaces.ETextStyle.SUBHEAD = ["SUBHEAD",3];
awe6.interfaces.ETextStyle.SUBHEAD.toString = $estr;
awe6.interfaces.ETextStyle.SUBHEAD.__enum__ = awe6.interfaces.ETextStyle;
awe6.interfaces.ETextStyle.SMALLPRINT = ["SMALLPRINT",4];
awe6.interfaces.ETextStyle.SMALLPRINT.toString = $estr;
awe6.interfaces.ETextStyle.SMALLPRINT.__enum__ = awe6.interfaces.ETextStyle;
awe6.interfaces.ETextStyle.OVERSIZED = ["OVERSIZED",5];
awe6.interfaces.ETextStyle.OVERSIZED.toString = $estr;
awe6.interfaces.ETextStyle.OVERSIZED.__enum__ = awe6.interfaces.ETextStyle;
awe6.interfaces.ETextStyle.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",6,value]; $x.__enum__ = awe6.interfaces.ETextStyle; $x.toString = $estr; return $x; }
var demo = {}
demo.AssetManager = function(p_kernel) {
	awe6.core.AAssetManager.call(this,p_kernel);
};
$hxClasses["demo.AssetManager"] = demo.AssetManager;
demo.AssetManager.__name__ = ["demo","AssetManager"];
demo.AssetManager.__super__ = awe6.core.AAssetManager;
demo.AssetManager.prototype = $extend(awe6.core.AAssetManager.prototype,{
	_createView: function(p_type) {
		var l_context = new flash.display.Sprite();
		var l_bitmap = new flash.display.Bitmap();
		l_context.addChild(l_bitmap);
		switch( (p_type)[1] ) {
		case 0:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/OverlayBackground.png"));
			break;
		case 1:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/BackUp.png"));
			break;
		case 2:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/BackOver.png"));
			break;
		case 3:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/MuteUp.png"));
			break;
		case 4:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/MuteOver.png"));
			break;
		case 5:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/UnmuteUp.png"));
			break;
		case 6:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/UnmuteOver.png"));
			break;
		case 7:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/PauseUp.png"));
			break;
		case 8:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/PauseOver.png"));
			break;
		case 9:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/UnpauseUp.png"));
			break;
		case 10:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/overlay/buttons/UnpauseOver.png"));
			break;
		case 11:
			l_bitmap.set_bitmapData(openfl.Assets.getBitmapData("assets/scenes/Background.png"));
			break;
		}
		return new awe6.core.drivers.openfl.html5.View(this._kernel,l_context);
	}
	,getAsset: function(p_id,p_packageId,p_args) {
		if(p_packageId == null) p_packageId = this._kernel.getConfig("settings.assets.packages.default");
		if(p_packageId == null) p_packageId = this._PACKAGE_ID;
		if(p_packageId == this._kernel.getConfig("settings.assets.packages.audio") || p_packageId == "assets.audio") {
			var l_extension = ".mp3";
			l_extension = this._html5AudioExtension;
			p_id += l_extension;
		}
		if(p_packageId.length > 0 && HxOverrides.substr(p_packageId,-1,1) != ".") p_packageId += ".";
		var l_assetName = StringTools.replace(p_packageId,".","/") + p_id;
		var l_result = openfl.Assets.getSound(l_assetName);
		if(l_result != null) return l_result;
		var l_result1 = openfl.Assets.getBitmapData(l_assetName);
		if(l_result1 != null) return l_result1;
		var l_result2 = openfl.Assets.getFont(l_assetName);
		if(l_result2 != null) return l_result2;
		var l_result3 = openfl.Assets.getText(l_assetName);
		if(l_result3 != null) return l_result3;
		var l_result4 = openfl.Assets.getBytes(l_assetName);
		if(l_result4 != null) return l_result4;
		return awe6.core.AAssetManager.prototype.getAsset.call(this,p_id,p_packageId,p_args);
	}
	,_init: function() {
		awe6.core.AAssetManager.prototype._init.call(this);
		this.overlayBackground = this._createView(demo.EAsset.OVERLAY_BACKGROUND);
		this.overlayBackUp = this._createView(demo.EAsset.OVERLAY_BACK_UP);
		this.overlayBackOver = this._createView(demo.EAsset.OVERLAY_BACK_OVER);
		this.overlayMuteUp = this._createView(demo.EAsset.OVERLAY_MUTE_UP);
		this.overlayMuteOver = this._createView(demo.EAsset.OVERLAY_MUTE_OVER);
		this.overlayUnmuteUp = this._createView(demo.EAsset.OVERLAY_UNMUTE_UP);
		this.overlayUnmuteOver = this._createView(demo.EAsset.OVERLAY_UNMUTE_OVER);
		this.overlayPauseUp = this._createView(demo.EAsset.OVERLAY_PAUSE_UP);
		this.overlayPauseOver = this._createView(demo.EAsset.OVERLAY_PAUSE_OVER);
		this.overlayUnpauseUp = this._createView(demo.EAsset.OVERLAY_UNPAUSE_UP);
		this.overlayUnpauseOver = this._createView(demo.EAsset.OVERLAY_UNPAUSE_OVER);
		this.background = this._createView(demo.EAsset.BACKGROUND);
		this.buttonUp = openfl.Assets.getBitmapData("assets/ButtonUp.png");
		this.buttonOver = openfl.Assets.getBitmapData("assets/ButtonOver.png");
		this.sphere = openfl.Assets.getBitmapData("assets/Sphere.png");
		this.font = openfl.Assets.getFont("assets/fonts/orbitron.ttf");
		this._html5AudioExtension = ".mp3";
		try {
			this._html5AudioExtension = flash.media.Sound.nmeCanPlayType("ogg")?".ogg":".mp3";
		} catch( p_error ) {
			try {
				flash.Lib.get_current().get_stage().component.style.width = Std.string(this._kernel.factory.width + "px");
				flash.Lib.get_current().get_stage().component.style.height = Std.string(this._kernel.factory.height + "px");
			} catch( p_error1 ) {
			}
		}
	}
	,__class__: demo.AssetManager
});
demo.EAsset = $hxClasses["demo.EAsset"] = { __ename__ : ["demo","EAsset"], __constructs__ : ["OVERLAY_BACKGROUND","OVERLAY_BACK_UP","OVERLAY_BACK_OVER","OVERLAY_MUTE_UP","OVERLAY_MUTE_OVER","OVERLAY_UNMUTE_UP","OVERLAY_UNMUTE_OVER","OVERLAY_PAUSE_UP","OVERLAY_PAUSE_OVER","OVERLAY_UNPAUSE_UP","OVERLAY_UNPAUSE_OVER","BACKGROUND"] }
demo.EAsset.OVERLAY_BACKGROUND = ["OVERLAY_BACKGROUND",0];
demo.EAsset.OVERLAY_BACKGROUND.toString = $estr;
demo.EAsset.OVERLAY_BACKGROUND.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_BACK_UP = ["OVERLAY_BACK_UP",1];
demo.EAsset.OVERLAY_BACK_UP.toString = $estr;
demo.EAsset.OVERLAY_BACK_UP.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_BACK_OVER = ["OVERLAY_BACK_OVER",2];
demo.EAsset.OVERLAY_BACK_OVER.toString = $estr;
demo.EAsset.OVERLAY_BACK_OVER.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_MUTE_UP = ["OVERLAY_MUTE_UP",3];
demo.EAsset.OVERLAY_MUTE_UP.toString = $estr;
demo.EAsset.OVERLAY_MUTE_UP.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_MUTE_OVER = ["OVERLAY_MUTE_OVER",4];
demo.EAsset.OVERLAY_MUTE_OVER.toString = $estr;
demo.EAsset.OVERLAY_MUTE_OVER.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_UNMUTE_UP = ["OVERLAY_UNMUTE_UP",5];
demo.EAsset.OVERLAY_UNMUTE_UP.toString = $estr;
demo.EAsset.OVERLAY_UNMUTE_UP.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_UNMUTE_OVER = ["OVERLAY_UNMUTE_OVER",6];
demo.EAsset.OVERLAY_UNMUTE_OVER.toString = $estr;
demo.EAsset.OVERLAY_UNMUTE_OVER.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_PAUSE_UP = ["OVERLAY_PAUSE_UP",7];
demo.EAsset.OVERLAY_PAUSE_UP.toString = $estr;
demo.EAsset.OVERLAY_PAUSE_UP.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_PAUSE_OVER = ["OVERLAY_PAUSE_OVER",8];
demo.EAsset.OVERLAY_PAUSE_OVER.toString = $estr;
demo.EAsset.OVERLAY_PAUSE_OVER.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_UNPAUSE_UP = ["OVERLAY_UNPAUSE_UP",9];
demo.EAsset.OVERLAY_UNPAUSE_UP.toString = $estr;
demo.EAsset.OVERLAY_UNPAUSE_UP.__enum__ = demo.EAsset;
demo.EAsset.OVERLAY_UNPAUSE_OVER = ["OVERLAY_UNPAUSE_OVER",10];
demo.EAsset.OVERLAY_UNPAUSE_OVER.toString = $estr;
demo.EAsset.OVERLAY_UNPAUSE_OVER.__enum__ = demo.EAsset;
demo.EAsset.BACKGROUND = ["BACKGROUND",11];
demo.EAsset.BACKGROUND.toString = $estr;
demo.EAsset.BACKGROUND.__enum__ = demo.EAsset;
demo.Factory = function(p_context,p_isDebug,p_config) {
	awe6.core.drivers.openfl.html5.Factory.call(this,p_context,p_isDebug,p_config);
};
$hxClasses["demo.Factory"] = demo.Factory;
demo.Factory.__name__ = ["demo","Factory"];
demo.Factory.__super__ = awe6.core.drivers.openfl.html5.Factory;
demo.Factory.prototype = $extend(awe6.core.drivers.openfl.html5.Factory.prototype,{
	getNextSceneType: function(p_type) {
		switch( (p_type)[1] ) {
		case 0:
			return awe6.interfaces.EScene.GAME;
		case 8:
			return awe6.interfaces.EScene.RESULTS;
		case 9:
			return awe6.interfaces.EScene.INTRO;
		default:
			null;
		}
		return awe6.core.drivers.openfl.html5.Factory.prototype.getNextSceneType.call(this,p_type);
	}
	,getBackSceneType: function(p_type) {
		switch( (p_type)[1] ) {
		case 0:
			return null;
		case 8:
			return awe6.interfaces.EScene.INTRO;
		case 9:
			return awe6.interfaces.EScene.INTRO;
		default:
			null;
		}
		return awe6.core.drivers.openfl.html5.Factory.prototype.getBackSceneType.call(this,p_type);
	}
	,createTextStyle: function(p_type) {
		if(p_type == null) p_type = awe6.interfaces.ETextStyle.BODY;
		var l_fontName = this._assetManager.font.fontName;
		var l_result = new awe6.core.TextStyle(l_fontName,12,16777215,false,false,awe6.interfaces.ETextAlign.CENTER,0,0,0,[new flash.filters.GlowFilter(131970,1,4,4,5,2)]);
		l_result.size = (function($this) {
			var $r;
			switch( (p_type)[1] ) {
			case 2:
				$r = 24;
				break;
			case 5:
				$r = 72;
				break;
			case 3:
				$r = 18;
				break;
			case 0:
				$r = 12;
				break;
			case 4:
				$r = 6;
				break;
			default:
				$r = 12;
			}
			return $r;
		}(this));
		return l_result;
	}
	,createSceneTransition: function(p_typeIncoming,p_typeOutgoing) {
		var l_sceneTransition = new demo.scenes.SceneTransition(this._kernel);
		return l_sceneTransition;
	}
	,createScene: function(p_type) {
		switch( (p_type)[1] ) {
		case 0:
			return new demo.scenes.Intro(this._kernel,p_type);
		case 8:
			return new demo.scenes.Game(this._kernel,p_type);
		case 9:
			return new demo.scenes.Results(this._kernel,p_type);
		default:
			null;
		}
		return awe6.core.drivers.openfl.html5.Factory.prototype.createScene.call(this,p_type);
	}
	,createSession: function(p_id) {
		return new demo.Session(this._kernel,p_id);
	}
	,createPreloader: function() {
		return new demo.Preloader(this._kernel,this._getAssetUrls(),this.isDecached);
	}
	,createOverlay: function() {
		var l_overlay = new demo.gui.Overlay(this._kernel);
		return l_overlay;
	}
	,createAssetManager: function() {
		if(this._assetManager == null) this._assetManager = new demo.AssetManager(this._kernel);
		return this._assetManager;
	}
	,_configurer: function(p_isPreconfig) {
		if(p_isPreconfig == null) p_isPreconfig = false;
		if(p_isPreconfig) {
			this.id = "awe6Demo";
			this.version = "2.1.585";
			this.author = "Robert Fell";
			this.isDecached = true;
			this.width = 600;
			this.height = 400;
			this.bgColor = 16777215;
			this.startingSceneType = awe6.interfaces.EScene.INTRO;
			this.targetFramerate = 60;
			this.isFixedUpdates = false;
		}
	}
	,__class__: demo.Factory
});
demo.Preloader = function(p_kernel,p_assets,p_isDecached) {
	awe6.core.drivers.openfl.html5.Preloader.call(this,p_kernel,p_assets,p_isDecached);
};
$hxClasses["demo.Preloader"] = demo.Preloader;
demo.Preloader.__name__ = ["demo","Preloader"];
demo.Preloader.__super__ = awe6.core.drivers.openfl.html5.Preloader;
demo.Preloader.prototype = $extend(awe6.core.drivers.openfl.html5.Preloader.prototype,{
	__class__: demo.Preloader
});
demo.Session = function(p_kernel,p_id) {
	awe6.core.drivers.openfl.html5.Session.call(this,p_kernel,p_id);
};
$hxClasses["demo.Session"] = demo.Session;
demo.Session.__name__ = ["demo","Session"];
demo.Session.__super__ = awe6.core.drivers.openfl.html5.Session;
demo.Session.prototype = $extend(awe6.core.drivers.openfl.html5.Session.prototype,{
	getPercentageComplete: function() {
		return this._tools.limit(100 * this.highScore / 1000 | 0,0,100);
	}
	,_resetter: function() {
		awe6.core.drivers.openfl.html5.Session.prototype._resetter.call(this);
		this.name = "???";
		this.highScore = 0;
	}
	,_setter: function() {
		awe6.core.drivers.openfl.html5.Session.prototype._setter.call(this);
		this._data.name = this.name;
		this._data.highScore = this.highScore;
	}
	,_getter: function() {
		awe6.core.drivers.openfl.html5.Session.prototype._getter.call(this);
		this.name = this._data.name;
		this.highScore = this._data.highScore;
	}
	,_init: function() {
		this._version = 1;
		awe6.core.drivers.openfl.html5.Session.prototype._init.call(this);
	}
	,__class__: demo.Session
});
demo.entities = {}
demo.entities.Bouncer = function(p_kernel,p_width,p_height) {
	this._width = p_width;
	this._height = p_height;
	awe6.core.Entity.call(this,p_kernel);
};
$hxClasses["demo.entities.Bouncer"] = demo.entities.Bouncer;
demo.entities.Bouncer.__name__ = ["demo","entities","Bouncer"];
demo.entities.Bouncer.__super__ = awe6.core.Entity;
demo.entities.Bouncer.prototype = $extend(awe6.core.Entity.prototype,{
	_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		this.x += this.vx * (p_deltaTime / 1000);
		this.y += this.vy * (p_deltaTime / 1000);
		if(this.x > this._kernel.factory.width - this._width2) this.vx *= -1;
		if(this.y > this._kernel.factory.height - this._height2) this.vy *= -1;
		if(this.x < this._width2) this.vx *= -1;
		if(this.y < this._height2) this.vy *= -1;
		this.x = this._tools.limit(this.x,this._width2,this._kernel.factory.width - this._width2);
		this.y = this._tools.limit(this.y,this._height2,this._kernel.factory.height - this._height2);
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		this._width2 = this._width / 2;
		this._height2 = this._height / 2;
		var l_speed = Math.random() * 200 + 100;
		this.vx = Math.random() < .5?l_speed:-l_speed;
		l_speed /= 4;
		this.vy = Math.random() < .5?l_speed:-l_speed;
		this.x = this._kernel.factory.width * Math.random();
		this.y = this._kernel.factory.height * Math.random();
	}
	,__class__: demo.entities.Bouncer
});
demo.entities.Sphere = function(p_kernel) {
	this._context = new flash.display.Sprite();
	this._context.mouseEnabled = false;
	this._assetManager = p_kernel.assets;
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["demo.entities.Sphere"] = demo.entities.Sphere;
demo.entities.Sphere.__name__ = ["demo","entities","Sphere"];
demo.entities.Sphere.__super__ = awe6.core.Entity;
demo.entities.Sphere.prototype = $extend(awe6.core.Entity.prototype,{
	_isHit: function() {
		if(!this._kernel.inputs.mouse.getIsButtonPress(awe6.interfaces.EMouseButton.LEFT)) return false;
		var l_dx = this._kernel.inputs.mouse.x - this._bouncer.x;
		var l_dy = this._kernel.inputs.mouse.y - this._bouncer.y;
		var l_dist = l_dx * l_dx + l_dy * l_dy;
		return l_dist < this._width2 * this._width2;
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		this._context.set_x(this._bouncer.x);
		this._context.set_y(this._bouncer.y);
		this._context.set_scaleX(this._bouncer.vx > 1?1.001:-1);
		this.get_view().set_priority(this._bouncer.y | 0);
		if(this._isHit()) {
			this._kernel.audio.start("Sfx" + (Std.random(4) + 1),awe6.interfaces.EAudioChannel.EFFECTS,0,0,1,this._bouncer.x / this._kernel.factory.width);
			this._kernel.overlay.flash(100,true,1,Std.random(16777215));
			if(this.isDisposed) null; else {
				this.isDisposed = true;
				this.set_isActive(false);
				this._disposer();
				null;
			}
		}
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		var l_scale = this._tools.range(Math.random(),.5,1);
		this._width = 100 * l_scale;
		this._height = 100 * l_scale;
		this._width2 = this._width / 2;
		this._height2 = this._height / 2;
		this.addEntity(this._bouncer = new demo.entities.Bouncer(this._kernel,this._width,this._height));
		var l_source = this._assetManager.sphere;
		var l_bitmapData = new flash.display.BitmapData(this._width | 0,this._height * 1.5 | 0,true,0);
		var l_matrix = new flash.geom.Matrix();
		l_matrix.scale(l_scale,l_scale);
		l_bitmapData.draw(l_source,l_matrix,null,null,null,true);
		var l_sphere = new flash.display.Bitmap(l_bitmapData);
		l_sphere.smoothing = true;
		l_sphere.set_x(-this._width2);
		l_sphere.set_y(-this._height2);
		this._context.addChild(l_sphere);
	}
	,__class__: demo.entities.Sphere
});
demo.gui = {}
demo.gui.Button = function(p_kernel,p_key,p_x,p_y,p_onClick,p_onRollOver,p_onRollOut,p_label) {
	if(p_y == null) p_y = 0;
	if(p_x == null) p_x = 0;
	this._assetManager = p_kernel.assets;
	this.label = p_label;
	this._upContext = new flash.display.Sprite();
	this._overContext = new flash.display.Sprite();
	this._upView = new awe6.core.drivers.openfl.html5.View(p_kernel,this._upContext);
	this._overView = new awe6.core.drivers.openfl.html5.View(p_kernel,this._overContext);
	awe6.core.BasicButton.call(this,p_kernel,this._upView,this._overView,160,40,p_x,p_y,p_key,p_onClick,p_onRollOver,p_onRollOut);
};
$hxClasses["demo.gui.Button"] = demo.gui.Button;
demo.gui.Button.__name__ = ["demo","gui","Button"];
demo.gui.Button.__super__ = awe6.core.BasicButton;
demo.gui.Button.prototype = $extend(awe6.core.BasicButton.prototype,{
	onRollOver: function() {
		this._kernel.audio.start("ButtonOver",awe6.interfaces.EAudioChannel.INTERFACE);
		awe6.core.BasicButton.prototype.onRollOver.call(this);
	}
	,onClick: function() {
		this._kernel.audio.start("ButtonDown",awe6.interfaces.EAudioChannel.INTERFACE);
		awe6.core.BasicButton.prototype.onClick.call(this);
	}
	,_createButtonState: function(p_isOver) {
		if(p_isOver == null) p_isOver = false;
		var l_result = new flash.display.Sprite();
		l_result.addChild(new flash.display.Bitmap(p_isOver?this._assetManager.buttonOver:this._assetManager.buttonUp));
		var l_text = new awe6.extras.gui.Text(this._kernel,this.width - 2 * this._marginWidth,this.height - 2 * this._marginHeight,this.label,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.BUTTON));
		l_text.setPosition(this._marginWidth,this._marginHeight);
		l_result.addChild(l_text._context);
		return l_result;
	}
	,_init: function() {
		awe6.core.BasicButton.prototype._init.call(this);
		this._marginWidth = 10;
		this._marginHeight = 12;
		this._upContext.addChild(this._createButtonState(false));
		this._overContext.addChild(this._createButtonState(true));
	}
	,__class__: demo.gui.Button
});
demo.gui.Overlay = function(p_kernel) {
	this._assetManager = js.Boot.__cast(p_kernel.assets , demo.AssetManager);
	this._buttonSize = 30;
	awe6.core.drivers.openfl.html5.Overlay.call(this,p_kernel,this._buttonSize,this._buttonSize,this._assetManager.overlayBackground,this._assetManager.overlayBackUp,this._assetManager.overlayBackOver,this._assetManager.overlayMuteUp,this._assetManager.overlayMuteOver,this._assetManager.overlayUnmuteUp,this._assetManager.overlayUnmuteOver,this._assetManager.overlayPauseUp,this._assetManager.overlayPauseOver,this._assetManager.overlayUnpauseUp,this._assetManager.overlayUnpauseOver);
};
$hxClasses["demo.gui.Overlay"] = demo.gui.Overlay;
demo.gui.Overlay.__name__ = ["demo","gui","Overlay"];
demo.gui.Overlay.__super__ = awe6.core.drivers.openfl.html5.Overlay;
demo.gui.Overlay.prototype = $extend(awe6.core.drivers.openfl.html5.Overlay.prototype,{
	activateButton: function(p_type) {
		var $e = (p_type);
		switch( $e[1] ) {
		case 5:
			var p_value = $e[2];
			p_value;
			null;
			break;
		default:
			null;
		}
		awe6.core.drivers.openfl.html5.Overlay.prototype.activateButton.call(this,p_type);
	}
	,hideButtons: function() {
		awe6.core.drivers.openfl.html5.Overlay.prototype.hideButtons.call(this);
	}
	,_getButton: function(p_type) {
		return (function($this) {
			var $r;
			var $e = (p_type);
			switch( $e[1] ) {
			case 5:
				var p_value = $e[2];
				$r = (function($this) {
					var $r;
					p_value;
					$r = null;
					return $r;
				}($this));
				break;
			default:
				$r = awe6.core.drivers.openfl.html5.Overlay.prototype._getButton.call($this,p_type);
			}
			return $r;
		}(this));
	}
	,_init: function() {
		awe6.core.drivers.openfl.html5.Overlay.prototype._init.call(this);
		var l_x = this._kernel.factory.width - 10 - 3 * this._buttonSize;
		var l_y = this._kernel.factory.height - this._buttonSize;
		this.positionButton(awe6.interfaces.EOverlayButton.BACK,l_x,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.PAUSE,l_x += this._buttonSize,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.UNPAUSE,l_x,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.MUTE,l_x += this._buttonSize,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.UNMUTE,l_x,l_y);
	}
	,__class__: demo.gui.Overlay
});
demo.scenes = {}
demo.scenes.AScene = function(p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext) {
	awe6.core.Scene.call(this,p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext);
};
$hxClasses["demo.scenes.AScene"] = demo.scenes.AScene;
demo.scenes.AScene.__name__ = ["demo","scenes","AScene"];
demo.scenes.AScene.__super__ = awe6.core.Scene;
demo.scenes.AScene.prototype = $extend(awe6.core.Scene.prototype,{
	_init: function() {
		awe6.core.Scene.prototype._init.call(this);
		this._assetManager = js.Boot.__cast(this._kernel.assets , demo.AssetManager);
		this._session = js.Boot.__cast(this._kernel.get_session() , demo.Session);
		var l_sceneType = this._tools.toCamelCase(Std.string(this.type));
		var l_titleText = this._kernel.getConfig("gui.scenes." + l_sceneType + ".title");
		if(l_titleText != null) {
			this._title = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,l_titleText,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.HEADLINE));
			this._title.set_y(40);
			this.addEntity(this._title,null,true,100);
		}
		this.get_view().addChild(this._assetManager.background,0);
		this._kernel.audio.start("MusicMenu",awe6.interfaces.EAudioChannel.MUSIC,-1,0,.125,0,true);
	}
	,__class__: demo.scenes.AScene
});
demo.scenes.Game = function(p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext) {
	demo.scenes.AScene.call(this,p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext);
};
$hxClasses["demo.scenes.Game"] = demo.scenes.Game;
demo.scenes.Game.__name__ = ["demo","scenes","Game"];
demo.scenes.Game.__super__ = demo.scenes.AScene;
demo.scenes.Game.prototype = $extend(demo.scenes.AScene.prototype,{
	_gameOver: function() {
		if(this._score > this._session.highScore) {
			this._session.isWin = true;
			this._session.highScore = this._score;
		}
		this._kernel.scenes.next();
	}
	,_disposer: function() {
		this._kernel.audio.stop("MusicGame",awe6.interfaces.EAudioChannel.MUSIC);
		demo.scenes.AScene.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		demo.scenes.AScene.prototype._updater.call(this,p_deltaTime);
		this._score = this._tools.limit(30000 - this._age,0,this._tools.BIG_NUMBER) | 0;
		if(this._score == 0) this._gameOver();
		this._timer.set_text(this._tools.convertAgeToFormattedTime(this._age));
		var l_spheres = this.getEntitiesByClass(demo.entities.Sphere);
		if(l_spheres == null || l_spheres.length == 0) this._gameOver();
	}
	,handleSphere: function(p_message,p_sender) {
		return true;
	}
	,_init: function() {
		demo.scenes.AScene.prototype._init.call(this);
		this.isPauseable = true;
		this.isSessionSavedOnNext = true;
		this._session.isWin = false;
		var l_textStyle = this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD);
		l_textStyle.filters = [];
		l_textStyle.color = 131970;
		this._timer = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,Std.string(this._tools.convertAgeToFormattedTime(0)),l_textStyle);
		this._timer.set_y(70);
		this.addEntity(this._timer,null,true,1000);
		this._kernel.audio.stop("MusicMenu",awe6.interfaces.EAudioChannel.MUSIC);
		this._kernel.audio.start("MusicGame",awe6.interfaces.EAudioChannel.MUSIC,-1,0,.5,0,true);
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			this.addEntity(new demo.entities.Sphere(this._kernel),null,true,i + 10);
		}
		this._kernel.messenger.addSubscriber(this._entity,awe6.interfaces.EMessage.INIT,$bind(this,this.handleSphere),null,demo.entities.Sphere);
		this._kernel.messenger.addSubscriber(this._entity,awe6.interfaces.EMessage.DISPOSE,$bind(this,this.handleSphere),null,demo.entities.Sphere);
	}
	,__class__: demo.scenes.Game
});
demo.scenes.Intro = function(p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext) {
	demo.scenes.AScene.call(this,p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext);
};
$hxClasses["demo.scenes.Intro"] = demo.scenes.Intro;
demo.scenes.Intro.__name__ = ["demo","scenes","Intro"];
demo.scenes.Intro.__super__ = demo.scenes.AScene;
demo.scenes.Intro.prototype = $extend(demo.scenes.AScene.prototype,{
	_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		demo.scenes.AScene.prototype._updater.call(this,p_deltaTime);
		if(this._kernel.inputs.keyboard.getIsKeyRelease(awe6.interfaces.EKey.F)) this._kernel.set_isFullScreen(!this._kernel.isFullScreen);
	}
	,_init: function() {
		this._kernel.set_session(this._kernel.factory.createSession("Basic"));
		demo.scenes.AScene.prototype._init.call(this);
		var l_result = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,this._kernel.getConfig("gui.scenes.intro.instructions"),this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD));
		l_result.set_y(70);
		this.addEntity(l_result,null,true,2);
		var l_button = new demo.gui.Button(this._kernel,this._kernel.factory.keyNext,0,0,($_=this._kernel.scenes,$bind($_,$_.next)),null,null,this._kernel.getConfig("gui.buttons.start"));
		l_button.setPosition((this._kernel.factory.width - l_button.width) / 2,(this._kernel.factory.height - l_button.height) / 2);
		this.addEntity(l_button,null,true,1);
	}
	,__class__: demo.scenes.Intro
});
demo.scenes.Results = function(p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext) {
	demo.scenes.AScene.call(this,p_kernel,p_type,p_isPauseable,p_isMuteable,p_isSessionSavedOnNext);
};
$hxClasses["demo.scenes.Results"] = demo.scenes.Results;
demo.scenes.Results.__name__ = ["demo","scenes","Results"];
demo.scenes.Results.__super__ = demo.scenes.AScene;
demo.scenes.Results.prototype = $extend(demo.scenes.AScene.prototype,{
	_init: function() {
		demo.scenes.AScene.prototype._init.call(this);
		var l_button = new demo.gui.Button(this._kernel,this._kernel.factory.keyNext,0,0,($_=this._kernel.scenes,$bind($_,$_.next)),null,null,this._kernel.getConfig("gui.buttons.next"));
		l_button.setPosition((this._kernel.factory.width - l_button.width) / 2,(this._kernel.factory.height - l_button.height) / 2);
		this.addEntity(l_button,null,true,1);
		var l_message = Std.string(this._kernel.getConfig("gui.scenes.results." + (this._session.isWin?"win":"lose"))) + this._tools.convertAgeToFormattedTime(30000 - this._session.highScore);
		var l_result = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,l_message,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD));
		l_result.set_y(70);
		this.addEntity(l_result,null,true,2);
	}
	,__class__: demo.scenes.Results
});
demo.scenes.SceneTransition = function(p_kernel) {
	var l_duration = 500;
	awe6.core.drivers.openfl.html5.SceneTransition.call(this,p_kernel,l_duration);
};
$hxClasses["demo.scenes.SceneTransition"] = demo.scenes.SceneTransition;
demo.scenes.SceneTransition.__name__ = ["demo","scenes","SceneTransition"];
demo.scenes.SceneTransition.__super__ = awe6.core.drivers.openfl.html5.SceneTransition;
demo.scenes.SceneTransition.prototype = $extend(awe6.core.drivers.openfl.html5.SceneTransition.prototype,{
	_disposer: function() {
		awe6.core.drivers.openfl.html5.SceneTransition.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.drivers.openfl.html5.SceneTransition.prototype._updater.call(this,p_deltaTime);
	}
	,_init: function() {
		awe6.core.drivers.openfl.html5.SceneTransition.prototype._init.call(this);
	}
	,__class__: demo.scenes.SceneTransition
});
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
		console.log("run");
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,__class__: haxe.Timer
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
	window.open(request.url);
}
flash.Lib.nmeAppendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.nmeAppendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.nmeBootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:jeash");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.nmeGetWidth(),flash.Lib.nmeGetHeight());
	}
}
flash.Lib.nmeCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.nmeCreateSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-nme-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-nme-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__nme_anim_" + surface.id + "__";
		surface.setAttribute("data-nme-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.nmeDesignMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.nmeDisableFullScreen = function() {
}
flash.Lib.nmeDisableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.nmeDrawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.nmeDrawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.nmeDrawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.nmeSetImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.nmeEnableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.nmeDisableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.nmeEnableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.nmeFullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.nmeFullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.nmeGetHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.nmeGetStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.nmeGetWidth();
		var height = flash.Lib.nmeGetHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.nmeGetWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.nmeIsOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.nmeParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.nmeRemoveSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-nme-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.nmeSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.nmeSetSurfaceClipping = function(surface,rect) {
}
flash.Lib.nmeSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.nmeSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.nmeSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.nmeSetSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-nme-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.nmeSetSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.nmeRemoveSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.nmeSwapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.nmeSetContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.nmeSetCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.nmeSetImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.nmeSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.nmeSetSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.nmeSetSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.nmeSetSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.nmeSetSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.nmeCreateSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.nmeIsOnStage(surface)) {
		flash.Lib.nmeAppendSurface(div);
		flash.Lib.nmeCopyStyle(surface,div);
		flash.Lib.nmeSwapSurface(surface,div);
		flash.Lib.nmeRemoveSurface(surface);
	} else flash.Lib.nmeCopyStyle(surface,div);
	return div;
}
flash.Lib.nmeSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.nmeSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.nmeSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.nmeGetStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.nmeGetStage().set_backgroundColor(flash.Lib.nmeParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.nmeGetStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.nmeGetStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.nmeSetSurfaceId(flash.Lib.get_current().get_graphics().nmeSurface,"Root MovieClip");
	flash.Lib.nmeGetStage().nmeUpdateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.nmeGetStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : ["flash","_Lib","CursorType"], __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	__class__: flash.accessibility.AccessibilityProperties
}
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		this.bitmapData.nmeReferenceCount++;
		if(this.bitmapData.nmeReferenceCount == 1) this.nmeGraphics = new flash.display.Graphics(this.bitmapData._nmeTextureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.nmeGraphics == null) this.nmeGraphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.nmeRender();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.nmeReferenceCount--;
				if(this.nmeGraphics.nmeSurface == this.bitmapData._nmeTextureBuffer) flash.Lib.nmeSetSurfaceOpacity(this.bitmapData._nmeTextureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.nmeReferenceCount++;
		}
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if(this.bitmapData == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.bitmapData._nmeTextureBuffer != this.nmeGraphics.nmeSurface) {
			var imageDataLease = this.bitmapData.nmeLease;
			if(imageDataLease != null && (this.nmeCurrentLease == null || imageDataLease.seed != this.nmeCurrentLease.seed || imageDataLease.time != this.nmeCurrentLease.time)) {
				var srcCanvas = this.bitmapData._nmeTextureBuffer;
				this.nmeGraphics.nmeSurface.width = srcCanvas.width;
				this.nmeGraphics.nmeSurface.height = srcCanvas.height;
				this.nmeGraphics.clear();
				flash.Lib.nmeDrawToSurface(srcCanvas,this.nmeGraphics.nmeSurface);
				this.nmeCurrentLease = imageDataLease.clone();
				this._nmeRenderFlags |= 64;
				if(this.parent != null) this.parent._nmeRenderFlags |= 64;
				this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
				this._nmeRenderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
			flash.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
				flash.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			if(!this.nmeInit) {
				flash.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,0);
				this.nmeInit = true;
			} else flash.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() || local.y > this.get_height()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : ["flash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : ["flash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : ["flash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	flash.Lib.nmeBootstrap();
	if(inSurface == null) {
		this.nmeSurface = js.Browser.document.createElement("canvas");
		this.nmeSurface.width = 0;
		this.nmeSurface.height = 0;
	} else this.nmeSurface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.nmeClearLine();
	this.mLineJobs = [];
	this.nmeChanged = true;
	this.nextDrawIndex = 0;
	this.nmeExtent = new flash.geom.Rectangle();
	this.nmeExtentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.nmeClearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.nmeDetectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	nmeRender: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.nmeChanged) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.nmeExpandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.nmeClearNextCycle) {
			this.nextDrawIndex = 0;
			this.nmeClearCanvas();
			this.nmeClearNextCycle = false;
		}
		if(this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x > this.nmeSurface.width || this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y > this.nmeSurface.height) this.nmeAdjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.nmeApplyFilter(this.nmeSurface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.nmeExtentWithFilters.x != 0 || this.nmeExtentWithFilters.y != 0) ctx.translate(-this.nmeExtentWithFilters.x * sx,-this.nmeExtentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.nmeDrawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.nmeChanged = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,nmeMediaSurface: function(surface) {
		this.nmeSurface = surface;
	}
	,nmeInvalidate: function() {
		this.nmeChanged = true;
		this.nmeClearNextCycle = true;
	}
	,nmeHitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.nmeExtent.width > 0 && this.nmeExtent.height > 0) return true;
		return false;
	}
	,nmeExpandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.nmeExtent.width -= this._padding;
			this.nmeExtent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtent.x = minX;
		this.nmeExtent.y = minY;
		this.nmeExtent.width = maxX - minX + this._padding;
		this.nmeExtent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,nmeExpandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtentWithFilters.x = minX;
		this.nmeExtentWithFilters.y = minY;
		this.nmeExtentWithFilters.width = maxX - minX;
		this.nmeExtentWithFilters.height = maxY - minY;
	}
	,nmeDrawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.nmeBitmap._nmeTextureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.nmeTileRects[tileID];
				center = sheet.nmeCenterPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,nmeDrawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,nmeClearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,nmeClearCanvas: function() {
		if(this.nmeSurface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.nmeSurface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.nmeSurface.width,this.nmeSurface.height);
		}
	}
	,nmeAdjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.nmeSurface,"getContext") != null) {
			var width = Math.ceil((this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x) * sx);
			var height = Math.ceil((this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.nmeDrawToSurface(this.nmeSurface,dstCanvas);
				if(flash.Lib.nmeIsOnStage(this.nmeSurface)) {
					flash.Lib.nmeAppendSurface(dstCanvas);
					flash.Lib.nmeCopyStyle(this.nmeSurface,dstCanvas);
					flash.Lib.nmeSwapSurface(this.nmeSurface,dstCanvas);
					flash.Lib.nmeRemoveSurface(this.nmeSurface);
					if(this.nmeSurface.id != null) flash.Lib.nmeSetSurfaceId(dstCanvas,this.nmeSurface.id);
				}
				this.nmeSurface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.nmeClearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.nmeSurface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.nmeExpandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.nmeChanged = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.nmeGraphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.nmeGraphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.nmeDrawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.nmeDrawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.nmeChanged = true;
	}
	,clear: function() {
		this.nmeClearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.nmeClearNextCycle = true;
		this.boundsDirty = true;
		this.nmeExtent.x = 0.0;
		this.nmeExtent.y = 0.0;
		this.nmeExtent.width = 0.0;
		this.nmeExtent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture._nmeTextureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.nmeExpandStandardExtent(bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.width:0,bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap._nmeTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : ["flash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.nmeGraphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : ["flash","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.nmeGraphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : ["flash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : ["flash","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : ["flash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : ["flash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : ["flash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.nmeInvalidateBounds();
		this.content.nmeRender(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this._nmeId + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = (function($this) {
					var $r;
					throw "Unrecognized file " + request.url;
					return $r;
				}($this));
			}
			return $r;
		}(this));
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : ["flash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.nmeGraphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.nmeGraphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : ["flash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.nmeIsCancelled = false;
	this.nmeIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.nmeIsCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.nmeIsCancelled = true;
		this.nmeIsCancelledNow = true;
	}
	,nmeSetPhase: function(phase) {
		this.eventPhase = phase;
	}
	,nmeGetIsCancelledNow: function() {
		return this.nmeIsCancelledNow;
	}
	,nmeGetIsCancelled: function() {
		return this.nmeIsCancelled;
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash.events.Event
}
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.nmeCreate = function(type,event,local,target) {
	var nmeMouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) nmeMouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) nmeMouseDown = false; else if(event.button != null) {
				if(event.button == 0) nmeMouseDown = false; else nmeMouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,nmeMouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.nmeFocusObject = null;
	this.nmeFocusObjectActivated = false;
	this.nmeWindowWidth = width;
	this.nmeWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.nmeStageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.nmeWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.nmeWindowHeight);
	this.nmePointInPathMode = flash.display.Graphics.nmeDetectIsPointInPathMode();
	this.nmeMouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.nmeTouchInfo = [];
	this.nmeUIEventsQueue = new Array(1000);
	this.nmeUIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.nmeWindowWidth;
	}
	,get_stageHeight: function() {
		return this.nmeWindowHeight;
	}
	,get_stage: function() {
		return flash.Lib.nmeGetStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.nmeShowDefaultContextMenu && this.nmeShowDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.nmeDisableRightClick(); else flash.Lib.nmeEnableRightClick();
		}
		this.nmeShowDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.nmeShowDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(nmeRequestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.nmeInterval = 1000.0 / speed | 0;
		this.nmeFrameRate = speed;
		this.nmeUpdateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.nmeFrameRate;
	}
	,set_focus: function(inObj) {
		this.nmeOnFocus(inObj);
		return this.nmeFocusObject;
	}
	,get_focus: function() {
		return this.nmeFocusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.nmeDisableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.nmeEnableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_backgroundColor: function(col) {
		return this.nmeBackgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.nmeBackgroundColour;
	}
	,nmeOnTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.nmeCreate(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
			obj.nmeFireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.nmeDragObject != null) $this.nmeDrag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.nmeFireEvent(flash.events.MouseEvent.nmeCreate(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.nmeCreate(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
		}
	}
	,nmeOnResize: function(inW,inH) {
		this.nmeWindowWidth = inW;
		this.nmeWindowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.nmeBroadcast(event);
	}
	,nmeOnMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.nmeDragObject != null) this.nmeDrag(point);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.nmeCreate(type,event,local,obj);
			this.nmeCheckInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.nmeOnFocus(stack[stack.length - 1]);
			obj.nmeFireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.nmeCreate(type,event,point,null);
			this.nmeCheckInOuts(evt,stack);
		}
	}
	,nmeOnFocus: function(target) {
		if(target != this.nmeFocusObject) {
			if(this.nmeFocusObject != null) this.nmeFocusObject.nmeFireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.nmeFocusObject,false,0));
			target.nmeFireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.nmeFocusObject = target;
		}
	}
	,nmeOnKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.nmeFocusObject == null) this.nmeGetInteractiveObjectStack(stack); else this.nmeFocusObject.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.nmeFireEvent(evt);
		}
	}
	,nmeHandleOrientationChange: function() {
	}
	,nmeHandleAccelerometer: function(evt) {
		flash.display.Stage.nmeAcceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.nmeAcceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.nmeAcceleration.z = evt.accelerationIncludingGravity.z;
	}
	,toString: function() {
		return "[Stage id=" + this._nmeId + "]";
	}
	,nmeUpdateNextWake: function() {
		if(this.nmeFrameRate == 0) {
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			nmeRequestAnimationFrame($bind(this,this.nmeUpdateNextWake));
			this.nmeStageRender();
		} else {
			js.Browser.window.clearInterval(this.nmeTimer);
			this.nmeTimer = js.Browser.window.setInterval($bind(this,this.nmeStageRender),this.nmeInterval);
		}
	}
	,nmeStopDrag: function(sprite) {
		this.nmeDragBounds = null;
		this.nmeDragObject = null;
	}
	,nmeStartDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.nmeDragBounds = bounds == null?null:bounds.clone();
		this.nmeDragObject = sprite;
		if(this.nmeDragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.nmeDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - mouse.x;
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - mouse.y;
			}
		}
	}
	,nmeStageRender: function(_) {
		if(!this.nmeStageActive) {
			this.nmeOnResize(this.nmeWindowWidth,this.nmeWindowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.nmeBroadcast(event);
			this.nmeStageActive = true;
		}
		var _g1 = 0, _g = this.nmeUIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeUIEventsQueue[i] != null) this.nmeProcessStageEvent(this.nmeUIEventsQueue[i]);
		}
		this.nmeUIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.nmeBroadcast(event);
		if(this.nmeInvalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.nmeBroadcast(event1);
		}
		this.nmeRenderAll();
	}
	,nmeRenderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.nmeRender(canvas);
	}
	,nmeRenderAll: function() {
		this.nmeRender(null,null);
	}
	,nmeQueueStageEvent: function(evt) {
		this.nmeUIEventsQueue[this.nmeUIEventsQueueIndex++] = evt;
	}
	,nmeProcessStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.nmeOnResize(flash.Lib.nmeGetWidth(),flash.Lib.nmeGetHeight());
			break;
		case "focus":
			this.nmeOnFocus(this);
			if(!this.nmeFocusObjectActivated) {
				this.nmeFocusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.nmeFocusObjectActivated) {
				this.nmeFocusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.nmeOnMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.nmeOnMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.nmeHandleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.nmeHandleOrientationChange();
			break;
		default:
		}
	}
	,nmeIsOnStage: function() {
		return true;
	}
	,nmeDrag: function(point) {
		var p = this.nmeDragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.nmeDragOffsetX;
		var y = point.y + this.nmeDragOffsetY;
		if(this.nmeDragBounds != null) {
			if(x < this.nmeDragBounds.x) x = this.nmeDragBounds.x; else if(x > this.nmeDragBounds.get_right()) x = this.nmeDragBounds.get_right();
			if(y < this.nmeDragBounds.y) y = this.nmeDragBounds.y; else if(y > this.nmeDragBounds.get_bottom()) y = this.nmeDragBounds.get_bottom();
		}
		this.nmeDragObject.set_x(x);
		this.nmeDragObject.set_y(y);
	}
	,nmeCheckInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.nmeMouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.nmeMouseChanges:flash.display.Stage.nmeTouchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.nmeCreateSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.nmeCreateSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.nmeMouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,invalidate: function() {
		this.nmeInvalid = true;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : ["flash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : ["flash","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : ["flash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,__class__: flash.errors.Error
}
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text) {
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.nmeCreate = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	nmeCreateSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	nmeApplyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,nmePreFilter: function(surface) {
	}
	,clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,__class__: flash.filters.BitmapFilter
}
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this._nmeCached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	nmeApplyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this._nmeCached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this._nmeCached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.filters.GlowFilter = function(in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout) {
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 6.0;
	if(in_blurX == null) in_blurX = 6.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	flash.filters.DropShadowFilter.call(this,0,0,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,false);
};
$hxClasses["flash.filters.GlowFilter"] = flash.filters.GlowFilter;
flash.filters.GlowFilter.__name__ = ["flash","filters","GlowFilter"];
flash.filters.GlowFilter.__super__ = flash.filters.DropShadowFilter;
flash.filters.GlowFilter.prototype = $extend(flash.filters.DropShadowFilter.prototype,{
	__class__: flash.filters.GlowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTranslateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTransformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,nmeTransformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.nmeMatrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.nmeGetFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,nmeSetMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,nmeSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.nmeSoundChannels = new haxe.ds.IntMap();
	this.nmeSoundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.nmeCanPlayMime = function(mime) {
	var audio = js.Browser.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime,null));
}
flash.media.Sound.nmeCanPlayType = function(extension) {
	var mime = flash.media.Sound.nmeMimeForExtension(extension);
	if(mime == null) return false;
	return flash.media.Sound.nmeCanPlayMime(mime);
}
flash.media.Sound.nmeMimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	nmeOnSoundLoaded: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,nmeOnSoundLoadError: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.nmeStreamUrl == null) return null;
		var self = this;
		var curIdx = this.nmeSoundIdx;
		var removeRef = function() {
			self.nmeSoundChannels.remove(curIdx);
		};
		var channel = flash.media.SoundChannel.nmeCreate(this.nmeStreamUrl,startTime,loops,sndTransform,removeRef);
		this.nmeSoundChannels.set(curIdx,channel);
		this.nmeSoundIdx++;
		var audio = channel.nmeAudio;
		return channel;
	}
	,nmeRemoveEventListeners: function() {
		this.nmeSoundCache.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded),false);
		this.nmeSoundCache.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError),false);
	}
	,nmeLoad: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.nmeStreamUrl = stream.url;
		try {
			this.nmeSoundCache = new flash.net.URLLoader();
			this.nmeAddEventListeners();
			this.nmeSoundCache.load(stream);
		} catch( e ) {
		}
	}
	,nmeAddEventListeners: function() {
		this.nmeSoundCache.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded));
		this.nmeSoundCache.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError));
	}
	,load: function(stream,context) {
		this.nmeLoad(stream,context);
	}
	,close: function() {
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	flash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.nmeAudioCurrentLoop = 1;
	this.nmeAudioTotalLoops = 1;
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.nmeCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new flash.media.SoundChannel();
	channel.nmeAudio = js.Browser.document.createElement("audio");
	channel.nmeRemoveRef = removeRef;
	channel.nmeAudio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.nmeAudio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.nmeAudio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.nmeAudio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.nmeAudioTotalLoops = loops;
		channel.nmeAudio.loop = true;
	}
	channel.nmeStartTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.nmeAudio.currentTime = channel.nmeStartTime;
			channel.nmeAudio.play();
			channel.nmeAudio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.nmeAudio.addEventListener("canplaythrough",onLoad,false);
	} else channel.nmeAudio.autoplay = true;
	channel.nmeAudio.src = src;
	return channel;
}
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.nmeAudio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		if(this.nmeAudio != null) this.nmeAudio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.loop = false;
			this.stop();
		} else this.nmeAudioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.nmeAudio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.nmeAudio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.nmeAudio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.nmeAudio = null;
			var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		} else {
			this.nmeAudio.currentTime = this.nmeStartTime;
			this.nmeAudio.play();
		}
	}
	,__onProgress: function(evt) {
	}
	,stop: function() {
		if(this.nmeAudio != null) {
			this.nmeAudio.pause();
			this.nmeAudio = null;
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		}
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.nmeOfBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : ["flash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
}
flash.system.Security = function() { }
$hxClasses["flash.system.Security"] = flash.system.Security;
flash.system.Security.__name__ = ["flash","system","Security"];
flash.system.Security.allowDomain = function(p1,p2,p3,p4,p5) {
}
flash.system.Security.allowInsecureDomain = function(p1,p2,p3,p4,p5) {
}
flash.system.Security.loadPolicyFile = function(url) {
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.system.System = function() { }
$hxClasses["flash.system.System"] = flash.system.System;
flash.system.System.__name__ = ["flash","system","System"];
flash.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
flash.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
}
flash.system.System.gc = function() {
}
flash.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
}
flash.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
}
flash.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
}
flash.system.System.get_totalMemory = function() {
	return 0;
}
flash.system.System.get_vmVersion = function() {
	return "nme - tip";
}
flash.text = {}
flash.text.Font = function() {
	this.nmeMetrics = [];
	this.nmeFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.nmeFontData == null) {
		flash.text.Font.nmeFontData = [];
		flash.text.Font.nmeFontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.nmeRegisteredFonts.slice();
}
flash.text.Font.nmeOfResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.nmeFontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.nmeFontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.nmeOfResource(Reflect.field(font,"resourceName")));
		flash.text.Font.nmeRegisteredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.nmeFontData[this.fontName] == null) try {
			flash.text.Font.nmeOfResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.nmeFontData[this.fontName] != null) try {
			this.nmeGlyphData = flash.text.Font.nmeFontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,nmeSetScale: function(scale) {
		this.nmeFontScale = scale / 1024;
	}
	,nmeRender: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.nmeGlyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale,inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			}
		}
	}
	,nmeGetAdvance: function(inGlyph,height) {
		var m = this.nmeMetrics[inGlyph];
		if(m == null) {
			var glyph = this.nmeGlyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.nmeMetrics[inGlyph] = m = glyph._width * this.nmeFontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.nmeGlyphData.exists(HxOverrides.cca(str,0));
	}
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : ["flash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : ["flash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : ["flash","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.nmeGraphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.nmeInputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.nmeInputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.nmeInputEnabled) flash.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true); else flash.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,false);
		} else if(this.nmeInputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var nmeSurface = this.nmeGraphics.nmeSurface;
			if(flash.Lib.nmeIsOnStage(nmeSurface)) {
				flash.Lib.nmeAppendSurface(wrapper);
				flash.Lib.nmeCopyStyle(nmeSurface,wrapper);
				flash.Lib.nmeSwapSurface(nmeSurface,wrapper);
				flash.Lib.nmeRemoveSurface(nmeSurface);
			}
			this.nmeGraphics = destination;
			this.nmeGraphics.nmeExtent.width = wrapper.width;
			this.nmeGraphics.nmeExtent.height = wrapper.height;
		} else this.nmeGraphics.nmeSurface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.nmeGraphics.lineStyle();
					this.nmeGraphics.beginFill(2105440);
					this.nmeGraphics.drawRect(x,inY,adv,full_height);
					this.nmeGraphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.nmeGraphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.nmeGraphics.clear();
		if(this.background) {
			this.nmeGraphics.beginFill(this.backgroundColor);
			this.nmeGraphics.drawRect(0,0,this.get_width(),this.get_height());
			this.nmeGraphics.endFill();
		}
		this.nmeGraphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.nmeInputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.nmeGetAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch(_g.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.nmeGraphics.endFill();
			this.nmeGraphics.lineStyle(1,this.borderColor,1,true);
			this.nmeGraphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.nmeGraphics.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.nmeGraphics);
			flash.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.nmeGraphics);
				flash.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			flash.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : ["flash","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.nmeSetScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.nmeClearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.nmeRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,nmeGetAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.nmeGetAdvance(inChar,this.mHeight);
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = function() {
};
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFieldAutoSize.prototype = {
	__class__: flash.text.TextFieldAutoSize
}
flash.text.TextFieldType = function() {
};
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFieldType.prototype = {
	__class__: flash.text.TextFieldType
}
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : ["flash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.nmeConvertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.nmeConvertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.ui.Mouse = function() {
};
$hxClasses["flash.ui.Mouse"] = flash.ui.Mouse;
flash.ui.Mouse.__name__ = ["flash","ui","Mouse"];
flash.ui.Mouse.hide = function() {
}
flash.ui.Mouse.show = function() {
}
flash.ui.Mouse.prototype = {
	__class__: flash.ui.Mouse
}
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.nmeOfBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this._nmeResizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this._nmeResizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this._nmeResizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this._nmeResizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,nmeSet: function(pos,v) {
		var data = this.data;
		data.setUint8(pos,v);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeGet: function(pos) {
		var data = this.data;
		return data.getUint8(pos);
	}
	,nmeFromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,clear: function() {
		if(this.allocated < 0) this._nmeResizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this._nmeResizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,_nmeResizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype = {
	serialize: function(v) {
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 0:
			this.buf.b += "n";
			break;
		case 1:
			if(v == 0) {
				this.buf.b += "z";
				return;
			}
			this.buf.b += "i";
			this.buf.b += Std.string(v);
			break;
		case 2:
			if(Math.isNaN(v)) this.buf.b += "k"; else if(!Math.isFinite(v)) this.buf.b += Std.string(v < 0?"m":"p"); else {
				this.buf.b += "d";
				this.buf.b += Std.string(v);
			}
			break;
		case 3:
			this.buf.b += Std.string(v?"t":"f");
			break;
		case 6:
			var c = $e[2];
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) return;
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += "a";
				var l = v.length;
				var _g1 = 0;
				while(_g1 < l) {
					var i = _g1++;
					if(v[i] == null) ucount++; else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += "n"; else {
								this.buf.b += "u";
								this.buf.b += Std.string(ucount);
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) this.buf.b += "n"; else {
						this.buf.b += "u";
						this.buf.b += Std.string(ucount);
					}
				}
				this.buf.b += "h";
				break;
			case List:
				this.buf.b += "l";
				var v1 = v;
				var $it0 = v1.iterator();
				while( $it0.hasNext() ) {
					var i = $it0.next();
					this.serialize(i);
				}
				this.buf.b += "h";
				break;
			case Date:
				var d = v;
				this.buf.b += "v";
				this.buf.b += Std.string(HxOverrides.dateStr(d));
				break;
			case haxe.ds.StringMap:
				this.buf.b += "b";
				var v1 = v;
				var $it1 = v1.keys();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					this.serializeString(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += "h";
				break;
			case haxe.ds.IntMap:
				this.buf.b += "q";
				var v1 = v;
				var $it2 = v1.keys();
				while( $it2.hasNext() ) {
					var k = $it2.next();
					this.buf.b += ":";
					this.buf.b += Std.string(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += "h";
				break;
			case haxe.ds.ObjectMap:
				this.buf.b += "M";
				var v1 = v;
				var $it3 = v1.keys();
				while( $it3.hasNext() ) {
					var k = $it3.next();
					var id = Reflect.field(k,"__id__");
					Reflect.deleteField(k,"__id__");
					this.serialize(k);
					k.__id__ = id;
					this.serialize(v1.h[k.__id__]);
				}
				this.buf.b += "h";
				break;
			case haxe.io.Bytes:
				var v1 = v;
				var i = 0;
				var max = v1.length - 2;
				var charsBuf = new StringBuf();
				var b64 = haxe.Serializer.BASE64;
				while(i < max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					var b3 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt((b2 << 2 | b3 >> 6) & 63));
					charsBuf.b += Std.string(b64.charAt(b3 & 63));
				}
				if(i == max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt(b2 << 2 & 63));
				} else if(i == max + 1) {
					var b1 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt(b1 << 4 & 63));
				}
				var chars = charsBuf.b;
				this.buf.b += "s";
				this.buf.b += Std.string(chars.length);
				this.buf.b += ":";
				this.buf.b += Std.string(chars);
				break;
			default:
				this.cache.pop();
				if(v.hxSerialize != null) {
					this.buf.b += "C";
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					v.hxSerialize(this);
					this.buf.b += "g";
				} else {
					this.buf.b += "c";
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					this.serializeFields(v);
				}
			}
			break;
		case 4:
			if(this.useCache && this.serializeRef(v)) return;
			this.buf.b += "o";
			this.serializeFields(v);
			break;
		case 7:
			var e = $e[2];
			if(this.useCache && this.serializeRef(v)) return;
			this.cache.pop();
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(e));
			if(this.useEnumIndex) {
				this.buf.b += ":";
				this.buf.b += Std.string(v[1]);
			} else this.serializeString(v[0]);
			this.buf.b += ":";
			var l = v.length;
			this.buf.b += Std.string(l - 2);
			var _g1 = 2;
			while(_g1 < l) {
				var i = _g1++;
				this.serialize(v[i]);
			}
			this.cache.push(v);
			break;
		case 5:
			throw "Cannot serialize function";
			break;
		default:
			throw "Cannot serialize " + Std.string(v);
		}
	}
	,serializeFields: function(v) {
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				this.buf.b += Std.string(i);
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			this.buf.b += Std.string(x);
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = StringTools.urlEncode(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += ":";
		this.buf.b += Std.string(s);
	}
	,toString: function() {
		return this.buf.b;
	}
	,__class__: haxe.Serializer
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : ["haxe","_Template","TemplateExpr"], __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.GenericCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
$hxClasses["haxe.ds.GenericCell"] = haxe.ds.GenericCell;
haxe.ds.GenericCell.__name__ = ["haxe","ds","GenericCell"];
haxe.ds.GenericCell.prototype = {
	__class__: haxe.ds.GenericCell
}
haxe.ds.GenericStack = function() {
};
$hxClasses["haxe.ds.GenericStack"] = haxe.ds.GenericStack;
haxe.ds.GenericStack.__name__ = ["haxe","ds","GenericStack"];
haxe.ds.GenericStack.prototype = {
	iterator: function() {
		var l = this.head;
		return { hasNext : function() {
			return l != null;
		}, next : function() {
			var k = l;
			l = k.next;
			return k.elt;
		}};
	}
	,remove: function(v) {
		var prev = null;
		var l = this.head;
		while(l != null) {
			if(l.elt == v) {
				if(prev == null) this.head = l.next; else prev.next = l.next;
				break;
			}
			prev = l;
			l = l.next;
		}
		return l != null;
	}
	,add: function(item) {
		this.head = new haxe.ds.GenericCell(item,this.head);
	}
	,__class__: haxe.ds.GenericStack
}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.xml = {}
haxe.xml.Parser = function() { }
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
}
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i = s.charCodeAt(1) == 120?Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)):Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.b += Std.string(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.b += Std.string(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = str.charCodeAt(++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
}
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
js.Cookie = function() { }
$hxClasses["js.Cookie"] = js.Cookie;
js.Cookie.__name__ = ["js","Cookie"];
js.Cookie.set = function(name,value,expireDelay,path,domain) {
	var s = name + "=" + StringTools.urlEncode(value);
	if(expireDelay != null) {
		var d = DateTools.delta(new Date(),expireDelay * 1000);
		s += ";expires=" + d.toGMTString();
	}
	if(path != null) s += ";path=" + path;
	if(domain != null) s += ";domain=" + domain;
	js.Browser.document.cookie = s;
}
js.Cookie.all = function() {
	var h = new haxe.ds.StringMap();
	var a = js.Browser.document.cookie.split(";");
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		e = StringTools.ltrim(e);
		var t = e.split("=");
		if(t.length < 2) continue;
		h.set(t[0],StringTools.urlDecode(t[1]));
	}
	return h;
}
js.Cookie.get = function(name) {
	return js.Cookie.all().get(name);
}
js.Cookie.exists = function(name) {
	return js.Cookie.all().exists(name);
}
js.Cookie.remove = function(name,path,domain) {
	js.Cookie.set(name,"",-10,path,domain);
}
var nme = {}
nme.AssetData = function() { }
$hxClasses["nme.AssetData"] = nme.AssetData;
nme.AssetData.__name__ = ["nme","AssetData"];
nme.AssetData.initialize = function() {
	if(!nme.AssetData.initialized) {
		nme.AssetData.path.set("assets/audio/ButtonDown.mp3","assets/audio/ButtonDown.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/ButtonDown.mp3",value);
		nme.AssetData.path.set("assets/audio/ButtonDown.ogg","assets/audio/ButtonDown.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/ButtonDown.ogg",value);
		nme.AssetData.path.set("assets/audio/ButtonOver.mp3","assets/audio/ButtonOver.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/ButtonOver.mp3",value);
		nme.AssetData.path.set("assets/audio/ButtonOver.ogg","assets/audio/ButtonOver.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/ButtonOver.ogg",value);
		nme.AssetData.path.set("assets/audio/MusicGame.mp3","assets/audio/MusicGame.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/MusicGame.mp3",value);
		nme.AssetData.path.set("assets/audio/MusicGame.ogg","assets/audio/MusicGame.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/MusicGame.ogg",value);
		nme.AssetData.path.set("assets/audio/MusicMenu.mp3","assets/audio/MusicMenu.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/MusicMenu.mp3",value);
		nme.AssetData.path.set("assets/audio/MusicMenu.ogg","assets/audio/MusicMenu.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/MusicMenu.ogg",value);
		nme.AssetData.path.set("assets/audio/Sfx1.mp3","assets/audio/Sfx1.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx1.mp3",value);
		nme.AssetData.path.set("assets/audio/Sfx1.ogg","assets/audio/Sfx1.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx1.ogg",value);
		nme.AssetData.path.set("assets/audio/Sfx2.mp3","assets/audio/Sfx2.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx2.mp3",value);
		nme.AssetData.path.set("assets/audio/Sfx2.ogg","assets/audio/Sfx2.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx2.ogg",value);
		nme.AssetData.path.set("assets/audio/Sfx3.mp3","assets/audio/Sfx3.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx3.mp3",value);
		nme.AssetData.path.set("assets/audio/Sfx3.ogg","assets/audio/Sfx3.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx3.ogg",value);
		nme.AssetData.path.set("assets/audio/Sfx4.mp3","assets/audio/Sfx4.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx4.mp3",value);
		nme.AssetData.path.set("assets/audio/Sfx4.ogg","assets/audio/Sfx4.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/audio/Sfx4.ogg",value);
		nme.AssetData.path.set("assets/ButtonOver.png","assets/ButtonOver.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/ButtonOver.png",value);
		nme.AssetData.path.set("assets/ButtonUp.png","assets/ButtonUp.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/ButtonUp.png",value);
		nme.AssetData.className.set("assets/fonts/orbitron.ttf",nme.NME_assets_fonts_orbitron_ttf);
		var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
		nme.AssetData.type.set("assets/fonts/orbitron.ttf",value);
		nme.AssetData.path.set("assets/overlay/buttons/BackOver.png","assets/overlay/buttons/BackOver.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/BackOver.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/BackUp.png","assets/overlay/buttons/BackUp.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/BackUp.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/MuteOver.png","assets/overlay/buttons/MuteOver.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/MuteOver.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/MuteUp.png","assets/overlay/buttons/MuteUp.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/MuteUp.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/PauseOver.png","assets/overlay/buttons/PauseOver.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/PauseOver.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/PauseUp.png","assets/overlay/buttons/PauseUp.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/PauseUp.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/UnmuteOver.png","assets/overlay/buttons/UnmuteOver.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/UnmuteOver.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/UnmuteUp.png","assets/overlay/buttons/UnmuteUp.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/UnmuteUp.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/UnpauseOver.png","assets/overlay/buttons/UnpauseOver.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/UnpauseOver.png",value);
		nme.AssetData.path.set("assets/overlay/buttons/UnpauseUp.png","assets/overlay/buttons/UnpauseUp.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/buttons/UnpauseUp.png",value);
		nme.AssetData.path.set("assets/overlay/OverlayBackground.png","assets/overlay/OverlayBackground.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/overlay/OverlayBackground.png",value);
		nme.AssetData.path.set("assets/scenes/Background.png","assets/scenes/Background.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/scenes/Background.png",value);
		nme.AssetData.path.set("assets/Sphere.png","assets/Sphere.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/Sphere.png",value);
		nme.AssetData.initialized = true;
	}
}
nme.NME_assets_fonts_orbitron_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["nme.NME_assets_fonts_orbitron_ttf"] = nme.NME_assets_fonts_orbitron_ttf;
nme.NME_assets_fonts_orbitron_ttf.__name__ = ["nme","NME_assets_fonts_orbitron_ttf"];
nme.NME_assets_fonts_orbitron_ttf.__super__ = flash.text.Font;
nme.NME_assets_fonts_orbitron_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: nme.NME_assets_fonts_orbitron_ttf
});
var openfl = {}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.__properties__ = {get_type:"get_type",get_path:"get_path",get_library:"get_library",get_id:"get_id"}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		nme.AssetData.initialize();
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id) && nme.AssetData.type.get(id) == openfl.AssetType.IMAGE) {
		if(useCache && openfl.Assets.cachedBitmapData.exists(id)) return openfl.Assets.cachedBitmapData.get(id); else {
			var data = (js.Boot.__cast(ApplicationMain.loaders.get(nme.AssetData.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
			if(useCache) openfl.Assets.cachedBitmapData.set(id,data);
			return data;
		}
	} else if(id.indexOf(":") > -1) {
		var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
		var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
		if(nme.AssetData.library.exists(libraryName)) {
		} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id)) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(nme.AssetData.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			var bytes1 = new flash.utils.ByteArray();
			bytes1.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getFont = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id) && nme.AssetData.type.get(id) == openfl.AssetType.FONT) return js.Boot.__cast(Type.createInstance(nme.AssetData.className.get(id),[]) , flash.text.Font); else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getSound = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id)) {
		var type = nme.AssetData.type.get(id);
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) return new flash.media.Sound(new flash.net.URLRequest(nme.AssetData.path.get(id)));
	}
	console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
}
openfl.Assets.resolveClass = function(name) {
	name = StringTools.replace(name,"native.","flash.");
	name = StringTools.replace(name,"browser.","flash.");
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	name = StringTools.replace(name,"native.","flash.");
	name = StringTools.replace(name,"browser.","flash.");
	return Type.resolveEnum(name);
}
openfl.Assets.get_id = function() {
	openfl.Assets.initialize();
	var ids = [];
	var $it0 = nme.AssetData.type.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		ids.push(key);
	}
	return ids;
}
openfl.Assets.get_library = function() {
	openfl.Assets.initialize();
	return nme.AssetData.library;
}
openfl.Assets.get_path = function() {
	openfl.Assets.initialize();
	return nme.AssetData.path;
}
openfl.Assets.get_type = function() {
	openfl.Assets.initialize();
	return nme.AssetData.type;
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MUSIC","SOUND","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",3];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",4];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",5];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.LibraryType = $hxClasses["openfl.LibraryType"] = { __ename__ : ["openfl","LibraryType"], __constructs__ : ["SWF","SWF_LITE","XFL"] }
openfl.LibraryType.SWF = ["SWF",0];
openfl.LibraryType.SWF.toString = $estr;
openfl.LibraryType.SWF.__enum__ = openfl.LibraryType;
openfl.LibraryType.SWF_LITE = ["SWF_LITE",1];
openfl.LibraryType.SWF_LITE.toString = $estr;
openfl.LibraryType.SWF_LITE.__enum__ = openfl.LibraryType;
openfl.LibraryType.XFL = ["XFL",2];
openfl.LibraryType.XFL.toString = $estr;
openfl.LibraryType.XFL.__enum__ = openfl.LibraryType;
openfl.display = {}
openfl.display.Tilesheet = function(image) {
	this.nmeBitmap = image;
	this.nmeCenterPoints = new Array();
	this.nmeTileRects = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.nmeTileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.nmeCenterPoints.push(centerPoint);
		return this.nmeTileRects.length - 1;
	}
	,__class__: openfl.display.Tilesheet
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
haxe.Resource.content = [{ name : "config", data : "s683:PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8%DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJhc3NldHNfZm9udHNfb3JiaXRyb25fdHRmIiAvPg0KCTwvc2V0dGluZ3M%DQoJPGd1aT4NCgkJPGJ1dHRvbnMgbmV4dD0iTkVYVCIgc3RhcnQ9IlNUQVJUIiAvPg0KCQk8c2NlbmVzPg0KCQkJPGludHJvIHRpdGxlPSJJTlRST0RVQ1RJT04iIGluc3RydWN0aW9ucz0iQ2xpY2sgb24gYWxsIHRoZSBpbnZhZGVycyBhcyBmYXN0IGFzIHBvc3NpYmxlISIgLz4NCgkJCTxnYW1lIC8%DQoJCQk8cmVzdWx0cyB0aXRsZT0iR0FNRSBPVkVSIiB3aW49IkEgbmV3IHBlcnNvbmFsIGJlc3Qgb2YgIiBsb3NlPSJZb3UgZGlkbid0IGJlYXQgeW91ciBwcmV2aW91cyB0aW1lIG9mICIgLz4NCgkJPC9zY2VuZXM%DQoJPC9ndWk%DQo8L2RhdGE%DQo"},{ name : "NME_assets_fonts_orbitron_ttf", data : "s111907:b3k0Omhhc2hxOjExMW95Njphc2NlbnRkOTk2LjM1Mnk0OmRhdGFhZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4NzUuNTJkNjU0LjMzNmQ5MzUuOTM2ZDYxMC44MTZkOTc5Ljk2OGQ1NjcuMjk2ZDEwMjRkNTA1Ljg1NmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDg2Ny4zMjhkNDk3LjY2NGQ4NjcuMzI4ZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJoeTY6X3dpZHRoZDcwOC42MDh5NDp4TWF4ZDY1NC4zMzZ5NDp4TWluZDUyLjIyNHk0OnlNYXhkNTkzLjkyeTQ6eU1pbmQweTc6X2hlaWdodGQ1NDEuNjk2eTc6bGVhZGluZ2QyMDcuODcyeTc6ZGVzY2VudGQyMzUuNTJ5ODpjaGFyQ29kZWkxMTF5MTU6bGVmdHNpZGVCZWFyaW5nZDUyLjIyNHkxMjphZHZhbmNlV2lkdGhkNzA4LjYwOHk4OmNvbW1hbmRzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmhnOjIyM29SMWQ5OTYuMzUyUjJhZDc4Mi4zMzZkNDIyLjkxMmQ3ODIuMzM2ZDU4Mi42NTZkNzgyLjMzNmQ2MjAuNTQ0ZDc2NC45MjhkNjUzLjMxMmQ3ODIuMzM2ZDY4NS4wNTZkNzgyLjMzNmQ3MjIuOTQ0ZDc4Mi4zMzZkODc1LjUyZDc4Mi4zMzZkOTM1LjkzNmQ3MzguMzA0ZDk3OS45NjhkNjk0LjI3MmQxMDI0ZDYzMi44MzJkMTAyNGQyNzkuNTUyZDEwMjRkMjc5LjU1MmQ4NjcuMzI4ZDYyNS42NjRkODY3LjMyOGQ2MjUuNjY0ZDczMi4xNmQyNzkuNTUyZDczMi4xNmQyNzkuNTUyZDU4NC43MDRkNjI1LjY2NGQ1ODQuNzA0ZDYyNS42NjRkNDU4Ljc1MWQyMTUuMDRkNDU4Ljc1MWQyMTUuMDRkMTAyNGQ1OC4zNjhkMTAyNGQ1OC4zNjhkNDQ5LjUzNWQ1OC4zNjhkMzg4LjA5NmQxMDIuNGQzNDQuNTc2ZDE0Ni40MzJkMzAxLjA1NmQyMDcuODcyZDMwMS4wNTZkNjMyLjgzMmQzMDEuMDU2ZDY4OC4xMjhkMzAxLjA1NmQ3MzAuNjI0ZDMzNS44NzFkNzczLjEyZDM3MC42ODhkNzgyLjMzNmQ0MjIuOTEyaFIzZDg1Mi45OTJSNGQ3ODIuMzM2UjVkNTguMzY4UjZkNzIyLjk0NFI3ZDBSOGQ2NjQuNTc2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjIzUjEyZDU4LjM2OFIxM2Q4NTIuOTkyUjE0YWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2hnOjExMG9SMWQ5OTYuMzUyUjJhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4aFIzZDcxMi43MDRSNGQ2NTcuNDA4UjVkNTUuMjk2UjZkNTkzLjkyUjdkMFI4ZDUzOC42MjRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMTBSMTJkNTUuMjk2UjEzZDcxMi43MDRSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmhnOjIyMm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIyMlIxMmQwUjEzZDBSMTRhaGc6MTA5b1IxZDk5Ni4zNTJSMmFkNzcwLjA0OGQ0MzAuMDhkODMxLjQ4OGQ0MzAuMDhkODc1LjAwOGQ0NzQuMTExZDkxOC41MjhkNTE4LjE0NGQ5MTguNTI4ZDU3OC41NmQ5MTguNTI4ZDEwMjRkNzYyLjg4ZDEwMjRkNzYyLjg4ZDU4Ni43NTJkNTY2LjI3MmQ1ODYuNzUyZDU2Ni4yNzJkMTAyNGQ0MDguNTc2ZDEwMjRkNDA4LjU3NmQ1ODYuNzUyZDIxMS45NjhkNTg2Ljc1MmQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDQzMC4wOGQ3NzAuMDQ4ZDQzMC4wOGhSM2QxMDAxLjQ3MlI0ZDkxOC41MjhSNWQ1NS4yOTZSNmQ1OTMuOTJSN2QwUjhkNTM4LjYyNFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEwOVIxMmQ1NS4yOTZSMTNkMTAwMS40NzJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjIxb1IxZDk5Ni4zNTJSMmFkNjY4LjY3MmQyODYuNzJkODYwLjE2ZDI4Ni43MmQ1MTguMTQ0ZDc0OS41NjhkNTE4LjE0NGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkNzQ4LjU0NGQyMjQuMjU2ZDU2OC4zMTlkMTcuNDA4ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ0MzguMjcyZDU3Ny41MzZkNjY4LjY3MmQyODYuNzJkMzM2Ljg5NmQyMzUuNTE5ZDM4OS4xMmQyNy42NDhkNTQ5Ljg4OGQyNy42NDhkNDk3LjY2NGQyMzUuNTE5ZDMzNi44OTZkMjM1LjUxOWhSM2Q4MjUuMzQ0UjRkODYwLjE2UjVkMTcuNDA4UjZkOTk2LjM1MlI3ZDBSOGQ5NzguOTQ0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjIxUjEyZDE3LjQwOFIxM2Q4MjUuMzQ0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA4b1IxZDk5Ni4zNTJSMmFkNTMuMjQ4ZDIzNC40OTVkMjEwLjk0NGQyMzQuNDk1ZDIxMC45NDRkODY3LjMyOGQzMzAuNzUyZDg2Ny4zMjhkMzMwLjc1MmQxMDI0ZDIwMS43MjhkMTAyNGQxNDEuMzEyZDEwMjRkOTcuMjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQyMzQuNDk1aFIzZDM0NS4wODhSNGQzMzAuNzUyUjVkNTMuMjQ4UjZkNzg5LjUwNFI3ZDBSOGQ3MzYuMjU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTA4UjEyZDUzLjI0OFIxM2QzNDUuMDg4UjE0YWkxaTJpMmkyaTJpMmkzaTNpMmhnOjIyMG9SMWQ5OTYuMzUyUjJhZDIxNC4wMTZkMjg2LjcyZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQyODYuNzJkNzkyLjU3NmQyODYuNzJkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmQ2MTYuNDQ4ZDc3LjgyM2Q2MTYuNDQ4ZDIzNS41MTlkNDU4Ljc1MmQyMzUuNTE5ZDQ1OC43NTJkNzcuODIzZDYxNi40NDhkNzcuODIzZDM5Ny4zMTJkNzcuODIzZDM5Ny4zMTJkMjM1LjUxOWQyNDAuNjRkMjM1LjUxOWQyNDAuNjRkNzcuODIzZDM5Ny4zMTJkNzcuODIzaFIzZDg0Ny44NzJSNGQ3OTIuNTc2UjVkNTUuMjk2UjZkOTQ2LjE3NlI3ZDBSOGQ4OTAuODhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMjBSMTJkNTUuMjk2UjEzZDg0Ny44NzJSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwN29SMWQ5OTYuMzUyUjJhZDQ5My41NjhkNDMwLjA4ZDY1MS4yNjRkNDMwLjA4ZDY1MS4yNjRkNDgzLjMyOGQ0MzAuMDhkNzI3LjA0ZDY1MS4yNjRkOTcwLjc1MmQ2NTEuMjY0ZDEwMjRkNDkzLjU2OGQxMDI0ZDI5MS44NGQ4MDUuODg4ZDIxMS45NjhkODA1Ljg4OGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDIzNS41MTlkMjExLjk2OGQyMzUuNTE5ZDIxMS45NjhkNjQ4LjE5MmQyOTEuODRkNjQ4LjE5MmQ0OTMuNTY4ZDQzMC4wOGhSM2Q2NjEuNTA0UjRkNjUxLjI2NFI1ZDU1LjI5NlI2ZDc4OC40OFI3ZDBSOGQ3MzMuMTg0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTA3UjEyZDU1LjI5NlIxM2Q2NjEuNTA0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjE5b1IxZDk5Ni4zNTJSMmFkMjE0LjAxNmQyODYuNzJkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDI4Ni43MmQ3OTIuNTc2ZDI4Ni43MmQ3OTIuNTc2ZDg3Mi40NDhkNzkyLjU3NmQ5MzQuOTEyZDc0OC4wMzJkOTc5LjQ1NmQ3MDMuNDg4ZDEwMjRkNjQxLjAyNGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkMjg2LjcyZDIxNC4wMTZkMjg2LjcyZDQwNC40OGQyMzYuNTQzZDI2OC4yODhkMjM2LjU0M2QzODAuOTI4ZDQ4LjEyN2Q0ODMuMzI4ZDQ4LjEyN2Q1OTUuOTY4ZDIzNi41NDNkNDU4Ljc1MmQyMzYuNTQzZDQzMC4wOGQxOTEuNDg3ZDQwNC40OGQyMzYuNTQzaFIzZDg0Ny44NzJSNGQ3OTIuNTc2UjVkNTUuMjk2UjZkOTc1Ljg3MlI3ZDBSOGQ5MjAuNTc2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjE5UjEyZDU1LjI5NlIxM2Q4NDcuODcyUjE0YWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjEwNm9SMWQ5OTYuMzUyUjJhZDU5LjM5MmQyMzUuNTE5ZDIxNi4wNjRkMjM1LjUxOWQyMTYuMDY0ZDM5My4yMTZkNTkuMzkyZDM5My4yMTZkNTkuMzkyZDIzNS41MTlkMjE2LjA2NGQ0MzAuMDhkMjE2LjA2NGQxMDg4LjUxMmQyMTYuMDY0ZDExNDkuOTUyZDE3Mi4wMzJkMTE5My40NzJkMTI4ZDEyMzYuOTkyZDY2LjU2ZDEyMzYuOTkyZC0xOTEuNDg4ZDEyMzYuOTkyZC0xOTEuNDg4ZDEwNzkuMjk2ZDU5LjM5MmQxMDc5LjI5NmQ1OS4zOTJkNDMwLjA4ZDIxNi4wNjRkNDMwLjA4aFIzZDI0NC43MzZSNGQyMTYuMDY0UjVkLTE5MS40ODhSNmQ3ODguNDhSN2QtMjEyLjk5MlI4ZDk3OS45NjhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMDZSMTJkLTE5MS40ODhSMTNkMjQ0LjczNlIxNGFpMWkyaTJpMmkyaTFpMmkzaTNpMmkyaTJpMmkyaGc6MjE4b1IxZDk5Ni4zNTJSMmFkMjE0LjAxNmQyODYuNzJkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDI4Ni43MmQ3OTIuNTc2ZDI4Ni43MmQ3OTIuNTc2ZDg3Mi40NDhkNzkyLjU3NmQ5MzQuOTEyZDc0OC4wMzJkOTc5LjQ1NmQ3MDMuNDg4ZDEwMjRkNjQxLjAyNGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkMjg2LjcyZDIxNC4wMTZkMjg2LjcyZDMyNy42OGQyMzUuNTE5ZDM3OS45MDRkMjcuNjQ4ZDU0MC42NzJkMjcuNjQ4ZDQ4OC40NDhkMjM1LjUxOWQzMjcuNjhkMjM1LjUxOWhSM2Q4NDcuODcyUjRkNzkyLjU3NlI1ZDU1LjI5NlI2ZDk5Ni4zNTJSN2QwUjhkOTQxLjA1NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIxOFIxMmQ1NS4yOTZSMTNkODQ3Ljg3MlIxNGFpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJoZzoxMDVvUjFkOTk2LjM1MlIyYWQ1My4yNDhkMTAyNGQ1My4yNDhkNDMwLjA4ZDIwOS45MmQ0MzAuMDhkMjA5LjkyZDEwMjRkNTMuMjQ4ZDEwMjRkNTMuMjQ4ZDIzNS41MTlkMjA5LjkyZDIzNS41MTlkMjA5LjkyZDM5My4yMTZkNTMuMjQ4ZDM5My4yMTZkNTMuMjQ4ZDIzNS41MTloUjNkMjM0LjQ5NlI0ZDIwOS45MlI1ZDUzLjI0OFI2ZDc4OC40OFI3ZDBSOGQ3MzUuMjMyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTA1UjEyZDUzLjI0OFIxM2QyMzQuNDk2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjE3b1IxZDk5Ni4zNTJSMmFkMjE0LjAxNmQyODYuNzJkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDI4Ni43MmQ3OTIuNTc2ZDI4Ni43MmQ3OTIuNTc2ZDg3Mi40NDhkNzkyLjU3NmQ5MzQuOTEyZDc0OC4wMzJkOTc5LjQ1NmQ3MDMuNDg4ZDEwMjRkNjQxLjAyNGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkMjg2LjcyZDIxNC4wMTZkMjg2LjcyZDQ2Ny45NjhkMjcuNjQ4ZDUyMC4xOTJkMjM1LjUxOWQzNTkuNDI0ZDIzNS41MTlkMzA3LjJkMjcuNjQ4ZDQ2Ny45NjhkMjcuNjQ4aFIzZDg0Ny44NzJSNGQ3OTIuNTc2UjVkNTUuMjk2UjZkOTk2LjM1MlI3ZDBSOGQ5NDEuMDU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjE3UjEyZDU1LjI5NlIxM2Q4NDcuODcyUjE0YWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmhnOjEwNG9SMWQ5OTYuMzUyUjJhZDUwOC45MjhkNDMwLjA4ZDU2OS4zNDRkNDMwLjA4ZDYxMy4zNzZkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkMjM1LjUxOWQyMTEuOTY4ZDIzNS41MTlkMjExLjk2OGQ0MzAuMDhkNTA4LjkyOGQ0MzAuMDhoUjNkNjg0LjAzMlI0ZDY1Ny40MDhSNWQ1NS4yOTZSNmQ3ODguNDhSN2QwUjhkNzMzLjE4NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEwNFIxMmQ1NS4yOTZSMTNkNjg0LjAzMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxNm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIxNlIxMmQwUjEzZDBSMTRhaGc6MTAzb1IxZDk5Ni4zNTJSMmFkNjQ1LjEyZDExMTAuMDE2ZDY0NS4xMmQxMTcxLjQ1NmQ2MDEuNmQxMjE0Ljk3NmQ1NTguMDhkMTI1OC40OTZkNDk2LjY0ZDEyNTguNDk2ZDEzNi4xOTJkMTI1OC40OTZkMTM2LjE5MmQxMTAwLjhkNDg4LjQ0OGQxMTAwLjhkNDg4LjQ0OGQxMDI0ZDE5MS40ODhkMTAyNGQxMzAuMDQ4ZDEwMjRkODYuMDE2ZDk3OS45NjhkNDEuOTg0ZDkzNS45MzZkNDEuOTg0ZDg3NS41MmQ0MS45ODRkNTc4LjU2ZDQxLjk4NGQ1MTguMTQ0ZDg2LjAxNmQ0NzQuMTExZDEzMC4wNDhkNDMwLjA4ZDE5MS40ODhkNDMwLjA4ZDQ5Ni42NGQ0MzAuMDhkNTU4LjA4ZDQzMC4wOGQ2MDEuNmQ0NzQuMTExZDY0NS4xMmQ1MTguMTQ0ZDY0NS4xMmQ1NzguNTZkNjQ1LjEyZDExMTAuMDE2ZDE5OC42NTZkNTg2Ljc1MmQxOTguNjU2ZDg2Ny4zMjhkNDg4LjQ0OGQ4NjcuMzI4ZDQ4OC40NDhkNTg2Ljc1MmQxOTguNjU2ZDU4Ni43NTJoUjNkNjk5LjM5MlI0ZDY0NS4xMlI1ZDQxLjk4NFI2ZDU5My45MlI3ZC0yMzQuNDk2UjhkNTUxLjkzNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEwM1IxMmQ0MS45ODRSMTNkNjk5LjM5MlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjIxNW9SMWQ5OTYuMzUyUjJhZDUxOS4xNjhkNDk1LjYxNmQ1MTkuMTY4ZDU0Ni44MTZkMzg2LjA0OGQ3MTYuOGQ1MTkuMTY4ZDg4OC44MzJkNTE5LjE2OGQ5NDAuMDMyZDM1Ni4zNTJkOTQwLjAzMmQyODUuNjk2ZDg0NC44ZDI3NS40NTZkODYxLjE4NGQyNDkuODU2ZDg5My40NGQyMjQuMjU2ZDkyNS42OTZkMjE1LjA0ZDk0MC4wMzJkNTQuMjcyZDk0MC4wMzJkNTQuMjcyZDg4OC44MzJkMTg2LjM2OGQ3MTYuOGQ1NC4yNzJkNTQ2LjgxNmQ1NC4yNzJkNDk1LjYxNmQyMTYuMDY0ZDQ5NS42MTZkMjg1LjY5NmQ1OTEuODcyZDM1Ni4zNTJkNDk1LjYxNmQ1MTkuMTY4ZDQ5NS42MTZoUjNkNTU5LjEwNFI0ZDUxOS4xNjhSNWQ1NC4yNzJSNmQ1MjguMzg0UjdkODMuOTY4UjhkNDc0LjExMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIxNVIxMmQ1NC4yNzJSMTNkNTU5LjEwNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJoZzoxMDJvUjFkOTk2LjM1MlIyYWQ0MzEuMTA0ZDM5My4yMTZkMjEwLjk0NGQzOTMuMjE2ZDIxMC45NDRkNDMwLjA4ZDQzMS4xMDRkNDMwLjA4ZDQzMS4xMDRkNTg2Ljc1MmQyMTAuOTQ0ZDU4Ni43NTJkMjEwLjk0NGQxMDI0ZDU0LjI3MmQxMDI0ZDU0LjI3MmQzODRkNTQuMjcyZDMyMy41ODNkOTcuNzkyZDI3OS41NTJkMTQxLjMxMmQyMzUuNTE5ZDIwMy43NzZkMjM1LjUxOWQ0MzEuMTA0ZDIzNS41MTlkNDMxLjEwNGQzOTMuMjE2aFIzZDQ1MC41NlI0ZDQzMS4xMDRSNWQ1NC4yNzJSNmQ3ODguNDhSN2QwUjhkNzM0LjIwOFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEwMlIxMmQ1NC4yNzJSMTNkNDUwLjU2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaGc6MjE0b1IxZDk5Ni4zNTJSMmFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDYxNi40NDhkNzcuODIzZDYxNi40NDhkMjM1LjUxOWQ0NTguNzUyZDIzNS41MTlkNDU4Ljc1MmQ3Ny44MjNkNjE2LjQ0OGQ3Ny44MjNkMzk3LjMxMmQ3Ny44MjNkMzk3LjMxMmQyMzUuNTE5ZDI0MC42NGQyMzUuNTE5ZDI0MC42NGQ3Ny44MjNkMzk3LjMxMmQ3Ny44MjNoUjNkODQ3Ljg3MlI0ZDc5Mi41NzZSNWQ1NS4yOTZSNmQ5NDYuMTc2UjdkMFI4ZDg5MC44OFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIxNFIxMmQ1NS4yOTZSMTNkODQ3Ljg3MlIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMW9SMWQ5OTYuMzUyUjJhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyaFIzZDcwOC42MDhSNGQ2NTQuMzM2UjVkNTIuMjI0UjZkNTkzLjkyUjdkMFI4ZDU0MS42OTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMDFSMTJkNTIuMjI0UjEzZDcwOC42MDhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjIxM29SMWQ5OTYuMzUyUjJhZDIwNi44NDhkMjg2LjcyZDY0MS4wMjRkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQ0MzguMjcxZDU1LjI5NmQzNzQuNzg0ZDk5LjMyOGQzMzAuNzUxZDE0My4zNmQyODYuNzJkMjA2Ljg0OGQyODYuNzJkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2Q0OTguNjg4ZDExMy42NjNkNTM4LjYyNGQxMTMuNjYzZDU5Ni45OTJkNzUuNzc1ZDU5Ni45OTJkMjA0Ljc5OWQ1MzMuNTA0ZDIzMS40MjNkNDk1LjYxNmQyMzEuNDIzZDQ1Ny43MjhkMjMxLjQyM2QzOTguODQ4ZDE5OS42NzlkMzM5Ljk2OGQxNjcuOTM2ZDMxMC4yNzJkMTY3LjkzNmQyOTkuMDA4ZDE2Ny45MzZkMjU2ZDE2Ny45MzZkMjEyLjk5MmQyMDQuNzk5ZDIxMi45OTJkNzcuODIzZDI4Mi42MjRkNTAuMTc1ZDMxMC4yNzJkNTAuMTc1ZDM0OC4xNmQ1MC4xNzVkNDA3LjU1MmQ3OS44NzFkNDY2Ljk0NGQxMDkuNTY3ZDQ5OC42ODhkMTEzLjY2M2hSM2Q4NDcuODcyUjRkNzkyLjU3NlI1ZDU1LjI5NlI2ZDk3My44MjRSN2QwUjhkOTE4LjUyOFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIxM1IxMmQ1NS4yOTZSMTNkODQ3Ljg3MlIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkzaTJpM2kzaTNpMmkzaTJpM2kzaTNoZzoxMDBvUjFkOTk2LjM1MlIyYWQ0NzAuMDE2ZDIzNS41MTlkNjI2LjY4OGQyMzUuNTE5ZDYyNi42ODhkMTAyNGQxNzIuMDMyZDEwMjRkMTEwLjU5MmQxMDI0ZDY3LjA3MmQ5NzkuOTY4ZDIzLjU1MmQ5MzUuOTM2ZDIzLjU1MmQ4NzUuNTJkMjMuNTUyZDU3OC41NmQyMy41NTJkNTE4LjE0NGQ2Ny4wNzJkNDc0LjExMWQxMTAuNTkyZDQzMC4wOGQxNzIuMDMyZDQzMC4wOGQ0NzAuMDE2ZDQzMC4wOGQ0NzAuMDE2ZDIzNS41MTlkMTgxLjI0OGQ1ODYuNzUyZDE4MS4yNDhkODY3LjMyOGQ0NzAuMDE2ZDg2Ny4zMjhkNDcwLjAxNmQ1ODYuNzUyZDE4MS4yNDhkNTg2Ljc1MmhSM2Q2ODMuMDA4UjRkNjI2LjY4OFI1ZDIzLjU1MlI2ZDc4OC40OFI3ZDBSOGQ3NjQuOTI4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTAwUjEyZDIzLjU1MlIxM2Q2ODMuMDA4UjE0YWkxaTJpMmkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaGc6MjEyb1IxZDk5Ni4zNTJSMmFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQwNC40OGQyMzYuNTQzZDI2OC4yODhkMjM2LjU0M2QzODAuOTI4ZDQ4LjEyN2Q0ODMuMzI4ZDQ4LjEyN2Q1OTUuOTY4ZDIzNi41NDNkNDU4Ljc1MmQyMzYuNTQzZDQzMC4wOGQxOTEuNDg3ZDQwNC40OGQyMzYuNTQzaFIzZDg0Ny44NzJSNGQ3OTIuNTc2UjVkNTUuMjk2UjZkOTc1Ljg3MlI3ZDBSOGQ5MjAuNTc2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjEyUjEyZDU1LjI5NlIxM2Q4NDcuODcyUjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzo5OW9SMWQ5OTYuMzUyUjJhZDY1My4zMTJkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDY1NC4zMzZkODY3LjMyOGQ2NTQuMzM2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkNjUzLjMxMmQ0MzAuMDhkNjUzLjMxMmQ1ODYuNzUyaFIzZDcxMS42OFI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ1OTMuOTJSN2QwUjhkNTQxLjY5NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTk5UjEyZDUyLjIyNFIxM2Q3MTEuNjhSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoyMTFvUjFkOTk2LjM1MlIyYWQyMDYuODQ4ZDI4Ni43MmQ2NDEuMDI0ZDI4Ni43MmQ3MDMuNDg4ZDI4Ni43MmQ3NDguMDMyZDMzMS4yNjRkNzkyLjU3NmQzNzUuODA4ZDc5Mi41NzZkNDM4LjI3MWQ3OTIuNTc2ZDg3Mi40NDhkNzkyLjU3NmQ5MzQuOTEyZDc0OC4wMzJkOTc5LjQ1NmQ3MDMuNDg4ZDEwMjRkNjQxLjAyNGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkNDM4LjI3MWQ1NS4yOTZkMzc0Ljc4NGQ5OS4zMjhkMzMwLjc1MWQxNDMuMzZkMjg2LjcyZDIwNi44NDhkMjg2LjcyZDIxNC4wMTZkNDQ2LjQ2M2QyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkNDQ2LjQ2M2QyMTQuMDE2ZDQ0Ni40NjNkMzQ4LjE2ZDIzNS41MTlkNDAwLjM4NGQyNy42NDhkNTYxLjE1MmQyNy42NDhkNTA4LjkyOGQyMzUuNTE5ZDM0OC4xNmQyMzUuNTE5aFIzZDg0Ny44NzJSNGQ3OTIuNTc2UjVkNTUuMjk2UjZkOTk2LjM1MlI3ZDBSOGQ5NDEuMDU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjExUjEyZDU1LjI5NlIxM2Q4NDcuODcyUjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5OG9SMWQ5OTYuMzUyUjJhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQ4NzUuNTJkNjU3LjQwOGQ5MzUuOTM2ZDYxMy44ODhkOTc5Ljk2OGQ1NzAuMzY4ZDEwMjRkNTA4LjkyOGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQyMzUuNTE5ZDIxMS45NjhkMjM1LjUxOWQyMTEuOTY4ZDQzMC4wOGQ1MDguOTI4ZDQzMC4wOGQyMTEuOTY4ZDU4Ni43NTJkMjExLjk2OGQ4NjcuMzI4ZDUwMC43MzZkODY3LjMyOGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyaFIzZDY4My4wMDhSNGQ2NTcuNDA4UjVkNTUuMjk2UjZkNzg4LjQ4UjdkMFI4ZDczMy4xODRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk5OFIxMmQ1NS4yOTZSMTNkNjgzLjAwOFIxNGFpMWkzaTNpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxMG9SMWQ5OTYuMzUyUjJhZDIwNi44NDhkMjg2LjcyZDY0MS4wMjRkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQ0MzguMjcxZDU1LjI5NmQzNzQuNzg0ZDk5LjMyOGQzMzAuNzUxZDE0My4zNmQyODYuNzJkMjA2Ljg0OGQyODYuNzJkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2Q0NjcuOTY4ZDI3LjY0OGQ1MjAuMTkyZDIzNS41MTlkMzU5LjQyNGQyMzUuNTE5ZDMwNy4yZDI3LjY0OGQ0NjcuOTY4ZDI3LjY0OGhSM2Q4NDcuODcyUjRkNzkyLjU3NlI1ZDU1LjI5NlI2ZDk5Ni4zNTJSN2QwUjhkOTQxLjA1NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIxMFIxMmQ1NS4yOTZSMTNkODQ3Ljg3MlIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTdvUjFkOTk2LjM1MlIyYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhoUjNkNzEwLjY1NlI0ZDY1NS4zNlI1ZDUzLjI0OFI2ZDU5My45MlI3ZDBSOGQ1NDAuNjcyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpOTdSMTJkNTMuMjQ4UjEzZDcxMC42NTZSMTRhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjA5b1IxZDk5Ni4zNTJSMmFkNjMzLjg1NmQ3NzguMjRkNjMzLjg1NmQyODYuNzJkNzk0LjYyNGQyODYuNzJkNzk0LjYyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTYuMDY0ZDUzMC40MzJkMjE2LjA2NGQxMDI0ZDU3LjM0NGQxMDI0ZDU3LjM0NGQyODYuNzJkMjIxLjE4NGQyODYuNzJkNjMzLjg1NmQ3NzguMjRkNTEwLjk3NmQxMTMuNjYzZDU1MC45MTJkMTEzLjY2M2Q2MDkuMjhkNzUuNzc1ZDYwOS4yOGQyMDQuNzk5ZDU0NS43OTJkMjMxLjQyM2Q1MDcuOTA0ZDIzMS40MjNkNDcwLjAxNmQyMzEuNDIzZDQxMS4xMzZkMTk5LjY3OWQzNTIuMjU2ZDE2Ny45MzZkMzIyLjU2ZDE2Ny45MzZkMzExLjI5NmQxNjcuOTM2ZDI2OC4yODhkMTY3LjkzNmQyMjUuMjhkMjA0Ljc5OWQyMjUuMjhkNzcuODIzZDI5NC45MTJkNTAuMTc1ZDMyMi41NmQ1MC4xNzVkMzYwLjQ0OGQ1MC4xNzVkNDE5Ljg0ZDc5Ljg3MWQ0NzkuMjMyZDEwOS41NjdkNTEwLjk3NmQxMTMuNjYzaFIzZDg1MS45NjhSNGQ3OTQuNjI0UjVkNTcuMzQ0UjZkOTczLjgyNFI3ZDBSOGQ5MTYuNDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMDlSMTJkNTcuMzQ0UjEzZDg1MS45NjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTNpMmkzaTNpM2kyaTNpMmkzaTNpM2hnOjk2b1IxZDk5Ni4zNTJSMmFkMTkzLjUzNmQ1MS4xOTlkMjQ1Ljc2ZDI1OS4wNzJkODQuOTkyZDI1OS4wNzJkMzIuNzY4ZDUxLjE5OWQxOTMuNTM2ZDUxLjE5OWhSM2QyNzguNTI4UjRkMjQ1Ljc2UjVkMzIuNzY4UjZkOTcyLjhSN2Q3NjQuOTI4UjhkOTQwLjAzMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTk2UjEyZDMyLjc2OFIxM2QyNzguNTI4UjE0YWkxaTJpMmkyaTJoZzoyMDhvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMDhSMTJkMFIxM2QwUjE0YWhnOjk1b1IxZDk5Ni4zNTJSMmFkNzc5LjI2NGQxMDI2LjA0OGQ3NzkuMjY0ZDExODIuNzJkNTUuMjk2ZDExODIuNzJkNTUuMjk2ZDEwMjYuMDQ4ZDc3OS4yNjRkMTAyNi4wNDhoUjNkODQ3Ljg3MlI0ZDc3OS4yNjRSNWQ1NS4yOTZSNmQtMi4wNDhSN2QtMTU4LjcyUjhkLTU3LjM0NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTk1UjEyZDU1LjI5NlIxM2Q4NDcuODcyUjE0YWkxaTJpMmkyaTJoZzoyMDdvUjFkOTk2LjM1MlIyYWQ3NS43NzZkMTAyNGQ3NS43NzZkMjg2LjcyZDIzNS41MmQyODYuNzJkMjM1LjUyZDEwMjRkNzUuNzc2ZDEwMjRkMzQ2LjExMmQ3Ny44MjNkMzQ2LjExMmQyMzUuNTE5ZDE4OC40MTZkMjM1LjUxOWQxODguNDE2ZDc3LjgyM2QzNDYuMTEyZDc3LjgyM2QxMjYuOTc2ZDc3LjgyM2QxMjYuOTc2ZDIzNS41MTlkLTI5LjY5NmQyMzUuNTE5ZC0yOS42OTZkNzcuODIzZDEyNi45NzZkNzcuODIzaFIzZDIyNS4yOFI0ZDM0Ni4xMTJSNWQtMjkuNjk2UjZkOTQ2LjE3NlI3ZDBSOGQ5NzUuODcyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjA3UjEyZC0yOS42OTZSMTNkMjI1LjI4UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk0b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpOTRSMTJkMFIxM2QwUjE0YWhnOjIwNm9SMWQ5OTYuMzUyUjJhZDYzLjQ4OGQxMDI0ZDYzLjQ4OGQyODYuNzJkMjIzLjIzMmQyODYuNzJkMjIzLjIzMmQxMDI0ZDYzLjQ4OGQxMDI0ZDEyMy45MDRkMjM2LjU0M2QtMTIuMjg4ZDIzNi41NDNkMTAwLjM1MmQ0OC4xMjdkMjAyLjc1MmQ0OC4xMjdkMzE1LjM5MmQyMzYuNTQzZDE3OC4xNzZkMjM2LjU0M2QxNDkuNTA0ZDE5MS40ODdkMTIzLjkwNGQyMzYuNTQzaFIzZDIyNS4yOFI0ZDMxNS4zOTJSNWQtMTIuMjg4UjZkOTc1Ljg3MlI3ZDBSOGQ5ODguMTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMDZSMTJkLTEyLjI4OFIxM2QyMjUuMjhSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzo5M29SMWQ5OTYuMzUyUjJhZDUyLjIyNGQ0NDMuMzkxZDUyLjIyNGQyODYuNzJkMjY4LjI4OGQyODYuNzJkMjY4LjI4OGQxMDI0ZDUyLjIyNGQxMDI0ZDUyLjIyNGQ4NjcuMzI4ZDExMC41OTJkODY3LjMyOGQxMTAuNTkyZDQ0My4zOTFkNTIuMjI0ZDQ0My4zOTFoUjNkMjgyLjYyNFI0ZDI2OC4yODhSNWQ1Mi4yMjRSNmQ3MzcuMjhSN2QwUjhkNjg1LjA1NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTkzUjEyZDUyLjIyNFIxM2QyODIuNjI0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmhnOjIwNW9SMWQ5OTYuMzUyUjJhZDQzLjAwOGQxMDI0ZDQzLjAwOGQyODYuNzJkMjAyLjc1MmQyODYuNzJkMjAyLjc1MmQxMDI0ZDQzLjAwOGQxMDI0ZDM2Ljg2NGQyMzUuNTE5ZDg5LjA4OGQyNy42NDhkMjQ5Ljg1NmQyNy42NDhkMTk3LjYzMmQyMzUuNTE5ZDM2Ljg2NGQyMzUuNTE5aFIzZDIyNS4yOFI0ZDI0OS44NTZSNWQzNi44NjRSNmQ5OTYuMzUyUjdkMFI4ZDk1OS40ODhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMDVSMTJkMzYuODY0UjEzZDIyNS4yOFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkyb1IxZDk5Ni4zNTJSMmFkNS4xMmQyODYuNzJkNjEuNDRkMjg2LjcyZDUzMy41MDRkODY2LjMwNGQ1MzMuNTA0ZDEwMjRkNDc3LjE4NGQxMDI0ZDUuMTJkNDQ0LjQxNWQ1LjEyZDI4Ni43MmhSM2Q1MzIuNDhSNGQ1MzMuNTA0UjVkNS4xMlI2ZDczNy4yOFI3ZDBSOGQ3MzIuMTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk5MlIxMmQ1LjEyUjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjIwNG9SMWQ5OTYuMzUyUjJhZDk3LjI4ZDEwMjRkOTcuMjhkMjg2LjcyZDI1Ny4wMjRkMjg2LjcyZDI1Ny4wMjRkMTAyNGQ5Ny4yOGQxMDI0ZDE5Ny42MzJkMjcuNjQ4ZDI0OS44NTZkMjM1LjUxOWQ4OS4wODhkMjM1LjUxOWQzNi44NjRkMjcuNjQ4ZDE5Ny42MzJkMjcuNjQ4aFIzZDIyNS4yOFI0ZDI1Ny4wMjRSNWQzNi44NjRSNmQ5OTYuMzUyUjdkMFI4ZDk1OS40ODhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMDRSMTJkMzYuODY0UjEzZDIyNS4yOFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkxb1IxZDk5Ni4zNTJSMmFkNTUuMjk2ZDEwMjRkNTUuMjk2ZDI4Ni43MmQyNzEuMzZkMjg2LjcyZDI3MS4zNmQ0NDMuMzkxZDIxMS45NjhkNDQzLjM5MWQyMTEuOTY4ZDg2Ny4zMjhkMjcxLjM2ZDg2Ny4zMjhkMjcxLjM2ZDEwMjRkNTUuMjk2ZDEwMjRoUjNkMjgxLjZSNGQyNzEuMzZSNWQ1NS4yOTZSNmQ3MzcuMjhSN2QwUjhkNjgxLjk4NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTkxUjEyZDU1LjI5NlIxM2QyODEuNlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDNvUjFkOTk2LjM1MlIyYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJkNTk0Ljk0NGQ3Ny44MjNkNTk0Ljk0NGQyMzUuNTE5ZDQzNy4yNDhkMjM1LjUxOWQ0MzcuMjQ4ZDc3LjgyM2Q1OTQuOTQ0ZDc3LjgyM2QzNzUuODA4ZDc3LjgyM2QzNzUuODA4ZDIzNS41MTlkMjE5LjEzNmQyMzUuNTE5ZDIxOS4xMzZkNzcuODIzZDM3NS44MDhkNzcuODIzaFIzZDc4NC4zODRSNGQ3NDAuMzUyUjVkNTkuMzkyUjZkOTQ2LjE3NlI3ZDBSOGQ4ODYuNzg0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjAzUjEyZDU5LjM5MlIxM2Q3ODQuMzg0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MG9SMWQ5OTYuMzUyUjJhZDUyLjIyNGQ0NDYuNDYzZDUyLjIyNGQyODYuNzJkNzg5LjUwNGQyODYuNzJkNzg5LjUwNGQ0NDkuNTM1ZDI5NS45MzZkODY0LjI1NmQ3ODkuNTA0ZDg2NC4yNTZkNzg5LjUwNGQxMDI0ZDUyLjIyNGQxMDI0ZDUyLjIyNGQ4NjEuMTg0ZDU0NS43OTJkNDQ2LjQ2M2Q1Mi4yMjRkNDQ2LjQ2M2hSM2Q4NDAuNzA0UjRkNzg5LjUwNFI1ZDUyLjIyNFI2ZDczNy4yOFI3ZDBSOGQ2ODUuMDU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpOTBSMTJkNTIuMjI0UjEzZDg0MC43MDRSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMm9SMWQ5OTYuMzUyUjJhZDc0MC4zNTJkMjg2LjcyZDc0MC4zNTJkNDQ2LjQ2M2QyMjAuMTZkNDQ2LjQ2M2QyMjAuMTZkNTc1LjQ4OGQ2MzguOTc2ZDU3NS40ODhkNjM4Ljk3NmQ3MzUuMjMyZDIyMC4xNmQ3MzUuMjMyZDIyMC4xNmQ4NjQuMjU2ZDc0MC4zNTJkODY0LjI1NmQ3NDAuMzUyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQzNzIuNzM2ZDIzNi41NDNkMjM2LjU0NGQyMzYuNTQzZDM0OS4xODRkNDguMTI3ZDQ1MS41ODRkNDguMTI3ZDU2NC4yMjRkMjM2LjU0M2Q0MjcuMDA4ZDIzNi41NDNkMzk4LjMzNmQxOTEuNDg3ZDM3Mi43MzZkMjM2LjU0M2hSM2Q3ODQuMzg0UjRkNzQwLjM1MlI1ZDU5LjM5MlI2ZDk3NS44NzJSN2QwUjhkOTE2LjQ4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjAyUjEyZDU5LjM5MlIxM2Q3ODQuMzg0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjg5b1IxZDk5Ni4zNTJSMmFkNjY4LjY3MmQyODYuNzJkODYwLjE2ZDI4Ni43MmQ1MTguMTQ0ZDc0OS41NjhkNTE4LjE0NGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkNzQ4LjU0NGQyMjQuMjU2ZDU2OC4zMTlkMTcuNDA4ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ0MzguMjcyZDU3Ny41MzZkNjY4LjY3MmQyODYuNzJoUjNkODI1LjM0NFI0ZDg2MC4xNlI1ZDE3LjQwOFI2ZDczNy4yOFI3ZDBSOGQ3MTkuODcyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpODlSMTJkMTcuNDA4UjEzZDgyNS4zNDRSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMW9SMWQ5OTYuMzUyUjJhZDc0MC4zNTJkMjg2LjcyZDc0MC4zNTJkNDQ2LjQ2M2QyMjAuMTZkNDQ2LjQ2M2QyMjAuMTZkNTc1LjQ4OGQ2MzguOTc2ZDU3NS40ODhkNjM4Ljk3NmQ3MzUuMjMyZDIyMC4xNmQ3MzUuMjMyZDIyMC4xNmQ4NjQuMjU2ZDc0MC4zNTJkODY0LjI1NmQ3NDAuMzUyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQzMTYuNDE2ZDIzNS41MTlkMzY4LjY0ZDI3LjY0OGQ1MjkuNDA4ZDI3LjY0OGQ0NzcuMTg0ZDIzNS41MTlkMzE2LjQxNmQyMzUuNTE5aFIzZDc4NC4zODRSNGQ3NDAuMzUyUjVkNTkuMzkyUjZkOTk2LjM1MlI3ZDBSOGQ5MzYuOTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMDFSMTJkNTkuMzkyUjEzZDc4NC4zODRSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODhvUjFkOTk2LjM1MlIyYWQ2MTkuNTJkMjg2LjcyZDc4NC4zODRkMjg2LjcyZDc4NC4zODRkMzQwLjk5MWQ1MjAuMTkyZDY1NS4zNmQ3ODQuMzg0ZDk2OC43MDRkNzg0LjM4NGQxMDI0ZDYxOS41MmQxMDI0ZDQxNC43MmQ3ODIuMzM2ZDIxMS45NjhkMTAyNGQ0Ny4xMDRkMTAyNGQ0Ny4xMDRkOTY5LjcyOGQzMTAuMjcyZDY1NS4zNmQ0Ny4xMDRkMzQwLjk5MWQ0Ny4xMDRkMjg2LjcyZDIxMS45NjhkMjg2LjcyZDQxNi43NjhkNTI5LjQwOGQ0NDYuNDY0ZDQ5MS41MmQ1MTkuMTY4ZDQwNi4wMTVkNTkxLjg3MmQzMjAuNTExZDYxOS41MmQyODYuNzJoUjNkODMxLjQ4OFI0ZDc4NC4zODRSNWQ0Ny4xMDRSNmQ3MzcuMjhSN2QwUjhkNjkwLjE3NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTg4UjEyZDQ3LjEwNFIxM2Q4MzEuNDg4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2hnOjIwMG9SMWQ5OTYuMzUyUjJhZDc0MC4zNTJkMjg2LjcyZDc0MC4zNTJkNDQ2LjQ2M2QyMjAuMTZkNDQ2LjQ2M2QyMjAuMTZkNTc1LjQ4OGQ2MzguOTc2ZDU3NS40ODhkNjM4Ljk3NmQ3MzUuMjMyZDIyMC4xNmQ3MzUuMjMyZDIyMC4xNmQ4NjQuMjU2ZDc0MC4zNTJkODY0LjI1NmQ3NDAuMzUyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQ0NDYuNDY0ZDI3LjY0OGQ0OTguNjg4ZDIzNS41MTlkMzM3LjkyZDIzNS41MTlkMjg1LjY5NmQyNy42NDhkNDQ2LjQ2NGQyNy42NDhoUjNkNzg0LjM4NFI0ZDc0MC4zNTJSNWQ1OS4zOTJSNmQ5OTYuMzUyUjdkMFI4ZDkzNi45NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIwMFIxMmQ1OS4zOTJSMTNkNzg0LjM4NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4N29SMWQ5OTYuMzUyUjJhZDk5NS4zMjhkMjg2LjcyZDExNjMuMjY0ZDI4Ni43MmQ4OTQuOTc2ZDEwMjRkNzczLjEyZDEwMjRkNTk5LjA0ZDU0OS44ODdkNTMzLjUwNGQ3MzAuMTEyZDQyNS45ODRkMTAyNGQzMDQuMTI4ZDEwMjRkMzUuODRkMjg2LjcyZDIwNC44ZDI4Ni43MmQzNjUuNTY4ZDcyNi4wMTZkMzkxLjE2OGQ2NTcuNDA4ZDUyNi4zMzZkMjg2LjcyZDY3Mi43NjhkMjg2LjcyZDgzNC41NmQ3MjYuMDE2ZDg2MC4xNmQ2NTcuNDA4ZDk5NS4zMjhkMjg2LjcyaFIzZDEyMDcuMjk2UjRkMTE2My4yNjRSNWQzNS44NFI2ZDczNy4yOFI3ZDBSOGQ3MDEuNDRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk4N1IxMmQzNS44NFIxM2QxMjA3LjI5NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTk5b1IxZDk5Ni4zNTJSMmFkNzkyLjU3NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDg2NC4yNTZkNzkyLjU3NmQ4NjQuMjU2ZDc5Mi41NzZkMTAyNGQ1NDMuNzQ0ZDEwMjRkNDk1LjYxNmQxMTgzLjc0NGQzMzQuODQ4ZDExODMuNzQ0ZDM4Mi45NzZkMTAyNGQyMDguODk2ZDEwMjRkMTQ1LjQwOGQxMDI0ZDEwMS4zNzZkOTc5Ljk2OGQ1Ny4zNDRkOTM1LjkzNmQ1Ny4zNDRkODcyLjQ0OGQ1Ny4zNDRkNDM4LjI3MWQ1Ny4zNDRkMzc0Ljc4NGQxMDEuMzc2ZDMzMC43NTFkMTQ1LjQwOGQyODYuNzJkMjA4Ljg5NmQyODYuNzJkNzkyLjU3NmQyODYuNzJkNzkyLjU3NmQ0NDYuNDYzaFIzZDg0MS43MjhSNGQ3OTIuNTc2UjVkNTcuMzQ0UjZkNzM3LjI4UjdkLTE1OS43NDRSOGQ2NzkuOTM2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTk5UjEyZDU3LjM0NFIxM2Q4NDEuNzI4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzo4Nm9SMWQ5OTYuMzUyUjJhZDUyOS40MDhkODIyLjI3MWQ4MzguNjU2ZDI4Ni43MmQxMDIxLjk1MmQyODYuNzJkNTk0Ljk0NGQxMDI0ZDQ2Mi44NDhkMTAyNGQzNS44NGQyODYuNzJkMjIwLjE2ZDI4Ni43MmQ1MjkuNDA4ZDgyMi4yNzFoUjNkMTAyNy4wNzJSNGQxMDIxLjk1MlI1ZDM1Ljg0UjZkNzM3LjI4UjdkMFI4ZDcwMS40NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTg2UjEyZDM1Ljg0UjEzZDEwMjcuMDcyUjE0YWkxaTJpMmkyaTJpMmkyaTJoZzoxOThvUjFkOTk2LjM1MlIyYWQ3OTIuNTc2ZDQ0Ni40NjNkNzkyLjU3NmQ1NzUuNDg4ZDEyMTEuMzkyZDU3NS40ODhkMTIxMS4zOTJkNzM1LjIzMmQ3OTIuNTc2ZDczNS4yMzJkNzkyLjU3NmQ4NjQuMjU2ZDEzMTMuNzkyZDg2NC4yNTZkMTMxMy43OTJkMTAyNGQ2MzMuODU2ZDEwMjRkNjMzLjg1NmQ3ODYuNDMyZDIxNi4wNjRkNzg2LjQzMmQyMTYuMDY0ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NS44MDhkOTkuODRkMzMxLjI2NGQxNDQuMzg0ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQxMzEzLjc5MmQyODYuNzJkMTMxMy43OTJkNDQ2LjQ2M2Q3OTIuNTc2ZDQ0Ni40NjNkNjMzLjg1NmQ2MjYuNjg4ZDYzMy44NTZkNDQ2LjQ2M2QyMTYuMDY0ZDQ0Ni40NjNkMjE2LjA2NGQ2MjYuNjg4ZDYzMy44NTZkNjI2LjY4OGhSM2QxNDA4UjRkMTMxMy43OTJSNWQ1NS4yOTZSNmQ3MzcuMjhSN2QwUjhkNjgxLjk4NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE5OFIxMmQ1NS4yOTZSMTNkMTQwOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkxaTJpMmkyaTJoZzo4NW9SMWQ5OTYuMzUyUjJhZDIxNC4wMTZkMjg2LjcyZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQyODYuNzJkNzkyLjU3NmQyODYuNzJkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmhSM2Q4NDcuODcyUjRkNzkyLjU3NlI1ZDU1LjI5NlI2ZDczNy4yOFI3ZDBSOGQ2ODEuOTg0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpODVSMTJkNTUuMjk2UjEzZDg0Ny44NzJSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoxOTdvUjFkOTk2LjM1MlIyYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDM4Ni4wNDhkMjguNjcyZDQzOC4yNzJkMjguNjcyZDQ3MC4wMTZkMjguNjcyZDQ5My4wNTZkNTEuNzExZDUxNi4wOTZkNzQuNzUxZDUxNi4wOTZkMTA2LjQ5NWQ1MTYuMDk2ZDE1Ni42NzJkNTE2LjA5NmQxODguNDE1ZDQ5My4wNTZkMjExLjQ1NmQ0NzAuMDE2ZDIzNC40OTVkNDM4LjI3MmQyMzQuNDk1ZDM4Ni4wNDhkMjM0LjQ5NWQzNTQuMzA0ZDIzNC40OTVkMzMwLjc1MmQyMTEuNDU2ZDMwNy4yZDE4OC40MTVkMzA3LjJkMTU2LjY3MmQzMDcuMmQxMDYuNDk1ZDMwNy4yZDc0Ljc1MWQzMzAuNzUyZDUxLjcxMWQzNTQuMzA0ZDI4LjY3MmQzODYuMDQ4ZDI4LjY3MmQzODYuMDQ4ZDEwOC41NDNkMzg2LjA0OGQxNjMuODRkNDM4LjI3MmQxNjMuODRkNDM4LjI3MmQxMDguNTQzZDM4Ni4wNDhkMTA4LjU0M2hSM2Q4NTYuMDY0UjRkNzk2LjY3MlI1ZDU5LjM5MlI2ZDk5NS4zMjhSN2QwUjhkOTM1LjkzNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE5N1IxMmQ1OS4zOTJSMTNkODU2LjA2NFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzo4NG9SMWQ5OTYuMzUyUjJhZDIwLjQ4ZDI4Ni43MmQ3NTcuNzZkMjg2LjcyZDc1Ny43NmQ0NDYuNDYzZDQ2OC45OTJkNDQ2LjQ2M2Q0NjguOTkyZDEwMjRkMzA5LjI0OGQxMDI0ZDMwOS4yNDhkNDQ2LjQ2M2QyMC40OGQ0NDYuNDYzZDIwLjQ4ZDI4Ni43MmhSM2Q3NzcuMjE2UjRkNzU3Ljc2UjVkMjAuNDhSNmQ3MzcuMjhSN2QwUjhkNzE2LjhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk4NFIxMmQyMC40OFIxM2Q3NzcuMjE2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmhnOjE5Nm9SMWQ5OTYuMzUyUjJhZDIxMC45NDRkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkMTAyNGQ2MzUuOTA0ZDEwMjRkNjM1LjkwNGQ3ODYuNDMyZDIxOC4xMTJkNzg2LjQzMmQyMTguMTEyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDQzOC4yNzFkNTkuMzkyZDM3NC43ODRkMTAzLjQyNGQzMzAuNzUxZDE0Ny40NTZkMjg2LjcyZDIxMC45NDRkMjg2LjcyZDIxOC4xMTJkNjI2LjY4OGQ2MzUuOTA0ZDYyNi42ODhkNjM1LjkwNGQ0NDYuNDYzZDIxOC4xMTJkNDQ2LjQ2M2QyMTguMTEyZDYyNi42ODhkNjIwLjU0NGQ3Ny44MjNkNjIwLjU0NGQyMzUuNTE5ZDQ2Mi44NDhkMjM1LjUxOWQ0NjIuODQ4ZDc3LjgyM2Q2MjAuNTQ0ZDc3LjgyM2Q0MDEuNDA4ZDc3LjgyM2Q0MDEuNDA4ZDIzNS41MTlkMjQ0LjczNmQyMzUuNTE5ZDI0NC43MzZkNzcuODIzZDQwMS40MDhkNzcuODIzaFIzZDg1Ni4wNjRSNGQ3OTYuNjcyUjVkNTkuMzkyUjZkOTQ2LjE3NlI3ZDBSOGQ4ODYuNzg0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTk2UjEyZDU5LjM5MlIxM2Q4NTYuMDY0UjE0YWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODNvUjFkOTk2LjM1MlIyYWQ3ODkuNTA0ZDQzOC4yNzFkNzg5LjUwNGQ1MDYuODhkNjI4LjczNmQ1MDYuODhkNjI4LjczNmQ0NDYuNDYzZDIxMC45NDRkNDQ2LjQ2M2QyMTAuOTQ0ZDU3NS40ODhkNjM3Ljk1MmQ1NzUuNDg4ZDcwMC40MTZkNTc1LjQ4OGQ3NDQuOTZkNjIwLjAzMWQ3ODkuNTA0ZDY2NC41NzZkNzg5LjUwNGQ3MjcuMDRkNzg5LjUwNGQ4NzIuNDQ4ZDc4OS41MDRkOTM0LjkxMmQ3NDQuOTZkOTc5LjQ1NmQ3MDAuNDE2ZDEwMjRkNjM3Ljk1MmQxMDI0ZDIwMy43NzZkMTAyNGQxNDEuMzEyZDEwMjRkOTYuNzY4ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3Mi40NDhkNTIuMjI0ZDgwMy44NGQyMTAuOTQ0ZDgwMy44NGQyMTAuOTQ0ZDg2NC4yNTZkNjI4LjczNmQ4NjQuMjU2ZDYyOC43MzZkNzM1LjIzMmQyMDMuNzc2ZDczNS4yMzJkMTQxLjMxMmQ3MzUuMjMyZDk2Ljc2OGQ2OTEuMmQ1Mi4yMjRkNjQ3LjE2OGQ1Mi4yMjRkNTgzLjY4ZDUyLjIyNGQ0MzguMjcxZDUyLjIyNGQzNzQuNzg0ZDk2Ljc2OGQzMzAuNzUxZDE0MS4zMTJkMjg2LjcyZDIwMy43NzZkMjg2LjcyZDYzNy45NTJkMjg2LjcyZDcwMC40MTZkMjg2LjcyZDc0NC45NmQzMzEuMjY0ZDc4OS41MDRkMzc1LjgwOGQ3ODkuNTA0ZDQzOC4yNzFoUjNkODQxLjcyOFI0ZDc4OS41MDRSNWQ1Mi4yMjRSNmQ3MzcuMjhSN2QwUjhkNjg1LjA1NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTgzUjEyZDUyLjIyNFIxM2Q4NDEuNzI4UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNoZzoxOTVvUjFkOTk2LjM1MlIyYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDQ5Mi41NDRkMTEzLjY2M2Q1MzIuNDhkMTEzLjY2M2Q1OTAuODQ4ZDc1Ljc3NWQ1OTAuODQ4ZDIwNC43OTlkNTI3LjM2ZDIzMS40MjNkNDg5LjQ3MmQyMzEuNDIzZDQ1MS41ODRkMjMxLjQyM2QzOTIuNzA0ZDE5OS42NzlkMzMzLjgyNGQxNjcuOTM2ZDMwNC4xMjhkMTY3LjkzNmQyOTIuODY0ZDE2Ny45MzZkMjQ5Ljg1NmQxNjcuOTM2ZDIwNi44NDhkMjA0Ljc5OWQyMDYuODQ4ZDc3LjgyM2QyNzUuNDU2ZDUwLjE3NWQzMDQuMTI4ZDUwLjE3NWQzNDIuMDE2ZDUwLjE3NWQ0MDEuNDA4ZDc5Ljg3MWQ0NjAuOGQxMDkuNTY3ZDQ5Mi41NDRkMTEzLjY2M2hSM2Q4NTYuMDY0UjRkNzk2LjY3MlI1ZDU5LjM5MlI2ZDk3My44MjRSN2QwUjhkOTE0LjQzMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE5NVIxMmQ1OS4zOTJSMTNkODU2LjA2NFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkzaTJpM2kzaTNpMmkzaTJpM2kzaTNoZzo4Mm9SMWQ5OTYuMzUyUjJhZDc5My42ZDQzOS4yOTVkNzkzLjZkNjI5Ljc2ZDc5My42ZDY5Mi4yMjNkNzQ4LjU0NGQ3MzYuNzY4ZDcwMy40ODhkNzgxLjMxMmQ2NDEuMDI0ZDc4MS4zMTJkNjMzLjg1NmQ3ODEuMzEyZDc5My42ZDk2OS43MjhkNzkzLjZkMTAyNGQ2MjkuNzZkMTAyNGQ0MjUuOTg0ZDc4MS4zMTJkMjE1LjA0ZDc4Mi4zMzZkMjE4LjExMmQ3ODIuMzM2ZDIxOC4xMTJkNzg4LjQ4ZDIxNi4wNjRkNzg4LjQ4ZDIxNS4wNGQ3ODcuNDU2ZDIxNS4wNGQxMDI0ZDU2LjMyZDEwMjRkNTYuMzJkMjg3Ljc0NGQ2NDEuMDI0ZDI4Ny43NDRkNzAzLjQ4OGQyODcuNzQ0ZDc0OC41NDRkMzMyLjI4OGQ3OTMuNmQzNzYuODMyZDc5My42ZDQzOS4yOTVkMjE1LjA0ZDQ0Ni40NjNkMjE1LjA0ZDYyMS41NjhkNjMyLjgzMmQ2MjEuNTY4ZDYzMi44MzJkNDQ2LjQ2M2QyMTUuMDRkNDQ2LjQ2M2hSM2Q4NDQuOFI0ZDc5My42UjVkNTYuMzJSNmQ3MzYuMjU2UjdkMFI4ZDY3OS45MzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk4MlIxMmQ1Ni4zMlIxM2Q4NDQuOFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaGc6MTk0b1IxZDk5Ni4zNTJSMmFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGQ0MDguNTc2ZDIzNi41NDNkMjcyLjM4NGQyMzYuNTQzZDM4NS4wMjRkNDguMTI3ZDQ4Ny40MjRkNDguMTI3ZDYwMC4wNjRkMjM2LjU0M2Q0NjIuODQ4ZDIzNi41NDNkNDM0LjE3NmQxOTEuNDg3ZDQwOC41NzZkMjM2LjU0M2hSM2Q4NTYuMDY0UjRkNzk2LjY3MlI1ZDU5LjM5MlI2ZDk3NS44NzJSN2QwUjhkOTE2LjQ4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTk0UjEyZDU5LjM5MlIxM2Q4NTYuMDY0UjE0YWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzo4MW9SMWQ5OTYuMzUyUjJhZDc5Mi41NzZkNDM4LjI3MWQ3OTIuNTc2ZDg2NC4yNTZkODc2LjU0NGQ4NjQuMjU2ZDg3Ni41NDRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ2NDBkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDIxNC4wMTZkNDQ2LjQ2M2QyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkNDQ2LjQ2M2QyMTQuMDE2ZDQ0Ni40NjNoUjNkOTA1LjIxNlI0ZDg3Ni41NDRSNWQ1NS4yOTZSNmQ3MzcuMjhSN2QwUjhkNjgxLjk4NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTgxUjEyZDU1LjI5NlIxM2Q5MDUuMjE2UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmhnOjE5M29SMWQ5OTYuMzUyUjJhZDIxMC45NDRkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkMTAyNGQ2MzUuOTA0ZDEwMjRkNjM1LjkwNGQ3ODYuNDMyZDIxOC4xMTJkNzg2LjQzMmQyMTguMTEyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDQzOC4yNzFkNTkuMzkyZDM3NC43ODRkMTAzLjQyNGQzMzAuNzUxZDE0Ny40NTZkMjg2LjcyZDIxMC45NDRkMjg2LjcyZDIxOC4xMTJkNjI2LjY4OGQ2MzUuOTA0ZDYyNi42ODhkNjM1LjkwNGQ0NDYuNDYzZDIxOC4xMTJkNDQ2LjQ2M2QyMTguMTEyZDYyNi42ODhkMzQyLjAxNmQyMzYuNTQzZDM5NC4yNGQyOC42NzJkNTU1LjAwOGQyOC42NzJkNTAyLjc4NGQyMzYuNTQzZDM0Mi4wMTZkMjM2LjU0M2hSM2Q4NTYuMDY0UjRkNzk2LjY3MlI1ZDU5LjM5MlI2ZDk5NS4zMjhSN2QwUjhkOTM1LjkzNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE5M1IxMmQ1OS4zOTJSMTNkODU2LjA2NFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODBvUjFkOTk2LjM1MlIyYWQ1Ny4zNDRkMjg3Ljc0NGQ2NDIuMDQ4ZDI4Ny43NDRkNzA0LjUxMmQyODcuNzQ0ZDc0OS41NjhkMzMyLjI4OGQ3OTQuNjI0ZDM3Ni44MzJkNzk0LjYyNGQ0MzkuMjk1ZDc5NC42MjRkNjI5Ljc2ZDc5NC42MjRkNjkyLjIyM2Q3NDkuNTY4ZDczNi43NjhkNzA0LjUxMmQ3ODEuMzEyZDY0Mi4wNDhkNzgxLjMxMmQyMTYuMDY0ZDc4Mi4zMzZkMjE5LjEzNmQ3ODIuMzM2ZDIxOS4xMzZkNzg4LjQ4ZDIxNy4wODhkNzg4LjQ4ZDIxNi4wNjRkNzg3LjQ1NmQyMTYuMDY0ZDEwMjRkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDI4Ny43NDRkMjE2LjA2NGQ0NDYuNDYzZDIxNi4wNjRkNjIxLjU2OGQ2MzMuODU2ZDYyMS41NjhkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2hSM2Q4MDkuOTg0UjRkNzk0LjYyNFI1ZDU3LjM0NFI2ZDczNi4yNTZSN2QwUjhkNjc4LjkxMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTgwUjEyZDU3LjM0NFIxM2Q4MDkuOTg0UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTFpMmkyaTJpMmhnOjE5Mm9SMWQ5OTYuMzUyUjJhZDIxMC45NDRkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkMTAyNGQ2MzUuOTA0ZDEwMjRkNjM1LjkwNGQ3ODYuNDMyZDIxOC4xMTJkNzg2LjQzMmQyMTguMTEyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDQzOC4yNzFkNTkuMzkyZDM3NC43ODRkMTAzLjQyNGQzMzAuNzUxZDE0Ny40NTZkMjg2LjcyZDIxMC45NDRkMjg2LjcyZDIxOC4xMTJkNjI2LjY4OGQ2MzUuOTA0ZDYyNi42ODhkNjM1LjkwNGQ0NDYuNDYzZDIxOC4xMTJkNDQ2LjQ2M2QyMTguMTEyZDYyNi42ODhkNDYxLjgyNGQyNy42NDhkNTE0LjA0OGQyMzUuNTE5ZDM1My4yOGQyMzUuNTE5ZDMwMS4wNTZkMjcuNjQ4ZDQ2MS44MjRkMjcuNjQ4aFIzZDg1Ni4wNjRSNGQ3OTYuNjcyUjVkNTkuMzkyUjZkOTk2LjM1MlI3ZDBSOGQ5MzYuOTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxOTJSMTJkNTkuMzkyUjEzZDg1Ni4wNjRSMTRhaTFpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjc5b1IxZDk5Ni4zNTJSMmFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzaFIzZDg0Ny44NzJSNGQ3OTIuNTc2UjVkNTUuMjk2UjZkNzM3LjI4UjdkMFI4ZDY4MS45ODRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk3OVIxMmQ1NS4yOTZSMTNkODQ3Ljg3MlIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxOTFvUjFkOTk2LjM1MlIyYWQ2NTcuNDA4ZDEwMjRkMTY4Ljk2ZDEwMjRkMTA3LjUyZDEwMjRkNjMuNDg4ZDk3OS45NjhkMTkuNDU2ZDkzNS45MzZkMTkuNDU2ZDg3NS41MmQxOS40NTZkNzA0LjUxMmQxOS40NTZkNjQzLjA3MmQ2My40ODhkNTk5LjU1MWQxMDcuNTJkNTU2LjAzMWQxNjguOTZkNTU2LjAzMWQ0MDAuMzg0ZDU1Ni4wMzFkNDAwLjM4NGQ0NzkuMjMyZDU1Ny4wNTZkNDc5LjIzMmQ1NTcuMDU2ZDU2NC4yMjNkNTU3LjA1NmQ2MjUuNjY0ZDUxMy4wMjRkNjY5LjY5NWQ0NjguOTkyZDcxMy43MjhkNDA3LjU1MmQ3MTMuNzI4ZDE3Ni4xMjhkNzEzLjcyOGQxNzYuMTI4ZDg2Ny4zMjhkNjU3LjQwOGQ4NjcuMzI4ZDY1Ny40MDhkMTAyNGQ1NTcuMDU2ZDMwMS4wNTZkNTU3LjA1NmQ0NTcuNzI3ZDQwMC4zODRkNDU3LjcyN2Q0MDAuMzg0ZDMwMS4wNTZkNTU3LjA1NmQzMDEuMDU2aFIzZDY5MS4yUjRkNjU3LjQwOFI1ZDE5LjQ1NlI2ZDcyMi45NDRSN2QwUjhkNzAzLjQ4OFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE5MVIxMmQxOS40NTZSMTNkNjkxLjJSMTRhaTFpMmkzaTNpMmkzaTNpMmkyaTJpMmkzaTNpMmkyaTJpMmkxaTJpMmkyaTJoZzo3OG9SMWQ5OTYuMzUyUjJhZDYzMy44NTZkNzc4LjI0ZDYzMy44NTZkMjg2LjcyZDc5NC42MjRkMjg2LjcyZDc5NC42MjRkMTAyNGQ2MzAuNzg0ZDEwMjRkMjE2LjA2NGQ1MzAuNDMyZDIxNi4wNjRkMTAyNGQ1Ny4zNDRkMTAyNGQ1Ny4zNDRkMjg2LjcyZDIyMS4xODRkMjg2LjcyZDYzMy44NTZkNzc4LjI0aFIzZDg1MS45NjhSNGQ3OTQuNjI0UjVkNTcuMzQ0UjZkNzM3LjI4UjdkMFI4ZDY3OS45MzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk3OFIxMmQ1Ny4zNDRSMTNkODUxLjk2OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTkwb1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTkwUjEyZDBSMTNkMFIxNGFoZzo3N29SMWQ5OTYuMzUyUjJhZDQ3MS4wNGQ1ODQuNzA0ZDcxOS44NzJkMjg2LjcyZDg4NC43MzZkMjg2LjcyZDg4NC43MzZkMTAyNGQ3MjQuOTkyZDEwMjRkNzI0Ljk5MmQ1MjkuNDA4ZDQ3MS4wNGQ4MzIuNTEyZDIxNi4wNjRkNTMwLjQzMmQyMTYuMDY0ZDEwMjRkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDI4Ni43MmQyMjEuMTg0ZDI4Ni43MmQ0NzEuMDRkNTg0LjcwNGhSM2Q5NTAuMjcyUjRkODg0LjczNlI1ZDU3LjM0NFI2ZDczNy4yOFI3ZDBSOGQ2NzkuOTM2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNzdSMTJkNTcuMzQ0UjEzZDk1MC4yNzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODlvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxODlSMTJkMFIxM2QwUjE0YWhnOjc2b1IxZDk5Ni4zNTJSMmFkNTguMzY4ZDEwMjRkNTguMzY4ZDI4NS42OTZkMjE3LjA4OGQyODUuNjk2ZDIxNy4wODhkODY0LjI1NmQ3OTUuNjQ4ZDg2NC4yNTZkNzk1LjY0OGQxMDI0ZDU4LjM2OGQxMDI0aFIzZDc5Ny42OTZSNGQ3OTUuNjQ4UjVkNTguMzY4UjZkNzM4LjMwNFI3ZDBSOGQ2NzkuOTM2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNzZSMTJkNTguMzY4UjEzZDc5Ny42OTZSMTRhaTFpMmkyaTJpMmkyaTJoZzoxODhvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxODhSMTJkMFIxM2QwUjE0YWhnOjc1b1IxZDk5Ni4zNTJSMmFkNjA0LjE2ZDI4Ni43MmQ3NzAuMDQ4ZDI4Ni43MmQ3NzAuMDQ4ZDM0Mi4wMTVkNTA2Ljg4ZDY1NS4zNmQ3NzAuMDQ4ZDk2OC43MDRkNzcwLjA0OGQxMDI0ZDYwNC4xNmQxMDI0ZDM2Mi40OTZkNzM1LjIzMmQyMTguMTEyZDczNS4yMzJkMjE4LjExMmQxMDI0ZDU4LjM2OGQxMDI0ZDU4LjM2OGQyODYuNzJkMjE4LjExMmQyODYuNzJkMjE4LjExMmQ1NzUuNDg4ZDM2Mi40OTZkNTc1LjQ4OGQ0NTQuNjU2ZDQ2NS45MTlkNjA0LjE2ZDI4Ni43MmhSM2Q4MTYuMTI4UjRkNzcwLjA0OFI1ZDU4LjM2OFI2ZDczNy4yOFI3ZDBSOGQ2NzguOTEyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNzVSMTJkNTguMzY4UjEzZDgxNi4xMjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4N29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE4N1IxMmQwUjEzZDBSMTRhaGc6NzRvUjFkOTk2LjM1MlIyYWQxNjIuODE2ZDc3Ny4yMTZkMTYyLjgxNmQ4NjQuMjU2ZDU4MC42MDhkODY0LjI1NmQ1ODAuNjA4ZDI4Ni43MmQ3NDEuMzc2ZDI4Ni43MmQ3NDEuMzc2ZDg3Mi40NDhkNzQxLjM3NmQ5MzQuOTEyZDY5Ni44MzJkOTc5LjQ1NmQ2NTIuMjg4ZDEwMjRkNTg5LjgyNGQxMDI0ZDE1NS42NDhkMTAyNGQ5Mi4xNmQxMDI0ZDQ4LjEyOGQ5NzkuOTY4ZDQuMDk2ZDkzNS45MzZkNC4wOTZkODcyLjQ0OGQ0LjA5NmQ3NzcuMjE2ZDE2Mi44MTZkNzc3LjIxNmhSM2Q3OTguNzJSNGQ3NDEuMzc2UjVkNC4wOTZSNmQ3MzcuMjhSN2QwUjhkNzMzLjE4NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTc0UjEyZDQuMDk2UjEzZDc5OC43MlIxNGFpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmhnOjE4Nm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE4NlIxMmQwUjEzZDBSMTRhaGc6NzNvUjFkOTk2LjM1MlIyYWQ1OC4zNjhkMTAyNGQ1OC4zNjhkMjg2LjcyZDIxOC4xMTJkMjg2LjcyZDIxOC4xMTJkMTAyNGQ1OC4zNjhkMTAyNGhSM2QyMjUuMjhSNGQyMTguMTEyUjVkNTguMzY4UjZkNzM3LjI4UjdkMFI4ZDY3OC45MTJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk3M1IxMmQ1OC4zNjhSMTNkMjI1LjI4UjE0YWkxaTJpMmkyaTJoZzoxODVvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxODVSMTJkMFIxM2QwUjE0YWhnOjcyb1IxZDk5Ni4zNTJSMmFkNjUyLjI4OGQyODYuNzJkODExLjAwOGQyODYuNzJkODExLjAwOGQxMDI0ZDY1Mi4yODhkMTAyNGQ2NTIuMjg4ZDczNS4yMzJkMjE3LjA4OGQ3MzUuMjMyZDIxNy4wODhkMTAyNGQ1OC4zNjhkMTAyNGQ1OC4zNjhkMjg2LjcyZDIxNy4wODhkMjg2LjcyZDIxNy4wODhkNTc1LjQ4OGQ2NTIuMjg4ZDU3NS40ODhkNjUyLjI4OGQyODYuNzJoUjNkODcxLjQyNFI0ZDgxMS4wMDhSNWQ1OC4zNjhSNmQ3MzcuMjhSN2QwUjhkNjc4LjkxMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTcyUjEyZDU4LjM2OFIxM2Q4NzEuNDI0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg0b1IxZDk5Ni4zNTJSMmFkMzMuNzkyZDExNzMuNTA0ZDg2LjAxNmQ5NjYuNjU2ZDI0Ni43ODRkOTY2LjY1NmQxOTQuNTZkMTE3My41MDRkMzMuNzkyZDExNzMuNTA0aFIzZDIxOC4xMTJSNGQyNDYuNzg0UjVkMzMuNzkyUjZkNTcuMzQ0UjdkLTE0OS41MDRSOGQyMy41NTJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxODRSMTJkMzMuNzkyUjEzZDIxOC4xMTJSMTRhaTFpMmkyaTJpMmhnOjcxb1IxZDk5Ni4zNTJSMmFkNzk0LjYyNGQ0MzguMjcxZDc5NC42MjRkNTA3LjkwNGQ2MzMuODU2ZDUwNy45MDRkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDg2NC4yNTZkNjMzLjg1NmQ4NjQuMjU2ZDYzMy44NTZkNzUzLjY2NGQ0NzQuMTEyZDc1My42NjRkNDc0LjExMmQ1OTMuOTJkNzk0LjYyNGQ1OTMuOTJkNzk0LjYyNGQ4NzIuNDQ4ZDc5NC42MjRkOTM0LjkxMmQ3NTAuMDhkOTc5LjQ1NmQ3MDUuNTM2ZDEwMjRkNjQyLjA0OGQxMDI0ZDIwOC44OTZkMTAyNGQxNDUuNDA4ZDEwMjRkMTAxLjM3NmQ5NzkuOTY4ZDU3LjM0NGQ5MzUuOTM2ZDU3LjM0NGQ4NzIuNDQ4ZDU3LjM0NGQ0MzguMjcxZDU3LjM0NGQzNzQuNzg0ZDEwMS4zNzZkMzMwLjc1MWQxNDUuNDA4ZDI4Ni43MmQyMDguODk2ZDI4Ni43MmQ2NDIuMDQ4ZDI4Ni43MmQ3MDUuNTM2ZDI4Ni43MmQ3NTAuMDhkMzMxLjI2NGQ3OTQuNjI0ZDM3NS44MDhkNzk0LjYyNGQ0MzguMjcxaFIzZDg0OS45MlI0ZDc5NC42MjRSNWQ1Ny4zNDRSNmQ3MzcuMjhSN2QwUjhkNjc5LjkzNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTcxUjEyZDU3LjM0NFIxM2Q4NDkuOTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2hnOjE4M29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE4M1IxMmQwUjEzZDBSMTRhaGc6NzBvUjFkOTk2LjM1MlIyYWQ1OS4zOTJkMjg2LjcyZDc0MC4zNTJkMjg2LjcyZDc0MC4zNTJkNDQ2LjQ2M2QyMjAuMTZkNDQ2LjQ2M2QyMjAuMTZkNTc1LjQ4OGQ2MzguOTc2ZDU3NS40ODhkNjM4Ljk3NmQ3MzUuMjMyZDIyMC4xNmQ3MzUuMjMyZDIyMC4xNmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJoUjNkNzQwLjM1MlI0ZDc0MC4zNTJSNWQ1OS4zOTJSNmQ3MzcuMjhSN2QwUjhkNjc3Ljg4OFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTcwUjEyZDU5LjM5MlIxM2Q3NDAuMzUyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODJvUjFkOTk2LjM1MlIyYWQ1Ny4zNDRkNDUwLjU1OWQ1Ny4zNDRkMzkwLjE0NGQxMDEuMzc2ZDM0NS42ZDE0NS40MDhkMzAxLjA1NmQyMDYuODQ4ZDMwMS4wNTZkODAxLjc5MmQzMDEuMDU2ZDgwMS43OTJkMTAyNGQ2NDUuMTJkMTAyNGQ2NDUuMTJkNzg2LjQzMmQ1NzcuNTM2ZDc4Ni40MzJkNTc3LjUzNmQxMDI0ZDQxOS44NGQxMDI0ZDQxOS44NGQ3ODYuNDMyZDIwNi44NDhkNzg2LjQzMmQxNDUuNDA4ZDc4Ni40MzJkMTAxLjM3NmQ3NDIuNGQ1Ny4zNDRkNjk4LjM2N2Q1Ny4zNDRkNjM3Ljk1MmQ1Ny4zNDRkNDUwLjU1OWQ0MTkuODRkNDU4Ljc1MWQyMTQuMDE2ZDQ1OC43NTFkMjE0LjAxNmQ2MjguNzM2ZDQxOS44NGQ2MjguNzM2ZDQxOS44NGQ0NTguNzUxZDU3Ny41MzZkNDU4Ljc1MWQ1NzcuNTM2ZDYyOC43MzZkNjQ1LjEyZDYyOC43MzZkNjQ1LjEyZDQ1OC43NTFkNTc3LjUzNmQ0NTguNzUxaFIzZDg1Mi45OTJSNGQ4MDEuNzkyUjVkNTcuMzQ0UjZkNzIyLjk0NFI3ZDBSOGQ2NjUuNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE4MlIxMmQ1Ny4zNDRSMTNkODUyLjk5MlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY5b1IxZDk5Ni4zNTJSMmFkNzQwLjM1MmQyODYuNzJkNzQwLjM1MmQ0NDYuNDYzZDIyMC4xNmQ0NDYuNDYzZDIyMC4xNmQ1NzUuNDg4ZDYzOC45NzZkNTc1LjQ4OGQ2MzguOTc2ZDczNS4yMzJkMjIwLjE2ZDczNS4yMzJkMjIwLjE2ZDg2NC4yNTZkNzQwLjM1MmQ4NjQuMjU2ZDc0MC4zNTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkMjg2LjcyZDc0MC4zNTJkMjg2LjcyaFIzZDc4NC4zODRSNGQ3NDAuMzUyUjVkNTkuMzkyUjZkNzM3LjI4UjdkMFI4ZDY3Ny44ODhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk2OVIxMmQ1OS4zOTJSMTNkNzg0LjM4NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4MW9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE4MVIxMmQwUjEzZDBSMTRhaGc6NjhvUjFkOTk2LjM1MlIyYWQ1OS4zOTJkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkODcyLjQ0OGQ3OTYuNjcyZDkzNC45MTJkNzUyLjEyOGQ5NzkuNDU2ZDcwNy41ODRkMTAyNGQ2NDQuMDk2ZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ4NjQuMjU2ZDYzNS45MDRkODY0LjI1NmQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzaFIzZDg1NC4wMTZSNGQ3OTYuNjcyUjVkNTkuMzkyUjZkNzM3LjI4UjdkMFI4ZDY3Ny44ODhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk2OFIxMmQ1OS4zOTJSMTNkODU0LjAxNlIxNGFpMWkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaGc6MTgwb1IxZDk5Ni4zNTJSMmFkMzMuNzkyZDI1OS4wNzJkODYuMDE2ZDUxLjE5OWQyNDYuNzg0ZDUxLjE5OWQxOTQuNTZkMjU5LjA3MmQzMy43OTJkMjU5LjA3MmhSM2QyMTguMTEyUjRkMjQ2Ljc4NFI1ZDMzLjc5MlI2ZDk3Mi44UjdkNzY0LjkyOFI4ZDkzOS4wMDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxODBSMTJkMzMuNzkyUjEzZDIxOC4xMTJSMTRhaTFpMmkyaTJpMmhnOjY3b1IxZDk5Ni4zNTJSMmFkNzkyLjU3NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDg2NC4yNTZkNzkyLjU3NmQ4NjQuMjU2ZDc5Mi41NzZkMTAyNGQyMDguODk2ZDEwMjRkMTQ1LjQwOGQxMDI0ZDEwMS4zNzZkOTc5Ljk2OGQ1Ny4zNDRkOTM1LjkzNmQ1Ny4zNDRkODcyLjQ0OGQ1Ny4zNDRkNDM4LjI3MWQ1Ny4zNDRkMzc0Ljc4NGQxMDEuMzc2ZDMzMC43NTFkMTQ1LjQwOGQyODYuNzJkMjA4Ljg5NmQyODYuNzJkNzkyLjU3NmQyODYuNzJkNzkyLjU3NmQ0NDYuNDYzaFIzZDg0MS43MjhSNGQ3OTIuNTc2UjVkNTcuMzQ0UjZkNzM3LjI4UjdkMFI4ZDY3OS45MzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk2N1IxMmQ1Ny4zNDRSMTNkODQxLjcyOFIxNGFpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmhnOjE3OW9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE3OVIxMmQwUjEzZDBSMTRhaGc6NjZvUjFkOTk2LjM1MlIyYWQ3NjkuMDI0ZDQzOC4yNzFkNzY5LjAyNGQ1NzYuNTEyZDc2OS4wMjRkNjA1LjE4NGQ3NjEuODU2ZDYyMy42MTZkNzk3LjY5NmQ2NjguNjcyZDc5Ny42OTZkNzE5Ljg3MmQ3OTcuNjk2ZDg3Mi40NDhkNzk3LjY5NmQ5MzQuOTEyZDc1My4xNTJkOTc5LjQ1NmQ3MDguNjA4ZDEwMjRkNjQ1LjEyZDEwMjRkNjAuNDE2ZDEwMjRkNjAuNDE2ZDI4Ni43MmQ2MTcuNDcyZDI4Ni43MmQ2NzkuOTM2ZDI4Ni43MmQ3MjQuNDhkMzMxLjI2NGQ3NjkuMDI0ZDM3NS44MDhkNzY5LjAyNGQ0MzguMjcxZDIxOS4xMzZkNzI5LjA4OGQyMTkuMTM2ZDg2NC4yNTZkNjM2LjkyOGQ4NjQuMjU2ZDYzNi45MjhkNzI5LjA4OGQyMTkuMTM2ZDcyOS4wODhkMjE5LjEzNmQ0NDYuNDYzZDIxOS4xMzZkNTY5LjM0NGQ2MDguMjU2ZDU2OS4zNDRkNjA4LjI1NmQ0NDYuNDYzZDIxOS4xMzZkNDQ2LjQ2M2hSM2Q4NTEuOTY4UjRkNzk3LjY5NlI1ZDYwLjQxNlI2ZDczNy4yOFI3ZDBSOGQ2NzYuODY0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNjZSMTJkNjAuNDE2UjEzZDg1MS45NjhSMTRhaTFpMmkzaTNpMmkzaTNpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzhvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNzhSMTJkMFIxM2QwUjE0YWhnOjY1b1IxZDk5Ni4zNTJSMmFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGhSM2Q4NTYuMDY0UjRkNzk2LjY3MlI1ZDU5LjM5MlI2ZDczNy4yOFI3ZDBSOGQ2NzcuODg4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNjVSMTJkNTkuMzkyUjEzZDg1Ni4wNjRSMTRhaTFpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaGc6MTc3b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTc3UjEyZDBSMTNkMFIxNGFoZzo2NG9SMWQ5OTYuMzUyUjJhZDM4OS4xMmQ0OTIuNTQ0ZDQ1Mi42MDhkNDkyLjU0NGQ1MTQuMDQ4ZDQ5Mi41NDRkNTQ3LjMyOGQ1MjUuODI0ZDU4MC42MDhkNTU5LjEwNGQ1ODAuNjA4ZDYyMC41NDRkNTgwLjYwOGQ2ODUuMDU2ZDYyNS42NjRkNjg1LjA1NmQ2MjUuNjY0ZDQ0My4zOTFkMjE1LjA0ZDQ0My4zOTFkMjE1LjA0ZDg2Ny4zMjhkNzgyLjMzNmQ4NjcuMzI4ZDc4Mi4zMzZkMTAyNGQyMDcuODcyZDEwMjRkMTQ2LjQzMmQxMDI0ZDEwMi40ZDk3OS45NjhkNTguMzY4ZDkzNS45MzZkNTguMzY4ZDg3NS41MmQ1OC4zNjhkNDM1LjE5OWQ1OC4zNjhkMzczLjc2ZDEwMi40ZDMzMC4yNGQxNDYuNDMyZDI4Ni43MmQyMDcuODcyZDI4Ni43MmQ2MzIuODMyZDI4Ni43MmQ2OTQuMjcyZDI4Ni43MmQ3MzguMzA0ZDMzMC4yNGQ3ODIuMzM2ZDM3My43NmQ3ODIuMzM2ZDQzNS4xOTlkNzgyLjMzNmQ4MDIuODE2ZDM4OS4xMmQ4MDIuODE2ZDMyNy42OGQ4MDIuODE2ZDI5My44ODhkNzY5LjUzNmQyNjAuMDk2ZDczNi4yNTZkMjYwLjA5NmQ2NzQuODE2ZDI2MC4wOTZkNjIwLjU0NGQyNjAuMDk2ZDU1OS4xMDRkMjkzLjg4OGQ1MjUuODI0ZDMyNy42OGQ0OTIuNTQ0ZDM4OS4xMmQ0OTIuNTQ0ZDM2OC42NGQ2ODUuMDU2ZDQ3Mi4wNjRkNjg1LjA1NmQ0NzIuMDY0ZDYwMS4wODhkMzY4LjY0ZDYwMS4wODhkMzY4LjY0ZDY4NS4wNTZoUjNkODUwLjk0NFI0ZDc4Mi4zMzZSNWQ1OC4zNjhSNmQ3MzcuMjhSN2QwUjhkNjc4LjkxMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTY0UjEyZDU4LjM2OFIxM2Q4NTAuOTQ0UjE0YWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxNzZvUjFkOTk2LjM1MlIyYWQxOTUuNTg0ZDMwMS4wNTZkMjc4LjUyOGQzMDEuMDU2ZDMzOC45NDRkMzAxLjA1NmQzODIuOTc2ZDM0NC41NzZkNDI3LjAwOGQzODguMDk2ZDQyNy4wMDhkNDQ5LjUzNWQ0MjcuMDA4ZDUyMy4yNjRkNDI3LjAwOGQ1ODQuNzA0ZDM4Mi45NzZkNjI4LjczNmQzMzguOTQ0ZDY3Mi43NjhkMjc4LjUyOGQ2NzIuNzY4ZDE5NS41ODRkNjcyLjc2OGQxMzQuMTQ0ZDY3Mi43NjhkOTAuMTEyZDYyOC43MzZkNDYuMDhkNTg0LjcwNGQ0Ni4wOGQ1MjMuMjY0ZDQ2LjA4ZDQ0OS41MzVkNDYuMDhkMzg4LjA5NmQ5MC4xMTJkMzQ0LjU3NmQxMzQuMTQ0ZDMwMS4wNTZkMTk1LjU4NGQzMDEuMDU2ZDE4NC4zMmQ0MzkuMjk1ZDE4NC4zMmQ1MzMuNTAzZDI4OC43NjhkNTMzLjUwM2QyODguNzY4ZDQzOS4yOTVkMTg0LjMyZDQzOS4yOTVoUjNkNDQ5LjUzNlI0ZDQyNy4wMDhSNWQ0Ni4wOFI2ZDcyMi45NDRSN2QzNTEuMjMyUjhkNjc2Ljg2NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE3NlIxMmQ0Ni4wOFIxM2Q0NDkuNTM2UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmhnOjYzb1IxZDk5Ni4zNTJSMmFkMzEuNzQ0ZDI4Ni43MmQ1MTkuMTY4ZDI4Ni43MmQ1ODEuNjMyZDI4Ni43MmQ2MjUuMTUyZDMzMC4yNGQ2NjguNjcyZDM3My43NmQ2NjguNjcyZDQzNS4xOTlkNjY4LjY3MmQ2MDUuMTg0ZDY2OC42NzJkNjY2LjYyNGQ2MjUuMTUyZDcxMC42NTZkNTgxLjYzMmQ3NTQuNjg4ZDUxOS4xNjhkNzU0LjY4OGQyODguNzY4ZDc1NC42ODhkMjg4Ljc2OGQ4MjUuMzQ0ZDEzMS4wNzJkODI1LjM0NGQxMzEuMDcyZDc0NS40NzJkMTMxLjA3MmQ2ODQuMDMxZDE3NC41OTJkNjQwLjUxMmQyMTguMTEyZDU5Ni45OTJkMjc5LjU1MmQ1OTYuOTkyZDUxMmQ1OTYuOTkyZDUxMmQ0NDMuMzkxZDMxLjc0NGQ0NDMuMzkxZDMxLjc0NGQyODYuNzJkMjg4Ljc2OGQxMDI0ZDEzMS4wNzJkMTAyNGQxMzEuMDcyZDg2Ny4zMjhkMjg4Ljc2OGQ4NjcuMzI4ZDI4OC43NjhkMTAyNGhSM2Q2OTQuMjcyUjRkNjY4LjY3MlI1ZDMxLjc0NFI2ZDczNy4yOFI3ZDBSOGQ3MDUuNTM2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNjNSMTJkMzEuNzQ0UjEzZDY5NC4yNzJSMTRhaTFpMmkzaTNpMmkzaTNpMmkyaTJpMmkzaTNpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzVvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNzVSMTJkMFIxM2QwUjE0YWhnOjYyb1IxZDk5Ni4zNTJSMmFkNjAuNDE2ZDEwNDMuNDU1ZDYwLjQxNmQ4NjEuMTg0ZDI5OS4wMDhkNzIyLjk0NGQxNjcuOTM2ZDY0OS4yMTZkMTUyLjU3NmQ2NDEuMDI0ZDExNS4yZDYxNy45ODNkNzcuODI0ZDU5NC45NDRkNjAuNDE2ZDU4NS43MjhkNjAuNDE2ZDQwNC40OGQ0OTguNjg4ZDY1Ny40MDhkNDk4LjY4OGQ3ODkuNTA0ZDYwLjQxNmQxMDQzLjQ1NWhSM2Q0ODYuNFI0ZDQ5OC42ODhSNWQ2MC40MTZSNmQ2MTkuNTJSN2QtMTkuNDU2UjhkNTU5LjEwNFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTYyUjEyZDYwLjQxNlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkzaTNpMmkyaTJpMmhnOjE3NG9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE3NFIxMmQwUjEzZDBSMTRhaGc6NjFvUjFkOTk2LjM1MlIyYWQ1OTkuMDRkNzM1LjIzMmQ1OTkuMDRkODkxLjkwNGQ2MC40MTZkODkxLjkwNGQ2MC40MTZkNzM1LjIzMmQ1OTkuMDRkNzM1LjIzMmQ1OTkuMDRkNTI4LjM4NGQ1OTkuMDRkNjg1LjA1NmQ2MC40MTZkNjg1LjA1NmQ2MC40MTZkNTI4LjM4NGQ1OTkuMDRkNTI4LjM4NGhSM2Q2NTMuMzEyUjRkNTk5LjA0UjVkNjAuNDE2UjZkNDk1LjYxNlI3ZDEzMi4wOTZSOGQ0MzUuMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTYxUjEyZDYwLjQxNlIxM2Q2NTMuMzEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTczb1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTczUjEyZDBSMTNkMFIxNGFoZzo2MG9SMWQ5OTYuMzUyUjJhZDIwMi43NTJkNzIwLjg5NmQ0NDIuMzY4ZDg2MC4xNmQ0NDIuMzY4ZDEwNDEuNDA3ZDUuMTJkNzg3LjQ1NmQ1LjEyZDY1Ni4zODRkNDQyLjM2OGQ0MDIuNDMyZDQ0Mi4zNjhkNTgyLjY1NmQyMDIuNzUyZDcyMC44OTZoUjNkNDg0LjM1MlI0ZDQ0Mi4zNjhSNWQ1LjEyUjZkNjIxLjU2OFI3ZC0xNy40MDhSOGQ2MTYuNDQ4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNjBSMTJkNS4xMlIxM2Q0ODQuMzUyUjE0YWkxaTJpMmkyaTJpMmkyaTJoZzoxNzJvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNzJSMTJkMFIxM2QwUjE0YWhnOjU5b1IxZDk5Ni4zNTJSMmFkMjA5LjkyZDQzMC4wOGQyMDkuOTJkNTg3Ljc3NmQ1Mi4yMjRkNTg3Ljc3NmQ1Mi4yMjRkNDMwLjA4ZDIwOS45MmQ0MzAuMDhkNTMuMjQ4ZDg3OC41OTJkMjA5LjkyZDg3OC41OTJkMjA5LjkyZDEwMDcuNjE2ZDIwOS45MmQxMDYyLjkxMmQxNjUuMzc2ZDExMDUuOTJkMTIwLjgzMmQxMTQ4LjkyOGQ1My4yNDhkMTE2MC4xOTJkNTMuMjQ4ZDg3OC41OTJoUjNkMjcyLjM4NFI0ZDIwOS45MlI1ZDUyLjIyNFI2ZDU5My45MlI3ZC0xMzYuMTkyUjhkNTQxLjY5NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTU5UjEyZDUyLjIyNFIxM2QyNzIuMzg0UjE0YWkxaTJpMmkyaTJpMWkyaTJpM2kzaTJoZzoxNzFvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNzFSMTJkMFIxM2QwUjE0YWhnOjU4b1IxZDk5Ni4zNTJSMmFkNTUuMjk2ZDg2Ny4zMjhkMjExLjk2OGQ4NjcuMzI4ZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkODY3LjMyOGQyMTEuOTY4ZDQzMC4wOGQyMTEuOTY4ZDU4Ny43NzZkNTUuMjk2ZDU4Ny43NzZkNTUuMjk2ZDQzMC4wOGQyMTEuOTY4ZDQzMC4wOGhSM2QyNTIuOTI4UjRkMjExLjk2OFI1ZDU1LjI5NlI2ZDU5My45MlI3ZDBSOGQ1MzguNjI0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNThSMTJkNTUuMjk2UjEzZDI1Mi45MjhSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzBvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNzBSMTJkMFIxM2QwUjE0YWhnOjU3b1IxZDk5Ni4zNTJSMmFkNjMwLjc4NGQxMDI0ZDIwNC44ZDEwMjRkMTUwLjUyOGQxMDI0ZDEwNy4wMDhkOTc4Ljk0NGQ2My40ODhkOTMzLjg4OGQ1Mi4yMjRkODY3LjMyOGQ2MjIuNTkyZDg2Ny4zMjhkNjIyLjU5MmQ3MzYuMjU2ZDIwNC44ZDczNi4yNTZkMTQzLjM2ZDczNi4yNTZkOTkuMzI4ZDY5Mi4yMjNkNTUuMjk2ZDY0OC4xOTJkNTUuMjk2ZDU4Ni43NTJkNTUuMjk2ZDQzNS4xOTlkNTUuMjk2ZDM3My43NmQ5OS4zMjhkMzMwLjI0ZDE0My4zNmQyODYuNzJkMjA0LjhkMjg2LjcyZDYzMC43ODRkMjg2LjcyZDY5Mi4yMjRkMjg2LjcyZDczNS43NDRkMzMwLjI0ZDc3OS4yNjRkMzczLjc2ZDc3OS4yNjRkNDM1LjE5OWQ3NzkuMjY0ZDg3NS41MmQ3NzkuMjY0ZDkzNS45MzZkNzM1Ljc0NGQ5NzkuOTY4ZDY5Mi4yMjRkMTAyNGQ2MzAuNzg0ZDEwMjRkMjEyLjk5MmQ1NzguNTZkNjIyLjU5MmQ1NzguNTZkNjIyLjU5MmQ0NDMuMzkxZDIxMi45OTJkNDQzLjM5MWQyMTIuOTkyZDU3OC41NmhSM2Q4NDcuODcyUjRkNzc5LjI2NFI1ZDUyLjIyNFI2ZDczNy4yOFI3ZDBSOGQ2ODUuMDU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNTdSMTJkNTIuMjI0UjEzZDg0Ny44NzJSMTRhaTFpMmkzaTNpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmhnOjE2OW9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE2OVIxMmQwUjEzZDBSMTRhaGc6NTZvUjFkOTk2LjM1MlIyYWQ3ODIuMzM2ZDQwOC41NzZkNzgyLjMzNmQ1NzkuNTg0ZDc4Mi4zMzZkNjE3LjQ3MmQ3NjQuOTI4ZDY1MC4yNGQ3ODIuMzM2ZDY4MS45ODNkNzgyLjMzNmQ3MTkuODcyZDc4Mi4zMzZkODc1LjUyZDc4Mi4zMzZkOTM1LjkzNmQ3MzguMzA0ZDk3OS45NjhkNjk0LjI3MmQxMDI0ZDYzMi44MzJkMTAyNGQyMDcuODcyZDEwMjRkMTQ2LjQzMmQxMDI0ZDEwMi40ZDk3OS45NjhkNTguMzY4ZDkzNS45MzZkNTguMzY4ZDg3NS41MmQ1OC4zNjhkNzE5Ljg3MmQ1OC4zNjhkNjg3LjEwNGQ3NS43NzZkNjUwLjI0ZDU4LjM2OGQ2MTMuMzc2ZDU4LjM2OGQ1NzkuNTg0ZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyZDYzMi44MzJkMjg2LjcyZDY4OC4xMjhkMjg2LjcyZDczMC42MjRkMzIxLjUzNWQ3NzMuMTJkMzU2LjM1MmQ3ODIuMzM2ZDQwOC41NzZkMjE1LjA0ZDcyOS4wODhkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQyMTUuMDRkNzI5LjA4OGQyMTUuMDRkNDQ0LjQxNWQyMTUuMDRkNTgxLjYzMmQ2MjUuNjY0ZDU4MS42MzJkNjI1LjY2NGQ0NDQuNDE1ZDIxNS4wNGQ0NDQuNDE1aFIzZDg1NC4wMTZSNGQ3ODIuMzM2UjVkNTguMzY4UjZkNzM3LjI4UjdkMFI4ZDY3OC45MTJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk1NlIxMmQ1OC4zNjhSMTNkODU0LjAxNlIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTY4b1IxZDk5Ni4zNTJSMmFkNDMxLjEwNGQxMDEuMzc1ZDQzMS4xMDRkMjU5LjA3MmQyNzMuNDA4ZDI1OS4wNzJkMjczLjQwOGQxMDEuMzc1ZDQzMS4xMDRkMTAxLjM3NWQyMTEuOTY4ZDEwMS4zNzVkMjExLjk2OGQyNTkuMDcyZDU1LjI5NmQyNTkuMDcyZDU1LjI5NmQxMDEuMzc1ZDIxMS45NjhkMTAxLjM3NWhSM2QzOTQuMjRSNGQ0MzEuMTA0UjVkNTUuMjk2UjZkOTIyLjYyNFI3ZDc2NC45MjhSOGQ4NjcuMzI4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTY4UjEyZDU1LjI5NlIxM2QzOTQuMjRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1NW9SMWQ5OTYuMzUyUjJhZDMuMDcyZDI4NS42OTZkNDY2Ljk0NGQyODUuNjk2ZDUyOC4zODRkMjg1LjY5NmQ1NzEuOTA0ZDMyOS4yMTZkNjE1LjQyNGQzNzIuNzM2ZDYxNS40MjRkNDM0LjE3NWQ2MTUuNDI0ZDEwMjRkNDU4Ljc1MmQxMDI0ZDQ1OC43NTJkNDQyLjM2N2QzLjA3MmQ0NDIuMzY3ZDMuMDcyZDI4NS42OTZoUjNkNjc1Ljg0UjRkNjE1LjQyNFI1ZDMuMDcyUjZkNzM4LjMwNFI3ZDBSOGQ3MzUuMjMyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNTVSMTJkMy4wNzJSMTNkNjc1Ljg0UjE0YWkxaTJpM2kzaTJpMmkyaTJpMmhnOjE2N29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE2N1IxMmQwUjEzZDBSMTRhaGc6NTRvUjFkOTk2LjM1MlIyYWQ2NzAuNzJkNDQzLjM5MWQyMTUuMDRkNDQzLjM5MWQyMTUuMDRkNTcxLjM5MmQ2MzIuODMyZDU3MS4zOTJkNjk0LjI3MmQ1NzEuMzkyZDczOC4zMDRkNjE0LjkxMmQ3ODIuMzM2ZDY1OC40MzJkNzgyLjMzNmQ3MTkuODcyZDc4Mi4zMzZkODc1LjUyZDc4Mi4zMzZkOTM1LjkzNmQ3MzguMzA0ZDk3OS45NjhkNjk0LjI3MmQxMDI0ZDYzMi44MzJkMTAyNGQyMDcuODcyZDEwMjRkMTQ2LjQzMmQxMDI0ZDEwMi40ZDk3OS45NjhkNTguMzY4ZDkzNS45MzZkNTguMzY4ZDg3NS41MmQ1OC4zNjhkNDM1LjE5OWQ1OC4zNjhkMzczLjc2ZDEwMi40ZDMzMC4yNGQxNDYuNDMyZDI4Ni43MmQyMDcuODcyZDI4Ni43MmQ2NzAuNzJkMjg2LjcyZDY3MC43MmQ0NDMuMzkxZDIxNS4wNGQ3MjkuMDg4ZDIxNS4wNGQ4NjcuMzI4ZDYyNS42NjRkODY3LjMyOGQ2MjUuNjY0ZDcyOS4wODhkMjE1LjA0ZDcyOS4wODhoUjNkODM5LjY4UjRkNzgyLjMzNlI1ZDU4LjM2OFI2ZDczNy4yOFI3ZDBSOGQ2NzguOTEyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNTRSMTJkNTguMzY4UjEzZDgzOS42OFIxNGFpMWkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmhnOjE2Nm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE2NlIxMmQwUjEzZDBSMTRhaGc6NTNvUjFkOTk2LjM1MlIyYWQ3ODIuMzM2ZDQ0My4zOTFkMjE1LjA0ZDQ0My4zOTFkMjE1LjA0ZDU3MS4zOTJkNjMyLjgzMmQ1NzEuMzkyZDY5NC4yNzJkNTcxLjM5MmQ3MzguMzA0ZDYxNC45MTJkNzgyLjMzNmQ2NTguNDMyZDc4Mi4zMzZkNzE5Ljg3MmQ3ODIuMzM2ZDg3NS41MmQ3ODIuMzM2ZDkzNS45MzZkNzM4LjMwNGQ5NzkuOTY4ZDY5NC4yNzJkMTAyNGQ2MzIuODMyZDEwMjRkMjA3Ljg3MmQxMDI0ZDE0Ni40MzJkMTAyNGQxMDIuNGQ5NzkuOTY4ZDU4LjM2OGQ5MzUuOTM2ZDU4LjM2OGQ4NzUuNTJkNTguMzY4ZDgxOC4xNzVkMjE1LjA0ZDgxOC4xNzVkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQ1OC4zNjhkNzI5LjA4OGQ1OC4zNjhkMjg2LjcyZDc4Mi4zMzZkMjg2LjcyZDc4Mi4zMzZkNDQzLjM5MWhSM2Q4NDkuOTJSNGQ3ODIuMzM2UjVkNTguMzY4UjZkNzM3LjI4UjdkMFI4ZDY3OC45MTJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk1M1IxMmQ1OC4zNjhSMTNkODQ5LjkyUjE0YWkxaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmhnOjE2NW9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE2NVIxMmQwUjEzZDBSMTRhaGc6NTJvUjFkOTk2LjM1MlIyYWQ2MDQuMTZkNjgzLjAwOGQ3MDIuNDY0ZDY4My4wMDhkNzAyLjQ2NGQ4NDAuNzA0ZDYwNC4xNmQ4NDAuNzA0ZDYwNC4xNmQxMDI0ZDQ0Ny40ODhkMTAyNGQ0NDcuNDg4ZDg0MC43MDRkNi4xNDRkODQwLjcwNGQ2LjE0NGQ3MDAuNDE1ZDQ2My44NzJkMjg2LjcyZDYwNC4xNmQyODYuNzJkNjA0LjE2ZDY4My4wMDhkNDQ3LjQ4OGQ1MzEuNDU2ZDI2MS4xMmQ2ODMuMDA4ZDQ0Ny40ODhkNjgzLjAwOGQ0NDcuNDg4ZDUzMS40NTZoUjNkNzQ3LjUyUjRkNzAyLjQ2NFI1ZDYuMTQ0UjZkNzM3LjI4UjdkMFI4ZDczMS4xMzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk1MlIxMmQ2LjE0NFIxM2Q3NDcuNTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJoZzoxNjRvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNjRSMTJkMFIxM2QwUjE0YWhnOjUxb1IxZDk5Ni4zNTJSMmFkNzUwLjU5MmQ0MzUuMTk5ZDc1MC41OTJkNTgyLjY1NmQ3NTAuNTkyZDYwOC4yNTZkNzQ0LjQ0OGQ2MjkuNzZkNzc4LjI0ZDY3MC43MmQ3NzguMjRkNzIyLjk0NGQ3NzguMjRkODc1LjUyZDc3OC4yNGQ5MzUuOTM2ZDczNC43MmQ5NzkuOTY4ZDY5MS4yZDEwMjRkNjI5Ljc2ZDEwMjRkMjAzLjc3NmQxMDI0ZDE0Mi4zMzZkMTAyNGQ5OC4zMDRkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ4MTguMTc1ZDIxMC45NDRkODE4LjE3NWQyMTAuOTQ0ZDg2Ny4zMjhkNjIxLjU2OGQ4NjcuMzI4ZDYyMS41NjhkNzMxLjEzNmQxNzUuMTA0ZDczMS4xMzZkMTc1LjEwNGQ1NzQuNDY0ZDU5My45MmQ1NzQuNDY0ZDU5My45MmQ0NDMuMzkxZDIxMC45NDRkNDQzLjM5MWQyMTAuOTQ0ZDUwMC43MzZkNTQuMjcyZDUwMC43MzZkNTQuMjcyZDQzNS4xOTlkNTQuMjcyZDM3My43NmQ5OC4zMDRkMzMwLjI0ZDE0Mi4zMzZkMjg2LjcyZDIwMy43NzZkMjg2LjcyZDYwMi4xMTJkMjg2LjcyZDY2My41NTJkMjg2LjcyZDcwNy4wNzJkMzMwLjI0ZDc1MC41OTJkMzczLjc2ZDc1MC41OTJkNDM1LjE5OWhSM2Q4NDUuODI0UjRkNzc4LjI0UjVkNTQuMjcyUjZkNzM3LjI4UjdkMFI4ZDY4My4wMDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk1MVIxMmQ1NC4yNzJSMTNkODQ1LjgyNFIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2hnOjE2M29SMWQ5OTYuMzUyUjJhZDY5Ni4zMmQ0OTIuNTQ0ZDUzOC42MjRkNDkyLjU0NGQ1MzguNjI0ZDQ0My4zOTFkMjg4Ljc2OGQ0NDMuMzkxZDI4OC43NjhkNTgzLjY4ZDU5OC4wMTZkNTgzLjY4ZDU5OC4wMTZkNzQwLjM1MmQyODguNzY4ZDc0MC4zNTJkMjg4Ljc2OGQ4NjcuMzI4ZDY5Ni4zMmQ4NjcuMzI4ZDY5Ni4zMmQxMDI0ZDM5LjkzNmQxMDI0ZDM5LjkzNmQ4NjcuMzI4ZDEzMi4wOTZkODY3LjMyOGQxMzIuMDk2ZDc0MC4zNTJkMzkuOTM2ZDc0MC4zNTJkMzkuOTM2ZDU4My42OGQxMzIuMDk2ZDU4My42OGQxMzIuMDk2ZDQzNS4xOTlkMTMyLjA5NmQzNzMuNzZkMTc2LjEyOGQzMzAuMjRkMjIwLjE2ZDI4Ni43MmQyODAuNTc2ZDI4Ni43MmQ1NDcuODRkMjg2LjcyZDYwOS4yOGQyODYuNzJkNjUyLjhkMzMwLjI0ZDY5Ni4zMmQzNzMuNzZkNjk2LjMyZDQzNS4xOTlkNjk2LjMyZDQ5Mi41NDRoUjNkNzUxLjYxNlI0ZDY5Ni4zMlI1ZDM5LjkzNlI2ZDczNy4yOFI3ZDBSOGQ2OTcuMzQ0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTYzUjEyZDM5LjkzNlIxM2Q3NTEuNjE2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6NTBvUjFkOTk2LjM1MlIyYWQyMDcuODcyZDI4Ni43MmQ2MzIuODMyZDI4Ni43MmQ2OTQuMjcyZDI4Ni43MmQ3MzguMzA0ZDMzMC4yNGQ3ODIuMzM2ZDM3My43NmQ3ODIuMzM2ZDQzNS4xOTlkNzgyLjMzNmQ1OTguMDE2ZDc4Mi4zMzZkNjU5LjQ1NmQ3MzguMzA0ZDcwMy40ODhkNjk0LjI3MmQ3NDcuNTJkNjMyLjgzMmQ3NDcuNTJkMjE1LjA0ZDc0Ny41MmQyMTUuMDRkODY3LjMyOGQ3ODIuMzM2ZDg2Ny4zMjhkNzgyLjMzNmQxMDI0ZDU4LjM2OGQxMDI0ZDU4LjM2OGQ3MzguMzA0ZDU4LjM2OGQ2NzYuODY0ZDEwMi40ZDYzMy4zNDRkMTQ2LjQzMmQ1ODkuODI0ZDIwNy44NzJkNTg5LjgyNGQ2MjUuNjY0ZDU4OS44MjRkNjI1LjY2NGQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ1MDIuNzg0ZDU4LjM2OGQ1MDIuNzg0ZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyaFIzZDg0OS45MlI0ZDc4Mi4zMzZSNWQ1OC4zNjhSNmQ3MzcuMjhSN2QwUjhkNjc4LjkxMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTUwUjEyZDU4LjM2OFIxM2Q4NDkuOTJSMTRhaTFpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2hnOjE2Mm9SMWQ5OTYuMzUyUjJhZDYzNS45MDRkNTc4LjU2ZDQ1NS42OGQ1NzguNTZkNDU1LjY4ZDg2Ny4zMjhkNjM1LjkwNGQ4NjcuMzI4ZDYzNS45MDRkMTAyNGQ0NTUuNjhkMTAyNGQ0NTUuNjhkMTEyNS4zNzZkMjk3Ljk4NGQxMTI1LjM3NmQyOTcuOTg0ZDEwMjRkMTgzLjI5NmQxMDI0ZDEyMS44NTZkMTAyNGQ3Ny44MjRkOTc5Ljk2OGQzMy43OTJkOTM1LjkzNmQzMy43OTJkODc1LjUyZDMzLjc5MmQ1NjkuMzQ0ZDMzLjc5MmQ1MDcuOTA0ZDc3LjgyNGQ0NjMuODcxZDEyMS44NTZkNDE5Ljg0ZDE4My4yOTZkNDE5Ljg0ZDI5Ny45ODRkNDE5Ljg0ZDI5Ny45ODRkMzAyLjA4ZDQ1NS42OGQzMDIuMDhkNDU1LjY4ZDQxOS44NGQ2MzUuOTA0ZDQxOS44NGQ2MzUuOTA0ZDU3OC41NmQyOTcuOTg0ZDg2Ny4zMjhkMjk3Ljk4NGQ1NzguNTZkMTkwLjQ2NGQ1NzguNTZkMTkwLjQ2NGQ4NjcuMzI4ZDI5Ny45ODRkODY3LjMyOGhSM2Q2NTEuMjY0UjRkNjM1LjkwNFI1ZDMzLjc5MlI2ZDcyMS45MlI3ZC0xMDEuMzc2UjhkNjg4LjEyOFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE2MlIxMmQzMy43OTJSMTNkNjUxLjI2NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDlvUjFkOTk2LjM1MlIyYWQxLjAyNGQ1NjcuMjk2ZDIzNi41NDRkMjg2LjcyZDM5OS4zNmQyODYuNzJkMzk5LjM2ZDEwMjRkMjQyLjY4OGQxMDI0ZDI0Mi42ODhkNTI1LjMxMmQyNDAuNjRkNTI3LjM2ZDI0MS42NjRkNTI3LjM2ZDIwOC44OTZkNTY3LjI5NmQxLjAyNGQ1NjcuMjk2aFIzZDQwMC4zODRSNGQzOTkuMzZSNWQxLjAyNFI2ZDczNy4yOFI3ZDBSOGQ3MzYuMjU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNDlSMTJkMS4wMjRSMTNkNDAwLjM4NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmhnOjE2MW9SMWQ5OTYuMzUyUjJhZDIxMC45NDRkMzAxLjA1NmQyMTAuOTQ0ZDQ1Ny43MjdkNTQuMjcyZDQ1Ny43MjdkNTQuMjcyZDMwMS4wNTZkMjEwLjk0NGQzMDEuMDU2ZDIxMC45NDRkMTAyNGQ1NC4yNzJkMTAyNGQ1NC4yNzJkNDg1LjM3NmQyMTAuOTQ0ZDQ4NS4zNzZkMjEwLjk0NGQxMDI0aFIzZDIxNS4wNFI0ZDIxMC45NDRSNWQ1NC4yNzJSNmQ3MjIuOTQ0UjdkMFI4ZDY2OC42NzJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNjFSMTJkNTQuMjcyUjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ4b1IxZDk5Ni4zNTJSMmFkMjA3Ljg3MmQyODYuNzJkNjMyLjgzMmQyODYuNzJkNjk0LjI3MmQyODYuNzJkNzM4LjMwNGQzMzIuMjg4ZDc4Mi4zMzZkMzc3Ljg1NmQ3ODIuMzM2ZDQzOS4yOTVkNzgyLjMzNmQ4NjUuMjhkNzgyLjMzNmQ5MjYuNzJkNzM3Ljc5MmQ5NzUuMzZkNjkzLjI0OGQxMDI0ZDYzMi44MzJkMTAyNGQyMDcuODcyZDEwMjRkMTQ3LjQ1NmQxMDI0ZDEwMi45MTJkOTc1LjM2ZDU4LjM2OGQ5MjYuNzJkNTguMzY4ZDg2NS4yOGQ1OC4zNjhkNDM5LjI5NWQ1OC4zNjhkMzc3Ljg1NmQxMDIuNGQzMzIuMjg4ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyZDI5OS4wMDhkODU3LjA4OGQ2MjUuNjY0ZDg1Ny4wODhkNjI1LjY2NGQ1ODIuNjU2ZDI5OS4wMDhkODU3LjA4OGQ1NDEuNjk2ZDQ0Ny40ODdkMjE1LjA0ZDQ0Ny40ODdkMjE1LjA0ZDcyMS45MmQ1NDEuNjk2ZDQ0Ny40ODdoUjNkODU0LjAxNlI0ZDc4Mi4zMzZSNWQ1OC4zNjhSNmQ3MzcuMjhSN2QwUjhkNjc4LjkxMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTQ4UjEyZDU4LjM2OFIxM2Q4NTQuMDE2UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMWkyaTJpMmhnOjE2MG9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE2MFIxMmQwUjEzZDBSMTRhaGc6NDdvUjFkOTk2LjM1MlIyYWQ2LjE0NGQ4NjUuMjhkNDc4LjIwOGQyODYuNzJkNTM0LjUyOGQyODYuNzJkNTM0LjUyOGQ0NDQuNDE1ZDYyLjQ2NGQxMDI0ZDYuMTQ0ZDEwMjRkNi4xNDRkODY1LjI4aFIzZDUzMy41MDRSNGQ1MzQuNTI4UjVkNi4xNDRSNmQ3MzcuMjhSN2QwUjhkNzMxLjEzNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTQ3UjEyZDYuMTQ0UjEzZDUzMy41MDRSMTRhaTFpMmkyaTJpMmkyaTJoZzoxNTlvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNTlSMTJkMFIxM2QwUjE0YWhnOjQ2b1IxZDk5Ni4zNTJSMmFkMjExLjk2OGQ4NjcuMzI4ZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkODY3LjMyOGQyMTEuOTY4ZDg2Ny4zMjhoUjNkMjM4LjU5MlI0ZDIxMS45NjhSNWQ1NS4yOTZSNmQxNTYuNjcyUjdkMFI4ZDEwMS4zNzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk0NlIxMmQ1NS4yOTZSMTNkMjM4LjU5MlIxNGFpMWkyaTJpMmkyaGc6MTU4b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTU4UjEyZDBSMTNkMFIxNGFoZzo0NW9SMWQ5OTYuMzUyUjJhZDQ4Ny40MjRkNjQzLjA3MmQ0ODcuNDI0ZDc5OS43NDRkNjAuNDE2ZDc5OS43NDRkNjAuNDE2ZDY0My4wNzJkNDg3LjQyNGQ2NDMuMDcyaFIzZDUyOS40MDhSNGQ0ODcuNDI0UjVkNjAuNDE2UjZkMzgwLjkyOFI3ZDIyNC4yNTZSOGQzMjAuNTEyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNDVSMTJkNjAuNDE2UjEzZDUyOS40MDhSMTRhaTFpMmkyaTJpMmhnOjE1N29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE1N1IxMmQwUjEzZDBSMTRhaGc6NDRvUjFkOTk2LjM1MlIyYWQ1NS4yOTZkODc4LjU5MmQyMTEuOTY4ZDg3OC41OTJkMjExLjk2OGQxMDA3LjYxNmQyMTEuOTY4ZDEwNjIuOTEyZDE2Ny40MjRkMTEwNS45MmQxMjIuODhkMTE0OC45MjhkNTUuMjk2ZDExNjAuMTkyZDU1LjI5NmQ4NzguNTkyaFIzZDI0OC44MzJSNGQyMTEuOTY4UjVkNTUuMjk2UjZkMTQ1LjQwOFI3ZC0xMzYuMTkyUjhkOTAuMTEyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNDRSMTJkNTUuMjk2UjEzZDI0OC44MzJSMTRhaTFpMmkyaTNpM2kyaGc6MTU2b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTU2UjEyZDBSMTNkMFIxNGFoZzo0M29SMWQ5OTYuMzUyUjJhZDE1MC41MjhkNTA4LjkyOGQzMDcuMmQ1MDguOTI4ZDMwNy4yZDY0My4wNzJkNDQ0LjQxNmQ2NDMuMDcyZDQ0NC40MTZkNzk5Ljc0NGQzMDcuMmQ3OTkuNzQ0ZDMwNy4yZDkzNS45MzZkMTUwLjUyOGQ5MzUuOTM2ZDE1MC41MjhkNzk5Ljc0NGQxNy40MDhkNzk5Ljc0NGQxNy40MDhkNjQzLjA3MmQxNTAuNTI4ZDY0My4wNzJkMTUwLjUyOGQ1MDguOTI4aFIzZDQ2NS45MlI0ZDQ0NC40MTZSNWQxNy40MDhSNmQ1MTUuMDcyUjdkODguMDY0UjhkNDk3LjY2NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTQzUjEyZDE3LjQwOFIxM2Q0NjUuOTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNTVSMTJkMFIxM2QwUjE0YWhnOjQyb1IxZDk5Ni4zNTJSMmFkNDU1LjY4ZDM4MS45NTJkNTAzLjgwOGQ1MzMuNTAzZDM5MS4xNjhkNTY5LjM0NGQ0NjEuODI0ZDY2NC41NzZkMzM1Ljg3MmQ3NTYuNzM2ZDI2My4xNjhkNjYxLjUwNGQxOTUuNTg0ZDc1Ni43MzZkNjcuNTg0ZDY2NC41NzZkMTM4LjI0ZDU2OS4zNDRkMjUuNmQ1MzMuNTAzZDczLjcyOGQzODEuOTUyZDE4NS4zNDRkNDE5Ljg0ZDE4NS4zNDRkMzAxLjA1NmQzNDMuMDRkMzAxLjA1NmQzNDMuMDRkNDE5Ljg0ZDM1My4yOGQ0MTYuNzY4ZDQ1NS42OGQzODEuOTUyaFIzZDUyOC4zODRSNGQ1MDMuODA4UjVkMjUuNlI2ZDcyMi45NDRSN2QyNjcuMjY0UjhkNjk3LjM0NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTQyUjEyZDI1LjZSMTNkNTI4LjM4NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2hnOjE1NG9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE1NFIxMmQwUjEzZDBSMTRhaGc6NDFvUjFkOTk2LjM1MlIyYWQ1Ny4zNDRkMTAyNGQ1Ny4zNDRkODY3LjMyOGQxMTYuNzM2ZDg2Ny4zMjhkMTE2LjczNmQ0NDMuMzkxZDU3LjM0NGQ0NDMuMzkxZDU3LjM0NGQyODYuNzJkMTI1Ljk1MmQyODYuNzJkMTg2LjM2OGQyODYuNzJkMjMwLjRkMzMwLjI0ZDI3NC40MzJkMzczLjc2ZDI3NC40MzJkNDM1LjE5OWQyNzQuNDMyZDg3NS41MmQyNzQuNDMyZDkzNS45MzZkMjMwLjRkOTc5Ljk2OGQxODYuMzY4ZDEwMjRkMTI1Ljk1MmQxMDI0ZDU3LjM0NGQxMDI0aFIzZDMwNC4xMjhSNGQyNzQuNDMyUjVkNTcuMzQ0UjZkNzM3LjI4UjdkMFI4ZDY3OS45MzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWk0MVIxMmQ1Ny4zNDRSMTNkMzA0LjEyOFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjE1M29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE1M1IxMmQwUjEzZDBSMTRhaGc6NDBvUjFkOTk2LjM1MlIyYWQyNjkuMzEyZDQ0My4zOTFkMjA5LjkyZDQ0My4zOTFkMjA5LjkyZDg2Ny4zMjhkMjY5LjMxMmQ4NjcuMzI4ZDI2OS4zMTJkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDQzNS4xOTlkNTMuMjQ4ZDM3My43NmQ5Ni43NjhkMzMwLjI0ZDE0MC4yODhkMjg2LjcyZDIwMS43MjhkMjg2LjcyZDI2OS4zMTJkMjg2LjcyZDI2OS4zMTJkNDQzLjM5MWhSM2QzMDEuMDU2UjRkMjY5LjMxMlI1ZDUzLjI0OFI2ZDczNy4yOFI3ZDBSOGQ2ODQuMDMyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpNDBSMTJkNTMuMjQ4UjEzZDMwMS4wNTZSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoxNTJvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNTJSMTJkMFIxM2QwUjE0YWhnOjM5b1IxZDk5Ni4zNTJSMmFkMjE3LjA4OGQzMDEuMDU2ZDIxNy4wODhkNTA3LjkwNGQ2MC40MTZkNTA3LjkwNGQ2MC40MTZkMzAxLjA1NmQyMTcuMDg4ZDMwMS4wNTZoUjNkMjU3LjAyNFI0ZDIxNy4wODhSNWQ2MC40MTZSNmQ3MjIuOTQ0UjdkNTE2LjA5NlI4ZDY2Mi41MjhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkzOVIxMmQ2MC40MTZSMTNkMjU3LjAyNFIxNGFpMWkyaTJpMmkyaGc6MTUxb1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTUxUjEyZDBSMTNkMFIxNGFoZzozOG9SMWQ5OTYuMzUyUjJhZDc3Ny4yMTZkODExLjAwOGQ4OTQuOTc2ZDg4MC42NGQ4OTQuOTc2ZDEwNDIuNDMyZDc1MS42MTZkOTYwLjUxMmQ3MDUuNTM2ZDEwMjRkNjI4LjczNmQxMDI0ZDIwMi43NTJkMTAyNGQxNDEuMzEyZDEwMjRkOTcuNzkyZDk3OS45NjhkNTQuMjcyZDkzNS45MzZkNTQuMjcyZDg3NS41MmQ1NC4yNzJkNjg2LjA3OWQ1NC4yNzJkNjYzLjU1MmQ2NS41MzZkNjM4Ljk3NmQ3Ni44ZDYxNC40ZDk4LjMwNGQ2MDAuMDY0ZDkxLjEzNmQ1ODIuNjU2ZDkxLjEzNmQ1NDUuNzkxZDkxLjEzNmQ0MzYuMjIzZDkxLjEzNmQzNzQuNzg0ZDEzNS4xNjhkMzMxLjI2NGQxNzkuMmQyODcuNzQ0ZDIzOS42MTZkMjg3Ljc0NGQ2MDEuMDg4ZDI4Ny43NDRkNjU1LjM2ZDI4Ny43NDRkNjk3Ljg1NmQzMjIuNTU5ZDc0MC4zNTJkMzU3LjM3NmQ3NDkuNTY4ZDQwOS42ZDc0OS41NjhkNDk5LjcxMmQ1OTIuODk2ZDQ5OS43MTJkNTkyLjg5NmQ0NDUuNDM5ZDI0Ny44MDhkNDQ1LjQzOWQyNDcuODA4ZDU1Ni4wMzFkNjIwLjU0NGQ3NDMuNDI0ZDYyMC41NDRkNjQ2LjE0NGQ3NzcuMjE2ZDY0Ni4xNDRkNzc3LjIxNmQ4MTEuMDA4ZDQ0Mi4zNjhkODE0LjA3OWQyMTAuOTQ0ZDY5Ny4zNDRkMjEwLjk0NGQ4NjcuMzI4ZDU0OC44NjRkODY3LjMyOGQ1MzMuNTA0ZDg1OS4xMzZkNDk3LjY2NGQ4NDEuNzI4ZDQ2MS44MjRkODI0LjMxOWQ0NDIuMzY4ZDgxNC4wNzloUjNkOTYwLjUxMlI0ZDg5NC45NzZSNWQ1NC4yNzJSNmQ3MzYuMjU2UjdkLTE4LjQzMlI4ZDY4MS45ODRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkzOFIxMmQ1NC4yNzJSMTNkOTYwLjUxMlIxNGFpMWkyaTJpMmkzaTJpM2kzaTJpM2kzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkzaTNoZzoxNTBvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNTBSMTJkMFIxM2QwUjE0YWhnOjM3b1IxZDk5Ni4zNTJSMmFkODA4Ljk2ZDI4Ny43NDRkODYxLjE4NGQyODcuNzQ0ZDg2MS4xODRkNDQ3LjQ4N2QxODkuNDRkMTAyNGQxMzcuMjE2ZDEwMjRkMTM3LjIxNmQ4NjMuMjMyZDgwOC45NmQyODcuNzQ0ZDE4OC40MTZkMjk0LjkxMmQyNzEuMzZkMjk0LjkxMmQzMzIuOGQyOTQuOTEyZDM3MS43MTJkMzMzLjMxMmQ0MTAuNjI0ZDM3MS43MTJkNDEwLjYyNGQ0MzMuMTUyZDQxMC42MjRkNTA2Ljg4ZDQxMC42MjRkNTY4LjMxOWQzNzEuNzEyZDYwNy4yMzJkMzMyLjhkNjQ2LjE0NGQyNzEuMzZkNjQ2LjE0NGQxODguNDE2ZDY0Ni4xNDRkMTI2Ljk3NmQ2NDYuMTQ0ZDg4LjA2NGQ2MDcuMjMyZDQ5LjE1MmQ1NjguMzE5ZDQ5LjE1MmQ1MDYuODhkNDkuMTUyZDQzMy4xNTJkNDkuMTUyZDM3MS43MTJkODguMDY0ZDMzMy4zMTJkMTI2Ljk3NmQyOTQuOTEyZDE4OC40MTZkMjk0LjkxMmQ3MDguNjA4ZDY2My41NTJkNzkxLjU1MmQ2NjMuNTUyZDg1Mi45OTJkNjYzLjU1MmQ4OTEuOTA0ZDcwMS45NTJkOTMwLjgxNmQ3NDAuMzUyZDkzMC44MTZkODAxLjc5MmQ5MzAuODE2ZDg3NS41MmQ5MzAuODE2ZDkzNi45NmQ4OTEuOTA0ZDk3NS44NzJkODUyLjk5MmQxMDE0Ljc4NGQ3OTEuNTUyZDEwMTQuNzg0ZDcwOC42MDhkMTAxNC43ODRkNjQ4LjE5MmQxMDE0Ljc4NGQ2MDkuMjhkOTc1Ljg3MmQ1NzAuMzY4ZDkzNi45NmQ1NzAuMzY4ZDg3NS41MmQ1NzAuMzY4ZDgwMS43OTJkNTcwLjM2OGQ3NDAuMzUyZDYwOS4yOGQ3MDEuOTUyZDY0OC4xOTJkNjYzLjU1MmQ3MDguNjA4ZDY2My41NTJkNjk4LjM2OGQ3OTEuNTUyZDY5OC4zNjhkODg2Ljc4NGQ4MDIuODE2ZDg4Ni43ODRkODAyLjgxNmQ3OTEuNTUyZDY5OC4zNjhkNzkxLjU1MmQxNzcuMTUyZDQyMi45MTJkMTc3LjE1MmQ1MTcuMTJkMjgxLjZkNTE3LjEyZDI4MS42ZDQyMi45MTJkMTc3LjE1MmQ0MjIuOTEyaFIzZDk4OS4xODRSNGQ5MzAuODE2UjVkNDkuMTUyUjZkNzM2LjI1NlI3ZDBSOGQ2ODcuMTA0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMzdSMTJkNDkuMTUyUjEzZDk4OS4xODRSMTRhaTFpMmkyaTJpMmkyaTJpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDlvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNDlSMTJkMFIxM2QwUjE0YWhnOjM2b1IxZDk5Ni4zNTJSMmFkNzU3Ljc2ZDQzNS4xOTlkNzU3Ljc2ZDUwMi43ODRkNjAxLjA4OGQ1MDIuNzg0ZDYwMS4wODhkNDQzLjM5MWQ0NzUuMTM2ZDQ0My4zOTFkNDc1LjEzNmQ1ODAuNjA4ZDYwOS4yOGQ1ODAuNjA4ZDY3MC43MmQ1ODAuNjA4ZDcxNC4yNGQ2MjQuNjRkNzU3Ljc2ZDY2OC42NzJkNzU3Ljc2ZDczMC4xMTJkNzU3Ljc2ZDg3NS41MmQ3NTcuNzZkOTM1LjkzNmQ3MTQuMjRkOTc5Ljk2OGQ2NzAuNzJkMTAyNGQ2MDkuMjhkMTAyNGQ0NzUuMTM2ZDEwMjRkNDc1LjEzNmQxMTI0LjM1MmQzMTcuNDRkMTEyNC4zNTJkMzE3LjQ0ZDEwMjRkMTgzLjI5NmQxMDI0ZDEyMS44NTZkMTAyNGQ3OC4zMzZkOTc5Ljk2OGQzNC44MTZkOTM1LjkzNmQzNC44MTZkODc1LjUyZDM0LjgxNmQ4MDcuOTM2ZDE5MS40ODhkODA3LjkzNmQxOTEuNDg4ZDg2Ny4zMjhkMzE3LjQ0ZDg2Ny4zMjhkMzE3LjQ0ZDczNy4yOGQxODMuMjk2ZDczNy4yOGQxMjEuODU2ZDczNy4yOGQ3OC4zMzZkNjkzLjc2ZDM0LjgxNmQ2NTAuMjRkMzQuODE2ZDU4OC44ZDM0LjgxNmQ0MzUuMTk5ZDM0LjgxNmQzNzMuNzZkNzguMzM2ZDMzMC4yNGQxMjEuODU2ZDI4Ni43MmQxODMuMjk2ZDI4Ni43MmQzMTcuNDRkMjg2LjcyZDMxNy40NGQxODYuMzY3ZDQ3NS4xMzZkMTg2LjM2N2Q0NzUuMTM2ZDI4Ni43MmQ2MDkuMjhkMjg2LjcyZDY3MC43MmQyODYuNzJkNzE0LjI0ZDMzMC4yNGQ3NTcuNzZkMzczLjc2ZDc1Ny43NmQ0MzUuMTk5ZDMxNy40NGQ1ODAuNjA4ZDMxNy40NGQ0NDMuMzkxZDE5MS40ODhkNDQzLjM5MWQxOTEuNDg4ZDU4MC42MDhkMzE3LjQ0ZDU4MC42MDhkNDc1LjEzNmQ3MzcuMjhkNDc1LjEzNmQ4NjcuMzI4ZDYwMS4wODhkODY3LjMyOGQ2MDEuMDg4ZDczNy4yOGQ0NzUuMTM2ZDczNy4yOGhSM2Q4MDYuOTEyUjRkNzU3Ljc2UjVkMzQuODE2UjZkODM3LjYzMlI3ZC0xMDAuMzUyUjhkODAyLjgxNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTM2UjEyZDM0LjgxNlIxM2Q4MDYuOTEyUjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDhvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNDhSMTJkMFIxM2QwUjE0YWhnOjM1b1IxZDk5Ni4zNTJSMmFkNzY4ZDQ0MC4zMTlkNzY4ZDU5Ni45OTJkNjUwLjI0ZDU5Ni45OTJkNjE1LjQyNGQ3MDUuNTM2ZDczOS4zMjhkNzA1LjUzNmQ3MzkuMzI4ZDg2Mi4yMDhkNTY0LjIyNGQ4NjIuMjA4ZDU1Ni4wMzJkODg2Ljc4NGQ1NDAuNjcyZDk0My4xMDRkNTI1LjMxMmQ5OTkuNDI0ZDUxOC4xNDRkMTAyNGQzNTkuNDI0ZDEwMjRkNDA4LjU3NmQ4NjIuMjA4ZDI2NS4yMTZkODYyLjIwOGQyNTcuMDI0ZDg4OS44NTZkMjQxLjE1MmQ5NDcuMmQyMjUuMjhkMTAwNC41NDRkMjIwLjE2ZDEwMjRkNjEuNDRkMTAyNGQxMDkuNTY4ZDg2Mi4yMDhkMzIuNzY4ZDg2Mi4yMDhkMzIuNzY4ZDcwNS41MzZkMTU2LjY3MmQ3MDUuNTM2ZDE5MS40ODhkNTk2Ljk5MmQ2MS40NGQ1OTYuOTkyZDYxLjQ0ZDQ0MC4zMTlkMjQxLjY2NGQ0NDAuMzE5ZDI1NC45NzZkNDAzLjQ1NmQyOTAuODE2ZDI4Ni43MmQ0NTIuNjA4ZDI4Ni43MmQ0MDAuMzg0ZDQ0MC4zMTlkNTQxLjY5NmQ0NDAuMzE5ZDU5MC44NDhkMjg2LjcyZDc1MS42MTZkMjg2LjcyZDY5OS4zOTJkNDQwLjMxOWQ3NjhkNDQwLjMxOWQzMTYuNDE2ZDcwNS41MzZkNDU1LjY4ZDcwNS41MzZkNDkwLjQ5NmQ1OTYuOTkyZDM1MS4yMzJkNTk2Ljk5MmQzMTYuNDE2ZDcwNS41MzZoUjNkODE2LjEyOFI0ZDc2OFI1ZDMyLjc2OFI2ZDczNy4yOFI3ZDBSOGQ3MDQuNTEyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMzVSMTJkMzIuNzY4UjEzZDgxNi4xMjhSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ3b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTQ3UjEyZDBSMTNkMFIxNGFoZzozNG9SMWQ5OTYuMzUyUjJhZDE5Mi41MTJkMzAxLjA1NmQxOTIuNTEyZDUwNi44OGQzNi44NjRkNTA2Ljg4ZDM2Ljg2NGQzMDEuMDU2ZDE5Mi41MTJkMzAxLjA1NmQzNzcuODU2ZDMwMS4wNTZkMzc3Ljg1NmQ1MDYuODhkMjIyLjIwOGQ1MDYuODhkMjIyLjIwOGQzMDEuMDU2ZDM3Ny44NTZkMzAxLjA1NmhSM2Q0MDUuNTA0UjRkMzc3Ljg1NlI1ZDM2Ljg2NFI2ZDcyMi45NDRSN2Q1MTcuMTJSOGQ2ODYuMDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkzNFIxMmQzNi44NjRSMTNkNDA1LjUwNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0Nm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE0NlIxMmQwUjEzZDBSMTRhaGc6MzNvUjFkOTk2LjM1MlIyYWQyMTYuMDY0ZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDg2Ny4zMjhkMjE2LjA2NGQ4NjcuMzI4ZDIxNi4wNjRkMTAyNGQ1OS4zOTJkODE4LjE3NWQ1OS4zOTJkMjg2LjcyZDIxNi4wNjRkMjg2LjcyZDIxNi4wNjRkODE4LjE3NWQ1OS4zOTJkODE4LjE3NWhSM2QyMjUuMjhSNGQyMTYuMDY0UjVkNTkuMzkyUjZkNzM3LjI4UjdkMFI4ZDY3Ny44ODhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkzM1IxMmQ1OS4zOTJSMTNkMjI1LjI4UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ1b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTQ1UjEyZDBSMTNkMFIxNGFoZzozMm9SMWQ5OTYuMzUyUjJhaFIzZDMyOS43MjhSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTMyUjEyZDBSMTNkMzI5LjcyOFIxNGFoZzoxNDRvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNDRSMTJkMFIxM2QwUjE0YWhnOjE0M29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE0M1IxMmQwUjEzZDBSMTRhaGc6MjU1b1IxZDk5Ni4zNTJSMmFkNjQ2LjE0NGQxMDg4LjUxMmQ2NDYuMTQ0ZDExNDkuOTUyZDYwMi42MjRkMTE5My40NzJkNTU5LjEwNGQxMjM2Ljk5MmQ0OTcuNjY0ZDEyMzYuOTkyZDEzNy4yMTZkMTIzNi45OTJkMTM3LjIxNmQxMDc5LjI5NmQ0ODkuNDcyZDEwNzkuMjk2ZDQ4OS40NzJkMTAyNGQxOTIuNTEyZDEwMjRkMTMxLjA3MmQxMDI0ZDg3LjA0ZDk3OS45NjhkNDMuMDA4ZDkzNS45MzZkNDMuMDA4ZDg3NS41MmQ0My4wMDhkNDMyLjEyOGQxOTkuNjhkNDMyLjEyOGQxOTkuNjhkODY3LjMyOGQ0ODkuNDcyZDg2Ny4zMjhkNDg5LjQ3MmQ0MzIuMTI4ZDY0Ni4xNDRkNDMyLjEyOGQ2NDYuMTQ0ZDEwODguNTEyZDU1NS4wMDhkMjEwLjk0M2Q1NTUuMDA4ZDM2OC42NGQzOTcuMzEyZDM2OC42NGQzOTcuMzEyZDIxMC45NDNkNTU1LjAwOGQyMTAuOTQzZDMzNS44NzJkMjEwLjk0M2QzMzUuODcyZDM2OC42NGQxNzkuMmQzNjguNjRkMTc5LjJkMjEwLjk0M2QzMzUuODcyZDIxMC45NDNoUjNkNzA0LjUxMlI0ZDY0Ni4xNDRSNWQ0My4wMDhSNmQ4MTMuMDU2UjdkLTIxMi45OTJSOGQ3NzAuMDQ4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjU1UjEyZDQzLjAwOFIxM2Q3MDQuNTEyUjE0YWkxaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0Mm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTE0MlIxMmQwUjEzZDBSMTRhaGc6MjU0b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjU0UjEyZDBSMTNkMFIxNGFoZzoxNDFvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxNDFSMTJkMFIxM2QwUjE0YWhnOjI1M29SMWQ5OTYuMzUyUjJhZDY0Ni4xNDRkMTA4OC41MTJkNjQ2LjE0NGQxMTQ5Ljk1MmQ2MDIuNjI0ZDExOTMuNDcyZDU1OS4xMDRkMTIzNi45OTJkNDk3LjY2NGQxMjM2Ljk5MmQxMzcuMjE2ZDEyMzYuOTkyZDEzNy4yMTZkMTA3OS4yOTZkNDg5LjQ3MmQxMDc5LjI5NmQ0ODkuNDcyZDEwMjRkMTkyLjUxMmQxMDI0ZDEzMS4wNzJkMTAyNGQ4Ny4wNGQ5NzkuOTY4ZDQzLjAwOGQ5MzUuOTM2ZDQzLjAwOGQ4NzUuNTJkNDMuMDA4ZDQzMi4xMjhkMTk5LjY4ZDQzMi4xMjhkMTk5LjY4ZDg2Ny4zMjhkNDg5LjQ3MmQ4NjcuMzI4ZDQ4OS40NzJkNDMyLjEyOGQ2NDYuMTQ0ZDQzMi4xMjhkNjQ2LjE0NGQxMDg4LjUxMmQyNzYuNDhkMzY5LjY2NGQzMjguNzA0ZDE2MS43OTJkNDg5LjQ3MmQxNjEuNzkyZDQzNy4yNDhkMzY5LjY2NGQyNzYuNDhkMzY5LjY2NGhSM2Q3MDQuNTEyUjRkNjQ2LjE0NFI1ZDQzLjAwOFI2ZDg2Mi4yMDhSN2QtMjEyLjk5MlI4ZDgxOS4yUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjUzUjEyZDQzLjAwOFIxM2Q3MDQuNTEyUjE0YWkxaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQwb1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTQwUjEyZDBSMTNkMFIxNGFoZzoyNTJvUjFkOTk2LjM1MlIyYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQ1NTguMDhkMjEyLjk5MWQ1NTguMDhkMzcwLjY4OGQ0MDAuMzg0ZDM3MC42ODhkNDAwLjM4NGQyMTIuOTkxZDU1OC4wOGQyMTIuOTkxZDMzOC45NDRkMjEyLjk5MWQzMzguOTQ0ZDM3MC42ODhkMTgyLjI3MmQzNzAuNjg4ZDE4Mi4yNzJkMjEyLjk5MWQzMzguOTQ0ZDIxMi45OTFoUjNkNzExLjY4UjRkNjU2LjM4NFI1ZDU0LjI3MlI2ZDgxMS4wMDhSN2QwUjhkNzU2LjczNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTI1MlIxMmQ1NC4yNzJSMTNkNzExLjY4UjE0YWkxaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMzlvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMzlSMTJkMFIxM2QwUjE0YWhnOjI1MW9SMWQ5OTYuMzUyUjJhZDQ5OS43MTJkNDMwLjA4ZDY1Ni4zODRkNDMwLjA4ZDY1Ni4zODRkODc1LjUyZDY1Ni4zODRkOTM1LjkzNmQ2MTIuODY0ZDk3OS45NjhkNTY5LjM0NGQxMDI0ZDUwNy45MDRkMTAyNGQyMDIuNzUyZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDQzMC4wOGQyMTAuOTQ0ZDQzMC4wOGQyMTAuOTQ0ZDg2Ny4zMjhkNDk5LjcxMmQ4NjcuMzI4ZDQ5OS43MTJkNDMwLjA4ZDMyNS42MzJkMzY5LjY2NGQxODkuNDRkMzY5LjY2NGQzMDIuMDhkMTgxLjI0N2Q0MDQuNDhkMTgxLjI0N2Q1MTcuMTJkMzY5LjY2NGQzNzkuOTA0ZDM2OS42NjRkMzUxLjIzMmQzMjQuNjA3ZDMyNS42MzJkMzY5LjY2NGhSM2Q3MTEuNjhSNGQ2NTYuMzg0UjVkNTQuMjcyUjZkODQyLjc1MlI3ZDBSOGQ3ODguNDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyNTFSMTJkNTQuMjcyUjEzZDcxMS42OFIxNGFpMWkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMzhvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMzhSMTJkMFIxM2QwUjE0YWhnOjI1MG9SMWQ5OTYuMzUyUjJhZDQ5OS43MTJkNDMwLjA4ZDY1Ni4zODRkNDMwLjA4ZDY1Ni4zODRkODc1LjUyZDY1Ni4zODRkOTM1LjkzNmQ2MTIuODY0ZDk3OS45NjhkNTY5LjM0NGQxMDI0ZDUwNy45MDRkMTAyNGQyMDIuNzUyZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDQzMC4wOGQyMTAuOTQ0ZDQzMC4wOGQyMTAuOTQ0ZDg2Ny4zMjhkNDk5LjcxMmQ4NjcuMzI4ZDQ5OS43MTJkNDMwLjA4ZDI3OS41NTJkMzY5LjY2NGQzMzEuNzc2ZDE2MS43OTJkNDkyLjU0NGQxNjEuNzkyZDQ0MC4zMmQzNjkuNjY0ZDI3OS41NTJkMzY5LjY2NGhSM2Q3MTEuNjhSNGQ2NTYuMzg0UjVkNTQuMjcyUjZkODYyLjIwOFI3ZDBSOGQ4MDcuOTM2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjUwUjEyZDU0LjI3MlIxM2Q3MTEuNjhSMTRhaTFpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM3b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTM3UjEyZDBSMTNkMFIxNGFoZzoyNDlvUjFkOTk2LjM1MlIyYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQzOTkuMzZkMTYxLjc5MmQ0NTEuNTg0ZDM2OS42NjRkMjkwLjgxNmQzNjkuNjY0ZDIzOC41OTJkMTYxLjc5MmQzOTkuMzZkMTYxLjc5MmhSM2Q3MTEuNjhSNGQ2NTYuMzg0UjVkNTQuMjcyUjZkODYyLjIwOFI3ZDBSOGQ4MDcuOTM2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjQ5UjEyZDU0LjI3MlIxM2Q3MTEuNjhSMTRhaTFpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM2b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTM2UjEyZDBSMTNkMFIxNGFoZzoyNDhvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyNDhSMTJkMFIxM2QwUjE0YWhnOjEzNW9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEzNVIxMmQwUjEzZDBSMTRhaGc6MjQ3b1IxZDk5Ni4zNTJSMmFkNTA4LjkyOGQ2MjEuNTY4ZDUwOC45MjhkNzc4LjI0ZDcuMTY4ZDc3OC4yNGQ3LjE2OGQ2MjEuNTY4ZDUwOC45MjhkNjIxLjU2OGQxODcuMzkyZDg2Ny4zMjhkMzQ0LjA2NGQ4NjcuMzI4ZDM0NC4wNjRkMTAyNGQxODcuMzkyZDEwMjRkMTg3LjM5MmQ4NjcuMzI4ZDM0NC4wNjRkMzkzLjIxNmQzNDQuMDY0ZDU1MC45MTJkMTg3LjM5MmQ1NTAuOTEyZDE4Ny4zOTJkMzkzLjIxNmQzNDQuMDY0ZDM5My4yMTZoUjNkNTMxLjQ1NlI0ZDUwOC45MjhSNWQ3LjE2OFI2ZDYzMC43ODRSN2QwUjhkNjIzLjYxNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTI0N1IxMmQ3LjE2OFIxM2Q1MzEuNDU2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNG9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEzNFIxMmQwUjEzZDBSMTRhaGc6MjQ2b1IxZDk5Ni4zNTJSMmFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQ1NDYuODE2ZDIxMC45NDNkNTQ2LjgxNmQzNjguNjRkMzg5LjEyZDM2OC42NGQzODkuMTJkMjEwLjk0M2Q1NDYuODE2ZDIxMC45NDNkMzI3LjY4ZDIxMC45NDNkMzI3LjY4ZDM2OC42NGQxNzEuMDA4ZDM2OC42NGQxNzEuMDA4ZDIxMC45NDNkMzI3LjY4ZDIxMC45NDNoUjNkNzA4LjYwOFI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ4MTMuMDU2UjdkMFI4ZDc2MC44MzJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyNDZSMTJkNTIuMjI0UjEzZDcwOC42MDhSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMzNvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMzNSMTJkMFIxM2QwUjE0YWhnOjI0NW9SMWQ5OTYuMzUyUjJhZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4NzUuNTJkNjU0LjMzNmQ5MzUuOTM2ZDYxMC44MTZkOTc5Ljk2OGQ1NjcuMjk2ZDEwMjRkNTA1Ljg1NmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDg2Ny4zMjhkNDk3LjY2NGQ4NjcuMzI4ZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkNDI5LjA1NmQyNTAuODhkNDY4Ljk5MmQyNTAuODhkNTI3LjM2ZDIxMi45OTFkNTI3LjM2ZDM0Mi4wMTVkNDYzLjg3MmQzNjguNjRkNDI1Ljk4NGQzNjguNjRkMzg4LjA5NmQzNjguNjRkMzI5LjIxNmQzMzYuODk1ZDI3MC4zMzZkMzA1LjE1MWQyNDAuNjRkMzA1LjE1MWQyMjkuMzc2ZDMwNS4xNTFkMTg2LjM2OGQzMDUuMTUxZDE0My4zNmQzNDIuMDE1ZDE0My4zNmQyMTUuMDM5ZDIxMi45OTJkMTg3LjM5MWQyNDAuNjRkMTg3LjM5MWQyNzguNTI4ZDE4Ny4zOTFkMzM3LjkyZDIxNy4wODdkMzk3LjMxMmQyNDYuNzg0ZDQyOS4wNTZkMjUwLjg4aFIzZDcwOC42MDhSNGQ2NTQuMzM2UjVkNTIuMjI0UjZkODM2LjYwOFI3ZDBSOGQ3ODQuMzg0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjQ1UjEyZDUyLjIyNFIxM2Q3MDguNjA4UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTNpMmkzaTNpM2kyaTNpMmkzaTNpM2hnOjEzMm9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEzMlIxMmQwUjEzZDBSMTRhaGc6MjQ0b1IxZDk5Ni4zNTJSMmFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQzMzQuODQ4ZDM3MC42ODhkMTk4LjY1NmQzNzAuNjg4ZDMxMS4yOTZkMTgyLjI3MWQ0MTMuNjk2ZDE4Mi4yNzFkNTI2LjMzNmQzNzAuNjg4ZDM4OS4xMmQzNzAuNjg4ZDM2MC40NDhkMzI1LjYzMWQzMzQuODQ4ZDM3MC42ODhoUjNkNzA4LjYwOFI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ4NDEuNzI4UjdkMFI4ZDc4OS41MDRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyNDRSMTJkNTIuMjI0UjEzZDcwOC42MDhSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjEzMW9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEzMVIxMmQwUjEzZDBSMTRhaGc6MjQzb1IxZDk5Ni4zNTJSMmFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyNjguMjg4ZDM2OS42NjRkMzIwLjUxMmQxNjEuNzkyZDQ4MS4yOGQxNjEuNzkyZDQyOS4wNTZkMzY5LjY2NGQyNjguMjg4ZDM2OS42NjRoUjNkNzA4LjYwOFI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ4NjIuMjA4UjdkMFI4ZDgwOS45ODRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyNDNSMTJkNTIuMjI0UjEzZDcwOC42MDhSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMG9SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEzMFIxMmQwUjEzZDBSMTRhaGc6MjQyb1IxZDk5Ni4zNTJSMmFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQ0MDguNTc2ZDE2MS43OTJkNDYwLjhkMzY5LjY2NGQzMDAuMDMyZDM2OS42NjRkMjQ3LjgwOGQxNjEuNzkyZDQwOC41NzZkMTYxLjc5MmhSM2Q3MDguNjA4UjRkNjU0LjMzNlI1ZDUyLjIyNFI2ZDg2Mi4yMDhSN2QwUjhkODA5Ljk4NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTI0MlIxMmQ1Mi4yMjRSMTNkNzA4LjYwOFIxNGFpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI5b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTI5UjEyZDBSMTNkMFIxNGFoZzoyNDFvUjFkOTk2LjM1MlIyYWQ1MDguOTI4ZDQzMC4wOGQ1NzAuMzY4ZDQzMC4wOGQ2MTMuODg4ZDQ3NC4xMTFkNjU3LjQwOGQ1MTguMTQ0ZDY1Ny40MDhkNTc4LjU2ZDY1Ny40MDhkMTAyNGQ1MDAuNzM2ZDEwMjRkNTAwLjczNmQ1ODYuNzUyZDIxMS45NjhkNTg2Ljc1MmQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDQzMC4wOGQ1MDguOTI4ZDQzMC4wOGQ0MjcuMDA4ZDI1MC44OGQ0NjYuOTQ0ZDI1MC44OGQ1MjUuMzEyZDIxMi45OTFkNTI1LjMxMmQzNDIuMDE1ZDQ2MS44MjRkMzY4LjY0ZDQyMy45MzZkMzY4LjY0ZDM4Ni4wNDhkMzY4LjY0ZDMyNy4xNjhkMzM2Ljg5NWQyNjguMjg4ZDMwNS4xNTFkMjM4LjU5MmQzMDUuMTUxZDIyNy4zMjhkMzA1LjE1MWQxODQuMzJkMzA1LjE1MWQxNDEuMzEyZDM0Mi4wMTVkMTQxLjMxMmQyMTUuMDM5ZDIxMC45NDRkMTg3LjM5MWQyMzguNTkyZDE4Ny4zOTFkMjc2LjQ4ZDE4Ny4zOTFkMzM1Ljg3MmQyMTcuMDg3ZDM5NS4yNjRkMjQ2Ljc4NGQ0MjcuMDA4ZDI1MC44OGhSM2Q3MjQuOTkyUjRkNjU3LjQwOFI1ZDU1LjI5NlI2ZDgzNi42MDhSN2QwUjhkNzgxLjMxMlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTI0MVIxMmQ1NS4yOTZSMTNkNzI0Ljk5MlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6MTI4b1IxZDk5Ni4zNTJSMmFoUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTI4UjEyZDBSMTNkMFIxNGFoZzoyNDBvUjFkOTk2LjM1MlIyYWhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyNDBSMTJkMFIxM2QwUjE0YWhnOjEyN29SMWQ5OTYuMzUyUjJhaFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEyN1IxMmQwUjEzZDBSMTRhaGc6MjM5b1IxZDk5Ni4zNTJSMmFkNTYuMzJkMTAyNGQ1Ni4zMmQ0MzAuMDhkMjEyLjk5MmQ0MzAuMDhkMjEyLjk5MmQxMDI0ZDU2LjMyZDEwMjRkMzQzLjA0ZDIxMC45NDNkMzQzLjA0ZDM2OC42NGQxODUuMzQ0ZDM2OC42NGQxODUuMzQ0ZDIxMC45NDNkMzQzLjA0ZDIxMC45NDNkMTIzLjkwNGQyMTAuOTQzZDEyMy45MDRkMzY4LjY0ZC0zMi43NjhkMzY4LjY0ZC0zMi43NjhkMjEwLjk0M2QxMjMuOTA0ZDIxMC45NDNoUjNkMjE5LjEzNlI0ZDM0My4wNFI1ZC0zMi43NjhSNmQ4MTMuMDU2UjdkMFI4ZDg0NS44MjRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzlSMTJkLTMyLjc2OFIxM2QyMTkuMTM2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNm9SMWQ5OTYuMzUyUjJhZDMxMC4yNzJkNjkxLjJkMzUxLjIzMmQ2OTEuMmQ0MDguNTc2ZDY1NC4zMzZkNDA4LjU3NmQ3ODMuMzZkMzQ3LjEzNmQ4MDguOTZkMzA3LjJkODA4Ljk2ZDI3MC4zMzZkODA4Ljk2ZDIxMC40MzJkNzc3LjcyOGQxNTAuNTI4ZDc0Ni40OTZkMTE1LjcxMmQ3NDYuNDk2ZDc2LjhkNzQ2LjQ5NmQyNC41NzZkNzg2LjQzMmQyNC41NzZkNjUxLjI2NGQ3OC44NDhkNjI3LjcxMmQxMjEuODU2ZDYyNy43MTJkMTYwLjc2OGQ2MjcuNzEyZDIyMC42NzJkNjU2Ljg5NmQyODAuNTc2ZDY4Ni4wNzlkMzEwLjI3MmQ2OTEuMmhSM2Q0MTMuNjk2UjRkNDA4LjU3NlI1ZDI0LjU3NlI2ZDM5Ni4yODhSN2QyMTUuMDRSOGQzNzEuNzEyUjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTI2UjEyZDI0LjU3NlIxM2Q0MTMuNjk2UjE0YWkxaTNpMmkzaTNpM2kzaTJpM2kzaTNoZzoyMzhvUjFkOTk2LjM1MlIyYWQ1Mi4yMjRkMTAyNGQ1Mi4yMjRkNDMwLjA4ZDIwOC44OTZkNDMwLjA4ZDIwOC44OTZkMTAyNGQ1Mi4yMjRkMTAyNGQxMjAuODMyZDM3MC42ODhkLTE1LjM2ZDM3MC42ODhkOTcuMjhkMTgyLjI3MWQxOTkuNjhkMTgyLjI3MWQzMTIuMzJkMzcwLjY4OGQxNzUuMTA0ZDM3MC42ODhkMTQ2LjQzMmQzMjUuNjMxZDEyMC44MzJkMzcwLjY4OGhSM2QyMTkuMTM2UjRkMzEyLjMyUjVkLTE1LjM2UjZkODQxLjcyOFI3ZDBSOGQ4NTcuMDg4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjM4UjEyZC0xNS4zNlIxM2QyMTkuMTM2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaGc6MTI1b1IxZDk5Ni4zNTJSMmFkNTIuMjI0ZDEwMjRkNTIuMjI0ZDg2Ny4zMjhkMTExLjYxNmQ4NjcuMzI4ZDExMS42MTZkNjg2LjA3OWQxNTcuNjk2ZDY0Ny4xNjhkMTExLjYxNmQ2MDguMjU2ZDExMS42MTZkNDQzLjM5MWQ1Mi4yMjRkNDQzLjM5MWQ1Mi4yMjRkMjg2LjcyZDExOC43ODRkMjg2LjcyZDE4MC4yMjRkMjg2LjcyZDIyNC4yNTZkMzMwLjI0ZDI2OC4yODhkMzczLjc2ZDI2OC4yODhkNDM1LjE5OWQyNjguMjg4ZDU1Ni4wMzFkMzA5LjI0OGQ1ODAuNjA4ZDMwOS4yNDhkNzExLjY4ZDI2OC4yODhkNzM3LjI4ZDI2OC4yODhkODc1LjUyZDI2OC4yODhkOTM1LjkzNmQyMjQuMjU2ZDk3OS45NjhkMTgwLjIyNGQxMDI0ZDExOC43ODRkMTAyNGQ1Mi4yMjRkMTAyNGhSM2QyOTUuOTM2UjRkMzA5LjI0OFI1ZDUyLjIyNFI2ZDczNy4yOFI3ZDBSOGQ2ODUuMDU2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTI1UjEyZDUyLjIyNFIxM2QyOTUuOTM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpM2kzaTJoZzoyMzdvUjFkOTk2LjM1MlIyYWQ1Mi4yMjRkMTAyNGQ1Mi4yMjRkNDMwLjA4ZDIwOC44OTZkNDMwLjA4ZDIwOC44OTZkMTAyNGQ1Mi4yMjRkMTAyNGQ1MC4xNzZkMzcwLjY4OGQxMDIuNGQxNjIuODE2ZDI2My4xNjhkMTYyLjgxNmQyMTAuOTQ0ZDM3MC42ODhkNTAuMTc2ZDM3MC42ODhoUjNkMjE5LjEzNlI0ZDI2My4xNjhSNWQ1MC4xNzZSNmQ4NjEuMTg0UjdkMFI4ZDgxMS4wMDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzdSMTJkNTAuMTc2UjEzZDIxOS4xMzZSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjRvUjFkOTk2LjM1MlIyYWQ1NS4yOTZkMTEyNS4zNzZkNTUuMjk2ZDIwMC43MDNkMjExLjk2OGQyMDAuNzAzZDIxMS45NjhkMTEyNS4zNzZkNTUuMjk2ZDExMjUuMzc2aFIzZDIxOS4xMzZSNGQyMTEuOTY4UjVkNTUuMjk2UjZkODIzLjI5NlI3ZC0xMDEuMzc2UjhkNzY4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTI0UjEyZDU1LjI5NlIxM2QyMTkuMTM2UjE0YWkxaTJpMmkyaTJoZzoyMzZvUjFkOTk2LjM1MlIyYWQ1Ny4zNDRkMTAyNGQ1Ny4zNDRkNDMwLjA4ZDIxNC4wMTZkNDMwLjA4ZDIxNC4wMTZkMTAyNGQ1Ny4zNDRkMTAyNGQxNzcuMTUyZDE2MS43OTJkMjI5LjM3NmQzNjkuNjY0ZDY4LjYwOGQzNjkuNjY0ZDE2LjM4NGQxNjEuNzkyZDE3Ny4xNTJkMTYxLjc5MmhSM2QyMTkuMTM2UjRkMjI5LjM3NlI1ZDE2LjM4NFI2ZDg2Mi4yMDhSN2QwUjhkODQ1LjgyNFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIzNlIxMmQxNi4zODRSMTNkMjE5LjEzNlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyM29SMWQ5OTYuMzUyUjJhZDIyMS4xODRkNjg1LjA1NmQyMjEuMTg0ZDg2Ny4zMjhkMjgwLjU3NmQ4NjcuMzI4ZDI4MC41NzZkMTAyNGQyMTQuMDE2ZDEwMjRkMTUxLjU1MmQxMDI0ZDEwOC4wMzJkOTc5Ljk2OGQ2NC41MTJkOTM1LjkzNmQ2NC41MTJkODc1LjUyZDY0LjUxMmQ3MzcuMjhkNDguMTI4ZDcyNy4wNGQ0OS4xNTJkNzI3LjA0ZDQ2LjA4ZDcyNi4wMTZkMzYuMzUyZDcyMC4zODRkMjYuNjI0ZDcxNC43NTJkMjMuNTUyZDcxMy43MjhkMjMuNTUyZDU3OS41ODRkNjQuNTEyZDU1Ny4wNTZkNjQuNTEyZDQzNS4xOTlkNjQuNTEyZDM3My43NmQxMDguMDMyZDMzMC4yNGQxNTEuNTUyZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmQyODAuNTc2ZDI4Ni43MmQyODAuNTc2ZDQ0My4zOTFkMjIxLjE4NGQ0NDMuMzkxZDIyMS4xODRkNjA4LjI1NmQxNzUuMTA0ZDY0Ny4xNjhkMTk4LjY1NmQ2NjcuNjQ3ZDE5OC42NTZkNjY2LjYyNGQyMjEuMTg0ZDY4NS4wNTZoUjNkMjk1LjkzNlI0ZDI4MC41NzZSNWQyMy41NTJSNmQ3MzcuMjhSN2QwUjhkNzEzLjcyOFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTEyM1IxMmQyMy41NTJSMTNkMjk1LjkzNlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkzaTNpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmhnOjIzNW9SMWQ5OTYuMzUyUjJhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyZDU2MC4xMjhkMjEyLjk5MWQ1NjAuMTI4ZDM3MC42ODhkNDAyLjQzMmQzNzAuNjg4ZDQwMi40MzJkMjEyLjk5MWQ1NjAuMTI4ZDIxMi45OTFkMzQwLjk5MmQyMTIuOTkxZDM0MC45OTJkMzcwLjY4OGQxODQuMzJkMzcwLjY4OGQxODQuMzJkMjEyLjk5MWQzNDAuOTkyZDIxMi45OTFoUjNkNjUzLjMxMlI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ4MTEuMDA4UjdkMFI4ZDc1OC43ODRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzVSMTJkNTIuMjI0UjEzZDY1My4zMTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTIyb1IxZDk5Ni4zNTJSMmFkNTUuMjk2ZDU4Ni43NTJkNTUuMjk2ZDQzMC4wOGQ2NTcuNDA4ZDQzMC4wOGQ2NTcuNDA4ZDU5MC44NDhkMzAwLjAzMmQ4NjcuMzI4ZDY1Ny40MDhkODY3LjMyOGQ2NTcuNDA4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDg2My4yMzJkNDEyLjY3MmQ1ODYuNzUyZDU1LjI5NmQ1ODYuNzUyaFIzZDcxNC43NTJSNGQ2NTcuNDA4UjVkNTUuMjk2UjZkNTkzLjkyUjdkMFI4ZDUzOC42MjRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMjJSMTJkNTUuMjk2UjEzZDcxNC43NTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIzNG9SMWQ5OTYuMzUyUjJhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyZDMzNy45MmQzNzAuNjg4ZDIwMS43MjhkMzcwLjY4OGQzMTQuMzY4ZDE4Mi4yNzFkNDE2Ljc2OGQxODIuMjcxZDUyOS40MDhkMzcwLjY4OGQzOTIuMTkyZDM3MC42ODhkMzYzLjUyZDMyNS42MzFkMzM3LjkyZDM3MC42ODhoUjNkNjUzLjMxMlI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ4NDEuNzI4UjdkMFI4ZDc4OS41MDRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzRSMTJkNTIuMjI0UjEzZDY1My4zMTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMjFvUjFkOTk2LjM1MlIyYWQ2NDYuMTQ0ZDEwODguNTEyZDY0Ni4xNDRkMTE0OS45NTJkNjAyLjYyNGQxMTkzLjQ3MmQ1NTkuMTA0ZDEyMzYuOTkyZDQ5Ny42NjRkMTIzNi45OTJkMTM3LjIxNmQxMjM2Ljk5MmQxMzcuMjE2ZDEwNzkuMjk2ZDQ4OS40NzJkMTA3OS4yOTZkNDg5LjQ3MmQxMDI0ZDE5Mi41MTJkMTAyNGQxMzEuMDcyZDEwMjRkODcuMDRkOTc5Ljk2OGQ0My4wMDhkOTM1LjkzNmQ0My4wMDhkODc1LjUyZDQzLjAwOGQ0MzIuMTI4ZDE5OS42OGQ0MzIuMTI4ZDE5OS42OGQ4NjcuMzI4ZDQ4OS40NzJkODY3LjMyOGQ0ODkuNDcyZDQzMi4xMjhkNjQ2LjE0NGQ0MzIuMTI4ZDY0Ni4xNDRkMTA4OC41MTJoUjNkNzAxLjQ0UjRkNjQ2LjE0NFI1ZDQzLjAwOFI2ZDU5MS44NzJSN2QtMjEyLjk5MlI4ZDU0OC44NjRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMjFSMTJkNDMuMDA4UjEzZDcwMS40NFIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MjMzb1IxZDk5Ni4zNTJSMmFkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDgwNS44ODhkMjA4Ljg5NmQ4MDUuODg4ZDIwOC44OTZkODY3LjMyOGQ2NTQuMzM2ZDg2Ny4zMjhkNjU0LjMzNmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDIwOC44OTZkNjY4LjY3MmQ0OTcuNjY0ZDY2OC42NzJkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDY2OC42NzJkMjcxLjM2ZDM2OS42NjRkMzIzLjU4NGQxNjEuNzkyZDQ4NC4zNTJkMTYxLjc5MmQ0MzIuMTI4ZDM2OS42NjRkMjcxLjM2ZDM2OS42NjRoUjNkNjUzLjMxMlI0ZDY1NC4zMzZSNWQ1Mi4yMjRSNmQ4NjIuMjA4UjdkMFI4ZDgwOS45ODRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzNSMTJkNTIuMjI0UjEzZDY1My4zMTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjFkOTk2LjM1MlIyYWQ0OTcuNjY0ZDQzMC4wOGQ2NTkuNDU2ZDQzMC4wOGQ2NTkuNDU2ZDQ4MS4yOGQ0NTQuNjU2ZDcyMS45MmQ1NjcuMjk2ZDg1OS4xMzZkNjU5LjQ1NmQ5NzIuOGQ2NTkuNDU2ZDEwMjRkNDk4LjY4OGQxMDI0ZDM1My4yOGQ4NDUuODI0ZDIwNy44NzJkMTAyNGQ0Ny4xMDRkMTAyNGQ0Ny4xMDRkOTcyLjhkMjUxLjkwNGQ3MjEuOTJkNDcuMTA0ZDQ4MS4yOGQ0Ny4xMDRkNDMwLjA4ZDIwNy44NzJkNDMwLjA4ZDM1My4yOGQ2MDIuMTEyZDQ5Ny42NjRkNDMwLjA4aFIzZDcwOC42MDhSNGQ2NTkuNDU2UjVkNDcuMTA0UjZkNTkzLjkyUjdkMFI4ZDU0Ni44MTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMjBSMTJkNDcuMTA0UjEzZDcwOC42MDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjMyb1IxZDk5Ni4zNTJSMmFkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDgwNS44ODhkMjA4Ljg5NmQ4MDUuODg4ZDIwOC44OTZkODY3LjMyOGQ2NTQuMzM2ZDg2Ny4zMjhkNjU0LjMzNmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDIwOC44OTZkNjY4LjY3MmQ0OTcuNjY0ZDY2OC42NzJkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDY2OC42NzJkNDExLjY0OGQxNjIuODE2ZDQ2My44NzJkMzcwLjY4OGQzMDMuMTA0ZDM3MC42ODhkMjUwLjg4ZDE2Mi44MTZkNDExLjY0OGQxNjIuODE2aFIzZDY1My4zMTJSNGQ2NTQuMzM2UjVkNTIuMjI0UjZkODYxLjE4NFI3ZDBSOGQ4MDguOTZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzJSMTJkNTIuMjI0UjEzZDY1My4zMTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTlvUjFkOTk2LjM1MlIyYWQ4NzcuNTY4ZDQzMC4wOGQxMDQzLjQ1NmQ0MzAuMDhkODIwLjIyNGQxMDI0ZDcwMS40NGQxMDI0ZDU0MC42NzJkNjY5LjY5NWQzODcuMDcyZDEwMjRkMjY5LjMxMmQxMDI0ZDM1Ljg0ZDQzMC4wOGQyMDEuNzI4ZDQzMC4wOGQzMjkuNzI4ZDczOC4zMDRkMzczLjc2ZDYzNS45MDRkMzg0ZDYxMi4zNTJkNDE2LjI1NmQ1MzkuNjQ3ZDQ0OC41MTJkNDY2Ljk0M2Q0NjMuODcyZDQzMC4wOGQ2MTUuNDI0ZDQzMC4wOGQ3NTguNzg0ZDc0Mi40ZDg3Ny41NjhkNDMwLjA4aFIzZDEwNzguMjcyUjRkMTA0My40NTZSNWQzNS44NFI2ZDU5My45MlI3ZDBSOGQ1NTguMDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMTlSMTJkMzUuODRSMTNkMTA3OC4yNzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJoZzoyMzFvUjFkOTk2LjM1MlIyYWQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQ0MTkuODRkMTAyNGQ0MTQuNzJkMTA0OC41NzZkMzk5Ljg3MmQxMDkxLjU4NGQzODUuMDI0ZDExMzQuNTkyZDM3OS45MDRkMTE1NS4wNzJkMjgwLjU3NmQxMTU1LjA3MmQyODUuNjk2ZDExMzAuNDk2ZDMwMC41NDRkMTA4Ny40ODhkMzE1LjM5MmQxMDQ0LjQ4ZDMyMC41MTJkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ2NTMuMzEyZDQzMC4wOGQ2NTMuMzEyZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGhSM2Q3MDkuNjMyUjRkNjU0LjMzNlI1ZDUyLjIyNFI2ZDU5My45MlI3ZC0xMzEuMDcyUjhkNTQxLjY5NlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIzMVIxMmQ1Mi4yMjRSMTNkNzA5LjYzMlIxNGFpMWkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmhnOjExOG9SMWQ5OTYuMzUyUjJhZDYyOS43NmQ0MzAuMDhkODA5Ljk4NGQ0MzAuMDhkNDgyLjMwNGQxMDI0ZDM0OC4xNmQxMDI0ZDIxLjUwNGQ0MzAuMDhkMjAxLjcyOGQ0MzAuMDhkNDE1Ljc0NGQ4MjQuMzE5ZDYyOS43NmQ0MzAuMDhoUjNkODA4Ljk2UjRkODA5Ljk4NFI1ZDIxLjUwNFI2ZDU5My45MlI3ZDBSOGQ1NzIuNDE2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTE4UjEyZDIxLjUwNFIxM2Q4MDguOTZSMTRhaTFpMmkyaTJpMmkyaTJpMmhnOjIzMG9SMWQ5OTYuMzUyUjJhZDk1NS4zOTJkNDMwLjA4ZDEwMTYuODMyZDQzMC4wOGQxMDU5Ljg0ZDQ3My42ZDExMDIuODQ4ZDUxNy4xMmQxMTAyLjg0OGQ1NzguNTZkMTEwMi44NDhkODA1Ljg4OGQ2NTcuNDA4ZDgwNS44ODhkNjU3LjQwOGQ4NjcuMzI4ZDExMDIuODQ4ZDg2Ny4zMjhkMTEwMi44NDhkMTAyNGQyMDIuNzUyZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDY0OC4xOTJkNTAwLjczNmQ2NDguMTkyZDUwMC43MzZkNTg2Ljc1MmQ1NC4yNzJkNTg2Ljc1MmQ1NC4yNzJkNDMwLjA4ZDk1NS4zOTJkNDMwLjA4ZDUwMC43MzZkODY3LjMyOGQ1MDAuNzM2ZDc4NS40MDhkMjEwLjk0NGQ3ODUuNDA4ZDIxMC45NDRkODY3LjMyOGQ1MDAuNzM2ZDg2Ny4zMjhkNjU3LjQwOGQ2NjguNjcyZDk0Ni4xNzZkNjY4LjY3MmQ5NDYuMTc2ZDU4Ni43NTJkNjU3LjQwOGQ1ODYuNzUyZDY1Ny40MDhkNjY4LjY3MmhSM2QxMjA2LjI3MlI0ZDExMDIuODQ4UjVkNTQuMjcyUjZkNTkzLjkyUjdkMFI4ZDUzOS42NDhSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMzBSMTJkNTQuMjcyUjEzZDEyMDYuMjcyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExN29SMWQ5OTYuMzUyUjJhZDQ5OS43MTJkNDMwLjA4ZDY1Ni4zODRkNDMwLjA4ZDY1Ni4zODRkODc1LjUyZDY1Ni4zODRkOTM1LjkzNmQ2MTIuODY0ZDk3OS45NjhkNTY5LjM0NGQxMDI0ZDUwNy45MDRkMTAyNGQyMDIuNzUyZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDQzMC4wOGQyMTAuOTQ0ZDQzMC4wOGQyMTAuOTQ0ZDg2Ny4zMjhkNDk5LjcxMmQ4NjcuMzI4ZDQ5OS43MTJkNDMwLjA4aFIzZDcxMS42OFI0ZDY1Ni4zODRSNWQ1NC4yNzJSNmQ1OTMuOTJSN2QwUjhkNTM5LjY0OFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTExN1IxMmQ1NC4yNzJSMTNkNzExLjY4UjE0YWkxaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaGc6MjI5b1IxZDk5Ni4zNTJSMmFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDI4Ny43NDRkMTY0Ljg2NGQzMzkuOTY4ZDE2NC44NjRkMzcxLjcxMmQxNjQuODY0ZDM5NC43NTJkMTg3LjkwNGQ0MTcuNzkyZDIxMC45NDNkNDE3Ljc5MmQyNDIuNjg4ZDQxNy43OTJkMjkyLjg2NGQ0MTcuNzkyZDMyNC42MDdkMzk0Ljc1MmQzNDcuNjQ4ZDM3MS43MTJkMzcwLjY4OGQzMzkuOTY4ZDM3MC42ODhkMjg3Ljc0NGQzNzAuNjg4ZDI1NmQzNzAuNjg4ZDIzMi40NDhkMzQ3LjY0OGQyMDguODk2ZDMyNC42MDdkMjA4Ljg5NmQyOTIuODY0ZDIwOC44OTZkMjQyLjY4OGQyMDguODk2ZDIxMC45NDNkMjMyLjQ0OGQxODcuOTA0ZDI1NmQxNjQuODY0ZDI4Ny43NDRkMTY0Ljg2NGQyODcuNzQ0ZDI0NC43MzZkMjg3Ljc0NGQzMDAuMDMyZDMzOS45NjhkMzAwLjAzMmQzMzkuOTY4ZDI0NC43MzZkMjg3Ljc0NGQyNDQuNzM2aFIzZDc0Mi40UjRkNjU1LjM2UjVkNTMuMjQ4UjZkODU5LjEzNlI3ZDBSOGQ4MDUuODg4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjI5UjEyZDUzLjI0OFIxM2Q3NDIuNFIxNGFpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxMTZvUjFkOTk2LjM1MlIyYWQ0MzEuMTA0ZDU4Ni43NTJkMjEwLjk0NGQ1ODYuNzUyZDIxMC45NDRkODY3LjMyOGQ0MzEuMTA0ZDg2Ny4zMjhkNDMxLjEwNGQxMDI0ZDIwMy43NzZkMTAyNGQxNDEuMzEyZDEwMjRkOTcuNzkyZDk3OS45NjhkNTQuMjcyZDkzNS45MzZkNTQuMjcyZDg3NS41MmQ1NC4yNzJkMjUzLjk1MmQyMTAuOTQ0ZDI1My45NTJkMjEwLjk0NGQ0MzAuMDhkNDMxLjEwNGQ0MzAuMDhkNDMxLjEwNGQ1ODYuNzUyaFIzZDQ2MS44MjRSNGQ0MzEuMTA0UjVkNTQuMjcyUjZkNzcwLjA0OFI3ZDBSOGQ3MTUuNzc2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTE2UjEyZDU0LjI3MlIxM2Q0NjEuODI0UjE0YWkxaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaGc6MjI4b1IxZDk5Ni4zNTJSMmFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDU1Mi45NmQyMTIuOTkxZDU1Mi45NmQzNzAuNjg4ZDM5NS4yNjRkMzcwLjY4OGQzOTUuMjY0ZDIxMi45OTFkNTUyLjk2ZDIxMi45OTFkMzMzLjgyNGQyMTIuOTkxZDMzMy44MjRkMzcwLjY4OGQxNzcuMTUyZDM3MC42ODhkMTc3LjE1MmQyMTIuOTkxZDMzMy44MjRkMjEyLjk5MWhSM2Q3NDIuNFI0ZDY1NS4zNlI1ZDUzLjI0OFI2ZDgxMS4wMDhSN2QwUjhkNzU3Ljc2UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjI4UjEyZDUzLjI0OFIxM2Q3NDIuNFIxNGFpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExNW9SMWQ5OTYuMzUyUjJhZDY1Mi4yODhkNTc4LjU2ZDY1Mi4yODhkNjA4LjI1NmQ0OTQuNTkyZDYwOC4yNTZkNDk0LjU5MmQ1ODYuNzUyZDIwNS44MjRkNTg2Ljc1MmQyMDUuODI0ZDY0OC4xOTJkNTAyLjc4NGQ2NDguMTkyZDU2NS4yNDhkNjQ4LjE5MmQ2MDguNzY4ZDY5MS43MTJkNjUyLjI4OGQ3MzUuMjMyZDY1Mi4yODhkNzk2LjY3MmQ2NTIuMjg4ZDg3NS41MmQ2NTIuMjg4ZDkzNS45MzZkNjA4Ljc2OGQ5NzkuOTY4ZDU2NS4yNDhkMTAyNGQ1MDIuNzg0ZDEwMjRkMTk3LjYzMmQxMDI0ZDEzNy4yMTZkMTAyNGQ5My4xODRkOTc5Ljk2OGQ0OS4xNTJkOTM1LjkzNmQ0OS4xNTJkODc1LjUyZDQ5LjE1MmQ4NDUuODI0ZDIwNS44MjRkODQ1LjgyNGQyMDUuODI0ZDg2Ny4zMjhkNDk0LjU5MmQ4NjcuMzI4ZDQ5NC41OTJkODA1Ljg4OGQxOTcuNjMyZDgwNS44ODhkMTM3LjIxNmQ4MDUuODg4ZDkzLjE4NGQ3NjEuODU2ZDQ5LjE1MmQ3MTcuODI0ZDQ5LjE1MmQ2NTcuNDA4ZDQ5LjE1MmQ1NzguNTZkNDkuMTUyZDUxOC4xNDRkOTMuMTg0ZDQ3NC4xMTFkMTM3LjIxNmQ0MzAuMDhkMTk3LjYzMmQ0MzAuMDhkNTAyLjc4NGQ0MzAuMDhkNTY1LjI0OGQ0MzAuMDhkNjA4Ljc2OGQ0NzQuMTExZDY1Mi4yODhkNTE4LjE0NGQ2NTIuMjg4ZDU3OC41NmhSM2Q3MDIuNDY0UjRkNjUyLjI4OFI1ZDQ5LjE1MlI2ZDU5My45MlI3ZDBSOGQ1NDQuNzY4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMTE1UjEyZDQ5LjE1MlIxM2Q3MDIuNDY0UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNoZzoyMjdvUjFkOTk2LjM1MlIyYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhkNDI0Ljk2ZDI0OS44NTZkNDY0Ljg5NmQyNDkuODU2ZDUyMy4yNjRkMjExLjk2N2Q1MjMuMjY0ZDM0MC45OTFkNDU5Ljc3NmQzNjcuNjE2ZDQyMS44ODhkMzY3LjYxNmQzODRkMzY3LjYxNmQzMjUuMTJkMzM1Ljg3MWQyNjYuMjRkMzA0LjEyN2QyMzYuNTQ0ZDMwNC4xMjdkMjI1LjI4ZDMwNC4xMjdkMTgyLjI3MmQzMDQuMTI3ZDEzOS4yNjRkMzQwLjk5MWQxMzkuMjY0ZDIxNC4wMTVkMjA4Ljg5NmQxODYuMzY3ZDIzNi41NDRkMTg2LjM2N2QyNzQuNDMyZDE4Ni4zNjdkMzMzLjgyNGQyMTYuMDYzZDM5My4yMTZkMjQ1Ljc2ZDQyNC45NmQyNDkuODU2aFIzZDc0Mi40UjRkNjU1LjM2UjVkNTMuMjQ4UjZkODM3LjYzMlI3ZDBSOGQ3ODQuMzg0UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjI3UjEyZDUzLjI0OFIxM2Q3NDIuNFIxNGFpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkzaTJpM2kzaTNpMmkzaTJpM2kzaTNoZzoxMTRvUjFkOTk2LjM1MlIyYWQyMDIuNzUyZDQzMC4wOGQ1MzAuNDMyZDQzMC4wOGQ1MzAuNDMyZDU4Ni43NTJkMjA5LjkyZDU4Ni43NTJkMjA5LjkyZDEwMjRkNTMuMjQ4ZDEwMjRkNTMuMjQ4ZDU3OC41NmQ1My4yNDhkNTE4LjE0NGQ5Ny4yOGQ0NzQuMTExZDE0MS4zMTJkNDMwLjA4ZDIwMi43NTJkNDMwLjA4aFIzZDUzOC42MjRSNGQ1MzAuNDMyUjVkNTMuMjQ4UjZkNTkzLjkyUjdkMFI4ZDU0MC42NzJSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMTRSMTJkNTMuMjQ4UjEzZDUzOC42MjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaGc6MjI2b1IxZDk5Ni4zNTJSMmFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDM1MS4yMzJkMzcwLjY4OGQyMTUuMDRkMzcwLjY4OGQzMjcuNjhkMTgyLjI3MWQ0MzAuMDhkMTgyLjI3MWQ1NDIuNzJkMzcwLjY4OGQ0MDUuNTA0ZDM3MC42ODhkMzc2LjgzMmQzMjUuNjMxZDM1MS4yMzJkMzcwLjY4OGhSM2Q3NDIuNFI0ZDY1NS4zNlI1ZDUzLjI0OFI2ZDg0MS43MjhSN2QwUjhkNzg4LjQ4UjlkMjA3Ljg3MlIxMGQyMzUuNTJSMTFpMjI2UjEyZDUzLjI0OFIxM2Q3NDIuNFIxNGFpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaGc6MTEzb1IxZDk5Ni4zNTJSMmFkMjAuNDhkNTc4LjU2ZDIwLjQ4ZDUxOC4xNDRkNjRkNDc0LjExMWQxMDcuNTJkNDMwLjA4ZDE2OC45NmQ0MzAuMDhkNjIzLjYxNmQ0MzAuMDhkNjIzLjYxNmQxMjU5LjUyZDQ2Ni45NDRkMTI1OS41MmQ0NjYuOTQ0ZDEwMjRkMTY4Ljk2ZDEwMjRkMTA3LjUyZDEwMjRkNjRkOTc5Ljk2OGQyMC40OGQ5MzUuOTM2ZDIwLjQ4ZDg3NS41MmQyMC40OGQ1NzguNTZkMTc4LjE3NmQ1ODYuNzUyZDE3OC4xNzZkODY3LjMyOGQ0NjYuOTQ0ZDg2Ny4zMjhkNDY2Ljk0NGQ1ODYuNzUyZDE3OC4xNzZkNTg2Ljc1MmhSM2Q2NzkuOTM2UjRkNjIzLjYxNlI1ZDIwLjQ4UjZkNTkzLjkyUjdkLTIzNS41MlI4ZDU3My40NFI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTExM1IxMmQyMC40OFIxM2Q2NzkuOTM2UjE0YWkxaTNpM2kyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjI1b1IxZDk5Ni4zNTJSMmFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDI4NC42NzJkMzcwLjY4OGQzMzYuODk2ZDE2Mi44MTZkNDk3LjY2NGQxNjIuODE2ZDQ0NS40NGQzNzAuNjg4ZDI4NC42NzJkMzcwLjY4OGhSM2Q3NDIuNFI0ZDY1NS4zNlI1ZDUzLjI0OFI2ZDg2MS4xODRSN2QwUjhkODA3LjkzNlI5ZDIwNy44NzJSMTBkMjM1LjUyUjExaTIyNVIxMmQ1My4yNDhSMTNkNzQyLjRSMTRhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExMm9SMWQ5OTYuMzUyUjJhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQ4NzUuNTJkNjU3LjQwOGQ5MzUuOTM2ZDYxMy44ODhkOTc5Ljk2OGQ1NzAuMzY4ZDEwMjRkNTA4LjkyOGQxMDI0ZDIxMS45NjhkMTAyNGQyMTEuOTY4ZDEyNTkuNTJkNTUuMjk2ZDEyNTkuNTJkNTUuMjk2ZDQzMC4wOGQ1MDguOTI4ZDQzMC4wOGQyMTEuOTY4ZDU4Ni43NTJkMjExLjk2OGQ4NjcuMzI4ZDUwMC43MzZkODY3LjMyOGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyaFIzZDY3OS45MzZSNGQ2NTcuNDA4UjVkNTUuMjk2UjZkNTkzLjkyUjdkLTIzNS41MlI4ZDUzOC42MjRSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkxMTJSMTJkNTUuMjk2UjEzZDY3OS45MzZSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMjRvUjFkOTk2LjM1MlIyYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhkNDI0Ljk2ZDE2Mi44MTZkNDc3LjE4NGQzNzAuNjg4ZDMxNi40MTZkMzcwLjY4OGQyNjQuMTkyZDE2Mi44MTZkNDI0Ljk2ZDE2Mi44MTZoUjNkNzQyLjRSNGQ2NTUuMzZSNWQ1My4yNDhSNmQ4NjEuMTg0UjdkMFI4ZDgwNy45MzZSOWQyMDcuODcyUjEwZDIzNS41MlIxMWkyMjRSMTJkNTMuMjQ4UjEzZDc0Mi40UjE0YWkxaTNpM2kyaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZ2h5ODpmb250TmFtZXkxNDpPcmJpdHJvbi1CbGFja2c"}];
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
awe6.core.drivers.AAudioManager._PACKAGE_ID = "assets.audio";
awe6.core.drivers.AFactory._CONFIG_ASSETS_NODE = "settings.assets.url";
awe6.core.drivers.AKernel._POWERED_BY = "Powered by awe6";
awe6.core.drivers.AKernel._POWERED_BY_URL = "http://awe6.org";
awe6.core.drivers.AKernel._RELEASE_CAUTION = "PUBLIC RELEASE NOT ADVISED";
awe6.core.drivers.AKernel._RESET_SESSIONS = "Reset All Saved Information";
awe6.core.drivers.AKernel._EYE_CANDY_ENABLE = "Enable Eye Candy";
awe6.core.drivers.AKernel._EYE_CANDY_DISABLE = "Disable Eye Candy";
awe6.core.drivers.AKernel._FULL_SCREEN_ENABLE = "Enter Full Screen Mode";
awe6.core.drivers.AKernel._FULL_SCREEN_DISABLE = "Exit Full Screen Mode";
awe6.core.drivers.ASession.DEBUG_ID = "DEBUG_AWE6";
awe6.core.drivers.ASession._VERSION_ID = "_____VERSION";
demo.scenes.Game.TIME_LIMIT = 30;
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:jeash";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.NME_MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.nmeAcceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.nmeMouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.nmeTouchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.EXTENSION_MP3 = "mp3";
flash.media.Sound.EXTENSION_OGG = "ogg";
flash.media.Sound.EXTENSION_WAV = "wav";
flash.media.Sound.EXTENSION_AAC = "aac";
flash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
flash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
flash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
flash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.system.System.useCodePage = false;
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.nmeRegisteredFonts = new Array();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldAutoSize.CENTER = "CENTER";
flash.text.TextFieldAutoSize.LEFT = "LEFT";
flash.text.TextFieldAutoSize.NONE = "NONE";
flash.text.TextFieldAutoSize.RIGHT = "RIGHT";
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
nme.AssetData.className = new haxe.ds.StringMap();
nme.AssetData.library = new haxe.ds.StringMap();
nme.AssetData.path = new haxe.ds.StringMap();
nme.AssetData.type = new haxe.ds.StringMap();
nme.AssetData.initialized = false;
openfl.Assets.cachedBitmapData = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();
