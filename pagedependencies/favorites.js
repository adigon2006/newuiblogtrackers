$(document).ready(function() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


//  blog individual
var countblog = 0;
  
//tracker list handler
$('.blogindividual').on("mouseenter",function(){
$(this).find(".checkblog").removeClass("hidden");
});


$('.blogindividual').on("mouseleave",function(){
  selected = $(this).hasClass("blogindividualactive");
  if(selected)
  {
  // do not hide delete icon
  }
  else if(!selected)
  {
    // hide delete icon
  $(this).find(".checkblog").addClass("hidden").removeClass("blogindividualactive");
  }
});

$('.blogindividual').on("click",function(e){
  selected = $(this).hasClass("blogindividualactive");
  // check selected blog
  if(!selected)
  {
    $(this).find(".blogtracker").removeClass("hidden");
    $(this).addClass("blogindividualactive");
    // remember to pass session id of blog
  }
  // check if a blog is not selected
  else if(selected)
  {
    $(this).find(".blogtracker").addClass("hidden");
    $(this).removeClass("blogindividualactive");
    // remember to pass session id of blog
  }

});

// end of blog individual


//tracker list handler
$('.trackerindividual').on("mouseenter",function(){
$(this).find(".checktracker").removeClass("hidden");
});


$('.trackerindividual').on("mouseleave",function(){
  selected = $(this).hasClass("trackerindividualactive");
  if(selected)
  {
  // do not hide delete icon
  }
  else if(!selected)
  {
    // hide delete icon
  $(this).find(".checktracker").addClass("hidden").removeClass("trackerindividualactive");
  }
});

$('.trackerindividual').on("click",function(e){
  selected = $(this).hasClass("trackerindividualactive");
  // check selected blog
  if(!selected)
  {
    $(this).find(".checktracker").removeClass("hidden");
    $(this).addClass("trackerindividualactive");
    // remember to pass session id of blog
  }
  // check if a blog is not selected
  else if(selected)
  {
    $(this).find(".checktracker").addClass("hidden");
    $(this).removeClass("trackerindividualactive");
    // remember to pass session id of blog
  }

});

// end of tracker list handler



//tracker list handler
$('.trackerindividual2').on("mouseenter",function(){
$(this).find(".checktracker2").removeClass("hidden");
});


$('.trackerindividual2').on("mouseleave focusout",function(){
  selected = $(this).hasClass("trackerindividual2active");
  if(selected)
  {
  // do not hide delete icon
  }
  else if(!selected)
  {
    // hide delete icon
  $(this).find(".checktracker2").addClass("hidden").removeClass("trackerindividual2active");
  }
});

// focusout effects
$('.trackerindividual2').on("focusout",function(){
  selected = $(this).hasClass("trackerindividual2active");
  if(selected)
  {
  // do not hide delete icon
  }
  else if(!selected)
  {
    // hide delete icon
// $(this).css("background-color","transparent");
// $(this).css("color","white");
  }

});
$('.trackerindividual2').on("click",function(e){
  selected = $(this).hasClass("trackerindividual2active");
  // check selected blog
  if(!selected)
  {
    $(this).find(".checktracker2").removeClass("hidden");
    $(this).addClass("trackerindividual2active");
    // remember to pass session id of blog
  }
  // check if a blog is not selected
  else if(selected)
  {
    $(this).find(".checktracker2").addClass("hidden");
    $(this).removeClass("trackerindividual2active");
    // remember to pass session id of blog
  }

});

// end of tracker list handler





// for the delete on hover for blog buttons
$('.blogselection').on("mouseenter",function(e){
$(this).find(".deleteblog").removeClass("hidden");
});

$('.blogselection').on("mouseleave",function(e){
// check the status of the button whether selecte or //
selected = $(this).hasClass("blogselectionactive");
if(selected)
{
// do not hide delete icon
}
else if(!selected)
{
  // hide delete icon
$(this).find(".deleteblog").addClass("hidden");
}


});

$('.blogselection').on("click",function(e){
  selected = $(this).hasClass("blogselectionactive");
  // check selected blog
  if(!selected)
  {
    $(this).find(".deleteblog").removeClass("hidden");
    $(this).addClass("blogselectionactive");
    // remember to pass session id of blog
  }
  // check if a blog is not selected
  else if(selected)
  {
    $(this).find(".deleteblog").addClass("hidden");
    $(this).removeClass("blogselectionactive");
    // remember to pass session id of blog
  }

});

$('.deleteblog').on("click",function()
{
$(this).parent().remove();
// perform an action that remove the blog from the list
})
// end

  // handler for each favorites
  $('.favoritestoggle').on("click",function(e){
  // check if it has been favorites
  isFavorites = $(this).hasClass('fas');
  if(isFavorites) // if it is favorites
  {
  $(this).removeClass("fas fa-heart").addClass("far fa-heart");
  $(this).attr("data-original-title","Add to Favorite");
  console.log("Remove from favorites");
  $(this).parent().parent().remove();
  $(".tooltip").hide();
  toastr.error("Blog Removed from Favorites","Action Succesful");
  // add an ajax remove blog from favorites
  
  }
  if(!isFavorites) // if it does not have favorites
  {
  $(this).removeClass("far fa-heart").addClass("fas fa-heart");
  $(this).attr("data-original-title","Remove from Favorite");
  console.log("add to favorites");
   // add an ajax to favorite the blod
 
  }

  })
  // end of handler for favorites


  //select a blog to track
  $('.trackblog').on("click",function(e){
  // check the status if the blog is tracked
  trackingblog = $(this).hasClass("text-success");
  if(!trackingblog)
  {
  // if the blog is being tracked
  $(this).addClass("text-success");
  $(this).attr("data-original-title","Remove Blog from Tracker");
  toastr.success("Blog Added to Tracker","Action Succesful");
  countblog++;
  toastr.success(countblog,"Tracking Blog");
  console.log(countblog);
  // add an ajax to removed blog from tracker
  }
  else if(trackingblog)
  {
  // if the blog is being tracked
  $(this).removeClass("text-success");
  $(this).attr("data-original-title","Add Blog from Tracker");
  toastr.error("Blog Removed from Tracker","Action Succesful");
  // add an ajax to add blog from tracker

  countblog--;
  toastr.error(countblog,"Tracking Blog");
  console.log(countblog);
  }
  });

});