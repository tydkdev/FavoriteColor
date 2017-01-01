;(function (ng) {
  'use strict';

  ng.module('favColor')
    .factory('ChoicesService', ['$q', '$http', 'EnvironmentConfig', function ($q, $http, EnvironmentConfig) {
      var apiBase = EnvironmentConfig.apiUrl + ':' + EnvironmentConfig.apiPort;

      return {
        getChoices: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/choices');

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
          var httpPromise = $http.get(apiBase + '/results');

          httpPromise
            .success(function (response) {
              deferred.resolve(response);
            })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getFavorite: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/favorite');

          httpPromise
            .success(function (response) {
              deferred.resolve(response);
            })
            .error(function (error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getFavoriteCount: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/favorite/count');

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
          var httpPromise = $http.post(apiBase + '/colors', colorChoice);

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
    }]);
}(window.angular));
