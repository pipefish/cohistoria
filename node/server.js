var express  = require('express');
var http     = require('http');
var fs       = require('fs');
var mongoose = require('mongoose');
var config   = require('./config');
var app      = express();

console.log(config.db);
mongoose.connection.on('open', function (ref) {
	console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
	console.log('Could not connect to mongo server!');
	console.log(err);
});
mongoose.connect(config.db);

// /usr/local/projects/graphlab2/graphlab/release/toolkits/computer_vision/stich

// define models
var threadSchema = mongoose.Schema({
	title: String,
	path: String,
	description: String
});

var Thread = mongoose.model('Thread', threadSchema);

// define app
app.use(express.bodyParser());
app.use(express.query());
app.use(express.logger());
app.use(express.static('./public'));

// define routes
app.post('/new', function(req, res) {
	var time   = new Date().getTime();
	var thread = new Thread({ title: req.body.title, path: time, description: req.body.description });

	thread.save(function(err) {
		if(err) { throw new err }
		res.send(thread);	
	});
});

http.createServer(app).listen(9000, function() { console.log("Express server listening on port 9000") });
