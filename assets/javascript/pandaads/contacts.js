document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactInquiryForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const submitBtn = contactForm.querySelector('.formSubmitBtn');
        
        submitBtn.innerText = 'Submitting...';
        submitBtn.style.opacity = '0.8';

        setTimeout(() => {
            alert('Thank you! Your information has been submitted.');
            contactForm.reset();
            submitBtn.innerText = 'Submit';
            submitBtn.style.opacity = '1';
        }, 1500);
    });
});