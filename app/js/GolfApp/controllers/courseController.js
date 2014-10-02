'use strict'

module.exports = function(app) {
  app.controller('courseController', [$scope, 'Hole', function($scope, courseServer, $cookies, $http) {
    console.log($cookies.jwt);
    $http.defaults.headers.common['jtw'] = $cookies.jwt;

    $scope.getAllCourses = function() {
      courseServer.index()
        .success(function(data) {
          $scope.courses = data;
      });
    };

    $scope.getAllCourses();

    $scope.saveCourse = function() {
      courseServer.saveNewCourse($scope.course)
        .success(function(data) {
          $scope.courses.push(data);
      });
    };

    $scope.deleteCourse = function() {
      courseServer.deleteCourse(course)
        .success(function(data) {
          $scope.getAllCourses();
      });
    };

    // $scope.remove = function() {
    //   var index = $scope.courses.indexOf(courses);
    //   if(index >= 0) {
    //     $scope.
    //   }
    // }






  }]);
}
