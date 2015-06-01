package bumblebee.gui;
import awe6.core.drivers.AView;
import awe6.core.View;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import bumblebee.AssetManager;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class ParallaxEntity extends PositionableEntity
{
	private var _assetsManager 	: AssetManager;
	private var _speed 			: Float;
	private var _images			: Array<IView>;
	private var _width	 		: Float;
	private var _height	 		: Float;
		
	public function new( p_kernel:IKernel, p_img1:IView, p_img2:IView, p_speed:Float )
	{
		_speed = p_speed;
		_images = [ p_img1, p_img2 ];
		_width = 600;
		_height = 400;
		super( p_kernel );
	}
	override private function _init():Void 
	{
		super._init();
		view.addChild( _images[0] );
		view.addChild( _images[1] );
		_images[1].x = _width;
		_images[0].y = _images[1].y = _kernel.factory.height - _height;
	}
		
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		for ( i in _images )
		{
			i.x -= _speed * ( p_deltaTime * .001 ); // keeps _speed constant
			if ( i.x <= -_width )
			{
				var l_offset =  i.x + _width;
				i.x = _width + l_offset;
			}
		}
	}
}