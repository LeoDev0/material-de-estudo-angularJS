app.service('operations', function() {

    console.log('Service created succesfully')

    this.sum = function(valor1, valor2) {
        return valor1 + valor2
    }

    this.subtract = function(valor1, valor2) {
        return valor1 - valor2
    }
})