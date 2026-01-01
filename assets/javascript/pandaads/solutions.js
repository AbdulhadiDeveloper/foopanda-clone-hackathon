const boostData = {
    popup: {
        title: "Full-page pop-up",
        para: "Engage foodpanda customers through high-impact, disruptive formats",
        img: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_full-page-takeover-900x602.png"
    },
    carousel: {
        title: "Carousel banner",
        para: "Drive brand awareness and consideration with high-visibility banners on the home screen",
        img: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_carousel-900x602.png"
    },
    cart: {
        title: "Cart upsell",
        para: "Encourage last-minute purchases with strategic placements right before checkout",
        img: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_cart-upsell-900x603.png"
    },
    payment: {
        title: "Payment switch",
        para: "Promote your brand at the critical moment of transaction and payment selection",
        img: "https://pandaads.foodpanda.com/wp-content/uploads/2024/09/jpeg-optimizer_payment-switch-900x603.png"
    }
};

const boostPills = document.querySelectorAll('.pillItem');
const displayArea = document.getElementById('contentDisplayArea');
const dTitle = document.getElementById('displayTitle');
const dPara = document.getElementById('displayPara');
const dMockup = document.getElementById('displayMockup');

boostPills.forEach(pill => {
    pill.addEventListener('click', () => {
        const type = pill.getAttribute('data-tab');
        const data = boostData[type];

        boostPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        displayArea.classList.add('fade');

        setTimeout(() => {
            dTitle.textContent = data.title;
            dPara.textContent = data.para;
            dMockup.src = data.img;
            displayArea.classList.remove('fade');
        }, 300);
    });
});