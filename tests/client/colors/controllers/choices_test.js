'use strict';

describe('choices', function() {
    var _scope;
    var CONTROLLER_NAME = 'choices as ctrl';

    beforeEach(module('fav-color'));

    beforeEach(inject(function($injector) {
      _scope = $injector.get('$rootScope').$new();
    }));

    describe('init', function() {
      it('should create the controller correctly', inject(function($controller) {
          $controller(CONTROLLER_NAME, {$scope: _scope});
      }));      
    });
    
    describe('onLoad', function() {
      it('should load correctly', inject(function($controller) {
          // ...
      }));
    });
});
