const navResponsive = document.getElementById('nav-responsive');
const headerNav = document.getElementById('header-nav');

console.log('Hola');

navResponsive.addEventListener("click", function() {
    headerNav.classList.toggle('nav-active');
});

