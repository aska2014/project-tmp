'use strict';

var products = require('./controllers/product');

module.exports = function(app) {

	app.all('/api/*', function(req, res, next) {
		setTimeout(next, 1000);
	});

	app.get('/api/products'    , products.index);
	app.get('/api/products/:id', products.show);
	app.post('/api/products'   , products.create);
	app.put('/api/products/:id', products.update);
	app.delete('/api/products/:id', products.delete);


	app.get('/partials/*', function(req, res) {
		return res.render('partials/'+req.param(0));
	});

	app.get('/', function(req, res) {
		return res.render('index.html');
	});
}