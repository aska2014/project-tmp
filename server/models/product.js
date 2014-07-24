'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var ProductSchema = new Schema({
	title: String,
	description: String,
	image: String
});

module.exports = mongoose.model('Product', ProductSchema);