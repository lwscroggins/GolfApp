'use strict'

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/GolfScorecard');

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

app.use(bodyparser.json());
//require('./GolfApp/Score-routes')(app);
//not sure if this is going to be used

var server = httpCreateServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server is listening on port 3000');
});
