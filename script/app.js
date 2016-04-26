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
    /*maps*/
    var myCenter=new google.maps.LatLng(40.150830, 44.031469);
    
    function initialize()
    {
    var mapProp = {
      center:myCenter,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };

    var map=new google.maps.Map(document.getElementById("Map"),mapProp);

    var marker=new google.maps.Marker({
      position:myCenter,
      });

    marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  
});