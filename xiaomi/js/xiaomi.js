// 轮播图开始
var banner = document.querySelectorAll(".banner a");
var dian = document.querySelectorAll(".dian li");
var box = document.querySelector(".banner");
dian.forEach(function(value,index){
	value.onmouseover=function(){
		for(var i=0;i<dian.length;i++){
			dian[i].classList.remove("active");
		}
		dian[index].classList.add("active");
	}
	value.onclick=function(){
		for(var i=0;i<dian.length;i++){
			// dian[i].classList.remove("active");
			banner[i].classList.remove("active");
		}
		// dian[index].classList.add("active");
		banner[index].classList.add("active");
		num=index;
	}
})
var num = 0;
var move = function(){
	num++;
	if(num==dian.length){
		num=0;
	}
	for(var i=0;i<dian.length;i++){
			dian[i].classList.remove("active");
			banner[i].classList.remove("active");
		}
		dian[num].classList.add("active");
		banner[num].classList.add("active");
}
var s1 = setInterval(move,3000);
box.onmouseover=function(){
	clearInterval(s1);
};
box.onmouseout=function(){
	s1 = setInterval(move,3000);
};
// 轮播图结束

// 明星单品开始
var starBox = document.querySelector(".starButtom ul");
var right = document.querySelector(".jt .right");
var left = document.querySelector(".jt .left");
var num1 = 0;
function move2(){
	num1++;
	if(num1===3){
		starBox.style.marginLeft="-1226px";
		right.classList.remove("active");
		right.classList.remove("hover");
		left.classList.add("hover");
		left.classList.add("active");
	}else if(num1===6){
		starBox.style.marginLeft="0";
		left.classList.remove("active");
		left.classList.remove("hover");
		right.classList.add("hover");
		right.classList.add("active");
		num1=0;
	}
}
var s2 = setInterval(move2,2000);
right.onclick=function(){
	num1=2;
	move2();
};
left.onclick=function(){
	num1=5;
	move2();
}
// 明星单品结束

// 为你推荐开始
var tjBox = document.querySelector(".recommendBottom ul");
var right2 = document.querySelector(".jt2 .right2")
var left2 = document.querySelector(".jt2 .left2");
var num2 = 0;
function move3(){
	num2++;
	if(num2===3){
		tjBox.style.marginLeft="-1226px";
		right2.classList.remove("active2");
		right2.classList.remove("hover2");
		left2.classList.add("hover2");
		left2.classList.add("active2");
	}else if(num2===6){
		tjBox.style.marginLeft="0";
		left2.classList.remove("active2");
		left2.classList.remove("hover2");
		right2.classList.add("hover2");
		right2.classList.add("active2");
		num2=0;
	}
}
var s3 = setInterval(move3,2000);
right2.onclick=function(){
	num2=2;
	move3();
};
left2.onclick=function(){
	num2=5;
	move3();
}
// 为你推荐结束

// 内容开始
var all = document.querySelectorAll(".content-list .li-all");
all.forEach(function(ele){
	xiaomi(ele);
});
function xiaomi(name){
	var dian2 = name.querySelectorAll(".dian2 li span");
	var itemBox = name.querySelector(".item-list");
	var left3 = name.querySelector(".li-all .left");
	var right3 = name.querySelector(".li-all .right");
	var now = 0;
	dian2.forEach(function(ele,index){
		ele.onclick=function(){
			for(var i=0;i<dian2.length;i++){
				dian2[i].classList.remove("active3");
			}
			var toLeft = -index*296;
			itemBox.style.marginLeft=toLeft+"px";
			dian2[index].classList.add("active3");
			now=index;
		}
	});
	right3.onclick=function(){
		if(now===dian2.length-1){
			return;
		}
		now++;
		for(var i=0;i<dian2.length;i++){
			dian2[i].classList.remove("active3");
		};
		itemBox.style.marginLeft=-now*296+"px";
		dian2[now].classList.add("active3");
	}
//右击完num已经赋了相应的值  如点到最后一张，num已经等于2;
	left3.onclick=function(){
		if(now===0){
			return;
		};
		now--;
		// console.log(num)
		for(var i=0;i<dian2.length;i++){
			dian2[i].classList.remove("active3");
		}
		itemBox.style.marginLeft=-now*296+"px";
		dian2[now].classList.add("active3");
	}
}
// 内容结束