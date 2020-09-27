const listaTelefonica = angular.module('listaTelefonica', []);

listaTelefonica.controller('PhoneListController', function ($scope) {
    $scope.phones = [
        {
            name: 'Leo',
            number: '99839742',
        },
        {
            name: 'Marco',
            number: '3320977',
        },
        {
            name: 'Ana',
            number: '999392993',
        },
        {
            name: 'Marcela',
            number: '99987866',
        },
    ];
});
