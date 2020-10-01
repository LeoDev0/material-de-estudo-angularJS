app.factory('Person', function() {
    const Person = function() {
        this.name = 'Leo'
        this.age = 26

        this.sayHello = function() {
            return 'Hello ' + this.name + '!'
        }
    }

    return Person
})