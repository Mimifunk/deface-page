document.addEventListener("DOMContentLoaded", function () {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 10 + 5 + 's';
      snowflake.style.animationDelay = Math.random() * 10 + 's';
    });
  
    setTimeout(() => {
      const audio = document.getElementById('audio');
      audio.play().catch(error => {
        console.log('El audio no se puede reproducir automáticamente debido a restricciones del navegador.');
      });
    }, 5000); 
  });
  