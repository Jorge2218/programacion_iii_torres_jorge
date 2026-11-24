const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent="mensaje desde otro universo";
saludo.innerHTML="<h1>Hello con inheritHtml</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML=`
<h1>Rick</h1>
<p>Dimensipon : C-137</p>
<p>especie: humano</p>
<p>Estado : Vivo</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function(){
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola " + nombre.value;
});