package bumblebee.gui;
import awe6.interfaces.IKernel;
/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Clouds extends ParallaxEntity
{
	public function new( p_kernel:IKernel ) 
	{
		_assetsManager = cast p_kernel.assets;
			
		var l_speed = 5;
		var l_img1 = _assetsManager.clouds;
		var l_img2 = _assetsManager.clouds;
			
		super( p_kernel, l_img1, l_img2, l_speed );
	}
}