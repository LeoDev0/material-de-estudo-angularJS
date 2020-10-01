app.controller('appController', ['$scope', 'operations', 'Person', function($scope, operations, Person) {

    $scope.person = new Person()

    console.log(operations.sum(2, 1))
}])