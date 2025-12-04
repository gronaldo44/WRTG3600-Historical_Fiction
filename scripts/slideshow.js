let slideIndex = 0;
let slides = [];
let dots = [];

function showSlide(n) {
  if (!slides.length) {
    slides = Array.from(document.getElementsByClassName("slide"));
    dots = Array.from(document.getElementsByClassName("dot"));
  }

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach(s => (s.style.display = "none"));
  dots.forEach(d => d.classList.remove("active"));

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = Array.from(document.getElementsByClassName("slide"));
  dots = Array.from(document.getElementsByClassName("dot"));

  // set click events for arrows
  document.querySelector(".prev").onclick = previousSlide;
  document.querySelector(".next").onclick = nextSlide;

  // dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      slideIndex = i;
      showSlide(slideIndex);
    });
  });

  // auto-play every 5 seconds
  setInterval(nextSlide, 5000);

  // show first slide
  showSlide(slideIndex);
});
