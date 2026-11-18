console.log(Document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "laboratotrio interdimensional";

const estado = document.getElementById("estado"); 
const boton= document.getElementById("botonportal");
boton.addEventListener("click", function(){
    console.log("ejecutando click");
    estado.textContent="Portal activado";
    console.log("texto cambiado en  el elemento estado");
    alert("proceso d activacion terminado")
});

const mensaje = document.getElementById("mensaje"); 
const cambio= document.getElementById("botoncambio");
botoncambio.addEventListener("click", function(){
    console.log("ejecutando click");
    mensaje.textContent="Morty listo para la aventura";
    console.log("texto cambiado en  el elemento estado");
    alert("proceso de activacion terminado")
});

