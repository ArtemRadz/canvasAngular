var app = angular.module("app", []);

app.controller("mainController", function($scope, $http) {
	$scope.errorWidth = false;
	$scope.errorHeight = false;
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	$scope.drawRect = function() {
		if($scope.width > 500) {
			$scope.errorWidth = true;
			return;
		}
		if($scope.height > 500) {
			$scope.errorHeight = true;
			return;
		}
		$scope.errorWidth = false;
		$scope.errorHeight = false;
		canvas.width = canvas.width;
		ctx.fillStyle = $scope.color;
		ctx.fillRect(0,0,$scope.width,$scope.height);	
	};
	$http({
    	method: 'GET',
	  	url: 'json/initialize-app.json'
	}).then(function (success) {
		var data = success.data;
		$scope.width = data.width;
		$scope.height = data.height;
		$scope.color = data.color;
	},function (error){
		console.log(error);
	}).then(function() {
		$scope.drawRect();
	}, function(error) {
		console.log(error);
	});
});