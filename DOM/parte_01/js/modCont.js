// MODIFICAR HTML TEXTO DEL ELEMENTO

//------------------------------------
// |            .nodeName
// |
// | Devuelve o retorna el nodo (nombre de la etiqueta)
// | en mayusculas, retorna un string
// | 
// |
// | 
// | elemento.nodeName
//------------------------------------
// const titH1 = document.getElementById("principalTittle");
// console.log(titH1.nodeName);

//------------------------------------
// |            container.textContent
// |
// | Devuelve o cambia el contenido de texto
// | de la etiqueta, incluye espacios en blanco
// | 
// | Nos devuelte todo el texto que contenga
// | dentro incluyendo el texto de otras etiquetas
// | 
// | Nos permite cambiar el contenido de texto
// | de una etiqueta
// | 
// | 
// | elemento.textContent
//------------------------------------
// const titH1 = document.getElementById("principalTittle");
// const texH1 = titH1.textContent;
// console.log(texH1);
// titH1.textContent = "CONTENIDO CAMBIADO DINAMICAMENTE CON JS"



//------------------------------------
// |            container.innerText
// |
// | Devuelve o retorna el contenido de texto 
// | renderizado de la etiqueta visible en el
// | navegador
// |
// | Nos permite cambiar el contenido de texto
// | renderizado visible de la etiqueta
// | 
// | 
// | elemento.innerText
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.innerText.length);
// console.log(titH1.textContent.length);



//------------------------------------
// |            .outerText
// |
// | Igual a innerText pero reemplaza 
// | la etiqueta contenedora también
// | 
// | 
// | 
// | elemento.outerText = "Texto agregado"
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.outerText);
// titH1.outerText = "<h1>New text</h1>";


//------------------------------------
// |            .nodeType
// |
// | Devuelve el numero del tipo de elemento
// |
// |
// | 1 elementos pude ser un <div></div>
// | 
// | 3 tipo nodo de texto  
// | 
// | 8 comentarios
// | 
// | elemento.nodeType
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.childNodes[0].nodeType);
// console.log(titH1.childNodes[1].nodeType);


// MODIFICAR HTML DEL ELEMENTO


//------------------------------------
// |            .innerHTML
// |
// | Igual a innerText pero en vez de devolver 
// | un texto, nos devuelve el html
// | Nos servirá para insertar HTML en una etiqueta
// | 
// | 
// | elemento.innerHTML
// |
// | Tener cuidado al permitir que el usuario
// | agregue código mediante innerHTML
// |
//------------------------------------
// const titH1 = document.getElementById("title-index");
// let nom = "Vech";
// const ape = "Huallpa"
// console.log(titH1.innerHTML);
// nom = "Patri";
// // titH1.innerHTML = "<h2> soy un h2</h2>"
// titH1.innerHTML = `<p>Hola mi bombre es ${nom} y mi apellido es ${ape}</p>`;

//------------------------------------
// |            .outerHTML
// |
// | Igual a innerText pero en vez de devolver 
// | o modificar el HTML interior, nos devuelve
// | o nos modifica el HTML externo
// | 
// | elemento.outerHTML
// |
// | Tener cuidado al permitir que el usuario
// | agregue código mediante innerHTML
// |
//------------------------------------
// const titH1 = document.getElementById("title-index");
// let nom = "Vech";
// const ape = "Huallpa"
// console.log(titH1.outerHTML);
// nom = "Patri";
// // titH1.innerHTML = "<h2> soy un h2</h2>"
// titH1.outerHTML = `<p>Hola mi bombre es ${nom} y mi apellido es ${ape}</p>`;



// OBTENER O MODIFICAR LOS ATRIBUTOS DE ETIQUETAS



//------------------------------------
// |            elemento.id
// |
// |
// | Retorna un string con el nombre de id
// | Nos permite cambiar el id
// |
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(typeof titH1.id);
// titH1.id = "otroId"

//------------------------------------
// |            elemento.hasAttributes()
// |
// | Retorna un booleano si la etiqueta tiene
// | un atributo o más, en caso de no tener false
// |
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.children[0].hasAttributes())

//------------------------------------
// |            elemento.hasAttribute("nombreAtributo")
// |
// | Retorna un true si el atributo pasado por 
// | parametro existe, false si es que no.
// |
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.hasAttribute("class"))


//------------------------------------
// |            elemento.getAttributeNames()
// |
// | Retorna un array con los atributos del elemento
// | 
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.getAttributeNames())



//------------------------------------
// |            elemento.getAttribute(nombreAtributo)
// |
// | Devuelve el valor del atributo pasado por 
// | parametro o null si no existe
// | 
//------------------------------------
// const titH1 = document.getElementById("title-index");
// console.log(titH1.getAttribute("id"))


//------------------------------------
// |  elemento.setAtribute("nombreAtributo", "valorAtributo")
// |
// | Añade un atributo con un valor o lo cambia
// | si es que ponemos como primer parametro el nombre de
// | un atributo ya existente.
//------------------------------------
// const titH1 = document.getElementById("title-index");
// titH1.setAttribute("class", "tittle");


//------------------------------------
// |  elemento.removeAttribute("nombreAtributo")
// |
// | Elimina el atributo pasado por parametro
// | 
//------------------------------------
// const titH1 = document.getElementById("title-index");
// titH1.removeAttribute("class")
// const btnChangeColor = document.getElementById("btnChangColor");
// btnChangeColor.disabled = true;

// if(btnChangeColor.disabled){
//     btnChangeColor.setAttribute("class", "displayNone");
// }

// DE ESTA FORMA AGREGAMOS UN ATRIBUTO BOOLEANO

//divSolito.setAttribute("data-name", "");
// <div data-name></div>

// <div class="divConCompania container" desactivar>Texto rojo</div>

// boton.disabled = true;
// <button disabled>Boton</button>



//------------------------------------
// |  elemento.toggleAttribute("nombreAtributo")   
// |
// | Si existe ese atributo en la etiqueta lo quita
// |
// | Si no existe ese atributo en la etiqueta lo agrega
//------------------------------------
const btnChangeColor = document.getElementById("btnChangColor");
// btnChangeColor.setAttribute("class", "displayNone");

btnChangeColor.toggleAttribute("class");
console.log(btnChangeColor.classList);
btnChangeColor.classList.add("tittle");
// btnChangeColor.classList.remove("tittle");
console.log(btnChangeColor.classList);

/*
METODOS QUE MÁS SE USAN


.split

.matches

.contains

.toggle

.classList

.classList.add("nombreDeClase")

.classList.remove("nombreClase")
*/