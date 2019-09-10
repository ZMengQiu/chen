$(function(){
	// 导航
	$('.nav_ul>li').hover(function() {
		$(this).children('div').slideDown();
	}, function() {
		$(this).children('div').stop(true,false).slideUp();
	});
	// 模态框 大屏
	$('.oopen').click(function(event) {
		if($('.zmq').hasClass('none')){
			$('.zmq').removeClass('none');
		}else{
			$('.zmq').addClass('none');
		}


		if($('.open').hasClass('bian')){
			$('.open').removeClass('bian');
		}else{
			$('.open').addClass('bian');
		}
	});
	/*回顶部*/
	$('.intop').click(function(event) {
		$('body,html').animate({'scrollTop':0}, 500);
	});
})