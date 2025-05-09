// Toggle mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = isMenuOpen 
        ? '<i class="fas fa-times text-2xl"></i>' 
        : '<i class="fas fa-bars text-2xl"></i>';
});