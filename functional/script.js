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

const createDot = (index) => {
  const newDot = document.createElement("li");
  newDot.id = "pic_" + index;
  newDot.addEventListener("click", handleDotClick);
  return newDot;
};

const handleDotClick = (e) => {
  currentImageIndex = Number(e.target.id.match(/\d+/));
  updateSlide();
  highlightHandler();
  checkSlider();
};

const updateSlide = () => {
  image.src = images[currentImageIndex];
};

const checkSlider = () => {
  prevButton.style.visibility = currentImageIndex === 0 ? "hidden" : "visible";
  nextButton.style.visibility =
    currentImageIndex === images.length - 1 ? "hidden" : "visible";
};

const highlightHandler = () => {
  for (let i = 0; i < images.length; i++) {
    dotsContainer.children[i].classList.toggle(
      "active",
      i === currentImageIndex
    );
  }
};

const handleNextBtn = () => {
  currentImageIndex++;
  updateSlide();
  checkSlider();
  highlightHandler();
};

const handlePrevBtn = () => {
  currentImageIndex--;
  updateSlide();
  checkSlider();
  highlightHandler();
};

prevButton.addEventListener("click", handlePrevBtn);
nextButton.addEventListener("click", handleNextBtn);

const init = () => {
  for (let i = 0; i < images.length; i++) {
    const newDot = createDot(i);
    dotsContainer.appendChild(newDot);
  }
  checkSlider();
  highlightHandler();
};

init();
