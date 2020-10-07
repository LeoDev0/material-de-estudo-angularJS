function appController($scope) {
    console.log('iniciou o controller')

    $scope.pessoa = {
        nome: 'Marco',
        idade: 35
    }
}

app.controller('appController', appController)