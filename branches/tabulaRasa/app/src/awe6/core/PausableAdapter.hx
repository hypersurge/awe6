package awe6.core;
import awe6.interfaces.EPauserKey;
import awe6.interfaces.IPauseable;

/**
 * Provides a default implementation of the IPausable interface with the
 * non-extended pauser key compatibility rules of EPauserKey.
 */
class PausableAdapter implements IPausable
{
	public var paused( _get_paused, _set_paused ):Bool;
	public var var pauserKey( _get_pauesrKey, _set_pauserKey ):EPauserKey;

	/** Serves as a backing field for the paused property. */
	private var _paused;
	/** Serves as a backing field for the pauserKey property. */
	private var _pauserKey;

	public function new()
	{
	}

	public function pause( p_pauserKey:EPauserKey )
	{
		if ( paused )
		{
			return false;
		}

		_paused = true;
		_pauserKey = p_pauserKey;

		return true;
	}

	public function resume( p_pauserKey:EPauserKey )
	{
		if ( !paused )
		{
			return false;
		}

		var l_result =
			switch ( pauserKey )
			{
			case NONE: false;
			case ANY: true;
			case KEY( value ):
					switch ( p_pauserKey )
					{
					case KEY( otherValue ): value == otherValue;
					default: false;
					}
			default: false;
			}

		if ( l_result == false )
		{
			return false;
		}
			
		_paused = false;
		_pauserKey = null;
		
		return true;
	}
	
	private function _get_paused():Bool
	{
		return _paused;
	}

	private function _set_paused( p_value:Bool ):Bool
	{
		throw "This property is read-only";
		return _paused;
	}

	private function _get_pauserKey():EPauserKey
	{
		return _pauserKey;
	}

	private function _set_pauserKey( p_value:EPauserKey ):EPauserKey
	{
		throw "This property is read-only";
		return _pauserKey;
	}
}
