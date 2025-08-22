// Expresiones regulares

// - Sintaxis
const regex = /ab/
const regex2 = RegExp("abc")
const text = "hello abc JAVASCRIPT"

// test: verifica coincidencia con true o false

console.log(regex.test(text))
console.log(regex2.test(text))

const text2 = "Mi edad es de 24"
const regex3 = /\d/g
const regex4 = /[2-3]/

console.log(regex3.test(text2))
console.log(regex4.test(text2))

// replace: reemplaza el texto que coincide con el patron

const regex5 = /JavaScript/
console.log("hello JavaScript".replace(regex5,"JS"))
const text3 = "Estoy contando 1 2 3 4 5 6  7 8 9 0"
console.log(text3.replace(regex3,"[numero]"))

// exec: retorna los detalles de la coincidencia

console.log(regex3.exec(text3))

while ((match = regex3.exec(text3)) !== null){
    console.log(match)
}
