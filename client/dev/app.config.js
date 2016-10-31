;(function(ng) {
  'use strict';

  ng.module('fav-color')
    .config([
      '$locationProvider',
      function($locationProvider) {

        $locationProvider.html5Mode(true);

      }
    ]);
}(window.angular));
