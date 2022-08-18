// menu navegation
const logo = document.querySelector(".desktop-menu .logo img");
const navLis = document.querySelectorAll(".desktop-menu nav li");

navLis.forEach((li) => {
  li.addEventListener("click", () => {
    resetClasses(navLis, "active");
    addClass(li, "active");
  });
});

window.addEventListener("scroll", () => {
  if (scrollY > 300) {
    logo.style.opacity = "1";
  } else {
    logo.style.opacity = "0";
  }
});

// gallery navegation

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

// cast navegation

const cards = document.querySelectorAll(".content-characters .card");
const characterImage = document.querySelector(".characters-image img");
const cardsDescriptions = document.querySelectorAll(".content-desc .desc");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    
    switch (card.classList[1]) {
      case "kratos":
        changeCard(
          characterImage,
          "images/characters/kratos.png",
          cardsDescriptions[0],
          card
        );
        break;
      case "atreus":
        changeCard(
          characterImage,
          "images/characters/atreus.png",
          cardsDescriptions[1],
          card
        );
        break;

      case "angrboda":
        changeCard(
          characterImage,
          "images/characters/angrboda.png",
          cardsDescriptions[2],
          card
        );
        break;

      case "freya":
        changeCard(
          characterImage,
          "images/characters/freya.png",
          cardsDescriptions[3],
          card
        );
        break;

      default:
        break;
    }
  });
});

const changeCard = (img, source, desc, card) => {
  img.src = source;
  resetClasses(cardsDescriptions, "visible");
  resetClasses(cards, "active");
  addClass(card, "active");
  addClass(desc, "visible");
};



// mobile cast slider

const $simpleCarousel = document.querySelector(
  ".cast-mobile .cast-slider .slides"
);

new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  scrollLock: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// geral functions

const removeClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

const addClass = (item, classToAdd) => {
  item.classList.add(classToAdd);
};

const resetClasses = (item, act) => {
  item.forEach((i) => {
    i.classList.remove(act);
  });
};
