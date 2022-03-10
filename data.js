import{agregarproducto,optener} from './main.js';



let descripcion=document.getElementById('descripcion')
let precio=document.getElementById('precio')
let stok=document.getElementById('stok')
let categoria=document.getElementById('categoria')
let alta=document.getElementById('alta')


alta.addEventListener('submit', async e =>{
e.preventDefault()
const producto={
'descripcion': descripcion.value,
'precio': precio.value,
'stok': stok.value,
'categoria': categoria.value
}
await agregarproducto(producto)
alta.reset();
})


