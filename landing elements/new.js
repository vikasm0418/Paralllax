window.onscroll = function(){
	var scroll = $(this).scrollTop();
	
	//parallax for header
	$('.logo').css({
		'transform' : 'translate(0px,'+ scroll /2 +'%)'
	});
	$('.fore-bird').css({
		'transform' : 'translate(0px,-'+ scroll /20 +'%)'
	});
	$('.back-bird').css({
		'transform' : 'translate(0px,'+ scroll /1.6 +'%)'
	});

	//parallax for landing elements
	if(scroll> $('.clothes').offset().top-$(window).height()/1.2){
		$('.figure').each(function(i){
			setTimeout(function(){
			$('.figure').eq(i).addClass('showing');
		},150*(i+1));
		})
	}

}