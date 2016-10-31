'use strict';

describe('Choices', function() {
    var _Choices;

    beforeEach(module('fav-color'));

    beforeEach(inject(function($injector) {
      _Choices = $injector.get('Choices');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Choices();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Choices();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
