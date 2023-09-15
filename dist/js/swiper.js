const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  lazy: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    gap: 4,
  },
});
