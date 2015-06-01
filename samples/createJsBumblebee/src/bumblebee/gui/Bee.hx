package bumblebee.gui;
import awe6.interfaces.EAgenda;
import awe6.interfaces.EJoypadButton;
import awe6.interfaces.IKernel;
import bumblebee.AssetManager;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Bee extends PositionableEntity
{
	private var _dx			:Float;
	private var _dy			:Float;
	private var _speed		:Float;
	private var _friction	:Float;
	private var _beeFast		: PositionableEntity;
	private var _beeBrake		: PositionableEntity;
	private var _beeNormal		: PositionableEntity;
	private var _assetManager 	: AssetManager;
	
	public function new( p_kernel:IKernel )
	{
		_assetManager = cast p_kernel.assets;
		super( p_kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		
		_beeNormal = new PositionableEntity( _kernel, _assetManager.beeNormal );
		_beeFast = new PositionableEntity( _kernel, _assetManager.beeFast );
		_beeBrake = new PositionableEntity( _kernel, _assetManager.beeBrake );	
		width = 125;
		height = 117;
				
		setPosition( ( _kernel.factory.width - width ) / 2, ( _kernel.factory.height - height ) / 2 );

		addEntity( _beeNormal, EAgenda.SUB_TYPE( _EBeeState.NORMAL), true, 1); 
		addEntity( _beeFast, EAgenda.SUB_TYPE( _EBeeState.FAST), true, 1); 
		addEntity( _beeBrake , EAgenda.SUB_TYPE( _EBeeState.BRAKE), true, 1);
		_dx = _dy = 0;
		_speed = 50;
		_friction = .1;
		updateAgenda( _EBeeState.NORMAL );
	}
	
	private function updateAgenda( p_type:_EBeeState ) 
	{
		setAgenda( EAgenda.SUB_TYPE( p_type ) );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void
	{
		super._updater( p_deltaTime );
		var l_adjustedDelta:Float = p_deltaTime * .001;

		// listen to virtual joypad
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.RIGHT ) )
		{
			_dx += _speed * l_adjustedDelta;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.LEFT ) )
		{
			_dx -= _speed * l_adjustedDelta;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.DOWN ) )
		{
			_dy += _speed * l_adjustedDelta;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.UP ) )
		{
			_dy -= _speed * l_adjustedDelta;
		}
		// inertial friction
		_dx *= 1 - ( _friction * ( 1 - l_adjustedDelta ) );
		_dy *= 1 - ( _friction * ( 1 - l_adjustedDelta ) );

		// apply inertia
		x += _dx;
		y += _dy;

		// keep position within screen
		x = _tools.limit( x, -width * .5, _kernel.factory.width -( width * .5 ) );
		y = _tools.limit( y, -height * .5, _kernel.factory.height -( height * .5) );
		
		if ( _dx > 12 ) updateAgenda( _EBeeState.FAST );
		if ( _dx <= 12 && _dx >= -2 ) updateAgenda( _EBeeState.NORMAL );
		if ( _dx < -2 ) updateAgenda( _EBeeState.BRAKE );
	}
}
private enum _EBeeState
{ 
	NORMAL;
	FAST; 
	BRAKE;
}