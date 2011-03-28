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

package demo.scenes;
import awe6.core.Scene;
import awe6.extras.gui.Image;
import awe6.extras.gui.Text;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EScene;
import awe6.interfaces.IKernel;
import demo.Session;
import demo.entities.Sphere;

class Game extends Scene
{
	public static inline var TIME_LIMIT = 30;
	private var _session:Session;
	private var _timer:Text;
	private var _score:Int;
	
	public function new( kernel:IKernel, type:EScene ) 
	{
		_session = cast kernel.session;
		super( kernel, type, true, true, true );
	}
	
	override private function _init():Void 
	{
		super._init();
		_session.isWin = false;
		addEntity( new Image( _kernel, _kernel.assets.getAsset( "Background" ) ), true, 0 );
		_timer = new Text( _kernel, _kernel.factory.width, 50, "", _kernel.factory.createTextStyle() );
		_timer.y = 10;
		addEntity( _timer, true, 1000 );
		
		_kernel.audio.stop( "MusicMenu", EAudioChannel.MUSIC );
		_kernel.audio.start( "MusicGame", EAudioChannel.MUSIC, -1, 0, .5, 0, true );
		for ( i in 0...10 ) addEntity( new Sphere( _kernel ), true, i + 10 );
	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
		_score = Std.int( _tools.limit( ( _kernel.factory.targetFramerate * TIME_LIMIT ) - _updates, 0, _tools.BIG_NUMBER ) );
		if ( _score == 0 ) _gameOver();
		_timer.text = _tools.convertUpdatesToTime( _updates );
		var l_spheres:Array<Sphere> = getEntitiesByClass( Sphere );
		if ( l_spheres.length == 0 ) _gameOver();
	}
	
	private function _gameOver():Void
	{
		_kernel.audio.stop( "MusicGame", EAudioChannel.MUSIC );
		if ( _score > _session.highScore )
		{
			_session.isWin = true;
			_session.highScore = _score;
		}
		_kernel.scenes.next();
	}
	
}