package jeash.xml;

import Html5Dom;

class XML
{
	var unparsed:String;
	var document:Document;
	var parser:DOMParser;
	public function new(?value : Dynamic) : Void
	{
		parser = new DOMParser();
		document = parser.parseFromString(Std.string(value), "text/XML");

	}

	public function addNamespace(ns : Dynamic) : XML
	{

		// NOTE: I'm not sure if it's possible to create a namespace
		// definition in WebKit, so this method just creates the XML,
		// you would need to reparse the document to use the namespace.

		if ( Reflect.hasField(ns, "prefix") && Reflect.hasField(ns, "uri") )
			document.documentElement.setAttribute("xmlns:" + Reflect.field(ns, "prefix"), Reflect.field(ns, "uri"));
		else if (Reflect.field(ns, "uri"))
			document.documentElement.setAttribute("xmlns", Reflect.field(ns, "uri"));
		else if (Std.string(ns) != "")
			document.documentElement.setAttribute("xmlns", Std.string(ns));

	}

	public function appendChild(child : Dynamic) : XML
	{
		var newdoc = parser.parseFromString(Std.string(child));
		var newnode = document.importNode( newdoc.documentElement );
		document.documentElement.appendChild(newnode);
		return this;
	}

	public function attribute(arg : Dynamic) : XMLList
	{
		var list = new XMLList();
		if (Std.is(arg, QName))
		{
			var qname = cast(arg, QName); 
			list.appendChild( document.documentElement.getAttributeNS(qname.uri, qname.localName) );
		} else {
			list.appendChild( document.documentElement.getAttribute(Std.string(arg)) );
		}
		return list;
	}

	public function attributes() : XMLList
	{

	}

	public function child(propertyName : Dynamic) : XMLList
	{
	}

	public function childIndex() : Int
	{
	}

	public function children() : XMLList
	{
	}

	public function comments() : XMLList
	{
	}

	public function contains(value : Dynamic) : Bool
	{
	}

	public function copy() : XML
	{
	}

	public function descendants(?name : String) : XMLList
	{
	}

	public function elements(?name : String) : XMLList
	{
	}

	public function hasComplexContent() : Bool
	{
	}

	public function hasSimpleContent() : Bool
	{
	}

	public function inScopeNamespaces() : Array<Dynamic>
	{
	}

	public function insertChildAfter(child1 : Dynamic, child2 : Dynamic) : Void
	{
	}

	public function insertChildBefore(child1 : Dynamic, child2 : Dynamic) : Void
	{
	}

	public function length() : Int
	{
	}

	public function localName() : Dynamic
	{
	}

	public function name() : Dynamic
	{
	}

	public function namespace(?prefix : Dynamic) : Void
	{
	}

	public function namespaceDeclarations() : Array<Dynamic>
	{
	}
	
	public function nodeKind() : String
	{
	}

	public function normalize() : XML
	{
	}

	public function notification() : Dynamic
	{
	}

	public function parent() : XML
	{
	}

	public function prependChild(value : Dynamic) : XML
	{
	}

	public function processingInstructions(?name : String) : XMLList
	{
	}

	public function removeNamespace(ns : Dynamic) : XML
	{
	}

	public function replace(propertyName : Dynamic, value : Dynamic) : XML
	{
	}

	public function setChildren(value : Dynamic) : XML
	{
	}

	public function setLocalName(name : Dynamic) : Void
	{
	}

	public function setName(name : Dynamic) : Void
	{
	}

	public function setNamespace(ns : Dynamic) : Void
	{
	}

	public function setNotification(f : Dynamic) : Void
	{
	}

	public function text() : XMLList
	{
	}

	public function toString() : String
	{
	}

	public function toXMLString() : String
	{
	}

	public function valueOf() : XML
	{
	}

	public static var ignoreComments : Bool;
	public static var ignoreProcessingInstructions : Bool;
	public static var ignoreWhitespace : Bool;
	public static var prettyIndent : Int;
	public static var prettyPrinting : Bool;
	public static function defaultSettings() : Dynamic
	{
	}

	public static function setSettings(?o : Dynamic) : Void
	{
	}

	public static function settings() : Dynamic
	{
	}

}
