//funciones avanzadas

// Cuidadano de primera clase
//generar una funcion dentro de una cosntante
const greet = function (name){
    console.log(`Hello ${name}`)
}

greet("Victor")

//una funcion que resive como parametro otra funcion
function processGreeting(greetfunction, name){
    greetfunction(name)
}

//una funcion que retorna otra funcion o una constante funcion
function returnGreeting(){
    return greet
}

processGreeting(greet, "Riout")
const greet2 = returnGreeting()
greet2("Victor Hugo")
// console.log(returnGreeting())

//arrow functions  avanzadas funciones flecha

const multiplay = (a, b) => a*b
console.log(multiplay(10,2))

//- this lexico
const handler = {
    name: "Victor",
    greeting: function(){
        console.log(`Hello, ${this.name}`)
    },
    arrowGreeting: () =>{
        console.log(`Hello, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();//se teien qie finalizar por la IIFE ya que genra todo un entorno de trabajo del script

//IIFE (expresion de funcion invocada inmediatamente)
//se ejecuta automaticamente una ves ejecutado
//-IIFE clasico
(function(){
    console.log("IIFE clasico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

//Parametrso Rest(...)
//pasa que lo que resiva dentro de lparametr olo guradara en una lista array
// esto con la finlaidad de noestar escribiendo cada parametro que toma
function sum(...numbers){
    // let summa = 0
    // for (let i = 0 ; i < numbers.length; i++){
    //     summa += numbers[i]
    // }
    let result = 0
    for (let number of numbers){
        result += number
    }
    // console.log(summa)
    return result
}

sum(1, 2, 3, 4, 5)
sum(10, 15)

// Operador Spread(...)
//lo que se envai se expande 
const numbers = [1, 2, 3]
function sumWithSpread(a,b,c){
    return a + b + c
}

console.log(sumWithSpread(...numbers))


// Closures (Clausuras)
function createCounter(){
    let counter = 0
    //retornamos la funcion y a la par esta encapsulada dentro de otra funcion
    return function (){
        counter ++
        console.log(`Contador: ${counter}`)
    }
}

//almacenamos la funcion retornada 'genera encapsulamiento
const counter = createCounter()
//cada que llamos a la constante mantiene el estado de la varaible modificada
counter()
counter()

//recursividad una funcioin se llama haci misma
//calcular el factorial 
function factorial(n){
    if (n<=1){
        return 1
    }
    return n*factorial(n-1)
}

console.log(factorial(5))


//Funciones Parciales
function partialSum(a){
    return function(b, c){
        return sum(a,b,c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2,3))
console.log(sumWith(1,2))

//Currying
function currySum(a){
    return function(b){
        return function(c){
            return function(d){
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks
function processData(data, Callback){
    const result = sum (...data)
    Callback(result)
}

function processResult(result){
    console.log(result)
}

function processResult2(result){
    console.log(`Mi reslutado es: ${result}`)
}
processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi reslutado en la arrow function es: ${result}`)
})
