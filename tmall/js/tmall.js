var big = document.querySelectorAll(".one .one-img");
var big2 = document.querySelectorAll(".one2 .one-img");
var small = document.querySelectorAll(".two .two-content");
var small2 = document.querySelectorAll(".two2 .two-content");
var mask = document.querySelectorAll(".two .two-content .mask");
var mask2 = document.querySelectorAll(".two2 .two-content .mask");
var right = document.querySelector(".box .right");
var left = document.querySelector(".box .left");
var twoAll = document.querySelector(".two-all");
var one2 = document.querySelector(".one2");
var maskAll = document.querySelectorAll(".two-all .mask");
var bigAll = document.querySelectorAll(".big-box .one-img")
var box =  document.querySelector(".box");
small.forEach(function(value,index){
	value.onmouseover=function(){
		for(var i=0;i<small.length;i++){
			big[i].style.display="none";
			mask[i].style.display="none";
		}
		big[index].style.display="block";
		mask[index].style.display="block";
	}
})
small2.forEach(function(value,index){
	value.onmouseover=function(){
		for(var i=0;i<small.length;i++){
			big2[i].style.display="none";
			mask2[i].style.display="none";
		}
		big2[index].style.display="block";
		mask2[index].style.display="block";
	}
})
right.onclick=function(){
	twoAll.style.left="-488px";
	right.style.display="none";
	left.style.display="block";
	one2.style.zIndex="101";
}
left.onclick=function(){
	twoAll.style.left="0";
	right.style.display="block";
	left.style.display="none";
	one2.style.zIndex="99";
}

var num1 = 0;
var move = function(){
	num1++;
	if(num1==3){
		twoAll.style.left="-488px";
		right.style.display="none";
		left.style.display="block";
		one2.style.zIndex="101";
	}
	if(num1==6){
		twoAll.style.left="0";
		right.style.display="block";
		left.style.display="none";
		one2.style.zIndex="99";
		num1=0;
	}
	for(var i=0;i<maskAll.length;i++){
		maskAll[i].classList.remove("active");
		bigAll[i].classList.remove("active");
	}
	maskAll[num1].classList.add("active");
	bigAll[num1].classList.add("active");
}
var st = setInterval(move,2000);
box.onmouseover=function(){
	clearInterval(st);
}
box.onmouseout=function(){
	st = setInterval(move,2000);
}

//失败方法：
//
// var num1 = 0;
// var num2 = 0;
// var move = function(){
// 	num1++;
// 	if(num1==mask.length){
// 		twoAll.style.left="-488px";
// 		right.style.display="none";
// 		left.style.display="block";
// 		one2.style.zIndex="101";
// 		// var s2 = setInterval(move2,2000);
// 		num1=0;
// 	}
// 	for(var i=0;i<mask.length;i++){
// 		mask[i].classList.remove("active");
// 		big[i].classList.remove("active");
// 	}
// 	mask[num1].classList.add("active");
// 	big[num1].classList.add("active");
// }
// var move2 = function(){
// 	num2++;
// 	if(num2==mask2.length){
// 		twoAll.style.left="0";
// 		right.style.display="block";
// 		left.style.display="none";
// 		one2.style.zIndex="99";
// 		num2=0;
// 	}
// 	for(var i=0;i<mask2.length;i++){
// 		mask2[i].classList.remove("active");
// 		big2[i].classList.remove("active");
// 	}
// 	mask2[num2].classList.add("active");
// 	big2[num2].classList.add("active");
// }
// var s1 = setInterval(move,2000);
// twoAll.onmouseover=function(){
// 	clearInterval(s1);
// 	clearInterval(s2);
// }	
	

//轮播图开始
var bannerImg = document.querySelectorAll(".banner-img a");
var dian = document.querySelectorAll(".dian li");
var banner = document.querySelector(".banner");
var bgcolor=["#3181d6","#84CEF1","#D5D5D5","#1F92ED","#2AB9FF","#1D1C21"];
dian.forEach(function(value,index){
	value.onmouseover=function(){
		for(var i=0;i<dian.length;i++){
			dian[i].classList.remove("active");
			bannerImg[i].classList.remove("active");
		}
		dian[index].classList.add("active");
		bannerImg[index].classList.add("active");
		banner.style.background=bgcolor[index];
		num=index;
	}
})
var num = 0;
var move1 = function(){
	num++;
	if(num==dian.length){
		num=0;
	}
	for(var i=0;i<dian.length;i++){
		dian[i].classList.remove("active");
		bannerImg[i].classList.remove("active");
	}
	dian[num].classList.add("active");
	bannerImg[num].classList.add("active");
	banner.style.background=bgcolor[num];
}
var s1 = setInterval(move1,3000);
banner.onmouseover=function(){
	clearInterval(s1);
}
banner.onmouseout=function(){
	s1 = setInterval(move1,3000);
}
// 轮播图结束


// 最顶部搜索栏开始

var headSearch = document.querySelector(".head-search");
window.onscroll=function(){
	var obj=document.body.scrollTop==0?document.documentElement:document.body;
	if(obj.scrollTop>500){
		headSearch.style.top=0;
	}else{
		headSearch.style.top="-50px";
	}
}
// 最顶部搜索栏结束


// 页面右部导航开始
var toTop = document.querySelector(".b3");
toTop.onclick=function(){
	var obj = document.body.scrollTop==0?document.documentElement:document.body;
	animate(obj,{scrollTop:0},300);
}
// 页面右部导航结束
 

// 页面左侧导航开始
var leftBar = document.querySelector(".left-bar");
var btn = document.querySelectorAll(".left-bar a");
var content = document.querySelectorAll(".life");
var toTop2 = document.querySelector(".bar9");
var obj;
window.addEventListener("scroll",function(){
	 obj = document.body.scrollTop==0?document.documentElement:document.body;
	 if(obj.scrollTop>500){
	 	leftBar.style.cssText="width:35px;height:333px";
	 }else{
	 	leftBar.style.cssText="width:0;height:0";
	 }
});
btn.forEach(function(value,index){
	value.onclick=function(){
		var height=content[index].offsetTop-60;
		animate(obj,{scrollTop:height});
	}
});
var colorArr=["#ea5f8d","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#ff0036"];
window.addEventListener("scroll",function(){
	for(var i=0;i<content.length;i++){
		if(obj.scrollTop>=content[i].offsetTop-200){
			for(var j=0;j<content.length;j++){
				btn[j].style.background="";
			}
			btn[i].style.background=colorArr[i];
		}
	}
});
toTop2.onclick=function(){
	animate(obj,{scrollTop:0},300);
}
// 页面左侧导航结束