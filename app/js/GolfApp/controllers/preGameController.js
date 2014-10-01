'use strict'

modules.export = function(app) {
  app.controller('preGameController', function($scope, $http, $cookies) {
    $http.defaults.headers.common['jwt'] = $cookies.jwt;
  });
};
