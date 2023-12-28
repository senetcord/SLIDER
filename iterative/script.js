const prevButton = document.querySelector(".js--prev");
const nextButton = document.querySelector(".js--next");
const image = document.querySelector(".js--img");
const dotsContainer = document.querySelector(".js--dots");

const images = [
  "./img/undergroundBuilding.jpg",
  "./img/roomInBunker.jpg",
  "./img/winterApocalypse.jpg",
  "./img/surveillanceTower.jpg",
];

let currentImageIndex = 0;

for (let i = 0; i < images.length; i++) {
  const newDot = document.createElement("li");
  newDot.id = "pic_" + i;
  newDot.addEventListener("click", handleDotClick);
  dotsContainer.appendChild(newDot);
}

function handleDotClick(e) {
  currentImageIndex = Number(e.target.id.match(/\d+/));
  updateSlide();
  highlightHandler();
  checkSlider();
}

function updateSlide() {
  image.src = images[currentImageIndex];
}

function checkSlider() {
  prevButton.style.visibility = currentImageIndex === 0 ? "hidden" : "visible";
  nextButton.style.visibility =
    currentImageIndex === images.length - 1 ? "hidden" : "visible";
}

checkSlider();

function highlightHandler() {
  for (let i = 0; i < images.length; i++) {
    dotsContainer.children[i].classList.toggle(
      "active",
      i === currentImageIndex
    );
  }
}

highlightHandler();

function handleNextBtn() {
  currentImageIndex++;
  updateSlide();
  checkSlider();
  highlightHandler();
}

function handlePrevBtn() {
  currentImageIndex--;
  updateSlide();
  checkSlider();
  highlightHandler();
}

prevButton.addEventListener("click", handlePrevBtn);
nextButton.addEventListener("click", handleNextBtn);
