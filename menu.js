const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

// Aktiverer animationen

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Aktiverer aniamtion - bare omvendt

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// ChatGPT - karrusel

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;

// Viser et bestemt billede i karrusellen.

// Funktionen holder styr på det aktuelle billede med variablen currentIndex

function showSlide(index) {
  const container = document.querySelector(".carousel-container");
  const slideWidth = document.querySelector(".carousel-item").offsetWidth;
  container.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

// Næste billede

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlide(currentIndex);
}

// Forrige billede

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  showSlide(currentIndex);
}
