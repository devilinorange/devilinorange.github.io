$(document).ready(function(){
	$('.next').click(function(){
		var currentBlock = $('.slider_block.curry');
		var currentBlockIndex = currentBlock.index();
		var nextBlockIndex = currentBlock.index() + 1;
		var nextBlock = $('.slider_block').eq(nextBlockIndex);
		currentBlock.stop(true, true).fadeOut(1000);
		currentBlock.removeClass('curry');
		if(nextBlockIndex == ($('.slider_block:last').index() + 1)){
			$('.slider_block').eq(0).css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 1000);
			$('.slider_block').eq(0).addClass('curry');
		} else {
			nextBlock.css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 1000);
			nextBlock.addClass('curry');
		}
	});
	$('.prev').click(function(){
		var currentBlock = $('.slider_block.curry');
		var currentBlockIndex = currentBlock.index();
		var nextBlockIndex = currentBlock.index() - 1;
		var nextBlock = $('.slider_block').eq(nextBlockIndex);
		currentBlock.fadeOut(1000);
		currentBlock.removeClass('curry');
		if(nextBlockIndex == ($('.slider_block:first').index() - 1)){
			$('.slider_block').eq(-1).css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 1000);
			$('.slider_block').eq(-1).addClass('curry');
		} else {
			nextBlock.css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 1000);
			nextBlock.addClass('curry');
		}
	});
	var slider_move = setInterval(function(){
		$('.next').click();
	}, 8000);
})