export class ProductoClases {
  #nombre;
  #precio;
  #stock;
  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#stock = stock;
  }
  // ------ metodos publicos
  // setter y getter
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
  setPrecio(precio) {
    this.#precio = precio;
  }
  getNombre() {
    return this.#precio;
  }
  setStock(stock) {
    this.#stock = stock;
  }
  getStock() {
    return this.#stock;
  }
  // actualiza el stock
  actualizarStock(cantidad) {
    this.#stock += cantidad;
    return `Stock actualizado a ${this.getStock()}`;
  }
  obtenerInfo() {
    return `Nombre: ${this.getNombre()} Precio: ${this.getPrecio()} Stock: ${this.getStock()}`;
  }
}
