
$(document).ready(function () {
	// LONGTERM PLAN - DYNAMICALLY GENERATE IMAGES FROM STORAGE
	// ---------------------------------------------------------
	// var images = [
	// 	{
	// 		src: "../images/loch_raven.jpg",
	// 		alt: "image1"
	// 	},

	// 	{
	// 		src: "../images/bmore.jpg",
	// 		alt: "image2"
	// 	}
	// ]


	// function showImages() {
	// 	for (var i = 0; i < images.length; i++) {
	// 		var newCol = $("<div class="col m3"></div>")
	// 		var newImg = $("<img>");
	// 		newImg.attr("src", images[i].src)
	// 		newImg.attr("alt", images[i].alt)

	// 		newCol.append(newImg);
	// 		$(".imagesDiv").append(newCol)
	// 	}


	// }

	// showImages();
	// -----------------------------------------------------------

	$(".imagesDiv").show();
	$(".laydownsDiv").hide();
	$(".tableTopDiv").hide();
	$(".editorialDiv").hide();
	$(".gifDiv").hide();
	$(".about").hide();
	$(".contact").hide();

	$(".laydownsNav").on("click", function () {

		$(".laydownsDiv").show();
		$(".imagesDiv").hide();
		$(".tableTopDiv").hide();
		$(".editorialDiv").hide();
		$(".gifDiv").hide();
		$(".contact").hide();
		$(".about").hide();
	})

	$(".editorialNav").on("click", function () {
		$(".imagesDiv").hide();
		$(".laydownsDiv").hide();
		$(".editorialDiv").show();
		$(".tableTopDiv").hide();
		$(".gifDiv").hide();
		$(".contact").hide();
		$(".about").hide();
	})

	$(".tableTopNav").on("click", function () {
		$(".imagesDiv").hide();
		$(".tableTopDiv").show();
		$(".editorialDiv").hide();
		$(".laydownsDiv").hide();
		$(".gifDiv").hide();
		$(".contact").hide();
		$(".about").hide();
	})

	$(".gifsNav").on("click", function () {
		$(".gifDiv").show();
		$(".imagesDiv").hide();
		$(".tableTopDiv").hide();
		$(".editorialDiv").hide();
		$(".laydownsDiv").hide();
		$(".contact").hide();
		$(".about").hide();
	})

	$(".aboutNav").on("click", function () {
		$(".imagesDiv").hide();
		$(".laydownsDiv").hide();
		$(".editorialDiv").hide();
		$(".tableTopDiv").hide();
		$(".gifDiv").hide();
		$(".contact").hide();
		$(".about").show();

	})

	$(".contactNav").on("click", function () {
		$(".imagesDiv").hide();
		$(".about").hide();
		$(".contact").show();
	})



});