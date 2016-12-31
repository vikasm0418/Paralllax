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
	
	//for thumbnails
	$('.figure').hover(function(){
		$(this).addClass('thumnail');
	});

	//promoscope
	if(scroll>$('.large').offset().top-$(window).height()){
		$('.large').css({'background-position':'center '+ (scroll-$('.large').offset().top +100) +'px'})
	}
	//floating
	if(scroll>$('.blog').offset().top-$(window).height()){
		var offset = Math.min(0,scroll - $('.blog').offset().top + $(window).height()-600);
		$('.post1').css({'transform':'translate('+ offset+'px,'+ Math.abs(offset*0.2)+'px)'});
		$('.post2').css({'transform':'translate(0px,'+ Math.abs(offset*0.8)+'px)'});

		$('.post3').css({'transform':'translate('+ Math.abs(offset)+'px,'+ Math.abs(offset*.2)+'px)'});
	}

}