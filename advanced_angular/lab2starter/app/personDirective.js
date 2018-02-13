angular.module('app').directive('person', function () {
  return {
    scope: {
      person: '=',
      action: '&',
      data: '@'
    },
    restrict: 'E',
    replace: true,
    template: '<table>' +
      '<thead>' +
        '<tr>' +
          '<th>Name</th>' +
          '<th>Nationality</th>' +
          '<th>Dates</th>' +
          '<th><span>None</span></th>' +
        '</tr>' +
      '</thead>' +
      '<tbody ng-repeat="p in vm.person">' +
        '<tr>' +
          '<td>{{p.name}}</td>' +
          '<td>{{p.nationality}}</td>' +
          '<td>{{p.date}}</td>' +
          '<td><input type="button" ng-click="action()" value="Action" class="btn btn-primary" />' +
            '<pre>{{p.name | json}}</pre></td>' +
        '</tr>' +
      '</tbody>' +
    '</table>',
    link: function (scope, element, attrs) {

    }
  }
});
