document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('premium-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.lightbox-close');

// Open premium image
document.querySelectorAll('#premium .premium-card img, #premium .photo img').forEach(function (img) {
    img.addEventListener('click', function () {
        lightboxImage.src = img.src;
        lightbox.classList.add('active');
    });
});

// Close lightbox
closeButton.addEventListener('click', function () {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
});

// Close when clicking outside the image
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxImage.src = '';
    }
});

// Prevent right-click on premium images
document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('#premium img')) {
        e.preventDefault();
    }
});

// Prevent dragging premium images
document.addEventListener('dragstart', function (e) {
    if (e.target.matches('#premium img')) {
        e.preventDefault();
    }
});

// Prevent common save/view shortcuts on premium section
document.addEventListener('keydown', function (e) {
    if (
        (e.ctrlKey || e.metaKey) &&
        ['s', 'u'].includes(e.key.toLowerCase())
    ) {
        e.preventDefault();
    }
});
