// navegation menu

const navLis = document.querySelectorAll("nav li");

navLis.forEach((li) => {
  li.addEventListener("click", () => {
    resetClasses(navLis);
    addClass(li, "active");
  });
});

const removeClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

const addClass = (item, classToAdd) => {
  item.classList.add(classToAdd);
};

const resetClasses = (item) => {
  item.forEach((i) => {
    i.classList.remove("active");
  });
};



// navegation gallery

const slides = document.querySelectorAll(".gallery .slider img");
const mainSlide = document.querySelector(".gallery .bg");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    resetSlides(slides, "selected");

    const img = slide.src.split("images/")[1];
    mainSlide.style.background = `url(images/${img})`;
    mainSlide.style.backgroundSize = `cover`;
    mainSlide.style.backgroundRepeat = `no-repeat`;
    mainSlide.style.backgroundPosition = `0rem`;

    slide.classList.add("selected");
  });
});

const resetSlides = (item) => {
  item.forEach((i) => {
    i.classList.remove("selected");
  });
};


