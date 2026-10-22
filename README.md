# AG1 flotante

Compañero de ruta de **IA El Colorado** (ISFD y T «República Federal de Alemania», El Colorado, Formosa) que flota arriba de la pantalla en **Android** y en la **compu**, conversa con la personalidad de AG1, conoce el material de las clases y puede mirar la pantalla con permiso.

- `web/` — la isla (HTML/JS), compartida por las dos apps.
- `conocimiento/` — lo que sabe AG1 (se convierte en `web/conocimiento.js` con `herramientas/armar_conocimiento.py`).
- `android/` — app nativa (servicio flotante + MediaProjection + voz).
- `escritorio/` — app Electron (Windows, Linux, Mac).
- `.github/workflows/compilar.yml` — compila el APK y el .exe en cada cambio.

Copyleft · Adustiones Libertarias.
