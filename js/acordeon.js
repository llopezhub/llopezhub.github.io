document.addEventListener('DOMContentLoaded', function() {
  const accTitles = document.querySelectorAll('.accordion-title');

  accTitles.forEach(title => {
    title.addEventListener('click', function() {
      const content = title.nextElementSibling;

      // Alterna contenido
      content.classList.toggle('active');
      title.classList.toggle('active'); // para la flecha

      // Cierra otros acordeones
      accTitles.forEach(other => {
        if(other !== title) {
          other.nextElementSibling.classList.remove('active');
          other.classList.remove('active'); // resetea flecha
        }
      });
    });
  });
});