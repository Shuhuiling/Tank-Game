var can1 = document.getElementById("canvas1");
var ctx1 = can1.getContext('2d');

var gameContext = new levelManagerObj();
gameContext.init(levelConfig1);

var tank = new tankObj();
tank.init(gameContext);

// var alTank1 = new alTank();
// alTank1.init();
// alTank1.x = 0;
// alTank1.y = 0;
 // var alTank2 = new alTank();
 // alTank2.init();
 // alTank2.x = 530;
 // alTank2.y = 0;

var deltaTime = 0;
var lastTime = Date.now();

var bulletManager = new bulletmanagerObj();

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
		case 13:
			var bullet = new bulletObj();
			bullet.init(tank,gameContext);
			bulletManager.addBullet(bullet);
			break;
		default:
		 	tank.direction =0;
	}		
	if(e.keyCode >= 37 && e.keyCode <= 40){
		tank.isRun = true;
	}
	e.preventDefault();
}

window.onkeyup = function(e){
		var e = e || window.event;
		if(e.keyCode >= 37 && e.keyCode <= 40){
			tank.isRun = false;
		}
	}

var render = function(){
	window.requestAnimationFrame(render);
	var nowTime = Date.now();
	deltaTime = nowTime - lastTime;
	lastTime = nowTime;
	// console.log(deltaTime);
	ctx1.clearRect(0,0,800,600);
	
	// bg.drawBlank(tempBg1);
	// 绘制砖块对象
	gameContext.drawLevel();
	
	ctx1.save();
	tank.drawTank();
	// alTank1.draw();
	// alTank2.draw();
	ctx1.restore();
	
	bulletManager.drawBullet(deltaTime);
};
render();

