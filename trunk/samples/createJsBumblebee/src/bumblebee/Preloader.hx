package bumblebee;
import awe6.core.APreloader;
import awe6.core.drivers.createjs.extras.gui.Text;
import awe6.interfaces.ETextStyle;
import createjs.easeljs.Shape;

/**
 * ...
 * @author valerie.elimak - blog.elimak.com
 */

class Preloader extends APreloader 
{
	private var _bg:Shape;
	private var _fg:Shape;
	private var _isLaunched:Bool;

	override private function _init():Void 
	{
		super._init();
		_bg = new Shape();
		_bg.graphics.beginFill( "#202020" );
		_bg.graphics.drawRect( 0, 0, 100, 10 );
		_bg.graphics.endFill();
		_fg = new Shape();
		_fg.graphics.beginFill( "#cccccc" );
		_fg.graphics.drawRect( 1, 1, 98, 8 );
		_fg.graphics.endFill();
		_bg.x = _fg.x = ( _kernel.factory.width - 100 ) * .5;
		_bg.y = _fg.y = ( _kernel.factory.height - 10 ) * .5;
		_context.addChild( _bg );
		_context.addChild( _fg );
	}
	
	override private function _updater( p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		_fg.scaleX = progress;
		if ( !_isComplete ) return;
		if ( _isLaunched ) return;
//		if ( _isDesktop || _kernel.inputs.keyboard.getIsKeyRelease( _kernel.factory.keyNext ) || _kernel.inputs.mouse.getIsButtonRelease() )  // safe to skip this as no sound required on initial scene
		{
			_isLaunched = true;
			 super._continue();
		}
	}
	
	override private function _continue():Void 
	{
		_isComplete = true;
		if ( !_isDesktop ) 
		{
			var l_text:Text = new Text( _kernel, _kernel.factory.width, 20, _kernel.getConfig( "gui.preloaderComplete" ), _kernel.factory.createTextStyle( ETextStyle.BODY ) );
			l_text.setPosition( 0, _bg.y - 5 );
			view.addChild( l_text.view );
		}
		_context.removeChild( _bg );
		_context.removeChild( _fg );
	}
	
}
