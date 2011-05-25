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

package demo.gui;
import awe6.extras.gui.Shine;
import awe6.extras.gui.Text;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.EKey;
import awe6.interfaces.ETextStyle;
import awe6.interfaces.IKernel;
import awe6.extras.gui.GuiEntity;
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;

class Button extends awe6.extras.gui.Button
{
	private var _shine:Shine;
	private var _isShineEnabled:Bool;

	public function new( kernel:IKernel, ?key:EKey, ?onClick:Void->Void, ?onRollOver:Void->Void, ?onRollOut:Void->Void, ?label:String, ?isShineEnabled:Bool = true )
	{
		_isShineEnabled = isShineEnabled;
		super( kernel, key, onClick, onRollOver, onRollOut, label, 120, 35, 9, 9 );
	}
	
	override private function _init():Void
	{
		super._init();
		if ( _isShineEnabled )
		{
			_shine = new Shine( _kernel, width, height, _kernel.assets.getAsset( "ButtonShine" ) );
			addEntity( _shine, true, 1 );
		}
	}
	
	override private function _createButtonState( ?isOver:Bool = false ):Sprite
	{
		var l_result:Sprite = new Sprite();
		var l_bitmapData:BitmapData;
		l_bitmapData = isOver ? cast _kernel.assets.getAsset( "ButtonOver" ) : cast _kernel.assets.getAsset( "ButtonUp" );
		l_result.addChild( new Bitmap( l_bitmapData ) );		
		var l_text:Text = new Text( _kernel, width - ( 2 * _marginWidth ), height - ( 2 * _marginHeight ), label, _kernel.factory.createTextStyle( ETextStyle.BUTTON ) );
		l_text.setPosition( _marginWidth, _marginHeight );
		l_result.addChild( cast( l_text, GuiEntity)._sprite ); // safe ancestry cast
		return l_result;
	}
	
	override public function onClick():Void
	{
		super.onClick();
		_kernel.audio.start( "ButtonDown", EAudioChannel.INTERFACE );
	}
	
	override public function onRollOver():Void
	{
		super.onRollOver();
		_kernel.audio.start( "ButtonOver", EAudioChannel.INTERFACE );
	}
	
}