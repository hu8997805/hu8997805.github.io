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

//菜单箭头
$(".inner-list li").hover(function(){
	$(this).addClass("jiantou");
},function(){
	$(this).removeClass("jiantou");
})

// 产品遮罩
$(".content li").hover(function(){
	$(this).find(".name-box,.name").css("display","none");
	$(this).find(".mask-box,.mask-name").css("display","block");
},function(){
	$(this).find(".name-box,.name").css("display","block");
	$(this).find(".mask-box,.mask-name").css("display","none");
})



// 页码
$(".page .pre").hover(function(){
	$(this).find("img").attr("src","images/left2.png");
	$(this).css({"border":"1px solid #ff0000"});
},function(){
	$(this).find("img").attr("src","images/left.png");
	$(this).css({"border":"1px solid #fff"});
})
$(".page .next").hover(function(){
	$(this).find("img").attr("src","images/right2.png");
	$(this).css({"border":"1px solid #ff0000"});
},function(){
	$(this).find("img").attr("src","images/right.png");
	$(this).css({"border":"1px solid #fff"});
})