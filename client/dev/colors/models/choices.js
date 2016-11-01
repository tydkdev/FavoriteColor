;(function(ng) {
  'use strict';

  ng.module('favColor')
    .factory('choices', [
      function() {
        var choices = function() {
          this.name = '';
          this.birthDate = null;
        };

        choices.prototype.isValid = function() {
          return !!this.name && !!this.birthDate;
        };

        return choices;
      }
    ]);
}(window.angular));
