# Guía de ejecución – TechEvents CR
Estudiante A (propietario del repo): Jose Eduardo Arce Alpizar
Estudiante B (colaborador): Kenneth Hernández Rodas
Nombre del repo sugerido: tech-events-cr-arce-hernandez

Reemplacen en README.md: USUARIO-EDUARDO y USUARIO-KENNETH por los usuarios reales de GitHub (si el repo se llama distinto, ajusten también las URLs).

## Parte 1 (A = Eduardo) – Repositorio
1. github.com → New repository → nombre `tech-events-cr-arce-hernandez`, Public, Add a README → Create.
2. Settings → Collaborators → Add people → usuario de Kenneth.
3. (Recomendado) Settings → Rules → Rulesets → ruleset para `main` con "Require a pull request before merging".
(Kenneth) Acepta la invitación (correo o github.com/notifications).

## Parte 2 (ambos)
git clone https://github.com/USUARIO-EDUARDO/tech-events-cr-arce-hernandez.git
cd tech-events-cr-arce-hernandez
git config user.name
git config user.email

## Ciclo de cada PR
git checkout main && git pull origin main
git checkout -b RAMA
(copiar archivos) → git add . → git commit -m "MENSAJE" → git push -u origin RAMA
En GitHub: Compare & pull request → título, descripción, Reviewer = compañero.
El compañero: Files changed → comentario en una línea → Review changes → Approve → Merge → Delete branch.
Ambos: git checkout main && git pull origin main.

## PRs (copiar desde tech-events-cr/ de este zip)
| PR | Quién | Rama | Archivos | Commit |
|---|---|---|---|---|
| 1 | A (Eduardo) | feature/html-estructura | index.html | feat: estructura HTML de TechEvents CR |
| 2 | B (Kenneth) | feature/css-estilos | css/styles.css | feat: estilos CSS con grid y diseño responsive |
| 3 | A (Eduardo) | feature/js-dom | js/app.js | feat: render de tarjetas de eventos con DOM |
| 4 | B (Kenneth) | feature/js-eventos | js/eventos.js | feat: manejo de eventos e inscripción |
| 5 | A (Eduardo) | feature/debug-ejercicio | guia/pr5-debug-con-errores/debug.js → js/debug.js (CON errores), DEBUG.md (plantilla vacía), evidencias/.gitkeep | feat: ejercicio de debugging |
| 6 | B (Kenneth) | fix/bugs-1-y-2 | js/debug.js (bugs 1 y 2), DEBUG.md filas 1-2, capturas bug1-console.png y bug2-watch.png en evidencias/ | fix: corrige bugs 1 y 2 |
| 7 | A (Eduardo) | fix/bug-3 | js/debug.js (bug 3), DEBUG.md fila 3, capturas bug3-breakpoint.png y bug3-corregido.png | fix: corrige bug 3 |
| 8 | B (Kenneth) | docs/readme-publicacion | README.md (con URLs y usuarios reales) | docs: README con URL publicada |

Notas:
- PR #4: B debe hacer `git pull origin main` tras el merge del PR #3 (usa `eventos` y `contenedor`).
- PR #5: el js/debug.js debe quedar CON errores. Plantilla DEBUG.md: tabla con filas 1-3 vacías + "Responsable de cada bug".
- PR #6 y #7: los pasos (Console, Elements, Sources, breakpoints, Watch/Scope, Step over/into/out, Resume) se hacen en el navegador con F12 y de ahí salen las capturas.

## Parte 6 (A = Eduardo)
Settings → Pages → Deploy from a branch → main / (root) → Save. Esperar 1–3 min y probar la URL
https://USUARIO-EDUARDO.github.io/tech-events-cr-arce-hernandez/ (sin errores en Console).
Luego PR #8 (B) con las URLs reales.

## Entrega (1 mensaje por pareja en la plataforma)
1. Enlace al repositorio. 2. Enlace a GitHub Pages. 3. Enlace a Pull requests → Closed (8 PR cerrados).
