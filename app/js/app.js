'use strict'

require('angular/angular');
require('angular-route');

var GolfApp = angular.module('GolfApp', ['ngRoute']);

//controllers
require('.GolfApp/controllers/loginController')(GolfApp); //controls user login and creation
require('.GolfApp/controllers/courseController')(GolfApp); //CRUD new courses
require('.GolfApp/controllers/hole-controller')(GolfApp); //CRUD new holes
require('.GolfApp/controllers/preGameController')(GolfApp); //controls
require('.GolfApp/controllers/gameOverController')(GolfApp); //controls game ending functions


//filters


//services
require('.GolfApp/services/auth')(GolfApp);
require('.GolfApp/services/courseServer')(GolfApp);
require('.GolfApp/services/holeServer')(GolfApp);

//directives


GolfApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/GolfApp', {
      templateUrl: 'views/GolfApp/GolfApp.html',
      controller: 'golfAppController'
    })
    .otherwise({
      redirectTo: '/GolfApp'
    });
}]);
