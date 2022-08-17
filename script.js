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

window.addEventListener("scroll", () => {
  const desktopLis = document.querySelectorAll(".desktop-menu nav li");

  if (scrollY < 2630) {
    resetClasses(navLis);
    desktopLis[4].classList.add("active");
  }
  if (scrollY < 2030) {
    resetClasses(navLis);
    desktopLis[3].classList.add("active");
  }
  if (scrollY < 1330) {
    resetClasses(navLis);
    desktopLis[2].classList.add("active");
  }
  if (scrollY < 730) {
    resetClasses(navLis);
    desktopLis[1].classList.add("active");
  }
  if (scrollY < 30) {
    resetClasses(navLis);
    desktopLis[0].classList.add("active");
  }
});

// navegation gallery

const slides = document.querySelectorAll(".gallery .slider img");
const mainSlide = document.querySelector(".gallery .bg");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    resetSlides(slides, "selected");

    const img = slide.src.split("images/")[1];
    mainSlide.style.background = `url(..god-of-war-ragnarok-landing-page/images/${img})`;
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


