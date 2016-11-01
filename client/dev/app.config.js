;(function(ng) {
  'use strict';

  ng.module('favColor')
    .config([
      '$locationProvider',
      function($locationProvider) {

        $locationProvider.html5Mode(true);

      }
    ]);
}(window.angular));
