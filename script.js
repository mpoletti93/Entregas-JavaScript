/*
let nombre = "Mariano"
const contenerdor = document.getElementById("contenedor1")
contenerdor.innerHTML = nombre
*/

let num = 1;
let txt = ""; 

do{
    txt += "El número es:" +  num + "\n"; 
    num++; 
} while (num <= 10)

console.log(txt)

const contenerdor = document.getElementById("contenedor1")
contenerdor.innerHTML = txt

