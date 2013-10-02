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
import awe6.extras.gui.Text;
import awe6.interfaces.EJoypadButton;
import awe6.interfaces.EKey;
import awe6.interfaces.ETextStyle;
import demo.gui.Button;

class Intro extends AScene
{
	private var _button:Button;

	override private function _init():Void
	{
		_kernel.session = _kernel.factory.createSession( "Basic" );
		super._init();

		var l_result:Text = new Text( _kernel, _kernel.factory.width, 50, _kernel.getConfig( "gui.scenes.intro.instructions" ), _kernel.factory.createTextStyle( ETextStyle.SUBHEAD ) );
		l_result.y = 70;
		addEntity( l_result, true, 2 );

		_button = new Button( _kernel, _kernel.factory.keyNext, 0, 0, _kernel.scenes.next, null, null, _kernel.getConfig( "gui.buttons.start" ) );
		_button.setPosition( ( _kernel.factory.width - _button.width ) / 2, ( _kernel.factory.height - _button.height ) / 2 );
		addEntity( _button, true, 1 );
	}

	override private function _updater( p_deltaTime:Int = 0 ):Void
	{
		super._updater( p_deltaTime );
		/* example:
		if ( _kernel.inputs.keyboard.getIsKeyRelease( _kernel.factory.keyNext ) )
		{
			_kernel.scenes.next();
		}
        */
		if ( _kernel.inputs.keyboard.getIsKeyRelease( EKey.F ) )
		{
			_kernel.isFullScreen = !_kernel.isFullScreen;
		}
		
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.UP ) )
		{
			_button.y--;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.RIGHT ) )
		{
			_button.x++;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.DOWN ) )
		{
			_button.y++;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.LEFT ) )
		{
			_button.x--;
		}
		if ( _kernel.inputs.joypad.getIsButtonDown( EJoypadButton.FIRE ) )
		{
			_button.setPosition( _button.x + Std.random( 10 ) - 5, _button.y + Std.random( 10 ) - 5 );
		}
		if ( _kernel.inputs.joypad.getIsButtonRelease( EJoypadButton.FIRE ) )
		{
			_button.setPosition( _button.x + Std.random( 100 ) - 50, _button.y + Std.random( 100 ) - 50 );
		}

	}
}
