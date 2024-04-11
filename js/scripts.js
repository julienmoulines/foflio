// scripts.js
let currentSlide = 0;
const slides = document.querySelectorAll('.project-slide');
const totalSlides = slides.length;

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlidePosition();
    }
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    const offset = -currentSlide * 50; // Chaque slide déplace le conteneur de 100% de la largeur
    document.getElementById('project-container').style.transform = `translateX(${offset}%)`;
}
