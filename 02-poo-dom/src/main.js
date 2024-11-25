// // 1.- Crear una clase para modelar un sistema de usuarios que puedan iniciar sesión y cerrar sesión.
// // y actulizar su perfil.
// // --------- SOLUCION CON FUNCIONES CONSTRUCTURAS ------------

import { Producto } from "./components/Producto";

// function Usuario(nombre, email, password) {
//   this.nombre = nombre; // variables de instancia publicas
//   this.email = email;
//   let _password = password; // variable de instancia privada
//   // ------ metodos publicos
//   this.login = function (email, password) {
//     // no usar arrow function a no ser que dominemos el contexto de this
//     // quiero evaluar si email y password son correctos
//     if (this.email === email && _password === password) {
//       return `Bienvenido ${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   };

//   this.updateEmail = function (newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${this.email}`;
//   };
// }

// // Crear un usuario
// const usuario1 = new Usuario("Juan", "juan@gmail.com", "123456");

// // --------- Lo mostramos en el dom ------
// const app = document.getElementById("app");

// function renderUsuario() {
//   // función que pinta en el app el usuario
//   app.innerHTML = `
//     <h2>Usuario: ${usuario1.nombre}</h2>
//     <p>Email: ${usuario1.email}</p>
//     <button id="btnLogin">Login</button>
//   `;

//   // añadir evento al boton
//   const btnLogin = document.getElementById("btnLogin");
//   btnLogin.addEventListener("click", () => {
//     alert(usuario1.login("pepe@gmail.com","123456"));
//   });
// }

// // --------- SOLUCION CON CLASES ------------
// class UsuarioClases {
//   // las variables privadas se declaran anteponeindo # al nombre
//   #password;

//   constructor(nombre, email, password) {
//     this.nombre = nombre;
//     this.email = email;
//     this.#password = password;
//   }

//   login(email, password) {
//     if (this.email === email && this.#password === password) {
//       return `Bienvenido ${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${this.email}`;
//   }
// }

// const usuario2 = new UsuarioClases("Pepe", "pepe@gmail.com", "123456");

// ---------------------- PRODUCTO ----------------------

// Array de productos
const productos = [
  new Producto("Portatil", 500, 10),
  new Producto("Movil", 1200, 20),
  new Producto("Tablet", 300, 5),
];

// renderizamos los productos
const app = document.getElementById("app");
// ${productos
//   .map((producto) => `<li> ${producto.obtenerInfo()} </li>`)
//   .join("")}

app.innerHTML = ` 
  <h2>Gestión de Productos</h2>
  ${productos
    .map((producto, index) => {
      return `<li> 
          ${producto.obtenerInfo()} 
          <button class="btn-actualizar-stock" data-index="${index}">Actualizar Stock</button>
      
      </li>`;
    })
    .join("")}
`;

// escuchamos el evento click en los botones de actualizar stock

document.querySelectorAll(".btn-actualizar-stock").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Actualizar stock");
  });
});
