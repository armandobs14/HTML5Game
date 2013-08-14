(function(window){
	var _socket;

	function Network(connectionLocation){
		_socket = io.connect("http://"+connectionLocation);
		_socket.on("welcome",welcome);
		_socket.on("scoreUpdate",score);
		_socket.on("message",message);
	};

	Network.prototype.send = function(method,data){
		_socket.emit(method,data);
	}


	function welcome(data){
		_socket.emit("username",{name: userName});
	}

	function score(data){
		game.updateScore(data);
	}

	function message(data){
		game.appendMessage(data);
	}


window.Network = Network;

}(window));
/*
 var socket = io.connect('http://localhost:7070');
 var receive = true;
  socket.on('news', function (data) {
    console.log(data);
  });

socket.on('draw', function (data) {
	if(receive){

		var img = new Image();
		img.src = data;

		var bitmap = new Bitmap(img);
		bitmap.x = 0;
		bitmap.y = 0;
		//stage.removeAllChildren();
		stage.addChild(bitmap);
	}	
  });

  function sendDrawn(draw){
  	socket.emit('draw',draw);
  }*/
