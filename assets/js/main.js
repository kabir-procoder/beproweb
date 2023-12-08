//
$(".nav-toggler").click(function(){
    $(".nav-items").toggleClass("show");
});
// Hero Slider
$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
})
// Porfolio Slider
$('.portfolio-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        }
    }
})
// Reviews Slider
$('.reviews-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:2
        }
    }
})