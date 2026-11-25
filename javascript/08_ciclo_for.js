console,log("ciclo for");
for (let i=1; i<=5; i++){
    console.log("iteracion numero" + i);
}

console.log("cuenta regresiva despliegue de la nave de morty");
for(let i = 10; i>=0; i--) {
    console.log("Faltan " + i + " segundos para el despegue");
}

console,log("CUenta regresiva");
for(let i = 10; 1>= 0; i--){
    if (i==0){
        console.log("despegue");
    }
    else{
        console.log("faltan" +i+ "segundos para el despegue");
    }
}

console.log("nivel de energia");
let energia = 50;
for (let i=0; i<=100; i+=10){
    if (energia >= i) {
        console.log("nivel de energia" +i+ "%");
    }
}

let consumoPorViaje = 10;
let totalconsumido = 0;
for(let viaje=1; viaje <=5; viaje ++){
    totalconsumido += consumoPorViaje;
    console.log("viaje"+ viaje);
    console.log("total consumido por ahora"+totalconsumido+ "unidades de combustible");

}
console.log("total consumido;"+totalconsumido+ "unidades");

console.log("Promedio de cristales");
let totalcristales = 0 ; 
let dias = 7;
for (let dia = 1; dia<= dias; dia++){
    let cristales = dia *5+5;
    totalcristales += cristales;
    console.log("dia"+dia+":"+cristales+"cristales recolectados");
}


console.log("total de cristales recolectados"+totalcristales);
console.log("promedio de cristales por dia"+(totalcristales/dias).toFixed(2));

console.log("Dimensiones Peligrosas");
let seguras = 0;
let peligrosas = 0;

for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimensión " + dimension + " es peligrosa.");
        peligrosas++;
    } else {
        console.log("Dimensión " + dimension + " es segura.");
        seguras++;
    }
}

console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("recoleccion de cristales e morty");
let cristales=[35,60,45,80,70,90,55];
let total=0;
let viajesexitosos= 0;
for (let i = 0; i < cristales.length; i++) {
    total += cristales[i];
    if (cristales[i] >= 50) {
        viajesExitosos++;
    } else{
        console.log("viaje"+ (i+1)+"no fue exitoso, se recolectron menos de 50 cristales")
    }
}

console.log("Total de cristales recolectados: " + total);
console.log("Número de viajes exitosos: " + viajesExitosos);

console.log("Recorrer Personajes con for...of");
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];

for (let personaje of personajes) {
    console.log("Personaje: " + personaje);
}


let nave = {
    nombre: "Nave de Rick",
    combustible: 1000,
    velocidad: 500,
    tripulantes: ["Rick", "Morty", "Summer"]
};

console.log("Recorrer Propiedades de la Nave con for...in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad ==="tripulantes"){
        console.log("tripulantes de la nave;");
        for(let tripulantes of nave[propiedad]) {
            console.log("-"+tripulantes);
        }
    }
}

let misiones = [
    { nombre: "Misión 1", cristales: 90, meta: 100, personaje: "Rick" },
    { nombre: "Misión 2", cristales: 80, meta: 100, personaje: "Morty" },
    { nombre: "Misión 3", cristales: 95, meta: 100, personaje: "Summer" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " completada por " + mision.personaje + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    }
}
console.log("numero de misiones exitosas"+ exitosas);


console.log("Uso de break y continue en un ciclo for");

// Primer bloque: Uso de break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el número 5, se detiene el ciclo.");
        break;
    }
    console.log("Número: " + i);
}

// Segundo bloque: Uso de continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Número par encontrado: " + i + ", se omite este número.");
        continue;
    }
    console.log("Número impar: " + i);
}

// Tercer bloque: Uso de break en 7
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el número 7, se detiene el ciclo.");
        break;
    }
}