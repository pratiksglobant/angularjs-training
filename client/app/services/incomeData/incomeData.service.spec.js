'use strict';

describe('Service: incomeData', function () {

  // load the service's module
  beforeEach(module('sampleProjectApp'));

  // instantiate service
  var incomeData;
  beforeEach(inject(function (_incomeData_) {
    incomeData = _incomeData_;
  }));

  it('should do something', function () {
    expect(!!incomeData).toBe(true);
  });

});
