package awe6.core;
import awe6.core.drivers.KernelProcess;
import awe6.interfaces.IViewable;

/**
 * ...
 * @author M. Ivanchev
 */

class ViewableKernelProcess extends KernelProcess, implements IViewable
{
	public var view( null, null ): View;

	public function new():Void
	{
		super();
	}

	override private function _init():Void
	{
		
	}
}
