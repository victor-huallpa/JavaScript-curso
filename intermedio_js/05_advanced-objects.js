// Obejetos avanzados

// - Prototipos y Herencias

//Portotipos
// perosn es un prototipo Node, el prototipo lo tiene internamente
let person = {
    name: 'Riout',
    age: 24,
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))
// console.log(person.prototype)

person.sayAge = function (){
    console.log(`I have ${this.age} years olld`)
}

console.log(person)
person.sayAge()

//Herencia

let programmer = Object.create(person)
programmer.name = 'Vech'
programmer.language = 'Python'

//person.name = 'Victor'//comparte la instancia
console.log(person.name)
console.log(person.language)
//modifica a la instancia programmer ya que es un isntancia distinta apersona
console.log(programmer.language)


console.log(programmer.name)
console.log(programmer.age)
programmer.greet()
programmer.sayAge()

// - Metodos estaticos y de instancia

function Person(name, age){
    this.name = name
    this.age = age
}
Person.prototype
// aniademos una funcion al prototipo
Person.prototype.greet = function(){
    console.log(`Hello, I'm ${this.name}`)
}
let new_person = new Person('Vech', 24)

console.log(new_person)
new_person.greet()

// - Metodos Avanzados

// assign

let personCore = {name: "Riout"}
let personDetails = {age: 24, alias: 'Vech'}
// agrupamo tanto el primer objeto como el segundo objeto, y de esta manera tenemos otro objeto nuevo este hereda los atributos que tenga sus padres
let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries
console.log(Object.keys(fullPerson))//se obtienen las llaves o claves del objeto en una lista
console.log(Object.values(fullPerson))// se obtienen los valores del objeto en una lista
console.log(Object.entries(fullPerson))//  se obtienen tanto las llaves y valores en una lista dentro de otra lista

