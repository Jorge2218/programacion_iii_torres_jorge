console.log("Preparando las bandejas de Twin Ovens");
let bandeja = 1;
while (bandeja <= 5) {
    console.log("Preparando bandeja " + bandeja);
    bandeja++;
}
console.log("Todas las bandejas estan listas");

console.log("Cuenta regresiva para hornear el pan");
let minutos = 10;
while (minutos >= 0) {
    console.log("Faltan " + minutos + " minutos");
    minutos--;
}

console.log("El pan de Twin Ovens esta listo");
console.log("Calentar el horno");
let temperatura = 50;
let aumento = 10;
let ciclos = 0;
while (temperatura < 100) {
    temperatura += aumento;
    ciclos++;
    console.log("Temperatura del horno " + temperatura + " grados");
}
console.log("Horno listo despues de " + ciclos + " ciclos");

console.log("Consumo de harina");
let harina = 100;
let harinaPorLote = 45;
let lotes = 0;
while (harina >= harinaPorLote) {
    harina -= harinaPorLote;
    lotes++;
    console.log("Lote " + lotes + " preparado harina restante " + harina);
    if (harina < 50) {
        console.log("Queda poca harina nivel actual " + harina);
    }
}
console.log("No hay suficiente harina para otro lote");
console.log("Total de lotes preparados " + lotes);

console.log("Hornear guaguas de pan con do while");
let guaguasRestantes = 50;
do {
    console.log("Preparando un lote de guaguas quedan " + guaguasRestantes);
    guaguasRestantes -= 15;
} while (guaguasRestantes > 0);
console.log("Se terminaron las guaguas de este lote");

console.log("Ahorrar para un nuevo horno");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + " ahorro actual " + ahorro);
} while (ahorro < meta);
console.log("Twin Ovens alcanzo la meta en " + semanas + " semanas");
