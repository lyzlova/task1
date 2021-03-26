
  $(".js-accordion-header").click(function () {
    $(this).toggleClass("open");
    $(this).next(".js-accordion-body").toggleClass("vissualy-hidden");
    if ($(this).hasClass("open")) {
      $(".js-accordion-header").not(this).removeClass("open");
      $(this).next(".js-accordion-body").removeClass("vissualy-hidden");
    }
  });

