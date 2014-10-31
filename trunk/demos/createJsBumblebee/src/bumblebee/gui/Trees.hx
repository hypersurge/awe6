package bumblebee.gui;
import awe6.interfaces.IKernel;
/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Trees extends ParallaxEntity
{
	public function new( p_kernel:IKernel ) 
	{
		_assetsManager = cast p_kernel.assets;
			
		var l_speed = 10;
		var l_img1 = _assetsManager.trees;
		var l_img2 = _assetsManager.trees;
			
		super( p_kernel, l_img1, l_img2, l_speed );
	}
}