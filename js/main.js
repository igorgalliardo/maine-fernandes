const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {
            el.classList.add('active');
        }
    });
});


const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById('menuMobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menuMobile.classList.remove('active');
    });
});
