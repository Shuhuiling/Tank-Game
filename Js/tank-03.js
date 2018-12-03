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
	this.x = 370;
	this.y = 540;
	this.speed = 1;
	this.tankBody.src = "img/enemy3D.jpg";
	this.direction = 0;
	this.isRun = false;
}
tankObj.prototype.drawTank = function() {
	if(this.isRun){
		var speed = this.speed;
		// 0,1,2,3 分别代表 上，右，下，左
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
			if(this.x >= 740) this.x =740;
		}
	}
	ctx1.translate(this.x+30,this.y+30);
	ctx1.rotate((Math.PI / 180) * (90*this.direction));
	ctx1.translate(-this.x-30,-this.y-30);
	ctx1.drawImage(this.tankBody,this.x,this.y);

	/*
	if(this.dir_l == 1){
		this.x -= this.speed;
		if(this.x <= 0) this.x =0;
		// 通过旋转画布的方式 替代图片资源的加载
		ctx1.translate(this.x+30,this.y+30);
		ctx1.rotate((Math.PI / 180) * 270);
		ctx1.translate(-this.x-30,-this.y-30);
		// this.tankBody.src = "img/enemy3R.jpg";
	}
	if(this.dir_r == 1){
		this.x += this.speed;
		if(this.x >= 740) this.x =740;
		ctx1.translate(this.x+30,this.y+30);
		ctx1.rotate((Math.PI / 180) * 90);
		ctx1.translate(-this.x-30,-this.y-30);
		// this.tankBody.src = "img/enemy3L.jpg";
	}
	if(this.dir_u == 1){
		this.y -= this.speed;
		if(this.y <= 0) this.y =0;
		// this.tankBody.src = "img/enemy3D.jpg";
	}
	if(this.dir_d == 1){
		this.y += this.speed;
		if(this.y >= 540) this.y =540;
		ctx1.translate(this.x+30,this.y+30);
		ctx1.rotate((Math.PI / 180) * 180);
		ctx1.translate(-this.x-30,-this.y-30);
		// this.tankBody.src = "img/enemy3U.jpg";
	}
	*/
}


