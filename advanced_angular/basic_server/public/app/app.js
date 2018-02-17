angular.module('app', ['ngRoute']);
angular.module('app').config([
  '$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/about', {
        templateUrl: '/app/about/index.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: '/app/home/index.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

  }
]);
