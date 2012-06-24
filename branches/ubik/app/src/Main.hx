import awe6.core.drivers.ubik.Context;
import demo.Factory;
import flash.Lib;
import haxe.Log;
import haxe.PosInfos;
import org.flashdevelop.utils.FlashConnect;

/**
 * ...
 * @author Robert Fell
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
		if ( l_isDebug ) 
		{
			FlashConnect.redirect();
		}
		else 
		{
			Log.trace = function( v:Dynamic, ?infos:PosInfos ):Void {};
		}
//		var l_context:Context = cast Lib.current;
		var l_context:Context = new Context();
		var l_factory = new Factory( l_context, l_isDebug );
	}	
}
