// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".review-slider", {
    classes: {
      arrow: "splide__arrow review-slider__arrow",
    },
    pagination: false,
    type: "loop",
    perPage: 1,
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".review-slider_light", {
    classes: {
      arrow: "splide__arrow review-slider__arrow",
    },
    pagination: false,
    type: "loop",
    perPage: 1,
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".header");

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
      header.classList.add("header_has-bg");
    } else {
      header.classList.remove("header_has-bg");
    }
  });
});
