;(function (ng) {
  'use strict';

  ng.module('fav-color')
    .controller('ChoicesController', function ($scope, ChoicesService) {
      $scope.choices;

      $scope.PostChoice = function() {
        if ($scope.selected) {
          ChoicesService.postChoice($scope.selected)
            .then(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
            });
        }
      };

      ChoicesService.getChoices()
        .then(function (choices) {
          $scope.choices = choices;
        }, function (error) {
          console.error(error);
        });
    });
}(window.angular));
