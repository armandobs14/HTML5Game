(function (window){
    function Building(width,height,color){
        this.initialize(width,height,color);
    }

    //Inheritance from Container
    Building.prototype = new createjs.Container();
    Building.prototype.Container_initialize = Building.prototype.initialize;
    Building.prototype.Container_tick = Building.prototype._tick;

    Building.prototype.initialize = function(width,height, color){
        //call to initialize() method from parent class
        this.Container_initialize();

        this._width = width;
         this._height = height;
        this._color = color;

        this.graphics = new createjs.Graphics();
        this.graphics.f(this._color);
        this.graphics.dr(0, 0, this._width, this._height);
        
        this.addChild(new createjs.Shape(this.graphics));
        this.regY = this._height;
        this.addEventListener("click", Handler.click, false);
        //this.addEventListener("mouseover", onMouseOver, false);
        //this.addEventListener("mouseout", onMouseOut, false);
    }

    Building.prototype._tick = function(){
        this.Container_tick();
    }

    window.Building = Building;

}(window));
