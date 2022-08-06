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
    background: "linear-gradient(to left, #9AEC47, #64B725)",
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
            Toastify({ //muestro un pequeña alerta cuando se elimina un contacto
                text: "Contacto Eliminado",
                duration: 3000,
                //destination: "https://github.com/apvarun/toastify-js",
                //newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "linear-gradient(to right, #EC4747, #25B7A7)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            console.log(`${contacto.nombre} eliminado`)
            console.log(contactos)
        })
    })
})


//consulta de dolar de la pag criptoya
const divDolar = document.getElementById("divDolar")

setInterval(() =>{ //seteo el intervalo para que actualice
fetch("https://criptoya.com/api/dolar")
.then(response => response.json())//transformo la promesa en un json
.then(({oficial, solidario, blue,ccb, mep, ccl}) => {
    divDolar.innerHTML = ` 
    <h2>COTIZACIÓN DOLAR</h2>
    <p> Oficial: $${oficial}</p>
    <p> Solidario: $${solidario}</p>
    <p> Blue: $${blue}</p>
    <p> CCB: $${ccb}</p>
    <p> MEP: $${mep}</p>
    <p> CCL: $${ccl}</p>
    ` 
})
},3000)

//pequeña calculadora 
function calcular(operacion){
    var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value 
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}

/*
//Consulta del clima para ARG
const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

//conecto al div donde voy a mostrar el clima
const divClima = document.getElementById('divClima')

fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Buenosaires","arg"&appid=${API_KEY}`)
.then(response => response.json())
.then(datos => {
    let {lat, lon, name:nombre, country:pais, state:provincia} = datos[0]

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp `)
    .then(response => response.json())
    .then(({main,weather}) => {
        divClima.innerHTML = `
        <p>Ciudad: ${nombre} </p>
        <p>Provincia: ${provincia} </p>
        <p>Pais: ${pais} </p>
        <p>Temperatura: ${main.temp} °C</p>
        <p>Sensacion Termica: ${main.feels_like} °C</p>
        <p>Presion: ${main.pressure} hPa</p>
        <p>Humedad: ${main.humidity}%</p>
        <p>Tiempo: ${weather[0].description} </p>
        `
    })
})
*/