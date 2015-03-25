//Apply class="marina-gallery" to the div containing your gallery

$(function(){
	var $overlay = $('<div></div>');
	var $image = $("<img class='animated zoomIn'>");
	$overlay.append($image);
	$("div.marina-gallery").append($overlay);
		
	$("div.marina-gallery > img").on("click", function(event) {
		event.preventDefault();
		$overlay.hide();
		if ($overlay.css("display") == "none") {
			var imgLocation = $(this).attr("src");
			$image.attr("src", imgLocation);
			$image.css("display", "block");
			$image.css("width", "600px");
			$image.css("margin", "10px auto");
			$overlay.css("width", "100%");
			$overlay.css("height", "100%");
			$overlay.show();
		}
	});

	$overlay.on("click", function() {
		$overlay.hide();
	});
});




