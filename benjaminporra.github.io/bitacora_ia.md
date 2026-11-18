# Bitácora de Uso de Inteligencia Artificial — Versión Final

## Consulta 1 (Estructura Base & Proyectos)
- **Fecha:** 11 de Noviembre de 2026
- **Herramienta utilizada:** AI Assistant
- **Objetivo:** Definir la estructura HTML semántica adaptada a mi perfil de informática y peleador de MMA amateur.
- **Prompt completo:** 
  > "Necesito una estructura semántica para un portfolio con encabezado, navegación, presentación, sobre mí, proyectos, habilidades, contacto y pie de página. Usá solamente HTML5. Marcá los proyectos e incluye mis trabajos: corte de peso para combate, autito seguidor de línea y casa domótica con ventanas infrarrojas en Tinkercad."
- **Parte utilizada:** Maquetación semántica `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Cambios realizados por mí:** Redacté en detalle el problema, solución, aporte personal y tecnologías de los 3 proyectos específicos.
- **¿Qué comprendí?** Comprendí cómo comunicar aportes técnicos concretos en proyectos interdisciplinarios.
- **¿Qué descarté y por qué?** Descarté descripciones genéricas para enfocarme en los prototipos de Tinkercad y el control de peso.

---

## Consulta 2 (Mejora Responsive & Menú Hamburguesa)
- **Fecha:** 11 de Noviembre de 2026
- **Herramienta utilizada:** AI Assistant
- **Objetivo:** Aplicar una mejora de navegación móvil para pantallas pequeñas mediante JavaScript y CSS Media Queries.
- **Prompt completo:** 
  > "Creá un código en JavaScript puro y CSS con Media Queries a 768px para convertir el menú de navegación de mi portfolio en un menú desplegable (hamburguesa) funcional en celulares. Explicá cómo vincular el botón."
- **Parte utilizada:** Evento `addEventListener('click')` en JS y reglas de `@media (max-width: 768px)` con `max-height` en CSS.
- **Cambios realizados por mí:** Añadí el evento de auto-cierre del menú al presionar cualquier enlace para mejorar la usabilidad en pantallas táctiles.
- **¿Qué comprendí?** Aprendí a manejar clases CSS dinámicas (`.classList.toggle('activo')`) con JS sin usar librerías externas.
- **¿Qué descarté y por me?** Descarté librerías de Bootstrap o jQuery para mantener el código ligero y 100% personal.

---

## Consulta 3 (Mejora de Diseño & Tipografía)
- **Fecha:** 11 de Noviembre de 2026
- **Herramienta utilizada:** AI Assistant
- **Objetivo:** Refinar la estética visual del portfolio a un tema 'Dark Tech/MMA'.
- **Prompt completo:** 
  > "Diseñá una paleta de colores en variables CSS basada en azul muy oscuro, rojo combate (#e11d48) y tarjetas elevadas con bordes sutiles. Agregá badges visuales para categorizar proyectos."
- **Parte utilizada:** Variables de color `:root`, estilos de tarjetas `.tarjeta` y etiquetas `.tag-proyecto`.
- **Cambios realizados por mí:** Ajusté los contrastes del texto secundario para asegurar accesibilidad visual.
- **¿Qué comprendí?** Comprendí cómo la jerarquía tipográfica y las etiquetas de color facilitan la lectura rápida del portfolio.
- **¿Qué descarté y por qué?** Descarté animaciones complejas en 3D por temas de velocidad de carga.
