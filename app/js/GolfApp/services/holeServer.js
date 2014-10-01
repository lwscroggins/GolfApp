'use strict'

module.exports = function(app) {
  app.factory('holeServer', function($http) {
    var parseHole = function(hole) {
      return {name: hole.name, par: hole.par, description: hole.description};
    }

    var hole = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v.0.0.1/holes'
        })
        .error(function(data, status) {
          console.log('error index: holeServer');
          console.log(data);
          console.log(status);
        });
        return promise;
      },

      saveNewHole: function(hole) {
        var promise = $http.post('/api/v.0.0.1/holes', parseHole(holes))
          .error(function(data, status) {
            console.log('error saveNewHole: holeServer');
            console.log(data);
            console.log(status);
          });
        return promise;
      },

      saveOldHole: function(hole) {
        var promise = $http.post('/api/v.0.0.1/holes', hole._id, parseHole(hole))
          .error(function(data, status) {
            console.log('error saveOldHole: holeServer');
            console.log(data);
            console.log(status);
          });
        return promise;
      },

      deleteHole: function(hole) {
        var promise = $http.delete('/api/v.0.0.1/holes' + hole._id)
          .error(function(data, status) {
            console.log('error deleteHole: holeServer');
            console.log(data);
            console.log(status);
          });
        return promise;
      }
    };

    return hole;
  });
};
