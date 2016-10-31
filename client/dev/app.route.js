;(function(ng) {
  'use strict';

  ng.module('fav-color')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'colors/templates/choices.html',
            controller: 'ChoicesController',
            controllerAs: 'choicesCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
