// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces del menú de navegación que son subítems
    var subNavLinks = document.querySelectorAll('.sub-item');

    // Iterar sobre cada enlace
    subNavLinks.forEach(function(navLink) {
        // Agregar un controlador de eventos de clic a cada enlace
        navLink.addEventListener('click', function(event) {
            // Evitar que el enlace cambie la página
            event.preventDefault();

            // Obtener la URL del atributo href del enlace
            var url = this.getAttribute('href');

            // Obtener el iframe
            var iframe = document.querySelector('iframe');

            // Actualizar el atributo src del iframe con la URL del enlace
            iframe.src = url;
        });
    });
});
