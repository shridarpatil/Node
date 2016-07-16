
var express = require('express');
var app = express();
require('./main')(app) 
var db = require('./db');
var server = app.listen(3000, function(){
	console.log("Server running on port 3000")
});

