$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true, //vòng lặp
        margin:17, //khoang cach giua cac item
        nav:false, //thanh dieu huong
        autoplay: true, //slide tu chay
        dots: false, // nut chuyen slide 
        autoplayTimeout: 4000, //setting phan tu chạy ms
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});