/*
 *                        _____ 
 *     _____      _____  / ___/
 *    /__   | /| /   _ \/ __ \ 
 *   / _  / |/ |/ /  __  /_/ / 
 *   \___/|__/|__/\___/\____/  
 *    awe6 is game, inverted
 * 
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

package awe6.core.drivers;
import awe6.core.BasicButton;
import awe6.core.Context;
import awe6.core.Entity;
import awe6.core.View;
import awe6.interfaces.EOverlayButton;
import awe6.interfaces.IEntity;
import awe6.interfaces.IKernel;
import awe6.interfaces.IOverlayProcess;
import awe6.interfaces.IView;

/**
 * The Overlay class provides a minimalist implementation of the IOverlay interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * @author	Robert Fell
 */
class AOverlay extends Entity, implements IOverlayProcess
{
	public var pauseEntity( _get_pauseEntity, _set_pauseEntity ):IEntity;
	
	private var _borderView:IView;
	private var _progressContext:Context;
	private var _progressView:IView;
	private var _pauseContext:Context;
	private var _pauseView:IView;
	private var _flashContext:Context;
	private var _flashView:IView;
	
	private var _context:Context;
	private var _pauseColor:Int;
	private var _pauseAlpha:Float;
	private var _pauseBlur:Float;
	private var _flashDuration:Float;
	private var _flashAlpha:Float;
	private var _flashStartingAlpha:Float;
	private var _flashStartingDuration:Float;
	private var _flashAsTime:Bool;
	private var _wasMute:Bool;	
	private var _buttonBack:BasicButton;
	private var _buttonMute:BasicButton;
	private var _buttonUnmute:BasicButton;
	private var _buttonPause:BasicButton;
	private var _buttonUnpause:BasicButton;
	
	public function new( p_kernel:IKernel, ?p_buttonWidth:Float = 30.0, ?p_buttonHeight:Float = 30.0, ?p_border:IView, ?p_backUp:IView, ?p_backOver:IView, ?p_muteUp:IView, ?p_muteOver:IView, ?p_unmuteUp:IView, ?p_unmuteOver:IView, ?p_pauseUp:IView, ?p_pauseOver:IView, ?p_unpauseUp:IView, ?p_unpauseOver:IView, ?p_pauseBlur:Float = 8, ?p_pauseColor:Int = 0x000000, ?p_pauseAlpha:Float = .35  )
	{
		if ( p_border == null )
		{
			p_border = new View( p_kernel );
		}
		if ( p_backUp == null )
		{
			p_backUp = new View( p_kernel );
		}
		if ( p_backOver == null )
		{
			p_backOver = new View( p_kernel );
		}
		if ( p_muteUp == null )
		{
			p_muteUp = new View( p_kernel );
		}
		if ( p_muteOver == null )
		{
			p_muteOver = new View( p_kernel );
		}
		if ( p_unmuteUp == null )
		{
			p_unmuteUp = new View( p_kernel );
		}
		if ( p_unmuteOver == null )
		{
			p_unmuteOver = new View( p_kernel );
		}
		if ( p_pauseUp == null )
		{
			p_pauseUp = new View( p_kernel );
		}
		if ( p_pauseOver == null )
		{
			p_pauseOver = new View( p_kernel );
		}
		if ( p_unpauseUp == null )
		{
			p_unpauseUp = new View( p_kernel );
		}
		if ( p_unpauseOver == null )
		{
			p_unpauseOver = new View( p_kernel );
		}
		_borderView = p_border;
		_buttonBack = new BasicButton( p_kernel, p_backUp, p_backOver, p_buttonWidth, p_buttonHeight );
		_buttonMute = new BasicButton( p_kernel, p_muteUp, p_muteOver, p_buttonWidth, p_buttonHeight );
		_buttonUnmute = new BasicButton( p_kernel, p_unmuteUp, p_unmuteOver, p_buttonWidth, p_buttonHeight );
		_buttonPause = new BasicButton( p_kernel, p_pauseUp, p_pauseOver, p_buttonWidth, p_buttonHeight );
		_buttonUnpause = new BasicButton( p_kernel, p_unpauseUp, p_unpauseOver, p_buttonWidth, p_buttonHeight );
		_pauseBlur = p_pauseBlur;
		_pauseColor = p_pauseColor;
		_pauseAlpha = p_pauseAlpha;
		_context = new Context();
		super( p_kernel, _context );
	}
	
