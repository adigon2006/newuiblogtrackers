$(document).ready(function(e)
{
  $("#profiletoggle").click(function(e){
  e.preventDefault();
  $(".modal-notifications").css( { transition: "transform 0.80s",
                  transform:  "translate(0px,0px)"} );

  }) ;

  $("#closeicon").click(function(e){
  e.preventDefault();
  $(".modal-notifications").css( { transition: "transform 0.80s",
                  transform:  "translate(8000px,0px)"} );

  }) ;
  $(".offset-lg-10").click(function(e){
  e.preventDefault();
  $(".modal-notifications").css( { transition: "transform 0.80s",
                  transform:  "translate(8000px,0px)"} );

  }) ;
});
