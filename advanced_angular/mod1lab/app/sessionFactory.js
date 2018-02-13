/************************************************************
Returns boject and the properties like a class object
Singleton and instantiated with the new keyword
************************************************************/
angular.module('app').factory('sessionFactory', [
  '$window',
  'formattingFactory',
  sessionFactory
]);

var myFormattingFactory = new formattingFactory();

function sessionFactory($window, formattingFactory) {

  function formatText(text) {
    myFormattingFactory.format(text);
  }

  return {

    save: function(key, value) {
      $window.sessionStorage.setItem(key, formatText(value));
    },
    get: function(key) {
      return $window.sessionStorage.getItem(key);

    },
    clear: function() {
      $window.sessionStorage.clear();
    }

  }

  // function save(key, value) {
  //   $window.sessionStorage.setItem(key, value);
  // }
  //
  // function get(key) {
  //   return $window.sessionStorage.getItem(key);
  //
  // }
  //
  // function clear() {
  //   $window.sessionStorage.clear();
  // }

}
