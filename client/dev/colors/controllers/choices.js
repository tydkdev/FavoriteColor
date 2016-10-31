;(function (ng) {
  'use strict';

  ng.module('fav-color')
    .controller('ChoicesController', function ($scope, ChoicesService) {
      $scope.choices;

      ChoicesService.getChoices()
        .then(function (choices) {
          $scope.choices = choices;
        }, function (error) {
          console.error(error);
        });
    });
}(window.angular));
