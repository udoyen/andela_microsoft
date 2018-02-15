angular.module('app').controller('LabController', [
  function() {
    var vm = this;

    vm.show = show;

    vm.person = [{
        name: 'George Udosen',
        nationality: 'Nigerian',
        date: '1900-1940'
      },
      {
        name: 'Emmanuel Charles',
        nationality: 'Kenyan',
        date: '1900-1940'
      },
      {
        name: 'Tony Blessing',
        nationality: 'Ghanaian',
        date: '1903-1940'
      },
      {
        name: 'Ekanem Uwem',
        nationality: 'South African',
        date: '1900-1940'
      },
      {
        name: 'Ekanem Ukkoh',
        nationality: 'South African',
        date: '1900-1940'
      }

    ];

    function show(person) {
      alert(JSON.stringify(person.name));
    }
  }
]);