	override private function _init():Void 
	{
		super._init();
		view.addChild( _borderView, 4 );
		_wasMute = _kernel.audio.isMute;
		
		_driverInit();
		
		_progressView = new View( _kernel, _progressContext );
		_progressView.isVisible = false;
		
		_pauseView = new View( _kernel, _pauseContext );
		_pauseView.isVisible = false;
		
		_flashView = new View( _kernel, _flashContext );
		_flashView.isVisible = false;
		_flashStartingAlpha = 1;
		_flashAsTime = true;
		_flashDuration = _flashStartingDuration = 100;
		
		_buttonBack.onClickCallback = callback( activateButton, EOverlayButton.BACK );
		_buttonMute.onClickCallback = callback( activateButton, EOverlayButton.MUTE );
		_buttonPause.onClickCallback = callback( activateButton, EOverlayButton.PAUSE );
		_buttonUnmute.onClickCallback = callback( activateButton, EOverlayButton.UNMUTE );
		_buttonUnpause.onClickCallback = callback( activateButton, EOverlayButton.UNPAUSE );
		
		view.addChild( _flashView, 1 );
		view.addChild( _pauseView, 2 );
		view.addChild( _progressView, 3 );
		addEntity( _buttonBack, true, 21 );
		addEntity( _buttonUnmute, true, 22 );
		addEntity( _buttonMute, true, 23 );
		addEntity( _buttonUnpause, true, 24 );
		addEntity( _buttonPause, true, 25 );
		
		var l_height:Float = _buttonBack.height;
		var l_width:Float = _buttonBack.width;
		var l_x:Float = _kernel.factory.width - ( l_width * 4 );
		var l_y:Float = l_height;
		positionButton( EOverlayButton.BACK, l_x, l_y );
		positionButton( EOverlayButton.MUTE, l_x += l_width, l_y );
		positionButton( EOverlayButton.UNMUTE, l_x, l_y );
		positionButton( EOverlayButton.PAUSE, l_x += l_width, l_y );
		positionButton( EOverlayButton.UNPAUSE, l_x, l_y );
	}
	
	private function _driverInit():Void
	{
		_progressContext = new Context();
		_pauseContext = new Context();
		_flashContext = new Context();
		// override me
	}
	
	override private function _updater( ?p_deltaTime:Int = 0 ):Void 
	{
		super._updater( p_deltaTime );
		if ( _flashDuration > 0 )
		{
			_flashDuration -= _flashAsTime ? p_deltaTime : 1;
			_flashAlpha = _tools.limit( _flashStartingAlpha * ( _flashDuration / _flashStartingDuration ), 0, 1 );
		}
		_flashView.isVisible = _flashAlpha > 0;
		if ( ( _kernel.factory.keyBack != null ) && ( _kernel.inputs.keyboard.getIsKeyPress( _kernel.factory.keyBack ) ) )
		{
			activateButton( _kernel.isActive ? EOverlayButton.BACK : EOverlayButton.UNPAUSE );
		}
		if ( ( _kernel.factory.keyPause != null ) && ( _kernel.inputs.keyboard.getIsKeyPress( _kernel.factory.keyPause ) ) )
		{
			activateButton( _kernel.isActive ? EOverlayButton.PAUSE : EOverlayButton.UNPAUSE );
		}
		if ( ( _kernel.factory.keyMute != null ) && ( _kernel.inputs.keyboard.getIsKeyPress( _kernel.factory.keyMute ) ) )
		{
			activateButton( _kernel.audio.isMute ? EOverlayButton.UNMUTE : EOverlayButton.MUTE );
		}
		if ( ( pauseEntity != null ) && !_kernel.isActive )
		{
			pauseEntity.update( p_deltaTime );
			_pauseView.update( p_deltaTime );
		}
	}
	
	override private function _disposer():Void 
	{
		if ( pauseEntity != null )
		{
			pauseEntity.dispose();
		}
		view.dispose();
		super._disposer();		
	}
	
	private function _getButton( p_type:EOverlayButton ):BasicButton
	{
		return switch( p_type )
		{
			case BACK :
				_buttonBack;
			case MUTE :
				_buttonMute;
			case UNMUTE :
				_buttonUnmute;
			case PAUSE :
				_buttonPause;
			case UNPAUSE :
				_buttonUnpause;
			case SUB_TYPE( l_value ) :
				null;
		}		
	}
	
