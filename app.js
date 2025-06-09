const images = [
  "img/family.jpeg",
  "img/milo.jpg",
  "img/mountian.jpg",
  "img/stadium.jpeg",
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
});
