;(function(ng) {
  'use strict';

  ng.module('favColor')
    .service('choices', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
