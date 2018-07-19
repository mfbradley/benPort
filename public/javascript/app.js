// Initialize Materialize Components
$(document).ready(function () {
	$('.imagesDiv').show();
	$('.about').hide();
	$('.contact').hide();

	$('.aboutNav').on('click', function() {
		$('.imagesDiv').hide();
		$('.about').show();
	})
	
	$('.contactNav').on('click', function() {
		$('.imagesDiv').hide();
		$('.contact').show();
	})



});