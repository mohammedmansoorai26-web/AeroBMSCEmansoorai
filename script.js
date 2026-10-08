// Photo slideshow: arrows + automatic change every 5 seconds.
const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];

const slide = document.getElementById("slide");
const box = document.getElementById("slideshow");

// Only run if this page has a slideshow (other pages don't).
if (slide && box) {
  let current = 0;

  function show(index) {
    current = (index + photos.length) % photos.length; // wraps around
    slide.src = photos[current];
  }

  box.querySelector(".prev").addEventListener("click", () => show(current - 1));
  box.querySelector(".next").addEventListener("click", () => show(current + 1));

  // Auto-change every 5 seconds, but pause while the mouse is on the photo.
  let timer = setInterval(() => show(current + 1), 5000);
  box.addEventListener("mouseenter", () => clearInterval(timer));
  box.addEventListener("mouseleave", () => {
    timer = setInterval(() => show(current + 1), 5000);
  });
}
