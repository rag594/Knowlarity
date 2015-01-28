'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
