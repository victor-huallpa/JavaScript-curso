// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const newH1 = document.createElement("h1")
newH1.textContent = "Hello World"

const body = document.querySelector("body")
const secondItem = body.children[0]
body.insertBefore(newH1, secondItem)

// // 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const newImg = document.createElement("img")
newImg.setAttribute("id", "myImg")
body.insertBefore(newImg, body.children[1])
if(document.querySelector("#myImg") && document.querySelector("h1")){
    // console.log("hello")
    newImg.setAttribute("src", "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-135596.jpg")
}

// const pageImage = document.querySelector("#myImage")
// pageImage.setAttribute("src", "https://iamge/img.jpg")


// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const newDiv = document.createElement("div")
const getIgm = document.querySelector("#myImg")
newDiv.setAttribute("id", "box")
getIgm.after(newDiv)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=>{
        newDiv.innerHTML = "<p>El DOM esta cargado completamente."
        console.log("El DOM esta completamente cargado")
        newDiv.setAttribute("class", "resaltado")

    },1000)
})

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const newParagraph = document.createElement("p")
newParagraph.textContent = "parrafo insertado"
const div = document.getElementById("box")
if(div){
    setTimeout(()=>{
        const secondDiv = div.children[1]
        div.insertBefore(newParagraph, secondDiv)
    },1500)

}
newParagraph.style.color = "green"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const button = document.createElement("button")
button.textContent = "agregar"
button.style.backgroundColor = "blue"
button.setAttribute("id", "button")
div.after(button)
const list = document.createElement("ul")
list.setAttribute("id", "list")
button.after(list)

const getUl = document.getElementById("list")
const getButton = document.getElementById("button")
let contador = 1
function createLi(){
    const liCreate = document.createElement("li")
    liCreate.textContent = `Li numere ${contador}`

    liCreate.addEventListener("click",()=>{
        liCreate.remove()
    })

    const firstElement = getUl.children[-1]
    getUl.insertBefore(liCreate,firstElement)
    contador ++
}
getButton.addEventListener("click", createLi)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const newParagraph1 = document.createElement("p")
newParagraph1.textContent = "Este parrafo sera eliminado"
newParagraph1.setAttribute("id", "deleteParagraph")
const newButton = document.createElement("button")
newButton.textContent = "elinimar parrafo"
newButton.style.color = "red"
newButton.setAttribute("id", "delete")
list.after(newButton)
newButton.after(newParagraph1)



newButton.addEventListener("click",()=>{
    if(document.getElementById("deleteParagraph")){
        newParagraph1.remove()
        newButton.textContent = "Agregar parrafo"
        newButton.getAttribute("id", "create")
        newButton.style.color = "green"
    }else{
        newButton.after(newParagraph1)
        newButton.textContent = "elinimar parrafo"
        newButton.style.color = "red"
    }

})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const newDiv2 = document.createElement("div")
newDiv2.setAttribute("id", "content")
newDiv2.textContent = "contenido inicial"
newParagraph1.after(newDiv2)

const newH2 = document.createElement("h2")
newH2.textContent = "Nuevo Contenido"
setTimeout(()=>{
    newDiv2.textContent = ''
    newDiv2.prepend(newH2)
},5000)


// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const newButton3 = document.createElement("button")
newButton3.setAttribute("id", "greetBtn")
newButton3.style.color = "red"
newButton3.textContent = "alerta"
newDiv2.after(newButton3)

newButton3.addEventListener("click", ()=>{
    alert("¡Hola!")
})
// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
const newBr = document.createElement("br")
newButton3.after(newBr)
const newInput = document.createElement("input")
newInput.setAttribute("type", 'text')
newInput.setAttribute("id", 'textInput')
newInput.setAttribute("placeholder", 'ingresa texto')
newBr.after(newInput)

const newDiv3 = document.createElement("div")
newDiv3.setAttribute("id", "result")

const getInput = document.getElementById("textInput")

const newDiv4 = document.createElement("div")
newDiv4.setAttribute("id", "result")
newInput.after(newDiv4)
newInput.addEventListener("input",()=>{
    newDiv4.textContent = getInput.value

})
// newDiv4.after(newBr)

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
const newButton4 = document.createElement("button")
newButton4.setAttribute("id", "backgroundBtn")
newButton4.textContent = "Cambiar color de la pagina"
newButton4.style.color = "orange"
newDiv4.after(newButton4)
const listColor = ['blue', 'yellow', 'green', 'white', 'black', 'orange']
newButton4.addEventListener("click", ()=>{
    const numRam = Math.floor(Math.random()*(5 - 0 + 1)) + 0
    const body = document.querySelector('body')
    body.style.backgroundColor = listColor[numRam]
})