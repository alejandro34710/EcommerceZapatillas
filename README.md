🏪 StrideZone - Tienda de Zapatillas Deportivas

📝 Resumen y Descripción del Proyecto

StrideZone es una plataforma de comercio electrónico desarrollada con React y Tailwind CSS, enfocada en la venta de zapatillas deportivas. El sitio permite a los usuarios explorar diferentes colecciones de productos, aplicar filtros por categoría, tipo o precio, añadir productos al carrito, ver productos relacionados, completar formularios de compra y seleccionar métodos de pago.

🎯 Objetivo del Proyecto

✅ Objetivo General

Desarrollar una tienda virtual de zapatillas deportivas completamente funcional y responsiva, que permita al usuario filtrar, seleccionar y comprar productos de manera intuitiva.

🎯 Objetivos Específicos

Implementar un sistema de carrito de compras dinámico.

Incluir filtros por género, tipo de calzado y orden de precio.

Validar formularios de compra antes de procesar el pago.

Integrar métodos de pago visuales (aunque no funcionales aún).

Mostrar productos relacionados en la vista de detalle.

Incluir funcionalidades de búsqueda y experiencia fluida sin recarga de página.

📦 Alcance del Proyecto

Este proyecto cubre:

Interfaz completamente funcional de navegación, catálogo y compra.

Carrito con actualizaciones en tiempo real.

Filtros y ordenamientos dinámicos.

Formulario con validación.

Funcionalidades visuales para crear cuenta (sin backend).

Productos relacionados automatizados.

Preparado para escalar a integración backend o Firebase.

🧰 Tecnologías Utilizadas

React.js – SPA (Single Page Application)

Tailwind CSS – Estilización moderna y responsiva

React Context API – Manejo de estado global (carrito, filtros)

React Router DOM – Navegación entre páginas

Heroicons / React Icons – Íconos interactivos

ESLint – Control de calidad de código



⚙️ Instalación y Configuración

git clone https://github.com/alejandro34710/3.EcommerceZapatillas
cd Frontend
npm install
npm run dev

🗂️ Estructura del Proyecto

/src
  ├── assets/
  ├── components/
  ├── context/
  ├── pages/
  ├── App.jsx
  └── main.jsx

components/: Componentes reutilizables (Hero, ProductItem, CartTotal, etc.)

context/ShopContext.jsx: Manejo del estado global del carrito

pages/: Vistas principales del sitio

assets/: Recursos gráficos

main.jsx y App.jsx: Entrada principal del proyecto
