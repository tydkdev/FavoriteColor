'use strict';

describe('choices', function() {
  var _choices;

  beforeEach(module('favColor'));

  beforeEach(inject(function($injector) {
    _choices = $injector.get('choices');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _choices).toBe('object');
	})
	  
    it('should doSomething', function() {
      _choices.doSomething();
    });
  });
});
