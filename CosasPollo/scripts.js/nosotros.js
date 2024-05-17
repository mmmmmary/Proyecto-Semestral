


document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las tarjetas por su clase
    var cards = document.querySelectorAll('.card');

    // Itera sobre cada tarjeta y agrega los eventos mouseover y mouseout
    cards.forEach(function(card) {
        card.addEventListener('mouseover', function() {
            // estilos de la animación cuando el mouse está sobre la tarjeta
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        card.addEventListener('mouseout', function() {
            // Revierte los estilos cuando el mouse sale de la tarjeta
            this.style.transform = "scale(1)";
        });
    });
});


