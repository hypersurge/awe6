package ;
import demo.Factory;
import flash.Lib;
import haxe.Log;
import haxe.PosInfos;
import org.flashdevelop.utils.FlashConnect;

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
		if ( l_isDebug ) 
		{
			FlashConnect.redirect();
		}
		else 
		{
			Log.trace = function( v:Dynamic, ?infos:PosInfos ):Void {};
		}
		var l_factory = new Factory( Lib.current, l_isDebug );
	}
	
}
