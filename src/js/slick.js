$(document).ready(function () {
  $(".catalog").slick({
    arrows: true,
    draggable: false,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 2561,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    mobileFirtst: true,
  });

  $(".photo-prev").slick({
    arrows: true,
    touchMove: true,
    variableWidth: false,
    slidesPerRow: 1,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    vertical: true,
    mobileFirtst: true,
    useTransform: false,
    asNavFor: ".photo-big"
  });

  $(".photo-big").slick({
    arrows: false,
    fade: true,
    asNavFor: ".photo-prev"
  });
});

let slideTimer;
$('.photo-prev').on('mouseenter', '.slick-slide', function (e) {
  var $currTarget = $(e.currentTarget);
  $('.photo-prev .slick-slide').removeClass('slick-current');
  $currTarget.addClass('slick-current');

  slideTimer = setTimeout(function () {
      var index = $('.photo-prev').find('.slick-current').data('slick-index');
      var slickObj = $('.photo-big').slick('getSlick');
      slickObj.slickGoTo(index);
  }, 120);
}).on('mouseleave', '.slick-slide', function (e) {
  clearTimeout(slideTimer);
}); 