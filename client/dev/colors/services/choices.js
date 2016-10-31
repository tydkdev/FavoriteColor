;(function(ng) {
  'use strict';

  ng.module('fav-color')
    .service('choices', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
