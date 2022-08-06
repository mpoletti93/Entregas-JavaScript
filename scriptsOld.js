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