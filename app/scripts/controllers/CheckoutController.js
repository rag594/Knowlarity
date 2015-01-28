/**
 * Created by akash on 18/1/15.
 */
angular.module('fantApp')
.controller('CheckoutController', function ($scope,$rootScope,Cart,$state,$window) {
    $scope.currentOrder = $rootScope.currentOrder || [];

    $scope.checkout = function () {

      //$rootScope.cred = JSON.parse($window.sessionStorage.getItem('Data'))||'';

      console.log('In checkout');
      $scope.netOrder = {
        username: 'akash',
        phone: 8277564501,
        address: $scope.shipping.address,
        orders: $scope.currentOrder
      }


        Cart.order($scope.netOrder)
          .then(function (payload) {
            var data ;
            data = payload.data;
            if(data) {
              alert('Order successfull');
              console.log(data);
              $state.go('landing');
            }

          }, function (reason) {
            console.log(reason);
          })
    }
  });
