// 在800*600的平面内，给定坦克的初始位置(370，540）
// 按上下左右键控制坦克的方向，不按键不动，按键才动，碰壁转向;
// 图片使用rotate，优化性能
var tankObj = function() {
	this.x;
	this.y;
	this.speed;
	this.tankBody = new Image();
	this.direction;
	this.isRun;
	
}
tankObj.prototype.init = function() {
	this.x = 300;
	this.y = 540;
	this.speed = 1;
	this.tankBody.src = "img/enemy3D.jpg";
	this.direction = 0;// 0,1,2,3 ： 上，右，下，左
	this.isRun = false;
	
}
tankObj.prototype.drawTank = function() {
	if(this.isRun){
		var speed = this.speed;
		if(this.direction%2 == 0){
			// 0，2 y值在变化
			speed = this.direction == 0 ? -speed : speed;
			this.y += speed;
			if(this.y <= 0) this.y =0;
			if(this.y >= 540) this.y =540; 
		}else{
			// 1，3 x值在变化
			speed = this.direction == 1 ? speed : -speed;
			this.x += speed;
			if(this.x <= 0) this.x =0;
			if(this.x >= 540) this.x =540;
		}
	}
	ctx1.translate(this.x+30,this.y+30);
	ctx1.rotate((Math.PI / 180) * (90*this.direction));
	ctx1.translate(-this.x-30,-this.y-30);
	ctx1.drawImage(this.tankBody,this.x,this.y);
}


