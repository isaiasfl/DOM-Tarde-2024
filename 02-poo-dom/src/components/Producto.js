// --------- función constructora ------------
export function Producto(nombre, precio, stock) {
  let _nombre = nombre; // variable publica
  let _precio = precio;
  let _stock = stock; // variable privada
  // ------ metodos publicos
  // setter y getter
  this.setNombre = function (nombre) {
    _nombre = nombre;
  };
  this.getNombre = function () {
    return _nombre;
  };
  this.setPrecio = function (precio) {
    _precio = precio;
  };
  this.getPrecio = function () {
    return _precio;
  };
  this.setStock = function (stock) {
    _stock = stock;
  };
  this.getStock = function () {
    return _stock;
  };
  this.actualizarStock = function (cantidad) {
    _stock += cantidad;
    return `Stock actualizado a ${this.getStock()}`;
  };
  this.obtenerInfo = function () {
    return `Nombre: ${this.getNombre()} Precio: ${this.getPrecio()} Stock: ${this.getStock()}`;
  };
}
