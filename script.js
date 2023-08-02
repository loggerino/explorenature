const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const figcaptions = document.querySelectorAll(".slide figcaption");

let activeSlide = 0;

function showFigcaption(index) {
    figcaptions.forEach((figcaption, i) => {
        figcaption.classList.toggle("active", i === index);
    });
}

nextButton.addEventListener("click", () => {
    const slideWidth = slides[0].clientWidth;
    if (activeSlide === slides.length - 1) {
        activeSlide = 0;
        slidesContainer.scrollLeft = 0;
    } else {
        activeSlide++;
        slidesContainer.scrollLeft += slideWidth;
    }
    showFigcaption(activeSlide);
});


prevButton.addEventListener("click", () => {
    const slideWidth = slides[0].clientWidth;
    if (slidesContainer.scrollLeft === 0) {
        slidesContainer.scrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;
        activeSlide = slides.length - 1;
    } else {
        activeSlide = (activeSlide - 1 + slides.length) % slides.length;
        slidesContainer.scrollLeft -= slideWidth;
    }
    showFigcaption(activeSlide);
});
