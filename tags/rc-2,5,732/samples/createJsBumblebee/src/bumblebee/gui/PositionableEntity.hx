package bumblebee.gui;
import awe6.core.Entity;
import awe6.interfaces.IKernel;
import awe6.interfaces.IPositionable;
import awe6.interfaces.IView;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class PositionableEntity extends Entity implements IPositionable
{
	public var x( default, set ):Float;
	public var y( default, set ):Float;
	@:isVar public var width( get, set ):Float;
	@:isVar public var height( get, set ):Float;
	
	public function new( p_kernel:IKernel, ?p_view:IView, ?p_id:String ) 
	{
		if ( p_view != null ) view = p_view;
		super( p_kernel, p_id );
	}
	
	override private function _init():Void 
	{
		super._init();
	}
	
	override private function _disposer():Void 
	{
		view.dispose();
		super._disposer();		
	}
	
	public function setPosition( p_x:Float, p_y:Float ):Void
	{
		x = p_x;
		y = p_y;
	}
	
	private function set_x( p_value:Float ):Float
	{
		x = p_value;
		if ( view != null )
		{
			view.x = x;
		}
		return x;
	}
	
	private function set_y( p_value:Float ):Float
	{
		y = p_value;
		if ( view != null )
		{
			view.y = y;
		}
		return y;
	}
	
	private function set_width( p_value:Float ):Float
	{
		width = p_value;
		return width;
	}
	
	private function set_height( p_value:Float ):Float
	{
		height = p_value;
		return height;
	}
	
	private function get_width():Float
	{
		return width;
	}	
	
	private function get_height():Float
	{
		return height;
	}
}
