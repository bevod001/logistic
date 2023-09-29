$(document).ready(function () {
  $(".promo__slider").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    sliderToScroll: 1,
    adaptiveHeight: false,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/slider/prev.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/slider/next.png"></button>',
  });
});

window.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector(".promo__menu"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("promo__menu-active");
  });

  let btn = document.querySelectorAll(".btn"),
    close = document.querySelector(".modal__close");
  modal = document.querySelector(".overlay");

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.toggle("overlay_active");
    });
  });

  close.addEventListener("click", () => {
    modal.classList.toggle("overlay_active");
  });
});
