
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
	
class Profiler extends Sprite
{
	private static inline var BG_COLOR = 0x55000000;
	private static inline var FPS_COLOR = 0xFFFFFF;
	private static inline var MS_COLOR = 0xFFFFFF00;
	private static inline var MEM_COLOR = 0xFFFF0000;	
	
	private var graph:BitmapData;		
	private var fpsText:TextField;
	private var msText:TextField;
	private var memText:TextField;
	private var format:TextFormat;
		
	private var fps:Int;
	private var timer:Int;
	private var ms:Int;
	private var msPrev:Int;
	private var mem:Float;

	public function new()
	{
		super ();
		this.alpha = 0;
		msPrev = 0;
		mem = 0;
		
		graph = new BitmapData( 60, 50, true, BG_COLOR );
		var gBitmap:Bitmap = new Bitmap( graph );
		gBitmap.y = 35;
		addChild(gBitmap);

		format = new TextFormat( "_sans", 9 );

		graphics.beginFill( BG_COLOR );
		graphics.drawRect(0, 0, 60, 35 /*50*/);
		graphics.endFill();

		fpsText = new TextField();
		msText = new TextField();
		memText = new TextField();

		fpsText.defaultTextFormat = msText.defaultTextFormat = memText.defaultTextFormat = format;
		fpsText.width = msText.width = memText.width = 60;
		fpsText.selectable = msText.selectable = memText.selectable = false;

		fpsText.textColor = FPS_COLOR;
		fpsText.text = "FPS: ";
		addChild( fpsText );

		msText.y = 10;
		msText.textColor = MS_COLOR;
		msText.text = "MS: ";
		addChild( msText );

		memText.y = 20;
		memText.textColor = MEM_COLOR;
		memText.text = "MEM: ";
		addChild( memText );

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
		fpsText.text = "FPS: " + fps + " / " + stage.frameRate;
	}	
		
	private function update( e:Event ):Void
	{
		if ( stage == null ) return;
		if ( alpha < 1 ) alpha += .05;
//		if ( stage != null ) x = stage.stageWidth - 60;
		timer = Lib.getTimer();
		fps++;

		if ( timer - 1000 > msPrev )
		{
			msPrev = timer;
			mem = Std.int ( ( System.totalMemory / 1048576 ) * 1000 ) / 1000;

			var fpsGraph : Int = Std.int( Math.min( 50, 50 / stage.frameRate * fps ) );
			var memGraph : Int = Std.int( Math.min( 50, Math.sqrt( Math.sqrt( mem * 5000 ) ) ) ) - 2;

			graph.scroll( 1, 0 );
			graph.fillRect( new Rectangle( 0, 0, 1, graph.height ), BG_COLOR );
			graph.setPixel( 0, graph.height - fpsGraph, FPS_COLOR );
			graph.setPixel( 0, graph.height - ( ( timer - ms ) >> 1 ), MS_COLOR );
			graph.setPixel( 0, graph.height - memGraph, MEM_COLOR );

			fpsText.text = "FPS: " + fps + " / " + stage.frameRate;
			memText.text = "MEM: " + mem;

			fps = 0;
		}

		msText.text = "MS: " + ( timer - ms );
		ms = timer;
	}
}
