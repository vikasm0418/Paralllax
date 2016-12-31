window.onscroll = function(){
	var scroll = $(this).scrollTop();
	$('.logo').css({
		'transform' : 'translate(0px,'+ scroll /2 +'%)'
	});
	$('.fore-bird').css({
		'transform' : 'translate(0px,-'+ scroll /20 +'%)'
	});
		$('.back-bird').css({
		'transform' : 'translate(0px,'+ scroll /4 +'%)'
	});
	console.log(scroll)
}