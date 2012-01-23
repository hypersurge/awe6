package awe6.core;

import hxjson2.JSON;

/**
 *
 */
class AFactory
{
	public var title( default, null ):String;
	public var developer( default, null ):String;
	public var publisher( default, null ):String;
	public var version( default, null ):VersionInfo;
	public var briefDescription( default, null ):String;
	public var detailedDescription( default, null ):String;
	public var credits( default, null ):CreditsInfo;
	public var backgroundColor( default, null ):Int;
	public var encryptionData( default, null ):Dynamic;
	public var supportsFullscreen( default, null ):Bool;
	public var supportedFullscreenModes( default, null ):Array<FullscreenMode>;
	public var supportedScreenSizes( default, null ): Dynamic;
	public var supportsResizing( default, null ):Bool;
	public var defaultFullscreen( default, null ):Bool;
	public var defaultFullscreenMode( default, null ):FullscreenMode;
	public var defaultSize( default, null ):Array<Int>;
	public var supportsFrameRateCapping( default, null ):Bool;
	public var defaultFrameRate( default, null ):Int;

	public var config( default, null ):Dynamic;
	public var kernel( default, null ):AKernel;

	public function new()
	{
	}
}
