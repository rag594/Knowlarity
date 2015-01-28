'use strict';

/**
 * @ngdoc service
 * @name fantApp.Player
 * @description
 * # Player
 * Factory in the fantApp.
 */
angular.module('fantApp')
  .factory('Player', function ($http,$q,host) {
    // Service logic
    // ...


    var getPlayers = function  () {
      // body...
      /*var players = $q.defer();
      $http({
        method:'POST',
        url:host+'search_goal.php/',
        data: {
          flag: number
        }
      }).then(function  (data) {
        // body...
        console.log(data.data);
        players.resolve(data.data);
      },function  (reason) {
        // body...
        console.log(reason);
        players.reject(reason);
      });
      return players.promise; */

      var items = $q.defer();

      return $http({
        method:'GET',
        url:host + 'getItems.php'
      });

    }

    var getItemsInCategory = function (category) {
      var items = $q.defer();

      return $http({
        method:'GET',
        url: 'http://127.0.0.1:8080/items/?cat=' + category
      });
    }

    // Public API here
    return {
      getPlayers: getPlayers,
      getItemsInCategory: getItemsInCategory
    };
  });
