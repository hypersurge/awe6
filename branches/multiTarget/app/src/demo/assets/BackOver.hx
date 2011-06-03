package demo.assets;
import awe6.interfaces.IKernel;
import flash.display.BitmapData;

/**
 * ...
 * @author Rob Fell
 */

class BackOver extends BitmapData
{
	private static inline var _DATA = "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbfbffa3a3ddffa3a3dfffa4a4dfffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa4a4e0ffa5a5e0fffffffffffffffffffffffffff4f4f4ffa4a4daffa5a5ddffa6a6dfffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa7a7e0ffa8a8e0fffefefeffffffffffffffffffedededffa5a5d6ffa7a7dcffa9a9dfffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffa9a9e0ffaaaae0ffadade1fffdfdfdffffffffffffffffffe4e4e4ffa6a6d1ffaaaadaffacacdfffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffaeaee0ffb2b2e2fffcfcfcffffffffffffffffffdbdbdbffa6a6cdffacacd8ffafafdeffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffafafdfffafafdeffaeaeddffadaddcffadaddcffaeaeddffaeaeddffafafdeffafafdeffafafdeffaeaeddffadaddcffadaddcffaeaeddffafafdeffafafdfffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb0b0e0ffb1b1e0ffb6b6e2fffbfbfbffffffffffffffffffd2d2d2ffa6a6c8ffaeaed6ffb2b2deffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb2b2dfffb1b1ddffaeaedaffacacd7ffaaaad5ffa9a9d4ffababd5ffacacd7ffadadd9ffadadd9ffadadd8ffababd6ffaaaad5ffababd5ffacacd7ffaeaedaffb0b0dcffb2b2dfffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb3b3e0ffb4b4e0ffbbbbe3fffafafaffffffffffffffffffc8c8c8ffa5a5c3ffafafd4ffb4b4ddffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb4b4deffb0b0daffacacd5ffa7a7ceffa3a3c9ffa0a0c7ffa2a2c8ffa4a4cbffa5a5cdffa6a6ceffa5a5ccffa2a2c8ffa0a0c7ffa2a2c8ffa7a7ceffacacd5ffb0b0daffb3b3ddffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb5b5e0ffb7b7e1ffbebee4fff9f9f9ffffffffffffffffffbfbfbfffa4a4beffb0b0d2ffb6b6ddffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffb6b6ddffb1b1d7ffaaaaceffa2a2c5ff9999baff9595b5ff9494b4ff9595b6ff9898b8ff9898b8ff9797b8ff9595b5ff9595b5ff9898b9ffa1a1c4ffa9a9ceffb1b1d7ffb6b6ddffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffb8b8e0ffbabae1ffc3c3e4fff8f8f8ffffffffffffffffffb7b7b7ffa3a3b9ffb1b1d0ffb9b9dcffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffb8b8dcffb1b1d5ffa8a8c9ff9b9bbaffdfdfe7ffdcdce3ff9c9cb0ff83839cff83839cff83839cff83839cff9292a8ffd3d3dcffe7e7edff9a9ab8ffa6a6c7ffb1b1d4ffb7b7dcffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffbbbbe0ffbdbde1ffc6c6e5fff7f7f7ffffffffffffffffffafafafffa2a2b6ffb2b2ceffbabadcffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbabadcffb3b3d4ffa8a8c7ff9898b4ffdcdce4fffcfcfdffd3d3d9ff888897ff6b6b7fff6a6a7eff7c7c8dffc9c9d1fffcfcfcffeaeaeeff9696b1ffa5a5c4ffb1b1d2ffb9b9dcffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbdbde0ffbfbfe1ffc9c9e5fff6f6f6ffffffffffffffffffa9a9a9ffa0a0b2ffb2b2cdffbbbbdcffbebee0ffbebee0ffbebee0ffbebee0ffbebee0ffbebee0ffbebee0ffbcbcddffb5b5d5ffaaaac8ff9999b4ff9f9fb1ffd3d3d9fffbfbfcffd7d7daff767681ff63636fffbebec4fff8f8f9ffe7e7eaffa8a8b8ff9696b1ffa7a7c5ffb4b4d4ffbbbbdcffbebee0ffbebee0ffbebee0ffbebee0ffbebee0ffbebee0ffc0c0e1ffcacae6fff5f5f5ffffffffffffffffffa4a4a4ff9f9fb0ffb2b2ccffbcbcdcffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbdbdddffb8b8d7ffadadcbff9b9bb6ff85859bff898997ffd7d7daffffffffffd8d8daffc7c7cafffbfbfbffe3e3e5ff9696a3ff828298ff9898b2ffababc8ffb6b6d5ffbdbdddffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffc2c2e1ffcccce6fff5f5f5ffffffffffffffffffa4a4a4ff9f9fb0ffb2b2ccffbdbddcffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbebedeffb9b9d9ffafafcdff9d9db8ff85859cff6c6c7fff777781ffd9d9dbfffefefefffefefeffe7e7e9ff83838cff676779ff818197ff9999b3ffacaccaffb8b8d7ffbdbdddffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffbfbfe0ffc2c2e1ffcccce6fff5f5f5ffffffffffffffffffa9a9a9ff8e8eb0ff9696c9ff9a9ad7ff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9a9ad9ff9696d4ff8e8ec9ff8080b4ff6c6c99ff57577bff56566dffc3c3cafffdfdfdffffffffffdcdce0ff666679ff535375ff696994ff7d7db0ff8c8cc6ff9595d2ff9999d8ff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9b9bdbff9f9fdcffaeaee2fff5f5f5ffffffffffffffffffb0b0b0ff8d8db1ff9393c8ff9696d4ff9797d7ff9797d7ff9797d7ff9797d7ff9797d7ff9797d7ff9797d7ff9696d5ff9292cfff8989c4ff7c7cb0ff6a6a96ff696989ffb8b8c2fffafafbffe6e6e8ffdbdbdffffbfbfbffc4c4ccff74748fff686892ff7979acff8787c0ff9090ceff9595d4ff9797d7ff9797d7ff9797d7ff9797d7ff9797d7ff9797d7ff9b9bd9ffaaaadefff6f6f6ffffffffffffffffffb9b9b9ff8f8fb7ff9595cbff9898d6ff9999d9ff9999d9ff9999d9ff9999d9ff9999d9ff9999d9ff9999d9ff9797d6ff9292d0ff8989c2ff7c7cafff7c7ca3ffc1c1cffff7f7f9ffe0e0e4ff78788aff656578ffc4c4ccfffbfbfbffd7d7e0ff8a8aabff7979abff8787bfff9191ceff9797d6ff9999d9ff9999d9ff9999d9ff9999d9ff9999d9ff9999d9ff9c9cdaffa9a9dffff7f7f7ffffffffffffffffffc3c3c3ff9494beff9a9ad1ff9d9ddbff9e9edeff9e9edeff9e9edeff9e9edeff9e9edeff9e9edeff9e9edeff9c9cdbff9696d3ff8c8cc5ff8080b3ffcacadbfffbfbfcffe4e4eaff8a8aa2ff575778ff555577ff777792ffd8d8e0ffffffffffdddde7ff7d7db0ff8a8ac2ff9595d1ff9b9bdaff9e9edeff9e9edeff9e9edeff9e9edeff9e9edeff9e9edeffa0a0dfffababe2fff8f8f8ffffffffffffffffffcdcdcdff9999c5ff9f9fd5ffa2a2ddffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa0a0dcff9b9bd5ff9292c8ff8787b9ffe4e4edffe7e7eeff9b9bb8ff6f6f98ff6e6e97ff6e6e97ff707098ff8f8fafffdedee8ffefeff4ff8686b8ff9090c7ff9a9ad4ffa0a0dcffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa3a3e0ffa5a5e0ffaeaee3fff9f9f9ffffffffffffffffffd7d7d7ff9e9ecaffa3a3d7ffa5a5deffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa4a4ddff9f9fd7ff9999ceff9191c4ff8989b8ff8383b1ff8383b1ff8484b2ff8585b3ff8585b4ff8585b3ff8383b1ff8383b1ff8888b8ff9191c3ff9898ceff9f9fd6ffa4a4ddffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa6a6e0ffa8a8e0ffaeaee3fffbfbfbffffffffffffffffffe1e1e1ffa1a1d0ffa6a6d9ffa8a8deffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffa7a7deffa3a3daff9f9fd5ff9a9aceff9696c7ff9393c4ff9494c5ff9696c8ff9898caff9898caff9696c8ff9494c6ff9393c4ff9595c7ff9a9aceff9f9fd4ffa3a3daffa6a6ddffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffa8a8e0ffaaaae0ffaeaee2fffcfcfcffffffffffffffffffebebebffa5a5d5ffa8a8dbffaaaadfffaaaae0ffaaaae0ffaaaae0ffaaaae0ffaaaae0ffaaaae0ffaaaae0ffa9a9dfffa7a7dcffa5a5daffa3a3d7ffa1a1d4ff9f9fd2ffa1a1d4ffa2a2d5ffa3a3d7ffa3a3d7ffa3a3d6ffa1a1d5ffa0a0d3ffa1a1d4ffa3a3d6ffa5a5daffa7a7dcffa9a9dfffaaaae0ffaaaae0ffaaaae0ffaaaae0ffaaaae0ffaaaae0ffababe0ffaeaee1fffdfdfdfffffffffffffffffff3f3f3ffaaaad9ffacacddffadaddfffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffacacdfffababddffababddffaaaadcffaaaadcffaaaadcffababddffababddffababddffababddffaaaadcffaaaadcffaaaadcffababddffababddffacacdfffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffadade0ffafafe1fffefefefffffffffffffffffffafafaffaeaeddffafafdfffafafdfffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffafafe0ffb0b0e0ffb0b0e0ffffffffffffffffffffffffffffffffffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffb2b2e0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
	public function new( kernel:IKernel ) 
	{
		super( 40, 28, true, 0x00 );
		setPixels( rect, kernel.tools.hexToBytes( _DATA ) );		
	}	
}
