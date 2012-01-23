package awe6.core;

class FullscreenMode
{
	public var screenWidth:Int;
	public var screenHeight:Int;
	public var screenBpp:Int;
	public var monitorFrequency:Int;

	public function new( p_screenWidth:Int,
							p_screenHeight:Int,
							p_screenBpp:Int,
							p_monitorFrequency:Int ):Void
	{
		screenWidth = p_screenWidth;
		screenHeight = p_screenHeight;
		screenBpp = p_screenBpp;
		monitorFrequency = p_monitorFrequency;
	}

	public function toString()
	{
		return Std.string(screenWidth) + "x" + Std.string(screenHeight)
				+ "@" + Std.string(screenBpp) + "bpp"
				+ " (" + monitorFrequency + " Hz)";
	}

	public static function fromJson( p_json:Dynamic ):FullscreenMode
	{
		return new FullscreenMode(
				p_json.screen_width,
				p_json.screen_height,
				p_json.screen_bpp,
				p_json.monitor_frequency
			);
	}

	public static function toJson( p_fullscreenMode:FullscreenMode ):Dynamic
	{
		return {
			screen_width: p_fullscreenMode.screenWidth,
			screen_height: p_fullscreenMode.screenHeight,
			screen_bpp: p_fullscreenMode.screenBpp,
			monitor_frequency: p_fullscreenMode.monitorFrequency
		};
	}
}
