'use strict';

angular.module('conflictApp')
.controller('EditProductCtrl', function($scope, Product, $routeParams) {

	// Errors
	$scope.errors = [];

	// If in edit mode
	if($routeParams.id) {

		$scope.product = Product.get({id: $routeParams.id});
	} else {

		// Default product attributes
		$scope.product = new Product({
			image: 'http://www.mountainmansocialmedia.com/_site/wp-content/themes/juiced/img/thumbnail-default.jpg',
			title: 'Your title here..',
			description: 'Your description here...'
		});
	}

	$scope.saving = false;


	$scope.editImage = function() {

		var image = prompt("Edit image","enter image url");

		if(image != null) {
			console.log(image);
			$scope.product.image = image;
		}
	}


	var saveProduct = function() {

		if($scope.product._id) {
			return $scope.product.$update();
		} else {
			return $scope.product.$save();
		}
	}

	$scope.submit = function() {
		$scope.saving = true;

		saveProduct().then(function() {
			$scope.saving = false;
		});
	}
});