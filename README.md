# Digi-Tech Riberalta

Tienda online sencilla y mobile-first para Digi-Tech, Riberalta, Bolivia.

## Objetivo

La tienda está pensada para que el cliente pueda:

1. Ver productos.
2. Ver el precio en bolivianos.
3. Buscar o filtrar por categoría.
4. Consultar o comprar directamente por WhatsApp.

No usamos carrito ni procesos de pago complicados en esta primera versión. La venta y confirmación se realizan por WhatsApp.

## Estructura

- `index.html` — estructura de la tienda.
- `styles.css` — diseño responsive y mobile-first.
- `app.js` — catálogo, búsqueda, categorías y enlaces de WhatsApp.

## Cómo agregar o cambiar productos

Los productos se editan en la lista `products` de `app.js`. Cada producto tiene:

- `name`: nombre.
- `price`: precio en Bs; usar `null` si se debe consultar.
- `category`: categoría.
- `description`: descripción corta.

Las fotos reales se incorporarán en una siguiente carga sin cambiar la estructura general.

## Principio del proyecto

**Simple para el cliente, fácil de mantener para Digi-Tech.**
