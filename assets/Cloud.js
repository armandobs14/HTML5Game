(function (window){
    //var this.graphics;
    var stageWidth = window.innerWidth;

    function Cloud(x,y){
        this.initialize(x,y);
    }

    //Inheritance from Container
    Cloud.prototype = new createjs.Container();
    Cloud.prototype.Container_initialize = Cloud.prototype.initialize;
    //Cloud.prototype.Container_tick = Cloud.prototype._tick;

    Cloud.prototype.initialize = function(x,y){
        //call to initialize() method from parent class
        this.Container_initialize();
        this._position = x;
        
        this.addChild(new createjs.Bitmap(queue.getItem("cloud").src));
        this.x = x;
        this.y = y;
        this.scaleX = 0.5;
        this.scaleY = 0.5;
        this.regX = 100;
        this.regY = 120;

        this.onTick = function(){
            (this.x >= stageWidth)? this.x = -150 :  this.x++;
            
        }

        this.addEventListener("click", Handler.click, false);
    }

   

    window.Cloud = Cloud;

}(window));
