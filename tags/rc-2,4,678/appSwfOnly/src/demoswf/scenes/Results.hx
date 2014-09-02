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

package demoswf.scenes;
import awe6.extras.gui.Text;
import awe6.interfaces.ETextStyle;
import demoswf.gui.Button;

class Results extends AScene
{

	override private function _init():Void
	{
		super._init();
		var l_button:Button = new Button( _kernel, _kernel.factory.keyNext, 0, 0, _kernel.scenes.next, null, null, _kernel.getConfig( "gui.buttons.next" ) );
		l_button.setPosition( ( _kernel.factory.width - l_button.width ) / 2, ( _kernel.factory.height - l_button.height ) / 2 );
		addEntity( l_button, true, 1 );

		var l_message:String = _kernel.getConfig( "gui.scenes.results." + ( _session.isWin ? "win" : "lose" ) ) + _tools.convertAgeToFormattedTime( ( 1000 * Game.TIME_LIMIT ) - _session.highScore );
		var l_result:Text = new Text( _kernel, _kernel.factory.width, 50, l_message, _kernel.factory.createTextStyle( ETextStyle.SUBHEAD ) );
		l_result.y = 70;
		addEntity( l_result, true, 2 );

	}

}
