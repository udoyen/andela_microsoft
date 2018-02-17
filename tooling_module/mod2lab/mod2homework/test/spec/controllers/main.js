'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mod2homeworkApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have vm defined', function() {
    expect(vm).toBeDefined();
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(vm.awesomeThings.length).toBe(3);
  });

  it('should be defined', function() {
    expect(vm.welcome).toBeDefined();
    expect(vm.welcome).toMatch('Welcome to Module 2 Homework!');

  });
});
