'use strict'

module.exports = function(app) {
  app.factory('courseServer', function($http) {
    var parseCourse = function(course) {
      return {name: course.name, holes: course.holes, city: course.city, state: course.state, description: course.description};
    };

    var course = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v.0.0.1/courses'
        })
        .error(function(data, status) {
          console.log('error index: golfCourseServer');
          console.log(data);
          console.log(status);
        });
      }
      return promise;
    },

    saveNewCourse: function() {
      var promise = $http.post('/api/v.0.0.1/courses', parseCourse(course))
        .error(function(data, status) {
          console.log('error saveNewCourse: golfCourseServer');
          console.log(data);
          console.log(status);
        })
      return promise;
    },

    saveOldCourse: function() {
      var promise = $http.post('/api/v.0.0.1/courses' + course._id, parseCourse(course))
        .error(function(data, status) {
          console.log('error saveOldCourse: golfCourseServer');
          console.log(data);
          console.log(status);
        });
      return promise;
    }

    deleteCourse: function() {
      var promise = $http.delete('/api/v.0.0.1/courses' + course._id)
        .error(function(data, status) {
          console.log('error deleteCourse: golfCourseServer');
          console.log(data);
          console.log(status);
        });
      return promise;
    };
  });
};
