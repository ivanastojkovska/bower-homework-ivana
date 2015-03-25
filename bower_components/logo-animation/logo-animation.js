$( document ).ready(function() {
	$( "div .brand img" ).on("click", function(){
		$("div .brand img").animate({outlineWidth: "10px"});
		$("div .brand img").animate({outlineWidth: "1px"});
		$("div .brand img").toggleClass("animated wobble");
	});
});
