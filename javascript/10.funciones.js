function abrirPortal() {
    console.log("Portal abierto. ¡Vamos a otra dimensión!");
}

abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la nave.");
}

pilotoNave("Rick");
pilotoNave("Morty");

function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;

    if (energiaTotal > 100) {
        energiaTotal = 100;
    }

    console.log("Pistola de portales recargada. Nivel de energía: " + energiaTotal + "%");

    return energiaTotal;
}

let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);

console.log("calcular descuentos");
console.log("Calcular descuentos interdimensionales");

function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;

let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);

console.log("Precio original: " + precioOriginal + ", Precio con descuento: " + precioConDescuento);

function calcularTotalCristales(cristales) {
    let total = 0;
    for (let i = 0; i < cristales.length; i++) {
        total += cristales[i];
    }
    return total;
}

let cristalesRecolectados = [5, 10, 15, 20, 25];
let totalCristales = calcularTotalCristales(cristalesRecolectados);
console.log("Total de cristales recolectados: " + totalCristales);

function calculomision (cristales){
    let misionesexitosas=0;
    for (let cristal of cristales){
        if (cristal > 50){
        console.log("MIsion exitosa")
        misionesexitosas++
    };
    }
    return misionesexitosas;

}
let cristales= [55,65,67,70];
let totalmisiones = calculomision(cristales);
console.log("total de misiones exitosas"+ totalmisiones)