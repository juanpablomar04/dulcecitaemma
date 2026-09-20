# Dulce Emma — Tienda online

Sitio estático (HTML/CSS/JS puro, sin build) para el emprendimiento **Dulce Emma**
(velas artesanales, difusores aromáticos y porcelana fría · Tandil).
Los pedidos se hacen por WhatsApp.

## Estructura

```
.
├── index.html      # estructura de la página
├── styles.css      # estilos (tema claro/oscuro incluido)
├── app.js          # catálogo (PRODUCTS), categorías (CATS) y fotos (PHOTOS) + lógica del filtro
├── assets/         # imágenes (hero + fotos de productos)
└── render.yaml     # blueprint para desplegar en Render
```

## Editar el catálogo

Todo el contenido vive en `app.js`:

- **Agregar/editar productos:** array `PRODUCTS`. Cada item es
  `{ id, cat, name, price, tag, desc }`. `price` es un número (sin puntos ni $).
  `cat` debe ser una de las categorías: `velas`, `difusores` o `porcelana`.
- **Categorías (botones del filtro):** array `CATS`.
- **Fotos reales:** objeto `PHOTOS`, mapea el `id` del producto a una imagen de
  `assets/` (ej. `8: "assets/prod-8.jpg"`). Si un producto no tiene foto, se dibuja
  una ilustración por defecto.
- **WhatsApp:** constante `WA_NUMBER` al principio de `app.js`.

## Probar en local

Cualquier server estático, por ejemplo:

```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Tienda online Dulce Emma"
git branch -M main
git remote add origin https://github.com/<TU-USUARIO>/dulce-emma.git
git push -u origin main
```

## Desplegar en Render

**Opción A — Blueprint (usa render.yaml):**
1. En Render: **New → Blueprint**.
2. Conectá el repo de GitHub. Render lee `render.yaml` y crea el Static Site solo.
3. **Apply** y listo.

**Opción B — Manual:**
1. En Render: **New → Static Site**.
2. Conectá el repo.
3. **Build Command:** dejar vacío. **Publish Directory:** `.`
4. **Create Static Site**.

Cada `git push` a `main` vuelve a desplegar automáticamente.
