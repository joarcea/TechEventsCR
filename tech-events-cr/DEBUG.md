# Bitácora de debugging

| Bug | Síntoma observado | Herramienta usada | Línea | Causa | Corrección |
|---|---|---|---|---|---|
| 1 | El botón "Inscribir" no respondía y la Console mostraba `Uncaught TypeError: Cannot read properties of null (reading 'textContent')` | Console, Elements y Sources (breakpoint + panel Scope) | `js/debug.js`, línea 5 (`const mensaje = document.querySelector("#mesaje")`) | El selector `#mesaje` tiene un error de escritura; el id real en `index.html` es `mensaje`, por lo que `querySelector` devolvió `null` | Cambiar el selector a `#mensaje` |
| 2 | Con 5 entradas dos veces, los cupos no quedaban en 40; `totalInscritos` pasaba a ser un texto como `"05"` | Sources (breakpoint en `registrarInscripcion`, Step over) y panel Watch (`typeof inscritos`, `totalInscritos`, `cuposDisponibles`) | `js/debug.js`, línea 14 (`const inscritos = inputCantidad.value`) | El `value` de un input siempre es un string, entonces `+` concatena texto en lugar de sumar | Convertir con `Number(inputCantidad.value)` |
| 3 | Con 50 entradas aparecía "No hay cupos suficientes" aunque la inscripción era válida | Sources (breakpoint en el `if`, Step over, Step into en `mostrarResumen`, Step out, Resume) y panel Scope | `js/debug.js`, línea 17 (`if (cuposDisponibles > 0)`) | Con 50 entradas `cuposDisponibles` vale 0 y la condición `> 0` es falsa, aunque inscribir justo todos los cupos es válido | Cambiar la condición a `cuposDisponibles >= 0` |

## Responsable de cada bug
- Bugs 1 y 2: Estudiante B
- Bug 3: Estudiante A
