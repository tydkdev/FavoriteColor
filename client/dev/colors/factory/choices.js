;(function (ng) {
  'use strict';

  ng.module('fav-color')
    .factory('ChoicesService', function ($q, $http) {
      var urlBase = 'http://localhost:8091';

      return {
        getChoices: function () {
          var deferred = $q.defer(),
            httpPromise = $http.get(urlBase + '/choices');

          httpPromise.success(function (choices) {
            deferred.resolve(choices);
          })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        }
      };
    });
}(window.angular));
