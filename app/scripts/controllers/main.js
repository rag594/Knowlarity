'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
