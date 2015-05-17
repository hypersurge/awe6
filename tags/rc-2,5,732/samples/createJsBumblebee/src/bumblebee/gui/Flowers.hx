package bumblebee.gui;
import awe6.interfaces.IKernel;
/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Flowers extends ParallaxEntity
{
	public function new( p_kernel:IKernel ) 
	{
		_assetsManager = cast p_kernel.assets;
			
		var l_speed = 100;
		var l_img1 = _assetsManager.flowers;
		var l_img2 = _assetsManager.flowers;
			
		super( p_kernel, l_img1, l_img2, l_speed );
	}
}