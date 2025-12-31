const filterButtons = document.querySelectorAll('.filterBtn:not(.showMore)');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});