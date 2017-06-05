"use strict";
var staticsr = require('node-static');
var file = new staticsr.Server('./static');

var server = require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
});

server.listen(process.env.PORT || 9999);
console.log("Server Started");
