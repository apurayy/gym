// banner_slider====
$('.banner_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

// venubox============
new VenoBox({
    selector: '.venobox'
  });

  // testimonial_slider==
  $('.testimonial_slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

   // carosel_slider==
  $('.carosel_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    // arrows:true,
    prevArrow:'<i class="fa-solid fa-angle-left left_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right right_arrow"></i>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

// counterUp_js
  $('.counter').counterUp({
    delay: 10,
    time: 5000
});


  // sticky header===============
  $(window).scroll(function(){
  if($(this).scrollTop() < 1){
      $('#main_menu').removeClass('sticky_one');
      $('#main_menu').removeClass('sticky');


  }else if($(this).scrollTop() > 150){
      $('#main_menu').removeClass('sticky_one');
      $('#main_menu').addClass('sticky');


  }else{
      $('#main_menu').addClass('sticky_one')
  }
});


  // scroll part start=================
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
      $('.scroll_top').addClass('back_top')
  } else{
      $('.scroll_top').removeClass('back_top')
  }
});