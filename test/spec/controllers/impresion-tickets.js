'use strict';

describe('Controller: ImpresionTicketsCtrl', function () {

  // load the controller's module
  beforeEach(module('sa20App'));

  var ImpresionTicketsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImpresionTicketsCtrl = $controller('ImpresionTicketsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImpresionTicketsCtrl.awesomeThings.length).toBe(3);
  });
});
