;(function (ng) {
  'use strict';

  ng.module('fav-color')
    .controller('ChoicesController', function ($scope, ChoicesService) {
      $scope.choices;
      $scope.results;

      ChoicesService.getChoices()
        .then(function (response) {
          console.log(response);
          $scope.choices = response;
        }, function (error) {
          console.error(error);
        });

      $scope.PostChoice = function () {
        if ($scope.selected) {
          ChoicesService.postChoice($scope.selected)
            .then(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
            });
        }
      };

      $scope.GetResults = function () {
        ChoicesService.getResults()
          .then(function (response) {
            console.log(response);
            $scope.results = response;
            console.log($scope.results);
          }, function (error) {
            console.error(error);
          });
      };

      $scope.$on('$viewContentLoaded', function() {
        $scope.GetResults();
      });
    });

}(window.angular));
