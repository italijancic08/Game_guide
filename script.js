const consejos = [
    "Lleva siempre comida antes de comenzar el ascenso.",
    "No gastes toda tu resistencia en una sola subida.",
    "Explora rutas alternativas para evitar zonas peligrosas.",
    "Usa la cuerda cuando el terreno sea muy difícil.",
    "Descansa antes de intentar una pared complicada.",
    "Guarda las bebidas energéticas para emergencias.",
    "Observa el terreno antes de comenzar a escalar."
];

const listaConsejos = document.getElementById("listaConsejos");
const buscador = document.getElementById("buscador");
const botonTip = document.getElementById("mostrarTip");
const tip = document.getElementById("tip");

const formulario = document.getElementById("formulario");
const mensajeError = document.getElementById("mensajeError");

function mostrarConsejos(lista){

    listaConsejos.innerHTML = "";

    lista.forEach(function(consejo){

        const li = document.createElement("li");
        li.textContent = consejo;

        listaConsejos.appendChild(li);

    });

}

function filtrarConsejos(){

    const texto = buscador.value.toLowerCase();

    const resultado = consejos.filter(function(consejo){

        return consejo.toLowerCase().includes(texto);

    });

    mostrarConsejos(resultado);

}

function mostrarConsejoAleatorio(){

    const indice = Math.floor(Math.random() * consejos.length);

    tip.textContent = consejos[indice];

}

function validarFormulario(event){

    event.preventDefault();

    mensajeError.textContent = "";

    try{

        const nombre = document.getElementById("Nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if(nombre === "" || email === "" || mensaje === ""){

            throw new Error("Todos los campos son obligatorios.");

        }

        if(!email.includes("@")){

            throw new Error("Ingrese un correo electrónico válido.");

        }

        mensajeError.style.color = "#7dff9d";
        mensajeError.textContent = "Formulario enviado correctamente.";

        formulario.reset();

    }

    catch(error){

        mensajeError.style.color = "red";
        mensajeError.textContent = error.message;

    }

}