const eventos = [
 { id: 1, nombre: "React Summit Alajuela", fecha: "2026-11-12", modalidad: "Presencial", cupos: 35 },
 { id: 2, nombre: "Web Dev Day San José", fecha: "2026-11-20", modalidad: "Virtual", cupos: 50 },
 { id: 3, nombre: "JS Cartago Meetup", fecha: "2026-12-03", modalidad: "Híbrida", cupos: 3 }
];

const contenedor = document.querySelector("#eventos");

function crearTarjeta(evento) {
 const tarjeta = document.createElement("article");
 tarjeta.classList.add("card");
 tarjeta.setAttribute("data-id", evento.id);

 const titulo = document.createElement("h3");
 titulo.textContent = evento.nombre;

 const detalle = document.createElement("p");
 detalle.textContent = `${evento.fecha} · ${evento.modalidad}`;

 const cupos = document.createElement("p");
 cupos.classList.add("cupos");
 cupos.textContent = `Cupos disponibles: ${evento.cupos}`;

 const boton = document.createElement("button");
 boton.classList.add("btn-inscribir");
 boton.textContent = "Inscribirme";

 tarjeta.appendChild(titulo);
 tarjeta.appendChild(detalle);
 tarjeta.appendChild(cupos);
 tarjeta.appendChild(boton);

 // Tarea 1: etiqueta de modalidad con insertAdjacentHTML
 tarjeta.insertAdjacentHTML("afterbegin", `<span class="badge">${evento.modalidad}</span>`);

 return tarjeta;
}

function renderEventos() {
 contenedor.replaceChildren();
 eventos.forEach((evento) => contenedor.append(crearTarjeta(evento)));
}

renderEventos();

// Tarea 2: título "Próximos eventos" antes del contenedor con .before()
const tituloEventos = document.createElement("h2");
tituloEventos.textContent = "Próximos eventos";
contenedor.before(tituloEventos);

// Tarea 3: año actual al final del pie con insertAdjacentText
document.querySelector("#pie").insertAdjacentText("beforeend", ` · ${new Date().getFullYear()}`);

// Tarea 4: tarjeta de aviso al inicio del contenedor con .prepend()
const aviso = document.createElement("article");
aviso.classList.add("card");
aviso.textContent = "Inscripciones abiertas";
contenedor.prepend(aviso);

// Tarea 5: navegación por el DOM
console.log("Cantidad de hijos:", contenedor.children.length);
console.log("firstElementChild:", contenedor.firstElementChild);
console.log("lastElementChild:", contenedor.lastElementChild);
console.log("previousElementSibling del último hijo:", contenedor.lastElementChild.previousElementSibling);
