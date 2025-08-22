// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>{
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error=>{
        console.log("Error", error)
    })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/moure")
    .then(response => {
        if (!response.ok){
            throw Error(`Status HTTP: ${response.status}` )
        }
        return response.json()
    })
    .then(dato=>{
        console.log(dato)
    })
    .catch(error => {
        console.log( error)
    })

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getAPI(){
    try {
        let url = 'https://jsonplaceholder.typicode.com/todos'
        let response = await fetch(url)
        const data =  await response.json()
        // let titles = data.map(item => item.title)
        // console.log(titles)
        data.forEach(titles => {
            console.log(titles.title)
        })
        // console.log(data["title"])
    }catch(error){
        console.log(error)
    }

}
getAPI()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function getAPI2(){
    try{
        const newConmment ={
            postId: "123",
            name: "titulo general del comentario",
            email: "123@gmail.com",
            body: "todo este contenido esta dispuesto dentro de cuarenta dias entendiste o como te lo explico."
        }
        const url = "https://jsonplaceholder.typicode.com/comments"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newConmment)
        })
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

getAPI2()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function putAPI(){
    try {
        const url = `https://jsonplaceholder.typicode.com/photos/1`
        const upData = {
            albumId: 123,
            title: "Gato Arania",
            url: "Img perdida en el espacion",
            thumbnaUrl: "https://nosenada.com/123"
        }
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(upData)
        })
        const data = await (response).json()
        console.log(data)
    }catch(error){
        console.log("Error ", error)
    }
}
putAPI()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function partialAPIS(){
    try{
        const url = "https://jsonplaceholder.typicode.com/todos/4"
        const parsialData = {
            title: 'El perro en bomba'
        }
        const response = await fetch(url,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(parsialData)
        })

        const data = await response.json()
        console.log(data.title)
    }catch(error){
        console.log("Error: ", error)
    }
}
partialAPIS()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deleteAPI(){
    try{
        const url = "https://jsonplaceholder.typicode.com/todos/2"

        const response = await fetch(url, {
            method: "DELETE"
        })
        console.log("Estatus: ", response.status)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error: ", error)
    }
}
deleteAPI()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getOpenApi(city){
    const apiKey = "b4f5201a12e45c74309377ab39c7c737"
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        console.log(response.status)
        const data = await response.json()
        data.list.forEach(m =>{
            console.log(m.clouds)
        })
        // console.log(data.list)
    }catch(error){
        console.log("Error: ", error)
    }
    
}
getOpenApi('Puno')

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function pokeApi(poke){
    const apiKey = ""
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`

    try{
        const response = await fetch(url)
        console.log(response.status)
        const data = await response.json()
        // if (data.held_items && data.held_items.length > 0) {
        //     data.held_items.forEach(m => {
        //         if (m.version_details) {
        //             m.version_details.forEach(n => {
        //                 console.log(n.version.name);
        //             });
        //         }
        //     });
        // } else {
        //     console.log("Este Pokémon no tiene held_items.");
        // }
        console.log(data.species)
        const urlCadena = data.species['url']
        const res = await fetch(urlCadena)
        const da = await res.json()
        const url_chain = da.evolution_chain['url']
        const res2 = await fetch(url_chain)
        const da2 = await res2.json()
        console.log(da2.chain.evolution_details)
        // data.held_items.forEach(m => {
        //     m.version_details.forEach(n => {
        //         console.log(n.version.name)
        //     })
        // })
        // console.log(data.held_items)
    }catch(error){
        console.log("Error: ", error)
    }
}
pokeApi('nidoqueen')

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
// realizamos este ejercicio con postman
