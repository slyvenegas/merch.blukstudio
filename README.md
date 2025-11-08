# BlukStudio Merch

Este es el repositorio de la tienda de merchandising de Bluk Studio, construida con tecnologías modernas para ofrecer una experiencia de usuario rápida y fluida.

<img width="1365" height="647" alt="image" src="https://github.com/user-attachments/assets/eacaad8a-c2c5-4ead-aed5-bbaf8d2dd789" />


## Construcción y Arquitectura

El proyecto está diseñado como una aplicación web de alto rendimiento utilizando **Next.js**, un potente framework de React. Aprovecha el renderizado del lado del servidor (SSR) y la generación de sitios estáticos (SSG) para optimizar la velocidad de carga y la experiencia de usuario. El código está escrito en **TypeScript**, lo que garantiza una mayor robustez, mantenibilidad y detección temprana de errores.

La estructura del proyecto sigue una organización clara y modular:
- La carpeta `app/` contiene todas las rutas y páginas de la aplicación, incluyendo rutas dinámicas para productos.
- Los componentes reutilizables de la interfaz de usuario se encuentran en la carpeta `components/`, promoviendo la consistencia y la facilidad de desarrollo.
- La lógica de negocio y las utilidades compartidas están alojadas en la carpeta `lib/`.

## Tecnologías Utilizadas

Este proyecto se ha construido utilizando una combinación de las siguientes tecnologías y bibliotecas:

*   **Next.js 15.x:** Framework de React para aplicaciones web, que permite SSR, SSG y optimizaciones de rendimiento avanzadas.
*   **React 18.x:** Biblioteca JavaScript para la construcción de interfaces de usuario interactivas.
*   **TypeScript 5.x:** Un superset de JavaScript que añade tipado estático, mejorando la calidad del código y la productividad del desarrollador.
*   **Tailwind CSS 3.x:** Un framework CSS utility-first que permite diseñar rápidamente interfaces personalizadas directamente en el marcado.
*   **PostCSS 8.x:** Herramienta para transformar CSS con JavaScript, utilizado para procesar y optimizar los estilos.
*   **`@radix-ui/react-dialog`:** Componentes de interfaz de usuario sin estilo para construir diálogos accesibles y personalizables.
*   **`class-variance-authority` & `clsx`:** Utilidades para la gestión de clases CSS condicionales y la fusión eficiente de las mismas.
*   **`framer-motion` & `motion` 7.x:** Potentes bibliotecas para crear animaciones fluidas y gestos interactivos en la interfaz de usuario.
*   **`geist`:** Una familia tipográfica moderna y legible, utilizada para una estética limpia.
*   **`lucide-react`:** Una colección de iconos bonitos y personalizables para integrar fácilmente en la aplicación.
*   **pnpm:** Administrador de paquetes de JavaScript eficiente y rápido, utilizado para la gestión de las dependencias del proyecto.

## Características

Basado en el análisis del código, el proyecto Bluk Studio Merch incluye las siguientes características principales:

*   **Catálogo de Productos Dinámico:** Permite la visualización de productos individuales a través de rutas dinámicas (e.g., `/p/[slug]`), ofreciendo una página de detalles de producto (PDP) específica para cada artículo.
*   **Galería de Imágenes de Producto:** Integración de un sistema para mostrar múltiples imágenes por producto, permitiendo a los usuarios visualizar los artículos desde diferentes ángulos y variantes.
*   **Funcionalidad de Carrito de Compras:** Un sistema robusto para añadir productos al carrito, gestionar cantidades y revisar los artículos seleccionados antes de la compra. Esto incluye un contexto de carrito para la gestión del estado global.
*   **Componentes de Interfaz de Usuario Reutilizables:** Utilización de un sistema de diseño con componentes de UI modulares, como hojas (sheets) y diálogos, para una experiencia de usuario consistente y accesible.
*   **Navegación Intuitiva y Layout Global:** Un sistema de navegación bien estructurado y un layout global que aseguran una fácil exploración del sitio y una presentación uniforme del contenido.
*   **Animaciones y Transiciones Suaves:** Implementación de animaciones fluidas con Framer Motion para mejorar la interactividad y la experiencia visual del usuario.
*   **Páginas Informativas:** Inclusión de secciones esenciales como "Acerca de nosotros", "Ayuda", "Política de Privacidad" y "Términos y Condiciones" para proporcionar información completa a los usuarios.
*   **Desarrollo Rápido y Eficiente:** Gracias a Tailwind CSS, el diseño y la estilización de la interfaz de usuario se realizan de manera ágil y eficiente.
