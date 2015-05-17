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

package demo.scenes;
import awe6.core.drivers.createjs.extras.gui.Text;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EMessage;
import awe6.interfaces.EScene;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IEntity;
import awe6.interfaces.IKernel;
import demo.entities.Sphere;

class Game extends AScene
{
	public static inline var TIME_LIMIT = 30;
	private var _timer:Text;
	private var _score:Int;
	
	public function new( p_kernel:IKernel, p_type:EScene, p_isPauseable:Bool = false, p_isMuteable:Bool = true, p_isSessionSavedOnNext:Bool = false ) 
	{
		super( p_kernel, p_type, p_isPauseable, p_isMuteable, p_isSessionSavedOnNext );
	}

	override private function _init():Void
	{
		super._init();
		isPauseable = true;
		isSessionSavedOnNext = true;
		_session.isWin = false;
		var l_textStyle = _kernel.factory.createTextStyle( ETextStyle.SUBHEAD );
		_timer = new Text( _kernel, _kernel.factory.width, 50, Std.string( _tools.convertAgeToFormattedTime( 0 ) ), l_textStyle );
		_timer.y = 70;
		addEntity( _timer, true, 1000 );

		_kernel.audio.stop( "MusicMenu", EAudioChannel.MUSIC );
		_kernel.audio.start( "MusicGame", EAudioChannel.MUSIC, -1, 0, .5, 0, true );
		for ( i in 0...10 )
		{
			addEntity( new Sphere( _kernel ), true, i + 10 );
		}
		_kernel.messenger.addSubscriber( _entity, EMessage.INIT, handleSphere, Sphere );
		_kernel.messenger.addSubscriber( _entity, EMessage.DISPOSE, handleSphere, Sphere );
	}
	
	public function handleSphere( p_message:EMessage, p_sender:IEntity ):Bool
	{
//		trace( p_message + " " + p_sender );
		return true;
	}
	

	override private function _updater( p_deltaTime:Int = 0 ):Void
	{
		super._updater( p_deltaTime );
		_score = Std.int( _tools.limit( ( 1000 * TIME_LIMIT ) - _age, 0, _tools.BIG_NUMBER ) );
		if ( _score == 0 )
		{
			_gameOver();
		}
		_timer.text = _tools.convertAgeToFormattedTime( _age );
		var l_spheres:Array<Sphere> = getEntitiesByClass( Sphere );
		if ( ( l_spheres == null ) || ( l_spheres.length == 0 ) )
		{
			_gameOver();
		}
	}

	override private function _disposer():Void
	{
		_kernel.audio.stop( "MusicGame", EAudioChannel.MUSIC );
		super._disposer();
	}

	private function _gameOver():Void
	{
		if ( _score > _session.highScore )
		{
			_session.isWin = true;
			_session.highScore = _score;
		}
		_kernel.scenes.next();
	}

}
