// 导航
$(".nav .nav-menu li").hover(function(){
	$(this).find(".nav-text").css("color","#cc0808");
	$(this).find(".nav-list").show();
},function(){
	$(this).find(".nav-text").css("color","");
	$(this).find(".nav-list").hide();
});
$(".nav-list li").hover(function(){
	$(this).css("background","#cc0808");
},function(){
	$(this).css("background","");
});

// 轮播图
$(".spot li").click(function(){
	var index = $(this).index();
	$(".spot li").filter(".active").removeClass("active").end().eq(index).addClass("active");
	$(".inner .img").fadeOut().eq(index).fadeIn();
});
var num = 0;
function move(){
	num++;
	if(num===($(".spot li").length)){
		num=0;
	}
	$(".spot li").filter(".active").removeClass("active").end().eq(num).addClass("active");
	$(".inner .img").fadeOut().eq(num).fadeIn();
}
var st = setInterval(move,3000);
$(".inner").hover(function(){
	clearInterval(st);
},function(){
	st = setInterval(move,3000);
})

// 返回顶部
$(".to-top").click(function(){
	$("html,body").animate({scrollTop:0});
})
