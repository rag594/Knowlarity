'use strict';

/**
 * @ngdoc overview
 * @name fantApp
 * @description
 * # fantApp
 *
 * Main module of the application.
 */
angular
  .module('fantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'ngTouch'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    //$routeProvider
      //.when('/', {
        //templateUrl: 'views/main.html',
        //controller: 'MainCtrl'
      //})
      //.when('/about', {
        //templateUrl: 'views/about.html',
        //controller: 'AboutCtrl'
      //})
      //.otherwise({
        //redirectTo: '/'
      //});

    /*if(!$window.sessionStorage.currentOrder) {
      $window.sessionStorage.currentOrder = [];
    }

*/


    $urlRouterProvider.otherwise("/cover");

    $stateProvider
      .state('cover',{
        url: "/cover",
        templateUrl: "views/main.html",
        controller:"CoverCtrl"
      })
      .state('about',{
        url: "/about",
        templateUrl: "views/about.html"
      })
      .state('landing',{
        url:"/landing",
        templateUrl:"views/landing.html",
        controller:'DashBoardNavController'
      })
      .state('landing.dashboard',{
        url:"/dash/:dashCategory",
        templateUrl:"views/landing.dashboard.html",
        controller:"DashboardCtrl"
      })
      .state('cover.signin',{
        url:'/signin',
        templateUrl:"views/cover.signin.html",
        controller:"LoginCtrl"
      })
      .state('cover.signup',{
        url:'/signup',
        templateUrl:"views/signup.html",
        controller:"LoginCtrl"
      })
      .state('checkout', {
        url:'/checkout',
        templateUrl:"views/checkout.html",
        controller:"CheckoutController"
      })
      ;
  });
