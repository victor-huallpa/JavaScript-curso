// Manejos de apis

// Metodos HTTP
// - GET leer datos
// - POST agregar datos
// - PUT actualizar datos
// - DELETE eliminar datos

// Codigo de respuesta HTTP:
// - 200 ok
// - 201
// - 400 error 
// - 404
// - 500

// Consumir una API

// GET
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(Response => {
//         // Transforma la respuesta a JSON
//         return Response.json()
//     })
//     .then(data => {
//         // Procesa datos
//         console.log(data)
//     })
//     .catch(error => {
//         console.log("Error", error)
//     })


// Uso de async/await

async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.log("Erro")
    }
}

getUsers()

// Solicitud POST

async function createUsert(){
    try{
        const newUser = {
            name: "javier",
            username: "jave",
            email: "gpt@gmail.com",
            address: {
                street: "hohai",
                suite: "casa num 1234",
                city: "Peru",
                zipcode: "9867-1234",
                geo: {
                    alt: "-123234",
                    lbg: "8324423"
                }
            },
            phone: '51-1234729384',
            website: 'lalalacom',
            company: {
                name: "Riout SAC",
                catchPhrase: "servicio util para el cliente",
                bs: 'esta parte no se de que trata'
            } 
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })

        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

createUsert()

// Herramientas para realizar peticiones HTTP
// - https://postman.com
// - https://apidog.com
// - https://thunderclient.com

// Manejo de errores

fetch('https://jsonplaceholder.typicode.com/mouredev')
    .then(response =>{
        if(!response.ok){
            throw Error(`Status HTTP: ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log("Error", error)
    })

// Metodos HTTP adicionales
// - PASTCH
// - OPTIONS

async function partialuserUpdate(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10",{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: "victor"})
        })

        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

partialuserUpdate()

// Autenticacion meidante API Key

async function getWeather(city){
    // https://openweathermap.org
    const apiKey = "b4f5201a12e45c74309377ab39c7c737"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getWeather("Lima")

// vech1211

// Otros metodos de autenticacion y autorizacion 
// - bear tokens
// - jwt

// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras APIs

async function getPokemon(pokemon){
    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        });
    } catch (error){
        console.log("Error", error)
    }
}

getPokemon('pikachu')