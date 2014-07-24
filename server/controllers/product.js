'use strict';

var mongoose = require('mongoose'),
		Product = mongoose.model('Product'),
		_ = require('underscore');;


exports.index = function(req, res) {

	var promise = Product.find().exec();


	promise.then(function(products) {
		return res.send(products);
	}, function(err) {
		return res.send(500, err);
	});

}

exports.show = function(req, res) {

	var promise = Product.findById(req.params.id).exec();


	promise.then(function(product) {
		// If product wasn't found
		if(! product) return res.send(404);
		return res.send(product);

	}, function(err) {
				
		return res.send(500, err);
	});

}

exports.create = function(req, res) {

	var attrs = _.pick(req.body, 'title', 'description', 'image');

	var promise = Product.create(attrs);

	promise.then(function(product) {
		return res.send(201, product);
	}, function(err) {
		return res.send(500, err);
	});
}

exports.update = function(req, res) {

	var attrs = _.pick(req.body, 'title', 'description', 'image');

	var promise = Product.findByIdAndUpdate(req.params.id, attrs).exec();

	promise.then(function(product) {
		return res.send(product);
	}, function(err) {
		return res.send(500, err);
	});
}

exports.delete = function(req, res) {

	Product.findByIdAndRemove(req.params.id).then(function() {
		return res.send(200);
	}, function(err) {
		return res.send(500, err);
	});
}