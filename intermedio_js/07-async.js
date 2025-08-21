// Programaicon asincrona

//codigo sincrono
console.log("Inicio")
for (let i = 0; i < 900000000; i++){}

console.log("Fin")

// Evento Loop (Bucle de evento)

// Componentes del Event Loop:
//1. Call Stack (Pila de ejecucion)
//2. Web APIs (APIs del navegador) o Node.js:
//3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
//1. Call Stack
//2. Operaciones asincronas -> web APIs o Node.js
//3. Operacion termina -> La coloca en task Queue o Microtask Queue
//4. si Call Stack vacio -> Mueve tareas del Microtask Queue o Task Queue al call Stack
//5. El proceso se repite

// Codig o asincrono

// - Callbacks

console.log("Inicio")

setTimeout(() => {//funcion que se ejecuta de acuerdo al tiempo estimado
    console.log("Esto se ejecuta despues de 2 segundos")
}, 2000)

console.log("Fin")

// - Problemas: Callback Hell

function step1(callback){
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    },1000)
}

function step2(callback){
    setTimeout(() => {
        console.log("Paso 2 completados")
        callback()
    },1000)
}

function step3(callback){
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    },1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            "Todos los pasos completados"
        })
    })
})

// - Promesas

const promise = new Promise((resolve, reject) => {
    // IMPORTANTE: Inicialmente escribi setInterval, pero lo correcto es setTimeout
    // setInterval se ejecuta indefinidamente cada 4s, y el proceso nunca finalizaria
    setTimeout(() => {
        const ok = true
        if(ok){
            resolve("Operacion exitosa")
        }else{
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

function  step1Promise(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=>{
        console.log("Todos los proceso con promesa completados")
    })

// - Async/Await
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function process(ms){
    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso despues de 5 segundos")

    await wait(1000)
    console.log("proceso despus de 1 segundo")

    await wait(2000)
    console.log("proceso despues de 2 segundos")

    console.log("Final de proceso")
}

process()