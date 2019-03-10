var can1 = document.getElementById("canvas1");
var ctx1 = can1.getContext('2d');

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
		switch(e.keyCode){
			case 38:
				tank.direction =0;
				break;
			case 39:
				tank.direction =1;
				break;
			case 40:
				tank.direction =2;
				break;
			case 37:
				tank.direction =3;
				break;
			default:
			 	tank.direction =0;
		}		
		if(e.keyCode >= 37 && e.keyCode <= 40){
			tank.isRun = true;
		}
		// 上前方有障碍物
		if(tank.x >= (800-trouble.wid-60) && tank.y <= trouble.y+trouble.hei){
			// 当方向继续向上时，坦克不动
			if(tank.direction == 0){
				tank.isRun = false;
			}
		}
		// 右边有障碍物
		if(tank.x >= 800-trouble.wid-60){
			if(tank.direction == 1){
				tank.isRun = false;
			}
		}

		
		
		e.preventDefault();
	}
	window.onkeyup = function(e){
		var e = e || window.event;
		if(e.keyCode >= 37 && e.keyCode <= 40){
			tank.isRun = false;
		}
	}
};
render();