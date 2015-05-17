package bumblebee.scenes;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EScene;
import awe6.interfaces.IKernel;
import bumblebee.gui.Bee;
import bumblebee.gui.Clouds;
import bumblebee.gui.Flowers;
import bumblebee.gui.Grass;
import bumblebee.gui.Trees;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Game extends AScene 
{
	
	public function new( p_kernel:IKernel, p_type:EScene, p_isPauseable:Bool = false, p_isMuteable:Bool = true, p_isSessionSavedOnNext:Bool = false ) 
	{
		super( p_kernel, p_type, p_isPauseable, p_isMuteable, p_isSessionSavedOnNext );
	}
	
	override private function _init():Void 
	{
		super._init();
		isPauseable = true;
		isMuteable = true;
		
		_kernel.audio.start( "Music", EAudioChannel.MUSIC, -1, 0, .5, 0, true );
		
		var l_clouds:Clouds = new Clouds( _kernel );
		addEntity( l_clouds, true, 1 );
		
		var l_trees:Trees = new Trees( _kernel );
		addEntity( l_trees, true, 2 );
		
		var l_grass:Grass = new Grass( _kernel );
		addEntity( l_grass, true, 3 );
		
		var l_flowers:Flowers = new Flowers( _kernel );
		addEntity( l_flowers, true, 4 );
		
		var l_bee:Bee = new Bee( _kernel);
		addEntity( l_bee, true, 5 );	
	}
	
}
