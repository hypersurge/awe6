package bumblebee.scenes;
import awe6.core.Scene;
import awe6.interfaces.EScene;
import awe6.interfaces.IKernel;
import bumblebee.AssetManager;
import bumblebee.Session;

/**
 * ...
  * @author valerie.elimak - blog.elimak.com
*/

class AScene extends Scene 
{
	private var _assetManager:AssetManager;
	private var _session:Session;
	
	// passthru constructor needed as workaround for a JS compile time bug
	public function new( p_kernel:IKernel, p_type:EScene, p_isPauseable:Bool = false, p_isMuteable:Bool = true, p_isSessionSavedOnNext:Bool = false ) 
	{
		super( p_kernel, p_type, p_isPauseable, p_isMuteable, p_isSessionSavedOnNext );
	}
	
	override private function _init():Void 
	{
		super._init();
		_assetManager = cast( _kernel.assets, AssetManager );
		_session = cast( _kernel.session, Session );
	}
	
}
