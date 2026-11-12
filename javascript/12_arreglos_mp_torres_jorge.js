let productos = ["guaguas de pan", "pan de yuca", "pan de Ambato", "pan de chocolate", "pan de agua"];
console.log("Productos de Twin Ovens en Quito Ecuador");
console.log("Elemento 0", productos[0]);
console.log("Elemento 2", productos[2]);
console.log("Elemento 4", productos[4]);
console.log("Elemento 1", productos[1]);
console.log("Tamano del arreglo", productos.length);

console.log("Productos disponibles", productos);
console.log("Agregar elementos al arreglo con push");
productos.push("pan de masa madre");
console.log("Productos", productos);
productos.push("pan integral");
console.log("Productos", productos);

console.log("Modificar elementos del arreglo");
productos[7] = "roscas de Quito";
console.log("Productos", productos);

console.log("Eliminar elementos del arreglo");
productos.pop();
console.log("Productos", productos);
productos.shift();
console.log("Productos", productos);
productos.splice(1, 1);
console.log("Productos", productos);
