package awe6.core.drivers;
import awe6.core.drivers.flash.Kernel;

/**
 * Represents a process living in the awe6 kernel.
 *
 * The kernel process is an object that has a finite life cycle and lives in
 * the kernel. There are no restrictions on the activities that can originate
 * from the process during its life cycle. The only requirement is that the
 * process indicates the completion of its life cycle once it occurs.
 * <p>The duration of the life cycle and the activities of the process could be
 * influenced by many factors: time, input from peripheral devices, randomness,
 * state of other processes, configuration, etc.</p>
 */
class KernelProcess
{
	/**
	 * The unique identification of the process within the kernel.
	 *
	 * This property can be set <b>exactly once</b> and it must only by the
	 * kernel as only the kernel knows how to set correct ids.
	 * Setting the kernel twice will trigger an exception. No other property
	 * or method of the object should be accessed before the id is assigned.
	 * Otherwise the behaviour is undefined.
	 * <p>No other process in the kernel should have the same id, otherwise
	 * the behaviour is undefined.</p>
	 */
	public var id( _get_id, _set_id ):Dynamic;

	/**
	 * The parent process of this kernel process.
	 *
	 * This property is <b>read-only</b>.
	 * <p>Every process in the kernel is a node in the process tree. A process
	 * can have many children, but it has exactly one parent. The root of the
	 * process tree is the kernel itself. The parent of the kernel is the
	 * kernel itself.</p>
	 */
	public var parent( null, null ):KernelProcess;

	/**
	 * Indicates whether the life cycle of this process is complete.
	 *
	 * This property is <b>read-only</b>
	 * The value is true if the life cycle is complete and false otherwise.
	 */
	public var complete( _get_complete, null ):Bool;
	
	/**
	 * The age of the kernel process in seconds.
	 *
	 * This property is <b>read-only</b>.
	 * The age is defined to be the time since the processes was added to the kernel.
	 */
	public var age( _get_age, null ):Float;

	/**
	 * Serves as a backing field for the id property.
	 */
	private var _id: Dynamic;

	/**
	 * Constructs a new process with the specified parent.
	 *
	 * The constructed process is not fully initialized until the process has
	 * been injected into the kernel and an id has been assigned by the kernel.
	 * No other field or method of the object should be accessed until a valid
	 * id has been assigned. Otherwise the behaviour is undefined.
	 *
	 * @param p_parent the kernel process that will be the parent of this process.
	 * @see id
	 */
	public function new( p_parent:KernelProcess ):Void
	{
		this.parent = p_parent;
		_init();
	}

	private function _init():Void
	{
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
	 * @param p_deltaTime the elapsed amount of time.
	 * @see complete
	 */
	public function update( p_deltaTime ):Void
	{

	}

	private function _get_id():Dynamic
	{
		return _id;
	}

	private function _set_id( value:Dynamic ):Dynamic
	{
		if ( id != null )
		{
			throw "The id property of this kernel process is already set."
		}

		_id = value;

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
