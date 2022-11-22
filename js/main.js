(function ($) {
    "use strict";

     // preloader
     $(window).on('load',function() {
        $("#loading").fadeOut(500);
    });


    // mobile menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // brand-active
    $('.brand-active').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:1500,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        }
    });


    // testimonial-active
    $('.testimonial-active').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // counterUp 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Wow js 
    new WOW().init();

    



})(jQuery);