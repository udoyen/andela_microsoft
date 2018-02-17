'use strict';

/**
 * @ngdoc function
 * @name mod2homeworkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mod2homeworkApp
 */
angular.module('mod2homeworkApp')
  .controller('MainCtrl', function () {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.welcome = "Welcome to Module 2 Homework!";
  });
