// Initialize Materialize Components
$(document).ready(function () {
	$('.imagesDiv').show();
	$('.about').hide();
	$('.contact').hide();

	$('.laydownsNav').on('click', function() {
		$('.imagesDiv').show();
		$('.contact').hide();
		$('.about').hide();
	})

	$('.editorialNav').on('click', function() {
		$('.imagesDiv').show();
		$('.contact').hide();
		$('.about').hide();
	})

	$('.tableTopNav').on('click', function() {
		$('.imagesDiv').show();
		$('.contact').hide();
		$('.about').hide();
	})

	$('.gifsNav').on('click', function() {
		$('.imagesDiv').show();
		$('.contact').hide();
		$('.about').hide();
	})

	$('.aboutNav').on('click', function() {
		$('.imagesDiv').hide();
		$('.contact').hide();
		$('.about').show();

	})
	
	$('.contactNav').on('click', function() {
		$('.imagesDiv').hide();
		$('.about').hide();
		$('.contact').show();
	})



});