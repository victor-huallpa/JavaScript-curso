//------------------------------------
// |            .children
// |
// | Devuelve o retorna un HTMLCollection 
// | 
// |
// | elemento.children 
//------------------------------------
// en caso de no encontrarlo devuelve un array HTMLCollection vacío []
// const bnt = document.querySelector(".containerButtons");
// console.log(bnt.children);

//------------------------------------
// |            .parentElement
// |
// | Devuelve o retorna la etiqueta padre
// | 
// |
// | elemento.parentElement 
//------------------------------------
// en caso de no encontrarlo devuelve un null
// const principalTi = document.getElementById("principalTittle");
// console.dir(principalTi.parentElement);

//------------------------------------
// |            .firstElementChild
// |
// | Devuelve o retorna el primer elemento hijo
// |
// | 
// | elemento.firstElementChild 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null
// const principalHeader = document.getElementsByTagName("header")[0];
// console.dir(principalHeader.firstElementChild);


//------------------------------------
// |            .lastElementChild
// |
// | Devuelve o retorna el último elemento hijo
// |
// | 
// | elemento.lastElementChild 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null
// const principalHeader = document.getElementsByTagName("header")[0];
// console.dir(principalHeader.lastElementChild);


//------------------------------------
// |            .previousElementSibling
// |
// | Devuelve o retorna el hermano anterior
// |
// | 
// | elemento.previousElementSibling 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null
// const prinTi = document.querySelector("#principalTittle");
// console.dir(prinTi.previousElementSibling)


//------------------------------------
// |            .nextElementSibling
// |
// | Devuelve o retorna el hermano posterior
// |
// | 
// | elemento.nextElementSibling 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null
// const prinTi = document.querySelector("#principalTittle");
// console.dir(prinTi.nextElementSibling);

// METODOS IMPORTANTES
//------------------------------------
// |            .matches()
// |
// | Devuelve o retorna true o false si el elemento
// | coincide con el selector que le pasamos como parametro
// |
// | 
// | elemento.matches()
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null
// const prinTi = document.querySelector("#principalTittle");
// console.dir(prinTi.matches("#principalTittle"));
// if(prinTi.matches("#principalTittle")){
//     console.log("La etiqueta coniside con el selector");
// }



//------------------------------------
// |            .closest()
// |
// | Busca en la etiqueta padre más cercana si coincide el selector
// | pasado como argumento a la funcion .closest()
// |
// | 
// | elemento.closest()
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null
// const prinTi = document.querySelector("#principalTittle");
// const prinBody = prinTi.closest("#body");
// console.dir(prinBody);


// RECORRIENDO EL DOM A TRAVÉS DE NODOS


//------------------------------------
// |            .childNodes
// |
// | Devuelve o retorna un NodeList [text, p, text, p]
// | que incluye texto comentarios, parrafos etc
// |
// | 
// | elemento.childNodes
//------------------------------------
// en caso de no encontrarlo retorna un NodeList[] vacío
// const contBnts = document.querySelector(".containerButtons");
// console.log(contBnts.childNodes);


//------------------------------------
// |            .parentNode
// |
// | Devuelve o retorna el nodo padre del nodo
// | 
// |
// | 
// | elemento.parentNode
//------------------------------------
// en caso de no encontrarlo retorna un null
// const contBnts = document.querySelector(".containerButtons");
// console.log(contBnts.parentNode);



//------------------------------------
// |            .firstChild
// |
// | Devuelve el primer nodo hijo
// | 
// |
// | 
// | elemento.firstChild
//------------------------------------
// en caso de no encontrarlo retorna un null
// const contBnts = document.querySelector(".containerButtons");
// console.log(contBnts.firstChild);


//------------------------------------
// |            .lastChild
// |
// | Devuelve el último nodo hijo
// | 
// |
// | 
// | elemento.lastChild
//------------------------------------
// en caso de no encontrarlo retorna un null
// const contBnts = document.querySelector(".containerButtons");
// console.log(contBnts.lastChild);


//------------------------------------
// |            .previousSibling
// |
// | Devuelve el nodo hermano anterior
// | 
// |
// | 
// | elemento.previousSibling
//------------------------------------
// en caso de no encontrarlo retorna un null
// const contBnts = document.querySelector(".containerButtons");
// console.log(contBnts.previousSibling);





//------------------------------------
// |            .nextSibling
// |
// | Devuelve el nodo hermano posterior
// | 
// |
// | 
// | elemento.nextSibling
//------------------------------------
// en caso de no encontrarlo retorna un null
const contBnts = document.querySelector(".containerButtons");
console.log(contBnts.nextSibling);
// console.log(contBnts.nextElementSibling);