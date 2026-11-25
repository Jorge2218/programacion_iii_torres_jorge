function abrirHorno() {
    console.log("Horno de Twin Ovens abierto en Quito");
}

console.log("Productos: guaguas de pan, pan de yuca y pan de Ambato");
abrirHorno();
abrirHorno();
abrirHorno();
abrirHorno();
abrirHorno();

function panadero(nombre) {
    console.log("El panadero " + nombre + " esta preparando el pan");
}

panadero("Jorge");
panadero("Maria");

function actualizarStock(stockActual, panesPreparados) {
    let stockTotal = stockActual + panesPreparados;

    if (stockTotal > 100) {
        stockTotal = 100;
    }

    console.log("Stock de pan actualizado " + stockTotal);
    return stockTotal;
}

let stockPan = 50;
stockPan = actualizarStock(stockPan, 30);
stockPan = actualizarStock(stockPan, 40);

console.log("Calcular descuentos");
console.log("Descuentos de Twin Ovens");

function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioOriginal = 10;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);

console.log("Precio original " + precioOriginal + " precio con descuento " + precioConDescuento);

function calcularTotalPanes(panes) {
    let total = 0;
    for (let i = 0; i < panes.length; i++) {
        total += panes[i];
    }
    return total;
}

let panesVendidos = [5, 10, 15, 20, 25];
let totalPanes = calcularTotalPanes(panesVendidos);
console.log("Total de panes vendidos " + totalPanes);

function calcularPedidosCompletos(cantidades) {
    let pedidosCompletos = 0;
    for (let cantidad of cantidades) {
        if (cantidad > 50) {
            console.log("Pedido listo para entregar");
            pedidosCompletos++;
        }
    }
    return pedidosCompletos;
}

let cantidadesPedidos = [55, 65, 67, 70];
let pedidosListos = calcularPedidosCompletos(cantidadesPedidos);
console.log("Total de pedidos listos " + pedidosListos);
