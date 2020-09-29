const app = angular.module('app', [])

app.controller('appController', function($scope) {

    $scope.estados = ['RJ', 'SP', 'PB', 'RN']

    $scope.pessoa = novaPessoa()

    $scope.pessoas = []

    $scope.salvarPessoa = function(pessoa) {
        $scope.pessoas.push(pessoa)
        $scope.pessoa = novaPessoa()        

        $scope.form.$setUntouched()
        $scope.form.$setPristine()
    }



})

function novaPessoa() {
    return {
        nome: '',
        email: '',
        sexo: 'm',
        estado: 'SP'
    }
}
