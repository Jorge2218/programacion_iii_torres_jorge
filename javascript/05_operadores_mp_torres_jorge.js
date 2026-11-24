console.log("Operadores aritmeticos");
console.log("Twin Ovens Quito Ecuador");
console.log("Productos: guaguas de pan, pan de yuca y pan de Ambato");
let a = 12;
let b = 4;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicacion:", a * b);
console.log("Division:", a / b);
console.log("Modulo:", a % b);

console.log("Operadores de comparacion");
console.log("a es igual a b:", a == b);
console.log("a es diferente de b:", a != b);
console.log("a es mayor que b:", a > b);
console.log("a es menor que b:", a < b);
console.log("a es mayor o igual que b:", a >= b);
console.log("a es menor o igual que b:", a <= b);

console.log("Operadores logicos");
let pedidosListos = true;
let hornoCaliente = false;

console.log("Pedidos listos y horno caliente:", pedidosListos && hornoCaliente);
console.log("Pedidos listos o horno caliente:", pedidosListos || hornoCaliente);
console.log("No hay pedidos listos:", !pedidosListos);
console.log("No esta caliente el horno:", !hornoCaliente);

console.log("Operadores de asignacion");
let unidades = 10;
console.log("Valor inicial de unidades:", unidades);

unidades += 5;
console.log("Despues de sumar 5:", unidades);

unidades -= 3;
console.log("Despues de restar 3:", unidades);

unidades *= 2;
console.log("Despues de multiplicar por 2:", unidades);

unidades /= 4;
console.log("Despues de dividir por 4:", unidades);

unidades %= 3;
console.log("Resto de unidades entre 3:", unidades);

console.log("Operadores de incremento y decremento");
let bandejas = 5;
console.log("Bandejas iniciales:", bandejas);

bandejas++;
console.log("Bandejas despues del incremento:", bandejas);
bandejas--;
console.log("Bandejas despues del decremento:", bandejas);

console.log("Operadores de concatenacion");
let nombre = "Twin";
let segundoNombre = "Ovens";
let nombreCompleto = nombre + " " + segundoNombre;
console.log("Nombre de la panaderia:", nombreCompleto);

console.log("Operadores de comparacion estricta");
let cantidad = 10;
let cantidadTexto = "10";

console.log("Cantidad es estrictamente igual al texto:", cantidad === cantidadTexto);
console.log("Cantidad es estrictamente diferente al texto:", cantidad !== cantidadTexto);

console.log("Operador ternario");
let stock = 20;
let mensaje = (stock > 0) ? "Hay pan disponible" : "No hay pan disponible";
console.log(mensaje);

console.log("Tabla de bandejas con 5 panes");
console.log(`1 x ${5} = ${5 * 1}`);
console.log(`2 x ${5} = ${5 * 2}`);
console.log(`3 x ${5} = ${5 * 3}`);
console.log(`4 x ${5} = ${5 * 4}`);
console.log(`5 x ${5} = ${5 * 5}`);
console.log(`6 x ${5} = ${5 * 6}`);
console.log(`7 x ${5} = ${5 * 7}`);
console.log(`8 x ${5} = ${5 * 8}`);
console.log(`9 x ${5} = ${5 * 9}`);
console.log(`10 x ${5} = ${5 * 10}`);

console.log("Repartir 5 panes entre varios pedidos");
console.log(`5 / 1 = ${5 / 1}`);
console.log(`5 / 2 = ${5 / 2}`);
console.log(`5 / 3 = ${5 / 3}`);
console.log(`5 / 4 = ${5 / 4}`);
console.log(`5 / 5 = ${5 / 5}`);
console.log(`5 / 6 = ${5 / 6}`);
console.log(`5 / 7 = ${5 / 7}`);
console.log(`5 / 8 = ${5 / 8}`);
console.log(`5 / 9 = ${5 / 9}`);
console.log(`5 / 10 = ${5 / 10}`);
