$(document).ready(function(){
	// close tracker creation
	$('.closetracker, .canceltracker').click(function(){
		
	$('.token-input').attr("placeholder","Add blog");	
	// delete the element	
	$(this).parent().parent().parent().remove();
	// hide the tooltip
	$(".tooltip").hide();
	// show the notification
	 $.getScript("assets/js/toastr.js", function(data, textStatus, jqxhr) {
		 loadCSS("assets/css/toastr.css");
		 toastr.error("Tracker Creation Canceled","Action Succesful");
	  });
	 
	});	
	
//	show the tooltip
	 $(function () {
		    $('[data-toggle="tooltip"]').tooltip()
		  });
	 
	 // create tracker
	 $('.createtracker').on("click",function(){
	 // grab the tracker name
	 trackername = $(this).parent().parent().find(".newtrackername").val();
	 trackerdescription = $(this).parent().parent().find(".newtrackerdescription").val();
     var blogs = $(this).parent().parent().find(".token span");
     var allblogs = [] ;
     // push into an array
    	 blogs.each(function(i,e)
       {
    		 allblogs[i] = $(this).text();
    	    	//console.log(e); 
      });
	
   // making sure the tracker name, description and list of blogger are set
     if(trackername === "")
   {
    // show error notifications	
    $.getScript("assets/js/toastr.js", function(data, textStatus, jqxhr) {
		 loadCSS("assets/css/toastr.css");
		 toastr.error("Enter Tracker Name","Error");
	  });
   }
//     making sure tracker description is set
   else if(trackerdescription === "")
   {
	   // show error notifications	
	    $.getScript("assets/js/toastr.js", function(data, textStatus, jqxhr) {
			 loadCSS("assets/css/toastr.css");
			 toastr.error("Enter Tracker Description","Error");
		  });
    }
   else if(allblogs.length == 0)
	   {
	   $.getScript("assets/js/toastr.js", function(data, textStatus, jqxhr) {
			 loadCSS("assets/css/toastr.css");
			 toastr.error("Add blogs to track","Error");
		  });
	   }
   else
	   {
	   // hide the tooltip
	   $(".tooltip").hide();
	    // variable needed are trackername, trackerdescription and (allblogs) which contains arrays of blogs
	   
	   trackernamehtmlupdate = '<div class=""><a href="analytics.html"><h1 class="text-primary text-center pt20 pl5 pr5">'+trackername+'</h1></a></div>';
	   var today = new Date();
	   var dd = today.getDate();
	   var mm = today.getMonth()+1; //January is 0!
	   var yyyy = today.getFullYear();

	   if(dd<10) {
	       dd = '0'+dd
	   } 

	   if(mm<10) {
	       mm = '0'+mm
	   } 
	   mydate = mm + '-' + dd + '-' + yyyy;
	   
	   // current date
	   currentdate = mydate;
	  
	   // current time
	   currenttime = today.getHours() + ":" + today.getMinutes(); 
	   // joined blog
	   allblogcombined = allblogs.join(", ");
	   timesectionhtmlupdate = '<p class="card-text text-center postdate text-primary">'+currentdate+" , "+currenttime+'</p>';	 
	   bloglisthtmlupdate = '<div class="text-center"><button class="btn btn-default stylebutton5 text-primary p30 pt5 pb5" style="width:100%;">'+allblogcombined+'</button></div>';
	   trackerdescriptionhtmlupdate = ' <p class="mt20 text-primary text-center">'+trackerdescription+'</p>';
	   blogcounthtmlupdate = '<div class="text-center mt20"><button class="btn btn-default stylebutton6 text-primary p30 pt5 pb5 text-left" style="width:100%;"><h1 class="text-success mb0">235</h1><h5 class="text-primary">Blogs</h5></button></div>';
	   postcounthtmlupdate = '<div class="text-center mt10"><button class="btn btn-default stylebutton6 text-primary p30 pt5 pb5 text-left" style="width:100%;"><h1 class="text-success mb0">4,000,232</h1><h5 class="text-primary">Posts</h5></button></div>';
	   commentcounthtmlupdate = '<div class="text-center mt10"><button class="btn btn-default stylebutton6 text-primary p30 pt5 pb5 text-left" style="width:100%;"><h1 class="text-success mb0">120</h1><h5 class="text-primary">Comments</h5></button></div>';
	   buttonhtmlupdate = '<div class="pt30 pb20 text-center"><i class="fas fa-chart-line text-primary icontrackersize cursor-pointer proceedtoanalytics" data-toggle="tooltip" data-placement="top" title="Proceed to Analytics"></i><i class="fas fa-sync text-primary icontrackersize cursor-pointer refreshtracker" data-toggle="tooltip" data-placement="top" data-action="reload" title="Refresh Tracker"></i><i class="fas fa-pencil-alt text-primary icontrackersize cursor-pointer edittracker" data-toggle="tooltip" data-placement="top" title="Edit Tracker"></i></div>';
	   $(this).parent().parent().parent().prepend(trackernamehtmlupdate);
	   $(this).parent().parent().html(timesectionhtmlupdate + bloglisthtmlupdate + trackerdescriptionhtmlupdate + blogcounthtmlupdate + postcounthtmlupdate + commentcounthtmlupdate + buttonhtmlupdate);
	  // get script to refresh tracker
	   $.getScript("pagedependencies/refreshtracker.js", function(data, textStatus, jqxhr) {
		  
		  });
	   
	   // create an ajax to create a tracker
	   }
	 
	 
	 
		 
	 });
	
	 
	 loadCSS = function(href) {

		  var cssLink = $("<link>");
		  $("head").append(cssLink); //IE hack: append before setting href

		  cssLink.attr({
		    rel:  "stylesheet",
		    type: "text/css",
		    href: href
		  });

		};
});