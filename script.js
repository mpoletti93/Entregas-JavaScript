let  sueldoNeto
let alicuotaSinG = 0.89
let alicuotaConG = 0.75

do{
    sueldoNeto= parseFloat(prompt("Ingresa Tu Sueldo Neto"))
} while (
    isNaN(sueldoNeto)
)

if (sueldoNeto <= 300000){
    resultado = sueldoNeto*alicuotaSinG
} else {
    resultado = sueldoNeto*alicuotaConG
}
console.log(resultado)

const contenerdor = document.getElementById("contenedor")
contenerdor.innerHTML = resultado
