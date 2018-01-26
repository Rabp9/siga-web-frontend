'use strict';

describe('Controller: ReportePrintQrCtrl', function () {

  // load the controller's module
  beforeEach(module('sigaWebFrontendApp'));

  var ReportePrintQrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportePrintQrCtrl = $controller('ReportePrintQrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportePrintQrCtrl.awesomeThings.length).toBe(3);
  });
});
