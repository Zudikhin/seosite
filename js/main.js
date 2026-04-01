$(document).ready(function() {
  "use strict";

	//  scrolling
	
	const observer = new IntersectionObserver(function (entries, obs) {
		entries.forEach(function (entry) {
			if (!entry.isIntersecting) return;

			const $block = $(entry.target);

			if ($block.hasClass('speedometer')) {
				animateSpeedometer($block);
			}

			if ($block.hasClass('traffic')) {
				animateTraffic($block);
			}

			if ($block.hasClass('timeline_section')) {
				animateTimeline($block);
			}

			obs.unobserve(entry.target);
		});
	}, {
		threshold: 0.5
	});

	$('.speedometer, .traffic, .timeline_section').each(function() {
		observer.observe(this);
	});

	function animateSpeedometer($block) {
		$(".speedometer").addClass("fill");
	}

	function animateTraffic($block) {
		$(".traffic").addClass("fill");

		const $span = $(".traffic_line span");

		$({countNum: 0}).animate(
			{countNum: 97},
			{
				duration: 1000,
				easing: 'swing',
				step: function () {
					$span.text(Math.floor(this.countNum) + '%');
				},
				complete: function () {
					$span.text('97%');
				}
			}
		);

	}

	function animateTimeline($block) {
		$(".timeline").addClass("active");
	}

	//  scrolling


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

  $('.projects_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
	  fade: true,
      prevArrow: $('.projects_arrows_prev'),
      nextArrow: $('.projects_arrows_next')
  });

  $('.process').each(function () {
    const $process = $(this);
    $process.find('nav li').on('click', function () {
      const target = $(this).data('target');
      $process.find('nav li').removeClass('active');
      $(this).addClass('active');
      $process.find('.process_item').removeClass('active');
      $process.find('.process_item[data-target="' + target + '"]').addClass('active');
    });
  });

});
