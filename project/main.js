$(document).ready(function (){
    $("customer-logos").slick({
        autoplayspeed: 1500,
        autoplay:true,
        slidesToScroll:1,
        dots:flase,
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 520,
            settings: { 
              slidesToShow: 3
            }
          }
        ]
      });
});