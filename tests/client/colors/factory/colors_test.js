'use strict';

describe('Colors', function() {
    var _Colors;

    beforeEach(module('favColor'));

    beforeEach(inject(function($injector) {
      _Colors = $injector.get('Colors');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Colors();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Colors();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
