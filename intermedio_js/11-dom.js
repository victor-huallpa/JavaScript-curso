// Manejo del DOM (Document Object Model)

// console.log(document)

//Metodos basicos (selector HTML)

const myElementById = document.getElementById("id")

const myelementByClass = document.getElementsByTagName("class")

const myelementBytag = document.getElementsByTagName("tag")

// Metodos mas modernos (selector CSS)

document.querySelector(".paragraph")
document.querySelectorAll(".paragraph")

// - Manipulacion de lementos

const title = document.getElementById("title")
title.textContent = "Hello JavaScript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo parrafo</p>"

// Modificar elementos

// Obtencion del atributo 

const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo 
link.setAttribute("href", "https://example.com")

// Comprobacion de atributos
const hasTarget = link.hasAttribute("target")

// Eliminacion de atributos
link.removeAttribute("target")

// - Interaccion con clases CSS

const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// Creacion y eliminacion de elementos

// Creacion
const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuebo parrafo creado desde JS"
newParagraph.style.padding = "8px"

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Insertacion en un lugar en concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem)
itemsList.prepend(newItem)
secondItem.before(newItem)
secondItem.after(newItem)

// Eliminacion

newParagraph.remove()

// Eliminacion tradicional

const parent = newParagraph.parentElement
parent.removeChild(newParagraph)

// - Elementos del DOM

function showMsg(){
    alert("Clic!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", ()=>{
    alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoader", () => {
    console.log("El DOM esta completamente cargado")
})

sendButton.addEventListener("mouseenter", ()=>{
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    
})