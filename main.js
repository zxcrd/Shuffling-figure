window.onload = function(){
	var index=0;//图片索引	
	var allA = document.getElementsByTagName("a");
	//第一个按钮默认是绿色
	allA[0].style.backgroundColor = "aquamarine";
	var sondiv = document.getElementsByClassName("sondiv")[0];
	//给所有的按钮绑定单击事件，点击哪个按钮就滑到哪个图片
	for(var i=0; i<allA.length; i++){
		allA[i].num = i;//i是按钮索引
		allA[i].onclick = function(){
			clearInterval(timer2);
			//修改所有的按钮颜色为粉色，被点击的按钮为绿色
			for(var j=0; j<allA.length; j++){
				allA[j].style.backgroundColor = "#FF69B4"
				allA[this.num].style.backgroundColor ="aquamarine";
				//给图片切换加上滑动效果
				var distance= -300*this.num;
				clearInterval(timer);
				index = this.num;			
				var timer = setInterval(function(){
					//判断向左滑还是向右滑
					if(sondiv.offsetLeft>distance){
						//左滑
						sondiv.style.left =sondiv.offsetLeft -10+"px";						
					}
					if(sondiv.offsetLeft<distance){
						//右滑
						sondiv.style.left =sondiv.offsetLeft +10+"px";
					}
					//到达目标位置
					if(sondiv.offsetLeft==distance){
						autoChange();						
						clearInterval(timer);	
					}					
				},20)
			}
		}	
	}

//	轮播图
	var timer2;
	autoChange();
	function autoChange(){
		timer2 = setInterval(function(){
		index++;
		var distance= -300*index;
		var timer1 = setInterval(function(){
			sondiv.style.left =sondiv.offsetLeft -10+"px";
			if(sondiv.offsetLeft==distance){
				setA();
				clearInterval(timer1);
			}			
			
			if(sondiv.offsetLeft<distance){
				sondiv.style.left= distance+"px";
			}
	
		},20)
	},2000)	
	}
	
//设置按钮的颜色样式
	function setA(){
		if(index>=5){
			index=0;
			sondiv.style.left= 0+"px";			
		}
		for(var j=0; j<allA.length; j++){
			allA[j].style.backgroundColor = "#FF69B4"
		}
		allA[index].style.backgroundColor ="aquamarine";	
	}
}
