// Ring slider active
$('#ring-slider').slick({
  slidesToShow: 3,
  infinity: true,
  vertical: true,
  centerMode: true,
  centerPadding: '0',
  verticalSwiping: true,
  asNavFor: '#ring-slider-2, #ring-slider-3',
  dots: false,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-up"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-down"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        vertical: false,
      }
    }
  ]
});

// Ring slider top content slide active
$('#ring-slider-2').slick({
  slidesToShow: 1,
  arrows: false,
  dots: false,
  asNavFor: '#ring-slider-3, #ring-slider'
});

// Ring slider bottom content slide active
$('#ring-slider-3').slick({
  slidesToShow: 1,
  arrows: false,
  dots: false,
  asNavFor: '#ring-slider-2, #ring-slider'
});


// custom
// nav active
    document.querySelector('.navbtn').addEventListener('click', function(e){
        document.querySelector('nav').classList.toggle('active')
        this.classList.toggle('active')
    });

    $(window).scroll(function() {    // this will work when your window scrolled.
        var height = $(window).scrollTop();  //getting the scrolling height of window
        if(height  > 45) {
            $(".main-header").addClass("sticy_header");
        } else{
            $(".main-header").removeClass('sticy_header');
        }
    });

    var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

