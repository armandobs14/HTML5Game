(function(window){
	var _stage;
	var _queue;
	var _scoreTable;
	function Game(){

	}

	Game.prototype.pause = function(){
		_stage.pause();
	}

	Game.prototype.updateScore = function(scoreTable){
		var score = "SCORE:\n";

		for(element in scoreTable){
			score += element+":"+scoreTable[element]+"\n";
		}
		_scoreTable = score;
	}

	Game.prototype.showShop = function(){
		console.log("Showing Shop");
	}

	Game.prototype.showChat = function(){
		$("#chatBox").toggle();
	}

	Game.prototype.appendMessage = function(data){

		$("#display ul").append("<li><b>"+data.user+":</b>"+data.message+"<li>");
		$("#display").animate({scrollTop: $("#display").height()*$("#display li").size()},"slow");
		$("#chatBox").show();
	};

	Game.prototype.start = function(stage,queue){
		_stage = stage;
		_queue = queue;
		_stage.removeAllChildren();
		factory = new BuildingFactory();
		sky = new createjs.Shape();
		
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addListener("tick",window);

		sky.graphics.f("#009DFF").dr(0,0,_stage.canvas.width,_stage.canvas.height);
		_stage.addChild(sky);
		
		for (var i = 15; i >= 0; i--) {
			cloud = new Cloud(_stage.canvas.width*Math.random(),500*Math.random());
			cloud.name = "cloud_"+i;
			_stage.addChild(cloud);
		};

		icon = new Icon(40,null,"#ccc","chat");
		icon.x = 10;
		icon.y = 10;
		_stage.addChild(icon);
		
		icon = new Icon(40,null,"#ccc","loja");
		icon.x = 70;
		icon.y = 10;
		_stage.addChild(icon);
		


		for(var i = 0; i*50 < (_stage.canvas.width - 50);i++){
			var build;
			if(Math.random() >= 0.5){
				build = factory.createBuilding("tallBuilding","#000");
			}else{
				build = factory.createBuilding("house","#65C400");
			}

			build.x = i*50 % (_stage.canvas.width - 50)+25;
			build.y = _stage.canvas.height;
			_stage.addChild(build);
		}

		createjs.Ticker.addEventListener("tick",function(event){
			stage.update();
			scoreContainer.text = _scoreTable;

			var randNumber = Math.floor((Math.random()*100));
			if(randNumber <= 5 ){

				var cloudNumber = Math.floor((Math.random()*15));

				cloud = stage.getChildByName("cloud_"+cloudNumber);

	            coin = new Coin(Math.floor(cloud.x),Math.floor(cloud.y),queue.getResult("coin").src);

	            stage.addChild(coin);
			}
		});

		scoreContainer = new createjs.Text("SCORE: 0","20px Verdana","#000");
		scoreContainer.x = window.innerWidth - 200;
		scoreContainer.y = 50;
		_stage.addChild(scoreContainer);
	}

	window.Game = Game;


}(window));