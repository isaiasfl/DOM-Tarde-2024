// import { Empleado, EmpleadoClases, EmpleadoFrelance, EmpleadoFrelanceClases } from "./helpers/Ejercicio3";

// // ------ ejercicio 3 -------
// console.log("----- Ejercicio 3 -----");
// const empleado1 = new Empleado("Juan", 25, "junior");
// const empleado2 = new Empleado("Ana", 30, "semiSenior");
// empleado1.info();
// empleado2.info();

// const freelance3 = new EmpleadoFrelance("Pedro", 35, 50);
// const freelance4 = new EmpleadoFrelance("Maria", 40, 60);
// const freelance5 = new EmpleadoFrelance("Lucia", 45, 70);

// // freelance3.info(50);
// freelance4.info(44);
// freelance5.info(40);

// console.log("----- Ejercicio3 con clases -----");
// const empleadoClase1 = new EmpleadoClases("Mario", 25, "junior");
// const empleadoClase2 = new EmpleadoClases("Ana María", 30, "semiSenior");
// empleadoClase1.info();
// empleadoClase2.info();
// const freelanceClase1 = new EmpleadoFrelanceClases("Rodolfo", 35, 50);
// const freelanceClase4 = new EmpleadoFrelanceClases("María José", 40, 60);
// freelanceClase1.info(50);
// freelanceClase4.info(44);

// ------ ejercicio 7 -------

import { GestionUsuariosClase, UsuarioClase } from "./helpers/Ejercicio7";

function handlerBuscarUsuario(e) {
  e.preventDefault();
  alert("Buscar usuario");
}

(async function () {
  function handlerClickEliminar(e) {
    if (e.target.classList.contains("btn-eliminar")) {
      const indice = e.target.dataset.id;
      // eliminar el usuario que está en la posición del array[indice]
      gestorUser.usuarios.splice(indice, 1);
      divListaUsuarios.innerHTML = gestorUser.usuarios
        .map((user, index) => {
          return `
      <li data-id="${index}">
        ${user.info()} 
        <button class="btn-eliminar" data-id="${index}" >Eliminar</button>
      </li>
      `;
        })
        .join("");
    }
  }

  const gestorUser = new GestionUsuariosClase();
  console.log("Fetch Usuarios -->", await gestorUser.fetchUsuarios());

  // pintamos en el dom
  const app = document.getElementById("app");
  const h1Element = document.createElement("h1");
  h1Element.textContent = "Uso de POO con JsonPlaceHolder";
  app.appendChild(h1Element);
  const divBuscarUsuarios = document.createElement("div");
  divBuscarUsuarios.id = "buscar-usuarios";
  app.appendChild(divBuscarUsuarios);
  divBuscarUsuarios.innerHTML = `
    <form id="form-usuario">
    <input id="nombre-buscar" type="text" placeholder="Nombre a buscar" />
    <button type="submit" id="buscar" class="btn-buscar">Buscar</button>
  </form>`;

  const divListaUsuarios = document.createElement("div");
  divListaUsuarios.id = "lista-usuarios";
  app.appendChild(divListaUsuarios);

  divListaUsuarios.innerHTML = gestorUser.usuarios
    .map((user, index) => {
      return `
      <li data-id="${index}">
        ${user.info()} 
        <button class="btn-eliminar" data-id="${index}" >Eliminar</button>
      </li>
      `;
    })
    .join("");

  document
    .getElementById("lista-usuarios")
    .addEventListener("click", handlerClickEliminar);

  document
    .querySelector("#form-usuario")
    .addEventListener("submit", handlerBuscarUsuario);
})();
