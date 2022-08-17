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
