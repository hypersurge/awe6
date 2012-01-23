package awe6.core;

/**
 * Represents a process living in the awe6 kernel.
 *
 * The kernel process is an object that has a potentially finite life cycle and
 * lives in the kernel. There are no restrictions on the activities that can
 * originate from the process during its life cycle. The only requirement is
 * that the process indicates the completion of its life cycle once it occurs.
 * <p>The duration of the life cycle and the activities of the process could be
 * influenced by many factors: time, input from peripheral devices, randomness,
 * state of other processes, configuration, etc.</p>
 * <p>A kernel process whose life cycle is complete is removed from the kernel
 * and effectively destroyed; it cannot be reused.</p>
 */
class KernelProcess implements IDisposable
{
	/**
	 * The kernel that this kernel process is bound to.
	 *
	 * This property is <b>read-only</b>.
	 * <p>A kernel process is always bound to a kernel as it cannot exist
	 * outside of a kernel.</p>
	 */
	public var kernel( default, null ):AKernel;

	/**
	 * The unique identification of the process within the kernel.
	 *
	 * This property can be set <b>exactly once</b> and it should only
	 * be set by the kernel during process registration as only the kernel
	 * knows how to set correct ids. It's critical to realize that an id
	 * unequal null means that the process has been registered with the kernel.
	 * <p>Setting the id twice will trigger an exception. No other property
	 * or method of the object should be accessed before the id is assigned,
	 * i.e. the process is registered  with the kernel. Otherwise the
	 * behaviour is undefined.</p>
	 */
	public var id( _get_id, _set_id ):Dynamic;

	/**
	 * The parent process of this kernel process.
	 *
	 * This property is <b>read-only</b>.
	 * <p>Every process in the kernel is a node in the process tree. A process
	 * can have many children, but it has exactly one parent. The root node of
	 * the process tree is the kernel. The parent of the kernel is the kernel
	 * itself.</p>
	 */
	public var parent( default, null ):KernelProcess;

	/**
	 * Indicates whether the life cycle of this process is complete.
	 *
	 * This property is <b>read-only</b>.
	 * <p>The value is true if the life cycle is complete and false otherwise.
	 * </p>
	 */
	public var complete( _get_complete, null ):Bool;
	
	/**
	 * The age of the kernel process in seconds.
	 *
	 * This property is <b>read-only</b>.
	 * <p>The age is defined to be the time since the processes was added to
	 * the kernel.</p>
	 */
	public var age( _get_age, null ):Float;

	public var disposed( default, null ):Bool;
	
	/**
	 * Serves as a backing field for the id property.
	 */
	private var _id: Dynamic;

	/**
	 * Constructs a new process with the specified parent.
	 *
	 * The process is bound to the kernel to which the parent process is
	 * bound. If the parent process does not have a valid id yet, i.e. was
	 * not registered with the kernel yet, an exception will be thrown.
	 * <p>The constructed process is not fully initialized, i.e. usable. After
	 * the construction, the process needs to be registered with the kernel.
	 * </p>
	 * <p>No other field or method of the object should be accessed until a
	 * valid id has been assigned. Otherwise the behaviour is undefined.</p>
	 *
	 * @param p_parent the kernel process that will be the parent of this process
	 */
	public function new( p_parent:KernelProcess ):Void
	{
		if ( p_parent.id == null )
		{
			throw "The parent process has not been registered with a kernel.";
		}

		kernel = p_parent.kernel;
		parent = p_parent;
		_init();
	}

	private function _init():Void
	{
	}

	/**
	 * Disposes of this kernel process.
	 *
	 * This method should be called only by the kernel, as this process is
	 * potentially a parent of other kernel processes. The kernel will
	 * unregister the process before calling this method. The id of the process
	 * will not be valid any more.
	 * <p>In accordance with the ontract of IDisposable, the method might be
	 * called on a process with an incomplete life cycle as well.</p>
	 */
	public function dispose():Void
	{
		if ( disposed )
		{
			return;
		}
		
		disposed = true;
	}
	
	/**
	 * Called by the kernel to notify the process that the specified amount of
	 * time has passed and to read the proccess' current status.
	 *
	 * Only the kernel should call this method, do not call it directly.
	 * <p>The method should return true if the life cycle of the process is not
	 * complete, otherwise the method should return false in which case the
	 * kernel will remove it from the process tree.</p>
	 *
	 * @param p_deltaTime the elapsed amount of time
	 */
	public function update( p_deltaTime ):Bool
	{
		age += p_deltaTime;
		return true;
	}

	private function _get_id():Dynamic
	{
		return _id;
	}

	private function _set_id( p_value:Dynamic ):Dynamic
	{
		if ( id != null )
		{
			throw "The id property of this kernel process is already set.";
		}

		_id = p_value;

		return _id;
	}

	private function _get_parent():KernelProcess
	{
		return parent;
	}

	private function _get_complete():Bool
	{
		return complete;
	}

	private function _get_age():Float
	{
		return age;
	}
}
