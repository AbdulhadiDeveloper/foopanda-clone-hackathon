document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburgerToggle');
    const navMenu = document.getElementById('adsNavMenu');
    const overlay = document.getElementById('overlayAdsMenu');
    const contactBtns = document.querySelectorAll('.contactUsBtn');
    const body = document.body;

    // 1. Fix for "Contact Us" buttons not working
    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Redirects to your contact page
            window.location.href = 'contact.html'; 
        });
    });

    // 2. Fix for Hamburger Toggle
    function toggleMobileMenu() {
        const isOpen = navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('navOpen');
        
        // Update icon
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    }

    hamburger.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);

    // 3. Close menu when clicking nav links
    const navItems = document.querySelectorAll('.adsNavItem');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
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

