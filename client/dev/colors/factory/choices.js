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
        },

        postChoice: function (colorChoice) {
          var jsonBody = "{ \"color\": \"" + colorChoice + "\" }";

          var deferred = $q.defer();

            $http.post(urlBase + '/colors', jsonBody)
              .then(function (response) {
                console.log("Successful: response from submitting data to server was: " + response);
                deferred.resolve({
                  data: response
                });
              },

              function (response) {
                console.log("Error: response from submitting data to server was: " + response);
                deferred.reject({
                  data: response
                });
              }
            );

          return deferred.promise;
        }
      };
    });
}(window.angular));
