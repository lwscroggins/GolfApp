'use strict'

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var GolfApp = angular.module('GolfApp', ['ngRoute', 'base64', 'ngCookies']);

//controllers
require('./GolfApp/controllers/loginController')(GolfApp); //controls user login and creation
require('./GolfApp/controllers/courseController')(GolfApp); //CRUD new courses
require('./GolfApp/controllers/hole-controller')(GolfApp); //CRUD new holes
require('./GolfApp/controllers/preGameController')(GolfApp); //controls
require('./GolfApp/controllers/gameOverController')(GolfApp); //controls game ending functions


//filters


//services
require('./GolfApp/services/auth')(GolfApp);
require('./GolfApp/services/golfCourseServer')(GolfApp);
require('./GolfApp/services/holeServer')(GolfApp);

//directives


GolfApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/GolfApp/login.html',
      controller: 'loginController'
    })
    .when('/signup', {
      templateUrl: 'views/golfApp/signup.html',
      controller: 'loginController'
    })
    .when('/createcourse', {
      templateUrl: 'views/GolfApp/createcourse.html',
      controller: 'courseController'
    })
    .when('/createholes', {
      templateUrl: 'views/golfApp/createholes.html',
      controller: 'holeController'
    })
    .when('/ingame', {
      templateUrl: 'views/golfApp/inGameHoleView.html',
      controller: 'gameController'
    })
    .when('/gameover', {
      templateUrl: 'views/golfApp/GameOver.html',
      controller: 'gameOverCotnroller'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);
