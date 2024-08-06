// cover imageのSwiperの設定
const coverSwiper = new Swiper("#cover .swiper", {
    loop: true,
    effect: "slide",
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    navigation: {
      nextEl: "#cover .swiper-button-next",
      prevEl: "#cover .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination", //必須
    },
    allowTouchMove: false
  });