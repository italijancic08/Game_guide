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