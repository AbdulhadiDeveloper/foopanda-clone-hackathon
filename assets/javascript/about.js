// carousel section

const carouselData = [
    {
        heading: "Customers come first",
        description: "We’re far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business. Download the app to experience true convenience.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/10/fp-about-2.webp"
    },
    {
        heading: "Growing with our partners",
        description: "We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level? Join us and reach more customers than ever before.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-2.webp"
    },
    {
        heading: "Our riders are our heroes",
        description: "We’re here to provide exciting opportunities and empower work flexibility. Learn more about our riders’ journey or sign up to become one. We value every mile they travel to bring joy to your doorstep.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-4.webp"
    }
];

let currentIndex = 0;

const headingEl = document.getElementById('carouselHeading');
const descEl = document.getElementById('carouselDescription');
const imgEl = document.getElementById('carouselImg');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel(index) {
    headingEl.textContent = carouselData[index].heading;
    descEl.textContent = carouselData[index].description;
    imgEl.src = carouselData[index].image;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});



// values section


const valuesData = [
    {
        heading: "prioritise, decide, deliver",
        text: "We believe in high-speed execution. We make clear choices, move fast, and focus on delivering results that matter to our community every single day.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/06/02_prioritise-decide_deliver__500x500.webp"
    },
    {
        heading: "start with customer, end with customer",
        text: "We want our consumers, vendors, riders, employees (including prospective ones) – the customers who make up our ecosystem – to keep coming back to the product, service, and experience we create. To achieve this, we keep them at the centre of everything we do.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/06/01_start-with-customer-end-with-customer_500x500.webp"
    },
    {
        heading: "own it end-to-end",
        text: "We take full responsibility for our work. From the initial idea to the final delivery, we act like owners and ensure every detail is handled with care and excellence.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/06/03_own-it-end-to-end__500x500.webp"
    },
    {
        heading: "challenge the status quo",
        text: "Innovation drives us. We aren't afraid to question the 'way things are' to find better, faster, and more creative solutions for the future of quick commerce.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/06/04_challenge-the-status-quo__500x500.webp"
    },
    {
        heading: "we before me",
        text: "Collaboration is our strength. We succeed as a team by supporting one another, celebrating collective wins, and putting the company's mission above personal egos.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/06/05_we-before-me__500x500.webp"
    },
    {
        heading: "plan for tomorrow, focus on today",
        text: "We balance long-term vision with immediate action. By staying grounded in today's performance, we build the foundation for a sustainable and exciting tomorrow.",
        image: "https://www.foodpanda.com/wp-content/uploads/2024/06/06_plan-for-tomorrow-focus-on-today__500x500.webp"
    }
];

const pills = document.querySelectorAll('.valuePill');
const displayHeading = document.getElementById('valuesDisplayHeading');
const displayParagraph = document.getElementById('valuesDisplayParagraph');
const displayImage = document.getElementById('valuesIllustration');

pills.forEach(pill => {
    pill.addEventListener('click', () => {
        const index = pill.getAttribute('data-index');
        
        // Update Active Pill
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        
        // Update Content with simple fade effect
        const content = valuesData[index];
        displayHeading.textContent = content.heading;
        displayParagraph.textContent = content.text;
        displayImage.src = content.image;
    });
});