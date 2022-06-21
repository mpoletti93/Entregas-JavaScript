let  sueldoNeto
let alicuotaSinG = 0.89
let alicuotaConG = 0.7

function calcularSing (sueldoNeto, alicuotaSinG){
    sueldoNeto*alicuotaSinG
}
function calcularConG (sueldoNeto, alicuotaConG){
    sueldoNeto*alicuotaConG
}

do{
    sueldoNeto= parseFloat(prompt("Ingresa Tu Sueldo Neto"))
} while (
    isNaN(sueldoNeto)
)

//no se porque aca me dice undifined en el resultado 
function calcularSing (sueldoNeto, alicuotaSinG){
    sueldoNeto*alicuotaSinG
}
function calcularConG (sueldoNeto, alicuotaConG){
    sueldoNeto*alicuotaConG
}


// cuando llamo a la funcion me dice que no esta definido 
if (sueldoNeto <= 300000){
    resultado = calcularSing (sueldoNeto, alicuotaSinG);
} else {
    resultado = calcularConG (sueldoNeto, alicuotaConG);
}

console.log(resultado)

const contenerdor = document.getElementById("contenedor")
contenerdor.innerHTML = resultado
