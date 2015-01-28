'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('DashboardCtrl', function ($scope,$rootScope,Player,$stateParams,$state) {
    /*$scope.players = {
    	goal: [],
        def: [],
    	mid: [],
    	att: []
    };

    $scope.team = [];

    var goal = Player.getPlayers(0);
    goal.then(function  (payload) {
    	$scope.players.goal.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
    	console.log(reason);
    });

     var def = Player.getPlayers(1);
    def.then(function  (payload) {
        $scope.players.def.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });

     var mid = Player.getPlayers(2);
    mid.then(function  (payload) {
        $scope.players.mid.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });

     var att = Player.getPlayers(3);
    att.then(function  (payload) {
        $scope.players.att.push(payload);
        //console.log($scope.players.goal.name);
    },function  (reason) {
        console.log(reason);
    });


    $scope.AddPlayer = function  (name,flag) {
        // body...
        console.log("Function called from " + flag + " and player " + name);
        console.log('Hi',$scope.team[0]);
        var present = -1;
        for (var i = 0; i < $scope.team.length; i++) {
            if(name == $scope.team[i].name){
                present = 1;
                break;
            }
        }

        console.log(present);
        if(present == -1)
        $scope.team.push({name:name});
    }*/




    if(!$rootScope.currentOrder) {
      $rootScope.currentOrder = [];
      $scope.cart = {};
    } else {
      $scope.cart = {};
      $scope.cart.quantity = $rootScope.currentOrder.length;
    }


    $scope.elements = '';

    if($stateParams.dashCategory) {


      Player.getItemsInCategory($stateParams.dashCategory)
        .then(function (payload) {
          var data = payload.data;
          $scope.elements = data;
          console.log('Data is ',data);

        }, function (reason) {

          console.log(reason);

        });


    }


    $scope.checkout = function () {
      console.log('Go for checkout');
      $state.go('checkout');
    }


    $scope.addToCart = function () {
      var order = {
        desc: this.item.item,
        quantity: this.item.quantity,
        price: this.item.price,
        newQuant: this.item.quant - this.item.quantity,
        cat: this.item.cat
      };

      if (order.newQuant < 0 ) {
        alert('Not available');
      } else {

        $rootScope.currentOrder.push(order);

        $scope.cart.quantity = $rootScope.currentOrder.length;
      }


    }




  });
