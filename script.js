// menu navegation

const navLis = document.querySelectorAll("nav li");

navLis.forEach((li) => {
  li.addEventListener("click", () => {
    resetClasses(navLis, "active");
    addClass(li, "active");
  });
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
    console.log(card.classList[1]);
    console.log(cardsDescriptions);
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
