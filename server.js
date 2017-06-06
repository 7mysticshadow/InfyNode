var staticsr = require('node-static');
var file = new staticsr.Server('./static');

var server = require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
});

var io =require('socket.io')(server);
server.listen(process.env.PORT || 9999);
console.log("Server Started");


//connection
io.on('connection',function(socket){
  //relay to all
  //on data  send to all
	socket.on('data',function(data){
		io.sockets.emit('data',data);
	});
});
