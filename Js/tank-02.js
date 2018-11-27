// 坦克的初始位置在（500，50）
// 按住左键持续往左运动，直到x<=为0，停止；注意：不按不动
// 按住右键持续往右，直到x>=1000，停止；注意：不按不动
// 问题1：按一下右键的时候，下方的滚动条也会向右移动
// 问题2：长按时，动画出现卡顿:onkeydown + onkeyup，搞清楚长按时，多久触发一次
var tankObj = function() {
	this.x;
	this.y;
	this.speed;
	this.tankBody = new Image();
	this.dir_l;
	this.dir_r;
}
tankObj.prototype.init = function() {
	this.x = 500;
	this.y = 100;
	this.speed = 1;
	this.tankBody.src = "img/enemy3L.jpg";
	this.dir_l = 0;
	this.dir_r = 0;
}
tankObj.prototype.drawTank = function() {
	if(this.dir_l == 1){
		this.x -= this.speed;
		if(this.x <= 0) this.x =0;
		this.tankBody.src = "img/enemy3R.jpg";
	}
	if(this.dir_r == 1){
		this.x += this.speed;
		if(this.x >= 1000) this.x =1000;
		this.tankBody.src = "img/enemy3L.jpg";
	}

	ctx1.drawImage(this.tankBody,this.x,this.y);	
}

var tank = new tankObj();
tank.init();

var render = function(){
	window.requestAnimationFrame(render);
	
	ctx1.clearRect(0,0,1500,400);
	tank.drawTank();
	window.onkeydown = function(e){
		var e = e || window.event;
		if(e.keyCode == 37){
			e.preventDefault(); // 拦截滚动条事件
			tank.dir_l = 1; // 左箭头
			startTime = new Date().valueOf();
		}
		if(e.keyCode == 39){
			e.preventDefault();
			tank.dir_r = 1; // 右箭头
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

	}
};
render();