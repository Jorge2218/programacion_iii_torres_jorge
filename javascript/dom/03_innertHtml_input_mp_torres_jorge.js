const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Guaguas de pan y varios panes recien horneados";
saludo.textContent = "Twin Ovens panaderia de Quito Ecuador";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h2>Twin Ovens</h2>
<p>Panaderia de Quito Ecuador</p>
<p>Guaguas de pan</p>
<p>Pan de yuca, pan de Ambato y pan de chocolate</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Pedido registrado para", nombre.value);
    saludar.textContent = "Hola " + nombre.value + " tu pedido esta en Twin Ovens";
});
