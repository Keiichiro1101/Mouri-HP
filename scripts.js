let slideIndex = 1;
showSlides(slideIndex);

// 5秒ごとにスライドを切り替える
setInterval(function() {
    plusSlides(1); // 次のスライドへ進む
}, 5000); // 5000ミリ秒 = 5秒

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
