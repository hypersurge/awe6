package ;

import demo.Factory;
import haxe.Resource;
import awe6.core.Context;

/**
 * ...
 * @author Rob Fell
 */

class Main
{
	static function main()
	{
		#if debug
		var l_isDebug:Bool = true;
		#else
		var l_isDebug:Bool = false;
		#end
		var l_factory = new Factory( new Context(), l_isDebug, Resource.getString( "config" ) );
	}

	public function new()
	{
		// needed for good form
	}
}

