import { Producto } from "./Producto";

export default class Carrito {
  constructor() {
    // creamos un array de productos.
    this.productos = [];
  }

  // metodos
  agregarProducto(nombre, cantidad, precio) {
    this.productos.push(new Producto(nombre, cantidad, precio));
    // lo guardamos también en el LOCALStorage
    this.guardarLocalStorage();
  }
  /**
   *
   * @param {Number} index
   * @return <void>
   */
  borrarProducto(index) {
    this.productos.splice(index, 1);
    // lo actualizo o modifico del LocalStorage
    this.guardarLocalStorage();
  }

  editarProducto(index, newCantidad) {
    if (newCantidad > 0) {
      this.productos[index].cantidad = newCantidad;
      // actualizar el LocalStorage
      this.guardarLocalStorage();
    }
  }
  calcularTotalCarrito() {
    return this.productos.reduce(
      (total, producto) => total + producto.calcularTotal(),
      0
    );
  }

  guardarLocalStorage() {
    // setItem("clave",valor) //--> para guarda hay stringui...
    localStorage.setItem("carrito", JSON.stringify(this.productos));
  }

  cargarLocalStorage() {
    // localStorage.hasOwnProperty("carrito")
    const datosCarrito = JSON.parse(localStorage.getItem("carrito"));

    if (datosCarrito) {
      // tengo que crear un array de productos
      this.productos = datosCarrito.map(
        (producto) =>
          new Producto(producto.nombre, producto.cantidad, producto.precio)
      );
    }
  }
}
