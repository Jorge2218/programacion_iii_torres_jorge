let productos = [
    {
        id: 1,
        nombre: "Guaguas de pan",
        categoria: "Tradicional",
        estado: "Disponible"
    },
    {
        id: 2,
        nombre: "Pan de yuca",
        categoria: "Pan de sal",
        estado: "Disponible"
    },
    {
        id: 3,
        nombre: "Pan de Ambato",
        categoria: "Pan tradicional",
        estado: "Por hornear"
    }
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarProductos() {
    contenedor.replaceChildren();
    productos.forEach(function(producto) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const parrafoCategoria = document.createElement("p");
        parrafoCategoria.textContent = "Categoria: " + producto.categoria;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + producto.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.type = "button";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function() {
            editarProducto(producto.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.type = "button";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function() {
            eliminarProducto(producto.id);
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoCategoria, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
    cantidad.textContent = "Productos registrados: " + productos.length;
}

function eliminarProducto(id) {
    const confirmado = confirm("Eliminar este producto de Twin Ovens");
    if (!confirmado) {
        return;
    }

    productos = productos.filter(function(producto) {
        return producto.id !== id;
    });
    mostrarProductos();
}

let idEditando = null;
let siguienteId = 4;

function editarProducto(id) {
    const producto = productos.find(function(item) {
        return item.id === id;
    });
    if (!producto) {
        return;
    }

    nombre.value = producto.nombre;
    categoria.value = producto.categoria;
    estado.value = producto.estado;
    idEditando = id;
    guardar.textContent = "Guardar cambios";
    cancelar.hidden = false;
    nombre.focus();
}

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar producto";
    cancelar.hidden = true;
}

mostrarProductos();

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombreProducto = nombre.value.trim();
    if (nombreProducto === "") {
        nombre.focus();
        return;
    }

    if (idEditando === null) {
        productos.push({
            id: siguienteId,
            nombre: nombreProducto,
            categoria: categoria.value,
            estado: estado.value
        });
        siguienteId++;
    } else {
        const producto = productos.find(function(item) {
            return item.id === idEditando;
        });
        if (producto) {
            producto.nombre = nombreProducto;
            producto.categoria = categoria.value;
            producto.estado = estado.value;
        }
    }

    mostrarProductos();
    limpiarFormulario();
});

cancelar.addEventListener("click", function() {
    limpiarFormulario();
});
