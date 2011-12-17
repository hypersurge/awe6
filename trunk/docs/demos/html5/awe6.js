$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof awe6=='undefined') awe6 = {}
if(!awe6.interfaces) awe6.interfaces = {}
awe6.interfaces.IEncrypter = function() { }
awe6.interfaces.IEncrypter.__name__ = ["awe6","interfaces","IEncrypter"];
awe6.interfaces.IEncrypter.prototype.encrypt = null;
awe6.interfaces.IEncrypter.prototype.decrypt = null;
awe6.interfaces.IEncrypter.prototype.__class__ = awe6.interfaces.IEncrypter;
awe6.interfaces.EScene = { __ename__ : ["awe6","interfaces","EScene"], __constructs__ : ["INTRO","SELECT_SESSION","MENU","INSTRUCTIONS","SETTINGS","GAME","RESULTS","REWARDS","TEST","SUB_TYPE"] }
awe6.interfaces.EScene.INTRO = ["INTRO",0];
awe6.interfaces.EScene.INTRO.toString = $estr;
awe6.interfaces.EScene.INTRO.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SELECT_SESSION = ["SELECT_SESSION",1];
awe6.interfaces.EScene.SELECT_SESSION.toString = $estr;
awe6.interfaces.EScene.SELECT_SESSION.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.MENU = ["MENU",2];
awe6.interfaces.EScene.MENU.toString = $estr;
awe6.interfaces.EScene.MENU.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.INSTRUCTIONS = ["INSTRUCTIONS",3];
awe6.interfaces.EScene.INSTRUCTIONS.toString = $estr;
awe6.interfaces.EScene.INSTRUCTIONS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SETTINGS = ["SETTINGS",4];
awe6.interfaces.EScene.SETTINGS.toString = $estr;
awe6.interfaces.EScene.SETTINGS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.GAME = ["GAME",5];
awe6.interfaces.EScene.GAME.toString = $estr;
awe6.interfaces.EScene.GAME.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.RESULTS = ["RESULTS",6];
awe6.interfaces.EScene.RESULTS.toString = $estr;
awe6.interfaces.EScene.RESULTS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.REWARDS = ["REWARDS",7];
awe6.interfaces.EScene.REWARDS.toString = $estr;
awe6.interfaces.EScene.REWARDS.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.TEST = ["TEST",8];
awe6.interfaces.EScene.TEST.toString = $estr;
awe6.interfaces.EScene.TEST.__enum__ = awe6.interfaces.EScene;
awe6.interfaces.EScene.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",9,value]; $x.__enum__ = awe6.interfaces.EScene; $x.toString = $estr; return $x; }
IntHash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	for( x in this.h ) a.push(x);
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
awe6.interfaces.ITextStyle = function() { }
awe6.interfaces.ITextStyle.__name__ = ["awe6","interfaces","ITextStyle"];
awe6.interfaces.ITextStyle.prototype.font = null;
awe6.interfaces.ITextStyle.prototype.size = null;
awe6.interfaces.ITextStyle.prototype.color = null;
awe6.interfaces.ITextStyle.prototype.align = null;
awe6.interfaces.ITextStyle.prototype.spacingHorizontal = null;
awe6.interfaces.ITextStyle.prototype.spacingVertical = null;
awe6.interfaces.ITextStyle.prototype.isBold = null;
awe6.interfaces.ITextStyle.prototype.isItalic = null;
awe6.interfaces.ITextStyle.prototype.thickness = null;
awe6.interfaces.ITextStyle.prototype.filters = null;
awe6.interfaces.ITextStyle.prototype.toString = null;
awe6.interfaces.ITextStyle.prototype.clone = null;
awe6.interfaces.ITextStyle.prototype.__class__ = awe6.interfaces.ITextStyle;
if(!awe6.core) awe6.core = {}
awe6.core.TextStyle = function(font,size,color,isBold,isItalic,align,spacingHorizontal,spacingVertical,thickness,filters) {
	if( font === $_ ) return;
	if(thickness == null) thickness = 0;
	if(isItalic == null) isItalic = false;
	if(isBold == null) isBold = false;
	this.font = font != null?font:"_sans";
	this.size = size != null?size:12;
	this.color = color != null?color:0;
	this.isBold = isBold;
	this.isItalic = isItalic;
	this.align = align != null?align:awe6.interfaces.ETextAlign.LEFT;
	this.spacingHorizontal = spacingHorizontal != null?spacingHorizontal:0;
	this.spacingVertical = spacingVertical != null?spacingVertical:0;
	this.thickness = thickness;
	this.filters = filters;
}
awe6.core.TextStyle.__name__ = ["awe6","core","TextStyle"];
awe6.core.TextStyle.prototype.font = null;
awe6.core.TextStyle.prototype.size = null;
awe6.core.TextStyle.prototype.color = null;
awe6.core.TextStyle.prototype.align = null;
awe6.core.TextStyle.prototype.spacingHorizontal = null;
awe6.core.TextStyle.prototype.spacingVertical = null;
awe6.core.TextStyle.prototype.isBold = null;
awe6.core.TextStyle.prototype.isItalic = null;
awe6.core.TextStyle.prototype.thickness = null;
awe6.core.TextStyle.prototype.filters = null;
awe6.core.TextStyle.prototype.toString = function() {
	return Std.string(this.font + "," + this.size + "," + this.color + "," + this.isBold + "," + this.isItalic + "," + this.align + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + this.filters);
}
awe6.core.TextStyle.prototype.clone = function() {
	return new awe6.core.TextStyle(this.font,this.size,this.color,this.isBold,this.isItalic,this.align,this.spacingHorizontal,this.spacingVertical,this.thickness,this.filters);
}
awe6.core.TextStyle.prototype.__class__ = awe6.core.TextStyle;
awe6.core.TextStyle.__interfaces__ = [awe6.interfaces.ITextStyle];
awe6.interfaces.IInputManager = function() { }
awe6.interfaces.IInputManager.__name__ = ["awe6","interfaces","IInputManager"];
awe6.interfaces.IInputManager.prototype.joypad = null;
awe6.interfaces.IInputManager.prototype.keyboard = null;
awe6.interfaces.IInputManager.prototype.mouse = null;
awe6.interfaces.IInputManager.prototype.createJoypad = null;
awe6.interfaces.IInputManager.prototype.reset = null;
awe6.interfaces.IInputManager.prototype.__class__ = awe6.interfaces.IInputManager;
awe6.interfaces.ISession = function() { }
awe6.interfaces.ISession.__name__ = ["awe6","interfaces","ISession"];
awe6.interfaces.ISession.prototype.id = null;
awe6.interfaces.ISession.prototype.isTester = null;
awe6.interfaces.ISession.prototype.clone = null;
awe6.interfaces.ISession.prototype.reset = null;
awe6.interfaces.ISession.prototype.save = null;
awe6.interfaces.ISession.prototype["delete"] = null;
awe6.interfaces.ISession.prototype.getPercentageComplete = null;
awe6.interfaces.ISession.prototype.getSessionIds = null;
awe6.interfaces.ISession.prototype.getSessions = null;
awe6.interfaces.ISession.prototype.deleteAllSessions = null;
awe6.interfaces.ISession.prototype.__class__ = awe6.interfaces.ISession;
if(!awe6.core.drivers) awe6.core.drivers = {}
awe6.core.drivers.ASession = function(kernel,id) {
	if( kernel === $_ ) return;
	if(id == null) id = "";
	this._kernel = kernel;
	if(id == "") id = "DEBUG_AWE6";
	this.id = id;
	this._tools = this._kernel.tools;
	this._version = 1;
	this._init();
}
awe6.core.drivers.ASession.__name__ = ["awe6","core","drivers","ASession"];
awe6.core.drivers.ASession.prototype._kernel = null;
awe6.core.drivers.ASession.prototype._tools = null;
awe6.core.drivers.ASession.prototype._data = null;
awe6.core.drivers.ASession.prototype._savedData = null;
awe6.core.drivers.ASession.prototype._version = null;
awe6.core.drivers.ASession.prototype.id = null;
awe6.core.drivers.ASession.prototype.isTester = null;
awe6.core.drivers.ASession.prototype.loadCount = null;
awe6.core.drivers.ASession.prototype.saveCount = null;
awe6.core.drivers.ASession.prototype._init = function() {
	this._nativeLoad();
	var l_version = Reflect.field(this._savedData,"_____VERSION");
	if(l_version != this._version) this._nativeReset();
	var l_isExistingSession = Reflect.field(this._savedData,this.id) != null;
	{
		this._data = { };
		this._resetter();
		this._setter();
	}
	if(l_isExistingSession) {
		this._data = Reflect.field(this._savedData,this.id);
		this._getter();
		this.loadCount++;
	}
}
awe6.core.drivers.ASession.prototype._nativeLoad = function() {
	this._savedData = { };
}
awe6.core.drivers.ASession.prototype._nativeSave = function() {
}
awe6.core.drivers.ASession.prototype._nativeReset = function() {
	this._savedData = { };
}
awe6.core.drivers.ASession.prototype._getter = function() {
	this.loadCount = this._data.loadCount;
	this.saveCount = this._data.saveCount;
}
awe6.core.drivers.ASession.prototype._setter = function() {
	this._data.loadCount = this.loadCount;
	this._data.saveCount = this.saveCount;
}
awe6.core.drivers.ASession.prototype._resetter = function() {
	this.loadCount = 0;
	this.saveCount = 0;
}
awe6.core.drivers.ASession.prototype.clone = function(newId) {
	this._setter();
	Reflect.setField(this._savedData,newId,this._data);
	return Type.createInstance(Type.getClass(this),[this._kernel,newId]);
}
awe6.core.drivers.ASession.prototype.reset = function(isSaved) {
	if(isSaved == null) isSaved = false;
	this._data = { };
	this._resetter();
	this._setter();
	if(isSaved) {
		this.saveCount++;
		this._setter();
		Reflect.setField(this._savedData,"_____VERSION",this._version);
		Reflect.setField(this._savedData,this.id,this._data);
		this._nativeSave();
	}
}
awe6.core.drivers.ASession.prototype["delete"] = function() {
	Reflect.deleteField(this._savedData,this.id);
}
awe6.core.drivers.ASession.prototype.save = function() {
	this.saveCount++;
	this._setter();
	Reflect.setField(this._savedData,"_____VERSION",this._version);
	Reflect.setField(this._savedData,this.id,this._data);
	this._nativeSave();
}
awe6.core.drivers.ASession.prototype.getPercentageComplete = function() {
	return 0;
}
awe6.core.drivers.ASession.prototype.getSessionIds = function(suggestions) {
	var l_result = Reflect.fields(this._savedData);
	l_result.remove("_____VERSION");
	l_result.remove("DEBUG_AWE6");
	if(suggestions != null) {
		var l_desiredLength = suggestions.length;
		var _g = 0;
		while(_g < l_result.length) {
			var i = l_result[_g];
			++_g;
			suggestions.remove(i);
		}
		while(l_result.length < l_desiredLength) l_result.push(suggestions.shift());
	}
	l_result.sort($closure(this._tools,"sortByString"));
	return l_result;
}
awe6.core.drivers.ASession.prototype.getSessions = function(suggestions) {
	var l_ids = this.getSessionIds(suggestions);
	var l_result = new Array();
	var _g = 0;
	while(_g < l_ids.length) {
		var i = l_ids[_g];
		++_g;
		l_result.push(Type.createInstance(Type.getClass(this),[this._kernel,i]));
	}
	return l_result;
}
awe6.core.drivers.ASession.prototype.deleteAllSessions = function() {
	this._nativeReset();
}
awe6.core.drivers.ASession.prototype.__get_isTester = function() {
	return this._kernel.isDebug || this.id == "DEBUG_AWE6";
}
awe6.core.drivers.ASession.prototype.__class__ = awe6.core.drivers.ASession;
awe6.core.drivers.ASession.__interfaces__ = [awe6.interfaces.ISession];
awe6.interfaces.IPauseable = function() { }
awe6.interfaces.IPauseable.__name__ = ["awe6","interfaces","IPauseable"];
awe6.interfaces.IPauseable.prototype.isActive = null;
awe6.interfaces.IPauseable.prototype.pause = null;
awe6.interfaces.IPauseable.prototype.resume = null;
awe6.interfaces.IPauseable.prototype.__class__ = awe6.interfaces.IPauseable;
awe6.interfaces.IDisposable = function() { }
awe6.interfaces.IDisposable.__name__ = ["awe6","interfaces","IDisposable"];
awe6.interfaces.IDisposable.prototype.isDisposed = null;
awe6.interfaces.IDisposable.prototype.dispose = null;
awe6.interfaces.IDisposable.prototype.__class__ = awe6.interfaces.IDisposable;
awe6.interfaces.IUpdateable = function() { }
awe6.interfaces.IUpdateable.__name__ = ["awe6","interfaces","IUpdateable"];
awe6.interfaces.IUpdateable.prototype.update = null;
awe6.interfaces.IUpdateable.prototype.__class__ = awe6.interfaces.IUpdateable;
awe6.interfaces.IProcess = function() { }
awe6.interfaces.IProcess.__name__ = ["awe6","interfaces","IProcess"];
awe6.interfaces.IProcess.prototype.__class__ = awe6.interfaces.IProcess;
awe6.interfaces.IProcess.__interfaces__ = [awe6.interfaces.IPauseable,awe6.interfaces.IDisposable,awe6.interfaces.IUpdateable];
awe6.core.Process = function(kernel) {
	if( kernel === $_ ) return;
	this._kernel = kernel;
	this._tools = this._kernel.tools;
	this._init();
	this._isEntity = Std["is"](this,awe6.interfaces.IEntity);
}
awe6.core.Process.__name__ = ["awe6","core","Process"];
awe6.core.Process.prototype.isActive = null;
awe6.core.Process.prototype.isDisposed = null;
awe6.core.Process.prototype._kernel = null;
awe6.core.Process.prototype._tools = null;
awe6.core.Process.prototype._age = null;
awe6.core.Process.prototype._updates = null;
awe6.core.Process.prototype._isEntity = null;
awe6.core.Process.prototype._init = function() {
	Reflect.setField(this,"isActive",true);
	this.isDisposed = false;
	this._age = 0;
	this._updates = 0;
}
awe6.core.Process.prototype.dispose = function() {
	if(this.isDisposed) return; else {
		this.isDisposed = true;
		this.__set_isActive(false);
		if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this);
		this._disposer();
		return;
	}
}
awe6.core.Process.prototype._disposer = function() {
}
awe6.core.Process.prototype.update = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	if(!this.isActive) return; else {
		this._age += deltaTime;
		this._updates++;
		this._updater(deltaTime);
		return;
	}
}
awe6.core.Process.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
}
awe6.core.Process.prototype.reset = function() {
	if(this.isDisposed) null; else {
		this.isDisposed = true;
		this.__set_isActive(false);
		if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this);
		this._disposer();
		null;
	}
	this._init();
}
awe6.core.Process.prototype.__set_isActive = function(value) {
	if(value == this.isActive) return this.isActive;
	if(value) {
		if(this.isActive) null; else {
			Reflect.setField(this,"isActive",true);
			this._resumer();
			if(this._isEntity && !this.isDisposed) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.RESUME,this,true);
			null;
		}
	} else if(!this.isActive) null; else {
		Reflect.setField(this,"isActive",false);
		this._pauser();
		if(this._isEntity && !this.isDisposed) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.PAUSE,this,true);
		null;
	}
	return this.isActive;
}
awe6.core.Process.prototype.pause = function() {
	if(!this.isActive) return; else {
		Reflect.setField(this,"isActive",false);
		this._pauser();
		if(this._isEntity && !this.isDisposed) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.PAUSE,this,true);
		return;
	}
}
awe6.core.Process.prototype._pauser = function() {
}
awe6.core.Process.prototype.resume = function() {
	if(this.isActive) return; else {
		Reflect.setField(this,"isActive",true);
		this._resumer();
		if(this._isEntity && !this.isDisposed) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.RESUME,this,true);
		return;
	}
}
awe6.core.Process.prototype._resumer = function() {
}
awe6.core.Process.prototype.__class__ = awe6.core.Process;
awe6.core.Process.__interfaces__ = [awe6.interfaces.IProcess];
awe6.interfaces.IAgendaManager = function() { }
awe6.interfaces.IAgendaManager.__name__ = ["awe6","interfaces","IAgendaManager"];
awe6.interfaces.IAgendaManager.prototype.agenda = null;
awe6.interfaces.IAgendaManager.prototype.setAgenda = null;
awe6.interfaces.IAgendaManager.prototype.__class__ = awe6.interfaces.IAgendaManager;
awe6.interfaces.IEntityCollection = function() { }
awe6.interfaces.IEntityCollection.__name__ = ["awe6","interfaces","IEntityCollection"];
awe6.interfaces.IEntityCollection.prototype.addEntity = null;
awe6.interfaces.IEntityCollection.prototype.removeEntity = null;
awe6.interfaces.IEntityCollection.prototype.getEntities = null;
awe6.interfaces.IEntityCollection.prototype.getEntitiesByClass = null;
awe6.interfaces.IEntityCollection.prototype.getEntityById = null;
awe6.interfaces.IEntityCollection.prototype.__class__ = awe6.interfaces.IEntityCollection;
awe6.interfaces.IViewable = function() { }
awe6.interfaces.IViewable.__name__ = ["awe6","interfaces","IViewable"];
awe6.interfaces.IViewable.prototype.view = null;
awe6.interfaces.IViewable.prototype.__class__ = awe6.interfaces.IViewable;
awe6.interfaces.IEntity = function() { }
awe6.interfaces.IEntity.__name__ = ["awe6","interfaces","IEntity"];
awe6.interfaces.IEntity.prototype.id = null;
awe6.interfaces.IEntity.prototype.parent = null;
awe6.interfaces.IEntity.prototype.remove = null;
awe6.interfaces.IEntity.prototype.__class__ = awe6.interfaces.IEntity;
awe6.interfaces.IEntity.__interfaces__ = [awe6.interfaces.IAgendaManager,awe6.interfaces.IEntityCollection,awe6.interfaces.IViewable,awe6.interfaces.IProcess];
awe6.core.Entity = function(kernel,id,context) {
	if( kernel === $_ ) return;
	this.view = new awe6.core.drivers.js.View(kernel,context,0,this);
	this.__set_id(id == null?kernel.tools.createGuid():id);
	awe6.core.Process.call(this,kernel);
}
awe6.core.Entity.__name__ = ["awe6","core","Entity"];
awe6.core.Entity.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.Entity.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.Entity.prototype.id = null;
awe6.core.Entity.prototype.agenda = null;
awe6.core.Entity.prototype.parent = null;
awe6.core.Entity.prototype.view = null;
awe6.core.Entity.prototype._entityAgendaPairs = null;
awe6.core.Entity.prototype._isAgendaDirty = null;
awe6.core.Entity.prototype._cachedEntities = null;
awe6.core.Entity.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.agenda = awe6.interfaces.EAgenda.ALWAYS;
	this._entityAgendaPairs = new haxe.FastList();
	this._isAgendaDirty = true;
	this._cachedEntities = [];
}
awe6.core.Entity.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	if(this._isAgendaDirty) {
		this._cachedEntities = this._getEntities(this.__get_agenda());
		if(!Type.enumEq(this.__get_agenda(),awe6.interfaces.EAgenda.ALWAYS)) this._cachedEntities = this._cachedEntities.concat(this._getEntities(awe6.interfaces.EAgenda.ALWAYS));
		this._isAgendaDirty = false;
	}
	var _g = 0, _g1 = this._cachedEntities;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		i.update(deltaTime);
	}
}
awe6.core.Entity.prototype._disposer = function() {
	this.remove();
	this._kernel.messenger.removeSubscribers(this);
	this._kernel.messenger.removeSubscribers(null,null,null,this);
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
	this.__get_view().dispose();
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.Entity.prototype.addEntity = function(entity,agenda,isAddedToView,viewPriority) {
	if(isAddedToView == null) isAddedToView = false;
	if(this.isDisposed) return;
	if(entity == null) return;
	if(agenda == null) agenda = awe6.interfaces.EAgenda.ALWAYS;
	var $it0 = this._entityAgendaPairs.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		if(i.entity == entity && Type.enumEq(i.agenda,agenda)) return;
	}
	this._isAgendaDirty = true;
	var l_child = entity;
	var l_helperEntityAgendaPair = new awe6.core._Entity._HelperEntityAgendaPair(entity,agenda);
	if(l_child.__get_parent() != this) {
		l_child.remove(isAddedToView);
		l_child._setParent(this);
	}
	this._entityAgendaPairs.add(l_helperEntityAgendaPair);
	if(isAddedToView) {
		if(Type.enumEq(agenda,this.__get_agenda())) this.__get_view().addChild(entity.__get_view(),viewPriority); else l_helperEntityAgendaPair.isAddedToView = true;
	}
}
awe6.core.Entity.prototype.removeEntity = function(entity,agenda,isRemovedFromView) {
	if(isRemovedFromView == null) isRemovedFromView = false;
	if(this.isDisposed) return;
	var l_child = entity;
	var l_isRemoved = false;
	var $it0 = this._entityAgendaPairs.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		if(i.entity == entity && (agenda == null || Type.enumEq(i.agenda,agenda))) {
			this._entityAgendaPairs.remove(i);
			l_isRemoved = true;
		}
	}
	if(l_isRemoved) {
		this._isAgendaDirty = true;
		l_child._setParent(null);
		if(isRemovedFromView) entity.__get_view().remove();
	}
}
awe6.core.Entity.prototype.remove = function(isRemovedFromView) {
	if(isRemovedFromView == null) isRemovedFromView = false;
	if(this.__get_parent() != null) this.__get_parent().removeEntity(this,null,isRemovedFromView);
}
awe6.core.Entity.prototype.getEntities = function(agenda) {
	return this._getEntities(agenda);
}
awe6.core.Entity.prototype._getEntities = function(agenda) {
	var l_result = new Array();
	var $it0 = this._entityAgendaPairs.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		if(agenda == null || Type.enumEq(agenda,i.agenda)) l_result.push(i.entity);
	}
	l_result.reverse();
	return l_result;
}
awe6.core.Entity.prototype.getEntitiesByClass = function(classType,agenda,isBubbleDown,isBubbleUp,isBubbleEverywhere) {
	if(isBubbleEverywhere == null) isBubbleEverywhere = false;
	if(isBubbleUp == null) isBubbleUp = false;
	if(isBubbleDown == null) isBubbleDown = false;
	if(isBubbleEverywhere && this._kernel.scenes.__get_scene() != null) return this._kernel.scenes.__get_scene().getEntitiesByClass(classType,agenda,true);
	var l_result = new Array();
	var l_entities = this._getEntities(agenda);
	var _g = 0;
	while(_g < l_entities.length) {
		var i = l_entities[_g];
		++_g;
		if(Std["is"](i,classType)) l_result.push(i);
		if(isBubbleDown) l_result.concat(i.getEntitiesByClass(classType,agenda,true));
	}
	if(isBubbleUp && this.__get_parent() != null) l_result.concat(this.__get_parent().getEntitiesByClass(classType,agenda,false,true));
	return l_result;
}
awe6.core.Entity.prototype.getEntityById = function(id,agenda,isBubbleDown,isBubbleUp,isBubbleEverywhere) {
	if(isBubbleEverywhere == null) isBubbleEverywhere = false;
	if(isBubbleUp == null) isBubbleUp = false;
	if(isBubbleDown == null) isBubbleDown = false;
	if(this.id == id) return this;
	if(isBubbleEverywhere && this._kernel.scenes.__get_scene() != null) return this._kernel.scenes.__get_scene().getEntityById(id,agenda,true);
	var l_result = null;
	var l_entities = this._getEntities(agenda);
	var _g = 0;
	while(_g < l_entities.length) {
		var i = l_entities[_g];
		++_g;
		if(i.id == id) return i;
		if(isBubbleDown) l_result = i.getEntityById(id,agenda,true);
		if(l_result != null) return l_result;
	}
	if(isBubbleUp && this.__get_parent() != null) l_result = this.__get_parent().getEntityById(id,agenda,false,true);
	return l_result;
}
awe6.core.Entity.prototype.setAgenda = function(type) {
	if(type == null) type = awe6.interfaces.EAgenda.ALWAYS;
	if(Type.enumEq(this.__get_agenda(),type)) return false;
	this._isAgendaDirty = true;
	var $it0 = this._entityAgendaPairs.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		var l_isAddedToView = Type.enumEq(this.__get_agenda(),i.agenda) && i.entity.__get_view().__get_parent() == this.__get_view();
		if(l_isAddedToView) i.entity.__get_view().remove();
		i.isAddedToView = i.isAddedToView || l_isAddedToView;
	}
	this.agenda = type;
	var $it1 = this._entityAgendaPairs.iterator();
	while( $it1.hasNext() ) {
		var i = $it1.next();
		if(i.isAddedToView && (Type.enumEq(awe6.interfaces.EAgenda.ALWAYS,i.agenda) || Type.enumEq(this.__get_agenda(),i.agenda))) this.__get_view().addChild(i.entity.__get_view());
	}
	return true;
}
awe6.core.Entity.prototype._setParent = function(parent) {
	this.parent = parent;
}
awe6.core.Entity.prototype.__set_id = function(value) {
	this.id = value;
	return this.id;
}
awe6.core.Entity.prototype.__get_agenda = function() {
	return this.agenda;
}
awe6.core.Entity.prototype.__get_parent = function() {
	return this.parent;
}
awe6.core.Entity.prototype.__get_view = function() {
	return this.view;
}
awe6.core.Entity.prototype.__class__ = awe6.core.Entity;
awe6.core.Entity.__interfaces__ = [awe6.interfaces.IEntity];
awe6.interfaces.IOverlay = function() { }
awe6.interfaces.IOverlay.__name__ = ["awe6","interfaces","IOverlay"];
awe6.interfaces.IOverlay.prototype.pauseEntity = null;
awe6.interfaces.IOverlay.prototype.showButton = null;
awe6.interfaces.IOverlay.prototype.positionButton = null;
awe6.interfaces.IOverlay.prototype.activateButton = null;
awe6.interfaces.IOverlay.prototype.showProgress = null;
awe6.interfaces.IOverlay.prototype.hideButtons = null;
awe6.interfaces.IOverlay.prototype.flash = null;
awe6.interfaces.IOverlay.prototype.__class__ = awe6.interfaces.IOverlay;
awe6.interfaces.IOverlayProcess = function() { }
awe6.interfaces.IOverlayProcess.__name__ = ["awe6","interfaces","IOverlayProcess"];
awe6.interfaces.IOverlayProcess.prototype.__class__ = awe6.interfaces.IOverlayProcess;
awe6.interfaces.IOverlayProcess.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IProcess,awe6.interfaces.IOverlay];
awe6.core.drivers.AOverlay = function(kernel,border,backUp,backOver,muteUp,muteOver,unmuteUp,unmuteOver,pauseUp,pauseOver,unpauseUp,unpauseOver,pauseBlur,pauseColor,pauseAlpha) {
	if( kernel === $_ ) return;
	if(pauseAlpha == null) pauseAlpha = .35;
	if(pauseColor == null) pauseColor = 0;
	if(pauseBlur == null) pauseBlur = 8;
	this._borderView = border;
	this._buttonBack = new awe6.core.BasicButton(kernel,backUp,backOver,30,30);
	this._buttonMute = new awe6.core.BasicButton(kernel,muteUp,muteOver,30,30);
	this._buttonUnmute = new awe6.core.BasicButton(kernel,unmuteUp,unmuteOver,30,30);
	this._buttonPause = new awe6.core.BasicButton(kernel,pauseUp,pauseOver,30,30);
	this._buttonUnpause = new awe6.core.BasicButton(kernel,unpauseUp,unpauseOver,30,30);
	this._pauseBlur = pauseBlur;
	this._pauseColor = pauseColor;
	this._pauseAlpha = pauseAlpha;
	this._context = new jeash.display.Sprite();
	awe6.core.Entity.call(this,kernel,null,this._context);
}
awe6.core.drivers.AOverlay.__name__ = ["awe6","core","drivers","AOverlay"];
awe6.core.drivers.AOverlay.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) awe6.core.drivers.AOverlay.prototype[k] = awe6.core.Entity.prototype[k];
awe6.core.drivers.AOverlay.prototype.pauseEntity = null;
awe6.core.drivers.AOverlay.prototype._borderView = null;
awe6.core.drivers.AOverlay.prototype._progressContext = null;
awe6.core.drivers.AOverlay.prototype._progressView = null;
awe6.core.drivers.AOverlay.prototype._pauseContext = null;
awe6.core.drivers.AOverlay.prototype._pauseView = null;
awe6.core.drivers.AOverlay.prototype._flashContext = null;
awe6.core.drivers.AOverlay.prototype._flashView = null;
awe6.core.drivers.AOverlay.prototype._context = null;
awe6.core.drivers.AOverlay.prototype._pauseColor = null;
awe6.core.drivers.AOverlay.prototype._pauseAlpha = null;
awe6.core.drivers.AOverlay.prototype._pauseBlur = null;
awe6.core.drivers.AOverlay.prototype._flashDuration = null;
awe6.core.drivers.AOverlay.prototype._flashAlpha = null;
awe6.core.drivers.AOverlay.prototype._flashStartingAlpha = null;
awe6.core.drivers.AOverlay.prototype._flashStartingDuration = null;
awe6.core.drivers.AOverlay.prototype._flashAsTime = null;
awe6.core.drivers.AOverlay.prototype._wasMute = null;
awe6.core.drivers.AOverlay.prototype._buttonBack = null;
awe6.core.drivers.AOverlay.prototype._buttonMute = null;
awe6.core.drivers.AOverlay.prototype._buttonUnmute = null;
awe6.core.drivers.AOverlay.prototype._buttonPause = null;
awe6.core.drivers.AOverlay.prototype._buttonUnpause = null;
awe6.core.drivers.AOverlay.prototype._init = function() {
	awe6.core.Entity.prototype._init.call(this);
	this.__get_view().addChild(this._borderView,4);
	this._wasMute = this._kernel.audio.isMute;
	this._nativeInit();
	this._progressView = new awe6.core.drivers.js.View(this._kernel,this._progressContext);
	this._progressView.__set_isVisible(false);
	this._pauseView = new awe6.core.drivers.js.View(this._kernel,this._pauseContext);
	this._pauseView.__set_isVisible(false);
	this._flashView = new awe6.core.drivers.js.View(this._kernel,this._flashContext);
	this._flashView.__set_isVisible(false);
	this._flashStartingAlpha = 1;
	this._flashAsTime = true;
	this._flashDuration = this._flashStartingDuration = 100;
	this._buttonBack.onClickCallback = (function(f,a1) {
		return function() {
			return f(a1);
		};
	})($closure(this,"activateButton"),awe6.interfaces.EOverlayButton.BACK);
	this._buttonMute.onClickCallback = (function(f,a1) {
		return function() {
			return f(a1);
		};
	})($closure(this,"activateButton"),awe6.interfaces.EOverlayButton.MUTE);
	this._buttonPause.onClickCallback = (function(f,a1) {
		return function() {
			return f(a1);
		};
	})($closure(this,"activateButton"),awe6.interfaces.EOverlayButton.PAUSE);
	this._buttonUnmute.onClickCallback = (function(f,a1) {
		return function() {
			return f(a1);
		};
	})($closure(this,"activateButton"),awe6.interfaces.EOverlayButton.UNMUTE);
	this._buttonUnpause.onClickCallback = (function(f,a1) {
		return function() {
			return f(a1);
		};
	})($closure(this,"activateButton"),awe6.interfaces.EOverlayButton.UNPAUSE);
	this.__get_view().addChild(this._flashView,1);
	this.__get_view().addChild(this._pauseView,2);
	this.__get_view().addChild(this._progressView,3);
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
awe6.core.drivers.AOverlay.prototype._nativeInit = function() {
	this._progressContext = new jeash.display.Sprite();
	this._pauseContext = new jeash.display.Sprite();
	this._flashContext = new jeash.display.Sprite();
}
awe6.core.drivers.AOverlay.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Entity.prototype._updater.call(this,deltaTime);
	if(this._flashDuration > 0) {
		this._flashDuration -= this._flashAsTime?deltaTime:1;
		this._flashAlpha = this._tools.limit(this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration),0,1);
	}
	this._flashView.__set_isVisible(this._flashAlpha > 0);
	if(this._kernel.factory.keyBack != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack)) this.activateButton(this._kernel.isActive?awe6.interfaces.EOverlayButton.BACK:awe6.interfaces.EOverlayButton.UNPAUSE);
	if(this._kernel.factory.keyPause != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause)) this.activateButton(this._kernel.isActive?awe6.interfaces.EOverlayButton.PAUSE:awe6.interfaces.EOverlayButton.UNPAUSE);
	if(this._kernel.factory.keyMute != null && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute)) this.activateButton(this._kernel.audio.isMute?awe6.interfaces.EOverlayButton.UNMUTE:awe6.interfaces.EOverlayButton.MUTE);
	if(this.__get_pauseEntity() != null && !this._kernel.isActive) {
		this.__get_pauseEntity().update(deltaTime);
		this._pauseView.update(deltaTime);
	}
}
awe6.core.drivers.AOverlay.prototype._disposer = function() {
	if(this.__get_pauseEntity() != null) this.__get_pauseEntity().dispose();
	this.__get_view().dispose();
	awe6.core.Entity.prototype._disposer.call(this);
}
awe6.core.drivers.AOverlay.prototype._getButton = function(type) {
	return (function($this) {
		var $r;
		var $e = (type);
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
			var value = $e[2];
			$r = null;
			break;
		}
		return $r;
	}(this));
}
awe6.core.drivers.AOverlay.prototype.showButton = function(type,isVisible) {
	if(isVisible == null) isVisible = true;
	var l_button = this._getButton(type);
	if(isVisible) this.addEntity(l_button,null,true); else this.removeEntity(l_button,null,true);
}
awe6.core.drivers.AOverlay.prototype.positionButton = function(type,x,y) {
	var l_button = this._getButton(type);
	l_button.__set_x(x);
	l_button.__set_y(y);
}
awe6.core.drivers.AOverlay.prototype.showProgress = function(progress,message) {
	this._progressView.__set_isVisible(progress < 1);
}
awe6.core.drivers.AOverlay.prototype.hideButtons = function() {
	this.showButton(awe6.interfaces.EOverlayButton.BACK,false);
	this.showButton(awe6.interfaces.EOverlayButton.MUTE,false);
	this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,false);
	this.showButton(awe6.interfaces.EOverlayButton.PAUSE,false);
	this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,false);
}
awe6.core.drivers.AOverlay.prototype.flash = function(duration,asTime,startingAlpha,color) {
	if(color == null) color = 16777215;
	if(startingAlpha == null) startingAlpha = 1;
	if(asTime == null) asTime = true;
	duration = duration != null?duration:asTime?500:this._kernel.factory.targetFramerate * .5;
	this._flashDuration = this._flashStartingDuration = duration;
	this._flashAsTime = asTime;
	this._flashAlpha = this._flashStartingAlpha = startingAlpha > 1?1:startingAlpha < 0?0:startingAlpha;
}
awe6.core.drivers.AOverlay.prototype.activateButton = function(type) {
	var $e = (type);
	switch( $e[1] ) {
	case 0:
		if(this._buttonBack.__get_view().__get_isInViewStack()) {
			if(!this._kernel.isActive) this.activateButton(awe6.interfaces.EOverlayButton.UNPAUSE);
			this._drawPause(false);
			this._kernel.resume();
			this._kernel.scenes.back();
		}
		break;
	case 1:
		if(this._buttonMute.__get_view().__get_isInViewStack()) {
			this.showButton(awe6.interfaces.EOverlayButton.MUTE,false);
			this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,true);
			this._kernel.audio.__set_isMute(true);
		}
		break;
	case 2:
		if(this._buttonUnmute.__get_view().__get_isInViewStack() && !this._buttonUnpause.__get_view().__get_isInViewStack()) {
			this.showButton(awe6.interfaces.EOverlayButton.MUTE,true);
			this.showButton(awe6.interfaces.EOverlayButton.UNMUTE,false);
			this._kernel.audio.__set_isMute(false);
		}
		break;
	case 3:
		if(this._buttonPause.__get_view().__get_isInViewStack()) {
			this._wasMute = this._kernel.audio.isMute;
			this.showButton(awe6.interfaces.EOverlayButton.PAUSE,false);
			this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,true);
			this._kernel.pause();
			this._drawPause(true);
			this.activateButton(awe6.interfaces.EOverlayButton.MUTE);
		}
		break;
	case 4:
		if(this._buttonUnpause.__get_view().__get_isInViewStack()) {
			this.showButton(awe6.interfaces.EOverlayButton.PAUSE,true);
			this.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,false);
			this._kernel.resume();
			this._drawPause(false);
			this.activateButton(this._wasMute?awe6.interfaces.EOverlayButton.MUTE:awe6.interfaces.EOverlayButton.UNMUTE);
		}
		break;
	case 5:
		var value = $e[2];
		break;
	}
}
awe6.core.drivers.AOverlay.prototype._drawPause = function(isVisible) {
	if(isVisible == null) isVisible = true;
	this._pauseView.__set_isVisible(isVisible);
}
awe6.core.drivers.AOverlay.prototype.__get_pauseEntity = function() {
	return this.pauseEntity;
}
awe6.core.drivers.AOverlay.prototype.__set_pauseEntity = function(value) {
	if(this.__get_pauseEntity() != null) this.__get_pauseEntity().__get_view().remove();
	this.pauseEntity = value;
	this._pauseView.addChild(this.__get_pauseEntity().__get_view());
	return this.__get_pauseEntity();
}
awe6.core.drivers.AOverlay.prototype.__class__ = awe6.core.drivers.AOverlay;
awe6.core.drivers.AOverlay.__interfaces__ = [awe6.interfaces.IOverlayProcess];
if(!awe6.core.drivers.js) awe6.core.drivers.js = {}
awe6.core.drivers.js.Overlay = function(kernel,border,backUp,backOver,muteUp,muteOver,unmuteUp,unmuteOver,pauseUp,pauseOver,unpauseUp,unpauseOver,pauseBlur,pauseColor,pauseAlpha) {
	if( kernel === $_ ) return;
	if(pauseAlpha == null) pauseAlpha = .35;
	if(pauseColor == null) pauseColor = 0;
	if(pauseBlur == null) pauseBlur = 8;
	awe6.core.drivers.AOverlay.call(this,kernel,border,backUp,backOver,muteUp,muteOver,unmuteUp,unmuteOver,pauseUp,pauseOver,unpauseUp,unpauseOver,pauseBlur,pauseColor,pauseAlpha);
}
awe6.core.drivers.js.Overlay.__name__ = ["awe6","core","drivers","js","Overlay"];
awe6.core.drivers.js.Overlay.__super__ = awe6.core.drivers.AOverlay;
for(var k in awe6.core.drivers.AOverlay.prototype ) awe6.core.drivers.js.Overlay.prototype[k] = awe6.core.drivers.AOverlay.prototype[k];
awe6.core.drivers.js.Overlay.prototype._nativeInit = function() {
	this._context.mouseEnabled = false;
	this._pauseContext = new jeash.display.Sprite();
	this._pauseContext.mouseEnabled = false;
	this._pauseContext.jeashGetGraphics().beginFill(this._pauseColor,this._pauseAlpha);
	this._pauseContext.jeashGetGraphics().drawRect(0,0,this._kernel.factory.width,this._kernel.factory.height);
	this._flashContext = new jeash.display.Sprite();
	this._flashContext.mouseEnabled = false;
}
awe6.core.drivers.js.Overlay.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.drivers.AOverlay.prototype._updater.call(this,deltaTime);
	this._flashContext.alpha = this._flashAlpha;
}
awe6.core.drivers.js.Overlay.prototype.flash = function(duration,asTime,startingAlpha,color) {
	if(color == null) color = 16777215;
	if(startingAlpha == null) startingAlpha = 1;
	if(asTime == null) asTime = true;
	this._flashContext.jeashGetGraphics().clear();
	this._flashContext.jeashGetGraphics().beginFill(color);
	this._flashContext.jeashGetGraphics().drawRect(0,0,this._kernel.factory.width,this._kernel.factory.height);
	duration = duration != null?duration:asTime?500:this._kernel.factory.targetFramerate * .5;
	this._flashDuration = this._flashStartingDuration = duration;
	this._flashAsTime = asTime;
	this._flashAlpha = this._flashStartingAlpha = startingAlpha > 1?1:startingAlpha < 0?0:startingAlpha;
}
awe6.core.drivers.js.Overlay.prototype.__class__ = awe6.core.drivers.js.Overlay;
if(!awe6.extras) awe6.extras = {}
if(!awe6.extras.gui) awe6.extras.gui = {}
awe6.extras.gui.GuiEntity = function(kernel,width,height,isMasked) {
	if( kernel === $_ ) return;
	if(isMasked == null) isMasked = true;
	if(height == null) height = 100;
	if(width == null) width = 100;
	Reflect.setField(this,"isFlippedX",false);
	Reflect.setField(this,"isFlippedY",false);
	this.width = width;
	this.height = height;
	this._sprite = new jeash.display.Sprite();
	if(isMasked) {
		var l_mask = new jeash.display.Sprite();
		l_mask.jeashGetGraphics().beginFill(16711680);
		l_mask.jeashGetGraphics().drawRect(0,0,width,height);
		this._sprite.addChild(l_mask);
		this._sprite.SetMask(l_mask);
	}
	awe6.core.Entity.call(this,kernel,null,this._sprite);
}
awe6.extras.gui.GuiEntity.__name__ = ["awe6","extras","gui","GuiEntity"];
awe6.extras.gui.GuiEntity.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) awe6.extras.gui.GuiEntity.prototype[k] = awe6.core.Entity.prototype[k];
awe6.extras.gui.GuiEntity.prototype.x = null;
awe6.extras.gui.GuiEntity.prototype.y = null;
awe6.extras.gui.GuiEntity.prototype.width = null;
awe6.extras.gui.GuiEntity.prototype.height = null;
awe6.extras.gui.GuiEntity.prototype.isFlippedX = null;
awe6.extras.gui.GuiEntity.prototype.isFlippedY = null;
awe6.extras.gui.GuiEntity.prototype._sprite = null;
awe6.extras.gui.GuiEntity.prototype.setPosition = function(x,y) {
	this.__set_x(x);
	this.__set_y(y);
}
awe6.extras.gui.GuiEntity.prototype.__set_x = function(value) {
	this.x = value;
	this._sprite.jeashSetX(this.x);
	return this.x;
}
awe6.extras.gui.GuiEntity.prototype.__set_y = function(value) {
	this.y = value;
	this._sprite.jeashSetY(this.y);
	return this.y;
}
awe6.extras.gui.GuiEntity.prototype.__set_isFlippedX = function(value) {
	if(value == this.isFlippedX) return this.isFlippedX;
	this.isFlippedX = value;
	var _g = this._sprite;
	_g.jeashSetScaleX(_g.jeashGetScaleX() * -1);
	if(this.isFlippedX) {
		var _g = this;
		_g.__set_x(_g.x + this.width);
	} else {
		var _g = this;
		_g.__set_x(_g.x - this.width);
	}
	return this.isFlippedX;
}
awe6.extras.gui.GuiEntity.prototype.__set_isFlippedY = function(value) {
	if(value == this.isFlippedY) return this.isFlippedY;
	this.isFlippedY = value;
	var _g = this._sprite;
	_g.jeashSetScaleY(_g.jeashGetScaleY() * -1);
	if(this.isFlippedY) {
		var _g = this;
		_g.__set_y(_g.y + this.height);
	} else {
		var _g = this;
		_g.__set_y(_g.y - this.height);
	}
	return this.isFlippedY;
}
awe6.extras.gui.GuiEntity.prototype.__class__ = awe6.extras.gui.GuiEntity;
awe6.interfaces.IScene = function() { }
awe6.interfaces.IScene.__name__ = ["awe6","interfaces","IScene"];
awe6.interfaces.IScene.prototype.type = null;
awe6.interfaces.IScene.prototype.isDisposable = null;
awe6.interfaces.IScene.prototype.isPauseable = null;
awe6.interfaces.IScene.prototype.isMuteable = null;
awe6.interfaces.IScene.prototype.isSessionSavedOnNext = null;
awe6.interfaces.IScene.prototype.__class__ = awe6.interfaces.IScene;
awe6.interfaces.IScene.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IEntityCollection,awe6.interfaces.IProcess];
awe6.core.Scene = function(kernel,type,isPauseable,isMutable,isSessionSavedOnNext) {
	if( kernel === $_ ) return;
	if(isSessionSavedOnNext == null) isSessionSavedOnNext = false;
	if(isMutable == null) isMutable = true;
	if(isPauseable == null) isPauseable = false;
	this.type = type;
	this.isPauseable = isPauseable;
	this.isMuteable = isMutable;
	this.isSessionSavedOnNext = isSessionSavedOnNext;
	awe6.core.Process.call(this,kernel);
}
awe6.core.Scene.__name__ = ["awe6","core","Scene"];
awe6.core.Scene.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.Scene.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.Scene.prototype.type = null;
awe6.core.Scene.prototype.view = null;
awe6.core.Scene.prototype.isDisposable = null;
awe6.core.Scene.prototype.isPauseable = null;
awe6.core.Scene.prototype.isMuteable = null;
awe6.core.Scene.prototype.isSessionSavedOnNext = null;
awe6.core.Scene.prototype._entity = null;
awe6.core.Scene.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.isDisposable = true;
	this._entity = new awe6.core.Entity(this._kernel);
	this.view = this._entity.__get_view();
}
awe6.core.Scene.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	this._entity.update(deltaTime);
}
awe6.core.Scene.prototype._disposer = function() {
	this._entity.dispose();
	this.__get_view().dispose();
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.Scene.prototype.addEntity = function(entity,agenda,isAddedToView,viewPriority) {
	if(isAddedToView == null) isAddedToView = false;
	return this._entity.addEntity(entity,agenda,isAddedToView,viewPriority);
}
awe6.core.Scene.prototype.removeEntity = function(entity,agenda,isRemovedFromView) {
	if(isRemovedFromView == null) isRemovedFromView = false;
	this._entity.removeEntity(entity,agenda,isRemovedFromView);
}
awe6.core.Scene.prototype.getEntities = function(agenda) {
	return this._entity.getEntities(agenda);
}
awe6.core.Scene.prototype.getEntitiesByClass = function(classType,agenda,isBubbleDown,isBubbleUp,isBubbleEverywhere) {
	if(isBubbleEverywhere == null) isBubbleEverywhere = false;
	if(isBubbleUp == null) isBubbleUp = false;
	if(isBubbleDown == null) isBubbleDown = false;
	return this._entity.getEntitiesByClass(classType,agenda,isBubbleDown,isBubbleUp,false);
}
awe6.core.Scene.prototype.getEntityById = function(id,agenda,isBubbleDown,isBubbleUp,isBubbleEverywhere) {
	if(isBubbleEverywhere == null) isBubbleEverywhere = false;
	if(isBubbleUp == null) isBubbleUp = false;
	if(isBubbleDown == null) isBubbleDown = false;
	return this._entity.getEntityById(id,agenda,isBubbleDown,isBubbleUp,false);
}
awe6.core.Scene.prototype.__get_view = function() {
	return this.view;
}
awe6.core.Scene.prototype.__class__ = awe6.core.Scene;
awe6.core.Scene.__interfaces__ = [awe6.interfaces.IScene];
if(typeof demo=='undefined') demo = {}
if(!demo.scenes) demo.scenes = {}
demo.scenes.AScene = function(kernel,type,isPauseable,isMutable,isSessionSavedOnNext) {
	if( kernel === $_ ) return;
	if(isSessionSavedOnNext == null) isSessionSavedOnNext = false;
	if(isMutable == null) isMutable = true;
	if(isPauseable == null) isPauseable = false;
	this._session = kernel.__get_session();
	this._assetManager = kernel.assets;
	this._title = "?";
	awe6.core.Scene.call(this,kernel,type,isPauseable,isMutable,isSessionSavedOnNext);
}
demo.scenes.AScene.__name__ = ["demo","scenes","AScene"];
demo.scenes.AScene.__super__ = awe6.core.Scene;
for(var k in awe6.core.Scene.prototype ) demo.scenes.AScene.prototype[k] = awe6.core.Scene.prototype[k];
demo.scenes.AScene.prototype._session = null;
demo.scenes.AScene.prototype._assetManager = null;
demo.scenes.AScene.prototype._title = null;
demo.scenes.AScene.prototype._titleText = null;
demo.scenes.AScene.prototype._isMusic = null;
demo.scenes.AScene.prototype._init = function() {
	awe6.core.Scene.prototype._init.call(this);
	this.__get_view().addChild(this._assetManager.background,0);
	var l_sceneType = this._tools.toCamelCase(Std.string(this.type));
	this._title = Std.string(this._kernel.getConfig("gui.scenes." + l_sceneType + ".title"));
	this._titleText = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,this._title,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.HEADLINE));
	this._titleText.__set_y(40);
	this.addEntity(this._titleText,null,true,100);
	this._kernel.audio.start("MusicMenu",awe6.interfaces.EAudioChannel.MUSIC,-1,0,.125,0,true);
}
demo.scenes.AScene.prototype.__class__ = demo.scenes.AScene;
demo.scenes.Intro = function(kernel,type,isPauseable,isMutable,isSessionSavedOnNext) {
	if( kernel === $_ ) return;
	if(isSessionSavedOnNext == null) isSessionSavedOnNext = false;
	if(isMutable == null) isMutable = true;
	if(isPauseable == null) isPauseable = false;
	demo.scenes.AScene.call(this,kernel,type,isPauseable,isMutable,isSessionSavedOnNext);
}
demo.scenes.Intro.__name__ = ["demo","scenes","Intro"];
demo.scenes.Intro.__super__ = demo.scenes.AScene;
for(var k in demo.scenes.AScene.prototype ) demo.scenes.Intro.prototype[k] = demo.scenes.AScene.prototype[k];
demo.scenes.Intro.prototype._init = function() {
	demo.scenes.AScene.prototype._init.call(this);
	this._kernel.__set_session(this._kernel.factory.createSession("Basic"));
	var l_result = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,this._kernel.getConfig("gui.scenes.intro.instructions"),this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD));
	l_result.__set_y(70);
	this.addEntity(l_result,null,true,2);
	var l_button = new demo.gui.Button(this._kernel,this._kernel.factory.keyNext,0,0,$closure(this._kernel.scenes,"next"),null,null,this._kernel.getConfig("gui.buttons.start"));
	l_button.setPosition((this._kernel.factory.width - l_button.width) / 2,(this._kernel.factory.height - l_button.height) / 2);
	this.addEntity(l_button,null,true,1);
}
demo.scenes.Intro.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	demo.scenes.AScene.prototype._updater.call(this,deltaTime);
}
demo.scenes.Intro.prototype.__class__ = demo.scenes.Intro;
if(typeof jeash=='undefined') jeash = {}
if(!jeash.errors) jeash.errors = {}
jeash.errors.Error = function(message,id) {
	if( message === $_ ) return;
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
}
jeash.errors.Error.__name__ = ["jeash","errors","Error"];
jeash.errors.Error.prototype.errorID = null;
jeash.errors.Error.prototype.message = null;
jeash.errors.Error.prototype.name = null;
jeash.errors.Error.prototype.getStackTrace = function() {
	return haxe.Stack.toString(haxe.Stack.exceptionStack());
}
jeash.errors.Error.prototype.toString = function() {
	if(this.message != null) return this.message; else return "Error";
}
jeash.errors.Error.prototype.__class__ = jeash.errors.Error;
awe6.core.drivers.AProfiler = function(kernel) {
	if( kernel === $_ ) return;
	this._context = new jeash.display.Sprite();
	awe6.core.Entity.call(this,kernel,null,this._context);
}
awe6.core.drivers.AProfiler.__name__ = ["awe6","core","drivers","AProfiler"];
awe6.core.drivers.AProfiler.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) awe6.core.drivers.AProfiler.prototype[k] = awe6.core.Entity.prototype[k];
awe6.core.drivers.AProfiler.prototype._marginHeight = null;
awe6.core.drivers.AProfiler.prototype._marginColor = null;
awe6.core.drivers.AProfiler.prototype._backgroundColor = null;
awe6.core.drivers.AProfiler.prototype._fpsColor = null;
awe6.core.drivers.AProfiler.prototype._memoryColor = null;
awe6.core.drivers.AProfiler.prototype._fpsLabel = null;
awe6.core.drivers.AProfiler.prototype._memoryLabel = null;
awe6.core.drivers.AProfiler.prototype._context = null;
awe6.core.drivers.AProfiler.prototype._agePrev = null;
awe6.core.drivers.AProfiler.prototype._width = null;
awe6.core.drivers.AProfiler.prototype._height = null;
awe6.core.drivers.AProfiler.prototype._init = function() {
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
	this._context.jeashSetX(this._context.jeashSetY(2));
}
awe6.core.drivers.AProfiler.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Entity.prototype._updater.call(this,deltaTime);
	if(this._age < this._agePrev + 250) return;
	this._agePrev = this._age;
	this._nativeUpdate();
}
awe6.core.drivers.AProfiler.prototype._nativeUpdate = function() {
}
awe6.core.drivers.AProfiler.prototype.__class__ = awe6.core.drivers.AProfiler;
awe6.interfaces.EMessage = { __ename__ : ["awe6","interfaces","EMessage"], __constructs__ : ["DISPOSE","PAUSE","RESUME","SUB_TYPE"] }
awe6.interfaces.EMessage.DISPOSE = ["DISPOSE",0];
awe6.interfaces.EMessage.DISPOSE.toString = $estr;
awe6.interfaces.EMessage.DISPOSE.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.PAUSE = ["PAUSE",1];
awe6.interfaces.EMessage.PAUSE.toString = $estr;
awe6.interfaces.EMessage.PAUSE.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.RESUME = ["RESUME",2];
awe6.interfaces.EMessage.RESUME.toString = $estr;
awe6.interfaces.EMessage.RESUME.__enum__ = awe6.interfaces.EMessage;
awe6.interfaces.EMessage.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",3,value]; $x.__enum__ = awe6.interfaces.EMessage; $x.toString = $estr; return $x; }
if(!jeash.display) jeash.display = {}
jeash.display.InterpolationMethod = { __ename__ : ["jeash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
jeash.display.InterpolationMethod.RGB = ["RGB",0];
jeash.display.InterpolationMethod.RGB.toString = $estr;
jeash.display.InterpolationMethod.RGB.__enum__ = jeash.display.InterpolationMethod;
jeash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
jeash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
jeash.display.InterpolationMethod.LINEAR_RGB.__enum__ = jeash.display.InterpolationMethod;
if(!jeash.ui) jeash.ui = {}
jeash.ui.Mouse = function(p) {
}
jeash.ui.Mouse.__name__ = ["jeash","ui","Mouse"];
jeash.ui.Mouse.hide = function() {
}
jeash.ui.Mouse.show = function() {
}
jeash.ui.Mouse.prototype.__class__ = jeash.ui.Mouse;
if(typeof js=='undefined') js = {}
js.Cookie = function() { }
js.Cookie.__name__ = ["js","Cookie"];
js.Cookie.set = function(name,value,expireDelay,path,domain) {
	var s = name + "=" + StringTools.urlEncode(value);
	if(expireDelay != null) {
		var d = DateTools.delta(Date.now(),expireDelay * 1000);
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
js.Cookie.prototype.__class__ = js.Cookie;
if(typeof haxe=='undefined') haxe = {}
if(!haxe.xml) haxe.xml = {}
haxe.xml.Filter = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
if(!haxe.xml._Check) haxe.xml._Check = {}
haxe.xml._Check.CheckResult = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
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
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = this.r.m != null?RegExp.leftContext:null;
	this.r.r = this.r.m != null?RegExp.rightContext:null;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.add(this.matchedLeft());
		buf.add(f(this));
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s == null?"null":s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
haxe.xml.Check = function() { }
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
		var attribs1 = attribs == null?new Array():attribs.copy();
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
					attribs1.remove(att);
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
		var rules1 = rules.copy();
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				var m = haxe.xml.Check.checkList([x].iterator(),r1);
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
						rules1.remove(r1);
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
			var m = haxe.xml.Check.checkList([x].iterator(),r1);
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
	if(s.length > 20) return s.substr(0,17) + "...";
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
	var m = haxe.xml.Check.checkList([x].iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.checkDocument = function(x,r) {
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.prototype.__class__ = haxe.xml.Check;
awe6.interfaces.IMessageManager = function() { }
awe6.interfaces.IMessageManager.__name__ = ["awe6","interfaces","IMessageManager"];
awe6.interfaces.IMessageManager.prototype.addSubscriber = null;
awe6.interfaces.IMessageManager.prototype.getSubscribers = null;
awe6.interfaces.IMessageManager.prototype.removeSubscribers = null;
awe6.interfaces.IMessageManager.prototype.sendMessage = null;
awe6.interfaces.IMessageManager.prototype.__class__ = awe6.interfaces.IMessageManager;
if(!jeash.filters) jeash.filters = {}
jeash.filters.BitmapFilter = function(inType) {
	if( inType === $_ ) return;
	this.mType = inType;
}
jeash.filters.BitmapFilter.__name__ = ["jeash","filters","BitmapFilter"];
jeash.filters.BitmapFilter.prototype.mType = null;
jeash.filters.BitmapFilter.prototype.clone = function() {
	throw "Implement in subclass. BitmapFilter::clone";
	return null;
}
jeash.filters.BitmapFilter.prototype.jeashApplyFilter = function(surface) {
}
jeash.filters.BitmapFilter.prototype.__class__ = jeash.filters.BitmapFilter;
jeash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if( in_distance === $_ ) return;
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
	jeash.filters.BitmapFilter.call(this,"DropShadowFilter");
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
	this.jeashCached = false;
}
jeash.filters.DropShadowFilter.__name__ = ["jeash","filters","DropShadowFilter"];
jeash.filters.DropShadowFilter.__super__ = jeash.filters.BitmapFilter;
for(var k in jeash.filters.BitmapFilter.prototype ) jeash.filters.DropShadowFilter.prototype[k] = jeash.filters.BitmapFilter.prototype[k];
jeash.filters.DropShadowFilter.prototype.distance = null;
jeash.filters.DropShadowFilter.prototype.angle = null;
jeash.filters.DropShadowFilter.prototype.color = null;
jeash.filters.DropShadowFilter.prototype.alpha = null;
jeash.filters.DropShadowFilter.prototype.blurX = null;
jeash.filters.DropShadowFilter.prototype.blurY = null;
jeash.filters.DropShadowFilter.prototype.quality = null;
jeash.filters.DropShadowFilter.prototype.strength = null;
jeash.filters.DropShadowFilter.prototype.inner = null;
jeash.filters.DropShadowFilter.prototype.knockout = null;
jeash.filters.DropShadowFilter.prototype.hideObject = null;
jeash.filters.DropShadowFilter.prototype.clone = function() {
	return new jeash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
}
jeash.filters.DropShadowFilter.prototype.jeashCached = null;
jeash.filters.DropShadowFilter.prototype.jeashApplyFilter = function(surface) {
	if(this.jeashCached) return;
	var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
	var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
	var blurRadius = distanceY == 0?this.blurX:distanceX == 0?this.blurY:(this.blurX * (distanceX / distanceY) / (distanceX + distanceY) + this.blurY * (distanceY / distanceX) / (distanceX + distanceY)) / 2;
	jeash.Lib.trace(distanceX);
	var ctx = surface.getContext("2d");
	ctx.shadowOffsetX = distanceX;
	ctx.shadowOffsetX = distanceX;
	ctx.shadowBlur = blurRadius;
	ctx.shadowColor = StringTools.hex(this.color);
	this.jeashCached = true;
}
jeash.filters.DropShadowFilter.prototype.__class__ = jeash.filters.DropShadowFilter;
jeash.filters.GlowFilter = function(in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout) {
	if( in_color === $_ ) return;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 6.0;
	if(in_blurX == null) in_blurX = 6.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	jeash.filters.DropShadowFilter.call(this,0,0,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,false);
}
jeash.filters.GlowFilter.__name__ = ["jeash","filters","GlowFilter"];
jeash.filters.GlowFilter.__super__ = jeash.filters.DropShadowFilter;
for(var k in jeash.filters.DropShadowFilter.prototype ) jeash.filters.GlowFilter.prototype[k] = jeash.filters.DropShadowFilter.prototype[k];
jeash.filters.GlowFilter.prototype.__class__ = jeash.filters.GlowFilter;
if(!jeash.events) jeash.events = {}
jeash.events.Listener = function(inListener,inUseCapture,inPriority) {
	if( inListener === $_ ) return;
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = jeash.events.Listener.sIDs++;
}
jeash.events.Listener.__name__ = ["jeash","events","Listener"];
jeash.events.Listener.prototype.mListner = null;
jeash.events.Listener.prototype.mUseCapture = null;
jeash.events.Listener.prototype.mPriority = null;
jeash.events.Listener.prototype.mID = null;
jeash.events.Listener.prototype.Is = function(inListener,inCapture) {
	return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
}
jeash.events.Listener.prototype.dispatchEvent = function(event) {
	this.mListner(event);
}
jeash.events.Listener.prototype.__class__ = jeash.events.Listener;
jeash.events.IEventDispatcher = function() { }
jeash.events.IEventDispatcher.__name__ = ["jeash","events","IEventDispatcher"];
jeash.events.IEventDispatcher.prototype.addEventListener = null;
jeash.events.IEventDispatcher.prototype.dispatchEvent = null;
jeash.events.IEventDispatcher.prototype.hasEventListener = null;
jeash.events.IEventDispatcher.prototype.removeEventListener = null;
jeash.events.IEventDispatcher.prototype.willTrigger = null;
jeash.events.IEventDispatcher.prototype.__class__ = jeash.events.IEventDispatcher;
jeash.events.EventDispatcher = function(target) {
	if( target === $_ ) return;
	if(target != null) this.jeashTarget = target; else this.jeashTarget = this;
	this.jeashEventMap = [];
}
jeash.events.EventDispatcher.__name__ = ["jeash","events","EventDispatcher"];
jeash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
jeash.events.EventDispatcher.prototype.jeashTarget = null;
jeash.events.EventDispatcher.prototype.jeashEventMap = null;
jeash.events.EventDispatcher.prototype.getList = function(type) {
	return this.jeashEventMap[type];
}
jeash.events.EventDispatcher.prototype.setList = function(type,list) {
	this.jeashEventMap[type] = list;
}
jeash.events.EventDispatcher.prototype.existList = function(type) {
	return this.jeashEventMap[type] != undefined;
}
jeash.events.EventDispatcher.prototype.addEventListener = function(type,inListener,useCapture,inPriority,useWeakReference) {
	var capture = useCapture == null?false:useCapture;
	var priority = inPriority == null?0:inPriority;
	var list = this.getList(type);
	if(!this.existList(type)) {
		list = new Array();
		this.setList(type,list);
	}
	var l = new jeash.events.Listener(inListener,capture,priority);
	list.push(l);
}
jeash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if(event.target == null) event.target = this.jeashTarget;
	var list = this.getList(event.type);
	var capture = event.eventPhase == jeash.events.EventPhase.CAPTURING_PHASE;
	if(this.existList(event.type)) {
		list.sort(jeash.events.EventDispatcher.compareListeners);
		var idx = 0;
		while(idx < list.length) {
			var listener = list[idx];
			if(listener.mUseCapture == capture) {
				listener.dispatchEvent(event);
				if(event.jeashGetIsCancelledNow()) return true;
			}
			if(idx < list.length && listener != list[idx]) {
			} else idx++;
		}
		return true;
	}
	return false;
}
jeash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.existList(type);
}
jeash.events.EventDispatcher.prototype.removeEventListener = function(type,listener,inCapture) {
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
jeash.events.EventDispatcher.prototype.toString = function() {
	return "[ " + this.__name__ + " ]";
}
jeash.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.hasEventListener(type);
}
jeash.events.EventDispatcher.prototype.__class__ = jeash.events.EventDispatcher;
jeash.events.EventDispatcher.__interfaces__ = [jeash.events.IEventDispatcher];
awe6.interfaces.IFactory = function() { }
awe6.interfaces.IFactory.__name__ = ["awe6","interfaces","IFactory"];
awe6.interfaces.IFactory.prototype.id = null;
awe6.interfaces.IFactory.prototype.version = null;
awe6.interfaces.IFactory.prototype.author = null;
awe6.interfaces.IFactory.prototype.isDebug = null;
awe6.interfaces.IFactory.prototype.isDecached = null;
awe6.interfaces.IFactory.prototype.isEyeCandyOptionEnabled = null;
awe6.interfaces.IFactory.prototype.isFullScreenOptionEnabled = null;
awe6.interfaces.IFactory.prototype.isResetSessionsOptionEnabled = null;
awe6.interfaces.IFactory.prototype.width = null;
awe6.interfaces.IFactory.prototype.height = null;
awe6.interfaces.IFactory.prototype.bgColor = null;
awe6.interfaces.IFactory.prototype.secret = null;
awe6.interfaces.IFactory.prototype.targetFramerate = null;
awe6.interfaces.IFactory.prototype.isFixedUpdates = null;
awe6.interfaces.IFactory.prototype.config = null;
awe6.interfaces.IFactory.prototype.startingSceneType = null;
awe6.interfaces.IFactory.prototype.keyPause = null;
awe6.interfaces.IFactory.prototype.keyMute = null;
awe6.interfaces.IFactory.prototype.keyBack = null;
awe6.interfaces.IFactory.prototype.keyNext = null;
awe6.interfaces.IFactory.prototype.keySpecial = null;
awe6.interfaces.IFactory.prototype.onInitComplete = null;
awe6.interfaces.IFactory.prototype.createAssetManager = null;
awe6.interfaces.IFactory.prototype.createEncrypter = null;
awe6.interfaces.IFactory.prototype.createEntity = null;
awe6.interfaces.IFactory.prototype.createLogger = null;
awe6.interfaces.IFactory.prototype.createOverlay = null;
awe6.interfaces.IFactory.prototype.createPreloader = null;
awe6.interfaces.IFactory.prototype.createScene = null;
awe6.interfaces.IFactory.prototype.createSceneTransition = null;
awe6.interfaces.IFactory.prototype.createSession = null;
awe6.interfaces.IFactory.prototype.createTextStyle = null;
awe6.interfaces.IFactory.prototype.getBackSceneType = null;
awe6.interfaces.IFactory.prototype.getNextSceneType = null;
awe6.interfaces.IFactory.prototype.__class__ = awe6.interfaces.IFactory;
awe6.core.drivers.AFactory = function(isDebug,configUrl) {
	if( isDebug === $_ ) return;
	if(isDebug == null) isDebug = true;
	this.isDebug = isDebug;
	this._configUrl = configUrl;
	this._nativeInit();
}
awe6.core.drivers.AFactory.__name__ = ["awe6","core","drivers","AFactory"];
awe6.core.drivers.AFactory.prototype._configUrl = null;
awe6.core.drivers.AFactory.prototype._kernel = null;
awe6.core.drivers.AFactory.prototype._tools = null;
awe6.core.drivers.AFactory.prototype._isConfigRequired = null;
awe6.core.drivers.AFactory.prototype.__kernel = null;
awe6.core.drivers.AFactory.prototype.isDisposed = null;
awe6.core.drivers.AFactory.prototype.id = null;
awe6.core.drivers.AFactory.prototype.version = null;
awe6.core.drivers.AFactory.prototype.author = null;
awe6.core.drivers.AFactory.prototype.isDebug = null;
awe6.core.drivers.AFactory.prototype.isDecached = null;
awe6.core.drivers.AFactory.prototype.isEyeCandyOptionEnabled = null;
awe6.core.drivers.AFactory.prototype.isFullScreenOptionEnabled = null;
awe6.core.drivers.AFactory.prototype.isResetSessionsOptionEnabled = null;
awe6.core.drivers.AFactory.prototype.width = null;
awe6.core.drivers.AFactory.prototype.height = null;
awe6.core.drivers.AFactory.prototype.bgColor = null;
awe6.core.drivers.AFactory.prototype.secret = null;
awe6.core.drivers.AFactory.prototype.targetFramerate = null;
awe6.core.drivers.AFactory.prototype.isFixedUpdates = null;
awe6.core.drivers.AFactory.prototype.config = null;
awe6.core.drivers.AFactory.prototype.startingSceneType = null;
awe6.core.drivers.AFactory.prototype.keyPause = null;
awe6.core.drivers.AFactory.prototype.keyMute = null;
awe6.core.drivers.AFactory.prototype.keyBack = null;
awe6.core.drivers.AFactory.prototype.keyNext = null;
awe6.core.drivers.AFactory.prototype.keySpecial = null;
awe6.core.drivers.AFactory.prototype._nativeInit = function() {
	this._init();
	if(this._configUrl != null && this._configUrl.substr(0,5) == "<?xml") this._traverseElements(Xml.parse(this._configUrl).firstElement().elements(),"");
	this._launchKernel();
}
awe6.core.drivers.AFactory.prototype._init = function() {
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
	this.secret = "YouMustOverrideThis";
	this.targetFramerate = 25;
	this.isFixedUpdates = true;
	this.config = new Hash();
	this.startingSceneType = awe6.interfaces.EScene.GAME;
	this.keyPause = awe6.interfaces.EKey.P;
	this.keyMute = awe6.interfaces.EKey.M;
	this.keyNext = awe6.interfaces.EKey.SPACE;
	this.keyBack = awe6.interfaces.EKey.ESCAPE;
	this.keySpecial = awe6.interfaces.EKey.CONTROL;
	this._isConfigRequired = true;
}
awe6.core.drivers.AFactory.prototype._traverseElements = function(elements,prefix) {
	if(prefix.length != 0) prefix += ".";
	while( elements.hasNext() ) {
		var i = elements.next();
		var l_name = prefix + i.getNodeName();
		if(i.elements().hasNext()) this._traverseElements(i.elements(),l_name);
		if(i.firstChild() != null && i.firstChild().toString().substr(0,9) == "<![CDATA[") i.firstChild().setNodeValue(i.firstChild().toString().split("<![CDATA[").join("").split("]]>").join(""));
		this.config.set(l_name,i.firstChild() == null?"":i.firstChild().getNodeValue());
		var $it0 = i.attributes();
		while( $it0.hasNext() ) {
			var j = $it0.next();
			var l_aName = l_name + "." + j;
			this.config.set(l_aName,i.get(j));
		}
	}
}
awe6.core.drivers.AFactory.prototype._launchKernel = function() {
	if(this.__kernel != null) return;
	this.__kernel = this._nativeLaunchKernel();
}
awe6.core.drivers.AFactory.prototype._nativeLaunchKernel = function() {
	return new awe6.core.drivers.js.Kernel(this,null);
}
awe6.core.drivers.AFactory.prototype._getAssetUrls = function() {
	var l_result = [];
	var _g = 0;
	while(_g < 1000) {
		var i = _g++;
		var l_nodeName = "settings.assets.url" + i;
		if(this.config.exists(l_nodeName)) l_result.push(Std.string(this.config.get(l_nodeName)));
	}
	return l_result;
}
awe6.core.drivers.AFactory.prototype.onInitComplete = function(kernel) {
	if(this._kernel != null) return;
	this._kernel = kernel;
	this._tools = this._kernel.tools;
	this.id = this._tools.toConstCase(StringTools.trim(this.id)).substr(0,16);
	this.version = StringTools.trim(this.version).substr(0,10);
	this.author = StringTools.trim(this.author).substr(0,16);
}
awe6.core.drivers.AFactory.prototype.createAssetManager = function() {
	return Std["is"](this._kernel.assets,awe6.interfaces.IAssetManagerProcess)?(function($this) {
		var $r;
		var $t = $this._kernel.assets;
		if(Std["is"]($t,awe6.interfaces.IAssetManagerProcess)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)):new awe6.core.AAssetManager(this._kernel);
}
awe6.core.drivers.AFactory.prototype.createEncrypter = function() {
	return new awe6.core.Encrypter(this.secret);
}
awe6.core.drivers.AFactory.prototype.createEntity = function(id) {
	var l_entity = new awe6.core.Entity(this._kernel,id);
	return l_entity;
}
awe6.core.drivers.AFactory.prototype.createLogger = function() {
	return null;
}
awe6.core.drivers.AFactory.prototype.createOverlay = function() {
	var l_overlay = new awe6.core.drivers.js.Overlay(this._kernel);
	return l_overlay;
}
awe6.core.drivers.AFactory.prototype.createPreloader = function() {
	return new awe6.core.drivers.js.Preloader(this._kernel,this._getAssetUrls(),this.isDecached);
}
awe6.core.drivers.AFactory.prototype.createScene = function(type) {
	if(type == null) type = this.startingSceneType;
	var l_scene = new awe6.core.Scene(this._kernel,type);
	return l_scene;
}
awe6.core.drivers.AFactory.prototype.createSceneTransition = function(typeIncoming,typeOutgoing) {
	var l_sceneTransition = new awe6.core.drivers.js.SceneTransition(this._kernel);
	return l_sceneTransition;
}
awe6.core.drivers.AFactory.prototype.createSession = function(id) {
	return new awe6.core.drivers.ASession(this._kernel,id);
}
awe6.core.drivers.AFactory.prototype.createTextStyle = function(type) {
	var l_textStyle = new awe6.core.TextStyle();
	return l_textStyle;
}
awe6.core.drivers.AFactory.prototype.getBackSceneType = function(type) {
	return null;
}
awe6.core.drivers.AFactory.prototype.getNextSceneType = function(type) {
	return null;
}
awe6.core.drivers.AFactory.prototype.dispose = function() {
	if(this.isDisposed || this.__kernel == null) return;
	this.isDisposed = true;
	this._nativeDisposer();
	this.__kernel.dispose();
	this.__kernel = null;
	this._kernel = null;
	this.config = null;
}
awe6.core.drivers.AFactory.prototype._nativeDisposer = function() {
}
awe6.core.drivers.AFactory.prototype.__class__ = awe6.core.drivers.AFactory;
awe6.core.drivers.AFactory.__interfaces__ = [awe6.interfaces.IDisposable,awe6.interfaces.IFactory];
awe6.core.drivers.js.Factory = function(sprite,isDebug,config) {
	if( sprite === $_ ) return;
	if(isDebug == null) isDebug = true;
	this._sprite = new jeash.display.Sprite();
	sprite.addChild(this._sprite);
	awe6.core.drivers.AFactory.call(this,isDebug,config);
}
awe6.core.drivers.js.Factory.__name__ = ["awe6","core","drivers","js","Factory"];
awe6.core.drivers.js.Factory.__super__ = awe6.core.drivers.AFactory;
for(var k in awe6.core.drivers.AFactory.prototype ) awe6.core.drivers.js.Factory.prototype[k] = awe6.core.drivers.AFactory.prototype[k];
awe6.core.drivers.js.Factory.prototype._sprite = null;
awe6.core.drivers.js.Factory.prototype._nativeInit = function() {
	this._init();
	if(this._isConfigRequired) this._parseXml(this._configUrl); else this._launchKernel();
}
awe6.core.drivers.js.Factory.prototype._parseXml = function(data) {
	this._traverseElements(Xml.parse(data).firstElement().elements(),"");
	this._launchKernel();
}
awe6.core.drivers.js.Factory.prototype._nativeLaunchKernel = function() {
	return new awe6.core.drivers.js.Kernel(this,this._sprite);
}
awe6.core.drivers.js.Factory.prototype._nativeDisposer = function() {
	if(this._sprite.parent != null) this._sprite.parent.removeChild(this._sprite);
}
awe6.core.drivers.js.Factory.prototype.__class__ = awe6.core.drivers.js.Factory;
demo.Factory = function(sprite,isDebug,config) {
	if( sprite === $_ ) return;
	if(isDebug == null) isDebug = true;
	awe6.core.drivers.js.Factory.call(this,sprite,isDebug,config);
}
demo.Factory.__name__ = ["demo","Factory"];
demo.Factory.__super__ = awe6.core.drivers.js.Factory;
for(var k in awe6.core.drivers.js.Factory.prototype ) demo.Factory.prototype[k] = awe6.core.drivers.js.Factory.prototype[k];
demo.Factory.prototype._assetManager = null;
demo.Factory.prototype._init = function() {
	awe6.core.drivers.js.Factory.prototype._init.call(this);
	this.id = "awe6Demo";
	this.version = "0.4.200";
	this.author = "Robert Fell";
	this.isDecached = true;
	this.width = 600;
	this.height = 400;
	this.bgColor = 16777215;
	this.secret = "ThereAreWaysToConcealThis";
	this.startingSceneType = awe6.interfaces.EScene.INTRO;
	this.targetFramerate = 20;
	this.isFixedUpdates = false;
}
demo.Factory.prototype.createAssetManager = function() {
	if(this._assetManager == null) this._assetManager = new demo.AssetManager(this._kernel);
	return this._assetManager;
}
demo.Factory.prototype.createOverlay = function() {
	var l_overlay = new awe6.core.drivers.js.Overlay(this._kernel,this._assetManager.overlayBackground,this._assetManager.backUp,this._assetManager.backOver,this._assetManager.muteUp,this._assetManager.muteOver,this._assetManager.unmuteUp,this._assetManager.unmuteOver,this._assetManager.pauseUp,this._assetManager.pauseOver,this._assetManager.unpauseUp,this._assetManager.unpauseOver);
	var l_width = 30;
	var l_x = this.width - 10 - 3 * l_width;
	var l_y = this.height - 30;
	l_overlay.positionButton(awe6.interfaces.EOverlayButton.BACK,l_x,l_y);
	l_overlay.positionButton(awe6.interfaces.EOverlayButton.PAUSE,l_x += l_width,l_y);
	l_overlay.positionButton(awe6.interfaces.EOverlayButton.UNPAUSE,l_x,l_y);
	l_overlay.positionButton(awe6.interfaces.EOverlayButton.MUTE,l_x += l_width,l_y);
	l_overlay.positionButton(awe6.interfaces.EOverlayButton.UNMUTE,l_x,l_y);
	return l_overlay;
}
demo.Factory.prototype.createPreloader = function() {
	return new demo.Preloader(this._kernel,this._getAssetUrls(),this.isDecached);
}
demo.Factory.prototype.createSession = function(id) {
	return new demo.Session(this._kernel,id);
}
demo.Factory.prototype.createScene = function(type) {
	switch( (type)[1] ) {
	case 0:
		return new demo.scenes.Intro(this._kernel,type);
	case 5:
		return new demo.scenes.Game(this._kernel,type);
	case 6:
		return new demo.scenes.Results(this._kernel,type);
	default:
	}
	return awe6.core.drivers.js.Factory.prototype.createScene.call(this,type);
}
demo.Factory.prototype.createTextStyle = function(type) {
	if(type == null) type = awe6.interfaces.ETextStyle.BODY;
	var l_fontName = this._assetManager.font.fontName;
	var l_result = new awe6.core.TextStyle(l_fontName,12,16777215,false,false,awe6.interfaces.ETextAlign.CENTER,0,0,0,[new jeash.filters.GlowFilter(131970,1,4,4,5,2)]);
	l_result.size = (function($this) {
		var $r;
		switch( (type)[1] ) {
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
demo.Factory.prototype.getBackSceneType = function(type) {
	switch( (type)[1] ) {
	case 0:
		return null;
	case 5:
		return awe6.interfaces.EScene.INTRO;
	case 6:
		return awe6.interfaces.EScene.INTRO;
	default:
	}
	return awe6.core.drivers.js.Factory.prototype.getBackSceneType.call(this,type);
}
demo.Factory.prototype.getNextSceneType = function(type) {
	switch( (type)[1] ) {
	case 0:
		return awe6.interfaces.EScene.GAME;
	case 5:
		return awe6.interfaces.EScene.RESULTS;
	case 6:
		return awe6.interfaces.EScene.INTRO;
	default:
	}
	return awe6.core.drivers.js.Factory.prototype.getNextSceneType.call(this,type);
}
demo.Factory.prototype.__class__ = demo.Factory;
jeash.display.IBitmapDrawable = function() { }
jeash.display.IBitmapDrawable.__name__ = ["jeash","display","IBitmapDrawable"];
jeash.display.IBitmapDrawable.prototype.drawToSurface = null;
jeash.display.IBitmapDrawable.prototype.__class__ = jeash.display.IBitmapDrawable;
awe6.interfaces.ITools = function() { }
awe6.interfaces.ITools.__name__ = ["awe6","interfaces","ITools"];
awe6.interfaces.ITools.prototype.BIG_NUMBER = null;
awe6.interfaces.ITools.prototype.createGuid = null;
awe6.interfaces.ITools.prototype.ease = null;
awe6.interfaces.ITools.prototype.sortByString = null;
awe6.interfaces.ITools.prototype.sortByInt = null;
awe6.interfaces.ITools.prototype.sortByPriority = null;
awe6.interfaces.ITools.prototype.toUpperCaseFirst = null;
awe6.interfaces.ITools.prototype.toCamelCase = null;
awe6.interfaces.ITools.prototype.toConstCase = null;
awe6.interfaces.ITools.prototype.fromCamelCase = null;
awe6.interfaces.ITools.prototype.fromConstCase = null;
awe6.interfaces.ITools.prototype.toWords = null;
awe6.interfaces.ITools.prototype.limit = null;
awe6.interfaces.ITools.prototype.range = null;
awe6.interfaces.ITools.prototype.swap = null;
awe6.interfaces.ITools.prototype.isOdd = null;
awe6.interfaces.ITools.prototype.isEven = null;
awe6.interfaces.ITools.prototype.sgn = null;
awe6.interfaces.ITools.prototype.isBool = null;
awe6.interfaces.ITools.prototype.nearestSquare = null;
awe6.interfaces.ITools.prototype.convertUpdatesToFormattedTime = null;
awe6.interfaces.ITools.prototype.convertAgeToFormattedTime = null;
awe6.interfaces.ITools.prototype.shuffle = null;
awe6.interfaces.ITools.prototype.getRandomType = null;
awe6.interfaces.ITools.prototype.intToHex = null;
awe6.interfaces.ITools.prototype.serialize = null;
awe6.interfaces.ITools.prototype.unserialize = null;
awe6.interfaces.ITools.prototype.__class__ = awe6.interfaces.ITools;
awe6.interfaces.ITools.__interfaces__ = [awe6.interfaces.IEncrypter];
awe6.core.Tools = function(kernel) {
	if( kernel === $_ ) return;
	this._kernel = kernel;
	this.BIG_NUMBER = 9999998;
	this._encrypter = this._kernel.factory.createEncrypter();
}
awe6.core.Tools.__name__ = ["awe6","core","Tools"];
awe6.core.Tools.prototype.BIG_NUMBER = null;
awe6.core.Tools.prototype._kernel = null;
awe6.core.Tools.prototype._encrypter = null;
awe6.core.Tools.prototype.createGuid = function(isSmall,prefix) {
	if(prefix == null) prefix = "";
	if(isSmall == null) isSmall = false;
	return isSmall?prefix + (this._randomCharacter() + this._randomCharacter() + this._randomCharacter()).substr(0,10):prefix + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter());
}
awe6.core.Tools.prototype._randomCharacter = function() {
	return StringTools.hex(Std["int"]((1 + Math.random()) * 65536) | 0,1).substr(1);
}
awe6.core.Tools.prototype.ease = function(originalValue,newValue,ease) {
	return originalValue * (1 - ease) + newValue * ease;
}
awe6.core.Tools.prototype.sortByString = function(a,b) {
	return Reflect.compare(a.toLowerCase(),b.toLowerCase());
}
awe6.core.Tools.prototype.sortByInt = function(a,b) {
	return Reflect.compare(a,b);
}
awe6.core.Tools.prototype.sortByPriority = function(a,b) {
	var l_ap = a.__get_priority();
	var l_bp = b.__get_priority();
	if(l_ap < l_bp) return -1;
	if(l_ap > l_bp) return 1;
	return 0;
}
awe6.core.Tools.prototype.toUpperCaseFirst = function(value) {
	return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
}
awe6.core.Tools.prototype._isCamelCase = function(value) {
	if(value.toUpperCase() == value) return false;
	if(value.indexOf(" ") > -1) return false;
	if(value.indexOf("_") > -1) return false;
	return true;
}
awe6.core.Tools.prototype._isConstCase = function(value) {
	if(value.toUpperCase() != value) return false;
	if(value.indexOf(" ") > -1) return false;
	return true;
}
awe6.core.Tools.prototype.toCamelCase = function(value,isUpper) {
	if(isUpper == null) isUpper = false;
	if(value == null || value == "") return "";
	if(this._isCamelCase(value)) return value;
	if(this._isConstCase(value)) value = this.fromConstCase(value);
	var l_result = "";
	value = StringTools.replace(value,"     "," ");
	value = StringTools.replace(value,"    "," ");
	value = StringTools.replace(value,"   "," ");
	value = StringTools.replace(value,"  "," ");
	value = StringTools.replace(value," ","_");
	var l_del = "_";
	var l_words = value.split(l_del);
	var _g = 0;
	while(_g < l_words.length) {
		var i = l_words[_g];
		++_g;
		l_result += isUpper?i.charAt(0).toUpperCase() + i.substr(1).toLowerCase():i.toLowerCase();
		isUpper = true;
	}
	return l_result;
}
awe6.core.Tools.prototype.fromCamelCase = function(value) {
	if(value == null || value == "") return "";
	var l_result = "";
	var l_chars = value.split("");
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
awe6.core.Tools.prototype.toConstCase = function(value) {
	if(value == null || value == "") return "";
	if(this._isConstCase(value)) return value;
	if(this._isCamelCase(value)) value = this.fromCamelCase(value);
	var l_result = "";
	value = StringTools.replace(value,"     "," ");
	value = StringTools.replace(value,"    "," ");
	value = StringTools.replace(value,"   "," ");
	value = StringTools.replace(value,"  "," ");
	value = StringTools.replace(value," ","_");
	l_result = value.toUpperCase();
	return l_result;
}
awe6.core.Tools.prototype.fromConstCase = function(value) {
	if(value == null || value == "") return "";
	var l_result = "";
	var l_words = value.split("_");
	var l_space = "";
	var _g = 0;
	while(_g < l_words.length) {
		var i = l_words[_g];
		++_g;
		l_result += l_space + (i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
		l_space = " ";
	}
	return l_result;
}
awe6.core.Tools.prototype.toWords = function(value) {
	if(this._isCamelCase(value)) return this.fromCamelCase(value);
	if(this._isConstCase(value)) return this.fromConstCase(value);
	return value;
}
awe6.core.Tools.prototype.limit = function(value,min,max) {
	return value > max?max:value < min?min:value;
}
awe6.core.Tools.prototype.range = function(value,min,max) {
	var l_d = max - min;
	if(l_d == 0) return value; else {
		var l_o = value - min;
		return l_o - Math.floor(l_o / l_d) * l_d + min;
	}
}
awe6.core.Tools.prototype.swap = function(a,b) {
	var l_temp = a;
	a = b;
	b = l_temp;
}
awe6.core.Tools.prototype.getRandomType = function(e) {
	return Type.createEnumIndex(e,Std.random(Type.getEnumConstructs(e).length));
}
awe6.core.Tools.prototype.isOdd = function(value) {
	return value % 2 != 0;
}
awe6.core.Tools.prototype.isEven = function(value) {
	return value % 2 == 0;
}
awe6.core.Tools.prototype.sgn = function(value) {
	if(value > 0) return 1; else if(value == 0) return 0; else return -1;
}
awe6.core.Tools.prototype.isBool = function(value) {
	return value != 0 && value != null && value != false;
}
awe6.core.Tools.prototype.nearestSquare = function(value) {
	if(value == 0) return 0; else {
		var l_sqrt = Math.round(Math.sqrt(Math.abs(value)));
		return l_sqrt * l_sqrt * (value > 0?1:value == 0?0:-1);
	}
}
awe6.core.Tools.prototype.shuffle = function(array) {
	var l_result = array.copy();
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
awe6.core.Tools.prototype.convertUpdatesToFormattedTime = function(frames,delimiter) {
	var l_age = Math.round(1000 * frames / this._kernel.factory.targetFramerate);
	return this.convertAgeToFormattedTime(l_age,delimiter);
}
awe6.core.Tools.prototype.convertAgeToFormattedTime = function(age,delimiter) {
	if(delimiter == null) delimiter = "'";
	if(age < 0) return "99" + delimiter + "99" + delimiter + "99";
	var l_age = age / 1000;
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
	return Std.string(l_mins + delimiter + l_secs + delimiter + l_remainder);
}
awe6.core.Tools.prototype.intToHex = function(value) {
	value &= 255;
	var l_hex = "0123456789abcdef";
	return l_hex.charAt(value >> 4) + l_hex.charAt(value & 15);
}
awe6.core.Tools.prototype.serialize = function(value) {
	return haxe.Serializer.run(value);
}
awe6.core.Tools.prototype.unserialize = function(value) {
	return haxe.Unserializer.run(value);
}
awe6.core.Tools.prototype.encrypt = function(value,secret) {
	if(secret == null) secret = "";
	return this._encrypter.encrypt(value,secret);
}
awe6.core.Tools.prototype.decrypt = function(value,secret) {
	if(secret == null) secret = "";
	return this._encrypter.decrypt(value,secret);
}
awe6.core.Tools.prototype.__class__ = awe6.core.Tools;
awe6.core.Tools.__interfaces__ = [awe6.interfaces.ITools];
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
if(!jeash.text) jeash.text = {}
jeash.text.Font = function(p) {
	if( p === $_ ) return;
	this.jeashMetrics = [];
	this.jeashFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	this.jeashSetFontName(className == "jeash.text.Font"?"Bitstream_Vera_Sans":className.split(".").pop());
}
jeash.text.Font.__name__ = ["jeash","text","Font"];
jeash.text.Font.jeashFontData = null;
jeash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	var sans = new jeash.text.Font();
	sans.jeashSetFontName("Bitstream_Vera_Sans");
	sans.fontStyle = jeash.text.FontStyle.REGULAR;
	sans.fontType = jeash.text.FontType.DEVICE;
	return [sans];
}
jeash.text.Font.registerFont = function(font) {
}
jeash.text.Font.jeashOfResource = function(name) {
	var data = haxe.Resource.getString(name);
	if(data == null) throw "Resource data for string '" + name + "' not found.";
	jeash.text.Font.jeashFontData.set(name,haxe.Resource.getString(name));
}
jeash.text.Font.prototype.fontName = null;
jeash.text.Font.prototype.fontStyle = null;
jeash.text.Font.prototype.fontType = null;
jeash.text.Font.prototype.jeashMetrics = null;
jeash.text.Font.prototype.jeashGlyphData = null;
jeash.text.Font.prototype.jeashFontScale = null;
jeash.text.Font.prototype.hasGlyph = function() {
	return false;
}
jeash.text.Font.prototype.jeashSetScale = function(scale) {
	this.jeashFontScale = scale / 1024;
}
jeash.text.Font.prototype.jeashGetAdvance = function(inGlyph,height) {
	var m = this.jeashMetrics[inGlyph];
	if(m == null) this.jeashMetrics[inGlyph] = m = Std["int"](this.jeashGlyphData.get(inGlyph)._width * this.jeashFontScale);
	if(m == null) return 0;
	return m;
}
jeash.text.Font.prototype.jeashRender = function(graphics,inChar,inX,inY,inOutline) {
	graphics.jeashClearLine();
	var index = 0;
	var glyph = this.jeashGlyphData.get(inChar);
	var commands = glyph.commands;
	var data = glyph.data;
	var _g = 0;
	while(_g < commands.length) {
		var c = commands[_g];
		++_g;
		switch(c) {
		case 1:
			graphics.moveTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		case 2:
			graphics.lineTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		case 3:
			graphics.curveTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale,inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		}
	}
}
jeash.text.Font.prototype.jeashSetFontName = function(name) {
	this.fontName = name;
	if(!jeash.text.Font.jeashFontData.exists(this.fontName)) try {
		jeash.text.Font.jeashOfResource(name);
	} catch( e ) {
		jeash.Lib.trace("Glyph data for font '" + name + "' does not exist, defaulting to '" + "Bitstream_Vera_Sans" + "'.");
		this.fontName = "Bitstream_Vera_Sans";
	}
	this.jeashGlyphData = haxe.Unserializer.run(jeash.text.Font.jeashFontData.get(this.fontName));
	return name;
}
jeash.text.Font.prototype.__class__ = jeash.text.Font;
jeash.text.TextFormatAlign = { __ename__ : ["jeash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
jeash.text.TextFormatAlign.LEFT = ["LEFT",0];
jeash.text.TextFormatAlign.LEFT.toString = $estr;
jeash.text.TextFormatAlign.LEFT.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
jeash.text.TextFormatAlign.RIGHT.toString = $estr;
jeash.text.TextFormatAlign.RIGHT.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
jeash.text.TextFormatAlign.JUSTIFY.toString = $estr;
jeash.text.TextFormatAlign.JUSTIFY.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.CENTER = ["CENTER",3];
jeash.text.TextFormatAlign.CENTER.toString = $estr;
jeash.text.TextFormatAlign.CENTER.__enum__ = jeash.text.TextFormatAlign;
awe6.interfaces.IAssetManager = function() { }
awe6.interfaces.IAssetManager.__name__ = ["awe6","interfaces","IAssetManager"];
awe6.interfaces.IAssetManager.prototype.getAsset = null;
awe6.interfaces.IAssetManager.prototype.__class__ = awe6.interfaces.IAssetManager;
awe6.interfaces.IAssetManagerProcess = function() { }
awe6.interfaces.IAssetManagerProcess.__name__ = ["awe6","interfaces","IAssetManagerProcess"];
awe6.interfaces.IAssetManagerProcess.prototype.__class__ = awe6.interfaces.IAssetManagerProcess;
awe6.interfaces.IAssetManagerProcess.__interfaces__ = [awe6.interfaces.IProcess,awe6.interfaces.IAssetManager];
awe6.core.AAssetManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.AAssetManager.__name__ = ["awe6","core","AAssetManager"];
awe6.core.AAssetManager.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.AAssetManager.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.AAssetManager.prototype.getAsset = function(id,packageId,args) {
	if(packageId == null) packageId = this._kernel.getConfig("settings.assets.packages.default");
	if(packageId == null) packageId = "assets";
	var l_assetName = id;
	if(packageId.length > 0) l_assetName = packageId + "." + id;
	var l_assetClass = Type.resolveClass(l_assetName);
	if(l_assetClass == null) return null;
	if(args == null) args = [];
	return Type.createInstance(l_assetClass,args);
}
awe6.core.AAssetManager.prototype.__class__ = awe6.core.AAssetManager;
awe6.core.AAssetManager.__interfaces__ = [awe6.interfaces.IAssetManagerProcess];
demo.AssetManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.AAssetManager.call(this,kernel);
}
demo.AssetManager.__name__ = ["demo","AssetManager"];
demo.AssetManager.__super__ = awe6.core.AAssetManager;
for(var k in awe6.core.AAssetManager.prototype ) demo.AssetManager.prototype[k] = awe6.core.AAssetManager.prototype[k];
demo.AssetManager.prototype.overlayBackground = null;
demo.AssetManager.prototype.backUp = null;
demo.AssetManager.prototype.backOver = null;
demo.AssetManager.prototype.muteUp = null;
demo.AssetManager.prototype.muteOver = null;
demo.AssetManager.prototype.unmuteUp = null;
demo.AssetManager.prototype.unmuteOver = null;
demo.AssetManager.prototype.pauseUp = null;
demo.AssetManager.prototype.pauseOver = null;
demo.AssetManager.prototype.unpauseUp = null;
demo.AssetManager.prototype.unpauseOver = null;
demo.AssetManager.prototype.background = null;
demo.AssetManager.prototype.buttonUp = null;
demo.AssetManager.prototype.buttonOver = null;
demo.AssetManager.prototype.sphere = null;
demo.AssetManager.prototype.font = null;
demo.AssetManager.prototype._init = function() {
	awe6.core.AAssetManager.prototype._init.call(this);
	this.overlayBackground = this._createView(demo.EAsset.OVERLAY_BACKGROUND);
	this.backUp = this._createView(demo.EAsset.OVERLAY_BACK_UP);
	this.backOver = this._createView(demo.EAsset.OVERLAY_BACK_OVER);
	this.muteUp = this._createView(demo.EAsset.OVERLAY_MUTE_UP);
	this.muteOver = this._createView(demo.EAsset.OVERLAY_MUTE_OVER);
	this.unmuteUp = this._createView(demo.EAsset.OVERLAY_UNMUTE_UP);
	this.unmuteOver = this._createView(demo.EAsset.OVERLAY_UNMUTE_OVER);
	this.pauseUp = this._createView(demo.EAsset.OVERLAY_PAUSE_UP);
	this.pauseOver = this._createView(demo.EAsset.OVERLAY_PAUSE_OVER);
	this.unpauseUp = this._createView(demo.EAsset.OVERLAY_UNPAUSE_UP);
	this.unpauseOver = this._createView(demo.EAsset.OVERLAY_UNPAUSE_OVER);
	this.background = this._createView(demo.EAsset.BACKGROUND);
	this.buttonUp = nme.installer.Assets.getBitmapData("assets/ButtonUp.png");
	this.buttonOver = nme.installer.Assets.getBitmapData("assets/ButtonOver.png");
	this.sphere = nme.installer.Assets.getBitmapData("assets/Sphere.png");
	this.font = nme.installer.Assets.getFont("assets/fonts/orbitron.ttf");
}
demo.AssetManager.prototype._createView = function(type) {
	var l_sprite = new jeash.display.Sprite();
	var l_bitmap = new jeash.display.Bitmap();
	l_sprite.addChild(l_bitmap);
	switch( (type)[1] ) {
	case 0:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/OverlayBackground.png"));
		break;
	case 1:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackUp.png"));
		break;
	case 2:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackOver.png"));
		break;
	case 3:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/MuteUp.png"));
		break;
	case 4:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/MuteOver.png"));
		break;
	case 5:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnmuteUp.png"));
		break;
	case 6:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnmuteOver.png"));
		break;
	case 7:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/PauseUp.png"));
		break;
	case 8:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/PauseOver.png"));
		break;
	case 9:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnpauseUp.png"));
		break;
	case 10:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/overlay/buttons/UnpauseOver.png"));
		break;
	case 11:
		l_bitmap.jeashSetBitmapData(nme.installer.Assets.getBitmapData("assets/scenes/Background.png"));
		break;
	}
	return new awe6.core.drivers.js.View(this._kernel,l_sprite);
}
demo.AssetManager.prototype.__class__ = demo.AssetManager;
demo.EAsset = { __ename__ : ["demo","EAsset"], __constructs__ : ["OVERLAY_BACKGROUND","OVERLAY_BACK_UP","OVERLAY_BACK_OVER","OVERLAY_MUTE_UP","OVERLAY_MUTE_OVER","OVERLAY_UNMUTE_UP","OVERLAY_UNMUTE_OVER","OVERLAY_PAUSE_UP","OVERLAY_PAUSE_OVER","OVERLAY_UNPAUSE_UP","OVERLAY_UNPAUSE_OVER","BACKGROUND"] }
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
if(!jeash.geom) jeash.geom = {}
jeash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if( in_a === $_ ) return;
	this.a = in_a == null?1.0:in_a;
	this.b = in_b == null?0.0:in_b;
	this.c = in_c == null?0.0:in_c;
	this.d = in_d == null?1.0:in_d;
	this.tx = in_tx == null?0.0:in_tx;
	this.ty = in_ty == null?0.0:in_ty;
}
jeash.geom.Matrix.__name__ = ["jeash","geom","Matrix"];
jeash.geom.Matrix.prototype.a = null;
jeash.geom.Matrix.prototype.b = null;
jeash.geom.Matrix.prototype.c = null;
jeash.geom.Matrix.prototype.d = null;
jeash.geom.Matrix.prototype.tx = null;
jeash.geom.Matrix.prototype.ty = null;
jeash.geom.Matrix.prototype.clone = function() {
	return new jeash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
}
jeash.geom.Matrix.prototype.createGradientBox = function(in_width,in_height,rotation,in_tx,in_ty) {
	this.a = in_width / 1638.4;
	this.d = in_height / 1638.4;
	if(rotation != null && rotation != 0.0) {
		var cos = Math.cos(rotation);
		var sin = Math.sin(rotation);
		this.b = sin * this.d;
		this.c = -sin * this.a;
		this.a *= cos;
		this.d *= cos;
	} else this.b = this.c = 0;
	this.tx = in_tx != null?in_tx + in_width / 2:in_width / 2;
	this.ty = in_ty != null?in_ty + in_height / 2:in_height / 2;
}
jeash.geom.Matrix.prototype.setRotation = function(inTheta,inScale) {
	var scale = inScale == null?1.0:inScale;
	this.a = Math.cos(inTheta) * scale;
	this.c = Math.sin(inTheta) * scale;
	this.b = -this.c;
	this.d = this.a;
}
jeash.geom.Matrix.prototype.invert = function() {
	var norm = this.a * this.d - this.b * this.c;
	if(norm == 0) {
		this.a = this.b = this.c = this.d = 0;
		this.tx = -this.tx;
		this.ty = -this.ty;
	} else {
		norm = 1.0 / norm;
		var a1 = this.d * norm;
		this.d = this.a * norm;
		this.a = a1;
		this.b *= -norm;
		this.c *= -norm;
		var tx1 = -this.a * this.tx - this.c * this.ty;
		this.ty = -this.b * this.tx - this.d * this.ty;
		this.tx = tx1;
	}
	return this;
}
jeash.geom.Matrix.prototype.transformPoint = function(inPos) {
	return new jeash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
}
jeash.geom.Matrix.prototype.translate = function(inDX,inDY) {
	this.tx += inDX;
	this.ty += inDY;
}
jeash.geom.Matrix.prototype.rotate = function(inTheta) {
	var cos = Math.cos(inTheta);
	var sin = Math.sin(inTheta);
	var a1 = this.a * cos - this.b * sin;
	this.b = this.a * sin + this.b * cos;
	this.a = a1;
	var c1 = this.c * cos - this.d * sin;
	this.d = this.c * sin + this.d * cos;
	this.c = c1;
	var tx1 = this.tx * cos - this.ty * sin;
	this.ty = this.tx * sin + this.ty * cos;
	this.tx = tx1;
}
jeash.geom.Matrix.prototype.scale = function(inSX,inSY) {
	this.a *= inSX;
	this.b *= inSY;
	this.c *= inSX;
	this.d *= inSY;
	this.tx *= inSX;
	this.ty *= inSY;
}
jeash.geom.Matrix.prototype.concat = function(m) {
	var a1 = this.a * m.a + this.b * m.c;
	this.b = this.a * m.b + this.b * m.d;
	this.a = a1;
	var c1 = this.c * m.a + this.d * m.c;
	this.d = this.c * m.b + this.d * m.d;
	this.c = c1;
	var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
	this.ty = this.tx * m.b + this.ty * m.d + m.ty;
	this.tx = tx1;
}
jeash.geom.Matrix.prototype.mult = function(m) {
	var result = new jeash.geom.Matrix();
	result.a = this.a * m.a + this.b * m.c;
	result.b = this.a * m.b + this.b * m.d;
	result.c = this.c * m.a + this.d * m.c;
	result.d = this.c * m.b + this.d * m.d;
	result.tx = this.tx * m.a + this.ty * m.c + m.tx;
	result.ty = this.tx * m.b + this.ty * m.d + m.ty;
	return result;
}
jeash.geom.Matrix.prototype.identity = function() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
}
jeash.geom.Matrix.prototype.toMozString = function() {
	return "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + "px, " + this.ty.toFixed(4) + "px)";
}
jeash.geom.Matrix.prototype.toString = function() {
	return "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + ", " + this.ty.toFixed(4) + ")";
}
jeash.geom.Matrix.prototype.__class__ = jeash.geom.Matrix;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
if(typeof nme=='undefined') nme = {}
if(!nme.installer) nme.installer = {}
nme.installer.Assets = function() { }
nme.installer.Assets.__name__ = ["nme","installer","Assets"];
nme.installer.Assets.getBitmapData = function(id) {
	switch(id) {
	case "assets/ButtonOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/ButtonOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/ButtonUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/ButtonUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/BackOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/BackOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/BackUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/BackUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/ExitOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/ExitOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/ExitUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/ExitUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/MuteOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/MuteOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/MuteUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/MuteUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/PauseOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/PauseOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/PauseUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/PauseUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/UnmuteOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/UnmuteOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/UnmuteUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/UnmuteUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/UnpauseOver.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/UnpauseOver.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/buttons/UnpauseUp.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/buttons/UnpauseUp.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/overlay/OverlayBackground.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/overlay/OverlayBackground.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/scenes/Background.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/scenes/Background.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	case "assets/Sphere.png":
		return ((function($this) {
			var $r;
			var $t = ApplicationMain.loaders.get("assets/Sphere.png").contentLoaderInfo.content;
			if(Std["is"]($t,jeash.display.Bitmap)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).bitmapData;
	}
	return null;
}
nme.installer.Assets.getBytes = function(id) {
	switch(id) {
	}
	return null;
}
nme.installer.Assets.getFont = function(id) {
	switch(id) {
	case "assets/fonts/orbitron.ttf":
		var font = (function($this) {
			var $r;
			var $t = new NME_assets_fonts_orbitron_ttf();
			if(Std["is"]($t,jeash.text.Font)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		font.jeashSetFontName("assets_fonts_orbitron_ttf");
		return font;
	}
	return null;
}
nme.installer.Assets.getSound = function(id) {
	switch(id) {
	case "assets/audio/ButtonDown.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/ButtonDown.mp3"));
	case "assets/audio/ButtonDown.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/ButtonDown.ogg"));
	case "assets/audio/ButtonOver.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/ButtonOver.mp3"));
	case "assets/audio/ButtonOver.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/ButtonOver.ogg"));
	case "assets/audio/MusicGame.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/MusicGame.mp3"));
	case "assets/audio/MusicGame.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/MusicGame.ogg"));
	case "assets/audio/MusicMenu.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/MusicMenu.mp3"));
	case "assets/audio/MusicMenu.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/MusicMenu.ogg"));
	case "assets/audio/Sfx1.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx1.mp3"));
	case "assets/audio/Sfx1.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx1.ogg"));
	case "assets/audio/Sfx2.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx2.mp3"));
	case "assets/audio/Sfx2.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx2.ogg"));
	case "assets/audio/Sfx3.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx3.mp3"));
	case "assets/audio/Sfx3.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx3.ogg"));
	case "assets/audio/Sfx4.mp3":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx4.mp3"));
	case "assets/audio/Sfx4.ogg":
		return new jeash.media.Sound(new jeash.net.URLRequest("assets/audio/Sfx4.ogg"));
	}
	return null;
}
nme.installer.Assets.getText = function(id) {
	switch(id) {
	case "assets/audio/ButtonDown.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/ButtonDown.aac").data;
	case "assets/audio/ButtonOver.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/ButtonOver.aac").data;
	case "assets/audio/MusicGame.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/MusicGame.aac").data;
	case "assets/audio/MusicMenu.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/MusicMenu.aac").data;
	case "assets/audio/Sfx1.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/Sfx1.aac").data;
	case "assets/audio/Sfx2.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/Sfx2.aac").data;
	case "assets/audio/Sfx3.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/Sfx3.aac").data;
	case "assets/audio/Sfx4.aac":
		return ApplicationMain.urlLoaders.get("assets/audio/Sfx4.aac").data;
	case "assets/fonts/orbitron.ttf.hash":
		return ApplicationMain.urlLoaders.get("assets/fonts/orbitron.ttf.hash").data;
	}
	return null;
}
nme.installer.Assets.prototype.__class__ = nme.installer.Assets;
awe6.core.drivers.js.Session = function(kernel,id) {
	if( kernel === $_ ) return;
	if(id == null) id = "";
	awe6.core.drivers.ASession.call(this,kernel,id);
}
awe6.core.drivers.js.Session.__name__ = ["awe6","core","drivers","js","Session"];
awe6.core.drivers.js.Session.__super__ = awe6.core.drivers.ASession;
for(var k in awe6.core.drivers.ASession.prototype ) awe6.core.drivers.js.Session.prototype[k] = awe6.core.drivers.ASession.prototype[k];
awe6.core.drivers.js.Session.prototype._nativeLoad = function() {
	this._savedData = { };
	if(js.Cookie.exists(this._kernel.factory.id)) this._savedData = this._tools.unserialize(js.Cookie.get(this._kernel.factory.id));
}
awe6.core.drivers.js.Session.prototype._nativeReset = function() {
	js.Cookie.remove(this._kernel.factory.id);
}
awe6.core.drivers.js.Session.prototype._nativeSave = function() {
	js.Cookie.set(this._kernel.factory.id,this._tools.serialize(this._savedData));
}
awe6.core.drivers.js.Session.prototype.__class__ = awe6.core.drivers.js.Session;
jeash.display.IGraphicsFill = function() { }
jeash.display.IGraphicsFill.__name__ = ["jeash","display","IGraphicsFill"];
jeash.display.IGraphicsFill.prototype.jeashGraphicsFillType = null;
jeash.display.IGraphicsFill.prototype.__class__ = jeash.display.IGraphicsFill;
jeash.display.IGraphicsData = function() { }
jeash.display.IGraphicsData.__name__ = ["jeash","display","IGraphicsData"];
jeash.display.IGraphicsData.prototype.jeashGraphicsDataType = null;
jeash.display.IGraphicsData.prototype.__class__ = jeash.display.IGraphicsData;
jeash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if( type === $_ ) return;
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.GRADIENT;
	this.jeashGraphicsFillType = jeash.display.GraphicsFillType.GRADIENT_FILL;
}
jeash.display.GraphicsGradientFill.__name__ = ["jeash","display","GraphicsGradientFill"];
jeash.display.GraphicsGradientFill.prototype.alphas = null;
jeash.display.GraphicsGradientFill.prototype.colors = null;
jeash.display.GraphicsGradientFill.prototype.focalPointRatio = null;
jeash.display.GraphicsGradientFill.prototype.interpolationMethod = null;
jeash.display.GraphicsGradientFill.prototype.matrix = null;
jeash.display.GraphicsGradientFill.prototype.ratios = null;
jeash.display.GraphicsGradientFill.prototype.spreadMethod = null;
jeash.display.GraphicsGradientFill.prototype.type = null;
jeash.display.GraphicsGradientFill.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsGradientFill.prototype.jeashGraphicsFillType = null;
jeash.display.GraphicsGradientFill.prototype.__class__ = jeash.display.GraphicsGradientFill;
jeash.display.GraphicsGradientFill.__interfaces__ = [jeash.display.IGraphicsFill,jeash.display.IGraphicsData];
jeash.display.StageAlign = { __ename__ : ["jeash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
jeash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
jeash.display.StageAlign.TOP_RIGHT.toString = $estr;
jeash.display.StageAlign.TOP_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
jeash.display.StageAlign.TOP_LEFT.toString = $estr;
jeash.display.StageAlign.TOP_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP = ["TOP",2];
jeash.display.StageAlign.TOP.toString = $estr;
jeash.display.StageAlign.TOP.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.RIGHT = ["RIGHT",3];
jeash.display.StageAlign.RIGHT.toString = $estr;
jeash.display.StageAlign.RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.LEFT = ["LEFT",4];
jeash.display.StageAlign.LEFT.toString = $estr;
jeash.display.StageAlign.LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
jeash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
jeash.display.StageAlign.BOTTOM_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
jeash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
jeash.display.StageAlign.BOTTOM_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM = ["BOTTOM",7];
jeash.display.StageAlign.BOTTOM.toString = $estr;
jeash.display.StageAlign.BOTTOM.__enum__ = jeash.display.StageAlign;
awe6.interfaces.IInputJoypad = function() { }
awe6.interfaces.IInputJoypad.__name__ = ["awe6","interfaces","IInputJoypad"];
awe6.interfaces.IInputJoypad.prototype.getIsButtonDown = null;
awe6.interfaces.IInputJoypad.prototype.getIsButtonPress = null;
awe6.interfaces.IInputJoypad.prototype.getIsButtonRelease = null;
awe6.interfaces.IInputJoypad.prototype.getButtonDownDuration = null;
awe6.interfaces.IInputJoypad.prototype.getButtonUpDuration = null;
awe6.interfaces.IInputJoypad.prototype.__class__ = awe6.interfaces.IInputJoypad;
awe6.core.InputJoypad = function(kernel,up,right,down,left,primary,secondary,upAlt,rightAlt,downAlt,leftAlt,primaryAlt,secondaryAlt) {
	if( kernel === $_ ) return;
	this._kernel = kernel;
	this._keyUp = up != null?up:awe6.interfaces.EKey.UP;
	this._keyRight = right != null?right:awe6.interfaces.EKey.RIGHT;
	this._keyDown = down != null?down:awe6.interfaces.EKey.DOWN;
	this._keyLeft = left != null?left:awe6.interfaces.EKey.LEFT;
	this._keyPrimary = primary != null?primary:awe6.interfaces.EKey.SPACE;
	this._keySecondary = secondary != null?secondary:awe6.interfaces.EKey.Z;
	this._keyUpAlt = upAlt != null?upAlt:awe6.interfaces.EKey.W;
	this._keyRightAlt = rightAlt != null?rightAlt:awe6.interfaces.EKey.D;
	this._keyDownAlt = downAlt != null?downAlt:awe6.interfaces.EKey.S;
	this._keyLeftAlt = leftAlt != null?leftAlt:awe6.interfaces.EKey.A;
	this._keyPrimaryAlt = primaryAlt != null?primaryAlt:awe6.interfaces.EKey.Q;
	this._keySecondaryAlt = secondaryAlt != null?secondaryAlt:awe6.interfaces.EKey.E;
}
awe6.core.InputJoypad.__name__ = ["awe6","core","InputJoypad"];
awe6.core.InputJoypad.prototype._kernel = null;
awe6.core.InputJoypad.prototype._keyUp = null;
awe6.core.InputJoypad.prototype._keyRight = null;
awe6.core.InputJoypad.prototype._keyDown = null;
awe6.core.InputJoypad.prototype._keyLeft = null;
awe6.core.InputJoypad.prototype._keyPrimary = null;
awe6.core.InputJoypad.prototype._keySecondary = null;
awe6.core.InputJoypad.prototype._keyUpAlt = null;
awe6.core.InputJoypad.prototype._keyRightAlt = null;
awe6.core.InputJoypad.prototype._keyDownAlt = null;
awe6.core.InputJoypad.prototype._keyLeftAlt = null;
awe6.core.InputJoypad.prototype._keyPrimaryAlt = null;
awe6.core.InputJoypad.prototype._keySecondaryAlt = null;
awe6.core.InputJoypad.prototype._check = function(type,f) {
	switch( (type)[1] ) {
	case 0:
		return this._check(awe6.interfaces.EJoypadButton.PRIMARY,f) || this._check(awe6.interfaces.EJoypadButton.SECONDARY,f);
	case 1:
		return f(this._keyUp) || f(this._keyUpAlt);
	case 2:
		return f(this._keyRight) || f(this._keyRightAlt);
	case 3:
		return f(this._keyDown) || f(this._keyDownAlt);
	case 4:
		return f(this._keyLeft) || f(this._keyLeftAlt);
	case 5:
		return f(this._keyPrimary) || f(this._keyPrimaryAlt);
	case 6:
		return f(this._keySecondary) || f(this._keySecondaryAlt);
	}
}
awe6.core.InputJoypad.prototype.getIsButtonDown = function(type) {
	return this._check(type,$closure(this._kernel.inputs.keyboard,"getIsKeyDown"));
}
awe6.core.InputJoypad.prototype.getIsButtonPress = function(type) {
	return this._check(type,$closure(this._kernel.inputs.keyboard,"getIsKeyPress"));
}
awe6.core.InputJoypad.prototype.getIsButtonRelease = function(type) {
	return this._check(type,$closure(this._kernel.inputs.keyboard,"getIsKeyRelease"));
}
awe6.core.InputJoypad.prototype.getButtonDownDuration = function(type,asTime,isPrevious) {
	if(isPrevious == null) isPrevious = false;
	if(asTime == null) asTime = true;
	var l_f = $closure(this._kernel.inputs.keyboard,"getKeyDownDuration");
	switch( (type)[1] ) {
	case 0:
		return Std["int"](Math.max(Math.max(l_f(this._keyPrimary,asTime,isPrevious),l_f(this._keyPrimaryAlt,asTime,isPrevious)),Math.max(l_f(this._keySecondary,asTime,isPrevious),l_f(this._keySecondaryAlt,asTime,isPrevious))));
	case 1:
		return Std["int"](Math.max(l_f(this._keyUp,asTime,isPrevious),l_f(this._keyUpAlt,asTime,isPrevious)));
	case 2:
		return Std["int"](Math.max(l_f(this._keyRight,asTime,isPrevious),l_f(this._keyRightAlt,asTime,isPrevious)));
	case 3:
		return Std["int"](Math.max(l_f(this._keyDown,asTime,isPrevious),l_f(this._keyDownAlt,asTime,isPrevious)));
	case 4:
		return Std["int"](Math.max(l_f(this._keyLeft,asTime,isPrevious),l_f(this._keyLeftAlt,asTime,isPrevious)));
	case 5:
		return Std["int"](Math.max(l_f(this._keyPrimary,asTime,isPrevious),l_f(this._keyPrimaryAlt,asTime,isPrevious)));
	case 6:
		return Std["int"](Math.max(l_f(this._keySecondary,asTime,isPrevious),l_f(this._keySecondaryAlt,asTime,isPrevious)));
	}
}
awe6.core.InputJoypad.prototype.getButtonUpDuration = function(type,asTime,isPrevious) {
	if(isPrevious == null) isPrevious = false;
	if(asTime == null) asTime = true;
	var l_f = $closure(this._kernel.inputs.keyboard,"getKeyUpDuration");
	switch( (type)[1] ) {
	case 0:
		return Std["int"](Math.min(Math.min(l_f(this._keyPrimary,asTime,isPrevious),l_f(this._keyPrimaryAlt,asTime,isPrevious)),Math.min(l_f(this._keySecondary,asTime,isPrevious),l_f(this._keySecondaryAlt,asTime,isPrevious))));
	case 1:
		return Std["int"](Math.min(l_f(this._keyUp,asTime,isPrevious),l_f(this._keyUpAlt,asTime,isPrevious)));
	case 2:
		return Std["int"](Math.min(l_f(this._keyRight,asTime,isPrevious),l_f(this._keyRightAlt,asTime,isPrevious)));
	case 3:
		return Std["int"](Math.min(l_f(this._keyDown,asTime,isPrevious),l_f(this._keyDownAlt,asTime,isPrevious)));
	case 4:
		return Std["int"](Math.min(l_f(this._keyLeft,asTime,isPrevious),l_f(this._keyLeftAlt,asTime,isPrevious)));
	case 5:
		return Std["int"](Math.min(l_f(this._keyPrimary,asTime,isPrevious),l_f(this._keyPrimaryAlt,asTime,isPrevious)));
	case 6:
		return Std["int"](Math.min(l_f(this._keySecondary,asTime,isPrevious),l_f(this._keySecondaryAlt,asTime,isPrevious)));
	}
}
awe6.core.InputJoypad.prototype.__class__ = awe6.core.InputJoypad;
awe6.core.InputJoypad.__interfaces__ = [awe6.interfaces.IInputJoypad];
jeash.events.Event = function(inType,inBubbles,inCancelable) {
	if( inType === $_ ) return;
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = jeash.events.EventPhase.AT_TARGET;
}
jeash.events.Event.__name__ = ["jeash","events","Event"];
jeash.events.Event.prototype.bubbles = null;
jeash.events.Event.prototype.cancelable = null;
jeash.events.Event.prototype.eventPhase = null;
jeash.events.Event.prototype.target = null;
jeash.events.Event.prototype.currentTarget = null;
jeash.events.Event.prototype.type = null;
jeash.events.Event.prototype.jeashIsCancelled = null;
jeash.events.Event.prototype.jeashIsCancelledNow = null;
jeash.events.Event.prototype.jeashSetPhase = function(phase) {
	this.eventPhase = phase;
}
jeash.events.Event.prototype.jeashGetIsCancelled = function() {
	return this.jeashIsCancelled;
}
jeash.events.Event.prototype.jeashGetIsCancelledNow = function() {
	return this.jeashIsCancelledNow;
}
jeash.events.Event.prototype.clone = function() {
	return new jeash.events.Event(this.type,this.bubbles,this.cancelable);
}
jeash.events.Event.prototype.stopImmediatePropagation = function() {
	this.jeashIsCancelledNow = this.jeashIsCancelled = true;
}
jeash.events.Event.prototype.stopPropagation = function() {
	this.jeashIsCancelled = true;
}
jeash.events.Event.prototype.toString = function() {
	return "Event";
}
jeash.events.Event.prototype.__class__ = jeash.events.Event;
jeash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	if( type === $_ ) return;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
}
jeash.events.KeyboardEvent.__name__ = ["jeash","events","KeyboardEvent"];
jeash.events.KeyboardEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.KeyboardEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.KeyboardEvent.prototype.keyCode = null;
jeash.events.KeyboardEvent.prototype.charCode = null;
jeash.events.KeyboardEvent.prototype.keyLocation = null;
jeash.events.KeyboardEvent.prototype.ctrlKey = null;
jeash.events.KeyboardEvent.prototype.altKey = null;
jeash.events.KeyboardEvent.prototype.shiftKey = null;
jeash.events.KeyboardEvent.prototype.__class__ = jeash.events.KeyboardEvent;
awe6.interfaces.EKey = { __ename__ : ["awe6","interfaces","EKey"], __constructs__ : ["NUM_LOCK","CLEAR","HELP","ALT","BACKSPACE","CAPS_LOCK","CONTROL","DELETE","DOWN","END","ENTER","ESCAPE","F1","F10","F11","F12","F13","F14","F15","F2","F3","F4","F5","F6","F7","F8","F9","HOME","INSERT","LEFT","NUMPAD_0","NUMPAD_1","NUMPAD_2","NUMPAD_3","NUMPAD_4","NUMPAD_5","NUMPAD_6","NUMPAD_7","NUMPAD_8","NUMPAD_9","NUMPAD_ADD","NUMPAD_DECIMAL","NUMPAD_DIVIDE","NUMPAD_ENTER","NUMPAD_MULTIPLY","NUMPAD_SUBTRACT","PAGE_DOWN","PAGE_UP","RIGHT","SHIFT","SPACE","TAB","UP","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","NUMBER_0","NUMBER_1","NUMBER_2","NUMBER_3","NUMBER_4","NUMBER_5","NUMBER_6","NUMBER_7","NUMBER_8","NUMBER_9","COLON","EQUALS","HYPHEN","SLASH","TILDE","SQUARELEFT","SQUARERIGHT","BACKSLASH","APOSTROPHE","TOPLEFT","SUB_TYPE"] }
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
awe6.interfaces.IInputMouse = function() { }
awe6.interfaces.IInputMouse.__name__ = ["awe6","interfaces","IInputMouse"];
awe6.interfaces.IInputMouse.prototype.x = null;
awe6.interfaces.IInputMouse.prototype.y = null;
awe6.interfaces.IInputMouse.prototype.relativeX = null;
awe6.interfaces.IInputMouse.prototype.relativeY = null;
awe6.interfaces.IInputMouse.prototype.relativeCentralisedX = null;
awe6.interfaces.IInputMouse.prototype.relativeCentralisedY = null;
awe6.interfaces.IInputMouse.prototype.isWithinBounds = null;
awe6.interfaces.IInputMouse.prototype.isMoving = null;
awe6.interfaces.IInputMouse.prototype.isVisible = null;
awe6.interfaces.IInputMouse.prototype.scroll = null;
awe6.interfaces.IInputMouse.prototype.cursorType = null;
awe6.interfaces.IInputMouse.prototype.getDeltaX = null;
awe6.interfaces.IInputMouse.prototype.getDeltaY = null;
awe6.interfaces.IInputMouse.prototype.getSpeed = null;
awe6.interfaces.IInputMouse.prototype.getDeltaScroll = null;
awe6.interfaces.IInputMouse.prototype.getStillDuration = null;
awe6.interfaces.IInputMouse.prototype.getIsButtonDoubleClick = null;
awe6.interfaces.IInputMouse.prototype.getIsButtonDrag = null;
awe6.interfaces.IInputMouse.prototype.getIsButtonDown = null;
awe6.interfaces.IInputMouse.prototype.getIsButtonPress = null;
awe6.interfaces.IInputMouse.prototype.getIsButtonRelease = null;
awe6.interfaces.IInputMouse.prototype.getButtonDownDuration = null;
awe6.interfaces.IInputMouse.prototype.getButtonUpDuration = null;
awe6.interfaces.IInputMouse.prototype.getButtonDragWidth = null;
awe6.interfaces.IInputMouse.prototype.getButtonDragHeight = null;
awe6.interfaces.IInputMouse.prototype.getButtonLastClickedX = null;
awe6.interfaces.IInputMouse.prototype.getButtonLastClickedY = null;
awe6.interfaces.IInputMouse.prototype.__class__ = awe6.interfaces.IInputMouse;
awe6.core.drivers.AInputMouse = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.drivers.AInputMouse.__name__ = ["awe6","core","drivers","AInputMouse"];
awe6.core.drivers.AInputMouse.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.drivers.AInputMouse.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.drivers.AInputMouse.prototype.x = null;
awe6.core.drivers.AInputMouse.prototype.y = null;
awe6.core.drivers.AInputMouse.prototype.relativeX = null;
awe6.core.drivers.AInputMouse.prototype.relativeY = null;
awe6.core.drivers.AInputMouse.prototype.relativeCentralisedX = null;
awe6.core.drivers.AInputMouse.prototype.relativeCentralisedY = null;
awe6.core.drivers.AInputMouse.prototype.isWithinBounds = null;
awe6.core.drivers.AInputMouse.prototype.isMoving = null;
awe6.core.drivers.AInputMouse.prototype.isVisible = null;
awe6.core.drivers.AInputMouse.prototype.scroll = null;
awe6.core.drivers.AInputMouse.prototype.cursorType = null;
awe6.core.drivers.AInputMouse.prototype._buffer = null;
awe6.core.drivers.AInputMouse.prototype._xPrev = null;
awe6.core.drivers.AInputMouse.prototype._yPrev = null;
awe6.core.drivers.AInputMouse.prototype._deltaX = null;
awe6.core.drivers.AInputMouse.prototype._deltaY = null;
awe6.core.drivers.AInputMouse.prototype._deltaTimePrev = null;
awe6.core.drivers.AInputMouse.prototype._deltaScroll = null;
awe6.core.drivers.AInputMouse.prototype._scrollPrev = null;
awe6.core.drivers.AInputMouse.prototype._stillUpdates = null;
awe6.core.drivers.AInputMouse.prototype._stillDuration = null;
awe6.core.drivers.AInputMouse.prototype._buttonLeft = null;
awe6.core.drivers.AInputMouse.prototype._buttonMiddle = null;
awe6.core.drivers.AInputMouse.prototype._buttonRight = null;
awe6.core.drivers.AInputMouse.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this._nativeInit();
	this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0;
	this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0;
	this.isMoving = false;
	this._buffer = [];
	this._getPosition();
	this.isMoving = false;
	this.__set_isVisible(true);
	this.scroll = 0;
	this.__set_cursorType(awe6.interfaces.EMouseCursor.ARROW);
	this._scrollPrev = 0;
	this._stillUpdates = 0;
	this._stillDuration = 0;
	this._reset();
}
awe6.core.drivers.AInputMouse.prototype._nativeInit = function() {
}
awe6.core.drivers.AInputMouse.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	this._deltaTimePrev = deltaTime;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	this._handleButton(awe6.interfaces.EMouseButton.LEFT,this._buffer.length > 0?this._buffer.shift():this._buttonLeft.isDown,deltaTime);
	this._handleButton(awe6.interfaces.EMouseButton.MIDDLE,this._isMiddleDown(),deltaTime);
	this._handleButton(awe6.interfaces.EMouseButton.RIGHT,this._isRightDown(),deltaTime);
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
		this._stillDuration += deltaTime;
	}
	this.relativeX = this.x / this._kernel.factory.width;
	this.relativeY = this.y / this._kernel.factory.height;
	this.relativeCentralisedX = (this.relativeX - .5) * 2;
	this.relativeCentralisedY = (this.relativeY - .5) * 2;
	this.isWithinBounds = this._isWithinBounds();
}
awe6.core.drivers.AInputMouse.prototype._isMiddleDown = function() {
	return false;
}
awe6.core.drivers.AInputMouse.prototype._isRightDown = function() {
	return false;
}
awe6.core.drivers.AInputMouse.prototype._isWithinBounds = function() {
	return true;
}
awe6.core.drivers.AInputMouse.prototype._getPosition = function() {
	this.x = 0;
	this.y = 0;
}
awe6.core.drivers.AInputMouse.prototype._handleButton = function(type,isDown,deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	var l_button = this._getButton(type);
	if(isDown) {
		if(!l_button.isDown) {
			l_button.timeUpPrevious = l_button.timeUp;
			l_button.updatesUpPrevious = l_button.updatesUp;
			l_button.timeUp = l_button.updatesUp = 0;
			l_button.clickX = this.x;
			l_button.clickY = this.y;
		}
		l_button.timeDown += deltaTime;
		l_button.updatesDown++;
		l_button.isDown = true;
	} else {
		if(l_button.isDown) {
			l_button.timeDownPrevious = l_button.timeDown;
			l_button.updatesDownPrevious = l_button.updatesDown;
			l_button.timeDown = l_button.updatesDown = 0;
		}
		l_button.timeUp += deltaTime;
		l_button.updatesUp++;
		l_button.isDown = false;
	}
}
awe6.core.drivers.AInputMouse.prototype._disposer = function() {
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.drivers.AInputMouse.prototype._reset = function(event) {
	this._buffer = [];
	this._buttonLeft = new awe6.core.drivers._AInputMouse._HelperButton(this._kernel);
	this._buttonMiddle = new awe6.core.drivers._AInputMouse._HelperButton(this._kernel);
	this._buttonRight = new awe6.core.drivers._AInputMouse._HelperButton(this._kernel);
}
awe6.core.drivers.AInputMouse.prototype._getButton = function(type) {
	if(type == null) type = awe6.interfaces.EMouseButton.LEFT;
	return (function($this) {
		var $r;
		switch( (type)[1] ) {
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
awe6.core.drivers.AInputMouse.prototype.getDeltaX = function(asTime) {
	if(asTime == null) asTime = true;
	var l_result = this._deltaX;
	if(asTime) l_result *= 1000 / this._deltaTimePrev;
	return Math.round(l_result);
}
awe6.core.drivers.AInputMouse.prototype.getDeltaY = function(asTime) {
	if(asTime == null) asTime = true;
	var l_result = this._deltaY;
	if(asTime) l_result *= 1000 / this._deltaTimePrev;
	return Math.round(l_result);
}
awe6.core.drivers.AInputMouse.prototype.getSpeed = function(asTime) {
	if(asTime == null) asTime = true;
	var l_dx = this.getDeltaX(asTime);
	var l_dy = this.getDeltaY(asTime);
	var l_result = Math.sqrt(l_dx * l_dx + l_dy * l_dy);
	return Math.round(l_result);
}
awe6.core.drivers.AInputMouse.prototype.getDeltaScroll = function(asTime) {
	if(asTime == null) asTime = true;
	var l_result = this._deltaScroll;
	if(asTime) l_result *= 1000 / this._deltaTimePrev;
	return Math.round(l_result);
}
awe6.core.drivers.AInputMouse.prototype.getIsButtonDoubleClick = function(type,delay) {
	if(delay == null) delay = 100;
	var l_button = this._getButton(type);
	return l_button.isDown?l_button.timeUpPrevious <= delay:false;
}
awe6.core.drivers.AInputMouse.prototype.getIsButtonDrag = function(type,delay) {
	if(delay == null) delay = 100;
	var l_button = this._getButton(type);
	return l_button.isDown?l_button.timeDown > delay:false;
}
awe6.core.drivers.AInputMouse.prototype.getStillDuration = function(asTime) {
	if(asTime == null) asTime = true;
	return asTime?this._stillDuration:this._stillUpdates;
}
awe6.core.drivers.AInputMouse.prototype.getIsButtonDown = function(type) {
	var l_button = this._getButton(type);
	return l_button.isDown;
}
awe6.core.drivers.AInputMouse.prototype.getIsButtonPress = function(type) {
	var l_button = this._getButton(type);
	return l_button.updatesDown == 1;
}
awe6.core.drivers.AInputMouse.prototype.getIsButtonRelease = function(type) {
	var l_button = this._getButton(type);
	return l_button.updatesUp == 1;
}
awe6.core.drivers.AInputMouse.prototype.getButtonDownDuration = function(type,asTime,isPrevious) {
	if(isPrevious == null) isPrevious = false;
	if(asTime == null) asTime = true;
	var l_button = this._getButton(type);
	if(isPrevious) return asTime?l_button.timeDownPrevious:l_button.updatesDownPrevious;
	return asTime?l_button.timeDown:l_button.updatesDown;
}
awe6.core.drivers.AInputMouse.prototype.getButtonUpDuration = function(type,asTime,isPrevious) {
	if(isPrevious == null) isPrevious = false;
	if(asTime == null) asTime = true;
	var l_button = this._getButton(type);
	if(isPrevious) return asTime?l_button.timeUpPrevious:l_button.updatesUpPrevious;
	return asTime?l_button.timeUp:l_button.updatesUp;
}
awe6.core.drivers.AInputMouse.prototype.getButtonDragWidth = function(type) {
	var l_button = this._getButton(type);
	return l_button.isDown?this.x - l_button.clickX:0;
}
awe6.core.drivers.AInputMouse.prototype.getButtonDragHeight = function(type) {
	var l_button = this._getButton(type);
	return l_button.isDown?this.y - l_button.clickY:0;
}
awe6.core.drivers.AInputMouse.prototype.getButtonLastClickedX = function(type) {
	var l_button = this._getButton(type);
	return l_button.clickX;
}
awe6.core.drivers.AInputMouse.prototype.getButtonLastClickedY = function(type) {
	var l_button = this._getButton(type);
	return l_button.clickY;
}
awe6.core.drivers.AInputMouse.prototype.__set_isVisible = function(value) {
	this.isVisible = value;
	return this.isVisible;
}
awe6.core.drivers.AInputMouse.prototype.__set_cursorType = function(value) {
	this.cursorType = value;
	return this.cursorType;
}
awe6.core.drivers.AInputMouse.prototype.__class__ = awe6.core.drivers.AInputMouse;
awe6.core.drivers.AInputMouse.__interfaces__ = [awe6.interfaces.IInputMouse];
if(!awe6.core.drivers._AInputMouse) awe6.core.drivers._AInputMouse = {}
awe6.core.drivers._AInputMouse._HelperButton = function(kernel) {
	if( kernel === $_ ) return;
	this.isDown = false;
	this.updatesDown = 0;
	this.updatesUp = kernel.tools.BIG_NUMBER;
	this.timeDown = 0;
	this.timeUp = kernel.tools.BIG_NUMBER;
	this.updatesDownPrevious = 0;
	this.updatesUpPrevious = kernel.tools.BIG_NUMBER;
	this.timeDownPrevious = 0;
	this.timeUpPrevious = kernel.tools.BIG_NUMBER;
}
awe6.core.drivers._AInputMouse._HelperButton.__name__ = ["awe6","core","drivers","_AInputMouse","_HelperButton"];
awe6.core.drivers._AInputMouse._HelperButton.prototype.isDown = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.updatesDown = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.updatesUp = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.timeDown = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.timeUp = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.updatesDownPrevious = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.updatesUpPrevious = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.timeDownPrevious = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.timeUpPrevious = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.clickX = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.clickY = null;
awe6.core.drivers._AInputMouse._HelperButton.prototype.__class__ = awe6.core.drivers._AInputMouse._HelperButton;
jeash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	if( in_font === $_ ) return;
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
}
jeash.text.TextFormat.__name__ = ["jeash","text","TextFormat"];
jeash.text.TextFormat.prototype.align = null;
jeash.text.TextFormat.prototype.blockIndent = null;
jeash.text.TextFormat.prototype.bold = null;
jeash.text.TextFormat.prototype.bullet = null;
jeash.text.TextFormat.prototype.color = null;
jeash.text.TextFormat.prototype.display = null;
jeash.text.TextFormat.prototype.font = null;
jeash.text.TextFormat.prototype.indent = null;
jeash.text.TextFormat.prototype.italic = null;
jeash.text.TextFormat.prototype.kerning = null;
jeash.text.TextFormat.prototype.leading = null;
jeash.text.TextFormat.prototype.leftMargin = null;
jeash.text.TextFormat.prototype.letterSpacing = null;
jeash.text.TextFormat.prototype.rightMargin = null;
jeash.text.TextFormat.prototype.size = null;
jeash.text.TextFormat.prototype.tabStops = null;
jeash.text.TextFormat.prototype.target = null;
jeash.text.TextFormat.prototype.underline = null;
jeash.text.TextFormat.prototype.url = null;
jeash.text.TextFormat.prototype.__class__ = jeash.text.TextFormat;
jeash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if( type === $_ ) return;
	if(inText == null) inText = "";
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
}
jeash.events.IOErrorEvent.__name__ = ["jeash","events","IOErrorEvent"];
jeash.events.IOErrorEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.IOErrorEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.IOErrorEvent.prototype.text = null;
jeash.events.IOErrorEvent.prototype.__class__ = jeash.events.IOErrorEvent;
jeash.display.CapsStyle = { __ename__ : ["jeash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
jeash.display.CapsStyle.NONE = ["NONE",0];
jeash.display.CapsStyle.NONE.toString = $estr;
jeash.display.CapsStyle.NONE.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.ROUND = ["ROUND",1];
jeash.display.CapsStyle.ROUND.toString = $estr;
jeash.display.CapsStyle.ROUND.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.SQUARE = ["SQUARE",2];
jeash.display.CapsStyle.SQUARE.toString = $estr;
jeash.display.CapsStyle.SQUARE.__enum__ = jeash.display.CapsStyle;
awe6.interfaces.ILogger = function() { }
awe6.interfaces.ILogger.__name__ = ["awe6","interfaces","ILogger"];
awe6.interfaces.ILogger.prototype.log = null;
awe6.interfaces.ILogger.prototype.__class__ = awe6.interfaces.ILogger;
awe6.interfaces.ETextAlign = { __ename__ : ["awe6","interfaces","ETextAlign"], __constructs__ : ["JUSTIFY","LEFT","CENTER","RIGHT"] }
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
jeash.display.JointStyle = { __ename__ : ["jeash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
jeash.display.JointStyle.MITER = ["MITER",0];
jeash.display.JointStyle.MITER.toString = $estr;
jeash.display.JointStyle.MITER.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.ROUND = ["ROUND",1];
jeash.display.JointStyle.ROUND.toString = $estr;
jeash.display.JointStyle.ROUND.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.BEVEL = ["BEVEL",2];
jeash.display.JointStyle.BEVEL.toString = $estr;
jeash.display.JointStyle.BEVEL.__enum__ = jeash.display.JointStyle;
haxe.Int32 = function() { }
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
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + x;
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
	return a * b | 0;
}
haxe.Int32.div = function(a,b) {
	return Std["int"](a / b);
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
haxe.Int32.prototype.__class__ = haxe.Int32;
jeash.display.DisplayObject = function(p) {
	if( p === $_ ) return;
	this.parent = null;
	jeash.events.EventDispatcher.call(this,null);
	this.jeashSetX(this.jeashSetY(0));
	this.jeashScaleX = this.jeashScaleY = 1.0;
	this.alpha = 1.0;
	this.jeashSetRotation(0.0);
	this.__swf_depth = 0;
	this.mMatrix = new jeash.geom.Matrix();
	this.mFullMatrix = new jeash.geom.Matrix();
	this.mMask = null;
	this.mMaskingObj = null;
	this.mBoundsRect = new jeash.geom.Rectangle();
	this.mGraphicsBounds = null;
	this.mMaskHandle = null;
	this.name = "DisplayObject " + jeash.display.DisplayObject.mNameID++;
	this.jeashSetVisible(true);
}
jeash.display.DisplayObject.__name__ = ["jeash","display","DisplayObject"];
jeash.display.DisplayObject.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.DisplayObject.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.DisplayObject.GetFlatGLMatrix = function(m) {
	return [m.a,m.b,0,m.tx,m.c,m.d,0,m.ty,0,0,1,0,0,0,-1,1];
}
jeash.display.DisplayObject.prototype.x = null;
jeash.display.DisplayObject.prototype.y = null;
jeash.display.DisplayObject.prototype.scaleX = null;
jeash.display.DisplayObject.prototype.scaleY = null;
jeash.display.DisplayObject.prototype.rotation = null;
jeash.display.DisplayObject.prototype.accessibilityProperties = null;
jeash.display.DisplayObject.prototype.alpha = null;
jeash.display.DisplayObject.prototype.name = null;
jeash.display.DisplayObject.prototype.cacheAsBitmap = null;
jeash.display.DisplayObject.prototype.width = null;
jeash.display.DisplayObject.prototype.height = null;
jeash.display.DisplayObject.prototype.visible = null;
jeash.display.DisplayObject.prototype.opaqueBackground = null;
jeash.display.DisplayObject.prototype.mouseX = null;
jeash.display.DisplayObject.prototype.mouseY = null;
jeash.display.DisplayObject.prototype.parent = null;
jeash.display.DisplayObject.prototype.stage = null;
jeash.display.DisplayObject.prototype.scrollRect = null;
jeash.display.DisplayObject.prototype.mask = null;
jeash.display.DisplayObject.prototype.filters = null;
jeash.display.DisplayObject.prototype.blendMode = null;
jeash.display.DisplayObject.prototype.loaderInfo = null;
jeash.display.DisplayObject.prototype.__swf_depth = null;
jeash.display.DisplayObject.prototype.transform = null;
jeash.display.DisplayObject.prototype.mBoundsDirty = null;
jeash.display.DisplayObject.prototype.mMtxChainDirty = null;
jeash.display.DisplayObject.prototype.mMtxDirty = null;
jeash.display.DisplayObject.prototype.mBoundsRect = null;
jeash.display.DisplayObject.prototype.mGraphicsBounds = null;
jeash.display.DisplayObject.prototype.mScale9Grid = null;
jeash.display.DisplayObject.prototype.mMatrix = null;
jeash.display.DisplayObject.prototype.mFullMatrix = null;
jeash.display.DisplayObject.prototype.jeashX = null;
jeash.display.DisplayObject.prototype.jeashY = null;
jeash.display.DisplayObject.prototype.jeashScaleX = null;
jeash.display.DisplayObject.prototype.jeashScaleY = null;
jeash.display.DisplayObject.prototype.jeashRotation = null;
jeash.display.DisplayObject.prototype.jeashVisible = null;
jeash.display.DisplayObject.prototype.mScrollRect = null;
jeash.display.DisplayObject.prototype.mOpaqueBackground = null;
jeash.display.DisplayObject.prototype.mMask = null;
jeash.display.DisplayObject.prototype.mMaskingObj = null;
jeash.display.DisplayObject.prototype.mMaskHandle = null;
jeash.display.DisplayObject.prototype.jeashFilters = null;
jeash.display.DisplayObject.prototype.toString = function() {
	return this.name;
}
jeash.display.DisplayObject.prototype.jeashDoAdded = function(inObj) {
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.ADDED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.ADDED_TO_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
}
jeash.display.DisplayObject.prototype.jeashDoRemoved = function(inObj) {
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.REMOVED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.REMOVED_FROM_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashRemoveSurface(gfx.jeashSurface);
}
jeash.display.DisplayObject.prototype.DoMouseEnter = function() {
}
jeash.display.DisplayObject.prototype.DoMouseLeave = function() {
}
jeash.display.DisplayObject.prototype.jeashSetParent = function(parent) {
	if(parent == this.parent) return;
	this.mMtxChainDirty = true;
	if(this.parent != null) {
		this.parent.__removeChild(this);
		this.parent.jeashInvalidateBounds();
	}
	if(parent != null) parent.jeashInvalidateBounds();
	if(this.parent == null && parent != null) {
		this.parent = parent;
		this.jeashDoAdded(this);
	} else if(this.parent != null && parent == null) {
		this.parent = parent;
		this.jeashDoRemoved(this);
	} else this.parent = parent;
}
jeash.display.DisplayObject.prototype.GetStage = function() {
	return jeash.Lib.jeashGetStage();
}
jeash.display.DisplayObject.prototype.AsContainer = function() {
	return null;
}
jeash.display.DisplayObject.prototype.GetScrollRect = function() {
	if(this.mScrollRect == null) return null;
	return this.mScrollRect.clone();
}
jeash.display.DisplayObject.prototype.jeashAsInteractiveObject = function() {
	return null;
}
jeash.display.DisplayObject.prototype.SetScrollRect = function(inRect) {
	this.mScrollRect = inRect;
	return this.GetScrollRect();
}
jeash.display.DisplayObject.prototype.hitTestObject = function(obj) {
	return false;
}
jeash.display.DisplayObject.prototype.hitTestPoint = function(x,y,shapeFlag) {
	var bounding_box = shapeFlag == null?true:!shapeFlag;
	return true;
}
jeash.display.DisplayObject.prototype.localToGlobal = function(point) {
	if(this.parent == null) return new jeash.geom.Point(this.jeashGetX() + point.x,this.jeashGetY() + point.y); else {
		point.x = point.x + this.jeashGetX();
		point.y = point.y + this.jeashGetY();
		return this.parent.localToGlobal(point);
	}
}
jeash.display.DisplayObject.prototype.jeashGetMouseX = function() {
	return this.globalToLocal(new jeash.geom.Point(this.GetStage().jeashGetMouseX(),0)).x;
}
jeash.display.DisplayObject.prototype.jeashSetMouseX = function(x) {
	return null;
}
jeash.display.DisplayObject.prototype.jeashGetMouseY = function() {
	return this.globalToLocal(new jeash.geom.Point(0,this.GetStage().jeashGetMouseY())).y;
}
jeash.display.DisplayObject.prototype.jeashSetMouseY = function(y) {
	return null;
}
jeash.display.DisplayObject.prototype.GetTransform = function() {
	return new jeash.geom.Transform(this);
}
jeash.display.DisplayObject.prototype.SetTransform = function(trans) {
	this.mMatrix = trans.GetMatrix().clone();
	return trans;
}
jeash.display.DisplayObject.prototype.getFullMatrix = function(childMatrix) {
	if(childMatrix == null) return this.mFullMatrix.clone(); else return childMatrix.mult(this.mFullMatrix);
}
jeash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	if(this.mBoundsDirty) this.BuildBounds();
	var mtx = this.mFullMatrix.clone();
	mtx.concat(targetCoordinateSpace.mFullMatrix.clone().invert());
	var rect = this.mBoundsRect.transform(mtx);
	return rect;
}
jeash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	return null;
}
jeash.display.DisplayObject.prototype.globalToLocal = function(inPos) {
	return this.mFullMatrix.clone().invert().transformPoint(inPos);
}
jeash.display.DisplayObject.prototype.GetNumChildren = function() {
	return 0;
}
jeash.display.DisplayObject.prototype.GetMatrix = function() {
	return this.mMatrix.clone();
}
jeash.display.DisplayObject.prototype.SetMatrix = function(inMatrix) {
	this.mMatrix = inMatrix.clone();
	return inMatrix;
}
jeash.display.DisplayObject.prototype.jeashGetGraphics = function() {
	return null;
}
jeash.display.DisplayObject.prototype.GetOpaqueBackground = function() {
	return this.mOpaqueBackground;
}
jeash.display.DisplayObject.prototype.SetOpaqueBackground = function(inBG) {
	this.mOpaqueBackground = inBG;
	return this.mOpaqueBackground;
}
jeash.display.DisplayObject.prototype.GetBackgroundRect = function() {
	if(this.mGraphicsBounds == null) {
		var gfx = this.jeashGetGraphics();
		if(gfx != null) this.mGraphicsBounds = gfx.getStandardExtent().clone();
	}
	return this.mGraphicsBounds;
}
jeash.display.DisplayObject.prototype.jeashInvalidateBounds = function() {
	this.mBoundsDirty = true;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
}
jeash.display.DisplayObject.prototype.jeashInvalidateMatrix = function(local) {
	if(local == null) local = false;
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
}
jeash.display.DisplayObject.prototype.jeashValidateMatrix = function() {
	if(this.mMtxDirty || this.mMtxChainDirty && this.parent != null) {
		if(this.mMtxChainDirty && this.parent != null) this.parent.jeashValidateMatrix();
		if(this.mMtxDirty) {
			this.mMatrix.b = this.mMatrix.c = this.mMatrix.tx = this.mMatrix.ty = 0;
			this.mMatrix.a = this.jeashScaleX;
			this.mMatrix.d = this.jeashScaleY;
			var rad = this.jeashRotation * Math.PI / 180.0;
			if(rad != 0.0) this.mMatrix.rotate(rad);
			this.mMatrix.tx = this.jeashX;
			this.mMatrix.ty = this.jeashY;
		}
		if(this.parent != null) this.mFullMatrix = this.parent.getFullMatrix(this.mMatrix); else this.mFullMatrix = this.mMatrix;
		this.mMtxDirty = this.mMtxChainDirty = false;
	}
}
jeash.display.DisplayObject.prototype.jeashRender = function(parentMatrix,inMask) {
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var m = this.mFullMatrix.clone();
		gfx.jeashRender(inMask,m);
		var extent = gfx.getStandardExtent();
		if(gfx.jeashShift) {
			m.tx = m.tx + extent.x * m.a + extent.y * m.c;
			m.ty = m.ty + extent.x * m.b + extent.y * m.d;
		}
		if(inMask != null) jeash.Lib.jeashDrawToSurface(gfx.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha); else {
			jeash.Lib.jeashSetSurfaceTransform(gfx.jeashSurface,m);
			jeash.Lib.jeashSetSurfaceOpacity(gfx.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
	}
}
jeash.display.DisplayObject.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	this.jeashRender(parentMatrix,canvas);
}
jeash.display.DisplayObject.prototype.MatrixUniforms = function() {
	return false;
}
jeash.display.DisplayObject.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(matrix == null) matrix = new jeash.geom.Matrix();
	this.jeashRenderContentsToCache(matrix,inSurface);
}
jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.jeashGetVisible()) return null;
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var local = this.globalToLocal(point);
		switch( (this.GetStage().jeashPointInPathMode)[1] ) {
		case 0:
			if(local.x < 0 || local.y < 0 || local.x * this.jeashGetScaleX() > this.jeashGetWidth() || local.y * this.jeashGetScaleY() > this.jeashGetHeight()) return null;
			if(gfx.jeashHitTest(local.x,local.y)) return this;
			break;
		case 1:
			if(local.x < 0 || local.y < 0 || local.x * this.jeashGetScaleX() > this.jeashGetWidth() || local.y * this.jeashGetScaleY() > this.jeashGetHeight()) return null;
			if(gfx.jeashHitTest(local.x * this.jeashGetScaleX(),local.y * this.jeashGetScaleY())) return this;
			break;
		}
	}
	return null;
}
jeash.display.DisplayObject.prototype.GetMask = function() {
	return this.mMask;
}
jeash.display.DisplayObject.prototype.SetMask = function(inMask) {
	if(this.mMask != null) this.mMask.mMaskingObj = null;
	this.mMask = inMask;
	if(this.mMask != null) this.mMask.mMaskingObj = this;
	return this.mMask;
}
jeash.display.DisplayObject.prototype.jeashSetFilters = function(filters) {
	if(filters == null) this.jeashFilters = null; else {
		this.jeashFilters = new Array();
		var _g = 0;
		while(_g < filters.length) {
			var filter = filters[_g];
			++_g;
			this.jeashFilters.push(filter.clone());
		}
	}
	return filters;
}
jeash.display.DisplayObject.prototype.jeashGetFilters = function() {
	if(this.jeashFilters == null) return [];
	var result = new Array();
	var _g = 0, _g1 = this.jeashFilters;
	while(_g < _g1.length) {
		var filter = _g1[_g];
		++_g;
		result.push(filter.clone());
	}
	return result;
}
jeash.display.DisplayObject.prototype.BuildBounds = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx == null) this.mBoundsRect = new jeash.geom.Rectangle(this.jeashGetX(),this.jeashGetY(),0,0); else {
		this.mBoundsRect = gfx.getStandardExtent().clone();
		gfx.mBoundsDirty = false;
		if(this.mScale9Grid != null) {
			this.mBoundsRect.width *= this.jeashGetScaleX();
			this.mBoundsRect.height *= this.jeashGetScaleY();
		}
	}
	this.mBoundsDirty = false;
}
jeash.display.DisplayObject.prototype.GetScreenBounds = function() {
	if(this.mBoundsDirty) this.BuildBounds();
	return this.mBoundsRect.clone();
}
jeash.display.DisplayObject.prototype.GetFocusObjects = function(outObjs) {
}
jeash.display.DisplayObject.prototype.__BlendIndex = function() {
	return this.blendMode == null?jeash.display.Graphics.BLEND_NORMAL:this.blendMode[1];
}
jeash.display.DisplayObject.prototype.jeashGetInteractiveObjectStack = function(outStack) {
	var io = this.jeashAsInteractiveObject();
	if(io != null) outStack.push(io);
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(outStack);
}
jeash.display.DisplayObject.prototype.jeashFireEvent = function(event) {
	var stack = [];
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(stack);
	var l = stack.length;
	if(l > 0) {
		event.jeashSetPhase(jeash.events.EventPhase.CAPTURING_PHASE);
		stack.reverse();
		var _g = 0;
		while(_g < stack.length) {
			var obj = stack[_g];
			++_g;
			event.currentTarget = obj;
			obj.dispatchEvent(event);
			if(event.jeashGetIsCancelled()) return;
		}
	}
	event.jeashSetPhase(jeash.events.EventPhase.AT_TARGET);
	event.currentTarget = this;
	this.dispatchEvent(event);
	if(event.jeashGetIsCancelled()) return;
	if(event.bubbles) {
		event.jeashSetPhase(jeash.events.EventPhase.BUBBLING_PHASE);
		stack.reverse();
		var _g = 0;
		while(_g < stack.length) {
			var obj = stack[_g];
			++_g;
			event.currentTarget = obj;
			obj.dispatchEvent(event);
			if(event.jeashGetIsCancelled()) return;
		}
	}
}
jeash.display.DisplayObject.prototype.jeashBroadcast = function(event) {
	this.dispatchEvent(event);
}
jeash.display.DisplayObject.prototype.jeashAddToStage = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashAppendSurface(gfx.jeashSurface);
}
jeash.display.DisplayObject.prototype.jeashInsertBefore = function(obj) {
	var gfx1 = this.jeashGetGraphics();
	var gfx2 = obj.jeashIsOnStage()?obj.jeashGetGraphics():null;
	if(gfx1 != null) {
		if(gfx2 != null) jeash.Lib.jeashAppendSurface(gfx1.jeashSurface,gfx2.jeashSurface); else jeash.Lib.jeashAppendSurface(gfx1.jeashSurface);
	}
}
jeash.display.DisplayObject.prototype.jeashIsOnStage = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) return jeash.Lib.jeashIsOnStage(gfx.jeashSurface);
	return false;
}
jeash.display.DisplayObject.prototype.jeashGetVisible = function() {
	return this.jeashVisible;
}
jeash.display.DisplayObject.prototype.jeashSetVisible = function(visible) {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		if(gfx.jeashSurface != null) {
			if(visible) jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,true); else jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,false);
		}
	}
	this.jeashVisible = visible;
	return visible;
}
jeash.display.DisplayObject.prototype.jeashGetHeight = function() {
	this.BuildBounds();
	return this.jeashScaleY * this.mBoundsRect.height;
}
jeash.display.DisplayObject.prototype.jeashSetHeight = function(inHeight) {
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var h = this.mBoundsRect.height;
	if(this.jeashScaleY * h != inHeight) {
		if(h <= 0) return 0;
		this.jeashScaleY = inHeight / h;
		this.jeashInvalidateMatrix(true);
	}
	return inHeight;
}
jeash.display.DisplayObject.prototype.jeashGetWidth = function() {
	if(this.mBoundsDirty) this.BuildBounds();
	return this.jeashScaleX * this.mBoundsRect.width;
}
jeash.display.DisplayObject.prototype.jeashSetWidth = function(inWidth) {
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var w = this.mBoundsRect.width;
	if(this.jeashScaleX * w != inWidth) {
		if(w <= 0) return 0;
		this.jeashScaleX = inWidth / w;
		this.jeashInvalidateMatrix(true);
	}
	return inWidth;
}
jeash.display.DisplayObject.prototype.jeashGetX = function() {
	return this.jeashX;
}
jeash.display.DisplayObject.prototype.jeashGetY = function() {
	return this.jeashY;
}
jeash.display.DisplayObject.prototype.jeashSetX = function(n) {
	this.jeashInvalidateMatrix(true);
	this.jeashX = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	return n;
}
jeash.display.DisplayObject.prototype.jeashSetY = function(n) {
	this.jeashInvalidateMatrix(true);
	this.jeashY = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	return n;
}
jeash.display.DisplayObject.prototype.jeashGetScaleX = function() {
	return this.jeashScaleX;
}
jeash.display.DisplayObject.prototype.jeashGetScaleY = function() {
	return this.jeashScaleY;
}
jeash.display.DisplayObject.prototype.jeashSetScaleX = function(inS) {
	if(this.jeashScaleX == inS) return inS;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleX = inS;
	return inS;
}
jeash.display.DisplayObject.prototype.jeashSetScaleY = function(inS) {
	if(this.jeashScaleY == inS) return inS;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleY = inS;
	return inS;
}
jeash.display.DisplayObject.prototype.jeashSetRotation = function(n) {
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	this.jeashRotation = n;
	return n;
}
jeash.display.DisplayObject.prototype.jeashGetRotation = function() {
	return this.jeashRotation;
}
jeash.display.DisplayObject.prototype.__class__ = jeash.display.DisplayObject;
jeash.display.DisplayObject.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.GraphicsPathWinding = { __ename__ : ["jeash","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
jeash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
jeash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
jeash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = jeash.display.GraphicsPathWinding;
jeash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
jeash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
jeash.display.GraphicsPathWinding.NON_ZERO.__enum__ = jeash.display.GraphicsPathWinding;
jeash.text.FontStyle = { __ename__ : ["jeash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
jeash.text.FontStyle.REGULAR = ["REGULAR",0];
jeash.text.FontStyle.REGULAR.toString = $estr;
jeash.text.FontStyle.REGULAR.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.ITALIC = ["ITALIC",1];
jeash.text.FontStyle.ITALIC.toString = $estr;
jeash.text.FontStyle.ITALIC.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
jeash.text.FontStyle.BOLD_ITALIC.toString = $estr;
jeash.text.FontStyle.BOLD_ITALIC.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.BOLD = ["BOLD",3];
jeash.text.FontStyle.BOLD.toString = $estr;
jeash.text.FontStyle.BOLD.__enum__ = jeash.text.FontStyle;
haxe.Resource = function() { }
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
haxe.Resource.prototype.__class__ = haxe.Resource;
jeash.display.GraphicsDataType = { __ename__ : ["jeash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
jeash.display.GraphicsDataType.STROKE = ["STROKE",0];
jeash.display.GraphicsDataType.STROKE.toString = $estr;
jeash.display.GraphicsDataType.STROKE.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.SOLID = ["SOLID",1];
jeash.display.GraphicsDataType.SOLID.toString = $estr;
jeash.display.GraphicsDataType.SOLID.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
jeash.display.GraphicsDataType.GRADIENT.toString = $estr;
jeash.display.GraphicsDataType.GRADIENT.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.PATH = ["PATH",3];
jeash.display.GraphicsDataType.PATH.toString = $estr;
jeash.display.GraphicsDataType.PATH.__enum__ = jeash.display.GraphicsDataType;
awe6.interfaces.IPosition = function() { }
awe6.interfaces.IPosition.__name__ = ["awe6","interfaces","IPosition"];
awe6.interfaces.IPosition.prototype.x = null;
awe6.interfaces.IPosition.prototype.y = null;
awe6.interfaces.IPosition.prototype.setPosition = null;
awe6.interfaces.IPosition.prototype.__class__ = awe6.interfaces.IPosition;
awe6.interfaces.IPriority = function() { }
awe6.interfaces.IPriority.__name__ = ["awe6","interfaces","IPriority"];
awe6.interfaces.IPriority.prototype.priority = null;
awe6.interfaces.IPriority.prototype.__class__ = awe6.interfaces.IPriority;
awe6.interfaces.IView = function() { }
awe6.interfaces.IView.__name__ = ["awe6","interfaces","IView"];
awe6.interfaces.IView.prototype.owner = null;
awe6.interfaces.IView.prototype.parent = null;
awe6.interfaces.IView.prototype.isVisible = null;
awe6.interfaces.IView.prototype.isInViewStack = null;
awe6.interfaces.IView.prototype.globalX = null;
awe6.interfaces.IView.prototype.globalY = null;
awe6.interfaces.IView.prototype.addChild = null;
awe6.interfaces.IView.prototype.removeChild = null;
awe6.interfaces.IView.prototype.clear = null;
awe6.interfaces.IView.prototype.remove = null;
awe6.interfaces.IView.prototype.__class__ = awe6.interfaces.IView;
awe6.interfaces.IView.__interfaces__ = [awe6.interfaces.IUpdateable,awe6.interfaces.IDisposable,awe6.interfaces.IPosition,awe6.interfaces.IPriority];
awe6.core.drivers.AView = function(kernel,context,priority,owner) {
	if( kernel === $_ ) return;
	if(priority == null) priority = 0;
	this.context = context;
	this.__set_priority(priority);
	this.owner = owner;
	awe6.core.Process.call(this,kernel);
}
awe6.core.drivers.AView.__name__ = ["awe6","core","drivers","AView"];
awe6.core.drivers.AView.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.drivers.AView.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.drivers.AView.prototype.context = null;
awe6.core.drivers.AView.prototype.priority = null;
awe6.core.drivers.AView.prototype.owner = null;
awe6.core.drivers.AView.prototype.parent = null;
awe6.core.drivers.AView.prototype.isVisible = null;
awe6.core.drivers.AView.prototype.isInViewStack = null;
awe6.core.drivers.AView.prototype.x = null;
awe6.core.drivers.AView.prototype.y = null;
awe6.core.drivers.AView.prototype.globalX = null;
awe6.core.drivers.AView.prototype.globalY = null;
awe6.core.drivers.AView.prototype._isDirty = null;
awe6.core.drivers.AView.prototype._children = null;
awe6.core.drivers.AView.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.__set_isVisible(true);
	this._isDirty = true;
	this._children = new Array();
	this.__set_x(this.__set_y(this.globalX = this.globalY = 0));
}
awe6.core.drivers.AView.prototype.addChild = function(child,priority) {
	if(this.isDisposed || child == null) return;
	var l_child = child;
	if(l_child.__get_parent() != this) {
		child.remove();
		this._children.push(l_child);
		l_child._setParent(this);
	}
	if(priority != null) child.__set_priority(priority);
	this._isDirty = true;
}
awe6.core.drivers.AView.prototype.removeChild = function(child) {
	if(this.isDisposed || child == null) return;
	var l_child = child;
	if(l_child.__get_parent() != this) return;
	this._children.remove(l_child);
	l_child._setParent(null);
	this._isDirty = true;
}
awe6.core.drivers.AView.prototype.remove = function() {
	if(this.__get_parent() != null) this.__get_parent().removeChild(this);
}
awe6.core.drivers.AView.prototype.clear = function() {
	var _g = 0, _g1 = this._children;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		this.removeChild(i);
	}
}
awe6.core.drivers.AView.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	var _g = 0, _g1 = this._children;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		if(!i.isActive) null; else {
			i._age += deltaTime;
			i._updates++;
			i._updater(deltaTime);
			null;
		}
	}
	if(this._isDirty) this._draw();
}
awe6.core.drivers.AView.prototype._disposer = function() {
	this.remove();
	this._nativeDisposer();
	this.clear();
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.drivers.AView.prototype._nativeDisposer = function() {
}
awe6.core.drivers.AView.prototype._draw = function() {
	if(this.isDisposed) return;
	this._children.sort($closure(this._tools,"sortByPriority"));
	this._nativeDraw();
	this._isDirty = false;
}
awe6.core.drivers.AView.prototype._nativeDraw = function() {
}
awe6.core.drivers.AView.prototype._setParent = function(parent) {
	this.parent = parent;
}
awe6.core.drivers.AView.prototype.__get_priority = function() {
	return this.priority;
}
awe6.core.drivers.AView.prototype.__set_priority = function(value) {
	if(value == this.__get_priority()) return this.__get_priority();
	this.priority = value;
	var l_parent = this.__get_parent();
	if(l_parent != null) l_parent._isDirty = true;
	return this.__get_priority();
}
awe6.core.drivers.AView.prototype.__set_isVisible = function(value) {
	if(value == this.isVisible) return this.isVisible;
	this.isVisible = value;
	var l_parent = this.__get_parent();
	if(l_parent != null) l_parent._draw();
	return this.isVisible;
}
awe6.core.drivers.AView.prototype.__get_parent = function() {
	return this.parent;
}
awe6.core.drivers.AView.prototype.__get_isInViewStack = function() {
	if(!this.isVisible) return false;
	if(this.owner == this._kernel) return true;
	if(this.__get_parent() == null) return false;
	return this.__get_parent().__get_isInViewStack();
}
awe6.core.drivers.AView.prototype.__set_x = function(value) {
	this.x = value;
	this.globalX = this.x + (this.__get_parent() != null?this.__get_parent().globalX:0);
	return this.x;
}
awe6.core.drivers.AView.prototype.__set_y = function(value) {
	this.y = value;
	this.globalY = this.y + (this.__get_parent() != null?this.__get_parent().globalY:0);
	return this.y;
}
awe6.core.drivers.AView.prototype.setPosition = function(x,y) {
	this.__set_x(x);
	this.__set_y(y);
}
awe6.core.drivers.AView.prototype.__class__ = awe6.core.drivers.AView;
awe6.core.drivers.AView.__interfaces__ = [awe6.interfaces.IView];
awe6.core.drivers.js.View = function(kernel,context,priority,owner) {
	if( kernel === $_ ) return;
	if(priority == null) priority = 0;
	awe6.core.drivers.AView.call(this,kernel,context,priority,owner);
}
awe6.core.drivers.js.View.__name__ = ["awe6","core","drivers","js","View"];
awe6.core.drivers.js.View.__super__ = awe6.core.drivers.AView;
for(var k in awe6.core.drivers.AView.prototype ) awe6.core.drivers.js.View.prototype[k] = awe6.core.drivers.AView.prototype[k];
awe6.core.drivers.js.View.prototype._container = null;
awe6.core.drivers.js.View.prototype._init = function() {
	if(this.context == null) this.context = new jeash.display.Sprite();
	awe6.core.drivers.AView.prototype._init.call(this);
}
awe6.core.drivers.js.View.prototype._nativeDisposer = function() {
	if(this.context != null && this.context.parent != null) try {
		this.context.parent.removeChild(this.context);
	} catch( error ) {
	}
}
awe6.core.drivers.js.View.prototype._nativeDraw = function() {
	if(this.__get_parent() != null) this.__get_parent().__set_x(this.__get_parent().x);
	if(this._container != null && this._container.parent != null) this._container.parent.removeChild(this._container);
	this._container = new jeash.display.Sprite();
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
awe6.core.drivers.js.View.prototype.__set_x = function(value) {
	this.context.jeashSetX(value);
	this._isDirty = true;
	return awe6.core.drivers.AView.prototype.__set_x.call(this,value);
}
awe6.core.drivers.js.View.prototype.__set_y = function(value) {
	this.context.jeashSetY(value);
	this._isDirty = true;
	return awe6.core.drivers.AView.prototype.__set_y.call(this,value);
}
awe6.core.drivers.js.View.prototype.__class__ = awe6.core.drivers.js.View;
if(!jeash.media) jeash.media = {}
jeash.media.SoundChannel = function(p) {
	if( p === $_ ) return;
	jeash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.jeashAudioCurrentLoop = 1;
	this.jeashAudioTotalLoops = 1;
}
jeash.media.SoundChannel.__name__ = ["jeash","media","SoundChannel"];
jeash.media.SoundChannel.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.media.SoundChannel.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.media.SoundChannel.jeashCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new jeash.media.SoundChannel();
	channel.jeashAudio = js.Lib.document.createElement("audio");
	channel.jeashRemoveRef = removeRef;
	channel.jeashAudio.addEventListener("ended",$closure(channel,"__onSoundChannelFinished"),false);
	channel.jeashAudio.addEventListener("seeked",$closure(channel,"__onSoundSeeked"),false);
	if(loops > 0) {
		channel.jeashAudioTotalLoops = loops;
		channel.jeashAudio.loop = true;
	}
	channel.jeashStartTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.jeashAudio.currentTime = channel.jeashStartTime;
			channel.jeashAudio.play();
			channel.jeashAudio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.jeashAudio.addEventListener("canplaythrough",onLoad,false);
	} else channel.jeashAudio.autoplay = true;
	channel.jeashAudio.src = src;
	return channel;
}
jeash.media.SoundChannel.prototype.ChannelId = null;
jeash.media.SoundChannel.prototype.leftPeak = null;
jeash.media.SoundChannel.prototype.position = null;
jeash.media.SoundChannel.prototype.rightPeak = null;
jeash.media.SoundChannel.prototype.soundTransform = null;
jeash.media.SoundChannel.prototype.jeashAudioCurrentLoop = null;
jeash.media.SoundChannel.prototype.jeashAudioTotalLoops = null;
jeash.media.SoundChannel.prototype.jeashRemoveRef = null;
jeash.media.SoundChannel.prototype.jeashStartTime = null;
jeash.media.SoundChannel.prototype.jeashAudio = null;
jeash.media.SoundChannel.prototype.stop = function() {
	if(this.jeashAudio != null) {
		this.jeashAudio.pause();
		this.jeashAudio = null;
		if(this.jeashRemoveRef != null) this.jeashRemoveRef();
	}
}
jeash.media.SoundChannel.prototype.__setSoundTransform = function(v) {
	return this.soundTransform = v;
}
jeash.media.SoundChannel.prototype.__onSoundSeeked = function(evt) {
	if(this.jeashAudioCurrentLoop >= this.jeashAudioTotalLoops) {
		this.jeashAudio.loop = false;
		this.stop();
	} else this.jeashAudioCurrentLoop++;
}
jeash.media.SoundChannel.prototype.__onSoundChannelFinished = function(evt) {
	if(this.jeashAudioCurrentLoop >= this.jeashAudioTotalLoops) {
		this.jeashAudio.removeEventListener("ended",$closure(this,"__onSoundChannelFinished"),false);
		this.jeashAudio.removeEventListener("seeked",$closure(this,"__onSoundSeeked"),false);
		this.jeashAudio = null;
		var evt1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
		evt1.target = this;
		this.dispatchEvent(evt1);
		if(this.jeashRemoveRef != null) this.jeashRemoveRef();
	} else {
		this.jeashAudio.currentTime = this.jeashStartTime;
		this.jeashAudio.play();
	}
}
jeash.media.SoundChannel.prototype.__class__ = jeash.media.SoundChannel;
awe6.interfaces.IAudioManager = function() { }
awe6.interfaces.IAudioManager.__name__ = ["awe6","interfaces","IAudioManager"];
awe6.interfaces.IAudioManager.prototype.isMute = null;
awe6.interfaces.IAudioManager.prototype.start = null;
awe6.interfaces.IAudioManager.prototype.stop = null;
awe6.interfaces.IAudioManager.prototype.transform = null;
awe6.interfaces.IAudioManager.prototype.isPlaying = null;
awe6.interfaces.IAudioManager.prototype.__class__ = awe6.interfaces.IAudioManager;
awe6.core.drivers.AAudioManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.drivers.AAudioManager.__name__ = ["awe6","core","drivers","AAudioManager"];
awe6.core.drivers.AAudioManager.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.drivers.AAudioManager.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.drivers.AAudioManager.prototype.isMute = null;
awe6.core.drivers.AAudioManager.prototype._sounds = null;
awe6.core.drivers.AAudioManager.prototype._packageId = null;
awe6.core.drivers.AAudioManager.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this._sounds = [];
	this._packageId = this._kernel.getConfig("settings.assets.packages.audio");
	if(this._packageId == null) this._packageId = this._kernel.getConfig("settings.assets.packages.default");
	if(this._packageId == null) this._packageId = "assets.audio";
	this.__set_isMute(false);
}
awe6.core.drivers.AAudioManager.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	var _g = 0, _g1 = this._sounds;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		if(i.isDisposed) this._sounds.remove(i);
	}
}
awe6.core.drivers.AAudioManager.prototype._disposer = function() {
	var _g = 0, _g1 = this._sounds;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		i.dispose();
	}
	this.__set_isMute(false);
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.drivers.AAudioManager.prototype.start = function(id,audioChannelType,loops,startTime,volume,pan,isIgnoredIfPlaying,onCompleteCallback) {
	if(isIgnoredIfPlaying == null) isIgnoredIfPlaying = false;
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	if(startTime == null) startTime = 0;
	if(loops == null) loops = 1;
	if(audioChannelType == null) audioChannelType = awe6.interfaces.EAudioChannel.DEFAULT;
	if(isIgnoredIfPlaying) {
		var l_existingSound = this._getSounds(id,audioChannelType);
		if(l_existingSound.length != 0) return;
	}
	this._sounds.push(this._nativeSoundFactory(id,audioChannelType,loops,startTime,volume,pan,onCompleteCallback));
}
awe6.core.drivers.AAudioManager.prototype._nativeSoundFactory = function(id,audioChannelType,loops,startTime,volume,pan,onCompleteCallback) {
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	if(startTime == null) startTime = 0;
	if(loops == null) loops = 1;
	return new awe6.core.drivers._AHelperSound(this._kernel,id,this._packageId,audioChannelType,loops,startTime,volume,pan,onCompleteCallback);
}
awe6.core.drivers.AAudioManager.prototype.stop = function(id,audioChannelType) {
	var l_sounds = this._getSounds(id,audioChannelType);
	var _g = 0;
	while(_g < l_sounds.length) {
		var i = l_sounds[_g];
		++_g;
		i.stop();
	}
}
awe6.core.drivers.AAudioManager.prototype.transform = function(id,audioChannelType,volume,pan,asRelative) {
	if(asRelative == null) asRelative = false;
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	var l_sounds = this._getSounds(id,audioChannelType);
	var _g = 0;
	while(_g < l_sounds.length) {
		var i = l_sounds[_g];
		++_g;
		i.transform(volume,pan,asRelative);
	}
}
awe6.core.drivers.AAudioManager.prototype.__set_isMute = function(isMute) {
	if(isMute == null) isMute = !this.isMute;
	this.isMute = isMute;
	this._nativeSetIsMute(isMute);
	return this.isMute;
}
awe6.core.drivers.AAudioManager.prototype._nativeSetIsMute = function(isMute) {
}
awe6.core.drivers.AAudioManager.prototype._getSounds = function(id,audioChannelType) {
	var l_result = [];
	if(id == null && audioChannelType == null) l_result = this._sounds.copy(); else if(audioChannelType == null) {
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.id == id) l_result.push(i);
		}
	} else if(id == null) {
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Type.enumEq(i.audioChannelType,audioChannelType)) l_result.push(i);
		}
	} else {
		var _g = 0, _g1 = this._sounds;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.id == id && Type.enumEq(i.audioChannelType,audioChannelType)) l_result.push(i);
		}
	}
	return l_result;
}
awe6.core.drivers.AAudioManager.prototype.isPlaying = function(id,audioChannelType) {
	var l_result = this._getSounds(id,audioChannelType);
	return l_result.length != 0;
}
awe6.core.drivers.AAudioManager.prototype.__class__ = awe6.core.drivers.AAudioManager;
awe6.core.drivers.AAudioManager.__interfaces__ = [awe6.interfaces.IAudioManager];
awe6.core.drivers._AHelperSound = function(kernel,id,packageId,audioChannelType,loops,startTime,volume,pan,onCompleteCallback) {
	if( kernel === $_ ) return;
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	if(startTime == null) startTime = 0;
	if(loops == null) loops = 1;
	this._kernel = kernel;
	this.isDisposed = false;
	this.id = id;
	this._packageId = packageId;
	this.audioChannelType = audioChannelType != null?audioChannelType:awe6.interfaces.EAudioChannel.DEFAULT;
	if(loops == -1) loops = this._kernel.tools.BIG_NUMBER;
	this._loops = loops;
	this._startTime = startTime;
	this._volume = volume;
	this._pan = pan;
	this._onCompleteCallback = onCompleteCallback;
	this._init();
}
awe6.core.drivers._AHelperSound.__name__ = ["awe6","core","drivers","_AHelperSound"];
awe6.core.drivers._AHelperSound.prototype.isDisposed = null;
awe6.core.drivers._AHelperSound.prototype.id = null;
awe6.core.drivers._AHelperSound.prototype.audioChannelType = null;
awe6.core.drivers._AHelperSound.prototype._packageId = null;
awe6.core.drivers._AHelperSound.prototype._loops = null;
awe6.core.drivers._AHelperSound.prototype._startTime = null;
awe6.core.drivers._AHelperSound.prototype._volume = null;
awe6.core.drivers._AHelperSound.prototype._pan = null;
awe6.core.drivers._AHelperSound.prototype._onCompleteCallback = null;
awe6.core.drivers._AHelperSound.prototype._kernel = null;
awe6.core.drivers._AHelperSound.prototype._init = function() {
	this._nativeInit();
}
awe6.core.drivers._AHelperSound.prototype._nativeInit = function() {
}
awe6.core.drivers._AHelperSound.prototype.transform = function(volume,pan,asRelative) {
	if(asRelative == null) asRelative = false;
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	if(this.isDisposed) return;
	this._volume = this._kernel.tools.limit(volume,0,1);
	this._pan = this._kernel.tools.limit(pan,-1,1);
	this._nativeTransform(asRelative);
}
awe6.core.drivers._AHelperSound.prototype._nativeTransform = function(asRelative) {
	if(asRelative == null) asRelative = false;
}
awe6.core.drivers._AHelperSound.prototype.stop = function() {
	this._nativeStop();
	this.dispose();
}
awe6.core.drivers._AHelperSound.prototype._nativeStop = function() {
}
awe6.core.drivers._AHelperSound.prototype.dispose = function() {
	if(this.isDisposed) return;
	this.isDisposed = true;
	this._nativeStop();
}
awe6.core.drivers._AHelperSound.prototype._nativeDisposer = function() {
}
awe6.core.drivers._AHelperSound.prototype.__class__ = awe6.core.drivers._AHelperSound;
awe6.core.drivers._AHelperSound.__interfaces__ = [awe6.interfaces.IDisposable];
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) {
	if( length === $_ ) return;
	this.length = length;
	this.b = b;
}
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
		var c = s.cca(i);
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
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v & 255;
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
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
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.compare = function(other) {
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
haxe.io.Bytes.prototype.readString = function(pos,len) {
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
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.toHex = function() {
	var s = new StringBuf();
	var chars = [];
	var str = "0123456789abcdef";
	var _g1 = 0, _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		chars.push(str.charCodeAt(i));
	}
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.b[i];
		s.b[s.b.length] = String.fromCharCode(chars[c >> 4]);
		s.b[s.b.length] = String.fromCharCode(chars[c & 15]);
	}
	return s.b.join("");
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
awe6.core.drivers.js.Profiler = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.drivers.AProfiler.call(this,kernel);
}
awe6.core.drivers.js.Profiler.__name__ = ["awe6","core","drivers","js","Profiler"];
awe6.core.drivers.js.Profiler.__super__ = awe6.core.drivers.AProfiler;
for(var k in awe6.core.drivers.AProfiler.prototype ) awe6.core.drivers.js.Profiler.prototype[k] = awe6.core.drivers.AProfiler.prototype[k];
awe6.core.drivers.js.Profiler.prototype.__class__ = awe6.core.drivers.js.Profiler;
jeash.display.GradientType = { __ename__ : ["jeash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
jeash.display.GradientType.RADIAL = ["RADIAL",0];
jeash.display.GradientType.RADIAL.toString = $estr;
jeash.display.GradientType.RADIAL.__enum__ = jeash.display.GradientType;
jeash.display.GradientType.LINEAR = ["LINEAR",1];
jeash.display.GradientType.LINEAR.toString = $estr;
jeash.display.GradientType.LINEAR.__enum__ = jeash.display.GradientType;
jeash.display.LineScaleMode = { __ename__ : ["jeash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
jeash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
jeash.display.LineScaleMode.HORIZONTAL.toString = $estr;
jeash.display.LineScaleMode.HORIZONTAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NONE = ["NONE",1];
jeash.display.LineScaleMode.NONE.toString = $estr;
jeash.display.LineScaleMode.NONE.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NORMAL = ["NORMAL",2];
jeash.display.LineScaleMode.NORMAL.toString = $estr;
jeash.display.LineScaleMode.NORMAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
jeash.display.LineScaleMode.VERTICAL.toString = $estr;
jeash.display.LineScaleMode.VERTICAL.__enum__ = jeash.display.LineScaleMode;
StringTools = function() { }
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
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
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
		ns += c.substr(0,l - sl);
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
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
awe6.interfaces.ETextStyle = { __ename__ : ["awe6","interfaces","ETextStyle"], __constructs__ : ["BUTTON","BODY","HEADLINE","SUBHEAD","SMALLPRINT","OVERSIZED","SUB_TYPE"] }
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
awe6.interfaces.IProgress = function() { }
awe6.interfaces.IProgress.__name__ = ["awe6","interfaces","IProgress"];
awe6.interfaces.IProgress.prototype.progress = null;
awe6.interfaces.IProgress.prototype.__class__ = awe6.interfaces.IProgress;
awe6.interfaces.ISceneTransition = function() { }
awe6.interfaces.ISceneTransition.__name__ = ["awe6","interfaces","ISceneTransition"];
awe6.interfaces.ISceneTransition.prototype.getDuration = null;
awe6.interfaces.ISceneTransition.prototype.__class__ = awe6.interfaces.ISceneTransition;
awe6.interfaces.ISceneTransition.__interfaces__ = [awe6.interfaces.IViewable,awe6.interfaces.IProgress,awe6.interfaces.IProcess];
awe6.core.drivers.ASceneTransition = function(kernel,duration) {
	if( kernel === $_ ) return;
	if(duration == null) duration = 500;
	this._duration = duration;
	this._context = new jeash.display.Sprite();
	awe6.core.Entity.call(this,kernel,"SCENE_TRANSITION",this._context);
}
awe6.core.drivers.ASceneTransition.__name__ = ["awe6","core","drivers","ASceneTransition"];
awe6.core.drivers.ASceneTransition.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) awe6.core.drivers.ASceneTransition.prototype[k] = awe6.core.Entity.prototype[k];
awe6.core.drivers.ASceneTransition.prototype.progress = null;
awe6.core.drivers.ASceneTransition.prototype._duration = null;
awe6.core.drivers.ASceneTransition.prototype._context = null;
awe6.core.drivers.ASceneTransition.prototype._init = function() {
	awe6.core.Entity.prototype._init.call(this);
}
awe6.core.drivers.ASceneTransition.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Entity.prototype._updater.call(this,deltaTime);
	if(this._age > this._duration) {
		if(this.isDisposed) null; else {
			this.isDisposed = true;
			this.__set_isActive(false);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this);
			this._disposer();
			null;
		}
	}
}
awe6.core.drivers.ASceneTransition.prototype.getDuration = function(asTime) {
	if(asTime == null) asTime = true;
	return asTime?this._duration:this._duration / (1000 / this._kernel.getFramerate());
}
awe6.core.drivers.ASceneTransition.prototype.__get_progress = function() {
	return this._tools.limit(this._age / this._duration,0,1);
}
awe6.core.drivers.ASceneTransition.prototype.__class__ = awe6.core.drivers.ASceneTransition;
awe6.core.drivers.ASceneTransition.__interfaces__ = [awe6.interfaces.ISceneTransition];
awe6.core.drivers.js.SceneTransition = function(kernel,duration) {
	if( kernel === $_ ) return;
	if(duration == null) duration = 500;
	awe6.core.drivers.ASceneTransition.call(this,kernel,duration);
}
awe6.core.drivers.js.SceneTransition.__name__ = ["awe6","core","drivers","js","SceneTransition"];
awe6.core.drivers.js.SceneTransition.__super__ = awe6.core.drivers.ASceneTransition;
for(var k in awe6.core.drivers.ASceneTransition.prototype ) awe6.core.drivers.js.SceneTransition.prototype[k] = awe6.core.drivers.ASceneTransition.prototype[k];
awe6.core.drivers.js.SceneTransition.prototype._init = function() {
	awe6.core.drivers.ASceneTransition.prototype._init.call(this);
	this._kernel.overlay.flash(this._duration,true);
}
awe6.core.drivers.js.SceneTransition.prototype.__class__ = awe6.core.drivers.js.SceneTransition;
jeash.display.StageQuality = function() { }
jeash.display.StageQuality.__name__ = ["jeash","display","StageQuality"];
jeash.display.StageQuality.prototype.__class__ = jeash.display.StageQuality;
awe6.interfaces.IInputKeyboard = function() { }
awe6.interfaces.IInputKeyboard.__name__ = ["awe6","interfaces","IInputKeyboard"];
awe6.interfaces.IInputKeyboard.prototype.getIsKeyDown = null;
awe6.interfaces.IInputKeyboard.prototype.getIsKeyPress = null;
awe6.interfaces.IInputKeyboard.prototype.getIsKeyRelease = null;
awe6.interfaces.IInputKeyboard.prototype.getKeyDownDuration = null;
awe6.interfaces.IInputKeyboard.prototype.getKeyUpDuration = null;
awe6.interfaces.IInputKeyboard.prototype.getKeyCode = null;
awe6.interfaces.IInputKeyboard.prototype.getKey = null;
awe6.interfaces.IInputKeyboard.prototype.__class__ = awe6.interfaces.IInputKeyboard;
awe6.core.drivers.AInputKeyboard = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.drivers.AInputKeyboard.__name__ = ["awe6","core","drivers","AInputKeyboard"];
awe6.core.drivers.AInputKeyboard.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.drivers.AInputKeyboard.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.drivers.AInputKeyboard.prototype._keys = null;
awe6.core.drivers.AInputKeyboard.prototype._buffer = null;
awe6.core.drivers.AInputKeyboard.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this._nativeInit();
	this._reset();
}
awe6.core.drivers.AInputKeyboard.prototype._nativeInit = function() {
}
awe6.core.drivers.AInputKeyboard.prototype._updater = function(timeInterval) {
	if(timeInterval == null) timeInterval = 0;
	awe6.core.Process.prototype._updater.call(this,timeInterval);
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
	this._buffer = l_nextBuffer.copy();
	var _g = 0, _g1 = this._keys;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		if(i.isDown) i.updatesDown++; else i.updatesUp++;
		if(i.isDown) i.timeDown += timeInterval; else i.timeUp += timeInterval;
	}
}
awe6.core.drivers.AInputKeyboard.prototype._disposer = function() {
	this._keys = null;
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.drivers.AInputKeyboard.prototype._addEvent = function(keyCodeValue,isDown) {
	this._buffer.push(new awe6.core.drivers._AInputKeyboard._HelperKeyEvent(keyCodeValue,isDown));
}
awe6.core.drivers.AInputKeyboard.prototype._onDown = function(keyCode) {
	var l_current = this._keys[keyCode];
	l_current.isUsed = true;
	l_current.isDown = true;
	l_current.timeUpPrevious = l_current.timeUp;
	l_current.updatesUpPrevious = l_current.updatesUp;
	l_current.updatesUp = 0;
	l_current.timeUp = 0;
}
awe6.core.drivers.AInputKeyboard.prototype._onUp = function(keyCode) {
	var l_current = this._keys[keyCode];
	l_current.isDown = false;
	l_current.timeDownPrevious = l_current.timeDown;
	l_current.updatesDownPrevious = l_current.updatesDown;
	l_current.updatesDown = 0;
	l_current.timeDown = 0;
}
awe6.core.drivers.AInputKeyboard.prototype._reset = function(event) {
	this._buffer = [];
	this._keys = [];
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		this._keys[i] = new awe6.core.drivers._AInputKeyboard._HelperKey(this._kernel);
	}
}
awe6.core.drivers.AInputKeyboard.prototype.getIsKeyDown = function(type) {
	if(type == null) return false;
	var l_keyCode = this.getKeyCode(type);
	return this._keys[l_keyCode].isDown;
}
awe6.core.drivers.AInputKeyboard.prototype.getIsKeyPress = function(type) {
	if(type == null) return false;
	var l_keyCode = this.getKeyCode(type);
	return this._keys[l_keyCode].updatesDown == 1;
}
awe6.core.drivers.AInputKeyboard.prototype.getIsKeyRelease = function(type) {
	if(type == null) return false;
	var l_keyCode = this.getKeyCode(type);
	return this._keys[l_keyCode].isUsed && this._keys[l_keyCode].updatesUp == 1;
}
awe6.core.drivers.AInputKeyboard.prototype.getKeyDownDuration = function(type,asTime,isPrevious) {
	if(isPrevious == null) isPrevious = false;
	if(asTime == null) asTime = true;
	if(type == null) return 0;
	var l_keyCode = this.getKeyCode(type);
	if(isPrevious) return asTime?this._keys[l_keyCode].timeDownPrevious:this._keys[l_keyCode].updatesDownPrevious;
	return asTime?this._keys[l_keyCode].timeDown:this._keys[l_keyCode].updatesDown;
}
awe6.core.drivers.AInputKeyboard.prototype.getKeyUpDuration = function(type,asTime,isPrevious) {
	if(isPrevious == null) isPrevious = false;
	if(asTime == null) asTime = true;
	if(type == null) return this._tools.BIG_NUMBER;
	var l_keyCode = this.getKeyCode(type);
	if(isPrevious) return asTime?this._keys[l_keyCode].timeUpPrevious:this._keys[l_keyCode].updatesUpPrevious;
	return asTime?this._keys[l_keyCode].timeUp:this._keys[l_keyCode].updatesUp;
}
awe6.core.drivers.AInputKeyboard.prototype.getKeyCode = function(type) {
	return (function($this) {
		var $r;
		var $e = (type);
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
			var value = $e[2];
			$r = Std["int"](value);
			break;
		}
		return $r;
	}(this));
}
awe6.core.drivers.AInputKeyboard.prototype.getKey = function(keyCode) {
	var l_constructors = Type.getEnumConstructs(awe6.interfaces.EKey);
	l_constructors.pop();
	var _g = 0;
	while(_g < l_constructors.length) {
		var i = l_constructors[_g];
		++_g;
		var l_key = Type.createEnum(awe6.interfaces.EKey,i);
		if(this.getKeyCode(l_key) == keyCode) return l_key;
	}
	return awe6.interfaces.EKey.SUB_TYPE(keyCode);
}
awe6.core.drivers.AInputKeyboard.prototype.__class__ = awe6.core.drivers.AInputKeyboard;
awe6.core.drivers.AInputKeyboard.__interfaces__ = [awe6.interfaces.IInputKeyboard];
awe6.core.drivers.js.InputKeyboard = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.drivers.AInputKeyboard.call(this,kernel);
}
awe6.core.drivers.js.InputKeyboard.__name__ = ["awe6","core","drivers","js","InputKeyboard"];
awe6.core.drivers.js.InputKeyboard.__super__ = awe6.core.drivers.AInputKeyboard;
for(var k in awe6.core.drivers.AInputKeyboard.prototype ) awe6.core.drivers.js.InputKeyboard.prototype[k] = awe6.core.drivers.AInputKeyboard.prototype[k];
awe6.core.drivers.js.InputKeyboard.prototype._stage = null;
awe6.core.drivers.js.InputKeyboard.prototype._nativeInit = function() {
	this._stage = jeash.Lib.jeashGetCurrent().GetStage();
	this._stage.addEventListener(jeash.events.KeyboardEvent.KEY_DOWN,$closure(this,"_onKeyDown"));
	this._stage.addEventListener(jeash.events.KeyboardEvent.KEY_UP,$closure(this,"_onKeyUp"));
	this._stage.addEventListener(jeash.events.Event.DEACTIVATE,$closure(this,"_reset"));
}
awe6.core.drivers.js.InputKeyboard.prototype._updater = function(timeInterval) {
	if(timeInterval == null) timeInterval = 0;
	this._stage.SetFocus(this._stage);
	awe6.core.drivers.AInputKeyboard.prototype._updater.call(this,timeInterval);
}
awe6.core.drivers.js.InputKeyboard.prototype._disposer = function() {
	this._stage.removeEventListener(jeash.events.KeyboardEvent.KEY_DOWN,$closure(this,"_onKeyDown"));
	this._stage.removeEventListener(jeash.events.KeyboardEvent.KEY_UP,$closure(this,"_onKeyUp"));
	this._stage.removeEventListener(jeash.events.Event.DEACTIVATE,$closure(this,"_reset"));
	awe6.core.drivers.AInputKeyboard.prototype._disposer.call(this);
}
awe6.core.drivers.js.InputKeyboard.prototype._onKeyDown = function(event) {
	if(!this.isActive) return;
	this._addEvent(event.keyCode,true);
	return;
}
awe6.core.drivers.js.InputKeyboard.prototype._onKeyUp = function(event) {
	if(!this.isActive) return;
	this._addEvent(event.keyCode,false);
	return;
}
awe6.core.drivers.js.InputKeyboard.prototype.__class__ = awe6.core.drivers.js.InputKeyboard;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
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
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
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
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
jeash.display.InteractiveObject = function(p) {
	if( p === $_ ) return;
	jeash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.jeashSetTabIndex(0);
	this.name = "InteractiveObject";
}
jeash.display.InteractiveObject.__name__ = ["jeash","display","InteractiveObject"];
jeash.display.InteractiveObject.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.InteractiveObject.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.InteractiveObject.prototype.doubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.focusRect = null;
jeash.display.InteractiveObject.prototype.mouseEnabled = null;
jeash.display.InteractiveObject.prototype.tabEnabled = null;
jeash.display.InteractiveObject.prototype.tabIndex = null;
jeash.display.InteractiveObject.prototype.jeashDoubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.jeashTabIndex = null;
jeash.display.InteractiveObject.prototype.toString = function() {
	return this.name;
}
jeash.display.InteractiveObject.prototype.OnKey = function(inKey) {
}
jeash.display.InteractiveObject.prototype.jeashAsInteractiveObject = function() {
	return this;
}
jeash.display.InteractiveObject.prototype.jeashGetTabIndex = function() {
	return this.jeashTabIndex;
}
jeash.display.InteractiveObject.prototype.jeashSetTabIndex = function(inIndex) {
	this.jeashTabIndex = inIndex;
	return inIndex;
}
jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.mouseEnabled) return null; else return jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.InteractiveObject.prototype.__class__ = jeash.display.InteractiveObject;
jeash.display.DisplayObjectContainer = function(p) {
	if( p === $_ ) return;
	this.jeashChildren = new Array();
	this.mLastSetupObjs = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	jeash.display.InteractiveObject.call(this);
	this.name = "DisplayObjectContainer " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.DisplayObjectContainer.__name__ = ["jeash","display","DisplayObjectContainer"];
jeash.display.DisplayObjectContainer.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.display.DisplayObjectContainer.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.display.DisplayObjectContainer.prototype.jeashChildren = null;
jeash.display.DisplayObjectContainer.prototype.mLastSetupObjs = null;
jeash.display.DisplayObjectContainer.prototype.numChildren = null;
jeash.display.DisplayObjectContainer.prototype.mouseChildren = null;
jeash.display.DisplayObjectContainer.prototype.tabChildren = null;
jeash.display.DisplayObjectContainer.prototype.AsContainer = function() {
	return this;
}
jeash.display.DisplayObjectContainer.prototype.jeashBroadcast = function(event) {
	var i = 0;
	if(this.jeashChildren.length > 0) while(true) {
		var child = this.jeashChildren[i];
		child.jeashBroadcast(event);
		if(i >= this.jeashChildren.length) break;
		if(this.jeashChildren[i] == child) {
			i++;
			if(i >= this.jeashChildren.length) break;
		}
	}
	this.dispatchEvent(event);
}
jeash.display.DisplayObjectContainer.prototype.BuildBounds = function() {
	jeash.display.InteractiveObject.prototype.BuildBounds.call(this);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) {
			var r = obj.getBounds(this);
			if(r.width != 0 || r.height != 0) {
				if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
			}
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashInvalidateMatrix = function(local) {
	if(local == null) local = false;
	if(this.mMtxChainDirty == false && this.mMtxDirty == false) {
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashInvalidateMatrix();
		}
	}
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
}
jeash.display.DisplayObjectContainer.prototype.jeashDoAdded = function(inObj) {
	jeash.display.InteractiveObject.prototype.jeashDoAdded.call(this,inObj);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.jeashDoAdded(inObj);
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashDoRemoved = function(inObj) {
	jeash.display.InteractiveObject.prototype.jeashDoRemoved.call(this,inObj);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.jeashDoRemoved(inObj);
	}
}
jeash.display.DisplayObjectContainer.prototype.GetBackgroundRect = function() {
	var r = jeash.display.InteractiveObject.prototype.GetBackgroundRect.call(this);
	if(r != null) r = r.clone();
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) {
			var o = obj.GetBackgroundRect();
			if(o != null) {
				var trans = o.transform(obj.mMatrix);
				if(r == null || r.width == 0 || r.height == 0) r = trans; else if(trans.width != 0 && trans.height != 0) r.extendBounds(trans);
			}
		}
	}
	return r;
}
jeash.display.DisplayObjectContainer.prototype.GetFocusObjects = function(outObjs) {
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.GetFocusObjects(outObjs);
	}
}
jeash.display.DisplayObjectContainer.prototype.GetNumChildren = function() {
	return this.jeashChildren.length;
}
jeash.display.DisplayObjectContainer.prototype.jeashRender = function(inParentMatrix,inMask) {
	if(!this.jeashGetVisible() || this.mMaskingObj != null) return;
	jeash.display.InteractiveObject.prototype.jeashRender.call(this,inParentMatrix,inMask);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible() && obj.mMaskingObj == null) obj.jeashRender(this.mFullMatrix,inMask);
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	jeash.display.InteractiveObject.prototype.jeashRenderContentsToCache.call(this,parentMatrix,canvas);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.jeashRenderContentsToCache(this.mMatrix,canvas);
	}
}
jeash.display.DisplayObjectContainer.prototype.WalkChildren = function(func) {
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		func(obj);
	}
}
jeash.display.DisplayObjectContainer.prototype.addChild = function(object) {
	if(object == this) throw "Adding to self";
	if(object.parent == this) {
		this.setChildIndex(object,this.jeashChildren.length - 1);
		return object;
	}
	if(this.jeashIsOnStage()) object.jeashAddToStage();
	this.jeashChildren.push(object);
	object.jeashSetParent(this);
	return object;
}
jeash.display.DisplayObjectContainer.prototype.jeashAddToStage = function() {
	jeash.display.InteractiveObject.prototype.jeashAddToStage.call(this);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashAddToStage();
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashInsertBefore = function(obj) {
	jeash.display.InteractiveObject.prototype.jeashInsertBefore.call(this,obj);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashAddToStage();
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashSetVisible = function(visible) {
	jeash.display.InteractiveObject.prototype.jeashSetVisible.call(this,visible);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashSetVisible(visible);
	}
	return visible;
}
jeash.display.DisplayObjectContainer.prototype.addChildAt = function(obj,index) {
	if(index > this.jeashChildren.length || index < 0) throw "Invalid index position " + index;
	if(obj.parent == this) {
		this.setChildIndex(obj,index);
		return;
	}
	if(index == this.jeashChildren.length) {
		this.jeashChildren.push(obj);
		if(this.jeashIsOnStage()) obj.jeashAddToStage();
	} else {
		if(this.jeashIsOnStage()) obj.jeashInsertBefore(this.jeashChildren[index]);
		this.jeashChildren.insert(index,obj);
	}
	obj.jeashSetParent(this);
}
jeash.display.DisplayObjectContainer.prototype.contains = function(child) {
	if(child == null) return false;
	if(this == child) return true;
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		if(c == child) return true;
	}
	return false;
}
jeash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	if(index >= 0 && index < this.jeashChildren.length) return this.jeashChildren[index];
	throw "getChildAt : index out of bounds " + index + "/" + this.jeashChildren.length;
	return null;
}
jeash.display.DisplayObjectContainer.prototype.getChildByName = function(inName) {
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i].name == inName) return this.jeashChildren[i];
	}
	return null;
}
jeash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child) return i;
	}
	return -1;
}
jeash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child) {
			child.jeashSetParent(null);
			return;
		}
	}
	throw "removeChild : none found?";
}
jeash.display.DisplayObjectContainer.prototype.removeChildAt = function(inI) {
	this.jeashChildren[inI].jeashSetParent(null);
	return this.jeashChildren[inI];
}
jeash.display.DisplayObjectContainer.prototype.__removeChild = function(child) {
	var i = this.getChildIndex(child);
	if(i >= 0) this.jeashChildren.splice(i,1);
}
jeash.display.DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	if(index > this.jeashChildren.length) throw "Invalid index position " + index;
	var s = null;
	var orig = this.getChildIndex(child);
	if(orig < 0) {
		var msg = "setChildIndex : object " + child.name + " not found.";
		if(child.parent == this) {
			var realindex = -1;
			var _g1 = 0, _g = this.jeashChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.jeashChildren[i] == child) {
					realindex = i;
					break;
				}
			}
			if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in jeashChildren array!";
		}
		throw msg;
	}
	if(index < orig) {
		var i = orig;
		while(i > index) {
			this.swapChildren(this.jeashChildren[i],this.jeashChildren[i - 1]);
			i--;
		}
	} else if(orig < index) {
		var i = orig;
		while(i < index) {
			this.swapChildren(this.jeashChildren[i],this.jeashChildren[i + 1]);
			i++;
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashSwapSurface = function(c1,c2) {
	if(this.jeashChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.jeashChildren.length;
	if(this.jeashChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.jeashChildren.length;
	var gfx1 = this.jeashChildren[c1].jeashGetGraphics();
	var gfx2 = this.jeashChildren[c2].jeashGetGraphics();
	if(gfx1 != null && gfx2 != null) jeash.Lib.jeashSwapSurface(gfx1.jeashSurface,gfx2.jeashSurface);
}
jeash.display.DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child1) c1 = i; else if(this.jeashChildren[i] == child2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = this.jeashChildren[c1];
		this.jeashChildren[c1] = this.jeashChildren[c2];
		this.jeashChildren[c2] = swap;
		swap = null;
		this.jeashSwapSurface(c1,c2);
	}
}
jeash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(child1,child2) {
	var swap = this.jeashChildren[child1];
	this.jeashChildren[child1] = this.jeashChildren[child2];
	this.jeashChildren[child2] = swap;
	swap = null;
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.jeashGetVisible()) return null;
	var l = this.jeashChildren.length - 1;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
		if(result != null) return result;
	}
	return jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	var result = new Array();
	this.jeashGetObjectsUnderPoint(point,result);
	return result;
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectsUnderPoint = function(point,stack) {
	var l = this.jeashChildren.length - 1;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
		if(result != null) stack.push(result);
	}
}
jeash.display.DisplayObjectContainer.prototype.__class__ = jeash.display.DisplayObjectContainer;
jeash.display.Sprite = function(p) {
	if( p === $_ ) return;
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.name = "Sprite " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics.jeashSurface.id = this.name;
}
jeash.display.Sprite.__name__ = ["jeash","display","Sprite"];
jeash.display.Sprite.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Sprite.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Sprite.prototype.jeashGraphics = null;
jeash.display.Sprite.prototype.graphics = null;
jeash.display.Sprite.prototype.useHandCursor = null;
jeash.display.Sprite.prototype.buttonMode = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOver = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOut = null;
jeash.display.Sprite.prototype.startDrag = function(lockCenter,bounds) {
	if(this.GetStage() != null) this.GetStage().jeashStartDrag(this,lockCenter,bounds);
}
jeash.display.Sprite.prototype.stopDrag = function() {
	if(this.GetStage() != null) this.GetStage().jeashStopDrag(this);
}
jeash.display.Sprite.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Sprite.prototype.jeashSetUseHandCursor = function(cursor) {
	if(cursor == this.useHandCursor) return cursor;
	if(this.jeashCursorCallbackOver != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
	if(this.jeashCursorCallbackOut != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	if(!cursor) if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default",""); else {
		this.jeashCursorCallbackOver = function(_) {
			if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer","");
		};
		this.jeashCursorCallbackOut = function(_) {
			if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
		};
		this.addEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
		this.addEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	}
	this.useHandCursor = cursor;
	return cursor;
}
jeash.display.Sprite.prototype.__class__ = jeash.display.Sprite;
jeash.display.IGraphicsPath = function() { }
jeash.display.IGraphicsPath.__name__ = ["jeash","display","IGraphicsPath"];
jeash.display.IGraphicsPath.prototype.__class__ = jeash.display.IGraphicsPath;
jeash.display.GraphicsPath = function(commands,data,winding) {
	if( commands === $_ ) return;
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.PATH;
}
jeash.display.GraphicsPath.__name__ = ["jeash","display","GraphicsPath"];
jeash.display.GraphicsPath.prototype.commands = null;
jeash.display.GraphicsPath.prototype.data = null;
jeash.display.GraphicsPath.prototype.winding = null;
jeash.display.GraphicsPath.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsPath.prototype.curveTo = function(controlX,controlY,anchorX,anchorY) {
	if(this.commands != null && this.data != null) {
		this.commands.push(3);
		this.data.push(anchorX);
		this.data.push(anchorY);
		this.data.push(controlX);
		this.data.push(controlY);
	}
}
jeash.display.GraphicsPath.prototype.lineTo = function(x,y) {
	if(this.commands != null && this.data != null) {
		this.commands.push(2);
		this.data.push(x);
		this.data.push(y);
	}
}
jeash.display.GraphicsPath.prototype.moveTo = function(x,y) {
	if(this.commands != null && this.data != null) {
		this.commands.push(1);
		this.data.push(x);
		this.data.push(y);
	}
}
jeash.display.GraphicsPath.prototype.__class__ = jeash.display.GraphicsPath;
jeash.display.GraphicsPath.__interfaces__ = [jeash.display.IGraphicsPath,jeash.display.IGraphicsData];
jeash.display.LoaderInfo = function(p) {
	if( p === $_ ) return;
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
}
jeash.display.LoaderInfo.__name__ = ["jeash","display","LoaderInfo"];
jeash.display.LoaderInfo.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.LoaderInfo.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.LoaderInfo.create = function(ldr) {
	var li = new jeash.display.LoaderInfo();
	li.loader = ldr;
	return li;
}
jeash.display.LoaderInfo.prototype.bytes = null;
jeash.display.LoaderInfo.prototype.bytesLoaded = null;
jeash.display.LoaderInfo.prototype.bytesTotal = null;
jeash.display.LoaderInfo.prototype.childAllowsParent = null;
jeash.display.LoaderInfo.prototype.content = null;
jeash.display.LoaderInfo.prototype.contentType = null;
jeash.display.LoaderInfo.prototype.frameRate = null;
jeash.display.LoaderInfo.prototype.height = null;
jeash.display.LoaderInfo.prototype.loader = null;
jeash.display.LoaderInfo.prototype.loaderURL = null;
jeash.display.LoaderInfo.prototype.parameters = null;
jeash.display.LoaderInfo.prototype.parentAllowsChild = null;
jeash.display.LoaderInfo.prototype.sameDomain = null;
jeash.display.LoaderInfo.prototype.sharedEvents = null;
jeash.display.LoaderInfo.prototype.url = null;
jeash.display.LoaderInfo.prototype.width = null;
jeash.display.LoaderInfo.prototype.__class__ = jeash.display.LoaderInfo;
jeash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if( bufferTime === $_ ) return;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
}
jeash.media.SoundLoaderContext.__name__ = ["jeash","media","SoundLoaderContext"];
jeash.media.SoundLoaderContext.prototype.bufferTime = null;
jeash.media.SoundLoaderContext.prototype.checkPolicyFile = null;
jeash.media.SoundLoaderContext.prototype.__class__ = jeash.media.SoundLoaderContext;
jeash.display.BlendMode = { __ename__ : ["jeash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
jeash.display.BlendMode.ADD = ["ADD",0];
jeash.display.BlendMode.ADD.toString = $estr;
jeash.display.BlendMode.ADD.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ALPHA = ["ALPHA",1];
jeash.display.BlendMode.ALPHA.toString = $estr;
jeash.display.BlendMode.ALPHA.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DARKEN = ["DARKEN",2];
jeash.display.BlendMode.DARKEN.toString = $estr;
jeash.display.BlendMode.DARKEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
jeash.display.BlendMode.DIFFERENCE.toString = $estr;
jeash.display.BlendMode.DIFFERENCE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ERASE = ["ERASE",4];
jeash.display.BlendMode.ERASE.toString = $estr;
jeash.display.BlendMode.ERASE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
jeash.display.BlendMode.HARDLIGHT.toString = $estr;
jeash.display.BlendMode.HARDLIGHT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.INVERT = ["INVERT",6];
jeash.display.BlendMode.INVERT.toString = $estr;
jeash.display.BlendMode.INVERT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LAYER = ["LAYER",7];
jeash.display.BlendMode.LAYER.toString = $estr;
jeash.display.BlendMode.LAYER.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
jeash.display.BlendMode.LIGHTEN.toString = $estr;
jeash.display.BlendMode.LIGHTEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
jeash.display.BlendMode.MULTIPLY.toString = $estr;
jeash.display.BlendMode.MULTIPLY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.NORMAL = ["NORMAL",10];
jeash.display.BlendMode.NORMAL.toString = $estr;
jeash.display.BlendMode.NORMAL.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.OVERLAY = ["OVERLAY",11];
jeash.display.BlendMode.OVERLAY.toString = $estr;
jeash.display.BlendMode.OVERLAY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SCREEN = ["SCREEN",12];
jeash.display.BlendMode.SCREEN.toString = $estr;
jeash.display.BlendMode.SCREEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
jeash.display.BlendMode.SUBTRACT.toString = $estr;
jeash.display.BlendMode.SUBTRACT.__enum__ = jeash.display.BlendMode;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
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
jeash.geom.Point = function(inX,inY) {
	if( inX === $_ ) return;
	this.x = inX == null?0.0:inX;
	this.y = inY == null?0.0:inY;
}
jeash.geom.Point.__name__ = ["jeash","geom","Point"];
jeash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
jeash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new jeash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
jeash.geom.Point.polar = function(len,angle) {
	return new jeash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
jeash.geom.Point.prototype.x = null;
jeash.geom.Point.prototype.y = null;
jeash.geom.Point.prototype.add = function(v) {
	return new jeash.geom.Point(v.x + this.x,v.y + this.y);
}
jeash.geom.Point.prototype.clone = function() {
	return new jeash.geom.Point(this.x,this.y);
}
jeash.geom.Point.prototype.equals = function(toCompare) {
	return toCompare.x == this.x && toCompare.y == this.y;
}
jeash.geom.Point.prototype.length = null;
jeash.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
jeash.geom.Point.prototype.normalize = function(thickness) {
	if(this.x == 0 && this.y == 0) this.x = thickness; else {
		var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
		this.x *= norm;
		this.y *= norm;
	}
}
jeash.geom.Point.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
jeash.geom.Point.prototype.subtract = function(v) {
	return new jeash.geom.Point(this.x - v.x,this.y - v.y);
}
jeash.geom.Point.prototype.__class__ = jeash.geom.Point;
jeash.Lib = function(title,width,height) {
	if( title === $_ ) return;
	this.mKilled = false;
	this.mRequestedWidth = width;
	this.mRequestedHeight = height;
	this.mResizePending = false;
	this.__scr = js.Lib.document.getElementById(title);
	if(this.__scr == null) throw "Element with id '" + title + "' not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	this.__scr.appendChild(jeash.Lib.jeashGetCanvas());
}
jeash.Lib.__name__ = ["jeash","Lib"];
jeash.Lib.mMe = null;
jeash.Lib.context = null;
jeash.Lib.current = null;
jeash.Lib.glContext = null;
jeash.Lib.canvas = null;
jeash.Lib.mStage = null;
jeash.Lib.mMainClassRoot = null;
jeash.Lib.mCurrent = null;
jeash.Lib.mRolling = null;
jeash.Lib.mDownObj = null;
jeash.Lib.mMouseX = null;
jeash.Lib.mMouseY = null;
jeash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg); else if(jeash.Lib.mMe.jeashTraceTextField != null) {
		var _g = jeash.Lib.mMe.jeashTraceTextField;
		_g.SetText(_g.GetText() + (arg + "\n"));
	}
}
jeash.Lib.getURL = function(request,target) {
	var document = js.Lib.document;
	var window = js.Lib.window;
	if(target == null || target == "_self") document.open(request.url); else switch(target) {
	case "_blank":
		window.open(request.url);
		break;
	case "_parent":
		window.parent.open(request.url);
		break;
	case "_top":
		window.top.open(request.url);
		break;
	}
}
jeash.Lib.jeashGetCanvas = function() {
	if(jeash.Lib.canvas == null) {
		if(document == null) throw "Document not loaded yet, cannot create root canvas!";
		jeash.Lib.canvas = document.createElement("canvas");
		jeash.Lib.canvas.id = "Root Surface";
		jeash.Lib.context = "2d";
		jeash.Lib.jeashBootstrap();
		jeash.Lib.starttime = haxe.Timer.stamp();
	}
	return jeash.Lib.canvas;
}
jeash.Lib.jeashGetCurrent = function() {
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mMainClassRoot == null) {
		jeash.Lib.mMainClassRoot = new jeash.display.MovieClip();
		jeash.Lib.mCurrent = jeash.Lib.mMainClassRoot;
		jeash.Lib.mCurrent.name = "Root MovieClip";
	}
	return jeash.Lib.mMainClassRoot;
}
jeash.Lib["as"] = function(v,c) {
	return Std["is"](v,c)?v:null;
}
jeash.Lib.starttime = null;
jeash.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - jeash.Lib.starttime) * 1000);
}
jeash.Lib.jeashGetStage = function() {
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mStage == null) {
		var width = jeash.Lib.jeashGetWidth();
		var height = jeash.Lib.jeashGetHeight();
		jeash.Lib.mStage = new jeash.display.Stage(width,height);
		jeash.Lib.mStage.addChild(jeash.Lib.jeashGetCurrent());
	}
	return jeash.Lib.mStage;
}
jeash.Lib.jeashAppendSurface = function(surface,before) {
	if(jeash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		try {
			surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) jeash.Lib.mMe.__scr.insertBefore(surface,before); else jeash.Lib.mMe.__scr.appendChild(surface);
	}
}
jeash.Lib.jeashSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(jeash.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c2++]); else jeash.Lib.mMe.__scr.appendChild(swap);
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c1++]); else jeash.Lib.mMe.__scr.appendChild(swap);
	}
}
jeash.Lib.jeashIsOnStage = function(surface) {
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface) return true;
	}
	return false;
}
jeash.Lib.jeashRemoveSurface = function(surface) {
	if(jeash.Lib.mMe.__scr != null) jeash.Lib.mMe.__scr.removeChild(surface);
}
jeash.Lib.jeashSetSurfaceTransform = function(surface,matrix) {
	surface.style.setProperty("-moz-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + "px, " + matrix.ty.toFixed(4) + "px)","");
	surface.style.setProperty("-moz-transform-origin","0 0","");
	surface.style.setProperty("-webkit-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-webkit-transform-origin","0 0","");
	surface.style.setProperty("-o-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-o-transform-origin","0 0","");
	surface.style.setProperty("-ms-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-ms-transform-origin","0 0","");
	surface.style.setProperty("-webkit-tap-highlight-color","rgba(0,0,0,0)","");
}
jeash.Lib.jeashSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
jeash.Lib.jeashSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
jeash.Lib.jeashSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
jeash.Lib.jeashSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
jeash.Lib.jeashAppendText = function(surface,container,text,wrap,isHtml) {
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
jeash.Lib.jeashSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
jeash.Lib.jeashSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
jeash.Lib.jeashSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
jeash.Lib.jeashCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
jeash.Lib.jeashDrawToSurface = function(surface,mask,matrix,alpha) {
	if(alpha == null) alpha = 1.0;
	var ctx = surface.getContext("2d");
	var maskCtx = mask.getContext("2d");
	maskCtx.globalCompositeOperation = "source-over";
	maskCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) maskCtx.drawImage(surface,matrix.tx,matrix.ty); else maskCtx.drawImage(surface,0,0);
	}
}
jeash.Lib.jeashDisableRightClick = function() {
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		jeash.Lib.trace("Disable right click not supported in this browser.");
	}
}
jeash.Lib.jeashEnableRightClick = function() {
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
	}
}
jeash.Lib.jeashEnableFullScreen = function() {
	if(jeash.Lib.mMe != null) {
		var origWidth = jeash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = jeash.Lib.mMe.__scr.style.getPropertyValue("height");
		jeash.Lib.mMe.__scr.style.setProperty("width","100%","");
		jeash.Lib.mMe.__scr.style.setProperty("height","100%","");
		jeash.Lib.jeashDisableFullScreen = function() {
			jeash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			jeash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
jeash.Lib.jeashDisableFullScreen = function() {
}
jeash.Lib.jeashFullScreenWidth = function() {
	var window = js.Lib.window;
	return window.innerWidth;
}
jeash.Lib.jeashFullScreenHeight = function() {
	var window = js.Lib.window;
	return window.innerHeight;
}
jeash.Lib.jeashSetCursor = function(hand) {
	if(jeash.Lib.mMe != null) {
		if(hand) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer",""); else jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
	}
}
jeash.Lib.jeashSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
jeash.Lib.jeashSetSurfaceId = function(surface,name) {
	surface.id = name;
}
jeash.Lib.Run = function(tgt,width,height) {
	jeash.Lib.mMe = new jeash.Lib(tgt.id,width,height);
	jeash.Lib.jeashGetCanvas().width = width;
	jeash.Lib.jeashGetCanvas().height = height;
	if(!StringTools.startsWith(jeash.Lib.context,"swf")) {
		var _g1 = 0, _g = tgt.attributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var attr = tgt.attributes.item(i);
			if(StringTools.startsWith(attr.name,"data-")) switch(attr.name) {
			case "data-" + "framerate":
				jeash.Lib.jeashGetStage().jeashSetFrameRate(Std.parseFloat(attr.value));
				break;
			default:
			}
		}
		var _g = 0, _g1 = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
		}
		var _g = 0, _g1 = ["keyup","keypress","keydown"];
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			var window = js.Lib.window;
			window.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
		}
		jeash.Lib.jeashGetStage().jeashSetBackgroundColour(tgt.style.backgroundColor != null && tgt.style.backgroundColor != ""?jeash.Lib.ParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
			return (function($this) {
				var $r;
				switch(pos) {
				case 0:
					$r = res | cur << 16;
					break;
				case 1:
					$r = res | cur << 8;
					break;
				case 2:
					$r = res | cur;
					break;
				}
				return $r;
			}(this));
		}):16777215);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().beginFill(jeash.Lib.jeashGetStage().jeashGetBackgroundColour());
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().drawRect(0,0,width,height);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().jeashSurface.id = "Root MovieClip";
		jeash.Lib.mMe.jeashTraceTextField = new jeash.text.TextField();
		jeash.Lib.mMe.jeashTraceTextField.jeashSetWidth(jeash.Lib.jeashGetStage().jeashGetStageWidth());
		jeash.Lib.mMe.jeashTraceTextField.SetWordWrap(true);
		jeash.Lib.jeashGetCurrent().addChild(jeash.Lib.mMe.jeashTraceTextField);
		jeash.Lib.jeashGetStage().jeashUpdateNextWake();
	}
	return jeash.Lib.mMe;
}
jeash.Lib.ParseColor = function(str,cb) {
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
jeash.Lib.jeashGetWidth = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientWidth > 0?tgt.clientWidth:500;
}
jeash.Lib.jeashGetHeight = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientHeight > 0?tgt.clientHeight:500;
}
jeash.Lib.jeashBootstrap = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	var lib = jeash.Lib.Run(tgt,jeash.Lib.jeashGetWidth(),jeash.Lib.jeashGetHeight());
	return lib;
}
jeash.Lib.prototype.mKilled = null;
jeash.Lib.prototype.mRequestedWidth = null;
jeash.Lib.prototype.mRequestedHeight = null;
jeash.Lib.prototype.mResizePending = null;
jeash.Lib.prototype.__scr = null;
jeash.Lib.prototype.mArgs = null;
jeash.Lib.prototype.jeashTraceTextField = null;
jeash.Lib.prototype.__class__ = jeash.Lib;
haxe.io.Eof = function(p) {
}
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype.toString = function() {
	return "Eof";
}
haxe.io.Eof.prototype.__class__ = haxe.io.Eof;
jeash.text.TextFieldAutoSize = function(p) {
}
jeash.text.TextFieldAutoSize.__name__ = ["jeash","text","TextFieldAutoSize"];
jeash.text.TextFieldAutoSize.prototype.__class__ = jeash.text.TextFieldAutoSize;
demo.Session = function(kernel,id) {
	if( kernel === $_ ) return;
	if(id == null) id = "";
	awe6.core.drivers.js.Session.call(this,kernel,id);
}
demo.Session.__name__ = ["demo","Session"];
demo.Session.__super__ = awe6.core.drivers.js.Session;
for(var k in awe6.core.drivers.js.Session.prototype ) demo.Session.prototype[k] = awe6.core.drivers.js.Session.prototype[k];
demo.Session.prototype.name = null;
demo.Session.prototype.highScore = null;
demo.Session.prototype.isWin = null;
demo.Session.prototype._init = function() {
	this._version = 1;
	awe6.core.drivers.js.Session.prototype._init.call(this);
}
demo.Session.prototype._getter = function() {
	awe6.core.drivers.js.Session.prototype._getter.call(this);
	this.name = this._data.name;
	this.highScore = this._data.highScore;
}
demo.Session.prototype._setter = function() {
	awe6.core.drivers.js.Session.prototype._setter.call(this);
	this._data.name = this.name;
	this._data.highScore = this.highScore;
}
demo.Session.prototype._resetter = function() {
	awe6.core.drivers.js.Session.prototype._resetter.call(this);
	this.name = "???";
	this.highScore = 0;
}
demo.Session.prototype.getPercentageComplete = function() {
	return this._tools.limit(Std["int"](100 * this.highScore / 1000),0,100);
}
demo.Session.prototype.__class__ = demo.Session;
jeash.display.IGraphicsStroke = function() { }
jeash.display.IGraphicsStroke.__name__ = ["jeash","display","IGraphicsStroke"];
jeash.display.IGraphicsStroke.prototype.__class__ = jeash.display.IGraphicsStroke;
jeash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if( thickness === $_ ) return;
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.STROKE;
}
jeash.display.GraphicsStroke.__name__ = ["jeash","display","GraphicsStroke"];
jeash.display.GraphicsStroke.prototype.caps = null;
jeash.display.GraphicsStroke.prototype.fill = null;
jeash.display.GraphicsStroke.prototype.joints = null;
jeash.display.GraphicsStroke.prototype.miterLimit = null;
jeash.display.GraphicsStroke.prototype.pixelHinting = null;
jeash.display.GraphicsStroke.prototype.scaleMode = null;
jeash.display.GraphicsStroke.prototype.thickness = null;
jeash.display.GraphicsStroke.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsStroke.prototype.__class__ = jeash.display.GraphicsStroke;
jeash.display.GraphicsStroke.__interfaces__ = [jeash.display.IGraphicsStroke,jeash.display.IGraphicsData];
jeash.display.Shape = function(p) {
	if( p === $_ ) return;
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObject.call(this);
	this.name = "Shape " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.Shape.__name__ = ["jeash","display","Shape"];
jeash.display.Shape.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Shape.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Shape.prototype.jeashGraphics = null;
jeash.display.Shape.prototype.graphics = null;
jeash.display.Shape.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Shape.prototype.jeashGetObjectUnderPoint = function(point) {
	return null;
}
jeash.display.Shape.prototype.__class__ = jeash.display.Shape;
if(!jeash.utils) jeash.utils = {}
jeash.utils.ByteArray = function(p) {
	if( p === $_ ) return;
	this.position = 0;
	this.data = [];
	this.TWOeN23 = Math.pow(2,-23);
	this.pow = Math.pow;
	this.LN2 = Math.log(2);
	this.abs = Math.abs;
	this.log = Math.log;
	this.floor = Math.floor;
	this.bigEndian = false;
}
jeash.utils.ByteArray.__name__ = ["jeash","utils","ByteArray"];
jeash.utils.ByteArray.prototype.data = null;
jeash.utils.ByteArray.prototype.bigEndian = null;
jeash.utils.ByteArray.prototype.bytesAvailable = null;
jeash.utils.ByteArray.prototype.endian = null;
jeash.utils.ByteArray.prototype.objectEncoding = null;
jeash.utils.ByteArray.prototype.position = null;
jeash.utils.ByteArray.prototype.length = null;
jeash.utils.ByteArray.prototype.TWOeN23 = null;
jeash.utils.ByteArray.prototype.pow = null;
jeash.utils.ByteArray.prototype.LN2 = null;
jeash.utils.ByteArray.prototype.abs = null;
jeash.utils.ByteArray.prototype.log = null;
jeash.utils.ByteArray.prototype.floor = null;
jeash.utils.ByteArray.prototype.GetBytesAvailable = function() {
	return this.GetLength() - this.position;
}
jeash.utils.ByteArray.prototype.readString = function(len) {
	var bytes = haxe.io.Bytes.alloc(len);
	this.readFullBytes(bytes,0,len);
	return bytes.toString();
}
jeash.utils.ByteArray.prototype.readFullBytes = function(bytes,pos,len) {
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.read = function(nbytes) {
	var s = new jeash.utils.ByteArray();
	this.readBytes(s,0,nbytes);
	return haxe.io.Bytes.ofData(s.data);
}
jeash.utils.ByteArray.prototype.GetLength = function() {
	return this.data.length;
}
jeash.utils.ByteArray.prototype.readByte = function() {
	if(this.position >= this.GetLength()) throw new jeash.errors.IOError("Read error - Out of bounds");
	return this.data[this.position++];
}
jeash.utils.ByteArray.prototype.readBytes = function(bytes,offset,length) {
	if(offset < 0 || length < 0 || offset + length > this.data.length) throw new jeash.errors.IOError("Read error - Out of bounds");
	if(this.data.length == 0 && length > 0) throw new jeash.errors.IOError("Read error - Out of bounds");
	if(this.data.length < length) length = this.data.length;
	var b1 = this.data;
	var b2 = bytes;
	b2.position = offset;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		b2.writeByte(b1[this.position + i]);
	}
	b2.position = offset;
	this.position += length;
}
jeash.utils.ByteArray.prototype.writeByte = function(value) {
	this.data[this.position++] = value;
}
jeash.utils.ByteArray.prototype.writeBytes = function(bytes,offset,length) {
	if(offset < 0 || length < 0 || offset + length > bytes.GetLength()) throw new jeash.errors.IOError("Write error - Out of bounds");
	var b2 = bytes;
	b2.position = offset;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		this.data[this.position++] = b2.readByte();
	}
}
jeash.utils.ByteArray.prototype.readBoolean = function() {
	return this.readByte() == 1?true:false;
}
jeash.utils.ByteArray.prototype.writeBoolean = function(value) {
	this.writeByte(value?1:0);
}
jeash.utils.ByteArray.prototype.readDouble = function() {
	var data = this.data, pos, b1, b2, b3, b4, b5, b6, b7, b8;
	if(this.bigEndian) {
		pos = (this.position += 8) - 8;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
		b5 = data[++pos] & 255;
		b6 = data[++pos] & 255;
		b7 = data[++pos] & 255;
		b8 = data[++pos] & 255;
	} else {
		pos = this.position += 8;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
		b5 = data[--pos] & 255;
		b6 = data[--pos] & 255;
		b7 = data[--pos] & 255;
		b8 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 4 & 2047 | b2 >> 4) - 1023;
	var sig = parseInt((((b2 & 15) << 16 | b3 << 8 | b4) * this.pow(2,32)).toString(2),2) + parseInt(((b5 >> 7) * this.pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + this.pow(2,-52) * sig) * this.pow(2,exp);
}
jeash.utils.ByteArray.prototype.writeDouble = function(x) {
	if(x == 0.0) {
		var _g = 0;
		while(_g < 8) {
			var _ = _g++;
			this.data[this.position++] = 0;
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,52));
	var sig_h = sig & 34359738367;
	var sig_l = this.floor(sig / this.pow(2,32));
	var b1 = exp + 1023 >> 4 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 1023 << 4 & 255 | sig_l >> 16 & 15, b3 = sig_l >> 8 & 255, b4 = sig_l & 255, b5 = sig_h >> 24 & 255, b6 = sig_h >> 16 & 255, b7 = sig_h >> 8 & 255, b8 = sig_h & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
		this.data[this.position++] = b5;
		this.data[this.position++] = b6;
		this.data[this.position++] = b7;
		this.data[this.position++] = b8;
	} else {
		this.data[this.position++] = b8;
		this.data[this.position++] = b7;
		this.data[this.position++] = b6;
		this.data[this.position++] = b5;
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
}
jeash.utils.ByteArray.prototype.readFloat = function() {
	var data = this.data, pos, b1, b2, b3, b4;
	if(this.bigEndian) {
		pos = (this.position += 4) - 4;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
	} else {
		pos = this.position += 4;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 1 & 255 | b2 >> 7) - 127;
	var sig = (b2 & 127) << 16 | b3 << 8 | b4;
	if(sig == 0 && exp == -127) return 0.0;
	return sign * (1 + this.TWOeN23 * sig) * this.pow(2,exp);
}
jeash.utils.ByteArray.prototype.writeFloat = function(x) {
	if(x == 0.0) {
		var _g = 0;
		while(_g < 4) {
			var _ = _g++;
			this.data[this.position++] = 0;
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,23)) & 8388607;
	var b1 = exp + 127 >> 1 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 127 << 7 & 255 | sig >> 16 & 127, b3 = sig >> 8 & 255, b4 = sig & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
	} else {
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
}
jeash.utils.ByteArray.prototype.readInt = function() {
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
	return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
jeash.utils.ByteArray.prototype.writeInt = function(value) {
	if(this.bigEndian) {
		this.writeByte(value >>> 24);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value & 255);
	} else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >>> 24);
	}
}
jeash.utils.ByteArray.prototype.readShort = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
}
jeash.utils.ByteArray.prototype.writeShort = function(value) {
	if(value < -32768 || value >= 32768) throw new jeash.errors.IOError("Write error - overflow");
	this.writeUnsignedShort(value & 65535);
}
jeash.utils.ByteArray.prototype.writeUnsignedShort = function(value) {
	if(value < 0 || value >= 65536) throw new jeash.errors.IOError("Write error - overflow");
	if(this.__GetEndian() == jeash.utils.Endian.BIG_ENDIAN) {
		this.writeByte(value >> 8);
		this.writeByte(value & 255);
	} else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8);
	}
}
jeash.utils.ByteArray.prototype.readUTF = function() {
	var len = this.readShort();
	var bytes = haxe.io.Bytes.ofData(this.data);
	return bytes.readString(2,len);
}
jeash.utils.ByteArray.prototype.writeUTF = function(value) {
	var bytes = haxe.io.Bytes.ofString(value);
	this.writeShort(bytes.length);
	var _g1 = 0, _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	var bytes = haxe.io.Bytes.ofString(value);
	var _g1 = 0, _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.readUTFBytes = function(len) {
	var bytes = haxe.io.Bytes.ofData(this.data);
	return bytes.readString(0,len);
}
jeash.utils.ByteArray.prototype.readUnsignedByte = function() {
	return this.readByte();
}
jeash.utils.ByteArray.prototype.readUnsignedShort = function() {
	return this.readShort();
}
jeash.utils.ByteArray.prototype.readUnsignedInt = function() {
	return this.readInt();
}
jeash.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	this.writeInt(value);
}
jeash.utils.ByteArray.prototype.__GetEndian = function() {
	if(this.bigEndian == true) return jeash.utils.Endian.BIG_ENDIAN; else return jeash.utils.Endian.LITTLE_ENDIAN;
}
jeash.utils.ByteArray.prototype.__SetEndian = function(endian) {
	if(endian == jeash.utils.Endian.BIG_ENDIAN) this.bigEndian = true; else this.bigEndian = false;
	return endian;
}
jeash.utils.ByteArray.prototype.__class__ = jeash.utils.ByteArray;
awe6.interfaces.IKernel = function() { }
awe6.interfaces.IKernel.__name__ = ["awe6","interfaces","IKernel"];
awe6.interfaces.IKernel.prototype.isDebug = null;
awe6.interfaces.IKernel.prototype.isLocal = null;
awe6.interfaces.IKernel.prototype.isEyeCandy = null;
awe6.interfaces.IKernel.prototype.isFullScreen = null;
awe6.interfaces.IKernel.prototype.overlay = null;
awe6.interfaces.IKernel.prototype.assets = null;
awe6.interfaces.IKernel.prototype.audio = null;
awe6.interfaces.IKernel.prototype.inputs = null;
awe6.interfaces.IKernel.prototype.scenes = null;
awe6.interfaces.IKernel.prototype.messenger = null;
awe6.interfaces.IKernel.prototype.tools = null;
awe6.interfaces.IKernel.prototype.factory = null;
awe6.interfaces.IKernel.prototype.session = null;
awe6.interfaces.IKernel.prototype.getConfig = null;
awe6.interfaces.IKernel.prototype.getFramerate = null;
awe6.interfaces.IKernel.prototype.onPreloaderComplete = null;
awe6.interfaces.IKernel.prototype.__class__ = awe6.interfaces.IKernel;
awe6.interfaces.IKernel.__interfaces__ = [awe6.interfaces.ILogger,awe6.interfaces.IPauseable];
awe6.core.drivers.AKernel = function(factory,context) {
	if( factory === $_ ) return;
	if(this.factory == null) this.factory = factory;
	this._context = context;
	if(this.tools == null) this.tools = this._tools = new awe6.core.Tools(this);
	if(this._view == null) this._view = new awe6.core.drivers.js.View(this,this._context,0,this);
	awe6.core.Process.call(this,this);
}
awe6.core.drivers.AKernel.__name__ = ["awe6","core","drivers","AKernel"];
awe6.core.drivers.AKernel.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.drivers.AKernel.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.drivers.AKernel.prototype.overlay = null;
awe6.core.drivers.AKernel.prototype.factory = null;
awe6.core.drivers.AKernel.prototype.isDebug = null;
awe6.core.drivers.AKernel.prototype.isLocal = null;
awe6.core.drivers.AKernel.prototype.isEyeCandy = null;
awe6.core.drivers.AKernel.prototype.isFullScreen = null;
awe6.core.drivers.AKernel.prototype.tools = null;
awe6.core.drivers.AKernel.prototype.assets = null;
awe6.core.drivers.AKernel.prototype.audio = null;
awe6.core.drivers.AKernel.prototype.inputs = null;
awe6.core.drivers.AKernel.prototype.scenes = null;
awe6.core.drivers.AKernel.prototype.messenger = null;
awe6.core.drivers.AKernel.prototype.session = null;
awe6.core.drivers.AKernel.prototype._context = null;
awe6.core.drivers.AKernel.prototype._view = null;
awe6.core.drivers.AKernel.prototype._assetManagerProcess = null;
awe6.core.drivers.AKernel.prototype._audioManager = null;
awe6.core.drivers.AKernel.prototype._inputManager = null;
awe6.core.drivers.AKernel.prototype._sceneManager = null;
awe6.core.drivers.AKernel.prototype._messageManager = null;
awe6.core.drivers.AKernel.prototype._overlayProcess = null;
awe6.core.drivers.AKernel.prototype._logger = null;
awe6.core.drivers.AKernel.prototype._isPreloaded = null;
awe6.core.drivers.AKernel.prototype._preloader = null;
awe6.core.drivers.AKernel.prototype._profiler = null;
awe6.core.drivers.AKernel.prototype._processes = null;
awe6.core.drivers.AKernel.prototype._helperFramerate = null;
awe6.core.drivers.AKernel.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.isDebug = this.factory.isDebug;
	this.isLocal = this._nativeGetIsLocal();
	this._isPreloaded = false;
	this._processes = new List();
	this._helperFramerate = new awe6.core.drivers._AKernel._HelperFramerate(this.factory.targetFramerate);
	this.assets = this._assetManagerProcess = new awe6.core.AAssetManager(this._kernel);
	this.audio = this._audioManager = new awe6.core.drivers.js.AudioManager(this._kernel);
	this.inputs = this._inputManager = new awe6.core.InputManager(this._kernel);
	this.scenes = this._sceneManager = new awe6.core.SceneManager(this._kernel);
	this.messenger = this._messageManager = new awe6.core.MessageManager(this._kernel);
	this._view.addChild(this._sceneManager.view,1);
	this._addProcess(this._assetManagerProcess);
	this._addProcess(this._audioManager);
	this._addProcess(this._inputManager);
	this._addProcess(this._sceneManager);
	this._addProcess(this._messageManager);
	this.factory.onInitComplete(this);
	this._nativeInit();
	this.__set_isEyeCandy(true);
	this.__set_isFullScreen(false);
	this.__set_session(this.factory.createSession());
	this.__get_session().reset();
	this._preloader = this.factory.createPreloader();
	this._addProcess(this._preloader);
	this._view.addChild(this._preloader.__get_view(),2);
	this._addProcess(this._view);
}
awe6.core.drivers.AKernel.prototype._nativeGetIsLocal = function() {
	return false;
}
awe6.core.drivers.AKernel.prototype._nativeInit = function() {
}
awe6.core.drivers.AKernel.prototype._nativeDisposer = function() {
}
awe6.core.drivers.AKernel.prototype.onPreloaderComplete = function(preloader) {
	this._isPreloaded = true;
	this._removeProcess(this._preloader);
	this._preloader = null;
	this._logger = this.factory.createLogger();
	var l_assetManagerProcess = this.factory.createAssetManager();
	if(l_assetManagerProcess != this._assetManagerProcess) {
		this._removeProcess(this._assetManagerProcess);
		this.assets = this._assetManagerProcess = l_assetManagerProcess;
		this._addProcess(this._assetManagerProcess);
	}
	this.overlay = this._overlayProcess = this.factory.createOverlay();
	this._addProcess(this._overlayProcess,false);
	this._view.addChild(this._overlayProcess.__get_view(),3);
	if(this.isDebug) {
		this._addProcess(this._profiler = new awe6.core.drivers.js.Profiler(this));
		this._view.addChild(this._profiler.__get_view(),this._tools.BIG_NUMBER);
	}
	this.scenes.setScene(this.factory.startingSceneType);
}
awe6.core.drivers.AKernel.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	this._helperFramerate.update();
	var l_deltaTime = this.factory.isFixedUpdates?Std["int"](1000 / this.factory.targetFramerate):this._helperFramerate.timeInterval;
	awe6.core.Process.prototype._updater.call(this,l_deltaTime);
	var $it0 = this._processes.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		i.update(l_deltaTime);
	}
}
awe6.core.drivers.AKernel.prototype._disposer = function() {
	var $it0 = this._processes.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		this._removeProcess(i);
	}
	if(Std["is"](this.factory,awe6.interfaces.IDisposable)) ((function($this) {
		var $r;
		var $t = $this.factory;
		if(Std["is"]($t,awe6.interfaces.IDisposable)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).dispose();
	this._view.dispose();
	this._view = null;
	this._nativeDisposer();
	this.assets = this._assetManagerProcess = null;
	this.audio = this._audioManager = null;
	this.inputs = this._inputManager = null;
	this.scenes = this._sceneManager = null;
	this.messenger = this._messageManager = null;
	this.overlay = this._overlayProcess = null;
	this.factory = null;
	this.tools = this._tools = null;
	this._logger = null;
	this._preloader = null;
	this.__set_session(null);
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.drivers.AKernel.prototype.getConfig = function(id) {
	return this.factory.config.exists(id)?this.factory.config.get(id):null;
}
awe6.core.drivers.AKernel.prototype.log = function(value) {
	if(this._logger != null) this._logger.log(value); else if(this.isDebug) haxe.Log.trace("LOG: " + value,{ fileName : "AKernel.hx", lineNumber : 242, className : "awe6.core.drivers.AKernel", methodName : "log"});
}
awe6.core.drivers.AKernel.prototype.getFramerate = function(asActual) {
	if(asActual == null) asActual = true;
	return asActual?this._helperFramerate.framerate:this.factory.targetFramerate;
}
awe6.core.drivers.AKernel.prototype._addProcess = function(process,isLast) {
	if(isLast == null) isLast = true;
	if(process == null) return;
	if(isLast) this._processes.add(process); else this._processes.push(process);
}
awe6.core.drivers.AKernel.prototype._removeProcess = function(process) {
	if(process == null) return false;
	process.dispose();
	return this._processes.remove(process);
}
awe6.core.drivers.AKernel.prototype._totalReset = function() {
	if(!this._isPreloaded) return;
	this.__get_session().deleteAllSessions();
	this.__set_session(this.factory.createSession());
	this.scenes.setScene(this.factory.startingSceneType);
}
awe6.core.drivers.AKernel.prototype.__set_isEyeCandy = function(value) {
	if(!this.factory.isEyeCandyOptionEnabled) {
		this.isEyeCandy = true;
		return this.isEyeCandy;
	}
	this.isEyeCandy = value;
	this._nativeSetIsEyeCandy(value);
	return this.isEyeCandy;
}
awe6.core.drivers.AKernel.prototype._nativeSetIsEyeCandy = function(value) {
}
awe6.core.drivers.AKernel.prototype.__set_isFullScreen = function(value) {
	if(!this.factory.isFullScreenOptionEnabled) {
		this.isFullScreen = false;
		return this.isFullScreen;
	}
	this.isFullScreen = value;
	this._nativeSetIsFullScreen(value);
	return this.isFullScreen;
}
awe6.core.drivers.AKernel.prototype._nativeSetIsFullScreen = function(value) {
}
awe6.core.drivers.AKernel.prototype._pauser = function() {
	awe6.core.Process.prototype._pauser.call(this);
	if(this.scenes.__get_scene() != null) this.scenes.__get_scene().pause();
}
awe6.core.drivers.AKernel.prototype._resumer = function() {
	awe6.core.Process.prototype._resumer.call(this);
	if(this.scenes.__get_scene() != null) this.scenes.__get_scene().resume();
}
awe6.core.drivers.AKernel.prototype.__get_session = function() {
	return this.session;
}
awe6.core.drivers.AKernel.prototype.__set_session = function(value) {
	this.session = value;
	return this.__get_session();
}
awe6.core.drivers.AKernel.prototype.__class__ = awe6.core.drivers.AKernel;
awe6.core.drivers.AKernel.__interfaces__ = [awe6.interfaces.IKernel];
awe6.core.drivers.js.Kernel = function(factory,context) {
	if( factory === $_ ) return;
	awe6.core.drivers.AKernel.call(this,factory,context);
}
awe6.core.drivers.js.Kernel.__name__ = ["awe6","core","drivers","js","Kernel"];
awe6.core.drivers.js.Kernel.__super__ = awe6.core.drivers.AKernel;
for(var k in awe6.core.drivers.AKernel.prototype ) awe6.core.drivers.js.Kernel.prototype[k] = awe6.core.drivers.AKernel.prototype[k];
awe6.core.drivers.js.Kernel.prototype._stage = null;
awe6.core.drivers.js.Kernel.prototype._nativeGetIsLocal = function() {
	return jeash.system.Security.sandboxType != jeash.system.Security.REMOTE;
}
awe6.core.drivers.js.Kernel.prototype._nativeInit = function() {
	this._stage = this._context.GetStage();
	var l_instance = this;
	jeash.Lib.jeashGetCurrent().focusRect = false;
	this._stage.jeashSetFrameRate(this.factory.targetFramerate);
	this._stage.scaleMode = jeash.display.StageScaleMode.NO_SCALE;
	this._stage.jeashSetQuality(jeash.display.StageQuality.LOW);
	var l_mask = new jeash.display.Sprite();
	l_mask.jeashGetGraphics().beginFill(16777215);
	l_mask.jeashGetGraphics().drawRect(0,0,this.factory.width,this.factory.height);
	l_mask.jeashGetGraphics().endFill();
	this._context.addChild(l_mask);
	this._context.SetMask(l_mask);
	this._stage.addEventListener(jeash.events.Event.ENTER_FRAME,$closure(this,"_onEnterFrame"));
	this.__set_isEyeCandy(true);
	this.__set_isFullScreen(false);
}
awe6.core.drivers.js.Kernel.prototype._nativeDisposer = function() {
}
awe6.core.drivers.js.Kernel.prototype._onEnterFrame = function(event) {
	this._updater(0);
}
awe6.core.drivers.js.Kernel.prototype._nativeSetIsEyeCandy = function(value) {
}
awe6.core.drivers.js.Kernel.prototype._nativeSetIsFullScreen = function(value) {
}
awe6.core.drivers.js.Kernel.prototype.__class__ = awe6.core.drivers.js.Kernel;
if(!jeash.net) jeash.net = {}
jeash.net.URLRequest = function(inURL) {
	if( inURL === $_ ) return;
	if(inURL != null) this.url = inURL;
}
jeash.net.URLRequest.__name__ = ["jeash","net","URLRequest"];
jeash.net.URLRequest.prototype.url = null;
jeash.net.URLRequest.prototype.__class__ = jeash.net.URLRequest;
jeash.media.Sound = function(stream,context) {
	if( stream === $_ ) return;
	jeash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.jeashSoundChannels = new IntHash();
	this.jeashSoundIdx = 0;
	if(stream != null) this.load(stream,context);
}
jeash.media.Sound.__name__ = ["jeash","media","Sound"];
jeash.media.Sound.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.media.Sound.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.media.Sound.jeashCanPlayType = function(extension) {
	var audio = js.Lib.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	switch(extension) {
	case "mp3":
		return playable(audio.canPlayType("audio/mpeg"));
	case "ogg":
		return playable(audio.canPlayType("audio/ogg; codecs=\"vorbis\""));
	case "wav":
		return playable(audio.canPlayType("audio/wav; codecs=\"1\""));
	case "aac":
		return playable(audio.canPlayType("audio/mp4; codecs=\"mp4a.40.2\""));
	default:
		return false;
	}
}
jeash.media.Sound.prototype.bytesLoaded = null;
jeash.media.Sound.prototype.bytesTotal = null;
jeash.media.Sound.prototype.id3 = null;
jeash.media.Sound.prototype.isBuffering = null;
jeash.media.Sound.prototype.length = null;
jeash.media.Sound.prototype.url = null;
jeash.media.Sound.prototype.jeashStreamUrl = null;
jeash.media.Sound.prototype.jeashSoundChannels = null;
jeash.media.Sound.prototype.jeashSoundIdx = null;
jeash.media.Sound.prototype.jeashSoundCache = null;
jeash.media.Sound.prototype.jeashCreateAudio = function() {
}
jeash.media.Sound.prototype.close = function() {
}
jeash.media.Sound.prototype.load = function(stream,context) {
	var url = stream.url.split("?");
	var extension = url[0].substr(url[0].lastIndexOf(".") + 1);
	if(!jeash.media.Sound.jeashCanPlayType(extension.toLowerCase())) jeash.Lib.trace("Warning: '" + stream.url + "' may not play on this browser.");
	this.jeashStreamUrl = stream.url;
	this.jeashSoundCache = new jeash.net.URLLoader(stream);
}
jeash.media.Sound.prototype.play = function(startTime,loops,sndTransform) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	if(this.jeashStreamUrl == null) return null;
	var self = this;
	var curIdx = this.jeashSoundIdx;
	var removeRef = function() {
		self.jeashSoundChannels.remove(curIdx);
	};
	var channel = jeash.media.SoundChannel.jeashCreate(this.jeashStreamUrl,startTime,loops,sndTransform,removeRef);
	this.jeashSoundChannels.set(curIdx,channel);
	this.jeashSoundIdx++;
	var audio = channel.jeashAudio;
	this.jeashAddEventListeners(audio);
	return channel;
}
jeash.media.Sound.prototype.jeashAddEventListeners = function(audio) {
	audio.addEventListener("canplay",$closure(this,"__onSoundLoaded"),false);
	audio.addEventListener("error",$closure(this,"__onSoundLoadError"),false);
	audio.addEventListener("abort",$closure(this,"__onSoundLoadError"),false);
}
jeash.media.Sound.prototype.jeashRemoveEventListeners = function(audio) {
	audio.removeEventListener("canplay",$closure(this,"__onSoundLoaded"),false);
	audio.removeEventListener("error",$closure(this,"__onSoundLoadError"),false);
	audio.removeEventListener("abort",$closure(this,"__onSoundLoadError"),false);
}
jeash.media.Sound.prototype.__onSoundLoaded = function(evt) {
	var audio = evt.target;
	this.jeashRemoveEventListeners(audio);
	var evt1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
	this.dispatchEvent(evt1);
}
jeash.media.Sound.prototype.__onSoundLoadError = function(evt) {
	var audio = evt.target;
	this.jeashRemoveEventListeners(audio);
	jeash.Lib.trace("Error loading sound '" + audio.src + "'");
	var evt1 = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
	this.dispatchEvent(evt1);
}
jeash.media.Sound.prototype.__class__ = jeash.media.Sound;
awe6.core.InputManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.InputManager.__name__ = ["awe6","core","InputManager"];
awe6.core.InputManager.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.InputManager.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.InputManager.prototype.joypad = null;
awe6.core.InputManager.prototype.keyboard = null;
awe6.core.InputManager.prototype.mouse = null;
awe6.core.InputManager.prototype._inputKeyboard = null;
awe6.core.InputManager.prototype._inputMouse = null;
awe6.core.InputManager.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.joypad = this.createJoypad();
	this.keyboard = this._inputKeyboard = new awe6.core.drivers.js.InputKeyboard(this._kernel);
	this.mouse = this._inputMouse = new awe6.core.drivers.js.InputMouse(this._kernel);
}
awe6.core.InputManager.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	this._inputKeyboard.update(deltaTime);
	this._inputMouse.update(deltaTime);
}
awe6.core.InputManager.prototype._disposer = function() {
	this._inputKeyboard.dispose();
	this._inputMouse.dispose();
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.InputManager.prototype.createJoypad = function(up,right,down,left,primary,secondary,upAlt,rightAlt,downAlt,leftAlt,primaryAlt,secondaryAlt) {
	return new awe6.core.InputJoypad(this._kernel,up,right,down,left,primary,secondary,upAlt,rightAlt,downAlt,leftAlt,primaryAlt,secondaryAlt);
}
awe6.core.InputManager.prototype.__class__ = awe6.core.InputManager;
awe6.core.InputManager.__interfaces__ = [awe6.interfaces.IInputManager];
jeash.geom.Transform = function(inParent) {
	if( inParent === $_ ) return;
	this.mObj = inParent;
}
jeash.geom.Transform.__name__ = ["jeash","geom","Transform"];
jeash.geom.Transform.prototype.colorTransform = null;
jeash.geom.Transform.prototype.matrix = null;
jeash.geom.Transform.prototype.pixelBounds = null;
jeash.geom.Transform.prototype.mObj = null;
jeash.geom.Transform.prototype.GetMatrix = function() {
	return this.mObj.GetMatrix();
}
jeash.geom.Transform.prototype.SetMatrix = function(inMatrix) {
	return this.mObj.SetMatrix(inMatrix);
}
jeash.geom.Transform.prototype.GetPixelBounds = function() {
	return this.mObj.getBounds(jeash.Lib.jeashGetStage());
}
jeash.geom.Transform.prototype.GetColorTransform = function() {
	return new jeash.geom.ColorTransform();
}
jeash.geom.Transform.prototype.SetColorTransform = function(inColorTransform) {
	return inColorTransform;
}
jeash.geom.Transform.prototype.__class__ = jeash.geom.Transform;
jeash.display.StageDisplayState = { __ename__ : ["jeash","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
jeash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
jeash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
jeash.display.StageDisplayState.FULL_SCREEN.__enum__ = jeash.display.StageDisplayState;
jeash.display.StageDisplayState.NORMAL = ["NORMAL",1];
jeash.display.StageDisplayState.NORMAL.toString = $estr;
jeash.display.StageDisplayState.NORMAL.__enum__ = jeash.display.StageDisplayState;
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
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
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{" == null?"null":"{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", " == null?"null":", ";
		s.add(Std.string(l[0]));
		l = l[1];
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
		s.add(l[0]);
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
if(!jeash.system) jeash.system = {}
jeash.system.Security = function() { }
jeash.system.Security.__name__ = ["jeash","system","Security"];
jeash.system.Security.LOCAL_TRUSTED = null;
jeash.system.Security.LOCAL_WITH_FILE = null;
jeash.system.Security.LOCAL_WITH_NETWORK = null;
jeash.system.Security.REMOTE = null;
jeash.system.Security.disableAVM1Loading = null;
jeash.system.Security.exactSettings = null;
jeash.system.Security.sandboxType = null;
jeash.system.Security.allowDomain = function(p1,p2,p3,p4,p5) {
}
jeash.system.Security.allowInsecureDomain = function(p1,p2,p3,p4,p5) {
}
jeash.system.Security.loadPolicyFile = function(url) {
}
jeash.system.Security.prototype.__class__ = jeash.system.Security;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
jeash.display.GraphicsFillType = { __ename__ : ["jeash","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
jeash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
jeash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
jeash.display.GraphicsFillType.SOLID_FILL.__enum__ = jeash.display.GraphicsFillType;
jeash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
jeash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
jeash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = jeash.display.GraphicsFillType;
awe6.core.BasicButton = function(kernel,up,over,width,height,x,y,key,onClickCallback,onRollOverCallback,onRollOutCallback) {
	if( kernel === $_ ) return;
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(height == null) height = 20;
	if(width == null) width = 100;
	this._stateUp = new awe6.core._BasicButton._HelperState(kernel,up);
	this._stateOver = new awe6.core._BasicButton._HelperState(kernel,over);
	Reflect.setField(this,"x",x);
	Reflect.setField(this,"y",y);
	this.__set_width(width);
	this.__set_height(height);
	this._keyType = key;
	this.onClickCallback = onClickCallback;
	this.onRollOverCallback = onRollOverCallback;
	this.onRollOutCallback = onRollOutCallback;
	awe6.core.Entity.call(this,kernel);
}
awe6.core.BasicButton.__name__ = ["awe6","core","BasicButton"];
awe6.core.BasicButton.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) awe6.core.BasicButton.prototype[k] = awe6.core.Entity.prototype[k];
awe6.core.BasicButton.prototype.x = null;
awe6.core.BasicButton.prototype.y = null;
awe6.core.BasicButton.prototype.width = null;
awe6.core.BasicButton.prototype.height = null;
awe6.core.BasicButton.prototype.isOver = null;
awe6.core.BasicButton.prototype.onClickCallback = null;
awe6.core.BasicButton.prototype.onRollOverCallback = null;
awe6.core.BasicButton.prototype.onRollOutCallback = null;
awe6.core.BasicButton.prototype._stateUp = null;
awe6.core.BasicButton.prototype._stateOver = null;
awe6.core.BasicButton.prototype._keyType = null;
awe6.core.BasicButton.prototype._init = function() {
	awe6.core.Entity.prototype._init.call(this);
	this.__get_view().__set_x(this.x);
	this.__get_view().__set_y(this.y);
	this.isOver = false;
	this.addEntity(this._stateUp,awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP),true);
	this.addEntity(this._stateOver,awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.OVER),true);
	this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP));
}
awe6.core.BasicButton.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Entity.prototype._updater.call(this,deltaTime);
	var l_inputMouse = this._kernel.inputs.mouse;
	var l_isOver = this._isPointInsideRectangle(l_inputMouse.x + this.__get_view().x - this.__get_view().globalX,l_inputMouse.y + this.__get_view().y - this.__get_view().globalY,this.x,this.y,this.width,this.height);
	if(l_isOver) l_inputMouse.__set_cursorType(awe6.interfaces.EMouseCursor.BUTTON);
	if(l_isOver && !this.isOver) this.onRollOver();
	if(!l_isOver && this.isOver) {
		l_inputMouse.__set_cursorType(awe6.interfaces.EMouseCursor.ARROW);
		this.onRollOut();
	}
	this.isOver = l_isOver;
	if(this.isOver && l_inputMouse.getIsButtonRelease()) this.onClick();
	if(this._keyType != null && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType)) this.onClick();
}
awe6.core.BasicButton.prototype._isPointInsideRectangle = function(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
	if(pointX < rectX) return false;
	if(pointY < rectY) return false;
	if(pointX > rectX + rectWidth) return false;
	if(pointY > rectY + rectHeight) return false;
	return true;
}
awe6.core.BasicButton.prototype.onClick = function() {
	if(this.onClickCallback == null) return;
	this.onClickCallback.apply(this,[]);
}
awe6.core.BasicButton.prototype.onRollOver = function() {
	this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.OVER));
	if(this.onRollOverCallback == null) return;
	this.onRollOverCallback.apply(this,[]);
}
awe6.core.BasicButton.prototype.onRollOut = function() {
	this.setAgenda(awe6.interfaces.EAgenda.SUB_TYPE(awe6.core._BasicButton._HelperEState.UP));
	if(this.onRollOutCallback == null) return;
	this.onRollOutCallback.apply(this,[]);
}
awe6.core.BasicButton.prototype.setPosition = function(x,y) {
	this.__set_x(x);
	this.__set_y(y);
}
awe6.core.BasicButton.prototype.__set_x = function(value) {
	this.x = value;
	this.__get_view().__set_x(this.x);
	return this.x;
}
awe6.core.BasicButton.prototype.__set_y = function(value) {
	this.y = value;
	this.__get_view().__set_y(this.y);
	return this.y;
}
awe6.core.BasicButton.prototype.__set_width = function(value) {
	this.width = value;
	return this.width;
}
awe6.core.BasicButton.prototype.__set_height = function(value) {
	this.height = value;
	return this.height;
}
awe6.core.BasicButton.prototype.__class__ = awe6.core.BasicButton;
awe6.core.BasicButton.__interfaces__ = [awe6.interfaces.IPosition];
if(!demo.gui) demo.gui = {}
demo.gui.Button = function(kernel,key,x,y,onClick,onRollOver,onRollOut,label) {
	if( kernel === $_ ) return;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this._assetManager = kernel.assets;
	this.label = label;
	this._upContext = new jeash.display.Sprite();
	this._overContext = new jeash.display.Sprite();
	this._upView = new awe6.core.drivers.js.View(kernel,this._upContext);
	this._overView = new awe6.core.drivers.js.View(kernel,this._overContext);
	awe6.core.BasicButton.call(this,kernel,this._upView,this._overView,160,40,x,y,key,onClick,onRollOver,onRollOut);
}
demo.gui.Button.__name__ = ["demo","gui","Button"];
demo.gui.Button.__super__ = awe6.core.BasicButton;
for(var k in awe6.core.BasicButton.prototype ) demo.gui.Button.prototype[k] = awe6.core.BasicButton.prototype[k];
demo.gui.Button.prototype.label = null;
demo.gui.Button.prototype._assetManager = null;
demo.gui.Button.prototype._marginWidth = null;
demo.gui.Button.prototype._marginHeight = null;
demo.gui.Button.prototype._upView = null;
demo.gui.Button.prototype._overView = null;
demo.gui.Button.prototype._upContext = null;
demo.gui.Button.prototype._overContext = null;
demo.gui.Button.prototype._init = function() {
	awe6.core.BasicButton.prototype._init.call(this);
	this._marginWidth = 10;
	this._marginHeight = 12;
	this._upContext.addChild(this._createButtonState(false));
	this._overContext.addChild(this._createButtonState(true));
}
demo.gui.Button.prototype._createButtonState = function(isOver) {
	if(isOver == null) isOver = false;
	var l_result = new jeash.display.Sprite();
	l_result.addChild(new jeash.display.Bitmap(isOver?this._assetManager.buttonOver:this._assetManager.buttonUp));
	var l_text = new awe6.extras.gui.Text(this._kernel,this.width - 2 * this._marginWidth,this.height - 2 * this._marginHeight,this.label,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.BUTTON));
	l_text.setPosition(this._marginWidth,this._marginHeight);
	l_result.addChild(l_text._sprite);
	return l_result;
}
demo.gui.Button.prototype.onClick = function() {
	this._kernel.audio.start("ButtonDown",awe6.interfaces.EAudioChannel.INTERFACE);
	awe6.core.BasicButton.prototype.onClick.call(this);
}
demo.gui.Button.prototype.onRollOver = function() {
	this._kernel.audio.start("ButtonOver",awe6.interfaces.EAudioChannel.INTERFACE);
	awe6.core.BasicButton.prototype.onRollOver.call(this);
}
demo.gui.Button.prototype.__class__ = demo.gui.Button;
jeash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if( inRedMultiplier === $_ ) return;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
	this.color = 0;
}
jeash.geom.ColorTransform.__name__ = ["jeash","geom","ColorTransform"];
jeash.geom.ColorTransform.prototype.alphaMultiplier = null;
jeash.geom.ColorTransform.prototype.alphaOffset = null;
jeash.geom.ColorTransform.prototype.blueMultiplier = null;
jeash.geom.ColorTransform.prototype.blueOffset = null;
jeash.geom.ColorTransform.prototype.color = null;
jeash.geom.ColorTransform.prototype.greenMultiplier = null;
jeash.geom.ColorTransform.prototype.greenOffset = null;
jeash.geom.ColorTransform.prototype.redMultiplier = null;
jeash.geom.ColorTransform.prototype.redOffset = null;
jeash.geom.ColorTransform.prototype.concat = function(second) {
	throw "Not implemented";
}
jeash.geom.ColorTransform.prototype.__class__ = jeash.geom.ColorTransform;
jeash.display.StageScaleMode = { __ename__ : ["jeash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
jeash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
jeash.display.StageScaleMode.SHOW_ALL.toString = $estr;
jeash.display.StageScaleMode.SHOW_ALL.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
jeash.display.StageScaleMode.NO_SCALE.toString = $estr;
jeash.display.StageScaleMode.NO_SCALE.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
jeash.display.StageScaleMode.NO_BORDER.toString = $estr;
jeash.display.StageScaleMode.NO_BORDER.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
jeash.display.StageScaleMode.EXACT_FIT.toString = $estr;
jeash.display.StageScaleMode.EXACT_FIT.__enum__ = jeash.display.StageScaleMode;
awe6.interfaces.ISceneManager = function() { }
awe6.interfaces.ISceneManager.__name__ = ["awe6","interfaces","ISceneManager"];
awe6.interfaces.ISceneManager.prototype.scene = null;
awe6.interfaces.ISceneManager.prototype.setScene = null;
awe6.interfaces.ISceneManager.prototype.back = null;
awe6.interfaces.ISceneManager.prototype.next = null;
awe6.interfaces.ISceneManager.prototype.restart = null;
awe6.interfaces.ISceneManager.prototype.__class__ = awe6.interfaces.ISceneManager;
jeash.ui.Keyboard = function() { }
jeash.ui.Keyboard.__name__ = ["jeash","ui","Keyboard"];
jeash.ui.Keyboard.jeashConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
	case "backspace":
		return jeash.ui.Keyboard.BACKSPACE;
	case "tab":
		return jeash.ui.Keyboard.TAB;
	case "enter":
		return jeash.ui.Keyboard.ENTER;
	case "shift":
		return jeash.ui.Keyboard.SHIFT;
	case "control":
		return jeash.ui.Keyboard.CONTROL;
	case "capslock":
		return jeash.ui.Keyboard.CAPS_LOCK;
	case "escape":
		return jeash.ui.Keyboard.ESCAPE;
	case "space":
		return jeash.ui.Keyboard.SPACE;
	case "pageup":
		return jeash.ui.Keyboard.PAGE_UP;
	case "pagedown":
		return jeash.ui.Keyboard.PAGE_DOWN;
	case "end":
		return jeash.ui.Keyboard.END;
	case "home":
		return jeash.ui.Keyboard.HOME;
	case "left":
		return jeash.ui.Keyboard.LEFT;
	case "right":
		return jeash.ui.Keyboard.RIGHT;
	case "up":
		return jeash.ui.Keyboard.UP;
	case "down":
		return jeash.ui.Keyboard.DOWN;
	case "insert":
		return jeash.ui.Keyboard.INSERT;
	case "delete":
		return jeash.ui.Keyboard.DELETE;
	case "numlock":
		return jeash.ui.Keyboard.NUMLOCK;
	case "break":
		return jeash.ui.Keyboard.BREAK;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt(code.substr(3));
	throw "Unrecognised key code: " + code;
	return 0;
}
jeash.ui.Keyboard.jeashConvertMozillaCode = function(code) {
	switch(code) {
	case jeash.ui.Keyboard.DOM_VK_BACK_SPACE:
		return jeash.ui.Keyboard.BACKSPACE;
	case jeash.ui.Keyboard.DOM_VK_TAB:
		return jeash.ui.Keyboard.TAB;
	case jeash.ui.Keyboard.DOM_VK_RETURN:
		return jeash.ui.Keyboard.ENTER;
	case jeash.ui.Keyboard.DOM_VK_ENTER:
		return jeash.ui.Keyboard.ENTER;
	case jeash.ui.Keyboard.DOM_VK_SHIFT:
		return jeash.ui.Keyboard.SHIFT;
	case jeash.ui.Keyboard.DOM_VK_CONTROL:
		return jeash.ui.Keyboard.CONTROL;
	case jeash.ui.Keyboard.DOM_VK_CAPS_LOCK:
		return jeash.ui.Keyboard.CAPS_LOCK;
	case jeash.ui.Keyboard.DOM_VK_ESCAPE:
		return jeash.ui.Keyboard.ESCAPE;
	case jeash.ui.Keyboard.DOM_VK_SPACE:
		return jeash.ui.Keyboard.SPACE;
	case jeash.ui.Keyboard.DOM_VK_PAGE_UP:
		return jeash.ui.Keyboard.PAGE_UP;
	case jeash.ui.Keyboard.DOM_VK_PAGE_DOWN:
		return jeash.ui.Keyboard.PAGE_DOWN;
	case jeash.ui.Keyboard.DOM_VK_END:
		return jeash.ui.Keyboard.END;
	case jeash.ui.Keyboard.DOM_VK_HOME:
		return jeash.ui.Keyboard.HOME;
	case jeash.ui.Keyboard.DOM_VK_LEFT:
		return jeash.ui.Keyboard.LEFT;
	case jeash.ui.Keyboard.DOM_VK_RIGHT:
		return jeash.ui.Keyboard.RIGHT;
	case jeash.ui.Keyboard.DOM_VK_UP:
		return jeash.ui.Keyboard.UP;
	case jeash.ui.Keyboard.DOM_VK_DOWN:
		return jeash.ui.Keyboard.DOWN;
	case jeash.ui.Keyboard.DOM_VK_INSERT:
		return jeash.ui.Keyboard.INSERT;
	case jeash.ui.Keyboard.DOM_VK_DELETE:
		return jeash.ui.Keyboard.DELETE;
	case jeash.ui.Keyboard.DOM_VK_NUM_LOCK:
		return jeash.ui.Keyboard.NUMLOCK;
	default:
		return code;
	}
}
jeash.ui.Keyboard.capsLock = null;
jeash.ui.Keyboard.numLock = null;
jeash.ui.Keyboard.isAccessible = function() {
	return false;
}
jeash.ui.Keyboard.prototype.__class__ = jeash.ui.Keyboard;
if(!awe6.core.drivers._AInputKeyboard) awe6.core.drivers._AInputKeyboard = {}
awe6.core.drivers._AInputKeyboard._HelperKey = function(kernel) {
	if( kernel === $_ ) return;
	this.isDown = false;
	this.updatesDown = 0;
	this.updatesUp = kernel.tools.BIG_NUMBER;
	this.timeDown = 0;
	this.timeUp = kernel.tools.BIG_NUMBER;
	this.updatesDownPrevious = 0;
	this.updatesUpPrevious = kernel.tools.BIG_NUMBER;
	this.timeDownPrevious = 0;
	this.timeUpPrevious = kernel.tools.BIG_NUMBER;
}
awe6.core.drivers._AInputKeyboard._HelperKey.__name__ = ["awe6","core","drivers","_AInputKeyboard","_HelperKey"];
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.isUsed = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.isDown = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.updatesDown = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.updatesUp = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.timeDown = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.timeUp = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.updatesDownPrevious = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.updatesUpPrevious = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.timeDownPrevious = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.timeUpPrevious = null;
awe6.core.drivers._AInputKeyboard._HelperKey.prototype.__class__ = awe6.core.drivers._AInputKeyboard._HelperKey;
awe6.core.drivers._AInputKeyboard._HelperKeyEvent = function(keyCode,isDown) {
	if( keyCode === $_ ) return;
	this.keyCode = keyCode;
	this.isDown = isDown;
}
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.__name__ = ["awe6","core","drivers","_AInputKeyboard","_HelperKeyEvent"];
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.prototype.keyCode = null;
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.prototype.isDown = null;
awe6.core.drivers._AInputKeyboard._HelperKeyEvent.prototype.__class__ = awe6.core.drivers._AInputKeyboard._HelperKeyEvent;
jeash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if( type === $_ ) return;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
}
jeash.events.FocusEvent.__name__ = ["jeash","events","FocusEvent"];
jeash.events.FocusEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.FocusEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.FocusEvent.prototype.keyCode = null;
jeash.events.FocusEvent.prototype.shiftKey = null;
jeash.events.FocusEvent.prototype.relatedObject = null;
jeash.events.FocusEvent.prototype.__class__ = jeash.events.FocusEvent;
if(!awe6.core._BasicButton) awe6.core._BasicButton = {}
awe6.core._BasicButton._HelperState = function(kernel,view) {
	if( kernel === $_ ) return;
	awe6.core.Entity.call(this,kernel);
	this.view = view;
}
awe6.core._BasicButton._HelperState.__name__ = ["awe6","core","_BasicButton","_HelperState"];
awe6.core._BasicButton._HelperState.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) awe6.core._BasicButton._HelperState.prototype[k] = awe6.core.Entity.prototype[k];
awe6.core._BasicButton._HelperState.prototype.__class__ = awe6.core._BasicButton._HelperState;
awe6.core._BasicButton._HelperEState = { __ename__ : ["awe6","core","_BasicButton","_HelperEState"], __constructs__ : ["UP","OVER"] }
awe6.core._BasicButton._HelperEState.UP = ["UP",0];
awe6.core._BasicButton._HelperEState.UP.toString = $estr;
awe6.core._BasicButton._HelperEState.UP.__enum__ = awe6.core._BasicButton._HelperEState;
awe6.core._BasicButton._HelperEState.OVER = ["OVER",1];
awe6.core._BasicButton._HelperEState.OVER.toString = $estr;
awe6.core._BasicButton._HelperEState.OVER.__enum__ = awe6.core._BasicButton._HelperEState;
jeash.net.URLLoader = function(request) {
	if( request === $_ ) return;
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = jeash.net.URLLoaderDataFormat.TEXT;
	if(request != null) this.load(request);
}
jeash.net.URLLoader.__name__ = ["jeash","net","URLLoader"];
jeash.net.URLLoader.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.net.URLLoader.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.net.URLLoader.prototype.http = null;
jeash.net.URLLoader.prototype.bytesLoaded = null;
jeash.net.URLLoader.prototype.bytesTotal = null;
jeash.net.URLLoader.prototype.data = null;
jeash.net.URLLoader.prototype.dataFormat = null;
jeash.net.URLLoader.prototype.close = function() {
}
jeash.net.URLLoader.prototype.load = function(request) {
	this.http = new jeash.net._URLLoader.Http(request.url);
	this.http.onData = $closure(this,"onData");
	this.http.onError = $closure(this,"onError");
	this.http.requestUrl(jeash.net._URLLoader.HttpType.STREAM(this.dataFormat == jeash.net.URLLoaderDataFormat.TEXT?jeash.net._URLLoader.DataFormat.TEXT:jeash.net._URLLoader.DataFormat.BINARY));
}
jeash.net.URLLoader.prototype.onData = function(_) {
	var content = this.http.getData();
	switch( (this.dataFormat)[1] ) {
	case 0:
		this.data = new jeash.utils.ByteArray();
		var _g1 = 0, _g = content.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = content["cca"](i) & 255;
			this.data.writeByte(c);
		}
		this.data.position = 0;
		break;
	case 1:
		this.data = content;
		break;
	case 2:
		throw "Not complete";
		break;
	}
	var evt = new jeash.events.Event(jeash.events.Event.COMPLETE);
	this.dispatchEvent(evt);
}
jeash.net.URLLoader.prototype.onError = function(msg) {
	jeash.Lib.trace(msg);
	var evt = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
	this.dispatchEvent(evt);
}
jeash.net.URLLoader.prototype.__class__ = jeash.net.URLLoader;
if(!jeash.net._URLLoader) jeash.net._URLLoader = {}
jeash.net._URLLoader.HttpType = { __ename__ : ["jeash","net","_URLLoader","HttpType"], __constructs__ : ["IMAGE","VIDEO","AUDIO","STREAM"] }
jeash.net._URLLoader.HttpType.IMAGE = ["IMAGE",0];
jeash.net._URLLoader.HttpType.IMAGE.toString = $estr;
jeash.net._URLLoader.HttpType.IMAGE.__enum__ = jeash.net._URLLoader.HttpType;
jeash.net._URLLoader.HttpType.VIDEO = ["VIDEO",1];
jeash.net._URLLoader.HttpType.VIDEO.toString = $estr;
jeash.net._URLLoader.HttpType.VIDEO.__enum__ = jeash.net._URLLoader.HttpType;
jeash.net._URLLoader.HttpType.AUDIO = ["AUDIO",2];
jeash.net._URLLoader.HttpType.AUDIO.toString = $estr;
jeash.net._URLLoader.HttpType.AUDIO.__enum__ = jeash.net._URLLoader.HttpType;
jeash.net._URLLoader.HttpType.STREAM = function(format) { var $x = ["STREAM",3,format]; $x.__enum__ = jeash.net._URLLoader.HttpType; $x.toString = $estr; return $x; }
jeash.net._URLLoader.DataFormat = { __ename__ : ["jeash","net","_URLLoader","DataFormat"], __constructs__ : ["BINARY","TEXT"] }
jeash.net._URLLoader.DataFormat.BINARY = ["BINARY",0];
jeash.net._URLLoader.DataFormat.BINARY.toString = $estr;
jeash.net._URLLoader.DataFormat.BINARY.__enum__ = jeash.net._URLLoader.DataFormat;
jeash.net._URLLoader.DataFormat.TEXT = ["TEXT",1];
jeash.net._URLLoader.DataFormat.TEXT.toString = $estr;
jeash.net._URLLoader.DataFormat.TEXT.__enum__ = jeash.net._URLLoader.DataFormat;
haxe.Http = function(url) {
	if( url === $_ ) return;
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw e;
	};
	h.request(false);
	return r;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
		case null: case undefined:
			me.onError("Failed to connect or resolve host");
			break;
		case 12029:
			me.onError("Failed to connect to host");
			break;
		case 12007:
			me.onError("Unknown host");
			break;
		default:
			me.onError("Http Error #" + r.status);
		}
	};
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true; else {
		var $it0 = this.params.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			if(uri == null) uri = ""; else uri += "&";
			uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
		}
	}
	try {
		if(post) r.open("POST",this.url,this.async); else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		} else r.open("GET",this.url,this.async);
	} catch( e ) {
		this.onError(e.toString());
		return;
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $it1 = this.headers.keys();
	while( $it1.hasNext() ) {
		var h = $it1.next();
		r.setRequestHeader(h,this.headers.get(h));
	}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
}
haxe.Http.prototype.onError = function(msg) {
}
haxe.Http.prototype.onStatus = function(status) {
}
haxe.Http.prototype.__class__ = haxe.Http;
jeash.net._URLLoader.Http = function(url) {
	if( url === $_ ) return;
	haxe.Http.call(this,url);
}
jeash.net._URLLoader.Http.__name__ = ["jeash","net","_URLLoader","Http"];
jeash.net._URLLoader.Http.__super__ = haxe.Http;
for(var k in haxe.Http.prototype ) jeash.net._URLLoader.Http.prototype[k] = haxe.Http.prototype[k];
jeash.net._URLLoader.Http.prototype.registerEvents = function(subject) {
	subject.onload = $closure(this,"onData");
	subject.onerror = $closure(this,"onError");
}
jeash.net._URLLoader.Http.prototype.requestUrl = function(type) {
	var self = this;
	var $e = (type);
	switch( $e[1] ) {
	case 3:
		var dataFormat = $e[2];
		var xmlHttpRequest = new XMLHttpRequest();
		switch( (dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.overrideMimeType("text/plain; charset=x-user-defined");
			break;
		default:
		}
		this.registerEvents(xmlHttpRequest);
		var uri = null;
		var $it0 = this.params.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			uri = StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
		}
		try {
			if(uri != null) {
				var question = this.url.split("?").length <= 1;
				xmlHttpRequest.open("GET",this.url + (question?"?":"&") + uri,true);
				uri = null;
			} else xmlHttpRequest.open("GET",this.url,true);
		} catch( e ) {
			throw e.toString();
		}
		xmlHttpRequest.send(uri);
		this.getData = function() {
			return xmlHttpRequest.responseText;
		};
		break;
	case 0:
		var image = js.Lib.document.createElement("img");
		this.registerEvents(image);
		image.src = this.url;
		this.getData = function() {
			return image;
		};
		break;
	case 2:
		var audio = js.Lib.document.createElement("audio");
		this.registerEvents(audio);
		audio.src = this.url;
		this.getData = function() {
			return audio;
		};
		break;
	case 1:
		var video = js.Lib.document.createElement("video");
		this.registerEvents(video);
		video.src = this.url;
		this.getData = function() {
			return video;
		};
		break;
	}
}
jeash.net._URLLoader.Http.prototype.getData = function() {
}
jeash.net._URLLoader.Http.prototype.__class__ = jeash.net._URLLoader.Http;
if(!awe6.core.drivers._AKernel) awe6.core.drivers._AKernel = {}
awe6.core.drivers._AKernel._HelperFramerate = function(framerate) {
	if( framerate === $_ ) return;
	this.framerate = framerate;
	this._timeAtLastUpdate = Std["int"](haxe.Timer.stamp() * 1000);
}
awe6.core.drivers._AKernel._HelperFramerate.__name__ = ["awe6","core","drivers","_AKernel","_HelperFramerate"];
awe6.core.drivers._AKernel._HelperFramerate.prototype.framerate = null;
awe6.core.drivers._AKernel._HelperFramerate.prototype.timeInterval = null;
awe6.core.drivers._AKernel._HelperFramerate.prototype._timeAtLastUpdate = null;
awe6.core.drivers._AKernel._HelperFramerate.prototype.update = function() {
	this.timeInterval = Std["int"](haxe.Timer.stamp() * 1000) - this._timeAtLastUpdate;
	this.framerate = 1000 / this.timeInterval;
	this._timeAtLastUpdate = Std["int"](haxe.Timer.stamp() * 1000);
}
awe6.core.drivers._AKernel._HelperFramerate.prototype._timer = function() {
	return Std["int"](haxe.Timer.stamp() * 1000);
}
awe6.core.drivers._AKernel._HelperFramerate.prototype.__class__ = awe6.core.drivers._AKernel._HelperFramerate;
Xml = function(p) {
}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
						break;
					case 1:
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
						break;
					case 2:
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						current = stack.pop();
						str = r.matchedRight();
						break;
					case 3:
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
						break;
					case 4:
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":
									count++;
									break;
								case "]":
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
									break;
								default:
									if(count == 0) throw "__break__";
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
						break;
					case 5:
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
						break;
					case 6:
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
						break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "..."; else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	return current;
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
Xml.prototype.nodeType = null;
Xml.prototype.nodeName = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._parent = null;
Xml.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
Xml.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
Xml.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
Xml.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
Xml.prototype.getParent = function() {
	return this._parent;
}
Xml.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
Xml.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
Xml.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
Xml.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
Xml.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
Xml.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}};
}
Xml.prototype.elements = function() {
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
Xml.prototype.elementsNamed = function(name) {
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
Xml.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
Xml.prototype.firstElement = function() {
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
Xml.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
Xml.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
Xml.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
Xml.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
	if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
	if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
	if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<" == null?"null":"<";
		s.add(this._nodeName);
		var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			s.b[s.b.length] = " " == null?"null":" ";
			s.b[s.b.length] = k == null?"null":k;
			s.b[s.b.length] = "=\"" == null?"null":"=\"";
			s.add(this._attributes.get(k));
			s.b[s.b.length] = "\"" == null?"null":"\"";
		}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>" == null?"null":"/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">" == null?"null":">";
	}
	var $it1 = this.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		s.add(x.toString());
	}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</" == null?"null":"</";
		s.add(this._nodeName);
		s.b[s.b.length] = ">" == null?"null":">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
jeash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if( inBitmapData === $_ ) return;
	jeash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.name = "Bitmap " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics = new jeash.display.Graphics();
	if(inBitmapData != null) this.jeashSetBitmapData(inBitmapData);
	this.jeashGraphics.jeashSurface.id = this.name;
}
jeash.display.Bitmap.__name__ = ["jeash","display","Bitmap"];
jeash.display.Bitmap.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Bitmap.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Bitmap.prototype.bitmapData = null;
jeash.display.Bitmap.prototype.pixelSnapping = null;
jeash.display.Bitmap.prototype.smoothing = null;
jeash.display.Bitmap.prototype.jeashGraphics = null;
jeash.display.Bitmap.prototype.jeashCurrentLease = null;
jeash.display.Bitmap.prototype.jeashSetBitmapData = function(inBitmapData) {
	this.jeashInvalidateBounds();
	this.bitmapData = inBitmapData;
	return inBitmapData;
}
jeash.display.Bitmap.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Bitmap.prototype.BuildBounds = function() {
	jeash.display.DisplayObject.prototype.BuildBounds.call(this);
	if(this.bitmapData != null) {
		var r = new jeash.geom.Rectangle(0,0,this.bitmapData.getWidth(),this.bitmapData.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
		}
	}
}
jeash.display.Bitmap.prototype.jeashRender = function(parentMatrix,inMask) {
	if(this.bitmapData == null) return;
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	var m = this.mFullMatrix.clone();
	var imageDataLease = this.bitmapData.jeashLease;
	if(imageDataLease != null) {
		if(this.jeashCurrentLease == null || imageDataLease.seed != this.jeashCurrentLease.seed || imageDataLease.time != this.jeashCurrentLease.time) {
			var srcCanvas = this.bitmapData.mTextureBuffer;
			this.jeashGraphics.jeashSurface.width = srcCanvas.width;
			this.jeashGraphics.jeashSurface.height = srcCanvas.height;
			this.jeashGraphics.clear();
			jeash.Lib.jeashDrawToSurface(srcCanvas,this.jeashGraphics.jeashSurface);
			this.jeashCurrentLease = imageDataLease;
		}
	}
	jeash.Lib.jeashSetSurfaceTransform(this.jeashGraphics.jeashSurface,m);
	jeash.Lib.jeashSetSurfaceOpacity(this.jeashGraphics.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
}
jeash.display.Bitmap.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	this.jeashRender(parentMatrix,canvas);
	jeash.Lib.jeashDrawToSurface(this.jeashGraphics.jeashSurface,canvas,parentMatrix,(this.parent != null?this.parent.alpha:1) * this.alpha);
}
jeash.display.Bitmap.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.jeashGetVisible()) return null; else if(this.bitmapData != null) {
		var local = this.globalToLocal(point);
		if(local.x < 0 || local.y < 0 || local.x > this.jeashGetWidth() || local.y > this.jeashGetHeight()) return null; else return this;
	} else return jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.Bitmap.prototype.__class__ = jeash.display.Bitmap;
awe6.interfaces.EAgenda = { __ename__ : ["awe6","interfaces","EAgenda"], __constructs__ : ["ALWAYS","BIRTH","DEATH","STANDARD","ATTACK","DEFEND","SUB_TYPE"] }
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
DateTools = function() { }
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	return (function($this) {
		var $r;
		switch(e) {
		case "%":
			$r = "%";
			break;
		case "C":
			$r = StringTools.lpad(Std.string(Std["int"](d.getFullYear() / 100)),"0",2);
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
			$r = Std.string(Std["int"](d.getTime() / 1000));
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
		r.b[r.b.length] = f.substr(p,np - p);
		r.add(DateTools.__format_get(d,f.substr(np + 1,1)));
		p = np + 2;
	}
	r.b[r.b.length] = f.substr(p,f.length - p);
	return r.b.join("");
}
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
}
DateTools.delta = function(d,t) {
	return Date.fromTime(d.getTime() + t);
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
	return { ms : t % 1000, seconds : Std["int"](s % 60), minutes : Std["int"](m % 60), hours : Std["int"](h % 24), days : Std["int"](h / 24)};
}
DateTools.make = function(o) {
	return o.ms + 1000.0 * (o.seconds + 60.0 * (o.minutes + 60.0 * (o.hours + 24.0 * o.days)));
}
DateTools.prototype.__class__ = DateTools;
ApplicationMain = function() { }
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.completed = null;
ApplicationMain.total = null;
ApplicationMain.loaders = null;
ApplicationMain.urlLoaders = null;
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new Hash();
	ApplicationMain.urlLoaders = new Hash();
	ApplicationMain.total = 0;
	var urlLoader = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/ButtonDown.aac",urlLoader);
	ApplicationMain.total++;
	var urlLoader1 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/ButtonOver.aac",urlLoader1);
	ApplicationMain.total++;
	var urlLoader2 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/MusicGame.aac",urlLoader2);
	ApplicationMain.total++;
	var urlLoader3 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/MusicMenu.aac",urlLoader3);
	ApplicationMain.total++;
	var urlLoader4 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/Sfx1.aac",urlLoader4);
	ApplicationMain.total++;
	var urlLoader5 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/Sfx2.aac",urlLoader5);
	ApplicationMain.total++;
	var urlLoader6 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/Sfx3.aac",urlLoader6);
	ApplicationMain.total++;
	var urlLoader7 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/audio/Sfx4.aac",urlLoader7);
	ApplicationMain.total++;
	var loader = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/ButtonOver.png",loader);
	ApplicationMain.total++;
	var loader1 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/ButtonUp.png",loader1);
	ApplicationMain.total++;
	var urlLoader8 = new jeash.net.URLLoader();
	ApplicationMain.urlLoaders.set("assets/fonts/orbitron.ttf.hash",urlLoader8);
	ApplicationMain.total++;
	var loader2 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/BackOver.png",loader2);
	ApplicationMain.total++;
	var loader3 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/BackUp.png",loader3);
	ApplicationMain.total++;
	var loader4 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/ExitOver.png",loader4);
	ApplicationMain.total++;
	var loader5 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/ExitUp.png",loader5);
	ApplicationMain.total++;
	var loader6 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/MuteOver.png",loader6);
	ApplicationMain.total++;
	var loader7 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/MuteUp.png",loader7);
	ApplicationMain.total++;
	var loader8 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/PauseOver.png",loader8);
	ApplicationMain.total++;
	var loader9 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/PauseUp.png",loader9);
	ApplicationMain.total++;
	var loader10 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnmuteOver.png",loader10);
	ApplicationMain.total++;
	var loader11 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnmuteUp.png",loader11);
	ApplicationMain.total++;
	var loader12 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnpauseOver.png",loader12);
	ApplicationMain.total++;
	var loader13 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/buttons/UnpauseUp.png",loader13);
	ApplicationMain.total++;
	var loader14 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/overlay/OverlayBackground.png",loader14);
	ApplicationMain.total++;
	var loader15 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/scenes/Background.png",loader15);
	ApplicationMain.total++;
	var loader16 = new jeash.display.Loader();
	ApplicationMain.loaders.set("assets/Sphere.png",loader16);
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader17 = ApplicationMain.loaders.get(path);
			loader17.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader17.load(new jeash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader9 = ApplicationMain.urlLoaders.get(path);
			urlLoader9.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader9.load(new jeash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	Main.main();
}
ApplicationMain.getAsset = function(inName) {
	if(inName == "assets/audio/ButtonDown.aac") return nme.installer.Assets.getBytes("assets/audio/ButtonDown.aac");
	if(inName == "assets/audio/ButtonDown.mp3") return nme.installer.Assets.getSound("assets/audio/ButtonDown.mp3");
	if(inName == "assets/audio/ButtonDown.ogg") return nme.installer.Assets.getSound("assets/audio/ButtonDown.ogg");
	if(inName == "assets/audio/ButtonOver.aac") return nme.installer.Assets.getBytes("assets/audio/ButtonOver.aac");
	if(inName == "assets/audio/ButtonOver.mp3") return nme.installer.Assets.getSound("assets/audio/ButtonOver.mp3");
	if(inName == "assets/audio/ButtonOver.ogg") return nme.installer.Assets.getSound("assets/audio/ButtonOver.ogg");
	if(inName == "assets/audio/MusicGame.aac") return nme.installer.Assets.getBytes("assets/audio/MusicGame.aac");
	if(inName == "assets/audio/MusicGame.mp3") return nme.installer.Assets.getSound("assets/audio/MusicGame.mp3");
	if(inName == "assets/audio/MusicGame.ogg") return nme.installer.Assets.getSound("assets/audio/MusicGame.ogg");
	if(inName == "assets/audio/MusicMenu.aac") return nme.installer.Assets.getBytes("assets/audio/MusicMenu.aac");
	if(inName == "assets/audio/MusicMenu.mp3") return nme.installer.Assets.getSound("assets/audio/MusicMenu.mp3");
	if(inName == "assets/audio/MusicMenu.ogg") return nme.installer.Assets.getSound("assets/audio/MusicMenu.ogg");
	if(inName == "assets/audio/Sfx1.aac") return nme.installer.Assets.getBytes("assets/audio/Sfx1.aac");
	if(inName == "assets/audio/Sfx1.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx1.mp3");
	if(inName == "assets/audio/Sfx1.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx1.ogg");
	if(inName == "assets/audio/Sfx2.aac") return nme.installer.Assets.getBytes("assets/audio/Sfx2.aac");
	if(inName == "assets/audio/Sfx2.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx2.mp3");
	if(inName == "assets/audio/Sfx2.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx2.ogg");
	if(inName == "assets/audio/Sfx3.aac") return nme.installer.Assets.getBytes("assets/audio/Sfx3.aac");
	if(inName == "assets/audio/Sfx3.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx3.mp3");
	if(inName == "assets/audio/Sfx3.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx3.ogg");
	if(inName == "assets/audio/Sfx4.aac") return nme.installer.Assets.getBytes("assets/audio/Sfx4.aac");
	if(inName == "assets/audio/Sfx4.mp3") return nme.installer.Assets.getSound("assets/audio/Sfx4.mp3");
	if(inName == "assets/audio/Sfx4.ogg") return nme.installer.Assets.getSound("assets/audio/Sfx4.ogg");
	if(inName == "assets/ButtonOver.png") return nme.installer.Assets.getBitmapData("assets/ButtonOver.png");
	if(inName == "assets/ButtonUp.png") return nme.installer.Assets.getBitmapData("assets/ButtonUp.png");
	if(inName == "assets/fonts/orbitron.ttf") return nme.installer.Assets.getFont("assets/fonts/orbitron.ttf");
	if(inName == "assets/fonts/orbitron.ttf.hash") return nme.installer.Assets.getBytes("assets/fonts/orbitron.ttf.hash");
	if(inName == "assets/overlay/buttons/BackOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackOver.png");
	if(inName == "assets/overlay/buttons/BackUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/BackUp.png");
	if(inName == "assets/overlay/buttons/ExitOver.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/ExitOver.png");
	if(inName == "assets/overlay/buttons/ExitUp.png") return nme.installer.Assets.getBitmapData("assets/overlay/buttons/ExitUp.png");
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
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.prototype.__class__ = ApplicationMain;
NME_assets_fonts_orbitron_ttf = function(p) {
	if( p === $_ ) return;
	jeash.text.Font.call(this);
}
NME_assets_fonts_orbitron_ttf.__name__ = ["NME_assets_fonts_orbitron_ttf"];
NME_assets_fonts_orbitron_ttf.__super__ = jeash.text.Font;
for(var k in jeash.text.Font.prototype ) NME_assets_fonts_orbitron_ttf.prototype[k] = jeash.text.Font.prototype[k];
NME_assets_fonts_orbitron_ttf.prototype.__class__ = NME_assets_fonts_orbitron_ttf;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from " == null?"null":"\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function" == null?"null":"a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module " == null?"null":"module ";
		b.b[b.b.length] = m == null?"null":m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (" == null?"null":" (";
		}
		b.b[b.b.length] = file == null?"null":file;
		b.b[b.b.length] = " line " == null?"null":" line ";
		b.b[b.b.length] = line == null?"null":line;
		if(s1 != null) b.b[b.b.length] = ")" == null?"null":")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname == null?"null":cname;
		b.b[b.b.length] = "." == null?"null":".";
		b.b[b.b.length] = meth == null?"null":meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #" == null?"null":"local function #";
		b.b[b.b.length] = n == null?"null":n;
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		} catch( e ) {
			$r = [];
		}
		return $r;
	}(this));
	var m = new Array();
	var _g1 = 0, _g = a.length - (s == "$s"?2:0);
	while(_g1 < _g) {
		var i = _g1++;
		var d = a[i].split("::");
		m.unshift(haxe.StackItem.Method(d[0],d[1]));
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
awe6.extras.gui.Text = function(kernel,width,height,text,textStyle,isMultiline,isInput) {
	if( kernel === $_ ) return;
	if(isInput == null) isInput = false;
	if(isMultiline == null) isMultiline = false;
	if(text == null) text = "";
	this.textStyle = textStyle != null?textStyle:new awe6.core.TextStyle();
	this._isMultiline = isMultiline;
	this._isInput = isInput;
	awe6.extras.gui.GuiEntity.call(this,kernel,width,height,false);
	this.__set_text(text);
}
awe6.extras.gui.Text.__name__ = ["awe6","extras","gui","Text"];
awe6.extras.gui.Text.__super__ = awe6.extras.gui.GuiEntity;
for(var k in awe6.extras.gui.GuiEntity.prototype ) awe6.extras.gui.Text.prototype[k] = awe6.extras.gui.GuiEntity.prototype[k];
awe6.extras.gui.Text.prototype.text = null;
awe6.extras.gui.Text.prototype.textStyle = null;
awe6.extras.gui.Text.prototype._textField = null;
awe6.extras.gui.Text.prototype._textFormat = null;
awe6.extras.gui.Text.prototype._isMultiline = null;
awe6.extras.gui.Text.prototype._isInput = null;
awe6.extras.gui.Text.prototype._isDirty = null;
awe6.extras.gui.Text.prototype._prevTextStyle = null;
awe6.extras.gui.Text.prototype._init = function() {
	awe6.extras.gui.GuiEntity.prototype._init.call(this);
	this._textField = new jeash.text.TextField();
	this._textField.multiline = this._isMultiline;
	this._textField.SetWordWrap(this._isMultiline);
	this._textField.SetWordWrap(true);
	this._textField.SetType(this._isInput?jeash.text.TextFieldType.INPUT:jeash.text.TextFieldType.DYNAMIC);
	this._textFormat = new jeash.text.TextFormat();
	this._draw();
	this._sprite.addChild(this._textField);
	this._sprite.cacheAsBitmap = true;
	this._sprite.mouseEnabled = this._isInput;
	this._sprite.mouseChildren = this._isInput;
	this._isDirty = false;
	this._prevTextStyle = this.textStyle.toString();
}
awe6.extras.gui.Text.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.extras.gui.GuiEntity.prototype._updater.call(this,deltaTime);
	this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString();
	if(this._isDirty) this._draw();
	this._prevTextStyle = this.textStyle.toString();
}
awe6.extras.gui.Text.prototype._draw = function() {
	this._textField.jeashSetWidth(this.width);
	this._textField.jeashSetHeight(this.height);
	if(this._prevTextStyle != this.textStyle.toString()) {
		this._textFormat.align = (function($this) {
			var $r;
			switch( ($this.textStyle.align)[1] ) {
			case 1:
				$r = jeash.text.TextFormatAlign.LEFT;
				break;
			case 2:
				$r = jeash.text.TextFormatAlign.CENTER;
				break;
			case 3:
				$r = jeash.text.TextFormatAlign.RIGHT;
				break;
			case 0:
				$r = jeash.text.TextFormatAlign.JUSTIFY;
				break;
			}
			return $r;
		}(this));
		this._textFormat.color = this.textStyle.color;
		this._textFormat.font = this.textStyle.font;
		this._textFormat.size = this.textStyle.size;
		this._textFormat.letterSpacing = Std["int"](this.textStyle.spacingHorizontal);
		this._textFormat.leading = Std["int"](this.textStyle.spacingVertical);
		this._textFormat.italic = this.textStyle.isItalic;
		this._textFormat.bold = this.textStyle.isBold;
		this._textField.selectable = this._isInput;
		this._textField.antiAliasType = jeash.text.AntiAliasType.ADVANCED;
		this._textField.embedFonts = false;
		var _g = 0, _g1 = jeash.text.Font.enumerateFonts();
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.fontName == this._textFormat.font) {
				this._textField.embedFonts = true;
				break;
			}
		}
		this._textField.jeashSetFilters(this.textStyle.filters);
		this._textField.setTextFormat(this._textFormat);
		this._textField.setTextFormat(this._textFormat);
	}
	this._isDirty = false;
}
awe6.extras.gui.Text.prototype.__set_text = function(value) {
	if(this.text == value) return this.text;
	this.text = value;
	this._textField.SetHTMLText(this.text);
	this._isDirty = true;
	return this.text;
}
awe6.extras.gui.Text.prototype.__class__ = awe6.extras.gui.Text;
awe6.core.MessageManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.MessageManager.__name__ = ["awe6","core","MessageManager"];
awe6.core.MessageManager.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.MessageManager.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.MessageManager.prototype._subscriptions = null;
awe6.core.MessageManager.prototype._isVerbose = null;
awe6.core.MessageManager.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this._isVerbose = false;
	this._subscriptions = new haxe.FastList();
}
awe6.core.MessageManager.prototype.addSubscriber = function(subscriber,message,handler,sender,senderClassType,isRemovedAfterFirstSend) {
	if(isRemovedAfterFirstSend == null) isRemovedAfterFirstSend = false;
	var l_subscription = new awe6.core._MessageManager._HelperSubscription(subscriber,message,handler,sender,senderClassType,isRemovedAfterFirstSend);
	this._subscriptions.add(l_subscription);
}
awe6.core.MessageManager.prototype.getSubscribers = function(subscriber,message,handler,sender,senderClassType) {
	var l_result = [];
	var l_subscriptions = this._getSubscriptions(subscriber,message,handler,sender,senderClassType);
	var $it0 = l_subscriptions.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l_result.push(i.subscriber);
	}
	return l_result;
}
awe6.core.MessageManager.prototype.removeSubscribers = function(subscriber,message,handler,sender,senderClassType) {
	var l_subscriptions = this._getSubscriptions(subscriber,message,handler,sender,senderClassType);
	var $it0 = l_subscriptions.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		this._subscriptions.remove(i);
		if(this._isVerbose) haxe.Log.trace("Removing " + i.sender + ":" + i.message,{ fileName : "MessageManager.hx", lineNumber : 78, className : "awe6.core.MessageManager", methodName : "removeSubscribers"});
	}
}
awe6.core.MessageManager.prototype.sendMessage = function(message,sender,isBubbleDown,isBubbleUp,isBubbleEverywhere) {
	if(isBubbleEverywhere == null) isBubbleEverywhere = false;
	if(isBubbleUp == null) isBubbleUp = false;
	if(isBubbleDown == null) isBubbleDown = false;
	this._sendMessage(message,sender,sender,isBubbleDown,isBubbleUp,isBubbleEverywhere);
}
awe6.core.MessageManager.prototype._sendMessage = function(message,sender,target,isBubbleDown,isBubbleUp,isBubbleEverywhere) {
	if(isBubbleEverywhere == null) isBubbleEverywhere = false;
	if(isBubbleUp == null) isBubbleUp = false;
	if(isBubbleDown == null) isBubbleDown = false;
	if(this._isVerbose) haxe.Log.trace("Sending message: " + Std.string(message) + " from " + sender.id,{ fileName : "MessageManager.hx", lineNumber : 92, className : "awe6.core.MessageManager", methodName : "_sendMessage"});
	if(isBubbleEverywhere) return this._sendMessage(message,sender,this._kernel.scenes.__get_scene().getEntities()[0],true);
	var l_subscriptions = this._getSubscriptions(null,message,null,target);
	var l_isContinue = true;
	var $it0 = l_subscriptions.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l_isContinue = this._send(i,message,sender);
		if(!l_isContinue) return;
	}
	if(isBubbleDown) {
		var l_children = target.getEntities();
		var _g = 0;
		while(_g < l_children.length) {
			var j = l_children[_g];
			++_g;
			this._sendMessage(message,sender,j,true);
		}
	}
	if(isBubbleUp && target.__get_parent() != null && Std["is"](target.__get_parent(),awe6.interfaces.IEntity)) this._sendMessage(message,sender,target.__get_parent(),false,true);
	return;
}
awe6.core.MessageManager.prototype._send = function(subscription,message,sender) {
	var l_isContinue = subscription.handler.apply(subscription.subscriber,[message,sender]);
	if(subscription.isRemovedAfterFirstSend) this._subscriptions.remove(subscription);
	return l_isContinue;
}
awe6.core.MessageManager.prototype._getSubscriptions = function(subscriber,message,handler,sender,senderClassType) {
	var l_result = new haxe.FastList();
	var $it0 = this._subscriptions.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		if(subscriber != null && i.subscriber != subscriber) continue;
		if(message != null && !Std["is"](message,i.messageClass)) {
			var $e = (Type["typeof"](message));
			switch( $e[1] ) {
			case 7:
				var e = $e[2];
				if(!Type.enumEq(message,i.message)) continue;
				break;
			default:
				if(message != i.message) continue;
			}
		}
		if(handler != null && !Reflect.compareMethods(i.handler,handler)) continue;
		if(sender != null && i.sender != null && i.sender != sender) continue;
		if(i.senderClassType != null && !Std["is"](sender,i.senderClassType)) continue;
		l_result.head = new haxe.FastCell(i,l_result.head);
	}
	return l_result;
}
awe6.core.MessageManager.prototype.__class__ = awe6.core.MessageManager;
awe6.core.MessageManager.__interfaces__ = [awe6.interfaces.IMessageManager];
if(!awe6.core._MessageManager) awe6.core._MessageManager = {}
awe6.core._MessageManager._HelperSubscription = function(subscriber,message,handler,sender,senderClassType,isRemovedAfterFirstSend) {
	if( subscriber === $_ ) return;
	if(isRemovedAfterFirstSend == null) isRemovedAfterFirstSend = false;
	this.subscriber = subscriber;
	this.message = message;
	this.handler = handler;
	this.sender = sender;
	this.senderClassType = senderClassType;
	this.isRemovedAfterFirstSend = isRemovedAfterFirstSend;
	this.messageClass = Type.getClass(message);
}
awe6.core._MessageManager._HelperSubscription.__name__ = ["awe6","core","_MessageManager","_HelperSubscription"];
awe6.core._MessageManager._HelperSubscription.prototype.subscriber = null;
awe6.core._MessageManager._HelperSubscription.prototype.message = null;
awe6.core._MessageManager._HelperSubscription.prototype.messageClass = null;
awe6.core._MessageManager._HelperSubscription.prototype.handler = null;
awe6.core._MessageManager._HelperSubscription.prototype.sender = null;
awe6.core._MessageManager._HelperSubscription.prototype.senderClassType = null;
awe6.core._MessageManager._HelperSubscription.prototype.isRemovedAfterFirstSend = null;
awe6.core._MessageManager._HelperSubscription.prototype.__class__ = awe6.core._MessageManager._HelperSubscription;
awe6.interfaces.IPreloader = function() { }
awe6.interfaces.IPreloader.__name__ = ["awe6","interfaces","IPreloader"];
awe6.interfaces.IPreloader.prototype.__class__ = awe6.interfaces.IPreloader;
awe6.interfaces.IPreloader.__interfaces__ = [awe6.interfaces.IProgress,awe6.interfaces.IViewable,awe6.interfaces.IProcess];
awe6.core.drivers.APreloader = function(kernel,assets,isDecached) {
	if( kernel === $_ ) return;
	if(isDecached == null) isDecached = false;
	this._assets = assets;
	this._isDecached = isDecached;
	awe6.core.Process.call(this,kernel);
}
awe6.core.drivers.APreloader.__name__ = ["awe6","core","drivers","APreloader"];
awe6.core.drivers.APreloader.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.drivers.APreloader.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.drivers.APreloader.prototype.view = null;
awe6.core.drivers.APreloader.prototype.progress = null;
awe6.core.drivers.APreloader.prototype._assets = null;
awe6.core.drivers.APreloader.prototype._isDecached = null;
awe6.core.drivers.APreloader.prototype._encrypter = null;
awe6.core.drivers.APreloader.prototype._currentProgress = null;
awe6.core.drivers.APreloader.prototype._currentAsset = null;
awe6.core.drivers.APreloader.prototype._isComplete = null;
awe6.core.drivers.APreloader.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.progress = 0;
	if(this.__get_view() == null) this.view = new awe6.core.drivers.js.View(this._kernel);
	this._encrypter = this._tools;
	this._currentProgress = 0;
	this._currentAsset = 0;
	this._isComplete = false;
	if(this._assets.length > 0) this._next();
}
awe6.core.drivers.APreloader.prototype._next = function() {
	this._currentAsset++;
	if(this._currentAsset > this._assets.length) {
		if(!this._isComplete) {
			haxe.Timer.delay($closure(this,"dispose"),100);
			this._isComplete = true;
		}
		return;
	} else this._nativeLoad(this._assets[this._currentAsset - 1]);
	this._currentProgress = 0;
}
awe6.core.drivers.APreloader.prototype._nativeLoad = function(url) {
}
awe6.core.drivers.APreloader.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	if(this._assets.length == 0) {
		if(this.isDisposed) null; else {
			this.isDisposed = true;
			this.__set_isActive(false);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this);
			this._disposer();
			null;
		}
	}
	this.__get_view().__set_isVisible(this._age > 500);
}
awe6.core.drivers.APreloader.prototype._disposer = function() {
	this.__get_view().dispose();
	this._nativeDisposer();
	awe6.core.Process.prototype._disposer.call(this);
	this._kernel.onPreloaderComplete(this);
	this._kernel.overlay.flash();
}
awe6.core.drivers.APreloader.prototype._nativeDisposer = function() {
}
awe6.core.drivers.APreloader.prototype.__get_view = function() {
	return this.view;
}
awe6.core.drivers.APreloader.prototype.__get_progress = function() {
	return this.progress;
}
awe6.core.drivers.APreloader.prototype.__class__ = awe6.core.drivers.APreloader;
awe6.core.drivers.APreloader.__interfaces__ = [awe6.interfaces.IPreloader];
awe6.core.drivers.js.Preloader = function(kernel,assets,isDecached) {
	if( kernel === $_ ) return;
	if(isDecached == null) isDecached = false;
	awe6.core.drivers.APreloader.call(this,kernel,assets,isDecached);
}
awe6.core.drivers.js.Preloader.__name__ = ["awe6","core","drivers","js","Preloader"];
awe6.core.drivers.js.Preloader.__super__ = awe6.core.drivers.APreloader;
for(var k in awe6.core.drivers.APreloader.prototype ) awe6.core.drivers.js.Preloader.prototype[k] = awe6.core.drivers.APreloader.prototype[k];
awe6.core.drivers.js.Preloader.prototype.__class__ = awe6.core.drivers.js.Preloader;
awe6.core.drivers.js.InputMouse = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.drivers.AInputMouse.call(this,kernel);
}
awe6.core.drivers.js.InputMouse.__name__ = ["awe6","core","drivers","js","InputMouse"];
awe6.core.drivers.js.InputMouse.__super__ = awe6.core.drivers.AInputMouse;
for(var k in awe6.core.drivers.AInputMouse.prototype ) awe6.core.drivers.js.InputMouse.prototype[k] = awe6.core.drivers.AInputMouse.prototype[k];
awe6.core.drivers.js.InputMouse.prototype._stage = null;
awe6.core.drivers.js.InputMouse.prototype._mouseClicks = null;
awe6.core.drivers.js.InputMouse.prototype._nativeInit = function() {
	this._stage = jeash.Lib.jeashGetCurrent().GetStage();
	this._stage.addEventListener(jeash.events.MouseEvent.MOUSE_DOWN,$closure(this,"_onMouseDown"));
	this._stage.addEventListener(jeash.events.MouseEvent.MOUSE_UP,$closure(this,"_onMouseUp"));
	this._stage.addEventListener(jeash.events.MouseEvent.MOUSE_WHEEL,$closure(this,"_onMouseWheel"));
	this._stage.addEventListener(jeash.events.Event.DEACTIVATE,$closure(this,"_reset"));
}
awe6.core.drivers.js.InputMouse.prototype._disposer = function() {
	this._stage.removeEventListener(jeash.events.MouseEvent.MOUSE_DOWN,$closure(this,"_onMouseDown"));
	this._stage.removeEventListener(jeash.events.MouseEvent.MOUSE_UP,$closure(this,"_onMouseUp"));
	this._stage.removeEventListener(jeash.events.MouseEvent.MOUSE_WHEEL,$closure(this,"_onMouseWheel"));
	this._stage.removeEventListener(jeash.events.Event.DEACTIVATE,$closure(this,"_reset"));
	awe6.core.drivers.AInputMouse.prototype._disposer.call(this);
}
awe6.core.drivers.js.InputMouse.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	this._stage.SetFocus(this._stage);
	awe6.core.drivers.AInputMouse.prototype._updater.call(this,deltaTime);
}
awe6.core.drivers.js.InputMouse.prototype._isWithinBounds = function() {
	return this._stage.jeashGetMouseX() >= 0 && this._stage.jeashGetMouseX() <= this._kernel.factory.width && this._stage.jeashGetMouseY() >= 0 && this._stage.jeashGetMouseY() <= this._kernel.factory.height;
}
awe6.core.drivers.js.InputMouse.prototype._getPosition = function() {
	var l_x = Std["int"](this._tools.limit(this._stage.jeashGetMouseX(),0,this._kernel.factory.width));
	var l_y = Std["int"](this._tools.limit(this._stage.jeashGetMouseY(),0,this._kernel.factory.height));
	this.x = l_x == this._kernel.factory.width?this._xPrev:l_x;
	this.y = l_y == this._kernel.factory.height?this._yPrev:l_y;
}
awe6.core.drivers.js.InputMouse.prototype._onMouseDown = function(event) {
	if(!this.isActive) return;
	this._buffer.push(true);
}
awe6.core.drivers.js.InputMouse.prototype._onMouseUp = function(event) {
	if(!this.isActive) return;
	this._buffer.push(false);
}
awe6.core.drivers.js.InputMouse.prototype._onMouseWheel = function(event) {
	if(!this.isActive) return;
	this.scroll += event.delta;
	haxe.Log.trace(this.scroll,{ fileName : "InputMouse.hx", lineNumber : 111, className : "awe6.core.drivers.js.InputMouse", methodName : "_onMouseWheel"});
}
awe6.core.drivers.js.InputMouse.prototype.__set_isVisible = function(value) {
	if(value) jeash.ui.Mouse.show(); else jeash.ui.Mouse.hide();
	return awe6.core.drivers.AInputMouse.prototype.__set_isVisible.call(this,value);
}
awe6.core.drivers.js.InputMouse.prototype.__set_cursorType = function(value) {
	var $e = (value);
	switch( $e[1] ) {
	case 0:
		if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
		break;
	case 1:
		if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer","");
		break;
	case 2:
		if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer","");
		break;
	case 3:
		if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
		break;
	case 4:
		var value1 = $e[2];
		break;
	}
	return awe6.core.drivers.AInputMouse.prototype.__set_cursorType.call(this,value);
}
awe6.core.drivers.js.InputMouse.prototype.__class__ = awe6.core.drivers.js.InputMouse;
jeash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if( type === $_ ) return;
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
	jeash.events.Event.call(this,type,bubbles,cancelable);
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
}
jeash.events.MouseEvent.__name__ = ["jeash","events","MouseEvent"];
jeash.events.MouseEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.MouseEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.MouseEvent.prototype.altKey = null;
jeash.events.MouseEvent.prototype.buttonDown = null;
jeash.events.MouseEvent.prototype.ctrlKey = null;
jeash.events.MouseEvent.prototype.delta = null;
jeash.events.MouseEvent.prototype.localX = null;
jeash.events.MouseEvent.prototype.localY = null;
jeash.events.MouseEvent.prototype.relatedObject = null;
jeash.events.MouseEvent.prototype.shiftKey = null;
jeash.events.MouseEvent.prototype.stageX = null;
jeash.events.MouseEvent.prototype.stageY = null;
jeash.events.MouseEvent.prototype.commandKey = null;
jeash.events.MouseEvent.prototype.clickCount = null;
jeash.events.MouseEvent.prototype.jeashCreateSimilar = function(type,related,targ) {
	var result = new jeash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
	if(targ != null) result.target = targ;
	return result;
}
jeash.events.MouseEvent.prototype.updateAfterEvent = function() {
}
jeash.events.MouseEvent.prototype.__class__ = jeash.events.MouseEvent;
jeash.events.EventPhase = function() { }
jeash.events.EventPhase.__name__ = ["jeash","events","EventPhase"];
jeash.events.EventPhase.prototype.__class__ = jeash.events.EventPhase;
jeash.display.SpreadMethod = { __ename__ : ["jeash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
jeash.display.SpreadMethod.REPEAT = ["REPEAT",0];
jeash.display.SpreadMethod.REPEAT.toString = $estr;
jeash.display.SpreadMethod.REPEAT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.REFLECT = ["REFLECT",1];
jeash.display.SpreadMethod.REFLECT.toString = $estr;
jeash.display.SpreadMethod.REFLECT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.PAD = ["PAD",2];
jeash.display.SpreadMethod.PAD.toString = $estr;
jeash.display.SpreadMethod.PAD.__enum__ = jeash.display.SpreadMethod;
awe6.core.SceneManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.Process.call(this,kernel);
}
awe6.core.SceneManager.__name__ = ["awe6","core","SceneManager"];
awe6.core.SceneManager.__super__ = awe6.core.Process;
for(var k in awe6.core.Process.prototype ) awe6.core.SceneManager.prototype[k] = awe6.core.Process.prototype[k];
awe6.core.SceneManager.prototype.scene = null;
awe6.core.SceneManager.prototype.view = null;
awe6.core.SceneManager.prototype._sceneTransition = null;
awe6.core.SceneManager.prototype._init = function() {
	awe6.core.Process.prototype._init.call(this);
	this.view = new awe6.core.drivers.js.View(this._kernel);
}
awe6.core.SceneManager.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Process.prototype._updater.call(this,deltaTime);
	if(this.__get_scene() != null) this.__get_scene().update(deltaTime);
	if(this._sceneTransition != null) this._sceneTransition.update(deltaTime);
}
awe6.core.SceneManager.prototype._disposer = function() {
	if(this.__get_scene() != null) this.__get_scene().dispose();
	if(this._sceneTransition != null) this._sceneTransition.dispose();
	this.view.dispose();
	awe6.core.Process.prototype._disposer.call(this);
}
awe6.core.SceneManager.prototype.setScene = function(type) {
	var l_previousType = null;
	if(this.__get_scene() != null) {
		l_previousType = this.__get_scene().type;
		var l_newSceneTransition = this._kernel.factory.createSceneTransition(type,l_previousType);
		if(this._sceneTransition != null) this._sceneTransition.dispose();
		this._sceneTransition = l_newSceneTransition;
		this._kernel.inputs.reset();
		if(this.__get_scene().isDisposable) this.__get_scene().dispose();
		this.scene = null;
	}
	this._kernel.overlay.hideButtons();
	this.scene = this._kernel.factory.createScene(type);
	this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.BACK,this._kernel.factory.getBackSceneType(this.__get_scene().type) != null);
	this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.MUTE,this.__get_scene().isMuteable && !this._kernel.audio.isMute);
	this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.UNMUTE,this.__get_scene().isMuteable && this._kernel.audio.isMute);
	this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.PAUSE,this.__get_scene().isPauseable && this._kernel.isActive);
	this._kernel.overlay.showButton(awe6.interfaces.EOverlayButton.UNPAUSE,this.__get_scene().isPauseable && !this._kernel.isActive);
	this.view.addChild(this.__get_scene().__get_view());
	if(this._sceneTransition != null) this.__get_scene().__get_view().addChild(this._sceneTransition.__get_view(),this._tools.BIG_NUMBER + 1);
}
awe6.core.SceneManager.prototype.back = function() {
	this.setScene(this._kernel.factory.getBackSceneType(this.__get_scene().type));
}
awe6.core.SceneManager.prototype.next = function() {
	if(this.__get_scene().isSessionSavedOnNext && this._kernel.__get_session() != null) this._kernel.__get_session().save();
	this.setScene(this._kernel.factory.getNextSceneType(this.__get_scene().type));
}
awe6.core.SceneManager.prototype.restart = function() {
	if(this.__get_scene() == null) this.setScene(this._kernel.factory.startingSceneType); else this.setScene(this.__get_scene().type);
}
awe6.core.SceneManager.prototype.__get_scene = function() {
	return this.scene;
}
awe6.core.SceneManager.prototype.__class__ = awe6.core.SceneManager;
awe6.core.SceneManager.__interfaces__ = [awe6.interfaces.ISceneManager];
jeash.display.GraphicsSolidFill = function(color,alpha) {
	if( color === $_ ) return;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.SOLID;
	this.jeashGraphicsFillType = jeash.display.GraphicsFillType.SOLID_FILL;
}
jeash.display.GraphicsSolidFill.__name__ = ["jeash","display","GraphicsSolidFill"];
jeash.display.GraphicsSolidFill.prototype.alpha = null;
jeash.display.GraphicsSolidFill.prototype.color = null;
jeash.display.GraphicsSolidFill.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsSolidFill.prototype.jeashGraphicsFillType = null;
jeash.display.GraphicsSolidFill.prototype.__class__ = jeash.display.GraphicsSolidFill;
jeash.display.GraphicsSolidFill.__interfaces__ = [jeash.display.IGraphicsFill,jeash.display.IGraphicsData];
awe6.extras.gui.Image = function(kernel,bitmapData) {
	if( kernel === $_ ) return;
	this._bitmapData = bitmapData;
	awe6.extras.gui.GuiEntity.call(this,kernel,bitmapData.mTextureBuffer != null?bitmapData.mTextureBuffer.width:0,bitmapData.mTextureBuffer != null?bitmapData.mTextureBuffer.height:0);
}
awe6.extras.gui.Image.__name__ = ["awe6","extras","gui","Image"];
awe6.extras.gui.Image.__super__ = awe6.extras.gui.GuiEntity;
for(var k in awe6.extras.gui.GuiEntity.prototype ) awe6.extras.gui.Image.prototype[k] = awe6.extras.gui.GuiEntity.prototype[k];
awe6.extras.gui.Image.prototype._bitmapData = null;
awe6.extras.gui.Image.prototype._bitmap = null;
awe6.extras.gui.Image.prototype._init = function() {
	awe6.extras.gui.GuiEntity.prototype._init.call(this);
	this._bitmap = new jeash.display.Bitmap(this._bitmapData);
	this._sprite.mouseEnabled = false;
	this._sprite.addChild(this._bitmap);
}
awe6.extras.gui.Image.prototype.configure = function(bitmapData) {
	this._bitmapData = bitmapData;
	this._bitmap.jeashSetBitmapData(this._bitmapData);
}
awe6.extras.gui.Image.prototype._disposer = function() {
	this._bitmapData.dispose();
	awe6.extras.gui.GuiEntity.prototype._disposer.call(this);
}
awe6.extras.gui.Image.prototype.__class__ = awe6.extras.gui.Image;
jeash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if( inX === $_ ) return;
	this.x = inX == null?0:inX;
	this.y = inY == null?0:inY;
	this.width = inWidth == null?0:inWidth;
	this.height = inHeight == null?0:inHeight;
}
jeash.geom.Rectangle.__name__ = ["jeash","geom","Rectangle"];
jeash.geom.Rectangle.prototype.x = null;
jeash.geom.Rectangle.prototype.y = null;
jeash.geom.Rectangle.prototype.width = null;
jeash.geom.Rectangle.prototype.height = null;
jeash.geom.Rectangle.prototype.left = null;
jeash.geom.Rectangle.prototype.get_left = function() {
	return this.x;
}
jeash.geom.Rectangle.prototype.set_left = function(l) {
	this.width -= l - this.x;
	this.x = l;
	return l;
}
jeash.geom.Rectangle.prototype.right = null;
jeash.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
}
jeash.geom.Rectangle.prototype.set_right = function(r) {
	this.width = r - this.x;
	return r;
}
jeash.geom.Rectangle.prototype.top = null;
jeash.geom.Rectangle.prototype.get_top = function() {
	return this.y;
}
jeash.geom.Rectangle.prototype.set_top = function(t) {
	this.height -= t - this.y;
	this.y = t;
	return t;
}
jeash.geom.Rectangle.prototype.bottom = null;
jeash.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
}
jeash.geom.Rectangle.prototype.set_bottom = function(b) {
	this.height = b - this.y;
	return b;
}
jeash.geom.Rectangle.prototype.topLeft = null;
jeash.geom.Rectangle.prototype.get_topLeft = function() {
	return new jeash.geom.Point(this.x,this.y);
}
jeash.geom.Rectangle.prototype.set_topLeft = function(p) {
	this.x = p.x;
	this.y = p.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.size = null;
jeash.geom.Rectangle.prototype.get_size = function() {
	return new jeash.geom.Point(this.width,this.height);
}
jeash.geom.Rectangle.prototype.set_size = function(p) {
	this.width = p.x;
	this.height = p.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.bottomRight = null;
jeash.geom.Rectangle.prototype.get_bottomRight = function() {
	return new jeash.geom.Point(this.x + this.width,this.y + this.height);
}
jeash.geom.Rectangle.prototype.set_bottomRight = function(p) {
	this.width = p.x - this.x;
	this.height = p.y - this.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.clone = function() {
	return new jeash.geom.Rectangle(this.x,this.y,this.width,this.height);
}
jeash.geom.Rectangle.prototype.contains = function(inX,inY) {
	return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
}
jeash.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x,point.y);
}
jeash.geom.Rectangle.prototype.containsRect = function(rect) {
	return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
}
jeash.geom.Rectangle.prototype.equals = function(toCompare) {
	return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
}
jeash.geom.Rectangle.prototype.inflate = function(dx,dy) {
	this.x -= dx;
	this.width += dx * 2;
	this.y -= dy;
	this.height += dy * 2;
}
jeash.geom.Rectangle.prototype.inflatePoint = function(point) {
	this.inflate(point.x,point.y);
}
jeash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return new jeash.geom.Rectangle();
	var y0 = this.y < toIntersect.y?toIntersect.x:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	if(y1 <= y0) return new jeash.geom.Rectangle();
	return new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
jeash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return false;
	var y0 = this.y < toIntersect.y?toIntersect.x:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	return y1 > y0;
}
jeash.geom.Rectangle.prototype.union = function(toUnion) {
	var x0 = this.x > toUnion.x?toUnion.x:this.x;
	var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
	var y0 = this.y > toUnion.y?toUnion.x:this.y;
	var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
	return new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
jeash.geom.Rectangle.prototype.isEmpty = function() {
	return this.width == 0 && this.height == 0;
}
jeash.geom.Rectangle.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
jeash.geom.Rectangle.prototype.offsetPoint = function(point) {
	this.x += point.x;
	this.y += point.y;
}
jeash.geom.Rectangle.prototype.setEmpty = function() {
	this.x = this.y = this.width = this.height = 0;
}
jeash.geom.Rectangle.prototype.transform = function(m) {
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
	return new jeash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
}
jeash.geom.Rectangle.prototype.extendBounds = function(r) {
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
jeash.geom.Rectangle.prototype.__class__ = jeash.geom.Rectangle;
jeash.display.MovieClip = function(p) {
	if( p === $_ ) return;
	jeash.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.name = "MovieClip " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.MovieClip.__name__ = ["jeash","display","MovieClip"];
jeash.display.MovieClip.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) jeash.display.MovieClip.prototype[k] = jeash.display.Sprite.prototype[k];
jeash.display.MovieClip.prototype.enabled = null;
jeash.display.MovieClip.prototype.currentFrame = null;
jeash.display.MovieClip.prototype.framesLoaded = null;
jeash.display.MovieClip.prototype.totalFrames = null;
jeash.display.MovieClip.prototype.mCurrentFrame = null;
jeash.display.MovieClip.prototype.mTotalFrames = null;
jeash.display.MovieClip.prototype.GetTotalFrames = function() {
	return this.mTotalFrames;
}
jeash.display.MovieClip.prototype.GetCurrentFrame = function() {
	return this.mCurrentFrame;
}
jeash.display.MovieClip.prototype.gotoAndPlay = function(frame,scene) {
}
jeash.display.MovieClip.prototype.gotoAndStop = function(frame,scene) {
}
jeash.display.MovieClip.prototype.play = function() {
}
jeash.display.MovieClip.prototype.stop = function() {
}
jeash.display.MovieClip.prototype.__class__ = jeash.display.MovieClip;
jeash.text.TextField = function(p) {
	if( p === $_ ) return;
	jeash.display.InteractiveObject.call(this);
	this.mWidth = 40;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.jeashGraphics = new jeash.display.Graphics();
	this.mCaretGfx = new jeash.display.Graphics();
	this.mFace = jeash.text.TextField.mDefaultFont;
	this.mAlign = jeash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.mScrollH = 0;
	this.mScrollV = 1;
	this.mType = jeash.text.TextFieldType.DYNAMIC;
	this.SetAutoSize(jeash.text.TextFieldAutoSize.NONE);
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.mInput = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.name = "TextField " + jeash.display.DisplayObject.mNameID++;
	this.SetBorderColor(0);
	this.SetBorder(false);
	this.SetBackgroundColor(16777215);
	this.SetBackground(false);
}
jeash.text.TextField.__name__ = ["jeash","text","TextField"];
jeash.text.TextField.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.text.TextField.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.text.TextField.prototype.htmlText = null;
jeash.text.TextField.prototype.text = null;
jeash.text.TextField.prototype.textColor = null;
jeash.text.TextField.prototype.textWidth = null;
jeash.text.TextField.prototype.textHeight = null;
jeash.text.TextField.prototype.defaultTextFormat = null;
jeash.text.TextField.prototype.mHTMLText = null;
jeash.text.TextField.prototype.mText = null;
jeash.text.TextField.prototype.mTextColour = null;
jeash.text.TextField.prototype.mType = null;
jeash.text.TextField.prototype.autoSize = null;
jeash.text.TextField.prototype.selectable = null;
jeash.text.TextField.prototype.multiline = null;
jeash.text.TextField.prototype.embedFonts = null;
jeash.text.TextField.prototype.borderColor = null;
jeash.text.TextField.prototype.background = null;
jeash.text.TextField.prototype.backgroundColor = null;
jeash.text.TextField.prototype.caretPos = null;
jeash.text.TextField.prototype.displayAsPassword = null;
jeash.text.TextField.prototype.border = null;
jeash.text.TextField.prototype.wordWrap = null;
jeash.text.TextField.prototype.maxChars = null;
jeash.text.TextField.prototype.restrict = null;
jeash.text.TextField.prototype.type = null;
jeash.text.TextField.prototype.antiAliasType = null;
jeash.text.TextField.prototype.sharpness = null;
jeash.text.TextField.prototype.gridFitType = null;
jeash.text.TextField.prototype.length = null;
jeash.text.TextField.prototype.mTextHeight = null;
jeash.text.TextField.prototype.mFace = null;
jeash.text.TextField.prototype.mDownChar = null;
jeash.text.TextField.prototype.selectionBeginIndex = null;
jeash.text.TextField.prototype.selectionEndIndex = null;
jeash.text.TextField.prototype.caretIndex = null;
jeash.text.TextField.prototype.mParagraphs = null;
jeash.text.TextField.prototype.mTryFreeType = null;
jeash.text.TextField.prototype.mLineInfo = null;
jeash.text.TextField.prototype.mAlign = null;
jeash.text.TextField.prototype.mHTMLMode = null;
jeash.text.TextField.prototype.mSelStart = null;
jeash.text.TextField.prototype.mSelEnd = null;
jeash.text.TextField.prototype.mInsertPos = null;
jeash.text.TextField.prototype.mSelectDrag = null;
jeash.text.TextField.prototype.mInput = null;
jeash.text.TextField.prototype.mWidth = null;
jeash.text.TextField.prototype.mHeight = null;
jeash.text.TextField.prototype.mSelectionAnchored = null;
jeash.text.TextField.prototype.mSelectionAnchor = null;
jeash.text.TextField.prototype.mScrollH = null;
jeash.text.TextField.prototype.mScrollV = null;
jeash.text.TextField.prototype.jeashGraphics = null;
jeash.text.TextField.prototype.mCaretGfx = null;
jeash.text.TextField.prototype.ClearSelection = function() {
	this.mSelStart = this.mSelEnd = -1;
	this.mSelectionAnchored = false;
	this.Rebuild();
}
jeash.text.TextField.prototype.DeleteSelection = function() {
	if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) {
		this.mText = this.mText.substr(0,this.mSelStart) + this.mText.substr(this.mSelEnd);
		this.mInsertPos = this.mSelStart;
		this.mSelStart = this.mSelEnd = -1;
		this.mSelectionAnchored = false;
	}
}
jeash.text.TextField.prototype.OnMoveKeyStart = function(inShift) {
	if(inShift && this.selectable) {
		if(!this.mSelectionAnchored) {
			this.mSelectionAnchored = true;
			this.mSelectionAnchor = this.mInsertPos;
			if(jeash.text.TextField.sSelectionOwner != this) {
				if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
				jeash.text.TextField.sSelectionOwner = this;
			}
		}
	} else this.ClearSelection();
}
jeash.text.TextField.prototype.OnMoveKeyEnd = function() {
	if(this.mSelectionAnchored) {
		if(this.mInsertPos < this.mSelectionAnchor) {
			this.mSelStart = this.mInsertPos;
			this.mSelEnd = this.mSelectionAnchor;
		} else {
			this.mSelStart = this.mSelectionAnchor;
			this.mSelEnd = this.mInsertPos;
		}
	}
}
jeash.text.TextField.prototype.OnKey = function(inKey) {
	if(inKey.type != jeash.events.KeyboardEvent.KEY_DOWN) return;
	var key = inKey.keyCode;
	var ascii = inKey.charCode;
	var shift = inKey.shiftKey;
	if(ascii == 3) {
		if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) throw "To implement setClipboardString. TextField.OnKey";
		return;
	}
	if(this.mInput) {
		if(key == jeash.ui.Keyboard.LEFT) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos--;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.RIGHT) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos++;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.HOME) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos = 0;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.END) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos = this.mText.length;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.DELETE || key == jeash.ui.Keyboard.BACKSPACE) {
			if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) this.DeleteSelection(); else {
				if(key == jeash.ui.Keyboard.BACKSPACE && this.mInsertPos > 0) this.mInsertPos--;
				var l = this.mText.length;
				if(this.mInsertPos > l) {
					if(l > 0) this.mText = this.mText.substr(0,l - 1);
				} else this.mText = this.mText.substr(0,this.mInsertPos) + this.mText.substr(this.mInsertPos + 1);
			}
		} else if(ascii >= 32 && ascii < 128) {
			if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) this.DeleteSelection();
			this.mText = this.mText.substr(0,this.mInsertPos) + String.fromCharCode(ascii) + this.mText.substr(this.mInsertPos);
			this.mInsertPos++;
		}
		if(this.mInsertPos < 0) this.mInsertPos = 0;
		var l = this.mText.length;
		if(this.mInsertPos > l) this.mInsertPos = l;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.OnFocusIn = function(inMouse) {
	if(this.mInput && this.selectable && !inMouse) {
		this.mSelStart = 0;
		this.mSelEnd = this.mText.length;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.jeashGetWidth = function() {
	return this.mWidth;
}
jeash.text.TextField.prototype.jeashGetHeight = function() {
	return this.mHeight;
}
jeash.text.TextField.prototype.jeashSetWidth = function(inWidth) {
	if(inWidth != this.mWidth) {
		this.mWidth = inWidth;
		this.Rebuild();
	}
	return this.mWidth;
}
jeash.text.TextField.prototype.jeashSetHeight = function(inHeight) {
	if(inHeight != this.mHeight) {
		this.mHeight = inHeight;
		this.Rebuild();
	}
	return this.mHeight;
}
jeash.text.TextField.prototype.GetType = function() {
	return this.mType;
}
jeash.text.TextField.prototype.SetType = function(inType) {
	this.mType = inType;
	this.mInput = this.mType == jeash.text.TextFieldType.INPUT;
	if(this.mInput && this.mHTMLMode) this.ConvertHTMLToText(true);
	this.tabEnabled = this.GetType() == jeash.text.TextFieldType.INPUT;
	this.Rebuild();
	return inType;
}
jeash.text.TextField.prototype.GetCaret = function() {
	return this.mInsertPos;
}
jeash.text.TextField.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.text.TextField.prototype.getLineIndexAtPoint = function(inX,inY) {
	if(this.mLineInfo.length < 1) return -1;
	if(inY <= 0) return 0;
	var _g1 = 0, _g = this.mLineInfo.length;
	while(_g1 < _g) {
		var l = _g1++;
		if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
	}
	return this.mLineInfo.length - 1;
}
jeash.text.TextField.prototype.getCharIndexAtPoint = function(inX,inY) {
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
jeash.text.TextField.prototype.getCharBoundaries = function(a) {
	return null;
}
jeash.text.TextField.prototype.OnMouseDown = function(inX,inY) {
	if(this.tabEnabled || this.selectable) {
		if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
		jeash.text.TextField.sSelectionOwner = this;
		this.GetStage().SetFocus(this);
		var gx = inX / this.GetStage().jeashGetScaleX();
		var gy = inY / this.GetStage().jeashGetScaleY();
		var pos = this.globalToLocal(new jeash.geom.Point(gx,gy));
		this.mSelectDrag = this.getCharIndexAtPoint(pos.x,pos.y);
		if(this.tabEnabled) this.mInsertPos = this.mSelectDrag;
		this.mSelStart = this.mSelEnd = -1;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.OnMouseDrag = function(inX,inY) {
	if((this.tabEnabled || this.selectable) && this.mSelectDrag >= 0) {
		var gx = inX / this.GetStage().jeashGetScaleX();
		var gy = inY / this.GetStage().jeashGetScaleY();
		var pos = this.globalToLocal(new jeash.geom.Point(gx,gy));
		var idx = this.getCharIndexAtPoint(pos.x,pos.y);
		if(jeash.text.TextField.sSelectionOwner != this) {
			if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
			jeash.text.TextField.sSelectionOwner = this;
		}
		if(idx < this.mSelectDrag) {
			this.mSelStart = idx;
			this.mSelEnd = this.mSelectDrag;
		} else if(idx > this.mSelectDrag) {
			this.mSelStart = this.mSelectDrag;
			this.mSelEnd = idx;
		} else this.mSelStart = this.mSelEnd = -1;
		if(this.tabEnabled) this.mInsertPos = idx;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.OnMouseUp = function(inX,inY) {
	this.mSelectDrag = -1;
}
jeash.text.TextField.prototype.mMaxWidth = null;
jeash.text.TextField.prototype.mMaxHeight = null;
jeash.text.TextField.prototype.mLimitRenderX = null;
jeash.text.TextField.prototype.RenderRow = function(inRow,inY,inCharIdx,inAlign,inInsert) {
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
	var full_height = Std["int"](h * 1.2);
	var align_x = 0;
	var insert_x = 0;
	if(inInsert != null) {
		if(this.autoSize != jeash.text.TextFieldAutoSize.NONE) {
			this.mScrollH = 0;
			insert_x = inInsert;
		} else {
			insert_x = inInsert - this.mScrollH;
			if(insert_x < 0) this.mScrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.mScrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
			if(this.mScrollH < 0) this.mScrollH = 0;
		}
	}
	if(this.autoSize == jeash.text.TextFieldAutoSize.NONE && w <= this.mLimitRenderX) {
		if(inAlign == jeash.text.TextFormatAlign.CENTER) align_x = this.mLimitRenderX - w >> 1; else if(inAlign == jeash.text.TextFormatAlign.RIGHT) align_x = this.mLimitRenderX - w;
	}
	var x_list = new Array();
	this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx, mX : x_list});
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
				this.jeashGraphics.lineStyle();
				this.jeashGraphics.beginFill(2105440);
				this.jeashGraphics.drawRect(x,inY,adv,full_height);
				this.jeashGraphics.endFill();
				if(cache_normal_font == chr.font) font = cache_sel_font; else {
					font = jeash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
					cache_sel_font = font;
					cache_normal_font = chr.font;
				}
			}
			font.RenderChar(this.jeashGraphics,chr.chr,x,Std["int"](inY + (h - chr.fh)));
		}
		x += adv;
	}
	x += this.mScrollH;
	if(inInsert != null) {
		this.mCaretGfx.lineStyle(1,this.mTextColour);
		this.mCaretGfx.moveTo(inInsert + align_x - this.mScrollH,inY);
		this.mCaretGfx.lineTo(inInsert + align_x - this.mScrollH,inY + full_height);
	}
	return full_height;
}
jeash.text.TextField.prototype.Rebuild = function() {
	this.mLineInfo = [];
	this.jeashGraphics.clear();
	this.mCaretGfx.clear();
	if(this.background) {
		this.jeashGraphics.beginFill(this.backgroundColor);
		this.jeashGraphics.drawRect(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
		this.jeashGraphics.endFill();
	}
	this.jeashGraphics.lineStyle(this.mTextColour);
	var insert_x = null;
	this.mMaxWidth = 0;
	var wrap = this.mLimitRenderX = this.wordWrap && !this.mInput?Std["int"](this.jeashGetWidth()):999999;
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
			var fh = font.jeashGetHeight();
			last_word_break = row.length;
			last_word_break_width = row_width;
			last_word_char_idx = char_idx;
			var _g5 = 0, _g4 = text.length;
			while(_g5 < _g4) {
				var ch = _g5++;
				if(char_idx == this.mInsertPos && this.mInput) insert_x = tx;
				var g = text.charCodeAt(ch);
				var adv = font.jeashGetAdvance(g);
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
			var pos = this.mInput && insert_x == null?tx:insert_x == null?0:insert_x;
			h += this.RenderRow(row,h,start_idx,paragraph.align,pos);
		}
	}
	var w = this.mMaxWidth;
	if(h < this.mTextHeight) h = this.mTextHeight;
	this.mMaxHeight = h;
	switch(this.autoSize) {
	case jeash.text.TextFieldAutoSize.LEFT:
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		break;
	case jeash.text.TextFieldAutoSize.RIGHT:
		var x0 = this.jeashGetX() + this.jeashGetWidth();
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		this.jeashSetX(x0 - w);
		break;
	case jeash.text.TextFieldAutoSize.CENTER:
		var x0 = this.jeashGetX() + this.jeashGetWidth() / 2;
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		this.jeashSetX(x0 - w / 2);
		break;
	default:
		if(this.wordWrap) this.jeashSetHeight(h);
	}
	if(char_idx == 0 && this.mInput) {
		var x = 0;
		if(this.mAlign == jeash.text.TextFormatAlign.CENTER) x = Std["int"](this.jeashGetWidth() / 2); else if(this.mAlign == jeash.text.TextFormatAlign.RIGHT) x = Std["int"](this.jeashGetWidth()) - 1;
		this.mCaretGfx.lineStyle(1,this.mTextColour);
		this.mCaretGfx.moveTo(x,0);
		this.mCaretGfx.lineTo(x,this.mTextHeight);
	}
	if(this.border) {
		this.jeashGraphics.endFill();
		this.jeashGraphics.lineStyle(1,this.borderColor);
		this.jeashGraphics.drawRect(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
	}
}
jeash.text.TextField.prototype.GetObj = function(inX,inY,inObj) {
	var inv = this.mFullMatrix.clone();
	inv.invert();
	var px = inv.a * inX + inv.c * inY + inv.tx;
	var py = inv.b * inX + inv.d * inY + inv.ty;
	if(px > 0 && px < this.jeashGetWidth() && py > 0 && py < this.jeashGetHeight()) return this;
	return null;
}
jeash.text.TextField.prototype.GetBackgroundRect = function() {
	if(this.border) return new jeash.geom.Rectangle(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4); else return new jeash.geom.Rectangle(0,0,this.jeashGetWidth(),this.jeashGetHeight());
}
jeash.text.TextField.prototype.jeashRender = function(inParentMatrix,inMask) {
	if(!this.jeashGetVisible()) return;
	jeash.display.InteractiveObject.prototype.jeashRender.call(this,inParentMatrix,inMask);
	if(this.mInput && this.GetStage().GetFocus() == this) {
		if((Std["int"](jeash.Lib.getTimer() * 0.002) & 1) == 1) this.mCaretGfx.jeashRender(inMask,this.mFullMatrix);
	}
}
jeash.text.TextField.prototype.GetTextWidth = function() {
	return this.mMaxWidth;
}
jeash.text.TextField.prototype.GetTextHeight = function() {
	return this.mMaxHeight;
}
jeash.text.TextField.prototype.GetTextColour = function() {
	return this.mTextColour;
}
jeash.text.TextField.prototype.SetTextColour = function(inCol) {
	this.mTextColour = inCol;
	this.RebuildText();
	return inCol;
}
jeash.text.TextField.prototype.GetText = function() {
	if(this.mHTMLMode) this.ConvertHTMLToText(false);
	return this.mText;
}
jeash.text.TextField.prototype.SetText = function(inText) {
	this.mText = inText;
	this.mHTMLText = inText;
	this.mHTMLMode = false;
	this.RebuildText();
	return this.mText;
}
jeash.text.TextField.prototype.ConvertHTMLToText = function(inUnSetHTML) {
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
jeash.text.TextField.prototype.GetFocusObjects = function(outObjs) {
	if(this.mInput) outObjs.push(this);
}
jeash.text.TextField.prototype.SetAutoSize = function(inAutoSize) {
	this.autoSize = inAutoSize;
	this.Rebuild();
	return inAutoSize;
}
jeash.text.TextField.prototype.SetWordWrap = function(inWordWrap) {
	this.wordWrap = inWordWrap;
	this.Rebuild();
	return this.wordWrap;
}
jeash.text.TextField.prototype.SetBorder = function(inBorder) {
	this.border = inBorder;
	this.Rebuild();
	return inBorder;
}
jeash.text.TextField.prototype.SetBorderColor = function(inBorderCol) {
	this.borderColor = inBorderCol;
	this.Rebuild();
	return inBorderCol;
}
jeash.text.TextField.prototype.SetBackgroundColor = function(inCol) {
	this.backgroundColor = inCol;
	this.Rebuild();
	return inCol;
}
jeash.text.TextField.prototype.SetBackground = function(inBack) {
	this.background = inBack;
	this.Rebuild();
	return inBack;
}
jeash.text.TextField.prototype.GetHTMLText = function() {
	return this.mHTMLText;
}
jeash.text.TextField.prototype.DecodeColour = function(col) {
	return Std.parseInt("0x" + col.substr(1));
}
jeash.text.TextField.prototype.AddXML = function(x,a) {
	var type = x.nodeType;
	if(type == Xml.Document || type == Xml.Element) {
		if(type == Xml.Element) {
			a = { face : a.face, height : a.height, colour : a.colour, align : a.align};
			switch(x.getNodeName()) {
			case "p":
				var l = this.mParagraphs.length;
				var align = x.get("align");
				if(align != null) a.align = Type.createEnum(jeash.text.TextFormatAlign,align);
				if(l > 0 && this.mParagraphs[l - 1].spans.length > 0 && this.multiline) this.mParagraphs.push({ align : a.align, spans : []});
				break;
			case "font":
				var face = x.get("face");
				if(face != null) a.face = face;
				var height = x.get("size");
				if(height != null) a.height = Std["int"](Std.parseFloat(height));
				var col = x.get("color");
				if(col != null) a.colour = this.DecodeColour(col);
				break;
			}
		}
		var $it0 = x.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			this.AddXML(child,a);
		}
	} else {
		var text = x.getNodeValue();
		var font = jeash.text.FontInstance.CreateSolid(a.face,a.height,a.colour,1.0);
		if(font != null && text != "") {
			var span = { text : text, font : font};
			var l = this.mParagraphs.length;
			if(this.mParagraphs.length < 1) this.mParagraphs.push({ align : a.align, spans : [span]}); else this.mParagraphs[l - 1].spans.push(span);
		}
	}
}
jeash.text.TextField.prototype.RebuildText = function() {
	this.mParagraphs = [];
	if(this.mHTMLMode) {
		var xml = Xml.parse(this.mHTMLText);
		var a = { face : this.mFace, height : this.mTextHeight, colour : this.mTextColour, align : this.mAlign};
		this.AddXML(xml,a);
	} else {
		var font = jeash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
		var paras = this.mText.split("\n");
		var _g = 0;
		while(_g < paras.length) {
			var paragraph = paras[_g];
			++_g;
			this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph}]});
		}
	}
	this.Rebuild();
}
jeash.text.TextField.prototype.SetHTMLText = function(inHTMLText) {
	this.mParagraphs = new Array();
	this.mHTMLText = inHTMLText;
	this.mHTMLMode = true;
	this.RebuildText();
	if(this.mInput) this.ConvertHTMLToText(true);
	return this.mHTMLText;
}
jeash.text.TextField.prototype.setSelection = function(beginIndex,endIndex) {
}
jeash.text.TextField.prototype.getTextFormat = function(beginIndex,endIndex) {
	return new jeash.text.TextFormat();
}
jeash.text.TextField.prototype.getDefaultTextFormat = function() {
	return new jeash.text.TextFormat();
}
jeash.text.TextField.prototype.setTextFormat = function(inFmt) {
	if(inFmt.font != null) this.mFace = inFmt.font;
	if(inFmt.size != null) this.mTextHeight = Std["int"](inFmt.size);
	if(inFmt.align != null) this.mAlign = inFmt.align;
	if(inFmt.color != null) this.mTextColour = inFmt.color;
	this.RebuildText();
	return this.getTextFormat();
}
jeash.text.TextField.prototype.__class__ = jeash.text.TextField;
jeash.text.FontInstanceMode = { __ename__ : ["jeash","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
jeash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
jeash.text.FontInstanceMode.fimSolid.toString = $estr;
jeash.text.FontInstanceMode.fimSolid.__enum__ = jeash.text.FontInstanceMode;
jeash.text.FontInstance = function(inFont,inHeight) {
	if( inFont === $_ ) return;
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
}
jeash.text.FontInstance.__name__ = ["jeash","text","FontInstance"];
jeash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = jeash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new jeash.text.Font();
	font.jeashSetScale(inHeight);
	font.jeashSetFontName(inFace);
	if(font == null) return null;
	f = new jeash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	jeash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
jeash.text.FontInstance.prototype.mMode = null;
jeash.text.FontInstance.prototype.mColour = null;
jeash.text.FontInstance.prototype.mAlpha = null;
jeash.text.FontInstance.prototype.mFont = null;
jeash.text.FontInstance.prototype.mHeight = null;
jeash.text.FontInstance.prototype.mGlyphs = null;
jeash.text.FontInstance.prototype.mCacheAsBitmap = null;
jeash.text.FontInstance.prototype.mTryFreeType = null;
jeash.text.FontInstance.prototype.height = null;
jeash.text.FontInstance.prototype.toString = function() {
	return "FontInstance:" + this.mFont + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
}
jeash.text.FontInstance.prototype.GetFace = function() {
	return this.mFont.fontName;
}
jeash.text.FontInstance.prototype.jeashGetHeight = function() {
	return this.mHeight;
}
jeash.text.FontInstance.prototype.SetSolid = function(inCol,inAlpha) {
	this.mColour = inCol;
	this.mAlpha = inAlpha;
	this.mMode = jeash.text.FontInstanceMode.fimSolid;
}
jeash.text.FontInstance.prototype.RenderChar = function(inGraphics,inGlyph,inX,inY) {
	inGraphics.beginFill(this.mColour,this.mAlpha);
	this.mFont.jeashRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
}
jeash.text.FontInstance.prototype.jeashGetAdvance = function(inChar) {
	if(this.mFont == null) return 0;
	return this.mFont.jeashGetAdvance(inChar,this.mHeight);
}
jeash.text.FontInstance.prototype.__class__ = jeash.text.FontInstance;
jeash.display.ImageDataLease = function(s,t) {
	if( s === $_ ) return;
	this.seed = s;
	this.time = t;
	this.changeX = 0;
	this.changeY = 0;
	this.changeWidth = 0;
	this.changeHeight = 0;
}
jeash.display.ImageDataLease.__name__ = ["jeash","display","ImageDataLease"];
jeash.display.ImageDataLease.prototype.seed = null;
jeash.display.ImageDataLease.prototype.time = null;
jeash.display.ImageDataLease.prototype.changeX = null;
jeash.display.ImageDataLease.prototype.changeY = null;
jeash.display.ImageDataLease.prototype.changeWidth = null;
jeash.display.ImageDataLease.prototype.changeHeight = null;
jeash.display.ImageDataLease.prototype.__class__ = jeash.display.ImageDataLease;
jeash.display.BitmapData = function(inWidth,inHeight,inTransparent,inFillColor) {
	if( inWidth === $_ ) return;
	if(inTransparent == null) inTransparent = true;
	this.jeashLocked = false;
	this.jeashLeaseNum = 0;
	this.mTextureBuffer = js.Lib.document.createElement("canvas");
	this.mTextureBuffer.width = inWidth;
	this.mTextureBuffer.height = inHeight;
	this.jeashTransparent = inTransparent;
	this.rect = new jeash.geom.Rectangle(0,0,inWidth,inHeight);
	if(inFillColor != null) {
		if(!this.jeashTransparent) inFillColor |= -16777216;
		this.fillRect(this.rect,inFillColor);
	}
}
jeash.display.BitmapData.__name__ = ["jeash","display","BitmapData"];
jeash.display.BitmapData.jeashCreateFromHandle = function(inHandle) {
	var result = new jeash.display.BitmapData(0,0);
	result.mTextureBuffer = inHandle;
	return result;
}
jeash.display.BitmapData.prototype.mTextureBuffer = null;
jeash.display.BitmapData.prototype.jeashTransparent = null;
jeash.display.BitmapData.prototype.width = null;
jeash.display.BitmapData.prototype.height = null;
jeash.display.BitmapData.prototype.rect = null;
jeash.display.BitmapData.prototype.jeashImageData = null;
jeash.display.BitmapData.prototype.jeashLocked = null;
jeash.display.BitmapData.prototype.jeashLease = null;
jeash.display.BitmapData.prototype.jeashLeaseNum = null;
jeash.display.BitmapData.prototype.jeashAssignedBitmaps = null;
jeash.display.BitmapData.prototype.applyFilter = function(sourceBitmapData,sourceRect,destPoint,filter) {
	throw "BitmapData.applyFilter not implemented in Jeash";
}
jeash.display.BitmapData.prototype.draw = function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(smoothing == null) smoothing = false;
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	source.drawToSurface(this.mTextureBuffer,matrix,colorTransform,blendMode,clipRect,smoothing);
}
jeash.display.BitmapData.prototype.getColorBoundsRect = function(mask,color,findColor) {
	if(findColor == null) findColor = true;
	var me = this;
	var doGetColorBoundsRect = function(data) {
		var minX = me.mTextureBuffer != null?me.mTextureBuffer.width:0, maxX = 0, minY = me.mTextureBuffer != null?me.mTextureBuffer.height:0, maxY = 0, i = 0;
		while(i < data.length) {
			var value = me.getInt32(i,data);
			if(findColor) {
				if((value & mask) == color) {
					var x = Math.round(i % ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
			} else if((value & mask) != color) {
				var x = Math.round(i % ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4) / 4);
				var y = Math.round(i / ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4));
				if(x < minX) minX = x;
				if(x > maxX) maxX = x;
				if(y < minY) minY = y;
				if(y > maxY) maxY = y;
			}
			i += 4;
		}
		if(minX < maxX && minY < maxY) return new jeash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new jeash.geom.Rectangle(0,0,me.mTextureBuffer != null?me.mTextureBuffer.width:0,me.mTextureBuffer != null?me.mTextureBuffer.height:0);
	};
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		return doGetColorBoundsRect(imageData.data);
	} else return doGetColorBoundsRect(this.jeashImageData.data);
}
jeash.display.BitmapData.prototype.dispose = function() {
}
jeash.display.BitmapData.prototype.compare = function(inBitmapTexture) {
	throw "Not implemented. compare";
	return 0;
}
jeash.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	var ctx = this.mTextureBuffer.getContext("2d");
	ctx.drawImage(sourceBitmapData.mTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
}
jeash.display.BitmapData.prototype.clipRect = function(r) {
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
	if(r.x + r.width >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0)) {
		r.width -= r.x + r.width - (this.mTextureBuffer != null?this.mTextureBuffer.width:0);
		if(r.width <= 0) return null;
	}
	if(r.y + r.height >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		r.height -= r.y + r.height - (this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		if(r.height <= 0) return null;
	}
	return r;
}
jeash.display.BitmapData.prototype.fillRect = function(rect,color) {
	if(rect == null) return;
	if(rect.width <= 0 || rect.height <= 0) return;
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	var r = (color & 16711680) >>> 16;
	var g = (color & 65280) >>> 8;
	var b = color & 255;
	var a = this.jeashTransparent?color >>> 24:255;
	var ctx = this.mTextureBuffer.getContext("2d");
	if(!this.jeashLocked) {
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		var _g1 = 0, _g = imagedata.data.length >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			offsetX = i * 4;
			imagedata.data[offsetX] = r;
			imagedata.data[offsetX + 1] = g;
			imagedata.data[offsetX + 2] = b;
			imagedata.data[offsetX + 3] = a;
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	} else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		var _g1 = 0, _g = Math.round(rect.height);
		while(_g1 < _g) {
			var i = _g1++;
			offsetY = i * this.jeashImageData.width;
			var _g3 = 0, _g2 = Math.round(rect.width);
			while(_g3 < _g2) {
				var j = _g3++;
				offsetX = 4 * (j + offsetY);
				this.jeashImageData.data[s + offsetX] = r;
				this.jeashImageData.data[s + offsetX + 1] = g;
				this.jeashImageData.data[s + offsetX + 2] = b;
				this.jeashImageData.data[s + offsetX + 3] = a;
			}
		}
		ctx.putImageData(this.jeashImageData,0,0,rect.x,rect.y,rect.width,rect.height);
	}
}
jeash.display.BitmapData.prototype.getPixels = function(rect) {
	var byteArray = new jeash.utils.ByteArray();
	rect = this.clipRect(rect);
	if(rect == null) return byteArray;
	var len = Math.round(4 * rect.width * rect.height);
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			byteArray.writeByte(imagedata.data[i]);
		}
	} else {
		var offset = Math.round(4 * this.jeashImageData.width * rect.y + rect.x * 4);
		var pos = offset;
		var boundR = Math.round(4 * (rect.x + rect.width));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (this.jeashImageData.width * 4) > boundR - 1) pos += this.jeashImageData.width * 4 - boundR;
			byteArray.writeByte(this.jeashImageData.data[pos]);
			pos++;
		}
	}
	byteArray.position = 0;
	return byteArray;
}
jeash.display.BitmapData.prototype.getPixel = function(x,y) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return 0;
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(x,y,1,1);
		return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
	} else {
		var offset = 4 * y * (this.mTextureBuffer != null?this.mTextureBuffer.width:0) + x * 4;
		return this.jeashImageData.data[offset] << 16 | this.jeashImageData.data[offset + 1] << 8 | this.jeashImageData.data[offset + 2];
	}
}
jeash.display.BitmapData.prototype.getInt32 = function(offset,data) {
	var b5, b6, b7, b8, pow = Math.pow;
	b5 = data[offset + 3] & 255;
	b6 = data[offset] & 255;
	b7 = data[offset + 1] & 255;
	b8 = data[offset + 2] & 255;
	return parseInt(((b5 >> 7) * pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
}
jeash.display.BitmapData.prototype.getPixel32 = function(x,y) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return 0;
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
	} else return this.getInt32(4 * y * this.mTextureBuffer.width + x * 4,this.jeashImageData.data);
}
jeash.display.BitmapData.prototype.setPixel = function(x,y,color) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return;
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(1,1);
		imageData.data[0] = (color & 16711680) >>> 16;
		imageData.data[1] = (color & 65280) >>> 8;
		imageData.data[2] = color & 255;
		ctx.putImageData(imageData,x,y);
	} else {
		var offset = 4 * y * this.jeashImageData.width + x * 4;
		this.jeashImageData.data[offset] = (color & 16711680) >>> 16;
		this.jeashImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.jeashImageData.data[offset + 2] = color & 255;
	}
}
jeash.display.BitmapData.prototype.setPixel32 = function(x,y,color) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return;
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(1,1);
		imageData.data[0] = (color & 16711680) >>> 16;
		imageData.data[1] = (color & 65280) >>> 8;
		imageData.data[2] = color & 255;
		if(this.jeashTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
		ctx.putImageData(imageData,x,y);
	} else {
		var offset = 4 * y * this.jeashImageData.width + x * 4;
		this.jeashImageData.data[offset] = (color & 16711680) >>> 16;
		this.jeashImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.jeashImageData.data[offset + 2] = color & 255;
		if(this.jeashTransparent) this.jeashImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.jeashImageData.data[offset + 3] = 255;
	}
}
jeash.display.BitmapData.prototype.setPixels = function(rect,byteArray) {
	rect = this.clipRect(rect);
	if(rect == null) return;
	var len = Math.round(4 * rect.width * rect.height);
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(rect.width,rect.height);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			imageData.data[i] = byteArray.readByte();
		}
		ctx.putImageData(imageData,rect.x,rect.y);
	} else {
		var offset = Math.round(4 * this.jeashImageData.width * rect.y + rect.x * 4);
		var pos = offset;
		var boundR = Math.round(4 * (rect.x + rect.width));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (this.jeashImageData.width * 4) > boundR - 1) pos += this.jeashImageData.width * 4 - boundR;
			this.jeashImageData.data[pos] = byteArray.readByte();
			pos++;
		}
	}
}
jeash.display.BitmapData.prototype.clone = function() {
	var bitmapData = new jeash.display.BitmapData(this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0,this.jeashTransparent);
	var rect = new jeash.geom.Rectangle(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
	bitmapData.setPixels(rect,this.getPixels(rect));
	bitmapData.jeashLease = new jeash.display.ImageDataLease(bitmapData.jeashLeaseNum++,Date.now().getTime());
	return bitmapData;
}
jeash.display.BitmapData.prototype.handle = function() {
	return this.mTextureBuffer;
}
jeash.display.BitmapData.prototype.getWidth = function() {
	if(this.mTextureBuffer != null) return this.mTextureBuffer.width; else return 0;
}
jeash.display.BitmapData.prototype.getHeight = function() {
	if(this.mTextureBuffer != null) return this.mTextureBuffer.height; else return 0;
}
jeash.display.BitmapData.prototype.destroy = function() {
	this.mTextureBuffer = null;
}
jeash.display.BitmapData.prototype.jeashOnLoad = function(data,e) {
	var canvas = data.texture;
	var width = data.image.width;
	var height = data.image.height;
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(data.image,0,0,width,height);
	data.bitmapData.width = width;
	data.bitmapData.height = height;
	data.bitmapData.rect = new jeash.geom.Rectangle(0,0,width,height);
	data.bitmapData.jeashBuildLease();
	if(data.inLoader != null) {
		var e1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
		e1.target = data.inLoader;
		data.inLoader.dispatchEvent(e1);
	}
}
jeash.display.BitmapData.prototype.jeashLoadFromFile = function(inFilename,inLoader) {
	var image = js.Lib.document.createElement("img");
	if(inLoader != null) {
		var data = { image : image, texture : this.mTextureBuffer, inLoader : inLoader, bitmapData : this};
		image.addEventListener("load",(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})($closure(this,"jeashOnLoad"),data),false);
	}
	image.src = inFilename;
}
jeash.display.BitmapData.prototype.lock = function() {
	this.jeashLocked = true;
	var ctx = this.mTextureBuffer.getContext("2d");
	this.jeashImageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
}
jeash.display.BitmapData.prototype.unlock = function(changeRect) {
	this.jeashLocked = false;
	var ctx = this.mTextureBuffer.getContext("2d");
	if(changeRect != null) ctx.putImageData(this.jeashImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.jeashImageData,0,0);
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
}
jeash.display.BitmapData.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smothing) {
	var ctx = inSurface.getContext("2d");
	ctx.save();
	if(matrix != null) ctx.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	ctx.drawImage(this.mTextureBuffer,0,0);
	ctx.restore();
}
jeash.display.BitmapData.prototype.colorTransform = function(rect,colorTransform) {
	rect = this.clipRect(rect);
	if(rect == null) return;
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		var _g1 = 0, _g = imagedata.data.length >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			offsetX = i * 4;
			imagedata.data[offsetX] = Std["int"](imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
			imagedata.data[offsetX + 1] = Std["int"](imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
			imagedata.data[offsetX + 2] = Std["int"](imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
			imagedata.data[offsetX + 3] = Std["int"](imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	} else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		var _g1 = 0, _g = Math.round(rect.height);
		while(_g1 < _g) {
			var i = _g1++;
			offsetY = i * this.jeashImageData.width;
			var _g3 = 0, _g2 = Math.round(rect.width);
			while(_g3 < _g2) {
				var j = _g3++;
				offsetX = 4 * (j + offsetY);
				this.jeashImageData.data[s + offsetX] = Std["int"](this.jeashImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
				this.jeashImageData.data[s + offsetX + 1] = Std["int"](this.jeashImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
				this.jeashImageData.data[s + offsetX + 2] = Std["int"](this.jeashImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
				this.jeashImageData.data[s + offsetX + 3] = Std["int"](this.jeashImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
			}
		}
	}
}
jeash.display.BitmapData.prototype.copyChannel = function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
	this.rect = this.clipRect(this.rect);
	if(this.rect == null) return;
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	var doChannelCopy = function(imageData) {
		var srcCtx = sourceBitmapData.mTextureBuffer.getContext("2d");
		var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
		var destIdx = destChannel == 8?3:destChannel == 4?2:destChannel == 2?1:destChannel == 1?0:(function($this) {
			var $r;
			throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			return $r;
		}(this));
		var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
		var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
		var setPos = function(val) {
			if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
			imageData.data[pos] = val;
			pos += 4;
		};
		var srcIdx = sourceChannel == 8?3:sourceChannel == 4?2:sourceChannel == 2?1:sourceChannel == 1?0:(function($this) {
			var $r;
			throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			return $r;
		}(this));
		while(srcIdx < srcImageData.data.length) {
			setPos(srcImageData.data[srcIdx]);
			srcIdx += 4;
		}
	};
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		doChannelCopy(imageData);
		ctx.putImageData(imageData,0,0);
	} else doChannelCopy(this.jeashImageData);
}
jeash.display.BitmapData.prototype.hitTest = function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
	if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
	var me = this;
	var type = Type.getClassName(Type.getClass(secondObject));
	firstAlphaThreshold = firstAlphaThreshold & -1;
	var doHitTest = function(imageData) {
		if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
		switch(secondObject.__proto__.__class__.__name__[2]) {
		case "Rectangle":
			var rect = secondObject;
			rect.x -= firstPoint.x;
			rect.y -= firstPoint.y;
			rect = me.clipRect(rect);
			if(rect == null) return false;
			var boundingBox = new jeash.geom.Rectangle(0,0,me.mTextureBuffer != null?me.mTextureBuffer.width:0,me.mTextureBuffer != null?me.mTextureBuffer.height:0);
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
			var x = point.x - firstPoint.x, y = point.y - firstPoint.y;
			if(x < 0 || y < 0 || x >= (me.mTextureBuffer != null?me.mTextureBuffer.width:0) || y >= (me.mTextureBuffer != null?me.mTextureBuffer.height:0)) return false;
			if(imageData.data[Math.round(4 * (y * (me.mTextureBuffer != null?me.mTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
			return false;
		case "Bitmap":
			throw "BitmapData::hitTest secondObject argument as BitmapData is not (yet) supported.";
			return false;
		case "BitmapData":
			throw "BitmapData::hitTest secondObject argument as BitmapData is not (yet) supported.";
			return false;
		default:
			throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
			return false;
		}
	};
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		return doHitTest(imageData);
		ctx.putImageData(imageData,0,0);
	} else return doHitTest(this.jeashImageData);
}
jeash.display.BitmapData.prototype.scroll = function(x,y) {
	throw "Not implemented yet, patches welcome. BitmapData::scroll.";
}
jeash.display.BitmapData.prototype.jeashGetLease = function() {
	return this.jeashLease;
}
jeash.display.BitmapData.prototype.jeashGetNumRefBitmaps = function() {
	return this.jeashAssignedBitmaps;
}
jeash.display.BitmapData.prototype.jeashIncrNumRefBitmaps = function() {
	this.jeashAssignedBitmaps++;
}
jeash.display.BitmapData.prototype.jeashDecrNumRefBitmaps = function() {
	this.jeashAssignedBitmaps--;
}
jeash.display.BitmapData.prototype.jeashBuildLease = function() {
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
}
jeash.display.BitmapData.prototype.__class__ = jeash.display.BitmapData;
jeash.display.BitmapData.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.PixelSnapping = { __ename__ : ["jeash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
jeash.display.PixelSnapping.NEVER = ["NEVER",0];
jeash.display.PixelSnapping.NEVER.toString = $estr;
jeash.display.PixelSnapping.NEVER.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.AUTO = ["AUTO",1];
jeash.display.PixelSnapping.AUTO.toString = $estr;
jeash.display.PixelSnapping.AUTO.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
jeash.display.PixelSnapping.ALWAYS.toString = $estr;
jeash.display.PixelSnapping.ALWAYS.__enum__ = jeash.display.PixelSnapping;
demo.scenes.Game = function(kernel,type) {
	if( kernel === $_ ) return;
	this._session = kernel.__get_session();
	this._assetManager = kernel.assets;
	awe6.core.Scene.call(this,kernel,type,true,true,true);
}
demo.scenes.Game.__name__ = ["demo","scenes","Game"];
demo.scenes.Game.__super__ = awe6.core.Scene;
for(var k in awe6.core.Scene.prototype ) demo.scenes.Game.prototype[k] = awe6.core.Scene.prototype[k];
demo.scenes.Game.prototype._session = null;
demo.scenes.Game.prototype._assetManager = null;
demo.scenes.Game.prototype._timer = null;
demo.scenes.Game.prototype._score = null;
demo.scenes.Game.prototype._temp = null;
demo.scenes.Game.prototype._init = function() {
	awe6.core.Scene.prototype._init.call(this);
	this.__get_view().addChild(this._assetManager.background,0);
	this._session.isWin = false;
	this._timer = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,Std.string(this._tools.convertAgeToFormattedTime(0)),this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD));
	this._timer.__set_y(70);
	this.addEntity(this._timer,null,true,1000);
	this._kernel.audio.stop("MusicMenu",awe6.interfaces.EAudioChannel.MUSIC);
	this._kernel.audio.start("MusicGame",awe6.interfaces.EAudioChannel.MUSIC,-1,0,.5,0,true);
	var _g = 0;
	while(_g < 10) {
		var i = _g++;
		this.addEntity(new demo.entities.Sphere(this._kernel),null,true,i + 10);
	}
	var l_sphere = this.getEntitiesByClass(demo.entities.Sphere)[0];
	var l_bouncer = l_sphere.getEntitiesByClass(demo.entities.Bouncer)[0];
	this._temp = l_sphere;
}
demo.scenes.Game.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Scene.prototype._updater.call(this,deltaTime);
	this._score = Std["int"](this._tools.limit(30000 - this._age,0,this._tools.BIG_NUMBER));
	if(this._score == 0) this._gameOver();
	this._timer.__set_text(this._tools.convertAgeToFormattedTime(this._age));
	var l_spheres = this.getEntitiesByClass(demo.entities.Sphere);
	if(l_spheres.length == 0) this._gameOver();
}
demo.scenes.Game.prototype._disposer = function() {
	this._kernel.audio.stop("MusicGame",awe6.interfaces.EAudioChannel.MUSIC);
	awe6.core.Scene.prototype._disposer.call(this);
}
demo.scenes.Game.prototype._gameOver = function() {
	if(this._score > this._session.highScore) {
		this._session.isWin = true;
		this._session.highScore = this._score;
	}
	this._kernel.scenes.next();
}
demo.scenes.Game.prototype.__class__ = demo.scenes.Game;
jeash.display.GraphicsPathCommand = function() { }
jeash.display.GraphicsPathCommand.__name__ = ["jeash","display","GraphicsPathCommand"];
jeash.display.GraphicsPathCommand.prototype.__class__ = jeash.display.GraphicsPathCommand;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
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
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
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
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
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
		if(v.__name__ != null) return ValueType.TObject;
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
Type.prototype.__class__ = Type;
haxe.Unserializer = function(buf) {
	if( buf === $_ ) return;
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
}
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.cca(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype.buf = null;
haxe.Unserializer.prototype.pos = null;
haxe.Unserializer.prototype.length = null;
haxe.Unserializer.prototype.cache = null;
haxe.Unserializer.prototype.scache = null;
haxe.Unserializer.prototype.resolver = null;
haxe.Unserializer.prototype.setResolver = function(r) {
	if(r == null) this.resolver = { resolveClass : function(_) {
		return null;
	}, resolveEnum : function(_) {
		return null;
	}}; else this.resolver = r;
}
haxe.Unserializer.prototype.getResolver = function() {
	return this.resolver;
}
haxe.Unserializer.prototype.get = function(p) {
	return this.buf.cca(p);
}
haxe.Unserializer.prototype.readDigits = function() {
	var k = 0;
	var s = false;
	var fpos = this.pos;
	while(true) {
		var c = this.buf.cca(this.pos);
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
haxe.Unserializer.prototype.unserializeObject = function(o) {
	while(true) {
		if(this.pos >= this.length) throw "Invalid object";
		if(this.buf.cca(this.pos) == 103) break;
		var k = this.unserialize();
		if(!Std["is"](k,String)) throw "Invalid object key";
		var v = this.unserialize();
		Reflect.setField(o,k,v);
	}
	this.pos++;
}
haxe.Unserializer.prototype.unserializeEnum = function(edecl,tag) {
	var constr = Reflect.field(edecl,tag);
	if(constr == null) throw "Unknown enum tag " + Type.getEnumName(edecl) + "." + tag;
	if(this.buf.cca(this.pos++) != 58) throw "Invalid enum format";
	var nargs = this.readDigits();
	if(nargs == 0) {
		this.cache.push(constr);
		return constr;
	}
	var args = new Array();
	while(nargs > 0) {
		args.push(this.unserialize());
		nargs -= 1;
	}
	var e = constr.apply(edecl,args);
	this.cache.push(e);
	return e;
}
haxe.Unserializer.prototype.unserialize = function() {
	switch(this.buf.cca(this.pos++)) {
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
			var c = this.buf.cca(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		return Std.parseFloat(this.buf.substr(p1,this.pos - p1));
	case 121:
		var len = this.readDigits();
		if(this.buf.cca(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
		var s = this.buf.substr(this.pos,len);
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
			var c = this.buf.cca(this.pos);
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
		return this.unserializeEnum(edecl,this.unserialize());
	case 106:
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		this.pos++;
		var index = this.readDigits();
		var tag = Type.getEnumConstructs(edecl)[index];
		if(tag == null) throw "Unknown enum index " + name + "@" + index;
		return this.unserializeEnum(edecl,tag);
	case 108:
		var l = new List();
		this.cache.push(l);
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) l.add(this.unserialize());
		this.pos++;
		return l;
	case 98:
		var h = new Hash();
		this.cache.push(h);
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) {
			var s = this.unserialize();
			h.set(s,this.unserialize());
		}
		this.pos++;
		return h;
	case 113:
		var h = new IntHash();
		this.cache.push(h);
		var buf = this.buf;
		var c = this.buf.cca(this.pos++);
		while(c == 58) {
			var i = this.readDigits();
			h.set(i,this.unserialize());
			c = this.buf.cca(this.pos++);
		}
		if(c != 104) throw "Invalid IntHash format";
		return h;
	case 118:
		var d = Date.fromString(this.buf.substr(this.pos,19));
		this.cache.push(d);
		this.pos += 19;
		return d;
	case 115:
		var len = this.readDigits();
		var buf = this.buf;
		if(this.buf.cca(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
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
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
			var c3 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
			var c4 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c3 << 6 | c4) & 255;
		}
		if(rest >= 2) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
			if(rest == 3) {
				var c3 = codes[buf.cca(i++)];
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
		if(this.buf.cca(this.pos++) != 103) throw "Invalid custom data";
		return o;
	default:
	}
	this.pos--;
	throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
}
haxe.Unserializer.prototype.__class__ = haxe.Unserializer;
jeash.media.SoundTransform = function(vol,panning) {
}
jeash.media.SoundTransform.__name__ = ["jeash","media","SoundTransform"];
jeash.media.SoundTransform.prototype.leftToLeft = null;
jeash.media.SoundTransform.prototype.leftToRight = null;
jeash.media.SoundTransform.prototype.pan = null;
jeash.media.SoundTransform.prototype.rightToLeft = null;
jeash.media.SoundTransform.prototype.rightToRight = null;
jeash.media.SoundTransform.prototype.volume = null;
jeash.media.SoundTransform.prototype.__class__ = jeash.media.SoundTransform;
haxe.io.Input = function() { }
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype.bigEndian = null;
haxe.io.Input.prototype.readByte = function() {
	return (function($this) {
		var $r;
		throw "Not implemented";
		return $r;
	}(this));
}
haxe.io.Input.prototype.readBytes = function(s,pos,len) {
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
haxe.io.Input.prototype.close = function() {
}
haxe.io.Input.prototype.setEndian = function(b) {
	this.bigEndian = b;
	return b;
}
haxe.io.Input.prototype.readAll = function(bufsize) {
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
haxe.io.Input.prototype.readFullBytes = function(s,pos,len) {
	while(len > 0) {
		var k = this.readBytes(s,pos,len);
		pos += k;
		len -= k;
	}
}
haxe.io.Input.prototype.read = function(nbytes) {
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
haxe.io.Input.prototype.readUntil = function(end) {
	var buf = new StringBuf();
	var last;
	while((last = this.readByte()) != end) buf.b[buf.b.length] = String.fromCharCode(last);
	return buf.b.join("");
}
haxe.io.Input.prototype.readLine = function() {
	var buf = new StringBuf();
	var last;
	var s;
	try {
		while((last = this.readByte()) != 10) buf.b[buf.b.length] = String.fromCharCode(last);
		s = buf.b.join("");
		if(s.charCodeAt(s.length - 1) == 13) s = s.substr(0,-1);
	} catch( e ) {
		if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			s = buf.b.join("");
			if(s.length == 0) throw e;
		} else throw(e);
	}
	return s;
}
haxe.io.Input.prototype.readFloat = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readDouble = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readInt8 = function() {
	var n = this.readByte();
	if(n >= 128) return n - 256;
	return n;
}
haxe.io.Input.prototype.readInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
}
haxe.io.Input.prototype.readUInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
}
haxe.io.Input.prototype.readInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	if((n & 8388608) != 0) return n - 16777216;
	return n;
}
haxe.io.Input.prototype.readUInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
}
haxe.io.Input.prototype.readInt31 = function() {
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
haxe.io.Input.prototype.readUInt30 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
	return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
haxe.io.Input.prototype.readInt32 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
}
haxe.io.Input.prototype.readString = function(len) {
	var b = haxe.io.Bytes.alloc(len);
	this.readFullBytes(b,0,len);
	return b.toString();
}
haxe.io.Input.prototype.__class__ = haxe.io.Input;
jeash.display.Loader = function(p) {
	if( p === $_ ) return;
	jeash.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = jeash.display.LoaderInfo.create(this);
	this.name = "Loader " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.Loader.__name__ = ["jeash","display","Loader"];
jeash.display.Loader.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Loader.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Loader.prototype.content = null;
jeash.display.Loader.prototype.contentLoaderInfo = null;
jeash.display.Loader.prototype.mImage = null;
jeash.display.Loader.prototype.mShape = null;
jeash.display.Loader.prototype.load = function(request,context) {
	var parts = request.url.split(".");
	var extension = parts.length == 0?"":parts[parts.length - 1].toLowerCase();
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
	this.mImage = new jeash.display.BitmapData(0,0,transparent);
	try {
		this.contentLoaderInfo.addEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"),false,2147483647);
		this.mImage.jeashLoadFromFile(request.url,this.contentLoaderInfo);
		this.content = new jeash.display.Bitmap(this.mImage);
		Reflect.setField(this.contentLoaderInfo,"content",this.content);
		this.addChild(this.content);
	} catch( e ) {
		haxe.Log.trace("Error " + e,{ fileName : "Loader.hx", lineNumber : 90, className : "jeash.display.Loader", methodName : "load"});
		var evt = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
		this.contentLoaderInfo.dispatchEvent(evt);
		return;
	}
	if(this.mShape == null) {
		this.mShape = new jeash.display.Shape();
		this.addChild(this.mShape);
	}
}
jeash.display.Loader.prototype.handleLoad = function(e) {
	this.contentLoaderInfo.removeEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"));
	this.jeashInvalidateBounds();
}
jeash.display.Loader.prototype.BuildBounds = function() {
	jeash.display.DisplayObjectContainer.prototype.BuildBounds.call(this);
	if(this.mImage != null) {
		var r = new jeash.geom.Rectangle(0,0,this.mImage.getWidth(),this.mImage.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
		}
	}
}
jeash.display.Loader.prototype.__class__ = jeash.display.Loader;
awe6.extras.gui.BitmapDataScale9 = function(source,topLeftX,topLeftY,bottomRightX,bottomRightY,width,height,isTransparent,fillColor) {
	if( source === $_ ) return;
	if(fillColor == null) fillColor = -1;
	if(isTransparent == null) isTransparent = true;
	this._source = source.clone();
	this._topLeftX = topLeftX;
	this._topLeftY = topLeftY;
	this._bottomRightX = bottomRightX;
	this._bottomRightY = bottomRightY;
	if(isTransparent && fillColor == -1) fillColor = 0;
	jeash.display.BitmapData.call(this,width,height,isTransparent,fillColor);
	this._init();
}
awe6.extras.gui.BitmapDataScale9.__name__ = ["awe6","extras","gui","BitmapDataScale9"];
awe6.extras.gui.BitmapDataScale9.__super__ = jeash.display.BitmapData;
for(var k in jeash.display.BitmapData.prototype ) awe6.extras.gui.BitmapDataScale9.prototype[k] = jeash.display.BitmapData.prototype[k];
awe6.extras.gui.BitmapDataScale9.prototype._source = null;
awe6.extras.gui.BitmapDataScale9.prototype._topLeftX = null;
awe6.extras.gui.BitmapDataScale9.prototype._topLeftY = null;
awe6.extras.gui.BitmapDataScale9.prototype._bottomRightX = null;
awe6.extras.gui.BitmapDataScale9.prototype._bottomRightY = null;
awe6.extras.gui.BitmapDataScale9.prototype._init = function() {
	if((this.mTextureBuffer != null?this.mTextureBuffer.width:0) == this._source.getWidth() && (this.mTextureBuffer != null?this.mTextureBuffer.height:0) == this._source.getHeight()) this.copyPixels(this._source,this._source.rect,this._source.rect.get_topLeft()); else {
		var l_isSmoothing = true;
		var l_leftMargin = this._topLeftX;
		var l_rightMargin = this._source.getWidth() - this._bottomRightX;
		var l_topMargin = this._topLeftY;
		var l_bottomMargin = this._source.getHeight() - this._bottomRightY;
		var l_centerWidth = this._source.getWidth() - l_leftMargin - l_rightMargin;
		var l_centerHeight = this._source.getHeight() - l_topMargin - l_bottomMargin;
		var l_matrix = new jeash.geom.Matrix();
		var l_clipRect;
		l_clipRect = new jeash.geom.Rectangle(0,0,l_leftMargin,l_topMargin);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.tx = (this.mTextureBuffer != null?this.mTextureBuffer.width:0) - this._source.getWidth();
		l_clipRect = new jeash.geom.Rectangle((this.mTextureBuffer != null?this.mTextureBuffer.width:0) - l_rightMargin,0,l_rightMargin,l_topMargin);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.ty = (this.mTextureBuffer != null?this.mTextureBuffer.height:0) - this._source.getHeight();
		l_clipRect = new jeash.geom.Rectangle((this.mTextureBuffer != null?this.mTextureBuffer.width:0) - l_rightMargin,(this.mTextureBuffer != null?this.mTextureBuffer.height:0) - l_bottomMargin,l_rightMargin,l_bottomMargin);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.tx = 0;
		l_clipRect = new jeash.geom.Rectangle(0,(this.mTextureBuffer != null?this.mTextureBuffer.height:0) - l_bottomMargin,l_leftMargin,l_bottomMargin);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.identity();
		l_matrix.a = ((this.mTextureBuffer != null?this.mTextureBuffer.width:0) - l_leftMargin - l_rightMargin) / l_centerWidth;
		l_matrix.tx = l_leftMargin - l_leftMargin * l_matrix.a;
		l_clipRect = new jeash.geom.Rectangle(l_leftMargin,0,l_centerWidth * l_matrix.a,l_topMargin);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.ty = (this.mTextureBuffer != null?this.mTextureBuffer.height:0) - this._source.getHeight();
		l_clipRect = new jeash.geom.Rectangle(l_leftMargin,(this.mTextureBuffer != null?this.mTextureBuffer.height:0) - l_bottomMargin,l_centerWidth * l_matrix.a,l_bottomMargin);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.d = ((this.mTextureBuffer != null?this.mTextureBuffer.height:0) - l_topMargin - l_bottomMargin) / l_centerHeight;
		l_matrix.ty = l_topMargin - l_topMargin * l_matrix.d;
		l_clipRect = new jeash.geom.Rectangle(l_leftMargin,l_topMargin,l_centerWidth * l_matrix.a,l_centerHeight * l_matrix.d);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.identity();
		l_matrix.d = ((this.mTextureBuffer != null?this.mTextureBuffer.height:0) - l_topMargin - l_bottomMargin) / l_centerHeight;
		l_matrix.ty = l_topMargin - l_topMargin * l_matrix.d;
		l_clipRect = new jeash.geom.Rectangle(0,l_topMargin,l_leftMargin,l_centerHeight * l_matrix.d);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
		l_matrix.tx = (this.mTextureBuffer != null?this.mTextureBuffer.width:0) - this._source.getWidth();
		l_clipRect = new jeash.geom.Rectangle((this.mTextureBuffer != null?this.mTextureBuffer.width:0) - l_rightMargin,l_topMargin,l_rightMargin,l_centerHeight * l_matrix.d);
		this.draw(this._source,l_matrix,null,null,l_clipRect,l_isSmoothing);
	}
	this._source.dispose();
}
awe6.extras.gui.BitmapDataScale9.prototype.__class__ = awe6.extras.gui.BitmapDataScale9;
jeash.display.BitmapDataChannel = function() { }
jeash.display.BitmapDataChannel.__name__ = ["jeash","display","BitmapDataChannel"];
jeash.display.BitmapDataChannel.prototype.__class__ = jeash.display.BitmapDataChannel;
awe6.interfaces.EMouseButton = { __ename__ : ["awe6","interfaces","EMouseButton"], __constructs__ : ["LEFT","MIDDLE","RIGHT"] }
awe6.interfaces.EMouseButton.LEFT = ["LEFT",0];
awe6.interfaces.EMouseButton.LEFT.toString = $estr;
awe6.interfaces.EMouseButton.LEFT.__enum__ = awe6.interfaces.EMouseButton;
awe6.interfaces.EMouseButton.MIDDLE = ["MIDDLE",1];
awe6.interfaces.EMouseButton.MIDDLE.toString = $estr;
awe6.interfaces.EMouseButton.MIDDLE.__enum__ = awe6.interfaces.EMouseButton;
awe6.interfaces.EMouseButton.RIGHT = ["RIGHT",2];
awe6.interfaces.EMouseButton.RIGHT.toString = $estr;
awe6.interfaces.EMouseButton.RIGHT.__enum__ = awe6.interfaces.EMouseButton;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
jeash.display.Stage = function(width,height) {
	if( width === $_ ) return;
	jeash.display.DisplayObjectContainer.call(this);
	this.mFocusObject = null;
	this.jeashWindowWidth = width;
	this.jeashWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = jeash.display.StageScaleMode.SHOW_ALL;
	this.jeashStageMatrix = new jeash.geom.Matrix();
	this.tabEnabled = true;
	this.jeashSetFrameRate(60.0);
	this.jeashSetBackgroundColour(16777215);
	this.name = "Stage";
	this.loaderInfo = jeash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.jeashWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.jeashWindowHeight);
	this.mProjMatrix = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
	this.jeashPointInPathMode = jeash.display.Graphics.jeashDetectIsPointInPathMode();
	this.jeashMouseOverObjects = [];
	this.jeashMouseDown = false;
	this.jeashSetShowDefaultContextMenu(true);
}
jeash.display.Stage.__name__ = ["jeash","display","Stage"];
jeash.display.Stage.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Stage.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Stage.prototype.jeashWindowWidth = null;
jeash.display.Stage.prototype.jeashWindowHeight = null;
jeash.display.Stage.prototype.jeashTimer = null;
jeash.display.Stage.prototype.jeashInterval = null;
jeash.display.Stage.prototype.jeashFastMode = null;
jeash.display.Stage.prototype.jeashDragObject = null;
jeash.display.Stage.prototype.jeashDragBounds = null;
jeash.display.Stage.prototype.jeashDragOffsetX = null;
jeash.display.Stage.prototype.jeashDragOffsetY = null;
jeash.display.Stage.prototype.jeashMouseOverObjects = null;
jeash.display.Stage.prototype.jeashStageMatrix = null;
jeash.display.Stage.prototype.jeashMouseDown = null;
jeash.display.Stage.prototype.jeashStageActive = null;
jeash.display.Stage.prototype.jeashFrameRate = null;
jeash.display.Stage.prototype.jeashBackgroundColour = null;
jeash.display.Stage.prototype.jeashShowDefaultContextMenu = null;
jeash.display.Stage.prototype.jeashPointInPathMode = null;
jeash.display.Stage.prototype.stageWidth = null;
jeash.display.Stage.prototype.stageHeight = null;
jeash.display.Stage.prototype.frameRate = null;
jeash.display.Stage.prototype.quality = null;
jeash.display.Stage.prototype.scaleMode = null;
jeash.display.Stage.prototype.align = null;
jeash.display.Stage.prototype.stageFocusRect = null;
jeash.display.Stage.prototype.focus = null;
jeash.display.Stage.prototype.backgroundColor = null;
jeash.display.Stage.prototype.showDefaultContextMenu = null;
jeash.display.Stage.prototype.displayState = null;
jeash.display.Stage.prototype.fullScreenWidth = null;
jeash.display.Stage.prototype.fullScreenHeight = null;
jeash.display.Stage.prototype.jeashGetStageWidth = function() {
	return this.jeashWindowWidth;
}
jeash.display.Stage.prototype.jeashGetStageHeight = function() {
	return this.jeashWindowHeight;
}
jeash.display.Stage.prototype.mFocusObject = null;
jeash.display.Stage.prototype.mProjMatrix = null;
jeash.display.Stage.prototype.jeashStartDrag = function(sprite,lockCenter,bounds) {
	if(lockCenter == null) lockCenter = false;
	this.jeashDragBounds = bounds == null?null:bounds.clone();
	this.jeashDragObject = sprite;
	if(this.jeashDragObject != null) {
		if(lockCenter) {
			var bounds1 = sprite.getBounds(this);
			this.jeashDragOffsetX = -bounds1.width / 2 - bounds1.x;
			this.jeashDragOffsetY = -bounds1.height / 2 - bounds1.y;
		} else {
			var mouse = new jeash.geom.Point(this.jeashGetMouseX(),this.jeashGetMouseY());
			var p = this.jeashDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			this.jeashDragOffsetX = this.jeashDragObject.jeashGetX() - mouse.x;
			this.jeashDragOffsetY = this.jeashDragObject.jeashGetY() - mouse.y;
		}
	}
}
jeash.display.Stage.prototype.jeashDrag = function(point) {
	var p = this.jeashDragObject.parent;
	if(p != null) point = p.globalToLocal(point);
	var x = point.x + this.jeashDragOffsetX;
	var y = point.y + this.jeashDragOffsetY;
	if(this.jeashDragBounds != null) {
		if(x < this.jeashDragBounds.x) x = this.jeashDragBounds.x; else if(x > this.jeashDragBounds.get_right()) x = this.jeashDragBounds.get_right();
		if(y < this.jeashDragBounds.y) y = this.jeashDragBounds.y; else if(y > this.jeashDragBounds.get_bottom()) y = this.jeashDragBounds.get_bottom();
	}
	this.jeashDragObject.jeashSetX(x);
	this.jeashDragObject.jeashSetY(y);
}
jeash.display.Stage.prototype.jeashStopDrag = function(sprite) {
	this.jeashDragBounds = null;
	this.jeashDragObject = null;
}
jeash.display.Stage.prototype.jeashCheckInOuts = function(event,stack) {
	var prev = this.jeashMouseOverObjects;
	var events = jeash.display.Stage.jeashMouseChanges;
	var new_n = stack.length;
	var new_obj = new_n > 0?stack[new_n - 1]:null;
	var old_n = prev.length;
	var old_obj = old_n > 0?prev[old_n - 1]:null;
	if(new_obj != old_obj) {
		if(old_obj != null) old_obj.jeashFireEvent(event.jeashCreateSimilar(events[0],new_obj,old_obj));
		if(new_obj != null) new_obj.jeashFireEvent(event.jeashCreateSimilar(events[1],old_obj,new_obj));
		var common = 0;
		while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
		var rollOut = event.jeashCreateSimilar(events[2],new_obj,old_obj);
		var i = old_n - 1;
		while(i >= common) {
			prev[i].dispatchEvent(rollOut);
			i--;
		}
		var rollOver = event.jeashCreateSimilar(events[3],old_obj);
		var i1 = new_n - 1;
		while(i1 >= common) {
			stack[i1].dispatchEvent(rollOver);
			i1--;
		}
		this.jeashMouseOverObjects = stack;
	}
}
jeash.display.Stage.prototype.jeashProcessStageEvent = function(evt) {
	evt.stopPropagation();
	switch(evt.type) {
	case "mousemove":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_MOVE);
		break;
	case "mousedown":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_DOWN);
		break;
	case "mouseup":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_UP);
		break;
	case "click":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.CLICK);
		break;
	case "mousewheel":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_WHEEL);
		break;
	case "dblclick":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.DOUBLE_CLICK);
		break;
	case "keydown":
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			} catch( e ) {
				$r = evt1.keyCode;
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,true,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
		break;
	case "keyup":
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			} catch( e ) {
				$r = evt1.keyCode;
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,false,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
		break;
	default:
	}
}
jeash.display.Stage.prototype.jeashOnMouse = function(event,type) {
	var point = new jeash.geom.Point(event.clientX - jeash.Lib.mMe.__scr.offsetLeft + window.pageXOffset,event.clientY - jeash.Lib.mMe.__scr.offsetTop + window.pageYOffset);
	if(this.jeashDragObject != null) this.jeashDrag(point);
	var obj = this.jeashGetObjectUnderPoint(point);
	this.jeashSetMouseX(point.x);
	this.jeashSetMouseY(point.y);
	var stack = new Array();
	if(obj != null) obj.jeashGetInteractiveObjectStack(stack);
	if(stack.length > 0) {
		stack.reverse();
		var local = obj.globalToLocal(point);
		var evt = this.jeashCreateMouseEvent(type,event,local,obj);
		this.jeashCheckInOuts(evt,stack);
		obj.jeashFireEvent(evt);
	} else {
		var evt = this.jeashCreateMouseEvent(type,event,point,null);
		this.jeashCheckInOuts(evt,stack);
	}
}
jeash.display.Stage.prototype.jeashCreateMouseEvent = function(type,event,local,target) {
	var delta = type == jeash.events.MouseEvent.MOUSE_WHEEL?(function($this) {
		var $r;
		var mouseEvent = event;
		$r = mouseEvent.wheelDelta?js.Lib.isOpera?Std["int"](mouseEvent.wheelDelta / 40):Std["int"](mouseEvent.wheelDelta / 120):mouseEvent.detail?Std["int"](-mouseEvent.detail):null;
		return $r;
	}(this)):2;
	if(type == jeash.events.MouseEvent.MOUSE_DOWN) this.jeashMouseDown = event.which != null?event.which == 1:event.button != null?js.Lib.isIE && event.button == 1 || event.button == 0:false; else if(type == jeash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) this.jeashMouseDown = false; else if(event.button != null) {
				if(js.Lib.isIE && event.button == 1 || event.button == 0) this.jeashMouseDown = false; else this.jeashMouseDown = false;
			}
		}
	}
	var pseudoEvent = new jeash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,this.jeashMouseDown,delta);
	pseudoEvent.stageX = this.jeashGetMouseX();
	pseudoEvent.stageY = this.jeashGetMouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
jeash.display.Stage.prototype.jeashOnKey = function(code,pressed,inChar,ctrl,alt,shift) {
	var event = new jeash.events.KeyboardEvent(pressed?jeash.events.KeyboardEvent.KEY_DOWN:jeash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,shift || ctrl?1:0,ctrl,alt,shift);
	this.dispatchEvent(event);
}
jeash.display.Stage.prototype.jeashOnResize = function(inW,inH) {
	this.jeashWindowWidth = inW;
	this.jeashWindowHeight = inH;
	var event = new jeash.events.Event(jeash.events.Event.RESIZE);
	event.target = this;
	this.jeashBroadcast(event);
}
jeash.display.Stage.prototype.jeashGetBackgroundColour = function() {
	return this.jeashBackgroundColour;
}
jeash.display.Stage.prototype.jeashSetBackgroundColour = function(col) {
	this.jeashBackgroundColour = col;
	return col;
}
jeash.display.Stage.prototype.DoSetFocus = function(inObj,inKeyCode) {
	return inObj;
}
jeash.display.Stage.prototype.SetFocus = function(inObj) {
	return this.DoSetFocus(inObj,-1);
}
jeash.display.Stage.prototype.GetFocus = function() {
	return this.mFocusObject;
}
jeash.display.Stage.prototype.jeashRenderAll = function() {
	this.jeashRender(this.jeashStageMatrix);
}
jeash.display.Stage.prototype.jeashRenderToCanvas = function(canvas) {
	canvas.width = canvas.width;
	this.jeashRenderContentsToCache(this.jeashStageMatrix,canvas);
}
jeash.display.Stage.prototype.jeashSetQuality = function(inQuality) {
	this.quality = inQuality;
	return inQuality;
}
jeash.display.Stage.prototype.jeashGetQuality = function() {
	return this.quality != null?this.quality:jeash.display.StageQuality.BEST;
}
jeash.display.Stage.prototype.jeashGetFrameRate = function() {
	return this.jeashFrameRate;
}
jeash.display.Stage.prototype.jeashSetFrameRate = function(speed) {
	if(StringTools.startsWith(jeash.Lib.context,"swf")) return speed;
	var window = js.Lib.window;
	if(speed == 0 && window.postMessage != null) this.jeashFastMode = true; else {
		this.jeashFastMode = false;
		this.jeashInterval = Std["int"](1000.0 / speed);
	}
	this.jeashUpdateNextWake();
	this.jeashFrameRate = speed;
	return speed;
}
jeash.display.Stage.prototype.jeashUpdateNextWake = function() {
	var window = js.Lib.window;
	window.clearInterval(this.jeashTimer);
	if(this.jeashFastMode) {
		window.addEventListener("message",$closure(this,"jeashStageRender"),false);
		window.postMessage("a",window.location);
	} else this.jeashTimer = window.setInterval($closure(this,"jeashStageRender"),this.jeashInterval,[]);
}
jeash.display.Stage.prototype.jeashStageRender = function(_) {
	if(!this.jeashStageActive) {
		this.jeashOnResize(this.jeashWindowWidth,this.jeashWindowHeight);
		var event = new jeash.events.Event(jeash.events.Event.ACTIVATE);
		event.target = this;
		this.jeashBroadcast(event);
		this.jeashStageActive = true;
	}
	var event = new jeash.events.Event(jeash.events.Event.ENTER_FRAME);
	this.jeashBroadcast(event);
	this.jeashRenderAll();
	var event1 = new jeash.events.Event(jeash.events.Event.RENDER);
	this.jeashBroadcast(event1);
	if(this.jeashFastMode) window.postMessage("a",window.location);
}
jeash.display.Stage.prototype.jeashIsOnStage = function() {
	return true;
}
jeash.display.Stage.prototype.jeashGetMouseX = function() {
	return this.mouseX;
}
jeash.display.Stage.prototype.jeashSetMouseX = function(x) {
	this.mouseX = x;
	return x;
}
jeash.display.Stage.prototype.jeashGetMouseY = function() {
	return this.mouseY;
}
jeash.display.Stage.prototype.jeashSetMouseY = function(y) {
	this.mouseY = y;
	return y;
}
jeash.display.Stage.prototype.jeashGetShowDefaultContextMenu = function() {
	return this.jeashShowDefaultContextMenu;
}
jeash.display.Stage.prototype.jeashSetShowDefaultContextMenu = function(showDefaultContextMenu) {
	if(showDefaultContextMenu != this.jeashShowDefaultContextMenu && this.jeashShowDefaultContextMenu != null) {
		if(!showDefaultContextMenu) jeash.Lib.jeashDisableRightClick(); else jeash.Lib.jeashEnableRightClick();
	}
	this.jeashShowDefaultContextMenu = showDefaultContextMenu;
	return showDefaultContextMenu;
}
jeash.display.Stage.prototype.jeashGetDisplayState = function() {
	return this.displayState;
}
jeash.display.Stage.prototype.jeashSetDisplayState = function(displayState) {
	if(displayState != this.displayState && this.displayState != null) {
		switch( (displayState)[1] ) {
		case 1:
			jeash.Lib.jeashDisableFullScreen();
			break;
		case 0:
			jeash.Lib.jeashEnableFullScreen();
			break;
		}
	}
	this.displayState = displayState;
	return displayState;
}
jeash.display.Stage.prototype.jeashGetFullScreenWidth = function() {
	return jeash.Lib.jeashFullScreenWidth();
}
jeash.display.Stage.prototype.jeashGetFullScreenHeight = function() {
	return jeash.Lib.jeashFullScreenHeight();
}
jeash.display.Stage.prototype.__class__ = jeash.display.Stage;
awe6.core.Encrypter = function(defaultSecret) {
	if( defaultSecret === $_ ) return;
	this._defaultSecret = defaultSecret;
}
awe6.core.Encrypter.__name__ = ["awe6","core","Encrypter"];
awe6.core.Encrypter.prototype._defaultSecret = null;
awe6.core.Encrypter.prototype.encrypt = function(value,secret) {
	if(secret == null) secret = "";
	var l_secret = secret != ""?secret:this._defaultSecret;
	return haxe.io.Bytes.ofData(this._xor(value.b,l_secret));
}
awe6.core.Encrypter.prototype.decrypt = function(value,secret) {
	if(secret == null) secret = "";
	var l_secret = secret != ""?secret:this._defaultSecret;
	return haxe.io.Bytes.ofData(this._xor(value.b,l_secret));
}
awe6.core.Encrypter.prototype._xor = function(value,secret) {
	var l_result = new Array();
	var l_secretIndex = 0;
	var _g1 = 0, _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		l_result[i] = value[i] ^ secret.charCodeAt(l_secretIndex);
		l_secretIndex++;
		if(l_secretIndex >= secret.length) l_secretIndex = 0;
	}
	return l_result;
}
awe6.core.Encrypter.prototype.__class__ = awe6.core.Encrypter;
awe6.core.Encrypter.__interfaces__ = [awe6.interfaces.IEncrypter];
jeash.errors.IOError = function(message) {
	if( message === $_ ) return;
	if(message == null) message = "";
	jeash.errors.Error.call(this,message);
}
jeash.errors.IOError.__name__ = ["jeash","errors","IOError"];
jeash.errors.IOError.__super__ = jeash.errors.Error;
for(var k in jeash.errors.Error.prototype ) jeash.errors.IOError.prototype[k] = jeash.errors.Error.prototype[k];
jeash.errors.IOError.prototype.__class__ = jeash.errors.IOError;
jeash.text.TextFieldType = function(p) {
}
jeash.text.TextFieldType.__name__ = ["jeash","text","TextFieldType"];
jeash.text.TextFieldType.prototype.__class__ = jeash.text.TextFieldType;
haxe.Serializer = function(p) {
	if( p === $_ ) return;
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new Hash();
	this.scount = 0;
}
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype.buf = null;
haxe.Serializer.prototype.cache = null;
haxe.Serializer.prototype.shash = null;
haxe.Serializer.prototype.scount = null;
haxe.Serializer.prototype.useCache = null;
haxe.Serializer.prototype.useEnumIndex = null;
haxe.Serializer.prototype.toString = function() {
	return this.buf.b.join("");
}
haxe.Serializer.prototype.serializeString = function(s) {
	var x = this.shash.get(s);
	if(x != null) {
		this.buf.add("R");
		this.buf.add(x);
		return;
	}
	this.shash.set(s,this.scount++);
	this.buf.add("y");
	s = StringTools.urlEncode(s);
	this.buf.add(s.length);
	this.buf.add(":");
	this.buf.add(s);
}
haxe.Serializer.prototype.serializeRef = function(v) {
	var vt = typeof(v);
	var _g1 = 0, _g = this.cache.length;
	while(_g1 < _g) {
		var i = _g1++;
		var ci = this.cache[i];
		if(typeof(ci) == vt && ci == v) {
			this.buf.add("r");
			this.buf.add(i);
			return true;
		}
	}
	this.cache.push(v);
	return false;
}
haxe.Serializer.prototype.serializeFields = function(v) {
	var _g = 0, _g1 = Reflect.fields(v);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		this.serializeString(f);
		this.serialize(Reflect.field(v,f));
	}
	this.buf.add("g");
}
haxe.Serializer.prototype.serialize = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		this.buf.add("n");
		break;
	case 1:
		if(v == 0) {
			this.buf.add("z");
			return;
		}
		this.buf.add("i");
		this.buf.add(v);
		break;
	case 2:
		if(Math.isNaN(v)) this.buf.add("k"); else if(!Math.isFinite(v)) this.buf.add(v < 0?"m":"p"); else {
			this.buf.add("d");
			this.buf.add(v);
		}
		break;
	case 3:
		this.buf.add(v?"t":"f");
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
			this.buf.add("a");
			var l = v["length"];
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				if(v[i] == null) ucount++; else {
					if(ucount > 0) {
						if(ucount == 1) this.buf.add("n"); else {
							this.buf.add("u");
							this.buf.add(ucount);
						}
						ucount = 0;
					}
					this.serialize(v[i]);
				}
			}
			if(ucount > 0) {
				if(ucount == 1) this.buf.add("n"); else {
					this.buf.add("u");
					this.buf.add(ucount);
				}
			}
			this.buf.add("h");
			break;
		case List:
			this.buf.add("l");
			var v1 = v;
			var $it0 = v1.iterator();
			while( $it0.hasNext() ) {
				var i = $it0.next();
				this.serialize(i);
			}
			this.buf.add("h");
			break;
		case Date:
			var d = v;
			this.buf.add("v");
			this.buf.add(d.toString());
			break;
		case Hash:
			this.buf.add("b");
			var v1 = v;
			var $it1 = v1.keys();
			while( $it1.hasNext() ) {
				var k = $it1.next();
				this.serializeString(k);
				this.serialize(v1.get(k));
			}
			this.buf.add("h");
			break;
		case IntHash:
			this.buf.add("q");
			var v1 = v;
			var $it2 = v1.keys();
			while( $it2.hasNext() ) {
				var k = $it2.next();
				this.buf.add(":");
				this.buf.add(k);
				this.serialize(v1.get(k));
			}
			this.buf.add("h");
			break;
		case haxe.io.Bytes:
			var v1 = v;
			var i = 0;
			var max = v1.length - 2;
			var chars = "";
			var b64 = haxe.Serializer.BASE64;
			while(i < max) {
				var b1 = v1.b[i++];
				var b2 = v1.b[i++];
				var b3 = v1.b[i++];
				chars += b64.charAt(b1 >> 2) + b64.charAt((b1 << 4 | b2 >> 4) & 63) + b64.charAt((b2 << 2 | b3 >> 6) & 63) + b64.charAt(b3 & 63);
			}
			if(i == max) {
				var b1 = v1.b[i++];
				var b2 = v1.b[i++];
				chars += b64.charAt(b1 >> 2) + b64.charAt((b1 << 4 | b2 >> 4) & 63) + b64.charAt(b2 << 2 & 63);
			} else if(i == max + 1) {
				var b1 = v1.b[i++];
				chars += b64.charAt(b1 >> 2) + b64.charAt(b1 << 4 & 63);
			}
			this.buf.add("s");
			this.buf.add(chars.length);
			this.buf.add(":");
			this.buf.add(chars);
			break;
		default:
			this.cache.pop();
			if(v.hxSerialize != null) {
				this.buf.add("C");
				this.serializeString(Type.getClassName(c));
				this.cache.push(v);
				v.hxSerialize(this);
				this.buf.add("g");
			} else {
				this.buf.add("c");
				this.serializeString(Type.getClassName(c));
				this.cache.push(v);
				this.serializeFields(v);
			}
		}
		break;
	case 4:
		if(this.useCache && this.serializeRef(v)) return;
		this.buf.add("o");
		this.serializeFields(v);
		break;
	case 7:
		var e = $e[2];
		if(this.useCache && this.serializeRef(v)) return;
		this.cache.pop();
		this.buf.add(this.useEnumIndex?"j":"w");
		this.serializeString(Type.getEnumName(e));
		if(this.useEnumIndex) {
			this.buf.add(":");
			this.buf.add(v[1]);
		} else this.serializeString(v[0]);
		this.buf.add(":");
		var l = v["length"];
		this.buf.add(l - 2);
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
haxe.Serializer.prototype.serializeException = function(e) {
	this.buf.add("x");
	this.serialize(e);
}
haxe.Serializer.prototype.__class__ = haxe.Serializer;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
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
if(!jeash.accessibility) jeash.accessibility = {}
jeash.accessibility.AccessibilityProperties = function(p) {
	if( p === $_ ) return;
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
}
jeash.accessibility.AccessibilityProperties.__name__ = ["jeash","accessibility","AccessibilityProperties"];
jeash.accessibility.AccessibilityProperties.prototype.description = null;
jeash.accessibility.AccessibilityProperties.prototype.forceSimple = null;
jeash.accessibility.AccessibilityProperties.prototype.name = null;
jeash.accessibility.AccessibilityProperties.prototype.noAutoLabeling = null;
jeash.accessibility.AccessibilityProperties.prototype.shortcut = null;
jeash.accessibility.AccessibilityProperties.prototype.silent = null;
jeash.accessibility.AccessibilityProperties.prototype.__class__ = jeash.accessibility.AccessibilityProperties;
Selection = function() { }
Selection.__name__ = ["Selection"];
Selection.prototype.anchorNode = null;
Selection.prototype.anchorOffset = null;
Selection.prototype.focusNode = null;
Selection.prototype.focusOffset = null;
Selection.prototype.isCollapsed = null;
Selection.prototype.rangeCount = null;
Selection.prototype.collapse = null;
Selection.prototype.collapseToStart = null;
Selection.prototype.collapseToEnd = null;
Selection.prototype.selectAllChildren = null;
Selection.prototype.deleteFromDocument = null;
Selection.prototype.getRangeAt = null;
Selection.prototype.addRange = null;
Selection.prototype.removeRange = null;
Selection.prototype.removeAllRanges = null;
Selection.prototype.stringifier = null;
Selection.prototype.__class__ = Selection;
MessagePortArray = function() { }
MessagePortArray.__name__ = ["MessagePortArray"];
MessagePortArray.prototype.__class__ = MessagePortArray;
MessagePort = function() { }
MessagePort.__name__ = ["MessagePort"];
MessagePort.prototype.postMessage = null;
MessagePort.prototype.start = null;
MessagePort.prototype.close = null;
MessagePort.prototype.onmessage = null;
MessagePort.prototype.__class__ = MessagePort;
jeash.net.URLLoaderDataFormat = { __ename__ : ["jeash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
jeash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
jeash.net.URLLoaderDataFormat.BINARY.toString = $estr;
jeash.net.URLLoaderDataFormat.BINARY.__enum__ = jeash.net.URLLoaderDataFormat;
jeash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
jeash.net.URLLoaderDataFormat.TEXT.toString = $estr;
jeash.net.URLLoaderDataFormat.TEXT.__enum__ = jeash.net.URLLoaderDataFormat;
jeash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
jeash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
jeash.net.URLLoaderDataFormat.VARIABLES.__enum__ = jeash.net.URLLoaderDataFormat;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var methodName = "jeashGet" + field.substr(0,1).toUpperCase() + field.substr(1);
	if(o[methodName] != null) return o[methodName](); else {
		var v = null;
		try {
			v = o[field];
		} catch( e ) {
		}
		return v;
	}
}
Reflect.setField = function(o,field,value) {
	var methodName = "jeashSet" + field.substr(0,1).toUpperCase() + field.substr(1);
	if(o[methodName] != null) o[methodName](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
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
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
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
		Reflect.setField(o2,f,Reflect.field(o,f));
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
awe6.Types = function(p) {
}
awe6.Types.__name__ = ["awe6","Types"];
awe6.Types.prototype.__class__ = awe6.Types;
awe6.interfaces.EJoypadButton = { __ename__ : ["awe6","interfaces","EJoypadButton"], __constructs__ : ["FIRE","UP","RIGHT","DOWN","LEFT","PRIMARY","SECONDARY"] }
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
if(!demo.entities) demo.entities = {}
demo.entities.Sphere = function(kernel) {
	if( kernel === $_ ) return;
	this._sprite = new jeash.display.Sprite();
	this._assetManager = kernel.assets;
	awe6.core.Entity.call(this,kernel,null,this._sprite);
}
demo.entities.Sphere.__name__ = ["demo","entities","Sphere"];
demo.entities.Sphere.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) demo.entities.Sphere.prototype[k] = awe6.core.Entity.prototype[k];
demo.entities.Sphere.prototype._assetManager = null;
demo.entities.Sphere.prototype._sprite = null;
demo.entities.Sphere.prototype._width = null;
demo.entities.Sphere.prototype._height = null;
demo.entities.Sphere.prototype._width2 = null;
demo.entities.Sphere.prototype._height2 = null;
demo.entities.Sphere.prototype._bouncer = null;
demo.entities.Sphere.prototype._init = function() {
	awe6.core.Entity.prototype._init.call(this);
	var l_scale = this._tools.range(Math.random(),.5,1);
	this._width = 100 * l_scale;
	this._height = 100 * l_scale;
	this._width2 = this._width / 2;
	this._height2 = this._height / 2;
	this.addEntity(this._bouncer = new demo.entities.Bouncer(this._kernel,this._width,this._height));
	var l_source = this._assetManager.sphere;
	var l_bitmapData = new jeash.display.BitmapData(Std["int"](this._width),Std["int"](this._height * 1.5),true,0);
	var l_matrix = new jeash.geom.Matrix();
	l_matrix.scale(l_scale,l_scale);
	l_bitmapData.draw(l_source,l_matrix,null,null,null,true);
	var l_sphere = new jeash.display.Bitmap(l_bitmapData);
	l_sphere.smoothing = true;
	l_sphere.jeashSetX(-this._width2);
	l_sphere.jeashSetY(-this._height2);
	this._sprite.addChild(l_sphere);
}
demo.entities.Sphere.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Entity.prototype._updater.call(this,deltaTime);
	this._sprite.jeashSetX(this._bouncer.x);
	this._sprite.jeashSetY(this._bouncer.y);
	this._sprite.jeashSetScaleX(this._bouncer.vx > 1?1:-1);
	this.__get_view().__set_priority(Std["int"](this._bouncer.y));
	if(this._isHit()) {
		this._kernel.audio.start("Sfx" + (Std.random(4) + 1),awe6.interfaces.EAudioChannel.EFFECTS,0,0,1,this._bouncer.x / this._kernel.factory.width);
		this._kernel.overlay.flash(100,true,1,Std.random(16777215));
		if(this.isDisposed) null; else {
			this.isDisposed = true;
			this.__set_isActive(false);
			if(this._isEntity) this._kernel.messenger.sendMessage(awe6.interfaces.EMessage.DISPOSE,this);
			this._disposer();
			null;
		}
	}
}
demo.entities.Sphere.prototype._isHit = function() {
	if(!this._kernel.inputs.mouse.getIsButtonPress(awe6.interfaces.EMouseButton.LEFT)) return false;
	var l_dx = this._kernel.inputs.mouse.x - this._bouncer.x;
	var l_dy = this._kernel.inputs.mouse.y - this._bouncer.y;
	var l_dist = l_dx * l_dx + l_dy * l_dy;
	return l_dist < this._width2 * this._width2;
}
demo.entities.Sphere.prototype.__class__ = demo.entities.Sphere;
jeash.text.FontType = { __ename__ : ["jeash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
jeash.text.FontType.EMBEDDED = ["EMBEDDED",0];
jeash.text.FontType.EMBEDDED.toString = $estr;
jeash.text.FontType.EMBEDDED.__enum__ = jeash.text.FontType;
jeash.text.FontType.DEVICE = ["DEVICE",1];
jeash.text.FontType.DEVICE.toString = $estr;
jeash.text.FontType.DEVICE.__enum__ = jeash.text.FontType;
awe6.core.drivers.js.AudioManager = function(kernel) {
	if( kernel === $_ ) return;
	awe6.core.drivers.AAudioManager.call(this,kernel);
}
awe6.core.drivers.js.AudioManager.__name__ = ["awe6","core","drivers","js","AudioManager"];
awe6.core.drivers.js.AudioManager.__super__ = awe6.core.drivers.AAudioManager;
for(var k in awe6.core.drivers.AAudioManager.prototype ) awe6.core.drivers.js.AudioManager.prototype[k] = awe6.core.drivers.AAudioManager.prototype[k];
awe6.core.drivers.js.AudioManager.prototype._extension = null;
awe6.core.drivers.js.AudioManager.prototype._init = function() {
	awe6.core.drivers.AAudioManager.prototype._init.call(this);
	this._extension = jeash.media.Sound.jeashCanPlayType("mp3")?".mp3":".ogg";
	this._packageId = StringTools.replace(this._packageId + ".",".","/");
}
awe6.core.drivers.js.AudioManager.prototype._nativeSoundFactory = function(id,audioChannelType,loops,startTime,volume,pan,onCompleteCallback) {
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	if(startTime == null) startTime = 0;
	if(loops == null) loops = 1;
	return new awe6.core.drivers.js._HelperSound(this._kernel,id,this._packageId,this._extension,audioChannelType,loops,startTime,volume,pan,onCompleteCallback);
}
awe6.core.drivers.js.AudioManager.prototype._nativeSetIsMute = function(isMute) {
	var _g = 0, _g1 = this._sounds;
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		if(i._soundChannel == null) continue;
		if(i._soundChannel.jeashAudio == null) continue;
		i._soundChannel.jeashAudio.muted = isMute;
	}
}
awe6.core.drivers.js.AudioManager.prototype.__class__ = awe6.core.drivers.js.AudioManager;
awe6.core.drivers.js._HelperSound = function(kernel,id,packageId,extension,audioChannelType,loops,startTime,volume,pan,onCompleteCallback) {
	if( kernel === $_ ) return;
	if(pan == null) pan = 0;
	if(volume == null) volume = 1;
	if(startTime == null) startTime = 0;
	if(loops == null) loops = 1;
	this._extension = extension;
	awe6.core.drivers._AHelperSound.call(this,kernel,id,packageId,audioChannelType,loops,startTime,volume,pan,onCompleteCallback);
}
awe6.core.drivers.js._HelperSound.__name__ = ["awe6","core","drivers","js","_HelperSound"];
awe6.core.drivers.js._HelperSound.__super__ = awe6.core.drivers._AHelperSound;
for(var k in awe6.core.drivers._AHelperSound.prototype ) awe6.core.drivers.js._HelperSound.prototype[k] = awe6.core.drivers._AHelperSound.prototype[k];
awe6.core.drivers.js._HelperSound.prototype._extension = null;
awe6.core.drivers.js._HelperSound.prototype._sound = null;
awe6.core.drivers.js._HelperSound.prototype._soundChannel = null;
awe6.core.drivers.js._HelperSound.prototype._nativeInit = function() {
	this._sound = nme.installer.Assets.getSound(this._packageId + this.id + this._extension);
	if(this._sound == null) return this.dispose();
	this._soundChannel = this._sound.play(this._startTime,this._loops);
	if(this._soundChannel == null) return this.dispose();
	this._soundChannel.jeashAudio.muted = this._kernel.audio.isMute;
	this._soundChannel.addEventListener(jeash.events.Event.SOUND_COMPLETE,$closure(this,"_onSoundComplete"));
	this._nativeTransform();
	return;
}
awe6.core.drivers.js._HelperSound.prototype._nativeTransform = function(asRelative) {
	if(asRelative == null) asRelative = false;
	if(this._soundChannel == null) return;
	if(asRelative) {
		this._volume *= this._soundChannel.soundTransform.volume;
		this._pan *= this._soundChannel.soundTransform.pan;
	}
	var soundTransform = new jeash.media.SoundTransform(this._volume,this._pan);
	this._soundChannel.__setSoundTransform(soundTransform);
	this._soundChannel.jeashAudio.volume = this._volume;
}
awe6.core.drivers.js._HelperSound.prototype._nativeStop = function() {
	if(this._soundChannel == null) return;
	this._soundChannel.stop();
}
awe6.core.drivers.js._HelperSound.prototype._onSoundComplete = function(event) {
	if(this._onCompleteCallback != null) this._onCompleteCallback.apply(this,[]);
	this.dispose();
}
awe6.core.drivers.js._HelperSound.prototype._nativeDisposer = function() {
	if(this._soundChannel != null) {
		this.stop();
		this._soundChannel.removeEventListener(jeash.events.Event.SOUND_COMPLETE,$closure(this,"_onSoundComplete"));
	}
}
awe6.core.drivers.js._HelperSound.prototype.__class__ = awe6.core.drivers.js._HelperSound;
Main = function() { }
Main.__name__ = ["Main"];
Main.main = function() {
	var l_isDebug = false;
	var l_factory = new demo.Factory(jeash.Lib.jeashGetCurrent(),l_isDebug,haxe.Resource.getString("config"));
}
Main.prototype.__class__ = Main;
demo.entities.Bouncer = function(kernel,width,height) {
	if( kernel === $_ ) return;
	this._width = width;
	this._height = height;
	awe6.core.Entity.call(this,kernel);
}
demo.entities.Bouncer.__name__ = ["demo","entities","Bouncer"];
demo.entities.Bouncer.__super__ = awe6.core.Entity;
for(var k in awe6.core.Entity.prototype ) demo.entities.Bouncer.prototype[k] = awe6.core.Entity.prototype[k];
demo.entities.Bouncer.prototype.x = null;
demo.entities.Bouncer.prototype.y = null;
demo.entities.Bouncer.prototype.vx = null;
demo.entities.Bouncer.prototype.vy = null;
demo.entities.Bouncer.prototype._width = null;
demo.entities.Bouncer.prototype._height = null;
demo.entities.Bouncer.prototype._width2 = null;
demo.entities.Bouncer.prototype._height2 = null;
demo.entities.Bouncer.prototype._init = function() {
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
demo.entities.Bouncer.prototype._updater = function(deltaTime) {
	if(deltaTime == null) deltaTime = 0;
	awe6.core.Entity.prototype._updater.call(this,deltaTime);
	this.x += this.vx * (deltaTime / 1000);
	this.y += this.vy * (deltaTime / 1000);
	if(this.x > this._kernel.factory.width - this._width2) this.vx *= -1;
	if(this.y > this._kernel.factory.height - this._height2) this.vy *= -1;
	if(this.x < this._width2) this.vx *= -1;
	if(this.y < this._height2) this.vy *= -1;
	this.x = this._tools.limit(this.x,this._width2,this._kernel.factory.width - this._width2);
	this.y = this._tools.limit(this.y,this._height2,this._kernel.factory.height - this._height2);
}
demo.entities.Bouncer.prototype.__class__ = demo.entities.Bouncer;
haxe.io.BytesBuffer = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	this.b.push($byte);
}
haxe.io.BytesBuffer.prototype.add = function(src) {
	var b1 = this.b;
	var b2 = src.b;
	var _g1 = 0, _g = src.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.b.push(b2[i]);
	}
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.b.push(b2[i]);
	}
}
haxe.io.BytesBuffer.prototype.getBytes = function() {
	var bytes = new haxe.io.Bytes(this.b.length,this.b);
	this.b = null;
	return bytes;
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
demo.scenes.Results = function(kernel,type,isPauseable,isMutable,isSessionSavedOnNext) {
	if( kernel === $_ ) return;
	if(isSessionSavedOnNext == null) isSessionSavedOnNext = false;
	if(isMutable == null) isMutable = true;
	if(isPauseable == null) isPauseable = false;
	demo.scenes.AScene.call(this,kernel,type,isPauseable,isMutable,isSessionSavedOnNext);
}
demo.scenes.Results.__name__ = ["demo","scenes","Results"];
demo.scenes.Results.__super__ = demo.scenes.AScene;
for(var k in demo.scenes.AScene.prototype ) demo.scenes.Results.prototype[k] = demo.scenes.AScene.prototype[k];
demo.scenes.Results.prototype._init = function() {
	demo.scenes.AScene.prototype._init.call(this);
	var l_button = new demo.gui.Button(this._kernel,this._kernel.factory.keyNext,0,0,$closure(this._kernel.scenes,"next"),null,null,this._kernel.getConfig("gui.buttons.next"));
	l_button.setPosition((this._kernel.factory.width - l_button.width) / 2,(this._kernel.factory.height - l_button.height) / 2);
	this.addEntity(l_button,null,true,1);
	var l_message = this._kernel.getConfig("gui.scenes.results." + (this._session.isWin?"win":"lose")) + this._tools.convertAgeToFormattedTime(30000 - this._session.highScore);
	var l_result = new awe6.extras.gui.Text(this._kernel,this._kernel.factory.width,50,l_message,this._kernel.factory.createTextStyle(awe6.interfaces.ETextStyle.SUBHEAD));
	l_result.__set_y(70);
	this.addEntity(l_result,null,true,2);
}
demo.scenes.Results.prototype.__class__ = demo.scenes.Results;
haxe.FastCell = function(elt,next) {
	if( elt === $_ ) return;
	this.elt = elt;
	this.next = next;
}
haxe.FastCell.__name__ = ["haxe","FastCell"];
haxe.FastCell.prototype.elt = null;
haxe.FastCell.prototype.next = null;
haxe.FastCell.prototype.__class__ = haxe.FastCell;
haxe.FastList = function(p) {
}
haxe.FastList.__name__ = ["haxe","FastList"];
haxe.FastList.prototype.head = null;
haxe.FastList.prototype.add = function(item) {
	this.head = new haxe.FastCell(item,this.head);
}
haxe.FastList.prototype.first = function() {
	return this.head == null?null:this.head.elt;
}
haxe.FastList.prototype.pop = function() {
	var k = this.head;
	if(k == null) return null; else {
		this.head = k.next;
		return k.elt;
	}
}
haxe.FastList.prototype.isEmpty = function() {
	return this.head == null;
}
haxe.FastList.prototype.remove = function(v) {
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
haxe.FastList.prototype.iterator = function() {
	var l = this.head;
	return { hasNext : function() {
		return l != null;
	}, next : function() {
		var k = l;
		l = k.next;
		return k.elt;
	}};
}
haxe.FastList.prototype.toString = function() {
	var a = new Array();
	var l = this.head;
	while(l != null) {
		a.push(l.elt);
		l = l.next;
	}
	return "{" + a.join(",") + "}";
}
haxe.FastList.prototype.__class__ = haxe.FastList;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
jeash.text.AntiAliasType = function() { }
jeash.text.AntiAliasType.__name__ = ["jeash","text","AntiAliasType"];
jeash.text.AntiAliasType.prototype.__class__ = jeash.text.AntiAliasType;
jeash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if( checkPolicyFile === $_ ) return;
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
}
jeash.system.LoaderContext.__name__ = ["jeash","system","LoaderContext"];
jeash.system.LoaderContext.prototype.applicationDomain = null;
jeash.system.LoaderContext.prototype.checkPolicyFile = null;
jeash.system.LoaderContext.prototype.securityDomain = null;
jeash.system.LoaderContext.prototype.__class__ = jeash.system.LoaderContext;
if(!awe6.core._Entity) awe6.core._Entity = {}
awe6.core._Entity._HelperEntityAgendaPair = function(entity,agenda) {
	if( entity === $_ ) return;
	this.entity = entity;
	this.agenda = agenda;
	this.isAddedToView = false;
}
awe6.core._Entity._HelperEntityAgendaPair.__name__ = ["awe6","core","_Entity","_HelperEntityAgendaPair"];
awe6.core._Entity._HelperEntityAgendaPair.prototype.entity = null;
awe6.core._Entity._HelperEntityAgendaPair.prototype.agenda = null;
awe6.core._Entity._HelperEntityAgendaPair.prototype.isAddedToView = null;
awe6.core._Entity._HelperEntityAgendaPair.prototype.__class__ = awe6.core._Entity._HelperEntityAgendaPair;
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}
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
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
}
haxe.Timer.prototype.__class__ = haxe.Timer;
awe6.interfaces.EAudioChannel = { __ename__ : ["awe6","interfaces","EAudioChannel"], __constructs__ : ["DEFAULT","EFFECTS","INTERFACE","MUSIC","SUB_TYPE"] }
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
awe6.interfaces.EOverlayButton = { __ename__ : ["awe6","interfaces","EOverlayButton"], __constructs__ : ["BACK","MUTE","UNMUTE","PAUSE","UNPAUSE","SUB_TYPE"] }
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
jeash.utils.Endian = { __ename__ : ["jeash","utils","Endian"], __constructs__ : ["BIG_ENDIAN","LITTLE_ENDIAN"] }
jeash.utils.Endian.BIG_ENDIAN = ["BIG_ENDIAN",0];
jeash.utils.Endian.BIG_ENDIAN.toString = $estr;
jeash.utils.Endian.BIG_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.utils.Endian.LITTLE_ENDIAN = ["LITTLE_ENDIAN",1];
jeash.utils.Endian.LITTLE_ENDIAN.toString = $estr;
jeash.utils.Endian.LITTLE_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	if( inX === $_ ) return;
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
}
jeash.display.GfxPoint.__name__ = ["jeash","display","GfxPoint"];
jeash.display.GfxPoint.prototype.x = null;
jeash.display.GfxPoint.prototype.y = null;
jeash.display.GfxPoint.prototype.cx = null;
jeash.display.GfxPoint.prototype.cy = null;
jeash.display.GfxPoint.prototype.type = null;
jeash.display.GfxPoint.prototype.__class__ = jeash.display.GfxPoint;
jeash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	if( inGrad === $_ ) return;
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
}
jeash.display.LineJob.__name__ = ["jeash","display","LineJob"];
jeash.display.LineJob.prototype.grad = null;
jeash.display.LineJob.prototype.point_idx0 = null;
jeash.display.LineJob.prototype.point_idx1 = null;
jeash.display.LineJob.prototype.thickness = null;
jeash.display.LineJob.prototype.alpha = null;
jeash.display.LineJob.prototype.colour = null;
jeash.display.LineJob.prototype.pixel_hinting = null;
jeash.display.LineJob.prototype.joints = null;
jeash.display.LineJob.prototype.caps = null;
jeash.display.LineJob.prototype.scale_mode = null;
jeash.display.LineJob.prototype.miter_limit = null;
jeash.display.LineJob.prototype.__class__ = jeash.display.LineJob;
jeash.display.PointInPathMode = { __ename__ : ["jeash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
jeash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
jeash.display.PointInPathMode.USER_SPACE.toString = $estr;
jeash.display.PointInPathMode.USER_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
jeash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
jeash.display.PointInPathMode.DEVICE_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.Graphics = function(inSurface) {
	if( inSurface === $_ ) return;
	if(inSurface == null) {
		this.jeashSurface = js.Lib.document.createElement("canvas");
		this.jeashSurface.width = 0;
		this.jeashSurface.height = 0;
	} else this.jeashSurface = inSurface;
	this.mMatrix = new jeash.geom.Matrix();
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.originX = 0;
	this.originY = 0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.mNoClip = false;
	this.jeashClearLine();
	this.mLineJobs = [];
	this.jeashChanged = true;
	this.jeashShift = false;
	this.nextDrawIndex = 0;
}
jeash.display.Graphics.__name__ = ["jeash","display","Graphics"];
jeash.display.Graphics.jeashDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return jeash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?jeash.display.PointInPathMode.USER_SPACE:jeash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
jeash.display.Graphics.prototype.jeashSurface = null;
jeash.display.Graphics.prototype.jeashChanged = null;
jeash.display.Graphics.prototype.mPoints = null;
jeash.display.Graphics.prototype.mSolid = null;
jeash.display.Graphics.prototype.mFilling = null;
jeash.display.Graphics.prototype.mFillColour = null;
jeash.display.Graphics.prototype.mFillAlpha = null;
jeash.display.Graphics.prototype.mSolidGradient = null;
jeash.display.Graphics.prototype.mBitmap = null;
jeash.display.Graphics.prototype.mCurrentLine = null;
jeash.display.Graphics.prototype.mLineJobs = null;
jeash.display.Graphics.prototype.mNoClip = null;
jeash.display.Graphics.prototype.mDrawList = null;
jeash.display.Graphics.prototype.mLineDraws = null;
jeash.display.Graphics.prototype.mPenX = null;
jeash.display.Graphics.prototype.mPenY = null;
jeash.display.Graphics.prototype.mLastMoveID = null;
jeash.display.Graphics.prototype.mMatrix = null;
jeash.display.Graphics.prototype.jeashShift = null;
jeash.display.Graphics.prototype.owner = null;
jeash.display.Graphics.prototype.mBoundsDirty = null;
jeash.display.Graphics.prototype.standardExtent = null;
jeash.display.Graphics.prototype.originX = null;
jeash.display.Graphics.prototype.originY = null;
jeash.display.Graphics.prototype.nextDrawIndex = null;
jeash.display.Graphics.prototype.jeashRenderFrame = null;
jeash.display.Graphics.prototype.SetSurface = function(inSurface) {
	this.jeashSurface = inSurface;
}
jeash.display.Graphics.prototype.createCanvasColor = function(color,alpha) {
	var r;
	var g;
	var b;
	r = (16711680 & color) >> 16;
	g = (65280 & color) >> 8;
	b = 255 & color;
	return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
}
jeash.display.Graphics.prototype.createCanvasGradient = function(ctx,g) {
	var gradient;
	var matrix = g.matrix;
	if((g.flags & jeash.display.Graphics.RADIAL) == 0) {
		var p1 = matrix.transformPoint(new jeash.geom.Point(-819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(819.2,0));
		gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
	} else {
		var p1 = matrix.transformPoint(new jeash.geom.Point(g.focal * 819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(0,819.2));
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
jeash.display.Graphics.prototype.jeashRender = function(maskHandle,matrix) {
	if(!this.jeashChanged) return false;
	this.ClosePolygon(true);
	var extent = this.getStandardExtent();
	if(this.jeashRenderFrame++ < 10) {
		if(this.standardExtent.width - this.standardExtent.x != this.jeashSurface.width && this.standardExtent.height - this.standardExtent.y != this.jeashSurface.height) this.jeashAdjustSurface(); else if(this.standardExtent.width - this.standardExtent.x < this.jeashSurface.width && this.standardExtent.height - this.standardExtent.y < this.jeashSurface.height) this.jeashAdjustSurface();
	}
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx == null) return false;
	var len = this.mDrawList.length;
	this.jeashShift = Math.abs(extent.x) < this.jeashSurface.width && Math.abs(extent.y) < this.jeashSurface.height?true:false;
	ctx.save();
	if(this.jeashShift) ctx.translate(-extent.x,-extent.y);
	var _g = this.nextDrawIndex;
	while(_g < len) {
		var i = _g++;
		var d = this.mDrawList[len - 1 - i];
		if(d.lineJobs.length > 0) {
			var _g1 = 0, _g2 = d.lineJobs;
			while(_g1 < _g2.length) {
				var lj = _g2[_g1];
				++_g1;
				ctx.lineWidth = lj.thickness;
				switch(lj.joints) {
				case jeash.display.Graphics.CORNER_ROUND:
					ctx.lineJoin = "round";
					break;
				case jeash.display.Graphics.CORNER_MITER:
					ctx.lineJoin = "miter";
					break;
				case jeash.display.Graphics.CORNER_BEVEL:
					ctx.lineJoin = "bevel";
					break;
				}
				switch(lj.caps) {
				case jeash.display.Graphics.END_ROUND:
					ctx.lineCap = "round";
					break;
				case jeash.display.Graphics.END_SQUARE:
					ctx.lineCap = "square";
					break;
				case jeash.display.Graphics.END_NONE:
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
					case jeash.display.Graphics.MOVE:
						ctx.moveTo(p.x,p.y);
						break;
					case jeash.display.Graphics.CURVE:
						ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
						break;
					default:
						ctx.lineTo(p.x,p.y);
					}
				}
				ctx.closePath();
				ctx.stroke();
			}
		} else {
			ctx.beginPath();
			var _g1 = 0, _g2 = d.points;
			while(_g1 < _g2.length) {
				var p = _g2[_g1];
				++_g1;
				switch(p.type) {
				case jeash.display.Graphics.MOVE:
					ctx.moveTo(p.x,p.y);
					break;
				case jeash.display.Graphics.CURVE:
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
		if(fillAlpha >= 0. && fillAlpha <= 1.) {
			var g = d.solidGradient;
			if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else ctx.fillStyle = this.createCanvasColor(fillColour,fillAlpha);
		}
		ctx.fill();
		ctx.save();
		var bitmap = d.bitmap;
		if(bitmap != null) {
			if(this.jeashShift) ctx.translate(-extent.x,-extent.y);
			if(!this.mNoClip) ctx.clip();
			var img = bitmap.texture_buffer;
			var matrix1 = bitmap.matrix;
			if(matrix1 != null) ctx.transform(matrix1.a,matrix1.b,matrix1.c,matrix1.d,matrix1.tx,matrix1.ty);
			ctx.drawImage(img,0,0);
		}
		ctx.restore();
	}
	ctx.restore();
	this.jeashChanged = false;
	this.nextDrawIndex = len;
	return true;
}
jeash.display.Graphics.prototype.jeashHitTest = function(inX,inY) {
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx == null) return false;
	ctx.save();
	var _g = 0, _g1 = this.mDrawList;
	while(_g < _g1.length) {
		var d = _g1[_g];
		++_g;
		ctx.beginPath();
		var _g2 = 0, _g3 = d.points;
		while(_g2 < _g3.length) {
			var p = _g3[_g2];
			++_g2;
			switch(p.type) {
			case jeash.display.Graphics.MOVE:
				ctx.moveTo(p.x,p.y);
				break;
			case jeash.display.Graphics.CURVE:
				ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
				break;
			default:
				ctx.lineTo(p.x,p.y);
			}
		}
		ctx.closePath();
		if(ctx.isPointInPath(inX,inY)) return true;
	}
	ctx.restore();
	return false;
}
jeash.display.Graphics.prototype.blit = function(inTexture) {
	this.ClosePolygon(true);
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx != null) ctx.drawImage(inTexture.mTextureBuffer,this.mPenX,this.mPenY);
}
jeash.display.Graphics.prototype.lineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
	this.AddLineSegment();
	if(thickness == null) {
		this.jeashClearLine();
		return;
	} else {
		this.mCurrentLine.grad = null;
		this.mCurrentLine.thickness = thickness;
		this.mCurrentLine.colour = color == null?0:color;
		this.mCurrentLine.alpha = alpha == null?1.0:alpha;
		this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
		this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:jeash.display.Graphics.PIXEL_HINTING;
	}
	if(caps != null) {
		switch( (caps)[1] ) {
		case 1:
			this.mCurrentLine.caps = jeash.display.Graphics.END_ROUND;
			break;
		case 2:
			this.mCurrentLine.caps = jeash.display.Graphics.END_SQUARE;
			break;
		case 0:
			this.mCurrentLine.caps = jeash.display.Graphics.END_NONE;
			break;
		}
	}
	this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
	if(scaleMode != null) {
		switch( (scaleMode)[1] ) {
		case 2:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
			break;
		case 3:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_VERTICAL;
			break;
		case 0:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_HORIZONTAL;
			break;
		case 1:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NONE;
			break;
		}
	}
	this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
	if(joints != null) {
		switch( (joints)[1] ) {
		case 1:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
			break;
		case 0:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_MITER;
			break;
		case 2:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_BEVEL;
			break;
		}
	}
}
jeash.display.Graphics.prototype.lineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	this.mCurrentLine.grad = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
}
jeash.display.Graphics.prototype.beginFill = function(color,alpha) {
	this.ClosePolygon(true);
	this.mFillColour = color;
	this.mFillAlpha = alpha == null?1.0:alpha;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = null;
}
jeash.display.Graphics.prototype.endFill = function() {
	this.ClosePolygon(true);
}
jeash.display.Graphics.prototype.DrawEllipse = function(x,y,rx,ry) {
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
jeash.display.Graphics.prototype.drawEllipse = function(x,y,rx,ry) {
	this.ClosePolygon(false);
	rx /= 2;
	ry /= 2;
	this.DrawEllipse(x + rx,y + ry,rx,ry);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawCircle = function(x,y,rad) {
	this.ClosePolygon(false);
	this.DrawEllipse(x,y,rad,rad);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawRect = function(x,y,width,height) {
	if(width == 0 && height == 0) this.mNoClip = true; else this.mNoClip = false;
	this.ClosePolygon(false);
	this.moveTo(x,y);
	this.lineTo(x + width,y);
	this.lineTo(x + width,y + height);
	this.lineTo(x,y + height);
	this.lineTo(x,y);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawRoundRect = function(x,y,width,height,rx,ry) {
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
	this.ClosePolygon(false);
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
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.CreateGradient = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var points = new Array();
	var _g1 = 0, _g = colors.length;
	while(_g1 < _g) {
		var i = _g1++;
		points.push({ col : colors[i], alpha : alphas[i], ratio : ratios[i]});
	}
	var flags = 0;
	if(type == jeash.display.GradientType.RADIAL) flags |= jeash.display.Graphics.RADIAL;
	if(spreadMethod == jeash.display.SpreadMethod.REPEAT) flags |= jeash.display.Graphics.SPREAD_REPEAT; else if(spreadMethod == jeash.display.SpreadMethod.REFLECT) flags |= jeash.display.Graphics.SPREAD_REFLECT;
	if(matrix == null) {
		matrix = new jeash.geom.Matrix();
		matrix.createGradientBox(25,25);
	} else matrix = matrix.clone();
	var focal = focalPointRatio == null?0:focalPointRatio;
	return { points : points, matrix : matrix, flags : flags, focal : focal};
}
jeash.display.Graphics.prototype.beginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	this.ClosePolygon(true);
	this.mFilling = true;
	this.mBitmap = null;
	this.mSolidGradient = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
}
jeash.display.Graphics.prototype.beginBitmapFill = function(bitmap,matrix,in_repeat,in_smooth) {
	this.ClosePolygon(true);
	var repeat = in_repeat == null?true:in_repeat;
	var smooth = in_smooth == null?false:in_smooth;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = { texture_buffer : bitmap.mTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?jeash.display.Graphics.BMP_REPEAT:0) | (smooth?jeash.display.Graphics.BMP_SMOOTH:0)};
}
jeash.display.Graphics.prototype.jeashClearLine = function() {
	this.mCurrentLine = new jeash.display.LineJob(null,-1,-1,0.0,0.0,0,1,jeash.display.Graphics.CORNER_ROUND,jeash.display.Graphics.END_ROUND,jeash.display.Graphics.SCALE_NORMAL,3.0);
}
jeash.display.Graphics.prototype.jeashClearCanvas = function() {
	if(this.jeashSurface != null) {
		var w = this.jeashSurface.width;
		this.jeashSurface.width = w;
	}
}
jeash.display.Graphics.prototype.clear = function() {
	this.jeashClearLine();
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
	this.jeashClearCanvas();
	this.mLineJobs = [];
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.getStandardExtent = function() {
	if(this.standardExtent != null) return this.standardExtent;
	if(this.mDrawList.length == 0) return this.standardExtent = new jeash.geom.Rectangle();
	var maxX, minX, maxY, minY;
	maxX = minX = 0.;
	maxY = minY = 0.;
	var _g = 0, _g1 = this.mDrawList;
	while(_g < _g1.length) {
		var dl = _g1[_g];
		++_g;
		var _g2 = 0, _g3 = dl.points;
		while(_g2 < _g3.length) {
			var p = _g3[_g2];
			++_g2;
			maxX = p.x > maxX?p.x:maxX;
			minX = p.x < minX?p.x:minX;
			maxY = p.y > maxY?p.y:maxY;
			minY = p.y < minY?p.y:minY;
		}
		if(dl.bitmap != null) {
			var width = dl.bitmap.texture_buffer.width;
			var height = dl.bitmap.texture_buffer.height;
			maxX = width > maxX?width:maxX;
			minX = 0 < minX?0:minX;
			maxY = height > maxY?height:maxY;
			minY = 0 < minY?0:minY;
		}
	}
	if(minX < 0 && minX < this.originX || minY < 0 && minY < this.originY) {
		this.nextDrawIndex = 0;
		this.jeashClearCanvas();
	}
	this.originX = minX;
	this.originY = minY;
	return this.standardExtent = new jeash.geom.Rectangle(minX,minY,maxX - minX,maxY - minY);
}
jeash.display.Graphics.prototype.moveTo = function(inX,inY) {
	this.mPenX = inX;
	this.mPenY = inY;
	if(!this.mFilling) this.ClosePolygon(false); else {
		this.AddLineSegment();
		this.mLastMoveID = this.mPoints.length;
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
	}
}
jeash.display.Graphics.prototype.lineTo = function(inX,inY) {
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.LINE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
	if(!this.mFilling) this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.curveTo = function(inCX,inCY,inX,inY) {
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.mPoints.push(new jeash.display.GfxPoint(inX,inY,inCX,inCY,jeash.display.Graphics.CURVE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
}
jeash.display.Graphics.prototype.flush = function() {
	this.ClosePolygon(true);
}
jeash.display.Graphics.prototype.AddDrawable = function(inDrawable) {
	if(inDrawable == null) return;
	this.mDrawList.unshift(inDrawable);
}
jeash.display.Graphics.prototype.AddLineSegment = function() {
	if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new jeash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
	this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
}
jeash.display.Graphics.prototype.ClosePolygon = function(inCancelFill) {
	var l = this.mPoints.length;
	if(l > 0) {
		if(l > 1) {
			if(this.mFilling && l > 2) {
				if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
			}
			this.AddLineSegment();
			var drawable = { points : this.mPoints, fillColour : this.mFillColour, fillAlpha : this.mFillAlpha, solidGradient : this.mSolidGradient, bitmap : this.mBitmap, lineJobs : this.mLineJobs};
			this.AddDrawable(drawable);
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
	this.jeashChanged = true;
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.drawGraphicsData = function(points) {
	var _g = 0;
	while(_g < points.length) {
		var data = points[_g];
		++_g;
		if(data == null) this.mFilling = true; else switch(data.jeashGraphicsDataType) {
		case jeash.display.GraphicsDataType.STROKE:
			var stroke = data;
			if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.jeashGraphicsFillType) {
			case jeash.display.GraphicsFillType.SOLID_FILL:
				var fill = stroke.fill;
				this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
				break;
			case jeash.display.GraphicsFillType.GRADIENT_FILL:
				var fill = stroke.fill;
				this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
			break;
		case jeash.display.GraphicsDataType.PATH:
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
		case jeash.display.GraphicsDataType.SOLID:
			var fill = data;
			this.beginFill(fill.color,fill.alpha);
			break;
		case jeash.display.GraphicsDataType.GRADIENT:
			var fill = data;
			this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
			break;
		}
	}
}
jeash.display.Graphics.prototype.markBoundsClean = function() {
	this.mBoundsDirty = false;
}
jeash.display.Graphics.prototype.markBoundsDirty = function() {
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.getContext = function() {
	try {
		return this.jeashSurface.getContext("2d");
	} catch( e ) {
		jeash.Lib.trace("2d canvas API not implemented for: " + this.jeashSurface);
		return null;
	}
}
jeash.display.Graphics.prototype.jeashAdjustSurface = function() {
	var width = Math.ceil(this.standardExtent.width - this.standardExtent.x);
	var height = Math.ceil(this.standardExtent.height - this.standardExtent.y);
	if(width > 5000 || height > 5000) return;
	var dstCanvas = js.Lib.document.createElement("canvas");
	var ctx = dstCanvas.getContext("2d");
	dstCanvas.width = width;
	dstCanvas.height = height;
	jeash.Lib.jeashDrawToSurface(this.jeashSurface,dstCanvas);
	if(jeash.Lib.jeashIsOnStage(this.jeashSurface)) {
		jeash.Lib.jeashAppendSurface(dstCanvas);
		jeash.Lib.jeashCopyStyle(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashSwapSurface(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashRemoveSurface(this.jeashSurface);
	}
	this.jeashSurface = dstCanvas;
}
jeash.display.Graphics.prototype.__class__ = jeash.display.Graphics;
awe6.interfaces.EMouseCursor = { __ename__ : ["awe6","interfaces","EMouseCursor"], __constructs__ : ["ARROW","BUTTON","HAND","IBEAM","SUB_TYPE"] }
awe6.interfaces.EMouseCursor.ARROW = ["ARROW",0];
awe6.interfaces.EMouseCursor.ARROW.toString = $estr;
awe6.interfaces.EMouseCursor.ARROW.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.BUTTON = ["BUTTON",1];
awe6.interfaces.EMouseCursor.BUTTON.toString = $estr;
awe6.interfaces.EMouseCursor.BUTTON.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.HAND = ["HAND",2];
awe6.interfaces.EMouseCursor.HAND.toString = $estr;
awe6.interfaces.EMouseCursor.HAND.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.IBEAM = ["IBEAM",3];
awe6.interfaces.EMouseCursor.IBEAM.toString = $estr;
awe6.interfaces.EMouseCursor.IBEAM.__enum__ = awe6.interfaces.EMouseCursor;
awe6.interfaces.EMouseCursor.SUB_TYPE = function(value) { var $x = ["SUB_TYPE",4,value]; $x.__enum__ = awe6.interfaces.EMouseCursor; $x.toString = $estr; return $x; }
demo.Preloader = function(kernel,assets,isDecached) {
	if( kernel === $_ ) return;
	if(isDecached == null) isDecached = false;
	awe6.core.drivers.js.Preloader.call(this,kernel,assets,isDecached);
}
demo.Preloader.__name__ = ["demo","Preloader"];
demo.Preloader.__super__ = awe6.core.drivers.js.Preloader;
for(var k in awe6.core.drivers.js.Preloader.prototype ) demo.Preloader.prototype[k] = awe6.core.drivers.js.Preloader.prototype[k];
demo.Preloader.prototype.__class__ = demo.Preloader;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
haxe.Resource.content = [{ name : "config", data : "s683:PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8%DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJhc3NldHNfZm9udHNfb3JiaXRyb25fdHRmIiAvPg0KCTwvc2V0dGluZ3M%DQoJPGd1aT4NCgkJPGJ1dHRvbnMgbmV4dD0iTkVYVCIgc3RhcnQ9IlNUQVJUIiAvPg0KCQk8c2NlbmVzPg0KCQkJPGludHJvIHRpdGxlPSJJTlRST0RVQ1RJT04iIGluc3RydWN0aW9ucz0iQ2xpY2sgb24gYWxsIHRoZSBpbnZhZGVycyBhcyBmYXN0IGFzIHBvc3NpYmxlISIgLz4NCgkJCTxnYW1lIC8%DQoJCQk8cmVzdWx0cyB0aXRsZT0iR0FNRSBPVkVSIiB3aW49IkEgbmV3IHBlcnNvbmFsIGJlc3Qgb2YgIiBsb3NlPSJZb3UgZGlkbid0IGJlYXQgeW91ciBwcmV2aW91cyB0aW1lIG9mICIgLz4NCgkJPC9zY2VuZXM%DQoJPC9ndWk%DQo8L2RhdGE%DQo"},{ name : "assets_fonts_orbitron_ttf", data : "s111559:cToxMTFveTY6YXNjZW50ZDk5Ni4zNTJ5NDpkYXRhYWQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODc1LjUyZDY1NC4zMzZkOTM1LjkzNmQ2MTAuODE2ZDk3OS45NjhkNTY3LjI5NmQxMDI0ZDUwNS44NTZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDQ5Ny42NjRkODY3LjMyOGQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyaHk2Ol93aWR0aGQ3MDguNjA4eTQ6eE1heGQ2NTQuMzM2eTQ6eE1pbmQ1Mi4yMjR5NDp5TWF4ZDU5My45Mnk0OnlNaW5kMHk3Ol9oZWlnaHRkNTQxLjY5Nnk3OmxlYWRpbmdkMjA3Ljg3Mnk3OmRlc2NlbnRkMjM1LjUyeTg6Y2hhckNvZGVpMTExeTE1OmxlZnRzaWRlQmVhcmluZ2Q1Mi4yMjR5MTI6YWR2YW5jZVdpZHRoZDcwOC42MDh5ODpjb21tYW5kc2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoyMjNvUjBkOTk2LjM1MlIxYWQ3ODIuMzM2ZDQyMi45MTJkNzgyLjMzNmQ1ODIuNjU2ZDc4Mi4zMzZkNjIwLjU0NGQ3NjQuOTI4ZDY1My4zMTJkNzgyLjMzNmQ2ODUuMDU2ZDc4Mi4zMzZkNzIyLjk0NGQ3ODIuMzM2ZDg3NS41MmQ3ODIuMzM2ZDkzNS45MzZkNzM4LjMwNGQ5NzkuOTY4ZDY5NC4yNzJkMTAyNGQ2MzIuODMyZDEwMjRkMjc5LjU1MmQxMDI0ZDI3OS41NTJkODY3LjMyOGQ2MjUuNjY0ZDg2Ny4zMjhkNjI1LjY2NGQ3MzIuMTZkMjc5LjU1MmQ3MzIuMTZkMjc5LjU1MmQ1ODQuNzA0ZDYyNS42NjRkNTg0LjcwNGQ2MjUuNjY0ZDQ1OC43NTFkMjE1LjA0ZDQ1OC43NTFkMjE1LjA0ZDEwMjRkNTguMzY4ZDEwMjRkNTguMzY4ZDQ0OS41MzVkNTguMzY4ZDM4OC4wOTZkMTAyLjRkMzQ0LjU3NmQxNDYuNDMyZDMwMS4wNTZkMjA3Ljg3MmQzMDEuMDU2ZDYzMi44MzJkMzAxLjA1NmQ2ODguMTI4ZDMwMS4wNTZkNzMwLjYyNGQzMzUuODcxZDc3My4xMmQzNzAuNjg4ZDc4Mi4zMzZkNDIyLjkxMmhSMmQ4NTIuOTkyUjNkNzgyLjMzNlI0ZDU4LjM2OFI1ZDcyMi45NDRSNmQwUjdkNjY0LjU3NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjIzUjExZDU4LjM2OFIxMmQ4NTIuOTkyUjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2hnOjExMG9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4aFIyZDcxMi43MDRSM2Q2NTcuNDA4UjRkNTUuMjk2UjVkNTkzLjkyUjZkMFI3ZDUzOC42MjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExMFIxMWQ1NS4yOTZSMTJkNzEyLjcwNFIxM2FpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaGc6MjIyb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjJSMTFkMFIxMmQwUjEzYWhnOjEwOW9SMGQ5OTYuMzUyUjFhZDc3MC4wNDhkNDMwLjA4ZDgzMS40ODhkNDMwLjA4ZDg3NS4wMDhkNDc0LjExMWQ5MTguNTI4ZDUxOC4xNDRkOTE4LjUyOGQ1NzguNTZkOTE4LjUyOGQxMDI0ZDc2Mi44OGQxMDI0ZDc2Mi44OGQ1ODYuNzUyZDU2Ni4yNzJkNTg2Ljc1MmQ1NjYuMjcyZDEwMjRkNDA4LjU3NmQxMDI0ZDQwOC41NzZkNTg2Ljc1MmQyMTEuOTY4ZDU4Ni43NTJkMjExLjk2OGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQ0MzAuMDhkNzcwLjA0OGQ0MzAuMDhoUjJkMTAwMS40NzJSM2Q5MTguNTI4UjRkNTUuMjk2UjVkNTkzLjkyUjZkMFI3ZDUzOC42MjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwOVIxMWQ1NS4yOTZSMTJkMTAwMS40NzJSMTNhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjIxb1IwZDk5Ni4zNTJSMWFkNjY4LjY3MmQyODYuNzJkODYwLjE2ZDI4Ni43MmQ1MTguMTQ0ZDc0OS41NjhkNTE4LjE0NGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkNzQ4LjU0NGQyMjQuMjU2ZDU2OC4zMTlkMTcuNDA4ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ0MzguMjcyZDU3Ny41MzZkNjY4LjY3MmQyODYuNzJkMzM2Ljg5NmQyMzUuNTE5ZDM4OS4xMmQyNy42NDhkNTQ5Ljg4OGQyNy42NDhkNDk3LjY2NGQyMzUuNTE5ZDMzNi44OTZkMjM1LjUxOWhSMmQ4MjUuMzQ0UjNkODYwLjE2UjRkMTcuNDA4UjVkOTk2LjM1MlI2ZDBSN2Q5NzguOTQ0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjFSMTFkMTcuNDA4UjEyZDgyNS4zNDRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDhvUjBkOTk2LjM1MlIxYWQ1My4yNDhkMjM0LjQ5NWQyMTAuOTQ0ZDIzNC40OTVkMjEwLjk0NGQ4NjcuMzI4ZDMzMC43NTJkODY3LjMyOGQzMzAuNzUyZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny4yOGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDIzNC40OTVoUjJkMzQ1LjA4OFIzZDMzMC43NTJSNGQ1My4yNDhSNWQ3ODkuNTA0UjZkMFI3ZDczNi4yNTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwOFIxMWQ1My4yNDhSMTJkMzQ1LjA4OFIxM2FpMWkyaTJpMmkyaTJpM2kzaTJoZzoyMjBvUjBkOTk2LjM1MlIxYWQyMTQuMDE2ZDI4Ni43MmQyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQyODYuNzJkMjE0LjAxNmQyODYuNzJkNjE2LjQ0OGQ3Ny44MjNkNjE2LjQ0OGQyMzUuNTE5ZDQ1OC43NTJkMjM1LjUxOWQ0NTguNzUyZDc3LjgyM2Q2MTYuNDQ4ZDc3LjgyM2QzOTcuMzEyZDc3LjgyM2QzOTcuMzEyZDIzNS41MTlkMjQwLjY0ZDIzNS41MTlkMjQwLjY0ZDc3LjgyM2QzOTcuMzEyZDc3LjgyM2hSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk0Ni4xNzZSNmQwUjdkODkwLjg4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjBSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwN29SMGQ5OTYuMzUyUjFhZDQ5My41NjhkNDMwLjA4ZDY1MS4yNjRkNDMwLjA4ZDY1MS4yNjRkNDgzLjMyOGQ0MzAuMDhkNzI3LjA0ZDY1MS4yNjRkOTcwLjc1MmQ2NTEuMjY0ZDEwMjRkNDkzLjU2OGQxMDI0ZDI5MS44NGQ4MDUuODg4ZDIxMS45NjhkODA1Ljg4OGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDIzNS41MTlkMjExLjk2OGQyMzUuNTE5ZDIxMS45NjhkNjQ4LjE5MmQyOTEuODRkNjQ4LjE5MmQ0OTMuNTY4ZDQzMC4wOGhSMmQ2NjEuNTA0UjNkNjUxLjI2NFI0ZDU1LjI5NlI1ZDc4OC40OFI2ZDBSN2Q3MzMuMTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMDdSMTFkNTUuMjk2UjEyZDY2MS41MDRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMTlvUjBkOTk2LjM1MlIxYWQyMTQuMDE2ZDI4Ni43MmQyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQyODYuNzJkMjE0LjAxNmQyODYuNzJkNDA0LjQ4ZDIzNi41NDNkMjY4LjI4OGQyMzYuNTQzZDM4MC45MjhkNDguMTI3ZDQ4My4zMjhkNDguMTI3ZDU5NS45NjhkMjM2LjU0M2Q0NTguNzUyZDIzNi41NDNkNDMwLjA4ZDE5MS40ODdkNDA0LjQ4ZDIzNi41NDNoUjJkODQ3Ljg3MlIzZDc5Mi41NzZSNGQ1NS4yOTZSNWQ5NzUuODcyUjZkMFI3ZDkyMC41NzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIxOVIxMWQ1NS4yOTZSMTJkODQ3Ljg3MlIxM2FpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMDZvUjBkOTk2LjM1MlIxYWQ1OS4zOTJkMjM1LjUxOWQyMTYuMDY0ZDIzNS41MTlkMjE2LjA2NGQzOTMuMjE2ZDU5LjM5MmQzOTMuMjE2ZDU5LjM5MmQyMzUuNTE5ZDIxNi4wNjRkNDMwLjA4ZDIxNi4wNjRkMTA4OC41MTJkMjE2LjA2NGQxMTQ5Ljk1MmQxNzIuMDMyZDExOTMuNDcyZDEyOGQxMjM2Ljk5MmQ2Ni41NmQxMjM2Ljk5MmQtMTkxLjQ4OGQxMjM2Ljk5MmQtMTkxLjQ4OGQxMDc5LjI5NmQ1OS4zOTJkMTA3OS4yOTZkNTkuMzkyZDQzMC4wOGQyMTYuMDY0ZDQzMC4wOGhSMmQyNDQuNzM2UjNkMjE2LjA2NFI0ZC0xOTEuNDg4UjVkNzg4LjQ4UjZkLTIxMi45OTJSN2Q5NzkuOTY4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMDZSMTFkLTE5MS40ODhSMTJkMjQ0LjczNlIxM2FpMWkyaTJpMmkyaTFpMmkzaTNpMmkyaTJpMmkyaGc6MjE4b1IwZDk5Ni4zNTJSMWFkMjE0LjAxNmQyODYuNzJkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDI4Ni43MmQ3OTIuNTc2ZDI4Ni43MmQ3OTIuNTc2ZDg3Mi40NDhkNzkyLjU3NmQ5MzQuOTEyZDc0OC4wMzJkOTc5LjQ1NmQ3MDMuNDg4ZDEwMjRkNjQxLjAyNGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkMjg2LjcyZDIxNC4wMTZkMjg2LjcyZDMyNy42OGQyMzUuNTE5ZDM3OS45MDRkMjcuNjQ4ZDU0MC42NzJkMjcuNjQ4ZDQ4OC40NDhkMjM1LjUxOWQzMjcuNjhkMjM1LjUxOWhSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk5Ni4zNTJSNmQwUjdkOTQxLjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjE4UjExZDU1LjI5NlIxMmQ4NDcuODcyUjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmhnOjEwNW9SMGQ5OTYuMzUyUjFhZDUzLjI0OGQxMDI0ZDUzLjI0OGQ0MzAuMDhkMjA5LjkyZDQzMC4wOGQyMDkuOTJkMTAyNGQ1My4yNDhkMTAyNGQ1My4yNDhkMjM1LjUxOWQyMDkuOTJkMjM1LjUxOWQyMDkuOTJkMzkzLjIxNmQ1My4yNDhkMzkzLjIxNmQ1My4yNDhkMjM1LjUxOWhSMmQyMzQuNDk2UjNkMjA5LjkyUjRkNTMuMjQ4UjVkNzg4LjQ4UjZkMFI3ZDczNS4yMzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwNVIxMWQ1My4yNDhSMTJkMjM0LjQ5NlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxN29SMGQ5OTYuMzUyUjFhZDIxNC4wMTZkMjg2LjcyZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQyODYuNzJkNzkyLjU3NmQyODYuNzJkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmQ0NjcuOTY4ZDI3LjY0OGQ1MjAuMTkyZDIzNS41MTlkMzU5LjQyNGQyMzUuNTE5ZDMwNy4yZDI3LjY0OGQ0NjcuOTY4ZDI3LjY0OGhSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk5Ni4zNTJSNmQwUjdkOTQxLjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjE3UjExZDU1LjI5NlIxMmQ4NDcuODcyUjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmhnOjEwNG9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU2OS4zNDRkNDMwLjA4ZDYxMy4zNzZkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkMjM1LjUxOWQyMTEuOTY4ZDIzNS41MTlkMjExLjk2OGQ0MzAuMDhkNTA4LjkyOGQ0MzAuMDhoUjJkNjg0LjAzMlIzZDY1Ny40MDhSNGQ1NS4yOTZSNWQ3ODguNDhSNmQwUjdkNzMzLjE4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTA0UjExZDU1LjI5NlIxMmQ2ODQuMDMyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjE2b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTZSMTFkMFIxMmQwUjEzYWhnOjEwM29SMGQ5OTYuMzUyUjFhZDY0NS4xMmQxMTEwLjAxNmQ2NDUuMTJkMTE3MS40NTZkNjAxLjZkMTIxNC45NzZkNTU4LjA4ZDEyNTguNDk2ZDQ5Ni42NGQxMjU4LjQ5NmQxMzYuMTkyZDEyNTguNDk2ZDEzNi4xOTJkMTEwMC44ZDQ4OC40NDhkMTEwMC44ZDQ4OC40NDhkMTAyNGQxOTEuNDg4ZDEwMjRkMTMwLjA0OGQxMDI0ZDg2LjAxNmQ5NzkuOTY4ZDQxLjk4NGQ5MzUuOTM2ZDQxLjk4NGQ4NzUuNTJkNDEuOTg0ZDU3OC41NmQ0MS45ODRkNTE4LjE0NGQ4Ni4wMTZkNDc0LjExMWQxMzAuMDQ4ZDQzMC4wOGQxOTEuNDg4ZDQzMC4wOGQ0OTYuNjRkNDMwLjA4ZDU1OC4wOGQ0MzAuMDhkNjAxLjZkNDc0LjExMWQ2NDUuMTJkNTE4LjE0NGQ2NDUuMTJkNTc4LjU2ZDY0NS4xMmQxMTEwLjAxNmQxOTguNjU2ZDU4Ni43NTJkMTk4LjY1NmQ4NjcuMzI4ZDQ4OC40NDhkODY3LjMyOGQ0ODguNDQ4ZDU4Ni43NTJkMTk4LjY1NmQ1ODYuNzUyaFIyZDY5OS4zOTJSM2Q2NDUuMTJSNGQ0MS45ODRSNWQ1OTMuOTJSNmQtMjM0LjQ5NlI3ZDU1MS45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwM1IxMWQ0MS45ODRSMTJkNjk5LjM5MlIxM2FpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjIxNW9SMGQ5OTYuMzUyUjFhZDUxOS4xNjhkNDk1LjYxNmQ1MTkuMTY4ZDU0Ni44MTZkMzg2LjA0OGQ3MTYuOGQ1MTkuMTY4ZDg4OC44MzJkNTE5LjE2OGQ5NDAuMDMyZDM1Ni4zNTJkOTQwLjAzMmQyODUuNjk2ZDg0NC44ZDI3NS40NTZkODYxLjE4NGQyNDkuODU2ZDg5My40NGQyMjQuMjU2ZDkyNS42OTZkMjE1LjA0ZDk0MC4wMzJkNTQuMjcyZDk0MC4wMzJkNTQuMjcyZDg4OC44MzJkMTg2LjM2OGQ3MTYuOGQ1NC4yNzJkNTQ2LjgxNmQ1NC4yNzJkNDk1LjYxNmQyMTYuMDY0ZDQ5NS42MTZkMjg1LjY5NmQ1OTEuODcyZDM1Ni4zNTJkNDk1LjYxNmQ1MTkuMTY4ZDQ5NS42MTZoUjJkNTU5LjEwNFIzZDUxOS4xNjhSNGQ1NC4yNzJSNWQ1MjguMzg0UjZkODMuOTY4UjdkNDc0LjExMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjE1UjExZDU0LjI3MlIxMmQ1NTkuMTA0UjEzYWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmhnOjEwMm9SMGQ5OTYuMzUyUjFhZDQzMS4xMDRkMzkzLjIxNmQyMTAuOTQ0ZDM5My4yMTZkMjEwLjk0NGQ0MzAuMDhkNDMxLjEwNGQ0MzAuMDhkNDMxLjEwNGQ1ODYuNzUyZDIxMC45NDRkNTg2Ljc1MmQyMTAuOTQ0ZDEwMjRkNTQuMjcyZDEwMjRkNTQuMjcyZDM4NGQ1NC4yNzJkMzIzLjU4M2Q5Ny43OTJkMjc5LjU1MmQxNDEuMzEyZDIzNS41MTlkMjAzLjc3NmQyMzUuNTE5ZDQzMS4xMDRkMjM1LjUxOWQ0MzEuMTA0ZDM5My4yMTZoUjJkNDUwLjU2UjNkNDMxLjEwNFI0ZDU0LjI3MlI1ZDc4OC40OFI2ZDBSN2Q3MzQuMjA4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMDJSMTFkNTQuMjcyUjEyZDQ1MC41NlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmhnOjIxNG9SMGQ5OTYuMzUyUjFhZDIwNi44NDhkMjg2LjcyZDY0MS4wMjRkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQ0MzguMjcxZDU1LjI5NmQzNzQuNzg0ZDk5LjMyOGQzMzAuNzUxZDE0My4zNmQyODYuNzJkMjA2Ljg0OGQyODYuNzJkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2Q2MTYuNDQ4ZDc3LjgyM2Q2MTYuNDQ4ZDIzNS41MTlkNDU4Ljc1MmQyMzUuNTE5ZDQ1OC43NTJkNzcuODIzZDYxNi40NDhkNzcuODIzZDM5Ny4zMTJkNzcuODIzZDM5Ny4zMTJkMjM1LjUxOWQyNDAuNjRkMjM1LjUxOWQyNDAuNjRkNzcuODIzZDM5Ny4zMTJkNzcuODIzaFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTQ2LjE3NlI2ZDBSN2Q4OTAuODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIxNFIxMWQ1NS4yOTZSMTJkODQ3Ljg3MlIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMW9SMGQ5OTYuMzUyUjFhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyaFIyZDcwOC42MDhSM2Q2NTQuMzM2UjRkNTIuMjI0UjVkNTkzLjkyUjZkMFI3ZDU0MS42OTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEwMVIxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjEzb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQ5OC42ODhkMTEzLjY2M2Q1MzguNjI0ZDExMy42NjNkNTk2Ljk5MmQ3NS43NzVkNTk2Ljk5MmQyMDQuNzk5ZDUzMy41MDRkMjMxLjQyM2Q0OTUuNjE2ZDIzMS40MjNkNDU3LjcyOGQyMzEuNDIzZDM5OC44NDhkMTk5LjY3OWQzMzkuOTY4ZDE2Ny45MzZkMzEwLjI3MmQxNjcuOTM2ZDI5OS4wMDhkMTY3LjkzNmQyNTZkMTY3LjkzNmQyMTIuOTkyZDIwNC43OTlkMjEyLjk5MmQ3Ny44MjNkMjgyLjYyNGQ1MC4xNzVkMzEwLjI3MmQ1MC4xNzVkMzQ4LjE2ZDUwLjE3NWQ0MDcuNTUyZDc5Ljg3MWQ0NjYuOTQ0ZDEwOS41NjdkNDk4LjY4OGQxMTMuNjYzaFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTczLjgyNFI2ZDBSN2Q5MTguNTI4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTNSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6MTAwb1IwZDk5Ni4zNTJSMWFkNDcwLjAxNmQyMzUuNTE5ZDYyNi42ODhkMjM1LjUxOWQ2MjYuNjg4ZDEwMjRkMTcyLjAzMmQxMDI0ZDExMC41OTJkMTAyNGQ2Ny4wNzJkOTc5Ljk2OGQyMy41NTJkOTM1LjkzNmQyMy41NTJkODc1LjUyZDIzLjU1MmQ1NzguNTZkMjMuNTUyZDUxOC4xNDRkNjcuMDcyZDQ3NC4xMTFkMTEwLjU5MmQ0MzAuMDhkMTcyLjAzMmQ0MzAuMDhkNDcwLjAxNmQ0MzAuMDhkNDcwLjAxNmQyMzUuNTE5ZDE4MS4yNDhkNTg2Ljc1MmQxODEuMjQ4ZDg2Ny4zMjhkNDcwLjAxNmQ4NjcuMzI4ZDQ3MC4wMTZkNTg2Ljc1MmQxODEuMjQ4ZDU4Ni43NTJoUjJkNjgzLjAwOFIzZDYyNi42ODhSNGQyMy41NTJSNWQ3ODguNDhSNmQwUjdkNzY0LjkyOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTAwUjExZDIzLjU1MlIxMmQ2ODMuMDA4UjEzYWkxaTJpMmkyaTNpM2kyaTNpM2kyaTJpMWkyaTJpMmkyaGc6MjEyb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQwNC40OGQyMzYuNTQzZDI2OC4yODhkMjM2LjU0M2QzODAuOTI4ZDQ4LjEyN2Q0ODMuMzI4ZDQ4LjEyN2Q1OTUuOTY4ZDIzNi41NDNkNDU4Ljc1MmQyMzYuNTQzZDQzMC4wOGQxOTEuNDg3ZDQwNC40OGQyMzYuNTQzaFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTc1Ljg3MlI2ZDBSN2Q5MjAuNTc2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTJSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjk5b1IwZDk5Ni4zNTJSMWFkNjUzLjMxMmQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ2NTMuMzEyZDQzMC4wOGQ2NTMuMzEyZDU4Ni43NTJoUjJkNzExLjY4UjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDU5My45MlI2ZDBSN2Q1NDEuNjk2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk5OVIxMWQ1Mi4yMjRSMTJkNzExLjY4UjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MjExb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDM0OC4xNmQyMzUuNTE5ZDQwMC4zODRkMjcuNjQ4ZDU2MS4xNTJkMjcuNjQ4ZDUwOC45MjhkMjM1LjUxOWQzNDguMTZkMjM1LjUxOWhSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDk5Ni4zNTJSNmQwUjdkOTQxLjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjExUjExZDU1LjI5NlIxMmQ4NDcuODcyUjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5OG9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQ4NzUuNTJkNjU3LjQwOGQ5MzUuOTM2ZDYxMy44ODhkOTc5Ljk2OGQ1NzAuMzY4ZDEwMjRkNTA4LjkyOGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQyMzUuNTE5ZDIxMS45NjhkMjM1LjUxOWQyMTEuOTY4ZDQzMC4wOGQ1MDguOTI4ZDQzMC4wOGQyMTEuOTY4ZDU4Ni43NTJkMjExLjk2OGQ4NjcuMzI4ZDUwMC43MzZkODY3LjMyOGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyaFIyZDY4My4wMDhSM2Q2NTcuNDA4UjRkNTUuMjk2UjVkNzg4LjQ4UjZkMFI3ZDczMy4xODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTk4UjExZDU1LjI5NlIxMmQ2ODMuMDA4UjEzYWkxaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjEwb1IwZDk5Ni4zNTJSMWFkMjA2Ljg0OGQyODYuNzJkNjQxLjAyNGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkNzkyLjU3NmQ4NzIuNDQ4ZDc5Mi41NzZkOTM0LjkxMmQ3NDguMDMyZDk3OS40NTZkNzAzLjQ4OGQxMDI0ZDY0MS4wMjRkMTAyNGQyMDYuODQ4ZDEwMjRkMTQzLjM2ZDEwMjRkOTkuMzI4ZDk3OS45NjhkNTUuMjk2ZDkzNS45MzZkNTUuMjk2ZDg3Mi40NDhkNTUuMjk2ZDQzOC4yNzFkNTUuMjk2ZDM3NC43ODRkOTkuMzI4ZDMzMC43NTFkMTQzLjM2ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQyMTQuMDE2ZDQ0Ni40NjNkMjE0LjAxNmQ4NjQuMjU2ZDYzMS44MDhkODY0LjI1NmQ2MzEuODA4ZDQ0Ni40NjNkMjE0LjAxNmQ0NDYuNDYzZDQ2Ny45NjhkMjcuNjQ4ZDUyMC4xOTJkMjM1LjUxOWQzNTkuNDI0ZDIzNS41MTlkMzA3LjJkMjcuNjQ4ZDQ2Ny45NjhkMjcuNjQ4aFIyZDg0Ny44NzJSM2Q3OTIuNTc2UjRkNTUuMjk2UjVkOTk2LjM1MlI2ZDBSN2Q5NDEuMDU2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMTBSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk3b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4aFIyZDcxMC42NTZSM2Q2NTUuMzZSNGQ1My4yNDhSNWQ1OTMuOTJSNmQwUjdkNTQwLjY3MlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpOTdSMTFkNTMuMjQ4UjEyZDcxMC42NTZSMTNhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjA5b1IwZDk5Ni4zNTJSMWFkNjMzLjg1NmQ3NzguMjRkNjMzLjg1NmQyODYuNzJkNzk0LjYyNGQyODYuNzJkNzk0LjYyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTYuMDY0ZDUzMC40MzJkMjE2LjA2NGQxMDI0ZDU3LjM0NGQxMDI0ZDU3LjM0NGQyODYuNzJkMjIxLjE4NGQyODYuNzJkNjMzLjg1NmQ3NzguMjRkNTEwLjk3NmQxMTMuNjYzZDU1MC45MTJkMTEzLjY2M2Q2MDkuMjhkNzUuNzc1ZDYwOS4yOGQyMDQuNzk5ZDU0NS43OTJkMjMxLjQyM2Q1MDcuOTA0ZDIzMS40MjNkNDcwLjAxNmQyMzEuNDIzZDQxMS4xMzZkMTk5LjY3OWQzNTIuMjU2ZDE2Ny45MzZkMzIyLjU2ZDE2Ny45MzZkMzExLjI5NmQxNjcuOTM2ZDI2OC4yODhkMTY3LjkzNmQyMjUuMjhkMjA0Ljc5OWQyMjUuMjhkNzcuODIzZDI5NC45MTJkNTAuMTc1ZDMyMi41NmQ1MC4xNzVkMzYwLjQ0OGQ1MC4xNzVkNDE5Ljg0ZDc5Ljg3MWQ0NzkuMjMyZDEwOS41NjdkNTEwLjk3NmQxMTMuNjYzaFIyZDg1MS45NjhSM2Q3OTQuNjI0UjRkNTcuMzQ0UjVkOTczLjgyNFI2ZDBSN2Q5MTYuNDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIwOVIxMWQ1Ny4zNDRSMTJkODUxLjk2OFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6OTZvUjBkOTk2LjM1MlIxYWQxOTMuNTM2ZDUxLjE5OWQyNDUuNzZkMjU5LjA3MmQ4NC45OTJkMjU5LjA3MmQzMi43NjhkNTEuMTk5ZDE5My41MzZkNTEuMTk5aFIyZDI3OC41MjhSM2QyNDUuNzZSNGQzMi43NjhSNWQ5NzIuOFI2ZDc2NC45MjhSN2Q5NDAuMDMyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk5NlIxMWQzMi43NjhSMTJkMjc4LjUyOFIxM2FpMWkyaTJpMmkyaGc6MjA4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMDhSMTFkMFIxMmQwUjEzYWhnOjk1b1IwZDk5Ni4zNTJSMWFkNzc5LjI2NGQxMDI2LjA0OGQ3NzkuMjY0ZDExODIuNzJkNTUuMjk2ZDExODIuNzJkNTUuMjk2ZDEwMjYuMDQ4ZDc3OS4yNjRkMTAyNi4wNDhoUjJkODQ3Ljg3MlIzZDc3OS4yNjRSNGQ1NS4yOTZSNWQtMi4wNDhSNmQtMTU4LjcyUjdkLTU3LjM0NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpOTVSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkyaTJpMmhnOjIwN29SMGQ5OTYuMzUyUjFhZDc1Ljc3NmQxMDI0ZDc1Ljc3NmQyODYuNzJkMjM1LjUyZDI4Ni43MmQyMzUuNTJkMTAyNGQ3NS43NzZkMTAyNGQzNDYuMTEyZDc3LjgyM2QzNDYuMTEyZDIzNS41MTlkMTg4LjQxNmQyMzUuNTE5ZDE4OC40MTZkNzcuODIzZDM0Ni4xMTJkNzcuODIzZDEyNi45NzZkNzcuODIzZDEyNi45NzZkMjM1LjUxOWQtMjkuNjk2ZDIzNS41MTlkLTI5LjY5NmQ3Ny44MjNkMTI2Ljk3NmQ3Ny44MjNoUjJkMjI1LjI4UjNkMzQ2LjExMlI0ZC0yOS42OTZSNWQ5NDYuMTc2UjZkMFI3ZDk3NS44NzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIwN1IxMWQtMjkuNjk2UjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5NG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpOTRSMTFkMFIxMmQwUjEzYWhnOjIwNm9SMGQ5OTYuMzUyUjFhZDYzLjQ4OGQxMDI0ZDYzLjQ4OGQyODYuNzJkMjIzLjIzMmQyODYuNzJkMjIzLjIzMmQxMDI0ZDYzLjQ4OGQxMDI0ZDEyMy45MDRkMjM2LjU0M2QtMTIuMjg4ZDIzNi41NDNkMTAwLjM1MmQ0OC4xMjdkMjAyLjc1MmQ0OC4xMjdkMzE1LjM5MmQyMzYuNTQzZDE3OC4xNzZkMjM2LjU0M2QxNDkuNTA0ZDE5MS40ODdkMTIzLjkwNGQyMzYuNTQzaFIyZDIyNS4yOFIzZDMxNS4zOTJSNGQtMTIuMjg4UjVkOTc1Ljg3MlI2ZDBSN2Q5ODguMTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIwNlIxMWQtMTIuMjg4UjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjkzb1IwZDk5Ni4zNTJSMWFkNTIuMjI0ZDQ0My4zOTFkNTIuMjI0ZDI4Ni43MmQyNjguMjg4ZDI4Ni43MmQyNjguMjg4ZDEwMjRkNTIuMjI0ZDEwMjRkNTIuMjI0ZDg2Ny4zMjhkMTEwLjU5MmQ4NjcuMzI4ZDExMC41OTJkNDQzLjM5MWQ1Mi4yMjRkNDQzLjM5MWhSMmQyODIuNjI0UjNkMjY4LjI4OFI0ZDUyLjIyNFI1ZDczNy4yOFI2ZDBSN2Q2ODUuMDU2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk5M1IxMWQ1Mi4yMjRSMTJkMjgyLjYyNFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjBkOTk2LjM1MlIxYWQ0My4wMDhkMTAyNGQ0My4wMDhkMjg2LjcyZDIwMi43NTJkMjg2LjcyZDIwMi43NTJkMTAyNGQ0My4wMDhkMTAyNGQzNi44NjRkMjM1LjUxOWQ4OS4wODhkMjcuNjQ4ZDI0OS44NTZkMjcuNjQ4ZDE5Ny42MzJkMjM1LjUxOWQzNi44NjRkMjM1LjUxOWhSMmQyMjUuMjhSM2QyNDkuODU2UjRkMzYuODY0UjVkOTk2LjM1MlI2ZDBSN2Q5NTkuNDg4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMDVSMTFkMzYuODY0UjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkyb1IwZDk5Ni4zNTJSMWFkNS4xMmQyODYuNzJkNjEuNDRkMjg2LjcyZDUzMy41MDRkODY2LjMwNGQ1MzMuNTA0ZDEwMjRkNDc3LjE4NGQxMDI0ZDUuMTJkNDQ0LjQxNWQ1LjEyZDI4Ni43MmhSMmQ1MzIuNDhSM2Q1MzMuNTA0UjRkNS4xMlI1ZDczNy4yOFI2ZDBSN2Q3MzIuMTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTkyUjExZDUuMTJSMTJkNTMyLjQ4UjEzYWkxaTJpMmkyaTJpMmkyaGc6MjA0b1IwZDk5Ni4zNTJSMWFkOTcuMjhkMTAyNGQ5Ny4yOGQyODYuNzJkMjU3LjAyNGQyODYuNzJkMjU3LjAyNGQxMDI0ZDk3LjI4ZDEwMjRkMTk3LjYzMmQyNy42NDhkMjQ5Ljg1NmQyMzUuNTE5ZDg5LjA4OGQyMzUuNTE5ZDM2Ljg2NGQyNy42NDhkMTk3LjYzMmQyNy42NDhoUjJkMjI1LjI4UjNkMjU3LjAyNFI0ZDM2Ljg2NFI1ZDk5Ni4zNTJSNmQwUjdkOTU5LjQ4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjA0UjExZDM2Ljg2NFIxMmQyMjUuMjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MW9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQxMDI0ZDU1LjI5NmQyODYuNzJkMjcxLjM2ZDI4Ni43MmQyNzEuMzZkNDQzLjM5MWQyMTEuOTY4ZDQ0My4zOTFkMjExLjk2OGQ4NjcuMzI4ZDI3MS4zNmQ4NjcuMzI4ZDI3MS4zNmQxMDI0ZDU1LjI5NmQxMDI0aFIyZDI4MS42UjNkMjcxLjM2UjRkNTUuMjk2UjVkNzM3LjI4UjZkMFI3ZDY4MS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTkxUjExZDU1LjI5NlIxMmQyODEuNlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDNvUjBkOTk2LjM1MlIxYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJkNTk0Ljk0NGQ3Ny44MjNkNTk0Ljk0NGQyMzUuNTE5ZDQzNy4yNDhkMjM1LjUxOWQ0MzcuMjQ4ZDc3LjgyM2Q1OTQuOTQ0ZDc3LjgyM2QzNzUuODA4ZDc3LjgyM2QzNzUuODA4ZDIzNS41MTlkMjE5LjEzNmQyMzUuNTE5ZDIxOS4xMzZkNzcuODIzZDM3NS44MDhkNzcuODIzaFIyZDc4NC4zODRSM2Q3NDAuMzUyUjRkNTkuMzkyUjVkOTQ2LjE3NlI2ZDBSN2Q4ODYuNzg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMDNSMTFkNTkuMzkyUjEyZDc4NC4zODRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkwb1IwZDk5Ni4zNTJSMWFkNTIuMjI0ZDQ0Ni40NjNkNTIuMjI0ZDI4Ni43MmQ3ODkuNTA0ZDI4Ni43MmQ3ODkuNTA0ZDQ0OS41MzVkMjk1LjkzNmQ4NjQuMjU2ZDc4OS41MDRkODY0LjI1NmQ3ODkuNTA0ZDEwMjRkNTIuMjI0ZDEwMjRkNTIuMjI0ZDg2MS4xODRkNTQ1Ljc5MmQ0NDYuNDYzZDUyLjIyNGQ0NDYuNDYzaFIyZDg0MC43MDRSM2Q3ODkuNTA0UjRkNTIuMjI0UjVkNzM3LjI4UjZkMFI3ZDY4NS4wNTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTkwUjExZDUyLjIyNFIxMmQ4NDAuNzA0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMDJvUjBkOTk2LjM1MlIxYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJkMzcyLjczNmQyMzYuNTQzZDIzNi41NDRkMjM2LjU0M2QzNDkuMTg0ZDQ4LjEyN2Q0NTEuNTg0ZDQ4LjEyN2Q1NjQuMjI0ZDIzNi41NDNkNDI3LjAwOGQyMzYuNTQzZDM5OC4zMzZkMTkxLjQ4N2QzNzIuNzM2ZDIzNi41NDNoUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ5NzUuODcyUjZkMFI3ZDkxNi40OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjAyUjExZDU5LjM5MlIxMmQ3ODQuMzg0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjg5b1IwZDk5Ni4zNTJSMWFkNjY4LjY3MmQyODYuNzJkODYwLjE2ZDI4Ni43MmQ1MTguMTQ0ZDc0OS41NjhkNTE4LjE0NGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkNzQ4LjU0NGQyMjQuMjU2ZDU2OC4zMTlkMTcuNDA4ZDI4Ni43MmQyMDYuODQ4ZDI4Ni43MmQ0MzguMjcyZDU3Ny41MzZkNjY4LjY3MmQyODYuNzJoUjJkODI1LjM0NFIzZDg2MC4xNlI0ZDE3LjQwOFI1ZDczNy4yOFI2ZDBSN2Q3MTkuODcyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk4OVIxMWQxNy40MDhSMTJkODI1LjM0NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjAxb1IwZDk5Ni4zNTJSMWFkNzQwLjM1MmQyODYuNzJkNzQwLjM1MmQ0NDYuNDYzZDIyMC4xNmQ0NDYuNDYzZDIyMC4xNmQ1NzUuNDg4ZDYzOC45NzZkNTc1LjQ4OGQ2MzguOTc2ZDczNS4yMzJkMjIwLjE2ZDczNS4yMzJkMjIwLjE2ZDg2NC4yNTZkNzQwLjM1MmQ4NjQuMjU2ZDc0MC4zNTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkMjg2LjcyZDc0MC4zNTJkMjg2LjcyZDMxNi40MTZkMjM1LjUxOWQzNjguNjRkMjcuNjQ4ZDUyOS40MDhkMjcuNjQ4ZDQ3Ny4xODRkMjM1LjUxOWQzMTYuNDE2ZDIzNS41MTloUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ5OTYuMzUyUjZkMFI3ZDkzNi45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjAxUjExZDU5LjM5MlIxMmQ3ODQuMzg0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjg4b1IwZDk5Ni4zNTJSMWFkNjE5LjUyZDI4Ni43MmQ3ODQuMzg0ZDI4Ni43MmQ3ODQuMzg0ZDM0MC45OTFkNTIwLjE5MmQ2NTUuMzZkNzg0LjM4NGQ5NjguNzA0ZDc4NC4zODRkMTAyNGQ2MTkuNTJkMTAyNGQ0MTQuNzJkNzgyLjMzNmQyMTEuOTY4ZDEwMjRkNDcuMTA0ZDEwMjRkNDcuMTA0ZDk2OS43MjhkMzEwLjI3MmQ2NTUuMzZkNDcuMTA0ZDM0MC45OTFkNDcuMTA0ZDI4Ni43MmQyMTEuOTY4ZDI4Ni43MmQ0MTYuNzY4ZDUyOS40MDhkNDQ2LjQ2NGQ0OTEuNTJkNTE5LjE2OGQ0MDYuMDE1ZDU5MS44NzJkMzIwLjUxMWQ2MTkuNTJkMjg2LjcyaFIyZDgzMS40ODhSM2Q3ODQuMzg0UjRkNDcuMTA0UjVkNzM3LjI4UjZkMFI3ZDY5MC4xNzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTg4UjExZDQ3LjEwNFIxMmQ4MzEuNDg4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2hnOjIwMG9SMGQ5OTYuMzUyUjFhZDc0MC4zNTJkMjg2LjcyZDc0MC4zNTJkNDQ2LjQ2M2QyMjAuMTZkNDQ2LjQ2M2QyMjAuMTZkNTc1LjQ4OGQ2MzguOTc2ZDU3NS40ODhkNjM4Ljk3NmQ3MzUuMjMyZDIyMC4xNmQ3MzUuMjMyZDIyMC4xNmQ4NjQuMjU2ZDc0MC4zNTJkODY0LjI1NmQ3NDAuMzUyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQ0NDYuNDY0ZDI3LjY0OGQ0OTguNjg4ZDIzNS41MTlkMzM3LjkyZDIzNS41MTlkMjg1LjY5NmQyNy42NDhkNDQ2LjQ2NGQyNy42NDhoUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ5OTYuMzUyUjZkMFI3ZDkzNi45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjAwUjExZDU5LjM5MlIxMmQ3ODQuMzg0UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjg3b1IwZDk5Ni4zNTJSMWFkOTk1LjMyOGQyODYuNzJkMTE2My4yNjRkMjg2LjcyZDg5NC45NzZkMTAyNGQ3NzMuMTJkMTAyNGQ1OTkuMDRkNTQ5Ljg4N2Q1MzMuNTA0ZDczMC4xMTJkNDI1Ljk4NGQxMDI0ZDMwNC4xMjhkMTAyNGQzNS44NGQyODYuNzJkMjA0LjhkMjg2LjcyZDM2NS41NjhkNzI2LjAxNmQzOTEuMTY4ZDY1Ny40MDhkNTI2LjMzNmQyODYuNzJkNjcyLjc2OGQyODYuNzJkODM0LjU2ZDcyNi4wMTZkODYwLjE2ZDY1Ny40MDhkOTk1LjMyOGQyODYuNzJoUjJkMTIwNy4yOTZSM2QxMTYzLjI2NFI0ZDM1Ljg0UjVkNzM3LjI4UjZkMFI3ZDcwMS40NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODdSMTFkMzUuODRSMTJkMTIwNy4yOTZSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5OW9SMGQ5OTYuMzUyUjFhZDc5Mi41NzZkNDQ2LjQ2M2QyMTYuMDY0ZDQ0Ni40NjNkMjE2LjA2NGQ4NjQuMjU2ZDc5Mi41NzZkODY0LjI1NmQ3OTIuNTc2ZDEwMjRkNTQzLjc0NGQxMDI0ZDQ5NS42MTZkMTE4My43NDRkMzM0Ljg0OGQxMTgzLjc0NGQzODIuOTc2ZDEwMjRkMjA4Ljg5NmQxMDI0ZDE0NS40MDhkMTAyNGQxMDEuMzc2ZDk3OS45NjhkNTcuMzQ0ZDkzNS45MzZkNTcuMzQ0ZDg3Mi40NDhkNTcuMzQ0ZDQzOC4yNzFkNTcuMzQ0ZDM3NC43ODRkMTAxLjM3NmQzMzAuNzUxZDE0NS40MDhkMjg2LjcyZDIwOC44OTZkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkNDQ2LjQ2M2hSMmQ4NDEuNzI4UjNkNzkyLjU3NlI0ZDU3LjM0NFI1ZDczNy4yOFI2ZC0xNTkuNzQ0UjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTk5UjExZDU3LjM0NFIxMmQ4NDEuNzI4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzo4Nm9SMGQ5OTYuMzUyUjFhZDUyOS40MDhkODIyLjI3MWQ4MzguNjU2ZDI4Ni43MmQxMDIxLjk1MmQyODYuNzJkNTk0Ljk0NGQxMDI0ZDQ2Mi44NDhkMTAyNGQzNS44NGQyODYuNzJkMjIwLjE2ZDI4Ni43MmQ1MjkuNDA4ZDgyMi4yNzFoUjJkMTAyNy4wNzJSM2QxMDIxLjk1MlI0ZDM1Ljg0UjVkNzM3LjI4UjZkMFI3ZDcwMS40NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODZSMTFkMzUuODRSMTJkMTAyNy4wNzJSMTNhaTFpMmkyaTJpMmkyaTJpMmhnOjE5OG9SMGQ5OTYuMzUyUjFhZDc5Mi41NzZkNDQ2LjQ2M2Q3OTIuNTc2ZDU3NS40ODhkMTIxMS4zOTJkNTc1LjQ4OGQxMjExLjM5MmQ3MzUuMjMyZDc5Mi41NzZkNzM1LjIzMmQ3OTIuNTc2ZDg2NC4yNTZkMTMxMy43OTJkODY0LjI1NmQxMzEzLjc5MmQxMDI0ZDYzMy44NTZkMTAyNGQ2MzMuODU2ZDc4Ni40MzJkMjE2LjA2NGQ3ODYuNDMyZDIxNi4wNjRkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDM4LjI3MWQ1NS4yOTZkMzc1LjgwOGQ5OS44NGQzMzEuMjY0ZDE0NC4zODRkMjg2LjcyZDIwNi44NDhkMjg2LjcyZDEzMTMuNzkyZDI4Ni43MmQxMzEzLjc5MmQ0NDYuNDYzZDc5Mi41NzZkNDQ2LjQ2M2Q2MzMuODU2ZDYyNi42ODhkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDYyNi42ODhkNjMzLjg1NmQ2MjYuNjg4aFIyZDE0MDhSM2QxMzEzLjc5MlI0ZDU1LjI5NlI1ZDczNy4yOFI2ZDBSN2Q2ODEuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxOThSMTFkNTUuMjk2UjEyZDE0MDhSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMWkyaTJpMmkyaGc6ODVvUjBkOTk2LjM1MlIxYWQyMTQuMDE2ZDI4Ni43MmQyMTQuMDE2ZDg2NC4yNTZkNjMxLjgwOGQ4NjQuMjU2ZDYzMS44MDhkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQyODYuNzJkMjE0LjAxNmQyODYuNzJoUjJkODQ3Ljg3MlIzZDc5Mi41NzZSNGQ1NS4yOTZSNWQ3MzcuMjhSNmQwUjdkNjgxLjk4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODVSMTFkNTUuMjk2UjEyZDg0Ny44NzJSMTNhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoxOTdvUjBkOTk2LjM1MlIxYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDM4Ni4wNDhkMjguNjcyZDQzOC4yNzJkMjguNjcyZDQ3MC4wMTZkMjguNjcyZDQ5My4wNTZkNTEuNzExZDUxNi4wOTZkNzQuNzUxZDUxNi4wOTZkMTA2LjQ5NWQ1MTYuMDk2ZDE1Ni42NzJkNTE2LjA5NmQxODguNDE1ZDQ5My4wNTZkMjExLjQ1NmQ0NzAuMDE2ZDIzNC40OTVkNDM4LjI3MmQyMzQuNDk1ZDM4Ni4wNDhkMjM0LjQ5NWQzNTQuMzA0ZDIzNC40OTVkMzMwLjc1MmQyMTEuNDU2ZDMwNy4yZDE4OC40MTVkMzA3LjJkMTU2LjY3MmQzMDcuMmQxMDYuNDk1ZDMwNy4yZDc0Ljc1MWQzMzAuNzUyZDUxLjcxMWQzNTQuMzA0ZDI4LjY3MmQzODYuMDQ4ZDI4LjY3MmQzODYuMDQ4ZDEwOC41NDNkMzg2LjA0OGQxNjMuODRkNDM4LjI3MmQxNjMuODRkNDM4LjI3MmQxMDguNTQzZDM4Ni4wNDhkMTA4LjU0M2hSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDk5NS4zMjhSNmQwUjdkOTM1LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTk3UjExZDU5LjM5MlIxMmQ4NTYuMDY0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmhnOjg0b1IwZDk5Ni4zNTJSMWFkMjAuNDhkMjg2LjcyZDc1Ny43NmQyODYuNzJkNzU3Ljc2ZDQ0Ni40NjNkNDY4Ljk5MmQ0NDYuNDYzZDQ2OC45OTJkMTAyNGQzMDkuMjQ4ZDEwMjRkMzA5LjI0OGQ0NDYuNDYzZDIwLjQ4ZDQ0Ni40NjNkMjAuNDhkMjg2LjcyaFIyZDc3Ny4yMTZSM2Q3NTcuNzZSNGQyMC40OFI1ZDczNy4yOFI2ZDBSN2Q3MTYuOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODRSMTFkMjAuNDhSMTJkNzc3LjIxNlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjBkOTk2LjM1MlIxYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDYyMC41NDRkNzcuODIzZDYyMC41NDRkMjM1LjUxOWQ0NjIuODQ4ZDIzNS41MTlkNDYyLjg0OGQ3Ny44MjNkNjIwLjU0NGQ3Ny44MjNkNDAxLjQwOGQ3Ny44MjNkNDAxLjQwOGQyMzUuNTE5ZDI0NC43MzZkMjM1LjUxOWQyNDQuNzM2ZDc3LjgyM2Q0MDEuNDA4ZDc3LjgyM2hSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDk0Ni4xNzZSNmQwUjdkODg2Ljc4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTk2UjExZDU5LjM5MlIxMmQ4NTYuMDY0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODNvUjBkOTk2LjM1MlIxYWQ3ODkuNTA0ZDQzOC4yNzFkNzg5LjUwNGQ1MDYuODhkNjI4LjczNmQ1MDYuODhkNjI4LjczNmQ0NDYuNDYzZDIxMC45NDRkNDQ2LjQ2M2QyMTAuOTQ0ZDU3NS40ODhkNjM3Ljk1MmQ1NzUuNDg4ZDcwMC40MTZkNTc1LjQ4OGQ3NDQuOTZkNjIwLjAzMWQ3ODkuNTA0ZDY2NC41NzZkNzg5LjUwNGQ3MjcuMDRkNzg5LjUwNGQ4NzIuNDQ4ZDc4OS41MDRkOTM0LjkxMmQ3NDQuOTZkOTc5LjQ1NmQ3MDAuNDE2ZDEwMjRkNjM3Ljk1MmQxMDI0ZDIwMy43NzZkMTAyNGQxNDEuMzEyZDEwMjRkOTYuNzY4ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3Mi40NDhkNTIuMjI0ZDgwMy44NGQyMTAuOTQ0ZDgwMy44NGQyMTAuOTQ0ZDg2NC4yNTZkNjI4LjczNmQ4NjQuMjU2ZDYyOC43MzZkNzM1LjIzMmQyMDMuNzc2ZDczNS4yMzJkMTQxLjMxMmQ3MzUuMjMyZDk2Ljc2OGQ2OTEuMmQ1Mi4yMjRkNjQ3LjE2OGQ1Mi4yMjRkNTgzLjY4ZDUyLjIyNGQ0MzguMjcxZDUyLjIyNGQzNzQuNzg0ZDk2Ljc2OGQzMzAuNzUxZDE0MS4zMTJkMjg2LjcyZDIwMy43NzZkMjg2LjcyZDYzNy45NTJkMjg2LjcyZDcwMC40MTZkMjg2LjcyZDc0NC45NmQzMzEuMjY0ZDc4OS41MDRkMzc1LjgwOGQ3ODkuNTA0ZDQzOC4yNzFoUjJkODQxLjcyOFIzZDc4OS41MDRSNGQ1Mi4yMjRSNWQ3MzcuMjhSNmQwUjdkNjg1LjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODNSMTFkNTIuMjI0UjEyZDg0MS43MjhSMTNhaTFpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2hnOjE5NW9SMGQ5OTYuMzUyUjFhZDIxMC45NDRkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkMTAyNGQ2MzUuOTA0ZDEwMjRkNjM1LjkwNGQ3ODYuNDMyZDIxOC4xMTJkNzg2LjQzMmQyMTguMTEyZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDQzOC4yNzFkNTkuMzkyZDM3NC43ODRkMTAzLjQyNGQzMzAuNzUxZDE0Ny40NTZkMjg2LjcyZDIxMC45NDRkMjg2LjcyZDIxOC4xMTJkNjI2LjY4OGQ2MzUuOTA0ZDYyNi42ODhkNjM1LjkwNGQ0NDYuNDYzZDIxOC4xMTJkNDQ2LjQ2M2QyMTguMTEyZDYyNi42ODhkNDkyLjU0NGQxMTMuNjYzZDUzMi40OGQxMTMuNjYzZDU5MC44NDhkNzUuNzc1ZDU5MC44NDhkMjA0Ljc5OWQ1MjcuMzZkMjMxLjQyM2Q0ODkuNDcyZDIzMS40MjNkNDUxLjU4NGQyMzEuNDIzZDM5Mi43MDRkMTk5LjY3OWQzMzMuODI0ZDE2Ny45MzZkMzA0LjEyOGQxNjcuOTM2ZDI5Mi44NjRkMTY3LjkzNmQyNDkuODU2ZDE2Ny45MzZkMjA2Ljg0OGQyMDQuNzk5ZDIwNi44NDhkNzcuODIzZDI3NS40NTZkNTAuMTc1ZDMwNC4xMjhkNTAuMTc1ZDM0Mi4wMTZkNTAuMTc1ZDQwMS40MDhkNzkuODcxZDQ2MC44ZDEwOS41NjdkNDkyLjU0NGQxMTMuNjYzaFIyZDg1Ni4wNjRSM2Q3OTYuNjcyUjRkNTkuMzkyUjVkOTczLjgyNFI2ZDBSN2Q5MTQuNDMyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxOTVSMTFkNTkuMzkyUjEyZDg1Ni4wNjRSMTNhaTFpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaTFpM2kyaTNpM2kzaTJpM2kyaTNpM2kzaGc6ODJvUjBkOTk2LjM1MlIxYWQ3OTMuNmQ0MzkuMjk1ZDc5My42ZDYyOS43NmQ3OTMuNmQ2OTIuMjIzZDc0OC41NDRkNzM2Ljc2OGQ3MDMuNDg4ZDc4MS4zMTJkNjQxLjAyNGQ3ODEuMzEyZDYzMy44NTZkNzgxLjMxMmQ3OTMuNmQ5NjkuNzI4ZDc5My42ZDEwMjRkNjI5Ljc2ZDEwMjRkNDI1Ljk4NGQ3ODEuMzEyZDIxNS4wNGQ3ODIuMzM2ZDIxOC4xMTJkNzgyLjMzNmQyMTguMTEyZDc4OC40OGQyMTYuMDY0ZDc4OC40OGQyMTUuMDRkNzg3LjQ1NmQyMTUuMDRkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDI4Ny43NDRkNjQxLjAyNGQyODcuNzQ0ZDcwMy40ODhkMjg3Ljc0NGQ3NDguNTQ0ZDMzMi4yODhkNzkzLjZkMzc2LjgzMmQ3OTMuNmQ0MzkuMjk1ZDIxNS4wNGQ0NDYuNDYzZDIxNS4wNGQ2MjEuNTY4ZDYzMi44MzJkNjIxLjU2OGQ2MzIuODMyZDQ0Ni40NjNkMjE1LjA0ZDQ0Ni40NjNoUjJkODQ0LjhSM2Q3OTMuNlI0ZDU2LjMyUjVkNzM2LjI1NlI2ZDBSN2Q2NzkuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk4MlIxMWQ1Ni4zMlIxMmQ4NDQuOFIxM2FpMWkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaGc6MTk0b1IwZDk5Ni4zNTJSMWFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGQ0MDguNTc2ZDIzNi41NDNkMjcyLjM4NGQyMzYuNTQzZDM4NS4wMjRkNDguMTI3ZDQ4Ny40MjRkNDguMTI3ZDYwMC4wNjRkMjM2LjU0M2Q0NjIuODQ4ZDIzNi41NDNkNDM0LjE3NmQxOTEuNDg3ZDQwOC41NzZkMjM2LjU0M2hSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDk3NS44NzJSNmQwUjdkOTE2LjQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxOTRSMTFkNTkuMzkyUjEyZDg1Ni4wNjRSMTNhaTFpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjgxb1IwZDk5Ni4zNTJSMWFkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODY0LjI1NmQ4NzYuNTQ0ZDg2NC4yNTZkODc2LjU0NGQxMDI0ZDIwNi44NDhkMTAyNGQxNDMuMzZkMTAyNGQ5OS4zMjhkOTc5Ljk2OGQ1NS4yOTZkOTM1LjkzNmQ1NS4yOTZkODcyLjQ0OGQ1NS4yOTZkNDM4LjI3MWQ1NS4yOTZkMzc0Ljc4NGQ5OS4zMjhkMzMwLjc1MWQxNDMuMzZkMjg2LjcyZDIwNi44NDhkMjg2LjcyZDY0MGQyODYuNzJkNzAzLjQ4OGQyODYuNzJkNzQ4LjAzMmQzMzEuMjY0ZDc5Mi41NzZkMzc1LjgwOGQ3OTIuNTc2ZDQzOC4yNzFkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2hSMmQ5MDUuMjE2UjNkODc2LjU0NFI0ZDU1LjI5NlI1ZDczNy4yOFI2ZDBSN2Q2ODEuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk4MVIxMWQ1NS4yOTZSMTJkOTA1LjIxNlIxM2FpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxOTNvUjBkOTk2LjM1MlIxYWQyMTAuOTQ0ZDI4Ni43MmQ2NDQuMDk2ZDI4Ni43MmQ3MDcuNTg0ZDI4Ni43MmQ3NTIuMTI4ZDMzMS4yNjRkNzk2LjY3MmQzNzUuODA4ZDc5Ni42NzJkNDM4LjI3MWQ3OTYuNjcyZDEwMjRkNjM1LjkwNGQxMDI0ZDYzNS45MDRkNzg2LjQzMmQyMTguMTEyZDc4Ni40MzJkMjE4LjExMmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQ0MzguMjcxZDU5LjM5MmQzNzQuNzg0ZDEwMy40MjRkMzMwLjc1MWQxNDcuNDU2ZDI4Ni43MmQyMTAuOTQ0ZDI4Ni43MmQyMTguMTEyZDYyNi42ODhkNjM1LjkwNGQ2MjYuNjg4ZDYzNS45MDRkNDQ2LjQ2M2QyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ2MjYuNjg4ZDM0Mi4wMTZkMjM2LjU0M2QzOTQuMjRkMjguNjcyZDU1NS4wMDhkMjguNjcyZDUwMi43ODRkMjM2LjU0M2QzNDIuMDE2ZDIzNi41NDNoUjJkODU2LjA2NFIzZDc5Ni42NzJSNGQ1OS4zOTJSNWQ5OTUuMzI4UjZkMFI3ZDkzNS45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE5M1IxMWQ1OS4zOTJSMTJkODU2LjA2NFIxM2FpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODBvUjBkOTk2LjM1MlIxYWQ1Ny4zNDRkMjg3Ljc0NGQ2NDIuMDQ4ZDI4Ny43NDRkNzA0LjUxMmQyODcuNzQ0ZDc0OS41NjhkMzMyLjI4OGQ3OTQuNjI0ZDM3Ni44MzJkNzk0LjYyNGQ0MzkuMjk1ZDc5NC42MjRkNjI5Ljc2ZDc5NC42MjRkNjkyLjIyM2Q3NDkuNTY4ZDczNi43NjhkNzA0LjUxMmQ3ODEuMzEyZDY0Mi4wNDhkNzgxLjMxMmQyMTYuMDY0ZDc4Mi4zMzZkMjE5LjEzNmQ3ODIuMzM2ZDIxOS4xMzZkNzg4LjQ4ZDIxNy4wODhkNzg4LjQ4ZDIxNi4wNjRkNzg3LjQ1NmQyMTYuMDY0ZDEwMjRkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDI4Ny43NDRkMjE2LjA2NGQ0NDYuNDYzZDIxNi4wNjRkNjIxLjU2OGQ2MzMuODU2ZDYyMS41NjhkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2hSMmQ4MDkuOTg0UjNkNzk0LjYyNFI0ZDU3LjM0NFI1ZDczNi4yNTZSNmQwUjdkNjc4LjkxMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpODBSMTFkNTcuMzQ0UjEyZDgwOS45ODRSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMWkyaTJpMmkyaGc6MTkyb1IwZDk5Ni4zNTJSMWFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGQ0NjEuODI0ZDI3LjY0OGQ1MTQuMDQ4ZDIzNS41MTlkMzUzLjI4ZDIzNS41MTlkMzAxLjA1NmQyNy42NDhkNDYxLjgyNGQyNy42NDhoUjJkODU2LjA2NFIzZDc5Ni42NzJSNGQ1OS4zOTJSNWQ5OTYuMzUyUjZkMFI3ZDkzNi45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTkyUjExZDU5LjM5MlIxMmQ4NTYuMDY0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo3OW9SMGQ5OTYuMzUyUjFhZDIwNi44NDhkMjg2LjcyZDY0MS4wMjRkMjg2LjcyZDcwMy40ODhkMjg2LjcyZDc0OC4wMzJkMzMxLjI2NGQ3OTIuNTc2ZDM3NS44MDhkNzkyLjU3NmQ0MzguMjcxZDc5Mi41NzZkODcyLjQ0OGQ3OTIuNTc2ZDkzNC45MTJkNzQ4LjAzMmQ5NzkuNDU2ZDcwMy40ODhkMTAyNGQ2NDEuMDI0ZDEwMjRkMjA2Ljg0OGQxMDI0ZDE0My4zNmQxMDI0ZDk5LjMyOGQ5NzkuOTY4ZDU1LjI5NmQ5MzUuOTM2ZDU1LjI5NmQ4NzIuNDQ4ZDU1LjI5NmQ0MzguMjcxZDU1LjI5NmQzNzQuNzg0ZDk5LjMyOGQzMzAuNzUxZDE0My4zNmQyODYuNzJkMjA2Ljg0OGQyODYuNzJkMjE0LjAxNmQ0NDYuNDYzZDIxNC4wMTZkODY0LjI1NmQ2MzEuODA4ZDg2NC4yNTZkNjMxLjgwOGQ0NDYuNDYzZDIxNC4wMTZkNDQ2LjQ2M2hSMmQ4NDcuODcyUjNkNzkyLjU3NlI0ZDU1LjI5NlI1ZDczNy4yOFI2ZDBSN2Q2ODEuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3OVIxMWQ1NS4yOTZSMTJkODQ3Ljg3MlIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxOTFvUjBkOTk2LjM1MlIxYWQ2NTcuNDA4ZDEwMjRkMTY4Ljk2ZDEwMjRkMTA3LjUyZDEwMjRkNjMuNDg4ZDk3OS45NjhkMTkuNDU2ZDkzNS45MzZkMTkuNDU2ZDg3NS41MmQxOS40NTZkNzA0LjUxMmQxOS40NTZkNjQzLjA3MmQ2My40ODhkNTk5LjU1MWQxMDcuNTJkNTU2LjAzMWQxNjguOTZkNTU2LjAzMWQ0MDAuMzg0ZDU1Ni4wMzFkNDAwLjM4NGQ0NzkuMjMyZDU1Ny4wNTZkNDc5LjIzMmQ1NTcuMDU2ZDU2NC4yMjNkNTU3LjA1NmQ2MjUuNjY0ZDUxMy4wMjRkNjY5LjY5NWQ0NjguOTkyZDcxMy43MjhkNDA3LjU1MmQ3MTMuNzI4ZDE3Ni4xMjhkNzEzLjcyOGQxNzYuMTI4ZDg2Ny4zMjhkNjU3LjQwOGQ4NjcuMzI4ZDY1Ny40MDhkMTAyNGQ1NTcuMDU2ZDMwMS4wNTZkNTU3LjA1NmQ0NTcuNzI3ZDQwMC4zODRkNDU3LjcyN2Q0MDAuMzg0ZDMwMS4wNTZkNTU3LjA1NmQzMDEuMDU2aFIyZDY5MS4yUjNkNjU3LjQwOFI0ZDE5LjQ1NlI1ZDcyMi45NDRSNmQwUjdkNzAzLjQ4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTkxUjExZDE5LjQ1NlIxMmQ2OTEuMlIxM2FpMWkyaTNpM2kyaTNpM2kyaTJpMmkyaTNpM2kyaTJpMmkyaTFpMmkyaTJpMmhnOjc4b1IwZDk5Ni4zNTJSMWFkNjMzLjg1NmQ3NzguMjRkNjMzLjg1NmQyODYuNzJkNzk0LjYyNGQyODYuNzJkNzk0LjYyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTYuMDY0ZDUzMC40MzJkMjE2LjA2NGQxMDI0ZDU3LjM0NGQxMDI0ZDU3LjM0NGQyODYuNzJkMjIxLjE4NGQyODYuNzJkNjMzLjg1NmQ3NzguMjRoUjJkODUxLjk2OFIzZDc5NC42MjRSNGQ1Ny4zNDRSNWQ3MzcuMjhSNmQwUjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzhSMTFkNTcuMzQ0UjEyZDg1MS45NjhSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5MG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTkwUjExZDBSMTJkMFIxM2FoZzo3N29SMGQ5OTYuMzUyUjFhZDQ3MS4wNGQ1ODQuNzA0ZDcxOS44NzJkMjg2LjcyZDg4NC43MzZkMjg2LjcyZDg4NC43MzZkMTAyNGQ3MjQuOTkyZDEwMjRkNzI0Ljk5MmQ1MjkuNDA4ZDQ3MS4wNGQ4MzIuNTEyZDIxNi4wNjRkNTMwLjQzMmQyMTYuMDY0ZDEwMjRkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDI4Ni43MmQyMjEuMTg0ZDI4Ni43MmQ0NzEuMDRkNTg0LjcwNGhSMmQ5NTAuMjcyUjNkODg0LjczNlI0ZDU3LjM0NFI1ZDczNy4yOFI2ZDBSN2Q2NzkuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3N1IxMWQ1Ny4zNDRSMTJkOTUwLjI3MlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4OW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTg5UjExZDBSMTJkMFIxM2FoZzo3Nm9SMGQ5OTYuMzUyUjFhZDU4LjM2OGQxMDI0ZDU4LjM2OGQyODUuNjk2ZDIxNy4wODhkMjg1LjY5NmQyMTcuMDg4ZDg2NC4yNTZkNzk1LjY0OGQ4NjQuMjU2ZDc5NS42NDhkMTAyNGQ1OC4zNjhkMTAyNGhSMmQ3OTcuNjk2UjNkNzk1LjY0OFI0ZDU4LjM2OFI1ZDczOC4zMDRSNmQwUjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzZSMTFkNTguMzY4UjEyZDc5Ny42OTZSMTNhaTFpMmkyaTJpMmkyaTJoZzoxODhvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4OFIxMWQwUjEyZDBSMTNhaGc6NzVvUjBkOTk2LjM1MlIxYWQ2MDQuMTZkMjg2LjcyZDc3MC4wNDhkMjg2LjcyZDc3MC4wNDhkMzQyLjAxNWQ1MDYuODhkNjU1LjM2ZDc3MC4wNDhkOTY4LjcwNGQ3NzAuMDQ4ZDEwMjRkNjA0LjE2ZDEwMjRkMzYyLjQ5NmQ3MzUuMjMyZDIxOC4xMTJkNzM1LjIzMmQyMTguMTEyZDEwMjRkNTguMzY4ZDEwMjRkNTguMzY4ZDI4Ni43MmQyMTguMTEyZDI4Ni43MmQyMTguMTEyZDU3NS40ODhkMzYyLjQ5NmQ1NzUuNDg4ZDQ1NC42NTZkNDY1LjkxOWQ2MDQuMTZkMjg2LjcyaFIyZDgxNi4xMjhSM2Q3NzAuMDQ4UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTc1UjExZDU4LjM2OFIxMmQ4MTYuMTI4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4N1IxMWQwUjEyZDBSMTNhaGc6NzRvUjBkOTk2LjM1MlIxYWQxNjIuODE2ZDc3Ny4yMTZkMTYyLjgxNmQ4NjQuMjU2ZDU4MC42MDhkODY0LjI1NmQ1ODAuNjA4ZDI4Ni43MmQ3NDEuMzc2ZDI4Ni43MmQ3NDEuMzc2ZDg3Mi40NDhkNzQxLjM3NmQ5MzQuOTEyZDY5Ni44MzJkOTc5LjQ1NmQ2NTIuMjg4ZDEwMjRkNTg5LjgyNGQxMDI0ZDE1NS42NDhkMTAyNGQ5Mi4xNmQxMDI0ZDQ4LjEyOGQ5NzkuOTY4ZDQuMDk2ZDkzNS45MzZkNC4wOTZkODcyLjQ0OGQ0LjA5NmQ3NzcuMjE2ZDE2Mi44MTZkNzc3LjIxNmhSMmQ3OTguNzJSM2Q3NDEuMzc2UjRkNC4wOTZSNWQ3MzcuMjhSNmQwUjdkNzMzLjE4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzRSMTFkNC4wOTZSMTJkNzk4LjcyUjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MTg2b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxODZSMTFkMFIxMmQwUjEzYWhnOjczb1IwZDk5Ni4zNTJSMWFkNTguMzY4ZDEwMjRkNTguMzY4ZDI4Ni43MmQyMTguMTEyZDI4Ni43MmQyMTguMTEyZDEwMjRkNTguMzY4ZDEwMjRoUjJkMjI1LjI4UjNkMjE4LjExMlI0ZDU4LjM2OFI1ZDczNy4yOFI2ZDBSN2Q2NzguOTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3M1IxMWQ1OC4zNjhSMTJkMjI1LjI4UjEzYWkxaTJpMmkyaTJoZzoxODVvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4NVIxMWQwUjEyZDBSMTNhaGc6NzJvUjBkOTk2LjM1MlIxYWQ2NTIuMjg4ZDI4Ni43MmQ4MTEuMDA4ZDI4Ni43MmQ4MTEuMDA4ZDEwMjRkNjUyLjI4OGQxMDI0ZDY1Mi4yODhkNzM1LjIzMmQyMTcuMDg4ZDczNS4yMzJkMjE3LjA4OGQxMDI0ZDU4LjM2OGQxMDI0ZDU4LjM2OGQyODYuNzJkMjE3LjA4OGQyODYuNzJkMjE3LjA4OGQ1NzUuNDg4ZDY1Mi4yODhkNTc1LjQ4OGQ2NTIuMjg4ZDI4Ni43MmhSMmQ4NzEuNDI0UjNkODExLjAwOFI0ZDU4LjM2OFI1ZDczNy4yOFI2ZDBSN2Q2NzguOTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk3MlIxMWQ1OC4zNjhSMTJkODcxLjQyNFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4NG9SMGQ5OTYuMzUyUjFhZDMzLjc5MmQxMTczLjUwNGQ4Ni4wMTZkOTY2LjY1NmQyNDYuNzg0ZDk2Ni42NTZkMTk0LjU2ZDExNzMuNTA0ZDMzLjc5MmQxMTczLjUwNGhSMmQyMTguMTEyUjNkMjQ2Ljc4NFI0ZDMzLjc5MlI1ZDU3LjM0NFI2ZC0xNDkuNTA0UjdkMjMuNTUyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxODRSMTFkMzMuNzkyUjEyZDIxOC4xMTJSMTNhaTFpMmkyaTJpMmhnOjcxb1IwZDk5Ni4zNTJSMWFkNzk0LjYyNGQ0MzguMjcxZDc5NC42MjRkNTA3LjkwNGQ2MzMuODU2ZDUwNy45MDRkNjMzLjg1NmQ0NDYuNDYzZDIxNi4wNjRkNDQ2LjQ2M2QyMTYuMDY0ZDg2NC4yNTZkNjMzLjg1NmQ4NjQuMjU2ZDYzMy44NTZkNzUzLjY2NGQ0NzQuMTEyZDc1My42NjRkNDc0LjExMmQ1OTMuOTJkNzk0LjYyNGQ1OTMuOTJkNzk0LjYyNGQ4NzIuNDQ4ZDc5NC42MjRkOTM0LjkxMmQ3NTAuMDhkOTc5LjQ1NmQ3MDUuNTM2ZDEwMjRkNjQyLjA0OGQxMDI0ZDIwOC44OTZkMTAyNGQxNDUuNDA4ZDEwMjRkMTAxLjM3NmQ5NzkuOTY4ZDU3LjM0NGQ5MzUuOTM2ZDU3LjM0NGQ4NzIuNDQ4ZDU3LjM0NGQ0MzguMjcxZDU3LjM0NGQzNzQuNzg0ZDEwMS4zNzZkMzMwLjc1MWQxNDUuNDA4ZDI4Ni43MmQyMDguODk2ZDI4Ni43MmQ2NDIuMDQ4ZDI4Ni43MmQ3MDUuNTM2ZDI4Ni43MmQ3NTAuMDhkMzMxLjI2NGQ3OTQuNjI0ZDM3NS44MDhkNzk0LjYyNGQ0MzguMjcxaFIyZDg0OS45MlIzZDc5NC42MjRSNGQ1Ny4zNDRSNWQ3MzcuMjhSNmQwUjdkNjc5LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNzFSMTFkNTcuMzQ0UjEyZDg0OS45MlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaGc6MTgzb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxODNSMTFkMFIxMmQwUjEzYWhnOjcwb1IwZDk5Ni4zNTJSMWFkNTkuMzkyZDI4Ni43MmQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkMjg2LjcyaFIyZDc0MC4zNTJSM2Q3NDAuMzUyUjRkNTkuMzkyUjVkNzM3LjI4UjZkMFI3ZDY3Ny44ODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTcwUjExZDU5LjM5MlIxMmQ3NDAuMzUyUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODJvUjBkOTk2LjM1MlIxYWQ1Ny4zNDRkNDUwLjU1OWQ1Ny4zNDRkMzkwLjE0NGQxMDEuMzc2ZDM0NS42ZDE0NS40MDhkMzAxLjA1NmQyMDYuODQ4ZDMwMS4wNTZkODAxLjc5MmQzMDEuMDU2ZDgwMS43OTJkMTAyNGQ2NDUuMTJkMTAyNGQ2NDUuMTJkNzg2LjQzMmQ1NzcuNTM2ZDc4Ni40MzJkNTc3LjUzNmQxMDI0ZDQxOS44NGQxMDI0ZDQxOS44NGQ3ODYuNDMyZDIwNi44NDhkNzg2LjQzMmQxNDUuNDA4ZDc4Ni40MzJkMTAxLjM3NmQ3NDIuNGQ1Ny4zNDRkNjk4LjM2N2Q1Ny4zNDRkNjM3Ljk1MmQ1Ny4zNDRkNDUwLjU1OWQ0MTkuODRkNDU4Ljc1MWQyMTQuMDE2ZDQ1OC43NTFkMjE0LjAxNmQ2MjguNzM2ZDQxOS44NGQ2MjguNzM2ZDQxOS44NGQ0NTguNzUxZDU3Ny41MzZkNDU4Ljc1MWQ1NzcuNTM2ZDYyOC43MzZkNjQ1LjEyZDYyOC43MzZkNjQ1LjEyZDQ1OC43NTFkNTc3LjUzNmQ0NTguNzUxaFIyZDg1Mi45OTJSM2Q4MDEuNzkyUjRkNTcuMzQ0UjVkNzIyLjk0NFI2ZDBSN2Q2NjUuNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTgyUjExZDU3LjM0NFIxMmQ4NTIuOTkyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjlvUjBkOTk2LjM1MlIxYWQ3NDAuMzUyZDI4Ni43MmQ3NDAuMzUyZDQ0Ni40NjNkMjIwLjE2ZDQ0Ni40NjNkMjIwLjE2ZDU3NS40ODhkNjM4Ljk3NmQ1NzUuNDg4ZDYzOC45NzZkNzM1LjIzMmQyMjAuMTZkNzM1LjIzMmQyMjAuMTZkODY0LjI1NmQ3NDAuMzUyZDg2NC4yNTZkNzQwLjM1MmQxMDI0ZDU5LjM5MmQxMDI0ZDU5LjM5MmQyODYuNzJkNzQwLjM1MmQyODYuNzJoUjJkNzg0LjM4NFIzZDc0MC4zNTJSNGQ1OS4zOTJSNWQ3MzcuMjhSNmQwUjdkNjc3Ljg4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNjlSMTFkNTkuMzkyUjEyZDc4NC4zODRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODFvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE4MVIxMWQwUjEyZDBSMTNhaGc6NjhvUjBkOTk2LjM1MlIxYWQ1OS4zOTJkMjg2LjcyZDY0NC4wOTZkMjg2LjcyZDcwNy41ODRkMjg2LjcyZDc1Mi4xMjhkMzMxLjI2NGQ3OTYuNjcyZDM3NS44MDhkNzk2LjY3MmQ0MzguMjcxZDc5Ni42NzJkODcyLjQ0OGQ3OTYuNjcyZDkzNC45MTJkNzUyLjEyOGQ5NzkuNDU2ZDcwNy41ODRkMTAyNGQ2NDQuMDk2ZDEwMjRkNTkuMzkyZDEwMjRkNTkuMzkyZDI4Ni43MmQyMTguMTEyZDQ0Ni40NjNkMjE4LjExMmQ4NjQuMjU2ZDYzNS45MDRkODY0LjI1NmQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzaFIyZDg1NC4wMTZSM2Q3OTYuNjcyUjRkNTkuMzkyUjVkNzM3LjI4UjZkMFI3ZDY3Ny44ODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTY4UjExZDU5LjM5MlIxMmQ4NTQuMDE2UjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJoZzoxODBvUjBkOTk2LjM1MlIxYWQzMy43OTJkMjU5LjA3MmQ4Ni4wMTZkNTEuMTk5ZDI0Ni43ODRkNTEuMTk5ZDE5NC41NmQyNTkuMDcyZDMzLjc5MmQyNTkuMDcyaFIyZDIxOC4xMTJSM2QyNDYuNzg0UjRkMzMuNzkyUjVkOTcyLjhSNmQ3NjQuOTI4UjdkOTM5LjAwOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTgwUjExZDMzLjc5MlIxMmQyMTguMTEyUjEzYWkxaTJpMmkyaTJoZzo2N29SMGQ5OTYuMzUyUjFhZDc5Mi41NzZkNDQ2LjQ2M2QyMTYuMDY0ZDQ0Ni40NjNkMjE2LjA2NGQ4NjQuMjU2ZDc5Mi41NzZkODY0LjI1NmQ3OTIuNTc2ZDEwMjRkMjA4Ljg5NmQxMDI0ZDE0NS40MDhkMTAyNGQxMDEuMzc2ZDk3OS45NjhkNTcuMzQ0ZDkzNS45MzZkNTcuMzQ0ZDg3Mi40NDhkNTcuMzQ0ZDQzOC4yNzFkNTcuMzQ0ZDM3NC43ODRkMTAxLjM3NmQzMzAuNzUxZDE0NS40MDhkMjg2LjcyZDIwOC44OTZkMjg2LjcyZDc5Mi41NzZkMjg2LjcyZDc5Mi41NzZkNDQ2LjQ2M2hSMmQ4NDEuNzI4UjNkNzkyLjU3NlI0ZDU3LjM0NFI1ZDczNy4yOFI2ZDBSN2Q2NzkuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk2N1IxMWQ1Ny4zNDRSMTJkODQxLjcyOFIxM2FpMWkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmhnOjE3OW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTc5UjExZDBSMTJkMFIxM2FoZzo2Nm9SMGQ5OTYuMzUyUjFhZDc2OS4wMjRkNDM4LjI3MWQ3NjkuMDI0ZDU3Ni41MTJkNzY5LjAyNGQ2MDUuMTg0ZDc2MS44NTZkNjIzLjYxNmQ3OTcuNjk2ZDY2OC42NzJkNzk3LjY5NmQ3MTkuODcyZDc5Ny42OTZkODcyLjQ0OGQ3OTcuNjk2ZDkzNC45MTJkNzUzLjE1MmQ5NzkuNDU2ZDcwOC42MDhkMTAyNGQ2NDUuMTJkMTAyNGQ2MC40MTZkMTAyNGQ2MC40MTZkMjg2LjcyZDYxNy40NzJkMjg2LjcyZDY3OS45MzZkMjg2LjcyZDcyNC40OGQzMzEuMjY0ZDc2OS4wMjRkMzc1LjgwOGQ3NjkuMDI0ZDQzOC4yNzFkMjE5LjEzNmQ3MjkuMDg4ZDIxOS4xMzZkODY0LjI1NmQ2MzYuOTI4ZDg2NC4yNTZkNjM2LjkyOGQ3MjkuMDg4ZDIxOS4xMzZkNzI5LjA4OGQyMTkuMTM2ZDQ0Ni40NjNkMjE5LjEzNmQ1NjkuMzQ0ZDYwOC4yNTZkNTY5LjM0NGQ2MDguMjU2ZDQ0Ni40NjNkMjE5LjEzNmQ0NDYuNDYzaFIyZDg1MS45NjhSM2Q3OTcuNjk2UjRkNjAuNDE2UjVkNzM3LjI4UjZkMFI3ZDY3Ni44NjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTY2UjExZDYwLjQxNlIxMmQ4NTEuOTY4UjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzhSMTFkMFIxMmQwUjEzYWhnOjY1b1IwZDk5Ni4zNTJSMWFkMjEwLjk0NGQyODYuNzJkNjQ0LjA5NmQyODYuNzJkNzA3LjU4NGQyODYuNzJkNzUyLjEyOGQzMzEuMjY0ZDc5Ni42NzJkMzc1LjgwOGQ3OTYuNjcyZDQzOC4yNzFkNzk2LjY3MmQxMDI0ZDYzNS45MDRkMTAyNGQ2MzUuOTA0ZDc4Ni40MzJkMjE4LjExMmQ3ODYuNDMyZDIxOC4xMTJkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkNDM4LjI3MWQ1OS4zOTJkMzc0Ljc4NGQxMDMuNDI0ZDMzMC43NTFkMTQ3LjQ1NmQyODYuNzJkMjEwLjk0NGQyODYuNzJkMjE4LjExMmQ2MjYuNjg4ZDYzNS45MDRkNjI2LjY4OGQ2MzUuOTA0ZDQ0Ni40NjNkMjE4LjExMmQ0NDYuNDYzZDIxOC4xMTJkNjI2LjY4OGhSMmQ4NTYuMDY0UjNkNzk2LjY3MlI0ZDU5LjM5MlI1ZDczNy4yOFI2ZDBSN2Q2NzcuODg4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk2NVIxMWQ1OS4zOTJSMTJkODU2LjA2NFIxM2FpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJoZzoxNzdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE3N1IxMWQwUjEyZDBSMTNhaGc6NjRvUjBkOTk2LjM1MlIxYWQzODkuMTJkNDkyLjU0NGQ0NTIuNjA4ZDQ5Mi41NDRkNTE0LjA0OGQ0OTIuNTQ0ZDU0Ny4zMjhkNTI1LjgyNGQ1ODAuNjA4ZDU1OS4xMDRkNTgwLjYwOGQ2MjAuNTQ0ZDU4MC42MDhkNjg1LjA1NmQ2MjUuNjY0ZDY4NS4wNTZkNjI1LjY2NGQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ4NjcuMzI4ZDc4Mi4zMzZkODY3LjMyOGQ3ODIuMzM2ZDEwMjRkMjA3Ljg3MmQxMDI0ZDE0Ni40MzJkMTAyNGQxMDIuNGQ5NzkuOTY4ZDU4LjM2OGQ5MzUuOTM2ZDU4LjM2OGQ4NzUuNTJkNTguMzY4ZDQzNS4xOTlkNTguMzY4ZDM3My43NmQxMDIuNGQzMzAuMjRkMTQ2LjQzMmQyODYuNzJkMjA3Ljg3MmQyODYuNzJkNjMyLjgzMmQyODYuNzJkNjk0LjI3MmQyODYuNzJkNzM4LjMwNGQzMzAuMjRkNzgyLjMzNmQzNzMuNzZkNzgyLjMzNmQ0MzUuMTk5ZDc4Mi4zMzZkODAyLjgxNmQzODkuMTJkODAyLjgxNmQzMjcuNjhkODAyLjgxNmQyOTMuODg4ZDc2OS41MzZkMjYwLjA5NmQ3MzYuMjU2ZDI2MC4wOTZkNjc0LjgxNmQyNjAuMDk2ZDYyMC41NDRkMjYwLjA5NmQ1NTkuMTA0ZDI5My44ODhkNTI1LjgyNGQzMjcuNjhkNDkyLjU0NGQzODkuMTJkNDkyLjU0NGQzNjguNjRkNjg1LjA1NmQ0NzIuMDY0ZDY4NS4wNTZkNDcyLjA2NGQ2MDEuMDg4ZDM2OC42NGQ2MDEuMDg4ZDM2OC42NGQ2ODUuMDU2aFIyZDg1MC45NDRSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTY0UjExZDU4LjM2OFIxMmQ4NTAuOTQ0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxNzZvUjBkOTk2LjM1MlIxYWQxOTUuNTg0ZDMwMS4wNTZkMjc4LjUyOGQzMDEuMDU2ZDMzOC45NDRkMzAxLjA1NmQzODIuOTc2ZDM0NC41NzZkNDI3LjAwOGQzODguMDk2ZDQyNy4wMDhkNDQ5LjUzNWQ0MjcuMDA4ZDUyMy4yNjRkNDI3LjAwOGQ1ODQuNzA0ZDM4Mi45NzZkNjI4LjczNmQzMzguOTQ0ZDY3Mi43NjhkMjc4LjUyOGQ2NzIuNzY4ZDE5NS41ODRkNjcyLjc2OGQxMzQuMTQ0ZDY3Mi43NjhkOTAuMTEyZDYyOC43MzZkNDYuMDhkNTg0LjcwNGQ0Ni4wOGQ1MjMuMjY0ZDQ2LjA4ZDQ0OS41MzVkNDYuMDhkMzg4LjA5NmQ5MC4xMTJkMzQ0LjU3NmQxMzQuMTQ0ZDMwMS4wNTZkMTk1LjU4NGQzMDEuMDU2ZDE4NC4zMmQ0MzkuMjk1ZDE4NC4zMmQ1MzMuNTAzZDI4OC43NjhkNTMzLjUwM2QyODguNzY4ZDQzOS4yOTVkMTg0LjMyZDQzOS4yOTVoUjJkNDQ5LjUzNlIzZDQyNy4wMDhSNGQ0Ni4wOFI1ZDcyMi45NDRSNmQzNTEuMjMyUjdkNjc2Ljg2NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTc2UjExZDQ2LjA4UjEyZDQ0OS41MzZSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaGc6NjNvUjBkOTk2LjM1MlIxYWQzMS43NDRkMjg2LjcyZDUxOS4xNjhkMjg2LjcyZDU4MS42MzJkMjg2LjcyZDYyNS4xNTJkMzMwLjI0ZDY2OC42NzJkMzczLjc2ZDY2OC42NzJkNDM1LjE5OWQ2NjguNjcyZDYwNS4xODRkNjY4LjY3MmQ2NjYuNjI0ZDYyNS4xNTJkNzEwLjY1NmQ1ODEuNjMyZDc1NC42ODhkNTE5LjE2OGQ3NTQuNjg4ZDI4OC43NjhkNzU0LjY4OGQyODguNzY4ZDgyNS4zNDRkMTMxLjA3MmQ4MjUuMzQ0ZDEzMS4wNzJkNzQ1LjQ3MmQxMzEuMDcyZDY4NC4wMzFkMTc0LjU5MmQ2NDAuNTEyZDIxOC4xMTJkNTk2Ljk5MmQyNzkuNTUyZDU5Ni45OTJkNTEyZDU5Ni45OTJkNTEyZDQ0My4zOTFkMzEuNzQ0ZDQ0My4zOTFkMzEuNzQ0ZDI4Ni43MmQyODguNzY4ZDEwMjRkMTMxLjA3MmQxMDI0ZDEzMS4wNzJkODY3LjMyOGQyODguNzY4ZDg2Ny4zMjhkMjg4Ljc2OGQxMDI0aFIyZDY5NC4yNzJSM2Q2NjguNjcyUjRkMzEuNzQ0UjVkNzM3LjI4UjZkMFI3ZDcwNS41MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTYzUjExZDMxLjc0NFIxMmQ2OTQuMjcyUjEzYWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc1b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzVSMTFkMFIxMmQwUjEzYWhnOjYyb1IwZDk5Ni4zNTJSMWFkNjAuNDE2ZDEwNDMuNDU1ZDYwLjQxNmQ4NjEuMTg0ZDI5OS4wMDhkNzIyLjk0NGQxNjcuOTM2ZDY0OS4yMTZkMTUyLjU3NmQ2NDEuMDI0ZDExNS4yZDYxNy45ODNkNzcuODI0ZDU5NC45NDRkNjAuNDE2ZDU4NS43MjhkNjAuNDE2ZDQwNC40OGQ0OTguNjg4ZDY1Ny40MDhkNDk4LjY4OGQ3ODkuNTA0ZDYwLjQxNmQxMDQzLjQ1NWhSMmQ0ODYuNFIzZDQ5OC42ODhSNGQ2MC40MTZSNWQ2MTkuNTJSNmQtMTkuNDU2UjdkNTU5LjEwNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNjJSMTFkNjAuNDE2UjEyZDQ4Ni40UjEzYWkxaTJpMmkyaTNpM2kyaTJpMmkyaGc6MTc0b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzRSMTFkMFIxMmQwUjEzYWhnOjYxb1IwZDk5Ni4zNTJSMWFkNTk5LjA0ZDczNS4yMzJkNTk5LjA0ZDg5MS45MDRkNjAuNDE2ZDg5MS45MDRkNjAuNDE2ZDczNS4yMzJkNTk5LjA0ZDczNS4yMzJkNTk5LjA0ZDUyOC4zODRkNTk5LjA0ZDY4NS4wNTZkNjAuNDE2ZDY4NS4wNTZkNjAuNDE2ZDUyOC4zODRkNTk5LjA0ZDUyOC4zODRoUjJkNjUzLjMxMlIzZDU5OS4wNFI0ZDYwLjQxNlI1ZDQ5NS42MTZSNmQxMzIuMDk2UjdkNDM1LjJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTYxUjExZDYwLjQxNlIxMmQ2NTMuMzEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTczb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzNSMTFkMFIxMmQwUjEzYWhnOjYwb1IwZDk5Ni4zNTJSMWFkMjAyLjc1MmQ3MjAuODk2ZDQ0Mi4zNjhkODYwLjE2ZDQ0Mi4zNjhkMTA0MS40MDdkNS4xMmQ3ODcuNDU2ZDUuMTJkNjU2LjM4NGQ0NDIuMzY4ZDQwMi40MzJkNDQyLjM2OGQ1ODIuNjU2ZDIwMi43NTJkNzIwLjg5NmhSMmQ0ODQuMzUyUjNkNDQyLjM2OFI0ZDUuMTJSNWQ2MjEuNTY4UjZkLTE3LjQwOFI3ZDYxNi40NDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTYwUjExZDUuMTJSMTJkNDg0LjM1MlIxM2FpMWkyaTJpMmkyaTJpMmkyaGc6MTcyb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNzJSMTFkMFIxMmQwUjEzYWhnOjU5b1IwZDk5Ni4zNTJSMWFkMjA5LjkyZDQzMC4wOGQyMDkuOTJkNTg3Ljc3NmQ1Mi4yMjRkNTg3Ljc3NmQ1Mi4yMjRkNDMwLjA4ZDIwOS45MmQ0MzAuMDhkNTMuMjQ4ZDg3OC41OTJkMjA5LjkyZDg3OC41OTJkMjA5LjkyZDEwMDcuNjE2ZDIwOS45MmQxMDYyLjkxMmQxNjUuMzc2ZDExMDUuOTJkMTIwLjgzMmQxMTQ4LjkyOGQ1My4yNDhkMTE2MC4xOTJkNTMuMjQ4ZDg3OC41OTJoUjJkMjcyLjM4NFIzZDIwOS45MlI0ZDUyLjIyNFI1ZDU5My45MlI2ZC0xMzYuMTkyUjdkNTQxLjY5NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTlSMTFkNTIuMjI0UjEyZDI3Mi4zODRSMTNhaTFpMmkyaTJpMmkxaTJpMmkzaTNpMmhnOjE3MW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTcxUjExZDBSMTJkMFIxM2FoZzo1OG9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQ4NjcuMzI4ZDIxMS45NjhkODY3LjMyOGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDg2Ny4zMjhkMjExLjk2OGQ0MzAuMDhkMjExLjk2OGQ1ODcuNzc2ZDU1LjI5NmQ1ODcuNzc2ZDU1LjI5NmQ0MzAuMDhkMjExLjk2OGQ0MzAuMDhoUjJkMjUyLjkyOFIzZDIxMS45NjhSNGQ1NS4yOTZSNWQ1OTMuOTJSNmQwUjdkNTM4LjYyNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNThSMTFkNTUuMjk2UjEyZDI1Mi45MjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzBvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE3MFIxMWQwUjEyZDBSMTNhaGc6NTdvUjBkOTk2LjM1MlIxYWQ2MzAuNzg0ZDEwMjRkMjA0LjhkMTAyNGQxNTAuNTI4ZDEwMjRkMTA3LjAwOGQ5NzguOTQ0ZDYzLjQ4OGQ5MzMuODg4ZDUyLjIyNGQ4NjcuMzI4ZDYyMi41OTJkODY3LjMyOGQ2MjIuNTkyZDczNi4yNTZkMjA0LjhkNzM2LjI1NmQxNDMuMzZkNzM2LjI1NmQ5OS4zMjhkNjkyLjIyM2Q1NS4yOTZkNjQ4LjE5MmQ1NS4yOTZkNTg2Ljc1MmQ1NS4yOTZkNDM1LjE5OWQ1NS4yOTZkMzczLjc2ZDk5LjMyOGQzMzAuMjRkMTQzLjM2ZDI4Ni43MmQyMDQuOGQyODYuNzJkNjMwLjc4NGQyODYuNzJkNjkyLjIyNGQyODYuNzJkNzM1Ljc0NGQzMzAuMjRkNzc5LjI2NGQzNzMuNzZkNzc5LjI2NGQ0MzUuMTk5ZDc3OS4yNjRkODc1LjUyZDc3OS4yNjRkOTM1LjkzNmQ3MzUuNzQ0ZDk3OS45NjhkNjkyLjIyNGQxMDI0ZDYzMC43ODRkMTAyNGQyMTIuOTkyZDU3OC41NmQ2MjIuNTkyZDU3OC41NmQ2MjIuNTkyZDQ0My4zOTFkMjEyLjk5MmQ0NDMuMzkxZDIxMi45OTJkNTc4LjU2aFIyZDg0Ny44NzJSM2Q3NzkuMjY0UjRkNTIuMjI0UjVkNzM3LjI4UjZkMFI3ZDY4NS4wNTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTU3UjExZDUyLjIyNFIxMmQ4NDcuODcyUjEzYWkxaTJpM2kzaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJoZzoxNjlvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2OVIxMWQwUjEyZDBSMTNhaGc6NTZvUjBkOTk2LjM1MlIxYWQ3ODIuMzM2ZDQwOC41NzZkNzgyLjMzNmQ1NzkuNTg0ZDc4Mi4zMzZkNjE3LjQ3MmQ3NjQuOTI4ZDY1MC4yNGQ3ODIuMzM2ZDY4MS45ODNkNzgyLjMzNmQ3MTkuODcyZDc4Mi4zMzZkODc1LjUyZDc4Mi4zMzZkOTM1LjkzNmQ3MzguMzA0ZDk3OS45NjhkNjk0LjI3MmQxMDI0ZDYzMi44MzJkMTAyNGQyMDcuODcyZDEwMjRkMTQ2LjQzMmQxMDI0ZDEwMi40ZDk3OS45NjhkNTguMzY4ZDkzNS45MzZkNTguMzY4ZDg3NS41MmQ1OC4zNjhkNzE5Ljg3MmQ1OC4zNjhkNjg3LjEwNGQ3NS43NzZkNjUwLjI0ZDU4LjM2OGQ2MTMuMzc2ZDU4LjM2OGQ1NzkuNTg0ZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyZDYzMi44MzJkMjg2LjcyZDY4OC4xMjhkMjg2LjcyZDczMC42MjRkMzIxLjUzNWQ3NzMuMTJkMzU2LjM1MmQ3ODIuMzM2ZDQwOC41NzZkMjE1LjA0ZDcyOS4wODhkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQyMTUuMDRkNzI5LjA4OGQyMTUuMDRkNDQ0LjQxNWQyMTUuMDRkNTgxLjYzMmQ2MjUuNjY0ZDU4MS42MzJkNjI1LjY2NGQ0NDQuNDE1ZDIxNS4wNGQ0NDQuNDE1aFIyZDg1NC4wMTZSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTU2UjExZDU4LjM2OFIxMmQ4NTQuMDE2UjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNjhvUjBkOTk2LjM1MlIxYWQ0MzEuMTA0ZDEwMS4zNzVkNDMxLjEwNGQyNTkuMDcyZDI3My40MDhkMjU5LjA3MmQyNzMuNDA4ZDEwMS4zNzVkNDMxLjEwNGQxMDEuMzc1ZDIxMS45NjhkMTAxLjM3NWQyMTEuOTY4ZDI1OS4wNzJkNTUuMjk2ZDI1OS4wNzJkNTUuMjk2ZDEwMS4zNzVkMjExLjk2OGQxMDEuMzc1aFIyZDM5NC4yNFIzZDQzMS4xMDRSNGQ1NS4yOTZSNWQ5MjIuNjI0UjZkNzY0LjkyOFI3ZDg2Ny4zMjhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2OFIxMWQ1NS4yOTZSMTJkMzk0LjI0UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTVvUjBkOTk2LjM1MlIxYWQzLjA3MmQyODUuNjk2ZDQ2Ni45NDRkMjg1LjY5NmQ1MjguMzg0ZDI4NS42OTZkNTcxLjkwNGQzMjkuMjE2ZDYxNS40MjRkMzcyLjczNmQ2MTUuNDI0ZDQzNC4xNzVkNjE1LjQyNGQxMDI0ZDQ1OC43NTJkMTAyNGQ0NTguNzUyZDQ0Mi4zNjdkMy4wNzJkNDQyLjM2N2QzLjA3MmQyODUuNjk2aFIyZDY3NS44NFIzZDYxNS40MjRSNGQzLjA3MlI1ZDczOC4zMDRSNmQwUjdkNzM1LjIzMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTVSMTFkMy4wNzJSMTJkNjc1Ljg0UjEzYWkxaTJpM2kzaTJpMmkyaTJpMmhnOjE2N29SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTY3UjExZDBSMTJkMFIxM2FoZzo1NG9SMGQ5OTYuMzUyUjFhZDY3MC43MmQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ1NzEuMzkyZDYzMi44MzJkNTcxLjM5MmQ2OTQuMjcyZDU3MS4zOTJkNzM4LjMwNGQ2MTQuOTEyZDc4Mi4zMzZkNjU4LjQzMmQ3ODIuMzM2ZDcxOS44NzJkNzgyLjMzNmQ4NzUuNTJkNzgyLjMzNmQ5MzUuOTM2ZDczOC4zMDRkOTc5Ljk2OGQ2OTQuMjcyZDEwMjRkNjMyLjgzMmQxMDI0ZDIwNy44NzJkMTAyNGQxNDYuNDMyZDEwMjRkMTAyLjRkOTc5Ljk2OGQ1OC4zNjhkOTM1LjkzNmQ1OC4zNjhkODc1LjUyZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyZDY3MC43MmQyODYuNzJkNjcwLjcyZDQ0My4zOTFkMjE1LjA0ZDcyOS4wODhkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQyMTUuMDRkNzI5LjA4OGhSMmQ4MzkuNjhSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTU0UjExZDU4LjM2OFIxMmQ4MzkuNjhSMTNhaTFpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkxaTJpMmkyaTJoZzoxNjZvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2NlIxMWQwUjEyZDBSMTNhaGc6NTNvUjBkOTk2LjM1MlIxYWQ3ODIuMzM2ZDQ0My4zOTFkMjE1LjA0ZDQ0My4zOTFkMjE1LjA0ZDU3MS4zOTJkNjMyLjgzMmQ1NzEuMzkyZDY5NC4yNzJkNTcxLjM5MmQ3MzguMzA0ZDYxNC45MTJkNzgyLjMzNmQ2NTguNDMyZDc4Mi4zMzZkNzE5Ljg3MmQ3ODIuMzM2ZDg3NS41MmQ3ODIuMzM2ZDkzNS45MzZkNzM4LjMwNGQ5NzkuOTY4ZDY5NC4yNzJkMTAyNGQ2MzIuODMyZDEwMjRkMjA3Ljg3MmQxMDI0ZDE0Ni40MzJkMTAyNGQxMDIuNGQ5NzkuOTY4ZDU4LjM2OGQ5MzUuOTM2ZDU4LjM2OGQ4NzUuNTJkNTguMzY4ZDgxOC4xNzVkMjE1LjA0ZDgxOC4xNzVkMjE1LjA0ZDg2Ny4zMjhkNjI1LjY2NGQ4NjcuMzI4ZDYyNS42NjRkNzI5LjA4OGQ1OC4zNjhkNzI5LjA4OGQ1OC4zNjhkMjg2LjcyZDc4Mi4zMzZkMjg2LjcyZDc4Mi4zMzZkNDQzLjM5MWhSMmQ4NDkuOTJSM2Q3ODIuMzM2UjRkNTguMzY4UjVkNzM3LjI4UjZkMFI3ZDY3OC45MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTUzUjExZDU4LjM2OFIxMmQ4NDkuOTJSMTNhaTFpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTY1b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNjVSMTFkMFIxMmQwUjEzYWhnOjUyb1IwZDk5Ni4zNTJSMWFkNjA0LjE2ZDY4My4wMDhkNzAyLjQ2NGQ2ODMuMDA4ZDcwMi40NjRkODQwLjcwNGQ2MDQuMTZkODQwLjcwNGQ2MDQuMTZkMTAyNGQ0NDcuNDg4ZDEwMjRkNDQ3LjQ4OGQ4NDAuNzA0ZDYuMTQ0ZDg0MC43MDRkNi4xNDRkNzAwLjQxNWQ0NjMuODcyZDI4Ni43MmQ2MDQuMTZkMjg2LjcyZDYwNC4xNmQ2ODMuMDA4ZDQ0Ny40ODhkNTMxLjQ1NmQyNjEuMTJkNjgzLjAwOGQ0NDcuNDg4ZDY4My4wMDhkNDQ3LjQ4OGQ1MzEuNDU2aFIyZDc0Ny41MlIzZDcwMi40NjRSNGQ2LjE0NFI1ZDczNy4yOFI2ZDBSN2Q3MzEuMTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk1MlIxMWQ2LjE0NFIxMmQ3NDcuNTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJoZzoxNjRvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2NFIxMWQwUjEyZDBSMTNhaGc6NTFvUjBkOTk2LjM1MlIxYWQ3NTAuNTkyZDQzNS4xOTlkNzUwLjU5MmQ1ODIuNjU2ZDc1MC41OTJkNjA4LjI1NmQ3NDQuNDQ4ZDYyOS43NmQ3NzguMjRkNjcwLjcyZDc3OC4yNGQ3MjIuOTQ0ZDc3OC4yNGQ4NzUuNTJkNzc4LjI0ZDkzNS45MzZkNzM0LjcyZDk3OS45NjhkNjkxLjJkMTAyNGQ2MjkuNzZkMTAyNGQyMDMuNzc2ZDEwMjRkMTQyLjMzNmQxMDI0ZDk4LjMwNGQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDgxOC4xNzVkMjEwLjk0NGQ4MTguMTc1ZDIxMC45NDRkODY3LjMyOGQ2MjEuNTY4ZDg2Ny4zMjhkNjIxLjU2OGQ3MzEuMTM2ZDE3NS4xMDRkNzMxLjEzNmQxNzUuMTA0ZDU3NC40NjRkNTkzLjkyZDU3NC40NjRkNTkzLjkyZDQ0My4zOTFkMjEwLjk0NGQ0NDMuMzkxZDIxMC45NDRkNTAwLjczNmQ1NC4yNzJkNTAwLjczNmQ1NC4yNzJkNDM1LjE5OWQ1NC4yNzJkMzczLjc2ZDk4LjMwNGQzMzAuMjRkMTQyLjMzNmQyODYuNzJkMjAzLjc3NmQyODYuNzJkNjAyLjExMmQyODYuNzJkNjYzLjU1MmQyODYuNzJkNzA3LjA3MmQzMzAuMjRkNzUwLjU5MmQzNzMuNzZkNzUwLjU5MmQ0MzUuMTk5aFIyZDg0NS44MjRSM2Q3NzguMjRSNGQ1NC4yNzJSNWQ3MzcuMjhSNmQwUjdkNjgzLjAwOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTFSMTFkNTQuMjcyUjEyZDg0NS44MjRSMTNhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNoZzoxNjNvUjBkOTk2LjM1MlIxYWQ2OTYuMzJkNDkyLjU0NGQ1MzguNjI0ZDQ5Mi41NDRkNTM4LjYyNGQ0NDMuMzkxZDI4OC43NjhkNDQzLjM5MWQyODguNzY4ZDU4My42OGQ1OTguMDE2ZDU4My42OGQ1OTguMDE2ZDc0MC4zNTJkMjg4Ljc2OGQ3NDAuMzUyZDI4OC43NjhkODY3LjMyOGQ2OTYuMzJkODY3LjMyOGQ2OTYuMzJkMTAyNGQzOS45MzZkMTAyNGQzOS45MzZkODY3LjMyOGQxMzIuMDk2ZDg2Ny4zMjhkMTMyLjA5NmQ3NDAuMzUyZDM5LjkzNmQ3NDAuMzUyZDM5LjkzNmQ1ODMuNjhkMTMyLjA5NmQ1ODMuNjhkMTMyLjA5NmQ0MzUuMTk5ZDEzMi4wOTZkMzczLjc2ZDE3Ni4xMjhkMzMwLjI0ZDIyMC4xNmQyODYuNzJkMjgwLjU3NmQyODYuNzJkNTQ3Ljg0ZDI4Ni43MmQ2MDkuMjhkMjg2LjcyZDY1Mi44ZDMzMC4yNGQ2OTYuMzJkMzczLjc2ZDY5Ni4zMmQ0MzUuMTk5ZDY5Ni4zMmQ0OTIuNTQ0aFIyZDc1MS42MTZSM2Q2OTYuMzJSNGQzOS45MzZSNWQ3MzcuMjhSNmQwUjdkNjk3LjM0NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTYzUjExZDM5LjkzNlIxMmQ3NTEuNjE2UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6NTBvUjBkOTk2LjM1MlIxYWQyMDcuODcyZDI4Ni43MmQ2MzIuODMyZDI4Ni43MmQ2OTQuMjcyZDI4Ni43MmQ3MzguMzA0ZDMzMC4yNGQ3ODIuMzM2ZDM3My43NmQ3ODIuMzM2ZDQzNS4xOTlkNzgyLjMzNmQ1OTguMDE2ZDc4Mi4zMzZkNjU5LjQ1NmQ3MzguMzA0ZDcwMy40ODhkNjk0LjI3MmQ3NDcuNTJkNjMyLjgzMmQ3NDcuNTJkMjE1LjA0ZDc0Ny41MmQyMTUuMDRkODY3LjMyOGQ3ODIuMzM2ZDg2Ny4zMjhkNzgyLjMzNmQxMDI0ZDU4LjM2OGQxMDI0ZDU4LjM2OGQ3MzguMzA0ZDU4LjM2OGQ2NzYuODY0ZDEwMi40ZDYzMy4zNDRkMTQ2LjQzMmQ1ODkuODI0ZDIwNy44NzJkNTg5LjgyNGQ2MjUuNjY0ZDU4OS44MjRkNjI1LjY2NGQ0NDMuMzkxZDIxNS4wNGQ0NDMuMzkxZDIxNS4wNGQ1MDIuNzg0ZDU4LjM2OGQ1MDIuNzg0ZDU4LjM2OGQ0MzUuMTk5ZDU4LjM2OGQzNzMuNzZkMTAyLjRkMzMwLjI0ZDE0Ni40MzJkMjg2LjcyZDIwNy44NzJkMjg2LjcyaFIyZDg0OS45MlIzZDc4Mi4zMzZSNGQ1OC4zNjhSNWQ3MzcuMjhSNmQwUjdkNjc4LjkxMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNTBSMTFkNTguMzY4UjEyZDg0OS45MlIxM2FpMWkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpM2kzaGc6MTYyb1IwZDk5Ni4zNTJSMWFkNjM1LjkwNGQ1NzguNTZkNDU1LjY4ZDU3OC41NmQ0NTUuNjhkODY3LjMyOGQ2MzUuOTA0ZDg2Ny4zMjhkNjM1LjkwNGQxMDI0ZDQ1NS42OGQxMDI0ZDQ1NS42OGQxMTI1LjM3NmQyOTcuOTg0ZDExMjUuMzc2ZDI5Ny45ODRkMTAyNGQxODMuMjk2ZDEwMjRkMTIxLjg1NmQxMDI0ZDc3LjgyNGQ5NzkuOTY4ZDMzLjc5MmQ5MzUuOTM2ZDMzLjc5MmQ4NzUuNTJkMzMuNzkyZDU2OS4zNDRkMzMuNzkyZDUwNy45MDRkNzcuODI0ZDQ2My44NzFkMTIxLjg1NmQ0MTkuODRkMTgzLjI5NmQ0MTkuODRkMjk3Ljk4NGQ0MTkuODRkMjk3Ljk4NGQzMDIuMDhkNDU1LjY4ZDMwMi4wOGQ0NTUuNjhkNDE5Ljg0ZDYzNS45MDRkNDE5Ljg0ZDYzNS45MDRkNTc4LjU2ZDI5Ny45ODRkODY3LjMyOGQyOTcuOTg0ZDU3OC41NmQxOTAuNDY0ZDU3OC41NmQxOTAuNDY0ZDg2Ny4zMjhkMjk3Ljk4NGQ4NjcuMzI4aFIyZDY1MS4yNjRSM2Q2MzUuOTA0UjRkMzMuNzkyUjVkNzIxLjkyUjZkLTEwMS4zNzZSN2Q2ODguMTI4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNjJSMTFkMzMuNzkyUjEyZDY1MS4yNjRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ5b1IwZDk5Ni4zNTJSMWFkMS4wMjRkNTY3LjI5NmQyMzYuNTQ0ZDI4Ni43MmQzOTkuMzZkMjg2LjcyZDM5OS4zNmQxMDI0ZDI0Mi42ODhkMTAyNGQyNDIuNjg4ZDUyNS4zMTJkMjQwLjY0ZDUyNy4zNmQyNDEuNjY0ZDUyNy4zNmQyMDguODk2ZDU2Ny4yOTZkMS4wMjRkNTY3LjI5NmhSMmQ0MDAuMzg0UjNkMzk5LjM2UjRkMS4wMjRSNWQ3MzcuMjhSNmQwUjdkNzM2LjI1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNDlSMTFkMS4wMjRSMTJkNDAwLjM4NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmhnOjE2MW9SMGQ5OTYuMzUyUjFhZDIxMC45NDRkMzAxLjA1NmQyMTAuOTQ0ZDQ1Ny43MjdkNTQuMjcyZDQ1Ny43MjdkNTQuMjcyZDMwMS4wNTZkMjEwLjk0NGQzMDEuMDU2ZDIxMC45NDRkMTAyNGQ1NC4yNzJkMTAyNGQ1NC4yNzJkNDg1LjM3NmQyMTAuOTQ0ZDQ4NS4zNzZkMjEwLjk0NGQxMDI0aFIyZDIxNS4wNFIzZDIxMC45NDRSNGQ1NC4yNzJSNWQ3MjIuOTQ0UjZkMFI3ZDY2OC42NzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2MVIxMWQ1NC4yNzJSMTJkMjE1LjA0UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDhvUjBkOTk2LjM1MlIxYWQyMDcuODcyZDI4Ni43MmQ2MzIuODMyZDI4Ni43MmQ2OTQuMjcyZDI4Ni43MmQ3MzguMzA0ZDMzMi4yODhkNzgyLjMzNmQzNzcuODU2ZDc4Mi4zMzZkNDM5LjI5NWQ3ODIuMzM2ZDg2NS4yOGQ3ODIuMzM2ZDkyNi43MmQ3MzcuNzkyZDk3NS4zNmQ2OTMuMjQ4ZDEwMjRkNjMyLjgzMmQxMDI0ZDIwNy44NzJkMTAyNGQxNDcuNDU2ZDEwMjRkMTAyLjkxMmQ5NzUuMzZkNTguMzY4ZDkyNi43MmQ1OC4zNjhkODY1LjI4ZDU4LjM2OGQ0MzkuMjk1ZDU4LjM2OGQzNzcuODU2ZDEwMi40ZDMzMi4yODhkMTQ2LjQzMmQyODYuNzJkMjA3Ljg3MmQyODYuNzJkMjk5LjAwOGQ4NTcuMDg4ZDYyNS42NjRkODU3LjA4OGQ2MjUuNjY0ZDU4Mi42NTZkMjk5LjAwOGQ4NTcuMDg4ZDU0MS42OTZkNDQ3LjQ4N2QyMTUuMDRkNDQ3LjQ4N2QyMTUuMDRkNzIxLjkyZDU0MS42OTZkNDQ3LjQ4N2hSMmQ4NTQuMDE2UjNkNzgyLjMzNlI0ZDU4LjM2OFI1ZDczNy4yOFI2ZDBSN2Q2NzguOTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0OFIxMWQ1OC4zNjhSMTJkODU0LjAxNlIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTFpMmkyaTJoZzoxNjBvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE2MFIxMWQwUjEyZDBSMTNhaGc6NDdvUjBkOTk2LjM1MlIxYWQ2LjE0NGQ4NjUuMjhkNDc4LjIwOGQyODYuNzJkNTM0LjUyOGQyODYuNzJkNTM0LjUyOGQ0NDQuNDE1ZDYyLjQ2NGQxMDI0ZDYuMTQ0ZDEwMjRkNi4xNDRkODY1LjI4aFIyZDUzMy41MDRSM2Q1MzQuNTI4UjRkNi4xNDRSNWQ3MzcuMjhSNmQwUjdkNzMxLjEzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNDdSMTFkNi4xNDRSMTJkNTMzLjUwNFIxM2FpMWkyaTJpMmkyaTJpMmhnOjE1OW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTU5UjExZDBSMTJkMFIxM2FoZzo0Nm9SMGQ5OTYuMzUyUjFhZDIxMS45NjhkODY3LjMyOGQyMTEuOTY4ZDEwMjRkNTUuMjk2ZDEwMjRkNTUuMjk2ZDg2Ny4zMjhkMjExLjk2OGQ4NjcuMzI4aFIyZDIzOC41OTJSM2QyMTEuOTY4UjRkNTUuMjk2UjVkMTU2LjY3MlI2ZDBSN2QxMDEuMzc2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0NlIxMWQ1NS4yOTZSMTJkMjM4LjU5MlIxM2FpMWkyaTJpMmkyaGc6MTU4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNThSMTFkMFIxMmQwUjEzYWhnOjQ1b1IwZDk5Ni4zNTJSMWFkNDg3LjQyNGQ2NDMuMDcyZDQ4Ny40MjRkNzk5Ljc0NGQ2MC40MTZkNzk5Ljc0NGQ2MC40MTZkNjQzLjA3MmQ0ODcuNDI0ZDY0My4wNzJoUjJkNTI5LjQwOFIzZDQ4Ny40MjRSNGQ2MC40MTZSNWQzODAuOTI4UjZkMjI0LjI1NlI3ZDMyMC41MTJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTQ1UjExZDYwLjQxNlIxMmQ1MjkuNDA4UjEzYWkxaTJpMmkyaTJoZzoxNTdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1N1IxMWQwUjEyZDBSMTNhaGc6NDRvUjBkOTk2LjM1MlIxYWQ1NS4yOTZkODc4LjU5MmQyMTEuOTY4ZDg3OC41OTJkMjExLjk2OGQxMDA3LjYxNmQyMTEuOTY4ZDEwNjIuOTEyZDE2Ny40MjRkMTEwNS45MmQxMjIuODhkMTE0OC45MjhkNTUuMjk2ZDExNjAuMTkyZDU1LjI5NmQ4NzguNTkyaFIyZDI0OC44MzJSM2QyMTEuOTY4UjRkNTUuMjk2UjVkMTQ1LjQwOFI2ZC0xMzYuMTkyUjdkOTAuMTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0NFIxMWQ1NS4yOTZSMTJkMjQ4LjgzMlIxM2FpMWkyaTJpM2kzaTJoZzoxNTZvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1NlIxMWQwUjEyZDBSMTNhaGc6NDNvUjBkOTk2LjM1MlIxYWQxNTAuNTI4ZDUwOC45MjhkMzA3LjJkNTA4LjkyOGQzMDcuMmQ2NDMuMDcyZDQ0NC40MTZkNjQzLjA3MmQ0NDQuNDE2ZDc5OS43NDRkMzA3LjJkNzk5Ljc0NGQzMDcuMmQ5MzUuOTM2ZDE1MC41MjhkOTM1LjkzNmQxNTAuNTI4ZDc5OS43NDRkMTcuNDA4ZDc5OS43NDRkMTcuNDA4ZDY0My4wNzJkMTUwLjUyOGQ2NDMuMDcyZDE1MC41MjhkNTA4LjkyOGhSMmQ0NjUuOTJSM2Q0NDQuNDE2UjRkMTcuNDA4UjVkNTE1LjA3MlI2ZDg4LjA2NFI3ZDQ5Ny42NjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTQzUjExZDE3LjQwOFIxMmQ0NjUuOTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1NVIxMWQwUjEyZDBSMTNhaGc6NDJvUjBkOTk2LjM1MlIxYWQ0NTUuNjhkMzgxLjk1MmQ1MDMuODA4ZDUzMy41MDNkMzkxLjE2OGQ1NjkuMzQ0ZDQ2MS44MjRkNjY0LjU3NmQzMzUuODcyZDc1Ni43MzZkMjYzLjE2OGQ2NjEuNTA0ZDE5NS41ODRkNzU2LjczNmQ2Ny41ODRkNjY0LjU3NmQxMzguMjRkNTY5LjM0NGQyNS42ZDUzMy41MDNkNzMuNzI4ZDM4MS45NTJkMTg1LjM0NGQ0MTkuODRkMTg1LjM0NGQzMDEuMDU2ZDM0My4wNGQzMDEuMDU2ZDM0My4wNGQ0MTkuODRkMzUzLjI4ZDQxNi43NjhkNDU1LjY4ZDM4MS45NTJoUjJkNTI4LjM4NFIzZDUwMy44MDhSNGQyNS42UjVkNzIyLjk0NFI2ZDI2Ny4yNjRSN2Q2OTcuMzQ0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGk0MlIxMWQyNS42UjEyZDUyOC4zODRSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNoZzoxNTRvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1NFIxMWQwUjEyZDBSMTNhaGc6NDFvUjBkOTk2LjM1MlIxYWQ1Ny4zNDRkMTAyNGQ1Ny4zNDRkODY3LjMyOGQxMTYuNzM2ZDg2Ny4zMjhkMTE2LjczNmQ0NDMuMzkxZDU3LjM0NGQ0NDMuMzkxZDU3LjM0NGQyODYuNzJkMTI1Ljk1MmQyODYuNzJkMTg2LjM2OGQyODYuNzJkMjMwLjRkMzMwLjI0ZDI3NC40MzJkMzczLjc2ZDI3NC40MzJkNDM1LjE5OWQyNzQuNDMyZDg3NS41MmQyNzQuNDMyZDkzNS45MzZkMjMwLjRkOTc5Ljk2OGQxODYuMzY4ZDEwMjRkMTI1Ljk1MmQxMDI0ZDU3LjM0NGQxMDI0aFIyZDMwNC4xMjhSM2QyNzQuNDMyUjRkNTcuMzQ0UjVkNzM3LjI4UjZkMFI3ZDY3OS45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTQxUjExZDU3LjM0NFIxMmQzMDQuMTI4UjEzYWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MTUzb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNTNSMTFkMFIxMmQwUjEzYWhnOjQwb1IwZDk5Ni4zNTJSMWFkMjY5LjMxMmQ0NDMuMzkxZDIwOS45MmQ0NDMuMzkxZDIwOS45MmQ4NjcuMzI4ZDI2OS4zMTJkODY3LjMyOGQyNjkuMzEyZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ0MzUuMTk5ZDUzLjI0OGQzNzMuNzZkOTYuNzY4ZDMzMC4yNGQxNDAuMjg4ZDI4Ni43MmQyMDEuNzI4ZDI4Ni43MmQyNjkuMzEyZDI4Ni43MmQyNjkuMzEyZDQ0My4zOTFoUjJkMzAxLjA1NlIzZDI2OS4zMTJSNGQ1My4yNDhSNWQ3MzcuMjhSNmQwUjdkNjg0LjAzMlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpNDBSMTFkNTMuMjQ4UjEyZDMwMS4wNTZSMTNhaTFpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJoZzoxNTJvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE1MlIxMWQwUjEyZDBSMTNhaGc6MzlvUjBkOTk2LjM1MlIxYWQyMTcuMDg4ZDMwMS4wNTZkMjE3LjA4OGQ1MDcuOTA0ZDYwLjQxNmQ1MDcuOTA0ZDYwLjQxNmQzMDEuMDU2ZDIxNy4wODhkMzAxLjA1NmhSMmQyNTcuMDI0UjNkMjE3LjA4OFI0ZDYwLjQxNlI1ZDcyMi45NDRSNmQ1MTYuMDk2UjdkNjYyLjUyOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzlSMTFkNjAuNDE2UjEyZDI1Ny4wMjRSMTNhaTFpMmkyaTJpMmhnOjE1MW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTUxUjExZDBSMTJkMFIxM2FoZzozOG9SMGQ5OTYuMzUyUjFhZDc3Ny4yMTZkODExLjAwOGQ4OTQuOTc2ZDg4MC42NGQ4OTQuOTc2ZDEwNDIuNDMyZDc1MS42MTZkOTYwLjUxMmQ3MDUuNTM2ZDEwMjRkNjI4LjczNmQxMDI0ZDIwMi43NTJkMTAyNGQxNDEuMzEyZDEwMjRkOTcuNzkyZDk3OS45NjhkNTQuMjcyZDkzNS45MzZkNTQuMjcyZDg3NS41MmQ1NC4yNzJkNjg2LjA3OWQ1NC4yNzJkNjYzLjU1MmQ2NS41MzZkNjM4Ljk3NmQ3Ni44ZDYxNC40ZDk4LjMwNGQ2MDAuMDY0ZDkxLjEzNmQ1ODIuNjU2ZDkxLjEzNmQ1NDUuNzkxZDkxLjEzNmQ0MzYuMjIzZDkxLjEzNmQzNzQuNzg0ZDEzNS4xNjhkMzMxLjI2NGQxNzkuMmQyODcuNzQ0ZDIzOS42MTZkMjg3Ljc0NGQ2MDEuMDg4ZDI4Ny43NDRkNjU1LjM2ZDI4Ny43NDRkNjk3Ljg1NmQzMjIuNTU5ZDc0MC4zNTJkMzU3LjM3NmQ3NDkuNTY4ZDQwOS42ZDc0OS41NjhkNDk5LjcxMmQ1OTIuODk2ZDQ5OS43MTJkNTkyLjg5NmQ0NDUuNDM5ZDI0Ny44MDhkNDQ1LjQzOWQyNDcuODA4ZDU1Ni4wMzFkNjIwLjU0NGQ3NDMuNDI0ZDYyMC41NDRkNjQ2LjE0NGQ3NzcuMjE2ZDY0Ni4xNDRkNzc3LjIxNmQ4MTEuMDA4ZDQ0Mi4zNjhkODE0LjA3OWQyMTAuOTQ0ZDY5Ny4zNDRkMjEwLjk0NGQ4NjcuMzI4ZDU0OC44NjRkODY3LjMyOGQ1MzMuNTA0ZDg1OS4xMzZkNDk3LjY2NGQ4NDEuNzI4ZDQ2MS44MjRkODI0LjMxOWQ0NDIuMzY4ZDgxNC4wNzloUjJkOTYwLjUxMlIzZDg5NC45NzZSNGQ1NC4yNzJSNWQ3MzYuMjU2UjZkLTE4LjQzMlI3ZDY4MS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTM4UjExZDU0LjI3MlIxMmQ5NjAuNTEyUjEzYWkxaTJpMmkyaTNpMmkzaTNpMmkzaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTNpM2hnOjE1MG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTUwUjExZDBSMTJkMFIxM2FoZzozN29SMGQ5OTYuMzUyUjFhZDgwOC45NmQyODcuNzQ0ZDg2MS4xODRkMjg3Ljc0NGQ4NjEuMTg0ZDQ0Ny40ODdkMTg5LjQ0ZDEwMjRkMTM3LjIxNmQxMDI0ZDEzNy4yMTZkODYzLjIzMmQ4MDguOTZkMjg3Ljc0NGQxODguNDE2ZDI5NC45MTJkMjcxLjM2ZDI5NC45MTJkMzMyLjhkMjk0LjkxMmQzNzEuNzEyZDMzMy4zMTJkNDEwLjYyNGQzNzEuNzEyZDQxMC42MjRkNDMzLjE1MmQ0MTAuNjI0ZDUwNi44OGQ0MTAuNjI0ZDU2OC4zMTlkMzcxLjcxMmQ2MDcuMjMyZDMzMi44ZDY0Ni4xNDRkMjcxLjM2ZDY0Ni4xNDRkMTg4LjQxNmQ2NDYuMTQ0ZDEyNi45NzZkNjQ2LjE0NGQ4OC4wNjRkNjA3LjIzMmQ0OS4xNTJkNTY4LjMxOWQ0OS4xNTJkNTA2Ljg4ZDQ5LjE1MmQ0MzMuMTUyZDQ5LjE1MmQzNzEuNzEyZDg4LjA2NGQzMzMuMzEyZDEyNi45NzZkMjk0LjkxMmQxODguNDE2ZDI5NC45MTJkNzA4LjYwOGQ2NjMuNTUyZDc5MS41NTJkNjYzLjU1MmQ4NTIuOTkyZDY2My41NTJkODkxLjkwNGQ3MDEuOTUyZDkzMC44MTZkNzQwLjM1MmQ5MzAuODE2ZDgwMS43OTJkOTMwLjgxNmQ4NzUuNTJkOTMwLjgxNmQ5MzYuOTZkODkxLjkwNGQ5NzUuODcyZDg1Mi45OTJkMTAxNC43ODRkNzkxLjU1MmQxMDE0Ljc4NGQ3MDguNjA4ZDEwMTQuNzg0ZDY0OC4xOTJkMTAxNC43ODRkNjA5LjI4ZDk3NS44NzJkNTcwLjM2OGQ5MzYuOTZkNTcwLjM2OGQ4NzUuNTJkNTcwLjM2OGQ4MDEuNzkyZDU3MC4zNjhkNzQwLjM1MmQ2MDkuMjhkNzAxLjk1MmQ2NDguMTkyZDY2My41NTJkNzA4LjYwOGQ2NjMuNTUyZDY5OC4zNjhkNzkxLjU1MmQ2OTguMzY4ZDg4Ni43ODRkODAyLjgxNmQ4ODYuNzg0ZDgwMi44MTZkNzkxLjU1MmQ2OTguMzY4ZDc5MS41NTJkMTc3LjE1MmQ0MjIuOTEyZDE3Ny4xNTJkNTE3LjEyZDI4MS42ZDUxNy4xMmQyODEuNmQ0MjIuOTEyZDE3Ny4xNTJkNDIyLjkxMmhSMmQ5ODkuMTg0UjNkOTMwLjgxNlI0ZDQ5LjE1MlI1ZDczNi4yNTZSNmQwUjdkNjg3LjEwNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzdSMTFkNDkuMTUyUjEyZDk4OS4xODRSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDlvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0OVIxMWQwUjEyZDBSMTNhaGc6MzZvUjBkOTk2LjM1MlIxYWQ3NTcuNzZkNDM1LjE5OWQ3NTcuNzZkNTAyLjc4NGQ2MDEuMDg4ZDUwMi43ODRkNjAxLjA4OGQ0NDMuMzkxZDQ3NS4xMzZkNDQzLjM5MWQ0NzUuMTM2ZDU4MC42MDhkNjA5LjI4ZDU4MC42MDhkNjcwLjcyZDU4MC42MDhkNzE0LjI0ZDYyNC42NGQ3NTcuNzZkNjY4LjY3MmQ3NTcuNzZkNzMwLjExMmQ3NTcuNzZkODc1LjUyZDc1Ny43NmQ5MzUuOTM2ZDcxNC4yNGQ5NzkuOTY4ZDY3MC43MmQxMDI0ZDYwOS4yOGQxMDI0ZDQ3NS4xMzZkMTAyNGQ0NzUuMTM2ZDExMjQuMzUyZDMxNy40NGQxMTI0LjM1MmQzMTcuNDRkMTAyNGQxODMuMjk2ZDEwMjRkMTIxLjg1NmQxMDI0ZDc4LjMzNmQ5NzkuOTY4ZDM0LjgxNmQ5MzUuOTM2ZDM0LjgxNmQ4NzUuNTJkMzQuODE2ZDgwNy45MzZkMTkxLjQ4OGQ4MDcuOTM2ZDE5MS40ODhkODY3LjMyOGQzMTcuNDRkODY3LjMyOGQzMTcuNDRkNzM3LjI4ZDE4My4yOTZkNzM3LjI4ZDEyMS44NTZkNzM3LjI4ZDc4LjMzNmQ2OTMuNzZkMzQuODE2ZDY1MC4yNGQzNC44MTZkNTg4LjhkMzQuODE2ZDQzNS4xOTlkMzQuODE2ZDM3My43NmQ3OC4zMzZkMzMwLjI0ZDEyMS44NTZkMjg2LjcyZDE4My4yOTZkMjg2LjcyZDMxNy40NGQyODYuNzJkMzE3LjQ0ZDE4Ni4zNjdkNDc1LjEzNmQxODYuMzY3ZDQ3NS4xMzZkMjg2LjcyZDYwOS4yOGQyODYuNzJkNjcwLjcyZDI4Ni43MmQ3MTQuMjRkMzMwLjI0ZDc1Ny43NmQzNzMuNzZkNzU3Ljc2ZDQzNS4xOTlkMzE3LjQ0ZDU4MC42MDhkMzE3LjQ0ZDQ0My4zOTFkMTkxLjQ4OGQ0NDMuMzkxZDE5MS40ODhkNTgwLjYwOGQzMTcuNDRkNTgwLjYwOGQ0NzUuMTM2ZDczNy4yOGQ0NzUuMTM2ZDg2Ny4zMjhkNjAxLjA4OGQ4NjcuMzI4ZDYwMS4wODhkNzM3LjI4ZDQ3NS4xMzZkNzM3LjI4aFIyZDgwNi45MTJSM2Q3NTcuNzZSNGQzNC44MTZSNWQ4MzcuNjMyUjZkLTEwMC4zNTJSN2Q4MDIuODE2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkzNlIxMWQzNC44MTZSMTJkODA2LjkxMlIxM2FpMWkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNDhSMTFkMFIxMmQwUjEzYWhnOjM1b1IwZDk5Ni4zNTJSMWFkNzY4ZDQ0MC4zMTlkNzY4ZDU5Ni45OTJkNjUwLjI0ZDU5Ni45OTJkNjE1LjQyNGQ3MDUuNTM2ZDczOS4zMjhkNzA1LjUzNmQ3MzkuMzI4ZDg2Mi4yMDhkNTY0LjIyNGQ4NjIuMjA4ZDU1Ni4wMzJkODg2Ljc4NGQ1NDAuNjcyZDk0My4xMDRkNTI1LjMxMmQ5OTkuNDI0ZDUxOC4xNDRkMTAyNGQzNTkuNDI0ZDEwMjRkNDA4LjU3NmQ4NjIuMjA4ZDI2NS4yMTZkODYyLjIwOGQyNTcuMDI0ZDg4OS44NTZkMjQxLjE1MmQ5NDcuMmQyMjUuMjhkMTAwNC41NDRkMjIwLjE2ZDEwMjRkNjEuNDRkMTAyNGQxMDkuNTY4ZDg2Mi4yMDhkMzIuNzY4ZDg2Mi4yMDhkMzIuNzY4ZDcwNS41MzZkMTU2LjY3MmQ3MDUuNTM2ZDE5MS40ODhkNTk2Ljk5MmQ2MS40NGQ1OTYuOTkyZDYxLjQ0ZDQ0MC4zMTlkMjQxLjY2NGQ0NDAuMzE5ZDI1NC45NzZkNDAzLjQ1NmQyOTAuODE2ZDI4Ni43MmQ0NTIuNjA4ZDI4Ni43MmQ0MDAuMzg0ZDQ0MC4zMTlkNTQxLjY5NmQ0NDAuMzE5ZDU5MC44NDhkMjg2LjcyZDc1MS42MTZkMjg2LjcyZDY5OS4zOTJkNDQwLjMxOWQ3NjhkNDQwLjMxOWQzMTYuNDE2ZDcwNS41MzZkNDU1LjY4ZDcwNS41MzZkNDkwLjQ5NmQ1OTYuOTkyZDM1MS4yMzJkNTk2Ljk5MmQzMTYuNDE2ZDcwNS41MzZoUjJkODE2LjEyOFIzZDc2OFI0ZDMyLjc2OFI1ZDczNy4yOFI2ZDBSN2Q3MDQuNTEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkzNVIxMWQzMi43NjhSMTJkODE2LjEyOFIxM2FpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDdvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0N1IxMWQwUjEyZDBSMTNhaGc6MzRvUjBkOTk2LjM1MlIxYWQxOTIuNTEyZDMwMS4wNTZkMTkyLjUxMmQ1MDYuODhkMzYuODY0ZDUwNi44OGQzNi44NjRkMzAxLjA1NmQxOTIuNTEyZDMwMS4wNTZkMzc3Ljg1NmQzMDEuMDU2ZDM3Ny44NTZkNTA2Ljg4ZDIyMi4yMDhkNTA2Ljg4ZDIyMi4yMDhkMzAxLjA1NmQzNzcuODU2ZDMwMS4wNTZoUjJkNDA1LjUwNFIzZDM3Ny44NTZSNGQzNi44NjRSNWQ3MjIuOTQ0UjZkNTE3LjEyUjdkNjg2LjA4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkzNFIxMWQzNi44NjRSMTJkNDA1LjUwNFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0Nm9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQ2UjExZDBSMTJkMFIxM2FoZzozM29SMGQ5OTYuMzUyUjFhZDIxNi4wNjRkMTAyNGQ1OS4zOTJkMTAyNGQ1OS4zOTJkODY3LjMyOGQyMTYuMDY0ZDg2Ny4zMjhkMjE2LjA2NGQxMDI0ZDU5LjM5MmQ4MTguMTc1ZDU5LjM5MmQyODYuNzJkMjE2LjA2NGQyODYuNzJkMjE2LjA2NGQ4MTguMTc1ZDU5LjM5MmQ4MTguMTc1aFIyZDIyNS4yOFIzZDIxNi4wNjRSNGQ1OS4zOTJSNWQ3MzcuMjhSNmQwUjdkNjc3Ljg4OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzNSMTFkNTkuMzkyUjEyZDIyNS4yOFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0NW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQ1UjExZDBSMTJkMFIxM2FoZzozMm9SMGQ5OTYuMzUyUjFhaFIyZDMyOS43MjhSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMzJSMTFkMFIxMmQzMjkuNzI4UjEzYWhnOjE0NG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQ0UjExZDBSMTJkMFIxM2FoZzoxNDNvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0M1IxMWQwUjEyZDBSMTNhaGc6MjU1b1IwZDk5Ni4zNTJSMWFkNjQ2LjE0NGQxMDg4LjUxMmQ2NDYuMTQ0ZDExNDkuOTUyZDYwMi42MjRkMTE5My40NzJkNTU5LjEwNGQxMjM2Ljk5MmQ0OTcuNjY0ZDEyMzYuOTkyZDEzNy4yMTZkMTIzNi45OTJkMTM3LjIxNmQxMDc5LjI5NmQ0ODkuNDcyZDEwNzkuMjk2ZDQ4OS40NzJkMTAyNGQxOTIuNTEyZDEwMjRkMTMxLjA3MmQxMDI0ZDg3LjA0ZDk3OS45NjhkNDMuMDA4ZDkzNS45MzZkNDMuMDA4ZDg3NS41MmQ0My4wMDhkNDMyLjEyOGQxOTkuNjhkNDMyLjEyOGQxOTkuNjhkODY3LjMyOGQ0ODkuNDcyZDg2Ny4zMjhkNDg5LjQ3MmQ0MzIuMTI4ZDY0Ni4xNDRkNDMyLjEyOGQ2NDYuMTQ0ZDEwODguNTEyZDU1NS4wMDhkMjEwLjk0M2Q1NTUuMDA4ZDM2OC42NGQzOTcuMzEyZDM2OC42NGQzOTcuMzEyZDIxMC45NDNkNTU1LjAwOGQyMTAuOTQzZDMzNS44NzJkMjEwLjk0M2QzMzUuODcyZDM2OC42NGQxNzkuMmQzNjguNjRkMTc5LjJkMjEwLjk0M2QzMzUuODcyZDIxMC45NDNoUjJkNzA0LjUxMlIzZDY0Ni4xNDRSNGQ0My4wMDhSNWQ4MTMuMDU2UjZkLTIxMi45OTJSN2Q3NzAuMDQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNTVSMTFkNDMuMDA4UjEyZDcwNC41MTJSMTNhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQyb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxNDJSMTFkMFIxMmQwUjEzYWhnOjI1NG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjU0UjExZDBSMTJkMFIxM2FoZzoxNDFvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTE0MVIxMWQwUjEyZDBSMTNhaGc6MjUzb1IwZDk5Ni4zNTJSMWFkNjQ2LjE0NGQxMDg4LjUxMmQ2NDYuMTQ0ZDExNDkuOTUyZDYwMi42MjRkMTE5My40NzJkNTU5LjEwNGQxMjM2Ljk5MmQ0OTcuNjY0ZDEyMzYuOTkyZDEzNy4yMTZkMTIzNi45OTJkMTM3LjIxNmQxMDc5LjI5NmQ0ODkuNDcyZDEwNzkuMjk2ZDQ4OS40NzJkMTAyNGQxOTIuNTEyZDEwMjRkMTMxLjA3MmQxMDI0ZDg3LjA0ZDk3OS45NjhkNDMuMDA4ZDkzNS45MzZkNDMuMDA4ZDg3NS41MmQ0My4wMDhkNDMyLjEyOGQxOTkuNjhkNDMyLjEyOGQxOTkuNjhkODY3LjMyOGQ0ODkuNDcyZDg2Ny4zMjhkNDg5LjQ3MmQ0MzIuMTI4ZDY0Ni4xNDRkNDMyLjEyOGQ2NDYuMTQ0ZDEwODguNTEyZDI3Ni40OGQzNjkuNjY0ZDMyOC43MDRkMTYxLjc5MmQ0ODkuNDcyZDE2MS43OTJkNDM3LjI0OGQzNjkuNjY0ZDI3Ni40OGQzNjkuNjY0aFIyZDcwNC41MTJSM2Q2NDYuMTQ0UjRkNDMuMDA4UjVkODYyLjIwOFI2ZC0yMTIuOTkyUjdkODE5LjJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI1M1IxMWQ0My4wMDhSMTJkNzA0LjUxMlIxM2FpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0MG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTQwUjExZDBSMTJkMFIxM2FoZzoyNTJvUjBkOTk2LjM1MlIxYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQ1NTguMDhkMjEyLjk5MWQ1NTguMDhkMzcwLjY4OGQ0MDAuMzg0ZDM3MC42ODhkNDAwLjM4NGQyMTIuOTkxZDU1OC4wOGQyMTIuOTkxZDMzOC45NDRkMjEyLjk5MWQzMzguOTQ0ZDM3MC42ODhkMTgyLjI3MmQzNzAuNjg4ZDE4Mi4yNzJkMjEyLjk5MWQzMzguOTQ0ZDIxMi45OTFoUjJkNzExLjY4UjNkNjU2LjM4NFI0ZDU0LjI3MlI1ZDgxMS4wMDhSNmQwUjdkNzU2LjczNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjUyUjExZDU0LjI3MlIxMmQ3MTEuNjhSMTNhaTFpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzOW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTM5UjExZDBSMTJkMFIxM2FoZzoyNTFvUjBkOTk2LjM1MlIxYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQzMjUuNjMyZDM2OS42NjRkMTg5LjQ0ZDM2OS42NjRkMzAyLjA4ZDE4MS4yNDdkNDA0LjQ4ZDE4MS4yNDdkNTE3LjEyZDM2OS42NjRkMzc5LjkwNGQzNjkuNjY0ZDM1MS4yMzJkMzI0LjYwN2QzMjUuNjMyZDM2OS42NjRoUjJkNzExLjY4UjNkNjU2LjM4NFI0ZDU0LjI3MlI1ZDg0Mi43NTJSNmQwUjdkNzg4LjQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNTFSMTFkNTQuMjcyUjEyZDcxMS42OFIxM2FpMWkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMzhvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzOFIxMWQwUjEyZDBSMTNhaGc6MjUwb1IwZDk5Ni4zNTJSMWFkNDk5LjcxMmQ0MzAuMDhkNjU2LjM4NGQ0MzAuMDhkNjU2LjM4NGQ4NzUuNTJkNjU2LjM4NGQ5MzUuOTM2ZDYxMi44NjRkOTc5Ljk2OGQ1NjkuMzQ0ZDEwMjRkNTA3LjkwNGQxMDI0ZDIwMi43NTJkMTAyNGQxNDEuMzEyZDEwMjRkOTcuNzkyZDk3OS45NjhkNTQuMjcyZDkzNS45MzZkNTQuMjcyZDg3NS41MmQ1NC4yNzJkNDMwLjA4ZDIxMC45NDRkNDMwLjA4ZDIxMC45NDRkODY3LjMyOGQ0OTkuNzEyZDg2Ny4zMjhkNDk5LjcxMmQ0MzAuMDhkMjc5LjU1MmQzNjkuNjY0ZDMzMS43NzZkMTYxLjc5MmQ0OTIuNTQ0ZDE2MS43OTJkNDQwLjMyZDM2OS42NjRkMjc5LjU1MmQzNjkuNjY0aFIyZDcxMS42OFIzZDY1Ni4zODRSNGQ1NC4yNzJSNWQ4NjIuMjA4UjZkMFI3ZDgwNy45MzZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI1MFIxMWQ1NC4yNzJSMTJkNzExLjY4UjEzYWkxaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzN29SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTM3UjExZDBSMTJkMFIxM2FoZzoyNDlvUjBkOTk2LjM1MlIxYWQ0OTkuNzEyZDQzMC4wOGQ2NTYuMzg0ZDQzMC4wOGQ2NTYuMzg0ZDg3NS41MmQ2NTYuMzg0ZDkzNS45MzZkNjEyLjg2NGQ5NzkuOTY4ZDU2OS4zNDRkMTAyNGQ1MDcuOTA0ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ0MzAuMDhkMjEwLjk0NGQ0MzAuMDhkMjEwLjk0NGQ4NjcuMzI4ZDQ5OS43MTJkODY3LjMyOGQ0OTkuNzEyZDQzMC4wOGQzOTkuMzZkMTYxLjc5MmQ0NTEuNTg0ZDM2OS42NjRkMjkwLjgxNmQzNjkuNjY0ZDIzOC41OTJkMTYxLjc5MmQzOTkuMzZkMTYxLjc5MmhSMmQ3MTEuNjhSM2Q2NTYuMzg0UjRkNTQuMjcyUjVkODYyLjIwOFI2ZDBSN2Q4MDcuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDlSMTFkNTQuMjcyUjEyZDcxMS42OFIxM2FpMWkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMzZvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzNlIxMWQwUjEyZDBSMTNhaGc6MjQ4b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDhSMTFkMFIxMmQwUjEzYWhnOjEzNW9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTM1UjExZDBSMTJkMFIxM2FoZzoyNDdvUjBkOTk2LjM1MlIxYWQ1MDguOTI4ZDYyMS41NjhkNTA4LjkyOGQ3NzguMjRkNy4xNjhkNzc4LjI0ZDcuMTY4ZDYyMS41NjhkNTA4LjkyOGQ2MjEuNTY4ZDE4Ny4zOTJkODY3LjMyOGQzNDQuMDY0ZDg2Ny4zMjhkMzQ0LjA2NGQxMDI0ZDE4Ny4zOTJkMTAyNGQxODcuMzkyZDg2Ny4zMjhkMzQ0LjA2NGQzOTMuMjE2ZDM0NC4wNjRkNTUwLjkxMmQxODcuMzkyZDU1MC45MTJkMTg3LjM5MmQzOTMuMjE2ZDM0NC4wNjRkMzkzLjIxNmhSMmQ1MzEuNDU2UjNkNTA4LjkyOFI0ZDcuMTY4UjVkNjMwLjc4NFI2ZDBSN2Q2MjMuNjE2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDdSMTFkNy4xNjhSMTJkNTMxLjQ1NlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMzRvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzNFIxMWQwUjEyZDBSMTNhaGc6MjQ2b1IwZDk5Ni4zNTJSMWFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQ1NDYuODE2ZDIxMC45NDNkNTQ2LjgxNmQzNjguNjRkMzg5LjEyZDM2OC42NGQzODkuMTJkMjEwLjk0M2Q1NDYuODE2ZDIxMC45NDNkMzI3LjY4ZDIxMC45NDNkMzI3LjY4ZDM2OC42NGQxNzEuMDA4ZDM2OC42NGQxNzEuMDA4ZDIxMC45NDNkMzI3LjY4ZDIxMC45NDNoUjJkNzA4LjYwOFIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4MTMuMDU2UjZkMFI3ZDc2MC44MzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0NlIxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzM29SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTMzUjExZDBSMTJkMFIxM2FoZzoyNDVvUjBkOTk2LjM1MlIxYWQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODc1LjUyZDY1NC4zMzZkOTM1LjkzNmQ2MTAuODE2ZDk3OS45NjhkNTY3LjI5NmQxMDI0ZDUwNS44NTZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDQ5Ny42NjRkODY3LjMyOGQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDQyOS4wNTZkMjUwLjg4ZDQ2OC45OTJkMjUwLjg4ZDUyNy4zNmQyMTIuOTkxZDUyNy4zNmQzNDIuMDE1ZDQ2My44NzJkMzY4LjY0ZDQyNS45ODRkMzY4LjY0ZDM4OC4wOTZkMzY4LjY0ZDMyOS4yMTZkMzM2Ljg5NWQyNzAuMzM2ZDMwNS4xNTFkMjQwLjY0ZDMwNS4xNTFkMjI5LjM3NmQzMDUuMTUxZDE4Ni4zNjhkMzA1LjE1MWQxNDMuMzZkMzQyLjAxNWQxNDMuMzZkMjE1LjAzOWQyMTIuOTkyZDE4Ny4zOTFkMjQwLjY0ZDE4Ny4zOTFkMjc4LjUyOGQxODcuMzkxZDMzNy45MmQyMTcuMDg3ZDM5Ny4zMTJkMjQ2Ljc4NGQ0MjkuMDU2ZDI1MC44OGhSMmQ3MDguNjA4UjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDgzNi42MDhSNmQwUjdkNzg0LjM4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjQ1UjExZDUyLjIyNFIxMmQ3MDguNjA4UjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTNpMmkzaTNpM2kyaTNpMmkzaTNpM2hnOjEzMm9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTMyUjExZDBSMTJkMFIxM2FoZzoyNDRvUjBkOTk2LjM1MlIxYWQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODc1LjUyZDY1NC4zMzZkOTM1LjkzNmQ2MTAuODE2ZDk3OS45NjhkNTY3LjI5NmQxMDI0ZDUwNS44NTZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ4NjcuMzI4ZDQ5Ny42NjRkODY3LjMyOGQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDMzNC44NDhkMzcwLjY4OGQxOTguNjU2ZDM3MC42ODhkMzExLjI5NmQxODIuMjcxZDQxMy42OTZkMTgyLjI3MWQ1MjYuMzM2ZDM3MC42ODhkMzg5LjEyZDM3MC42ODhkMzYwLjQ0OGQzMjUuNjMxZDMzNC44NDhkMzcwLjY4OGhSMmQ3MDguNjA4UjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDg0MS43MjhSNmQwUjdkNzg5LjUwNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjQ0UjExZDUyLjIyNFIxMmQ3MDguNjA4UjEzYWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJoZzoxMzFvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEzMVIxMWQwUjEyZDBSMTNhaGc6MjQzb1IwZDk5Ni4zNTJSMWFkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDg3NS41MmQ2NTQuMzM2ZDkzNS45MzZkNjEwLjgxNmQ5NzkuOTY4ZDU2Ny4yOTZkMTAyNGQ1MDUuODU2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGQ0OTcuNjY0ZDg2Ny4zMjhkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyNjguMjg4ZDM2OS42NjRkMzIwLjUxMmQxNjEuNzkyZDQ4MS4yOGQxNjEuNzkyZDQyOS4wNTZkMzY5LjY2NGQyNjguMjg4ZDM2OS42NjRoUjJkNzA4LjYwOFIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NjIuMjA4UjZkMFI3ZDgwOS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0M1IxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTMwb1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMzBSMTFkMFIxMmQwUjEzYWhnOjI0Mm9SMGQ5OTYuMzUyUjFhZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4NzUuNTJkNjU0LjMzNmQ5MzUuOTM2ZDYxMC44MTZkOTc5Ljk2OGQ1NjcuMjk2ZDEwMjRkNTA1Ljg1NmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDg2Ny4zMjhkNDk3LjY2NGQ4NjcuMzI4ZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkNDA4LjU3NmQxNjEuNzkyZDQ2MC44ZDM2OS42NjRkMzAwLjAzMmQzNjkuNjY0ZDI0Ny44MDhkMTYxLjc5MmQ0MDguNTc2ZDE2MS43OTJoUjJkNzA4LjYwOFIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NjIuMjA4UjZkMFI3ZDgwOS45ODRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0MlIxMWQ1Mi4yMjRSMTJkNzA4LjYwOFIxM2FpMWkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI5b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjlSMTFkMFIxMmQwUjEzYWhnOjI0MW9SMGQ5OTYuMzUyUjFhZDUwOC45MjhkNDMwLjA4ZDU3MC4zNjhkNDMwLjA4ZDYxMy44ODhkNDc0LjExMWQ2NTcuNDA4ZDUxOC4xNDRkNjU3LjQwOGQ1NzguNTZkNjU3LjQwOGQxMDI0ZDUwMC43MzZkMTAyNGQ1MDAuNzM2ZDU4Ni43NTJkMjExLjk2OGQ1ODYuNzUyZDIxMS45NjhkMTAyNGQ1NS4yOTZkMTAyNGQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4ZDQyNy4wMDhkMjUwLjg4ZDQ2Ni45NDRkMjUwLjg4ZDUyNS4zMTJkMjEyLjk5MWQ1MjUuMzEyZDM0Mi4wMTVkNDYxLjgyNGQzNjguNjRkNDIzLjkzNmQzNjguNjRkMzg2LjA0OGQzNjguNjRkMzI3LjE2OGQzMzYuODk1ZDI2OC4yODhkMzA1LjE1MWQyMzguNTkyZDMwNS4xNTFkMjI3LjMyOGQzMDUuMTUxZDE4NC4zMmQzMDUuMTUxZDE0MS4zMTJkMzQyLjAxNWQxNDEuMzEyZDIxNS4wMzlkMjEwLjk0NGQxODcuMzkxZDIzOC41OTJkMTg3LjM5MWQyNzYuNDhkMTg3LjM5MWQzMzUuODcyZDIxNy4wODdkMzk1LjI2NGQyNDYuNzg0ZDQyNy4wMDhkMjUwLjg4aFIyZDcyNC45OTJSM2Q2NTcuNDA4UjRkNTUuMjk2UjVkODM2LjYwOFI2ZDBSN2Q3ODEuMzEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyNDFSMTFkNTUuMjk2UjEyZDcyNC45OTJSMTNhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkxaTNpMmkzaTNpM2kyaTNpMmkzaTNpM2hnOjEyOG9SMGQ5OTYuMzUyUjFhaFIyZDBSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTI4UjExZDBSMTJkMFIxM2FoZzoyNDBvUjBkOTk2LjM1MlIxYWhSMmQwUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTI0MFIxMWQwUjEyZDBSMTNhaGc6MTI3b1IwZDk5Ni4zNTJSMWFoUjJkMFIzZDBSNGQwUjVkMFI2ZDBSN2QwUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjdSMTFkMFIxMmQwUjEzYWhnOjIzOW9SMGQ5OTYuMzUyUjFhZDU2LjMyZDEwMjRkNTYuMzJkNDMwLjA4ZDIxMi45OTJkNDMwLjA4ZDIxMi45OTJkMTAyNGQ1Ni4zMmQxMDI0ZDM0My4wNGQyMTAuOTQzZDM0My4wNGQzNjguNjRkMTg1LjM0NGQzNjguNjRkMTg1LjM0NGQyMTAuOTQzZDM0My4wNGQyMTAuOTQzZDEyMy45MDRkMjEwLjk0M2QxMjMuOTA0ZDM2OC42NGQtMzIuNzY4ZDM2OC42NGQtMzIuNzY4ZDIxMC45NDNkMTIzLjkwNGQyMTAuOTQzaFIyZDIxOS4xMzZSM2QzNDMuMDRSNGQtMzIuNzY4UjVkODEzLjA1NlI2ZDBSN2Q4NDUuODI0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMzlSMTFkLTMyLjc2OFIxMmQyMTkuMTM2UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNm9SMGQ5OTYuMzUyUjFhZDMxMC4yNzJkNjkxLjJkMzUxLjIzMmQ2OTEuMmQ0MDguNTc2ZDY1NC4zMzZkNDA4LjU3NmQ3ODMuMzZkMzQ3LjEzNmQ4MDguOTZkMzA3LjJkODA4Ljk2ZDI3MC4zMzZkODA4Ljk2ZDIxMC40MzJkNzc3LjcyOGQxNTAuNTI4ZDc0Ni40OTZkMTE1LjcxMmQ3NDYuNDk2ZDc2LjhkNzQ2LjQ5NmQyNC41NzZkNzg2LjQzMmQyNC41NzZkNjUxLjI2NGQ3OC44NDhkNjI3LjcxMmQxMjEuODU2ZDYyNy43MTJkMTYwLjc2OGQ2MjcuNzEyZDIyMC42NzJkNjU2Ljg5NmQyODAuNTc2ZDY4Ni4wNzlkMzEwLjI3MmQ2OTEuMmhSMmQ0MTMuNjk2UjNkNDA4LjU3NlI0ZDI0LjU3NlI1ZDM5Ni4yODhSNmQyMTUuMDRSN2QzNzEuNzEyUjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjZSMTFkMjQuNTc2UjEyZDQxMy42OTZSMTNhaTFpM2kyaTNpM2kzaTNpMmkzaTNpM2hnOjIzOG9SMGQ5OTYuMzUyUjFhZDUyLjIyNGQxMDI0ZDUyLjIyNGQ0MzAuMDhkMjA4Ljg5NmQ0MzAuMDhkMjA4Ljg5NmQxMDI0ZDUyLjIyNGQxMDI0ZDEyMC44MzJkMzcwLjY4OGQtMTUuMzZkMzcwLjY4OGQ5Ny4yOGQxODIuMjcxZDE5OS42OGQxODIuMjcxZDMxMi4zMmQzNzAuNjg4ZDE3NS4xMDRkMzcwLjY4OGQxNDYuNDMyZDMyNS42MzFkMTIwLjgzMmQzNzAuNjg4aFIyZDIxOS4xMzZSM2QzMTIuMzJSNGQtMTUuMzZSNWQ4NDEuNzI4UjZkMFI3ZDg1Ny4wODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzOFIxMWQtMTUuMzZSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjEyNW9SMGQ5OTYuMzUyUjFhZDUyLjIyNGQxMDI0ZDUyLjIyNGQ4NjcuMzI4ZDExMS42MTZkODY3LjMyOGQxMTEuNjE2ZDY4Ni4wNzlkMTU3LjY5NmQ2NDcuMTY4ZDExMS42MTZkNjA4LjI1NmQxMTEuNjE2ZDQ0My4zOTFkNTIuMjI0ZDQ0My4zOTFkNTIuMjI0ZDI4Ni43MmQxMTguNzg0ZDI4Ni43MmQxODAuMjI0ZDI4Ni43MmQyMjQuMjU2ZDMzMC4yNGQyNjguMjg4ZDM3My43NmQyNjguMjg4ZDQzNS4xOTlkMjY4LjI4OGQ1NTYuMDMxZDMwOS4yNDhkNTgwLjYwOGQzMDkuMjQ4ZDcxMS42OGQyNjguMjg4ZDczNy4yOGQyNjguMjg4ZDg3NS41MmQyNjguMjg4ZDkzNS45MzZkMjI0LjI1NmQ5NzkuOTY4ZDE4MC4yMjRkMTAyNGQxMTguNzg0ZDEwMjRkNTIuMjI0ZDEwMjRoUjJkMjk1LjkzNlIzZDMwOS4yNDhSNGQ1Mi4yMjRSNWQ3MzcuMjhSNmQwUjdkNjg1LjA1NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTI1UjExZDUyLjIyNFIxMmQyOTUuOTM2UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpM2kzaTJoZzoyMzdvUjBkOTk2LjM1MlIxYWQ1Mi4yMjRkMTAyNGQ1Mi4yMjRkNDMwLjA4ZDIwOC44OTZkNDMwLjA4ZDIwOC44OTZkMTAyNGQ1Mi4yMjRkMTAyNGQ1MC4xNzZkMzcwLjY4OGQxMDIuNGQxNjIuODE2ZDI2My4xNjhkMTYyLjgxNmQyMTAuOTQ0ZDM3MC42ODhkNTAuMTc2ZDM3MC42ODhoUjJkMjE5LjEzNlIzZDI2My4xNjhSNGQ1MC4xNzZSNWQ4NjEuMTg0UjZkMFI3ZDgxMS4wMDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzN1IxMWQ1MC4xNzZSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNG9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQxMTI1LjM3NmQ1NS4yOTZkMjAwLjcwM2QyMTEuOTY4ZDIwMC43MDNkMjExLjk2OGQxMTI1LjM3NmQ1NS4yOTZkMTEyNS4zNzZoUjJkMjE5LjEzNlIzZDIxMS45NjhSNGQ1NS4yOTZSNWQ4MjMuMjk2UjZkLTEwMS4zNzZSN2Q3NjhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEyNFIxMWQ1NS4yOTZSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaGc6MjM2b1IwZDk5Ni4zNTJSMWFkNTcuMzQ0ZDEwMjRkNTcuMzQ0ZDQzMC4wOGQyMTQuMDE2ZDQzMC4wOGQyMTQuMDE2ZDEwMjRkNTcuMzQ0ZDEwMjRkMTc3LjE1MmQxNjEuNzkyZDIyOS4zNzZkMzY5LjY2NGQ2OC42MDhkMzY5LjY2NGQxNi4zODRkMTYxLjc5MmQxNzcuMTUyZDE2MS43OTJoUjJkMjE5LjEzNlIzZDIyOS4zNzZSNGQxNi4zODRSNWQ4NjIuMjA4UjZkMFI3ZDg0NS44MjRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzNlIxMWQxNi4zODRSMTJkMjE5LjEzNlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyM29SMGQ5OTYuMzUyUjFhZDIyMS4xODRkNjg1LjA1NmQyMjEuMTg0ZDg2Ny4zMjhkMjgwLjU3NmQ4NjcuMzI4ZDI4MC41NzZkMTAyNGQyMTQuMDE2ZDEwMjRkMTUxLjU1MmQxMDI0ZDEwOC4wMzJkOTc5Ljk2OGQ2NC41MTJkOTM1LjkzNmQ2NC41MTJkODc1LjUyZDY0LjUxMmQ3MzcuMjhkNDguMTI4ZDcyNy4wNGQ0OS4xNTJkNzI3LjA0ZDQ2LjA4ZDcyNi4wMTZkMzYuMzUyZDcyMC4zODRkMjYuNjI0ZDcxNC43NTJkMjMuNTUyZDcxMy43MjhkMjMuNTUyZDU3OS41ODRkNjQuNTEyZDU1Ny4wNTZkNjQuNTEyZDQzNS4xOTlkNjQuNTEyZDM3My43NmQxMDguMDMyZDMzMC4yNGQxNTEuNTUyZDI4Ni43MmQyMTQuMDE2ZDI4Ni43MmQyODAuNTc2ZDI4Ni43MmQyODAuNTc2ZDQ0My4zOTFkMjIxLjE4NGQ0NDMuMzkxZDIyMS4xODRkNjA4LjI1NmQxNzUuMTA0ZDY0Ny4xNjhkMTk4LjY1NmQ2NjcuNjQ3ZDE5OC42NTZkNjY2LjYyNGQyMjEuMTg0ZDY4NS4wNTZoUjJkMjk1LjkzNlIzZDI4MC41NzZSNGQyMy41NTJSNWQ3MzcuMjhSNmQwUjdkNzEzLjcyOFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTIzUjExZDIzLjU1MlIxMmQyOTUuOTM2UjEzYWkxaTJpMmkyaTJpM2kzaTJpMmkyaTNpM2kyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaGc6MjM1b1IwZDk5Ni4zNTJSMWFkNTA1Ljg1NmQ0MzAuMDhkNTY3LjI5NmQ0MzAuMDhkNjEwLjgxNmQ0NzQuMTExZDY1NC4zMzZkNTE4LjE0NGQ2NTQuMzM2ZDU3OC41NmQ2NTQuMzM2ZDgwNS44ODhkMjA4Ljg5NmQ4MDUuODg4ZDIwOC44OTZkODY3LjMyOGQ2NTQuMzM2ZDg2Ny4zMjhkNjU0LjMzNmQxMDI0ZDIwMC43MDRkMTAyNGQxNDAuMjg4ZDEwMjRkOTYuMjU2ZDk3OS45NjhkNTIuMjI0ZDkzNS45MzZkNTIuMjI0ZDg3NS41MmQ1Mi4yMjRkNTc4LjU2ZDUyLjIyNGQ1MTguMTQ0ZDk2LjI1NmQ0NzQuMTExZDE0MC4yODhkNDMwLjA4ZDIwMC43MDRkNDMwLjA4ZDUwNS44NTZkNDMwLjA4ZDIwOC44OTZkNjY4LjY3MmQ0OTcuNjY0ZDY2OC42NzJkNDk3LjY2NGQ1ODYuNzUyZDIwOC44OTZkNTg2Ljc1MmQyMDguODk2ZDY2OC42NzJkNTYwLjEyOGQyMTIuOTkxZDU2MC4xMjhkMzcwLjY4OGQ0MDIuNDMyZDM3MC42ODhkNDAyLjQzMmQyMTIuOTkxZDU2MC4xMjhkMjEyLjk5MWQzNDAuOTkyZDIxMi45OTFkMzQwLjk5MmQzNzAuNjg4ZDE4NC4zMmQzNzAuNjg4ZDE4NC4zMmQyMTIuOTkxZDM0MC45OTJkMjEyLjk5MWhSMmQ2NTMuMzEyUjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDgxMS4wMDhSNmQwUjdkNzU4Ljc4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjM1UjExZDUyLjIyNFIxMmQ2NTMuMzEyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyMm9SMGQ5OTYuMzUyUjFhZDU1LjI5NmQ1ODYuNzUyZDU1LjI5NmQ0MzAuMDhkNjU3LjQwOGQ0MzAuMDhkNjU3LjQwOGQ1OTAuODQ4ZDMwMC4wMzJkODY3LjMyOGQ2NTcuNDA4ZDg2Ny4zMjhkNjU3LjQwOGQxMDI0ZDU1LjI5NmQxMDI0ZDU1LjI5NmQ4NjMuMjMyZDQxMi42NzJkNTg2Ljc1MmQ1NS4yOTZkNTg2Ljc1MmhSMmQ3MTQuNzUyUjNkNjU3LjQwOFI0ZDU1LjI5NlI1ZDU5My45MlI2ZDBSN2Q1MzguNjI0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMjJSMTFkNTUuMjk2UjEyZDcxNC43NTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIzNG9SMGQ5OTYuMzUyUjFhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyZDMzNy45MmQzNzAuNjg4ZDIwMS43MjhkMzcwLjY4OGQzMTQuMzY4ZDE4Mi4yNzFkNDE2Ljc2OGQxODIuMjcxZDUyOS40MDhkMzcwLjY4OGQzOTIuMTkyZDM3MC42ODhkMzYzLjUyZDMyNS42MzFkMzM3LjkyZDM3MC42ODhoUjJkNjUzLjMxMlIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NDEuNzI4UjZkMFI3ZDc4OS41MDRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIzNFIxMWQ1Mi4yMjRSMTJkNjUzLjMxMlIxM2FpMWkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjEyMW9SMGQ5OTYuMzUyUjFhZDY0Ni4xNDRkMTA4OC41MTJkNjQ2LjE0NGQxMTQ5Ljk1MmQ2MDIuNjI0ZDExOTMuNDcyZDU1OS4xMDRkMTIzNi45OTJkNDk3LjY2NGQxMjM2Ljk5MmQxMzcuMjE2ZDEyMzYuOTkyZDEzNy4yMTZkMTA3OS4yOTZkNDg5LjQ3MmQxMDc5LjI5NmQ0ODkuNDcyZDEwMjRkMTkyLjUxMmQxMDI0ZDEzMS4wNzJkMTAyNGQ4Ny4wNGQ5NzkuOTY4ZDQzLjAwOGQ5MzUuOTM2ZDQzLjAwOGQ4NzUuNTJkNDMuMDA4ZDQzMi4xMjhkMTk5LjY4ZDQzMi4xMjhkMTk5LjY4ZDg2Ny4zMjhkNDg5LjQ3MmQ4NjcuMzI4ZDQ4OS40NzJkNDMyLjEyOGQ2NDYuMTQ0ZDQzMi4xMjhkNjQ2LjE0NGQxMDg4LjUxMmhSMmQ3MDEuNDRSM2Q2NDYuMTQ0UjRkNDMuMDA4UjVkNTkxLjg3MlI2ZC0yMTIuOTkyUjdkNTQ4Ljg2NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTIxUjExZDQzLjAwOFIxMmQ3MDEuNDRSMTNhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIzM29SMGQ5OTYuMzUyUjFhZDUwNS44NTZkNDMwLjA4ZDU2Ny4yOTZkNDMwLjA4ZDYxMC44MTZkNDc0LjExMWQ2NTQuMzM2ZDUxOC4xNDRkNjU0LjMzNmQ1NzguNTZkNjU0LjMzNmQ4MDUuODg4ZDIwOC44OTZkODA1Ljg4OGQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ1MDUuODU2ZDQzMC4wOGQyMDguODk2ZDY2OC42NzJkNDk3LjY2NGQ2NjguNjcyZDQ5Ny42NjRkNTg2Ljc1MmQyMDguODk2ZDU4Ni43NTJkMjA4Ljg5NmQ2NjguNjcyZDI3MS4zNmQzNjkuNjY0ZDMyMy41ODRkMTYxLjc5MmQ0ODQuMzUyZDE2MS43OTJkNDMyLjEyOGQzNjkuNjY0ZDI3MS4zNmQzNjkuNjY0aFIyZDY1My4zMTJSM2Q2NTQuMzM2UjRkNTIuMjI0UjVkODYyLjIwOFI2ZDBSN2Q4MDkuOTg0UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMzNSMTFkNTIuMjI0UjEyZDY1My4zMTJSMTNhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjBkOTk2LjM1MlIxYWQ0OTcuNjY0ZDQzMC4wOGQ2NTkuNDU2ZDQzMC4wOGQ2NTkuNDU2ZDQ4MS4yOGQ0NTQuNjU2ZDcyMS45MmQ1NjcuMjk2ZDg1OS4xMzZkNjU5LjQ1NmQ5NzIuOGQ2NTkuNDU2ZDEwMjRkNDk4LjY4OGQxMDI0ZDM1My4yOGQ4NDUuODI0ZDIwNy44NzJkMTAyNGQ0Ny4xMDRkMTAyNGQ0Ny4xMDRkOTcyLjhkMjUxLjkwNGQ3MjEuOTJkNDcuMTA0ZDQ4MS4yOGQ0Ny4xMDRkNDMwLjA4ZDIwNy44NzJkNDMwLjA4ZDM1My4yOGQ2MDIuMTEyZDQ5Ny42NjRkNDMwLjA4aFIyZDcwOC42MDhSM2Q2NTkuNDU2UjRkNDcuMTA0UjVkNTkzLjkyUjZkMFI3ZDU0Ni44MTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTEyMFIxMWQ0Ny4xMDRSMTJkNzA4LjYwOFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzJvUjBkOTk2LjM1MlIxYWQ1MDUuODU2ZDQzMC4wOGQ1NjcuMjk2ZDQzMC4wOGQ2MTAuODE2ZDQ3NC4xMTFkNjU0LjMzNmQ1MTguMTQ0ZDY1NC4zMzZkNTc4LjU2ZDY1NC4zMzZkODA1Ljg4OGQyMDguODk2ZDgwNS44ODhkMjA4Ljg5NmQ4NjcuMzI4ZDY1NC4zMzZkODY3LjMyOGQ2NTQuMzM2ZDEwMjRkMjAwLjcwNGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni4yNTZkOTc5Ljk2OGQ1Mi4yMjRkOTM1LjkzNmQ1Mi4yMjRkODc1LjUyZDUyLjIyNGQ1NzguNTZkNTIuMjI0ZDUxOC4xNDRkOTYuMjU2ZDQ3NC4xMTFkMTQwLjI4OGQ0MzAuMDhkMjAwLjcwNGQ0MzAuMDhkNTA1Ljg1NmQ0MzAuMDhkMjA4Ljg5NmQ2NjguNjcyZDQ5Ny42NjRkNjY4LjY3MmQ0OTcuNjY0ZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkNjY4LjY3MmQ0MTEuNjQ4ZDE2Mi44MTZkNDYzLjg3MmQzNzAuNjg4ZDMwMy4xMDRkMzcwLjY4OGQyNTAuODhkMTYyLjgxNmQ0MTEuNjQ4ZDE2Mi44MTZoUjJkNjUzLjMxMlIzZDY1NC4zMzZSNGQ1Mi4yMjRSNWQ4NjEuMTg0UjZkMFI3ZDgwOC45NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjMyUjExZDUyLjIyNFIxMmQ2NTMuMzEyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE5b1IwZDk5Ni4zNTJSMWFkODc3LjU2OGQ0MzAuMDhkMTA0My40NTZkNDMwLjA4ZDgyMC4yMjRkMTAyNGQ3MDEuNDRkMTAyNGQ1NDAuNjcyZDY2OS42OTVkMzg3LjA3MmQxMDI0ZDI2OS4zMTJkMTAyNGQzNS44NGQ0MzAuMDhkMjAxLjcyOGQ0MzAuMDhkMzI5LjcyOGQ3MzguMzA0ZDM3My43NmQ2MzUuOTA0ZDM4NGQ2MTIuMzUyZDQxNi4yNTZkNTM5LjY0N2Q0NDguNTEyZDQ2Ni45NDNkNDYzLjg3MmQ0MzAuMDhkNjE1LjQyNGQ0MzAuMDhkNzU4Ljc4NGQ3NDIuNGQ4NzcuNTY4ZDQzMC4wOGhSMmQxMDc4LjI3MlIzZDEwNDMuNDU2UjRkMzUuODRSNWQ1OTMuOTJSNmQwUjdkNTU4LjA4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkxMTlSMTFkMzUuODRSMTJkMTA3OC4yNzJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJoZzoyMzFvUjBkOTk2LjM1MlIxYWQyMDguODk2ZDg2Ny4zMjhkNjU0LjMzNmQ4NjcuMzI4ZDY1NC4zMzZkMTAyNGQ0MTkuODRkMTAyNGQ0MTQuNzJkMTA0OC41NzZkMzk5Ljg3MmQxMDkxLjU4NGQzODUuMDI0ZDExMzQuNTkyZDM3OS45MDRkMTE1NS4wNzJkMjgwLjU3NmQxMTU1LjA3MmQyODUuNjk2ZDExMzAuNDk2ZDMwMC41NDRkMTA4Ny40ODhkMzE1LjM5MmQxMDQ0LjQ4ZDMyMC41MTJkMTAyNGQyMDAuNzA0ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2LjI1NmQ5NzkuOTY4ZDUyLjIyNGQ5MzUuOTM2ZDUyLjIyNGQ4NzUuNTJkNTIuMjI0ZDU3OC41NmQ1Mi4yMjRkNTE4LjE0NGQ5Ni4yNTZkNDc0LjExMWQxNDAuMjg4ZDQzMC4wOGQyMDAuNzA0ZDQzMC4wOGQ2NTMuMzEyZDQzMC4wOGQ2NTMuMzEyZDU4Ni43NTJkMjA4Ljg5NmQ1ODYuNzUyZDIwOC44OTZkODY3LjMyOGhSMmQ3MDkuNjMyUjNkNjU0LjMzNlI0ZDUyLjIyNFI1ZDU5My45MlI2ZC0xMzEuMDcyUjdkNTQxLjY5NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjMxUjExZDUyLjIyNFIxMmQ3MDkuNjMyUjEzYWkxaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaGc6MTE4b1IwZDk5Ni4zNTJSMWFkNjI5Ljc2ZDQzMC4wOGQ4MDkuOTg0ZDQzMC4wOGQ0ODIuMzA0ZDEwMjRkMzQ4LjE2ZDEwMjRkMjEuNTA0ZDQzMC4wOGQyMDEuNzI4ZDQzMC4wOGQ0MTUuNzQ0ZDgyNC4zMTlkNjI5Ljc2ZDQzMC4wOGhSMmQ4MDguOTZSM2Q4MDkuOTg0UjRkMjEuNTA0UjVkNTkzLjkyUjZkMFI3ZDU3Mi40MTZSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExOFIxMWQyMS41MDRSMTJkODA4Ljk2UjEzYWkxaTJpMmkyaTJpMmkyaTJoZzoyMzBvUjBkOTk2LjM1MlIxYWQ5NTUuMzkyZDQzMC4wOGQxMDE2LjgzMmQ0MzAuMDhkMTA1OS44NGQ0NzMuNmQxMTAyLjg0OGQ1MTcuMTJkMTEwMi44NDhkNTc4LjU2ZDExMDIuODQ4ZDgwNS44ODhkNjU3LjQwOGQ4MDUuODg4ZDY1Ny40MDhkODY3LjMyOGQxMTAyLjg0OGQ4NjcuMzI4ZDExMDIuODQ4ZDEwMjRkMjAyLjc1MmQxMDI0ZDE0MS4zMTJkMTAyNGQ5Ny43OTJkOTc5Ljk2OGQ1NC4yNzJkOTM1LjkzNmQ1NC4yNzJkODc1LjUyZDU0LjI3MmQ2NDguMTkyZDUwMC43MzZkNjQ4LjE5MmQ1MDAuNzM2ZDU4Ni43NTJkNTQuMjcyZDU4Ni43NTJkNTQuMjcyZDQzMC4wOGQ5NTUuMzkyZDQzMC4wOGQ1MDAuNzM2ZDg2Ny4zMjhkNTAwLjczNmQ3ODUuNDA4ZDIxMC45NDRkNzg1LjQwOGQyMTAuOTQ0ZDg2Ny4zMjhkNTAwLjczNmQ4NjcuMzI4ZDY1Ny40MDhkNjY4LjY3MmQ5NDYuMTc2ZDY2OC42NzJkOTQ2LjE3NmQ1ODYuNzUyZDY1Ny40MDhkNTg2Ljc1MmQ2NTcuNDA4ZDY2OC42NzJoUjJkMTIwNi4yNzJSM2QxMTAyLjg0OFI0ZDU0LjI3MlI1ZDU5My45MlI2ZDBSN2Q1MzkuNjQ4UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMzBSMTFkNTQuMjcyUjEyZDEyMDYuMjcyUjEzYWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExN29SMGQ5OTYuMzUyUjFhZDQ5OS43MTJkNDMwLjA4ZDY1Ni4zODRkNDMwLjA4ZDY1Ni4zODRkODc1LjUyZDY1Ni4zODRkOTM1LjkzNmQ2MTIuODY0ZDk3OS45NjhkNTY5LjM0NGQxMDI0ZDUwNy45MDRkMTAyNGQyMDIuNzUyZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDQzMC4wOGQyMTAuOTQ0ZDQzMC4wOGQyMTAuOTQ0ZDg2Ny4zMjhkNDk5LjcxMmQ4NjcuMzI4ZDQ5OS43MTJkNDMwLjA4aFIyZDcxMS42OFIzZDY1Ni4zODRSNGQ1NC4yNzJSNWQ1OTMuOTJSNmQwUjdkNTM5LjY0OFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTE3UjExZDU0LjI3MlIxMmQ3MTEuNjhSMTNhaTFpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJoZzoyMjlvUjBkOTk2LjM1MlIxYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhkMjg3Ljc0NGQxNjQuODY0ZDMzOS45NjhkMTY0Ljg2NGQzNzEuNzEyZDE2NC44NjRkMzk0Ljc1MmQxODcuOTA0ZDQxNy43OTJkMjEwLjk0M2Q0MTcuNzkyZDI0Mi42ODhkNDE3Ljc5MmQyOTIuODY0ZDQxNy43OTJkMzI0LjYwN2QzOTQuNzUyZDM0Ny42NDhkMzcxLjcxMmQzNzAuNjg4ZDMzOS45NjhkMzcwLjY4OGQyODcuNzQ0ZDM3MC42ODhkMjU2ZDM3MC42ODhkMjMyLjQ0OGQzNDcuNjQ4ZDIwOC44OTZkMzI0LjYwN2QyMDguODk2ZDI5Mi44NjRkMjA4Ljg5NmQyNDIuNjg4ZDIwOC44OTZkMjEwLjk0M2QyMzIuNDQ4ZDE4Ny45MDRkMjU2ZDE2NC44NjRkMjg3Ljc0NGQxNjQuODY0ZDI4Ny43NDRkMjQ0LjczNmQyODcuNzQ0ZDMwMC4wMzJkMzM5Ljk2OGQzMDAuMDMyZDMzOS45NjhkMjQ0LjczNmQyODcuNzQ0ZDI0NC43MzZoUjJkNzQyLjRSM2Q2NTUuMzZSNGQ1My4yNDhSNWQ4NTkuMTM2UjZkMFI3ZDgwNS44ODhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIyOVIxMWQ1My4yNDhSMTJkNzQyLjRSMTNhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMWkyaTJpMmkyaGc6MTE2b1IwZDk5Ni4zNTJSMWFkNDMxLjEwNGQ1ODYuNzUyZDIxMC45NDRkNTg2Ljc1MmQyMTAuOTQ0ZDg2Ny4zMjhkNDMxLjEwNGQ4NjcuMzI4ZDQzMS4xMDRkMTAyNGQyMDMuNzc2ZDEwMjRkMTQxLjMxMmQxMDI0ZDk3Ljc5MmQ5NzkuOTY4ZDU0LjI3MmQ5MzUuOTM2ZDU0LjI3MmQ4NzUuNTJkNTQuMjcyZDI1My45NTJkMjEwLjk0NGQyNTMuOTUyZDIxMC45NDRkNDMwLjA4ZDQzMS4xMDRkNDMwLjA4ZDQzMS4xMDRkNTg2Ljc1MmhSMmQ0NjEuODI0UjNkNDMxLjEwNFI0ZDU0LjI3MlI1ZDc3MC4wNDhSNmQwUjdkNzE1Ljc3NlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTE2UjExZDU0LjI3MlIxMmQ0NjEuODI0UjEzYWkxaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaGc6MjI4b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDU1Mi45NmQyMTIuOTkxZDU1Mi45NmQzNzAuNjg4ZDM5NS4yNjRkMzcwLjY4OGQzOTUuMjY0ZDIxMi45OTFkNTUyLjk2ZDIxMi45OTFkMzMzLjgyNGQyMTIuOTkxZDMzMy44MjRkMzcwLjY4OGQxNzcuMTUyZDM3MC42ODhkMTc3LjE1MmQyMTIuOTkxZDMzMy44MjRkMjEyLjk5MWhSMmQ3NDIuNFIzZDY1NS4zNlI0ZDUzLjI0OFI1ZDgxMS4wMDhSNmQwUjdkNzU3Ljc2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjhSMTFkNTMuMjQ4UjEyZDc0Mi40UjEzYWkxaTNpM2kyaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IwZDk5Ni4zNTJSMWFkNjUyLjI4OGQ1NzguNTZkNjUyLjI4OGQ2MDguMjU2ZDQ5NC41OTJkNjA4LjI1NmQ0OTQuNTkyZDU4Ni43NTJkMjA1LjgyNGQ1ODYuNzUyZDIwNS44MjRkNjQ4LjE5MmQ1MDIuNzg0ZDY0OC4xOTJkNTY1LjI0OGQ2NDguMTkyZDYwOC43NjhkNjkxLjcxMmQ2NTIuMjg4ZDczNS4yMzJkNjUyLjI4OGQ3OTYuNjcyZDY1Mi4yODhkODc1LjUyZDY1Mi4yODhkOTM1LjkzNmQ2MDguNzY4ZDk3OS45NjhkNTY1LjI0OGQxMDI0ZDUwMi43ODRkMTAyNGQxOTcuNjMyZDEwMjRkMTM3LjIxNmQxMDI0ZDkzLjE4NGQ5NzkuOTY4ZDQ5LjE1MmQ5MzUuOTM2ZDQ5LjE1MmQ4NzUuNTJkNDkuMTUyZDg0NS44MjRkMjA1LjgyNGQ4NDUuODI0ZDIwNS44MjRkODY3LjMyOGQ0OTQuNTkyZDg2Ny4zMjhkNDk0LjU5MmQ4MDUuODg4ZDE5Ny42MzJkODA1Ljg4OGQxMzcuMjE2ZDgwNS44ODhkOTMuMTg0ZDc2MS44NTZkNDkuMTUyZDcxNy44MjRkNDkuMTUyZDY1Ny40MDhkNDkuMTUyZDU3OC41NmQ0OS4xNTJkNTE4LjE0NGQ5My4xODRkNDc0LjExMWQxMzcuMjE2ZDQzMC4wOGQxOTcuNjMyZDQzMC4wOGQ1MDIuNzg0ZDQzMC4wOGQ1NjUuMjQ4ZDQzMC4wOGQ2MDguNzY4ZDQ3NC4xMTFkNjUyLjI4OGQ1MTguMTQ0ZDY1Mi4yODhkNTc4LjU2aFIyZDcwMi40NjRSM2Q2NTIuMjg4UjRkNDkuMTUyUjVkNTkzLjkyUjZkMFI3ZDU0NC43NjhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExNVIxMWQ0OS4xNTJSMTJkNzAyLjQ2NFIxM2FpMWkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpM2kzaGc6MjI3b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDQyNC45NmQyNDkuODU2ZDQ2NC44OTZkMjQ5Ljg1NmQ1MjMuMjY0ZDIxMS45NjdkNTIzLjI2NGQzNDAuOTkxZDQ1OS43NzZkMzY3LjYxNmQ0MjEuODg4ZDM2Ny42MTZkMzg0ZDM2Ny42MTZkMzI1LjEyZDMzNS44NzFkMjY2LjI0ZDMwNC4xMjdkMjM2LjU0NGQzMDQuMTI3ZDIyNS4yOGQzMDQuMTI3ZDE4Mi4yNzJkMzA0LjEyN2QxMzkuMjY0ZDM0MC45OTFkMTM5LjI2NGQyMTQuMDE1ZDIwOC44OTZkMTg2LjM2N2QyMzYuNTQ0ZDE4Ni4zNjdkMjc0LjQzMmQxODYuMzY3ZDMzMy44MjRkMjE2LjA2M2QzOTMuMjE2ZDI0NS43NmQ0MjQuOTZkMjQ5Ljg1NmhSMmQ3NDIuNFIzZDY1NS4zNlI0ZDUzLjI0OFI1ZDgzNy42MzJSNmQwUjdkNzg0LjM4NFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjI3UjExZDUzLjI0OFIxMmQ3NDIuNFIxM2FpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkzaTJpM2kzaTNpMmkzaTJpM2kzaTNoZzoxMTRvUjBkOTk2LjM1MlIxYWQyMDIuNzUyZDQzMC4wOGQ1MzAuNDMyZDQzMC4wOGQ1MzAuNDMyZDU4Ni43NTJkMjA5LjkyZDU4Ni43NTJkMjA5LjkyZDEwMjRkNTMuMjQ4ZDEwMjRkNTMuMjQ4ZDU3OC41NmQ1My4yNDhkNTE4LjE0NGQ5Ny4yOGQ0NzQuMTExZDE0MS4zMTJkNDMwLjA4ZDIwMi43NTJkNDMwLjA4aFIyZDUzOC42MjRSM2Q1MzAuNDMyUjRkNTMuMjQ4UjVkNTkzLjkyUjZkMFI3ZDU0MC42NzJSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExNFIxMWQ1My4yNDhSMTJkNTM4LjYyNFIxM2FpMWkyaTJpMmkyaTJpMmkzaTNoZzoyMjZvUjBkOTk2LjM1MlIxYWQ1MDYuODhkNDMwLjA4ZDU2OC4zMmQ0MzAuMDhkNjExLjg0ZDQ3NC4xMTFkNjU1LjM2ZDUxOC4xNDRkNjU1LjM2ZDU3OC41NmQ2NTUuMzZkMTAyNGQyMDEuNzI4ZDEwMjRkMTQwLjI4OGQxMDI0ZDk2Ljc2OGQ5NzkuOTY4ZDUzLjI0OGQ5MzUuOTM2ZDUzLjI0OGQ4NzUuNTJkNTMuMjQ4ZDY0OC4xOTJkNDk4LjY4OGQ2NDguMTkyZDQ5OC42ODhkNTg2Ljc1MmQ1My4yNDhkNTg2Ljc1MmQ1My4yNDhkNDMwLjA4ZDUwNi44OGQ0MzAuMDhkNDk4LjY4OGQ4NjcuMzI4ZDQ5OC42ODhkNzg1LjQwOGQyMDkuOTJkNzg1LjQwOGQyMDkuOTJkODY3LjMyOGQ0OTguNjg4ZDg2Ny4zMjhkMzUxLjIzMmQzNzAuNjg4ZDIxNS4wNGQzNzAuNjg4ZDMyNy42OGQxODIuMjcxZDQzMC4wOGQxODIuMjcxZDU0Mi43MmQzNzAuNjg4ZDQwNS41MDRkMzcwLjY4OGQzNzYuODMyZDMyNS42MzFkMzUxLjIzMmQzNzAuNjg4aFIyZDc0Mi40UjNkNjU1LjM2UjRkNTMuMjQ4UjVkODQxLjcyOFI2ZDBSN2Q3ODguNDhSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTIyNlIxMWQ1My4yNDhSMTJkNzQyLjRSMTNhaTFpM2kzaTJpMmkzaTNpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmhnOjExM29SMGQ5OTYuMzUyUjFhZDIwLjQ4ZDU3OC41NmQyMC40OGQ1MTguMTQ0ZDY0ZDQ3NC4xMTFkMTA3LjUyZDQzMC4wOGQxNjguOTZkNDMwLjA4ZDYyMy42MTZkNDMwLjA4ZDYyMy42MTZkMTI1OS41MmQ0NjYuOTQ0ZDEyNTkuNTJkNDY2Ljk0NGQxMDI0ZDE2OC45NmQxMDI0ZDEwNy41MmQxMDI0ZDY0ZDk3OS45NjhkMjAuNDhkOTM1LjkzNmQyMC40OGQ4NzUuNTJkMjAuNDhkNTc4LjU2ZDE3OC4xNzZkNTg2Ljc1MmQxNzguMTc2ZDg2Ny4zMjhkNDY2Ljk0NGQ4NjcuMzI4ZDQ2Ni45NDRkNTg2Ljc1MmQxNzguMTc2ZDU4Ni43NTJoUjJkNjc5LjkzNlIzZDYyMy42MTZSNGQyMC40OFI1ZDU5My45MlI2ZC0yMzUuNTJSN2Q1NzMuNDRSOGQyMDcuODcyUjlkMjM1LjUyUjEwaTExM1IxMWQyMC40OFIxMmQ2NzkuOTM2UjEzYWkxaTNpM2kyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjI1b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDI4NC42NzJkMzcwLjY4OGQzMzYuODk2ZDE2Mi44MTZkNDk3LjY2NGQxNjIuODE2ZDQ0NS40NGQzNzAuNjg4ZDI4NC42NzJkMzcwLjY4OGhSMmQ3NDIuNFIzZDY1NS4zNlI0ZDUzLjI0OFI1ZDg2MS4xODRSNmQwUjdkODA3LjkzNlI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMjI1UjExZDUzLjI0OFIxMmQ3NDIuNFIxM2FpMWkzaTNpMmkyaTNpM2kyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTEyb1IwZDk5Ni4zNTJSMWFkNTA4LjkyOGQ0MzAuMDhkNTcwLjM2OGQ0MzAuMDhkNjEzLjg4OGQ0NzQuMTExZDY1Ny40MDhkNTE4LjE0NGQ2NTcuNDA4ZDU3OC41NmQ2NTcuNDA4ZDg3NS41MmQ2NTcuNDA4ZDkzNS45MzZkNjEzLjg4OGQ5NzkuOTY4ZDU3MC4zNjhkMTAyNGQ1MDguOTI4ZDEwMjRkMjExLjk2OGQxMDI0ZDIxMS45NjhkMTI1OS41MmQ1NS4yOTZkMTI1OS41MmQ1NS4yOTZkNDMwLjA4ZDUwOC45MjhkNDMwLjA4ZDIxMS45NjhkNTg2Ljc1MmQyMTEuOTY4ZDg2Ny4zMjhkNTAwLjczNmQ4NjcuMzI4ZDUwMC43MzZkNTg2Ljc1MmQyMTEuOTY4ZDU4Ni43NTJoUjJkNjc5LjkzNlIzZDY1Ny40MDhSNGQ1NS4yOTZSNWQ1OTMuOTJSNmQtMjM1LjUyUjdkNTM4LjYyNFI4ZDIwNy44NzJSOWQyMzUuNTJSMTBpMTEyUjExZDU1LjI5NlIxMmQ2NzkuOTM2UjEzYWkxaTNpM2kyaTNpM2kyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjI0b1IwZDk5Ni4zNTJSMWFkNTA2Ljg4ZDQzMC4wOGQ1NjguMzJkNDMwLjA4ZDYxMS44NGQ0NzQuMTExZDY1NS4zNmQ1MTguMTQ0ZDY1NS4zNmQ1NzguNTZkNjU1LjM2ZDEwMjRkMjAxLjcyOGQxMDI0ZDE0MC4yODhkMTAyNGQ5Ni43NjhkOTc5Ljk2OGQ1My4yNDhkOTM1LjkzNmQ1My4yNDhkODc1LjUyZDUzLjI0OGQ2NDguMTkyZDQ5OC42ODhkNjQ4LjE5MmQ0OTguNjg4ZDU4Ni43NTJkNTMuMjQ4ZDU4Ni43NTJkNTMuMjQ4ZDQzMC4wOGQ1MDYuODhkNDMwLjA4ZDQ5OC42ODhkODY3LjMyOGQ0OTguNjg4ZDc4NS40MDhkMjA5LjkyZDc4NS40MDhkMjA5LjkyZDg2Ny4zMjhkNDk4LjY4OGQ4NjcuMzI4ZDQyNC45NmQxNjIuODE2ZDQ3Ny4xODRkMzcwLjY4OGQzMTYuNDE2ZDM3MC42ODhkMjY0LjE5MmQxNjIuODE2ZDQyNC45NmQxNjIuODE2aFIyZDc0Mi40UjNkNjU1LjM2UjRkNTMuMjQ4UjVkODYxLjE4NFI2ZDBSN2Q4MDcuOTM2UjhkMjA3Ljg3MlI5ZDIzNS41MlIxMGkyMjRSMTFkNTMuMjQ4UjEyZDc0Mi40UjEzYWkxaTNpM2kyaTJpM2kzaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZ2g"}];
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
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
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
awe6.core.drivers.ASession.DEBUG_ID = "DEBUG_AWE6";
awe6.core.drivers.ASession._VERSION_ID = "_____VERSION";
jeash.errors.Error.DEFAULT_TO_STRING = "Error";
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
jeash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
jeash.events.Listener.sIDs = 1;
awe6.core.drivers.AFactory._CONFIG_ASSETS_NODE = "settings.assets.url";
jeash.text.Font.jeashInit = false;
jeash.text.Font.DEFAULT_FONT_SCALE = 9.0;
jeash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
jeash.text.Font.DEFAULT_CLASS_NAME = "jeash.text.Font";
jeash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
jeash.text.Font.__init = (function($this) {
	var $r;
	jeash.text.Font.jeashFontData = new Hash();
	jeash.text.Font.jeashFontData.set("Bitstream_Vera_Sans",jeash.text.Font.DEFAULT_FONT_DATA);
	$r = jeash.text.Font.jeashInit = true;
	return $r;
}(this));
awe6.core.AAssetManager._PACKAGE_ID = "assets";
jeash.events.Event.ACTIVATE = "activate";
jeash.events.Event.ADDED = "added";
jeash.events.Event.ADDED_TO_STAGE = "addedToStage";
jeash.events.Event.CANCEL = "cancel";
jeash.events.Event.CHANGE = "change";
jeash.events.Event.CLOSE = "close";
jeash.events.Event.COMPLETE = "complete";
jeash.events.Event.CONNECT = "connect";
jeash.events.Event.DEACTIVATE = "deactivate";
jeash.events.Event.ENTER_FRAME = "enterFrame";
jeash.events.Event.ID3 = "id3";
jeash.events.Event.INIT = "init";
jeash.events.Event.MOUSE_LEAVE = "mouseLeave";
jeash.events.Event.OPEN = "open";
jeash.events.Event.REMOVED = "removed";
jeash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
jeash.events.Event.RENDER = "render";
jeash.events.Event.RESIZE = "resize";
jeash.events.Event.SCROLL = "scroll";
jeash.events.Event.SELECT = "select";
jeash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
jeash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
jeash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
jeash.events.Event.UNLOAD = "unload";
jeash.events.Event.SOUND_COMPLETE = "soundComplete";
jeash.events.KeyboardEvent.KEY_DOWN = "KEY_DOWN";
jeash.events.KeyboardEvent.KEY_UP = "KEY_UP";
jeash.events.IOErrorEvent.IO_ERROR = "IO_ERROR";
jeash.display.DisplayObject.mNameID = 0;
awe6.core.drivers.AAudioManager._PACKAGE_ID = "assets.audio";
jeash.display.StageQuality.BEST = "best";
jeash.display.StageQuality.HIGH = "high";
jeash.display.StageQuality.MEDIUM = "medium";
jeash.display.StageQuality.LOW = "low";
jeash.Lib.DEFAULT_PRIORITY = ["2d","swf"];
jeash.Lib.mShowCursor = true;
jeash.Lib.mShowFPS = false;
jeash.Lib.mFullscreen = false;
jeash.Lib.mCollectEveryFrame = false;
jeash.Lib.mQuitOnEscape = true;
jeash.Lib.mLastMouse = new jeash.geom.Point();
jeash.Lib.VENDOR_HTML_TAG = "data-";
jeash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
jeash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown"];
jeash.Lib.JEASH_IDENTIFIER = "haxe:jeash";
jeash.Lib.DEFAULT_WIDTH = 500;
jeash.Lib.DEFAULT_HEIGHT = 500;
jeash.text.TextFieldAutoSize.CENTER = "CENTER";
jeash.text.TextFieldAutoSize.LEFT = "LEFT";
jeash.text.TextFieldAutoSize.NONE = "NONE";
jeash.text.TextFieldAutoSize.RIGHT = "RIGHT";
awe6.core.drivers.AKernel._POWERED_BY = "Powered by awe6";
awe6.core.drivers.AKernel._POWERED_BY_URL = "http://awe6.org";
awe6.core.drivers.AKernel._RELEASE_CAUTION = "PUBLIC RELEASE NOT ADVISED";
awe6.core.drivers.AKernel._RESET_SESSIONS = "Reset All Saved Information";
awe6.core.drivers.AKernel._EYE_CANDY_ENABLE = "Enable Eye Candy";
awe6.core.drivers.AKernel._EYE_CANDY_DISABLE = "Disable Eye Candy";
awe6.core.drivers.AKernel._FULL_SCREEN_ENABLE = "Enter Full Screen Mode";
awe6.core.drivers.AKernel._FULL_SCREEN_DISABLE = "Exit Full Screen Mode";
jeash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
jeash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
jeash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
jeash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
jeash.media.Sound.EXTENSION_MP3 = "mp3";
jeash.media.Sound.EXTENSION_OGG = "ogg";
jeash.media.Sound.EXTENSION_WAV = "wav";
jeash.media.Sound.EXTENSION_AAC = "aac";
jeash.ui.Keyboard.KEY_0 = 48;
jeash.ui.Keyboard.KEY_1 = 49;
jeash.ui.Keyboard.KEY_2 = 50;
jeash.ui.Keyboard.KEY_3 = 51;
jeash.ui.Keyboard.KEY_4 = 52;
jeash.ui.Keyboard.KEY_5 = 53;
jeash.ui.Keyboard.KEY_6 = 54;
jeash.ui.Keyboard.KEY_7 = 55;
jeash.ui.Keyboard.KEY_8 = 56;
jeash.ui.Keyboard.KEY_9 = 57;
jeash.ui.Keyboard.A = 65;
jeash.ui.Keyboard.B = 66;
jeash.ui.Keyboard.C = 67;
jeash.ui.Keyboard.D = 68;
jeash.ui.Keyboard.E = 69;
jeash.ui.Keyboard.F = 70;
jeash.ui.Keyboard.G = 71;
jeash.ui.Keyboard.H = 72;
jeash.ui.Keyboard.I = 73;
jeash.ui.Keyboard.J = 74;
jeash.ui.Keyboard.K = 75;
jeash.ui.Keyboard.L = 76;
jeash.ui.Keyboard.M = 77;
jeash.ui.Keyboard.N = 78;
jeash.ui.Keyboard.O = 79;
jeash.ui.Keyboard.P = 80;
jeash.ui.Keyboard.Q = 81;
jeash.ui.Keyboard.R = 82;
jeash.ui.Keyboard.S = 83;
jeash.ui.Keyboard.T = 84;
jeash.ui.Keyboard.U = 85;
jeash.ui.Keyboard.V = 86;
jeash.ui.Keyboard.W = 87;
jeash.ui.Keyboard.X = 88;
jeash.ui.Keyboard.Y = 89;
jeash.ui.Keyboard.Z = 90;
jeash.ui.Keyboard.NUMPAD_0 = 96;
jeash.ui.Keyboard.NUMPAD_1 = 97;
jeash.ui.Keyboard.NUMPAD_2 = 98;
jeash.ui.Keyboard.NUMPAD_3 = 99;
jeash.ui.Keyboard.NUMPAD_4 = 100;
jeash.ui.Keyboard.NUMPAD_5 = 101;
jeash.ui.Keyboard.NUMPAD_6 = 102;
jeash.ui.Keyboard.NUMPAD_7 = 103;
jeash.ui.Keyboard.NUMPAD_8 = 104;
jeash.ui.Keyboard.NUMPAD_9 = 105;
jeash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
jeash.ui.Keyboard.NUMPAD_ADD = 107;
jeash.ui.Keyboard.NUMPAD_ENTER = 108;
jeash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
jeash.ui.Keyboard.NUMPAD_DECIMAL = 110;
jeash.ui.Keyboard.NUMPAD_DIVIDE = 111;
jeash.ui.Keyboard.F1 = 112;
jeash.ui.Keyboard.F2 = 113;
jeash.ui.Keyboard.F3 = 114;
jeash.ui.Keyboard.F4 = 115;
jeash.ui.Keyboard.F5 = 116;
jeash.ui.Keyboard.F6 = 117;
jeash.ui.Keyboard.F7 = 118;
jeash.ui.Keyboard.F8 = 119;
jeash.ui.Keyboard.F9 = 120;
jeash.ui.Keyboard.F10 = 121;
jeash.ui.Keyboard.F11 = 122;
jeash.ui.Keyboard.F12 = 123;
jeash.ui.Keyboard.F13 = 124;
jeash.ui.Keyboard.F14 = 125;
jeash.ui.Keyboard.F15 = 126;
jeash.ui.Keyboard.BACKSPACE = 8;
jeash.ui.Keyboard.TAB = 9;
jeash.ui.Keyboard.ENTER = 13;
jeash.ui.Keyboard.SHIFT = 16;
jeash.ui.Keyboard.CONTROL = 17;
jeash.ui.Keyboard.CAPS_LOCK = 18;
jeash.ui.Keyboard.ESCAPE = 27;
jeash.ui.Keyboard.SPACE = 32;
jeash.ui.Keyboard.PAGE_UP = 33;
jeash.ui.Keyboard.PAGE_DOWN = 34;
jeash.ui.Keyboard.END = 35;
jeash.ui.Keyboard.HOME = 36;
jeash.ui.Keyboard.LEFT = 37;
jeash.ui.Keyboard.RIGHT = 38;
jeash.ui.Keyboard.UP = 39;
jeash.ui.Keyboard.DOWN = 40;
jeash.ui.Keyboard.INSERT = 45;
jeash.ui.Keyboard.DELETE = 46;
jeash.ui.Keyboard.NUMLOCK = 144;
jeash.ui.Keyboard.BREAK = 19;
jeash.ui.Keyboard.DOM_VK_CANCEL = 3;
jeash.ui.Keyboard.DOM_VK_HELP = 6;
jeash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
jeash.ui.Keyboard.DOM_VK_TAB = 9;
jeash.ui.Keyboard.DOM_VK_CLEAR = 12;
jeash.ui.Keyboard.DOM_VK_RETURN = 13;
jeash.ui.Keyboard.DOM_VK_ENTER = 14;
jeash.ui.Keyboard.DOM_VK_SHIFT = 16;
jeash.ui.Keyboard.DOM_VK_CONTROL = 17;
jeash.ui.Keyboard.DOM_VK_ALT = 18;
jeash.ui.Keyboard.DOM_VK_PAUSE = 19;
jeash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
jeash.ui.Keyboard.DOM_VK_ESCAPE = 27;
jeash.ui.Keyboard.DOM_VK_SPACE = 32;
jeash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
jeash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
jeash.ui.Keyboard.DOM_VK_END = 35;
jeash.ui.Keyboard.DOM_VK_HOME = 36;
jeash.ui.Keyboard.DOM_VK_LEFT = 37;
jeash.ui.Keyboard.DOM_VK_UP = 38;
jeash.ui.Keyboard.DOM_VK_RIGHT = 39;
jeash.ui.Keyboard.DOM_VK_DOWN = 40;
jeash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
jeash.ui.Keyboard.DOM_VK_INSERT = 45;
jeash.ui.Keyboard.DOM_VK_DELETE = 46;
jeash.ui.Keyboard.DOM_VK_0 = 48;
jeash.ui.Keyboard.DOM_VK_1 = 49;
jeash.ui.Keyboard.DOM_VK_2 = 50;
jeash.ui.Keyboard.DOM_VK_3 = 51;
jeash.ui.Keyboard.DOM_VK_4 = 52;
jeash.ui.Keyboard.DOM_VK_5 = 53;
jeash.ui.Keyboard.DOM_VK_6 = 54;
jeash.ui.Keyboard.DOM_VK_7 = 55;
jeash.ui.Keyboard.DOM_VK_8 = 56;
jeash.ui.Keyboard.DOM_VK_9 = 57;
jeash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
jeash.ui.Keyboard.DOM_VK_EQUALS = 61;
jeash.ui.Keyboard.DOM_VK_A = 65;
jeash.ui.Keyboard.DOM_VK_B = 66;
jeash.ui.Keyboard.DOM_VK_C = 67;
jeash.ui.Keyboard.DOM_VK_D = 68;
jeash.ui.Keyboard.DOM_VK_E = 69;
jeash.ui.Keyboard.DOM_VK_F = 70;
jeash.ui.Keyboard.DOM_VK_G = 71;
jeash.ui.Keyboard.DOM_VK_H = 72;
jeash.ui.Keyboard.DOM_VK_I = 73;
jeash.ui.Keyboard.DOM_VK_J = 74;
jeash.ui.Keyboard.DOM_VK_K = 75;
jeash.ui.Keyboard.DOM_VK_L = 76;
jeash.ui.Keyboard.DOM_VK_M = 77;
jeash.ui.Keyboard.DOM_VK_N = 78;
jeash.ui.Keyboard.DOM_VK_O = 79;
jeash.ui.Keyboard.DOM_VK_P = 80;
jeash.ui.Keyboard.DOM_VK_Q = 81;
jeash.ui.Keyboard.DOM_VK_R = 82;
jeash.ui.Keyboard.DOM_VK_S = 83;
jeash.ui.Keyboard.DOM_VK_T = 84;
jeash.ui.Keyboard.DOM_VK_U = 85;
jeash.ui.Keyboard.DOM_VK_V = 86;
jeash.ui.Keyboard.DOM_VK_W = 87;
jeash.ui.Keyboard.DOM_VK_X = 88;
jeash.ui.Keyboard.DOM_VK_Y = 89;
jeash.ui.Keyboard.DOM_VK_Z = 90;
jeash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
jeash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
jeash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
jeash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
jeash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
jeash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
jeash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
jeash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
jeash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
jeash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
jeash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
jeash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
jeash.ui.Keyboard.DOM_VK_ADD = 107;
jeash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
jeash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
jeash.ui.Keyboard.DOM_VK_DECIMAL = 110;
jeash.ui.Keyboard.DOM_VK_DIVIDE = 111;
jeash.ui.Keyboard.DOM_VK_F1 = 112;
jeash.ui.Keyboard.DOM_VK_F2 = 113;
jeash.ui.Keyboard.DOM_VK_F3 = 114;
jeash.ui.Keyboard.DOM_VK_F4 = 115;
jeash.ui.Keyboard.DOM_VK_F5 = 116;
jeash.ui.Keyboard.DOM_VK_F6 = 117;
jeash.ui.Keyboard.DOM_VK_F7 = 118;
jeash.ui.Keyboard.DOM_VK_F8 = 119;
jeash.ui.Keyboard.DOM_VK_F9 = 120;
jeash.ui.Keyboard.DOM_VK_F10 = 121;
jeash.ui.Keyboard.DOM_VK_F11 = 122;
jeash.ui.Keyboard.DOM_VK_F12 = 123;
jeash.ui.Keyboard.DOM_VK_F13 = 124;
jeash.ui.Keyboard.DOM_VK_F14 = 125;
jeash.ui.Keyboard.DOM_VK_F15 = 126;
jeash.ui.Keyboard.DOM_VK_F16 = 127;
jeash.ui.Keyboard.DOM_VK_F17 = 128;
jeash.ui.Keyboard.DOM_VK_F18 = 129;
jeash.ui.Keyboard.DOM_VK_F19 = 130;
jeash.ui.Keyboard.DOM_VK_F20 = 131;
jeash.ui.Keyboard.DOM_VK_F21 = 132;
jeash.ui.Keyboard.DOM_VK_F22 = 133;
jeash.ui.Keyboard.DOM_VK_F23 = 134;
jeash.ui.Keyboard.DOM_VK_F24 = 135;
jeash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
jeash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
jeash.ui.Keyboard.DOM_VK_COMMA = 188;
jeash.ui.Keyboard.DOM_VK_PERIOD = 190;
jeash.ui.Keyboard.DOM_VK_SLASH = 191;
jeash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
jeash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
jeash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
jeash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
jeash.ui.Keyboard.DOM_VK_QUOTE = 222;
jeash.ui.Keyboard.DOM_VK_META = 224;
jeash.ui.Keyboard.DOM_VK_KANA = 21;
jeash.ui.Keyboard.DOM_VK_HANGUL = 21;
jeash.ui.Keyboard.DOM_VK_JUNJA = 23;
jeash.ui.Keyboard.DOM_VK_FINAL = 24;
jeash.ui.Keyboard.DOM_VK_HANJA = 25;
jeash.ui.Keyboard.DOM_VK_KANJI = 25;
jeash.ui.Keyboard.DOM_VK_CONVERT = 28;
jeash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
jeash.ui.Keyboard.DOM_VK_ACEPT = 30;
jeash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
jeash.ui.Keyboard.DOM_VK_SELECT = 41;
jeash.ui.Keyboard.DOM_VK_PRINT = 42;
jeash.ui.Keyboard.DOM_VK_EXECUTE = 43;
jeash.ui.Keyboard.DOM_VK_SLEEP = 95;
jeash.events.FocusEvent.FOCUS_IN = "FOCUS_IN";
jeash.events.FocusEvent.FOCUS_OUT = "FOCUS_OUT";
jeash.events.FocusEvent.KEY_FOCUS_CHANGE = "KEY_FOCUS_CHANGE";
jeash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "MOUSE_FOCUS_CHANGE";
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \r\n\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
jeash.events.MouseEvent.CLICK = "click";
jeash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
jeash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
jeash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
jeash.events.MouseEvent.MOUSE_OUT = "mouseOut";
jeash.events.MouseEvent.MOUSE_OVER = "mouseOver";
jeash.events.MouseEvent.MOUSE_UP = "mouseUp";
jeash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
jeash.events.MouseEvent.ROLL_OUT = "rollOut";
jeash.events.MouseEvent.ROLL_OVER = "rollOver";
jeash.events.EventPhase.CAPTURING_PHASE = 0;
jeash.events.EventPhase.AT_TARGET = 1;
jeash.events.EventPhase.BUBBLING_PHASE = 2;
jeash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
jeash.text.TextField.sSelectionOwner = null;
jeash.text.FontInstance.mSolidFonts = new Hash();
demo.scenes.Game.TIME_LIMIT = 30;
jeash.display.GraphicsPathCommand.LINE_TO = 2;
jeash.display.GraphicsPathCommand.MOVE_TO = 1;
jeash.display.GraphicsPathCommand.CURVE_TO = 3;
jeash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
jeash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
jeash.display.GraphicsPathCommand.NO_OP = 0;
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
jeash.display.BitmapDataChannel.ALPHA = 8;
jeash.display.BitmapDataChannel.BLUE = 4;
jeash.display.BitmapDataChannel.GREEN = 2;
jeash.display.BitmapDataChannel.RED = 1;
js.Lib.onerror = null;
jeash.display.Stage.jeashMouseChanges = [jeash.events.MouseEvent.MOUSE_OUT,jeash.events.MouseEvent.MOUSE_OVER,jeash.events.MouseEvent.ROLL_OUT,jeash.events.MouseEvent.ROLL_OVER];
jeash.display.Stage.DEFAULT_FRAMERATE = 60.0;
jeash.display.Stage.DEFAULT_PROJ_MATRIX = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
jeash.text.TextFieldType.DYNAMIC = "DYNAMIC";
jeash.text.TextFieldType.INPUT = "INPUT";
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
jeash.text.AntiAliasType.ADVANCED = "advanced";
jeash.text.AntiAliasType.NORMAL = "normal";
haxe.Timer.arr = new Array();
jeash.display.Graphics.defaultFontName = "ARIAL.TTF";
jeash.display.Graphics.defaultFontSize = 12;
jeash.display.Graphics.immediateMatrix = null;
jeash.display.Graphics.immediateMask = null;
jeash.display.Graphics.TOP = 0;
jeash.display.Graphics.CENTER = 1;
jeash.display.Graphics.BOTTOM = 2;
jeash.display.Graphics.LEFT = 0;
jeash.display.Graphics.RIGHT = 2;
jeash.display.Graphics.RADIAL = 1;
jeash.display.Graphics.SPREAD_REPEAT = 2;
jeash.display.Graphics.SPREAD_REFLECT = 4;
jeash.display.Graphics.EDGE_MASK = 240;
jeash.display.Graphics.EDGE_CLAMP = 0;
jeash.display.Graphics.EDGE_REPEAT = 16;
jeash.display.Graphics.EDGE_UNCHECKED = 32;
jeash.display.Graphics.EDGE_REPEAT_POW2 = 48;
jeash.display.Graphics.END_NONE = 0;
jeash.display.Graphics.END_ROUND = 256;
jeash.display.Graphics.END_SQUARE = 512;
jeash.display.Graphics.END_MASK = 768;
jeash.display.Graphics.END_SHIFT = 8;
jeash.display.Graphics.CORNER_ROUND = 0;
jeash.display.Graphics.CORNER_MITER = 4096;
jeash.display.Graphics.CORNER_BEVEL = 8192;
jeash.display.Graphics.CORNER_MASK = 12288;
jeash.display.Graphics.CORNER_SHIFT = 12;
jeash.display.Graphics.PIXEL_HINTING = 16384;
jeash.display.Graphics.BMP_REPEAT = 16;
jeash.display.Graphics.BMP_SMOOTH = 65536;
jeash.display.Graphics.SCALE_NONE = 0;
jeash.display.Graphics.SCALE_VERTICAL = 1;
jeash.display.Graphics.SCALE_HORIZONTAL = 2;
jeash.display.Graphics.SCALE_NORMAL = 3;
jeash.display.Graphics.MOVE = 0;
jeash.display.Graphics.LINE = 1;
jeash.display.Graphics.CURVE = 2;
jeash.display.Graphics.BLEND_ADD = 0;
jeash.display.Graphics.BLEND_ALPHA = 1;
jeash.display.Graphics.BLEND_DARKEN = 2;
jeash.display.Graphics.BLEND_DIFFERENCE = 3;
jeash.display.Graphics.BLEND_ERASE = 4;
jeash.display.Graphics.BLEND_HARDLIGHT = 5;
jeash.display.Graphics.BLEND_INVERT = 6;
jeash.display.Graphics.BLEND_LAYER = 7;
jeash.display.Graphics.BLEND_LIGHTEN = 8;
jeash.display.Graphics.BLEND_MULTIPLY = 9;
jeash.display.Graphics.BLEND_NORMAL = 10;
jeash.display.Graphics.BLEND_OVERLAY = 11;
jeash.display.Graphics.BLEND_SCREEN = 12;
jeash.display.Graphics.BLEND_SUBTRACT = 13;
jeash.display.Graphics.BLEND_SHADER = 14;
jeash.display.Graphics.JEASH_SIZING_WARM_UP = 10;
jeash.display.Graphics.JEASH_MAX_DIMENSION = 5000;
window.addEventListener( "load", ApplicationMain.main, false );
alert( 'test" );
gadgets.util.registerOnLoadHandler( Application.main );