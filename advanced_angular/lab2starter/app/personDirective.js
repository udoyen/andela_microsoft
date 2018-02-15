angular.module('app').directive('data', function () {
  return {
    restrict: 'E',
    scope: {
      person: '=',
      action: '&',
     
    },    
    replace: true,
    template:
    '<div class="col-sm-12" ng-repeat="p in person track by $index">'+
    '<div class="col-sm-3">{{p.name}}</div>' +
    '<div class="col-sm-3">{{p.nationality}}</div>' +
    '<div class="col-sm-3">{{p.date}}</div>' +
    '<div class="col-sm-3"><input type="button" ng-click="action()" value="Action" class="btn btn-primary" /></div>' +
    '</div>' ,
    link: function (scope, element, attrs) {
          element.bind('mouseenter', function () {
            element.css('background-color', 'silver')
          });
    }
  }
});
