//判断限制数字
$("#text").on("keydown keyup",function(){
    var val = $(this).val().length;
    $(".num span").text(function(){
        return val<10?"0"+val:val;
    });
    if(val>500){
        val = 500;
        $(this).val(function(i,value){
            return value.slice(0,500);
        })
    }
});

//按钮操作
$(".check-wait").click(function(){
    $(".add").slideUp(300);
    $(".done").slideUp(300);
    $(".wait").delay(300).slideDown(300);
})
$(".check-done").click(function(){
    $(".add").slideUp(300);
    $(".wait").slideUp(300);
    $(".done").delay(300).slideDown(300);
    $(".close").css("display","none");

})
$("#addto").click(function(){
    $(".done").slideUp(300);
    $(".wait").slideUp(300);
    $(".add").delay(300).slideDown(300);
})

//点击提交
$("#submit").click(function(){
    var val = $("#text").val();
    if(val===""){
        alert("请输入内容");
        return;
    }
    var data = getData();
    var date = new Date();
    var time = date.getTime();
    data.push({text:val,time:time,isDone:false,isStar:false})
    saveData(data);
    $("#text").val("");
    $(".num span").text("0");
    reWrite();
})
//得到数据
function getData(){
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else{
        return [];
    }
}
//保存数据
function saveData(data){
    localStorage.todo=JSON.stringify(data);
}
//跳转
$(".close").click(function(){
    $(".add").slideUp(300);
    $(".wait").delay(300).slideDown(300);
})
//重绘页面
function reWrite(){
    $(".item ul").empty();
    var data = getData();
    var str1="",str2="";
    $(data).each(function(index,value){
        if(value.isDone===false){
            str1+=`<li id="${index}">
                    <input type="checkbox" class="check">
                    <p>${value.text}</p>
                    <time>${time(value.time)}</time>`
            if(value.isStar){
                str1+=`<i class="icon active">&#xe627;</i></li>`;
            }else{
                str1+=`<i class="icon">&#xe627;</i></li>`;
            }
        }else{
            str2+=` <li id="${index}">
                        <input type="checkbox" class="check">
                        <p>${value.text}</p>
                        <time>${time(value.time)}</time>`
            if(value.isStar){
                str2+=`<i class="icon active">&#xe627;</i></li>`;
            }else{
                str2+=`<i class="icon">&#xe627;</i></li>`;
            }
        }
        $(".wait ul").html(str1);
        $(".done ul").html(str2);
    })
}

//时间
function time(ms){
    var date = new Date();
    date.setTime(ms);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    return year+"/"+month+"/"+day+" "+hours+":"+mins+":"+seconds;
}
//移动到已完成
$("#move").click(function(){
    var data=getData();
    $(".wait ul li").each(function(index,ele){
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDone=true;
        }
    })
    saveData(data);
    reWrite();
});

//清除
$("#clear").click(function(){
    var data=getData();
    $(".done ul li").each(function(index,value){
        if($(this).find("input").prop("checked")){
            var index =$(this).attr("id");
            data[index].isDelete=true;
        }
    })
    data=data.filter(function(ele){
        return !ele.isDelete;
    })
    saveData(data);
    reWrite();
});

//星星点击
$(".wait ul").on("click","i",function(){
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    saveData(data);
    reWrite();
})

