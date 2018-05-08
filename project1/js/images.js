$('document').ready(function(){
	$('.main_img').hover(function(){
			$(this).animate({height: '+=20px'}, 300);
		}, 
		function(){
			$(this).animate({height: '-=20px'}, 300);
		})
})