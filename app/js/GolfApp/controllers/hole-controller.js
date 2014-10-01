'use strict'

module.exports = function(app) {
  app.controller('holeController', function($scope, holeServer, $cookies, $location) {
    console.log($cookies.jwt);
    $http.defaults.headers.common['jwt'] = $cookies.jwt;

    $scope.getAllHoles = function() {
      holeServer.index()
        .success(function(data) {
          $scope.holes = data;
          console.log($scope.holes);
      });
    };

    $scope.getAllHoles();





  })
}
