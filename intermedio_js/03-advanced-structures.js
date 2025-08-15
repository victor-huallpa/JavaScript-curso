// Estructuras avanzadas

// Arrays Avanzados

// -Metodos Fucnionales
// forEch

let numbres = [1, 2, 3, 4, 5, 6]
//forEach funcion que resive una funcion en este caso para iterar
numbres.forEach(element => console.log(element))

// map
//llega a generar un nuevo array al realizar una fucnion para cad auan de ellas
let doubled = numbres.map(element => element * 2)
//verifica si es multiplo de 2
let doubled1 = numbres.map(element => element %2 === 0)
console.log(doubled)
console.log(doubled1)

// Filter
//filtra los elementos que coniicden con la peticion de lafunion
let evens = numbres.filter(element => element %2 === 0)
console.log(evens)

// Reduce
//devuelve solo un dato en este caso numero
let sum = numbres.reduce((previous, current) => previous * current)
console.log(sum)

// - Manipulacion

// flat
// de anida los arrays anidado dentro
let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
let flatArray1 = nestedArray.flat(2)
console.log(flatArray1)
let flatArray2 = nestedArray.flat(3)
console.log(flatArray2)

// flatMap
//aplana el array y lo convierte de acuerdo al map en un array mas complejo o amplio
let phrases = ['hello world', 'Good bye world']
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// -Ordenacioin
//sort 
// funcoin que ordena como si fuera un estrig o orden alfabetico
//caso contrario tienes que pasarale la funcion de ordenacion
let unsorted = ["a", "d", "c","e","f"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a,b) => a - b)
console.log(sorted)

// Reverse
//invierte el array y lo muta, esto significa que el mismo array agurada los elementos
sorted.reverse()
console.log(sorted)

// -Busqueda

// include
//inspecciona el array y verfica si elelemento pasado se encuentra dentro si es haci devuelve un valor bolean
console.log(sorted.includes(5))
console.log(sorted.includes(8))


// find
//Busca el primer elemento que conincida con la funcion pasada
// sorted = [3, 5, 7]
let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

//findIndex

let firstEventIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEventIndex)

// Sets avanzados

// - Operaciones

// Eliminacion de duplicados usndo set y Spread
let numbersArray = [1, 2, 2, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Union
// une y resetea dos set para no tener elementos duplicados usando Spread
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
let union = [...new Set([...setA, ...setB])]
console.log(union)

// Interseccion
//creamos un nuevo set y dentro convertirmos en array el seter para despues usar la fucnion filter y filtrar solo los elementos repeditos con  has de otro set
const intersection = [...new Set([...setA].filter(element => setB.has(element)))]
console.log(intersection)

// Diferencia
const differenceA = [...new Set([...setA].filter(element => !setB.has(element)))]
const differenceB =[...new Set([...setB].filter(element => !setA.has(element)))]
union = [...new Set([...differenceA, ...differenceB])]
console.log(union)

// conversion 

console.log([...setA])
const arraySet = Array.from(setA)
console.log(arraySet)

// Iteracion

//forEach
setA.forEach(e => console.log(e))

// Maps avanzados

let myMap = new Map([
    ['name', 'Vech'],
    ['age', 24]
])
console.log(myMap)
console.log([...myMap])
myMap.forEach((value, key) => console.log(`${key}: ${value}`) )

// -Coversion

// Mapa a Array

const arrayMap = Array.from(myMap)
console.log(arrayMap)

//Mapa a Diccionario/objetos

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)


// Objeto a Mapa
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)
