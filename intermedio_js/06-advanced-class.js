// Clases Avanzadas

class Person {
    constructor(name, age){
        this.name = name
        this.age = name
    }

    greet(){
        console.log(`Hi, I'm ${this.name}`)
    }
}

console.log(Person)

const person = new Person("Vech", 24)
person.greet()

console.log(person)

person.sayAge = function (){
    console.log(`I have ${this.age} years old`)
}
console.log(person)
person.sayAge()

// Clase abastracta
class Animal {
    constructor(name = 'sin nombre'){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSouns(){
        throw new Error("Este metodo tiene que ser instanciado por la subclase")

    }
}

// Error
// const animal = new Animal('Vi')
// console.log(animal)


// - Polimorfismo

class Cat extends Animal {
    //instanciamos el metodo para realizar lo que deseemos 'polimofismo
    makeSouns(){
        console.log('Miau..')
    }
}

class Dog extends Animal {
    makeSouns(){
        console.log('Guau..')
    }
}

const cat = new Cat('RioutCat')
console.log(cat)
cat.makeSouns()

const dog = new Dog('RioutDog')
console.log(dog)
cat.makeSouns()

// - Mixins 'una forma de heredar 

const FlyMixin = {
    fly(){
        console.log(`${this.name} esta volando`)
    }
}

class Bird extends Animal{}

class Dragon extends Animal{}

Object.assign(Bird.prototype, FlyMixin)
const bird = new Bird('RioutBird')
console.log(bird.name)
bird.fly()

const dragon = new Dragon('RioutDragon')
Object.assign(Dragon.prototype, FlyMixin)
console.log(dragon.name)
dragon.fly()

// - Patron Singleton

class Session {
    constructor(name){
        if (Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session('vech')
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session2 === session1)

// - Symbol

const ID = Symbol('id')

class User{
    constructor(name){
        this.name = name
        this[ID] = Math.random()
    }
    getId(){
        return this[ID]
    }
}

const user = new User('Vech')
console.log(user.name)
console.log(user.getId())
console.log(user.ID)
console.log(user[ID])
user[ID] = 1234
console.log(user[ID])

// - instanceof
// se usa para verificar si una instancia pertence a una clase
class Car{}

const car = new Car

console.log(car instanceof Car)

// - create
//crea otra instancia con create
const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)

// - Proxy

const proxy = {
    get(target, property){
        console.log(`Se esta accediendo a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value){
        if (property === 'balance' && value <0){
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance){
        this.balance = balance
    }
}

// const bankAccount = Object.create(BankAccount.prototype|123)
// const bankAccount = new BankAccount(123)
const bankAccount = new Proxy(new BankAccount(50), proxy)

console.log(bankAccount instanceof BankAccount)

console.log(bankAccount.balance)
bankAccount.balance = 100
console.log(bankAccount.balance)

bankAccount.balance = -5




