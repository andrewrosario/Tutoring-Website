
$('.learn').click(function () {
	$('.info').fadeOut(10);
	$('.about').fadeIn();
	console.log('learn');
})
$('.explore').click(function () {
	$('.info').fadeOut(10);
	$('.rates').fadeIn();
	console.log('explore');
})
$('.connect').click(function () {
	$('.info').fadeOut(10);
	// $('.contact').removeClass('hidden');
	$('.contact').fadeIn();
	console.log('connect');
})
