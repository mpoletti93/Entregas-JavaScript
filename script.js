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
}

do{
    sueldoNeto= parseFloat(prompt("Ingresa Tu Sueldo Bruto"))
} while (
    isNaN(sueldoNeto)
)

if (sueldoNeto <= 300000){
    resultado = calcularSing (sueldoNeto, alicuotaSinG);
} else {
    resultado = calcularConG (sueldoNeto, alicuotaConG);
}

console.log(resultado)

const contenerdor = document.getElementById("contenedor")
contenerdor.innerHTML = resultado

//AGREGADO DE ARRAY 
const nombres = ["francisco", "alejandro", "cristian", "emanuel", ]

const nombres2 = ["juan","fede","nico"]

nombres.push("agustin")
nombres2.push("andrea")

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