
  $("[data-accordion]").click(function () {
    $(this).toggleClass("open");
    $(this).find("[data-accordion-content]").toggleClass("vissualy-hidden");
    if ($(this).hasClass("open")) {
      $(this).find("[data-accordion-content]").removeClass("vissualy-hidden");
    }
  });

