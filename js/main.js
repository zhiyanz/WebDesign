// selectors, methods, and functions

$(document).ready(function(){
	//console.log("jquery has been loaded");
	

	var currentSlide = 0;
	var totalSlides = $("ul.slides li").size();
	$("ul.slides li").each(function(){
		$("ul.showcase-control").append("<li></li>");
	}); // each method end
	
	//control.log(totalSlides);

	function checkArrows(checkNum){
		//console.log(checkNum);
		if (checkNum <= 0) {
			currentSlide=0;
			$("#prevBtn").hide();
		} else if (checkNum > 0 && checkNum < totalSlides-1) {
			$("#prevBtn").show();
			$("#nextBtn").show();
		} else if (checkNum >= totalSlides-1) {
			$("#nextBtn").hide();
			currentSlide=totalSlides-1;

		} // end conditional statement 
	}// checkArrows

	function changeSlide(target){
		$("ul.slides li").hide();
		$("ul.slides li:eq(" + target + ")").show();
		$("ul.showcase-control li").removeClass("active");
		$("ul.showcase-control li:eq(" + target + ")").addClass("active");
		checkArrows(target);
		var slideHeight = $("ul.slides li:eq(" + target + ")").height();
	    var arrowHeight = $(".arrow i").height();
		var arrowTop = (slideHeight - arrowHeight)/2;
		$(".arrows i").animate({
		"top": arrowTop + "px"
	    });
		$("ul.slides").css({
			"height":slideHeight + "px"
		});

	} // changeSlide end

	changeSlide(currentSlide);

	$("#nextBtn").click(function(){
		console.log("nextBtn clicked!");
		currentSlide++;
		changeSlide(currentSlide);
	});

	$("#prevBtn").click(function(){
		console.log("prevBtn clicked!")
		currentSlide--;
		changeSlide(currentSlide);
	});

	$("ul.showcase-control li").click(function(){
		var blockIndex = $(this).index();
		//console.log(blockIndex);
		changeSlide(blockIndex);
		currentSlide=blockIndex;
	});

	$("ul.topnav li a").click(function(event) {
		//console.log(event);
		event.preventDefault();
		var slideTarget = $(this).attr("href");
		//console.log(slideTarget);
		$("html,body").animate({
			"scrollTop": $(slideTarget).offset().top + "px"
		});

	})//click method end

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-item'
});


$("#navBtn").click(function() {
	$("nav").slideToggle();
}); // click method end

});//ready method end






