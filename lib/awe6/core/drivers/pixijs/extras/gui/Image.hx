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

package awe6.core.drivers.pixijs.extras.gui;
import awe6.interfaces.IKernel;
import pixi.core.Pixi.BlendModes;
import pixi.core.sprites.Sprite;
import pixi.core.textures.Texture;

class Image extends GuiEntity 
{	
	public var alpha( get, set ):Float;
	
	private var _texture:Texture;
	private var _sprite:Sprite;
	private var _isAdd:Bool;
	
	public function new( p_kernel:IKernel, p_texture:Texture, p_isAdd:Bool = false, p_alpha:Float = 1 )
	{
		_texture = p_texture;
		_isAdd = p_isAdd;
		super( p_kernel, false );
		alpha = p_alpha;
	}
	
	override private function _init():Void 
	{
		super._init();
		_context.interactive = false;
		configure( _texture, _isAdd );
	}
	
	public function configure( p_texture:Texture, p_isAdd:Bool = false ):Void
	{
		_texture = p_texture;
		_isAdd = p_isAdd;
		if ( ( _sprite != null ) && ( _sprite.parent != null ) )
		{
			_sprite.parent.removeChild( _sprite );
		}
		_sprite = new Sprite( _texture );
		_sprite.blendMode = _isAdd ? BlendModes.ADD : BlendModes.NORMAL;
		if ( _sprite.image != null )
		{
			width = _sprite.width;
			height = _sprite.height;
		}
		_context.addChild( _sprite );
	}
	
	private function get_alpha():Float
	{
		return _sprite.alpha;
	}
	
	private function set_alpha( p_value:Float ):Float
	{
		return _sprite.alpha = p_value;
	}
}