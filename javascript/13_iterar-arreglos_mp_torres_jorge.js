let stockProductos = [30, 50, 70, 40];
console.log("Twin Ovens en Quito Ecuador vende guaguas de pan y varios panes");
let posicion = 2;
let nuevoStock = 100;

for (let i = 0; i < stockProductos.length; i++) {
    console.log("Posicion", i);
    console.log("Stock", stockProductos[i]);
    if (posicion >= 0 && posicion < stockProductos.length) {
        stockProductos[posicion] = nuevoStock;
    } else {
        console.log("Posicion no valida");
    }
}
console.log("Stock actualizado", stockProductos);

let productos = [
    { id: 1, nombre: "Guaguas de pan", stock: 99, precio: 2 },
    { id: 2, nombre: "Pan de yuca", stock: 80, precio: 1 },
    { id: 3, nombre: "Pan de Ambato", stock: 100, precio: 1.5 }
];

for (let producto of productos) {
    console.log("ID:", producto.id);
    console.log("Producto:", producto.nombre);
    console.log("Stock:", producto["stock"]);
    console.log("Precio:", producto["precio"]);
}

console.log("Twin Ovens organiza los pedidos");
let pedidos = [
    {
        cliente: "Ana",
        productos: [30, 50, 60]
    },
    {
        cliente: "Luis",
        productos: [20, 30, 30]
    },
    {
        cliente: "Sofia",
        productos: [90, 80, 70]
    }
];

for (let pedido of pedidos) {
    let totalProductos = 0;
    console.log("Cliente:", pedido.cliente);
    for (let cantidad of pedido.productos) {
        console.log("Panes del pedido", cantidad);
        totalProductos += cantidad;
    }
    console.log("Total de panes para", pedido.cliente, totalProductos);
}

let stockOriginal = [30, 50, 70, 40];
let stockDoble = stockOriginal.map(elemento => {
    return elemento * 2;
});
console.log("Stock doble", stockDoble);

let stockValido = stockOriginal.filter(cantidad => cantidad >= 50);
console.log("Productos con stock suficiente", stockValido);

let totalStock = stockOriginal.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log("Stock total", totalStock);
