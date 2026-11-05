console.log("Ciclo for para contar bandejas");
for (let i = 1; i <= 5; i++) {
    console.log("Bandeja numero " + i);
}

console.log("Cuenta regresiva para sacar el pan del horno");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " minutos");
}

console.log("Cuenta regresiva de horneado");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Pan listo");
    } else {
        console.log("Faltan " + i + " minutos para terminar");
    }
}

console.log("Temperatura del horno");
let temperatura = 50;
for (let i = 0; i <= 100; i += 10) {
    if (temperatura >= i) {
        console.log("Temperatura alcanzada " + i + " grados");
    }
}

let panesPorBandeja = 10;
let totalPanes = 0;
for (let bandeja = 1; bandeja <= 5; bandeja++) {
    totalPanes += panesPorBandeja;
    console.log("Bandeja " + bandeja);
    console.log("Panes preparados hasta ahora " + totalPanes);
}
console.log("Total de panes preparados " + totalPanes);

console.log("Produccion de guaguas de pan durante la semana");
let totalGuaguas = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let guaguas = dia * 5 + 5;
    totalGuaguas += guaguas;
    console.log("Dia " + dia + " guaguas preparadas " + guaguas);
}
console.log("Total de guaguas preparadas " + totalGuaguas);
console.log("Promedio por dia " + (totalGuaguas / dias).toFixed(2));

console.log("Clasificar pedidos por cantidad");
let pedidosPequenos = 0;
let pedidosGrandes = 0;
for (let pedido = 1; pedido <= 10; pedido++) {
    if (pedido % 2 === 0) {
        console.log("Pedido " + pedido + " es grande");
        pedidosGrandes++;
    } else {
        console.log("Pedido " + pedido + " es pequeno");
        pedidosPequenos++;
    }
}
console.log("Pedidos pequenos " + pedidosPequenos);
console.log("Pedidos grandes " + pedidosGrandes);

console.log("Revisar ventas diarias");
let ventas = [35, 60, 45, 80, 70, 90, 55];
let totalVentas = 0;
let diasConBuenasVentas = 0;
for (let i = 0; i < ventas.length; i++) {
    totalVentas += ventas[i];
    if (ventas[i] >= 50) {
        diasConBuenasVentas++;
    } else {
        console.log("Dia " + (i + 1) + " tuvo pocas ventas");
    }
}
console.log("Total de ventas " + totalVentas);
console.log("Dias con buenas ventas " + diasConBuenasVentas);

console.log("Recorrer productos con for of");
const productos = ["Guaguas de pan", "Pan de yuca", "Pan de Ambato", "Pan de chocolate"];
for (let producto of productos) {
    console.log("Producto " + producto);
}

let panaderia = {
    nombre: "Twin Ovens",
    ciudad: "Quito",
    pais: "Ecuador",
    productos: ["Guaguas de pan", "Pan de yuca", "Pan de Ambato"]
};

console.log("Recorrer datos de Twin Ovens con for in");
for (let propiedad in panaderia) {
    console.log(propiedad + ": " + panaderia[propiedad]);
    if (propiedad === "productos") {
        console.log("Productos disponibles");
        for (let producto of panaderia[propiedad]) {
            console.log("- " + producto);
        }
    }
}

let pedidos = [
    { nombre: "Pedido 1", cantidad: 90, meta: 100, cliente: "Ana" },
    { nombre: "Pedido 2", cantidad: 80, meta: 100, cliente: "Luis" },
    { nombre: "Pedido 3", cantidad: 95, meta: 100, cliente: "Sofia" }
];

let pedidosCompletos = 0;
for (let pedido of pedidos) {
    let porcentaje = (pedido.cantidad / pedido.meta) * 100;
    console.log(pedido.nombre + " para " + pedido.cliente + " completado al " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        pedidosCompletos++;
    }
}
console.log("Pedidos completos " + pedidosCompletos);

console.log("Uso de break en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se alcanzo el limite de cinco bandejas");
        break;
    }
    console.log("Bandeja " + i);
}

console.log("Uso de continue para omitir pedidos pares");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Se omite el pedido par " + i);
        continue;
    }
    console.log("Se prepara el pedido " + i);
}

console.log("Detener el ciclo al llegar al pedido siete");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se alcanzo el pedido siete");
        break;
    }
}
