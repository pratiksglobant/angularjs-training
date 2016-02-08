'use strict';

describe('Service: expenceMgr', function () {

  // load the service's module
  beforeEach(module('sampleProjectApp'));

  // instantiate service
  var expenceMgr;
  beforeEach(inject(function (_expenceMgr_) {
    expenceMgr = _expenceMgr_;
  }));

  it('should do something', function () {
    expect(!!expenceMgr).toBe(true);
  });

});
