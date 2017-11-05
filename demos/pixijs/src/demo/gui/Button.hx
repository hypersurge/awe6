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

package demo.gui;
import awe6.core.BasicButton;
import awe6.core.Context;
import awe6.core.View;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EKey;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IKernel;
import awe6.interfaces.IView;
import demo.AssetManager;
import awe6.core.drivers.pixijs.extras.gui.Text;

class Button extends BasicButton
{
	public var label:String;
	private var _assetManager:AssetManager;
	private var _marginWidth:Int;
	private var _marginHeight:Int;
	private var _upView:IView;
	private var _overView:IView;
	private var _upContext:Context;
	private var _overContext:Context;

	public function new( p_kernel:IKernel, ?p_key:EKey, p_x:Float = 0, p_y:Float = 0, ?p_onClick:Void->Void, ?p_onRollOver:Void->Void, ?p_onRollOut:Void->Void, p_label:String = "" )
	{
		_assetManager = cast p_kernel.assets;
		label = p_label;
		_upContext = new Context();
		_overContext = new Context();
		_upView = new View( p_kernel, _upContext );
		_overView = new View( p_kernel, _overContext );
		super( p_kernel, _upView, _overView, 160, 40, p_x, p_y, p_key, p_onClick, p_onRollOver, p_onRollOut );
	}

	override private function _init():Void
	{
		super._init();
		_marginWidth = 10;
		_marginHeight = 12;
		_upContext.addChild( _createButtonState( false ) );
		_overContext.addChild( _createButtonState( true ) );
	}

	private function _createButtonState( p_isOver:Bool = false ):Context
	{
		var l_result:Context = new Context();
		l_result.addChild( p_isOver ? _assetManager.createButtonOver() : _assetManager.createButtonUp() );
		var l_text:Text = new Text( _kernel, width - ( 2 * _marginWidth ), height - ( 2 * _marginHeight ), label, _kernel.factory.createTextStyle( ETextStyle.BUTTON ) );
		l_text.setPosition( _marginWidth, _marginHeight );
		l_result.addChild( untyped l_text._context ); // safe ancestry cast
		return l_result;
	}

	override public function onClick():Void
	{
		_kernel.audio.start( "ButtonDown", EAudioChannel.INTERFACE );
		super.onClick();
	}

	override public function onRollOver():Void
	{
		_kernel.audio.start( "ButtonOver", EAudioChannel.INTERFACE );
		super.onRollOver();
	}
}
