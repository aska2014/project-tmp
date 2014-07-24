'use strict';

var express = require('express'),
		mongoose = require('mongoose');

var app = express();

// Connect to mongo database
mongoose.connect('mongodb://localhost/conflict');

// Require models
require('./models/product');

// Configure express
require('./express')(app);

// Require routes
require('./routes')(app);

// Check if required to seed
if(process.argv.length == 3 && process.argv[2] == 'seed') {
	require('./seed');
}

app.listen(3000);