const partnerData = {
    malaysia: {
        heading: "Are you ready to reach more customers?",
        description: "Don’t miss out on earnings. Join foodpanda to reach more customers and increase revenue.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/mehdi-ben-BOhxVT-VCRs-unsplash-900x600.webp"
        
    },
    philippines: {
        heading: "Unlock unlimited potential in the Philippines",
        description: "Partner with foodpanda Philippines today and drive your restaurant's success to new heights.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/sj-Q4aFSPmYjNE-unsplash-900x600.webp"
        
    },
    bangladesh: {
        heading: "Ready to grow your business in Bangladesh?",
        description: "Join the leading delivery platform and reach thousands of hungry customers across the country.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/johnyvino-P-900x600.webp"
        
    },
    hongkong: {
        heading: "Boost your sales in Hong Kong",
        description: "Capture the interest of new customers and streamline your operations with our professional delivery network.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/mche-lee-kGA-900x600.webp"
        
    },
    pakistan: {
        heading: "Expand your reach in Pakistan",
        description: "Get more orders and grow your brand with foodpanda's dedicated marketing and operational support.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/polly-sadler-900x600.webp"
        
    },
    singapore: {
        heading: "Drive growth in Singapore",
        description: "Maximize your business potential with Singapore's most trusted food and grocery delivery partner.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/abillion-97i3-900x600.webp"
    },
    taiwan: {
        heading: "Reach more foodies in Taiwan",
        description: "Connect with thousands of active users and provide them with the convenience of your products.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/daniel-honies-qJX_J6U5Vm4-unsplash-900x600.webp"
        
    },
    cambodia: {
        heading: "Scale your business in Cambodia",
        description: "Partner with us to increase your visibility and grow your customer base throughout the kingdom.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/johnyvino-P-900x600.webp"
    },
    laos: {
        heading: "Join our network in Laos",
        description: "Take the first step toward digital growth. List your shop or restaurant on foodpanda today.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/doan-anh-afK-900x600.webp"
        
    },
    myanmar: {
        heading: "Start your journey in Myanmar",
        description: "Leverage our technology to reach more people and simplify your business delivery process.",
        image: "https://www.foodpanda.com/wp-content/uploads/2025/07/tatiana-demelo-a22j2b-900x600.webp"
        
    }
};

const pills = document.querySelectorAll('.regionPill');
const container = document.getElementById('ctaContainer');
const heading = document.getElementById('ctaHeading');
const desc = document.getElementById('ctaDescription');
const img = document.getElementById('ctaImage');

pills.forEach(pill => {
    pill.addEventListener('click', () => {
        const region = pill.getAttribute('data-region');
        const data = partnerData[region];

        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        container.classList.add('fade');

        setTimeout(() => {
            heading.textContent = data.heading;
            desc.textContent = data.description;
            img.src = data.image;
            container.classList.remove('fade');
        }, 300);
    });
});


// faq section

const faqItems = document.querySelectorAll('.faqItem');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const questionText = item.querySelector('.faqQuestion').innerText;
        console.log(`Redirecting to help center for: ${questionText}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faqItem');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});