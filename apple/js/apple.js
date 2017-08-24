// 轮播图开始
var masks = document.querySelectorAll(".spot li .mask");
var banner = document.querySelectorAll(".banner-box .banner");
var spots = document.querySelectorAll(".spot li");
var num = 0;
var num1 = 0;
var z = 10;
var now = 0;
var next = 0;
var now2 = 0;
function move(){
	if(num===masks.length){
		num=0;
	}
	masks[num].classList.add("mask-all");
	num++;
}
var st = setInterval(move,2000)
masks.forEach(function(mask,index){
	mask.addEventListener("animationend",function(){
		next = now+1;
		if(next===banner.length){
			next=0;
		}
		banner[next].style.zIndex=z++;
		banner[now].classList.add("left-out")
		banner[next].classList.add("left-in");
		mask.classList.remove("mask-all");
		now=next;
	})
});
banner.forEach(function(ele){
	ele.addEventListener("animationend",function(){
		ele.classList.remove("left-in");
		ele.classList.remove("left-out");
		ele.classList.remove("right-in");
		ele.classList.remove("right-out");
	})
})
spots.forEach(function(ele,index){
	ele.onclick=function(){
		clearInterval(st);
		if(index===now2){
			return;
		}
		if(index>now2){
			banner[now2].classList.add("left-out")
			banner[index].classList.add("left-in");
		}else if(index<now2){
			banner[index].classList.add("right-in");
			banner[now2].classList.add("right-out");
		}
		spots[now2].style.background="";
		spots[index].style.background="#808080";
		banner[index].style.zIndex=z++;
		now2=index;
	}
})
// 轮播图结束
// 底部导航开始
var h3 = document.querySelectorAll(".nav-content h3");
var jia = document.querySelectorAll(".nav-content h3 span");
var menu = document.querySelectorAll(".nav-content ul");
var height= [];
var flag=true;
for(var i=0;i<menu.length;i++){
	var heighter = menu[i].querySelectorAll("li").length*24;
	height.push(heighter); 
}
h3.forEach(function(value,index){
	value.onclick=function(){
		if(flag){
			menu[index].style.height=height[index]+"px";
			jia[index].style.transform="rotate(45deg)"
		}else{
			menu[index].style.height="";
			jia[index].style.transform="";
		}
		flag=!flag;
	}
});
// 底部导航结束
// 顶部搜索栏开始
var nav = document.querySelector("#nav-search");
var box = document.querySelector(".search-box");
var reset = document.querySelector("#reset");
nav.onclick=function(){
	box.style.display="block";
	nav.style.display="none";
	reset.innerHTML="X";
	reset.onclick=function(){
		box.style.display="none";
		nav.style.display="block";
		reset.innerHTML="&#xe64f;";
	}
}
// 顶部搜索栏结束