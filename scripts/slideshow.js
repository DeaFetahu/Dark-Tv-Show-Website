let currentSlideIndex = 0;
const slidesToShow = 5;
const sliderItems = document.querySelectorAll('.slider-item');
const totalSlides = sliderItems.length;
const sliderWrapper = document.getElementById('slider-wrapper');

// Set the width of the slider wrapper to accommodate all slides
sliderWrapper.style.width = `${(totalSlides / slidesToShow) * 100}%`;

// Set the width of each slider item
sliderItems.forEach(item => {
    item.style.width = `${100 / totalSlides}%`;
});

function moveSlide(step) {
    currentSlideIndex += step * slidesToShow;
    if (currentSlideIndex < 0) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex > totalSlides - slidesToShow) {
        currentSlideIndex = totalSlides - slidesToShow;
    }
    sliderWrapper.style.transform = `translateX(-${(currentSlideIndex / totalSlides) * 100}%)`;
}
