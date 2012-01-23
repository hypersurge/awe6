package awe6.core;

/**
 *
 */
class AKernel extends AViewableKernelProcess
{
	/**
	 * The list of processes registered with this kernel.
	 */
	var _processes:List<KernelProcess>;

	/**
	 * A mapping between the processes registered with this kernel and their
	 * children.
	 */
	var _parentMapping:Hash<List<KernelProcess>> ;
	
	private function new( p_view:AView )
	{
		// Bootstrap the kernel by assigning an id before calling the parent
		// constructor. This is necessary because the parent of the kernel is
		// the kernel itself.
		//
		kernel = this;
		id = Uuid.generate();
		super( this, p_view );
	}

	override private function _init():Void
	{
		super._init();
		_processes = new List<KernelProcess>();
		_processes.push( this );
		_parentMapping = new Hash<List<KernelProcess>>();
		_parentMapping.set( kernel.id, new List<KernelProcess>() );
	}
	
	/**
	 * Registers the specified process with the kernel.
	 *
	 * If the process was already registered or is not bound to this kernel,
	 * this method does nothing and returns false. Otherwise the process is
	 * registered and the method returns true. As most important part of the
	 * registration, the process is assigned an unique id.
	 * <p>If the process is an instance of IViewable, its view is as a child to
	 * the view of the first viewable process in the path from the specified
	 * process to the kernel in the process tree.</p>
	 */
	public function registerProcess( p_process:KernelProcess ):Bool
	{
		// Assert the process was not yet registered and it's bound to this
		// kernel.
		//
		
		if ( p_process.id != null || p_process.kernel != this )
		{
			return false;
		}

		p_process.id = Uuid.generate();

		_processes.add( p_process );
		_parentMapping.set( p_process.id, new List<KernelProcess>() );
		_parentMapping.get( p_process.parent.id ).push( p_process );

		// If the process has a view, add its view to the view tree.
		//
		
		if ( Std.is( p_process, IViewable ) )
		{
			var l_node = p_process.parent;
			
			while ( !Std.is( l_node, IViewable ) )
			{
				l_node = l_node.parent;
			}

			cast( l_node, IViewable ).view
				.addChild( cast( p_process, AView ) );
		}
		
		return true;
	}

	/**
	 * Unregisters the specified process from the kernel.
	 *
	 * The process must be registered with this kernel and must be complete,
	 * otherwise this method does nothing and returns false. Otherwise all
	 * nodes of the subtree beginning in the specified process are removed from
	 * the kernel and are disposed of, because they cannot exist without a
	 * parent. The nodes in the said subtree are processed bottom-up to ensure
	 * correct deinitialization. The view of every viewable process is removed
	 * from its parent in the view tree before the process is dispoed of.
	 * Finally the method returns true.
	 */
	public function unregisterProcess( p_process:KernelProcess ):Bool
	{
		if ( p_process.id == null
			|| p_process.kernel != this
			|| !p_process.complete)
		{
			return false;
		}
		
		_removeProcessSubtree( p_process );
		
		return true;
	}

	private function _removeProcessSubtree( p_process:KernelProcess )
	{
		// Recursively remove all children of the specified process; then
		// remove the process from the parent mapping.
		//

		var children = _parentMapping.get( p_process.id );
		for ( child in children )
		{
			_removeProcessSubtree( child );
		}

		_parentMapping.remove( p_process.id );

		// Remove the process' view from the view tree.
		//

		if ( Std.is( p_process, IViewable ) )
		{
			var l_view = cast( p_process, IViewable ).view;
			l_view.parent.removeChild( l_view );
		}

		// Remove the process from the list of active processes and dispose of
		// it.
		//
		
		_processes.remove( p_process );
		p_process.dispose();
	}
}
