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
		img.animate({height: '600px', opacity: '0.5'}, "slow");
		img.animate({height: '200px', opacity: '0.5'}, "slow");
		img.animate({width: '200px', opacity: '1'}, "fast", function(){ $(this).removeAttr('style');}); //Callback to reset image
	});
});
