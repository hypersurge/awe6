package awe6.core;

class VersionInfo
{
	public var major:Int;
	public var minor:Int;
	public var build:EVersionBuild;
	public var revision:Int;

	private static inline var POINT = ".";
	private static inline var DASH = "-";

	public function new( p_major:Int,
							p_minor:Int,
							p_build:EVersionBuild,
							p_revision:Int ):Void
	{
		major = p_major;
		minor = p_minor;
		build = p_build;
		revision = p_revision;
	}

	public function toString():String
	{
		var l_result:StringBuf = new StringBuf();
		l_result.add( major );
		l_result.add( "." );
		l_result.add( minor );
		l_result.add( "." );
		l_result.add(
				switch ( build )
				{
				case ALPHA: "a";
				case BETA: "b";
				case RELEASE_CANDIDATE: "rc";
				default: "r";
				}
			);
		l_result.add( "-" );
		l_result.add( revision );
		return l_result.toString();
	}
}
