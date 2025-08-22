// Depuracion

// console.log()

function sum(a, b){
    console.log("a: ",a)
    console.log("a: ",typeof a)
    console.log("b: ", b)
    console.log("b: ", typeof b)
    return a+b
}
console.log(sum(3, "5"))

// Depurador (profesional)

function divide(a, b){
    if (b === 0){
        throw new Error("No se puede devidir entre cero")
    }
    return a/b
}
console.log(divide(5, 0))