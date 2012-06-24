package demo;
import awe6.core.APreloader;
import assets.PreloaderMovieClip;

/**
 * ...
 * @author Robert Fell
 */

class Preloader extends APreloader 
{
	private var _preloaderMovieClip:PreloaderMovieClip;

	override private function _init():Void 
	{
		super._init();
		_preloaderMovieClip = new PreloaderMovieClip();
		_preloaderMovieClip.progress.stop();
		_preloaderMovieClip.x = ( _kernel.factory.width - _preloaderMovieClip.width ) / 2;
		_preloaderMovieClip.y = ( _kernel.factory.height - _preloaderMovieClip.height ) / 2;
		_context.addChild( _preloaderMovieClip );
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _preloaderMovieClip != null ) 
		{
			_preloaderMovieClip.progress.gotoAndStop( Std.int( 100 * progress ) );
		}
	}	
}
