const stock = document.getElementById("stock");
const ubicacion = document.getElementById("ubicacion");
const horno = document.getElementById("horno");

stock.textContent = "Stock: 100 panes disponibles";
ubicacion.textContent = "Twin Ovens en Quito Ecuador";
horno.textContent = "Horno listo para preparar guaguas y panes";

const producto = document.querySelector(".producto");
producto.textContent = "Guaguas de pan de Twin Ovens";

const tituloProductos = document.querySelector("h2");
tituloProductos.textContent = "Productos recien horneados";

const resumen = document.querySelector("#resumen");
resumen.textContent = "Panaderia Twin Ovens en Quito";

const estadoPedido = document.querySelector("#pedido .estado");
estadoPedido.textContent = "Pedido listo para retirar";

const panes = document.querySelectorAll(".panes");
console.log("Productos disponibles", panes);
console.log("Cantidad de productos", panes.length);

for (let i = 0; i < panes.length; i++) {
    console.log("Producto", panes[i].textContent);
}

console.log("Recorrer productos con forEach");
panes.forEach(function(pan) {
    console.log(pan.textContent);
});

console.log("Recorrer productos con for of");
for (let pan of panes) {
    console.log(pan.textContent);
}
