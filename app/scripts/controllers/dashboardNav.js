/**
 * Created by akash on 17/1/15.
 */

angular.module ('fantApp')
  .controller ('DashBoardNavController', function ($scope,Player,$state) {

  var items = {};

  $scope.categories = [];

      Player.getPlayers()
        .then(function (data) {
          data = data.data;

          if (data) {
            console.log('Data received is ', data);
            items = data;

            items.map(function (item) {
              $scope.categories.push({
                name: item
              });
            });



          }
        }, function (reason) {
          console.log('Reason is ',reason);
        });

    $scope.openCategory = function () {
      console.log(this.category.name);

      $state.go('landing.dashboard', {
        dashCategory: this.category.name
      });

    }

  });

