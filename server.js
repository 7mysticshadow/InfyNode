"use strict";
var static = require('node-static');
var file = new static.Server('./static');

var server = require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
});

server.listen(process.env.PORT || 9999);
console.log("Server Started");
