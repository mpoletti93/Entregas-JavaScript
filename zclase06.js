//Clase 06 "Arrays"

const IVA = 1.21

const sinNada = []

const cosas = ["Hola", 1, true, "Chau"]

console.log(cosas[2]) //asi accedes a un objeto dentro del array

cosas[3]= "Adios" //asi reemplazas un valor dentro del array o se puede asignar un nuevo valor a una posición
cosas[10]= "Adios" //asi se puede asignar un nuevo valor a una posición

for (let i = 0; i < 11; i++){ //se usa el for solo para generar un undice dentro del array
    console.table(cosas[i]) //i = 0, 1, 2, 3, 4, ... 10
    console.log(i)
}

//LENGTH

for (let i = 0; i < cosas.length; i++){ //Propiedad para que muestre todos los valores del array indistinto de la cantidad
    console.table(cosas[i])
}


//Agregar elementos

console.log(sinNada)

sinNada.push("calefactor")//metodo para agregar elementos al final del arreglo

console.log(sinNada)

sinNada.push("Frazada")

console.log(sinNada)

sinNada.unshift("Buzo")//metodo para agregar elementos al principio del arreglo

console.log(sinNada)

//eliminar elementos

sinNada.shift() // elimina el primer elemento del array
console.log(sinNada)
sinNada.pop() // elimina al final del arreglo 
console.log(sinNada)

//SPLICE

//const tutoresProfe = ["Francisco", "Alejandro", "Cristian", "Emanuel"]

tutoresProfe.splice(2,1) 
/* Elimina una cantidad especifica de elementos del array, 
primero el indice y desp la cantidad de elementos a eliminar*/

console.log(tutoresProfe)

tutoresProfe.splice(2) //asi indica cuantos elementos quiero que exista y elimina el resto

//INDEXOF

const tutoresProfe = ["francisco", "alejandro", "cristian", "emanuel"]

let nombreEliminar = prompt("ingrese el nombre a eliminar").toLocaleLowerCase() 

let indice = tutoresProfe.indexOf(nombreEliminar) //index o -1 si no lo encuentra

if(indice >= 0){
    tutoresProfe.splice(indice,1) //caso valido
} else {
    alert("Nombre no Encontrado")
}

//JOIN (convierte todos los elementos de un array en un string)

const tutoresProfe2 = ["francisco", "alejandro", "cristian", "emanuel"]
console.log(tutoresProfe.join(",")) //concatena todo con una , 

//CONCAT (combina 2 array entre si)

const tutoresProfe3= ["francisco", "alejandro", "cristian", "emanuel"]
const alumnos = ["nico", "mariano", "maria", "hernan"]

const comision = tutoresProfe.concat(alumnos) //concatena los 2 array en uno

console.log(comision)

//SLICE (copia una parte del array dentro de un nuevo array)
const alumnos2 = ["nico", "mariano", "maria", "hernan"]

console.log(alumnos2.slice(1,2)) //el primer numero es por donde empieza y el segundo donde termina
/*se utiliza para ver algunos campos de un array
sin tener que eliminar elementos de un array, es decir
que no modifica los valores que hay dentro del array*/

//INCLUDES (devuelve true o flase si el valor esta en el array)

console.log(comision.includes("alejandro")) //solo devuelve v o f si el valor esta en la array

//REVERSE (invierte el orden de los elementos)

console.log(comision.reverse)

//COMPLETAR CON EL FOR

