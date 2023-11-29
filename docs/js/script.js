const burgerBtn = document.querySelector('.burger');
const navListMobile = document.querySelectorAll('.nav-list__mobile');
// const closeBtn = document.querySelector('.close-btn');
// const overlay = document.querySelector('.overlay');
// const button = document.querySelectorAll('.button');

burgerBtn.addEventListener('click', () => {
  navListMobile.forEach((navListMobileElement) => {
    navListMobileElement.classList.toggle('nav-list__mobile_visible');
  });
});

// button.forEach((buttonElement) => {
//   buttonElement.addEventListener('click', () => {
//     overlay.classList.add('overlay_visible');
//   });
// });

// closeBtn.addEventListener('click', () => {
//   overlay.classList.remove('overlay_visible');
// });

// slick
$(document).ready(function () {
  $('.cards__item-slider').slick({
    arrows: false,
    dots: true,
  });
});

// Mask
$(document).ready(function () {
  $('#tel').mask('+7 (999) 999-99-99');
});

Fancybox.bind('[data-fancybox]', {});
