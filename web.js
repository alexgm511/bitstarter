var express = require('express');

var fs = require('fs');
var file = "index.html";
var msg = '';

fs.readFile(file, function (err, data) {
    if (err) throw err;
    var buf = new Buffer(data);
    msg = buf.toString('uft-8',0,buf.length);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString(msg));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
