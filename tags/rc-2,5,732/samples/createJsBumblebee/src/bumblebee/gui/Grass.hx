package bumblebee.gui;
import awe6.interfaces.IKernel;
/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Grass extends ParallaxEntity 
{
	public function new( p_kernel:IKernel ) 
	{
		_assetsManager = cast p_kernel.assets;
			
		var l_speed = 40;
		var l_img1 = _assetsManager.grass;
		var l_img2 = _assetsManager.grass;
			
		super( p_kernel, l_img1, l_img2, l_speed );
	}
}