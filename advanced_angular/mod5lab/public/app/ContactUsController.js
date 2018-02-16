angular.module('app').controller('ContactUsController', [
    function () {
        var vm = this;

        vm.alertSent = alertSent;

        function alertSent() { 
            alert("message", "Message sent!");
         }
    }
]);