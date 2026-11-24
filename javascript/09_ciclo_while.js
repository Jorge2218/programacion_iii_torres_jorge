console.log("Abriendo portal de la nave...");
let portal = 1;
while (portal <= 5) {
    console.log("Abriendo Portal " + portal + ".");
    portal++;
}
console.log("Todos los portales han sido abiertos.");

console.log("Cuenta regresiva despegue de la nave de Morty");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para el despegue");
    i--;
}

console.log("Despegue de la nave de Morty iniciado.");
console.log("Recargar la pistola de portales de Rick");
let energia = 50;
let recarga = 10;
let totalRecargas = 0;
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando... Nivel de energía: " + energia + "%");
}
console.log("Pistola de portales completamente recargada después de "
    + totalRecargas + " recargas.");

console.log("Consumo de Combustible de la nave de Rick");
let combustible = 100;
let consumo = 45;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje " + viajes + " realizado. Combustible restante: " + combustible + "%");
    if(combustible < 50){
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente combustible para otro viaje.");
console.log("Total de viajes realizados: " + viajes);


console.log("Activar portales de dimensiones peligrosas con Do .... While");
let energiaPortal = 50;
do {
    console.log("Activando portal de dimensión peligrosa. Nivel de energía: " + energiaPortal + "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("No hay suficiente energía para activar más portales.");


console.log("Comprar una pistola de portales para Rick");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " unidades.");
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas. Rick puede comprar la pistola de portales.");