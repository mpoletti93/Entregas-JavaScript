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