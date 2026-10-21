const cuposTotales = 50;
let cuposDisponibles = 50;
let totalInscritos = 0;
const mensaje = document.querySelector("#mensaje"); // Bug 1 corregido: el id era "mesaje"
const inputCantidad = document.querySelector("#cantidad");
const btnInscribir = document.querySelector("#btnInscribir");
const resumen = document.querySelector("#resumen");
mensaje.textContent = "Bienvenido a TechEvents CR";
function mostrarResumen(texto) {
 resumen.textContent = texto;
}
function registrarInscripcion() {
 const inscritos = Number(inputCantidad.value); // Bug 2 corregido: value es string, se convierte a número
 totalInscritos = totalInscritos + inscritos;
 cuposDisponibles = cuposTotales - totalInscritos;
 if (cuposDisponibles >= 0) { // Bug 3 corregido: con 0 cupos restantes la inscripción sigue siendo válida
 mostrarResumen(`Inscripción exitosa. Cupos disponibles: ${cuposDisponibles}`);
 } else {
 mostrarResumen("No hay cupos suficientes");
 }
}
btnInscribir.addEventListener("click", registrarInscripcion);
