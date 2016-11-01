;(function (ng) {
  'use strict';

  ng.module('favColor')
    .controller('ChoicesController', function ($scope, ChoicesService) {
      $scope.choices;
      $scope.choice;
      $scope.results;

      $scope.GetChoices = function () {
        ChoicesService.getChoices()
          .then(function (response) {
            $scope.choices = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.PostChoice = function () {
        if ($scope.selected) {
          ChoicesService.postChoice($scope.selected)
            .then(function (response) {
              // console.log(response);
              $scope.choice = response;
              $scope.GetResults();
              $scope.selected = null;
            }, function (error) {
              console.error(error);
            });
        }
      };

      $scope.GetResults = function () {
        ChoicesService.getResults()
          .then(function (response) {
            $scope.results = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.$on('$viewContentLoaded', function () {
        $scope.GetChoices();
        $scope.GetResults();
      });
    });

}(window.angular));
