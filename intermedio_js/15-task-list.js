const text = document.querySelector("#text")
const button = document.querySelector("#button")
const list = document.querySelector("#list")

function addTask(){
    if (text.value === "") return

    const newElement = document.createElement("li")
    newElement.setAttribute("class", "item")
    newElement.style.cursor = "pointer"
    newElement.textContent = text.value


    newElement.addEventListener("click", ()=>{
        newElement.remove()
    })

    list.appendChild(newElement)

    text.value = ""
}

button.addEventListener("click", addTask)

text.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        addTask()
    }
})