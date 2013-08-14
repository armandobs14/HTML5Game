(function (window){
    function Icon(iconWidth, imgSrc, color, titleText){
        this.initialize(iconWidth, imgSrc, color, titleText);
    }

    //Inheritance from Container
    Icon.prototype = new createjs.Container();
    Icon.prototype.Container_initialize = Icon.prototype.initialize;
    Icon.prototype.Container_tick = Icon.prototype._tick;

    Icon.prototype.initialize = function(iconWidth, imgSrc, color, titleText){
        //call to initialize() method from parent class
        this.Container_initialize();

        this._iconWidth = iconWidth;
        this._imgSrc = imgSrc;
        this._color = color;
        this._titleText = titleText;

        this.graphics = new createjs.Graphics();
        this.graphics.beginFill(this._color);
        this.graphics.rect(0, 0, this._iconWidth, this._iconWidth);
        this.addChild(new createjs.Shape(this.graphics));

        this.text = new createjs.Text(this._titleText, "bold 12px Courier", this._color);
        this.text.textAlign = "center";
        this.text.x = this._iconWidth * 0.5;
        this.text.y = this._iconWidth + 5;
        this.addChild(this.text);

        this.bitmap = new createjs.Bitmap(this._imgSrc);
        this.bitmap.scaleX = 0.9;
        this.bitmap.scaleY = 0.9;
        this.bitmap.x = this._iconWidth * 0.05;
        this.bitmap.y = this._iconWidth * 0.05;
        this.bitmap.mouseEnabled = false;
        this.addChild(this.bitmap);

        //this.addEventListener("click", clickHandler, false);
        this.addEventListener("click",Handler.click,false);
        this.addEventListener("mouseover", onMouseOver, false);
        this.addEventListener("mouseout", onMouseOut, false);
    }

    Icon.prototype._tick = function(){
        this.Container_tick();
    }

    function clickHandler(event){
        var instance = event.target;
        window.alert(instance._titleText);
    }

    function onMouseOver(event){
        var instance = event.target;
        var bitmap =  instance.bitmap;
        bitmap.scaleX = 1;
        bitmap.scaleY = 1;
        bitmap.x = 0;
        bitmap.y = 0;
    }

    function onMouseOut(event){
        var instance = event.target;
        var bitmap =  instance.bitmap;
        bitmap.scaleX = 0.9;
        bitmap.scaleY = 0.9;
        bitmap.x = instance._iconWidth * 0.05;
        bitmap.y = instance._iconWidth * 0.05;
    }

    window.Icon = Icon;

}(window));