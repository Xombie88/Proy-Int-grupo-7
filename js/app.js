const carrito = document.getElementById("carrito");
const platillos = document.getElementById("lista-platillos");
const listaPlatillos = document.querySelector("#lista*carrito tbody");
const vaciarCarrito = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
  platillos.addEventListener("click", comprarPlatillo);

  carrito.addEventListener("click", eliminarPlatillo);

  vaciarCarritoBtn.addEventListener("clik", vaciarCarrito);

  document.addEventListener("DOMContenrLoaded", leerLocalStorage);
}
