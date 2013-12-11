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

package democreatejs.scenes;
import awe6.core.Scene;
import awe6.interfaces.EAudioChannel;
import awe6.interfaces.ETextStyle;
import democreatejs.AssetManager;
import democreatejs.gui.Text;
import democreatejs.Session;

class AScene extends Scene
{
	private var _assetManager:AssetManager;
	private var _session:Session;
	private var _title:Text;
	private var _isMusic:Bool;

	override private function _init():Void
	{
		super._init();
		_assetManager = cast( _kernel.assets, AssetManager );
		_session = cast( _kernel.session, Session );
		var l_sceneType: String = _tools.toCamelCase( Std.string( type ) );
		var l_titleText: String = _kernel.getConfig( "gui.scenes." + l_sceneType + ".title" );
		if ( l_titleText != null )
		{
			_title = new Text( _kernel, _kernel.factory.width, 50, l_titleText, _kernel.factory.createTextStyle( ETextStyle.HEADLINE ) );
			_title.y = 40;
			addEntity( _title, true, 100 );
		}

		view.addChild( _assetManager.background, 0 );

		_kernel.audio.start( "MusicMenu", EAudioChannel.MUSIC, -1, 0, .125, 0, true );
	}

}
