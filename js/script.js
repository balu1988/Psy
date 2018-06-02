$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dotsEach:true,
        rewind:true,
        navText: ['Назад','Вперед'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });
});
