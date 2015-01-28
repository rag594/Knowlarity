'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:CoverCtrl
 * @description
 * # CoverCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('CoverCtrl', function ($scope,$window,$rootScope,User) {
    if($window.sessionStorage.getItem('Data'))
  	$rootScope.cred = JSON.parse($window.sessionStorage.getItem('Data'))||'';
  	
  	$scope.show = function() {
  		//console.log($rootScope.d);
  		if($rootScope.cred == undefined) {
  			return false;
  		}
  		else 
  			return true;
  	};
	$scope.logout = function() {
		console.log("hello");
		var promise = User.logout($rootScope.cred.pub);
		promise.then(function  (payload) {
			$rootScope.cred.uname = payload.success;
			//$rootScope.cred = "";
			$window.sessionStorage.setItem('Data','');
			$window.location.reload();
		});
  	}
  });
