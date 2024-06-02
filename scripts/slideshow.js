let currentSlideIndex = 0;
const slidesToShow = 5;
const totalSlides = document.querySelectorAll('.slider-item').length;
const sliderWrapper = document.getElementById('slider-wrapper');

function moveSlide(step) {
    currentSlideIndex += step * slidesToShow;
    if (currentSlideIndex < 0) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
    sliderWrapper.style.transform = `translateX(-${currentSlideIndex * (100 / slidesToShow)}%)`;
}
