const navEl = document.querySelector('.navbar');
const navLinksEl = document.querySelectorAll('.nav-link');
const navbarTogglerEl = document.querySelector('.navbar-toggler'); // Menu burger

let lastScrollTop = 0; // Variable pour stocker la position précédente du scroll

window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;
    // Position actuelle du scroll
    if (scrollTop > lastScrollTop) {
        // Scroll vers le bas
        navEl.classList.add('navbar-scrolled');
    } else {
        // Scroll vers le haut
        navEl.classList.remove('navbar-scrolled');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Met à jour la position précédente du scroll
});
