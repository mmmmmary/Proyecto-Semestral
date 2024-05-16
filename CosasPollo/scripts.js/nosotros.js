// Array de URLs de imágenes de fondo
var backgrounds = [
    'imgObras/the-desperate-man-self-portrait-artwork-photo-1.jpg',
    'imgObras/image1.jpg',
    'imgObras/great-wave-off-kanagawa1.jpg'
];

// Índice de la imagen actual
var currentIndex = 0;

// Función para cambiar el fondo de la página
function changeBackground() {
    document.body.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Cambiar el fondo inicialmente
changeBackground();

// Cambiar el fondo automáticamente cada 10 segundos
setInterval(changeBackground, 10000);

$(window).on('load', function() {
    $('body').addClass('loaded');
});