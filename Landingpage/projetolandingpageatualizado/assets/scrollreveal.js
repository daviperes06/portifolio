// scrollreveal.js — animação simples de scroll reveal
(function() {
  function reveal() {
    var elements = document.querySelectorAll('[data-reveal]');
    var windowHeight = window.innerHeight;
    elements.forEach(function(el) {
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight - 60) {
        el.classList.add('revealed');
      }
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
})();
