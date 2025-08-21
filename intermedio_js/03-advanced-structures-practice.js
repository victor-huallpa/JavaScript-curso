
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let myArray = ["hello", "pepito", "welcome"]
let myArray2 = ["hola", "pepito", "bienvenido"]

let doubled = myArray.map(element => element === 'pepito')
console.log(doubled)

let doubled2 = myArray.filter(element => element === 'pepito')
console.log(doubled2)

let doubled3 = myArray2.reduce((antes, despues) => antes + ' ' + despues, 'Oh')
console.log(doubled3)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numbers = [1, 2, 3, 4, 5, 6]
let result = numbers.map(element => element ** 3)
result = result.filter(e => e % 2 === 0)
console.log(result)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let MyStrings = ['Hello', ['Como', ['estas', [', donde te encuentras', ['y hace cuanto regresaste']]]]]

MyStrings = MyStrings.flat(4)
MyStrings = MyStrings.flatMap(element => element.split(' '))
console.log(MyStrings)

// 4. Ordena un array de números de mayor a menor
let unsorted = [3, 4, 1, 6, 10]
let sorted = unsorted.sort((a, b) => a -b).reverse()
console.log(sorted)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let setA = new Set(['hello', 'pepito', 'vech', 'welcome'])
let setB = new Set(['pepito','hello', 'vech', 'bienvenido'])
//union
let arraySet = new Set([...setA,...setB])
console.log(arraySet)
//interseccion
arraySet = new Set([...setA].filter(e => setB.has(e)))
console.log(arraySet)
//diferencia
let arraySet1 = new Set([...setA].filter(e => !setB.has(e)))
let arraySet2 = new Set([...setB].filter(e => !setA.has(e)))
arraySet = [...new Set([...arraySet1, ...arraySet2])]
console.log(arraySet)

// 6. Itera los resultados del ejercicio anterior
arraySet.forEach(e => console.log(e))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const myMap = new Map([
    ['name', 'Victor'],
    ['age', 24],
    ['email', 'vech@gmail.com']
])
console.log(myMap)
myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// 8. Dado el mapa anterior, crea un array con los nombres
let arrayFromMap = [...myMap]
let arrayFromMap1 = Array.from(myMap)
console.log(arrayFromMap)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let newArray = arrayFromMap => {
    // console.log(arrayFromMap[1][0])
    if(arrayFromMap[1][1] > 17){
        return arrayFromMap[2]
    }else{
        return []
    }
}
console.log(newArray(arrayFromMap))

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
let objectFromMap = Object.fromEntries(myMap)
let mapByEmail = new Map([
    [ objectFromMap.email, objectFromMap ]
  ])
  
console.log(mapByEmail)
let mapFromObject = new Map(Object.entries(objectFromMap))