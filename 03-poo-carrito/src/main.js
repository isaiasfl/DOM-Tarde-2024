// selecciono el APP..

import Carrito from "./components/Carrito";

const carrito = new Carrito();
// cargamos los datos del localStorage al carrito.
carrito.cargarLocalStorage();

function pintarInterfazWeb() {
  const app = document.getElementById("app");
  function pintarCarrito() {
    const lista = document.getElementById("lista-productos");

    lista.innerHTML = carrito.productos
      .map(
        (producto, index) => `
      <li data-id="${index}"> ${producto.obtenerInfo()}    
      <button class="btn-editar" data-id="${index}">Editar</button>
      <button class="btn-borrar" data-id="${index}">Borrar</button>
      </li>`
      )
      .join("");
    // calcular el TOTAL
  }
  const handlerSubmit = (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad = Number(document.querySelector("#cantidad-producto").value);
    const precio = Number(document.querySelector("#precio-producto").value);
    // validaciones del formulario básicas.
    if (!nombre || cantidad < 0 || precio < 0) {
      alert("Debes de insertar valores correctos");
    }
    // añadimos el nombre, cantidad y precio a un producto del carrito
    carrito.agregarProducto(nombre, cantidad, precio);
    // ahora pintamos el carrito.
    pintarCarrito();
  };

  const opcionesProducto = (event) => {
    // target es el COMPONENTE donde he hecho CLICK o lo que sea
    const indice = Number(event.target.dataset.id); // cuando pulso click obtengo el componente
    // event.target.classList.contains()
    if (event.target.classList.contains("btn-borrar")) {
      carrito.borrarProducto(indice);
      pintarCarrito();
    }

    if (event.target.classList.contains("btn-editar")) {
    }
  };

  app.innerHTML = `
    <h1> Carrito de la Compra de productos </h1>
    <form id="form-producto">
      <input id="nombre-producto" type="text" placeholder="Nombre del producto" >
      <input id="cantidad-producto" type="number" placeholder="cantidad" >
      <input id="precio-producto" type="number" placeholder="precio" >
      <button type="submit" > Agregar Producto </button>
    </form>

    <div id="lista-productos" ></div>
  
  
  `;

  document
    .getElementById("form-producto")
    .addEventListener("submit", handlerSubmit);

  document
    .getElementById("lista-productos")
    .addEventListener("click", opcionesProducto);
}
// ------------ INICIO DE LA APLICACIÓN ------

pintarInterfazWeb();
