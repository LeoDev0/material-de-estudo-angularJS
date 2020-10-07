app.filter('saudacao', function() {
    return function(nome) {
        return `Olá ${nome}!`
    }
})

app.filter('multiplicaPorTres', function() {
    return function(valor) {
        return valor*3
    }
})
