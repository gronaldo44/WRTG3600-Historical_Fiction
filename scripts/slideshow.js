let slideIndex = 0;
let slides = [];
let dots = [];
let autoplayTimer = null;
const AUTO_DELAY = 10000; // 10 seconds

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
  resetAutoplay();
}

function previousSlide() {
  slideIndex--;
  showSlide(slideIndex);
  resetAutoplay();
}

function goToSlide(i) {
  slideIndex = i;
  showSlide(slideIndex);
  resetAutoplay();
}

function resetAutoplay() {
  clearTimeout(autoplayTimer);
  autoplayTimer = setTimeout(() => {
    nextSlide();
  }, AUTO_DELAY);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = Array.from(document.getElementsByClassName("slide"));
  dots = Array.from(document.getElementsByClassName("dot"));

  // Arrow click handlers
  document.querySelector(".prev").onclick = previousSlide;
  document.querySelector(".next").onclick = nextSlide;

  // Dot click handlers
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });

  // Start autoplay
  resetAutoplay();

  // Show initial slide
  showSlide(slideIndex);
});
