$(function() {
    var owl=$(".carousel-products");
    owl.owlCarousel({
        dots: true,
        responsive:{
            0:{
                items: 2
            },
            991:{
                items: 4
            }
        }
    });
});


$(function() {
    var owl=$(".carousel-brands");
    owl.owlCarousel({
        dots: true,
        responsive:{
            0:{
                items: 2
            },
            720:{
                items: 3
            },
            991:{
                items: 4
            }
        }
    });
});