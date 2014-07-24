'use strict';

var mongoose = require('mongoose'),
		Product = mongoose.model('Product');


var seedProducts = function() {
	return Product.create({
		title: 'Product 1',
		description: 'Product 2',
		image: 'image'
	});
}

Product.remove({}).exec()
.then(seedProducts)
.then(function() {

	console.log('Finished seeding product');
});