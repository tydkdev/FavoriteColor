;(function (ng) {
  'use strict';

  ng.module('favColor')
    .factory('ChoicesService', function ($q, $http, EnvironmentConfig) {
      var urlBase = EnvironmentConfig.api + ':' + EnvironmentConfig.port || "http://localhost:8091";

      return {
        getChoices: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(urlBase + '/choices');

          httpPromise
            .success(function (response) {
              deferred.resolve(response);
            })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getResults: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(urlBase + '/results');

          httpPromise
            .success(function (response) {
              deferred.resolve(response);
            })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        postChoice: function (choice) {
          var colorChoice = "{ \"color\": \"" + choice + "\" }";

          var deferred = $q.defer();
          var httpPromise = $http.post(urlBase + '/colors', colorChoice);

          httpPromise
            .success(function (response) {
              deferred.resolve({
                data: response
              });
            })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        }
      };
    });
}(window.angular));
