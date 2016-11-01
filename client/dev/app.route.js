;(function(ng) {
  'use strict';

  ng.module('favColor')
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
