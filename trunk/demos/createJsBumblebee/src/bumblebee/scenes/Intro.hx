package bumblebee.scenes;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EScene;
import awe6.interfaces.IKernel;
import bumblebee.gui.PositionableEntity;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Intro extends AScene 
{
	
	public function new( p_kernel:IKernel, p_type:EScene, p_isPauseable:Bool = false, p_isMuteable:Bool = true, p_isSessionSavedOnNext:Bool = false ) 
	{
		super( p_kernel, p_type, p_isPauseable, p_isMuteable, p_isSessionSavedOnNext );
	}
	
	override private function _init():Void 
	{
		super._init();
		addEntity( new PositionableEntity( _kernel, _assetManager.sceneIntro ), true, 1 );
		_kernel.audio.stop( "Music", EAudioChannel.MUSIC );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _kernel.inputs.keyboard.getIsKeyRelease( _kernel.factory.keyNext ) || _kernel.inputs.mouse.getIsButtonRelease() ) 
		{
			_kernel.scenes.next();
		}
	}
}
