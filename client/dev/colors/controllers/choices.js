;(function (ng) {
  'use strict';

  ng.module('fav-color')
    .controller('ChoicesController', function ($scope, ChoicesService) {
      $scope.choices;

      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
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
