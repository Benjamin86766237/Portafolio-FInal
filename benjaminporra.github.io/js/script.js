// Script interactivo para la versión final del Portfolio de Benjamin Porra

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('nav a');

    // Mejora de Navegación 1: Menú Hamburguesa en Pantallas Pequeñas
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('activo');
        });
    }

    // Cerrar menú al hacer clic en un enlace de sección
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('activo')) {
                navMenu.classList.remove('activo');
            }
        });
    });

    console.log("Portfolio v1.0 Final - Benjamin Porra cargado e interactivo.");
});
