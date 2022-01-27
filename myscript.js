$(document).ready(function() {
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#p1").click(function() {
		$(".disappear").hide(); //Makes all elements with the disappear class disappear
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("img").click(function() {
		var img = $("img");
<<<<<<< HEAD
		img.animate({left: '+=500'});
		img.animate({height: '600px'}, "slow");
		img.animate({height: '200px'}, "slow");
		img.animate({width: '200px'}, "fast", function(){ $(this).removeAttr('style');}); //Callback to reset image
	});
	$("#flip").click(function(){
		$("#panel").slideDown("slow").toggle();
	});
});
=======
		img.animate({height: '600px', opacity: '0.5'}, "slow");
		img.animate({height: '200px', opacity: '0.5'}, "slow");
		img.animate({width: '200px', opacity: '1'}, "fast", function(){ $(this).removeAttr('style');}); //Callback to reset image
	});
});
>>>>>>> 2d78a49030a51a84d20c254ee1ed0816bdec492f
