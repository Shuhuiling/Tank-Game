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
tankObj.prototype.getBox = function(dir){
	var x = this.x;
	var y = this.y;
	var speed = this.speed;
		if(dir%2 == 0){
			// 0，2 y值在变化
			speed = dir == 0 ? -speed : speed;
			y += speed;
			if(y <= 0) y =0;
			if(y >= 540) y =540; 
		}else{
			// 1，3 x值在变化
			speed = dir == 1 ? speed : -speed;
			x += speed;
			if(x <= 0) x =0;
			if(x >= 540) x =540;
		}
	

	var box1 = []; // box1[0,1,2,3]： 左 右 上 下
	box1[0] = x;
	box1[1] = box1[0] + eachSize;
	box1[2] = y;
	box1[3] = box1[2] + eachSize;
	return box1;
}

tankObj.prototype.drawTank = function() {
    var box1 = this.getBox(tank.direction);
	var isCollison = checkCollision(box1,bg1); // 坦克和障碍物的碰撞检测
	
	if(this.isRun && isCollison){
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
	// ctx1.drawImage(this.tankBody,this.x,this.y);
	ctx1.beginPath();
	ctx1.rect(this.x,this.y,eachSize,eachSize);
	ctx1.fillStyle = "black";
	ctx1.fill();
	ctx1.closePath();
}


