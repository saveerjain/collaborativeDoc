var express = require('express');

var app = express(); 
var server = app.listen(3000);
app.use(express.static('public'));
console.log("Socket is running"); 

var socket = require('socket.io');
var content = ""; 
var io = socket(server);
io.sockets.on('connection',newConnection); 
function newConnection(socket){
	console.log('new connection: '+socket.id);
	socket.on('text',storeSend);

	function storeSend(data){
		
		//io.sockets.emit('mouse',data);
		content = data; 
		console.log(data);
		socket.broadcast.emit('content',content);

	}

}