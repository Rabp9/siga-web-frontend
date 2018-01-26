'use strict';

describe('Service: patBienesService', function () {

  // load the service's module
  beforeEach(module('sigaWebFrontendApp'));

  // instantiate service
  var patBienesService;
  beforeEach(inject(function (_patBienesService_) {
    patBienesService = _patBienesService_;
  }));

  it('should do something', function () {
    expect(!!patBienesService).toBe(true);
  });

});
