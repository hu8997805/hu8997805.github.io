// 左侧菜单
$(".head-img").click(function(){
	$(".left-menu").animate({left:0},500);

});
$(".left-menu .icon").click(function(){
	$(".left-menu").animate({left:-400},500);
});

//全屏滚动
$(".box-all").fullpage({
	continuousVertical:true,
	navigation:true,
	scrollingSpeed:1000,
	afterRender:function(){
		$(".head-img").addClass("head-animation");
		$(".hello").addClass("hello-animation");
	},
	afterLoad:function(anchor,index){
		if(index===1){
			$(".head-img").addClass("head-animation");
			$(".hello").addClass("hello-animation");
			$(".head-img").removeClass("head-animation2");
			$(".hello").removeClass("hello-animation2");
		}
		if(index===2){
			$(".myself-inner .left .photo").animate({opacity:1},1000);
			$(".myself-inner .right").animate({right:0},700);
			$(".myself-inner .more").animate({top:480},"slow");
		}
		if(index===3){
			$(".my-works-inner h2").addClass("text");
			$(".my-works-inner .inner1").animate({left:0});
			$(".my-works-inner .inner2").animate({left:425});
			$(".my-works-inner .inner3").animate({right:425});
			$(".my-works-inner .inner4").animate({right:0});
			$(".my-works-inner h2").removeClass("text2");
		}
	},
	onLeave:function(index){
		if(index===1){
			$(".head-img").addClass("head-animation2");
			$(".hello").addClass("hello-animation2");
			$(".head-img").removeClass("head-animation");
			$(".hello").removeClass("hello-animation");
		}
		if(index===2){
			$(".myself-inner .left .photo").animate({opacity:0},500);
			$(".myself-inner .right").animate({right:-1300},1000);
			$(".myself-inner .more").animate({top:950},"slow");
		}
		if(index===3){
			$(".my-works-inner h2").addClass("text2");
			$(".my-works-inner .inner1").animate({left:-410},2000);
			$(".my-works-inner .inner2").animate({left:-880},2000);
			$(".my-works-inner .inner3").animate({right:-880},2000);
			$(".my-works-inner .inner4").animate({right:-410},2000);
			$(".my-works-inner h2").removeClass("text");
		}
	}
});

$("#fp-nav ul li:first-child a span").html("首页");
$("#fp-nav ul li:nth-child(2) a span").html("个人简历");
$("#fp-nav ul li:nth-child(3) a span").html("我的作品");