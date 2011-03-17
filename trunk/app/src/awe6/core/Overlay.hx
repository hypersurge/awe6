/*
 * Copyright (c) 2010, Robert Fell, awe6.org
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

package awe6.core;
import awe6.interfaces.EOverlayButton;
import awe6.interfaces.IKernel;
import awe6.interfaces.IOverlay;
import awe6.interfaces.IView;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.BlendMode;
import flash.display.SimpleButton;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.filters.BlurFilter;

/**
 * The Overlay class provides a minimalist implementation of the IOverlay interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class Overlay extends Process, implements IOverlay
{
	public var view:IView;
	
	private var _sprite:Sprite;
	private var _background:Bitmap;
	private var _progresserSprite:Sprite;
	private var _pauserSprite:Sprite;
	private var _pauserSnapshot:BitmapData;
	private var _pauseColor:UInt;
	private var _pauseAlpha:Float;
	private var _pauseBlur:Float;
	private var _flasher:Sprite;
	private var _flasherDuration:Float;
	private var _flasherAlpha:Float;
	private var _flasherStartingAlpha:Float;
	private var _flasherStartingDuration:Float;
	private var _flasherAsTime:Bool;
	private var _wasMute:Bool;
	
	private var _buttonBack:SimpleButton;
	private var _buttonMute:SimpleButton;
	private var _buttonUnmute:SimpleButton;
	private var _buttonPause:SimpleButton;
	private var _buttonUnpause:SimpleButton;
	
	public function new( kernel:IKernel, ?background:BitmapData, ?backUp:BitmapData, ?backOver:BitmapData, ?muteUp:BitmapData, ?muteOver:BitmapData, ?unmuteUp:BitmapData, ?unmuteOver:BitmapData, ?pauseUp:BitmapData, ?pauseOver:BitmapData, ?unpauseUp:BitmapData, ?unpauseOver:BitmapData, ?pauseBlur:Float = 8, ?pauseColor:UInt = 0x000000, ?pauseAlpha:Float = .35  )
	{
		_background = new Bitmap( background );
		_buttonBack = new SimpleButton( new Bitmap( backUp ), new Bitmap( backOver ), new Bitmap( backOver ), new Bitmap( backUp ) );
		_buttonMute = new SimpleButton( new Bitmap( muteUp ), new Bitmap( muteOver ), new Bitmap( muteOver ), new Bitmap( muteUp ) );
		_buttonUnmute = new SimpleButton( new Bitmap( unmuteUp ), new Bitmap( unmuteOver ), new Bitmap( unmuteOver ), new Bitmap( unmuteUp ) );
		_buttonPause = new SimpleButton( new Bitmap( pauseUp ), new Bitmap( pauseOver ), new Bitmap( pauseOver ), new Bitmap( pauseUp ) );
		_buttonUnpause = new SimpleButton( new Bitmap( unpauseUp ), new Bitmap( unpauseOver ), new Bitmap( unpauseOver ), new Bitmap( unpauseUp ) );
		_pauseBlur = pauseBlur;
		_pauseColor = pauseColor;
		_pauseAlpha = pauseAlpha;
		super( kernel );
	}
	
	override private function _init():Void 
	{
		super._init();
		_wasMute = _kernel.audio.isMute;
		
		_progresserSprite = new Sprite();
		_progresserSprite.visible = false;
		
		_pauserSprite = new Sprite();
		_pauserSprite.visible = false;
		_pauserSprite.mouseEnabled = false;
		_pauserSnapshot = new BitmapData( _kernel.factory.width, _kernel.factory.height, true, 0x00 );
		var l_bitmap:Bitmap = new Bitmap( _pauserSnapshot );
		l_bitmap.filters = [ new BlurFilter( _pauseBlur, _pauseBlur, 3 ) ];
		_pauserSprite.addChild( l_bitmap );
		var l_color:Sprite = new Sprite();
		l_color.graphics.beginFill( _pauseColor, _pauseAlpha );
		l_color.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );		
		_pauserSprite.addChild( l_color );
		
		_flasher = new Sprite();
		_flasher.mouseEnabled = false;
		_flasher.blendMode = BlendMode.ADD;
		_flasher.graphics.beginFill( 0xFFFFFF );
		_flasher.graphics.drawRect( 0, 0, _kernel.factory.width, _kernel.factory.height );
		_flasherStartingAlpha = 1;
		_flasherAsTime = true;
		_flasherDuration = _flasherStartingDuration = 100;
		
		_buttonBack.addEventListener( MouseEvent.CLICK, _onClickBack );
		_buttonMute.addEventListener( MouseEvent.CLICK, _onClickMute );
		_buttonUnmute.addEventListener( MouseEvent.CLICK, _onClickUnmute );
		_buttonPause.addEventListener( MouseEvent.CLICK, _onClickPause );
		_buttonUnpause.addEventListener( MouseEvent.CLICK, _onClickUnpause );
		
		_sprite = new Sprite();
		_sprite.mouseEnabled = false;
		_sprite.addChild( _flasher );
		_sprite.addChild( _pauserSprite );
		_sprite.addChild( _progresserSprite );
		_sprite.addChild( _background );
		_sprite.addChild( _buttonBack );
		_sprite.addChild( _buttonUnmute );
		_sprite.addChild( _buttonMute );
		_sprite.addChild( _buttonUnpause );
		_sprite.addChild( _buttonPause );
		
		var l_height:Float = _buttonBack.upState.height;
		var l_width:Float = _buttonBack.upState.width;
		var l_x:Float = _kernel.factory.width - ( l_width * 4 );
		var l_y:Float = l_height;
		positionButton( EOverlayButton.BACK, l_x, l_y );
		positionButton( EOverlayButton.MUTE, l_x += l_width, l_y );
		positionButton( EOverlayButton.UNMUTE, l_x, l_y );
		positionButton( EOverlayButton.PAUSE, l_x += l_width, l_y );
		positionButton( EOverlayButton.UNPAUSE, l_x, l_y );
		
		view = new View( _kernel, _sprite );
	}
	
	private function _onClickBack( event:MouseEvent ):Void { activateButton( EOverlayButton.BACK ); }
	private function _onClickMute( event:MouseEvent ):Void { activateButton( EOverlayButton.MUTE ); }
	private function _onClickUnmute( event:MouseEvent ):Void { activateButton( EOverlayButton.UNMUTE ); }
	private function _onClickPause( event:MouseEvent ):Void { activateButton( EOverlayButton.PAUSE ); }
	private function _onClickUnpause( event:MouseEvent ):Void { activateButton( EOverlayButton.UNPAUSE ); }
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		if ( _flasherDuration > 0 )
		{
			_flasherDuration -= _flasherAsTime ? deltaTime : 1;
			_flasherAlpha = _tools.limit( _flasherStartingAlpha * ( _flasherDuration / _flasherStartingDuration ), 0, 1 );
		}
		_flasher.alpha = _flasherAlpha;
		if ( ( _kernel.factory.keyBack != null ) && ( _kernel.inputs.keyboard.getIsKeyPress( _kernel.factory.keyBack ) ) ) activateButton( _kernel.isActive ? EOverlayButton.BACK : EOverlayButton.UNPAUSE );
		if ( ( _kernel.factory.keyPause != null ) && ( _kernel.inputs.keyboard.getIsKeyPress( _kernel.factory.keyPause ) ) ) activateButton( _kernel.isActive ? EOverlayButton.PAUSE : EOverlayButton.UNPAUSE );
		if ( ( _kernel.factory.keyMute != null ) && ( _kernel.inputs.keyboard.getIsKeyPress( _kernel.factory.keyMute ) ) ) activateButton( _kernel.audio.isMute ? EOverlayButton.UNMUTE : EOverlayButton.MUTE );
	}
	
	override private function _disposer():Void 
	{
		_buttonBack.removeEventListener( MouseEvent.CLICK, _onClickBack );
		_buttonMute.removeEventListener( MouseEvent.CLICK, _onClickMute );
		_buttonUnmute.removeEventListener( MouseEvent.CLICK, _onClickUnmute );
		_buttonPause.removeEventListener( MouseEvent.CLICK, _onClickPause );
		_buttonUnpause.removeEventListener( MouseEvent.CLICK, _onClickUnpause );
		view.dispose();
		super._disposer();		
	}
	
	private function _getButton( type:EOverlayButton ):SimpleButton
	{
		return switch( type )
		{
			case BACK : _buttonBack;
			case MUTE : _buttonMute;
			case UNMUTE : _buttonUnmute;
			case PAUSE : _buttonPause;
			case UNPAUSE : _buttonUnpause;
			case SUB_TYPE( value ) : null;
		}		
	}
	
	public function showButton( type:EOverlayButton, ?isVisible:Bool = true ):Void
	{
		_getButton( type ).visible = isVisible;
	}
	
	public function positionButton( type:EOverlayButton, x:Float, y:Float, ?alpha:Float ):Void
	{
		var l_button:SimpleButton = _getButton( type );
		l_button.x = x;
		l_button.y = y;
		if ( alpha != null ) l_button.alpha = alpha;		
	}
	
	public function showProgress( progress:Float, ?message:String ):Void
	{
		_progresserSprite.visible = progress < 1;		
	}
	
	public function hideButtons():Void
	{
		showButton( EOverlayButton.BACK, false );
		showButton( EOverlayButton.MUTE, false );
		showButton( EOverlayButton.UNMUTE, false );
		showButton( EOverlayButton.PAUSE, false );
		showButton( EOverlayButton.UNPAUSE, false );
	}
	
	public function flash( ?duration:Float, ?asTime:Bool = false, ?startingAlpha:Float = 1 ):Void
	{
		duration = ( duration != null ) ? duration : asTime ? 500 : _kernel.factory.targetFramerate * .5;
		_flasherDuration = _flasherStartingDuration = duration;
		_flasherAsTime = asTime;
		_flasherAlpha = _flasherStartingAlpha = _tools.limit( startingAlpha, 0, 1 );
	}
	
	public function activateButton( type:EOverlayButton ):Void
	{
		switch( type )
		{
			case BACK : if ( _buttonBack.visible )
			{
				_drawPause( false );
				_kernel.resume();
				_kernel.scenes.back();
			}
			case MUTE : if ( _buttonMute.visible )
			{
				showButton( EOverlayButton.MUTE, false );
				showButton( EOverlayButton.UNMUTE, true );
				_kernel.audio.isMute = true;
			}
			case UNMUTE : if ( _buttonUnmute.visible && _buttonPause.visible )
			{
				showButton( EOverlayButton.MUTE, true );
				showButton( EOverlayButton.UNMUTE, false );
				_kernel.audio.isMute = false;
			}
			case PAUSE : if ( _buttonPause.visible )
			{
				_wasMute = _kernel.audio.isMute;
				showButton( EOverlayButton.PAUSE, false );
				showButton( EOverlayButton.UNPAUSE, true );
				_kernel.pause();
				_drawPause( true );
				activateButton( EOverlayButton.MUTE );
			}
			case UNPAUSE : if ( _buttonUnpause.visible )
			{
				showButton( EOverlayButton.PAUSE, true );
				showButton( EOverlayButton.UNPAUSE, false );
				_kernel.resume();
				_drawPause( false );
				activateButton( _wasMute ? EOverlayButton.MUTE : EOverlayButton.UNMUTE );
			}
			case SUB_TYPE( value ) :
		}
	}
	
	private function _drawPause( ?isVisible:Bool = true ):Void
	{
		_pauserSprite.visible = isVisible;
		if ( !isVisible ) return;
		_pauserSnapshot.fillRect( _pauserSnapshot.rect, 0x00 );
		try { _pauserSnapshot.draw( cast( _kernel.scenes.scene.view, View ).sprite ); }
		catch ( error:Dynamic ) {}
	}
	
}

