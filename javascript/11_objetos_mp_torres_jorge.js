let nombre = "Twin Ovens";
let ciudad = "Quito";
let pais = "Ecuador";
let stock = 100;
let hornoAveriado = false;

let panaderia = {
    nombre: "Twin Ovens",
    ciudad: "Quito",
    pais: "Ecuador",
    stock: 100,
    hornoAveriado: false
};

console.log("Informacion de la panaderia Twin Ovens");
console.log("Twin Ovens en Quito Ecuador vende guaguas de pan y varios panes");
console.log("Nombre: " + panaderia.nombre);
console.log("Ciudad: " + panaderia["ciudad"]);
console.log("Pais: " + panaderia["pais"]);
console.log("Stock de pan: " + panaderia.stock);
console.log("Estado del horno: " + (panaderia.hornoAveriado ? "Averiado" : "Operativo"));

console.log("Agregar una propiedad a la panaderia");
panaderia.direccion = "Avenida Amazonas";
console.log("Direccion: " + panaderia.direccion);

panaderia["horarios"] = "Todos los dias";
console.log("Horario: " + panaderia["horarios"]);
console.log("Datos de Twin Ovens", panaderia);

console.log("Actualizar el stock de la panaderia");
panaderia.stock = 80;
console.log("Nuevo stock: " + panaderia.stock);
panaderia["hornoAveriado"] = true;

console.log("Nuevo estado del horno: " + (panaderia.hornoAveriado ? "Averiado" : "Operativo"));
console.log("Datos de Twin Ovens", panaderia);

console.log("Eliminar una propiedad de la panaderia");
delete panaderia.horarios;
console.log("Propiedad horarios eliminada");
console.log("Datos de Twin Ovens", panaderia);

console.log("Inventario de Twin Ovens");

let inventario = {
    guaguasDePan: 20,
    panDeYuca: 15,
    panDeAmbato: 25,
    panDeChocolate: 10
};

let totalUnidades = 0;
for (let producto in inventario) {
    totalUnidades += inventario[producto];
}

console.log("Total de unidades disponibles: " + totalUnidades);
