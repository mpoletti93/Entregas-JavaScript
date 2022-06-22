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
    sueldoNeto= parseFloat(prompt("Ingresa Tu Sueldo Neto"))
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
