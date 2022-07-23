/*
const products = [
    {id:1, name:"REMERA", price: 100, stock:20},
    {id:2, name:"PANTALON", price: 300, stock:10},
    {id:3, name:"BUZO", price: 150, stock:15},
]

const cart = [];
//defino la estructura del carrito
class ProductCart{
    constructor(obj, qty){
        this.id = obj.id,
        this.name = obj.name,
        this.price = obj.price,
        this.quantity = qty
    }
}

//función para agregar productos al carrito
function addProductToCart(id, quantity = 1) {
const product = products.find(p => p.id == id);
    if (!product) {
        return "El producto no existe";
    }
    if (product.stock <= quantity) {
        return "No hay suficiente stock";
    }
const productCart = cart.find(p => p.id == id);
    if (productCart) {
        productCart.quantity += quantity;
    }
    else {
        cart.push((new ProductCart(product, quantity)));
    }

    product.stock -= quantity;
    return cart;
}

do{
products.id = parseFloat(prompt("Ingresa el codigo de producto que quieres agregar: 1 - REMERA; 2- PANTALON; 3- BUZO")) 
} while  
    (isNaN(products.id))

console.log(addProductToCart(products.id,1))
*/
/*
let sueldoNeto = 0
let alicuotaSinG = 0.89
let alicuotaConG = 0.7
let resultado = 0 
function calcularSing (sueldoNeto, alicuotaSinG){
    resultado = sueldoNeto*alicuotaSinG;
    return resultado 
}
function calcularConG (sueldoNeto, alicuotaConG){
    resultado = sueldoNeto*alicuotaConG; 
    return  resultado 
>>>>>>> PrimeEntregaProyecto
}
const persona1 = new Persona(1, "Francisco", "Pugh", 38, 12000)
const persona2 = new Persona(2, "Dario", "Britos", 20, 22000)
const persona3 = new Persona(3, "Alejandro", "Santos", 19, 17000)
const persona4 = new Persona(4, "Gaston", "Sosa", 21, 13000)
const persona5 = new Persona(5, "Maria", "Parodi", 19, 24000)
const personas = [persona1, persona2, persona3, persona4, persona5]
const divPersonas = document.getElementById('divPersonas')
personas.forEach(persona => {
    divPersonas.innerHTML += `
        <div class="stylePersonas" id="persona${persona.id}">
            <p>Nombre: ${persona.nombre} </p>
            <p>Apellido: ${persona.apellido} </p>
            <p>Edad: ${persona.edad} </p>
            <p>Sueldo: ${persona.sueldo} </p>
        </div>
    `
})
const parrafo = document.createElement("p")
parrafo.innerText = "Hola, como estan?"
parrafo.id = "parrafo1"
document.body.append(parrafo)
document.getElementById('persona1').remove()
<<<<<<< HEAD
divPersonas.removeChild(document.getElementById('persona2'))
=======
const nombresTotales = nombres.concat(nombres2)
let nombreEliminar = prompt("ingrese el nombre a eliminar").toLocaleLowerCase()
let indice = nombresTotales.indexOf(nombreEliminar)
if(indice >= 0){
    nombresTotales.splice(indice,1)
} else {
    alert("Nombre no Encontrado")
}
console.log(nombresTotales)
*/
/*
class User {
    constructor(id, email, password) {
        this.id = id
        this.email = email
        this.password = password
    }
}
const formulario = document.getElementById('idForm')
const usuarios = []
let id = 1;

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
    const user = new User(id, email, password)
    usuarios.push(user)
    console.log(usuarios)
    formulario.reset()
    id++
})
*/

class Contacto { 
//Clase de contactos para deifnir un constructor de cada contacto
    constructor(nombreContacto, numeroTelefono) {
        this.nombre = nombreContacto
        this.numero = numeroTelefono
    }
}

let contactos = [] //array de contactos que voy a ir agregando o quitando 

//guardo en el local storage para que no se eliminen cuando cierro el navegador
if(localStorage.getItem('storageContactos')) { //consulto en el local storage si ya guardo contactos anteriormente
    contactos = JSON.parse(localStorage.getItem('storageContactos'))
//si existen contactos, muestro las tareas almacenadas en el storage, como es un JSON lo parseo
} else {
    localStorage.setItem('storageContactos', JSON.stringify(contactos))
//si no contiene contactos, guardo en mi storage los contactos del array, como es objeto lo convierto a JSON
}

const form = document.getElementById('idForm') 
// consulto el formulario
const botonAgenda = document.getElementById('idBotonAgenda') 
// consulto por el boton de agregar a la agenda
const divAgenda = document.getElementById('divAgenda') 
// consulto el div de agenda 

//evento escuchador cuando se crea un contacto
form.addEventListener('submit', (e) => { 
    e.preventDefault() //prevengo el comportamiento por defecto del formulario
    console.log(e)
    let datForm = new FormData(e.target) 
//genero un objeto de tipo formData 
    const contacto = new Contacto(datForm.get('nombre'),datForm.get('numero')) 
//creo obejeto contacto
    contactos.push(contacto) 
//pusheo el contacto al array
    localStorage.setItem('storageContactos', JSON.stringify(contactos))
//agrego el contacto al local storage pisandolo 
    form.reset() 
//reseteo el formulario 
Toastify({ //muestro un pequeña alerta cuando se genera un contacto
    text: "Contacto Agregado",
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
}).showToast();
})



botonAgenda.addEventListener('click', () => {
//evento para mostar la agenda cada vez que doy clik
    let contactosStorage = JSON.parse(localStorage.getItem('storageContactos'))
    divAgenda.innerHTML = ""
//antes del foreach limpio el html, para que no repita las tareas cada vez que toca el boton
    contactosStorage.forEach((contacto,indice) => { 
//agrego una nueva card por cada contacto agregado
        divAgenda.innerHTML += `
            <div class="card border-primary mb-3" id="contacto${indice}" style="max-width: 20rem;margin:4px;">
            <div class="card-header">${contacto.nombre}</div>
                <div class="card-body">
                <h4 class="card-title">${contacto.numero}</h4>
                <button class="btn btn-danger">Eliminar Contacto</button>
                </div>
            </div>
        `
//le creo un indice a cada uno de los contactos para poder listarlos y eliminarlos posteriormente
    })
    
    contactosStorage.forEach((contacto, indice) => {
        document.getElementById(`contacto${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
//voy a buscar el boton buscando el ultimo elemento hijo de cada div
            document.getElementById(`contacto${indice}`).remove()
            contactos.splice(indice, 1)
            localStorage.setItem('storageContactos', JSON.stringify(contactos))
            Toastify({ //muestro un pequeña alerta cuando se genera un contacto
                text: "Contacto Eliminado",
                duration: 3000,
                //destination: "https://github.com/apvarun/toastify-js",
                //newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "linear-gradient(to right, #EC4747, #B725A7)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            console.log(`${contacto.nombre} eliminado`)
            console.log(contactos)
        })
    })
})
