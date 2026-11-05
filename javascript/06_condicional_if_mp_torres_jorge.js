console.log("Condicional if");
let harina = 50;

console.log("Condicional simple if");
if (harina > 0) {
    console.log("Hay harina para preparar pan");
}

console.log("Condicional if else");
let panesDisponibles = 30;
if (panesDisponibles > 0) {
    console.log("Hay pan para vender");
} else {
    console.log("No hay pan disponible");
}

console.log("Condicional if else if");
let producto = "guaguas de pan";
if (producto === "guaguas de pan") {
    console.log("Producto tradicional de Quito");
} else if (producto === "pan de yuca") {
    console.log("Pan preparado con yuca");
} else {
    console.log("Consulta otros productos de Twin Ovens");
}

console.log("Condicional if anidado");
let hornoEncendido = true;
let masaLista = true;
if (hornoEncendido) {
    if (masaLista) {
        console.log("El pan puede entrar al horno");
    } else {
        console.log("Primero hay que preparar la masa");
    }
}

console.log("Condicional con operador logico");
let ingredientesDisponibles = true;
let panaderoDisponible = true;
if (ingredientesDisponibles && panaderoDisponible) {
    console.log("Twin Ovens puede preparar los pedidos");
} else {
    console.log("Faltan ingredientes o personal");
}

console.log("Control de pedidos de la panaderia");
let unidadesPedido = 40;
let harinaDisponible = 50;
let panaderoTurno = "si";
let ayudanteTurno = "no";
let hornoAveriado = "no";

if (unidadesPedido <= harinaDisponible &&
    (panaderoTurno === "si" || ayudanteTurno === "si") &&
    hornoAveriado !== "si") {
    console.log("Pedido autorizado en Twin Ovens Quito");
} else {
    if (unidadesPedido > harinaDisponible) {
        console.log("No hay harina suficiente para el pedido");
    }
    if (panaderoTurno === "no" && ayudanteTurno === "no") {
        console.log("No hay personal disponible para preparar el pedido");
    }
    if (hornoAveriado === "si") {
        console.log("No se puede hornear porque el horno esta averiado");
    }
}

console.log("Produccion diaria de Twin Ovens");
let panesObjetivo = 200;
let panesPreparados = 180;
let harinaInicial = 100;
let harinaConsumida = 70;
let pedidoDanado = "no";
let hornoDanado = "no";
let bonificacion = 0;

let porcentajeProduccion = (panesPreparados / panesObjetivo) * 100;
let harinaRestante = harinaInicial - harinaConsumida;

console.log("Resultados de produccion");
if (porcentajeProduccion >= 90) {
    console.log("Produccion completada con exito");
} else if (porcentajeProduccion >= 70) {
    console.log("Produccion completada parcialmente");
} else if (porcentajeProduccion >= 50) {
    console.log("Produccion baja se necesita mejorar");
} else {
    console.log("Produccion insuficiente");
}

console.log("Bonificacion por produccion");
if (porcentajeProduccion >= 90 && harinaRestante >= 20) {
    bonificacion = 100;
    console.log("Bonificacion para el equipo de Twin Ovens");
} else {
    console.log("No se entrega bonificacion");
}

console.log("Estado de los pedidos");
if (pedidoDanado === "no" && hornoDanado === "no") {
    console.log("Pedidos listos para entregar en Quito");
} else if (pedidoDanado === "si" && hornoDanado === "no") {
    console.log("Revisar los pedidos antes de entregarlos");
} else if (pedidoDanado === "no" && hornoDanado === "si") {
    console.log("Revisar el horno antes de continuar");
} else {
    console.log("Revisar los pedidos y el horno");
}

console.log("Resumen del dia");
console.log("Panes objetivo:", panesObjetivo);
console.log("Panes preparados:", panesPreparados);
console.log("Porcentaje de produccion:", porcentajeProduccion.toFixed(2) + "%");
console.log("Harina inicial:", harinaInicial);
console.log("Harina consumida:", harinaConsumida);
console.log("Harina restante:", harinaRestante);
console.log("Pedido danado:", pedidoDanado);
console.log("Horno danado:", hornoDanado);
console.log("Bonificacion:", bonificacion);
