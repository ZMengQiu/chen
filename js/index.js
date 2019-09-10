$(function(){
	/*小屏*/
	$('.smo>ul>li').hover(function() {
		var n=$(this).index();
		$('.smo>ul>li').eq(n).children('.ssbox').slideDown(500);
	}, function() {
		$(this).children('.ssbox').slideUp(500);
	});

	// 新闻动态
	$('.div_dot>div').click(function(event) {
		var n=$(this).index();
		$(this).addClass('add').siblings('').removeClass('add');
		$('.xin_ul').animate({'left': -100*n+"%"},500);
	});

	// 新品推荐
	var m=0;
	$('.but-left').click(function(){
		m--;
        if(m<0){
	        m=5;
	        $('.he_long').css('left', -100*m+"%"); 
	        m=4;
        }
		$('.but-left img').attr('src', 'images/new_left_on.png');
		$('.but-right img').attr('src', 'images/new_right.png');

		$('.he_long').animate({'left':-100*m+"%"},500);
	})
	$('.but-right').click(function(){
		m++;
		if(m>5){
			m=0;
			$('.he_long').css('left', 0+"px");
			m=1;
		}
		$('.but-right img').attr('src', 'images/new_right_on.png');
		$('.but-left img').attr('src', 'images/new_left.png');
		
		$('.he_long').animate({'left':-100*m+"%"},500);
	})

	// 最新活动
	$('.zui_dot>div').eq(0).click(function(event) {
		$(this).addClass('add').siblings('').removeClass('add');
		$('.zui_long').animate({'left': 0+"%"},500);
	})
	$('.zui_dot>div').eq(1).click(function(event) {
		$(this).addClass('add').siblings('').removeClass('add');
		$('.zui_long').animate({'left': -100+"%"},500);
	})
	// 品牌视频
	var x=0;
	var timer;
	function aa(){
		clearInterval(timer);
		timer=setInterval(function(){
			x++;
			if(x>4){x=0;}
			$('.hia>div').eq(x).addClass('addplay_main').siblings().removeClass('addplay_main');
			$('.hia>div').eq(x+1).addClass('addplay_left').siblings().removeClass('addplay_left');
			$('.hia>div').eq(x-1).addClass('addplay_right').siblings().removeClass('addplay_right');
		},3000)
	}
	aa();
	$('.wow').hover(function() {
		clearInterval(timer);
	}, function() {
		aa();
	});
	$('.nextButton').click(function(event) {
		x++;
		if(x>4){x=0;}
		$('.hia>div').eq(x).addClass('addplay_main').siblings().removeClass('addplay_main');
		$('.hia>div').eq(x+1).addClass('addplay_left').siblings().removeClass('addplay_left');
		$('.hia>div').eq(x-1).addClass('addplay_right').siblings().removeClass('addplay_right');
	});
	$('.prevButton').click(function(event) {
		x--;
		if(x<0){x=4;}
		$('.hia>div').eq(x).addClass('addplay_main').siblings().removeClass('addplay_main');
		$('.hia>div').eq(x+1).addClass('addplay_left').siblings().removeClass('addplay_left');
		$('.hia>div').eq(x-1).addClass('addplay_right').siblings().removeClass('addplay_right');
	});
	$('.play>a').click(function(event) {
		$(".p_video").remove();
		var video=$(this).attr("rel");
		$(this).parent().prepend('<div class="video_files"><span class="close">X</span><video controls="" id="home_video" src="'+video+'" ></video></div>');
		var audio = document.getElementById('home_video');
	    audio.play();
	});
	//关闭视频播放器
	$('.close').click(function(event) {
		$(this).parent('.video_files').remove();
	});
	 $(".nextButton").click(function(){
        $(".video_files").hide();
        $('video').trigger('pause');

    });
    $(".prevButton").click(function(){
        $(".video_files").hide();
        $('video').trigger('pause');

    });

	


	var timer;
	clearTimeout(timer);
	timer=setTimeout(function(){
		$('.title').removeClass('do');
	},100)

})