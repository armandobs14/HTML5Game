(function (window){
    function TallBuilding(width,height,color){
        this.initialize(width,height,color);
    }

    //Inheritance from Container
    TallBuilding.prototype = new Building();
    TallBuilding.prototype.initialize = function(width,height, color){
        //call to initialize() method from parent class
        this.Container_initialize();

        this._width = width;
         this._height = height;
        this._color = color;
        this.dorSize = 20;

        this.graphics = new createjs.Graphics();
        
        this.graphics.s("#000000");
        this.graphics.f(color);
        this.graphics.dr(0, 0, this._width, this._height);
        this.graphics.ef();
        this.graphics.f("#fff");

        for (var i = 3; i >= 0; i--) {
            this.graphics.dr(5, 15*i+5, 10,10);
            this.graphics.dr(25, 15*i+5, 10,10);
        };

        this.graphics.dr(10, this._height - this.dorSize, this.dorSize,this.dorSize);

        this.addChild(new createjs.Shape(this.graphics));
        this.regY = this._height;
    }
    window.TallBuilding = TallBuilding;

}(window));
