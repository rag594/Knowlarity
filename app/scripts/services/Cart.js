/**
 * Created by akash on 18/1/15.
 */
angular.module('fantApp')
.factory('Cart', function ($http,host) {

    var order = function (currentOrder) {
      console.log('Calling http methods');
      return $http({
        method: 'POST',
        url:  'http://localhost:8080/checkout',
        data: {
          order: currentOrder
        }
      });
    }

    return {
      order: order
    }
  });
