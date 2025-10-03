// main.js — menu mobile e acessibilidade
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', function() {
  navList.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', navList.classList.contains('active'));
});
