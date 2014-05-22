$(document).ready(function() {
	var tmp = "hello";
	console.log(tmp);
	$('.navButton').mousenter(function() {
		var $children = $(this).children('.subButton');
		$children.slideToggle('fast');
	})

});