;(function (ng) {
  'use strict';

  ng.module('favColor')
    .controller('ChoicesController', ['$scope', 'ChoicesService', function ($scope, ChoicesService) {
      $scope.choices;
      $scope.choice;
      $scope.results;
      $scope.resultsCount;
      $scope.favoriteCount;

      $scope.GetChoices = function () {
        ChoicesService.getChoices()
          .then(function (response) {
            // console.log(response);
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
              $scope.GetResultsCount();
              $scope.GetFavoriteCount();
              $scope.selected = null;
            }, function (error) {
              console.error(error);
            });
        }
      };

      $scope.GetResults = function () {
        ChoicesService.getResults()
          .then(function (response) {
            $scope.results = response.results;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.GetResultsCount = function () {
        ChoicesService.getResultsCount()
          .then(function (response) {
            $scope.resultsCount = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.GetFavorite = function () {
        ChoicesService.getFavorite()
          .then(function (response) {
            $scope.favorite = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.GetFavoriteCount = function () {
        ChoicesService.getFavoriteCount()
          .then(function (response) {
            $scope.favoriteCount = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.$on('$viewContentLoaded', function () {
        $scope.GetChoices();
        $scope.GetResults();
        $scope.GetResultsCount();
        $scope.GetFavoriteCount();
      });
    }]);

}(window.angular));
