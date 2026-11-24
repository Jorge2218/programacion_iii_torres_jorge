let productoDelDia = 3;
switch (productoDelDia) {
    case 1:
        console.log("Hoy tenemos guaguas de pan");
        break;

    case 2:
        console.log("Hoy tenemos pan de yuca");
        break;

    case 3:
        console.log("Hoy tenemos pan de Ambato");
        break;

    case 4:
        console.log("Hoy tenemos pan de chocolate");
        break;

    default:
        console.log("Consulta todos los productos de Twin Ovens");
}

let cliente = "Jorge";
switch (cliente) {
    case "Jorge":
    case "Maria":
        console.log("Hola cliente frecuente de Twin Ovens");
        break;
    case "Andres":
        console.log("Hola Andres tu pedido esta listo");
        break;
    default:
        console.log("Bienvenido a Twin Ovens");
}

let temperaturaHorno = 180;
switch (true) {
    case (temperaturaHorno > 0 && temperaturaHorno <= 100):
        console.log("El horno necesita calentarse");
        break;

    case (temperaturaHorno > 100 && temperaturaHorno <= 180):
        console.log("El horno esta listo para hornear");
        break;

    case (temperaturaHorno > 180 && temperaturaHorno <= 220):
        console.log("El horno esta muy caliente");
        break;

    default:
        console.log("Revisa la temperatura del horno");
}

console.log("Calculadora de pedidos con switch");
let precioPan = 2;
let cantidad = 5;
let operacion = "multiplicacion";
let resultado;

switch (operacion) {
    case "suma":
        resultado = precioPan + cantidad;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = precioPan - cantidad;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = precioPan * cantidad;
        console.log("Total del pedido:", resultado);
        break;
    case "division":
        if (cantidad !== 0) {
            resultado = precioPan / cantidad;
            console.log("Precio dividido entre la cantidad:", resultado);
        } else {
            console.log("No se puede dividir entre cero");
        }
        break;
    default:
        console.log("Operacion no valida");
        break;
}
