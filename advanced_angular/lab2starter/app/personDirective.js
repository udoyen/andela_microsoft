angular.module('app').directive('tbody', function () {
  return {
    restrict: 'E',
    scope: {
      person: '=',
      action: '&',
      data: '@'
    },    
    replace: true,
    template:
        '<tr ng-repeat="p in person track by $index">' +
          '<td>{{p.name}}</td>' +
          '<td>{{p.nationality}}</td>' +
          '<td>{{p.date}}</td>' +
          '<td><input type="button" ng-click="vm.show($index)" value="Action" class="btn btn-primary" />' +
        '</tr>',
    link: function (scope, element, attrs) {
          element.bind('mouseenter', function () {
            element.css('background-color', 'silver')
          });
    }
  }
});
