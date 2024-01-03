const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// ------ Karrusel fra Chat-GPT

let currentSlide = 0;

const showSlide = (index) => {
  const slides = document.querySelectorAll(".carousel-slide");

  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
};

const prevSlide = () => {
  showSlide(currentSlide - 1);
};

const nextSlide = () => {
  showSlide(currentSlide + 1);
};

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

// Show the initial slide
showSlide(currentSlide);
