const cantidad = document.getElementById("cantidad");
const panesPorPedido = document.getElementById("panesPorPedido");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    if (cantidad.value.trim() === "" || panesPorPedido.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidadPedidos = Number(cantidad.value);
    const panesPorLote = Number(panesPorPedido.value);

    if (!Number.isFinite(cantidadPedidos) ||
        !Number.isFinite(panesPorLote) ||
        cantidadPedidos <= 0 ||
        panesPorLote <= 0) {
        resultado.textContent = "Ingresa cantidades validas";
        return;
    }

    const total = cantidadPedidos * panesPorLote;
    resultado.textContent = "Twin Ovens preparara " + total + " panes para Quito";
});
