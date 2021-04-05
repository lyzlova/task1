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

let cardLength = $(".goods").length;

if (cardLength < 5) {
  $(".catalog .slick-arrow.slick-prev ").css( "visibility", "hidden" )
}

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
  asNavFor: ".photo-big",
});

$(".photo-big").slick({
  arrows: false,
  fade: true,
  asNavFor: ".photo-prev",
});
