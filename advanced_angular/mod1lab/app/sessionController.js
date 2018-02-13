angular.module('app').controller('sessionController', [
  'sessionService',
  'sessionFactory',
  sessionController
]);
var mySessionFactory = new sessionFactory();


function sessionController(sessionService, sessionFactory) {
  var vm = this;

  vm.getFactorySession = getFactorySession;
  vm.setFactorySession = setFactorySession;
  vm.clearFactorySession = clearFactorySession;

  vm.getServiceSession = function() {
    vm.model = {
      name: sessionService.get('name'),
      nickname: sessionService.get('nickname'),
      status: 'Retrieved by service on' + new Date()
    }
  }

  vm.setServiceSession = function() {
    sessionService.save('name', vm.model.name);
    sessionService.save('nickname', vm.model.nickname);
    vm.getServiceSession();
  }
  vm.clearServiceSession = function() {
    sessionService.clear();
    vm.getServiceSession();
  }

  function getFactorySession() {
    vm.model = {
      name: mySessionFactory.get('name'),
      nickname: mySessionFactory.get('nickname'),
      status: 'Retrieved by Factory on ' + new Date()
    };
  }

  function setFactorySession() {
    mySessionFactory.save('name', vm.model.name);
    mySessionFactory.save('nickname', vm.model.nickname);
    getFactorySession();
  }

  function clearFactorySession() {
    mySessionFactory.clear();
    getFactorySession();
  }

  // function formatText(text) {
  //   myFormattingFactory.convertText(text);
  // }


}
