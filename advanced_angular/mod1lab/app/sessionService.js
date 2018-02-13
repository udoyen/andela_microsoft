/************************************************************
Singleton, returns functions and methods, provides a reusable
component for your logic that can be injected into multiple
controllers, allowing for sharing state between two controllers
without having to use a global variable
*************************************************************/
angular.module('app').service('sessionService', [
  '$window',
  sessionService
]);

function sessionService($window) {
  this.save = save;
  this.get = get;
  this.clear = clear;

  function save(key, value) {
    $window.sessionStorage.setItem(key, value);
  }

  function get(key) {
    return $window.sessionStorage.getItem(key)
  }

  function clear() {
    $window.sessionStorage.clear();
  }
}
