let slideIndex = 1;
let intervalId; // Variable to hold the interval ID

showSlides(slideIndex);

// Initial interval: Switch slides every 7 seconds
intervalId = setInterval(function() {
    plusSlides(1); // Move to the next slide
}, 7000); // 7000 milliseconds = 7 seconds

function plusSlides(n) {
    clearInterval(intervalId); // Clear the current interval
    showSlides(slideIndex += n);
    // Start a new interval after 7 seconds
    intervalId = setInterval(function() {
        plusSlides(1); // Move to the next slide
    }, 7000);
}

function currentSlide(n) {
    clearInterval(intervalId); // Clear the current interval
    showSlides(slideIndex = n);
    // Start a new interval after 7 seconds
    intervalId = setInterval(function() {
        plusSlides(1); // Move to the next slide
    }, 7000);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade-in");
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade-in");
}
