const producto = document.getElementById("producto");
const cambiar = document.getElementById("cambiar");
const verProducto = document.getElementById("verProducto");
const descripcion = document.getElementById("descripcion");

const productos = [
    { nombre: "Guaguas de pan", emoji: "🥐", tipo: "guaguas" },
    { nombre: "Pan de yuca", emoji: "🍞", tipo: "pan-de-yuca" },
    { nombre: "Pan de Ambato", emoji: "🥖", tipo: "pan-de-ambato" },
    { nombre: "Pan de chocolate", emoji: "🍫", tipo: "pan-de-chocolate" }
];

let productoActual = 0;

cambiar.addEventListener("click", function() {
    productoActual = (productoActual + 1) % productos.length;
    const seleccionado = productos[productoActual];
    producto.textContent = seleccionado.emoji;
    producto.setAttribute("title", seleccionado.nombre);
    producto.setAttribute("aria-label", seleccionado.nombre);
    producto.dataset.producto = seleccionado.tipo;
    descripcion.textContent = seleccionado.nombre + " de Twin Ovens Quito";
});

verProducto.addEventListener("click", function() {
    descripcion.textContent = "Producto seleccionado: " + producto.dataset.producto;
});

const horno = document.getElementById("horno");
const activarHorno = document.getElementById("activarHorno");

activarHorno.addEventListener("click", function() {
    const activo = horno.classList.toggle("horno-activo");
    horno.textContent = activo ? "Horno listo para hornear" : "Horno apagado";
});
