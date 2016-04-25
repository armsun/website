$(function() {
  $(".a_animation")
  .mouseenter(function(){
      $(this).addClass("animated pulse")
  })
  .mouseleave(function(){
    $(this).removeClass("animated pulse")
  });

    
  
});