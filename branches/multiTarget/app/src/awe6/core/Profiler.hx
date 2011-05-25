
package awe6.core;

// Werner Avenant based on net.hires.utils.Stats by Mr.doob & Theo v1.3

import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.geom.Rectangle;
import flash.system.System;
import flash.text.TextField;
import flash.text.TextFormat;
import flash.Lib;
	
/**
 * The Profiler class provides debug information.
 * @author	Robert Fell
 * @author	Werner Avenant
 * @author	Mr.doob
 * @author	Theo
 */
class Profiler extends Sprite
{
	private static inline var _BG_COLOR = 0x55000000;
	private static inline var _FPS_COLOR = 0xFFFFFF;
	private static inline var _MS_COLOR = 0xFFFFFF00;
	private static inline var _MEM_COLOR = 0xFFFF0000;	
	
	private var _graph:BitmapData;		
	private var _fpsText:TextField;
	private var _msText:TextField;
	private var _memText:TextField;
	private var _format:TextFormat;
		
	private var _fps:Int;
	private var _timer:Int;
	private var _ms:Int;
	private var _msPrev:Int;
	private var _mem:Float;

	public function new()
	{
		super ();
		this.alpha = 0;
		_msPrev = 0;
		_mem = 0;
		
		_graph = new BitmapData( 60, 50, true, _BG_COLOR );
		var gBitmap:Bitmap = new Bitmap( _graph );
		gBitmap.y = 35;
		addChild(gBitmap);

		_format = new TextFormat( "_sans", 9 );

		graphics.beginFill( _BG_COLOR );
		graphics.drawRect(0, 0, 60, 35 /*50*/);
		graphics.endFill();

		_fpsText = new TextField();
		_msText = new TextField();
		_memText = new TextField();

		_fpsText.defaultTextFormat = _msText.defaultTextFormat = _memText.defaultTextFormat = _format;
		_fpsText.width = _msText.width = _memText.width = 60;
		_fpsText.selectable = _msText.selectable = _memText.selectable = false;

		_fpsText.textColor = _FPS_COLOR;
		_fpsText.text = "FPS: ";
		addChild( _fpsText );

		_msText.y = 10;
		_msText.textColor = _MS_COLOR;
		_msText.text = "MS: ";
		addChild( _msText );

		_memText.y = 20;
		_memText.textColor = _MEM_COLOR;
		_memText.text = "MEM: ";
		addChild( _memText );

		addEventListener( MouseEvent.CLICK, mouseHandler );
		addEventListener( Event.ENTER_FRAME, update );
		
		x = y = 2;
	}
		
	private function mouseHandler( e:MouseEvent ):Void
	{
		if (this.mouseY > this.height * .35)
		{
			stage.frameRate --;
		}
		else
		{
			stage.frameRate ++;
		}
		_fpsText.text = "FPS: " + _fps + " / " + stage.frameRate;
	}	
		
	private function update( e:Event ):Void
	{
		if ( stage == null ) return;
		if ( alpha < 1 ) alpha += .05;
//		if ( stage != null ) x = stage.stageWidth - 60;
		_timer = Lib.getTimer();
		_fps++;

		if ( _timer - 1000 > _msPrev )
		{
			_msPrev = _timer;
			_mem = Std.int ( ( System.totalMemory / 1048576 ) * 1000 ) / 1000;

			var fpsGraph : Int = Std.int( Math.min( 50, 50 / stage.frameRate * _fps ) );
			var memGraph : Int = Std.int( Math.min( 50, Math.sqrt( Math.sqrt( _mem * 5000 ) ) ) ) - 2;

			_graph.scroll( 1, 0 );
			_graph.fillRect( new Rectangle( 0, 0, 1, _graph.height ), _BG_COLOR );
			_graph.setPixel( 0, _graph.height - fpsGraph, _FPS_COLOR );
			_graph.setPixel( 0, _graph.height - ( ( _timer - _ms ) >> 1 ), _MS_COLOR );
			_graph.setPixel( 0, _graph.height - memGraph, _MEM_COLOR );

			_fpsText.text = "FPS: " + _fps + " / " + stage.frameRate;
			_memText.text = "MEM: " + _mem;

			_fps = 0;
		}

		_msText.text = "MS: " + ( _timer - _ms );
		_ms = _timer;
	}
}
