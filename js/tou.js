$(function(){
	$('.ar_top>span').click(function(event) {
		$(this).addClass('add_xian').siblings('').removeClass('add_xian');
	});


	$('.all_ul li').click(function(event) {
		$(this).addClass('add_red').siblings('').removeClass('add_red');
		/*切换页面*/
		var n=$(this).index();
		$('.all_right>ol').eq(n).slideDown(1000).siblings('').slideUp(1000);
	});

	$('.bo_ul li').click(function(event) {
		$(this).addClass('add_bo').siblings().removeClass('add_bo');
		var n=$(this).index();
		$('.all_right>ol').eq(n).slideDown(1000).siblings('').slideUp(1000);
	});
	$('.first').click(function(event) {
		$('.all_right>ol').eq(0).slideDown(1000).siblings('').slideUp(1000);
	});
	$('.last').click(function(event) {
		$('.all_right>ol').eq(4).slideDown(1000).siblings('').slideUp(1000);
	});
	var x=0;
	$('.zuo').click(function(event) {
		x--;
		if(x<0){
			x=4;
		}
		$('.all_right>ol').eq(x).slideDown(1000).siblings('').slideUp(1000);
		$('.bo_ul li').eq(x).addClass('add_bo').siblings().removeClass('add_bo');
	});
	$('.you').click(function(event) {
		x++;
		if(x>4){
			x=0;
		}
		$('.all_right>ol').eq(x).slideDown(1000).siblings('').slideUp(1000);
		$('.bo_ul li').eq(x).addClass('add_bo').siblings().removeClass('add_bo');
	});
	
	var timer;
	clearTimeout(timer);
	timer=setTimeout(function(){
		$('.ar_top').removeClass('hua0');
		$('.all_left').removeClass('hua0');
		$('.all_right').removeClass('hua');
	},100)

})