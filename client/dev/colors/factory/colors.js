;(function (ng) {
  'use strict';

  ng.module('fav-color')
    .factory('ColorService', function ($q, $http) {
      var urlBase = 'http://localhost:8091';

      return {
        getChoices: function () {
          var deferred = $q.defer(),
            httpPromise = $http.get(urlBase + '/colors');

          httpPromise.success(function (colors) {
            deferred.resolve(colors);
          })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        }
      };
    });
}(window.angular));
