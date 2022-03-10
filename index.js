import { optener,optenercoleccion} from "./main.js";

let contenido=document.getElementById('contenido')

window.addEventListener('DOMContentLoaded', async (e)=>{
    const querySnapshot= await optener()
    optenercoleccion((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        //console.log(doc.data())
        const dato=doc.data()
        contenido.innerHTML+=`
        <h3>${dato.producto.descripcion}</h3>
        <p>${dato.producto.precio}</p>
        <p>${dato.producto.stok}</p>
        <p>${dato.producto.categoria}</p>
        `
    })
    })
    })
