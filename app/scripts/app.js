angular.module('conflictApp', ['contenteditable', 'ngResource', 'ngRoute'])

.config(function ($routeProvider) {

	$routeProvider
	.when('/products', {
		controller: 'AllProductCtrl',
		templateUrl:'/partials/products/all.html'
	})
	.when('/products/edit/:id?', {
		controller: 'EditProductCtrl',
		templateUrl:'/partials/product.html'
	});
});