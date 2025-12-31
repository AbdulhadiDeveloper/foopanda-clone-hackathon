// navbar

const locationBtn = document.querySelector('.btn-location');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('mainNav');

// Toggle Location Dropdown
locationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
});

// Mobile Toggle (Minimalist implementation)
mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    // Logic for expanding menu can be added here
});






// back To Top Button

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

