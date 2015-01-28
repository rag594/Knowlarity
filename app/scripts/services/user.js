'use strict';

/**
 * @ngdoc service
 * @name fantApp.User
 * @description
 * # User
 * Factory in the fantApp.
 */
angular.module('fantApp')
  .factory('User', function ($http,$q,host,$window,$rootScope,$state) {
    // Service logic
    // ...
    var publicKey = "";
    var privateKey = "";
    var username = "";
 var getUserName = function () {
      return username;
    } 

    var login = function  (user) {
      var cred = $q.defer();
      console.log(user);
      $http({
      url: host + 'process.php/',
      method:'POST',
      data: {
        email: user.email,
        pass: user.password
      }
     
     })
     .then(function(data){
      console.log(data);
      cred.resolve(data.data);
      console.log(data.data);
      $window.sessionStorage.setItem("Data",JSON.stringify(data.data));
      $rootScope.cred = data.data;
      $state.go('landing.dashboard');
     },function (data) {
      console.log(data);
      cred.reject('In Correct username/password');
     });

     return cred.promise;

    };

    var logout = function  (pub) {
      var cred = $q.defer();
      $http({
        url:host + 'logout.php/',
        method:'POST',
        data: {
          pub_tok: pub
        }
      })
      .then(function  (data) {
        cred.resolve(data.data);
      });

      return cred.promise;

    };

    var signup = function  (user) {
      var cred = $q.defer();
      $http({
        url:host + 'signup.php/',
        method:'POST',
        data:{
          email:user.email,
          uname:user.name,
          pass:user.password
        }
      })
      .then(function  (data) {
        console.log(user);
        var promise = login(user);
        console.log(promise);
        return promise;
        //cred.resolve(data.data);
      },function(reason) {
        cred.reject(reason);
      });

      return cred.promise;
    };

    var user = function(user,flag) {
      var cred = $q.defer();
      $http({
        url:host+'user.php/',
        method:'POST',
        data: {
          data: flag == 0 ? user.name : user.email,
          flag: flag
        }
      })
      .then(function(data) {
        console.log(data.data);
        cred.resolve(data.data);
      }, function(reason) {
        console.log(reason);
        cred.reject(reason);
      });

      return cred.promise;
    };

    // Public API here
    return {
      login: login,
      username: username,
      logout: logout,
      signup: signup,
      user: user
    };
  });
