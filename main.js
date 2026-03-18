// Fade-up al hacer scroll
// Observa cada elemento con clase .fade-up y le agrega .visible cuando entra en pantalla

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // deja de observar una vez visible
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
