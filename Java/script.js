
// GENESYS X SALON - JAVASCRIPT FUNCTIONALITY

// 1. FAQ ACCORDION
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        answer.classList.toggle("active");
        button.classList.toggle("active");
    });
});

// 2. SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// 3. IMAGE GALLERY LIGHTBOX
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.style.display = "flex";
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// 4. SEARCH AND FILTER SALON SERVICES
const searchInput = document.getElementById("service-search");
const serviceCards = document.querySelectorAll(".service-card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        serviceCards.forEach(card => {
            const serviceName = card.textContent.toLowerCase();

            card.style.display =
                serviceName.includes(searchTerm) ? "" : "none";
        });
    });
}

// 5. ENQUIRY FORM VALIDATION
const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("customer-name").value.trim();
        const email = document.getElementById("customer-email").value.trim();
        const message = document.getElementById("customer-message").value.trim();

        if (!name || !email || !message) {
            alert("Please complete all required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your enquiry has been validated.");
        enquiryForm.reset();
    });
}
