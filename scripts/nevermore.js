document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }

        var contentContainer = document.getElementById('content-container');
        if (contentContainer) {
            contentContainer.style.display = 'block';
        }

        var audio = new Audio('/audio/rampage.mp3');
        audio.play().catch(error => {
            console.log('No se pudo reproducir el audio automáticamente debido a restricciones del navegador.');
        });
    }, 5000);
});
