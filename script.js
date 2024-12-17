// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Form Submission Alerts
document.querySelector('#reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your table has been reserved successfully!');
});

document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
});
