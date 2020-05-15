

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $("#my_toggle_nav").slideToggle();
    });
  });

$(document).ready(function(){
    $('.slider_nav').slick({
        autoplay: false,
        dots: false,
        arrows: true,
        prevArrow: '<button class="fas fa-chevron-left slick_left"></button>',
        nextArrow: '<button class="fas fa-chevron-right slick_right"></button>',
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.slider_for',
        responsive: [
            {
            breakpoint: 575,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
        ]
    });
    $('.slider_for').slick({
        autoplay: false,
        dots: false,
        centerMode: true,
        centerPadding: '15%',
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        asNavFor: '.slider_nav',
        responsive: [
            {
            breakpoint: 575,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
        ]
    });
});

var $slider = $('.slider_nav');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });
    }

if ($('.selectpickers').length > 0) {
$('.selectpickers').niceSelect();
}