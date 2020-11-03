$('.topsection .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

$('.hqr_wrapper .owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            center:false
        },
        575:{
            items:2
        },
        992:{
            items:2
        }
    }
});