// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
function exaple(){
    setTimeout(()=>{
        console.log("hello")
    }, 1000)
}
exaple()

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución

function exaple(){
    setTimeout(()=>{
        console.log("hello")
    }, "1000")
}
exaple()
