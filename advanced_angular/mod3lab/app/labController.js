angular.module("app").controller("LabController", [
  function() {
    var vm = this;

    vm.alerts = [];

    vm.dateOptions = {
      showWeeks: false,
      minDate: new Date()

    };

    vm.date = new Date();

    vm.addDanger = addDanger;
    vm.addWarning = addWarning;
    vm.dismissAlert = dismissAlert;

    function addDanger() {
      addAlert("danger", "Danger, Will Robinson! Danger!");
    }

    function addWarning() {
      addAlert("warning", "Warning! Warning! Alien approaching!");
    }

    function addAlert(type, text) {
      vm.alerts.push({ type: type, text: text });
    }

    function dismissAlert(index) {
      vm.alerts.splice(index, 1);
    }
  }
]);

angular.module('app').animation('.alert-animation', [alertAnimation]);

function alertAnimation() {
    return {
        enter: function (element, done) {
            element.css({ opacity: 0, position: "relative", top: "10px", left: "20px" })
                .animate({ top: 0, left: 0, opacity: 1 }, 1000, done);
        },
        leave: function (element, done) {
            element.css({ top: 0, left: 0, opacity: 1, position: "relative" })
                .animate({ top: "10px", left: "20px", opacity: 0 }, 1000, done);
        }
    }
}
