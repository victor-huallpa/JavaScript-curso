// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function greet(nombre, callback){
    setTimeout(()=>{
        callback()
        console.log(`Hello ${nombre}`)
    },2000)
}
greet('maria', ()=>{
    console.log("pasaron dos segundos")
})
// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
    setTimeout(()=>{
        console.log("pasaron 1 segundo calback hell")
        callback()
    },1000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("pasaron 2 segundo calback hell")
        callback()
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("pasaron 3 segundo calback hell")
        callback()
    },1000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("finaliza el calback")
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".


function verifiNumber(number){
    return new Promise((resolve, reject)=>{
        console.log("pensndo...")
        setTimeout(()=>{
            if (number % 2 === 0){
                resolve(`El numero ${number} es par`)
            }else{
                reject(`El numero ${number} es impar`)
            }
        },2000)
    })
}

verifiNumber(-3)
    .then(result=>{
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Primera tarea completada")
            resolve()
        },1000)   
    })
}

function secondTask(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Segunda tarea completada")
            resolve()
        }, 2000)
    })
}

function thirdTask(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("Trecera tarea completada")
            resolve()
        },1500)
    })
}
firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(()=>{
        console.log("Tareas completadas")
    })
// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function wait(ms){
    return new Promise(resolve=>{setTimeout(resolve, ms)})
}


async function executeTasks(){
    await wait(1000)
    console.log("Primera tarea completada")

    await wait(2000)
    console.log("Segunda tarea completada")

    await wait(1500)
    console.log("Tercera tarea completada")
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if ( id < 5){
                resolve(`id, nombre : ${id} `)
            }else if (id >= 5 ){
                reject("usuario no encontrado")
            } 
        },2000)
    })
}

async function process(id){
    try{
        let result = await getUser(id)
        console.log(result)
    }catch(error){
        console.error(error)
    }
}
process(4)
process(5)
// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio") //ejecuta primero
//    setTimeout(() => console.log("setTimeout ejecutado"), 0) // entra en cola de las macrotask imprime al final
//    Promise.resolve().then(() => console.log("Promesa resuelta"))// entr ae ncola de las micro task se ejecuta primero
//    console.log("Fin") / ejecuta segundo

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function Promise1(ms){
    return new Promise(resolve=>setTimeout(()=>resolve('primera promesa'),ms))
}
function Promise2(ms){
    return new Promise(resolve=>setTimeout(()=>resolve('segunda promesa'),ms))
}
function Promise3(ms){
    return new Promise(resolve=>setTimeout(()=>resolve('tercera promesa'),ms))
}

Promise.all([Promise1(1000), Promise2(6000), Promise3(2000)]).then(values => {
    console.log(values)
})


// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(secont){

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Tiempo finalizado")
        }, secont)
    })
}

async function star(secont){
    
    let result = await waitSeconds(secont)
    console.log(result)
}

star(10000)
// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
let balance = 500

function checkBalance(){
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve (balance)
        }, 1000);
    })
}

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            if (amount <= balance){
                balance -= amount
                resolve(balance)
            }else if(amount > balance ){
                reject("No cuentas con saldo suficiente")
            }
        }, 2000)
    })
}

async function retirar(amount){ 
    try{
        let money = await checkBalance()
        console.log(`Saldo actual ${money}`)

        console.log(`reitrando ${amount}`)
        let resultado = await withdrawMoney(amount)
        console.log(`Operaicon exitoza, tu sald oactua les de ${resultado}`)
    }catch(error){
        console.error(error)
    }

}


retirar(300)
retirar(300)