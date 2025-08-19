// 1. Agregega una función al prototipo de un objeto
let greet = {
    entrada: 'hello',
    salida: 'adios'
}

greet.action =function (animal_type){
    if(animal_type === 'person'){
        console.log(`dar la mano`)
    }else if(animal_type === "animal"){
        console.log(`dar la pata`)
    }
}
console.log(greet)

console.log(greet.action('animal'))

// 2. Crea un objeto que herede de otro
let transport = {
    action: 'trasladar',
    action2: 'recoger',
    action3: 'dejar'
}

let plane = Object.create(transport)
console.log(plane)
plane.action4 = 'fly'

transport.action = "transportar"
console.log(plane.action)//busca si tiene esta accion dentro caso contrario la busaca de la herencia
plane.action = "transportar"// la acion lo vulve propia
console.log(plane.action)
transport.action = "trasladar"
console.log(plane.action)
console.log(plane.action2)
console.log(plane.action3)
console.log(plane)



// 3. Define un método de instancia en un objeto

let movies = {
    gener0: 'terror',
    titulo: 'La Momia',
    impacto(){
        console.log(`${this.titulo} asusta`)
    }
}
let acction = Object.create(movies)
acction.posCredito = function (){
    console.log(`${this.titulo} 2 proximamente el despertar `)
}
acction.impacto()
acction.posCredito()

// 4. Haz uso de get y set en un objeto
const idPerson = {
    get(target, property){
        console.log(`Estas accediendo a el id ${property}`)
        return target[property]
    },
    set(target, property, value){
        if (property === 'id_user' && value <10000){
            throw new Error("El id no puede ser menor de 5 digitos")
        }
        target[property] = value
    
    }
}

class AccessId{
    constructor(id_user){
        this.id_user = id_user
    }
}

const id = new Proxy(new AccessId(40000),idPerson)
// console.log(id instanceof AccessId)


console.log(id.id_user)
id.id_user = 50400
// id.id_user = 100
console.log(id.id_user)

// 5. Utiliza la operación assign en un objeto
let greeted ={
    walk(){
        console.log("el esta caminando. ")
    }
}

let person = {
    name: 'vech',
    age: 24
}

Object.assign(person, greeted)
console.log(person)

// 6. Crea una clase abstracta
class Car{
    constructor(name = 'sin nombre'){
        if (new.target === Car){
            throw new Error('No se puede instanciar una clase abastracta')
        }
        this.name = name
    }

    run(){
        throw new Error('Este metodo no puede ser instanciado')
    }

}

// const carOjb = new Car('Ferrari')
// console.log(carOjb)
// carOjb.run

// 7. Utiliza polimorfismo en dos clases diferentes
class CarFamily extends Car{
    run(){
        console.log(`La ${this.name} esta en movimiento`)
    }
}

class Derpotivo extends Car{
    run(){
        console.log( `El ${this.name} esta en movimiento`)
    }
}

let derpotivo = new Derpotivo('Ferrari')
console.log(derpotivo.name)
derpotivo.run()

let carFamily = new CarFamily('tucson')
console.log(carFamily.name)
carFamily.run()

// 8. Implementa un Mixin
const minxinSwin = {
    swin(){
        console.log('Esta nadando.')
    }
}

class Fish{}

class Shark{}

Object.assign(Fish.prototype, minxinSwin)
Object.assign(Shark.prototype, minxinSwin)

const fish = new Fish()
const shark = new Shark()

fish.swin()
shark.swin()

// 9. Crea un Singleton
class Charge{
    constructor(code){
        if (Charge.instance){
            return Charge.instance
        }
        this.code = code
        Charge.instance = this
    }

    static paid(){
        Charge.instance = null
        console.log('pagaste instancia eliminada.')
    }
}

const idCharge = new Charge(34)
console.log(idCharge.code)
Charge.paid()
const idCharge2 = new Charge(59)
console.log(idCharge2.code)

// 10. Desarrolla un Proxy

const proxy = {
    get(target, property){
        console.log(`this is  ${property}, go`)
        return target[property]
    },
    set(target, property, value){
        if(property === "validation" && value === 'admin'){
            console.log("Tiene acceso")
            target[property] = value
        }else{
            console.log(`Lo siento el tipo de usuario ${value} no puede acceder, solo administradores pueden acceder`)

        }
    }
}

class Restriction {
    constructor(validation){
        this.validation = validation
    }
}

const restriction = new Proxy(new Restriction('admin'), proxy)
console.log(restriction.validation)
restriction.validation = 'user'
console.log(restriction.validation)
