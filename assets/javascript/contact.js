document.addEventListener('DOMContentLoaded', () => {
    const inquiryForm = document.getElementById('contactInquiryForm');

    inquiryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const btn = inquiryForm.querySelector('.formSubmitBtn');
        btn.innerText = 'Processing...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Your inquiry has been submitted successfully!');
            inquiryForm.reset();
            btn.innerText = 'Submit';
            btn.style.opacity = '1';
        }, 2000);
    });
});