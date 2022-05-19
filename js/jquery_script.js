$(document).ready(function () {
  $("#timeline_slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 4,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });
});
