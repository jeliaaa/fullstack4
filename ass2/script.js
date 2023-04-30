document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    var currentSlide = 0;
    const slidesCounter = slides.children.length;

    function goToSlide(slideIndex) {
        //console.log(currentSlide - 1)
        if (slideIndex < 0) {
            currentSlide = slidesCounter - 1;
        } else if (slideIndex >= slidesCounter) {
            currentSlide = 0;
        } else {
            currentSlide = slideIndex
        }
        slides.style.transform = `translateX(-${currentSlide*100}%)`;
        //console.log(currentSlide)
    }
    next.addEventListener("click", () => {
        goToSlide(currentSlide + 1);
    });
    prev.addEventListener("click", () => {
        goToSlide(currentSlide - 1);
    });
    goToSlide(0);
})