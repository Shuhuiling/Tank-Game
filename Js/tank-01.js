// 圆换成坦克
// 坦克来回运动
// 键盘监听：圆在前进过程中，按J键，实现反向移动;
var tankObj = function (){
	this.speed ;
	this.x;
	this.y;
	this.tankBody = new Image();
	this.mov_direction;
}

tankObj.prototype.init = function (){
	this.speed = 1;
	this.x = 0;
	this.y = 50;
	this.tankBody.src = "img/enemy3L.jpg";
	this.mov_direction= 0;
}

tankObj.prototype.drawTank = function (){	
	if(this.mov_direction == 0){
		this.x += this.speed;
		this.tankBody.src = "img/enemy3L.jpg";
		if(this.x >= 300){
			this.mov_direction = 1;
		}
	}
	else if(this.mov_direction == 1){
		this.x -= this.speed;
		this.tankBody.src = "img/enemy3R.jpg";
		if(this.x <= 0){
			this.mov_direction = 0;
		}
	}
	ctx1.drawImage(this.tankBody,this.x,this.y);	
}

var tank = new tankObj();
tank.init();

var render = function() {
	window.requestAnimationFrame(render);

	ctx1.clearRect(0,0,1500,400);
	tank.drawTank();

	window.onkeydown = function(e){
		var e = e || window.event;
		if(e.keyCode == 74){
			tank.mov_direction = tank.mov_direction==0 ? 1 : 0;
		}
	}
};
render();

