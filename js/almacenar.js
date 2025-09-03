const input = document.getElementById("item");
const agregar = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor");
const limpiar = document.getElementById("limpiar");

let listado = JSON.parse(localStorage.getItem("listado")) || [];

function mostrarListado() {
    contenedor.innerHTML = "";

    listado.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = item;

        const botonEliminar = document.createElement("button");
        botonEliminar.className = "btn btn-sm btn-danger";
        botonEliminar.textContent = "Eliminar";

        li.appendChild(botonEliminar);
        contenedor.appendChild(li);

        botonEliminar.addEventListener("click", () => {
            listado.splice(index, 1);
            localStorage.setItem("listado", JSON.stringify(listado));
            mostrarListado();
        })
    }
    )
}

agregar.addEventListener("click", () => {
    const valor = input.value.trim();
    if (valor !== "") {
        listado.push(valor);
        localStorage.setItem("listado", JSON.stringify(listado));
        mostrarListado();
        input.value = "";
    }
})

limpiar.addEventListener("click", () => {
    listado = [];
    localStorage.removeItem("listado");
    mostrarListado();
})

