$(document).ready(function() {
  "use strict";

  $(".header_block_right_burger").click(function() {
    $(".dropdown").addClass("active");
  });

  $(".dropdown_top_close").click(function() {
    $(".dropdown").removeClass("active");
  });

  $(".callback").click(function() {
    $(".back_modal").addClass("active");
    $(".modal_call").addClass("active");
  });

  $(".back_modal").click(function() {
    $(this).removeClass("active");
    $(".modal_call").removeClass("active");
  });

  $(".modal_call_close").click(function() {
    $(".back_modal").removeClass("active");
    $(".modal_call").removeClass("active");
  });

  $(".faq_wrap_item_head").click(function() {
    $(this).closest(".faq_wrap_item").toggleClass("active");
    $(this).closest(".faq_wrap_item").find(".faq_wrap_item_body").slideToggle();
  });

  $(".single_block_sidebar_head").click(function() {
    $(this).toggleClass("active");
    $(this).parent().find(".single_block_sidebar_body").slideToggle();
  });

  $('.who_slider').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      prevArrow: $('.who_prev'),
      nextArrow: $('.who_next'),
      responsive: [
        {
          breakpoint: 1600,
              settings: {
                  slidesToShow: 7
              }
          },
          {
          breakpoint: 1440,
              settings: {
                  slidesToShow: 6
              }
          },
          {
          breakpoint: 1200,
              settings: {
                  slidesToShow: 5
              }
          },
          {
          breakpoint: 1024,
              settings: {
                  slidesToShow: 4
              }
          },
          {
          breakpoint: 767,
              settings: {
                  slidesToShow: 3
              }
          },
          {
          breakpoint: 575,
              settings: {
                  slidesToShow: 2
              }
          }
      ]
  });

});