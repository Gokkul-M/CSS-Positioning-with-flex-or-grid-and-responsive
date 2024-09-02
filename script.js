function initMap() {
    var mapOptions = {
        zoom: 14,
        center: { lat: 40.730610, lng: -73.935242 }, 
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

initMap();
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    goToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    goToPreviousSlide();
});

function goToNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function goToPreviousSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Auto slide every 5 seconds
setInterval(goToNextSlide, 5000);
