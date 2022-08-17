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
    mainSlide.style.background = `url(../images/${img})`;
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

// navegation video

const processor = {
  timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    setTimeout(() => {
      this.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");

    this.video.addEventListener(
      "play",
      () => {
        this.width = this.video.width;
        this.height = this.video.height;
        this.timerCallback();
      },
      false
    );
  },

  computeFrame() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    const l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      const grey =
        (frame.data[i * 4 + 0] +
          frame.data[i * 4 + 1] +
          frame.data[i * 4 + 2]) /
        3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  },
};

processor.doLoad();
