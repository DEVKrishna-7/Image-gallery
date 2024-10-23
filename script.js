const images = [
    { src: "images/bear.jpg" },
    { src: "images/cheta.jpg" },
    { src: "images/egal.jpg" },
    { src: "images/elephant.jpg" },
    { src: "images/tiger.jpg" },
    { src: "images/fox.jpg" },
    { src: "images/kingfisher.jpg" },
    { src: "images/owal.jpg" },
    { src: "images/paroat.jpg" },
    { src: "images/squarl.jpg" }
];

let currentIndex = 0;

const mainImage = document.getElementById('mainImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const imageCaption = document.getElementById('imageCaption');

function updateImage() {
    mainImage.src = images[currentIndex].src;
    imageCaption.textContent = images[currentIndex].caption;
    updateThumbnails();
    updateButtons();
}

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

function createThumbnails() {
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateImage();
        });
        thumbnailContainer.appendChild(thumbnail);
    });
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        updateImage();
    } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize
createThumbnails();
updateImage();