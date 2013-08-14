(function (window){
    function House(width,height,color){
        this.initialize(width,height,color);
    }

    //Inheritance from Container
    House.prototype = new Building();
    House.prototype.initialize = function(width,height, color){
        //call to initialize() method from parent class
        this.Container_initialize();

        this._width = width;
         this._height = height;
        this._color = color;

        this.graphics = new createjs.Graphics();
        this.graphics.f("#916300");
        this.graphics.s("#000000");
        this.graphics.mt(-5, 0);
        this.graphics.lt(15,-15);
        this.graphics.lt(35,0);
        this.graphics.lt(-5,0);
        
        this.graphics.f(this._color);
        this.graphics.dr(0, 0, this._width, this._height);
        this.graphics.mt(30,0);
        this.graphics.f("#000");
        this.graphics.dr(10,20,10,20);
        this.graphics.es();
        this.addChild(new createjs.Shape(this.graphics));
        this.regY = this._height;
    }
    window.House = House;

}(window));