class Slider {
  constructor(
    sliderName,
    prevButton,
    nextButton,
    image,
    dotsContainer,
    images
  ) {
    this.sliderName = sliderName;
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.image = image;
    this.dotsContainer = dotsContainer;
    this.images = images;
    this.currentImageIndex = 0;
  }

  createDot(index) {
    const newDot = document.createElement("li");
    newDot.id = `${this.sliderName}_pic_${index}`;
    newDot.addEventListener("click", this.handleDotClick.bind(this));
    return newDot;
  }

  handleDotClick(e) {
    this.currentImageIndex = Number(e.target.id.match(/\d+/));
    this.updateSlide();
    this.highlightHandler();
    this.checkSlider();
  }

  updateSlide() {
    this.image.src = this.images[this.currentImageIndex];
  }

  checkSlider() {
    this.prevButton.style.visibility =
      this.currentImageIndex === 0 ? "hidden" : "visible";
    this.nextButton.style.visibility =
      this.currentImageIndex === this.images.length - 1 ? "hidden" : "visible";
  }

  highlightHandler() {
    for (let i = 0; i < this.images.length; i++) {
      this.dotsContainer.children[i].classList.toggle(
        "active",
        i === this.currentImageIndex
      );
    }
  }

  handleNextBtn() {
    this.currentImageIndex++;
    this.updateSlide();
    this.checkSlider();
    this.highlightHandler();
  }

  handlePrevBtn() {
    this.currentImageIndex--;
    this.updateSlide();
    this.checkSlider();
    this.highlightHandler();
  }

  init() {
    for (let i = 0; i < this.images.length; i++) {
      const newDot = this.createDot(i);
      this.dotsContainer.appendChild(newDot);
    }
    this.checkSlider();
    this.highlightHandler();
    this.prevButton.addEventListener("click", this.handlePrevBtn.bind(this));
    this.nextButton.addEventListener("click", this.handleNextBtn.bind(this));
  }
}

// First Slider
const slider1 = new Slider(
  "firstSlider",
  document.querySelector(".js--prev"),
  document.querySelector(".js--next"),
  document.querySelector(".js--img"),
  document.querySelector(".js--dots"),
  [
    "./img/undergroundBuilding.jpg",
    "./img/roomInBunker.jpg",
    "./img/winterApocalypse.jpg",
    "./img/surveillanceTower.jpg",
  ]
);
slider1.init();

// Second Slider
const slider2 = new Slider(
  "secondSlider",
  document.querySelector(".js--prev2"),
  document.querySelector(".js--next2"),
  document.querySelector(".js--img2"),
  document.querySelector(".js--dots2"),
  [
    "./img/undergroundBuilding.jpg",
    "./img/roomInBunker.jpg",
    "./img/winterApocalypse.jpg",
    "./img/surveillanceTower.jpg",
    "./img/bonus.jpg",
  ]
);
slider2.init();
