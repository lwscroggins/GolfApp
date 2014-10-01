'use strict'

module.export = function(app) {
  app.controller('loginController', function($scope, $http, $cookies, $base64, $location) {
    if($location.path() === '/signout') $cookies.jwt = null;

    if($location.path() === '/signup') $scope.newuser = true;

    $scope.login = function() {
      $http.defaults.headers.common['Authorization'] = 'Basic' + $base64.encode($scope.user.username + ":" + $scope.user.password);
      $http({
        method: 'GET',
        url: '/api/v.0.0.1/users'
      })
      .success(function(data) {
        $cookies.jwt = data.jwt;
        $location.path('/preGame');
      })
      .error(function(data) {
        console.log('error in login');
        console.log(data);
      });
    };

    $scope.validatePassword = function() {
      return $scope.user.password === $scope.user.passwordConfirmation;
    };

    $scope.createNewUser = function() {
      if($scope.validatePassword() === true) {
        console.log('clicked');
        $http({
          method: 'POST',
          url: '/api/v.0.0.1/users',
          data: $scope.user
        })
        .success(function(data) {
          $cookies.jwt = data.jwt;
          $location.path('/preGame');
        })
        .error(function(data) {
          console.log('error in createNewUser');
          console.log(data);
        });
      }
      else
        $scope.message('Passwords do not match');
    }
  });
};
