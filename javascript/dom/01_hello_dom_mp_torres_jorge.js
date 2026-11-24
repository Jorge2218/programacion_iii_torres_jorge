console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Twin Ovens panaderia de Quito Ecuador";

const estado = document.getElementById("estado");
const botonHorno = document.getElementById("botonportal");
botonHorno.addEventListener("click", function() {
    console.log("Encendiendo el horno");
    estado.textContent = "Horno encendido en Twin Ovens";
    alert("El horno esta listo");
});

const mensaje = document.getElementById("mensaje");
const botonProductos = document.getElementById("botoncambio");
botonProductos.addEventListener("click", function() {
    console.log("Mostrando productos");
    mensaje.textContent = "Guaguas de pan, pan de yuca y pan de Ambato";
    alert("Productos de Twin Ovens");
});

const contador = document.getElementById("contador");
const botonLote = document.getElementById("nuevoviaje");
let lotesPreparados = 0;
botonLote.addEventListener("click", function() {
    lotesPreparados++;
    contador.textContent = lotesPreparados;
});
