// Mobile menu toggle
const menu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('#mobile-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});