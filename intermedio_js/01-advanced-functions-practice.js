// 1. Crea una función que retorne a otra función
function greet(name){
    return `Bienvenido ${name}` 
}

function returnGreet(){
    return greet
}

const greet1 = returnGreet()
console.log(greet1('Victor'))

// 2. Implementa una función currificada que multiplique 3 números

function curryMult(a){return (b) => {return (c) => {return a*b*c}}}
const result = curryMult(2)(4)
const result1 = curryMult(2)
console.log(result(5))
console.log(result(10))
console.log(result1(10)(2))
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function exponet(base, exponente){
    if (base == exponente){
        return base**exponente 
    }
    return exponet(base-1, exponente)
}

console.log(exponet(8,3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(value){
    let newValue = value
    return function(){
        newValue +=10
        console.log(newValue)
    }
}

const counter = createCounter(5)
counter()
counter()


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let result = 0
    for (number of numbers){
        result += number
    }
    return multiplier*result
}

const resultado = sumManyTimes(3, 4,5,6)
console.log(resultado)

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sum(...datas){
    let result = 0
    for(dato of datas){
        result += dato
    }
    return result
}
function processData(data, callback){
    const result = sum(...data)
    callback(result)
}

function callbackFun(result){
    console.log (`El resultado de la suma es ${result}`)
}
        
processData([1, 2, 3, 4, 5], callbackFun)


// 7. Desarrolla una función parcial
function partialSum(a){return (b,c) => {return (a+b)*c}}
const resultSum = partialSum(4)
console.log(resultSum(3,6))

// 8. Implementa un ejemplo que haga uso de Spread
let datos = ['Victor', 'Huallpa', 24, 1.70]
function saludarGreet(nombre, apellido, edad){
    return `Welcome ${nombre} ${apellido} you have ${edad} years old`
}

const resultGreet = saludarGreet(...datos)
console.log(resultGreet)
// 9. Implementa un retorno implícito'arrow function
const result2 = (a, b) => a*b
console.log(result2(4,2))

// 10. Haz uso del this léxico

const sumhandler = {
    num: 12,
    sumFun: function(){
        console.log(this.num+10)
    },
    multiFun:()=>{
        console.log(this.num*10)
    }
}

sumhandler.sumFun()
sumhandler.multiFun()