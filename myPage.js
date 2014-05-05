$(document).ready(function() {
	$('.navButton').mousenter(function() {
		var $children = $(this).children('.subButton');
		$children.slideToggle('fast');
	})

});