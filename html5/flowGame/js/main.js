var flowNum = 0, moneyNum = 0, fraction, winH = $(window).height();
//刷新更换app
var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
function randomApps() {
	function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1; 
	}
	var arrRdm = arr.sort(randomsort); // 打乱生成的新数组
	console.log(arrRdm);
	//新数组取值更换app图标
	for (var i=0; i<4; i++) {
		$("#app"+(i+1)).find("img").attr("src", "img/app_"+arrRdm[i]+".png");
	}
}
randomApps();


function moveOn (e, oncomplete, distance, time) {
	if (typeof e === "string") {e = document.getElementById(e);}
	if (!time) { time = 1500;}
	if (!distance) {distance = 65;}

	//使用Math.tan作为一个简单的缓动函数来创建非线性动画
	//一开始比较慢，后面加速
	var start = (new Date()).getTime();
	animate();

	function animate () {
		var elapsed = (new Date()).getTime() - start;  //消耗的时间
		fraction = elapsed / time;

		if (fraction < 1) {
			var x = (distance*winH/100) * Math.tan(fraction*1.2) / 2.58 + 2;  //计算元素的位置
			e.style.bottom = x/winH*100 + "%";
			var animateExec = setTimeout(animate, Math.min(25, time-elapsed));
			//添加触摸重置事件
			e.onmousedown = function() {   //需要改成touchstart
				//根据点击时元素的位置进行计算
				var runDistance = parseFloat(this.style.bottom).toFixed(2);
				var savefraction = ((distance-runDistance) / distance).toFixed(2); //离起点越近阻止流量越多
				if( !$(this).hasClass("clicked") ) {  //防止重复计算
					flowNum += 5 * savefraction; //单个app总流量为5M
					moneyNum += 5 * 2 * savefraction; //每M流量暂计2元
				}
				$(".flow").html( flowNum.toFixed(2) );
				$(".money").html( moneyNum.toFixed(2) );
				//停止移动
				clearTimeout(animateExec);
				$(this).addClass('clicked');
			}
		} else {
			e.style.bottom = distance + "%";
			$(this).addClass('clicked');
			if (oncomplete) { oncomplete(e);}
		}
	}
}

var exec, state;
function randomPick() {
	var randomNum = Math.floor(Math.random() * 4) + 1; //1-4
	var liId = "app" + randomNum;
	state = $("#"+liId).data("animated");
	//改变属性避免重复执行
	if(state == false) {
		moveOn(liId, null, 65, 1500);
		$("#"+liId).data("animated", true);
	} 
	
	exec = setTimeout(randomPick,150);
}

$("#start-game").on("tap", function() {
	//开始游戏
	$(".welcome-page,.mask").addClass("hide");
	randomPick();
	$(".statistics").removeClass("hide");

	//停止游戏
	setTimeout(function(){
		clearTimeout(exec);
		$(".result").removeClass("hide");
	},4000);
})

//按钮作用
$("#share").on("tap", function(){
	$(".share-page").removeClass("hide");
})
$(".share-page").on("tap", function(){
	$(this).addClass("hide");
})

$("#replay").on("tap", function(){
	window.location.reload();
})

