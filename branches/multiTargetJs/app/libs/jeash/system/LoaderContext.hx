package jeash.system;

class LoaderContext {
	public var applicationDomain : Dynamic;
	public var checkPolicyFile : Bool;
	public var securityDomain : Dynamic;
	public function new(checkPolicyFile : Bool = false, ?applicationDomain, ?securityDomain) 
	{
		this.checkPolicyFile = checkPolicyFile;
	}
}