	public function showButton( p_type:EOverlayButton, ?p_isVisible:Bool = true ):Void
	{
		var l_button:BasicButton = _getButton( p_type );
		if ( l_button == null )
		{
			return;
		}
		if ( p_isVisible )
		{
			addEntity( l_button, true );
		}
		else
		{
			removeEntity( l_button, true );
		}
	}
	
	public function positionButton( p_type:EOverlayButton, p_x:Float, p_y:Float, ?p_width:Float, ?p_height:Float ):Void
	{
		var l_button:BasicButton = _getButton( p_type );
		if ( l_button == null )
		{
			return;
		}
		l_button.x = p_x;
		l_button.y = p_y;
		if ( p_width != null )
		{
			l_button.width = p_width;
		}
		if ( p_height != null )
		{
			l_button.height = p_height;
		}
	}
	
	public function showProgress( p_progress:Float, ?p_message:String ):Void
	{
		_progressView.isVisible = p_progress < 1;		
	}
	
	public function hideButtons():Void
	{
		showButton( EOverlayButton.BACK, false );
		showButton( EOverlayButton.MUTE, false );
		showButton( EOverlayButton.UNMUTE, false );
		showButton( EOverlayButton.PAUSE, false );
		showButton( EOverlayButton.UNPAUSE, false );
	}
	
	public function flash( ?p_duration:Float, ?p_asTime:Bool = true, ?p_startingAlpha:Float = 1, ?p_color:Int = 0xFFFFFF ):Void
	{
		p_duration = ( p_duration != null ) ? p_duration : p_asTime ? 500 : _kernel.factory.targetFramerate * .5;
		_flashDuration = _flashStartingDuration = p_duration;
		_flashAsTime = p_asTime;
		_flashAlpha = _flashStartingAlpha = _tools.limit( p_startingAlpha, 0, 1 );
	}
	
	public function activateButton( p_type:EOverlayButton ):Void
	{
		switch( p_type )
		{
			case BACK :
				if ( _buttonBack.view.isInViewStack )
				{
					if ( !_kernel.isActive )
					{
						activateButton( EOverlayButton.UNPAUSE );
					}
					_drawPause( false );
					_kernel.resume();
					_kernel.scenes.back();
				}
			case MUTE :
				if ( _buttonMute.view.isInViewStack )
				{
					showButton( EOverlayButton.MUTE, false );
					showButton( EOverlayButton.UNMUTE, true );
					_kernel.audio.isMute = true;
				}
			case UNMUTE :
				if ( _buttonUnmute.view.isInViewStack && !_buttonUnpause.view.isInViewStack )
				{
					showButton( EOverlayButton.MUTE, true );
					showButton( EOverlayButton.UNMUTE, false );
					_kernel.audio.isMute = false;
				}
			case PAUSE :
				if ( _buttonPause.view.isInViewStack )
				{
					_kernel.pause();
					_drawPause( true );
					_wasMute = _kernel.audio.isMute;
					showButton( EOverlayButton.PAUSE, false );
					showButton( EOverlayButton.UNPAUSE, true );
					activateButton( EOverlayButton.MUTE );
				}
			case UNPAUSE :
				if ( _buttonUnpause.view.isInViewStack )
				{
					showButton( EOverlayButton.PAUSE, true );
					showButton( EOverlayButton.UNPAUSE, false );
					activateButton( _wasMute ? EOverlayButton.MUTE : EOverlayButton.UNMUTE );
					_kernel.resume();
					_drawPause( false );
				}
			case SUB_TYPE( l_value ) :
				null;
		}
	}
	
	private function _drawPause( ?p_isVisible:Bool = true ):Void
	{
		_pauseView.isVisible = p_isVisible;
	}
	
	private function _get_pauseEntity():IEntity
	{
		return pauseEntity;
	}
	
	private function _set_pauseEntity( p_value:IEntity ):IEntity
	{
		if ( pauseEntity != null )
		{
			pauseEntity.view.remove();
		}
		pauseEntity = p_value;
		_pauseView.addChild( pauseEntity.view );
		return pauseEntity;
	}	
	
}
