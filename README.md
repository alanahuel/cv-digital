# CV Digital — Alan Nahuel López Ruiz

CV digital de una sola página, estático, con estética minimalista (adaptada de
[alannahuel.com](https://alannahuel.com)). Permite contactar por **correo**,
**WhatsApp**, **LinkedIn**, **teléfono** y **descargar el CV en PDF**.

## Stack

- [Astro 5](https://astro.build) (salida estática)
- [Tailwind CSS v4](https://tailwindcss.com) vía `@tailwindcss/vite`
- Tipografías: Inter + Playfair Display

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve la build
```

## Editar el contenido

Todo el contenido del CV está centralizado en **`src/data/cv.ts`**:

- `profile` — nombre, rol, contacto, resumen.
- `contact` — asunto/cuerpo del correo y mensaje de WhatsApp pre-rellenados.
- `experience`, `education`, `skills`, `languages` — secciones.

El PDF descargable está en `public/Alan_Nahuel_Lopez_CV.pdf`.

## Despliegue

Al ser un sitio estático, se despliega en cualquier hosting estático. Para
Vercel: importar el repo y dejar la detección automática de Astro (build
`npm run build`, output `dist/`).

## Estructura

```
src/
├── data/cv.ts              # contenido editable del CV
├── layouts/Layout.astro    # <head>, SEO, datos estructurados Person
├── components/
│   ├── Section.astro       # título de sección con regla degradada
│   └── WhatsappWidget.astro# botón flotante de WhatsApp
├── pages/index.astro       # página única con todas las secciones
└── styles/global.css       # tema oscuro, fuentes, tarjetas glass
```
