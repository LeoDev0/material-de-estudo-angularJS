app.controller('appController', function($scope) {
    $scope.name = 'leo'

    $scope.myFunction = function(name) {
        alert(`Olá ${name}`)
    }
})