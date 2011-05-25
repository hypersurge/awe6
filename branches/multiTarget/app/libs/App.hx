import flash.Lib;
import flash.display.Shape;
import flash.display.Sprite;

class App extends Sprite
{
    static function main ()
    {
        var ellipse:Shape = new Shape();
        ellipse.graphics.beginFill( 0xFF9900, 1 );
        ellipse.graphics.lineStyle( 0, 0xCCCCCC );
        ellipse.graphics.drawEllipse( 40, 40, 100, 60 );
        ellipse.graphics.endFill();
        
        var app = new App();
        app.addChild( ellipse );
        Lib.current.stage.addChild( app );
    }
}