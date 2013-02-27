(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.completed = null;
ApplicationMain.preloader = null;
ApplicationMain.total = null;
ApplicationMain.loaders = null;
ApplicationMain.urlLoaders = null;
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new Hash();
	ApplicationMain.urlLoaders = new Hash();
	ApplicationMain.total = 0;
	ApplicationMain.preloader = new NMEPreloader();
	nme.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/ButtonOver.png",loader);
	ApplicationMain.total++;
	var loader1 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/ButtonUp.png",loader1);
	ApplicationMain.total++;
	var loader2 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/BackOver.png",loader2);
	ApplicationMain.total++;
	var loader3 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/BackUp.png",loader3);
	ApplicationMain.total++;
	var loader4 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/MuteOver.png",loader4);
	ApplicationMain.total++;
	var loader5 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/MuteUp.png",loader5);
	ApplicationMain.total++;
	var loader6 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/PauseOver.png",loader6);
	ApplicationMain.total++;
	var loader7 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/PauseUp.png",loader7);
	ApplicationMain.total++;
	var loader8 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnmuteOver.png",loader8);
	ApplicationMain.total++;
	var loader9 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnmuteUp.png",loader9);
	ApplicationMain.total++;
	var loader10 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnpauseOver.png",loader10);
	ApplicationMain.total++;
	var loader11 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnpauseUp.png",loader11);
	ApplicationMain.total++;
	var loader12 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/OverlayBackground.png",loader12);
	ApplicationMain.total++;
	var loader13 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/scenes/Background.png",loader13);
	ApplicationMain.total++;
	var loader14 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/Sphere.png",loader14);
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader15 = ApplicationMain.loaders.get(path);
			loader15.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader15.load(new browser.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new browser.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(browser.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.getAsset = function(inName) {
	if(inName == "assets/audio/ButtonDown.mp3") return nme.installer.Assets.getSound("assets/audio/ButtonDown.mp3");
	if(inName == "assets/audio/ButtonDown.ogg") return nme.installer.Assets.getSound("assets/audio/ButtonDown.ogg");
	if(inName == "assets/audio/ButtonOver.mp3") return nme.installer.Assets.getSound("assets/audio/ButtonOver.mp3");
	if(inName == "assets/audio/ButtonOver.ogg") return nme.installer.Assets.getSound("assets/audio/ButtonOver.ogg");
	if(inName == "assets/audio/MusicGame.mp3") return nme.installer.Assets.getSound("assets/audio/MusicGame.mp3");
	if(inName == "assets/audio/MusicGame.ogg") return nme.installer.Assets.getSound("assets/audio/MusicGame.ogg");
	if(inName == "assets/audio/MusicMenu.mp3") return nme.installer.Assets.getSound("assets/audio/MusicMenu.mp3");
	if(inName == "assets/audio/MusicMenu.ogg") return nme.installer.Assets.getSound("assets/audio/MusicMenu.ogg");
	if(inName == "assets/audio/Sfx1.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx1.mp3");
	if(inName == "assets/audio/Sfx1.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx1.ogg");
	if(inName == "assets/audio/Sfx2.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx2.mp3");
	if(inName == "assets/audio/Sfx2.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx2.ogg");
	if(inName == "assets/audio/Sfx3.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx3.mp3");
	if(inName == "assets/audio/Sfx3.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx3.ogg");
	if(inName == "assets/audio/Sfx4.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx4.mp3");
	if(inName == "assets/audio/Sfx4.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx4.ogg");
	if(inName == "assets/ButtonOver.png") return nme.installer.Assets.getBitmapData("assets/ButtonOver.png");
	if(inName == "assets/ButtonUp.png") return nme.installer.Assets.getBitmapData("assets/ButtonUp.png");
	if(inName == "assets/fonts/orbitron.ttf") return nme.installer.Assets.getFont("assets/fonts/orbitron.ttf");
	if(inName == "assets/overlay/buttons/BackOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackOver.png");
	if(inName == "assets/overlay/buttons/BackUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackUp.png");
	if(inName == "assets/overlay/buttons/MuteOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/MuteOver.png");
	if(inName == "assets/overlay/buttons/MuteUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/MuteUp.png");
	if(inName == "assets/overlay/buttons/PauseOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/PauseOver.png");
	if(inName == "assets/overlay/buttons/PauseUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/PauseUp.png");
	if(inName == "assets/overlay/buttons/UnmuteOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnmuteOver.png");
	if(inName == "assets/overlay/buttons/UnmuteUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnmuteUp.png");
	if(inName == "assets/overlay/buttons/UnpauseOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnpauseOver.png");
	if(inName == "assets/overlay/buttons/UnpauseUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnpauseUp.png");
	if(inName == "assets/overlay/OverlayBackground.png") return nme.installer.Assets.getBitmapData("assets/overlay/OverlayBackground.png");
	if(inName == "assets/scenes/Background.png") return nme.installer.Assets.getBitmapData("assets/scenes/Background.png");
	if(inName == "assets/Sphere.png") return nme.installer.Assets.getBitmapData("assets/Sphere.png");
	return null;
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(browser.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	nme.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = new Main();
		if(js.Boot.__instanceof(mainDisplayObj,browser.display.DisplayObject)) nme.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var browser = {}
browser.text = {}
browser.text.Font = function() {
	this.nmeMetrics = [];
	this.nmeFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(browser.text.Font.nmeFontData == null) {
		browser.text.Font.nmeFontData = [];
		browser.text.Font.nmeFontData["Bitstream_Vera_Sans"] = browser.text.Font.DEFAULT_FONT_DATA;
	}
	if(className == "browser.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["browser.text.Font"] = browser.text.Font;
browser.text.Font.__name__ = ["browser","text","Font"];
browser.text.Font.nmeFontData = null;
browser.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	var sans = new browser.text.Font();
	sans.set_fontName("Bitstream_Vera_Sans");
	sans.fontStyle = browser.text.FontStyle.REGULAR;
	sans.fontType = browser.text.FontType.DEVICE;
	return [sans];
}
browser.text.Font.nmeOfResource = function(name) {
	var data = haxe.Resource.getString(name);
	if(data == null) haxe.Log.trace("Resource data for string '" + name + "' not found.",{ fileName : "Font.hx", lineNumber : 107, className : "browser.text.Font", methodName : "nmeOfResource"}); else browser.text.Font.nmeFontData[name] = data;
}
browser.text.Font.registerFont = function(font) {
}
browser.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(browser.text.Font.nmeFontData[this.fontName] == null) try {
			browser.text.Font.nmeOfResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(browser.text.Font.nmeFontData[this.fontName] != null) try {
			this.nmeGlyphData = haxe.Unserializer.run(browser.text.Font.nmeFontData[this.fontName]);
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
	,nmeMetrics: null
	,nmeGlyphData: null
	,nmeFontScale: null
	,fontType: null
	,fontStyle: null
	,fontName: null
	,__class__: browser.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
var NME_assets_fonts_orbitron_ttf = function() {
	browser.text.Font.call(this);
};
$hxClasses["NME_assets_fonts_orbitron_ttf"] = NME_assets_fonts_orbitron_ttf;
NME_assets_fonts_orbitron_ttf.__name__ = ["NME_assets_fonts_orbitron_ttf"];
NME_assets_fonts_orbitron_ttf.__super__ = browser.text.Font;
NME_assets_fonts_orbitron_ttf.prototype = $extend(browser.text.Font.prototype,{
	__class__: NME_assets_fonts_orbitron_ttf
});
var DateTools = function() { }
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	return (function($this) {
		var $r;
		switch(e) {
		case "%":
			$r = "%";
			break;
		case "C":
			$r = StringTools.lpad(Std.string(d.getFullYear() / 100 | 0),"0",2);
			break;
		case "d":
			$r = StringTools.lpad(Std.string(d.getDate()),"0",2);
			break;
		case "D":
			$r = DateTools.__format(d,"%m/%d/%y");
			break;
		case "e":
			$r = Std.string(d.getDate());
			break;
		case "H":case "k":
			$r = StringTools.lpad(Std.string(d.getHours()),e == "H"?"0":" ",2);
			break;
		case "I":case "l":
			$r = (function($this) {
				var $r;
				var hour = d.getHours() % 12;
				$r = StringTools.lpad(Std.string(hour == 0?12:hour),e == "I"?"0":" ",2);
				return $r;
			}($this));
			break;
		case "m":
			$r = StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
			break;
		case "M":
			$r = StringTools.lpad(Std.string(d.getMinutes()),"0",2);
			break;
		case "n":
			$r = "\n";
			break;
		case "p":
			$r = d.getHours() > 11?"PM":"AM";
			break;
		case "r":
			$r = DateTools.__format(d,"%I:%M:%S %p");
			break;
		case "R":
			$r = DateTools.__format(d,"%H:%M");
			break;
		case "s":
			$r = Std.string(d.getTime() / 1000 | 0);
			break;
		case "S":
			$r = StringTools.lpad(Std.string(d.getSeconds()),"0",2);
			break;
		case "t":
			$r = "\t";
			break;
		case "T":
			$r = DateTools.__format(d,"%H:%M:%S");
			break;
		case "u":
			$r = (function($this) {
				var $r;
				var t = d.getDay();
				$r = t == 0?"7":Std.string(t);
				return $r;
			}($this));
			break;
		case "w":
			$r = Std.string(d.getDay());
			break;
		case "y":
			$r = StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
			break;
		case "Y":
			$r = Std.string(d.getFullYear());
			break;
		default:
			$r = (function($this) {
				var $r;
				throw "Date.format %" + e + "- not implemented yet.";
				return $r;
			}($this));
		}
		return $r;
	}(this));
}
DateTools.__format = function(d,f) {
	var r = new StringBuf();
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) break;
		r.b += HxOverrides.substr(f,p,np - p);
		r.b += Std.string(DateTools.__format_get(d,HxOverrides.substr(f,np + 1,1)));
		p = np + 2;
	}
	r.b += HxOverrides.substr(f,p,f.length - p);
	return r.b;
}
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
}
DateTools.delta = function(d,t) {
	return (function($this) {
		var $r;
		var d1 = new Date();
		d1.setTime(d.getTime() + t);
		$r = d1;
		return $r;
	}(this));
}
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	return isB?29:28;
}
DateTools.seconds = function(n) {
	return n * 1000.0;
}
DateTools.minutes = function(n) {
	return n * 60.0 * 1000.0;
}
DateTools.hours = function(n) {
	return n * 60.0 * 60.0 * 1000.0;
}
DateTools.days = function(n) {
	return n * 24.0 * 60.0 * 60.0 * 1000.0;
}
DateTools.parse = function(t) {
	var s = t / 1000;
	var m = s / 60;
	var h = m / 60;
	return { ms : t % 1000, seconds : s % 60 | 0, minutes : m % 60 | 0, hours : h % 24 | 0, days : h / 24 | 0};
}
DateTools.make = function(o) {
	return o.ms + 1000.0 * (o.seconds + 60.0 * (o.minutes + 60.0 * (o.hours + 24.0 * o.days)));
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	customReplace: function(s,f) {
		var buf = new StringBuf();
		while(true) {
			if(!this.match(s)) break;
			buf.b += Std.string(this.matchedLeft());
			buf.b += Std.string(f(this));
			s = this.matchedRight();
		}
		buf.b += Std.string(s);
		return buf.b;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
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
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
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
	,r: null
	,__class__: EReg
}
var Hash = function() {
	this.h = { };
};
$hxClasses["Hash"] = Hash;
Hash.__name__ = ["Hash"];
Hash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
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
	,h: null
	,__class__: Hash
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
var IntHash = function() {
	this.h = { };
};
$hxClasses["IntHash"] = IntHash;
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,keys: function() {
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
	,h: null
	,__class__: IntHash
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIter"] = IntIter;
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
	,max: null
	,min: null
	,__class__: IntIter
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b += Std.string(sep);
			s.b += Std.string(l[0]);
			l = l[1];
		}
		return s.b;
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b += Std.string("{");
		while(l != null) {
			if(first) first = false; else s.b += Std.string(", ");
			s.b += Std.string(Std.string(l[0]));
			l = l[1];
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
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
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
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
	,last: function() {
		return this.q == null?null:this.q[0];
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
	,length: null
	,q: null
	,h: null
	,__class__: List
}
var Main = function() {
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	var l_isDebug = false;
	var l_factory = new demo.Factory(nme.Lib.get_current(),l_isDebug,haxe.Resource.getString("config"));
}
Main.prototype = {
	__class__: Main
}
browser.events = {}
browser.events.IEventDispatcher = function() { }
$hxClasses["browser.events.IEventDispatcher"] = browser.events.IEventDispatcher;
browser.events.IEventDispatcher.__name__ = ["browser","events","IEventDispatcher"];
browser.events.IEventDispatcher.prototype = {
	willTrigger: null
	,removeEventListener: null
	,hasEventListener: null
	,dispatchEvent: null
	,addEventListener: null
	,__class__: browser.events.IEventDispatcher
}
browser.events.EventDispatcher = function(target) {
	if(target != null) this.nmeTarget = target; else this.nmeTarget = this;
	this.nmeEventMap = [];
};
$hxClasses["browser.events.EventDispatcher"] = browser.events.EventDispatcher;
browser.events.EventDispatcher.__name__ = ["browser","events","EventDispatcher"];
browser.events.EventDispatcher.__interfaces__ = [browser.events.IEventDispatcher];
browser.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
browser.events.EventDispatcher.prototype = {
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
		var capture = event.eventPhase == browser.events.EventPhase.CAPTURING_PHASE;
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
		list.push(new browser.events.Listener(inListener,capture,priority));
		list.sort(browser.events.EventDispatcher.compareListeners);
	}
	,nmeEventMap: null
	,nmeTarget: null
	,__class__: browser.events.EventDispatcher
}
browser.display = {}
browser.display.IBitmapDrawable = function() { }
$hxClasses["browser.display.IBitmapDrawable"] = browser.display.IBitmapDrawable;
browser.display.IBitmapDrawable.__name__ = ["browser","display","IBitmapDrawable"];
browser.display.IBitmapDrawable.prototype = {
	drawToSurface: null
	,__class__: browser.display.IBitmapDrawable
}
browser.display.DisplayObject = function() {
	browser.events.EventDispatcher.call(this,null);
	this._nmeId = browser.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new browser.geom.Transform(this));
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
	this.nmeBoundsRect = new browser.geom.Rectangle();
	this.nmeScrollRect = null;
	this.nmeMask = null;
	this.nmeMaskingObj = null;
	this.set_nmeCombinedVisible(this.get_visible());
};
$hxClasses["browser.display.DisplayObject"] = browser.display.DisplayObject;
browser.display.DisplayObject.__name__ = ["browser","display","DisplayObject"];
browser.display.DisplayObject.__interfaces__ = [browser.display.IBitmapDrawable];
browser.display.DisplayObject.__super__ = browser.events.EventDispatcher;
browser.display.DisplayObject.prototype = $extend(browser.events.EventDispatcher.prototype,{
	set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.nmeBoundsRect.width;
		if(this.nmeScaleX * w != inValue) {
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
		if(gfx != null) return browser.Lib.nmeGetStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.nmeScrollRect = inValue;
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
			var evt = new browser.events.Event(browser.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new browser.events.Event(browser.events.Event.REMOVED,true,false);
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
		return this.globalToLocal(new browser.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new browser.geom.Point(this.get_stage().get_mouseX(),0)).x;
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
		if(gfx != null && gfx.nmeSurface != null) browser.Lib.nmeSetSurfaceVisible(gfx.nmeSurface,inValue);
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
				var rad = this.nmeRotation * browser.geom.Transform.DEG_TO_RAD;
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
	,nmeUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && lastMoveGfx != null && gfx != lastMoveGfx) browser.Lib.nmeSetSurfaceZIndexAfter(gfx.nmeSurface,lastMoveGfx.nmeSurface);
		if(gfx == null) gfx = lastMoveGfx;
		return gfx;
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
			browser.Lib.nmeDrawToSurface(gfx.nmeSurface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				browser.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			browser.Lib.nmeSetSurfaceOpacity(gfx.nmeSurface,fullAlpha);
		}
	}
	,nmeRemoveFromStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && browser.Lib.nmeIsOnStage(gfx.nmeSurface)) {
			browser.Lib.nmeRemoveSurface(gfx.nmeSurface);
			var evt = new browser.events.Event(browser.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,nmeMatrixOverridden: function() {
		this._nmeRenderFlags |= 16;
		this._nmeRenderFlags |= 4;
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeIsOnStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && browser.Lib.nmeIsOnStage(gfx.nmeSurface)) return true;
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
			var extX = gfx.nmeExtent.x;
			var extY = gfx.nmeExtent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
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
			event.nmeSetPhase(browser.events.EventPhase.CAPTURING_PHASE);
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
		event.nmeSetPhase(browser.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return;
		if(event.bubbles) {
			event.nmeSetPhase(browser.events.EventPhase.BUBBLING_PHASE);
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
		return browser.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
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
			browser.Lib.nmeSetSurfaceId(gfx.nmeSurface,this._nmeId);
			if(beforeSibling != null && beforeSibling.nmeGetGraphics() != null) browser.Lib.nmeAppendSurface(gfx.nmeSurface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.nmeChildren;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) browser.Lib.nmeAppendSurface(gfx.nmeSurface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,browser.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , browser.display.DisplayObjectContainer);
						if(container.nmeChildren.length > 0) nextSibling = container.nmeChildren[container.nmeChildren.length - 1]; else break;
					}
					if(nextSibling.nmeGetGraphics() != gfx) browser.Lib.nmeAppendSurface(gfx.nmeSurface,null,nextSibling.get__topmostSurface()); else browser.Lib.nmeAppendSurface(gfx.nmeSurface);
				}
			}
			browser.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") browser.Lib.nmeAppendSurface(gfx.nmeSurface);
		if(this.nmeIsOnStage()) {
			var evt = new browser.events.Event(browser.events.Event.ADDED_TO_STAGE,false,false);
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
		if(!boundingBox) return this.nmeGetObjectUnderPoint(new browser.geom.Point(x,y)) != null; else {
			var gfx = this.nmeGetGraphics();
			if(gfx != null) {
				var extX = gfx.nmeExtent.x;
				var extY = gfx.nmeExtent.y;
				var local = this.globalToLocal(new browser.geom.Point(x,y));
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
	,_topmostSurface: null
	,_nmeRenderFlags: null
	,_nmeId: null
	,_matrixInvalid: null
	,_matrixChainInvalid: null
	,_fullScaleY: null
	,_fullScaleX: null
	,_boundsInvalid: null
	,_bottommostSurface: null
	,nmeY: null
	,nmeX: null
	,nmeWidth: null
	,nmeVisible: null
	,nmeScrollRect: null
	,nmeScaleY: null
	,nmeScaleX: null
	,nmeRotation: null
	,nmeMaskingObj: null
	,nmeMask: null
	,nmeHeight: null
	,nmeFilters: null
	,nmeBoundsRect: null
	,y: null
	,x: null
	,width: null
	,visible: null
	,transform: null
	,stage: null
	,scrollRect: null
	,scaleY: null
	,scaleX: null
	,scale9Grid: null
	,rotation: null
	,parent: null
	,nmeCombinedVisible: null
	,name: null
	,mouseY: null
	,mouseX: null
	,mask: null
	,height: null
	,filters: null
	,cacheAsBitmap: null
	,blendMode: null
	,alpha: null
	,accessibilityProperties: null
	,__class__: browser.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_nmeCombinedVisible:"set_nmeCombinedVisible",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
browser.display.InteractiveObject = function() {
	browser.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["browser.display.InteractiveObject"] = browser.display.InteractiveObject;
browser.display.InteractiveObject.__name__ = ["browser","display","InteractiveObject"];
browser.display.InteractiveObject.__super__ = browser.display.DisplayObject;
browser.display.InteractiveObject.prototype = $extend(browser.display.DisplayObject.prototype,{
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
		if(!this.mouseEnabled) return null; else return browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeTabIndex: null
	,nmeDoubleClickEnabled: null
	,tabIndex: null
	,tabEnabled: null
	,mouseEnabled: null
	,focusRect: null
	,doubleClickEnabled: null
	,__class__: browser.display.InteractiveObject
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
browser.display.DisplayObjectContainer = function() {
	this.nmeChildren = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	browser.display.InteractiveObject.call(this);
	this.nmeCombinedAlpha = this.alpha;
};
$hxClasses["browser.display.DisplayObjectContainer"] = browser.display.DisplayObjectContainer;
browser.display.DisplayObjectContainer.__name__ = ["browser","display","DisplayObjectContainer"];
browser.display.DisplayObjectContainer.__super__ = browser.display.InteractiveObject;
browser.display.DisplayObjectContainer.prototype = $extend(browser.display.InteractiveObject.prototype,{
	set_visible: function(inVal) {
		this.set_nmeCombinedVisible(inVal);
		return browser.display.InteractiveObject.prototype.set_visible.call(this,inVal);
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
		return browser.display.InteractiveObject.prototype.set_nmeCombinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		browser.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.InteractiveObject.prototype.validateBounds.call(this);
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
	,nmeUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = browser.display.InteractiveObject.prototype.nmeUnifyChildrenWithDOM.call(this,lastMoveGfx);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			gfx = child.nmeUnifyChildrenWithDOM(gfx);
		}
		return gfx;
	}
	,nmeSwapSurface: function(c1,c2) {
		if(this.nmeChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.nmeChildren.length;
		if(this.nmeChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.nmeChildren.length;
		var gfx1 = this.nmeChildren[c1].nmeGetGraphics();
		var gfx2 = this.nmeChildren[c2].nmeGetGraphics();
		if(gfx1 != null && gfx2 != null) browser.Lib.nmeSwapSurface(gfx1.nmeSurface,gfx2.nmeSurface);
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeVisible) return;
		if(clipRect == null && this.nmeScrollRect != null) clipRect = this.nmeScrollRect;
		browser.display.InteractiveObject.prototype.nmeRender.call(this,inMask,clipRect);
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
		browser.display.InteractiveObject.prototype.nmeRemoveFromStage.call(this);
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
		browser.display.InteractiveObject.prototype.nmeInvalidateMatrix.call(this,local);
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
		return browser.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
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
		browser.display.InteractiveObject.prototype.nmeAddToStage.call(this,newParent,beforeSibling);
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
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child) return true;
		}
		return false;
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
	,nmeAddedChildren: null
	,tabChildren: null
	,numChildren: null
	,nmeCombinedAlpha: null
	,nmeChildren: null
	,mouseChildren: null
	,__class__: browser.display.DisplayObjectContainer
	,__properties__: $extend(browser.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
browser.display.Sprite = function() {
	browser.display.DisplayObjectContainer.call(this);
	this.nmeGraphics = new browser.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["browser.display.Sprite"] = browser.display.Sprite;
browser.display.Sprite.__name__ = ["browser","display","Sprite"];
browser.display.Sprite.__super__ = browser.display.DisplayObjectContainer;
browser.display.Sprite.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.nmeCursorCallbackOver != null) this.removeEventListener(browser.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
		if(this.nmeCursorCallbackOut != null) this.removeEventListener(browser.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		if(!cursor) browser.Lib.nmeSetCursor(browser._Lib.CursorType.Default); else {
			this.nmeCursorCallbackOver = function(_) {
				browser.Lib.nmeSetCursor(browser._Lib.CursorType.Pointer);
			};
			this.nmeCursorCallbackOut = function(_) {
				browser.Lib.nmeSetCursor(browser._Lib.CursorType.Default);
			};
			this.addEventListener(browser.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
			this.addEventListener(browser.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
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
				var result = this.parent.nmeChildren[l - i].nmeGetObjectUnderPoint(new browser.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
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
	,nmeGraphics: null
	,nmeDropTarget: null
	,nmeCursorCallbackOver: null
	,nmeCursorCallbackOut: null
	,useHandCursor: null
	,graphics: null
	,dropTarget: null
	,buttonMode: null
	,__class__: browser.display.Sprite
	,__properties__: $extend(browser.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var NMEPreloader = function() {
	browser.display.Sprite.call(this);
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
	this.outline = new browser.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new browser.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = browser.display.Sprite;
NMEPreloader.prototype = $extend(browser.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new browser.events.Event(browser.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 600;
		if(width > 0) return width; else return nme.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 400;
		if(height > 0) return height; else return nme.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 16777215;
	}
	,progress: null
	,outline: null
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
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
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
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && (v.__name__ || v.__ename__);
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
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
	return Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	toString: function() {
		return this.b;
	}
	,addSub: function(s,pos,len) {
		this.b += HxOverrides.substr(s,pos,len);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,b: null
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
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c >= 9 && c <= 13 || c == 32;
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
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += HxOverrides.substr(c,0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += HxOverrides.substr(c,0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
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
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
}
StringTools.isEOF = function(c) {
	return c != c;
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
Type.getSuperClass = function(c) {
	return c.__super__;
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
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
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
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
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
		if(this.nodeType == Xml.PCData) return this._nodeValue;
		if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if(this.nodeType == Xml.Element) {
			s.b += Std.string("<");
			s.b += Std.string(this._nodeName);
			var $it0 = this._attributes.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				s.b += Std.string(" ");
				s.b += Std.string(k);
				s.b += Std.string("=\"");
				s.b += Std.string(this._attributes.get(k));
				s.b += Std.string("\"");
			}
			if(this._children.length == 0) {
				s.b += Std.string("/>");
				return s.b;
			}
			s.b += Std.string(">");
		}
		var $it1 = this.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			s.b += Std.string(x.toString());
		}
		if(this.nodeType == Xml.Element) {
			s.b += Std.string("</");
			s.b += Std.string(this._nodeName);
			s.b += Std.string(">");
		}
		return s.b;
	}
	,insertChild: function(x,pos) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.splice(pos,0,x);
	}
	,removeChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		var b = HxOverrides.remove(this._children,x);
		if(b) x._parent = null;
		return b;
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
	,elementsNamed: function(name) {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == Xml.Element && n._nodeName == name) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
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
	,remove: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.remove(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,getParent: function() {
		return this._parent;
	}
	,setNodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,getNodeValue: function() {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
	}
	,setNodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,getNodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,_parent: null
	,_children: null
	,_attributes: null
	,_nodeValue: null
	,_nodeName: null
	,parent: null
	,nodeValue: null
	,nodeName: null
	,nodeType: null
	,__class__: Xml
	,__properties__: {set_nodeName:"setNodeName",get_nodeName:"getNodeName",set_nodeValue:"setNodeValue",get_nodeValue:"getNodeValue",get_parent:"getParent"}
}
var awe6 = {}
awe6.interfaces = {}
awe6.interfaces.IPauseable = function() { }
$hxClasses["awe6.interfaces.IPauseable"] = awe6.interfaces.IPauseable;
awe6.interfaces.IPauseable.__name__ = ["awe6","interfaces","IPauseable"];
awe6.interfaces.IPauseable.prototype = {
	resume: null
	,pause: null
	,isActive: null
	,__class__: awe6.interfaces.IPauseable
	,__properties__: {set_isActive:"_set_isActive"}
}
awe6.interfaces.IDisposable = function() { }
$hxClasses["awe6.interfaces.IDisposable"] = awe6.interfaces.IDisposable;
awe6.interfaces.IDisposable.__name__ = ["awe6","interfaces","IDisposable"];
awe6.interfaces.IDisposable.prototype = {
	dispose: null
	,isDisposed: null
	,__class__: awe6.interfaces.IDisposable
}
awe6.interfaces.IUpdateable = function() { }
$hxClasses["awe6.interfaces.IUpdateable"] = awe6.interfaces.IUpdateable;
awe6.interfaces.IUpdateable.__name__ = ["awe6","interfaces","IUpdateable"];
awe6.interfaces.IUpdateable.prototype = {
	update: null
	,getAge: null
	,__class__: awe6.interfaces.IUpdateable
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
	if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.INIT,this,true,true,true);
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
			this._set_isActive(true);
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
			this._set_isActive(false);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.PAUSE,this,true,true,true);
		}
	}
	,_set_isActive: function(p_value) {
		if(this.isDisposed) {
			this.isActive = false;
			return false;
		}
		if(p_value != this.isActive) {
			if(this._isIsActiveSetterBypassed) this.isActive = p_value; else if(p_value) {
				if(this.isActive || this.isDisposed) null; else {
					this._resumer();
					this._isIsActiveSetterBypassed = true;
					this._set_isActive(true);
					if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.RESUME,this,true,true,true);
					null;
				}
			} else if(!this.isActive || this.isDisposed) null; else {
				this._pauser();
				this._isIsActiveSetterBypassed = true;
				this._set_isActive(false);
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
			this._set_isActive(false);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this,true,true,true);
			this._disposer();
			return;
		}
	}
	,_init: function() {
		this._isIsActiveSetterBypassed = true;
		this._set_isActive(true);
		this.isDisposed = false;
		this._age = 0;
		this._updates = 0;
	}
	,_isIsActiveSetterBypassed: null
	,_isEntity: null
	,_updates: null
	,_age: null
	,_tools: null
	,_kernel: null
	,isDisposed: null
	,isActive: null
	,__class__: awe6.core.Process
	,__properties__: {set_isActive:"_set_isActive"}
}
awe6.interfaces.IAssetManager = function() { }
$hxClasses["awe6.interfaces.IAssetManager"] = awe6.interfaces.IAssetManager;
awe6.interfaces.IAssetManager.__name__ = ["awe6","interfaces","IAssetManager"];
awe6.interfaces.IAssetManager.prototype = {
	getAsset: null
	,__class__: awe6.interfaces.IAssetManager
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
	,_PACKAGE_ID: null
	,__class__: awe6.core.AAssetManager
});
awe6.interfaces.IAgendaManager = function() { }
$hxClasses["awe6.interfaces.IAgendaManager"] = awe6.interfaces.IAgendaManager;
awe6.interfaces.IAgendaManager.__name__ = ["awe6","interfaces","IAgendaManager"];
awe6.interfaces.IAgendaManager.prototype = {
	setAgenda: null
	,agenda: null
	,__class__: awe6.interfaces.IAgendaManager
	,__properties__: {get_agenda:"_get_agenda"}
}
awe6.interfaces.IEntityCollection = function() { }
$hxClasses["awe6.interfaces.IEntityCollection"] = awe6.interfaces.IEntityCollection;
awe6.interfaces.IEntityCollection.__name__ = ["awe6","interfaces","IEntityCollection"];
awe6.interfaces.IEntityCollection.__interfaces__ = [awe6.interfaces.IAgendaManager];
awe6.interfaces.IEntityCollection.prototype = {
	getEntityById: null
	,getEntitiesByClass: null
	,getEntities: null
	,removeEntity: null
	,addEntity: null
	,__class__: awe6.interfaces.IEntityCollection
}
awe6.interfaces.IViewable = function() { }
$hxClasses["awe6.interfaces.IViewable"] = awe6.interfaces.IViewable;
awe6.interfaces.IViewable.__name__ = ["awe6","interfaces","IViewable"];
awe6.interfaces.IViewable.prototype = {
	view: null
	,__class__: awe6.interfaces.IViewable
	,__properties__: {get_view:"_get_view"}
}
awe6.interfaces.IEntity = function() { }
$hxClasses["awe6.interfaces.IEntity"] = awe6.interfaces.IEntity;
awe6.interfaces.IEntity.__name__ = ["awe6","interfaces","IEntity"];
awe6.interfaces.IEntity.__interfaces__ = [awe6.interfaces.IEntityCollection,awe6.interfaces.IViewable,awe6.interfaces.IProcess];
awe6.interfaces.IEntity.prototype = {
	remove: null
	,parent: null
	,id: null
	,__class__: awe6.interfaces.IEntity
	,__properties__: {set_id:"_set_id",get_parent:"_get_parent"}
}
awe6.core.Entity = function(p_kernel,p_id,p_context) {
	if(this._get_view() == null) this.view = new awe6.core.drivers.jeash.View(p_kernel,p_context,0,this);
	this._set_id(p_id == null?p_kernel.tools.createGuid():p_id);
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.Entity"] = awe6.core.Entity;
awe6.core.Entity.__name__ = ["awe6","core","Entity"];
awe6.core.Entity.__interfaces__ = [awe6.interfaces.IEntity];
awe6.core.Entity.__super__ = awe6.core.Process;
awe6.core.Entity.prototype = $extend(awe6.core.Process.prototype,{
	_get_view: function() {
		return this.view;
	}
	,_get_parent: function() {
		return this.parent;
	}
	,_get_agenda: function() {
		return this.agenda;
	}
	,_set_id: function(p_value) {
		this.id = p_value;
		return this.id;
	}
	,_setParent: function(p_parent) {
		this.parent = p_parent;
	}
	,setAgenda: function(p_type) {
		if(p_type == null) p_type = awe6.interfaces.EAgenda.ALWAYS;
		if(Type.enumEq(this._get_agenda(),p_type)) return false;
		this._isAgendaDirty = true;
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			var l_isAddedToView = Type.enumEq(this._get_agenda(),i.agenda) && i.entity._get_view()._get_parent() == this._get_view();
			if(l_isAddedToView) i.entity._get_view().remove();
			i.isAddedToView = i.isAddedToView || l_isAddedToView;
		}
		this.agenda = p_type;
		var $it1 = this._entityAgendaPairs.iterator();
		while( $it1.hasNext() ) {
			var i = $it1.next();
			if(i.isAddedToView && (Type.enumEq(awe6.interfaces.EAgenda.ALWAYS,i.agenda) || Type.enumEq(this._get_agenda(),i.agenda))) this._get_view().addChild(i.entity._get_view());
		}
		return true;
	}
	,getEntityById: function(p_id,p_agenda,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		if(this.id == p_id) return this;
		if(p_isBubbleEverywhere && this._kernel.scenes._get_scene() != null) return this._kernel.scenes._get_scene().getEntityById(p_id,p_agenda,true);
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
		if(p_isBubbleUp && this._get_parent() != null) l_result = this._get_parent().getEntityById(p_id,p_agenda,false,true);
		return l_result;
	}
	,getEntitiesByClass: function(p_classType,p_agenda,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere) {
		if(p_isBubbleEverywhere == null) p_isBubbleEverywhere = false;
		if(p_isBubbleUp == null) p_isBubbleUp = false;
		if(p_isBubbleDown == null) p_isBubbleDown = false;
		if(p_isBubbleEverywhere && this._kernel.scenes._get_scene() != null) return this._kernel.scenes._get_scene().getEntitiesByClass(p_classType,p_agenda,true);
		var l_result = new Array();
		var l_entities = this._getEntities(p_agenda);
		var _g = 0;
		while(_g < l_entities.length) {
			var i = l_entities[_g];
			++_g;
			if(js.Boot.__instanceof(i,p_classType)) l_result.push(i);
			if(p_isBubbleDown) l_result.concat(i.getEntitiesByClass(p_classType,p_agenda,true));
		}
		if(p_isBubbleUp && this._get_parent() != null) l_result.concat(this._get_parent().getEntitiesByClass(p_classType,p_agenda,false,true));
		return l_result;
	}
	,_getEntities: function(p_agenda) {
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
		if(this._get_parent() != null) this._get_parent().removeEntity(this,null,p_isRemovedFromView);
	}
	,removeEntity: function(p_entity,p_agenda,p_isRemovedFromView) {
		if(p_isRemovedFromView == null) p_isRemovedFromView = false;
		if(this.isDisposed) return;
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
			if(p_isRemovedFromView) p_entity._get_view().remove();
		}
	}
	,addEntity: function(p_entity,p_agenda,p_isAddedToView,p_viewPriority) {
		if(p_viewPriority == null) p_viewPriority = 0;
		if(p_isAddedToView == null) p_isAddedToView = false;
		if(this.isDisposed) return;
		if(p_entity == null) return;
		if(p_agenda == null) p_agenda = awe6.interfaces.EAgenda.ALWAYS;
		var $it0 = this._entityAgendaPairs.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(i.entity == p_entity && Type.enumEq(i.agenda,p_agenda)) return;
		}
		this._isAgendaDirty = true;
		if(p_entity._get_parent() != this) {
			p_entity.remove(p_isAddedToView);
			if(js.Boot.__instanceof(p_entity,awe6.core.Entity)) {
				var l_child = p_entity;
				l_child._setParent(this);
			}
		}
		var l_helperEntityAgendaPair = new awe6.core._Entity._HelperEntityAgendaPair(p_entity,p_agenda);
		this._entityAgendaPairs.add(l_helperEntityAgendaPair);
		if(p_isAddedToView) {
			if(Type.enumEq(p_agenda,this._get_agenda()) || p_agenda == awe6.interfaces.EAgenda.ALWAYS) this._get_view().addChild(p_entity._get_view(),p_viewPriority); else {
				p_entity._get_view()._set_priority(p_viewPriority);
				l_helperEntityAgendaPair.isAddedToView = true;
			}
		}
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
		this._get_view().dispose();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this._isAgendaDirty) {
			this._cachedEntities = this._getEntities(this._get_agenda());
			if(!Type.enumEq(this._get_agenda(),awe6.interfaces.EAgenda.ALWAYS)) this._cachedEntities = this._cachedEntities.concat(this._getEntities(awe6.interfaces.EAgenda.ALWAYS));
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
		this._entityAgendaPairs = new haxe.FastList();
		this._isAgendaDirty = true;
		this._cachedEntities = [];
	}
	,_cachedEntities: null
	,_isAgendaDirty: null
	,_entityAgendaPairs: null
	,view: null
	,parent: null
	,agenda: null
	,id: null
	,__class__: awe6.core.Entity
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_id:"_set_id",get_agenda:"_get_agenda",get_parent:"_get_parent",get_view:"_get_view"})
});
awe6.interfaces.IPositionable = function() { }
$hxClasses["awe6.interfaces.IPositionable"] = awe6.interfaces.IPositionable;
awe6.interfaces.IPositionable.__name__ = ["awe6","interfaces","IPositionable"];
awe6.interfaces.IPositionable.prototype = {
	setPosition: null
	,y: null
	,x: null
	,__class__: awe6.interfaces.IPositionable
	,__properties__: {set_x:"_set_x",set_y:"_set_y"}
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
	this._set_width(p_width);
	this._set_height(p_height);
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
	_set_height: function(p_value) {
		this.height = p_value;
		return this.height;
	}
	,_set_width: function(p_value) {
		this.width = p_value;
		return this.width;
	}
	,_set_y: function(p_value) {
		this.y = p_value;
		if(this._get_view() != null) this._get_view()._set_y(this.y);
		return this.y;
	}
	,_set_x: function(p_value) {
		this.x = p_value;
		if(this._get_view() != null) this._get_view()._set_x(this.x);
		return this.x;
	}
	,setPosition: function(p_x,p_y) {
		this._set_x(p_x);
		this._set_y(p_y);
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
		var l_isOver = this._isPointInsideRectangle(l_inputMouse.x + this._get_view().x - this._get_view().globalX,l_inputMouse.y + this._get_view().y - this._get_view().globalY,this.x,this.y,this.width,this.height);
		if(l_isOver) l_inputMouse._set_cursorType(awe6.interfaces.EMouseCursor.BUTTON);
		if(l_isOver && !this.isOver) this.onRollOver();
		if(!l_isOver && this.isOver) {
			l_inputMouse._set_cursorType(awe6.interfaces.EMouseCursor.AUTO);
			this.onRollOut();
		}
		this.isOver = l_isOver;
		if(this.isOver && l_inputMouse.getIsButtonRelease()) this.onClick();
		if(this._keyType != null && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType)) this.onClick();
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		this._get_view()._set_x(this.x);
		this._get_view()._set_y(this.y);
		this.isOver = false;
		this.addEntity(this._stateUp,awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP),true);
		this.addEntity(this._stateOver,awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.OVER),true);
		this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP));
	}
	,_keyType: null
	,_stateOver: null
	,_stateUp: null
	,onRollOutCallback: null
	,onRollOverCallback: null
	,onClickCallback: null
	,isOver: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: awe6.core.BasicButton
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{set_x:"_set_x",set_y:"_set_y",set_width:"_set_width",set_height:"_set_height"})
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
	decrypt: null
	,encrypt: null
	,__class__: awe6.interfaces.IEncrypter
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
	,_defaultSecret: null
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
	isAddedToView: null
	,agenda: null
	,entity: null
	,__class__: awe6.core._Entity._HelperEntityAgendaPair
}
awe6.interfaces.IInputJoypad = function() { }
$hxClasses["awe6.interfaces.IInputJoypad"] = awe6.interfaces.IInputJoypad;
awe6.interfaces.IInputJoypad.__name__ = ["awe6","interfaces","IInputJoypad"];
awe6.interfaces.IInputJoypad.prototype = {
	getButtonUpDuration: null
	,getButtonDownDuration: null
	,getIsButtonRelease: null
	,getIsButtonPress: null
	,getIsButtonDown: null
	,__class__: awe6.interfaces.IInputJoypad
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
	,_keySecondaryAlt: null
	,_keyPrimaryAlt: null
	,_keyLeftAlt: null
	,_keyDownAlt: null
	,_keyRightAlt: null
	,_keyUpAlt: null
	,_keySecondary: null
	,_keyPrimary: null
	,_keyLeft: null
	,_keyDown: null
	,_keyRight: null
	,_keyUp: null
	,_kernel: null
	,__class__: awe6.core.InputJoypad
}
awe6.interfaces.IResettable = function() { }
$hxClasses["awe6.interfaces.IResettable"] = awe6.interfaces.IResettable;
awe6.interfaces.IResettable.__name__ = ["awe6","interfaces","IResettable"];
awe6.interfaces.IResettable.prototype = {
	reset: null
	,__class__: awe6.interfaces.IResettable
}
awe6.interfaces.IInputManager = function() { }
$hxClasses["awe6.interfaces.IInputManager"] = awe6.interfaces.IInputManager;
awe6.interfaces.IInputManager.__name__ = ["awe6","interfaces","IInputManager"];
awe6.interfaces.IInputManager.__interfaces__ = [awe6.interfaces.IResettable];
awe6.interfaces.IInputManager.prototype = {
	createJoypad: null
	,mouse: null
	,keyboard: null
	,joypad: null
	,__class__: awe6.interfaces.IInputManager
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
		this.keyboard = this._inputKeyboard = new awe6.core.drivers.jeash.InputKeyboard(this._kernel);
		this.mouse = this._inputMouse = new awe6.core.drivers.jeash.InputMouse(this._kernel);
	}
	,_inputMouse: null
	,_inputKeyboard: null
	,mouse: null
	,keyboard: null
	,joypad: null
	,__class__: awe6.core.InputManager
});
awe6.interfaces.IMessageManager = function() { }
$hxClasses["awe6.interfaces.IMessageManager"] = awe6.interfaces.IMessageManager;
awe6.interfaces.IMessageManager.__name__ = ["awe6","interfaces","IMessageManager"];
awe6.interfaces.IMessageManager.__interfaces__ = [awe6.interfaces.IResettable];
awe6.interfaces.IMessageManager.prototype = {
	sendMessage: null
	,removeSubscribers: null
	,getSubscribers: null
	,addSubscriber: null
	,__class__: awe6.interfaces.IMessageManager
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
		var l_result = new haxe.FastList();
		var $it0 = this._subscriptions.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(p_subscriber != null && i.subscriber != p_subscriber) continue;
			if(p_message != null && !js.Boot.__instanceof(p_message,i.messageClass)) {
				var $e = (Type["typeof"](p_message));
				switch( $e[1] ) {
				case 7:
					var e = $e[2];
					if(Type.getEnum(p_message) != Type.getEnum(i.message) || p_message[0] != i.message[0]) continue;
					break;
				default:
					if(p_message != i.message) continue;
				}
			}
			if(p_handler != null && !Reflect.compareMethods(i.handler,p_handler)) continue;
			if(p_sender != null && i.sender != null && i.sender != p_sender) continue;
			if(p_sender != null && i.senderClassType != null && (p_isRemove || !js.Boot.__instanceof(p_sender,i.senderClassType))) continue;
			l_result.head = new haxe.FastCell(i,l_result.head);
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
		if(this._isVerbose) haxe.Log.trace("Sending message: " + Std.string(p_message) + " from " + p_sender.id,{ fileName : "MessageManager.hx", lineNumber : 120, className : "awe6.core.MessageManager", methodName : "_sendMessage"});
		if(!this._isOkToSendMessage()) {
			this._messageQueue.push(new awe6.core._MessageManager._HelperMessage(p_message,p_sender,p_target,p_isBubbleDown,p_isBubbleUp,p_isBubbleEverywhere));
			return;
		}
		if(p_isBubbleEverywhere) {
			var l_entityFromScene = this._kernel.scenes._get_scene().getEntities()[0];
			if(l_entityFromScene != null && l_entityFromScene._get_parent() != null) return this._sendMessage(p_message,p_sender,this._kernel.scenes._get_scene().getEntities()[0]._get_parent(),true);
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
		if(p_isBubbleUp && p_target._get_parent() != null && js.Boot.__instanceof(p_target._get_parent(),awe6.interfaces.IEntity)) this._sendMessage(p_message,p_sender,p_target._get_parent(),false,true);
		return;
	}
	,_isOkToSendMessage: function() {
		return this._kernel.scenes._get_scene() != null;
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
			if(this._isVerbose) haxe.Log.trace("Removing " + Std.string(i.sender) + ":" + Std.string(i.message),{ fileName : "MessageManager.hx", lineNumber : 81, className : "awe6.core.MessageManager", methodName : "removeSubscribers"});
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
		this._subscriptions = new haxe.FastList();
		this._messageQueue = new List();
	}
	,_isVerbose: null
	,_messageQueue: null
	,_subscriptions: null
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
	,isRemovedAfterFirstSend: null
	,senderClassType: null
	,sender: null
	,handler: null
	,messageClass: null
	,message: null
	,subscriber: null
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
	isBubbleEverywhere: null
	,isBubbleUp: null
	,isBubbleDown: null
	,target: null
	,sender: null
	,message: null
	,__class__: awe6.core._MessageManager._HelperMessage
}
awe6.interfaces.IScene = function() { }
$hxClasses["awe6.interfaces.IScene"] = awe6.interfaces.IScene;
awe6.interfaces.IScene.__name__ = ["awe6","interfaces","IScene"];
awe6.interfaces.IScene.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IEntityCollection,awe6.interfaces.IProcess];
awe6.interfaces.IScene.prototype = {
	isSessionSavedOnNext: null
	,isMuteable: null
	,isPauseable: null
	,isDisposable: null
	,type: null
	,__class__: awe6.interfaces.IScene
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
	,_get_agenda: function() {
		return this._entity._get_agenda();
	}
	,_get_view: function() {
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
		this._entity.addEntity(p_entity,p_agenda,p_isAddedToView,p_viewPriority);
	}
	,_disposer: function() {
		this._entity.dispose();
		this._get_view().dispose();
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
		this.view = this._entity._get_view();
	}
	,_entity: null
	,agenda: null
	,isSessionSavedOnNext: null
	,isMuteable: null
	,isPauseable: null
	,isDisposable: null
	,view: null
	,type: null
	,__class__: awe6.core.Scene
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{get_view:"_get_view",get_agenda:"_get_agenda"})
});
awe6.interfaces.ISceneManager = function() { }
$hxClasses["awe6.interfaces.ISceneManager"] = awe6.interfaces.ISceneManager;
awe6.interfaces.ISceneManager.__name__ = ["awe6","interfaces","ISceneManager"];
awe6.interfaces.ISceneManager.prototype = {
	restart: null
	,next: null
	,back: null
	,setScene: null
	,scene: null
	,__class__: awe6.interfaces.ISceneManager
	,__properties__: {get_scene:"_get_scene"}
}
awe6.core.SceneManager = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.SceneManager"] = awe6.core.SceneManager;
awe6.core.SceneManager.__name__ = ["awe6","core","SceneManager"];
awe6.core.SceneManager.__interfaces__ = [awe6.interfaces.ISceneManager];
awe6.core.SceneManager.__super__ = awe6.core.Process;
awe6.core.SceneManager.prototype = $extend(awe6.core.Process.prototype,{
	_get_scene: function() {
		return this.scene;
	}
	,restart: function() {
		if(this._get_scene() == null) this.setScene(this._kernel.factory.startingSceneType); else this.setScene(this._get_scene().type);
	}
	,next: function() {
		if(this._get_scene().isSessionSavedOnNext && this._kernel._get_session() != null) this._kernel._get_session().save();
		this.setScene(this._kernel.factory.getNextSceneType(this._get_scene().type));
	}
	,back: function() {
		this.setScene(this._kernel.factory.getBackSceneType(this._get_scene().type));
	}
	,setScene: function(p_type) {
		var l_previousType = null;
		if(this._get_scene() != null) {
			l_previousType = this._get_scene().type;
			var l_newSceneTransition = this._kernel.factory.createSceneTransition(p_type,l_previousType);
			if(this._sceneTransition != null) this._sceneTransition.dispose();
			this._sceneTransition = l_newSceneTransition;
			this._kernel.inputs.reset();
			if(this._get_scene().isDisposable) {
				this._get_scene().dispose();
				this._kernel.messenger.reset();
			}
			this.scene = null;
		}
		this._kernel.overlay.hideButtons();
		this.scene = this._kernel.factory.createScene(p_type);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.BACK,this._kernel.factory.getBackSceneType(this._get_scene().type) != null);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.MUTE,this._get_scene().isMuteable && !this._kernel.audio.isMute);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.UNMUTE,this._get_scene().isMuteable && this._kernel.audio.isMute);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.PAUSE,this._get_scene().isPauseable && this._kernel.isActive);
		this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,this._get_scene().isPauseable && !this._kernel.isActive);
		this.view.addChild(this._get_scene()._get_view());
		if(this._sceneTransition != null) this._get_scene()._get_view().addChild(this._sceneTransition._get_view(),this._tools.BIG_NUMBER + 1);
	}
	,_disposer: function() {
		if(this._get_scene() != null) this._get_scene().dispose();
		if(this._sceneTransition != null) this._sceneTransition.dispose();
		this.view.dispose();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this._get_scene() != null) this._get_scene().update(p_deltaTime);
		if(this._sceneTransition != null) this._sceneTransition.update(p_deltaTime);
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.view = new awe6.core.drivers.jeash.View(this._kernel);
	}
	,_sceneTransition: null
	,view: null
	,scene: null
	,__class__: awe6.core.SceneManager
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{get_scene:"_get_scene"})
});
awe6.interfaces.ITextStyle = function() { }
$hxClasses["awe6.interfaces.ITextStyle"] = awe6.interfaces.ITextStyle;
awe6.interfaces.ITextStyle.__name__ = ["awe6","interfaces","ITextStyle"];
awe6.interfaces.ITextStyle.prototype = {
	clone: null
	,toString: null
	,filters: null
	,thickness: null
	,isItalic: null
	,isBold: null
	,spacingVertical: null
	,spacingHorizontal: null
	,align: null
	,color: null
	,size: null
	,font: null
	,__class__: awe6.interfaces.ITextStyle
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
	,filters: null
	,thickness: null
	,isItalic: null
	,isBold: null
	,spacingVertical: null
	,spacingHorizontal: null
	,align: null
	,color: null
	,size: null
	,font: null
	,__class__: awe6.core.TextStyle
}
awe6.interfaces.ITools = function() { }
$hxClasses["awe6.interfaces.ITools"] = awe6.interfaces.ITools;
awe6.interfaces.ITools.__name__ = ["awe6","interfaces","ITools"];
awe6.interfaces.ITools.__interfaces__ = [awe6.interfaces.IEncrypter];
awe6.interfaces.ITools.prototype = {
	unserialize: null
	,serialize: null
	,intToHex: null
	,getRandomType: null
	,shuffle: null
	,convertAgeToFormattedTime: null
	,convertUpdatesToFormattedTime: null
	,nearestSquare: null
	,isBool: null
	,sgn: null
	,isEven: null
	,isOdd: null
	,swap: null
	,range: null
	,limit: null
	,toWords: null
	,fromConstCase: null
	,fromCamelCase: null
	,toConstCase: null
	,toCamelCase: null
	,toUpperCaseFirst: null
	,sortByPriority: null
	,sortByInt: null
	,sortByString: null
	,ease: null
	,createGuid: null
	,BIG_NUMBER: null
	,__class__: awe6.interfaces.ITools
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
		var l_ap = p_a._get_priority();
		var l_bp = p_b._get_priority();
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
	,_encrypter: null
	,_kernel: null
	,BIG_NUMBER: null
	,__class__: awe6.core.Tools
}
awe6.interfaces.IAudioManager = function() { }
$hxClasses["awe6.interfaces.IAudioManager"] = awe6.interfaces.IAudioManager;
awe6.interfaces.IAudioManager.__name__ = ["awe6","interfaces","IAudioManager"];
awe6.interfaces.IAudioManager.prototype = {
	isPlaying: null
	,transform: null
	,stop: null
	,start: null
	,isMute: null
	,__class__: awe6.interfaces.IAudioManager
	,__properties__: {set_isMute:"_set_isMute"}
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
	,_set_isMute: function(p_value) {
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
		this._set_isMute(false);
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
		this._set_isMute(false);
	}
	,_packageId: null
	,_sounds: null
	,isMute: null
	,__class__: awe6.core.drivers.AAudioManager
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_isMute:"_set_isMute"})
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
	,_kernel: null
	,_onCompleteCallback: null
	,_pan: null
	,_volume: null
	,_startTime: null
	,_loops: null
	,_packageId: null
	,audioChannelType: null
	,id: null
	,isDisposed: null
	,__class__: awe6.core.drivers._AHelperSound
}
awe6.interfaces.IFactory = function() { }
$hxClasses["awe6.interfaces.IFactory"] = awe6.interfaces.IFactory;
awe6.interfaces.IFactory.__name__ = ["awe6","interfaces","IFactory"];
awe6.interfaces.IFactory.prototype = {
	getNextSceneType: null
	,getBackSceneType: null
	,createTextStyle: null
	,createSession: null
	,createSceneTransition: null
	,createScene: null
	,createPreloader: null
	,createOverlay: null
	,createLogger: null
	,createEntity: null
	,createEncrypter: null
	,createAssetManager: null
	,onInitComplete: null
	,keySpecial: null
	,keyNext: null
	,keyBack: null
	,keyMute: null
	,keyPause: null
	,startingSceneType: null
	,config: null
	,isFixedUpdates: null
	,targetFramerate: null
	,secret: null
	,fullScreenType: null
	,bgColor: null
	,height: null
	,width: null
	,isResetSessionsOptionEnabled: null
	,isFullScreenOptionEnabled: null
	,isEyeCandyOptionEnabled: null
	,isDecached: null
	,isDebug: null
	,author: null
	,version: null
	,id: null
	,__class__: awe6.interfaces.IFactory
}
awe6.core.drivers.AFactory = function(p_context,p_isDebug,p_config) {
	if(p_isDebug == null) p_isDebug = false;
	this._context = p_context;
	this.isDebug = p_isDebug;
	this._config = p_config;
	this.config = new Hash();
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
		return new awe6.core.drivers.jeash.SceneTransition(this._kernel);
	}
	,createScene: function(p_type) {
		if(p_type == null) p_type = this.startingSceneType;
		return new awe6.core.Scene(this._kernel,p_type);
	}
	,createPreloader: function() {
		return new awe6.core.drivers.jeash.Preloader(this._kernel,this._getAssetUrls(),this.isDecached);
	}
	,createOverlay: function() {
		return new awe6.core.drivers.jeash.Overlay(this._kernel);
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
		this._concreteKernel = new awe6.core.drivers.jeash.Kernel(this,this._context);
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
			var l_name = p_prefix + i.getNodeName();
			if(i.elements().hasNext()) this._traverseElements(i.elements(),l_name);
			if(i.firstChild() != null && HxOverrides.substr(i.firstChild().toString(),0,9) == "<![CDATA[") i.firstChild().setNodeValue(i.firstChild().toString().split("<![CDATA[").join("").split("]]>").join(""));
			this.config.set(l_name,i.firstChild() == null?"":i.firstChild().getNodeValue());
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
		this.config = new Hash();
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
	,keySpecial: null
	,keyNext: null
	,keyBack: null
	,keyMute: null
	,keyPause: null
	,startingSceneType: null
	,config: null
	,isFixedUpdates: null
	,targetFramerate: null
	,secret: null
	,fullScreenType: null
	,bgColor: null
	,height: null
	,width: null
	,isResetSessionsOptionEnabled: null
	,isFullScreenOptionEnabled: null
	,isEyeCandyOptionEnabled: null
	,isDecached: null
	,isDebug: null
	,author: null
	,version: null
	,id: null
	,isDisposed: null
	,_tools: null
	,_concreteKernel: null
	,_kernel: null
	,_config: null
	,_context: null
	,__class__: awe6.core.drivers.AFactory
}
awe6.interfaces.IInputKeyboard = function() { }
$hxClasses["awe6.interfaces.IInputKeyboard"] = awe6.interfaces.IInputKeyboard;
awe6.interfaces.IInputKeyboard.__name__ = ["awe6","interfaces","IInputKeyboard"];
awe6.interfaces.IInputKeyboard.prototype = {
	getKey: null
	,getKeyCode: null
	,getKeyUpDuration: null
	,getKeyDownDuration: null
	,getIsKeyRelease: null
	,getIsKeyPress: null
	,getIsKeyDown: null
	,__class__: awe6.interfaces.IInputKeyboard
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
				var l_value = $e[2];
				$r = l_value | 0;
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
		var l_encounteredKeyCodes = new Hash();
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
	,_buffer: null
	,_keys: null
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
	timeUpPrevious: null
	,timeDownPrevious: null
	,updatesUpPrevious: null
	,updatesDownPrevious: null
	,timeUp: null
	,timeDown: null
	,updatesUp: null
	,updatesDown: null
	,isDown: null
	,isUsed: null
	,__class__: awe6.core.drivers._AInputKeyboard._HelperKey
}
awe6.core.drivers._AInputKeyboard._HelperKeyEvent = function(p_keyCode,p_isDown) {
	this.keyCode = p_keyCode;
	this.isDown = p_isDown;
};
$hxClasses["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = awe6.core.drivers._AInputKeyboard._HelperKeyEvent;
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.__name__ = ["awe6","core","drivers","_AInputKeyboard","_HelperKeyEvent"];
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.prototype = {
	isDown: null
	,keyCode: null
	,__class__: awe6.core.drivers._AInputKeyboard._HelperKeyEvent
}
awe6.interfaces.IInputMouse = function() { }
$hxClasses["awe6.interfaces.IInputMouse"] = awe6.interfaces.IInputMouse;
awe6.interfaces.IInputMouse.__name__ = ["awe6","interfaces","IInputMouse"];
awe6.interfaces.IInputMouse.prototype = {
	getButtonLastClickedY: null
	,getButtonLastClickedX: null
	,getButtonDragHeight: null
	,getButtonDragWidth: null
	,getButtonUpDuration: null
	,getButtonDownDuration: null
	,getIsButtonRelease: null
	,getIsButtonPress: null
	,getIsButtonDown: null
	,getIsButtonDrag: null
	,getIsButtonDoubleClick: null
	,getStillDuration: null
	,getDeltaScroll: null
	,getSpeed: null
	,getDeltaY: null
	,getDeltaX: null
	,cursorType: null
	,scroll: null
	,isVisible: null
	,isMoving: null
	,isWithinBounds: null
	,relativeCentralisedY: null
	,relativeCentralisedX: null
	,relativeY: null
	,relativeX: null
	,y: null
	,x: null
	,__class__: awe6.interfaces.IInputMouse
	,__properties__: {set_isVisible:"_set_isVisible",set_cursorType:"_set_cursorType"}
}
awe6.core.drivers.AInputMouse = function(p_kernel) {
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.AInputMouse"] = awe6.core.drivers.AInputMouse;
awe6.core.drivers.AInputMouse.__name__ = ["awe6","core","drivers","AInputMouse"];
awe6.core.drivers.AInputMouse.__interfaces__ = [awe6.interfaces.IInputMouse];
awe6.core.drivers.AInputMouse.__super__ = awe6.core.Process;
awe6.core.drivers.AInputMouse.prototype = $extend(awe6.core.Process.prototype,{
	_set_cursorType: function(p_value) {
		this.cursorType = p_value;
		return this.cursorType;
	}
	,_set_isVisible: function(p_value) {
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
		this._set_isVisible(true);
		this.scroll = 0;
		this._set_cursorType(awe6.interfaces.EMouseCursor.AUTO);
		this._scrollPrev = 0;
		this._stillUpdates = 0;
		this._stillDuration = 0;
		this._reset();
	}
	,_buttonRight: null
	,_buttonMiddle: null
	,_buttonLeft: null
	,_stillDuration: null
	,_stillUpdates: null
	,_scrollPrev: null
	,_deltaScroll: null
	,_deltaTimePrev: null
	,_deltaY: null
	,_deltaX: null
	,_yPrev: null
	,_xPrev: null
	,_buffer: null
	,cursorType: null
	,scroll: null
	,isVisible: null
	,isMoving: null
	,isWithinBounds: null
	,relativeCentralisedY: null
	,relativeCentralisedX: null
	,relativeY: null
	,relativeX: null
	,y: null
	,x: null
	,__class__: awe6.core.drivers.AInputMouse
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_isVisible:"_set_isVisible",set_cursorType:"_set_cursorType"})
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
	clickY: null
	,clickX: null
	,timeUpPrevious: null
	,timeDownPrevious: null
	,updatesUpPrevious: null
	,updatesDownPrevious: null
	,timeUp: null
	,timeDown: null
	,updatesUp: null
	,updatesDown: null
	,isDown: null
	,__class__: awe6.core.drivers._AInputMouse._HelperButton
}
awe6.interfaces.ILogger = function() { }
$hxClasses["awe6.interfaces.ILogger"] = awe6.interfaces.ILogger;
awe6.interfaces.ILogger.__name__ = ["awe6","interfaces","ILogger"];
awe6.interfaces.ILogger.prototype = {
	log: null
	,__class__: awe6.interfaces.ILogger
}
awe6.interfaces.IKernel = function() { }
$hxClasses["awe6.interfaces.IKernel"] = awe6.interfaces.IKernel;
awe6.interfaces.IKernel.__name__ = ["awe6","interfaces","IKernel"];
awe6.interfaces.IKernel.__interfaces__ = [awe6.interfaces.ILogger,awe6.interfaces.IPauseable];
awe6.interfaces.IKernel.prototype = {
	onPreloaderComplete: null
	,getFramerate: null
	,getConfig: null
	,session: null
	,factory: null
	,tools: null
	,messenger: null
	,scenes: null
	,inputs: null
	,audio: null
	,assets: null
	,overlay: null
	,isFullScreen: null
	,isEyeCandy: null
	,isLocal: null
	,isDebug: null
	,__class__: awe6.interfaces.IKernel
	,__properties__: {set_isEyeCandy:"_set_isEyeCandy",set_isFullScreen:"_set_isFullScreen",set_session:"_set_session",get_session:"_get_session"}
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
	_set_session: function(p_value) {
		this.session = p_value;
		return this._get_session();
	}
	,_get_session: function() {
		return this.session;
	}
	,_resumer: function() {
		awe6.core.Process.prototype._resumer.call(this);
		if(this.scenes._get_scene() != null) this.scenes._get_scene().resume();
	}
	,_pauser: function() {
		awe6.core.Process.prototype._pauser.call(this);
		if(this.scenes._get_scene() != null) this.scenes._get_scene().pause();
	}
	,_driverSetIsFullScreen: function(p_value) {
	}
	,_set_isFullScreen: function(p_value) {
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
	,_set_isEyeCandy: function(p_value) {
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
		this._get_session().deleteAllSessions();
		this._set_session(this.factory.createSession());
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
		if(this._logger != null) this._logger.log(p_value); else if(this.isDebug) haxe.Log.trace("LOG: " + Std.string(p_value),{ fileName : "AKernel.hx", lineNumber : 248, className : "awe6.core.drivers.AKernel", methodName : "log"});
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
		this._set_session(null);
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
		this._view.addChild(this._overlayProcess._get_view(),3);
		if(this.isDebug) {
			this._addProcess(this._profiler = new awe6.core.drivers.jeash.Profiler(this));
			this._view.addChild(this._profiler._get_view(),this._tools.BIG_NUMBER);
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
		this._view = new awe6.core.drivers.jeash.View(this,this._context,0,this);
		this._processes = new List();
		this._helperFramerate = new awe6.core.drivers._AKernel._HelperFramerate(this.factory.targetFramerate);
		this._isPreloaded = false;
		this.isDebug = this.factory.isDebug;
		this.isLocal = this._driverGetIsLocal();
		this._driverInit();
		this.assets = this._assetManagerProcess = new awe6.core.AAssetManager(this._kernel);
		this.audio = this._audioManager = new awe6.core.drivers.jeash.AudioManager(this._kernel);
		this.inputs = this._inputManager = new awe6.core.InputManager(this._kernel);
		this.scenes = this._sceneManager = new awe6.core.SceneManager(this._kernel);
		this.messenger = this._messageManager = new awe6.core.MessageManager(this._kernel);
		this._view.addChild(this._sceneManager.view,1);
		this._addProcess(this._assetManagerProcess);
		this._addProcess(this._inputManager);
		this._addProcess(this._sceneManager);
		this._addProcess(this._messageManager);
		this._addProcess(this._audioManager);
		this._set_isEyeCandy(true);
		this._set_isFullScreen(false);
		this.factory.onInitComplete(this);
		this._set_session(this.factory.createSession());
		this._get_session().reset();
		this._preloader = this.factory.createPreloader();
		this._addProcess(this._preloader);
		this._view.addChild(this._preloader._get_view(),2);
	}
	,_helperFramerate: null
	,_processes: null
	,_profiler: null
	,_preloader: null
	,_isPreloaded: null
	,_logger: null
	,_overlayProcess: null
	,_messageManager: null
	,_sceneManager: null
	,_inputManager: null
	,_audioManager: null
	,_assetManagerProcess: null
	,_view: null
	,_context: null
	,session: null
	,messenger: null
	,scenes: null
	,inputs: null
	,audio: null
	,assets: null
	,tools: null
	,isFullScreen: null
	,isEyeCandy: null
	,isLocal: null
	,isDebug: null
	,factory: null
	,overlay: null
	,__class__: awe6.core.drivers.AKernel
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_isEyeCandy:"_set_isEyeCandy",set_isFullScreen:"_set_isFullScreen",set_session:"_set_session",get_session:"_get_session"})
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
	,_timeAtLastUpdate: null
	,timeInterval: null
	,framerate: null
	,__class__: awe6.core.drivers._AKernel._HelperFramerate
}
awe6.interfaces.IOverlay = function() { }
$hxClasses["awe6.interfaces.IOverlay"] = awe6.interfaces.IOverlay;
awe6.interfaces.IOverlay.__name__ = ["awe6","interfaces","IOverlay"];
awe6.interfaces.IOverlay.prototype = {
	flash: null
	,hideButtons: null
	,showProgress: null
	,activateButton: null
	,positionButton: null
	,showButton: null
	,pauseEntity: null
	,__class__: awe6.interfaces.IOverlay
	,__properties__: {set_pauseEntity:"_set_pauseEntity",get_pauseEntity:"_get_pauseEntity"}
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
	if(p_border == null) p_border = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_backUp == null) p_backUp = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_backOver == null) p_backOver = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_muteUp == null) p_muteUp = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_muteOver == null) p_muteOver = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_unmuteUp == null) p_unmuteUp = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_unmuteOver == null) p_unmuteOver = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_pauseUp == null) p_pauseUp = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_pauseOver == null) p_pauseOver = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_unpauseUp == null) p_unpauseUp = new awe6.core.drivers.jeash.View(p_kernel);
	if(p_unpauseOver == null) p_unpauseOver = new awe6.core.drivers.jeash.View(p_kernel);
	this._borderView = p_border;
	this._buttonBack = new awe6.core.BasicButton(p_kernel,p_backUp,p_backOver,p_buttonWidth,p_buttonHeight);
	this._buttonMute = new awe6.core.BasicButton(p_kernel,p_muteUp,p_muteOver,p_buttonWidth,p_buttonHeight);
	this._buttonUnmute = new awe6.core.BasicButton(p_kernel,p_unmuteUp,p_unmuteOver,p_buttonWidth,p_buttonHeight);
	this._buttonPause = new awe6.core.BasicButton(p_kernel,p_pauseUp,p_pauseOver,p_buttonWidth,p_buttonHeight);
	this._buttonUnpause = new awe6.core.BasicButton(p_kernel,p_unpauseUp,p_unpauseOver,p_buttonWidth,p_buttonHeight);
	this._pauseBlur = p_pauseBlur;
	this._pauseColor = p_pauseColor;
	this._pauseAlpha = p_pauseAlpha;
	this._context = new browser.display.Sprite();
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["awe6.core.drivers.AOverlay"] = awe6.core.drivers.AOverlay;
awe6.core.drivers.AOverlay.__name__ = ["awe6","core","drivers","AOverlay"];
awe6.core.drivers.AOverlay.__interfaces__ = [awe6.interfaces.IOverlayProcess];
awe6.core.drivers.AOverlay.__super__ = awe6.core.Entity;
awe6.core.drivers.AOverlay.prototype = $extend(awe6.core.Entity.prototype,{
	_set_pauseEntity: function(p_value) {
		if(this._get_pauseEntity() != null) this._get_pauseEntity()._get_view().remove();
		this.pauseEntity = p_value;
		this._pauseView.addChild(this._get_pauseEntity()._get_view());
		return this._get_pauseEntity();
	}
	,_get_pauseEntity: function() {
		return this.pauseEntity;
	}
	,_drawPause: function(p_isVisible) {
		if(p_isVisible == null) p_isVisible = true;
		this._pauseView._set_isVisible(p_isVisible);
	}
	,activateButton: function(p_type) {
		var $e = (p_type);
		switch( $e[1] ) {
		case 0:
			if(this._buttonBack._get_view()._get_isInViewStack()) {
				if(!this._kernel.isActive) this.activateButton(awe6.interfaces.EOverlayButton.UNPAUSE);
				this._drawPause(false);
				this._kernel.resume();
				this._kernel.scenes.back();
			}
			break;
		case 1:
			if(this._buttonMute._get_view()._get_isInViewStack()) {
				this.showButton(awe6.interfaces.EOverlayButton.MUTE,false);
				this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,true);
				this._kernel.audio._set_isMute(true);
			}
			break;
		case 2:
			if(this._buttonUnmute._get_view()._get_isInViewStack() && !this._buttonUnpause._get_view()._get_isInViewStack()) {
				this.showButton(awe6.interfaces.EOverlayButton.MUTE,true);
				this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,false);
				this._kernel.audio._set_isMute(false);
			}
			break;
		case 3:
			if(this._buttonPause._get_view()._get_isInViewStack()) {
				this._kernel.pause();
				this._drawPause(true);
				this._wasMute = this._kernel.audio.isMute;
				this.showButton(awe6.interfaces.EOverlayButton.PAUSE,false);
				this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,true);
				this.activateButton(awe6.interfaces.EOverlayButton.MUTE);
			}
			break;
		case 4:
			if(this._buttonUnpause._get_view()._get_isInViewStack()) {
				this.showButton(awe6.interfaces.EOverlayButton.PAUSE,true);
				this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,false);
				this.activateButton(this._wasMute?awe6.interfaces.EOverlayButton.MUTE:awe6.interfaces.EOverlayButton.UNMUTE);
				this._kernel.resume();
				this._drawPause(false);
			}
			break;
		case 5:
			var l_value = $e[2];
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
		this._progressView._set_isVisible(p_progress < 1);
	}
	,positionButton: function(p_type,p_x,p_y,p_width,p_height) {
		var l_button = this._getButton(p_type);
		if(l_button == null) return;
		l_button._set_x(p_x);
		l_button._set_y(p_y);
		if(p_width != null) l_button._set_width(p_width);
		if(p_height != null) l_button._set_height(p_height);
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
				var l_value = $e[2];
				$r = null;
				break;
			}
			return $r;
		}(this));
	}
	,_disposer: function() {
		if(this._get_pauseEntity() != null) this._get_pauseEntity().dispose();
		this._get_view().dispose();
		awe6.core.Entity.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		if(this._flashDuration > 0) {
			this._flashDuration -= this._flashAsTime?p_deltaTime:1;
			this._flashAlpha = this._tools.limit(this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration),0,1);
		}
		this._flashView._set_isVisible(this._flashAlpha > 0);
		if(this._kernel.factory.keyBack != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack)) this.activateButton(this._kernel.isActive?awe6.interfaces.EOverlayButton.BACK:awe6.interfaces.EOverlayButton.UNPAUSE);
		if(this._kernel.factory.keyPause != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause)) this.activateButton(this._kernel.isActive?awe6.interfaces.EOverlayButton.PAUSE:awe6.interfaces.EOverlayButton.UNPAUSE);
		if(this._kernel.factory.keyMute != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute)) this.activateButton(this._kernel.audio.isMute?awe6.interfaces.EOverlayButton.UNMUTE:awe6.interfaces.EOverlayButton.MUTE);
		if(this._get_pauseEntity() != null && !this._kernel.isActive) {
			this._get_pauseEntity().update(p_deltaTime);
			this._pauseView.update(p_deltaTime);
		}
	}
	,_driverInit: function() {
		this._progressContext = new browser.display.Sprite();
		this._pauseContext = new browser.display.Sprite();
		this._flashContext = new browser.display.Sprite();
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
		this._get_view().addChild(this._borderView,4);
		this._wasMute = this._kernel.audio.isMute;
		this._driverInit();
		this._progressView = new awe6.core.drivers.jeash.View(this._kernel,this._progressContext);
		this._progressView._set_isVisible(false);
		this._pauseView = new awe6.core.drivers.jeash.View(this._kernel,this._pauseContext);
		this._pauseView._set_isVisible(false);
		this._flashView = new awe6.core.drivers.jeash.View(this._kernel,this._flashContext);
		this._flashView._set_isVisible(false);
		this._flashStartingAlpha = 1;
		this._flashAsTime = true;
		this._flashDuration = this._flashStartingDuration = 100;
		this._buttonBack.onClickCallback = (function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.BACK);
		this._buttonMute.onClickCallback = (function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.MUTE);
		this._buttonPause.onClickCallback = (function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.PAUSE);
		this._buttonUnmute.onClickCallback = (function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.UNMUTE);
		this._buttonUnpause.onClickCallback = (function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.activateButton),awe6.interfaces.EOverlayButton.UNPAUSE);
		this._get_view().addChild(this._flashView,1);
		this._get_view().addChild(this._pauseView,2);
		this._get_view().addChild(this._progressView,3);
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
	,_buttonUnpause: null
	,_buttonPause: null
	,_buttonUnmute: null
	,_buttonMute: null
	,_buttonBack: null
	,_wasMute: null
	,_flashAsTime: null
	,_flashStartingDuration: null
	,_flashStartingAlpha: null
	,_flashAlpha: null
	,_flashDuration: null
	,_pauseBlur: null
	,_pauseAlpha: null
	,_pauseColor: null
	,_context: null
	,_flashView: null
	,_flashContext: null
	,_pauseView: null
	,_pauseContext: null
	,_progressView: null
	,_progressContext: null
	,_borderView: null
	,pauseEntity: null
	,__class__: awe6.core.drivers.AOverlay
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{set_pauseEntity:"_set_pauseEntity",get_pauseEntity:"_get_pauseEntity"})
});
awe6.interfaces.IProgress = function() { }
$hxClasses["awe6.interfaces.IProgress"] = awe6.interfaces.IProgress;
awe6.interfaces.IProgress.__name__ = ["awe6","interfaces","IProgress"];
awe6.interfaces.IProgress.prototype = {
	progress: null
	,__class__: awe6.interfaces.IProgress
	,__properties__: {get_progress:"_get_progress"}
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
	_get_progress: function() {
		return this.progress;
	}
	,_get_view: function() {
		return this.view;
	}
	,_driverDisposer: function() {
	}
	,_disposer: function() {
		this._get_view().dispose();
		this._driverDisposer();
		awe6.core.Process.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Process.prototype._updater.call(this,p_deltaTime);
		if(this._assets.length == 0) this._kernel.onPreloaderComplete(this);
		this._get_view()._set_isVisible(this._age > 100);
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
		if(this._get_view() == null) this.view = new awe6.core.drivers.jeash.View(this._kernel);
		this._encrypter = this._tools;
		this._currentProgress = 0;
		this._currentAsset = 0;
		this._isComplete = false;
		if(this._assets.length > 0) this._next();
	}
	,_isComplete: null
	,_currentAsset: null
	,_currentProgress: null
	,_encrypter: null
	,_isDecached: null
	,_assets: null
	,progress: null
	,view: null
	,__class__: awe6.core.drivers.APreloader
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{get_view:"_get_view",get_progress:"_get_progress"})
});
awe6.core.drivers.AProfiler = function(p_kernel) {
	this._context = new browser.display.Sprite();
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
	,_height: null
	,_width: null
	,_agePrev: null
	,_context: null
	,_memoryLabel: null
	,_fpsLabel: null
	,_memoryColor: null
	,_fpsColor: null
	,_backgroundColor: null
	,_marginColor: null
	,_marginHeight: null
	,__class__: awe6.core.drivers.AProfiler
});
awe6.interfaces.ISceneTransition = function() { }
$hxClasses["awe6.interfaces.ISceneTransition"] = awe6.interfaces.ISceneTransition;
awe6.interfaces.ISceneTransition.__name__ = ["awe6","interfaces","ISceneTransition"];
awe6.interfaces.ISceneTransition.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IProgress,awe6.interfaces.IProcess];
awe6.interfaces.ISceneTransition.prototype = {
	getDuration: null
	,__class__: awe6.interfaces.ISceneTransition
}
awe6.core.drivers.ASceneTransition = function(p_kernel,p_duration) {
	if(p_duration == null) p_duration = 500;
	this._duration = p_duration;
	this._context = new browser.display.Sprite();
	awe6.core.Entity.call(this,p_kernel,null,this._context);
};
$hxClasses["awe6.core.drivers.ASceneTransition"] = awe6.core.drivers.ASceneTransition;
awe6.core.drivers.ASceneTransition.__name__ = ["awe6","core","drivers","ASceneTransition"];
awe6.core.drivers.ASceneTransition.__interfaces__ = [awe6.interfaces.ISceneTransition];
awe6.core.drivers.ASceneTransition.__super__ = awe6.core.Entity;
awe6.core.drivers.ASceneTransition.prototype = $extend(awe6.core.Entity.prototype,{
	_get_progress: function() {
		return this._tools.limit(this._age / this._duration,0,1);
	}
	,getDuration: function(p_asTime) {
		if(p_asTime == null) p_asTime = true;
		return p_asTime?this._duration:this._duration / (1000 / this._kernel.getFramerate());
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.Entity.prototype._updater.call(this,p_deltaTime);
		if(this._age > this._duration) {
			if(this.isDisposed) null; else {
				this.isDisposed = true;
				this._set_isActive(false);
				if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this,true,true,true);
				this._disposer();
				null;
			}
		}
	}
	,_init: function() {
		awe6.core.Entity.prototype._init.call(this);
	}
	,_context: null
	,_duration: null
	,progress: null
	,__class__: awe6.core.drivers.ASceneTransition
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{get_progress:"_get_progress"})
});
awe6.interfaces.ISession = function() { }
$hxClasses["awe6.interfaces.ISession"] = awe6.interfaces.ISession;
awe6.interfaces.ISession.__name__ = ["awe6","interfaces","ISession"];
awe6.interfaces.ISession.prototype = {
	deleteAllSessions: null
	,getSessions: null
	,getSessionIds: null
	,getPercentageComplete: null
	,'delete': null
	,save: null
	,reset: null
	,clone: null
	,isTester: null
	,id: null
	,__class__: awe6.interfaces.ISession
	,__properties__: {get_isTester:"_get_isTester"}
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
	_get_isTester: function() {
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
	,saveCount: null
	,loadCount: null
	,isTester: null
	,id: null
	,_version: null
	,_savedData: null
	,_data: null
	,_tools: null
	,_kernel: null
	,__class__: awe6.core.drivers.ASession
	,__properties__: {get_isTester:"_get_isTester"}
}
awe6.interfaces.IPriority = function() { }
$hxClasses["awe6.interfaces.IPriority"] = awe6.interfaces.IPriority;
awe6.interfaces.IPriority.__name__ = ["awe6","interfaces","IPriority"];
awe6.interfaces.IPriority.prototype = {
	priority: null
	,__class__: awe6.interfaces.IPriority
	,__properties__: {set_priority:"_set_priority",get_priority:"_get_priority"}
}
awe6.interfaces.IView = function() { }
$hxClasses["awe6.interfaces.IView"] = awe6.interfaces.IView;
awe6.interfaces.IView.__name__ = ["awe6","interfaces","IView"];
awe6.interfaces.IView.__interfaces__ = [awe6.interfaces.IUpdateable,awe6.interfaces.IDisposable,awe6.interfaces.IPositionable,awe6.interfaces.IPriority];
awe6.interfaces.IView.prototype = {
	remove: null
	,clear: null
	,removeChild: null
	,addChild: null
	,globalY: null
	,globalX: null
	,isInViewStack: null
	,isVisible: null
	,parent: null
	,owner: null
	,__class__: awe6.interfaces.IView
	,__properties__: {get_parent:"_get_parent",set_isVisible:"_set_isVisible",get_isInViewStack:"_get_isInViewStack"}
}
awe6.core.drivers.AView = function(p_kernel,p_context,p_priority,p_owner) {
	if(p_priority == null) p_priority = 0;
	this.context = p_context;
	this._set_priority(p_priority);
	this.owner = p_owner;
	awe6.core.Process.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.AView"] = awe6.core.drivers.AView;
awe6.core.drivers.AView.__name__ = ["awe6","core","drivers","AView"];
awe6.core.drivers.AView.__interfaces__ = [awe6.interfaces.IView];
awe6.core.drivers.AView.__super__ = awe6.core.Process;
awe6.core.drivers.AView.prototype = $extend(awe6.core.Process.prototype,{
	setPosition: function(p_x,p_y) {
		this._set_x(p_x);
		this._set_y(p_y);
	}
	,_set_y: function(p_value) {
		this.y = p_value;
		this.globalY = this._get_parent() == null?this.y:this.y + this._get_parent().globalY;
		return this.y;
	}
	,_set_x: function(p_value) {
		this.x = p_value;
		this.globalX = this._get_parent() == null?this.x:this.x + this._get_parent().globalX;
		return this.x;
	}
	,_get_isInViewStack: function() {
		if(!this.isVisible) return false;
		if(this.owner == this._kernel) return true;
		if(this._get_parent() == null) return false;
		return this._get_parent()._get_isInViewStack();
	}
	,_get_parent: function() {
		return this.parent;
	}
	,_set_isVisible: function(p_value) {
		if(p_value == this.isVisible) return this.isVisible;
		this.isVisible = p_value;
		if(js.Boot.__instanceof(this._get_parent(),awe6.core.drivers.AView)) {
			var l_parent = this._get_parent();
			if(l_parent != null) l_parent._draw();
		}
		return this.isVisible;
	}
	,_set_priority: function(p_value) {
		if(p_value == this._get_priority()) return this._get_priority();
		this.priority = p_value;
		if(js.Boot.__instanceof(this._get_parent(),awe6.core.drivers.AView)) {
			var l_parent = this._get_parent();
			if(l_parent != null) l_parent._isDirty = true;
		}
		return this._get_priority();
	}
	,_get_priority: function() {
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
		this.globalX = this._get_parent() == null?this.x:this.x + this._get_parent().globalX;
		this.globalY = this._get_parent() == null?this.y:this.y + this._get_parent().globalY;
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
		if(this._get_parent() != null) this._get_parent().removeChild(this);
	}
	,removeChild: function(p_child) {
		if(this.isDisposed || p_child == null) return;
		if(js.Boot.__instanceof(p_child,awe6.core.drivers.AView)) {
			var l_child = p_child;
			if(l_child._get_parent() != this) return;
			HxOverrides.remove(this._children,l_child);
			l_child._setParent(null);
		}
		this._isDirty = true;
	}
	,addChild: function(p_child,p_priority) {
		if(p_priority == null) p_priority = 0;
		if(this.isDisposed || p_child == null) return;
		if(p_child._get_parent() != this) {
			p_child.remove();
			if(js.Boot.__instanceof(p_child,awe6.core.drivers.AView)) {
				var l_child = p_child;
				this._children.push(l_child);
				l_child._setParent(this);
			}
		}
		if(p_priority != 0) p_child._set_priority(p_priority);
		this._isDirty = true;
	}
	,_init: function() {
		awe6.core.Process.prototype._init.call(this);
		this.globalX = 0;
		this.globalY = 0;
		this._set_x(0);
		this._set_y(0);
		this._set_isVisible(true);
		this._isDirty = true;
		this._children = new Array();
	}
	,_children: null
	,_isDirty: null
	,globalY: null
	,globalX: null
	,y: null
	,x: null
	,isInViewStack: null
	,isVisible: null
	,parent: null
	,owner: null
	,priority: null
	,context: null
	,__class__: awe6.core.drivers.AView
	,__properties__: $extend(awe6.core.Process.prototype.__properties__,{set_priority:"_set_priority",get_priority:"_get_priority",get_parent:"_get_parent",set_isVisible:"_set_isVisible",get_isInViewStack:"_get_isInViewStack",set_x:"_set_x",set_y:"_set_y"})
});
awe6.core.drivers.jeash = {}
awe6.core.drivers.jeash.AudioManager = function(p_kernel) {
	awe6.core.drivers.AAudioManager.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.jeash.AudioManager"] = awe6.core.drivers.jeash.AudioManager;
awe6.core.drivers.jeash.AudioManager.__name__ = ["awe6","core","drivers","jeash","AudioManager"];
awe6.core.drivers.jeash.AudioManager.__super__ = awe6.core.drivers.AAudioManager;
awe6.core.drivers.jeash.AudioManager.prototype = $extend(awe6.core.drivers.AAudioManager.prototype,{
	_driverSetIsMute: function(p_value) {
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i._soundChannel == null) continue;
			if(i._soundChannel.nmeAudio == null) continue;
			i._soundChannel.nmeAudio.muted = p_value;
		}
	}
	,_driverSoundFactory: function(p_id,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback) {
		if(p_pan == null) p_pan = 0;
		if(p_volume == null) p_volume = 1;
		if(p_startTime == null) p_startTime = 0;
		if(p_loops == null) p_loops = 1;
		return new awe6.core.drivers.jeash._HelperSound(this._kernel,p_id,this._packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback);
	}
	,__class__: awe6.core.drivers.jeash.AudioManager
});
awe6.core.drivers.jeash._HelperSound = function(p_kernel,p_id,p_packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback) {
	if(p_pan == null) p_pan = 0;
	if(p_volume == null) p_volume = 1;
	if(p_startTime == null) p_startTime = 0;
	if(p_loops == null) p_loops = 1;
	awe6.core.drivers._AHelperSound.call(this,p_kernel,p_id,p_packageId,p_audioChannelType,p_loops,p_startTime,p_volume,p_pan,p_onCompleteCallback);
};
$hxClasses["awe6.core.drivers.jeash._HelperSound"] = awe6.core.drivers.jeash._HelperSound;
awe6.core.drivers.jeash._HelperSound.__name__ = ["awe6","core","drivers","jeash","_HelperSound"];
awe6.core.drivers.jeash._HelperSound.__super__ = awe6.core.drivers._AHelperSound;
awe6.core.drivers.jeash._HelperSound.prototype = $extend(awe6.core.drivers._AHelperSound.prototype,{
	_driverDisposer: function() {
		if(this._soundChannel != null) {
			this.stop();
			this._soundChannel.removeEventListener(browser.events.Event.SOUND_COMPLETE,$bind(this,this._onSoundComplete));
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
		var soundTransform = new browser.media.SoundTransform(this._volume,this._pan);
		this._soundChannel.set_soundTransform(soundTransform);
		this._soundChannel.nmeAudio.volume = this._volume;
	}
	,_driverInit: function() {
		this._sound = this._kernel.assets.getAsset(this.id,this._packageId);
		if(this._sound == null) return this.dispose();
		this._soundChannel = this._sound.play(this._startTime,this._loops);
		if(this._soundChannel == null) return this.dispose();
		this._soundChannel.nmeAudio.muted = this._kernel.audio.isMute;
		this._soundChannel.addEventListener(browser.events.Event.SOUND_COMPLETE,$bind(this,this._onSoundComplete));
		this._driverTransform();
		return;
	}
	,_soundChannel: null
	,_sound: null
	,__class__: awe6.core.drivers.jeash._HelperSound
});
awe6.core.drivers.jeash.Factory = function(p_context,p_isDebug,p_config) {
	awe6.core.drivers.AFactory.call(this,p_context,p_isDebug,p_config);
};
$hxClasses["awe6.core.drivers.jeash.Factory"] = awe6.core.drivers.jeash.Factory;
awe6.core.drivers.jeash.Factory.__name__ = ["awe6","core","drivers","jeash","Factory"];
awe6.core.drivers.jeash.Factory.__super__ = awe6.core.drivers.AFactory;
awe6.core.drivers.jeash.Factory.prototype = $extend(awe6.core.drivers.AFactory.prototype,{
	_driverDisposer: function() {
		if(this._context.parent != null) this._context.parent.removeChild(this._context);
	}
	,_parseXml: function(p_data) {
		this._traverseElements(Xml.parse(p_data).firstElement().elements(),"");
	}
	,_driverInit: function() {
		var l_context = new browser.display.Sprite();
		this._context.addChild(l_context);
		this._context = l_context;
		if(this._config != "") this._parseXml(this._config);
		this._launchKernel();
	}
	,__class__: awe6.core.drivers.jeash.Factory
});
awe6.core.drivers.jeash.InputKeyboard = function(p_kernel) {
	awe6.core.drivers.AInputKeyboard.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.jeash.InputKeyboard"] = awe6.core.drivers.jeash.InputKeyboard;
awe6.core.drivers.jeash.InputKeyboard.__name__ = ["awe6","core","drivers","jeash","InputKeyboard"];
awe6.core.drivers.jeash.InputKeyboard.__super__ = awe6.core.drivers.AInputKeyboard;
awe6.core.drivers.jeash.InputKeyboard.prototype = $extend(awe6.core.drivers.AInputKeyboard.prototype,{
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
		this._stage.removeEventListener(browser.events.KeyboardEvent.KEY_DOWN,$bind(this,this._onKeyDown));
		this._stage.removeEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this._onKeyUp));
		this._stage.removeEventListener(browser.events.Event.DEACTIVATE,$bind(this,this._reset));
		awe6.core.drivers.AInputKeyboard.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		if(this._stage.get_focus() == null || this._stage.get_focus().get_stage() == null) this._stage.set_focus(this._stage);
		awe6.core.drivers.AInputKeyboard.prototype._updater.call(this,p_deltaTime);
	}
	,_driverInit: function() {
		this._stage = browser.Lib.get_current().get_stage();
		this._stage.addEventListener(browser.events.KeyboardEvent.KEY_DOWN,$bind(this,this._onKeyDown));
		this._stage.addEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this._onKeyUp));
		this._stage.addEventListener(browser.events.Event.DEACTIVATE,$bind(this,this._reset));
	}
	,_stage: null
	,__class__: awe6.core.drivers.jeash.InputKeyboard
});
awe6.core.drivers.jeash.InputMouse = function(p_kernel) {
	awe6.core.drivers.AInputMouse.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.jeash.InputMouse"] = awe6.core.drivers.jeash.InputMouse;
awe6.core.drivers.jeash.InputMouse.__name__ = ["awe6","core","drivers","jeash","InputMouse"];
awe6.core.drivers.jeash.InputMouse.__super__ = awe6.core.drivers.AInputMouse;
awe6.core.drivers.jeash.InputMouse.prototype = $extend(awe6.core.drivers.AInputMouse.prototype,{
	_set_cursorType: function(p_value) {
		return awe6.core.drivers.AInputMouse.prototype._set_cursorType.call(this,p_value);
	}
	,_set_isVisible: function(p_value) {
		if(p_value) browser.ui.Mouse.show(); else browser.ui.Mouse.hide();
		return awe6.core.drivers.AInputMouse.prototype._set_isVisible.call(this,p_value);
	}
	,_onMouseWheel: function(p_event) {
		if(!this.isActive) return;
		this.scroll += p_event.delta;
		haxe.Log.trace(this.scroll,{ fileName : "InputMouse.hx", lineNumber : 114, className : "awe6.core.drivers.jeash.InputMouse", methodName : "_onMouseWheel"});
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
		this._stage.removeEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this._stage.removeEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		this._stage.removeEventListener(browser.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onMouseWheel));
		this._stage.removeEventListener(browser.events.Event.DEACTIVATE,$bind(this,this._reset));
		awe6.core.drivers.AInputMouse.prototype._disposer.call(this);
	}
	,_driverInit: function() {
		this._stage = browser.Lib.get_current().get_stage();
		this._stage.addEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this._onMouseDown));
		this._stage.addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this._onMouseUp));
		this._stage.addEventListener(browser.events.MouseEvent.MOUSE_WHEEL,$bind(this,this._onMouseWheel));
		this._stage.addEventListener(browser.events.Event.DEACTIVATE,$bind(this,this._reset));
	}
	,_mouseClicks: null
	,_stage: null
	,__class__: awe6.core.drivers.jeash.InputMouse
});
awe6.core.drivers.jeash.Kernel = function(p_factory,p_context) {
	awe6.core.drivers.AKernel.call(this,p_factory,p_context);
};
$hxClasses["awe6.core.drivers.jeash.Kernel"] = awe6.core.drivers.jeash.Kernel;
awe6.core.drivers.jeash.Kernel.__name__ = ["awe6","core","drivers","jeash","Kernel"];
awe6.core.drivers.jeash.Kernel.__super__ = awe6.core.drivers.AKernel;
awe6.core.drivers.jeash.Kernel.prototype = $extend(awe6.core.drivers.AKernel.prototype,{
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
		browser.Lib.get_current().focusRect = false;
		this._stage.set_frameRate(this.factory.targetFramerate);
		this._stage.scaleMode = browser.display.StageScaleMode.NO_SCALE;
		this._stage.set_quality(browser.display.StageQuality.LOW);
		this._stage.addEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this._onEnterFrame));
	}
	,_driverGetIsLocal: function() {
		return browser.system.Security.sandboxType != browser.system.Security.REMOTE;
	}
	,_stage: null
	,__class__: awe6.core.drivers.jeash.Kernel
});
awe6.core.drivers.jeash.Overlay = function(p_kernel,p_buttonWidth,p_buttonHeight,p_border,p_backUp,p_backOver,p_muteUp,p_muteOver,p_unmuteUp,p_unmuteOver,p_pauseUp,p_pauseOver,p_unpauseUp,p_unpauseOver,p_pauseBlur,p_pauseColor,p_pauseAlpha) {
	awe6.core.drivers.AOverlay.call(this,p_kernel,p_buttonWidth,p_buttonHeight,p_border,p_backUp,p_backOver,p_muteUp,p_muteOver,p_unmuteUp,p_unmuteOver,p_pauseUp,p_pauseOver,p_unpauseUp,p_unpauseOver,p_pauseBlur,p_pauseColor,p_pauseAlpha);
};
$hxClasses["awe6.core.drivers.jeash.Overlay"] = awe6.core.drivers.jeash.Overlay;
awe6.core.drivers.jeash.Overlay.__name__ = ["awe6","core","drivers","jeash","Overlay"];
awe6.core.drivers.jeash.Overlay.__super__ = awe6.core.drivers.AOverlay;
awe6.core.drivers.jeash.Overlay.prototype = $extend(awe6.core.drivers.AOverlay.prototype,{
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
		(js.Boot.__cast(this._borderView , awe6.core.drivers.jeash.View)).context.mouseEnabled = false;
		this._context.mouseEnabled = false;
		this._pauseContext = new browser.display.Sprite();
		this._pauseContext.mouseEnabled = false;
		this._pauseContext.get_graphics().beginFill(this._pauseColor,this._pauseAlpha);
		this._pauseContext.get_graphics().drawRect(0,0,this._kernel.factory.width,this._kernel.factory.height);
		this._flashContext = new browser.display.Sprite();
		this._flashContext.mouseEnabled = false;
	}
	,__class__: awe6.core.drivers.jeash.Overlay
});
awe6.core.drivers.jeash.Preloader = function(p_kernel,p_assets,p_isDecached) {
	awe6.core.drivers.APreloader.call(this,p_kernel,p_assets,p_isDecached);
};
$hxClasses["awe6.core.drivers.jeash.Preloader"] = awe6.core.drivers.jeash.Preloader;
awe6.core.drivers.jeash.Preloader.__name__ = ["awe6","core","drivers","jeash","Preloader"];
awe6.core.drivers.jeash.Preloader.__super__ = awe6.core.drivers.APreloader;
awe6.core.drivers.jeash.Preloader.prototype = $extend(awe6.core.drivers.APreloader.prototype,{
	__class__: awe6.core.drivers.jeash.Preloader
});
awe6.core.drivers.jeash.Profiler = function(p_kernel) {
	awe6.core.drivers.AProfiler.call(this,p_kernel);
};
$hxClasses["awe6.core.drivers.jeash.Profiler"] = awe6.core.drivers.jeash.Profiler;
awe6.core.drivers.jeash.Profiler.__name__ = ["awe6","core","drivers","jeash","Profiler"];
awe6.core.drivers.jeash.Profiler.__super__ = awe6.core.drivers.AProfiler;
awe6.core.drivers.jeash.Profiler.prototype = $extend(awe6.core.drivers.AProfiler.prototype,{
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
		this._bitmapData = new browser.display.BitmapData(this._width,this._height,true,this._backgroundColor);
		var l_bitmap = new browser.display.Bitmap(this._bitmapData);
		l_bitmap.set_y(this._marginHeight);
		this._context.addChild(l_bitmap);
		this._textFormat = new browser.text.TextFormat("_sans",10);
		this._context.get_graphics().beginFill(this._marginColor);
		this._context.get_graphics().drawRect(0,0,this._width,this._marginHeight);
		this._context.get_graphics().endFill();
		this._fpsTextField = new browser.text.TextField();
		this._fpsTextField.set_defaultTextFormat(this._textFormat);
		this._fpsTextField.set_width(this._width);
		this._fpsTextField.selectable = false;
		this._fpsTextField.set_textColor(this._fpsColor);
		this._fpsTextField.set_text(this._fpsLabel + ": 99 / 99");
		this._context.addChild(this._fpsTextField);
	}
	,_memoryTextField: null
	,_fpsTextField: null
	,_textFormat: null
	,_bitmapData: null
	,__class__: awe6.core.drivers.jeash.Profiler
});
awe6.core.drivers.jeash.SceneTransition = function(p_kernel,p_duration) {
	awe6.core.drivers.ASceneTransition.call(this,p_kernel,p_duration);
};
$hxClasses["awe6.core.drivers.jeash.SceneTransition"] = awe6.core.drivers.jeash.SceneTransition;
awe6.core.drivers.jeash.SceneTransition.__name__ = ["awe6","core","drivers","jeash","SceneTransition"];
awe6.core.drivers.jeash.SceneTransition.__super__ = awe6.core.drivers.ASceneTransition;
awe6.core.drivers.jeash.SceneTransition.prototype = $extend(awe6.core.drivers.ASceneTransition.prototype,{
	_init: function() {
		awe6.core.drivers.ASceneTransition.prototype._init.call(this);
		this._kernel.overlay.flash(this._duration,true);
	}
	,__class__: awe6.core.drivers.jeash.SceneTransition
});
awe6.core.drivers.jeash.Session = function(p_kernel,p_id) {
	awe6.core.drivers.ASession.call(this,p_kernel,p_id);
};
$hxClasses["awe6.core.drivers.jeash.Session"] = awe6.core.drivers.jeash.Session;
awe6.core.drivers.jeash.Session.__name__ = ["awe6","core","drivers","jeash","Session"];
awe6.core.drivers.jeash.Session.__super__ = awe6.core.drivers.ASession;
awe6.core.drivers.jeash.Session.prototype = $extend(awe6.core.drivers.ASession.prototype,{
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
	,__class__: awe6.core.drivers.jeash.Session
});
awe6.core.drivers.jeash.View = function(p_kernel,p_context,p_priority,p_owner) {
	awe6.core.drivers.AView.call(this,p_kernel,p_context,p_priority,p_owner);
};
$hxClasses["awe6.core.drivers.jeash.View"] = awe6.core.drivers.jeash.View;
awe6.core.drivers.jeash.View.__name__ = ["awe6","core","drivers","jeash","View"];
awe6.core.drivers.jeash.View.__super__ = awe6.core.drivers.AView;
awe6.core.drivers.jeash.View.prototype = $extend(awe6.core.drivers.AView.prototype,{
	_set_y: function(p_value) {
		this.context.set_y(p_value);
		return awe6.core.drivers.AView.prototype._set_y.call(this,p_value);
	}
	,_set_x: function(p_value) {
		this.context.set_x(p_value);
		return awe6.core.drivers.AView.prototype._set_x.call(this,p_value);
	}
	,_driverDraw: function() {
		if(this._container != null && this._container.parent != null) this._container.parent.removeChild(this._container);
		this._container = new browser.display.Sprite();
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
		if(this.context == null) this.context = new browser.display.Sprite();
		awe6.core.drivers.AView.prototype._init.call(this);
	}
	,_container: null
	,__class__: awe6.core.drivers.jeash.View
});
browser.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.nmeLocked = false;
	this.nmeLeaseNum = 0;
	this.nmeLease = new browser.display.ImageDataLease();
	this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	this._nmeTextureBuffer = js.Lib.document.createElement("canvas");
	this._nmeTextureBuffer.width = width;
	this._nmeTextureBuffer.height = height;
	this._nmeId = browser.utils.Uuid.uuid();
	browser.Lib.nmeSetSurfaceId(this._nmeTextureBuffer,this._nmeId);
	this.nmeTransparent = transparent;
	this.rect = new browser.geom.Rectangle(0,0,width,height);
	if(this.nmeTransparent) {
		this.nmeTransparentFiller = js.Lib.document.createElement("canvas");
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
$hxClasses["browser.display.BitmapData"] = browser.display.BitmapData;
browser.display.BitmapData.__name__ = ["browser","display","BitmapData"];
browser.display.BitmapData.__interfaces__ = [browser.display.IBitmapDrawable];
browser.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new browser.geom.Rectangle(0,0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0));
	var num = (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.data.getUint8(p.position++);
		var red = p.data.getUint8(p.position++);
		var green = p.data.getUint8(p.position++);
		var blue = p.data.getUint8(p.position++);
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
browser.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var type = "";
	if(browser.display.BitmapData.nmeIsPNG(bytes)) type = "image/png"; else if(browser.display.BitmapData.nmeIsJPG(bytes)) type = "image/jpeg"; else throw new browser.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
	var img = js.Lib.document.createElement("img");
	var bitmapData = new browser.display.BitmapData(0,0);
	var canvas = bitmapData._nmeTextureBuffer;
	var drawImage = function(_) {
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img,0,0);
		if(inRawAlpha != null) {
			var pixels = ctx.getImageData(0,0,img.width,img.height);
			var _g1 = 0, _g = inRawAlpha.length;
			while(_g1 < _g) {
				var i = _g1++;
				pixels.data[i * 4 + 3] = inRawAlpha.data.getUint8(inRawAlpha.position++);
			}
			ctx.putImageData(pixels,0,0);
		}
		onload(bitmapData);
	};
	img.addEventListener("load",drawImage,false);
	img.src = "data:" + type + ";base64," + browser.display.BitmapData.nmeBase64Encode(bytes);
}
browser.display.BitmapData.nmeBase64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.data.getUint8(bytes.position++);
		if(bytes.position < bytes.length) by2 = bytes.data.getUint8(bytes.position++);
		if(bytes.position < bytes.length) by3 = bytes.data.getUint8(bytes.position++);
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
browser.display.BitmapData.nmeCreateFromHandle = function(inHandle) {
	var result = new browser.display.BitmapData(0,0);
	result._nmeTextureBuffer = inHandle;
	return result;
}
browser.display.BitmapData.nmeIsJPG = function(bytes) {
	bytes.position = 0;
	if(bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 216 && bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 224) {
		bytes.data.getUint8(bytes.position++);
		bytes.data.getUint8(bytes.position++);
		if(bytes.data.getUint8(bytes.position++) == 74 && bytes.data.getUint8(bytes.position++) == 70 && bytes.data.getUint8(bytes.position++) == 73 && bytes.data.getUint8(bytes.position++) == 70 && bytes.data.getUint8(bytes.position++) == 0) return true;
	}
	return false;
}
browser.display.BitmapData.nmeIsPNG = function(bytes) {
	bytes.position = 0;
	return bytes.data.getUint8(bytes.position++) == 137 && bytes.data.getUint8(bytes.position++) == 80 && bytes.data.getUint8(bytes.position++) == 78 && bytes.data.getUint8(bytes.position++) == 71 && bytes.data.getUint8(bytes.position++) == 13 && bytes.data.getUint8(bytes.position++) == 10 && bytes.data.getUint8(bytes.position++) == 26 && bytes.data.getUint8(bytes.position++) == 10;
}
browser.display.BitmapData.prototype = {
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
		data.bitmapData.rect = new browser.geom.Rectangle(0,0,width,height);
		data.bitmapData.nmeBuildLease();
		if(data.inLoader != null) {
			var e1 = new browser.events.Event(browser.events.Event.COMPLETE);
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
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 1254, className : "browser.display.BitmapData", methodName : "threshold"});
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
				imageData.data[i] = byteArray.data.getUint8(byteArray.position++);
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
				this.nmeImageData.data[pos] = byteArray.data.getUint8(byteArray.position++);
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
		var generator = new browser.display._BitmapData.MinstdGenerator(randomSeed);
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
		var image = js.Lib.document.createElement("img");
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
			if(this.nmeTransparent) {
				var trpCtx = this.nmeTransparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(rect.x,rect.y,rect.width,rect.height);
				ctx.putImageData(trpData,rect.x,rect.y);
			}
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
			ctx.putImageData(this.nmeImageData,0,0,rect.x,rect.y,rect.width,rect.height);
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
			switch(secondObject.__proto__.__class__.__name__[2]) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new browser.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
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
		var byteArray = new browser.utils.ByteArray();
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
		var b5, b6, b7, b8, pow = Math.pow;
		b5 = !this.nmeTransparent?255:data[offset + 3] & 255;
		b6 = data[offset] & 255;
		b7 = data[offset + 1] & 255;
		b8 = data[offset + 2] & 255;
		return parseInt(((b5 >> 7) * pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
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
			if(minX < maxX && minY < maxY) return new browser.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new browser.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
		};
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.nmeImageData.data);
	}
	,floodFill: function(x,y,color) {
		haxe.Log.trace("BitmapData.floodFill not implemented",{ fileName : "BitmapData.hx", lineNumber : 471, className : "browser.display.BitmapData", methodName : "floodFill"});
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
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smothing) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			ctx.drawImage(this._nmeTextureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this._nmeTextureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new browser.geom.Rectangle(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		source.drawToSurface(this._nmeTextureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new browser.geom.Rectangle();
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
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			if(this.nmeTransparent && sourceBitmapData.nmeTransparent) {
				var trpCtx = sourceBitmapData.nmeTransparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
				ctx.putImageData(trpData,destPoint.x,destPoint.y);
			}
			ctx.drawImage(sourceBitmapData._nmeTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.nmeCopyPixelList[this.nmeCopyPixelList.length] = { handle : sourceBitmapData._nmeTextureBuffer, transparentFiller : sourceBitmapData.nmeTransparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
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
		var bitmapData = new browser.display.BitmapData(this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0,this.nmeTransparent);
		var rect = new browser.geom.Rectangle(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
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
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		haxe.Log.trace("BitmapData.applyFilter not implemented",{ fileName : "BitmapData.hx", lineNumber : 91, className : "browser.display.BitmapData", methodName : "applyFilter"});
	}
	,_nmeTextureBuffer: null
	,_nmeId: null
	,nmeTransparentFiller: null
	,nmeTransparent: null
	,nmeLocked: null
	,nmeLeaseNum: null
	,nmeLease: null
	,nmeInitColor: null
	,nmeImageDataChanged: null
	,nmeGLTexture: null
	,nmeImageData: null
	,nmeCopyPixelList: null
	,nmeAssignedBitmaps: null
	,width: null
	,transparent: null
	,rect: null
	,height: null
	,__class__: browser.display.BitmapData
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
	browser.display.BitmapData.call(this,p_width,p_height,p_isTransparent,p_fillColor);
	this._init();
};
$hxClasses["awe6.extras.gui.BitmapDataScale9"] = awe6.extras.gui.BitmapDataScale9;
awe6.extras.gui.BitmapDataScale9.__name__ = ["awe6","extras","gui","BitmapDataScale9"];
awe6.extras.gui.BitmapDataScale9.__super__ = browser.display.BitmapData;
awe6.extras.gui.BitmapDataScale9.prototype = $extend(browser.display.BitmapData.prototype,{
	_init: function() {
		if((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) == this._source.get_width() && (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) == this._source.get_height()) this.copyPixels(this._source,this._source.rect,this._source.rect.get_topLeft()); else {
			var l_isSmoothing = true;
			var l_leftMargin = this._topLeftX;
			var l_rightMargin = this._source.get_width() - this._bottomRightX;
			var l_topMargin = this._topLeftY;
			var l_bottomMargin = this._source.get_height() - this._bottomRightY;
			var l_centerWidth = this._source.get_width() - l_leftMargin - l_rightMargin;
			var l_centerHeight = this._source.get_height() - l_topMargin - l_bottomMargin;
			var l_matrix = new browser.geom.Matrix();
			var l_clipRect;
			l_clipRect = new browser.geom.Rectangle(0,0,l_leftMargin,l_topMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_tx((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - this._source.get_width());
			l_clipRect = new browser.geom.Rectangle((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_rightMargin,0,l_rightMargin,l_topMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_ty((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - this._source.get_height());
			l_clipRect = new browser.geom.Rectangle((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_rightMargin,(this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_bottomMargin,l_rightMargin,l_bottomMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_tx(0);
			l_clipRect = new browser.geom.Rectangle(0,(this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_bottomMargin,l_leftMargin,l_bottomMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.identity();
			l_matrix.a = ((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_leftMargin - l_rightMargin) / l_centerWidth;
			l_matrix.set_tx(l_leftMargin - l_leftMargin * l_matrix.a);
			l_clipRect = new browser.geom.Rectangle(l_leftMargin,0,l_centerWidth * l_matrix.a,l_topMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_ty((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - this._source.get_height());
			l_clipRect = new browser.geom.Rectangle(l_leftMargin,(this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_bottomMargin,l_centerWidth * l_matrix.a,l_bottomMargin);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.d = ((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_topMargin - l_bottomMargin) / l_centerHeight;
			l_matrix.set_ty(l_topMargin - l_topMargin * l_matrix.d);
			l_clipRect = new browser.geom.Rectangle(l_leftMargin,l_topMargin,l_centerWidth * l_matrix.a,l_centerHeight * l_matrix.d);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.identity();
			l_matrix.d = ((this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) - l_topMargin - l_bottomMargin) / l_centerHeight;
			l_matrix.set_ty(l_topMargin - l_topMargin * l_matrix.d);
			l_clipRect = new browser.geom.Rectangle(0,l_topMargin,l_leftMargin,l_centerHeight * l_matrix.d);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
			l_matrix.set_tx((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - this._source.get_width());
			l_clipRect = new browser.geom.Rectangle((this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) - l_rightMargin,l_topMargin,l_rightMargin,l_centerHeight * l_matrix.d);
			this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		}
		this._source.dispose();
	}
	,_bottomRightY: null
	,_bottomRightX: null
	,_topLeftY: null
	,_topLeftX: null
	,_source: null
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
	this._sprite = new browser.display.Sprite();
	if(p_isMasked) {
		var l_mask = new browser.display.Sprite();
		l_mask.get_graphics().beginFill(16711680);
		l_mask.get_graphics().drawRect(0,0,p_width,p_height);
		this._sprite.addChild(l_mask);
		this._sprite.set_mask(l_mask);
	}
	awe6.core.Entity.call(this,p_kernel,null,this._sprite);
};
$hxClasses["awe6.extras.gui.GuiEntity"] = awe6.extras.gui.GuiEntity;
awe6.extras.gui.GuiEntity.__name__ = ["awe6","extras","gui","GuiEntity"];
awe6.extras.gui.GuiEntity.__interfaces__ = [awe6.interfaces.IPositionable];
awe6.extras.gui.GuiEntity.__super__ = awe6.core.Entity;
awe6.extras.gui.GuiEntity.prototype = $extend(awe6.core.Entity.prototype,{
	_set_isFlippedY: function(p_value) {
		if(p_value == this.isFlippedY) return this.isFlippedY;
		this.isFlippedY = p_value;
		var _g = this._sprite;
		_g.set_scaleY(_g.get_scaleY() * -1);
		if(this.isFlippedY) {
			var _g = this;
			_g._set_y(_g.y + this.height);
		} else {
			var _g = this;
			_g._set_y(_g.y - this.height);
		}
		return this.isFlippedY;
	}
	,_set_isFlippedX: function(p_value) {
		if(p_value == this.isFlippedX) return this.isFlippedX;
		this.isFlippedX = p_value;
		var _g = this._sprite;
		_g.set_scaleX(_g.get_scaleX() * -1);
		if(this.isFlippedX) {
			var _g = this;
			_g._set_x(_g.x + this.width);
		} else {
			var _g = this;
			_g._set_x(_g.x - this.width);
		}
		return this.isFlippedX;
	}
	,_set_y: function(p_value) {
		this.y = p_value;
		this._sprite.set_y(this.y);
		return this.y;
	}
	,_set_x: function(p_value) {
		this.x = p_value;
		this._sprite.set_x(this.x);
		return this.x;
	}
	,setPosition: function(p_x,p_y) {
		this._set_x(p_x);
		this._set_y(p_y);
	}
	,_sprite: null
	,isFlippedY: null
	,isFlippedX: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: awe6.extras.gui.GuiEntity
	,__properties__: $extend(awe6.core.Entity.prototype.__properties__,{set_x:"_set_x",set_y:"_set_y",set_isFlippedX:"_set_isFlippedX",set_isFlippedY:"_set_isFlippedY"})
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
	this._set_text(p_text);
};
$hxClasses["awe6.extras.gui.Text"] = awe6.extras.gui.Text;
awe6.extras.gui.Text.__name__ = ["awe6","extras","gui","Text"];
awe6.extras.gui.Text.__super__ = awe6.extras.gui.GuiEntity;
awe6.extras.gui.Text.prototype = $extend(awe6.extras.gui.GuiEntity.prototype,{
	_set_text: function(p_value) {
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
				switch( ($this.textStyle.align)[1] ) {
				case 1:
					$r = browser.text.TextFormatAlign.LEFT;
					break;
				case 2:
					$r = browser.text.TextFormatAlign.CENTER;
					break;
				case 3:
					$r = browser.text.TextFormatAlign.RIGHT;
					break;
				case 0:
					$r = browser.text.TextFormatAlign.JUSTIFY;
					break;
				}
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
				var _g = 0, _g1 = this.textStyle.filters;
				while(_g < _g1.length) {
					var i = _g1[_g];
					++_g;
					if(js.Boot.__instanceof(i,browser.filters.BitmapFilter)) l_filters.push(i);
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
		p_event.stopImmediatePropagation();
	}
	,_disposer: function() {
		this._textField.removeEventListener(browser.events.KeyboardEvent.KEY_DOWN,$bind(this,this._stopEventPropogation));
		this._textField.removeEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this._stopEventPropogation));
		awe6.extras.gui.GuiEntity.prototype._disposer.call(this);
	}
	,_init: function() {
		awe6.extras.gui.GuiEntity.prototype._init.call(this);
		this._textField = new browser.text.TextField();
		this._textField.addEventListener(browser.events.KeyboardEvent.KEY_DOWN,$bind(this,this._stopEventPropogation));
		this._textField.addEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this._stopEventPropogation));
		this._textField.multiline = this._isMultiline;
		this._textField.set_wordWrap(this._isMultiline);
		this._textField.set_type(this._isInput?browser.text.TextFieldType.INPUT:browser.text.TextFieldType.DYNAMIC);
		this._textField.set_wordWrap(true);
		this._textFormat = new browser.text.TextFormat();
		this._draw();
		this._sprite.addChild(this._textField);
		this._sprite.cacheAsBitmap = true;
		this._sprite.mouseEnabled = this._isInput;
		this._sprite.mouseChildren = this._isInput;
		this._isDirty = false;
		this._prevTextStyle = this.textStyle.toString();
	}
	,_prevTextStyle: null
	,_isDirty: null
	,_isInput: null
	,_isMultiline: null
	,_textFormat: null
	,_textField: null
	,textStyle: null
	,text: null
	,__class__: awe6.extras.gui.Text
	,__properties__: $extend(awe6.extras.gui.GuiEntity.prototype.__properties__,{set_text:"_set_text"})
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
awe6.interfaces.EScene = $hxClasses["awe6.interfaces.EScene"] = { __ename__ : ["awe6","interfaces","EScene"], __constructs__ : ["INTRO","SELECT_SESSION","MENU","AVATAR","SHOP","INSTRUCTIONS","SETTINGS","GAME","RESULTS","REWARDS","TEST","SUB_TYPE"] }
awe6.interfaces.EScene.INTRO = ["INTRO",0];
awe6.interfaces.EScene.INTRO.toString = $estr;
awe6.interfaces.EScene.INTRO.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SELECT_SESSION = ["SELECT_SESSION",1];
awe6.interfaces.EScene.SELECT_SESSION.toString = $estr;
awe6.interfaces.EScene.SELECT_SESSION.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.MENU = ["MENU",2];
awe6.interfaces.EScene.MENU.toString = $estr;
awe6.interfaces.EScene.MENU.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.AVATAR = ["AVATAR",3];
awe6.interfaces.EScene.AVATAR.toString = $estr;
awe6.interfaces.EScene.AVATAR.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SHOP = ["SHOP",4];
awe6.interfaces.EScene.SHOP.toString = $estr;
awe6.interfaces.EScene.SHOP.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.INSTRUCTIONS = ["INSTRUCTIONS",5];
awe6.interfaces.EScene.INSTRUCTIONS.toString = $estr;
awe6.interfaces.EScene.INSTRUCTIONS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SETTINGS = ["SETTINGS",6];
awe6.interfaces.EScene.SETTINGS.toString = $estr;
awe6.interfaces.EScene.SETTINGS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.GAME = ["GAME",7];
awe6.interfaces.EScene.GAME.toString = $estr;
awe6.interfaces.EScene.GAME.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.RESULTS = ["RESULTS",8];
awe6.interfaces.EScene.RESULTS.toString = $estr;
awe6.interfaces.EScene.RESULTS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.REWARDS = ["REWARDS",9];
awe6.interfaces.EScene.REWARDS.toString = $estr;
awe6.interfaces.EScene.REWARDS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.TEST = ["TEST",10];
awe6.interfaces.EScene.TEST.toString = $estr;
awe6.interfaces.EScene.TEST.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",11,value]; $x.__enum__ = awe6.interfaces.EScene; $x.toString = $estr; return $x; }
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
browser.Selection = function() { }
$hxClasses["browser.Selection"] = browser.Selection;
browser.Selection.__name__ = ["browser","Selection"];
browser.Selection.prototype = {
	stringifier: null
	,removeAllRanges: null
	,removeRange: null
	,addRange: null
	,getRangeAt: null
	,deleteFromDocument: null
	,selectAllChildren: null
	,collapseToEnd: null
	,collapseToStart: null
	,collapse: null
	,rangeCount: null
	,isCollapsed: null
	,focusOffset: null
	,focusNode: null
	,anchorOffset: null
	,anchorNode: null
	,__class__: browser.Selection
}
browser.MessagePortArray = function() { }
$hxClasses["browser.MessagePortArray"] = browser.MessagePortArray;
browser.MessagePortArray.__name__ = ["browser","MessagePortArray"];
browser.MessagePort = function() { }
$hxClasses["browser.MessagePort"] = browser.MessagePort;
browser.MessagePort.__name__ = ["browser","MessagePort"];
browser.MessagePort.prototype = {
	onmessage: null
	,close: null
	,start: null
	,postMessage: null
	,__class__: browser.MessagePort
}
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
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
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
browser.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["browser.Lib"] = browser.Lib;
browser.Lib.__name__ = ["browser","Lib"];
browser.Lib.__properties__ = {get_window:"get_window",get_document:"get_document",get_current:"get_current"}
browser.Lib.current = null;
browser.Lib.document = null;
browser.Lib.window = null;
browser.Lib.mCurrent = null;
browser.Lib.mForce2DTransform = null;
browser.Lib.mMainClassRoot = null;
browser.Lib.mMe = null;
browser.Lib.mStage = null;
browser.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
browser.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - browser.Lib.starttime) * 1000 | 0;
}
browser.Lib.getURL = function(request,target) {
	if(target == null || target == "_self") js.Lib.document.open(request.url); else switch(target) {
	case "_blank":
		js.Lib.window.open(request.url);
		break;
	case "_parent":
		js.Lib.window.parent.open(request.url);
		break;
	case "_top":
		js.Lib.window.top.open(request.url);
		break;
	}
}
browser.Lib.nmeAppendSurface = function(surface,before,after) {
	if(browser.Lib.mMe.__scr != null) {
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
		var rootNode = browser.Lib.mMe.__scr;
		if(before != null) rootNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) rootNode.insertBefore(surface,after.nextSibling); else rootNode.appendChild(surface);
	}
}
browser.Lib.nmeAppendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Lib.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
browser.Lib.nmeBootstrap = function() {
	if(browser.Lib.mMe == null) {
		var target = js.Lib.document.getElementById("haxe:jeash");
		if(target == null) {
			haxe.Log.trace("Error: Cannot find element ID \"" + "haxe:jeash" + "\"",{ fileName : "Lib.hx", lineNumber : 201, className : "browser.Lib", methodName : "nmeBootstrap"});
			target.id; // throw error;
		}
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) browser.Lib.mForce2DTransform = true;
		}
		browser.Lib.Run(target,browser.Lib.nmeGetWidth(),browser.Lib.nmeGetHeight());
	}
}
browser.Lib.nmeCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
browser.Lib.nmeCreateSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		browser.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-nme-anim") != null) style = js.Lib.document.getElementById(surface.getAttribute("data-nme-anim")); else {
		style = browser.Lib.mMe.__scr.appendChild(js.Lib.document.createElement("style"));
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
browser.Lib.nmeDesignMode = function(mode) {
	js.Lib.document.designMode = mode?"on":"off";
}
browser.Lib.nmeDisableFullScreen = function() {
}
browser.Lib.nmeDisableRightClick = function() {
	if(browser.Lib.mMe != null) try {
		browser.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		browser.Lib.trace("Disable right click not supported in this browser.");
	}
}
browser.Lib.nmeDrawClippedImage = function(surface,tgtCtx,clipRect) {
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
browser.Lib.nmeDrawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
browser.Lib.nmeDrawToSurface = function(surface,tgt,matrix,alpha,clipRect) {
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	if(alpha != 1.0) tgtCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			browser.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else browser.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
	}
}
browser.Lib.nmeEnableFullScreen = function() {
	if(browser.Lib.mMe != null) {
		var origWidth = browser.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = browser.Lib.mMe.__scr.style.getPropertyValue("height");
		browser.Lib.mMe.__scr.style.setProperty("width","100%","");
		browser.Lib.mMe.__scr.style.setProperty("height","100%","");
		browser.Lib.nmeDisableFullScreen = function() {
			browser.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			browser.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
browser.Lib.nmeEnableRightClick = function() {
	if(browser.Lib.mMe != null) try {
		browser.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		browser.Lib.trace("Enable right click not supported in this browser.");
	}
}
browser.Lib.nmeFullScreenHeight = function() {
	return js.Lib.window.innerHeight;
}
browser.Lib.nmeFullScreenWidth = function() {
	return js.Lib.window.innerWidth;
}
browser.Lib.nmeGetHeight = function() {
	var tgt = browser.Lib.mMe != null?browser.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
browser.Lib.nmeGetStage = function() {
	if(browser.Lib.mStage == null) {
		var width = browser.Lib.nmeGetWidth();
		var height = browser.Lib.nmeGetHeight();
		browser.Lib.mStage = new browser.display.Stage(width,height);
	}
	return browser.Lib.mStage;
}
browser.Lib.nmeGetWidth = function() {
	var tgt = browser.Lib.mMe != null?browser.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
browser.Lib.nmeIsOnStage = function(surface) {
	var success = false;
	var nodes = browser.Lib.mMe.__scr.childNodes;
	var _g1 = 0, _g = nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(nodes[i] == surface) {
			success = true;
			break;
		}
	}
	return success;
}
browser.Lib.nmeParseColor = function(str,cb) {
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
browser.Lib.nmeRemoveSurface = function(surface) {
	if(browser.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-nme-anim");
		if(anim != null) {
			var style = js.Lib.document.getElementById(anim);
			if(style != null) browser.Lib.mMe.__scr.removeChild(style);
		}
		browser.Lib.mMe.__scr.removeChild(surface);
	}
	return surface;
}
browser.Lib.nmeSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
browser.Lib.nmeSetSurfaceClipping = function(surface,rect) {
}
browser.Lib.nmeSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
browser.Lib.nmeSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
browser.Lib.nmeSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
browser.Lib.nmeSetSurfaceTransform = function(surface,matrix) {
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
		if(!browser.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
browser.Lib.nmeSetSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1.parentNode == browser.Lib.mMe.__scr && surface2.parentNode == browser.Lib.mMe.__scr) {
		var nextSibling = surface2.nextSibling;
		if(surface1.previousSibling != surface2) {
			var swap = browser.Lib.nmeRemoveSurface(surface1);
			if(nextSibling == null) browser.Lib.mMe.__scr.appendChild(swap); else browser.Lib.mMe.__scr.insertBefore(swap,nextSibling);
		}
	}
}
browser.Lib.nmeSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = browser.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(browser.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(browser.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = browser.Lib.nmeRemoveSurface(browser.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < browser.Lib.mMe.__scr.childNodes.length - 1) browser.Lib.mMe.__scr.insertBefore(swap,browser.Lib.mMe.__scr.childNodes[c2++]); else browser.Lib.mMe.__scr.appendChild(swap);
		swap = browser.Lib.nmeRemoveSurface(browser.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < browser.Lib.mMe.__scr.childNodes.length - 1) browser.Lib.mMe.__scr.insertBefore(swap,browser.Lib.mMe.__scr.childNodes[c1++]); else browser.Lib.mMe.__scr.appendChild(swap);
	}
}
browser.Lib.nmeSetContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
browser.Lib.nmeSetCursor = function(type) {
	if(browser.Lib.mMe != null) browser.Lib.mMe.__scr.style.cursor = (function($this) {
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
browser.Lib.nmeSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
browser.Lib.nmeSetSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
browser.Lib.nmeSetSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
browser.Lib.nmeSetSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
browser.Lib.nmeSetSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Lib.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png",{ }) + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	browser.Lib.nmeCreateSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(browser.Lib.nmeIsOnStage(surface)) {
		browser.Lib.nmeAppendSurface(div);
		browser.Lib.nmeCopyStyle(surface,div);
		browser.Lib.nmeSwapSurface(surface,div);
		browser.Lib.nmeRemoveSurface(surface);
	} else browser.Lib.nmeCopyStyle(surface,div);
	return div;
}
browser.Lib.nmeSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
browser.Lib.nmeSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
browser.Lib.nmeSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
browser.Lib.preventDefaultTouchMove = function() {
	js.Lib.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
browser.Lib.Run = function(tgt,width,height) {
	browser.Lib.mMe = new browser.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") browser.Lib.nmeGetStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	if(Reflect.hasField(tgt,"on" + browser.Lib.HTML_TOUCH_EVENT_TYPES[0])) {
		var _g = 0, _g1 = browser.Lib.HTML_TOUCH_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
		}
	} else {
		var _g = 0, _g1 = browser.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
		}
	}
	var _g = 0, _g1 = browser.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	if(Reflect.hasField(js.Lib.window,"on" + "devicemotion")) js.Lib.window.addEventListener("devicemotion",($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	if(Reflect.hasField(js.Lib.window,"on" + "orientationchange")) js.Lib.window.addEventListener("orientationchange",($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	var _g = 0, _g1 = browser.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Lib.window.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") browser.Lib.nmeGetStage().set_backgroundColor(browser.Lib.nmeParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else browser.Lib.nmeGetStage().set_backgroundColor(16777215);
	browser.Lib.get_current().get_graphics().beginFill(browser.Lib.nmeGetStage().get_backgroundColor());
	browser.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	browser.Lib.nmeSetSurfaceId(browser.Lib.get_current().get_graphics().nmeSurface,"Root MovieClip");
	browser.Lib.nmeGetStage().nmeUpdateNextWake();
	try {
		var winParameters = js.Lib.window.winParameters();
		var _g = 0, _g1 = Reflect.fields(winParameters);
		while(_g < _g1.length) {
			var prop = _g1[_g];
			++_g;
			browser.Lib.get_current().loaderInfo.parameters[prop] = Reflect.field(winParameters,prop);
		}
	} catch( e ) {
	}
	return browser.Lib.mMe;
}
browser.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Lib.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
browser.Lib.trace = function(arg) {
	if(js.Lib.window.console != null) js.Lib.window.console.log(arg);
}
browser.Lib.get_current = function() {
	if(browser.Lib.mMainClassRoot == null) {
		browser.Lib.mMainClassRoot = new browser.display.MovieClip();
		browser.Lib.mCurrent = browser.Lib.mMainClassRoot;
		browser.Lib.nmeGetStage().addChild(browser.Lib.mCurrent);
	}
	return browser.Lib.mMainClassRoot;
}
browser.Lib.get_document = function() {
	return js.Lib.document;
}
browser.Lib.get_window = function() {
	return js.Lib.window;
}
browser.Lib.prototype = {
	__scr: null
	,mKilled: null
	,mArgs: null
	,__class__: browser.Lib
}
browser._Lib = {}
browser._Lib.CursorType = $hxClasses["browser._Lib.CursorType"] = { __ename__ : ["browser","_Lib","CursorType"], __constructs__ : ["Pointer","Text","Default"] }
browser._Lib.CursorType.Pointer = ["Pointer",0];
browser._Lib.CursorType.Pointer.toString = $estr;
browser._Lib.CursorType.Pointer.__enum__ = browser._Lib.CursorType;
browser._Lib.CursorType.Text = ["Text",1];
browser._Lib.CursorType.Text.toString = $estr;
browser._Lib.CursorType.Text.__enum__ = browser._Lib.CursorType;
browser._Lib.CursorType.Default = ["Default",2];
browser._Lib.CursorType.Default.toString = $estr;
browser._Lib.CursorType.Default.__enum__ = browser._Lib.CursorType;
browser.accessibility = {}
browser.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["browser.accessibility.AccessibilityProperties"] = browser.accessibility.AccessibilityProperties;
browser.accessibility.AccessibilityProperties.__name__ = ["browser","accessibility","AccessibilityProperties"];
browser.accessibility.AccessibilityProperties.prototype = {
	silent: null
	,shortcut: null
	,noAutoLabeling: null
	,name: null
	,forceSimple: null
	,description: null
	,__class__: browser.accessibility.AccessibilityProperties
}
browser.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	browser.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.nmeGraphics = new browser.display.Graphics();
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		this.nmeRender();
	}
};
$hxClasses["browser.display.Bitmap"] = browser.display.Bitmap;
browser.display.Bitmap.__name__ = ["browser","display","Bitmap"];
browser.display.Bitmap.__super__ = browser.display.DisplayObject;
browser.display.Bitmap.prototype = $extend(browser.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new browser.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
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
		var imageDataLease = this.bitmapData.nmeLease;
		if(imageDataLease != null && (this.nmeCurrentLease == null || imageDataLease.seed != this.nmeCurrentLease.seed || imageDataLease.time != this.nmeCurrentLease.time)) {
			var srcCanvas = this.bitmapData._nmeTextureBuffer;
			this.nmeGraphics.nmeSurface.width = srcCanvas.width;
			this.nmeGraphics.nmeSurface.height = srcCanvas.height;
			this.nmeGraphics.clear();
			browser.Lib.nmeDrawToSurface(srcCanvas,this.nmeGraphics.nmeSurface);
			this.nmeCurrentLease = imageDataLease.clone();
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(inMask != null) {
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
			browser.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
				browser.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			if(!this.nmeInit) {
				browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,0);
				this.nmeInit = true;
			} else browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() || local.y > this.get_height()) return null; else return this;
		} else return browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
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
	,nmeInit: null
	,nmeCurrentLease: null
	,nmeGraphics: null
	,smoothing: null
	,pixelSnapping: null
	,bitmapData: null
	,__class__: browser.display.Bitmap
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
browser.display.ImageDataLease = function() {
};
$hxClasses["browser.display.ImageDataLease"] = browser.display.ImageDataLease;
browser.display.ImageDataLease.__name__ = ["browser","display","ImageDataLease"];
browser.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new browser.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,time: null
	,seed: null
	,__class__: browser.display.ImageDataLease
}
browser.display._BitmapData = {}
browser.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["browser.display._BitmapData.MinstdGenerator"] = browser.display._BitmapData.MinstdGenerator;
browser.display._BitmapData.MinstdGenerator.__name__ = ["browser","display","_BitmapData","MinstdGenerator"];
browser.display._BitmapData.MinstdGenerator.prototype = {
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
	,value: null
	,__class__: browser.display._BitmapData.MinstdGenerator
}
browser.display.BitmapDataChannel = function() { }
$hxClasses["browser.display.BitmapDataChannel"] = browser.display.BitmapDataChannel;
browser.display.BitmapDataChannel.__name__ = ["browser","display","BitmapDataChannel"];
browser.display.BlendMode = $hxClasses["browser.display.BlendMode"] = { __ename__ : ["browser","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
browser.display.BlendMode.ADD = ["ADD",0];
browser.display.BlendMode.ADD.toString = $estr;
browser.display.BlendMode.ADD.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.ALPHA = ["ALPHA",1];
browser.display.BlendMode.ALPHA.toString = $estr;
browser.display.BlendMode.ALPHA.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.DARKEN = ["DARKEN",2];
browser.display.BlendMode.DARKEN.toString = $estr;
browser.display.BlendMode.DARKEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
browser.display.BlendMode.DIFFERENCE.toString = $estr;
browser.display.BlendMode.DIFFERENCE.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.ERASE = ["ERASE",4];
browser.display.BlendMode.ERASE.toString = $estr;
browser.display.BlendMode.ERASE.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
browser.display.BlendMode.HARDLIGHT.toString = $estr;
browser.display.BlendMode.HARDLIGHT.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.INVERT = ["INVERT",6];
browser.display.BlendMode.INVERT.toString = $estr;
browser.display.BlendMode.INVERT.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.LAYER = ["LAYER",7];
browser.display.BlendMode.LAYER.toString = $estr;
browser.display.BlendMode.LAYER.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
browser.display.BlendMode.LIGHTEN.toString = $estr;
browser.display.BlendMode.LIGHTEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
browser.display.BlendMode.MULTIPLY.toString = $estr;
browser.display.BlendMode.MULTIPLY.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.NORMAL = ["NORMAL",10];
browser.display.BlendMode.NORMAL.toString = $estr;
browser.display.BlendMode.NORMAL.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.OVERLAY = ["OVERLAY",11];
browser.display.BlendMode.OVERLAY.toString = $estr;
browser.display.BlendMode.OVERLAY.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.SCREEN = ["SCREEN",12];
browser.display.BlendMode.SCREEN.toString = $estr;
browser.display.BlendMode.SCREEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
browser.display.BlendMode.SUBTRACT.toString = $estr;
browser.display.BlendMode.SUBTRACT.__enum__ = browser.display.BlendMode;
browser.display.CapsStyle = $hxClasses["browser.display.CapsStyle"] = { __ename__ : ["browser","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
browser.display.CapsStyle.NONE = ["NONE",0];
browser.display.CapsStyle.NONE.toString = $estr;
browser.display.CapsStyle.NONE.__enum__ = browser.display.CapsStyle;
browser.display.CapsStyle.ROUND = ["ROUND",1];
browser.display.CapsStyle.ROUND.toString = $estr;
browser.display.CapsStyle.ROUND.__enum__ = browser.display.CapsStyle;
browser.display.CapsStyle.SQUARE = ["SQUARE",2];
browser.display.CapsStyle.SQUARE.toString = $estr;
browser.display.CapsStyle.SQUARE.__enum__ = browser.display.CapsStyle;
browser.display.GradientType = $hxClasses["browser.display.GradientType"] = { __ename__ : ["browser","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
browser.display.GradientType.RADIAL = ["RADIAL",0];
browser.display.GradientType.RADIAL.toString = $estr;
browser.display.GradientType.RADIAL.__enum__ = browser.display.GradientType;
browser.display.GradientType.LINEAR = ["LINEAR",1];
browser.display.GradientType.LINEAR.toString = $estr;
browser.display.GradientType.LINEAR.__enum__ = browser.display.GradientType;
browser.display.Graphics = function(inSurface) {
	browser.Lib.nmeBootstrap();
	if(inSurface == null) {
		this.nmeSurface = js.Lib.document.createElement("canvas");
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
	this.nmeExtent = new browser.geom.Rectangle();
	this.nmeExtentWithFilters = new browser.geom.Rectangle();
	this._padding = 0.0;
	this.nmeClearNextCycle = true;
};
$hxClasses["browser.display.Graphics"] = browser.display.Graphics;
browser.display.Graphics.__name__ = ["browser","display","Graphics"];
browser.display.Graphics.nmeDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return browser.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?browser.display.PointInPathMode.USER_SPACE:browser.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
browser.display.Graphics.prototype = {
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
				if(js.Boot.__instanceof(filter,browser.filters.DropShadowFilter)) filter.nmeApplyFilter(this.nmeSurface,true);
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
		this.nextDrawIndex = len;
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
				if(useRotation) ctx.rotate(-tileData[index + rotationIndex]);
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
		this.mCurrentLine = new browser.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
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
				var dstCanvas = js.Lib.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				browser.Lib.nmeDrawToSurface(this.nmeSurface,dstCanvas);
				if(browser.Lib.nmeIsOnStage(this.nmeSurface)) {
					browser.Lib.nmeAppendSurface(dstCanvas);
					browser.Lib.nmeCopyStyle(this.nmeSurface,dstCanvas);
					browser.Lib.nmeSwapSurface(this.nmeSurface,dstCanvas);
					browser.Lib.nmeRemoveSurface(this.nmeSurface);
					if(this.nmeSurface.id != null) browser.Lib.nmeSetSurfaceId(dstCanvas,this.nmeSurface.id);
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
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
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
		this.nmeExpandStandardExtent(browser.Lib.get_current().get_stage().get_stageWidth(),browser.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new browser.display.Drawable(null,null,null,null,null,null,new browser.display.TileJob(sheet,tileData,flags)));
		this.nmeChanged = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
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
		var _g = 0;
		while(_g < points.length) {
			var data = points[_g];
			++_g;
			if(data == null) this.mFilling = true; else switch(data.nmeGraphicsDataType) {
			case browser.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.nmeGraphicsFillType) {
				case browser.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case browser.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case browser.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g2 = 0, _g1 = path.commands.length;
				while(_g2 < _g1) {
					var i = _g2++;
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
			case browser.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case browser.display.GraphicsDataType.GRADIENT:
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
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new browser.display.GfxPoint(inX,inY,inCX,inCY,2));
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
			points.push(new browser.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == browser.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == browser.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == browser.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new browser.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new browser.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new browser.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new browser.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new browser.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new browser.geom.Point(0,819.2));
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
				var drawable = new browser.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
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
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new browser.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,_padding: null
	,nmeClearNextCycle: null
	,nmeChanged: null
	,nextDrawIndex: null
	,mSolidGradient: null
	,mPoints: null
	,mPenY: null
	,mPenX: null
	,mLineJobs: null
	,mLineDraws: null
	,mLastMoveID: null
	,mFilling: null
	,mFillAlpha: null
	,mFillColour: null
	,mDrawList: null
	,mCurrentLine: null
	,mBitmap: null
	,nmeSurface: null
	,nmeExtentWithFilters: null
	,nmeExtent: null
	,boundsDirty: null
	,__class__: browser.display.Graphics
}
browser.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["browser.display.Drawable"] = browser.display.Drawable;
browser.display.Drawable.__name__ = ["browser","display","Drawable"];
browser.display.Drawable.prototype = {
	tileJob: null
	,solidGradient: null
	,points: null
	,lineJobs: null
	,fillColour: null
	,fillAlpha: null
	,bitmap: null
	,__class__: browser.display.Drawable
}
browser.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["browser.display.GfxPoint"] = browser.display.GfxPoint;
browser.display.GfxPoint.__name__ = ["browser","display","GfxPoint"];
browser.display.GfxPoint.prototype = {
	y: null
	,x: null
	,type: null
	,cy: null
	,cx: null
	,__class__: browser.display.GfxPoint
}
browser.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["browser.display.Grad"] = browser.display.Grad;
browser.display.Grad.__name__ = ["browser","display","Grad"];
browser.display.Grad.prototype = {
	points: null
	,matrix: null
	,focal: null
	,flags: null
	,__class__: browser.display.Grad
}
browser.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["browser.display.GradPoint"] = browser.display.GradPoint;
browser.display.GradPoint.__name__ = ["browser","display","GradPoint"];
browser.display.GradPoint.prototype = {
	ratio: null
	,col: null
	,alpha: null
	,__class__: browser.display.GradPoint
}
browser.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
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
$hxClasses["browser.display.LineJob"] = browser.display.LineJob;
browser.display.LineJob.__name__ = ["browser","display","LineJob"];
browser.display.LineJob.prototype = {
	thickness: null
	,scale_mode: null
	,point_idx1: null
	,point_idx0: null
	,pixel_hinting: null
	,miter_limit: null
	,joints: null
	,grad: null
	,colour: null
	,caps: null
	,alpha: null
	,__class__: browser.display.LineJob
}
browser.display.PointInPathMode = $hxClasses["browser.display.PointInPathMode"] = { __ename__ : ["browser","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
browser.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
browser.display.PointInPathMode.USER_SPACE.toString = $estr;
browser.display.PointInPathMode.USER_SPACE.__enum__ = browser.display.PointInPathMode;
browser.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
browser.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
browser.display.PointInPathMode.DEVICE_SPACE.__enum__ = browser.display.PointInPathMode;
browser.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["browser.display.TileJob"] = browser.display.TileJob;
browser.display.TileJob.__name__ = ["browser","display","TileJob"];
browser.display.TileJob.prototype = {
	sheet: null
	,flags: null
	,drawList: null
	,__class__: browser.display.TileJob
}
browser.display.IGraphicsFill = function() { }
$hxClasses["browser.display.IGraphicsFill"] = browser.display.IGraphicsFill;
browser.display.IGraphicsFill.__name__ = ["browser","display","IGraphicsFill"];
browser.display.IGraphicsFill.prototype = {
	nmeGraphicsFillType: null
	,__class__: browser.display.IGraphicsFill
}
browser.display.IGraphicsData = function() { }
$hxClasses["browser.display.IGraphicsData"] = browser.display.IGraphicsData;
browser.display.IGraphicsData.__name__ = ["browser","display","IGraphicsData"];
browser.display.IGraphicsData.prototype = {
	nmeGraphicsDataType: null
	,__class__: browser.display.IGraphicsData
}
browser.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.GRADIENT;
	this.nmeGraphicsFillType = browser.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["browser.display.GraphicsGradientFill"] = browser.display.GraphicsGradientFill;
browser.display.GraphicsGradientFill.__name__ = ["browser","display","GraphicsGradientFill"];
browser.display.GraphicsGradientFill.__interfaces__ = [browser.display.IGraphicsFill,browser.display.IGraphicsData];
browser.display.GraphicsGradientFill.prototype = {
	type: null
	,spreadMethod: null
	,ratios: null
	,nmeGraphicsFillType: null
	,nmeGraphicsDataType: null
	,matrix: null
	,interpolationMethod: null
	,focalPointRatio: null
	,colors: null
	,alphas: null
	,__class__: browser.display.GraphicsGradientFill
}
browser.display.IGraphicsPath = function() { }
$hxClasses["browser.display.IGraphicsPath"] = browser.display.IGraphicsPath;
browser.display.IGraphicsPath.__name__ = ["browser","display","IGraphicsPath"];
browser.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.PATH;
};
$hxClasses["browser.display.GraphicsPath"] = browser.display.GraphicsPath;
browser.display.GraphicsPath.__name__ = ["browser","display","GraphicsPath"];
browser.display.GraphicsPath.__interfaces__ = [browser.display.IGraphicsPath,browser.display.IGraphicsData];
browser.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			this.commands.push(1);
			this.data.push(x);
			this.data.push(y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			this.commands.push(2);
			this.data.push(x);
			this.data.push(y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			this.commands.push(3);
			this.data.push(anchorX);
			this.data.push(anchorY);
			this.data.push(controlX);
			this.data.push(controlY);
		}
	}
	,winding: null
	,nmeGraphicsDataType: null
	,data: null
	,commands: null
	,__class__: browser.display.GraphicsPath
}
browser.display.GraphicsPathCommand = function() { }
$hxClasses["browser.display.GraphicsPathCommand"] = browser.display.GraphicsPathCommand;
browser.display.GraphicsPathCommand.__name__ = ["browser","display","GraphicsPathCommand"];
browser.display.GraphicsPathWinding = $hxClasses["browser.display.GraphicsPathWinding"] = { __ename__ : ["browser","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
browser.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
browser.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
browser.display.GraphicsPathWinding.EVEN_ODD.__enum__ = browser.display.GraphicsPathWinding;
browser.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
browser.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
browser.display.GraphicsPathWinding.NON_ZERO.__enum__ = browser.display.GraphicsPathWinding;
browser.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.SOLID;
	this.nmeGraphicsFillType = browser.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["browser.display.GraphicsSolidFill"] = browser.display.GraphicsSolidFill;
browser.display.GraphicsSolidFill.__name__ = ["browser","display","GraphicsSolidFill"];
browser.display.GraphicsSolidFill.__interfaces__ = [browser.display.IGraphicsFill,browser.display.IGraphicsData];
browser.display.GraphicsSolidFill.prototype = {
	nmeGraphicsFillType: null
	,nmeGraphicsDataType: null
	,color: null
	,alpha: null
	,__class__: browser.display.GraphicsSolidFill
}
browser.display.IGraphicsStroke = function() { }
$hxClasses["browser.display.IGraphicsStroke"] = browser.display.IGraphicsStroke;
browser.display.IGraphicsStroke.__name__ = ["browser","display","IGraphicsStroke"];
browser.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
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
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.STROKE;
};
$hxClasses["browser.display.GraphicsStroke"] = browser.display.GraphicsStroke;
browser.display.GraphicsStroke.__name__ = ["browser","display","GraphicsStroke"];
browser.display.GraphicsStroke.__interfaces__ = [browser.display.IGraphicsStroke,browser.display.IGraphicsData];
browser.display.GraphicsStroke.prototype = {
	thickness: null
	,scaleMode: null
	,pixelHinting: null
	,nmeGraphicsDataType: null
	,miterLimit: null
	,joints: null
	,fill: null
	,caps: null
	,__class__: browser.display.GraphicsStroke
}
browser.display.GraphicsDataType = $hxClasses["browser.display.GraphicsDataType"] = { __ename__ : ["browser","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
browser.display.GraphicsDataType.STROKE = ["STROKE",0];
browser.display.GraphicsDataType.STROKE.toString = $estr;
browser.display.GraphicsDataType.STROKE.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.SOLID = ["SOLID",1];
browser.display.GraphicsDataType.SOLID.toString = $estr;
browser.display.GraphicsDataType.SOLID.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
browser.display.GraphicsDataType.GRADIENT.toString = $estr;
browser.display.GraphicsDataType.GRADIENT.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.PATH = ["PATH",3];
browser.display.GraphicsDataType.PATH.toString = $estr;
browser.display.GraphicsDataType.PATH.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsFillType = $hxClasses["browser.display.GraphicsFillType"] = { __ename__ : ["browser","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
browser.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
browser.display.GraphicsFillType.SOLID_FILL.toString = $estr;
browser.display.GraphicsFillType.SOLID_FILL.__enum__ = browser.display.GraphicsFillType;
browser.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
browser.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
browser.display.GraphicsFillType.GRADIENT_FILL.__enum__ = browser.display.GraphicsFillType;
browser.display.InterpolationMethod = $hxClasses["browser.display.InterpolationMethod"] = { __ename__ : ["browser","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
browser.display.InterpolationMethod.RGB = ["RGB",0];
browser.display.InterpolationMethod.RGB.toString = $estr;
browser.display.InterpolationMethod.RGB.__enum__ = browser.display.InterpolationMethod;
browser.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
browser.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
browser.display.InterpolationMethod.LINEAR_RGB.__enum__ = browser.display.InterpolationMethod;
browser.display.JointStyle = $hxClasses["browser.display.JointStyle"] = { __ename__ : ["browser","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
browser.display.JointStyle.MITER = ["MITER",0];
browser.display.JointStyle.MITER.toString = $estr;
browser.display.JointStyle.MITER.__enum__ = browser.display.JointStyle;
browser.display.JointStyle.ROUND = ["ROUND",1];
browser.display.JointStyle.ROUND.toString = $estr;
browser.display.JointStyle.ROUND.__enum__ = browser.display.JointStyle;
browser.display.JointStyle.BEVEL = ["BEVEL",2];
browser.display.JointStyle.BEVEL.toString = $estr;
browser.display.JointStyle.BEVEL.__enum__ = browser.display.JointStyle;
browser.display.LineScaleMode = $hxClasses["browser.display.LineScaleMode"] = { __ename__ : ["browser","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
browser.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
browser.display.LineScaleMode.HORIZONTAL.toString = $estr;
browser.display.LineScaleMode.HORIZONTAL.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.NONE = ["NONE",1];
browser.display.LineScaleMode.NONE.toString = $estr;
browser.display.LineScaleMode.NONE.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.NORMAL = ["NORMAL",2];
browser.display.LineScaleMode.NORMAL.toString = $estr;
browser.display.LineScaleMode.NORMAL.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
browser.display.LineScaleMode.VERTICAL.toString = $estr;
browser.display.LineScaleMode.VERTICAL.__enum__ = browser.display.LineScaleMode;
browser.display.Loader = function() {
	browser.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = browser.display.LoaderInfo.create(this);
};
$hxClasses["browser.display.Loader"] = browser.display.Loader;
browser.display.Loader.__name__ = ["browser","display","Loader"];
browser.display.Loader.__super__ = browser.display.DisplayObjectContainer;
browser.display.Loader.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	handleLoad: function(e) {
		this.content.nmeInvalidateBounds();
		this.content.nmeRender(null,null);
		this.contentLoaderInfo.removeEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.DisplayObjectContainer.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new browser.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
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
			this.contentLoaderInfo.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			browser.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new browser.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				_g.contentLoaderInfo.dispatchEvent(new browser.events.Event(browser.events.Event.COMPLETE));
			});
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 112, className : "browser.display.Loader", methodName : "loadBytes"});
			var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
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
		this.mImage = new browser.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new browser.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 78, className : "browser.display.Loader", methodName : "load"});
			var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new browser.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,mShape: null
	,mImage: null
	,contentLoaderInfo: null
	,content: null
	,__class__: browser.display.Loader
});
browser.display.LoaderInfo = function() {
	browser.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["browser.display.LoaderInfo"] = browser.display.LoaderInfo;
browser.display.LoaderInfo.__name__ = ["browser","display","LoaderInfo"];
browser.display.LoaderInfo.create = function(ldr) {
	var li = new browser.display.LoaderInfo();
	if(ldr != null) li.loader = ldr;
	return li;
}
browser.display.LoaderInfo.__super__ = browser.events.EventDispatcher;
browser.display.LoaderInfo.prototype = $extend(browser.events.EventDispatcher.prototype,{
	width: null
	,url: null
	,sharedEvents: null
	,sameDomain: null
	,parentAllowsChild: null
	,parameters: null
	,loaderURL: null
	,loader: null
	,height: null
	,frameRate: null
	,contentType: null
	,content: null
	,childAllowsParent: null
	,bytesTotal: null
	,bytesLoaded: null
	,bytes: null
	,__class__: browser.display.LoaderInfo
});
browser.display.MovieClip = function() {
	browser.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.loaderInfo = browser.display.LoaderInfo.create(null);
};
$hxClasses["browser.display.MovieClip"] = browser.display.MovieClip;
browser.display.MovieClip.__name__ = ["browser","display","MovieClip"];
browser.display.MovieClip.__super__ = browser.display.Sprite;
browser.display.MovieClip.prototype = $extend(browser.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.mTotalFrames;
	}
	,get_framesLoaded: function() {
		return this.mTotalFrames;
	}
	,get_currentFrame: function() {
		return this.mCurrentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stop: function() {
	}
	,play: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,mTotalFrames: null
	,mCurrentFrame: null
	,totalFrames: null
	,loaderInfo: null
	,framesLoaded: null
	,enabled: null
	,currentFrame: null
	,__class__: browser.display.MovieClip
	,__properties__: $extend(browser.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
browser.display.PixelSnapping = $hxClasses["browser.display.PixelSnapping"] = { __ename__ : ["browser","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
browser.display.PixelSnapping.NEVER = ["NEVER",0];
browser.display.PixelSnapping.NEVER.toString = $estr;
browser.display.PixelSnapping.NEVER.__enum__ = browser.display.PixelSnapping;
browser.display.PixelSnapping.AUTO = ["AUTO",1];
browser.display.PixelSnapping.AUTO.toString = $estr;
browser.display.PixelSnapping.AUTO.__enum__ = browser.display.PixelSnapping;
browser.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
browser.display.PixelSnapping.ALWAYS.toString = $estr;
browser.display.PixelSnapping.ALWAYS.__enum__ = browser.display.PixelSnapping;
browser.display.Shape = function() {
	browser.display.DisplayObject.call(this);
	this.nmeGraphics = new browser.display.Graphics();
};
$hxClasses["browser.display.Shape"] = browser.display.Shape;
browser.display.Shape.__name__ = ["browser","display","Shape"];
browser.display.Shape.__super__ = browser.display.DisplayObject;
browser.display.Shape.prototype = $extend(browser.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.nmeGraphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,nmeGraphics: null
	,graphics: null
	,__class__: browser.display.Shape
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
browser.display.SpreadMethod = $hxClasses["browser.display.SpreadMethod"] = { __ename__ : ["browser","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
browser.display.SpreadMethod.REPEAT = ["REPEAT",0];
browser.display.SpreadMethod.REPEAT.toString = $estr;
browser.display.SpreadMethod.REPEAT.__enum__ = browser.display.SpreadMethod;
browser.display.SpreadMethod.REFLECT = ["REFLECT",1];
browser.display.SpreadMethod.REFLECT.toString = $estr;
browser.display.SpreadMethod.REFLECT.__enum__ = browser.display.SpreadMethod;
browser.display.SpreadMethod.PAD = ["PAD",2];
browser.display.SpreadMethod.PAD.toString = $estr;
browser.display.SpreadMethod.PAD.__enum__ = browser.display.SpreadMethod;
browser.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.nmeIsCancelled = false;
	this.nmeIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = browser.events.EventPhase.AT_TARGET;
};
$hxClasses["browser.events.Event"] = browser.events.Event;
browser.events.Event.__name__ = ["browser","events","Event"];
browser.events.Event.prototype = {
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
		var result = new browser.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,clone: function() {
		return new browser.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,nmeIsCancelledNow: null
	,nmeIsCancelled: null
	,type: null
	,target: null
	,eventPhase: null
	,currentTarget: null
	,cancelable: null
	,bubbles: null
	,__class__: browser.events.Event
}
browser.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
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
	browser.events.Event.call(this,type,bubbles,cancelable);
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
$hxClasses["browser.events.MouseEvent"] = browser.events.MouseEvent;
browser.events.MouseEvent.__name__ = ["browser","events","MouseEvent"];
browser.events.MouseEvent.nmeCreate = function(type,event,local,target) {
	var nmeMouseDown = false;
	var delta = 2;
	if(type == browser.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == browser.events.MouseEvent.MOUSE_DOWN) nmeMouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == browser.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) nmeMouseDown = false; else if(event.button != null) {
				if(event.button == 0) nmeMouseDown = false; else nmeMouseDown = false;
			}
		}
	}
	var pseudoEvent = new browser.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,nmeMouseDown,delta);
	pseudoEvent.stageX = browser.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = browser.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
browser.events.MouseEvent.__super__ = browser.events.Event;
browser.events.MouseEvent.prototype = $extend(browser.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,delta: null
	,ctrlKey: null
	,clickCount: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: browser.events.MouseEvent
});
browser.display.Stage = function(width,height) {
	browser.display.DisplayObjectContainer.call(this);
	this.nmeFocusObject = null;
	this.nmeWindowWidth = width;
	this.nmeWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = browser.display.StageScaleMode.SHOW_ALL;
	this.nmeStageMatrix = new browser.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = browser.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.nmeWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.nmeWindowHeight);
	this.nmePointInPathMode = browser.display.Graphics.nmeDetectIsPointInPathMode();
	this.nmeMouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.nmeTouchInfo = [];
	this.nmeFocusOverObjects = [];
	this.nmeUIEventsQueue = new Array(1000);
	this.nmeUIEventsQueueIndex = 0;
};
$hxClasses["browser.display.Stage"] = browser.display.Stage;
browser.display.Stage.__name__ = ["browser","display","Stage"];
browser.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = browser.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = browser.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = browser.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = browser.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = browser.display.Stage.OrientationPortrait;
	}
	return orientation;
}
browser.display.Stage.__super__ = browser.display.DisplayObjectContainer;
browser.display.Stage.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.nmeWindowWidth;
	}
	,get_stageHeight: function() {
		return this.nmeWindowHeight;
	}
	,get_stage: function() {
		return browser.Lib.nmeGetStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.nmeShowDefaultContextMenu && this.nmeShowDefaultContextMenu != null) {
			if(!showDefaultContextMenu) browser.Lib.nmeDisableRightClick(); else browser.Lib.nmeEnableRightClick();
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
		return this.quality != null?this.quality:browser.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Lib.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Lib.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Lib.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(nmeRequestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) {
			var window = js.Lib.window;
			this.nmeInterval = 1000.0 / speed | 0;
		}
		this.nmeFrameRate = speed;
		this.nmeUpdateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.nmeFrameRate;
	}
	,set_focus: function(inObj) {
		return this.nmeFocusObject = inObj;
	}
	,get_focus: function() {
		return this.nmeFocusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 1:
				browser.Lib.nmeDisableFullScreen();
				break;
			case 0:
				browser.Lib.nmeEnableFullScreen();
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
		var point = new browser.geom.Point(touch.pageX - browser.Lib.mMe.__scr.offsetLeft + window.pageXOffset,touch.pageY - browser.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = browser.events.TouchEvent.nmeCreate(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
			obj.nmeFireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = browser.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = browser.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.nmeDragObject != null) $this.nmeDrag(point);
						$r = browser.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.nmeFireEvent(browser.events.MouseEvent.nmeCreate(mouseType,evt,local,obj));
		} else {
			var evt = browser.events.TouchEvent.nmeCreate(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
		}
	}
	,nmeOnResize: function(inW,inH) {
		this.nmeWindowWidth = inW;
		this.nmeWindowHeight = inH;
		var event = new browser.events.Event(browser.events.Event.RESIZE);
		event.target = this;
		this.nmeBroadcast(event);
	}
	,nmeOnMouse: function(event,type) {
		var point = new browser.geom.Point(event.clientX - browser.Lib.mMe.__scr.offsetLeft + window.pageXOffset,event.clientY - browser.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		if(this.nmeDragObject != null) this.nmeDrag(point);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = browser.events.MouseEvent.nmeCreate(type,event,local,obj);
			this.nmeCheckInOuts(evt,stack);
			if(type == browser.events.MouseEvent.MOUSE_DOWN) this.nmeCheckFocusInOuts(evt,stack);
			obj.nmeFireEvent(evt);
		} else {
			var evt = browser.events.MouseEvent.nmeCreate(type,event,point,null);
			this.nmeCheckInOuts(evt,stack);
			if(type == browser.events.MouseEvent.MOUSE_DOWN) this.nmeCheckFocusInOuts(evt,stack);
		}
	}
	,nmeOnFocus: function(event,hasFocus) {
		if(hasFocus) {
			this.dispatchEvent(new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_IN));
			this.nmeBroadcast(new browser.events.Event(browser.events.Event.ACTIVATE));
		} else {
			this.dispatchEvent(new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_OUT));
			this.nmeBroadcast(new browser.events.Event(browser.events.Event.DEACTIVATE));
		}
	}
	,nmeOnKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var event = new browser.events.KeyboardEvent(pressed?browser.events.KeyboardEvent.KEY_DOWN:browser.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
		this.dispatchEvent(event);
	}
	,nmeHandleOrientationChange: function() {
	}
	,nmeHandleAccelerometer: function(evt) {
		browser.display.Stage.nmeAcceleration.x = evt.accelerationIncludingGravity.x;
		browser.display.Stage.nmeAcceleration.y = evt.accelerationIncludingGravity.y;
		browser.display.Stage.nmeAcceleration.z = evt.accelerationIncludingGravity.z;
	}
	,toString: function() {
		return "[Stage id=" + this._nmeId + "]";
	}
	,nmeUpdateNextWake: function() {
		if(this.nmeFrameRate == 0) {
			var window = js.Lib.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			nmeRequestAnimationFrame($bind(this,this.nmeUpdateNextWake));
			this.nmeStageRender();
		} else {
			var window = js.Lib.window;
			window.clearInterval(this.nmeTimer);
			this.nmeTimer = window.setInterval($bind(this,this.nmeStageRender),this.nmeInterval,[]);
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
			var mouse = new browser.geom.Point(this._mouseX,this._mouseY);
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
			var event = new browser.events.Event(browser.events.Event.ACTIVATE);
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
		var event = new browser.events.Event(browser.events.Event.ENTER_FRAME);
		this.nmeBroadcast(event);
		if(this.nmeInvalid) {
			var event1 = new browser.events.Event(browser.events.Event.RENDER);
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
			this.nmeOnResize(browser.Lib.nmeGetWidth(),browser.Lib.nmeGetHeight());
			break;
		case "focus":
			this.nmeOnFocus(evt,true);
			break;
		case "blur":
			this.nmeOnFocus(evt,false);
			break;
		case "mousemove":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.nmeOnMouse(evt,browser.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.nmeOnMouse(evt,browser.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = browser.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = browser.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new browser.display._Stage.TouchInfo();
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
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
		var changeEvents = touchInfo == null?browser.display.Stage.nmeMouseChanges:browser.display.Stage.nmeTouchChanges;
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
	,nmeCheckFocusInOuts: function(event,inStack) {
		var new_n = inStack.length;
		var new_obj = new_n > 0?inStack[new_n - 1]:null;
		var old_n = this.nmeFocusOverObjects.length;
		var old_obj = old_n > 0?this.nmeFocusOverObjects[old_n - 1]:null;
		if(new_obj != old_obj) {
			var common = 0;
			while(common < new_n && common < old_n && inStack[common] == this.nmeFocusOverObjects[common]) common++;
			var focusOut = new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_OUT,false,false,new_obj,false,0);
			var i = old_n - 1;
			while(i >= common) {
				this.nmeFocusOverObjects[i].dispatchEvent(focusOut);
				i--;
			}
			var focusIn = new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_IN,false,false,old_obj,false,0);
			var i1 = new_n - 1;
			while(i1 >= common) {
				inStack[i1].dispatchEvent(focusIn);
				i1--;
			}
			this.nmeFocusOverObjects = inStack;
			this.set_focus(new_obj);
		}
	}
	,invalidate: function() {
		this.nmeInvalid = true;
	}
	,_mouseY: null
	,_mouseX: null
	,nmeWindowHeight: null
	,nmeWindowWidth: null
	,nmeUIEventsQueueIndex: null
	,nmeUIEventsQueue: null
	,nmeTouchInfo: null
	,nmeTimer: null
	,nmeStageMatrix: null
	,nmeStageActive: null
	,nmeShowDefaultContextMenu: null
	,nmeMouseOverObjects: null
	,nmeInvalid: null
	,nmeInterval: null
	,nmeFrameRate: null
	,nmeFocusOverObjects: null
	,nmeFocusObject: null
	,nmeDragOffsetY: null
	,nmeDragOffsetX: null
	,nmeDragObject: null
	,nmeDragBounds: null
	,nmeBackgroundColour: null
	,stageWidth: null
	,stageHeight: null
	,stageFocusRect: null
	,showDefaultContextMenu: null
	,scaleMode: null
	,quality: null
	,nmePointInPathMode: null
	,loaderInfo: null
	,fullScreenWidth: null
	,fullScreenHeight: null
	,frameRate: null
	,focus: null
	,displayState: null
	,backgroundColor: null
	,align: null
	,__class__: browser.display.Stage
	,__properties__: $extend(browser.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
browser.display._Stage = {}
browser.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["browser.display._Stage.TouchInfo"] = browser.display._Stage.TouchInfo;
browser.display._Stage.TouchInfo.__name__ = ["browser","display","_Stage","TouchInfo"];
browser.display._Stage.TouchInfo.prototype = {
	touchOverObjects: null
	,__class__: browser.display._Stage.TouchInfo
}
browser.display.StageAlign = $hxClasses["browser.display.StageAlign"] = { __ename__ : ["browser","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
browser.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
browser.display.StageAlign.TOP_RIGHT.toString = $estr;
browser.display.StageAlign.TOP_RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
browser.display.StageAlign.TOP_LEFT.toString = $estr;
browser.display.StageAlign.TOP_LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.TOP = ["TOP",2];
browser.display.StageAlign.TOP.toString = $estr;
browser.display.StageAlign.TOP.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.RIGHT = ["RIGHT",3];
browser.display.StageAlign.RIGHT.toString = $estr;
browser.display.StageAlign.RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.LEFT = ["LEFT",4];
browser.display.StageAlign.LEFT.toString = $estr;
browser.display.StageAlign.LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
browser.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
browser.display.StageAlign.BOTTOM_RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
browser.display.StageAlign.BOTTOM_LEFT.toString = $estr;
browser.display.StageAlign.BOTTOM_LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM = ["BOTTOM",7];
browser.display.StageAlign.BOTTOM.toString = $estr;
browser.display.StageAlign.BOTTOM.__enum__ = browser.display.StageAlign;
browser.display.StageDisplayState = $hxClasses["browser.display.StageDisplayState"] = { __ename__ : ["browser","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
browser.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
browser.display.StageDisplayState.FULL_SCREEN.toString = $estr;
browser.display.StageDisplayState.FULL_SCREEN.__enum__ = browser.display.StageDisplayState;
browser.display.StageDisplayState.NORMAL = ["NORMAL",1];
browser.display.StageDisplayState.NORMAL.toString = $estr;
browser.display.StageDisplayState.NORMAL.__enum__ = browser.display.StageDisplayState;
browser.display.StageQuality = function() { }
$hxClasses["browser.display.StageQuality"] = browser.display.StageQuality;
browser.display.StageQuality.__name__ = ["browser","display","StageQuality"];
browser.display.StageScaleMode = $hxClasses["browser.display.StageScaleMode"] = { __ename__ : ["browser","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
browser.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
browser.display.StageScaleMode.SHOW_ALL.toString = $estr;
browser.display.StageScaleMode.SHOW_ALL.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
browser.display.StageScaleMode.NO_SCALE.toString = $estr;
browser.display.StageScaleMode.NO_SCALE.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
browser.display.StageScaleMode.NO_BORDER.toString = $estr;
browser.display.StageScaleMode.NO_BORDER.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
browser.display.StageScaleMode.EXACT_FIT.toString = $estr;
browser.display.StageScaleMode.EXACT_FIT.__enum__ = browser.display.StageScaleMode;
browser.display.Tilesheet = function(image) {
	this.nmeBitmap = image;
	this.nmeCenterPoints = new Array();
	this.nmeTileRects = new Array();
};
$hxClasses["browser.display.Tilesheet"] = browser.display.Tilesheet;
browser.display.Tilesheet.__name__ = ["browser","display","Tilesheet"];
browser.display.Tilesheet.prototype = {
	drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.nmeTileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new browser.geom.Point();
		this.nmeCenterPoints.push(centerPoint);
	}
	,nmeTileRects: null
	,nmeCenterPoints: null
	,nmeBitmap: null
	,__class__: browser.display.Tilesheet
}
browser.errors = {}
browser.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["browser.errors.Error"] = browser.errors.Error;
browser.errors.Error.__name__ = ["browser","errors","Error"];
browser.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.Stack.toString(haxe.Stack.exceptionStack());
	}
	,name: null
	,message: null
	,errorID: null
	,__class__: browser.errors.Error
}
browser.errors.IOError = function(message) {
	if(message == null) message = "";
	browser.errors.Error.call(this,message);
};
$hxClasses["browser.errors.IOError"] = browser.errors.IOError;
browser.errors.IOError.__name__ = ["browser","errors","IOError"];
browser.errors.IOError.__super__ = browser.errors.Error;
browser.errors.IOError.prototype = $extend(browser.errors.Error.prototype,{
	__class__: browser.errors.IOError
});
browser.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = browser.events.Listener.sIDs++;
};
$hxClasses["browser.events.Listener"] = browser.events.Listener;
browser.events.Listener.__name__ = ["browser","events","Listener"];
browser.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,mUseCapture: null
	,mPriority: null
	,mListner: null
	,mID: null
	,__class__: browser.events.Listener
}
browser.events.EventPhase = function() { }
$hxClasses["browser.events.EventPhase"] = browser.events.EventPhase;
browser.events.EventPhase.__name__ = ["browser","events","EventPhase"];
browser.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["browser.events.FocusEvent"] = browser.events.FocusEvent;
browser.events.FocusEvent.__name__ = ["browser","events","FocusEvent"];
browser.events.FocusEvent.__super__ = browser.events.Event;
browser.events.FocusEvent.prototype = $extend(browser.events.Event.prototype,{
	shiftKey: null
	,relatedObject: null
	,keyCode: null
	,__class__: browser.events.FocusEvent
});
browser.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	browser.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["browser.events.HTTPStatusEvent"] = browser.events.HTTPStatusEvent;
browser.events.HTTPStatusEvent.__name__ = ["browser","events","HTTPStatusEvent"];
browser.events.HTTPStatusEvent.__super__ = browser.events.Event;
browser.events.HTTPStatusEvent.prototype = $extend(browser.events.Event.prototype,{
	status: null
	,responseURL: null
	,responseHeaders: null
	,__class__: browser.events.HTTPStatusEvent
});
browser.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["browser.events.IOErrorEvent"] = browser.events.IOErrorEvent;
browser.events.IOErrorEvent.__name__ = ["browser","events","IOErrorEvent"];
browser.events.IOErrorEvent.__super__ = browser.events.Event;
browser.events.IOErrorEvent.prototype = $extend(browser.events.Event.prototype,{
	text: null
	,__class__: browser.events.IOErrorEvent
});
browser.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
};
$hxClasses["browser.events.KeyboardEvent"] = browser.events.KeyboardEvent;
browser.events.KeyboardEvent.__name__ = ["browser","events","KeyboardEvent"];
browser.events.KeyboardEvent.__super__ = browser.events.Event;
browser.events.KeyboardEvent.prototype = $extend(browser.events.Event.prototype,{
	keyLocation: null
	,shiftKey: null
	,ctrlKey: null
	,charCode: null
	,keyCode: null
	,altKey: null
	,__class__: browser.events.KeyboardEvent
});
browser.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["browser.events.ProgressEvent"] = browser.events.ProgressEvent;
browser.events.ProgressEvent.__name__ = ["browser","events","ProgressEvent"];
browser.events.ProgressEvent.__super__ = browser.events.Event;
browser.events.ProgressEvent.prototype = $extend(browser.events.Event.prototype,{
	bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.events.ProgressEvent
});
browser.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
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
	browser.events.Event.call(this,type,bubbles,cancelable);
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
$hxClasses["browser.events.TouchEvent"] = browser.events.TouchEvent;
browser.events.TouchEvent.__name__ = ["browser","events","TouchEvent"];
browser.events.TouchEvent.nmeCreate = function(type,event,touch,local,target) {
	var evt = new browser.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = browser.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = browser.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
browser.events.TouchEvent.__super__ = browser.events.Event;
browser.events.TouchEvent.prototype = $extend(browser.events.Event.prototype,{
	nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,touchPointID: null
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,isPrimaryTouchPoint: null
	,delta: null
	,ctrlKey: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: browser.events.TouchEvent
});
browser.filters = {}
browser.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["browser.filters.BitmapFilter"] = browser.filters.BitmapFilter;
browser.filters.BitmapFilter.__name__ = ["browser","filters","BitmapFilter"];
browser.filters.BitmapFilter.prototype = {
	nmeApplyFilter: function(surface,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,nmePreFilter: function(surface) {
	}
	,clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,_nmeCached: null
	,_mType: null
	,__class__: browser.filters.BitmapFilter
}
browser.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
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
	browser.filters.BitmapFilter.call(this,"DropShadowFilter");
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
$hxClasses["browser.filters.DropShadowFilter"] = browser.filters.DropShadowFilter;
browser.filters.DropShadowFilter.__name__ = ["browser","filters","DropShadowFilter"];
browser.filters.DropShadowFilter.__super__ = browser.filters.BitmapFilter;
browser.filters.DropShadowFilter.prototype = $extend(browser.filters.BitmapFilter.prototype,{
	nmeApplyFilter: function(surface,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this._nmeCached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "#" + StringTools.hex(this.color,6);
			this._nmeCached = true;
		}
	}
	,clone: function() {
		return new browser.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,strength: null
	,quality: null
	,knockout: null
	,inner: null
	,hideObject: null
	,distance: null
	,color: null
	,blurY: null
	,blurX: null
	,angle: null
	,alpha: null
	,__class__: browser.filters.DropShadowFilter
});
browser.filters.GlowFilter = function(in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout) {
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 6.0;
	if(in_blurX == null) in_blurX = 6.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	browser.filters.DropShadowFilter.call(this,0,0,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,false);
};
$hxClasses["browser.filters.GlowFilter"] = browser.filters.GlowFilter;
browser.filters.GlowFilter.__name__ = ["browser","filters","GlowFilter"];
browser.filters.GlowFilter.__super__ = browser.filters.DropShadowFilter;
browser.filters.GlowFilter.prototype = $extend(browser.filters.DropShadowFilter.prototype,{
	__class__: browser.filters.GlowFilter
});
browser.geom = {}
browser.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
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
$hxClasses["browser.geom.ColorTransform"] = browser.geom.ColorTransform;
browser.geom.ColorTransform.__name__ = ["browser","geom","ColorTransform"];
browser.geom.ColorTransform.prototype = {
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
	,redOffset: null
	,redMultiplier: null
	,greenOffset: null
	,greenMultiplier: null
	,color: null
	,blueOffset: null
	,blueMultiplier: null
	,alphaOffset: null
	,alphaMultiplier: null
	,__class__: browser.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
browser.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
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
$hxClasses["browser.geom.Matrix"] = browser.geom.Matrix;
browser.geom.Matrix.__name__ = ["browser","geom","Matrix"];
browser.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new browser.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new browser.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
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
		var m = new browser.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
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
	,_sy: null
	,_sx: null
	,ty: null
	,tx: null
	,d: null
	,c: null
	,b: null
	,a: null
	,__class__: browser.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
browser.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["browser.geom.Point"] = browser.geom.Point;
browser.geom.Point.__name__ = ["browser","geom","Point"];
browser.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
browser.geom.Point.interpolate = function(pt1,pt2,f) {
	return new browser.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
browser.geom.Point.polar = function(len,angle) {
	return new browser.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
browser.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new browser.geom.Point(this.x - v.x,this.y - v.y);
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) this.x = thickness; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new browser.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new browser.geom.Point(v.x + this.x,v.y + this.y);
	}
	,y: null
	,x: null
	,length: null
	,__class__: browser.geom.Point
	,__properties__: {get_length:"get_length"}
}
browser.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["browser.geom.Rectangle"] = browser.geom.Rectangle;
browser.geom.Rectangle.__name__ = ["browser","geom","Rectangle"];
browser.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new browser.geom.Point(this.x,this.y);
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
		return new browser.geom.Point(this.width,this.height);
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
		return new browser.geom.Point(this.x + this.width,this.y + this.height);
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
		return new browser.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
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
		return new browser.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
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
		return this.width == 0 && this.height == 0;
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
		if(x1 <= x0) return new browser.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new browser.geom.Rectangle();
		return new browser.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
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
		return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new browser.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,y: null
	,x: null
	,width: null
	,topLeft: null
	,top: null
	,size: null
	,right: null
	,left: null
	,height: null
	,bottomRight: null
	,bottom: null
	,__class__: browser.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
browser.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new browser.geom.Matrix();
	this._fullMatrix = new browser.geom.Matrix();
	this.set_colorTransform(new browser.geom.ColorTransform());
};
$hxClasses["browser.geom.Transform"] = browser.geom.Transform;
browser.geom.Transform.__name__ = ["browser","geom","Transform"];
browser.geom.Transform.prototype = {
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
	,_matrix: null
	,_fullMatrix: null
	,_displayObject: null
	,pixelBounds: null
	,matrix: null
	,colorTransform: null
	,__class__: browser.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
browser.media = {}
browser.media.Sound = function(stream,context) {
	browser.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.nmeSoundChannels = new IntHash();
	this.nmeSoundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["browser.media.Sound"] = browser.media.Sound;
browser.media.Sound.__name__ = ["browser","media","Sound"];
browser.media.Sound.nmeCanPlayMime = function(mime) {
	var audio = js.Lib.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime));
}
browser.media.Sound.nmeCanPlayType = function(extension) {
	var mime = browser.media.Sound.nmeMimeForExtension(extension);
	if(mime == null) return false;
	return browser.media.Sound.nmeCanPlayMime(mime);
}
browser.media.Sound.nmeMimeForExtension = function(extension) {
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
browser.media.Sound.__super__ = browser.events.EventDispatcher;
browser.media.Sound.prototype = $extend(browser.events.EventDispatcher.prototype,{
	nmeOnSoundLoaded: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new browser.events.Event(browser.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,nmeOnSoundLoadError: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
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
		var channel = browser.media.SoundChannel.nmeCreate(this.nmeStreamUrl,startTime,loops,sndTransform,removeRef);
		this.nmeSoundChannels.set(curIdx,channel);
		this.nmeSoundIdx++;
		var audio = channel.nmeAudio;
		return channel;
	}
	,nmeRemoveEventListeners: function() {
		this.nmeSoundCache.removeEventListener(browser.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded),false);
		this.nmeSoundCache.removeEventListener(browser.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError),false);
	}
	,nmeLoad: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.nmeStreamUrl = stream.url;
		try {
			this.nmeSoundCache = new browser.net.URLLoader();
			this.nmeAddEventListeners();
			this.nmeSoundCache.load(stream);
		} catch( e ) {
		}
	}
	,nmeAddEventListeners: function() {
		this.nmeSoundCache.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded));
		this.nmeSoundCache.addEventListener(browser.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError));
	}
	,load: function(stream,context) {
		this.nmeLoad(stream,context);
	}
	,close: function() {
	}
	,nmeStreamUrl: null
	,nmeSoundIdx: null
	,nmeSoundChannels: null
	,nmeSoundCache: null
	,url: null
	,length: null
	,isBuffering: null
	,id3: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.media.Sound
});
browser.media.SoundChannel = function() {
	browser.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.nmeAudioCurrentLoop = 1;
	this.nmeAudioTotalLoops = 1;
};
$hxClasses["browser.media.SoundChannel"] = browser.media.SoundChannel;
browser.media.SoundChannel.__name__ = ["browser","media","SoundChannel"];
browser.media.SoundChannel.nmeCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new browser.media.SoundChannel();
	channel.nmeAudio = js.Lib.document.createElement("audio");
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
browser.media.SoundChannel.__super__ = browser.events.EventDispatcher;
browser.media.SoundChannel.prototype = $extend(browser.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.nmeAudio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		haxe.Log.trace("sound stalled",{ fileName : "SoundChannel.hx", lineNumber : 170, className : "browser.media.SoundChannel", methodName : "__onStalled"});
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
			var evt1 = new browser.events.Event(browser.events.Event.COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		} else {
			this.nmeAudio.currentTime = this.nmeStartTime;
			this.nmeAudio.play();
		}
	}
	,__onProgress: function(evt) {
		haxe.Log.trace("sound progress: " + Std.string(evt),{ fileName : "SoundChannel.hx", lineNumber : 116, className : "browser.media.SoundChannel", methodName : "__onProgress"});
	}
	,stop: function() {
		if(this.nmeAudio != null) {
			this.nmeAudio.pause();
			this.nmeAudio = null;
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		}
	}
	,nmeStartTime: null
	,nmeRemoveRef: null
	,nmeAudioTotalLoops: null
	,nmeAudioCurrentLoop: null
	,soundTransform: null
	,rightPeak: null
	,position: null
	,nmeAudio: null
	,leftPeak: null
	,ChannelId: null
	,__class__: browser.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
browser.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["browser.media.SoundLoaderContext"] = browser.media.SoundLoaderContext;
browser.media.SoundLoaderContext.__name__ = ["browser","media","SoundLoaderContext"];
browser.media.SoundLoaderContext.prototype = {
	checkPolicyFile: null
	,bufferTime: null
	,__class__: browser.media.SoundLoaderContext
}
browser.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
};
$hxClasses["browser.media.SoundTransform"] = browser.media.SoundTransform;
browser.media.SoundTransform.__name__ = ["browser","media","SoundTransform"];
browser.media.SoundTransform.prototype = {
	volume: null
	,rightToRight: null
	,rightToLeft: null
	,pan: null
	,leftToRight: null
	,leftToLeft: null
	,__class__: browser.media.SoundTransform
}
browser.net = {}
browser.net.URLLoader = function(request) {
	browser.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	if(request != null) this.load(request);
};
$hxClasses["browser.net.URLLoader"] = browser.net.URLLoader;
browser.net.URLLoader.__name__ = ["browser","net","URLLoader"];
browser.net.URLLoader.__super__ = browser.events.EventDispatcher;
browser.net.URLLoader.prototype = $extend(browser.events.EventDispatcher.prototype,{
	onStatus: function(status) {
		var evt = new browser.events.HTTPStatusEvent(browser.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new browser.events.ProgressEvent(browser.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new browser.events.Event(browser.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		switch( (this.dataFormat)[1] ) {
		case 0:
			this.data = browser.utils.ByteArray.nmeOfBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new browser.events.Event(browser.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,browser.utils.ByteArray)) {
			var data1 = data;
			switch( (this.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,browser.net.URLVariables)) {
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
		switch( (this.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g = 0;
		while(_g < requestHeaders.length) {
			var header = requestHeaders[_g];
			++_g;
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
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		switch( (this.dataFormat)[1] ) {
		case 0:
			request.requestHeaders.push(new browser.net.URLRequestHeader("Content-Type","application/octet-stream"));
			break;
		default:
			if(request.method != "GET") request.requestHeaders.push(new browser.net.URLRequestHeader("Content-Type","application/x-www-form-urlencoded"));
		}
		this.requestUrl(request.url,request.method,request.data,request.requestHeaders);
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,dataFormat: null
	,data: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.net.URLLoader
});
browser.net.URLLoaderDataFormat = $hxClasses["browser.net.URLLoaderDataFormat"] = { __ename__ : ["browser","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
browser.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
browser.net.URLLoaderDataFormat.BINARY.toString = $estr;
browser.net.URLLoaderDataFormat.BINARY.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
browser.net.URLLoaderDataFormat.TEXT.toString = $estr;
browser.net.URLLoaderDataFormat.TEXT.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
browser.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
browser.net.URLLoaderDataFormat.VARIABLES.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = browser.net.URLRequestMethod.GET;
	this.contentType = "application/x-www-form-urlencoded";
};
$hxClasses["browser.net.URLRequest"] = browser.net.URLRequest;
browser.net.URLRequest.__name__ = ["browser","net","URLRequest"];
browser.net.URLRequest.prototype = {
	url: null
	,requestHeaders: null
	,method: null
	,data: null
	,contentType: null
	,__class__: browser.net.URLRequest
}
browser.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["browser.net.URLRequestHeader"] = browser.net.URLRequestHeader;
browser.net.URLRequestHeader.__name__ = ["browser","net","URLRequestHeader"];
browser.net.URLRequestHeader.prototype = {
	value: null
	,name: null
	,__class__: browser.net.URLRequestHeader
}
browser.net.URLRequestMethod = function() { }
$hxClasses["browser.net.URLRequestMethod"] = browser.net.URLRequestMethod;
browser.net.URLRequestMethod.__name__ = ["browser","net","URLRequestMethod"];
browser.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["browser.net.URLVariables"] = browser.net.URLVariables;
browser.net.URLVariables.__name__ = ["browser","net","URLVariables"];
browser.net.URLVariables.prototype = {
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
	,__class__: browser.net.URLVariables
}
browser.system = {}
browser.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["browser.system.LoaderContext"] = browser.system.LoaderContext;
browser.system.LoaderContext.__name__ = ["browser","system","LoaderContext"];
browser.system.LoaderContext.prototype = {
	securityDomain: null
	,applicationDomain: null
	,checkPolicyFile: null
	,__class__: browser.system.LoaderContext
}
browser.system.Security = function() { }
$hxClasses["browser.system.Security"] = browser.system.Security;
browser.system.Security.__name__ = ["browser","system","Security"];
browser.system.Security.LOCAL_TRUSTED = null;
browser.system.Security.LOCAL_WITH_FILE = null;
browser.system.Security.LOCAL_WITH_NETWORK = null;
browser.system.Security.REMOTE = null;
browser.system.Security.disableAVM1Loading = null;
browser.system.Security.exactSettings = null;
browser.system.Security.sandboxType = null;
browser.system.Security.allowDomain = function(p1,p2,p3,p4,p5) {
}
browser.system.Security.allowInsecureDomain = function(p1,p2,p3,p4,p5) {
}
browser.system.Security.loadPolicyFile = function(url) {
}
browser.system.System = function() { }
$hxClasses["browser.system.System"] = browser.system.System;
browser.system.System.__name__ = ["browser","system","System"];
browser.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
browser.system.System.totalMemory = null;
browser.system.System.vmVersion = null;
browser.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
}
browser.system.System.gc = function() {
}
browser.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
}
browser.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
}
browser.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
}
browser.system.System.get_totalMemory = function() {
	return 0;
}
browser.system.System.get_vmVersion = function() {
	return "nme - tip";
}
browser.text.FontStyle = $hxClasses["browser.text.FontStyle"] = { __ename__ : ["browser","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
browser.text.FontStyle.REGULAR = ["REGULAR",0];
browser.text.FontStyle.REGULAR.toString = $estr;
browser.text.FontStyle.REGULAR.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.ITALIC = ["ITALIC",1];
browser.text.FontStyle.ITALIC.toString = $estr;
browser.text.FontStyle.ITALIC.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
browser.text.FontStyle.BOLD_ITALIC.toString = $estr;
browser.text.FontStyle.BOLD_ITALIC.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.BOLD = ["BOLD",3];
browser.text.FontStyle.BOLD.toString = $estr;
browser.text.FontStyle.BOLD.__enum__ = browser.text.FontStyle;
browser.text.FontType = $hxClasses["browser.text.FontType"] = { __ename__ : ["browser","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
browser.text.FontType.EMBEDDED = ["EMBEDDED",0];
browser.text.FontType.EMBEDDED.toString = $estr;
browser.text.FontType.EMBEDDED.__enum__ = browser.text.FontType;
browser.text.FontType.DEVICE = ["DEVICE",1];
browser.text.FontType.DEVICE.toString = $estr;
browser.text.FontType.DEVICE.__enum__ = browser.text.FontType;
browser.text.TextField = function() {
	browser.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.nmeGraphics = new browser.display.Graphics();
	this.mFace = browser.text.TextField.mDefaultFont;
	this.mAlign = browser.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.mScrollH = 0;
	this.mScrollV = 1;
	this.mType = browser.text.TextFieldType.DYNAMIC;
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
	this.set_defaultTextFormat(new browser.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
};
$hxClasses["browser.text.TextField"] = browser.text.TextField;
browser.text.TextField.__name__ = ["browser","text","TextField"];
browser.text.TextField.__super__ = browser.display.InteractiveObject;
browser.text.TextField.prototype = $extend(browser.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
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
		this.nmeInputEnabled = this.mType == browser.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.nmeInputEnabled) browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true); else browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,false);
		} else if(this.nmeInputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true);
		}
		this.tabEnabled = this.get_type() == browser.text.TextFieldType.INPUT;
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
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Lib.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new browser.display.Graphics(wrapper);
			var nmeSurface = this.nmeGraphics.nmeSurface;
			if(browser.Lib.nmeIsOnStage(nmeSurface)) {
				browser.Lib.nmeAppendSurface(wrapper);
				browser.Lib.nmeCopyStyle(nmeSurface,wrapper);
				browser.Lib.nmeSwapSurface(nmeSurface,wrapper);
				browser.Lib.nmeRemoveSurface(nmeSurface);
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
				this.mScrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.mScrollH;
				if(insert_x < 0) this.mScrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.mScrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.mScrollH < 0) this.mScrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == browser.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == browser.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.mScrollH;
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
						font = browser.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.nmeGraphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.mScrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = browser.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
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
		var wrap = this.mLimitRenderX = this.wordWrap && !this.nmeInputEnabled?this.mWidth | 0:999999;
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
		switch(this.autoSize) {
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
			if(this.wordWrap) this.set_height(h);
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
			browser.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.nmeGraphics);
				browser.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return browser.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new browser.text.TextFormat();
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
	,_defaultTextFormat: null
	,nmeInputEnabled: null
	,nmeGraphics: null
	,mWidth: null
	,mType: null
	,mTextColour: null
	,mText: null
	,mSelectDrag: null
	,mSelStart: null
	,mSelEnd: null
	,mSelectionAnchored: null
	,mSelectionAnchor: null
	,mScrollV: null
	,mScrollH: null
	,mMaxWidth: null
	,mMaxHeight: null
	,mLineInfo: null
	,mLimitRenderX: null
	,mInsertPos: null
	,mHTMLMode: null
	,mHTMLText: null
	,mHeight: null
	,mAlign: null
	,wordWrap: null
	,type: null
	,textWidth: null
	,textHeight: null
	,textColor: null
	,text: null
	,sharpness: null
	,selectionEndIndex: null
	,selectionBeginIndex: null
	,selectable: null
	,restrict: null
	,multiline: null
	,mTryFreeType: null
	,mTextHeight: null
	,mParagraphs: null
	,mFace: null
	,mDownChar: null
	,maxChars: null
	,length: null
	,htmlText: null
	,gridFitType: null
	,embedFonts: null
	,displayAsPassword: null
	,defaultTextFormat: null
	,caretPos: null
	,caretIndex: null
	,borderColor: null
	,border: null
	,backgroundColor: null
	,background: null
	,autoSize: null
	,antiAliasType: null
	,__class__: browser.text.TextField
	,__properties__: $extend(browser.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap"})
});
browser.text.FontInstanceMode = $hxClasses["browser.text.FontInstanceMode"] = { __ename__ : ["browser","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
browser.text.FontInstanceMode.fimSolid = ["fimSolid",0];
browser.text.FontInstanceMode.fimSolid.toString = $estr;
browser.text.FontInstanceMode.fimSolid.__enum__ = browser.text.FontInstanceMode;
browser.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["browser.text.FontInstance"] = browser.text.FontInstance;
browser.text.FontInstance.__name__ = ["browser","text","FontInstance"];
browser.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = browser.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new browser.text.Font();
	font.nmeSetScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new browser.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	browser.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
browser.text.FontInstance.prototype = {
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
		this.mMode = browser.text.FontInstanceMode.fimSolid;
	}
	,nmeGetAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.nmeGetAdvance(inChar,this.mHeight);
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,mCacheAsBitmap: null
	,mGlyphs: null
	,mHeight: null
	,mFont: null
	,mAlpha: null
	,mColour: null
	,mMode: null
	,mTryFreeType: null
	,height: null
	,__class__: browser.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
browser.text.TextFieldAutoSize = function() {
};
$hxClasses["browser.text.TextFieldAutoSize"] = browser.text.TextFieldAutoSize;
browser.text.TextFieldAutoSize.__name__ = ["browser","text","TextFieldAutoSize"];
browser.text.TextFieldAutoSize.prototype = {
	__class__: browser.text.TextFieldAutoSize
}
browser.text.TextFieldType = function() {
};
$hxClasses["browser.text.TextFieldType"] = browser.text.TextFieldType;
browser.text.TextFieldType.__name__ = ["browser","text","TextFieldType"];
browser.text.TextFieldType.prototype = {
	__class__: browser.text.TextFieldType
}
browser.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
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
$hxClasses["browser.text.TextFormat"] = browser.text.TextFormat;
browser.text.TextFormat.__name__ = ["browser","text","TextFormat"];
browser.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new browser.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
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
	,url: null
	,underline: null
	,target: null
	,tabStops: null
	,size: null
	,rightMargin: null
	,letterSpacing: null
	,leftMargin: null
	,leading: null
	,kerning: null
	,italic: null
	,indent: null
	,font: null
	,display: null
	,color: null
	,bullet: null
	,bold: null
	,blockIndent: null
	,align: null
	,__class__: browser.text.TextFormat
}
browser.text.TextFormatAlign = $hxClasses["browser.text.TextFormatAlign"] = { __ename__ : ["browser","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
browser.text.TextFormatAlign.LEFT = ["LEFT",0];
browser.text.TextFormatAlign.LEFT.toString = $estr;
browser.text.TextFormatAlign.LEFT.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.RIGHT = ["RIGHT",1];
browser.text.TextFormatAlign.RIGHT.toString = $estr;
browser.text.TextFormatAlign.RIGHT.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
browser.text.TextFormatAlign.JUSTIFY.toString = $estr;
browser.text.TextFormatAlign.JUSTIFY.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.CENTER = ["CENTER",3];
browser.text.TextFormatAlign.CENTER.toString = $estr;
browser.text.TextFormatAlign.CENTER.__enum__ = browser.text.TextFormatAlign;
browser.ui = {}
browser.ui.Keyboard = function() { }
$hxClasses["browser.ui.Keyboard"] = browser.ui.Keyboard;
browser.ui.Keyboard.__name__ = ["browser","ui","Keyboard"];
browser.ui.Keyboard.capsLock = null;
browser.ui.Keyboard.numLock = null;
browser.ui.Keyboard.isAccessible = function() {
	return false;
}
browser.ui.Keyboard.nmeConvertMozillaCode = function(code) {
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
browser.ui.Keyboard.nmeConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
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
browser.ui.Mouse = function() {
};
$hxClasses["browser.ui.Mouse"] = browser.ui.Mouse;
browser.ui.Mouse.__name__ = ["browser","ui","Mouse"];
browser.ui.Mouse.hide = function() {
}
browser.ui.Mouse.show = function() {
}
browser.ui.Mouse.prototype = {
	__class__: browser.ui.Mouse
}
browser.utils = {}
browser.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated);
};
$hxClasses["browser.utils.ByteArray"] = browser.utils.ByteArray;
browser.utils.ByteArray.__name__ = ["browser","utils","ByteArray"];
browser.utils.ByteArray.nmeOfBuffer = function(buffer) {
	var bytes = new browser.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
browser.utils.ByteArray.prototype = {
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
		if(offset < 0 || length < 0) throw new browser.errors.IOError("Write error - Out of bounds");
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
		this.data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var c = this.data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = this.data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | this.data.getUint8(this.position++) & 127);
			} else {
				var c2 = this.data.getUint8(this.position++);
				var c3 = this.data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | this.data.getUint8(this.position++) & 127);
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
		return this.data.getUint8(this.position++);
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
			this.data.setInt8(this.position++,bytes.b[i]);
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
		if(offset < 0 || length < 0) throw new browser.errors.IOError("Read error - Out of bounds");
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
		return this.data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.data.getUint8(this.position++) != 0;
	}
	,nmeSet: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeGet: function(pos) {
		return this.data.getUint8(pos);
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
	,littleEndian: null
	,data: null
	,byteView: null
	,allocated: null
	,position: null
	,objectEncoding: null
	,length: null
	,endian: null
	,bytesAvailable: null
	,__class__: browser.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
browser.utils.Endian = function() { }
$hxClasses["browser.utils.Endian"] = browser.utils.Endian;
browser.utils.Endian.__name__ = ["browser","utils","Endian"];
browser.utils.Uuid = function() { }
$hxClasses["browser.utils.Uuid"] = browser.utils.Uuid;
browser.utils.Uuid.__name__ = ["browser","utils","Uuid"];
browser.utils.Uuid.random = function(size) {
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
browser.utils.Uuid.uuid = function() {
	return browser.utils.Uuid.random(8) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(12);
}
var demo = {}
demo.AssetManager = function(p_kernel) {
	awe6.core.AAssetManager.call(this,p_kernel);
};
$hxClasses["demo.AssetManager"] = demo.AssetManager;
demo.AssetManager.__name__ = ["demo","AssetManager"];
demo.AssetManager.__super__ = awe6.core.AAssetManager;
demo.AssetManager.prototype = $extend(awe6.core.AAssetManager.prototype,{
	_createView: function(p_type) {
		var l_context = new browser.display.Sprite();
		var l_bitmap = new browser.display.Bitmap();
		l_context.addChild(l_bitmap);
		switch( (p_type)[1] ) {
		case 0:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/OverlayBackground.png"));
			break;
		case 1:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackUp.png"));
			break;
		case 2:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackOver.png"));
			break;
		case 3:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/MuteUp.png"));
			break;
		case 4:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/MuteOver.png"));
			break;
		case 5:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnmuteUp.png"));
			break;
		case 6:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnmuteOver.png"));
			break;
		case 7:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/PauseUp.png"));
			break;
		case 8:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/PauseOver.png"));
			break;
		case 9:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnpauseUp.png"));
			break;
		case 10:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnpauseOver.png"));
			break;
		case 11:
			l_bitmap.set_bitmapData(nme.installer.Assets.getBitmapData("assets/scenes/Background.png"));
			break;
		}
		return new awe6.core.drivers.jeash.View(this._kernel,l_context);
	}
	,getAsset: function(p_id,p_packageId,p_args) {
		if(p_packageId == null) p_packageId = this._kernel.getConfig("settings.assets.packages.default");
		if(p_packageId == null) p_packageId = this._PACKAGE_ID;
		if(p_packageId == this._kernel.getConfig("settings.assets.packages.audio") || p_packageId == "assets.audio") {
			var l_extension = ".mp3";
			l_extension = browser.media.Sound.nmeCanPlayType("ogg")?".ogg":".mp3";
			p_id += l_extension;
		}
		if(p_packageId.length > 0 && HxOverrides.substr(p_packageId,-1,1) != ".") p_packageId += ".";
		var l_assetName = StringTools.replace(p_packageId,".","/") + p_id;
		var l_result = nme.installer.Assets.getSound(l_assetName);
		if(l_result != null) return l_result;
		var l_result1 = nme.installer.Assets.getBitmapData(l_assetName);
		if(l_result1 != null) return l_result1;
		var l_result2 = nme.installer.Assets.getFont(l_assetName);
		if(l_result2 != null) return l_result2;
		var l_result3 = nme.installer.Assets.getText(l_assetName);
		if(l_result3 != null) return l_result3;
		var l_result4 = nme.installer.Assets.getBytes(l_assetName);
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
		this.buttonUp = nme.installer.Assets.getBitmapData("assets/ButtonUp.png");
		this.buttonOver = nme.installer.Assets.getBitmapData("assets/ButtonOver.png");
		this.sphere = nme.installer.Assets.getBitmapData("assets/Sphere.png");
		this.font = nme.installer.Assets.getFont("assets/fonts/orbitron.ttf");
	}
	,font: null
	,sphere: null
	,buttonOver: null
	,buttonUp: null
	,background: null
	,overlayUnpauseUp: null
	,overlayUnpauseOver: null
	,overlayUnmuteUp: null
	,overlayUnmuteOver: null
	,overlayPauseUp: null
	,overlayPauseOver: null
	,overlayMuteUp: null
	,overlayMuteOver: null
	,overlayBackUp: null
	,overlayBackOver: null
	,overlayBackground: null
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
	awe6.core.drivers.jeash.Factory.call(this,p_context,p_isDebug,p_config);
};
$hxClasses["demo.Factory"] = demo.Factory;
demo.Factory.__name__ = ["demo","Factory"];
demo.Factory.__super__ = awe6.core.drivers.jeash.Factory;
demo.Factory.prototype = $extend(awe6.core.drivers.jeash.Factory.prototype,{
	getNextSceneType: function(p_type) {
		switch( (p_type)[1] ) {
		case 0:
			return awe6.interfaces.EScene.GAME;
		case 7:
			return awe6.interfaces.EScene.RESULTS;
		case 8:
			return awe6.interfaces.EScene.INTRO;
		default:
			null;
		}
		return awe6.core.drivers.jeash.Factory.prototype.getNextSceneType.call(this,p_type);
	}
	,getBackSceneType: function(p_type) {
		switch( (p_type)[1] ) {
		case 0:
			return null;
		case 7:
			return awe6.interfaces.EScene.INTRO;
		case 8:
			return awe6.interfaces.EScene.INTRO;
		default:
			null;
		}
		return awe6.core.drivers.jeash.Factory.prototype.getBackSceneType.call(this,p_type);
	}
	,createTextStyle: function(p_type) {
		if(p_type == null) p_type = awe6.interfaces.ETextStyle.BODY;
		var l_fontName = this._assetManager.font.fontName;
		var l_result = new awe6.core.TextStyle(l_fontName,12,16777215,false,false,awe6.interfaces.ETextAlign.CENTER,0,0,0,[new browser.filters.GlowFilter(131970,1,4,4,5,2)]);
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
		case 7:
			return new demo.scenes.Game(this._kernel,p_type);
		case 8:
			return new demo.scenes.Results(this._kernel,p_type);
		default:
			null;
		}
		return awe6.core.drivers.jeash.Factory.prototype.createScene.call(this,p_type);
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
			this.version = "0.6.380";
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
	,_assetManager: null
	,__class__: demo.Factory
});
demo.Preloader = function(p_kernel,p_assets,p_isDecached) {
	awe6.core.drivers.jeash.Preloader.call(this,p_kernel,p_assets,p_isDecached);
};
$hxClasses["demo.Preloader"] = demo.Preloader;
demo.Preloader.__name__ = ["demo","Preloader"];
demo.Preloader.__super__ = awe6.core.drivers.jeash.Preloader;
demo.Preloader.prototype = $extend(awe6.core.drivers.jeash.Preloader.prototype,{
	__class__: demo.Preloader
});
demo.Session = function(p_kernel,p_id) {
	awe6.core.drivers.jeash.Session.call(this,p_kernel,p_id);
};
$hxClasses["demo.Session"] = demo.Session;
demo.Session.__name__ = ["demo","Session"];
demo.Session.__super__ = awe6.core.drivers.jeash.Session;
demo.Session.prototype = $extend(awe6.core.drivers.jeash.Session.prototype,{
	getPercentageComplete: function() {
		return this._tools.limit(100 * this.highScore / 1000 | 0,0,100);
	}
	,_resetter: function() {
		awe6.core.drivers.jeash.Session.prototype._resetter.call(this);
		this.name = "???";
		this.highScore = 0;
	}
	,_setter: function() {
		awe6.core.drivers.jeash.Session.prototype._setter.call(this);
		this._data.name = this.name;
		this._data.highScore = this.highScore;
	}
	,_getter: function() {
		awe6.core.drivers.jeash.Session.prototype._getter.call(this);
		this.name = this._data.name;
		this.highScore = this._data.highScore;
	}
	,_init: function() {
		this._version = 1;
		awe6.core.drivers.jeash.Session.prototype._init.call(this);
	}
	,isWin: null
	,highScore: null
	,name: null
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
	,_height2: null
	,_width2: null
	,_height: null
	,_width: null
	,vy: null
	,vx: null
	,y: null
	,x: null
	,__class__: demo.entities.Bouncer
});
demo.entities.Sphere = function(p_kernel) {
	this._sprite = new browser.display.Sprite();
	this._sprite.mouseEnabled = false;
	this._assetManager = p_kernel.assets;
	awe6.core.Entity.call(this,p_kernel,null,this._sprite);
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
		this._sprite.set_x(this._bouncer.x);
		this._sprite.set_y(this._bouncer.y);
		this._sprite.set_scaleX(this._bouncer.vx > 1?1.001:-1);
		this._get_view()._set_priority(this._bouncer.y | 0);
		if(this._isHit()) {
			this._kernel.audio.start("Sfx" + (Std.random(4) + 1),awe6.interfaces.EAudioChannel.EFFECTS,0,0,1,this._bouncer.x / this._kernel.factory.width);
			this._kernel.overlay.flash(100,true,1,Std.random(16777215));
			if(this.isDisposed) null; else {
				this.isDisposed = true;
				this._set_isActive(false);
				if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this,true,true,true);
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
		var l_bitmapData = new browser.display.BitmapData(this._width | 0,this._height * 1.5 | 0,true,0);
		var l_matrix = new browser.geom.Matrix();
		l_matrix.scale(l_scale,l_scale);
		l_bitmapData.draw(l_source,l_matrix,null,null,null,true);
		var l_sphere = new browser.display.Bitmap(l_bitmapData);
		l_sphere.smoothing = true;
		l_sphere.set_x(-this._width2);
		l_sphere.set_y(-this._height2);
		this._sprite.addChild(l_sphere);
	}
	,_bouncer: null
	,_height2: null
	,_width2: null
	,_height: null
	,_width: null
	,_sprite: null
	,_assetManager: null
	,__class__: demo.entities.Sphere
});
demo.gui = {}
demo.gui.Button = function(p_kernel,p_key,p_x,p_y,p_onClick,p_onRollOver,p_onRollOut,p_label) {
	if(p_y == null) p_y = 0;
	if(p_x == null) p_x = 0;
	this._assetManager = p_kernel.assets;
	this.label = p_label;
	this._upContext = new browser.display.Sprite();
	this._overContext = new browser.display.Sprite();
	this._upView = new awe6.core.drivers.jeash.View(p_kernel,this._upContext);
	this._overView = new awe6.core.drivers.jeash.View(p_kernel,this._overContext);
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
		var l_result = new browser.display.Sprite();
		l_result.addChild(new browser.display.Bitmap(p_isOver?this._assetManager.buttonOver:this._assetManager.buttonUp));
		var l_text = new awe6.extras.gui.Text(this._kernel,this.width - 2 * this._marginWidth,this.height - 2 * this._marginHeight,this.label,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.BUTTON));
		l_text.setPosition(this._marginWidth,this._marginHeight);
		l_result.addChild(l_text._sprite);
		return l_result;
	}
	,_init: function() {
		awe6.core.BasicButton.prototype._init.call(this);
		this._marginWidth = 10;
		this._marginHeight = 12;
		this._upContext.addChild(this._createButtonState(false));
		this._overContext.addChild(this._createButtonState(true));
	}
	,_overContext: null
	,_upContext: null
	,_overView: null
	,_upView: null
	,_marginHeight: null
	,_marginWidth: null
	,_assetManager: null
	,label: null
	,__class__: demo.gui.Button
});
demo.gui.Overlay = function(p_kernel) {
	this._assetManager = js.Boot.__cast(p_kernel.assets , demo.AssetManager);
	this._buttonSize = 30;
	awe6.core.drivers.jeash.Overlay.call(this,p_kernel,this._buttonSize,this._buttonSize,this._assetManager.overlayBackground,this._assetManager.overlayBackUp,this._assetManager.overlayBackOver,this._assetManager.overlayMuteUp,this._assetManager.overlayMuteOver,this._assetManager.overlayUnmuteUp,this._assetManager.overlayUnmuteOver,this._assetManager.overlayPauseUp,this._assetManager.overlayPauseOver,this._assetManager.overlayUnpauseUp,this._assetManager.overlayUnpauseOver);
};
$hxClasses["demo.gui.Overlay"] = demo.gui.Overlay;
demo.gui.Overlay.__name__ = ["demo","gui","Overlay"];
demo.gui.Overlay.__super__ = awe6.core.drivers.jeash.Overlay;
demo.gui.Overlay.prototype = $extend(awe6.core.drivers.jeash.Overlay.prototype,{
	activateButton: function(p_type) {
		var $e = (p_type);
		switch( $e[1] ) {
		case 5:
			var value = $e[2];
			switch(value) {
			}
			break;
		default:
			null;
		}
		awe6.core.drivers.jeash.Overlay.prototype.activateButton.call(this,p_type);
	}
	,hideButtons: function() {
		awe6.core.drivers.jeash.Overlay.prototype.hideButtons.call(this);
	}
	,_getButton: function(p_type) {
		return (function($this) {
			var $r;
			var $e = (p_type);
			switch( $e[1] ) {
			case 5:
				var value = $e[2];
				$r = (function($this) {
					var $r;
					switch(value) {
					}
					return $r;
				}($this));
				break;
			default:
				$r = awe6.core.drivers.jeash.Overlay.prototype._getButton.call($this,p_type);
			}
			return $r;
		}(this));
	}
	,_init: function() {
		awe6.core.drivers.jeash.Overlay.prototype._init.call(this);
		var l_x = this._kernel.factory.width - 10 - 3 * this._buttonSize;
		var l_y = this._kernel.factory.height - this._buttonSize;
		this.positionButton(awe6.interfaces.EOverlayButton.BACK,l_x,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.PAUSE,l_x += this._buttonSize,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.UNPAUSE,l_x,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.MUTE,l_x += this._buttonSize,l_y);
		this.positionButton(awe6.interfaces.EOverlayButton.UNMUTE,l_x,l_y);
	}
	,_buttonSize: null
	,_assetManager: null
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
		this._session = js.Boot.__cast(this._kernel._get_session() , demo.Session);
		var l_sceneType = this._tools.toCamelCase(Std.string(this.type));
		var l_titleText = this._kernel.getConfig("gui.scenes." + l_sceneType + ".title");
		if(l_titleText != null) {
			this._title = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,l_titleText,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.HEADLINE));
			this._title._set_y(40);
			this.addEntity(this._title,null,true,100);
		}
		this._get_view().addChild(this._assetManager.background,0);
		this._kernel.audio.start("MusicMenu",awe6.interfaces.EAudioChannel.MUSIC,-1,0,.125,0,true);
	}
	,_isMusic: null
	,_title: null
	,_session: null
	,_assetManager: null
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
		this._timer._set_text(this._tools.convertAgeToFormattedTime(this._age));
		var l_spheres = this.getEntitiesByClass(demo.entities.Sphere);
		if(l_spheres == null || l_spheres.length == 0) this._gameOver();
	}
	,handleSphereDispose: function(p_message,p_entity) {
		return true;
	}
	,_init: function() {
		demo.scenes.AScene.prototype._init.call(this);
		this.isPauseable = true;
		this._session.isWin = false;
		var l_textStyle = this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD);
		l_textStyle.filters = [];
		l_textStyle.color = 131970;
		this._timer = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,Std.string(this._tools.convertAgeToFormattedTime(0)),l_textStyle);
		this._timer._set_y(70);
		this.addEntity(this._timer,null,true,1000);
		this._kernel.audio.stop("MusicMenu",awe6.interfaces.EAudioChannel.MUSIC);
		this._kernel.audio.start("MusicGame",awe6.interfaces.EAudioChannel.MUSIC,-1,0,.5,0,true);
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			this.addEntity(new demo.entities.Sphere(this._kernel),null,true,i + 10);
		}
		this._kernel.messenger.addSubscriber(this._entity,awe6.interfaces.EMessage.INIT,$bind(this,this.handleSphereDispose),null,demo.entities.Sphere);
		this._kernel.messenger.addSubscriber(this._entity,awe6.interfaces.EMessage.DISPOSE,$bind(this,this.handleSphereDispose),null,demo.entities.Sphere);
	}
	,_score: null
	,_timer: null
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
		if(this._kernel.inputs.keyboard.getIsKeyRelease(awe6.interfaces.EKey.F)) this._kernel._set_isFullScreen(!this._kernel.isFullScreen);
	}
	,_init: function() {
		demo.scenes.AScene.prototype._init.call(this);
		this._kernel._set_session(this._kernel.factory.createSession("Basic"));
		var l_result = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,this._kernel.getConfig("gui.scenes.intro.instructions"),this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD));
		l_result._set_y(70);
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
		l_result._set_y(70);
		this.addEntity(l_result,null,true,2);
	}
	,__class__: demo.scenes.Results
});
demo.scenes.SceneTransition = function(p_kernel) {
	var l_duration = 500;
	awe6.core.drivers.jeash.SceneTransition.call(this,p_kernel,l_duration);
};
$hxClasses["demo.scenes.SceneTransition"] = demo.scenes.SceneTransition;
demo.scenes.SceneTransition.__name__ = ["demo","scenes","SceneTransition"];
demo.scenes.SceneTransition.__super__ = awe6.core.drivers.jeash.SceneTransition;
demo.scenes.SceneTransition.prototype = $extend(awe6.core.drivers.jeash.SceneTransition.prototype,{
	_disposer: function() {
		awe6.core.drivers.jeash.SceneTransition.prototype._disposer.call(this);
	}
	,_updater: function(p_deltaTime) {
		if(p_deltaTime == null) p_deltaTime = 0;
		awe6.core.drivers.jeash.SceneTransition.prototype._updater.call(this,p_deltaTime);
	}
	,_init: function() {
		awe6.core.drivers.jeash.SceneTransition.prototype._init.call(this);
	}
	,__class__: demo.scenes.SceneTransition
});
var format = {}
format.display = {}
format.display.FrameLabel = function(frame,name) {
	this.frame = frame;
	this.name = name;
};
$hxClasses["format.display.FrameLabel"] = format.display.FrameLabel;
format.display.FrameLabel.__name__ = ["format","display","FrameLabel"];
format.display.FrameLabel.prototype = {
	name: null
	,frame: null
	,__class__: format.display.FrameLabel
}
format.display.MovieClip = function() {
	browser.display.Sprite.call(this);
};
$hxClasses["format.display.MovieClip"] = format.display.MovieClip;
format.display.MovieClip.__name__ = ["format","display","MovieClip"];
format.display.MovieClip.__super__ = browser.display.Sprite;
format.display.MovieClip.prototype = $extend(browser.display.Sprite.prototype,{
	unflatten: function() {
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
	}
	,gotoAndPlay: function(frame,scene) {
	}
	,flatten: function() {
	}
	,trackAsMenu: null
	,totalFrames: null
	,framesLoaded: null
	,enabled: null
	,currentLabels: null
	,currentLabel: null
	,currentFrameLabel: null
	,currentFrame: null
	,__class__: format.display.MovieClip
});
haxe.FastCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
$hxClasses["haxe.FastCell"] = haxe.FastCell;
haxe.FastCell.__name__ = ["haxe","FastCell"];
haxe.FastCell.prototype = {
	next: null
	,elt: null
	,__class__: haxe.FastCell
}
haxe.FastList = function() {
};
$hxClasses["haxe.FastList"] = haxe.FastList;
haxe.FastList.__name__ = ["haxe","FastList"];
haxe.FastList.prototype = {
	toString: function() {
		var a = new Array();
		var l = this.head;
		while(l != null) {
			a.push(l.elt);
			l = l.next;
		}
		return "{" + a.join(",") + "}";
	}
	,iterator: function() {
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
	,isEmpty: function() {
		return this.head == null;
	}
	,pop: function() {
		var k = this.head;
		if(k == null) return null; else {
			this.head = k.next;
			return k.elt;
		}
	}
	,first: function() {
		return this.head == null?null:this.head.elt;
	}
	,add: function(item) {
		this.head = new haxe.FastCell(item,this.head);
	}
	,head: null
	,__class__: haxe.FastList
}
haxe.Int32 = function() { }
$hxClasses["haxe.Int32"] = haxe.Int32;
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return a << 16 | b;
}
haxe.Int32.ofInt = function(x) {
	return x | 0;
}
haxe.Int32.clamp = function(x) {
	return x | 0;
}
haxe.Int32.toInt = function(x) {
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + Std.string(x);
	return x;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return a + b | 0;
}
haxe.Int32.sub = function(a,b) {
	return a - b | 0;
}
haxe.Int32.mul = function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
}
haxe.Int32.div = function(a,b) {
	return a / b | 0;
}
haxe.Int32.mod = function(a,b) {
	return a % b;
}
haxe.Int32.shl = function(a,b) {
	return a << b;
}
haxe.Int32.shr = function(a,b) {
	return a >> b;
}
haxe.Int32.ushr = function(a,b) {
	return a >>> b;
}
haxe.Int32.and = function(a,b) {
	return a & b;
}
haxe.Int32.or = function(a,b) {
	return a | b;
}
haxe.Int32.xor = function(a,b) {
	return a ^ b;
}
haxe.Int32.neg = function(a) {
	return -a;
}
haxe.Int32.isNeg = function(a) {
	return a < 0;
}
haxe.Int32.isZero = function(a) {
	return a == 0;
}
haxe.Int32.complement = function(a) {
	return ~a;
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.ucompare = function(a,b) {
	if(a < 0) return b < 0?~b - ~a:1;
	return b < 0?-1:a - b;
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
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
haxe.Resource.getBytes = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new Hash();
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
	serializeException: function(e) {
		this.buf.b += Std.string("x");
		this.serialize(e);
	}
	,serialize: function(v) {
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			this.buf.b += Std.string("n");
			break;
		case 1:
			if(v == 0) {
				this.buf.b += Std.string("z");
				return;
			}
			this.buf.b += Std.string("i");
			this.buf.b += Std.string(v);
			break;
		case 2:
			if(Math.isNaN(v)) this.buf.b += Std.string("k"); else if(!Math.isFinite(v)) this.buf.b += Std.string(v < 0?"m":"p"); else {
				this.buf.b += Std.string("d");
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
				this.buf.b += Std.string("a");
				var l = v.length;
				var _g = 0;
				while(_g < l) {
					var i = _g++;
					if(v[i] == null) ucount++; else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += Std.string("n"); else {
								this.buf.b += Std.string("u");
								this.buf.b += Std.string(ucount);
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) this.buf.b += Std.string("n"); else {
						this.buf.b += Std.string("u");
						this.buf.b += Std.string(ucount);
					}
				}
				this.buf.b += Std.string("h");
				break;
			case List:
				this.buf.b += Std.string("l");
				var v1 = v;
				var $it0 = v1.iterator();
				while( $it0.hasNext() ) {
					var i = $it0.next();
					this.serialize(i);
				}
				this.buf.b += Std.string("h");
				break;
			case Date:
				var d = v;
				this.buf.b += Std.string("v");
				this.buf.b += Std.string(HxOverrides.dateStr(d));
				break;
			case Hash:
				this.buf.b += Std.string("b");
				var v1 = v;
				var $it1 = v1.keys();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					this.serializeString(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += Std.string("h");
				break;
			case IntHash:
				this.buf.b += Std.string("q");
				var v1 = v;
				var $it2 = v1.keys();
				while( $it2.hasNext() ) {
					var k = $it2.next();
					this.buf.b += Std.string(":");
					this.buf.b += Std.string(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += Std.string("h");
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
				this.buf.b += Std.string("s");
				this.buf.b += Std.string(chars.length);
				this.buf.b += Std.string(":");
				this.buf.b += Std.string(chars);
				break;
			default:
				this.cache.pop();
				if(v.hxSerialize != null) {
					this.buf.b += Std.string("C");
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					v.hxSerialize(this);
					this.buf.b += Std.string("g");
				} else {
					this.buf.b += Std.string("c");
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					this.serializeFields(v);
				}
			}
			break;
		case 4:
			if(this.useCache && this.serializeRef(v)) return;
			this.buf.b += Std.string("o");
			this.serializeFields(v);
			break;
		case 7:
			var e = $e[2];
			if(this.useCache && this.serializeRef(v)) return;
			this.cache.pop();
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(e));
			if(this.useEnumIndex) {
				this.buf.b += Std.string(":");
				this.buf.b += Std.string(v[1]);
			} else this.serializeString(v[0]);
			this.buf.b += Std.string(":");
			var l = v.length;
			this.buf.b += Std.string(l - 2);
			var _g = 2;
			while(_g < l) {
				var i = _g++;
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
		this.buf.b += Std.string("g");
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += Std.string("r");
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
			this.buf.b += Std.string("R");
			this.buf.b += Std.string(x);
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += Std.string("y");
		s = StringTools.urlEncode(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += Std.string(":");
		this.buf.b += Std.string(s);
	}
	,toString: function() {
		return this.buf.b;
	}
	,useEnumIndex: null
	,useCache: null
	,scount: null
	,shash: null
	,cache: null
	,buf: null
	,__class__: haxe.Serializer
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
$hxClasses["haxe.Stack"] = haxe.Stack;
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.Stack.makeStack(new Error().stack);
	a.shift();
	Error.prepareStackTrace = oldValue;
	return a;
}
haxe.Stack.exceptionStack = function() {
	return [];
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += Std.string("\nCalled from ");
		haxe.Stack.itemToString(b,s);
	}
	return b.b;
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += Std.string("a C function");
		break;
	case 1:
		var m = $e[2];
		b.b += Std.string("module ");
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b += Std.string(" (");
		}
		b.b += Std.string(file);
		b.b += Std.string(" line ");
		b.b += Std.string(line);
		if(s1 != null) b.b += Std.string(")");
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += Std.string(".");
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += Std.string("local function #");
		b.b += Std.string(n);
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	if(typeof(s) == "string") {
		var stack = s.split("\n");
		var m = [];
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			m.push(haxe.StackItem.Module(line));
		}
		return m;
	} else return s;
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
			var e = this.makeExpr(l);
			return function() {
				return -e();
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
	,buf: null
	,stack: null
	,macros: null
	,context: null
	,expr: null
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
		switch(this.buf.charCodeAt(this.pos++)) {
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
			var h = new Hash();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new IntHash();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntHash format";
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
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,getResolver: function() {
		return this.resolver;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,resolver: null
	,scache: null
	,cache: null
	,length: null
	,pos: null
	,buf: null
	,__class__: haxe.Unserializer
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
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype = {
	getData: function() {
		return this.b;
	}
	,toHex: function() {
		var s = new StringBuf();
		var chars = [];
		var str = "0123456789abcdef";
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g1 = 0, _g = this.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.b[i];
			s.b += String.fromCharCode(chars[c >> 4]);
			s.b += String.fromCharCode(chars[c & 15]);
		}
		return s.b;
	}
	,toString: function() {
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
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len = this.length < other.length?this.length:other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,get: function(pos) {
		return this.b[pos];
	}
	,b: null
	,length: null
	,__class__: haxe.io.Bytes
}
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addByte: function($byte) {
		this.b.push($byte);
	}
	,b: null
	,__class__: haxe.io.BytesBuffer
}
haxe.io.Eof = function() {
};
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
haxe.io.Input = function() { }
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype = {
	getDoubleSig: function(bytes) {
		return Std.parseInt((((bytes[1] & 15) << 16 | bytes[2] << 8 | bytes[3]) * Math.pow(2,32)).toString()) + Std.parseInt(((bytes[4] >> 7) * Math.pow(2,31)).toString()) + Std.parseInt(((bytes[4] & 127) << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7]).toString());
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
	}
	,readUInt30: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
		return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readInt31: function() {
		var ch1, ch2, ch3, ch4;
		if(this.bigEndian) {
			ch4 = this.readByte();
			ch3 = this.readByte();
			ch2 = this.readByte();
			ch1 = this.readByte();
		} else {
			ch1 = this.readByte();
			ch2 = this.readByte();
			ch3 = this.readByte();
			ch4 = this.readByte();
		}
		if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
		return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readUInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	}
	,readInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
		if((n & 8388608) != 0) return n - 16777216;
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
		if((n & 32768) != 0) return n - 65536;
		return n;
	}
	,readInt8: function() {
		var n = this.readByte();
		if(n >= 128) return n - 256;
		return n;
	}
	,readDouble: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if(this.bigEndian) bytes.reverse();
		var sign = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 4 & 2047 | bytes[1] >> 4) - 1023;
		var sig = this.getDoubleSig(bytes);
		if(sig == 0 && exp == -1023) return 0.0;
		return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
	}
	,readFloat: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if(this.bigEndian) bytes.reverse();
		var sign = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 1 & 255 | bytes[1] >> 7) - 127;
		var sig = (bytes[1] & 127) << 16 | bytes[2] << 8 | bytes[3];
		if(sig == 0 && exp == -127) return 0.0;
		return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp);
	}
	,readLine: function() {
		var buf = new StringBuf();
		var last;
		var s;
		try {
			while((last = this.readByte()) != 10) buf.b += String.fromCharCode(last);
			s = buf.b;
			if(HxOverrides.cca(s,s.length - 1) == 13) s = HxOverrides.substr(s,0,-1);
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
				s = buf.b;
				if(s.length == 0) throw e;
			} else throw(e);
		}
		return s;
	}
	,readUntil: function(end) {
		var buf = new StringBuf();
		var last;
		while((last = this.readByte()) != end) buf.b += String.fromCharCode(last);
		return buf.b;
	}
	,read: function(nbytes) {
		var s = haxe.io.Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw haxe.io.Error.Blocked;
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,readAll: function(bufsize) {
		if(bufsize == null) bufsize = 16384;
		var buf = haxe.io.Bytes.alloc(bufsize);
		var total = new haxe.io.BytesBuffer();
		try {
			while(true) {
				var len = this.readBytes(buf,0,bufsize);
				if(len == 0) throw haxe.io.Error.Blocked;
				total.addBytes(buf,0,len);
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			} else throw(e);
		}
		return total.getBytes();
	}
	,setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,close: function() {
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readByte: function() {
		return (function($this) {
			var $r;
			throw "Not implemented";
			return $r;
		}(this));
	}
	,bigEndian: null
	,__class__: haxe.io.Input
	,__properties__: {set_bigEndian:"setEndian"}
}
haxe.xml = {}
haxe.xml.Filter = $hxClasses["haxe.xml.Filter"] = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = $hxClasses["haxe.xml.Attrib"] = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = $hxClasses["haxe.xml.Rule"] = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml._Check = {}
haxe.xml._Check.CheckResult = $hxClasses["haxe.xml._Check.CheckResult"] = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
haxe.xml._Check.CheckResult.CMatch = ["CMatch",0];
haxe.xml._Check.CheckResult.CMatch.toString = $estr;
haxe.xml._Check.CheckResult.CMatch.__enum__ = haxe.xml._Check.CheckResult;
haxe.xml._Check.CheckResult.CMissing = function(r) { var $x = ["CMissing",1,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtra = function(x) { var $x = ["CExtra",2,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CElementExpected = function(name,x) { var $x = ["CElementExpected",3,name,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CDataExpected = function(x) { var $x = ["CDataExpected",4,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtraAttrib = function(att,x) { var $x = ["CExtraAttrib",5,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CMissingAttrib = function(att,x) { var $x = ["CMissingAttrib",6,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidAttrib = function(att,x,f) { var $x = ["CInvalidAttrib",7,att,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidData = function(x,f) { var $x = ["CInvalidData",8,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInElement = function(x,r) { var $x = ["CInElement",9,x,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml.Check = function() { }
$hxClasses["haxe.xml.Check"] = haxe.xml.Check;
haxe.xml.Check.__name__ = ["haxe","xml","Check"];
haxe.xml.Check.isBlank = function(x) {
	return x.nodeType == Xml.PCData && haxe.xml.Check.blanks.match(x.getNodeValue()) || x.nodeType == Xml.Comment;
}
haxe.xml.Check.filterMatch = function(s,f) {
	var $e = (f);
	switch( $e[1] ) {
	case 0:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FReg(new EReg("[0-9]+","")));
	case 1:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FEnum(["true","false","0","1"]));
	case 2:
		var values = $e[2];
		var _g = 0;
		while(_g < values.length) {
			var v = values[_g];
			++_g;
			if(s == v) return true;
		}
		return false;
	case 3:
		var r = $e[2];
		return r.match(s);
	}
}
haxe.xml.Check.isNullable = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 2:
		var one = $e[3], r1 = $e[2];
		return one != true || haxe.xml.Check.isNullable(r1);
	case 3:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return false;
		}
		return true;
	case 4:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(haxe.xml.Check.isNullable(r1)) return true;
		}
		return false;
	case 1:
		return false;
	case 0:
		return false;
	case 5:
		return true;
	}
}
haxe.xml.Check.check = function(x,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var childs = $e[4], attribs = $e[3], name = $e[2];
		if(x.nodeType != Xml.Element || x.getNodeName() != name) return haxe.xml._Check.CheckResult.CElementExpected(name,x);
		var attribs1 = attribs == null?new Array():attribs.slice();
		var $it0 = x.attributes();
		while( $it0.hasNext() ) {
			var xatt = $it0.next();
			var found = false;
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = (att);
				switch( $e[1] ) {
				case 0:
					var defvalue = $e[4], filter = $e[3], name1 = $e[2];
					if(xatt != name1) continue;
					if(filter != null && !haxe.xml.Check.filterMatch(x.get(xatt),filter)) return haxe.xml._Check.CheckResult.CInvalidAttrib(name1,x,filter);
					HxOverrides.remove(attribs1,att);
					found = true;
					break;
				}
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtraAttrib(xatt,x);
		}
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				if(defvalue == null) return haxe.xml._Check.CheckResult.CMissingAttrib(name1,x);
				break;
			}
		}
		if(childs == null) childs = haxe.xml.Rule.RList([]);
		var m = haxe.xml.Check.checkList(x.iterator(),childs);
		if(m != haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CInElement(x,m);
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				x.set(name1,defvalue);
				break;
			}
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 1:
		var filter = $e[2];
		if(x.nodeType != Xml.PCData && x.nodeType != Xml.CData) return haxe.xml._Check.CheckResult.CDataExpected(x);
		if(filter != null && !haxe.xml.Check.filterMatch(x.getNodeValue(),filter)) return haxe.xml._Check.CheckResult.CInvalidData(x,filter);
		return haxe.xml._Check.CheckResult.CMatch;
	case 4:
		var choices = $e[2];
		if(choices.length == 0) throw "No choice possible";
		var _g = 0;
		while(_g < choices.length) {
			var c = choices[_g];
			++_g;
			if(haxe.xml.Check.check(x,c) == haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CMatch;
		}
		return haxe.xml.Check.check(x,choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.check(x,r1);
	default:
		throw "Unexpected " + Std.string(r);
	}
}
haxe.xml.Check.checkList = function(it,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 3:
		var ordered = $e[3], rules = $e[2];
		var rules1 = rules.slice();
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r1);
				if(m == haxe.xml._Check.CheckResult.CMatch) {
					found = true;
					var $e = (r1);
					switch( $e[1] ) {
					case 2:
						var one = $e[3], rsub = $e[2];
						if(one) {
							var i;
							var _g2 = 0, _g1 = rules1.length;
							while(_g2 < _g1) {
								var i1 = _g2++;
								if(rules1[i1] == r1) rules1[i1] = haxe.xml.Rule.RMulti(rsub);
							}
						}
						break;
					default:
						HxOverrides.remove(rules1,r1);
					}
					break;
				} else if(ordered && !haxe.xml.Check.isNullable(r1)) return m;
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtra(x);
		}
		var _g = 0;
		while(_g < rules1.length) {
			var r1 = rules1[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return haxe.xml._Check.CheckResult.CMissing(r1);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 2:
		var one = $e[3], r1 = $e[2];
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r1);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
		}
		if(one && !found) return haxe.xml._Check.CheckResult.CMissing(r1);
		return haxe.xml._Check.CheckResult.CMatch;
	default:
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.check(x,r);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
			break;
		}
		if(!found) {
			switch( (r)[1] ) {
			case 5:
				break;
			default:
				return haxe.xml._Check.CheckResult.CMissing(r);
			}
		}
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			return haxe.xml._Check.CheckResult.CExtra(x);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	}
}
haxe.xml.Check.makeWhere = function(path) {
	if(path.length == 0) return "";
	var s = "In ";
	var first = true;
	var _g = 0;
	while(_g < path.length) {
		var x = path[_g];
		++_g;
		if(first) first = false; else s += ".";
		s += x.getNodeName();
	}
	return s + ": ";
}
haxe.xml.Check.makeString = function(x) {
	if(x.nodeType == Xml.Element) return "element " + x.getNodeName();
	var s = x.getNodeValue().split("\r").join("\\r").split("\n").join("\\n").split("\t").join("\\t");
	if(s.length > 20) return HxOverrides.substr(s,0,17) + "...";
	return s;
}
haxe.xml.Check.makeRule = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var name = $e[2];
		return "element " + name;
	case 1:
		return "data";
	case 2:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	case 3:
		var rules = $e[2];
		return haxe.xml.Check.makeRule(rules[0]);
	case 4:
		var choices = $e[2];
		return haxe.xml.Check.makeRule(choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	}
}
haxe.xml.Check.makeError = function(m,path) {
	if(path == null) path = new Array();
	var $e = (m);
	switch( $e[1] ) {
	case 0:
		throw "assert";
		break;
	case 1:
		var r = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Missing " + haxe.xml.Check.makeRule(r);
	case 2:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Unexpected " + haxe.xml.Check.makeString(x);
	case 3:
		var x = $e[3], name = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while expected element " + name;
	case 4:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while data expected";
	case 5:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "unexpected attribute " + att;
	case 6:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "missing required attribute " + att;
	case 7:
		var f = $e[4], x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "invalid attribute value for " + att;
	case 8:
		var f = $e[3], x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "invalid data format for " + haxe.xml.Check.makeString(x);
	case 9:
		var m1 = $e[3], x = $e[2];
		path.push(x);
		return haxe.xml.Check.makeError(m1,path);
	}
}
haxe.xml.Check.checkNode = function(x,r) {
	var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.checkDocument = function(x,r) {
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
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
				var child = Xml.createPCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
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
				if(v != parent.getNodeName()) throw "Expected </" + parent.getNodeName() + ">";
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
				parent.addChild(Xml.createProlog(str1));
				state = 1;
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
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
}
haxe.xml.Parser.isValidChar = function(c) {
	return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45;
}
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.isClass = function(o) {
	return o.__name__;
}
js.Boot.isEnum = function(e) {
	return e.__ename__;
}
js.Boot.getClass = function(o) {
	return o.__class__;
}
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
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
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
	js.Lib.document.cookie = s;
}
js.Cookie.all = function() {
	var h = new Hash();
	var a = js.Lib.document.cookie.split(";");
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
js.Lib = function() { }
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.debug = function() {
	debugger;
}
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib["eval"] = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
var nme = {}
nme.Lib = function() { }
$hxClasses["nme.Lib"] = nme.Lib;
nme.Lib.__name__ = ["nme","Lib"];
nme.Lib.__properties__ = {get_version:"get_version",get_stage:"get_stage",get_packageName:"get_packageName",get_initWidth:"get_initWidth",get_initHeight:"get_initHeight",get_file:"get_file",get_current:"get_current",get_company:"get_company"}
nme.Lib.company = null;
nme.Lib.current = null;
nme.Lib.file = null;
nme.Lib.initHeight = null;
nme.Lib.initWidth = null;
nme.Lib.packageName = null;
nme.Lib.stage = null;
nme.Lib.version = null;
nme.Lib.close = function() {
}
nme.Lib.create = function(onLoaded,width,height,frameRate,color,flags,title,icon) {
	if(title == null) title = "NME";
	if(flags == null) flags = 15;
	if(color == null) color = 16777215;
	if(frameRate == null) frameRate = 60.0;
}
nme.Lib.createManagedStage = function(width,height) {
	return null;
}
nme.Lib.exit = function() {
}
nme.Lib.forceClose = function() {
}
nme.Lib.getTimer = function() {
	return browser.Lib.getTimer();
}
nme.Lib.getURL = function(url,target) {
	browser.Lib.getURL(url,target);
}
nme.Lib.pause = function() {
}
nme.Lib.postUICallback = function(handler) {
	handler();
}
nme.Lib.resume = function() {
}
nme.Lib.setPackage = function(company,file,packageName,version) {
}
nme.Lib.trace = function(arg) {
	browser.Lib.trace(arg);
}
nme.Lib.get_company = function() {
	return "";
}
nme.Lib.get_current = function() {
	return browser.Lib.get_current();
}
nme.Lib.get_file = function() {
	return "";
}
nme.Lib.get_initHeight = function() {
	return 0;
}
nme.Lib.get_initWidth = function() {
	return 0;
}
nme.Lib.get_packageName = function() {
	return "";
}
nme.Lib.get_stage = function() {
	return nme.Lib.get_current().get_stage();
}
nme.Lib.get_version = function() {
	return "";
}
nme.installer = {}
nme.installer.Assets = function() { }
$hxClasses["nme.installer.Assets"] = nme.installer.Assets;
nme.installer.Assets.__name__ = ["nme","installer","Assets"];
nme.installer.Assets.initialize = function() {
	if(!nme.installer.Assets.initialized) {
		nme.installer.Assets.resourceNames.set("assets/audio/ButtonDown.mp3","assets/audio/ButtonDown.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/ButtonDown.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/ButtonDown.ogg","assets/audio/ButtonDown.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/ButtonDown.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/ButtonOver.mp3","assets/audio/ButtonOver.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/ButtonOver.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/ButtonOver.ogg","assets/audio/ButtonOver.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/ButtonOver.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/MusicGame.mp3","assets/audio/MusicGame.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/MusicGame.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/MusicGame.ogg","assets/audio/MusicGame.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/MusicGame.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/MusicMenu.mp3","assets/audio/MusicMenu.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/MusicMenu.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/MusicMenu.ogg","assets/audio/MusicMenu.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/MusicMenu.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx1.mp3","assets/audio/Sfx1.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx1.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx1.ogg","assets/audio/Sfx1.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx1.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx2.mp3","assets/audio/Sfx2.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx2.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx2.ogg","assets/audio/Sfx2.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx2.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx3.mp3","assets/audio/Sfx3.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx3.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx3.ogg","assets/audio/Sfx3.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx3.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx4.mp3","assets/audio/Sfx4.mp3");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx4.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/audio/Sfx4.ogg","assets/audio/Sfx4.ogg");
		nme.installer.Assets.resourceTypes.set("assets/audio/Sfx4.ogg","sound");
		nme.installer.Assets.resourceNames.set("assets/ButtonOver.png","assets/ButtonOver.png");
		nme.installer.Assets.resourceTypes.set("assets/ButtonOver.png","image");
		nme.installer.Assets.resourceNames.set("assets/ButtonUp.png","assets/ButtonUp.png");
		nme.installer.Assets.resourceTypes.set("assets/ButtonUp.png","image");
		nme.installer.Assets.resourceClasses.set("assets/fonts/orbitron.ttf",NME_assets_fonts_orbitron_ttf);
		nme.installer.Assets.resourceNames.set("assets/fonts/orbitron.ttf","assets/fonts/orbitron.ttf");
		nme.installer.Assets.resourceTypes.set("assets/fonts/orbitron.ttf","font");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/BackOver.png","assets/overlay/buttons/BackOver.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/BackOver.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/BackUp.png","assets/overlay/buttons/BackUp.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/BackUp.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/MuteOver.png","assets/overlay/buttons/MuteOver.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/MuteOver.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/MuteUp.png","assets/overlay/buttons/MuteUp.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/MuteUp.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/PauseOver.png","assets/overlay/buttons/PauseOver.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/PauseOver.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/PauseUp.png","assets/overlay/buttons/PauseUp.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/PauseUp.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/UnmuteOver.png","assets/overlay/buttons/UnmuteOver.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/UnmuteOver.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/UnmuteUp.png","assets/overlay/buttons/UnmuteUp.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/UnmuteUp.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/UnpauseOver.png","assets/overlay/buttons/UnpauseOver.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/UnpauseOver.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/buttons/UnpauseUp.png","assets/overlay/buttons/UnpauseUp.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/buttons/UnpauseUp.png","image");
		nme.installer.Assets.resourceNames.set("assets/overlay/OverlayBackground.png","assets/overlay/OverlayBackground.png");
		nme.installer.Assets.resourceTypes.set("assets/overlay/OverlayBackground.png","image");
		nme.installer.Assets.resourceNames.set("assets/scenes/Background.png","assets/scenes/Background.png");
		nme.installer.Assets.resourceTypes.set("assets/scenes/Background.png","image");
		nme.installer.Assets.resourceNames.set("assets/Sphere.png","assets/Sphere.png");
		nme.installer.Assets.resourceTypes.set("assets/Sphere.png","image");
		nme.installer.Assets.initialized = true;
	}
}
nme.installer.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id) && nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "image") {
		if(useCache && nme.installer.Assets.cachedBitmapData.exists(id)) return nme.installer.Assets.cachedBitmapData.get(id); else {
			var data = (js.Boot.__cast(ApplicationMain.loaders.get(nme.installer.Assets.resourceNames.get(id)).contentLoaderInfo.content , browser.display.Bitmap)).bitmapData;
			if(useCache) nme.installer.Assets.cachedBitmapData.set(id,data);
			return data;
		}
	} else if(id.indexOf(":") > -1) {
		var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
		var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
		if(nme.installer.Assets.libraryTypes.exists(libraryName)) {
		} else haxe.Log.trace("[nme.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 253, className : "nme.installer.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[nme.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 259, className : "nme.installer.Assets", methodName : "getBitmapData"});
	return null;
}
nme.installer.Assets.getBytes = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id)) return ApplicationMain.urlLoaders.get(nme.installer.Assets.getResourceName(id)).data;
	haxe.Log.trace("[nme.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 278, className : "nme.installer.Assets", methodName : "getBytes"});
	return null;
}
nme.installer.Assets.getFont = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "font") return js.Boot.__cast(Type.createInstance(nme.installer.Assets.resourceClasses.get(id),[]) , browser.text.Font);
	}
	haxe.Log.trace("[nme.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 299, className : "nme.installer.Assets", methodName : "getFont"});
	return null;
}
nme.installer.Assets.getMovieClip = function(id) {
	nme.installer.Assets.initialize();
	var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	if(nme.installer.Assets.libraryTypes.exists(libraryName)) {
	} else haxe.Log.trace("[nme.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 351, className : "nme.installer.Assets", methodName : "getMovieClip"});
	return null;
}
nme.installer.Assets.getResourceName = function(id) {
	nme.installer.Assets.initialize();
	return nme.installer.Assets.resourceNames.get(id);
}
nme.installer.Assets.getSound = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "sound") return new browser.media.Sound(new browser.net.URLRequest(nme.installer.Assets.resourceNames.get(id))); else if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "music") return new browser.media.Sound(new browser.net.URLRequest(nme.installer.Assets.resourceNames.get(id)));
	}
	haxe.Log.trace("[nme.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 387, className : "nme.installer.Assets", methodName : "getSound"});
	return null;
}
nme.installer.Assets.getText = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "text") return ApplicationMain.urlLoaders.get(nme.installer.Assets.resourceNames.get(id)).data;
	}
	var bytes = nme.installer.Assets.getBytes(id);
	return null;
}
nme.installer.Assets.resolveClass = function(name) {
	name = StringTools.replace(name,"native.","browser.");
	return Type.resolveClass(name);
}
nme.installer.Assets.resolveEnum = function(name) {
	name = StringTools.replace(name,"native.","browser.");
	return Type.resolveEnum(name);
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
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
var Void = $hxClasses.Void = { __ename__ : ["Void"]};
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.Prolog = "prolog";
Xml.Document = "document";
haxe.Resource.content = [{ name : "config", data : "s683:PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8%DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJhc3NldHNfZm9udHNfb3JiaXRyb25fdHRmIiAvPg0KCTwvc2V0dGluZ3M%DQoJPGd1aT4NCgkJPGJ1dHRvbnMgbmV4dD0iTkVYVCIgc3RhcnQ9IlNUQVJUIiAvPg0KCQk8c2NlbmVzPg0KCQkJPGludHJvIHRpdGxlPSJJTlRST0RVQ1RJT04iIGluc3RydWN0aW9ucz0iQ2xpY2sgb24gYWxsIHRoZSBpbnZhZGVycyBhcyBmYXN0IGFzIHBvc3NpYmxlISIgLz4NCgkJCTxnYW1lIC8%DQoJCQk8cmVzdWx0cyB0aXRsZT0iR0FNRSBPVkVSIiB3aW49IkEgbmV3IHBlcnNvbmFsIGJlc3Qgb2YgIiBsb3NlPSJZb3UgZGlkbid0IGJlYXQgeW91ciBwcmV2aW91cyB0aW1lIG9mICIgLz4NCgkJPC9zY2VuZXM%DQoJPC9ndWk%DQo8L2RhdGE%DQo"},{ name : "NME_assets_fonts_orbitron_ttf", data : "s111559:cToxMTFveTY6YXNjZW50ZDk5Ni4zNTJ5NDpkYXRhYWQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODc1LjUyZDY1NC4zMzZkOTM1LjkzNmQ2MTAuODE2ZDk3OS45NjhkNTY3LjI5NmQxMDI0ZDUwNS44NTZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDQ5Ny42NjRkODY3LjMyOGQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyaHk2Ol93aWR0aGQ3MDguNjA4eTQ6eE1heGQ2NTQuMzM2eTQ6eE1pbmQ1Mi4yMjR5NDp5TWF4ZDU5My45Mnk0OnlNaW5kMHk3Ol9oZWlnaHRkNTQxLjY5Nnk3OmxlYWRpbmdkMjA3Ljg3Mnk3OmRlc2NlbnRkMjM1LjUyeTg6Y2hhckNvZGVpMTExeTE1OmxlZnRzaWRlQmVhcmluZ2Q1Mi4yMjR5MTI6YWR2YW5jZVdpZHRoZDcwOC42MDh5ODpjb21tYW5kc2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoyMjNvUjBkOTk2LjM1MlIxYWQ3ODIuMzM2ZDQyMi45MTJkNzgyLjMzNmQ1ODIuNjU2ZDc4Mi4zMzZkNjIwLjU0NGQ3NjQuOTI4ZDY1My4zMTJkNzgyLjMzNmQ2ODUuMDU2ZDc4Mi4zMzZkNzIyLjk0NGQ3ODIuMzM2ZDg3NS41MmQ3ODIuMzM2ZDkzNS45MzZkNzM4LjMwNGQ5NzkuOTY4ZDY5NC4yNzJkMTAyNGQ2MzIuODMyZDEwMjRkMjc5LjU1MmQxMDI0ZDI3OS41NTJkODY3LjMyOGQ2MjUuNjY0ZDg2Ny4zMjhkNjI1LjY2NGQ3MzIuMTZkMjc5LjU1MmQ3MzIuMTZkMjc5LjU1MmQ1ODQuNzA0ZDYyNS42NjRkNTg0LjcwNGQ2MjUuNjY0ZDQ1OC43NTFkMjE1LjA0ZDQ1OC43NTFkMjE1LjA0ZDEwMjRkNTguMzY4ZDEwMjRkNTguMzY4ZDQ0OS41MzVkNTguMzY4ZDM4OC4wOTZkMTAyLjRkMzQ0LjU3NmQxNDYuNDMyZDMwMS4wNTZkMjA3Ljg3MmQzMDEuMDU2ZDYzMi44MzJkMzAxLjA1NmQ2ODguMTI4ZDMwMS4wNTZkNzMwLjYyNGQzMzUuODcxZDc3My4xMmQzNzAuNjg4ZDc4Mi4zMzZkNDIyLjkxMmhSMmQ4NTIuOTkyUjNkNzgyLjMzNlI0ZDU4LjM2OFI1ZDcyMi45NDRSNmQwUjdkNjY0LjU3NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjIzUjExZDU4LjM2OFIxMmQ4NTIuOTkyUjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2hnOjExMG9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4aFIyZDcxMi43MDRSM2Q2NTcuNDA4UjRkNTUuMjk2UjVkNTkzLjkyUjZkMFI3ZDUzOC42MjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExMFIxMWQ1NS4yOTZSMTJkNzEyLjcwNFIxM2FpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaGc6MjIyb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjJSMTFkMFIxMmQwUjEzYWhnOjEwOW9SMGQ5OTYuMzUyUjFhZDc3MC4wNDhkNDMwLjA4ZDgzMS40ODhkNDMwLjA4ZDg3NS4wMDhkNDc0LjExMWQ5MTguNTI4ZDUxOC4xNDRkOTE4LjUyOGQ1NzguNTZkOTE4LjUyOGQxMDI0ZDc2Mi44OGQxMDI0ZDc2Mi44OGQ1ODYuNzUyZDU2Ni4yNzJkNTg2Ljc1MmQ1NjYuMjcyZDEwMjRkNDA4LjU3NmQxMDI0ZDQwOC41NzZkNTg2Ljc1MmQyMTEuOTY4ZDU4Ni43NTJkMjExLjk2OGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQ0MzAuMDhkNzcwLjA0OGQ0MzAuMDhoUjJkMTAwMS40NzJSM2Q5MTguNTI4UjRkNTUuMjk2UjVkNTkzLjkyUjZkMFI3ZDUzOC42MjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwOVIxMWQ1NS4yOTZSMTJkMTAwMS40NzJSMTNhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjIxb1IwZDk5Ni4zNTJSMWFkNjY4LjY3MmQyODYuNzJkODYwLjE2ZDI4Ni43MmQ1MTguMTQ0ZDc0OS41NjhkNTE4LjE0NGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkNzQ4LjU0NGQyMjQuMjU2ZDU2OC4zMTlkMTcuNDA4ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ0MzguMjcyZDU3Ny41MzZkNjY4LjY3MmQyODYuNzJkMzM2Ljg5NmQyMzUuNTE5ZDM4OS4xMmQyNy42NDhkNTQ5Ljg4OGQyNy42NDhkNDk3LjY2NGQyMzUuNTE5ZDMzNi44OTZkMjM1LjUxOWhSMmQ4MjUuMzQ0UjNkODYwLjE2UjRkMTcuNDA4UjVkOTk2LjM1MlI2ZDBSN2Q5NzguOTQ0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjFSMTFkMTcuNDA4UjEyZDgyNS4zNDRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDhvUjBkOTk2LjM1MlIxYWQ1My4yNDhkMjM0LjQ5NWQyMTAuOTQ0ZDIzNC40OTVkMjEwLjk0NGQ4NjcuMzI4ZDMzMC43NTJkODY3LjMyOGQzMzAuNzUyZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny4yOGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDIzNC40OTVoUjJkMzQ1LjA4OFIzZDMzMC43NTJSNGQ1My4yNDhSNWQ3ODkuNTA0UjZkMFI3ZDczNi4yNTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwOFIxMWQ1My4yNDhSMTJkMzQ1LjA4OFIxM2FpMWkyaTJpMmkyaTJpM2kzaTJoZzoyMjBvUjBkOTk2LjM1MlIxYWQyMTQuMDE2ZDI4Ni43MmQyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQyODYuNzJkMjE0LjAxNmQyODYuNzJkNjE2LjQ0OGQ3Ny44MjNkNjE2LjQ0OGQyMzUuNTE5ZDQ1OC43NTJkMjM1LjUxOWQ0NTguNzUyZDc3LjgyM2Q2MTYuNDQ4ZDc3LjgyM2QzOTcuMzEyZDc3LjgyM2QzOTcuMzEyZDIzNS41MTlkMjQwLjY0ZDIzNS41MTlkMjQwLjY0ZDc3LjgyM2QzOTcuMzEyZDc3LjgyM2hSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk0Ni4xNzZSNmQwUjdkODkwLjg4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjBSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwN29SMGQ5OTYuMzUyUjFhZDQ5My41NjhkNDMwLjA4ZDY1MS4yNjRkNDMwLjA4ZDY1MS4yNjRkNDgzLjMyOGQ0MzAuMDhkNzI3LjA0ZDY1MS4yNjRkOTcwLjc1MmQ2NTEuMjY0ZDEwMjRkNDkzLjU2OGQxMDI0ZDI5MS44NGQ4MDUuODg4ZDIxMS45NjhkODA1Ljg4OGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDIzNS41MTlkMjExLjk2OGQyMzUuNTE5ZDIxMS45NjhkNjQ4LjE5MmQyOTEuODRkNjQ4LjE5MmQ0OTMuNTY4ZDQzMC4wOGhSMmQ2NjEuNTA0UjNkNjUxLjI2NFI0ZDU1LjI5NlI1ZDc4OC40OFI2ZDBSN2Q3MzMuMTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMDdSMTFkNTUuMjk2UjEyZDY2MS41MDRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMTlvUjBkOTk2LjM1MlIxYWQyMTQuMDE2ZDI4Ni43MmQyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQyODYuNzJkMjE0LjAxNmQyODYuNzJkNDA0LjQ4ZDIzNi41NDNkMjY4LjI4OGQyMzYuNTQzZDM4MC45MjhkNDguMTI3ZDQ4My4zMjhkNDguMTI3ZDU5NS45NjhkMjM2LjU0M2Q0NTguNzUyZDIzNi41NDNkNDMwLjA4ZDE5MS40ODdkNDA0LjQ4ZDIzNi41NDNoUjJkODQ3Ljg3MlIzZDc5Mi41NzZSNGQ1NS4yOTZSNWQ5NzUuODcyUjZkMFI3ZDkyMC41NzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIxOVIxMWQ1NS4yOTZSMTJkODQ3Ljg3MlIxM2FpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMDZvUjBkOTk2LjM1MlIxYWQ1OS4zOTJkMjM1LjUxOWQyMTYuMDY0ZDIzNS41MTlkMjE2LjA2NGQzOTMuMjE2ZDU5LjM5MmQzOTMuMjE2ZDU5LjM5MmQyMzUuNTE5ZDIxNi4wNjRkNDMwLjA4ZDIxNi4wNjRkMTA4OC41MTJkMjE2LjA2NGQxMTQ5Ljk1MmQxNzIuMDMyZDExOTMuNDcyZDEyOGQxMjM2Ljk5MmQ2Ni41NmQxMjM2Ljk5MmQtMTkxLjQ4OGQxMjM2Ljk5MmQtMTkxLjQ4OGQxMDc5LjI5NmQ1OS4zOTJkMTA3OS4yOTZkNTkuMzkyZDQzMC4wOGQyMTYuMDY0ZDQzMC4wOGhSMmQyNDQuNzM2UjNkMjE2LjA2NFI0ZC0xOTEuNDg4UjVkNzg4LjQ4UjZkLTIxMi45OTJSN2Q5NzkuOTY4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMDZSMTFkLTE5MS40ODhSMTJkMjQ0LjczNlIxM2FpMWkyaTJpMmkyaTFpMmkzaTNpMmkyaTJpMmkyaGc6MjE4b1IwZDk5Ni4zNTJSMWFkMjE0LjAxNmQyODYuNzJkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDI4Ni43MmQ3OTIuNTc2ZDI4Ni43MmQ3OTIuNTc2ZDg3Mi40NDhkNzkyLjU3NmQ5MzQuOTEyZDc0OC4wMzJkOTc5LjQ1NmQ3MDMuNDg4ZDEwMjRkNjQxLjAyNGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkMjg2LjcyZDIxNC4wMTZkMjg2LjcyZDMyNy42OGQyMzUuNTE5ZDM3OS45MDRkMjcuNjQ4ZDU0MC42NzJkMjcuNjQ4ZDQ4OC40NDhkMjM1LjUxOWQzMjcuNjhkMjM1LjUxOWhSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk5Ni4zNTJSNmQwUjdkOTQxLjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjE4UjExZDU1LjI5NlIxMmQ4NDcuODcyUjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmhnOjEwNW9SMGQ5OTYuMzUyUjFhZDUzLjI0OGQxMDI0ZDUzLjI0OGQ0MzAuMDhkMjA5LjkyZDQzMC4wOGQyMDkuOTJkMTAyNGQ1My4yNDhkMTAyNGQ1My4yNDhkMjM1LjUxOWQyMDkuOTJkMjM1LjUxOWQyMDkuOTJkMzkzLjIxNmQ1My4yNDhkMzkzLjIxNmQ1My4yNDhkMjM1LjUxOWhSMmQyMzQuNDk2UjNkMjA5LjkyUjRkNTMuMjQ4UjVkNzg4LjQ4UjZkMFI3ZDczNS4yMzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwNVIxMWQ1My4yNDhSMTJkMjM0LjQ5NlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxN29SMGQ5OTYuMzUyUjFhZDIxNC4wMTZkMjg2LjcyZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQyODYuNzJkNzkyLjU3NmQyODYuNzJkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmQ0NjcuOTY4ZDI3LjY0OGQ1MjAuMTkyZDIzNS41MTlkMzU5LjQyNGQyMzUuNTE5ZDMwNy4yZDI3LjY0OGQ0NjcuOTY4ZDI3LjY0OGhSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk5Ni4zNTJSNmQwUjdkOTQxLjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjE3UjExZDU1LjI5NlIxMmQ4NDcuODcyUjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmhnOjEwNG9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU2OS4zNDRkNDMwLjA4ZDYxMy4zNzZkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkMjM1LjUxOWQyMTEuOTY4ZDIzNS41MTlkMjExLjk2OGQ0MzAuMDhkNTA4LjkyOGQ0MzAuMDhoUjJkNjg0LjAzMlIzZDY1Ny40MDhSNGQ1NS4yOTZSNWQ3ODguNDhSNmQwUjdkNzMzLjE4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTA0UjExZDU1LjI5NlIxMmQ2ODQuMDMyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjE2b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTZSMTFkMFIxMmQwUjEzYWhnOjEwM29SMGQ5OTYuMzUyUjFhZDY0NS4xMmQxMTEwLjAxNmQ2NDUuMTJkMTE3MS40NTZkNjAxLjZkMTIxNC45NzZkNTU4LjA4ZDEyNTguNDk2ZDQ5Ni42NGQxMjU4LjQ5NmQxMzYuMTkyZDEyNTguNDk2ZDEzNi4xOTJkMTEwMC44ZDQ4OC40NDhkMTEwMC44ZDQ4OC40NDhkMTAyNGQxOTEuNDg4ZDEwMjRkMTMwLjA0OGQxMDI0ZDg2LjAxNmQ5NzkuOTY4ZDQxLjk4NGQ5MzUuOTM2ZDQxLjk4NGQ4NzUuNTJkNDEuOTg0ZDU3OC41NmQ0MS45ODRkNTE4LjE0NGQ4Ni4wMTZkNDc0LjExMWQxMzAuMDQ4ZDQzMC4wOGQxOTEuNDg4ZDQzMC4wOGQ0OTYuNjRkNDMwLjA4ZDU1OC4wOGQ0MzAuMDhkNjAxLjZkNDc0LjExMWQ2NDUuMTJkNTE4LjE0NGQ2NDUuMTJkNTc4LjU2ZDY0NS4xMmQxMTEwLjAxNmQxOTguNjU2ZDU4Ni43NTJkMTk4LjY1NmQ4NjcuMzI4ZDQ4OC40NDhkODY3LjMyOGQ0ODguNDQ4ZDU4Ni43NTJkMTk4LjY1NmQ1ODYuNzUyaFIyZDY5OS4zOTJSM2Q2NDUuMTJSNGQ0MS45ODRSNWQ1OTMuOTJSNmQtMjM0LjQ5NlI3ZDU1MS45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwM1IxMWQ0MS45ODRSMTJkNjk5LjM5MlIxM2FpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjIxNW9SMGQ5OTYuMzUyUjFhZDUxOS4xNjhkNDk1LjYxNmQ1MTkuMTY4ZDU0Ni44MTZkMzg2LjA0OGQ3MTYuOGQ1MTkuMTY4ZDg4OC44MzJkNTE5LjE2OGQ5NDAuMDMyZDM1Ni4zNTJkOTQwLjAzMmQyODUuNjk2ZDg0NC44ZDI3NS40NTZkODYxLjE4NGQyNDkuODU2ZDg5My40NGQyMjQuMjU2ZDkyNS42OTZkMjE1LjA0ZDk0MC4wMzJkNTQuMjcyZDk0MC4wMzJkNTQuMjcyZDg4OC44MzJkMTg2LjM2OGQ3MTYuOGQ1NC4yNzJkNTQ2LjgxNmQ1NC4yNzJkNDk1LjYxNmQyMTYuMDY0ZDQ5NS42MTZkMjg1LjY5NmQ1OTEuODcyZDM1Ni4zNTJkNDk1LjYxNmQ1MTkuMTY4ZDQ5NS42MTZoUjJkNTU5LjEwNFIzZDUxOS4xNjhSNGQ1NC4yNzJSNWQ1MjguMzg0UjZkODMuOTY4UjdkNDc0LjExMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjE1UjExZDU0LjI3MlIxMmQ1NTkuMTA0UjEzYWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmhnOjEwMm9SMGQ5OTYuMzUyUjFhZDQzMS4xMDRkMzkzLjIxNmQyMTAuOTQ0ZDM5My4yMTZkMjEwLjk0NGQ0MzAuMDhkNDMxLjEwNGQ0MzAuMDhkNDMxLjEwNGQ1ODYuNzUyZDIxMC45NDRkNTg2Ljc1MmQyMTAuOTQ0ZDEwMjRkNTQuMjcyZDEwMjRkNTQuMjcyZDM4NGQ1NC4yNzJkMzIzLjU4M2Q5Ny43OTJkMjc5LjU1MmQxNDEuMzEyZDIzNS41MTlkMjAzLjc3NmQyMzUuNTE5ZDQzMS4xMDRkMjM1LjUxOWQ0MzEuMTA0ZDM5My4yMTZoUjJkNDUwLjU2UjNkNDMxLjEwNFI0ZDU0LjI3MlI1ZDc4OC40OFI2ZDBSN2Q3MzQuMjA4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMDJSMTFkNTQuMjcyUjEyZDQ1MC41NlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmhnOjIxNG9SMGQ5OTYuMzUyUjFhZDIwNi44NDhkMjg2LjcyZDY0MS4wMjRkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQ0MzguMjcxZDU1LjI5NmQzNzQuNzg0ZDk5LjMyOGQzMzAuNzUxZDE0My4zNmQyODYuNzJkMjA2Ljg0OGQyODYuNzJkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2Q2MTYuNDQ4ZDc3LjgyM2Q2MTYuNDQ4ZDIzNS41MTlkNDU4Ljc1MmQyMzUuNTE5ZDQ1OC43NTJkNzcuODIzZDYxNi40NDhkNzcuODIzZDM5Ny4zMTJkNzcuODIzZDM5Ny4zMTJkMjM1LjUxOWQyNDAuNjRkMjM1LjUxOWQyNDAuNjRkNzcuODIzZDM5Ny4zMTJkNzcuODIzaFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTQ2LjE3NlI2ZDBSN2Q4OTAuODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIxNFIxMWQ1NS4yOTZSMTJkODQ3Ljg3MlIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMW9SMGQ5OTYuMzUyUjFhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyaFIyZDcwOC42MDhSM2Q2NTQuMzM2UjRkNTIuMjI0UjVkNTkzLjkyUjZkMFI3ZDU0MS42OTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwMVIxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjEzb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQ5OC42ODhkMTEzLjY2M2Q1MzguNjI0ZDExMy42NjNkNTk2Ljk5MmQ3NS43NzVkNTk2Ljk5MmQyMDQuNzk5ZDUzMy41MDRkMjMxLjQyM2Q0OTUuNjE2ZDIzMS40MjNkNDU3LjcyOGQyMzEuNDIzZDM5OC44NDhkMTk5LjY3OWQzMzkuOTY4ZDE2Ny45MzZkMzEwLjI3MmQxNjcuOTM2ZDI5OS4wMDhkMTY3LjkzNmQyNTZkMTY3LjkzNmQyMTIuOTkyZDIwNC43OTlkMjEyLjk5MmQ3Ny44MjNkMjgyLjYyNGQ1MC4xNzVkMzEwLjI3MmQ1MC4xNzVkMzQ4LjE2ZDUwLjE3NWQ0MDcuNTUyZDc5Ljg3MWQ0NjYuOTQ0ZDEwOS41NjdkNDk4LjY4OGQxMTMuNjYzaFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTczLjgyNFI2ZDBSN2Q5MTguNTI4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTNSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6MTAwb1IwZDk5Ni4zNTJSMWFkNDcwLjAxNmQyMzUuNTE5ZDYyNi42ODhkMjM1LjUxOWQ2MjYuNjg4ZDEwMjRkMTcyLjAzMmQxMDI0ZDExMC41OTJkMTAyNGQ2Ny4wNzJkOTc5Ljk2OGQyMy41NTJkOTM1LjkzNmQyMy41NTJkODc1LjUyZDIzLjU1MmQ1NzguNTZkMjMuNTUyZDUxOC4xNDRkNjcuMDcyZDQ3NC4xMTFkMTEwLjU5MmQ0MzAuMDhkMTcyLjAzMmQ0MzAuMDhkNDcwLjAxNmQ0MzAuMDhkNDcwLjAxNmQyMzUuNTE5ZDE4MS4yNDhkNTg2Ljc1MmQxODEuMjQ4ZDg2Ny4zMjhkNDcwLjAxNmQ4NjcuMzI4ZDQ3MC4wMTZkNTg2Ljc1MmQxODEuMjQ4ZDU4Ni43NTJoUjJkNjgzLjAwOFIzZDYyNi42ODhSNGQyMy41NTJSNWQ3ODguNDhSNmQwUjdkNzY0LjkyOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTAwUjExZDIzLjU1MlIxMmQ2ODMuMDA4UjEzYWkxaTJpMmkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaGc6MjEyb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQwNC40OGQyMzYuNTQzZDI2OC4yODhkMjM2LjU0M2QzODAuOTI4ZDQ4LjEyN2Q0ODMuMzI4ZDQ4LjEyN2Q1OTUuOTY4ZDIzNi41NDNkNDU4Ljc1MmQyMzYuNTQzZDQzMC4wOGQxOTEuNDg3ZDQwNC40OGQyMzYuNTQzaFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTc1Ljg3MlI2ZDBSN2Q5MjAuNTc2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTJSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjk5b1IwZDk5Ni4zNTJSMWFkNjUzLjMxMmQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ2NTMuMzEyZDQzMC4wOGQ2NTMuMzEyZDU4Ni43NTJoUjJkNzExLjY4UjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDU5My45MlI2ZDBSN2Q1NDEuNjk2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk5OVIxMWQ1Mi4yMjRSMTJkNzExLjY4UjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MjExb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDM0OC4xNmQyMzUuNTE5ZDQwMC4zODRkMjcuNjQ4ZDU2MS4xNTJkMjcuNjQ4ZDUwOC45MjhkMjM1LjUxOWQzNDguMTZkMjM1LjUxOWhSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk5Ni4zNTJSNmQwUjdkOTQxLjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjExUjExZDU1LjI5NlIxMmQ4NDcuODcyUjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5OG9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQ4NzUuNTJkNjU3LjQwOGQ5MzUuOTM2ZDYxMy44ODhkOTc5Ljk2OGQ1NzAuMzY4ZDEwMjRkNTA4LjkyOGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQyMzUuNTE5ZDIxMS45NjhkMjM1LjUxOWQyMTEuOTY4ZDQzMC4wOGQ1MDguOTI4ZDQzMC4wOGQyMTEuOTY4ZDU4Ni43NTJkMjExLjk2OGQ4NjcuMzI4ZDUwMC43MzZkODY3LjMyOGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyaFIyZDY4My4wMDhSM2Q2NTcuNDA4UjRkNTUuMjk2UjVkNzg4LjQ4UjZkMFI3ZDczMy4xODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTk4UjExZDU1LjI5NlIxMmQ2ODMuMDA4UjEzYWkxaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjEwb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQ2Ny45NjhkMjcuNjQ4ZDUyMC4xOTJkMjM1LjUxOWQzNTkuNDI0ZDIzNS41MTlkMzA3LjJkMjcuNjQ4ZDQ2Ny45NjhkMjcuNjQ4aFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTk2LjM1MlI2ZDBSN2Q5NDEuMDU2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTBSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk3b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4aFIyZDcxMC42NTZSM2Q2NTUuMzZSNGQ1My4yNDhSNWQ1OTMuOTJSNmQwUjdkNTQwLjY3MlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpOTdSMTFkNTMuMjQ4UjEyZDcxMC42NTZSMTNhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjA5b1IwZDk5Ni4zNTJSMWFkNjMzLjg1NmQ3NzguMjRkNjMzLjg1NmQyODYuNzJkNzk0LjYyNGQyODYuNzJkNzk0LjYyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTYuMDY0ZDUzMC40MzJkMjE2LjA2NGQxMDI0ZDU3LjM0NGQxMDI0ZDU3LjM0NGQyODYuNzJkMjIxLjE4NGQyODYuNzJkNjMzLjg1NmQ3NzguMjRkNTEwLjk3NmQxMTMuNjYzZDU1MC45MTJkMTEzLjY2M2Q2MDkuMjhkNzUuNzc1ZDYwOS4yOGQyMDQuNzk5ZDU0NS43OTJkMjMxLjQyM2Q1MDcuOTA0ZDIzMS40MjNkNDcwLjAxNmQyMzEuNDIzZDQxMS4xMzZkMTk5LjY3OWQzNTIuMjU2ZDE2Ny45MzZkMzIyLjU2ZDE2Ny45MzZkMzExLjI5NmQxNjcuOTM2ZDI2OC4yODhkMTY3LjkzNmQyMjUuMjhkMjA0Ljc5OWQyMjUuMjhkNzcuODIzZDI5NC45MTJkNTAuMTc1ZDMyMi41NmQ1MC4xNzVkMzYwLjQ0OGQ1MC4xNzVkNDE5Ljg0ZDc5Ljg3MWQ0NzkuMjMyZDEwOS41NjdkNTEwLjk3NmQxMTMuNjYzaFIyZDg1MS45NjhSM2Q3OTQuNjI0UjRkNTcuMzQ0UjVkOTczLjgyNFI2ZDBSN2Q5MTYuNDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIwOVIxMWQ1Ny4zNDRSMTJkODUxLjk2OFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6OTZvUjBkOTk2LjM1MlIxYWQxOTMuNTM2ZDUxLjE5OWQyNDUuNzZkMjU5LjA3MmQ4NC45OTJkMjU5LjA3MmQzMi43NjhkNTEuMTk5ZDE5My41MzZkNTEuMTk5aFIyZDI3OC41MjhSM2QyNDUuNzZSNGQzMi43NjhSNWQ5NzIuOFI2ZDc2NC45MjhSN2Q5NDAuMDMyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk5NlIxMWQzMi43NjhSMTJkMjc4LjUyOFIxM2FpMWkyaTJpMmkyaGc6MjA4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMDhSMTFkMFIxMmQwUjEzYWhnOjk1b1IwZDk5Ni4zNTJSMWFkNzc5LjI2NGQxMDI2LjA0OGQ3NzkuMjY0ZDExODIuNzJkNTUuMjk2ZDExODIuNzJkNTUuMjk2ZDEwMjYuMDQ4ZDc3OS4yNjRkMTAyNi4wNDhoUjJkODQ3Ljg3MlIzZDc3OS4yNjRSNGQ1NS4yOTZSNWQtMi4wNDhSNmQtMTU4LjcyUjdkLTU3LjM0NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpOTVSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkyaTJpMmhnOjIwN29SMGQ5OTYuMzUyUjFhZDc1Ljc3NmQxMDI0ZDc1Ljc3NmQyODYuNzJkMjM1LjUyZDI4Ni43MmQyMzUuNTJkMTAyNGQ3NS43NzZkMTAyNGQzNDYuMTEyZDc3LjgyM2QzNDYuMTEyZDIzNS41MTlkMTg4LjQxNmQyMzUuNTE5ZDE4OC40MTZkNzcuODIzZDM0Ni4xMTJkNzcuODIzZDEyNi45NzZkNzcuODIzZDEyNi45NzZkMjM1LjUxOWQtMjkuNjk2ZDIzNS41MTlkLTI5LjY5NmQ3Ny44MjNkMTI2Ljk3NmQ3Ny44MjNoUjJkMjI1LjI4UjNkMzQ2LjExMlI0ZC0yOS42OTZSNWQ5NDYuMTc2UjZkMFI3ZDk3NS44NzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIwN1IxMWQtMjkuNjk2UjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5NG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpOTRSMTFkMFIxMmQwUjEzYWhnOjIwNm9SMGQ5OTYuMzUyUjFhZDYzLjQ4OGQxMDI0ZDYzLjQ4OGQyODYuNzJkMjIzLjIzMmQyODYuNzJkMjIzLjIzMmQxMDI0ZDYzLjQ4OGQxMDI0ZDEyMy45MDRkMjM2LjU0M2QtMTIuMjg4ZDIzNi41NDNkMTAwLjM1MmQ0OC4xMjdkMjAyLjc1MmQ0OC4xMjdkMzE1LjM5MmQyMzYuNTQzZDE3OC4xNzZkMjM2LjU0M2QxNDkuNTA0ZDE5MS40ODdkMTIzLjkwNGQyMzYuNTQzaFIyZDIyNS4yOFIzZDMxNS4zOTJSNGQtMTIuMjg4UjVkOTc1Ljg3MlI2ZDBSN2Q5ODguMTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIwNlIxMWQtMTIuMjg4UjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjkzb1IwZDk5Ni4zNTJSMWFkNTIuMjI0ZDQ0My4zOTFkNTIuMjI0ZDI4Ni43MmQyNjguMjg4ZDI4Ni43MmQyNjguMjg4ZDEwMjRkNTIuMjI0ZDEwMjRkNTIuMjI0ZDg2Ny4zMjhkMTEwLjU5MmQ4NjcuMzI4ZDExMC41OTJkNDQzLjM5MWQ1Mi4yMjRkNDQzLjM5MWhSMmQyODIuNjI0UjNkMjY4LjI4OFI0ZDUyLjIyNFI1ZDczNy4yOFI2ZDBSN2Q2ODUuMDU2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk5M1IxMWQ1Mi4yMjRSMTJkMjgyLjYyNFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjBkOTk2LjM1MlIxYWQ0My4wMDhkMTAyNGQ0My4wMDhkMjg2LjcyZDIwMi43NTJkMjg2LjcyZDIwMi43NTJkMTAyNGQ0My4wMDhkMTAyNGQzNi44NjRkMjM1LjUxOWQ4OS4wODhkMjcuNjQ4ZDI0OS44NTZkMjcuNjQ4ZDE5Ny42MzJkMjM1LjUxOWQzNi44NjRkMjM1LjUxOWhSMmQyMjUuMjhSM2QyNDkuODU2UjRkMzYuODY0UjVkOTk2LjM1MlI2ZDBSN2Q5NTkuNDg4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMDVSMTFkMzYuODY0UjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkyb1IwZDk5Ni4zNTJSMWFkNS4xMmQyODYuNzJkNjEuNDRkMjg2LjcyZDUzMy41MDRkODY2LjMwNGQ1MzMuNTA0ZDEwMjRkNDc3LjE4NGQxMDI0ZDUuMTJkNDQ0LjQxNWQ1LjEyZDI4Ni43MmhSMmQ1MzIuNDhSM2Q1MzMuNTA0UjRkNS4xMlI1ZDczNy4yOFI2ZDBSN2Q3MzIuMTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTkyUjExZDUuMTJSMTJkNTMyLjQ4UjEzYWkxaTJpMmkyaTJpMmkyaGc6MjA0b1IwZDk5Ni4zNTJSMWFkOTcuMjhkMTAyNGQ5Ny4yOGQyODYuNzJkMjU3LjAyNGQyODYuNzJkMjU3LjAyNGQxMDI0ZDk3LjI4ZDEwMjRkMTk3LjYzMmQyNy42NDhkMjQ5Ljg1NmQyMzUuNTE5ZDg5LjA4OGQyMzUuNTE5ZDM2Ljg2NGQyNy42NDhkMTk3LjYzMmQyNy42NDhoUjJkMjI1LjI4UjNkMjU3LjAyNFI0ZDM2Ljg2NFI1ZDk5Ni4zNTJSNmQwUjdkOTU5LjQ4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjA0UjExZDM2Ljg2NFIxMmQyMjUuMjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MW9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQxMDI0ZDU1LjI5NmQyODYuNzJkMjcxLjM2ZDI4Ni43MmQyNzEuMzZkNDQzLjM5MWQyMTEuOTY4ZDQ0My4zOTFkMjExLjk2OGQ4NjcuMzI4ZDI3MS4zNmQ4NjcuMzI4ZDI3MS4zNmQxMDI0ZDU1LjI5NmQxMDI0aFIyZDI4MS42UjNkMjcxLjM2UjRkNTUuMjk2UjVkNzM3LjI4UjZkMFI3ZDY4MS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTkxUjExZDU1LjI5NlIxMmQyODEuNlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDNvUjBkOTk2LjM1MlIxYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJkNTk0Ljk0NGQ3Ny44MjNkNTk0Ljk0NGQyMzUuNTE5ZDQzNy4yNDhkMjM1LjUxOWQ0MzcuMjQ4ZDc3LjgyM2Q1OTQuOTQ0ZDc3LjgyM2QzNzUuODA4ZDc3LjgyM2QzNzUuODA4ZDIzNS41MTlkMjE5LjEzNmQyMzUuNTE5ZDIxOS4xMzZkNzcuODIzZDM3NS44MDhkNzcuODIzaFIyZDc4NC4zODRSM2Q3NDAuMzUyUjRkNTkuMzkyUjVkOTQ2LjE3NlI2ZDBSN2Q4ODYuNzg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMDNSMTFkNTkuMzkyUjEyZDc4NC4zODRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkwb1IwZDk5Ni4zNTJSMWFkNTIuMjI0ZDQ0Ni40NjNkNTIuMjI0ZDI4Ni43MmQ3ODkuNTA0ZDI4Ni43MmQ3ODkuNTA0ZDQ0OS41MzVkMjk1LjkzNmQ4NjQuMjU2ZDc4OS41MDRkODY0LjI1NmQ3ODkuNTA0ZDEwMjRkNTIuMjI0ZDEwMjRkNTIuMjI0ZDg2MS4xODRkNTQ1Ljc5MmQ0NDYuNDYzZDUyLjIyNGQ0NDYuNDYzaFIyZDg0MC43MDRSM2Q3ODkuNTA0UjRkNTIuMjI0UjVkNzM3LjI4UjZkMFI3ZDY4NS4wNTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTkwUjExZDUyLjIyNFIxMmQ4NDAuNzA0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMDJvUjBkOTk2LjM1MlIxYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJkMzcyLjczNmQyMzYuNTQzZDIzNi41NDRkMjM2LjU0M2QzNDkuMTg0ZDQ4LjEyN2Q0NTEuNTg0ZDQ4LjEyN2Q1NjQuMjI0ZDIzNi41NDNkNDI3LjAwOGQyMzYuNTQzZDM5OC4zMzZkMTkxLjQ4N2QzNzIuNzM2ZDIzNi41NDNoUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ5NzUuODcyUjZkMFI3ZDkxNi40OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjAyUjExZDU5LjM5MlIxMmQ3ODQuMzg0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjg5b1IwZDk5Ni4zNTJSMWFkNjY4LjY3MmQyODYuNzJkODYwLjE2ZDI4Ni43MmQ1MTguMTQ0ZDc0OS41NjhkNTE4LjE0NGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkNzQ4LjU0NGQyMjQuMjU2ZDU2OC4zMTlkMTcuNDA4ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ0MzguMjcyZDU3Ny41MzZkNjY4LjY3MmQyODYuNzJoUjJkODI1LjM0NFIzZDg2MC4xNlI0ZDE3LjQwOFI1ZDczNy4yOFI2ZDBSN2Q3MTkuODcyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk4OVIxMWQxNy40MDhSMTJkODI1LjM0NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjAxb1IwZDk5Ni4zNTJSMWFkNzQwLjM1MmQyODYuNzJkNzQwLjM1MmQ0NDYuNDYzZDIyMC4xNmQ0NDYuNDYzZDIyMC4xNmQ1NzUuNDg4ZDYzOC45NzZkNTc1LjQ4OGQ2MzguOTc2ZDczNS4yMzJkMjIwLjE2ZDczNS4yMzJkMjIwLjE2ZDg2NC4yNTZkNzQwLjM1MmQ4NjQuMjU2ZDc0MC4zNTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkMjg2LjcyZDc0MC4zNTJkMjg2LjcyZDMxNi40MTZkMjM1LjUxOWQzNjguNjRkMjcuNjQ4ZDUyOS40MDhkMjcuNjQ4ZDQ3Ny4xODRkMjM1LjUxOWQzMTYuNDE2ZDIzNS41MTloUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ5OTYuMzUyUjZkMFI3ZDkzNi45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjAxUjExZDU5LjM5MlIxMmQ3ODQuMzg0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjg4b1IwZDk5Ni4zNTJSMWFkNjE5LjUyZDI4Ni43MmQ3ODQuMzg0ZDI4Ni43MmQ3ODQuMzg0ZDM0MC45OTFkNTIwLjE5MmQ2NTUuMzZkNzg0LjM4NGQ5NjguNzA0ZDc4NC4zODRkMTAyNGQ2MTkuNTJkMTAyNGQ0MTQuNzJkNzgyLjMzNmQyMTEuOTY4ZDEwMjRkNDcuMTA0ZDEwMjRkNDcuMTA0ZDk2OS43MjhkMzEwLjI3MmQ2NTUuMzZkNDcuMTA0ZDM0MC45OTFkNDcuMTA0ZDI4Ni43MmQyMTEuOTY4ZDI4Ni43MmQ0MTYuNzY4ZDUyOS40MDhkNDQ2LjQ2NGQ0OTEuNTJkNTE5LjE2OGQ0MDYuMDE1ZDU5MS44NzJkMzIwLjUxMWQ2MTkuNTJkMjg2LjcyaFIyZDgzMS40ODhSM2Q3ODQuMzg0UjRkNDcuMTA0UjVkNzM3LjI4UjZkMFI3ZDY5MC4xNzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTg4UjExZDQ3LjEwNFIxMmQ4MzEuNDg4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2hnOjIwMG9SMGQ5OTYuMzUyUjFhZDc0MC4zNTJkMjg2LjcyZDc0MC4zNTJkNDQ2LjQ2M2QyMjAuMTZkNDQ2LjQ2M2QyMjAuMTZkNTc1LjQ4OGQ2MzguOTc2ZDU3NS40ODhkNjM4Ljk3NmQ3MzUuMjMyZDIyMC4xNmQ3MzUuMjMyZDIyMC4xNmQ4NjQuMjU2ZDc0MC4zNTJkODY0LjI1NmQ3NDAuMzUyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQ0NDYuNDY0ZDI3LjY0OGQ0OTguNjg4ZDIzNS41MTlkMzM3LjkyZDIzNS41MTlkMjg1LjY5NmQyNy42NDhkNDQ2LjQ2NGQyNy42NDhoUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ5OTYuMzUyUjZkMFI3ZDkzNi45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjAwUjExZDU5LjM5MlIxMmQ3ODQuMzg0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjg3b1IwZDk5Ni4zNTJSMWFkOTk1LjMyOGQyODYuNzJkMTE2My4yNjRkMjg2LjcyZDg5NC45NzZkMTAyNGQ3NzMuMTJkMTAyNGQ1OTkuMDRkNTQ5Ljg4N2Q1MzMuNTA0ZDczMC4xMTJkNDI1Ljk4NGQxMDI0ZDMwNC4xMjhkMTAyNGQzNS44NGQyODYuNzJkMjA0LjhkMjg2LjcyZDM2NS41NjhkNzI2LjAxNmQzOTEuMTY4ZDY1Ny40MDhkNTI2LjMzNmQyODYuNzJkNjcyLjc2OGQyODYuNzJkODM0LjU2ZDcyNi4wMTZkODYwLjE2ZDY1Ny40MDhkOTk1LjMyOGQyODYuNzJoUjJkMTIwNy4yOTZSM2QxMTYzLjI2NFI0ZDM1Ljg0UjVkNzM3LjI4UjZkMFI3ZDcwMS40NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODdSMTFkMzUuODRSMTJkMTIwNy4yOTZSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5OW9SMGQ5OTYuMzUyUjFhZDc5Mi41NzZkNDQ2LjQ2M2QyMTYuMDY0ZDQ0Ni40NjNkMjE2LjA2NGQ4NjQuMjU2ZDc5Mi41NzZkODY0LjI1NmQ3OTIuNTc2ZDEwMjRkNTQzLjc0NGQxMDI0ZDQ5NS42MTZkMTE4My43NDRkMzM0Ljg0OGQxMTgzLjc0NGQzODIuOTc2ZDEwMjRkMjA4Ljg5NmQxMDI0ZDE0NS40MDhkMTAyNGQxMDEuMzc2ZDk3OS45NjhkNTcuMzQ0ZDkzNS45MzZkNTcuMzQ0ZDg3Mi40NDhkNTcuMzQ0ZDQzOC4yNzFkNTcuMzQ0ZDM3NC43ODRkMTAxLjM3NmQzMzAuNzUxZDE0NS40MDhkMjg2LjcyZDIwOC44OTZkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkNDQ2LjQ2M2hSMmQ4NDEuNzI4UjNkNzkyLjU3NlI0ZDU3LjM0NFI1ZDczNy4yOFI2ZC0xNTkuNzQ0UjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTk5UjExZDU3LjM0NFIxMmQ4NDEuNzI4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzo4Nm9SMGQ5OTYuMzUyUjFhZDUyOS40MDhkODIyLjI3MWQ4MzguNjU2ZDI4Ni43MmQxMDIxLjk1MmQyODYuNzJkNTk0Ljk0NGQxMDI0ZDQ2Mi44NDhkMTAyNGQzNS44NGQyODYuNzJkMjIwLjE2ZDI4Ni43MmQ1MjkuNDA4ZDgyMi4yNzFoUjJkMTAyNy4wNzJSM2QxMDIxLjk1MlI0ZDM1Ljg0UjVkNzM3LjI4UjZkMFI3ZDcwMS40NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODZSMTFkMzUuODRSMTJkMTAyNy4wNzJSMTNhaTFpMmkyaTJpMmkyaTJpMmhnOjE5OG9SMGQ5OTYuMzUyUjFhZDc5Mi41NzZkNDQ2LjQ2M2Q3OTIuNTc2ZDU3NS40ODhkMTIxMS4zOTJkNTc1LjQ4OGQxMjExLjM5MmQ3MzUuMjMyZDc5Mi41NzZkNzM1LjIzMmQ3OTIuNTc2ZDg2NC4yNTZkMTMxMy43OTJkODY0LjI1NmQxMzEzLjc5MmQxMDI0ZDYzMy44NTZkMTAyNGQ2MzMuODU2ZDc4Ni40MzJkMjE2LjA2NGQ3ODYuNDMyZDIxNi4wNjRkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDM4LjI3MWQ1NS4yOTZkMzc1LjgwOGQ5OS44NGQzMzEuMjY0ZDE0NC4zODRkMjg2LjcyZDIwNi44NDhkMjg2LjcyZDEzMTMuNzkyZDI4Ni43MmQxMzEzLjc5MmQ0NDYuNDYzZDc5Mi41NzZkNDQ2LjQ2M2Q2MzMuODU2ZDYyNi42ODhkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDYyNi42ODhkNjMzLjg1NmQ2MjYuNjg4aFIyZDE0MDhSM2QxMzEzLjc5MlI0ZDU1LjI5NlI1ZDczNy4yOFI2ZDBSN2Q2ODEuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxOThSMTFkNTUuMjk2UjEyZDE0MDhSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMWkyaTJpMmkyaGc6ODVvUjBkOTk2LjM1MlIxYWQyMTQuMDE2ZDI4Ni43MmQyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQyODYuNzJkMjE0LjAxNmQyODYuNzJoUjJkODQ3Ljg3MlIzZDc5Mi41NzZSNGQ1NS4yOTZSNWQ3MzcuMjhSNmQwUjdkNjgxLjk4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODVSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoxOTdvUjBkOTk2LjM1MlIxYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDM4Ni4wNDhkMjguNjcyZDQzOC4yNzJkMjguNjcyZDQ3MC4wMTZkMjguNjcyZDQ5My4wNTZkNTEuNzExZDUxNi4wOTZkNzQuNzUxZDUxNi4wOTZkMTA2LjQ5NWQ1MTYuMDk2ZDE1Ni42NzJkNTE2LjA5NmQxODguNDE1ZDQ5My4wNTZkMjExLjQ1NmQ0NzAuMDE2ZDIzNC40OTVkNDM4LjI3MmQyMzQuNDk1ZDM4Ni4wNDhkMjM0LjQ5NWQzNTQuMzA0ZDIzNC40OTVkMzMwLjc1MmQyMTEuNDU2ZDMwNy4yZDE4OC40MTVkMzA3LjJkMTU2LjY3MmQzMDcuMmQxMDYuNDk1ZDMwNy4yZDc0Ljc1MWQzMzAuNzUyZDUxLjcxMWQzNTQuMzA0ZDI4LjY3MmQzODYuMDQ4ZDI4LjY3MmQzODYuMDQ4ZDEwOC41NDNkMzg2LjA0OGQxNjMuODRkNDM4LjI3MmQxNjMuODRkNDM4LjI3MmQxMDguNTQzZDM4Ni4wNDhkMTA4LjU0M2hSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDk5NS4zMjhSNmQwUjdkOTM1LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTk3UjExZDU5LjM5MlIxMmQ4NTYuMDY0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmhnOjg0b1IwZDk5Ni4zNTJSMWFkMjAuNDhkMjg2LjcyZDc1Ny43NmQyODYuNzJkNzU3Ljc2ZDQ0Ni40NjNkNDY4Ljk5MmQ0NDYuNDYzZDQ2OC45OTJkMTAyNGQzMDkuMjQ4ZDEwMjRkMzA5LjI0OGQ0NDYuNDYzZDIwLjQ4ZDQ0Ni40NjNkMjAuNDhkMjg2LjcyaFIyZDc3Ny4yMTZSM2Q3NTcuNzZSNGQyMC40OFI1ZDczNy4yOFI2ZDBSN2Q3MTYuOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODRSMTFkMjAuNDhSMTJkNzc3LjIxNlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjBkOTk2LjM1MlIxYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDYyMC41NDRkNzcuODIzZDYyMC41NDRkMjM1LjUxOWQ0NjIuODQ4ZDIzNS41MTlkNDYyLjg0OGQ3Ny44MjNkNjIwLjU0NGQ3Ny44MjNkNDAxLjQwOGQ3Ny44MjNkNDAxLjQwOGQyMzUuNTE5ZDI0NC43MzZkMjM1LjUxOWQyNDQuNzM2ZDc3LjgyM2Q0MDEuNDA4ZDc3LjgyM2hSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDk0Ni4xNzZSNmQwUjdkODg2Ljc4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTk2UjExZDU5LjM5MlIxMmQ4NTYuMDY0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODNvUjBkOTk2LjM1MlIxYWQ3ODkuNTA0ZDQzOC4yNzFkNzg5LjUwNGQ1MDYuODhkNjI4LjczNmQ1MDYuODhkNjI4LjczNmQ0NDYuNDYzZDIxMC45NDRkNDQ2LjQ2M2QyMTAuOTQ0ZDU3NS40ODhkNjM3Ljk1MmQ1NzUuNDg4ZDcwMC40MTZkNTc1LjQ4OGQ3NDQuOTZkNjIwLjAzMWQ3ODkuNTA0ZDY2NC41NzZkNzg5LjUwNGQ3MjcuMDRkNzg5LjUwNGQ4NzIuNDQ4ZDc4OS41MDRkOTM0LjkxMmQ3NDQuOTZkOTc5LjQ1NmQ3MDAuNDE2ZDEwMjRkNjM3Ljk1MmQxMDI0ZDIwMy43NzZkMTAyNGQxNDEuMzEyZDEwMjRkOTYuNzY4ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3Mi40NDhkNTIuMjI0ZDgwMy44NGQyMTAuOTQ0ZDgwMy44NGQyMTAuOTQ0ZDg2NC4yNTZkNjI4LjczNmQ4NjQuMjU2ZDYyOC43MzZkNzM1LjIzMmQyMDMuNzc2ZDczNS4yMzJkMTQxLjMxMmQ3MzUuMjMyZDk2Ljc2OGQ2OTEuMmQ1Mi4yMjRkNjQ3LjE2OGQ1Mi4yMjRkNTgzLjY4ZDUyLjIyNGQ0MzguMjcxZDUyLjIyNGQzNzQuNzg0ZDk2Ljc2OGQzMzAuNzUxZDE0MS4zMTJkMjg2LjcyZDIwMy43NzZkMjg2LjcyZDYzNy45NTJkMjg2LjcyZDcwMC40MTZkMjg2LjcyZDc0NC45NmQzMzEuMjY0ZDc4OS41MDRkMzc1LjgwOGQ3ODkuNTA0ZDQzOC4yNzFoUjJkODQxLjcyOFIzZDc4OS41MDRSNGQ1Mi4yMjRSNWQ3MzcuMjhSNmQwUjdkNjg1LjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODNSMTFkNTIuMjI0UjEyZDg0MS43MjhSMTNhaTFpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2hnOjE5NW9SMGQ5OTYuMzUyUjFhZDIxMC45NDRkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkMTAyNGQ2MzUuOTA0ZDEwMjRkNjM1LjkwNGQ3ODYuNDMyZDIxOC4xMTJkNzg2LjQzMmQyMTguMTEyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDQzOC4yNzFkNTkuMzkyZDM3NC43ODRkMTAzLjQyNGQzMzAuNzUxZDE0Ny40NTZkMjg2LjcyZDIxMC45NDRkMjg2LjcyZDIxOC4xMTJkNjI2LjY4OGQ2MzUuOTA0ZDYyNi42ODhkNjM1LjkwNGQ0NDYuNDYzZDIxOC4xMTJkNDQ2LjQ2M2QyMTguMTEyZDYyNi42ODhkNDkyLjU0NGQxMTMuNjYzZDUzMi40OGQxMTMuNjYzZDU5MC44NDhkNzUuNzc1ZDU5MC44NDhkMjA0Ljc5OWQ1MjcuMzZkMjMxLjQyM2Q0ODkuNDcyZDIzMS40MjNkNDUxLjU4NGQyMzEuNDIzZDM5Mi43MDRkMTk5LjY3OWQzMzMuODI0ZDE2Ny45MzZkMzA0LjEyOGQxNjcuOTM2ZDI5Mi44NjRkMTY3LjkzNmQyNDkuODU2ZDE2Ny45MzZkMjA2Ljg0OGQyMDQuNzk5ZDIwNi44NDhkNzcuODIzZDI3NS40NTZkNTAuMTc1ZDMwNC4xMjhkNTAuMTc1ZDM0Mi4wMTZkNTAuMTc1ZDQwMS40MDhkNzkuODcxZDQ2MC44ZDEwOS41NjdkNDkyLjU0NGQxMTMuNjYzaFIyZDg1Ni4wNjRSM2Q3OTYuNjcyUjRkNTkuMzkyUjVkOTczLjgyNFI2ZDBSN2Q5MTQuNDMyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxOTVSMTFkNTkuMzkyUjEyZDg1Ni4wNjRSMTNhaTFpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6ODJvUjBkOTk2LjM1MlIxYWQ3OTMuNmQ0MzkuMjk1ZDc5My42ZDYyOS43NmQ3OTMuNmQ2OTIuMjIzZDc0OC41NDRkNzM2Ljc2OGQ3MDMuNDg4ZDc4MS4zMTJkNjQxLjAyNGQ3ODEuMzEyZDYzMy44NTZkNzgxLjMxMmQ3OTMuNmQ5NjkuNzI4ZDc5My42ZDEwMjRkNjI5Ljc2ZDEwMjRkNDI1Ljk4NGQ3ODEuMzEyZDIxNS4wNGQ3ODIuMzM2ZDIxOC4xMTJkNzgyLjMzNmQyMTguMTEyZDc4OC40OGQyMTYuMDY0ZDc4OC40OGQyMTUuMDRkNzg3LjQ1NmQyMTUuMDRkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDI4Ny43NDRkNjQxLjAyNGQyODcuNzQ0ZDcwMy40ODhkMjg3Ljc0NGQ3NDguNTQ0ZDMzMi4yODhkNzkzLjZkMzc2LjgzMmQ3OTMuNmQ0MzkuMjk1ZDIxNS4wNGQ0NDYuNDYzZDIxNS4wNGQ2MjEuNTY4ZDYzMi44MzJkNjIxLjU2OGQ2MzIuODMyZDQ0Ni40NjNkMjE1LjA0ZDQ0Ni40NjNoUjJkODQ0LjhSM2Q3OTMuNlI0ZDU2LjMyUjVkNzM2LjI1NlI2ZDBSN2Q2NzkuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk4MlIxMWQ1Ni4zMlIxMmQ4NDQuOFIxM2FpMWkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaGc6MTk0b1IwZDk5Ni4zNTJSMWFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGQ0MDguNTc2ZDIzNi41NDNkMjcyLjM4NGQyMzYuNTQzZDM4NS4wMjRkNDguMTI3ZDQ4Ny40MjRkNDguMTI3ZDYwMC4wNjRkMjM2LjU0M2Q0NjIuODQ4ZDIzNi41NDNkNDM0LjE3NmQxOTEuNDg3ZDQwOC41NzZkMjM2LjU0M2hSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDk3NS44NzJSNmQwUjdkOTE2LjQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxOTRSMTFkNTkuMzkyUjEyZDg1Ni4wNjRSMTNhaTFpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjgxb1IwZDk5Ni4zNTJSMWFkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODY0LjI1NmQ4NzYuNTQ0ZDg2NC4yNTZkODc2LjU0NGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkNDM4LjI3MWQ1NS4yOTZkMzc0Ljc4NGQ5OS4zMjhkMzMwLjc1MWQxNDMuMzZkMjg2LjcyZDIwNi44NDhkMjg2LjcyZDY0MGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2hSMmQ5MDUuMjE2UjNkODc2LjU0NFI0ZDU1LjI5NlI1ZDczNy4yOFI2ZDBSN2Q2ODEuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk4MVIxMWQ1NS4yOTZSMTJkOTA1LjIxNlIxM2FpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxOTNvUjBkOTk2LjM1MlIxYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDM0Mi4wMTZkMjM2LjU0M2QzOTQuMjRkMjguNjcyZDU1NS4wMDhkMjguNjcyZDUwMi43ODRkMjM2LjU0M2QzNDIuMDE2ZDIzNi41NDNoUjJkODU2LjA2NFIzZDc5Ni42NzJSNGQ1OS4zOTJSNWQ5OTUuMzI4UjZkMFI3ZDkzNS45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE5M1IxMWQ1OS4zOTJSMTJkODU2LjA2NFIxM2FpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODBvUjBkOTk2LjM1MlIxYWQ1Ny4zNDRkMjg3Ljc0NGQ2NDIuMDQ4ZDI4Ny43NDRkNzA0LjUxMmQyODcuNzQ0ZDc0OS41NjhkMzMyLjI4OGQ3OTQuNjI0ZDM3Ni44MzJkNzk0LjYyNGQ0MzkuMjk1ZDc5NC42MjRkNjI5Ljc2ZDc5NC42MjRkNjkyLjIyM2Q3NDkuNTY4ZDczNi43NjhkNzA0LjUxMmQ3ODEuMzEyZDY0Mi4wNDhkNzgxLjMxMmQyMTYuMDY0ZDc4Mi4zMzZkMjE5LjEzNmQ3ODIuMzM2ZDIxOS4xMzZkNzg4LjQ4ZDIxNy4wODhkNzg4LjQ4ZDIxNi4wNjRkNzg3LjQ1NmQyMTYuMDY0ZDEwMjRkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDI4Ny43NDRkMjE2LjA2NGQ0NDYuNDYzZDIxNi4wNjRkNjIxLjU2OGQ2MzMuODU2ZDYyMS41NjhkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2hSMmQ4MDkuOTg0UjNkNzk0LjYyNFI0ZDU3LjM0NFI1ZDczNi4yNTZSNmQwUjdkNjc4LjkxMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODBSMTFkNTcuMzQ0UjEyZDgwOS45ODRSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMWkyaTJpMmkyaGc6MTkyb1IwZDk5Ni4zNTJSMWFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGQ0NjEuODI0ZDI3LjY0OGQ1MTQuMDQ4ZDIzNS41MTlkMzUzLjI4ZDIzNS41MTlkMzAxLjA1NmQyNy42NDhkNDYxLjgyNGQyNy42NDhoUjJkODU2LjA2NFIzZDc5Ni42NzJSNGQ1OS4zOTJSNWQ5OTYuMzUyUjZkMFI3ZDkzNi45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTkyUjExZDU5LjM5MlIxMmQ4NTYuMDY0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo3OW9SMGQ5OTYuMzUyUjFhZDIwNi44NDhkMjg2LjcyZDY0MS4wMjRkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQ0MzguMjcxZDU1LjI5NmQzNzQuNzg0ZDk5LjMyOGQzMzAuNzUxZDE0My4zNmQyODYuNzJkMjA2Ljg0OGQyODYuNzJkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2hSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDczNy4yOFI2ZDBSN2Q2ODEuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3OVIxMWQ1NS4yOTZSMTJkODQ3Ljg3MlIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxOTFvUjBkOTk2LjM1MlIxYWQ2NTcuNDA4ZDEwMjRkMTY4Ljk2ZDEwMjRkMTA3LjUyZDEwMjRkNjMuNDg4ZDk3OS45NjhkMTkuNDU2ZDkzNS45MzZkMTkuNDU2ZDg3NS41MmQxOS40NTZkNzA0LjUxMmQxOS40NTZkNjQzLjA3MmQ2My40ODhkNTk5LjU1MWQxMDcuNTJkNTU2LjAzMWQxNjguOTZkNTU2LjAzMWQ0MDAuMzg0ZDU1Ni4wMzFkNDAwLjM4NGQ0NzkuMjMyZDU1Ny4wNTZkNDc5LjIzMmQ1NTcuMDU2ZDU2NC4yMjNkNTU3LjA1NmQ2MjUuNjY0ZDUxMy4wMjRkNjY5LjY5NWQ0NjguOTkyZDcxMy43MjhkNDA3LjU1MmQ3MTMuNzI4ZDE3Ni4xMjhkNzEzLjcyOGQxNzYuMTI4ZDg2Ny4zMjhkNjU3LjQwOGQ4NjcuMzI4ZDY1Ny40MDhkMTAyNGQ1NTcuMDU2ZDMwMS4wNTZkNTU3LjA1NmQ0NTcuNzI3ZDQwMC4zODRkNDU3LjcyN2Q0MDAuMzg0ZDMwMS4wNTZkNTU3LjA1NmQzMDEuMDU2aFIyZDY5MS4yUjNkNjU3LjQwOFI0ZDE5LjQ1NlI1ZDcyMi45NDRSNmQwUjdkNzAzLjQ4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTkxUjExZDE5LjQ1NlIxMmQ2OTEuMlIxM2FpMWkyaTNpM2kyaTNpM2kyaTJpMmkyaTNpM2kyaTJpMmkyaTFpMmkyaTJpMmhnOjc4b1IwZDk5Ni4zNTJSMWFkNjMzLjg1NmQ3NzguMjRkNjMzLjg1NmQyODYuNzJkNzk0LjYyNGQyODYuNzJkNzk0LjYyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTYuMDY0ZDUzMC40MzJkMjE2LjA2NGQxMDI0ZDU3LjM0NGQxMDI0ZDU3LjM0NGQyODYuNzJkMjIxLjE4NGQyODYuNzJkNjMzLjg1NmQ3NzguMjRoUjJkODUxLjk2OFIzZDc5NC42MjRSNGQ1Ny4zNDRSNWQ3MzcuMjhSNmQwUjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzhSMTFkNTcuMzQ0UjEyZDg1MS45NjhSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5MG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTkwUjExZDBSMTJkMFIxM2FoZzo3N29SMGQ5OTYuMzUyUjFhZDQ3MS4wNGQ1ODQuNzA0ZDcxOS44NzJkMjg2LjcyZDg4NC43MzZkMjg2LjcyZDg4NC43MzZkMTAyNGQ3MjQuOTkyZDEwMjRkNzI0Ljk5MmQ1MjkuNDA4ZDQ3MS4wNGQ4MzIuNTEyZDIxNi4wNjRkNTMwLjQzMmQyMTYuMDY0ZDEwMjRkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDI4Ni43MmQyMjEuMTg0ZDI4Ni43MmQ0NzEuMDRkNTg0LjcwNGhSMmQ5NTAuMjcyUjNkODg0LjczNlI0ZDU3LjM0NFI1ZDczNy4yOFI2ZDBSN2Q2NzkuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3N1IxMWQ1Ny4zNDRSMTJkOTUwLjI3MlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4OW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTg5UjExZDBSMTJkMFIxM2FoZzo3Nm9SMGQ5OTYuMzUyUjFhZDU4LjM2OGQxMDI0ZDU4LjM2OGQyODUuNjk2ZDIxNy4wODhkMjg1LjY5NmQyMTcuMDg4ZDg2NC4yNTZkNzk1LjY0OGQ4NjQuMjU2ZDc5NS42NDhkMTAyNGQ1OC4zNjhkMTAyNGhSMmQ3OTcuNjk2UjNkNzk1LjY0OFI0ZDU4LjM2OFI1ZDczOC4zMDRSNmQwUjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzZSMTFkNTguMzY4UjEyZDc5Ny42OTZSMTNhaTFpMmkyaTJpMmkyaTJoZzoxODhvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4OFIxMWQwUjEyZDBSMTNhaGc6NzVvUjBkOTk2LjM1MlIxYWQ2MDQuMTZkMjg2LjcyZDc3MC4wNDhkMjg2LjcyZDc3MC4wNDhkMzQyLjAxNWQ1MDYuODhkNjU1LjM2ZDc3MC4wNDhkOTY4LjcwNGQ3NzAuMDQ4ZDEwMjRkNjA0LjE2ZDEwMjRkMzYyLjQ5NmQ3MzUuMjMyZDIxOC4xMTJkNzM1LjIzMmQyMTguMTEyZDEwMjRkNTguMzY4ZDEwMjRkNTguMzY4ZDI4Ni43MmQyMTguMTEyZDI4Ni43MmQyMTguMTEyZDU3NS40ODhkMzYyLjQ5NmQ1NzUuNDg4ZDQ1NC42NTZkNDY1LjkxOWQ2MDQuMTZkMjg2LjcyaFIyZDgxNi4xMjhSM2Q3NzAuMDQ4UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTc1UjExZDU4LjM2OFIxMmQ4MTYuMTI4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4N1IxMWQwUjEyZDBSMTNhaGc6NzRvUjBkOTk2LjM1MlIxYWQxNjIuODE2ZDc3Ny4yMTZkMTYyLjgxNmQ4NjQuMjU2ZDU4MC42MDhkODY0LjI1NmQ1ODAuNjA4ZDI4Ni43MmQ3NDEuMzc2ZDI4Ni43MmQ3NDEuMzc2ZDg3Mi40NDhkNzQxLjM3NmQ5MzQuOTEyZDY5Ni44MzJkOTc5LjQ1NmQ2NTIuMjg4ZDEwMjRkNTg5LjgyNGQxMDI0ZDE1NS42NDhkMTAyNGQ5Mi4xNmQxMDI0ZDQ4LjEyOGQ5NzkuOTY4ZDQuMDk2ZDkzNS45MzZkNC4wOTZkODcyLjQ0OGQ0LjA5NmQ3NzcuMjE2ZDE2Mi44MTZkNzc3LjIxNmhSMmQ3OTguNzJSM2Q3NDEuMzc2UjRkNC4wOTZSNWQ3MzcuMjhSNmQwUjdkNzMzLjE4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzRSMTFkNC4wOTZSMTJkNzk4LjcyUjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MTg2b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxODZSMTFkMFIxMmQwUjEzYWhnOjczb1IwZDk5Ni4zNTJSMWFkNTguMzY4ZDEwMjRkNTguMzY4ZDI4Ni43MmQyMTguMTEyZDI4Ni43MmQyMTguMTEyZDEwMjRkNTguMzY4ZDEwMjRoUjJkMjI1LjI4UjNkMjE4LjExMlI0ZDU4LjM2OFI1ZDczNy4yOFI2ZDBSN2Q2NzguOTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3M1IxMWQ1OC4zNjhSMTJkMjI1LjI4UjEzYWkxaTJpMmkyaTJoZzoxODVvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4NVIxMWQwUjEyZDBSMTNhaGc6NzJvUjBkOTk2LjM1MlIxYWQ2NTIuMjg4ZDI4Ni43MmQ4MTEuMDA4ZDI4Ni43MmQ4MTEuMDA4ZDEwMjRkNjUyLjI4OGQxMDI0ZDY1Mi4yODhkNzM1LjIzMmQyMTcuMDg4ZDczNS4yMzJkMjE3LjA4OGQxMDI0ZDU4LjM2OGQxMDI0ZDU4LjM2OGQyODYuNzJkMjE3LjA4OGQyODYuNzJkMjE3LjA4OGQ1NzUuNDg4ZDY1Mi4yODhkNTc1LjQ4OGQ2NTIuMjg4ZDI4Ni43MmhSMmQ4NzEuNDI0UjNkODExLjAwOFI0ZDU4LjM2OFI1ZDczNy4yOFI2ZDBSN2Q2NzguOTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3MlIxMWQ1OC4zNjhSMTJkODcxLjQyNFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4NG9SMGQ5OTYuMzUyUjFhZDMzLjc5MmQxMTczLjUwNGQ4Ni4wMTZkOTY2LjY1NmQyNDYuNzg0ZDk2Ni42NTZkMTk0LjU2ZDExNzMuNTA0ZDMzLjc5MmQxMTczLjUwNGhSMmQyMTguMTEyUjNkMjQ2Ljc4NFI0ZDMzLjc5MlI1ZDU3LjM0NFI2ZC0xNDkuNTA0UjdkMjMuNTUyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxODRSMTFkMzMuNzkyUjEyZDIxOC4xMTJSMTNhaTFpMmkyaTJpMmhnOjcxb1IwZDk5Ni4zNTJSMWFkNzk0LjYyNGQ0MzguMjcxZDc5NC42MjRkNTA3LjkwNGQ2MzMuODU2ZDUwNy45MDRkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDg2NC4yNTZkNjMzLjg1NmQ4NjQuMjU2ZDYzMy44NTZkNzUzLjY2NGQ0NzQuMTEyZDc1My42NjRkNDc0LjExMmQ1OTMuOTJkNzk0LjYyNGQ1OTMuOTJkNzk0LjYyNGQ4NzIuNDQ4ZDc5NC42MjRkOTM0LjkxMmQ3NTAuMDhkOTc5LjQ1NmQ3MDUuNTM2ZDEwMjRkNjQyLjA0OGQxMDI0ZDIwOC44OTZkMTAyNGQxNDUuNDA4ZDEwMjRkMTAxLjM3NmQ5NzkuOTY4ZDU3LjM0NGQ5MzUuOTM2ZDU3LjM0NGQ4NzIuNDQ4ZDU3LjM0NGQ0MzguMjcxZDU3LjM0NGQzNzQuNzg0ZDEwMS4zNzZkMzMwLjc1MWQxNDUuNDA4ZDI4Ni43MmQyMDguODk2ZDI4Ni43MmQ2NDIuMDQ4ZDI4Ni43MmQ3MDUuNTM2ZDI4Ni43MmQ3NTAuMDhkMzMxLjI2NGQ3OTQuNjI0ZDM3NS44MDhkNzk0LjYyNGQ0MzguMjcxaFIyZDg0OS45MlIzZDc5NC42MjRSNGQ1Ny4zNDRSNWQ3MzcuMjhSNmQwUjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzFSMTFkNTcuMzQ0UjEyZDg0OS45MlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaGc6MTgzb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxODNSMTFkMFIxMmQwUjEzYWhnOjcwb1IwZDk5Ni4zNTJSMWFkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkMjg2LjcyaFIyZDc0MC4zNTJSM2Q3NDAuMzUyUjRkNTkuMzkyUjVkNzM3LjI4UjZkMFI3ZDY3Ny44ODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTcwUjExZDU5LjM5MlIxMmQ3NDAuMzUyUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODJvUjBkOTk2LjM1MlIxYWQ1Ny4zNDRkNDUwLjU1OWQ1Ny4zNDRkMzkwLjE0NGQxMDEuMzc2ZDM0NS42ZDE0NS40MDhkMzAxLjA1NmQyMDYuODQ4ZDMwMS4wNTZkODAxLjc5MmQzMDEuMDU2ZDgwMS43OTJkMTAyNGQ2NDUuMTJkMTAyNGQ2NDUuMTJkNzg2LjQzMmQ1NzcuNTM2ZDc4Ni40MzJkNTc3LjUzNmQxMDI0ZDQxOS44NGQxMDI0ZDQxOS44NGQ3ODYuNDMyZDIwNi44NDhkNzg2LjQzMmQxNDUuNDA4ZDc4Ni40MzJkMTAxLjM3NmQ3NDIuNGQ1Ny4zNDRkNjk4LjM2N2Q1Ny4zNDRkNjM3Ljk1MmQ1Ny4zNDRkNDUwLjU1OWQ0MTkuODRkNDU4Ljc1MWQyMTQuMDE2ZDQ1OC43NTFkMjE0LjAxNmQ2MjguNzM2ZDQxOS44NGQ2MjguNzM2ZDQxOS44NGQ0NTguNzUxZDU3Ny41MzZkNDU4Ljc1MWQ1NzcuNTM2ZDYyOC43MzZkNjQ1LjEyZDYyOC43MzZkNjQ1LjEyZDQ1OC43NTFkNTc3LjUzNmQ0NTguNzUxaFIyZDg1Mi45OTJSM2Q4MDEuNzkyUjRkNTcuMzQ0UjVkNzIyLjk0NFI2ZDBSN2Q2NjUuNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTgyUjExZDU3LjM0NFIxMmQ4NTIuOTkyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjlvUjBkOTk2LjM1MlIxYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJoUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ3MzcuMjhSNmQwUjdkNjc3Ljg4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNjlSMTFkNTkuMzkyUjEyZDc4NC4zODRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODFvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4MVIxMWQwUjEyZDBSMTNhaGc6NjhvUjBkOTk2LjM1MlIxYWQ1OS4zOTJkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkODcyLjQ0OGQ3OTYuNjcyZDkzNC45MTJkNzUyLjEyOGQ5NzkuNDU2ZDcwNy41ODRkMTAyNGQ2NDQuMDk2ZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ4NjQuMjU2ZDYzNS45MDRkODY0LjI1NmQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzaFIyZDg1NC4wMTZSM2Q3OTYuNjcyUjRkNTkuMzkyUjVkNzM3LjI4UjZkMFI3ZDY3Ny44ODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTY4UjExZDU5LjM5MlIxMmQ4NTQuMDE2UjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJoZzoxODBvUjBkOTk2LjM1MlIxYWQzMy43OTJkMjU5LjA3MmQ4Ni4wMTZkNTEuMTk5ZDI0Ni43ODRkNTEuMTk5ZDE5NC41NmQyNTkuMDcyZDMzLjc5MmQyNTkuMDcyaFIyZDIxOC4xMTJSM2QyNDYuNzg0UjRkMzMuNzkyUjVkOTcyLjhSNmQ3NjQuOTI4UjdkOTM5LjAwOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTgwUjExZDMzLjc5MlIxMmQyMTguMTEyUjEzYWkxaTJpMmkyaTJoZzo2N29SMGQ5OTYuMzUyUjFhZDc5Mi41NzZkNDQ2LjQ2M2QyMTYuMDY0ZDQ0Ni40NjNkMjE2LjA2NGQ4NjQuMjU2ZDc5Mi41NzZkODY0LjI1NmQ3OTIuNTc2ZDEwMjRkMjA4Ljg5NmQxMDI0ZDE0NS40MDhkMTAyNGQxMDEuMzc2ZDk3OS45NjhkNTcuMzQ0ZDkzNS45MzZkNTcuMzQ0ZDg3Mi40NDhkNTcuMzQ0ZDQzOC4yNzFkNTcuMzQ0ZDM3NC43ODRkMTAxLjM3NmQzMzAuNzUxZDE0NS40MDhkMjg2LjcyZDIwOC44OTZkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkNDQ2LjQ2M2hSMmQ4NDEuNzI4UjNkNzkyLjU3NlI0ZDU3LjM0NFI1ZDczNy4yOFI2ZDBSN2Q2NzkuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk2N1IxMWQ1Ny4zNDRSMTJkODQxLjcyOFIxM2FpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmhnOjE3OW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTc5UjExZDBSMTJkMFIxM2FoZzo2Nm9SMGQ5OTYuMzUyUjFhZDc2OS4wMjRkNDM4LjI3MWQ3NjkuMDI0ZDU3Ni41MTJkNzY5LjAyNGQ2MDUuMTg0ZDc2MS44NTZkNjIzLjYxNmQ3OTcuNjk2ZDY2OC42NzJkNzk3LjY5NmQ3MTkuODcyZDc5Ny42OTZkODcyLjQ0OGQ3OTcuNjk2ZDkzNC45MTJkNzUzLjE1MmQ5NzkuNDU2ZDcwOC42MDhkMTAyNGQ2NDUuMTJkMTAyNGQ2MC40MTZkMTAyNGQ2MC40MTZkMjg2LjcyZDYxNy40NzJkMjg2LjcyZDY3OS45MzZkMjg2LjcyZDcyNC40OGQzMzEuMjY0ZDc2OS4wMjRkMzc1LjgwOGQ3NjkuMDI0ZDQzOC4yNzFkMjE5LjEzNmQ3MjkuMDg4ZDIxOS4xMzZkODY0LjI1NmQ2MzYuOTI4ZDg2NC4yNTZkNjM2LjkyOGQ3MjkuMDg4ZDIxOS4xMzZkNzI5LjA4OGQyMTkuMTM2ZDQ0Ni40NjNkMjE5LjEzNmQ1NjkuMzQ0ZDYwOC4yNTZkNTY5LjM0NGQ2MDguMjU2ZDQ0Ni40NjNkMjE5LjEzNmQ0NDYuNDYzaFIyZDg1MS45NjhSM2Q3OTcuNjk2UjRkNjAuNDE2UjVkNzM3LjI4UjZkMFI3ZDY3Ni44NjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTY2UjExZDYwLjQxNlIxMmQ4NTEuOTY4UjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzhSMTFkMFIxMmQwUjEzYWhnOjY1b1IwZDk5Ni4zNTJSMWFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGhSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDczNy4yOFI2ZDBSN2Q2NzcuODg4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk2NVIxMWQ1OS4zOTJSMTJkODU2LjA2NFIxM2FpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJoZzoxNzdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE3N1IxMWQwUjEyZDBSMTNhaGc6NjRvUjBkOTk2LjM1MlIxYWQzODkuMTJkNDkyLjU0NGQ0NTIuNjA4ZDQ5Mi41NDRkNTE0LjA0OGQ0OTIuNTQ0ZDU0Ny4zMjhkNTI1LjgyNGQ1ODAuNjA4ZDU1OS4xMDRkNTgwLjYwOGQ2MjAuNTQ0ZDU4MC42MDhkNjg1LjA1NmQ2MjUuNjY0ZDY4NS4wNTZkNjI1LjY2NGQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ4NjcuMzI4ZDc4Mi4zMzZkODY3LjMyOGQ3ODIuMzM2ZDEwMjRkMjA3Ljg3MmQxMDI0ZDE0Ni40MzJkMTAyNGQxMDIuNGQ5NzkuOTY4ZDU4LjM2OGQ5MzUuOTM2ZDU4LjM2OGQ4NzUuNTJkNTguMzY4ZDQzNS4xOTlkNTguMzY4ZDM3My43NmQxMDIuNGQzMzAuMjRkMTQ2LjQzMmQyODYuNzJkMjA3Ljg3MmQyODYuNzJkNjMyLjgzMmQyODYuNzJkNjk0LjI3MmQyODYuNzJkNzM4LjMwNGQzMzAuMjRkNzgyLjMzNmQzNzMuNzZkNzgyLjMzNmQ0MzUuMTk5ZDc4Mi4zMzZkODAyLjgxNmQzODkuMTJkODAyLjgxNmQzMjcuNjhkODAyLjgxNmQyOTMuODg4ZDc2OS41MzZkMjYwLjA5NmQ3MzYuMjU2ZDI2MC4wOTZkNjc0LjgxNmQyNjAuMDk2ZDYyMC41NDRkMjYwLjA5NmQ1NTkuMTA0ZDI5My44ODhkNTI1LjgyNGQzMjcuNjhkNDkyLjU0NGQzODkuMTJkNDkyLjU0NGQzNjguNjRkNjg1LjA1NmQ0NzIuMDY0ZDY4NS4wNTZkNDcyLjA2NGQ2MDEuMDg4ZDM2OC42NGQ2MDEuMDg4ZDM2OC42NGQ2ODUuMDU2aFIyZDg1MC45NDRSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTY0UjExZDU4LjM2OFIxMmQ4NTAuOTQ0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxNzZvUjBkOTk2LjM1MlIxYWQxOTUuNTg0ZDMwMS4wNTZkMjc4LjUyOGQzMDEuMDU2ZDMzOC45NDRkMzAxLjA1NmQzODIuOTc2ZDM0NC41NzZkNDI3LjAwOGQzODguMDk2ZDQyNy4wMDhkNDQ5LjUzNWQ0MjcuMDA4ZDUyMy4yNjRkNDI3LjAwOGQ1ODQuNzA0ZDM4Mi45NzZkNjI4LjczNmQzMzguOTQ0ZDY3Mi43NjhkMjc4LjUyOGQ2NzIuNzY4ZDE5NS41ODRkNjcyLjc2OGQxMzQuMTQ0ZDY3Mi43NjhkOTAuMTEyZDYyOC43MzZkNDYuMDhkNTg0LjcwNGQ0Ni4wOGQ1MjMuMjY0ZDQ2LjA4ZDQ0OS41MzVkNDYuMDhkMzg4LjA5NmQ5MC4xMTJkMzQ0LjU3NmQxMzQuMTQ0ZDMwMS4wNTZkMTk1LjU4NGQzMDEuMDU2ZDE4NC4zMmQ0MzkuMjk1ZDE4NC4zMmQ1MzMuNTAzZDI4OC43NjhkNTMzLjUwM2QyODguNzY4ZDQzOS4yOTVkMTg0LjMyZDQzOS4yOTVoUjJkNDQ5LjUzNlIzZDQyNy4wMDhSNGQ0Ni4wOFI1ZDcyMi45NDRSNmQzNTEuMjMyUjdkNjc2Ljg2NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTc2UjExZDQ2LjA4UjEyZDQ0OS41MzZSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaGc6NjNvUjBkOTk2LjM1MlIxYWQzMS43NDRkMjg2LjcyZDUxOS4xNjhkMjg2LjcyZDU4MS42MzJkMjg2LjcyZDYyNS4xNTJkMzMwLjI0ZDY2OC42NzJkMzczLjc2ZDY2OC42NzJkNDM1LjE5OWQ2NjguNjcyZDYwNS4xODRkNjY4LjY3MmQ2NjYuNjI0ZDYyNS4xNTJkNzEwLjY1NmQ1ODEuNjMyZDc1NC42ODhkNTE5LjE2OGQ3NTQuNjg4ZDI4OC43NjhkNzU0LjY4OGQyODguNzY4ZDgyNS4zNDRkMTMxLjA3MmQ4MjUuMzQ0ZDEzMS4wNzJkNzQ1LjQ3MmQxMzEuMDcyZDY4NC4wMzFkMTc0LjU5MmQ2NDAuNTEyZDIxOC4xMTJkNTk2Ljk5MmQyNzkuNTUyZDU5Ni45OTJkNTEyZDU5Ni45OTJkNTEyZDQ0My4zOTFkMzEuNzQ0ZDQ0My4zOTFkMzEuNzQ0ZDI4Ni43MmQyODguNzY4ZDEwMjRkMTMxLjA3MmQxMDI0ZDEzMS4wNzJkODY3LjMyOGQyODguNzY4ZDg2Ny4zMjhkMjg4Ljc2OGQxMDI0aFIyZDY5NC4yNzJSM2Q2NjguNjcyUjRkMzEuNzQ0UjVkNzM3LjI4UjZkMFI3ZDcwNS41MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTYzUjExZDMxLjc0NFIxMmQ2OTQuMjcyUjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc1b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzVSMTFkMFIxMmQwUjEzYWhnOjYyb1IwZDk5Ni4zNTJSMWFkNjAuNDE2ZDEwNDMuNDU1ZDYwLjQxNmQ4NjEuMTg0ZDI5OS4wMDhkNzIyLjk0NGQxNjcuOTM2ZDY0OS4yMTZkMTUyLjU3NmQ2NDEuMDI0ZDExNS4yZDYxNy45ODNkNzcuODI0ZDU5NC45NDRkNjAuNDE2ZDU4NS43MjhkNjAuNDE2ZDQwNC40OGQ0OTguNjg4ZDY1Ny40MDhkNDk4LjY4OGQ3ODkuNTA0ZDYwLjQxNmQxMDQzLjQ1NWhSMmQ0ODYuNFIzZDQ5OC42ODhSNGQ2MC40MTZSNWQ2MTkuNTJSNmQtMTkuNDU2UjdkNTU5LjEwNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNjJSMTFkNjAuNDE2UjEyZDQ4Ni40UjEzYWkxaTJpMmkyaTNpM2kyaTJpMmkyaGc6MTc0b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzRSMTFkMFIxMmQwUjEzYWhnOjYxb1IwZDk5Ni4zNTJSMWFkNTk5LjA0ZDczNS4yMzJkNTk5LjA0ZDg5MS45MDRkNjAuNDE2ZDg5MS45MDRkNjAuNDE2ZDczNS4yMzJkNTk5LjA0ZDczNS4yMzJkNTk5LjA0ZDUyOC4zODRkNTk5LjA0ZDY4NS4wNTZkNjAuNDE2ZDY4NS4wNTZkNjAuNDE2ZDUyOC4zODRkNTk5LjA0ZDUyOC4zODRoUjJkNjUzLjMxMlIzZDU5OS4wNFI0ZDYwLjQxNlI1ZDQ5NS42MTZSNmQxMzIuMDk2UjdkNDM1LjJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTYxUjExZDYwLjQxNlIxMmQ2NTMuMzEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTczb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzNSMTFkMFIxMmQwUjEzYWhnOjYwb1IwZDk5Ni4zNTJSMWFkMjAyLjc1MmQ3MjAuODk2ZDQ0Mi4zNjhkODYwLjE2ZDQ0Mi4zNjhkMTA0MS40MDdkNS4xMmQ3ODcuNDU2ZDUuMTJkNjU2LjM4NGQ0NDIuMzY4ZDQwMi40MzJkNDQyLjM2OGQ1ODIuNjU2ZDIwMi43NTJkNzIwLjg5NmhSMmQ0ODQuMzUyUjNkNDQyLjM2OFI0ZDUuMTJSNWQ2MjEuNTY4UjZkLTE3LjQwOFI3ZDYxNi40NDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTYwUjExZDUuMTJSMTJkNDg0LjM1MlIxM2FpMWkyaTJpMmkyaTJpMmkyaGc6MTcyb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzJSMTFkMFIxMmQwUjEzYWhnOjU5b1IwZDk5Ni4zNTJSMWFkMjA5LjkyZDQzMC4wOGQyMDkuOTJkNTg3Ljc3NmQ1Mi4yMjRkNTg3Ljc3NmQ1Mi4yMjRkNDMwLjA4ZDIwOS45MmQ0MzAuMDhkNTMuMjQ4ZDg3OC41OTJkMjA5LjkyZDg3OC41OTJkMjA5LjkyZDEwMDcuNjE2ZDIwOS45MmQxMDYyLjkxMmQxNjUuMzc2ZDExMDUuOTJkMTIwLjgzMmQxMTQ4LjkyOGQ1My4yNDhkMTE2MC4xOTJkNTMuMjQ4ZDg3OC41OTJoUjJkMjcyLjM4NFIzZDIwOS45MlI0ZDUyLjIyNFI1ZDU5My45MlI2ZC0xMzYuMTkyUjdkNTQxLjY5NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTlSMTFkNTIuMjI0UjEyZDI3Mi4zODRSMTNhaTFpMmkyaTJpMmkxaTJpMmkzaTNpMmhnOjE3MW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTcxUjExZDBSMTJkMFIxM2FoZzo1OG9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQ4NjcuMzI4ZDIxMS45NjhkODY3LjMyOGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDg2Ny4zMjhkMjExLjk2OGQ0MzAuMDhkMjExLjk2OGQ1ODcuNzc2ZDU1LjI5NmQ1ODcuNzc2ZDU1LjI5NmQ0MzAuMDhkMjExLjk2OGQ0MzAuMDhoUjJkMjUyLjkyOFIzZDIxMS45NjhSNGQ1NS4yOTZSNWQ1OTMuOTJSNmQwUjdkNTM4LjYyNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNThSMTFkNTUuMjk2UjEyZDI1Mi45MjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzBvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE3MFIxMWQwUjEyZDBSMTNhaGc6NTdvUjBkOTk2LjM1MlIxYWQ2MzAuNzg0ZDEwMjRkMjA0LjhkMTAyNGQxNTAuNTI4ZDEwMjRkMTA3LjAwOGQ5NzguOTQ0ZDYzLjQ4OGQ5MzMuODg4ZDUyLjIyNGQ4NjcuMzI4ZDYyMi41OTJkODY3LjMyOGQ2MjIuNTkyZDczNi4yNTZkMjA0LjhkNzM2LjI1NmQxNDMuMzZkNzM2LjI1NmQ5OS4zMjhkNjkyLjIyM2Q1NS4yOTZkNjQ4LjE5MmQ1NS4yOTZkNTg2Ljc1MmQ1NS4yOTZkNDM1LjE5OWQ1NS4yOTZkMzczLjc2ZDk5LjMyOGQzMzAuMjRkMTQzLjM2ZDI4Ni43MmQyMDQuOGQyODYuNzJkNjMwLjc4NGQyODYuNzJkNjkyLjIyNGQyODYuNzJkNzM1Ljc0NGQzMzAuMjRkNzc5LjI2NGQzNzMuNzZkNzc5LjI2NGQ0MzUuMTk5ZDc3OS4yNjRkODc1LjUyZDc3OS4yNjRkOTM1LjkzNmQ3MzUuNzQ0ZDk3OS45NjhkNjkyLjIyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTIuOTkyZDU3OC41NmQ2MjIuNTkyZDU3OC41NmQ2MjIuNTkyZDQ0My4zOTFkMjEyLjk5MmQ0NDMuMzkxZDIxMi45OTJkNTc4LjU2aFIyZDg0Ny44NzJSM2Q3NzkuMjY0UjRkNTIuMjI0UjVkNzM3LjI4UjZkMFI3ZDY4NS4wNTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTU3UjExZDUyLjIyNFIxMmQ4NDcuODcyUjEzYWkxaTJpM2kzaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxNjlvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2OVIxMWQwUjEyZDBSMTNhaGc6NTZvUjBkOTk2LjM1MlIxYWQ3ODIuMzM2ZDQwOC41NzZkNzgyLjMzNmQ1NzkuNTg0ZDc4Mi4zMzZkNjE3LjQ3MmQ3NjQuOTI4ZDY1MC4yNGQ3ODIuMzM2ZDY4MS45ODNkNzgyLjMzNmQ3MTkuODcyZDc4Mi4zMzZkODc1LjUyZDc4Mi4zMzZkOTM1LjkzNmQ3MzguMzA0ZDk3OS45NjhkNjk0LjI3MmQxMDI0ZDYzMi44MzJkMTAyNGQyMDcuODcyZDEwMjRkMTQ2LjQzMmQxMDI0ZDEwMi40ZDk3OS45NjhkNTguMzY4ZDkzNS45MzZkNTguMzY4ZDg3NS41MmQ1OC4zNjhkNzE5Ljg3MmQ1OC4zNjhkNjg3LjEwNGQ3NS43NzZkNjUwLjI0ZDU4LjM2OGQ2MTMuMzc2ZDU4LjM2OGQ1NzkuNTg0ZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyZDYzMi44MzJkMjg2LjcyZDY4OC4xMjhkMjg2LjcyZDczMC42MjRkMzIxLjUzNWQ3NzMuMTJkMzU2LjM1MmQ3ODIuMzM2ZDQwOC41NzZkMjE1LjA0ZDcyOS4wODhkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQyMTUuMDRkNzI5LjA4OGQyMTUuMDRkNDQ0LjQxNWQyMTUuMDRkNTgxLjYzMmQ2MjUuNjY0ZDU4MS42MzJkNjI1LjY2NGQ0NDQuNDE1ZDIxNS4wNGQ0NDQuNDE1aFIyZDg1NC4wMTZSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTU2UjExZDU4LjM2OFIxMmQ4NTQuMDE2UjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNjhvUjBkOTk2LjM1MlIxYWQ0MzEuMTA0ZDEwMS4zNzVkNDMxLjEwNGQyNTkuMDcyZDI3My40MDhkMjU5LjA3MmQyNzMuNDA4ZDEwMS4zNzVkNDMxLjEwNGQxMDEuMzc1ZDIxMS45NjhkMTAxLjM3NWQyMTEuOTY4ZDI1OS4wNzJkNTUuMjk2ZDI1OS4wNzJkNTUuMjk2ZDEwMS4zNzVkMjExLjk2OGQxMDEuMzc1aFIyZDM5NC4yNFIzZDQzMS4xMDRSNGQ1NS4yOTZSNWQ5MjIuNjI0UjZkNzY0LjkyOFI3ZDg2Ny4zMjhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2OFIxMWQ1NS4yOTZSMTJkMzk0LjI0UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTVvUjBkOTk2LjM1MlIxYWQzLjA3MmQyODUuNjk2ZDQ2Ni45NDRkMjg1LjY5NmQ1MjguMzg0ZDI4NS42OTZkNTcxLjkwNGQzMjkuMjE2ZDYxNS40MjRkMzcyLjczNmQ2MTUuNDI0ZDQzNC4xNzVkNjE1LjQyNGQxMDI0ZDQ1OC43NTJkMTAyNGQ0NTguNzUyZDQ0Mi4zNjdkMy4wNzJkNDQyLjM2N2QzLjA3MmQyODUuNjk2aFIyZDY3NS44NFIzZDYxNS40MjRSNGQzLjA3MlI1ZDczOC4zMDRSNmQwUjdkNzM1LjIzMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTVSMTFkMy4wNzJSMTJkNjc1Ljg0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmhnOjE2N29SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTY3UjExZDBSMTJkMFIxM2FoZzo1NG9SMGQ5OTYuMzUyUjFhZDY3MC43MmQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ1NzEuMzkyZDYzMi44MzJkNTcxLjM5MmQ2OTQuMjcyZDU3MS4zOTJkNzM4LjMwNGQ2MTQuOTEyZDc4Mi4zMzZkNjU4LjQzMmQ3ODIuMzM2ZDcxOS44NzJkNzgyLjMzNmQ4NzUuNTJkNzgyLjMzNmQ5MzUuOTM2ZDczOC4zMDRkOTc5Ljk2OGQ2OTQuMjcyZDEwMjRkNjMyLjgzMmQxMDI0ZDIwNy44NzJkMTAyNGQxNDYuNDMyZDEwMjRkMTAyLjRkOTc5Ljk2OGQ1OC4zNjhkOTM1LjkzNmQ1OC4zNjhkODc1LjUyZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyZDY3MC43MmQyODYuNzJkNjcwLjcyZDQ0My4zOTFkMjE1LjA0ZDcyOS4wODhkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQyMTUuMDRkNzI5LjA4OGhSMmQ4MzkuNjhSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTU0UjExZDU4LjM2OFIxMmQ4MzkuNjhSMTNhaTFpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJoZzoxNjZvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2NlIxMWQwUjEyZDBSMTNhaGc6NTNvUjBkOTk2LjM1MlIxYWQ3ODIuMzM2ZDQ0My4zOTFkMjE1LjA0ZDQ0My4zOTFkMjE1LjA0ZDU3MS4zOTJkNjMyLjgzMmQ1NzEuMzkyZDY5NC4yNzJkNTcxLjM5MmQ3MzguMzA0ZDYxNC45MTJkNzgyLjMzNmQ2NTguNDMyZDc4Mi4zMzZkNzE5Ljg3MmQ3ODIuMzM2ZDg3NS41MmQ3ODIuMzM2ZDkzNS45MzZkNzM4LjMwNGQ5NzkuOTY4ZDY5NC4yNzJkMTAyNGQ2MzIuODMyZDEwMjRkMjA3Ljg3MmQxMDI0ZDE0Ni40MzJkMTAyNGQxMDIuNGQ5NzkuOTY4ZDU4LjM2OGQ5MzUuOTM2ZDU4LjM2OGQ4NzUuNTJkNTguMzY4ZDgxOC4xNzVkMjE1LjA0ZDgxOC4xNzVkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQ1OC4zNjhkNzI5LjA4OGQ1OC4zNjhkMjg2LjcyZDc4Mi4zMzZkMjg2LjcyZDc4Mi4zMzZkNDQzLjM5MWhSMmQ4NDkuOTJSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTUzUjExZDU4LjM2OFIxMmQ4NDkuOTJSMTNhaTFpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTY1b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNjVSMTFkMFIxMmQwUjEzYWhnOjUyb1IwZDk5Ni4zNTJSMWFkNjA0LjE2ZDY4My4wMDhkNzAyLjQ2NGQ2ODMuMDA4ZDcwMi40NjRkODQwLjcwNGQ2MDQuMTZkODQwLjcwNGQ2MDQuMTZkMTAyNGQ0NDcuNDg4ZDEwMjRkNDQ3LjQ4OGQ4NDAuNzA0ZDYuMTQ0ZDg0MC43MDRkNi4xNDRkNzAwLjQxNWQ0NjMuODcyZDI4Ni43MmQ2MDQuMTZkMjg2LjcyZDYwNC4xNmQ2ODMuMDA4ZDQ0Ny40ODhkNTMxLjQ1NmQyNjEuMTJkNjgzLjAwOGQ0NDcuNDg4ZDY4My4wMDhkNDQ3LjQ4OGQ1MzEuNDU2aFIyZDc0Ny41MlIzZDcwMi40NjRSNGQ2LjE0NFI1ZDczNy4yOFI2ZDBSN2Q3MzEuMTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk1MlIxMWQ2LjE0NFIxMmQ3NDcuNTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJoZzoxNjRvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2NFIxMWQwUjEyZDBSMTNhaGc6NTFvUjBkOTk2LjM1MlIxYWQ3NTAuNTkyZDQzNS4xOTlkNzUwLjU5MmQ1ODIuNjU2ZDc1MC41OTJkNjA4LjI1NmQ3NDQuNDQ4ZDYyOS43NmQ3NzguMjRkNjcwLjcyZDc3OC4yNGQ3MjIuOTQ0ZDc3OC4yNGQ4NzUuNTJkNzc4LjI0ZDkzNS45MzZkNzM0LjcyZDk3OS45NjhkNjkxLjJkMTAyNGQ2MjkuNzZkMTAyNGQyMDMuNzc2ZDEwMjRkMTQyLjMzNmQxMDI0ZDk4LjMwNGQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDgxOC4xNzVkMjEwLjk0NGQ4MTguMTc1ZDIxMC45NDRkODY3LjMyOGQ2MjEuNTY4ZDg2Ny4zMjhkNjIxLjU2OGQ3MzEuMTM2ZDE3NS4xMDRkNzMxLjEzNmQxNzUuMTA0ZDU3NC40NjRkNTkzLjkyZDU3NC40NjRkNTkzLjkyZDQ0My4zOTFkMjEwLjk0NGQ0NDMuMzkxZDIxMC45NDRkNTAwLjczNmQ1NC4yNzJkNTAwLjczNmQ1NC4yNzJkNDM1LjE5OWQ1NC4yNzJkMzczLjc2ZDk4LjMwNGQzMzAuMjRkMTQyLjMzNmQyODYuNzJkMjAzLjc3NmQyODYuNzJkNjAyLjExMmQyODYuNzJkNjYzLjU1MmQyODYuNzJkNzA3LjA3MmQzMzAuMjRkNzUwLjU5MmQzNzMuNzZkNzUwLjU5MmQ0MzUuMTk5aFIyZDg0NS44MjRSM2Q3NzguMjRSNGQ1NC4yNzJSNWQ3MzcuMjhSNmQwUjdkNjgzLjAwOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTFSMTFkNTQuMjcyUjEyZDg0NS44MjRSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNoZzoxNjNvUjBkOTk2LjM1MlIxYWQ2OTYuMzJkNDkyLjU0NGQ1MzguNjI0ZDQ5Mi41NDRkNTM4LjYyNGQ0NDMuMzkxZDI4OC43NjhkNDQzLjM5MWQyODguNzY4ZDU4My42OGQ1OTguMDE2ZDU4My42OGQ1OTguMDE2ZDc0MC4zNTJkMjg4Ljc2OGQ3NDAuMzUyZDI4OC43NjhkODY3LjMyOGQ2OTYuMzJkODY3LjMyOGQ2OTYuMzJkMTAyNGQzOS45MzZkMTAyNGQzOS45MzZkODY3LjMyOGQxMzIuMDk2ZDg2Ny4zMjhkMTMyLjA5NmQ3NDAuMzUyZDM5LjkzNmQ3NDAuMzUyZDM5LjkzNmQ1ODMuNjhkMTMyLjA5NmQ1ODMuNjhkMTMyLjA5NmQ0MzUuMTk5ZDEzMi4wOTZkMzczLjc2ZDE3Ni4xMjhkMzMwLjI0ZDIyMC4xNmQyODYuNzJkMjgwLjU3NmQyODYuNzJkNTQ3Ljg0ZDI4Ni43MmQ2MDkuMjhkMjg2LjcyZDY1Mi44ZDMzMC4yNGQ2OTYuMzJkMzczLjc2ZDY5Ni4zMmQ0MzUuMTk5ZDY5Ni4zMmQ0OTIuNTQ0aFIyZDc1MS42MTZSM2Q2OTYuMzJSNGQzOS45MzZSNWQ3MzcuMjhSNmQwUjdkNjk3LjM0NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTYzUjExZDM5LjkzNlIxMmQ3NTEuNjE2UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6NTBvUjBkOTk2LjM1MlIxYWQyMDcuODcyZDI4Ni43MmQ2MzIuODMyZDI4Ni43MmQ2OTQuMjcyZDI4Ni43MmQ3MzguMzA0ZDMzMC4yNGQ3ODIuMzM2ZDM3My43NmQ3ODIuMzM2ZDQzNS4xOTlkNzgyLjMzNmQ1OTguMDE2ZDc4Mi4zMzZkNjU5LjQ1NmQ3MzguMzA0ZDcwMy40ODhkNjk0LjI3MmQ3NDcuNTJkNjMyLjgzMmQ3NDcuNTJkMjE1LjA0ZDc0Ny41MmQyMTUuMDRkODY3LjMyOGQ3ODIuMzM2ZDg2Ny4zMjhkNzgyLjMzNmQxMDI0ZDU4LjM2OGQxMDI0ZDU4LjM2OGQ3MzguMzA0ZDU4LjM2OGQ2NzYuODY0ZDEwMi40ZDYzMy4zNDRkMTQ2LjQzMmQ1ODkuODI0ZDIwNy44NzJkNTg5LjgyNGQ2MjUuNjY0ZDU4OS44MjRkNjI1LjY2NGQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ1MDIuNzg0ZDU4LjM2OGQ1MDIuNzg0ZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyaFIyZDg0OS45MlIzZDc4Mi4zMzZSNGQ1OC4zNjhSNWQ3MzcuMjhSNmQwUjdkNjc4LjkxMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTBSMTFkNTguMzY4UjEyZDg0OS45MlIxM2FpMWkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpM2kzaGc6MTYyb1IwZDk5Ni4zNTJSMWFkNjM1LjkwNGQ1NzguNTZkNDU1LjY4ZDU3OC41NmQ0NTUuNjhkODY3LjMyOGQ2MzUuOTA0ZDg2Ny4zMjhkNjM1LjkwNGQxMDI0ZDQ1NS42OGQxMDI0ZDQ1NS42OGQxMTI1LjM3NmQyOTcuOTg0ZDExMjUuMzc2ZDI5Ny45ODRkMTAyNGQxODMuMjk2ZDEwMjRkMTIxLjg1NmQxMDI0ZDc3LjgyNGQ5NzkuOTY4ZDMzLjc5MmQ5MzUuOTM2ZDMzLjc5MmQ4NzUuNTJkMzMuNzkyZDU2OS4zNDRkMzMuNzkyZDUwNy45MDRkNzcuODI0ZDQ2My44NzFkMTIxLjg1NmQ0MTkuODRkMTgzLjI5NmQ0MTkuODRkMjk3Ljk4NGQ0MTkuODRkMjk3Ljk4NGQzMDIuMDhkNDU1LjY4ZDMwMi4wOGQ0NTUuNjhkNDE5Ljg0ZDYzNS45MDRkNDE5Ljg0ZDYzNS45MDRkNTc4LjU2ZDI5Ny45ODRkODY3LjMyOGQyOTcuOTg0ZDU3OC41NmQxOTAuNDY0ZDU3OC41NmQxOTAuNDY0ZDg2Ny4zMjhkMjk3Ljk4NGQ4NjcuMzI4aFIyZDY1MS4yNjRSM2Q2MzUuOTA0UjRkMzMuNzkyUjVkNzIxLjkyUjZkLTEwMS4zNzZSN2Q2ODguMTI4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNjJSMTFkMzMuNzkyUjEyZDY1MS4yNjRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ5b1IwZDk5Ni4zNTJSMWFkMS4wMjRkNTY3LjI5NmQyMzYuNTQ0ZDI4Ni43MmQzOTkuMzZkMjg2LjcyZDM5OS4zNmQxMDI0ZDI0Mi42ODhkMTAyNGQyNDIuNjg4ZDUyNS4zMTJkMjQwLjY0ZDUyNy4zNmQyNDEuNjY0ZDUyNy4zNmQyMDguODk2ZDU2Ny4yOTZkMS4wMjRkNTY3LjI5NmhSMmQ0MDAuMzg0UjNkMzk5LjM2UjRkMS4wMjRSNWQ3MzcuMjhSNmQwUjdkNzM2LjI1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNDlSMTFkMS4wMjRSMTJkNDAwLjM4NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmhnOjE2MW9SMGQ5OTYuMzUyUjFhZDIxMC45NDRkMzAxLjA1NmQyMTAuOTQ0ZDQ1Ny43MjdkNTQuMjcyZDQ1Ny43MjdkNTQuMjcyZDMwMS4wNTZkMjEwLjk0NGQzMDEuMDU2ZDIxMC45NDRkMTAyNGQ1NC4yNzJkMTAyNGQ1NC4yNzJkNDg1LjM3NmQyMTAuOTQ0ZDQ4NS4zNzZkMjEwLjk0NGQxMDI0aFIyZDIxNS4wNFIzZDIxMC45NDRSNGQ1NC4yNzJSNWQ3MjIuOTQ0UjZkMFI3ZDY2OC42NzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2MVIxMWQ1NC4yNzJSMTJkMjE1LjA0UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDhvUjBkOTk2LjM1MlIxYWQyMDcuODcyZDI4Ni43MmQ2MzIuODMyZDI4Ni43MmQ2OTQuMjcyZDI4Ni43MmQ3MzguMzA0ZDMzMi4yODhkNzgyLjMzNmQzNzcuODU2ZDc4Mi4zMzZkNDM5LjI5NWQ3ODIuMzM2ZDg2NS4yOGQ3ODIuMzM2ZDkyNi43MmQ3MzcuNzkyZDk3NS4zNmQ2OTMuMjQ4ZDEwMjRkNjMyLjgzMmQxMDI0ZDIwNy44NzJkMTAyNGQxNDcuNDU2ZDEwMjRkMTAyLjkxMmQ5NzUuMzZkNTguMzY4ZDkyNi43MmQ1OC4zNjhkODY1LjI4ZDU4LjM2OGQ0MzkuMjk1ZDU4LjM2OGQzNzcuODU2ZDEwMi40ZDMzMi4yODhkMTQ2LjQzMmQyODYuNzJkMjA3Ljg3MmQyODYuNzJkMjk5LjAwOGQ4NTcuMDg4ZDYyNS42NjRkODU3LjA4OGQ2MjUuNjY0ZDU4Mi42NTZkMjk5LjAwOGQ4NTcuMDg4ZDU0MS42OTZkNDQ3LjQ4N2QyMTUuMDRkNDQ3LjQ4N2QyMTUuMDRkNzIxLjkyZDU0MS42OTZkNDQ3LjQ4N2hSMmQ4NTQuMDE2UjNkNzgyLjMzNlI0ZDU4LjM2OFI1ZDczNy4yOFI2ZDBSN2Q2NzguOTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0OFIxMWQ1OC4zNjhSMTJkODU0LjAxNlIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTFpMmkyaTJoZzoxNjBvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2MFIxMWQwUjEyZDBSMTNhaGc6NDdvUjBkOTk2LjM1MlIxYWQ2LjE0NGQ4NjUuMjhkNDc4LjIwOGQyODYuNzJkNTM0LjUyOGQyODYuNzJkNTM0LjUyOGQ0NDQuNDE1ZDYyLjQ2NGQxMDI0ZDYuMTQ0ZDEwMjRkNi4xNDRkODY1LjI4aFIyZDUzMy41MDRSM2Q1MzQuNTI4UjRkNi4xNDRSNWQ3MzcuMjhSNmQwUjdkNzMxLjEzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNDdSMTFkNi4xNDRSMTJkNTMzLjUwNFIxM2FpMWkyaTJpMmkyaTJpMmhnOjE1OW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTU5UjExZDBSMTJkMFIxM2FoZzo0Nm9SMGQ5OTYuMzUyUjFhZDIxMS45NjhkODY3LjMyOGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDg2Ny4zMjhkMjExLjk2OGQ4NjcuMzI4aFIyZDIzOC41OTJSM2QyMTEuOTY4UjRkNTUuMjk2UjVkMTU2LjY3MlI2ZDBSN2QxMDEuMzc2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0NlIxMWQ1NS4yOTZSMTJkMjM4LjU5MlIxM2FpMWkyaTJpMmkyaGc6MTU4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNThSMTFkMFIxMmQwUjEzYWhnOjQ1b1IwZDk5Ni4zNTJSMWFkNDg3LjQyNGQ2NDMuMDcyZDQ4Ny40MjRkNzk5Ljc0NGQ2MC40MTZkNzk5Ljc0NGQ2MC40MTZkNjQzLjA3MmQ0ODcuNDI0ZDY0My4wNzJoUjJkNTI5LjQwOFIzZDQ4Ny40MjRSNGQ2MC40MTZSNWQzODAuOTI4UjZkMjI0LjI1NlI3ZDMyMC41MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTQ1UjExZDYwLjQxNlIxMmQ1MjkuNDA4UjEzYWkxaTJpMmkyaTJoZzoxNTdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1N1IxMWQwUjEyZDBSMTNhaGc6NDRvUjBkOTk2LjM1MlIxYWQ1NS4yOTZkODc4LjU5MmQyMTEuOTY4ZDg3OC41OTJkMjExLjk2OGQxMDA3LjYxNmQyMTEuOTY4ZDEwNjIuOTEyZDE2Ny40MjRkMTEwNS45MmQxMjIuODhkMTE0OC45MjhkNTUuMjk2ZDExNjAuMTkyZDU1LjI5NmQ4NzguNTkyaFIyZDI0OC44MzJSM2QyMTEuOTY4UjRkNTUuMjk2UjVkMTQ1LjQwOFI2ZC0xMzYuMTkyUjdkOTAuMTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0NFIxMWQ1NS4yOTZSMTJkMjQ4LjgzMlIxM2FpMWkyaTJpM2kzaTJoZzoxNTZvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1NlIxMWQwUjEyZDBSMTNhaGc6NDNvUjBkOTk2LjM1MlIxYWQxNTAuNTI4ZDUwOC45MjhkMzA3LjJkNTA4LjkyOGQzMDcuMmQ2NDMuMDcyZDQ0NC40MTZkNjQzLjA3MmQ0NDQuNDE2ZDc5OS43NDRkMzA3LjJkNzk5Ljc0NGQzMDcuMmQ5MzUuOTM2ZDE1MC41MjhkOTM1LjkzNmQxNTAuNTI4ZDc5OS43NDRkMTcuNDA4ZDc5OS43NDRkMTcuNDA4ZDY0My4wNzJkMTUwLjUyOGQ2NDMuMDcyZDE1MC41MjhkNTA4LjkyOGhSMmQ0NjUuOTJSM2Q0NDQuNDE2UjRkMTcuNDA4UjVkNTE1LjA3MlI2ZDg4LjA2NFI3ZDQ5Ny42NjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTQzUjExZDE3LjQwOFIxMmQ0NjUuOTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1NVIxMWQwUjEyZDBSMTNhaGc6NDJvUjBkOTk2LjM1MlIxYWQ0NTUuNjhkMzgxLjk1MmQ1MDMuODA4ZDUzMy41MDNkMzkxLjE2OGQ1NjkuMzQ0ZDQ2MS44MjRkNjY0LjU3NmQzMzUuODcyZDc1Ni43MzZkMjYzLjE2OGQ2NjEuNTA0ZDE5NS41ODRkNzU2LjczNmQ2Ny41ODRkNjY0LjU3NmQxMzguMjRkNTY5LjM0NGQyNS42ZDUzMy41MDNkNzMuNzI4ZDM4MS45NTJkMTg1LjM0NGQ0MTkuODRkMTg1LjM0NGQzMDEuMDU2ZDM0My4wNGQzMDEuMDU2ZDM0My4wNGQ0MTkuODRkMzUzLjI4ZDQxNi43NjhkNDU1LjY4ZDM4MS45NTJoUjJkNTI4LjM4NFIzZDUwMy44MDhSNGQyNS42UjVkNzIyLjk0NFI2ZDI2Ny4yNjRSN2Q2OTcuMzQ0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0MlIxMWQyNS42UjEyZDUyOC4zODRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNoZzoxNTRvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1NFIxMWQwUjEyZDBSMTNhaGc6NDFvUjBkOTk2LjM1MlIxYWQ1Ny4zNDRkMTAyNGQ1Ny4zNDRkODY3LjMyOGQxMTYuNzM2ZDg2Ny4zMjhkMTE2LjczNmQ0NDMuMzkxZDU3LjM0NGQ0NDMuMzkxZDU3LjM0NGQyODYuNzJkMTI1Ljk1MmQyODYuNzJkMTg2LjM2OGQyODYuNzJkMjMwLjRkMzMwLjI0ZDI3NC40MzJkMzczLjc2ZDI3NC40MzJkNDM1LjE5OWQyNzQuNDMyZDg3NS41MmQyNzQuNDMyZDkzNS45MzZkMjMwLjRkOTc5Ljk2OGQxODYuMzY4ZDEwMjRkMTI1Ljk1MmQxMDI0ZDU3LjM0NGQxMDI0aFIyZDMwNC4xMjhSM2QyNzQuNDMyUjRkNTcuMzQ0UjVkNzM3LjI4UjZkMFI3ZDY3OS45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTQxUjExZDU3LjM0NFIxMmQzMDQuMTI4UjEzYWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MTUzb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNTNSMTFkMFIxMmQwUjEzYWhnOjQwb1IwZDk5Ni4zNTJSMWFkMjY5LjMxMmQ0NDMuMzkxZDIwOS45MmQ0NDMuMzkxZDIwOS45MmQ4NjcuMzI4ZDI2OS4zMTJkODY3LjMyOGQyNjkuMzEyZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ0MzUuMTk5ZDUzLjI0OGQzNzMuNzZkOTYuNzY4ZDMzMC4yNGQxNDAuMjg4ZDI4Ni43MmQyMDEuNzI4ZDI4Ni43MmQyNjkuMzEyZDI4Ni43MmQyNjkuMzEyZDQ0My4zOTFoUjJkMzAxLjA1NlIzZDI2OS4zMTJSNGQ1My4yNDhSNWQ3MzcuMjhSNmQwUjdkNjg0LjAzMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNDBSMTFkNTMuMjQ4UjEyZDMwMS4wNTZSMTNhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoxNTJvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1MlIxMWQwUjEyZDBSMTNhaGc6MzlvUjBkOTk2LjM1MlIxYWQyMTcuMDg4ZDMwMS4wNTZkMjE3LjA4OGQ1MDcuOTA0ZDYwLjQxNmQ1MDcuOTA0ZDYwLjQxNmQzMDEuMDU2ZDIxNy4wODhkMzAxLjA1NmhSMmQyNTcuMDI0UjNkMjE3LjA4OFI0ZDYwLjQxNlI1ZDcyMi45NDRSNmQ1MTYuMDk2UjdkNjYyLjUyOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzlSMTFkNjAuNDE2UjEyZDI1Ny4wMjRSMTNhaTFpMmkyaTJpMmhnOjE1MW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTUxUjExZDBSMTJkMFIxM2FoZzozOG9SMGQ5OTYuMzUyUjFhZDc3Ny4yMTZkODExLjAwOGQ4OTQuOTc2ZDg4MC42NGQ4OTQuOTc2ZDEwNDIuNDMyZDc1MS42MTZkOTYwLjUxMmQ3MDUuNTM2ZDEwMjRkNjI4LjczNmQxMDI0ZDIwMi43NTJkMTAyNGQxNDEuMzEyZDEwMjRkOTcuNzkyZDk3OS45NjhkNTQuMjcyZDkzNS45MzZkNTQuMjcyZDg3NS41MmQ1NC4yNzJkNjg2LjA3OWQ1NC4yNzJkNjYzLjU1MmQ2NS41MzZkNjM4Ljk3NmQ3Ni44ZDYxNC40ZDk4LjMwNGQ2MDAuMDY0ZDkxLjEzNmQ1ODIuNjU2ZDkxLjEzNmQ1NDUuNzkxZDkxLjEzNmQ0MzYuMjIzZDkxLjEzNmQzNzQuNzg0ZDEzNS4xNjhkMzMxLjI2NGQxNzkuMmQyODcuNzQ0ZDIzOS42MTZkMjg3Ljc0NGQ2MDEuMDg4ZDI4Ny43NDRkNjU1LjM2ZDI4Ny43NDRkNjk3Ljg1NmQzMjIuNTU5ZDc0MC4zNTJkMzU3LjM3NmQ3NDkuNTY4ZDQwOS42ZDc0OS41NjhkNDk5LjcxMmQ1OTIuODk2ZDQ5OS43MTJkNTkyLjg5NmQ0NDUuNDM5ZDI0Ny44MDhkNDQ1LjQzOWQyNDcuODA4ZDU1Ni4wMzFkNjIwLjU0NGQ3NDMuNDI0ZDYyMC41NDRkNjQ2LjE0NGQ3NzcuMjE2ZDY0Ni4xNDRkNzc3LjIxNmQ4MTEuMDA4ZDQ0Mi4zNjhkODE0LjA3OWQyMTAuOTQ0ZDY5Ny4zNDRkMjEwLjk0NGQ4NjcuMzI4ZDU0OC44NjRkODY3LjMyOGQ1MzMuNTA0ZDg1OS4xMzZkNDk3LjY2NGQ4NDEuNzI4ZDQ2MS44MjRkODI0LjMxOWQ0NDIuMzY4ZDgxNC4wNzloUjJkOTYwLjUxMlIzZDg5NC45NzZSNGQ1NC4yNzJSNWQ3MzYuMjU2UjZkLTE4LjQzMlI3ZDY4MS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTM4UjExZDU0LjI3MlIxMmQ5NjAuNTEyUjEzYWkxaTJpMmkyaTNpMmkzaTNpMmkzaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTNpM2hnOjE1MG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTUwUjExZDBSMTJkMFIxM2FoZzozN29SMGQ5OTYuMzUyUjFhZDgwOC45NmQyODcuNzQ0ZDg2MS4xODRkMjg3Ljc0NGQ4NjEuMTg0ZDQ0Ny40ODdkMTg5LjQ0ZDEwMjRkMTM3LjIxNmQxMDI0ZDEzNy4yMTZkODYzLjIzMmQ4MDguOTZkMjg3Ljc0NGQxODguNDE2ZDI5NC45MTJkMjcxLjM2ZDI5NC45MTJkMzMyLjhkMjk0LjkxMmQzNzEuNzEyZDMzMy4zMTJkNDEwLjYyNGQzNzEuNzEyZDQxMC42MjRkNDMzLjE1MmQ0MTAuNjI0ZDUwNi44OGQ0MTAuNjI0ZDU2OC4zMTlkMzcxLjcxMmQ2MDcuMjMyZDMzMi44ZDY0Ni4xNDRkMjcxLjM2ZDY0Ni4xNDRkMTg4LjQxNmQ2NDYuMTQ0ZDEyNi45NzZkNjQ2LjE0NGQ4OC4wNjRkNjA3LjIzMmQ0OS4xNTJkNTY4LjMxOWQ0OS4xNTJkNTA2Ljg4ZDQ5LjE1MmQ0MzMuMTUyZDQ5LjE1MmQzNzEuNzEyZDg4LjA2NGQzMzMuMzEyZDEyNi45NzZkMjk0LjkxMmQxODguNDE2ZDI5NC45MTJkNzA4LjYwOGQ2NjMuNTUyZDc5MS41NTJkNjYzLjU1MmQ4NTIuOTkyZDY2My41NTJkODkxLjkwNGQ3MDEuOTUyZDkzMC44MTZkNzQwLjM1MmQ5MzAuODE2ZDgwMS43OTJkOTMwLjgxNmQ4NzUuNTJkOTMwLjgxNmQ5MzYuOTZkODkxLjkwNGQ5NzUuODcyZDg1Mi45OTJkMTAxNC43ODRkNzkxLjU1MmQxMDE0Ljc4NGQ3MDguNjA4ZDEwMTQuNzg0ZDY0OC4xOTJkMTAxNC43ODRkNjA5LjI4ZDk3NS44NzJkNTcwLjM2OGQ5MzYuOTZkNTcwLjM2OGQ4NzUuNTJkNTcwLjM2OGQ4MDEuNzkyZDU3MC4zNjhkNzQwLjM1MmQ2MDkuMjhkNzAxLjk1MmQ2NDguMTkyZDY2My41NTJkNzA4LjYwOGQ2NjMuNTUyZDY5OC4zNjhkNzkxLjU1MmQ2OTguMzY4ZDg4Ni43ODRkODAyLjgxNmQ4ODYuNzg0ZDgwMi44MTZkNzkxLjU1MmQ2OTguMzY4ZDc5MS41NTJkMTc3LjE1MmQ0MjIuOTEyZDE3Ny4xNTJkNTE3LjEyZDI4MS42ZDUxNy4xMmQyODEuNmQ0MjIuOTEyZDE3Ny4xNTJkNDIyLjkxMmhSMmQ5ODkuMTg0UjNkOTMwLjgxNlI0ZDQ5LjE1MlI1ZDczNi4yNTZSNmQwUjdkNjg3LjEwNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzdSMTFkNDkuMTUyUjEyZDk4OS4xODRSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDlvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0OVIxMWQwUjEyZDBSMTNhaGc6MzZvUjBkOTk2LjM1MlIxYWQ3NTcuNzZkNDM1LjE5OWQ3NTcuNzZkNTAyLjc4NGQ2MDEuMDg4ZDUwMi43ODRkNjAxLjA4OGQ0NDMuMzkxZDQ3NS4xMzZkNDQzLjM5MWQ0NzUuMTM2ZDU4MC42MDhkNjA5LjI4ZDU4MC42MDhkNjcwLjcyZDU4MC42MDhkNzE0LjI0ZDYyNC42NGQ3NTcuNzZkNjY4LjY3MmQ3NTcuNzZkNzMwLjExMmQ3NTcuNzZkODc1LjUyZDc1Ny43NmQ5MzUuOTM2ZDcxNC4yNGQ5NzkuOTY4ZDY3MC43MmQxMDI0ZDYwOS4yOGQxMDI0ZDQ3NS4xMzZkMTAyNGQ0NzUuMTM2ZDExMjQuMzUyZDMxNy40NGQxMTI0LjM1MmQzMTcuNDRkMTAyNGQxODMuMjk2ZDEwMjRkMTIxLjg1NmQxMDI0ZDc4LjMzNmQ5NzkuOTY4ZDM0LjgxNmQ5MzUuOTM2ZDM0LjgxNmQ4NzUuNTJkMzQuODE2ZDgwNy45MzZkMTkxLjQ4OGQ4MDcuOTM2ZDE5MS40ODhkODY3LjMyOGQzMTcuNDRkODY3LjMyOGQzMTcuNDRkNzM3LjI4ZDE4My4yOTZkNzM3LjI4ZDEyMS44NTZkNzM3LjI4ZDc4LjMzNmQ2OTMuNzZkMzQuODE2ZDY1MC4yNGQzNC44MTZkNTg4LjhkMzQuODE2ZDQzNS4xOTlkMzQuODE2ZDM3My43NmQ3OC4zMzZkMzMwLjI0ZDEyMS44NTZkMjg2LjcyZDE4My4yOTZkMjg2LjcyZDMxNy40NGQyODYuNzJkMzE3LjQ0ZDE4Ni4zNjdkNDc1LjEzNmQxODYuMzY3ZDQ3NS4xMzZkMjg2LjcyZDYwOS4yOGQyODYuNzJkNjcwLjcyZDI4Ni43MmQ3MTQuMjRkMzMwLjI0ZDc1Ny43NmQzNzMuNzZkNzU3Ljc2ZDQzNS4xOTlkMzE3LjQ0ZDU4MC42MDhkMzE3LjQ0ZDQ0My4zOTFkMTkxLjQ4OGQ0NDMuMzkxZDE5MS40ODhkNTgwLjYwOGQzMTcuNDRkNTgwLjYwOGQ0NzUuMTM2ZDczNy4yOGQ0NzUuMTM2ZDg2Ny4zMjhkNjAxLjA4OGQ4NjcuMzI4ZDYwMS4wODhkNzM3LjI4ZDQ3NS4xMzZkNzM3LjI4aFIyZDgwNi45MTJSM2Q3NTcuNzZSNGQzNC44MTZSNWQ4MzcuNjMyUjZkLTEwMC4zNTJSN2Q4MDIuODE2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkzNlIxMWQzNC44MTZSMTJkODA2LjkxMlIxM2FpMWkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNDhSMTFkMFIxMmQwUjEzYWhnOjM1b1IwZDk5Ni4zNTJSMWFkNzY4ZDQ0MC4zMTlkNzY4ZDU5Ni45OTJkNjUwLjI0ZDU5Ni45OTJkNjE1LjQyNGQ3MDUuNTM2ZDczOS4zMjhkNzA1LjUzNmQ3MzkuMzI4ZDg2Mi4yMDhkNTY0LjIyNGQ4NjIuMjA4ZDU1Ni4wMzJkODg2Ljc4NGQ1NDAuNjcyZDk0My4xMDRkNTI1LjMxMmQ5OTkuNDI0ZDUxOC4xNDRkMTAyNGQzNTkuNDI0ZDEwMjRkNDA4LjU3NmQ4NjIuMjA4ZDI2NS4yMTZkODYyLjIwOGQyNTcuMDI0ZDg4OS44NTZkMjQxLjE1MmQ5NDcuMmQyMjUuMjhkMTAwNC41NDRkMjIwLjE2ZDEwMjRkNjEuNDRkMTAyNGQxMDkuNTY4ZDg2Mi4yMDhkMzIuNzY4ZDg2Mi4yMDhkMzIuNzY4ZDcwNS41MzZkMTU2LjY3MmQ3MDUuNTM2ZDE5MS40ODhkNTk2Ljk5MmQ2MS40NGQ1OTYuOTkyZDYxLjQ0ZDQ0MC4zMTlkMjQxLjY2NGQ0NDAuMzE5ZDI1NC45NzZkNDAzLjQ1NmQyOTAuODE2ZDI4Ni43MmQ0NTIuNjA4ZDI4Ni43MmQ0MDAuMzg0ZDQ0MC4zMTlkNTQxLjY5NmQ0NDAuMzE5ZDU5MC44NDhkMjg2LjcyZDc1MS42MTZkMjg2LjcyZDY5OS4zOTJkNDQwLjMxOWQ3NjhkNDQwLjMxOWQzMTYuNDE2ZDcwNS41MzZkNDU1LjY4ZDcwNS41MzZkNDkwLjQ5NmQ1OTYuOTkyZDM1MS4yMzJkNTk2Ljk5MmQzMTYuNDE2ZDcwNS41MzZoUjJkODE2LjEyOFIzZDc2OFI0ZDMyLjc2OFI1ZDczNy4yOFI2ZDBSN2Q3MDQuNTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkzNVIxMWQzMi43NjhSMTJkODE2LjEyOFIxM2FpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0N1IxMWQwUjEyZDBSMTNhaGc6MzRvUjBkOTk2LjM1MlIxYWQxOTIuNTEyZDMwMS4wNTZkMTkyLjUxMmQ1MDYuODhkMzYuODY0ZDUwNi44OGQzNi44NjRkMzAxLjA1NmQxOTIuNTEyZDMwMS4wNTZkMzc3Ljg1NmQzMDEuMDU2ZDM3Ny44NTZkNTA2Ljg4ZDIyMi4yMDhkNTA2Ljg4ZDIyMi4yMDhkMzAxLjA1NmQzNzcuODU2ZDMwMS4wNTZoUjJkNDA1LjUwNFIzZDM3Ny44NTZSNGQzNi44NjRSNWQ3MjIuOTQ0UjZkNTE3LjEyUjdkNjg2LjA4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkzNFIxMWQzNi44NjRSMTJkNDA1LjUwNFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0Nm9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQ2UjExZDBSMTJkMFIxM2FoZzozM29SMGQ5OTYuMzUyUjFhZDIxNi4wNjRkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkODY3LjMyOGQyMTYuMDY0ZDg2Ny4zMjhkMjE2LjA2NGQxMDI0ZDU5LjM5MmQ4MTguMTc1ZDU5LjM5MmQyODYuNzJkMjE2LjA2NGQyODYuNzJkMjE2LjA2NGQ4MTguMTc1ZDU5LjM5MmQ4MTguMTc1aFIyZDIyNS4yOFIzZDIxNi4wNjRSNGQ1OS4zOTJSNWQ3MzcuMjhSNmQwUjdkNjc3Ljg4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzNSMTFkNTkuMzkyUjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0NW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQ1UjExZDBSMTJkMFIxM2FoZzozMm9SMGQ5OTYuMzUyUjFhaFIyZDMyOS43MjhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzJSMTFkMFIxMmQzMjkuNzI4UjEzYWhnOjE0NG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQ0UjExZDBSMTJkMFIxM2FoZzoxNDNvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0M1IxMWQwUjEyZDBSMTNhaGc6MjU1b1IwZDk5Ni4zNTJSMWFkNjQ2LjE0NGQxMDg4LjUxMmQ2NDYuMTQ0ZDExNDkuOTUyZDYwMi42MjRkMTE5My40NzJkNTU5LjEwNGQxMjM2Ljk5MmQ0OTcuNjY0ZDEyMzYuOTkyZDEzNy4yMTZkMTIzNi45OTJkMTM3LjIxNmQxMDc5LjI5NmQ0ODkuNDcyZDEwNzkuMjk2ZDQ4OS40NzJkMTAyNGQxOTIuNTEyZDEwMjRkMTMxLjA3MmQxMDI0ZDg3LjA0ZDk3OS45NjhkNDMuMDA4ZDkzNS45MzZkNDMuMDA4ZDg3NS41MmQ0My4wMDhkNDMyLjEyOGQxOTkuNjhkNDMyLjEyOGQxOTkuNjhkODY3LjMyOGQ0ODkuNDcyZDg2Ny4zMjhkNDg5LjQ3MmQ0MzIuMTI4ZDY0Ni4xNDRkNDMyLjEyOGQ2NDYuMTQ0ZDEwODguNTEyZDU1NS4wMDhkMjEwLjk0M2Q1NTUuMDA4ZDM2OC42NGQzOTcuMzEyZDM2OC42NGQzOTcuMzEyZDIxMC45NDNkNTU1LjAwOGQyMTAuOTQzZDMzNS44NzJkMjEwLjk0M2QzMzUuODcyZDM2OC42NGQxNzkuMmQzNjguNjRkMTc5LjJkMjEwLjk0M2QzMzUuODcyZDIxMC45NDNoUjJkNzA0LjUxMlIzZDY0Ni4xNDRSNGQ0My4wMDhSNWQ4MTMuMDU2UjZkLTIxMi45OTJSN2Q3NzAuMDQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNTVSMTFkNDMuMDA4UjEyZDcwNC41MTJSMTNhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQyb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNDJSMTFkMFIxMmQwUjEzYWhnOjI1NG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjU0UjExZDBSMTJkMFIxM2FoZzoxNDFvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0MVIxMWQwUjEyZDBSMTNhaGc6MjUzb1IwZDk5Ni4zNTJSMWFkNjQ2LjE0NGQxMDg4LjUxMmQ2NDYuMTQ0ZDExNDkuOTUyZDYwMi42MjRkMTE5My40NzJkNTU5LjEwNGQxMjM2Ljk5MmQ0OTcuNjY0ZDEyMzYuOTkyZDEzNy4yMTZkMTIzNi45OTJkMTM3LjIxNmQxMDc5LjI5NmQ0ODkuNDcyZDEwNzkuMjk2ZDQ4OS40NzJkMTAyNGQxOTIuNTEyZDEwMjRkMTMxLjA3MmQxMDI0ZDg3LjA0ZDk3OS45NjhkNDMuMDA4ZDkzNS45MzZkNDMuMDA4ZDg3NS41MmQ0My4wMDhkNDMyLjEyOGQxOTkuNjhkNDMyLjEyOGQxOTkuNjhkODY3LjMyOGQ0ODkuNDcyZDg2Ny4zMjhkNDg5LjQ3MmQ0MzIuMTI4ZDY0Ni4xNDRkNDMyLjEyOGQ2NDYuMTQ0ZDEwODguNTEyZDI3Ni40OGQzNjkuNjY0ZDMyOC43MDRkMTYxLjc5MmQ0ODkuNDcyZDE2MS43OTJkNDM3LjI0OGQzNjkuNjY0ZDI3Ni40OGQzNjkuNjY0aFIyZDcwNC41MTJSM2Q2NDYuMTQ0UjRkNDMuMDA4UjVkODYyLjIwOFI2ZC0yMTIuOTkyUjdkODE5LjJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI1M1IxMWQ0My4wMDhSMTJkNzA0LjUxMlIxM2FpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0MG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQwUjExZDBSMTJkMFIxM2FoZzoyNTJvUjBkOTk2LjM1MlIxYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQ1NTguMDhkMjEyLjk5MWQ1NTguMDhkMzcwLjY4OGQ0MDAuMzg0ZDM3MC42ODhkNDAwLjM4NGQyMTIuOTkxZDU1OC4wOGQyMTIuOTkxZDMzOC45NDRkMjEyLjk5MWQzMzguOTQ0ZDM3MC42ODhkMTgyLjI3MmQzNzAuNjg4ZDE4Mi4yNzJkMjEyLjk5MWQzMzguOTQ0ZDIxMi45OTFoUjJkNzExLjY4UjNkNjU2LjM4NFI0ZDU0LjI3MlI1ZDgxMS4wMDhSNmQwUjdkNzU2LjczNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjUyUjExZDU0LjI3MlIxMmQ3MTEuNjhSMTNhaTFpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzOW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTM5UjExZDBSMTJkMFIxM2FoZzoyNTFvUjBkOTk2LjM1MlIxYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQzMjUuNjMyZDM2OS42NjRkMTg5LjQ0ZDM2OS42NjRkMzAyLjA4ZDE4MS4yNDdkNDA0LjQ4ZDE4MS4yNDdkNTE3LjEyZDM2OS42NjRkMzc5LjkwNGQzNjkuNjY0ZDM1MS4yMzJkMzI0LjYwN2QzMjUuNjMyZDM2OS42NjRoUjJkNzExLjY4UjNkNjU2LjM4NFI0ZDU0LjI3MlI1ZDg0Mi43NTJSNmQwUjdkNzg4LjQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNTFSMTFkNTQuMjcyUjEyZDcxMS42OFIxM2FpMWkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMzhvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzOFIxMWQwUjEyZDBSMTNhaGc6MjUwb1IwZDk5Ni4zNTJSMWFkNDk5LjcxMmQ0MzAuMDhkNjU2LjM4NGQ0MzAuMDhkNjU2LjM4NGQ4NzUuNTJkNjU2LjM4NGQ5MzUuOTM2ZDYxMi44NjRkOTc5Ljk2OGQ1NjkuMzQ0ZDEwMjRkNTA3LjkwNGQxMDI0ZDIwMi43NTJkMTAyNGQxNDEuMzEyZDEwMjRkOTcuNzkyZDk3OS45NjhkNTQuMjcyZDkzNS45MzZkNTQuMjcyZDg3NS41MmQ1NC4yNzJkNDMwLjA4ZDIxMC45NDRkNDMwLjA4ZDIxMC45NDRkODY3LjMyOGQ0OTkuNzEyZDg2Ny4zMjhkNDk5LjcxMmQ0MzAuMDhkMjc5LjU1MmQzNjkuNjY0ZDMzMS43NzZkMTYxLjc5MmQ0OTIuNTQ0ZDE2MS43OTJkNDQwLjMyZDM2OS42NjRkMjc5LjU1MmQzNjkuNjY0aFIyZDcxMS42OFIzZDY1Ni4zODRSNGQ1NC4yNzJSNWQ4NjIuMjA4UjZkMFI3ZDgwNy45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI1MFIxMWQ1NC4yNzJSMTJkNzExLjY4UjEzYWkxaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzN29SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTM3UjExZDBSMTJkMFIxM2FoZzoyNDlvUjBkOTk2LjM1MlIxYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQzOTkuMzZkMTYxLjc5MmQ0NTEuNTg0ZDM2OS42NjRkMjkwLjgxNmQzNjkuNjY0ZDIzOC41OTJkMTYxLjc5MmQzOTkuMzZkMTYxLjc5MmhSMmQ3MTEuNjhSM2Q2NTYuMzg0UjRkNTQuMjcyUjVkODYyLjIwOFI2ZDBSN2Q4MDcuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDlSMTFkNTQuMjcyUjEyZDcxMS42OFIxM2FpMWkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMzZvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzNlIxMWQwUjEyZDBSMTNhaGc6MjQ4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDhSMTFkMFIxMmQwUjEzYWhnOjEzNW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTM1UjExZDBSMTJkMFIxM2FoZzoyNDdvUjBkOTk2LjM1MlIxYWQ1MDguOTI4ZDYyMS41NjhkNTA4LjkyOGQ3NzguMjRkNy4xNjhkNzc4LjI0ZDcuMTY4ZDYyMS41NjhkNTA4LjkyOGQ2MjEuNTY4ZDE4Ny4zOTJkODY3LjMyOGQzNDQuMDY0ZDg2Ny4zMjhkMzQ0LjA2NGQxMDI0ZDE4Ny4zOTJkMTAyNGQxODcuMzkyZDg2Ny4zMjhkMzQ0LjA2NGQzOTMuMjE2ZDM0NC4wNjRkNTUwLjkxMmQxODcuMzkyZDU1MC45MTJkMTg3LjM5MmQzOTMuMjE2ZDM0NC4wNjRkMzkzLjIxNmhSMmQ1MzEuNDU2UjNkNTA4LjkyOFI0ZDcuMTY4UjVkNjMwLjc4NFI2ZDBSN2Q2MjMuNjE2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDdSMTFkNy4xNjhSMTJkNTMxLjQ1NlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMzRvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzNFIxMWQwUjEyZDBSMTNhaGc6MjQ2b1IwZDk5Ni4zNTJSMWFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQ1NDYuODE2ZDIxMC45NDNkNTQ2LjgxNmQzNjguNjRkMzg5LjEyZDM2OC42NGQzODkuMTJkMjEwLjk0M2Q1NDYuODE2ZDIxMC45NDNkMzI3LjY4ZDIxMC45NDNkMzI3LjY4ZDM2OC42NGQxNzEuMDA4ZDM2OC42NGQxNzEuMDA4ZDIxMC45NDNkMzI3LjY4ZDIxMC45NDNoUjJkNzA4LjYwOFIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4MTMuMDU2UjZkMFI3ZDc2MC44MzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0NlIxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzM29SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTMzUjExZDBSMTJkMFIxM2FoZzoyNDVvUjBkOTk2LjM1MlIxYWQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODc1LjUyZDY1NC4zMzZkOTM1LjkzNmQ2MTAuODE2ZDk3OS45NjhkNTY3LjI5NmQxMDI0ZDUwNS44NTZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDQ5Ny42NjRkODY3LjMyOGQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDQyOS4wNTZkMjUwLjg4ZDQ2OC45OTJkMjUwLjg4ZDUyNy4zNmQyMTIuOTkxZDUyNy4zNmQzNDIuMDE1ZDQ2My44NzJkMzY4LjY0ZDQyNS45ODRkMzY4LjY0ZDM4OC4wOTZkMzY4LjY0ZDMyOS4yMTZkMzM2Ljg5NWQyNzAuMzM2ZDMwNS4xNTFkMjQwLjY0ZDMwNS4xNTFkMjI5LjM3NmQzMDUuMTUxZDE4Ni4zNjhkMzA1LjE1MWQxNDMuMzZkMzQyLjAxNWQxNDMuMzZkMjE1LjAzOWQyMTIuOTkyZDE4Ny4zOTFkMjQwLjY0ZDE4Ny4zOTFkMjc4LjUyOGQxODcuMzkxZDMzNy45MmQyMTcuMDg3ZDM5Ny4zMTJkMjQ2Ljc4NGQ0MjkuMDU2ZDI1MC44OGhSMmQ3MDguNjA4UjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDgzNi42MDhSNmQwUjdkNzg0LjM4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjQ1UjExZDUyLjIyNFIxMmQ3MDguNjA4UjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTNpMmkzaTNpM2kyaTNpMmkzaTNpM2hnOjEzMm9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTMyUjExZDBSMTJkMFIxM2FoZzoyNDRvUjBkOTk2LjM1MlIxYWQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODc1LjUyZDY1NC4zMzZkOTM1LjkzNmQ2MTAuODE2ZDk3OS45NjhkNTY3LjI5NmQxMDI0ZDUwNS44NTZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDQ5Ny42NjRkODY3LjMyOGQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDMzNC44NDhkMzcwLjY4OGQxOTguNjU2ZDM3MC42ODhkMzExLjI5NmQxODIuMjcxZDQxMy42OTZkMTgyLjI3MWQ1MjYuMzM2ZDM3MC42ODhkMzg5LjEyZDM3MC42ODhkMzYwLjQ0OGQzMjUuNjMxZDMzNC44NDhkMzcwLjY4OGhSMmQ3MDguNjA4UjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDg0MS43MjhSNmQwUjdkNzg5LjUwNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjQ0UjExZDUyLjIyNFIxMmQ3MDguNjA4UjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMzFvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzMVIxMWQwUjEyZDBSMTNhaGc6MjQzb1IwZDk5Ni4zNTJSMWFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyNjguMjg4ZDM2OS42NjRkMzIwLjUxMmQxNjEuNzkyZDQ4MS4yOGQxNjEuNzkyZDQyOS4wNTZkMzY5LjY2NGQyNjguMjg4ZDM2OS42NjRoUjJkNzA4LjYwOFIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NjIuMjA4UjZkMFI3ZDgwOS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0M1IxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTMwb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMzBSMTFkMFIxMmQwUjEzYWhnOjI0Mm9SMGQ5OTYuMzUyUjFhZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4NzUuNTJkNjU0LjMzNmQ5MzUuOTM2ZDYxMC44MTZkOTc5Ljk2OGQ1NjcuMjk2ZDEwMjRkNTA1Ljg1NmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDg2Ny4zMjhkNDk3LjY2NGQ4NjcuMzI4ZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkNDA4LjU3NmQxNjEuNzkyZDQ2MC44ZDM2OS42NjRkMzAwLjAzMmQzNjkuNjY0ZDI0Ny44MDhkMTYxLjc5MmQ0MDguNTc2ZDE2MS43OTJoUjJkNzA4LjYwOFIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NjIuMjA4UjZkMFI3ZDgwOS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0MlIxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI5b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjlSMTFkMFIxMmQwUjEzYWhnOjI0MW9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4ZDQyNy4wMDhkMjUwLjg4ZDQ2Ni45NDRkMjUwLjg4ZDUyNS4zMTJkMjEyLjk5MWQ1MjUuMzEyZDM0Mi4wMTVkNDYxLjgyNGQzNjguNjRkNDIzLjkzNmQzNjguNjRkMzg2LjA0OGQzNjguNjRkMzI3LjE2OGQzMzYuODk1ZDI2OC4yODhkMzA1LjE1MWQyMzguNTkyZDMwNS4xNTFkMjI3LjMyOGQzMDUuMTUxZDE4NC4zMmQzMDUuMTUxZDE0MS4zMTJkMzQyLjAxNWQxNDEuMzEyZDIxNS4wMzlkMjEwLjk0NGQxODcuMzkxZDIzOC41OTJkMTg3LjM5MWQyNzYuNDhkMTg3LjM5MWQzMzUuODcyZDIxNy4wODdkMzk1LjI2NGQyNDYuNzg0ZDQyNy4wMDhkMjUwLjg4aFIyZDcyNC45OTJSM2Q2NTcuNDA4UjRkNTUuMjk2UjVkODM2LjYwOFI2ZDBSN2Q3ODEuMzEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDFSMTFkNTUuMjk2UjEyZDcyNC45OTJSMTNhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkxaTNpMmkzaTNpM2kyaTNpMmkzaTNpM2hnOjEyOG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTI4UjExZDBSMTJkMFIxM2FoZzoyNDBvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0MFIxMWQwUjEyZDBSMTNhaGc6MTI3b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjdSMTFkMFIxMmQwUjEzYWhnOjIzOW9SMGQ5OTYuMzUyUjFhZDU2LjMyZDEwMjRkNTYuMzJkNDMwLjA4ZDIxMi45OTJkNDMwLjA4ZDIxMi45OTJkMTAyNGQ1Ni4zMmQxMDI0ZDM0My4wNGQyMTAuOTQzZDM0My4wNGQzNjguNjRkMTg1LjM0NGQzNjguNjRkMTg1LjM0NGQyMTAuOTQzZDM0My4wNGQyMTAuOTQzZDEyMy45MDRkMjEwLjk0M2QxMjMuOTA0ZDM2OC42NGQtMzIuNzY4ZDM2OC42NGQtMzIuNzY4ZDIxMC45NDNkMTIzLjkwNGQyMTAuOTQzaFIyZDIxOS4xMzZSM2QzNDMuMDRSNGQtMzIuNzY4UjVkODEzLjA1NlI2ZDBSN2Q4NDUuODI0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMzlSMTFkLTMyLjc2OFIxMmQyMTkuMTM2UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNm9SMGQ5OTYuMzUyUjFhZDMxMC4yNzJkNjkxLjJkMzUxLjIzMmQ2OTEuMmQ0MDguNTc2ZDY1NC4zMzZkNDA4LjU3NmQ3ODMuMzZkMzQ3LjEzNmQ4MDguOTZkMzA3LjJkODA4Ljk2ZDI3MC4zMzZkODA4Ljk2ZDIxMC40MzJkNzc3LjcyOGQxNTAuNTI4ZDc0Ni40OTZkMTE1LjcxMmQ3NDYuNDk2ZDc2LjhkNzQ2LjQ5NmQyNC41NzZkNzg2LjQzMmQyNC41NzZkNjUxLjI2NGQ3OC44NDhkNjI3LjcxMmQxMjEuODU2ZDYyNy43MTJkMTYwLjc2OGQ2MjcuNzEyZDIyMC42NzJkNjU2Ljg5NmQyODAuNTc2ZDY4Ni4wNzlkMzEwLjI3MmQ2OTEuMmhSMmQ0MTMuNjk2UjNkNDA4LjU3NlI0ZDI0LjU3NlI1ZDM5Ni4yODhSNmQyMTUuMDRSN2QzNzEuNzEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjZSMTFkMjQuNTc2UjEyZDQxMy42OTZSMTNhaTFpM2kyaTNpM2kzaTNpMmkzaTNpM2hnOjIzOG9SMGQ5OTYuMzUyUjFhZDUyLjIyNGQxMDI0ZDUyLjIyNGQ0MzAuMDhkMjA4Ljg5NmQ0MzAuMDhkMjA4Ljg5NmQxMDI0ZDUyLjIyNGQxMDI0ZDEyMC44MzJkMzcwLjY4OGQtMTUuMzZkMzcwLjY4OGQ5Ny4yOGQxODIuMjcxZDE5OS42OGQxODIuMjcxZDMxMi4zMmQzNzAuNjg4ZDE3NS4xMDRkMzcwLjY4OGQxNDYuNDMyZDMyNS42MzFkMTIwLjgzMmQzNzAuNjg4aFIyZDIxOS4xMzZSM2QzMTIuMzJSNGQtMTUuMzZSNWQ4NDEuNzI4UjZkMFI3ZDg1Ny4wODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzOFIxMWQtMTUuMzZSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjEyNW9SMGQ5OTYuMzUyUjFhZDUyLjIyNGQxMDI0ZDUyLjIyNGQ4NjcuMzI4ZDExMS42MTZkODY3LjMyOGQxMTEuNjE2ZDY4Ni4wNzlkMTU3LjY5NmQ2NDcuMTY4ZDExMS42MTZkNjA4LjI1NmQxMTEuNjE2ZDQ0My4zOTFkNTIuMjI0ZDQ0My4zOTFkNTIuMjI0ZDI4Ni43MmQxMTguNzg0ZDI4Ni43MmQxODAuMjI0ZDI4Ni43MmQyMjQuMjU2ZDMzMC4yNGQyNjguMjg4ZDM3My43NmQyNjguMjg4ZDQzNS4xOTlkMjY4LjI4OGQ1NTYuMDMxZDMwOS4yNDhkNTgwLjYwOGQzMDkuMjQ4ZDcxMS42OGQyNjguMjg4ZDczNy4yOGQyNjguMjg4ZDg3NS41MmQyNjguMjg4ZDkzNS45MzZkMjI0LjI1NmQ5NzkuOTY4ZDE4MC4yMjRkMTAyNGQxMTguNzg0ZDEwMjRkNTIuMjI0ZDEwMjRoUjJkMjk1LjkzNlIzZDMwOS4yNDhSNGQ1Mi4yMjRSNWQ3MzcuMjhSNmQwUjdkNjg1LjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTI1UjExZDUyLjIyNFIxMmQyOTUuOTM2UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpM2kzaTJoZzoyMzdvUjBkOTk2LjM1MlIxYWQ1Mi4yMjRkMTAyNGQ1Mi4yMjRkNDMwLjA4ZDIwOC44OTZkNDMwLjA4ZDIwOC44OTZkMTAyNGQ1Mi4yMjRkMTAyNGQ1MC4xNzZkMzcwLjY4OGQxMDIuNGQxNjIuODE2ZDI2My4xNjhkMTYyLjgxNmQyMTAuOTQ0ZDM3MC42ODhkNTAuMTc2ZDM3MC42ODhoUjJkMjE5LjEzNlIzZDI2My4xNjhSNGQ1MC4xNzZSNWQ4NjEuMTg0UjZkMFI3ZDgxMS4wMDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzN1IxMWQ1MC4xNzZSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNG9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQxMTI1LjM3NmQ1NS4yOTZkMjAwLjcwM2QyMTEuOTY4ZDIwMC43MDNkMjExLjk2OGQxMTI1LjM3NmQ1NS4yOTZkMTEyNS4zNzZoUjJkMjE5LjEzNlIzZDIxMS45NjhSNGQ1NS4yOTZSNWQ4MjMuMjk2UjZkLTEwMS4zNzZSN2Q3NjhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEyNFIxMWQ1NS4yOTZSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaGc6MjM2b1IwZDk5Ni4zNTJSMWFkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDQzMC4wOGQyMTQuMDE2ZDQzMC4wOGQyMTQuMDE2ZDEwMjRkNTcuMzQ0ZDEwMjRkMTc3LjE1MmQxNjEuNzkyZDIyOS4zNzZkMzY5LjY2NGQ2OC42MDhkMzY5LjY2NGQxNi4zODRkMTYxLjc5MmQxNzcuMTUyZDE2MS43OTJoUjJkMjE5LjEzNlIzZDIyOS4zNzZSNGQxNi4zODRSNWQ4NjIuMjA4UjZkMFI3ZDg0NS44MjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzNlIxMWQxNi4zODRSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyM29SMGQ5OTYuMzUyUjFhZDIyMS4xODRkNjg1LjA1NmQyMjEuMTg0ZDg2Ny4zMjhkMjgwLjU3NmQ4NjcuMzI4ZDI4MC41NzZkMTAyNGQyMTQuMDE2ZDEwMjRkMTUxLjU1MmQxMDI0ZDEwOC4wMzJkOTc5Ljk2OGQ2NC41MTJkOTM1LjkzNmQ2NC41MTJkODc1LjUyZDY0LjUxMmQ3MzcuMjhkNDguMTI4ZDcyNy4wNGQ0OS4xNTJkNzI3LjA0ZDQ2LjA4ZDcyNi4wMTZkMzYuMzUyZDcyMC4zODRkMjYuNjI0ZDcxNC43NTJkMjMuNTUyZDcxMy43MjhkMjMuNTUyZDU3OS41ODRkNjQuNTEyZDU1Ny4wNTZkNjQuNTEyZDQzNS4xOTlkNjQuNTEyZDM3My43NmQxMDguMDMyZDMzMC4yNGQxNTEuNTUyZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmQyODAuNTc2ZDI4Ni43MmQyODAuNTc2ZDQ0My4zOTFkMjIxLjE4NGQ0NDMuMzkxZDIyMS4xODRkNjA4LjI1NmQxNzUuMTA0ZDY0Ny4xNjhkMTk4LjY1NmQ2NjcuNjQ3ZDE5OC42NTZkNjY2LjYyNGQyMjEuMTg0ZDY4NS4wNTZoUjJkMjk1LjkzNlIzZDI4MC41NzZSNGQyMy41NTJSNWQ3MzcuMjhSNmQwUjdkNzEzLjcyOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTIzUjExZDIzLjU1MlIxMmQyOTUuOTM2UjEzYWkxaTJpMmkyaTJpM2kzaTJpMmkyaTNpM2kyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaGc6MjM1b1IwZDk5Ni4zNTJSMWFkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDgwNS44ODhkMjA4Ljg5NmQ4MDUuODg4ZDIwOC44OTZkODY3LjMyOGQ2NTQuMzM2ZDg2Ny4zMjhkNjU0LjMzNmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDIwOC44OTZkNjY4LjY3MmQ0OTcuNjY0ZDY2OC42NzJkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDY2OC42NzJkNTYwLjEyOGQyMTIuOTkxZDU2MC4xMjhkMzcwLjY4OGQ0MDIuNDMyZDM3MC42ODhkNDAyLjQzMmQyMTIuOTkxZDU2MC4xMjhkMjEyLjk5MWQzNDAuOTkyZDIxMi45OTFkMzQwLjk5MmQzNzAuNjg4ZDE4NC4zMmQzNzAuNjg4ZDE4NC4zMmQyMTIuOTkxZDM0MC45OTJkMjEyLjk5MWhSMmQ2NTMuMzEyUjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDgxMS4wMDhSNmQwUjdkNzU4Ljc4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjM1UjExZDUyLjIyNFIxMmQ2NTMuMzEyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyMm9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQ1ODYuNzUyZDU1LjI5NmQ0MzAuMDhkNjU3LjQwOGQ0MzAuMDhkNjU3LjQwOGQ1OTAuODQ4ZDMwMC4wMzJkODY3LjMyOGQ2NTcuNDA4ZDg2Ny4zMjhkNjU3LjQwOGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQ4NjMuMjMyZDQxMi42NzJkNTg2Ljc1MmQ1NS4yOTZkNTg2Ljc1MmhSMmQ3MTQuNzUyUjNkNjU3LjQwOFI0ZDU1LjI5NlI1ZDU5My45MlI2ZDBSN2Q1MzguNjI0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjJSMTFkNTUuMjk2UjEyZDcxNC43NTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIzNG9SMGQ5OTYuMzUyUjFhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyZDMzNy45MmQzNzAuNjg4ZDIwMS43MjhkMzcwLjY4OGQzMTQuMzY4ZDE4Mi4yNzFkNDE2Ljc2OGQxODIuMjcxZDUyOS40MDhkMzcwLjY4OGQzOTIuMTkyZDM3MC42ODhkMzYzLjUyZDMyNS42MzFkMzM3LjkyZDM3MC42ODhoUjJkNjUzLjMxMlIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NDEuNzI4UjZkMFI3ZDc4OS41MDRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzNFIxMWQ1Mi4yMjRSMTJkNjUzLjMxMlIxM2FpMWkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjEyMW9SMGQ5OTYuMzUyUjFhZDY0Ni4xNDRkMTA4OC41MTJkNjQ2LjE0NGQxMTQ5Ljk1MmQ2MDIuNjI0ZDExOTMuNDcyZDU1OS4xMDRkMTIzNi45OTJkNDk3LjY2NGQxMjM2Ljk5MmQxMzcuMjE2ZDEyMzYuOTkyZDEzNy4yMTZkMTA3OS4yOTZkNDg5LjQ3MmQxMDc5LjI5NmQ0ODkuNDcyZDEwMjRkMTkyLjUxMmQxMDI0ZDEzMS4wNzJkMTAyNGQ4Ny4wNGQ5NzkuOTY4ZDQzLjAwOGQ5MzUuOTM2ZDQzLjAwOGQ4NzUuNTJkNDMuMDA4ZDQzMi4xMjhkMTk5LjY4ZDQzMi4xMjhkMTk5LjY4ZDg2Ny4zMjhkNDg5LjQ3MmQ4NjcuMzI4ZDQ4OS40NzJkNDMyLjEyOGQ2NDYuMTQ0ZDQzMi4xMjhkNjQ2LjE0NGQxMDg4LjUxMmhSMmQ3MDEuNDRSM2Q2NDYuMTQ0UjRkNDMuMDA4UjVkNTkxLjg3MlI2ZC0yMTIuOTkyUjdkNTQ4Ljg2NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTIxUjExZDQzLjAwOFIxMmQ3MDEuNDRSMTNhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIzM29SMGQ5OTYuMzUyUjFhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyZDI3MS4zNmQzNjkuNjY0ZDMyMy41ODRkMTYxLjc5MmQ0ODQuMzUyZDE2MS43OTJkNDMyLjEyOGQzNjkuNjY0ZDI3MS4zNmQzNjkuNjY0aFIyZDY1My4zMTJSM2Q2NTQuMzM2UjRkNTIuMjI0UjVkODYyLjIwOFI2ZDBSN2Q4MDkuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMzNSMTFkNTIuMjI0UjEyZDY1My4zMTJSMTNhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjBkOTk2LjM1MlIxYWQ0OTcuNjY0ZDQzMC4wOGQ2NTkuNDU2ZDQzMC4wOGQ2NTkuNDU2ZDQ4MS4yOGQ0NTQuNjU2ZDcyMS45MmQ1NjcuMjk2ZDg1OS4xMzZkNjU5LjQ1NmQ5NzIuOGQ2NTkuNDU2ZDEwMjRkNDk4LjY4OGQxMDI0ZDM1My4yOGQ4NDUuODI0ZDIwNy44NzJkMTAyNGQ0Ny4xMDRkMTAyNGQ0Ny4xMDRkOTcyLjhkMjUxLjkwNGQ3MjEuOTJkNDcuMTA0ZDQ4MS4yOGQ0Ny4xMDRkNDMwLjA4ZDIwNy44NzJkNDMwLjA4ZDM1My4yOGQ2MDIuMTEyZDQ5Ny42NjRkNDMwLjA4aFIyZDcwOC42MDhSM2Q2NTkuNDU2UjRkNDcuMTA0UjVkNTkzLjkyUjZkMFI3ZDU0Ni44MTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEyMFIxMWQ0Ny4xMDRSMTJkNzA4LjYwOFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzJvUjBkOTk2LjM1MlIxYWQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODA1Ljg4OGQyMDguODk2ZDgwNS44ODhkMjA4Ljg5NmQ4NjcuMzI4ZDY1NC4zMzZkODY3LjMyOGQ2NTQuMzM2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkMjA4Ljg5NmQ2NjguNjcyZDQ5Ny42NjRkNjY4LjY3MmQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkNjY4LjY3MmQ0MTEuNjQ4ZDE2Mi44MTZkNDYzLjg3MmQzNzAuNjg4ZDMwMy4xMDRkMzcwLjY4OGQyNTAuODhkMTYyLjgxNmQ0MTEuNjQ4ZDE2Mi44MTZoUjJkNjUzLjMxMlIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NjEuMTg0UjZkMFI3ZDgwOC45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjMyUjExZDUyLjIyNFIxMmQ2NTMuMzEyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE5b1IwZDk5Ni4zNTJSMWFkODc3LjU2OGQ0MzAuMDhkMTA0My40NTZkNDMwLjA4ZDgyMC4yMjRkMTAyNGQ3MDEuNDRkMTAyNGQ1NDAuNjcyZDY2OS42OTVkMzg3LjA3MmQxMDI0ZDI2OS4zMTJkMTAyNGQzNS44NGQ0MzAuMDhkMjAxLjcyOGQ0MzAuMDhkMzI5LjcyOGQ3MzguMzA0ZDM3My43NmQ2MzUuOTA0ZDM4NGQ2MTIuMzUyZDQxNi4yNTZkNTM5LjY0N2Q0NDguNTEyZDQ2Ni45NDNkNDYzLjg3MmQ0MzAuMDhkNjE1LjQyNGQ0MzAuMDhkNzU4Ljc4NGQ3NDIuNGQ4NzcuNTY4ZDQzMC4wOGhSMmQxMDc4LjI3MlIzZDEwNDMuNDU2UjRkMzUuODRSNWQ1OTMuOTJSNmQwUjdkNTU4LjA4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMTlSMTFkMzUuODRSMTJkMTA3OC4yNzJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJoZzoyMzFvUjBkOTk2LjM1MlIxYWQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQ0MTkuODRkMTAyNGQ0MTQuNzJkMTA0OC41NzZkMzk5Ljg3MmQxMDkxLjU4NGQzODUuMDI0ZDExMzQuNTkyZDM3OS45MDRkMTE1NS4wNzJkMjgwLjU3NmQxMTU1LjA3MmQyODUuNjk2ZDExMzAuNDk2ZDMwMC41NDRkMTA4Ny40ODhkMzE1LjM5MmQxMDQ0LjQ4ZDMyMC41MTJkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ2NTMuMzEyZDQzMC4wOGQ2NTMuMzEyZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGhSMmQ3MDkuNjMyUjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDU5My45MlI2ZC0xMzEuMDcyUjdkNTQxLjY5NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjMxUjExZDUyLjIyNFIxMmQ3MDkuNjMyUjEzYWkxaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaGc6MTE4b1IwZDk5Ni4zNTJSMWFkNjI5Ljc2ZDQzMC4wOGQ4MDkuOTg0ZDQzMC4wOGQ0ODIuMzA0ZDEwMjRkMzQ4LjE2ZDEwMjRkMjEuNTA0ZDQzMC4wOGQyMDEuNzI4ZDQzMC4wOGQ0MTUuNzQ0ZDgyNC4zMTlkNjI5Ljc2ZDQzMC4wOGhSMmQ4MDguOTZSM2Q4MDkuOTg0UjRkMjEuNTA0UjVkNTkzLjkyUjZkMFI3ZDU3Mi40MTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExOFIxMWQyMS41MDRSMTJkODA4Ljk2UjEzYWkxaTJpMmkyaTJpMmkyaTJoZzoyMzBvUjBkOTk2LjM1MlIxYWQ5NTUuMzkyZDQzMC4wOGQxMDE2LjgzMmQ0MzAuMDhkMTA1OS44NGQ0NzMuNmQxMTAyLjg0OGQ1MTcuMTJkMTEwMi44NDhkNTc4LjU2ZDExMDIuODQ4ZDgwNS44ODhkNjU3LjQwOGQ4MDUuODg4ZDY1Ny40MDhkODY3LjMyOGQxMTAyLjg0OGQ4NjcuMzI4ZDExMDIuODQ4ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ2NDguMTkyZDUwMC43MzZkNjQ4LjE5MmQ1MDAuNzM2ZDU4Ni43NTJkNTQuMjcyZDU4Ni43NTJkNTQuMjcyZDQzMC4wOGQ5NTUuMzkyZDQzMC4wOGQ1MDAuNzM2ZDg2Ny4zMjhkNTAwLjczNmQ3ODUuNDA4ZDIxMC45NDRkNzg1LjQwOGQyMTAuOTQ0ZDg2Ny4zMjhkNTAwLjczNmQ4NjcuMzI4ZDY1Ny40MDhkNjY4LjY3MmQ5NDYuMTc2ZDY2OC42NzJkOTQ2LjE3NmQ1ODYuNzUyZDY1Ny40MDhkNTg2Ljc1MmQ2NTcuNDA4ZDY2OC42NzJoUjJkMTIwNi4yNzJSM2QxMTAyLjg0OFI0ZDU0LjI3MlI1ZDU5My45MlI2ZDBSN2Q1MzkuNjQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMzBSMTFkNTQuMjcyUjEyZDEyMDYuMjcyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExN29SMGQ5OTYuMzUyUjFhZDQ5OS43MTJkNDMwLjA4ZDY1Ni4zODRkNDMwLjA4ZDY1Ni4zODRkODc1LjUyZDY1Ni4zODRkOTM1LjkzNmQ2MTIuODY0ZDk3OS45NjhkNTY5LjM0NGQxMDI0ZDUwNy45MDRkMTAyNGQyMDIuNzUyZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDQzMC4wOGQyMTAuOTQ0ZDQzMC4wOGQyMTAuOTQ0ZDg2Ny4zMjhkNDk5LjcxMmQ4NjcuMzI4ZDQ5OS43MTJkNDMwLjA4aFIyZDcxMS42OFIzZDY1Ni4zODRSNGQ1NC4yNzJSNWQ1OTMuOTJSNmQwUjdkNTM5LjY0OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTE3UjExZDU0LjI3MlIxMmQ3MTEuNjhSMTNhaTFpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJoZzoyMjlvUjBkOTk2LjM1MlIxYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhkMjg3Ljc0NGQxNjQuODY0ZDMzOS45NjhkMTY0Ljg2NGQzNzEuNzEyZDE2NC44NjRkMzk0Ljc1MmQxODcuOTA0ZDQxNy43OTJkMjEwLjk0M2Q0MTcuNzkyZDI0Mi42ODhkNDE3Ljc5MmQyOTIuODY0ZDQxNy43OTJkMzI0LjYwN2QzOTQuNzUyZDM0Ny42NDhkMzcxLjcxMmQzNzAuNjg4ZDMzOS45NjhkMzcwLjY4OGQyODcuNzQ0ZDM3MC42ODhkMjU2ZDM3MC42ODhkMjMyLjQ0OGQzNDcuNjQ4ZDIwOC44OTZkMzI0LjYwN2QyMDguODk2ZDI5Mi44NjRkMjA4Ljg5NmQyNDIuNjg4ZDIwOC44OTZkMjEwLjk0M2QyMzIuNDQ4ZDE4Ny45MDRkMjU2ZDE2NC44NjRkMjg3Ljc0NGQxNjQuODY0ZDI4Ny43NDRkMjQ0LjczNmQyODcuNzQ0ZDMwMC4wMzJkMzM5Ljk2OGQzMDAuMDMyZDMzOS45NjhkMjQ0LjczNmQyODcuNzQ0ZDI0NC43MzZoUjJkNzQyLjRSM2Q2NTUuMzZSNGQ1My4yNDhSNWQ4NTkuMTM2UjZkMFI3ZDgwNS44ODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIyOVIxMWQ1My4yNDhSMTJkNzQyLjRSMTNhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaGc6MTE2b1IwZDk5Ni4zNTJSMWFkNDMxLjEwNGQ1ODYuNzUyZDIxMC45NDRkNTg2Ljc1MmQyMTAuOTQ0ZDg2Ny4zMjhkNDMxLjEwNGQ4NjcuMzI4ZDQzMS4xMDRkMTAyNGQyMDMuNzc2ZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDI1My45NTJkMjEwLjk0NGQyNTMuOTUyZDIxMC45NDRkNDMwLjA4ZDQzMS4xMDRkNDMwLjA4ZDQzMS4xMDRkNTg2Ljc1MmhSMmQ0NjEuODI0UjNkNDMxLjEwNFI0ZDU0LjI3MlI1ZDc3MC4wNDhSNmQwUjdkNzE1Ljc3NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTE2UjExZDU0LjI3MlIxMmQ0NjEuODI0UjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaGc6MjI4b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDU1Mi45NmQyMTIuOTkxZDU1Mi45NmQzNzAuNjg4ZDM5NS4yNjRkMzcwLjY4OGQzOTUuMjY0ZDIxMi45OTFkNTUyLjk2ZDIxMi45OTFkMzMzLjgyNGQyMTIuOTkxZDMzMy44MjRkMzcwLjY4OGQxNzcuMTUyZDM3MC42ODhkMTc3LjE1MmQyMTIuOTkxZDMzMy44MjRkMjEyLjk5MWhSMmQ3NDIuNFIzZDY1NS4zNlI0ZDUzLjI0OFI1ZDgxMS4wMDhSNmQwUjdkNzU3Ljc2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjhSMTFkNTMuMjQ4UjEyZDc0Mi40UjEzYWkxaTNpM2kyaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IwZDk5Ni4zNTJSMWFkNjUyLjI4OGQ1NzguNTZkNjUyLjI4OGQ2MDguMjU2ZDQ5NC41OTJkNjA4LjI1NmQ0OTQuNTkyZDU4Ni43NTJkMjA1LjgyNGQ1ODYuNzUyZDIwNS44MjRkNjQ4LjE5MmQ1MDIuNzg0ZDY0OC4xOTJkNTY1LjI0OGQ2NDguMTkyZDYwOC43NjhkNjkxLjcxMmQ2NTIuMjg4ZDczNS4yMzJkNjUyLjI4OGQ3OTYuNjcyZDY1Mi4yODhkODc1LjUyZDY1Mi4yODhkOTM1LjkzNmQ2MDguNzY4ZDk3OS45NjhkNTY1LjI0OGQxMDI0ZDUwMi43ODRkMTAyNGQxOTcuNjMyZDEwMjRkMTM3LjIxNmQxMDI0ZDkzLjE4NGQ5NzkuOTY4ZDQ5LjE1MmQ5MzUuOTM2ZDQ5LjE1MmQ4NzUuNTJkNDkuMTUyZDg0NS44MjRkMjA1LjgyNGQ4NDUuODI0ZDIwNS44MjRkODY3LjMyOGQ0OTQuNTkyZDg2Ny4zMjhkNDk0LjU5MmQ4MDUuODg4ZDE5Ny42MzJkODA1Ljg4OGQxMzcuMjE2ZDgwNS44ODhkOTMuMTg0ZDc2MS44NTZkNDkuMTUyZDcxNy44MjRkNDkuMTUyZDY1Ny40MDhkNDkuMTUyZDU3OC41NmQ0OS4xNTJkNTE4LjE0NGQ5My4xODRkNDc0LjExMWQxMzcuMjE2ZDQzMC4wOGQxOTcuNjMyZDQzMC4wOGQ1MDIuNzg0ZDQzMC4wOGQ1NjUuMjQ4ZDQzMC4wOGQ2MDguNzY4ZDQ3NC4xMTFkNjUyLjI4OGQ1MTguMTQ0ZDY1Mi4yODhkNTc4LjU2aFIyZDcwMi40NjRSM2Q2NTIuMjg4UjRkNDkuMTUyUjVkNTkzLjkyUjZkMFI3ZDU0NC43NjhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExNVIxMWQ0OS4xNTJSMTJkNzAyLjQ2NFIxM2FpMWkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaGc6MjI3b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDQyNC45NmQyNDkuODU2ZDQ2NC44OTZkMjQ5Ljg1NmQ1MjMuMjY0ZDIxMS45NjdkNTIzLjI2NGQzNDAuOTkxZDQ1OS43NzZkMzY3LjYxNmQ0MjEuODg4ZDM2Ny42MTZkMzg0ZDM2Ny42MTZkMzI1LjEyZDMzNS44NzFkMjY2LjI0ZDMwNC4xMjdkMjM2LjU0NGQzMDQuMTI3ZDIyNS4yOGQzMDQuMTI3ZDE4Mi4yNzJkMzA0LjEyN2QxMzkuMjY0ZDM0MC45OTFkMTM5LjI2NGQyMTQuMDE1ZDIwOC44OTZkMTg2LjM2N2QyMzYuNTQ0ZDE4Ni4zNjdkMjc0LjQzMmQxODYuMzY3ZDMzMy44MjRkMjE2LjA2M2QzOTMuMjE2ZDI0NS43NmQ0MjQuOTZkMjQ5Ljg1NmhSMmQ3NDIuNFIzZDY1NS4zNlI0ZDUzLjI0OFI1ZDgzNy42MzJSNmQwUjdkNzg0LjM4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjI3UjExZDUzLjI0OFIxMmQ3NDIuNFIxM2FpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkzaTJpM2kzaTNpMmkzaTJpM2kzaTNoZzoxMTRvUjBkOTk2LjM1MlIxYWQyMDIuNzUyZDQzMC4wOGQ1MzAuNDMyZDQzMC4wOGQ1MzAuNDMyZDU4Ni43NTJkMjA5LjkyZDU4Ni43NTJkMjA5LjkyZDEwMjRkNTMuMjQ4ZDEwMjRkNTMuMjQ4ZDU3OC41NmQ1My4yNDhkNTE4LjE0NGQ5Ny4yOGQ0NzQuMTExZDE0MS4zMTJkNDMwLjA4ZDIwMi43NTJkNDMwLjA4aFIyZDUzOC42MjRSM2Q1MzAuNDMyUjRkNTMuMjQ4UjVkNTkzLjkyUjZkMFI3ZDU0MC42NzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExNFIxMWQ1My4yNDhSMTJkNTM4LjYyNFIxM2FpMWkyaTJpMmkyaTJpMmkzaTNoZzoyMjZvUjBkOTk2LjM1MlIxYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhkMzUxLjIzMmQzNzAuNjg4ZDIxNS4wNGQzNzAuNjg4ZDMyNy42OGQxODIuMjcxZDQzMC4wOGQxODIuMjcxZDU0Mi43MmQzNzAuNjg4ZDQwNS41MDRkMzcwLjY4OGQzNzYuODMyZDMyNS42MzFkMzUxLjIzMmQzNzAuNjg4aFIyZDc0Mi40UjNkNjU1LjM2UjRkNTMuMjQ4UjVkODQxLjcyOFI2ZDBSN2Q3ODguNDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIyNlIxMWQ1My4yNDhSMTJkNzQyLjRSMTNhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjExM29SMGQ5OTYuMzUyUjFhZDIwLjQ4ZDU3OC41NmQyMC40OGQ1MTguMTQ0ZDY0ZDQ3NC4xMTFkMTA3LjUyZDQzMC4wOGQxNjguOTZkNDMwLjA4ZDYyMy42MTZkNDMwLjA4ZDYyMy42MTZkMTI1OS41MmQ0NjYuOTQ0ZDEyNTkuNTJkNDY2Ljk0NGQxMDI0ZDE2OC45NmQxMDI0ZDEwNy41MmQxMDI0ZDY0ZDk3OS45NjhkMjAuNDhkOTM1LjkzNmQyMC40OGQ4NzUuNTJkMjAuNDhkNTc4LjU2ZDE3OC4xNzZkNTg2Ljc1MmQxNzguMTc2ZDg2Ny4zMjhkNDY2Ljk0NGQ4NjcuMzI4ZDQ2Ni45NDRkNTg2Ljc1MmQxNzguMTc2ZDU4Ni43NTJoUjJkNjc5LjkzNlIzZDYyMy42MTZSNGQyMC40OFI1ZDU5My45MlI2ZC0yMzUuNTJSN2Q1NzMuNDRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExM1IxMWQyMC40OFIxMmQ2NzkuOTM2UjEzYWkxaTNpM2kyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjI1b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDI4NC42NzJkMzcwLjY4OGQzMzYuODk2ZDE2Mi44MTZkNDk3LjY2NGQxNjIuODE2ZDQ0NS40NGQzNzAuNjg4ZDI4NC42NzJkMzcwLjY4OGhSMmQ3NDIuNFIzZDY1NS4zNlI0ZDUzLjI0OFI1ZDg2MS4xODRSNmQwUjdkODA3LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjI1UjExZDUzLjI0OFIxMmQ3NDIuNFIxM2FpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTEyb1IwZDk5Ni4zNTJSMWFkNTA4LjkyOGQ0MzAuMDhkNTcwLjM2OGQ0MzAuMDhkNjEzLjg4OGQ0NzQuMTExZDY1Ny40MDhkNTE4LjE0NGQ2NTcuNDA4ZDU3OC41NmQ2NTcuNDA4ZDg3NS41MmQ2NTcuNDA4ZDkzNS45MzZkNjEzLjg4OGQ5NzkuOTY4ZDU3MC4zNjhkMTAyNGQ1MDguOTI4ZDEwMjRkMjExLjk2OGQxMDI0ZDIxMS45NjhkMTI1OS41MmQ1NS4yOTZkMTI1OS41MmQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4ZDIxMS45NjhkNTg2Ljc1MmQyMTEuOTY4ZDg2Ny4zMjhkNTAwLjczNmQ4NjcuMzI4ZDUwMC43MzZkNTg2Ljc1MmQyMTEuOTY4ZDU4Ni43NTJoUjJkNjc5LjkzNlIzZDY1Ny40MDhSNGQ1NS4yOTZSNWQ1OTMuOTJSNmQtMjM1LjUyUjdkNTM4LjYyNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTEyUjExZDU1LjI5NlIxMmQ2NzkuOTM2UjEzYWkxaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjI0b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDQyNC45NmQxNjIuODE2ZDQ3Ny4xODRkMzcwLjY4OGQzMTYuNDE2ZDM3MC42ODhkMjY0LjE5MmQxNjIuODE2ZDQyNC45NmQxNjIuODE2aFIyZDc0Mi40UjNkNjU1LjM2UjRkNTMuMjQ4UjVkODYxLjE4NFI2ZDBSN2Q4MDcuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjRSMTFkNTMuMjQ4UjEyZDc0Mi40UjEzYWkxaTNpM2kyaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZ2g"}];
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
browser.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
browser.text.Font.DEFAULT_FONT_SCALE = 9.0;
browser.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
browser.text.Font.DEFAULT_CLASS_NAME = "browser.text.Font";
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
browser.display.DisplayObject.GRAPHICS_INVALID = 2;
browser.display.DisplayObject.MATRIX_INVALID = 4;
browser.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
browser.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
browser.display.DisplayObject.TRANSFORM_INVALID = 32;
browser.display.DisplayObject.BOUNDS_INVALID = 64;
browser.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
browser.display.DisplayObject.ALL_RENDER_FLAGS = 98;
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
browser.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
browser.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
browser.Lib.DEFAULT_HEIGHT = 500;
browser.Lib.DEFAULT_WIDTH = 500;
browser.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
browser.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
browser.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
browser.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
browser.Lib.NME_IDENTIFIER = "haxe:jeash";
browser.Lib.VENDOR_HTML_TAG = "data-";
browser.Lib.starttime = haxe.Timer.stamp();
browser.display._BitmapData.MinstdGenerator.a = 16807;
browser.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
browser.display.BitmapDataChannel.ALPHA = 8;
browser.display.BitmapDataChannel.BLUE = 4;
browser.display.BitmapDataChannel.GREEN = 2;
browser.display.BitmapDataChannel.RED = 1;
browser.display.Graphics.TILE_SCALE = 1;
browser.display.Graphics.TILE_ROTATION = 2;
browser.display.Graphics.TILE_RGB = 4;
browser.display.Graphics.TILE_ALPHA = 8;
browser.display.Graphics.TILE_TRANS_2x2 = 16;
browser.display.Graphics.TILE_BLEND_NORMAL = 0;
browser.display.Graphics.TILE_BLEND_ADD = 65536;
browser.display.Graphics.BMP_REPEAT = 16;
browser.display.Graphics.BMP_SMOOTH = 65536;
browser.display.Graphics.CORNER_ROUND = 0;
browser.display.Graphics.CORNER_MITER = 4096;
browser.display.Graphics.CORNER_BEVEL = 8192;
browser.display.Graphics.CURVE = 2;
browser.display.Graphics.END_NONE = 0;
browser.display.Graphics.END_ROUND = 256;
browser.display.Graphics.END_SQUARE = 512;
browser.display.Graphics.LINE = 1;
browser.display.Graphics.MOVE = 0;
browser.display.Graphics.NME_MAX_DIM = 5000;
browser.display.Graphics.PIXEL_HINTING = 16384;
browser.display.Graphics.RADIAL = 1;
browser.display.Graphics.SCALE_HORIZONTAL = 2;
browser.display.Graphics.SCALE_NONE = 0;
browser.display.Graphics.SCALE_NORMAL = 3;
browser.display.Graphics.SCALE_VERTICAL = 1;
browser.display.Graphics.SPREAD_REPEAT = 2;
browser.display.Graphics.SPREAD_REFLECT = 4;
browser.display.GraphicsPathCommand.LINE_TO = 2;
browser.display.GraphicsPathCommand.MOVE_TO = 1;
browser.display.GraphicsPathCommand.CURVE_TO = 3;
browser.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
browser.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
browser.display.GraphicsPathCommand.NO_OP = 0;
browser.events.Event.ACTIVATE = "activate";
browser.events.Event.ADDED = "added";
browser.events.Event.ADDED_TO_STAGE = "addedToStage";
browser.events.Event.CANCEL = "cancel";
browser.events.Event.CHANGE = "change";
browser.events.Event.CLOSE = "close";
browser.events.Event.COMPLETE = "complete";
browser.events.Event.CONNECT = "connect";
browser.events.Event.CONTEXT3D_CREATE = "context3DCreate";
browser.events.Event.DEACTIVATE = "deactivate";
browser.events.Event.ENTER_FRAME = "enterFrame";
browser.events.Event.ID3 = "id3";
browser.events.Event.INIT = "init";
browser.events.Event.MOUSE_LEAVE = "mouseLeave";
browser.events.Event.OPEN = "open";
browser.events.Event.REMOVED = "removed";
browser.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
browser.events.Event.RENDER = "render";
browser.events.Event.RESIZE = "resize";
browser.events.Event.SCROLL = "scroll";
browser.events.Event.SELECT = "select";
browser.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
browser.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
browser.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
browser.events.Event.UNLOAD = "unload";
browser.events.Event.SOUND_COMPLETE = "soundComplete";
browser.events.MouseEvent.CLICK = "click";
browser.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
browser.events.MouseEvent.MOUSE_DOWN = "mouseDown";
browser.events.MouseEvent.MOUSE_MOVE = "mouseMove";
browser.events.MouseEvent.MOUSE_OUT = "mouseOut";
browser.events.MouseEvent.MOUSE_OVER = "mouseOver";
browser.events.MouseEvent.MOUSE_UP = "mouseUp";
browser.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
browser.events.MouseEvent.RIGHT_CLICK = "rightClick";
browser.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
browser.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
browser.events.MouseEvent.ROLL_OUT = "rollOut";
browser.events.MouseEvent.ROLL_OVER = "rollOver";
browser.display.Stage.NAME = "Stage";
browser.display.Stage.nmeAcceleration = { x : 0.0, y : 1.0, z : 0.0};
browser.display.Stage.OrientationPortrait = 1;
browser.display.Stage.OrientationPortraitUpsideDown = 2;
browser.display.Stage.OrientationLandscapeRight = 3;
browser.display.Stage.OrientationLandscapeLeft = 4;
browser.display.Stage.DEFAULT_FRAMERATE = 0.0;
browser.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
browser.display.Stage.nmeMouseChanges = [browser.events.MouseEvent.MOUSE_OUT,browser.events.MouseEvent.MOUSE_OVER,browser.events.MouseEvent.ROLL_OUT,browser.events.MouseEvent.ROLL_OVER];
browser.display.Stage.nmeTouchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
browser.display.StageQuality.BEST = "best";
browser.display.StageQuality.HIGH = "high";
browser.display.StageQuality.MEDIUM = "medium";
browser.display.StageQuality.LOW = "low";
browser.display.Tilesheet.TILE_SCALE = 1;
browser.display.Tilesheet.TILE_ROTATION = 2;
browser.display.Tilesheet.TILE_RGB = 4;
browser.display.Tilesheet.TILE_ALPHA = 8;
browser.display.Tilesheet.TILE_TRANS_2x2 = 16;
browser.display.Tilesheet.TILE_BLEND_NORMAL = 0;
browser.display.Tilesheet.TILE_BLEND_ADD = 65536;
browser.errors.Error.DEFAULT_TO_STRING = "Error";
browser.events.Listener.sIDs = 1;
browser.events.EventPhase.CAPTURING_PHASE = 0;
browser.events.EventPhase.AT_TARGET = 1;
browser.events.EventPhase.BUBBLING_PHASE = 2;
browser.events.FocusEvent.FOCUS_IN = "focusIn";
browser.events.FocusEvent.FOCUS_OUT = "focusOut";
browser.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
browser.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
browser.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
browser.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
browser.events.IOErrorEvent.IO_ERROR = "ioError";
browser.events.KeyboardEvent.KEY_DOWN = "keyDown";
browser.events.KeyboardEvent.KEY_UP = "keyUp";
browser.events.ProgressEvent.PROGRESS = "progress";
browser.events.ProgressEvent.SOCKET_DATA = "socketData";
browser.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
browser.events.TouchEvent.TOUCH_END = "touchEnd";
browser.events.TouchEvent.TOUCH_MOVE = "touchMove";
browser.events.TouchEvent.TOUCH_OUT = "touchOut";
browser.events.TouchEvent.TOUCH_OVER = "touchOver";
browser.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
browser.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
browser.events.TouchEvent.TOUCH_TAP = "touchTap";
browser.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
browser.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
browser.media.Sound.EXTENSION_MP3 = "mp3";
browser.media.Sound.EXTENSION_OGG = "ogg";
browser.media.Sound.EXTENSION_WAV = "wav";
browser.media.Sound.EXTENSION_AAC = "aac";
browser.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
browser.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
browser.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
browser.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
browser.net.URLRequestMethod.DELETE = "DELETE";
browser.net.URLRequestMethod.GET = "GET";
browser.net.URLRequestMethod.HEAD = "HEAD";
browser.net.URLRequestMethod.OPTIONS = "OPTIONS";
browser.net.URLRequestMethod.POST = "POST";
browser.net.URLRequestMethod.PUT = "PUT";
browser.system.System.useCodePage = false;
browser.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
browser.text.TextField.sSelectionOwner = null;
browser.text.FontInstance.mSolidFonts = new Hash();
browser.text.TextFieldAutoSize.CENTER = "CENTER";
browser.text.TextFieldAutoSize.LEFT = "LEFT";
browser.text.TextFieldAutoSize.NONE = "NONE";
browser.text.TextFieldAutoSize.RIGHT = "RIGHT";
browser.text.TextFieldType.DYNAMIC = "DYNAMIC";
browser.text.TextFieldType.INPUT = "INPUT";
browser.ui.Keyboard.KEY_0 = 48;
browser.ui.Keyboard.KEY_1 = 49;
browser.ui.Keyboard.KEY_2 = 50;
browser.ui.Keyboard.KEY_3 = 51;
browser.ui.Keyboard.KEY_4 = 52;
browser.ui.Keyboard.KEY_5 = 53;
browser.ui.Keyboard.KEY_6 = 54;
browser.ui.Keyboard.KEY_7 = 55;
browser.ui.Keyboard.KEY_8 = 56;
browser.ui.Keyboard.KEY_9 = 57;
browser.ui.Keyboard.A = 65;
browser.ui.Keyboard.B = 66;
browser.ui.Keyboard.C = 67;
browser.ui.Keyboard.D = 68;
browser.ui.Keyboard.E = 69;
browser.ui.Keyboard.F = 70;
browser.ui.Keyboard.G = 71;
browser.ui.Keyboard.H = 72;
browser.ui.Keyboard.I = 73;
browser.ui.Keyboard.J = 74;
browser.ui.Keyboard.K = 75;
browser.ui.Keyboard.L = 76;
browser.ui.Keyboard.M = 77;
browser.ui.Keyboard.N = 78;
browser.ui.Keyboard.O = 79;
browser.ui.Keyboard.P = 80;
browser.ui.Keyboard.Q = 81;
browser.ui.Keyboard.R = 82;
browser.ui.Keyboard.S = 83;
browser.ui.Keyboard.T = 84;
browser.ui.Keyboard.U = 85;
browser.ui.Keyboard.V = 86;
browser.ui.Keyboard.W = 87;
browser.ui.Keyboard.X = 88;
browser.ui.Keyboard.Y = 89;
browser.ui.Keyboard.Z = 90;
browser.ui.Keyboard.NUMPAD_0 = 96;
browser.ui.Keyboard.NUMPAD_1 = 97;
browser.ui.Keyboard.NUMPAD_2 = 98;
browser.ui.Keyboard.NUMPAD_3 = 99;
browser.ui.Keyboard.NUMPAD_4 = 100;
browser.ui.Keyboard.NUMPAD_5 = 101;
browser.ui.Keyboard.NUMPAD_6 = 102;
browser.ui.Keyboard.NUMPAD_7 = 103;
browser.ui.Keyboard.NUMPAD_8 = 104;
browser.ui.Keyboard.NUMPAD_9 = 105;
browser.ui.Keyboard.NUMPAD_MULTIPLY = 106;
browser.ui.Keyboard.NUMPAD_ADD = 107;
browser.ui.Keyboard.NUMPAD_ENTER = 108;
browser.ui.Keyboard.NUMPAD_SUBTRACT = 109;
browser.ui.Keyboard.NUMPAD_DECIMAL = 110;
browser.ui.Keyboard.NUMPAD_DIVIDE = 111;
browser.ui.Keyboard.F1 = 112;
browser.ui.Keyboard.F2 = 113;
browser.ui.Keyboard.F3 = 114;
browser.ui.Keyboard.F4 = 115;
browser.ui.Keyboard.F5 = 116;
browser.ui.Keyboard.F6 = 117;
browser.ui.Keyboard.F7 = 118;
browser.ui.Keyboard.F8 = 119;
browser.ui.Keyboard.F9 = 120;
browser.ui.Keyboard.F10 = 121;
browser.ui.Keyboard.F11 = 122;
browser.ui.Keyboard.F12 = 123;
browser.ui.Keyboard.F13 = 124;
browser.ui.Keyboard.F14 = 125;
browser.ui.Keyboard.F15 = 126;
browser.ui.Keyboard.BACKSPACE = 8;
browser.ui.Keyboard.TAB = 9;
browser.ui.Keyboard.ENTER = 13;
browser.ui.Keyboard.SHIFT = 16;
browser.ui.Keyboard.CONTROL = 17;
browser.ui.Keyboard.CAPS_LOCK = 18;
browser.ui.Keyboard.ESCAPE = 27;
browser.ui.Keyboard.SPACE = 32;
browser.ui.Keyboard.PAGE_UP = 33;
browser.ui.Keyboard.PAGE_DOWN = 34;
browser.ui.Keyboard.END = 35;
browser.ui.Keyboard.HOME = 36;
browser.ui.Keyboard.LEFT = 37;
browser.ui.Keyboard.RIGHT = 39;
browser.ui.Keyboard.UP = 38;
browser.ui.Keyboard.DOWN = 40;
browser.ui.Keyboard.INSERT = 45;
browser.ui.Keyboard.DELETE = 46;
browser.ui.Keyboard.NUMLOCK = 144;
browser.ui.Keyboard.BREAK = 19;
browser.ui.Keyboard.DOM_VK_CANCEL = 3;
browser.ui.Keyboard.DOM_VK_HELP = 6;
browser.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
browser.ui.Keyboard.DOM_VK_TAB = 9;
browser.ui.Keyboard.DOM_VK_CLEAR = 12;
browser.ui.Keyboard.DOM_VK_RETURN = 13;
browser.ui.Keyboard.DOM_VK_ENTER = 14;
browser.ui.Keyboard.DOM_VK_SHIFT = 16;
browser.ui.Keyboard.DOM_VK_CONTROL = 17;
browser.ui.Keyboard.DOM_VK_ALT = 18;
browser.ui.Keyboard.DOM_VK_PAUSE = 19;
browser.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
browser.ui.Keyboard.DOM_VK_ESCAPE = 27;
browser.ui.Keyboard.DOM_VK_SPACE = 32;
browser.ui.Keyboard.DOM_VK_PAGE_UP = 33;
browser.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
browser.ui.Keyboard.DOM_VK_END = 35;
browser.ui.Keyboard.DOM_VK_HOME = 36;
browser.ui.Keyboard.DOM_VK_LEFT = 37;
browser.ui.Keyboard.DOM_VK_UP = 38;
browser.ui.Keyboard.DOM_VK_RIGHT = 39;
browser.ui.Keyboard.DOM_VK_DOWN = 40;
browser.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
browser.ui.Keyboard.DOM_VK_INSERT = 45;
browser.ui.Keyboard.DOM_VK_DELETE = 46;
browser.ui.Keyboard.DOM_VK_0 = 48;
browser.ui.Keyboard.DOM_VK_1 = 49;
browser.ui.Keyboard.DOM_VK_2 = 50;
browser.ui.Keyboard.DOM_VK_3 = 51;
browser.ui.Keyboard.DOM_VK_4 = 52;
browser.ui.Keyboard.DOM_VK_5 = 53;
browser.ui.Keyboard.DOM_VK_6 = 54;
browser.ui.Keyboard.DOM_VK_7 = 55;
browser.ui.Keyboard.DOM_VK_8 = 56;
browser.ui.Keyboard.DOM_VK_9 = 57;
browser.ui.Keyboard.DOM_VK_SEMICOLON = 59;
browser.ui.Keyboard.DOM_VK_EQUALS = 61;
browser.ui.Keyboard.DOM_VK_A = 65;
browser.ui.Keyboard.DOM_VK_B = 66;
browser.ui.Keyboard.DOM_VK_C = 67;
browser.ui.Keyboard.DOM_VK_D = 68;
browser.ui.Keyboard.DOM_VK_E = 69;
browser.ui.Keyboard.DOM_VK_F = 70;
browser.ui.Keyboard.DOM_VK_G = 71;
browser.ui.Keyboard.DOM_VK_H = 72;
browser.ui.Keyboard.DOM_VK_I = 73;
browser.ui.Keyboard.DOM_VK_J = 74;
browser.ui.Keyboard.DOM_VK_K = 75;
browser.ui.Keyboard.DOM_VK_L = 76;
browser.ui.Keyboard.DOM_VK_M = 77;
browser.ui.Keyboard.DOM_VK_N = 78;
browser.ui.Keyboard.DOM_VK_O = 79;
browser.ui.Keyboard.DOM_VK_P = 80;
browser.ui.Keyboard.DOM_VK_Q = 81;
browser.ui.Keyboard.DOM_VK_R = 82;
browser.ui.Keyboard.DOM_VK_S = 83;
browser.ui.Keyboard.DOM_VK_T = 84;
browser.ui.Keyboard.DOM_VK_U = 85;
browser.ui.Keyboard.DOM_VK_V = 86;
browser.ui.Keyboard.DOM_VK_W = 87;
browser.ui.Keyboard.DOM_VK_X = 88;
browser.ui.Keyboard.DOM_VK_Y = 89;
browser.ui.Keyboard.DOM_VK_Z = 90;
browser.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
browser.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
browser.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
browser.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
browser.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
browser.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
browser.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
browser.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
browser.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
browser.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
browser.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
browser.ui.Keyboard.DOM_VK_MULTIPLY = 106;
browser.ui.Keyboard.DOM_VK_ADD = 107;
browser.ui.Keyboard.DOM_VK_SEPARATOR = 108;
browser.ui.Keyboard.DOM_VK_SUBTRACT = 109;
browser.ui.Keyboard.DOM_VK_DECIMAL = 110;
browser.ui.Keyboard.DOM_VK_DIVIDE = 111;
browser.ui.Keyboard.DOM_VK_F1 = 112;
browser.ui.Keyboard.DOM_VK_F2 = 113;
browser.ui.Keyboard.DOM_VK_F3 = 114;
browser.ui.Keyboard.DOM_VK_F4 = 115;
browser.ui.Keyboard.DOM_VK_F5 = 116;
browser.ui.Keyboard.DOM_VK_F6 = 117;
browser.ui.Keyboard.DOM_VK_F7 = 118;
browser.ui.Keyboard.DOM_VK_F8 = 119;
browser.ui.Keyboard.DOM_VK_F9 = 120;
browser.ui.Keyboard.DOM_VK_F10 = 121;
browser.ui.Keyboard.DOM_VK_F11 = 122;
browser.ui.Keyboard.DOM_VK_F12 = 123;
browser.ui.Keyboard.DOM_VK_F13 = 124;
browser.ui.Keyboard.DOM_VK_F14 = 125;
browser.ui.Keyboard.DOM_VK_F15 = 126;
browser.ui.Keyboard.DOM_VK_F16 = 127;
browser.ui.Keyboard.DOM_VK_F17 = 128;
browser.ui.Keyboard.DOM_VK_F18 = 129;
browser.ui.Keyboard.DOM_VK_F19 = 130;
browser.ui.Keyboard.DOM_VK_F20 = 131;
browser.ui.Keyboard.DOM_VK_F21 = 132;
browser.ui.Keyboard.DOM_VK_F22 = 133;
browser.ui.Keyboard.DOM_VK_F23 = 134;
browser.ui.Keyboard.DOM_VK_F24 = 135;
browser.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
browser.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
browser.ui.Keyboard.DOM_VK_COMMA = 188;
browser.ui.Keyboard.DOM_VK_PERIOD = 190;
browser.ui.Keyboard.DOM_VK_SLASH = 191;
browser.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
browser.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
browser.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
browser.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
browser.ui.Keyboard.DOM_VK_QUOTE = 222;
browser.ui.Keyboard.DOM_VK_META = 224;
browser.ui.Keyboard.DOM_VK_KANA = 21;
browser.ui.Keyboard.DOM_VK_HANGUL = 21;
browser.ui.Keyboard.DOM_VK_JUNJA = 23;
browser.ui.Keyboard.DOM_VK_FINAL = 24;
browser.ui.Keyboard.DOM_VK_HANJA = 25;
browser.ui.Keyboard.DOM_VK_KANJI = 25;
browser.ui.Keyboard.DOM_VK_CONVERT = 28;
browser.ui.Keyboard.DOM_VK_NONCONVERT = 29;
browser.ui.Keyboard.DOM_VK_ACEPT = 30;
browser.ui.Keyboard.DOM_VK_MODECHANGE = 31;
browser.ui.Keyboard.DOM_VK_SELECT = 41;
browser.ui.Keyboard.DOM_VK_PRINT = 42;
browser.ui.Keyboard.DOM_VK_EXECUTE = 43;
browser.ui.Keyboard.DOM_VK_SLEEP = 95;
browser.utils.Endian.BIG_ENDIAN = "bigEndian";
browser.utils.Endian.LITTLE_ENDIAN = "littleEndian";
browser.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
demo.scenes.Game.TIME_LIMIT = 30;
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
haxe.Unserializer.CODES = null;
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
js.Lib.onerror = null;
nme.Lib.FULLSCREEN = 1;
nme.Lib.BORDERLESS = 2;
nme.Lib.RESIZABLE = 4;
nme.Lib.HARDWARE = 8;
nme.Lib.VSYNC = 16;
nme.Lib.HW_AA = 32;
nme.Lib.HW_AA_HIRES = 96;
nme.Lib.ALLOW_SHADERS = 128;
nme.Lib.REQUIRE_SHADERS = 256;
nme.Lib.DEPTH_BUFFER = 512;
nme.Lib.STENCIL_BUFFER = 1024;
nme.Lib.MIN_FLOAT_VALUE = Number.MIN_VALUE;
nme.Lib.MAX_FLOAT_VALUE = Number.MAX_VALUE;
nme.installer.Assets.cachedBitmapData = new Hash();
nme.installer.Assets.initialized = false;
nme.installer.Assets.libraryTypes = new Hash();
nme.installer.Assets.resourceClasses = new Hash();
nme.installer.Assets.resourceNames = new Hash();
nme.installer.Assets.resourceTypes = new Hash();
ApplicationMain.main();
})();
