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
import awe6.core.BasicButton;
import awe6.interfaces.EScene;
import awe6.interfaces.IKernel;
//import demo.entities.TestA;
//import demo.entities.TestB;
import demo.gui.Button;

class Intro extends AScene
{
	
	public function new( kernel:IKernel, type:EScene ) 
	{
		super( kernel, type );
	}
	
	override private function _init():Void 
	{
		super._init();	
		#if flash
		var l_button:Button = new Button( _kernel, _kernel.factory.keyNext, _kernel.scenes.next, null, null, _kernel.getConfig( "gui.buttons.next" ) );
		l_button.setPosition( ( _kernel.factory.width - l_button.width ) / 2, ( _kernel.factory.height - l_button.height ) / 2 );
		addEntity( l_button, true, 1 );
		#end
/*		var l_a:TestA = new TestA( _kernel );
		var l_b:TestB = new TestB( _kernel, l_a );
		addEntity( l_a );
		addEntity( l_b );*/

	}
	
	override private function _updater( ?deltaTime:Int = 0 ):Void 
	{
		super._updater( deltaTime );
	}
	
}