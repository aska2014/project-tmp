'use strict'

angular.module('conflictApp')
.controller('AllProductCtrl', function($scope, Product) {

	Product.query(function(products) {
		console.log(products);
		$scope.products = products;	
	})

});