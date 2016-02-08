'use strict';

describe('Controller: ExpenceCtrl', function () {

  // load the controller's module
  beforeEach(module('sampleProjectApp'));

  var ExpenceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenceCtrl = $controller('ExpenceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
