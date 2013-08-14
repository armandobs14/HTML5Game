var server = require('socket.io').listen(7070);
//var score = new Array();
var score = {};

server.sockets.on('connection', function (socket) {
	socket.emit('welcome',{message:"welcome"});
	socket.on('username',function(user){
		score[user.name] = 0;
		server.sockets.emit("scoreUpdate",score);
	});

	socket.on("score",function(data){
		score[data.name] = data.score;
		server.sockets.emit("scoreUpdate",score);
	});

	socket.on("message",function(data){
		console.log(data);
		server.sockets.emit("message",data);
	});
	/*socket.on('draw',function(data){
		server.sockets.emit('draw',data);
	});
	*/
});
