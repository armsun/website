$(function() {
  $(".a_animation")
  .mouseenter(function(){
      $(this).addClass("animated pulse")
  })
  .mouseleave(function(){
    $(this).removeClass("animated pulse")
  });
  $('.carusel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow:1,
   /* adaptiveHeight: true,*/
     fade: true,
     cssEase: 'linear',
     
     autoplay: true,
     autoplaySpeed: 2000
  });
    
  
});