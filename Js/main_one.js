var can1 = document.getElementById("canvas1");
var ctx1 = can1.getContext('2d');

// var img = new Image();
// img.src="img/background.jpg";
var tank = new tankObj();
tank.init();

var render = function(){
	window.requestAnimationFrame(render);
		
	ctx1.clearRect(0,0,800,600);
	// drawBackground();
	ctx1.save();
	tank.drawTank();
	ctx1.restore();
	// 键盘监听
	window.onkeydown = function(e){
		var e = e || window.event;
		if(e.keyCode == 37){
			e.preventDefault(); // 拦截滚动条事件
			tank.dir_l = 1; // 左箭头
		}
		if(e.keyCode == 39){
			e.preventDefault();
			tank.dir_r = 1; // 右箭头
		}
		if(e.keyCode == 38){
			e.preventDefault();
			tank.dir_u = 1; // 上箭头
		}	
		if(e.keyCode == 40){
			e.preventDefault();
			tank.dir_d = 1; // 下箭头
		}		
	}
	window.onkeyup = function(e){
		var e = e || window.event;
		if(e.keyCode == 37){
			tank.dir_l = 0; // 左箭头
		}
		if(e.keyCode == 39){	
			tank.dir_r = 0; // 右箭头
		}	
		if(e.keyCode == 38){		
			tank.dir_u = 0; // 上箭头
		}	
		if(e.keyCode == 40){	
			tank.dir_d = 0; // 下箭头
		}
	}
	
};
render();