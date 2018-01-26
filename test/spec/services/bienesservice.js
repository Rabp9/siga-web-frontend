'use strict';

describe('Service: bienesService', function () {

  // load the service's module
  beforeEach(module('sigaWebFrontendApp'));

  // instantiate service
  var bienesService;
  beforeEach(inject(function (_bienesService_) {
    bienesService = _bienesService_;
  }));

  it('should do something', function () {
    expect(!!bienesService).toBe(true);
  });

});
