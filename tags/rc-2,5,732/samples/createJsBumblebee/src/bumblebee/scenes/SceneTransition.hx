package bumblebee.scenes;
import awe6.interfaces.IKernel;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class SceneTransition extends awe6.core.SceneTransition 
{
	public function new( p_kernel:IKernel ) 
	{
		var l_duration:Int = 200;
		super( p_kernel, l_duration );
	}
	
	override private function _init():Void 
	{
		super._init();
		// extend
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		//extend
	}
	
	override private function _disposer():Void 
	{
		//extend
		super._disposer();
	}
}
