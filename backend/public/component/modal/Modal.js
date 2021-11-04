"use strict";
//@ts-check
/**
 * componente ventana modal 
 * @module ventana-moddal
 * @author kevin-pilo-umg 
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * agregar atributos a una elemento
 * @returns {void} - componentes del modulo
 * @param {elemento} - elemento html
 * @param {attrObj}  - objeto de atributos
 */
const agreAtributos=(elemento,attrObj)=>{
    for (let attr in attrObj){
        if(attrObj.hasOwnProperty(attr)) elemento.setAttribute(attr,attrObj[attr])
    }
}

/**
 * agregar atributos a una elemento
 * @returns {void} - componentes del modulo
 * @param {elemento} - elemento html
 * @param {attrObj}  - objeto de atributos
 */
const crearElemtPerson=(elemento,atributos,hijo)=>{
    let $elementoPerson = document.createElement(elemento);
    if(hijo !== undefined) hijo.forEach(el => {
        if(el.nodeType){
            if(el.nodeType === 1 || el.nodeType === 11)
            $elementoPerson.appendChild(el);
        }else{
            $elementoPerson.innerHTML += el;
        }
    });
    agreAtributos($elementoPerson,atributos)
    return $elementoPerson;
}




export function Modal(contenido) {
    const contenidoModalEl=crearElemtPerson('div',{
        class:'modal-contenido'
    },[contenido])

    const contenedorModalEl=crearElemtPerson('div',{
        class: 'modal-contenedor'
    },[contenidoModalEl]);
    //imprimir modal
    document.body.appendChild(contenedorModalEl); 
    //borrar modal
    const quitarModal=()=> document.body.removeChild(contenedorModalEl);
    contenedorModalEl.addEventListener('click',(e)=>{
        if (e.target === contenedorModalEl) quitarModal();
    })
}
