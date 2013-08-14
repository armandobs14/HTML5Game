(function (window){
    //var this.graphics;
    var stageHeight = window.innerHeight;

    function Coin(x,y,spriteSRC){
        this.initialize(x,y,spriteSRC);
    }

    //Inheritance from Container
    Coin.prototype = new createjs.Container();
    Coin.prototype.Container_initialize = Coin.prototype.initialize;
    //Coin.prototype.Container_tick = Coin.prototype._tick;

    Coin.prototype.initialize = function(x,y,spriteSRC){
        //call to initialize() method from parent class
        this.Container_initialize();
        this.x = x;
        this.y = y;
        this._spriteSRC = spriteSRC;
        data = {
        	images : [this._spriteSRC],
        	frames:{
        		width: 64,
        		height:64
        	}

        }
		this.sprites = new createjs.SpriteSheet(data);        
        this.animation = new createjs.BitmapAnimation(this.sprites);
        this.animation.play(0);
        this.animation.scaleX = 0.5;
        this.animation.scaleY = 0.5;
        this.animation.regX = 16;
        this.animation.regY = 64;
        this.addChild(this.animation);

        this.onTick = function(){
            if(this.y < stageHeight){
                this.y++;
            }else{
                this.removeAllChildren();
            }

        }

        this.addEventListener("click", Handler.click, false);
    }

   

    window.Coin = Coin;

}(window));