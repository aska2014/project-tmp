'use strict';

var express = require('express');
var bodyParser = require('body-parser');


module.exports = function (app) {

	// Use ejs engine
	app.engine('html', require('ejs').renderFile);
	// Set views directory
	app.set('views', __dirname+'/../app/views');
	// Serve js,css,..
	app.use(express.static(__dirname+'/../app'));

	// Use body parser
	app.use(bodyParser.json());
}
