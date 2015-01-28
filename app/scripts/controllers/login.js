'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('LoginCtrl', function ($scope,User,$rootScope) {

    $scope.login = function  (user) {
    	// body...
    	var promise = User.login(user);
    	promise.then(function  (payload) {
    		// body...
    		$rootScope.cred = payload;
    		console.log(payload);
    	},function  (reason) {
    		// body...
    		$scope.msg = reason;
    		console.log(reason);
    	});
    };

    $scope.unauth = function  () {
    		if ($scope.msg) {
    			return false;
    		}
    		else {
    			return true;
    		}
    };

     $scope.signup = function  (user) {
		console.log('Going to sign up');



		var promise = User.signup(user);
		console.log(promise);
		promise.then(function  (payload) {
			console.log(payload);
			$rootScope.cred = payload;
		},function  (reason) {
				$scope.msg = reason;
				console.log(reason);
		})
    };

    $scope.checkUsername = function(flag) {
    	$scope.message ={};

      if(!$scope.user ) {
        $scope.user = {};
      }

    	var promise = User.user($scope.user,flag);
    	promise.then(function  (payload) {
    		// body...
    		console.log('Payload',payload);
    		$scope.message[payload.flag] = payload.success;

    	},function(reason) {

    		console.log('Reason',reason);

    		$scope.message[reason.data.flag] = reason.data.error;
    	});
    };



  });
